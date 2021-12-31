// Задание 4
let x = +prompt('Введите начало отсчета');
let y = +prompt('Введите конец отсчета');
  
let id = setInterval(printNumb, 1000);

function printNumb (){
  if (x <= y){
    console.log(x);
    x += 1;
  } else {
    clearInterval(id);
  };
};