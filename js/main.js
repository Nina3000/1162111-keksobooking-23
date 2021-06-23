//Функция, возвращающая случайное целое число из переданного диапазона включительно.

const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0) {
    console.log('Числа должны быть положительными. Минимальное может быть нулем.');
  } else if (min === max || (max - min) === 1) {
    console.log('Разница между значениями чисел должна быть равной двум или больше.');
  } else {
    const random = Math.random();
    const delta = (max - min);
    const multiply = random * delta;
    const round = Math.round(multiply);
    const num = round + min;
    return(num);
  }
}

getRandomNumber(7, 17);

//src https://www.joshwcomeau.com/snippets/javascript/random/

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
const getRandomDecimal = (min, max, fix) => {
  if (min < 0 || max < 0) {
    console.log('Числа должны быть положительными. Минимальное может быть нулем.');
  } else if (min === max || (max - min) === 1) {
    console.log('Разница между значениями чисел должна быть равной двум или больше.');
  } else {
    const random = Math.random();
    const delta = (max - min);
    const multiply = random * delta;
    const adding = multiply + min;
    const fixing = adding.toFixed(fix);
    const num = Number(fixing);
    return(num);
  }
}
getRandomDecimal(7, 17, 1);
//https://javascript.info/number


const getRandomArrayElement = (elements) => {
  return elements[getRandomNumber(0, elements.length - 1)];
};

const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const CHECKINS = ['12:00', '13:00', '14:00'];
const CHECKOUTS = ['12:00', '13:00', '14:00'];
const IMGS = [];

const SIMILAR_OFFER_COUNT = 10;


const createOffer = () => {
  const randomAvatar = getRandomNumber (0, 11);
  let ava;
  if (randomAvatar !== 10) {
    ava = '0' + randomAvatar;
  }

 // return {
 //   author: {
  //    avatar: 'img/avatars/user' + ava + '.png'
  //  },
    offer: {
    title: '',
//    address: '',
  //  price: getRandomNumber(),
  //  type: getRandomArrayElement(TYPES),
    //rooms: getRandomNumber(),
   // quests: getRandomNumber(),
   // checkin: getRandomArrayElement(CHECKINS),
   // checkout: getRandomArrayElement(CHECKOUTS),
  // features: [],
   // description: '',
   // photos: [],
 // },
 //   location: {
   //   lat: getRandomDecimal(35.65000, 35.70000, 5),
    //  lng: getRandomDecimal(139.70000, 139.80000, 5)
  //}
 // }
//}
//}
}

const similarOffers = new Array(SIMILAR_OFFER_COUNT).fill(null).map(() => createOffer());
