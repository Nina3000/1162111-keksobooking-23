import {similarOffers} from './createOffers.js';
const map = document.querySelector('#map-canvas');
const createCard = (data) => {
  const card = document.querySelector('#card').content.cloneNode(true);


  const imgSrc = card.querySelector('.popup__avatar');
  imgSrc.src = data.author.avatar;
return card;
};
map.append(createCard(similarOffers[0]));
