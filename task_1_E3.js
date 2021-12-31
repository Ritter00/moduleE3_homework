// Задание 1
let arrayN = [4, 1, 2, 6, 8, 9, 7, null, 5, NaN, '7', '+', 0 , 0, 'kl', 0, 8, 13];

function countEvenOddNull(array){
  let even = 0;
  let odd = 0;
  let nullElement = 0;
  for (i = 0; i < array.length; i++){
    if(typeof(array[i])==='number'){
      if (array[i]  === 0){nullElement += 1}
      else if(array[i] % 2 === 0){even += 1}
      else{odd += 1}
    }
  }
  console.log('Четных чисел: ' + even + ', Нечетных чисел: ' + odd + 
            ', Количество нулей: ' + nullElement)
};

countEvenOddNull(arrayN);
