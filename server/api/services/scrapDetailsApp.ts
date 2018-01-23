import * as cheerio from 'cheerio';
import * as rp from 'request-promise';
import { Promise } from 'bluebird';

const url = 'https://play.google.com';

async function getAppInfo(apps: any): Promise<any> {

  const allAppInfo = apps.detailsUrl.map(async a => {
    const body = await rp(`${url}${a}`);
    const $ = cheerio.load(body);

    const detailsInfo = $('.details-info');

    return {
      categoryName: apps.categoryName,
      developerCompany: detailsInfo.find('span[itemprop="name"]').text(),
      icon: detailsInfo.find('img.cover-image').attr('src'),
      value: detailsInfo.find('meta[itemprop=price]').attr('content'),
      bundleId: a.slice(23, a.length),
      name: detailsInfo.find('.document-title').text().trim(),
      rating: parseFloat($('.rating-box').find('div.score').text().replace(',', '.')) || 0
    };
  });

  return Promise.all(allAppInfo);
}

export async function scrapDetailsApp(appsUrl: any): Promise<any> {
  let apps = [];
  for (let app of appsUrl) {
    apps.push(await getAppInfo(app));
  }
  console.log('Finished Scrap');
  return apps;
}