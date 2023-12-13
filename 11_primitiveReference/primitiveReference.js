// 원시 타입(primitive type)과 참조 타입(reference type)
// 원시 값을 변수에 할당하면 변수(확보된 메모리 공간)에는 실제 값이 저장
// 객체를 변수에 할당하면 변수(확보된 메모리 공간)에는 참조 값이 저장

// 원시 값을 갖는 변수를 다른 변수에 할당하면 원본의 원시 값이 복사되어 전달 ==> 값에 의한 전달(pass by value)
// 객체를 가리키는 변수를 다른 변수에 할당하면 원본의 참조 값이 복사되어 전달 ==> 참조에 의한 전달(pass by reference)

var score = 80;
var copy = score;

console.log(score); // 80
console.log(copy);  // 80

score = 100;

console.log(score); // 100
console.log(copy);  // ?


//---------------------------------
var score = 80;

// copy 변수에는 score 변수의 값 80이 복사되어 할당된다.
var copy = score;

console.log(score, copy); // 80  80
console.log(score === copy); // true


//--------------------------------
// score 변수와 copy 변수의 값은 다른 메모리 공간에 저장된 별개의 값이다.
// 따라서 score 변수의 값을 변경해도 copy 변수의 값에는 어떠한 영향도 주지 않는다.
score = 100;

console.log(score, copy);    // 100  80
console.log(score === copy); // false


// 얕은 복사와 깊은 복사
const o = {
    x: { y: 1 }
};

// 얕은 복사
const c1 = { ...o }; // 35장 "스프레드 문법" 참고
console.log(c1 === o); // false
console.log(c1.x === o.x); // true

// lodash의 cloneDeep을 사용한 깊은 복사
// "npm install lodash"로 lodash를 설치한 후, Node.js 환경에서 실행
const _ = require('lodash');
// 깊은 복사
const c2 = _.cloneDeep(o);
console.log(c2 === o); // false
console.log(c2.x === o.x); // false


// QUIZ~
var person1 = {
    name: 'Lee'
};

var person2 = {
    name: 'Lee'
};

console.log(person1 === person2); // false
console.log(person1.name === person2.name); // true