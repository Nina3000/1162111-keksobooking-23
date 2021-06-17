//Функция, возвращающая случайное целое число из переданного диапазона включительно.

function getRandomNumber(min, max){
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
function getRandomDecimal(min, max, fix){
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
  return elements[_.getRandomNumber(0, elements.length - 1)];
};

const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const CHECKINS = ['12:00', '13:00', '14:00'];
const CHECKOUTS = ['12:00', '13:00', '14:00'];
const URLS = []

const SIMILAR_OFFER_COUNT = 10;

const randomAvatar = getRandomNumber (0, 11);
if (randomAvatar === 10) {
  ava = 10;
} else {
  ava = '' + 0 + randomAvatar;
}
}
}
const createOffer = () => {
  return {
    author = {
      avatar: 'img/avatars/user' + ava + '.png'
    }
    offer = {
    title: 'Номер',
    address: 'адрес',
    price: 4000,
    type: getRandomArrayElement(TYPES),
    rooms: 2,
    quests: 2,
    checkin: getRandomArrayElement(CHECKINS),
    checkout: getRandomArrayElement(CHECKOUTS),
    features: getRandomArrayElement(FEATURES),
    description: 'уютно',
    photos: 'url',
    location: {
      lat: '',
      lng: ''
    }
  }
  }
}
}

const similarOffers = new Array(SIMILAR_OFFER_COUNT).fill(null).map(() => createOffer());
