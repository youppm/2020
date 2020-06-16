console.log("hello wolrd! In js doc!");

// BuQiang
let bq;
// MaYuChen,right
let myc;
let max;

bq = 10;

console.log(bq * 2);
console.log(bq % 3);
console.log(Math.floor(bq / 3));

/*
  7 再定义一个变量，用你身边同学的名字的拼音首字母缩写（注释一下是谁，zuo）
  8 给这个变量赋值字符串"20"

  9 输出两个变量相加后的结果
 10 比较这两个变量是否相等，输出结果，true 还是 false
*/

myc = '20';

console.log(bq + myc);

if (bq === myc) {
  console.log('equal');
} else {
  console.log('notEqual');
}

console.log(bq === 10 ? true : 'notEqual');

// 判断之前的两个变量谁大，输出大的那个
max = bq > myc ? bq : myc;
console.log(max);

// 学生成绩，80分及以上优秀，60分及以上合格，60分以下不合格。
// 不用检查用户输入是否合法，默认用户都会输入0 - 100 之间的合法数值

let score = 95;

// if (score >= 80) {
//   console.log('优秀');
// } else if (score >= 60) {
//   console.log('合格');
// } else {
//   console.log('不及格');
// }

// if (score >= 80) {
//   console.log('优秀');
// } else {
//   if (score >= 60) {
//     console.log('合格');
//   } else {
//     console.log('不及格');
//   }
// }

switch (Math.floor(score/10)) {
  case 10:
  case 9:
  case 8: console.log('优秀');break;
  case 7:
  case 6: console.log('合格');break;
  default: console.log('不及格');
};


// 定义数组
let arr = [];
// let arr = new Array; // 数组的类

// 前五项 赋值 1，2，3，4，5
arr = [ 1, 2, 3, 4, 5];

// arr[0] = 1;
// arr[1] = 2;
arr[5] = ['a', 'b', 'c'];

// 第七项，赋值 'string'
arr[6] = 'string';

// 输出第六项，可以通过程序输出，观察到，没有赋值的数组项，默认是undefined
console.log(arr[5]);

// 遍历数组
// 要遍历数组，就涉及到循环，while,for

// 如何获得数组的长度
console.log(arr.length);
console.log('------------------------------------------');

for ( let count = 0; count < arr.length; count++) {
  console.log('arr[' + count + '] = ' + arr[count] + ' ');
};


// for (  1  ;   2    ;  3 )  {

// }

// 循环控制变量的初值, 在整个循环开始之前执行一次
// 循环的条件，每次执行循环体之前，先要判断一下是否满足
// 循环控制变量要趋向与不满足循环的条件,每次循环体结束要执行的代码，
console.log('------------------------------------------');
let count = 0;
let str = '';
while ( count < arr.length ) {
  str += 'arr[' + count + '] = ' + arr[count] + ' ';
  count++;
}

console.log(str);

arr[8] = ['aa', 'bb', 'cc'];

// 写一个程序，指出数组里的那一项也是个数组。 提示 typeof
// 并遍历这个内部的数组
for ( let count = 0; count < arr.length; count++) {
  if (typeof arr[count] === 'object') {
    for( let i = 0; i < arr[count].length; i++) {
      console.log(arr[count][i]);
    }
  }
};

console.log('------------------------------------------');



// 这是一个典型的，不带参数 ()
// 也没有返回值的函数

// 定义一个函数，（x) 就是约定了，函数被调用的时候，要提供x的信息
function amao(x) {
  console.log('Hello World!');
  return x;
};

// 调用
// 明明在定义部分，约定了，需要提供x的值，
amao(2);
console.log(amao('a'));

// 定义一个函数，需要有2个参数，返回这两个参数相加的结果

function add(x, y){
  return x+y;
}

let result = add(1, 2);
console.log(result);

console.log(add(3, 5));


// 定义一个函数，需要有2个参数，返回这两个参数中较大的那个
function maxNumber(x, y){
  // if (x > y){
  //   return x;
  // } 
  // return y;
  // 这样的输出，只能给人类在页面上有一行提示而已
  // 计算机无法灵活使用到，此函数的结果
  // 而且一个函数，完成了两个功能，显得冗余
  console.log(x > y ? x : y);
  return x > y ? x : y;
}

console.log(maxNumber(30, 2310));

// 两组书20，30  另一组是 30，2310，先分别计算同一组里较大的那个数
// 然后把较大的两个数相加。

// add(maxNumber(20, 30), maxNumber(30, 2310))
let num1 = maxNumber(20, 30); 
let num2 = maxNumber(30, 2310);

console.log(add(num1, num2));


// 求5个数的平均值

// function avg5(x, y, z, a, b) {
//   return (x + y + z + a + b) / 5;
// };

// function avg7(x, y, z, a, b, c, d) {
//   return (x + y + z + a + b + c + d) / 7;
// };

// console.log(avg5(32, 34, 32, 65, 30));
// console.log(avg7(23, 34, 32, 65, 30, 56, 1087));

let numList = [34, 32, 65, 30, 56, 1087, 10, 90, 8];
console.log(numList.length);


function sumList(list) {
  console.log(list);
  let sum = 0;
  for(let count  = 0; count < list.length; count++) {
    sum = sum + list[count];
  }

  return sum;
}

function avg(list){
  let sum = sumList(list);
  return sum / list.length;
}

console.log(avg(numList));

