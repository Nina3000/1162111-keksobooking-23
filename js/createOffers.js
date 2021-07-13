import {getRandomNumber, getRandomDecimal, getRandomArrayElement} from './random.js';

const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const CHECKINS = ['12:00', '13:00', '14:00'];
const CHECKOUTS = ['12:00', '13:00', '14:00'];
const IMGS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const SIMILAR_OFFER_COUNT = 10;


const createOffer = () => {
  const randomAvatar = getRandomNumber (0, 11);
  let ava;
  if (randomAvatar !== 10) {
    ava = '0' + randomAvatar;
  }
  return {
    author: {
     avatar: 'img/avatars/user' + ava + '.png'
   },
    offer: {
    title: 'Название',
    address: getRandomDecimal(35.65000, 35.70000, 5) + ' ' + getRandomDecimal(139.70000, 139.80000, 5),
  price: getRandomNumber(0, 20000),
  type: getRandomArrayElement(TYPES),
rooms: getRandomNumber(1, 3),
    guests: getRandomNumber(1, 5),
 checkin: getRandomArrayElement(CHECKINS),
 checkout: getRandomArrayElement(CHECKOUTS),
 features: FEATURES.slice(0, getRandomNumber (0, FEATURES.length - 1)),
 description: 'Описание',
 photos: IMGS.slice(0, getRandomNumber (0, IMGS.length - 1)),
 },
   location: {
   lat: getRandomDecimal(35.65000, 35.70000, 5),
  lng: getRandomDecimal(139.70000, 139.80000, 5)
}
}
};

const similarOffers = new Array(SIMILAR_OFFER_COUNT).fill(null).map(() => createOffer());

console.log(similarOffers);

export {similarOffers};
