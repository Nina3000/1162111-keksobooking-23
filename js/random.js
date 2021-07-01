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
  };

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
