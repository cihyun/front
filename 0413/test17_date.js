'use strict';
// 오늘날짜를 전역변수로 선언
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth()+1;
const date = today.getDate();
const hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();

const yymmdd = year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second;

// 표준날짜
function fCheck1() {
    console.log("표준날짜 : " + date);
    demo.innerHTML = today;
}
function fCheck2() {
    console.log("편집날짜 : " + yymmdd);
    demo.innerHTML = yymmdd;
}
// 0  1  2  3  4 5 6
// 일 월 화 수 목 금 토
function fCheck3() {
    let str = today.getDay();
    let week = ['일','월','화','수','목','금','토'];
    demo.innerHTML = week[str] + '요일';
}
function fCheck4() {
    let mon = prompt("마지막 날짜를 출력할 '년-월'을 입력하세요(yyyy-mm)");
    let temp = mon.split("-");
    let yy = temp[0];
    let mm = temp[1];

    let str = new Date(yy, mm, 0);  // new Date(년, 월, 일, 시, 분, 초)
    // let strDate = str.getFullYear() + '-';
    // strDate += (str.getMonth()+1) + '-';
    // strDate += str.getDate();
    strDate = "해당월의 마지막 일자는 : " +yy+"-"+mm+"-"+str.getDate();
    demo.innerHTML = today;
}