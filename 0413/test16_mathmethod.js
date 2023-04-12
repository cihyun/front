'use strict';

let su1 = 10;
let su2 = -20;
let su3 = 3.14;
let su4 = -3.14;
let su5 = -31.4;
let num = 0;

num = Math.min(su1, su2);
num = Math.min(su1, su2, su3, su4, su5);
num = Math.max(su1, su2, su3, su4, su5);

num = Math.ceil(su3); // 무조건 올림
num = Math.floor(su3); // 내림
num = Math.ceil(su4);  // 올림
num = Math.floor(su4); // 내림

num = Math.trunc(su3); // 무조건 자르기
num = Math.trunc(su4); // 무조건 자르기

num = Math.pow(2,5);  // 지수 값
num = Math.sqrt(4);  // 제곱근

num = Math.abs(su3);  // 절대값
num = Math.abs(su4);  // 절대값

num = Math.random();  // 난수 발생(0 <= x < 1 실수형 난수)
num = Math.random()*10;  // 난수 발생(정수로 바꾸기)
num = parseInt(Math.random()*100)+1;  // 난수 발생(정수로 바꾸기) - 0 안나오게 하기

num = Math.floor(Math.random()*10) +1;

num = Math.floor(Math.random()*45+1-1) +1; // 1에서 45까지 난수
// num = Math.floor(Math.random()*10+5-1) +5; // 5에서 10까지

// 소수 반올림 : toFixed()

demo.innerHTML = num;