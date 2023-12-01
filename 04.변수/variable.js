'use strict';

// 변수는 하나의 값을 저장하기 위한 수단이다.
var userId = 1;
var userName = 'Lee';

// 객체나 배열 같은 자료구조를 사용하면 여러 개의 값을 하나로 그룹화해서 하나의 값처럼 사용할 수 있다.
var user = { id: 1, name: 'Lee' };

var users = [
  { id: 1, name: 'Lee' },
  { id: 2, name: 'Kim' }
];

// console.log(score); // undefined

// var score;  // ① 변수 선언
// score = 80; // ② 값의 할당

// console.log(score); // 80


console.log(score); // undefined

score = 80; // 값의 할당
var score;  // 변수 선언

console.log(score); // ??