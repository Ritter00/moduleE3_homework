// Задание 3
function sum(x){
  return function(y){
    return x + y
  };
};

const five = sum(5);
console.log(five(6));