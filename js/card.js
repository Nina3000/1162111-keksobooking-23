import {similarOffers} from './createOffers.js';
const typeHouse = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};
const map = document.querySelector('#map-canvas');
const createCard = (data) => {
  const card = document.querySelector('#card').content.cloneNode(true);

  const imgSrc = card.querySelector('.popup__avatar');
  imgSrc.src = data.author.avatar;

  const address = card.querySelector('.popup__text--address');
  address.textContent = data.offer.address;


  const title = card.querySelector('.popup__title');
  title.textContent = data.offer.title;

  const price = card.querySelector('.popup__text--price');
  price.textContent = data.offer.price + '₽/ночь';

  const capacity = card.querySelector('.popup__text--capacity');
  capacity.textContent = data.offer.rooms + ' комнаты для ' + data.offer.guests + ' гостей';

  const time = card.querySelector('.popup__text--time');
  time.textContent = 'Заезд после ' + data.offer.checkin + ', выезд до ' + data.offer.checkout;

  const description = card.querySelector('.popup__description');
  description.textContent = data.offer.description;

const photoElement = card.querySelector('.popup__photos');
const photos = card.offer.photos;
photos.forEach((img) => {
  img.src = card.offer.photos[i];
})

const featureListElement = card.querySelector('.popup__features');
const features = data.offer.features;
const modifiers = features.map((feature) => `popup__feature--${feature}`);

featureListElement.querySelectorAll('.popup__feature')
.forEach((item) => {
  const modifier = item.classList[1];

  if (! modifiers.includes(modifier)) {
    item.remove();
  }
});


const housing = card.querySelector('.popup__type');
housing.textContent = typeHouse[data.offer.type];

return card;
};
map.append(createCard(similarOffers[0]));
