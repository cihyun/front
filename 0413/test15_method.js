'use strict';
let text1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcde';
let text2 = '   ABC    BCDEF   GHI  ABCMN.....   ABC   OPQ';

// demo.innerHTML = text1;
// demo.innerHTML = text1.length;
// demo.innerHTML = text1.substring(0, 10);
// demo.innerHTML = text1.slice(10);
// demo.innerHTML = text1.substring(10);
// demo.innerHTML = text1.substr(10);
// demo.innerHTML = text1.replace('ABC', 'opq');

// demo.innerHTML = text2.replace('ABC', 'OPQ');
// demo.innerHTML = text2.replaceAll('ABC', 'OPQ');
// demo.innerHTML = text2.toUpperCase();
// demo.innerHTML = text2.toLowerCase();
// demo.innerHTML = text2.concat('안녕', '반가워');
// demo.innerHTML = text2.concat('안녕', 1234);
// demo.innerHTML = text2.trim() + "abc";
// demo.innerHTML = text2.trimStart() + "abc";
// demo.innerHTML = text2.trimEnd() + "abc";
// demo.innerHTML = "abc" + text2.replaceAll(' ','') + "abc";
// demo.innerHTML = text2.charAt(10);
// demo.innerHTML = text1.charCodeAt(26);

// let temp = '';
// for(let item of mbc) {
//     console.log(item);
//     temp += item;
// }
// demo.innerHTML = temp;
// let title = ['지역번호','국번호','전화번호'];
// let tel = '010-3423-2704';

// let tels = telTemp.split("-");

// tels.forEach((tel, i) => {
//     console.log(title[i] + " : " + tel);
// });

// demo.innerHTML = text1.indexOf('a');
// demo.innerHTML = text2.lastIndexOf('A');

// demo.innerHTML = text1.search('f')
// demo.innerHTML = text2.search('f')

demo.innerHTML = text1.match('abc')
demo.innerHTML = text2.match('BC')

demo.innerHTML = text1.includes('abc')
demo.innerHTML = text2.includes('BC')

let price =100;
let vat = 0.25;

let str = `총금액 : ${price+(price*vat)}원`;  //EL표기법(Expression language) =>${}
demo.innerHTML = str;