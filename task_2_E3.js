// Задание 2
function simpleNumb(numb){
  let resault = `${numb}  простое число`;
  if(numb > 1 && numb <=1000){
    for (i = 2; i < numb; i++){
      if( numb % i == 0){
        resault = `${numb} не простое число`
      }     
    }
  }else if (numb == 1 || numb == 0){
    resault =`${numb} не простое число`
  }else{
    resault = 'Данные неверны'
  }
  return console.log(resault)
}
simpleNumb(2)
