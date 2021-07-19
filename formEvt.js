
const form = document.querySelector('.ad-form');

const typePrice = {
  flat: 1000,
  bungalow: 0,
  house: 5000,
  palace: 10000,
  hotel: 3000
}

const chosenPrice = document.querySelector('#price');
const chosenType = document.querySelector('#type');

const validatePrice = () => {

  if (chosenPrice.value < typePrice[chosenType.value] ) {
    return false;
  } else {
    return true;
  }
}



const guestsPerRoom = {
1: [1],
2:[1,2],
3:[1,2,3],
100:[0]
}

const chosenRooms = document.querySelector('#room_number');
const chosenGuests = document.querySelector('#capacity');
console.log(guestsPerRoom[chosenRooms.value].indexOf(Number(chosenGuests.value)));
console.log(guestsPerRoom[chosenRooms.value]);
console.log(chosenGuests.value);

const validateGuests = () => {
 if (guestsPerRoom[chosenRooms.value].indexOf(Number(chosenGuests.value)) === -1) {
    return false;
  } else {
  return true;
  }
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

if (validateGuests() === false) {
  chosenGuests.setCustomValidity('Количество  не соответствует типу жилья');
  chosenGuests.reportValidity();
}
}
);



const guestsPerRoom = {
  1: [1],
  2:[1,2],
  3:[1,2,3],
  100:[0]
  }

  const chosenRooms = document.querySelector('#room_number');
  const chosenGuests = document.querySelector('#capacity');
  console.log(guestsPerRoom[chosenRooms.value].indexOf(Number(chosenGuests.value)));
  console.log(guestsPerRoom[chosenRooms.value]);
  console.log(chosenGuests.value);

  const validateGuests = () => {
   if (guestsPerRoom[chosenRooms.value].indexOf(Number(chosenGuests.value)) === -1) {
      return false;
    } else {
    return true;
    }
  }

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

  if (validateGuests() === false) {
    chosenGuests.setCustomValidity('Количество  не соответствует типу жилья');
    chosenGuests.reportValidity();
  }

  if (validatePrice() === false) {
    chosenPrice.setCustomValidity('Цена не соответствует типу жилья');
    chosenPrice.reportValidity();
  }

  }
  );




