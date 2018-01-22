import * as cheerio from 'cheerio';
import * as rp from 'request-promise';

import { scrapDetailsApp } from './scrapDetailsApp';

const url = 'https://play.google.com';

async function getCategories(): Promise<any> {
  const categories = [];
  const body = await rp(`${url}/store/apps`);
  const $ = cheerio.load(body);

  $('.title-link').each((i, elem) => {
    categories.push({ link: elem.attribs.href, name: elem.children[0].data.trim() });
  });

  return categories;
}

async function getUrlAppDetails(category: any, quantityGetApps: number): Promise<any> {
  const appsDetails = { categoryName: category.name, detailsUrl: [] };

  const body = await rp(`${url}${category.link}`);
  const $ = cheerio.load(body);

  $('.stars-container a').each((i, elem) => {

    if (i > quantityGetApps - 1) return false; // i init 0
    appsDetails.detailsUrl.push(elem.attribs.href);

  });
  return appsDetails;
}

export async function scrap(quantityGetApps: number): Promise<any> {
  const categories = await getCategories();
  let appsUrlDetails = [];

  for (let cat of categories) {
    appsUrlDetails.push(await getUrlAppDetails(cat, quantityGetApps));
  }

  return await scrapDetailsApp(appsUrlDetails);
}