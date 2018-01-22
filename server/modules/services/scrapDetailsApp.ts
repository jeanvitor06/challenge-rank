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
      category: apps.categoryName,
      developer: detailsInfo.find('span[itemprop="name"]').text(),
      icon: detailsInfo.find('img.cover-image').attr('src'),
      value: detailsInfo.find('meta[itemprop=price]').attr('content'),
      bundleId: a.slice(23, a.length),
      title: detailsInfo.find('.document-title').text().trim(),
      rating: parseFloat($('.rating-box').find('div.score').text().replace(',', '.')) || 0
    };
  });

  return Promise.all(allAppInfo);
}

export async function scrapDetailsApp(appsUrl: any): Promise<any> {
  let apps = [];
  for (let app of appsUrl) {
    //console.log(await getAppInfo(app));
    apps.push(await getAppInfo(app));
  }
  return apps;
}