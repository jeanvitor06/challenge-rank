import * as appRepository from '../repositories/app';
import * as playStore from 'google-play-scraper';

export async function getApps(): Promise<void> {
  let cont = 1;

  for (let cat of categories) {

    let apps = await playStore.list({
      category: cat,
      collection: playStore.collection.GROSSING,
      num: 5
    });

    apps = apps.map(a => {
      return {
        name: a.title,
        developerCompany: a.developer,
        rating: a.score,
        icon: a.icon,
        value: a.price,
        bundleId: a.appId,
        categoryName: cat
      };
    });

    await appRepository.insert(apps);
    console.log(`${categories.length}/${cont++}`, cat);
  }
}

const categories = [
  'ANDROID_WEAR',
  'ART_AND_DESIGN',
  'AUTO_AND_VEHICLES',
  'BEAUTY',
  'BOOKS_AND_REFERENCE',
  'BUSINESS',
  'COMICS',
  'COMMUNICATION',
  'DATING',
  'EDUCATION',
  'ENTERTAINMENT',
  'EVENTS',
  'FINANCE',
  'FOOD_AND_DRINK',
  'HEALTH_AND_FITNESS',
  'HOUSE_AND_HOME',
  'LIBRARIES_AND_DEMO',
  'LIFESTYLE',
  'MAPS_AND_NAVIGATION',
  'MEDICAL',
  'MUSIC_AND_AUDIO',
  'NEWS_AND_MAGAZINES',
  'PARENTING',
  'PERSONALIZATION',
  'PHOTOGRAPHY',
  'PRODUCTIVITY',
  'SHOPPING',
  'SOCIAL',
  'SPORTS',
  'TOOLS',
  'TRAVEL_AND_LOCAL',
  'VIDEO_PLAYERS',
  'WEATHER',
  'GAME',
  'GAME_ACTION',
  'GAME_ADVENTURE',
  'GAME_ARCADE',
  'GAME_BOARD',
  'GAME_CARD',
  'GAME_CASINO',
  'GAME_CASUAL',
  'GAME_EDUCATIONAL',
  'GAME_MUSIC',
  'GAME_PUZZLE',
  'GAME_RACING',
  'GAME_ROLE_PLAYING',
  'GAME_SIMULATION',
  'GAME_SPORTS',
  'GAME_STRATEGY',
  'GAME_TRIVIA',
  'GAME_WORD',
  'FAMILY',
  'FAMILY_ACTION',
  'FAMILY_BRAINGAMES',
  'FAMILY_CREATE',
  'FAMILY_EDUCATION',
  'FAMILY_MUSICVIDEO',
  'FAMILY_PRETEND'
];