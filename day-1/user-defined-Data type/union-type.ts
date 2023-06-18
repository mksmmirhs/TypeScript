let user: number | string;
user = 123;

function showNumbers(num1: number | string, num2: number | string) {
  console.log(num1, num2);
}

showNumbers(1, 17);
showNumbers('12', 14);
