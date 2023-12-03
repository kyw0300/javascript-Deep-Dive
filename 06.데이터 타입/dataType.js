'use strict';

// javascript(ES6)는 7개의 데이터 타입을 제공
// 7개의 데이터 타입은 원시 타입(primitive type)과 객체 타입(object/reference type)으로 분류

// 1. number type
// 모두 숫자 타입이다.
var integer = 10;    // 정수
var double = 10.12;  // 실수
var negative = -20;  // 음의 정수

var binary = 0b01000001; // 2진수
var octal = 0o101;       // 8진수
var hex = 0x41;          // 16진수

// 표기법만 다를 뿐 모두 같은 값이다.
console.log(binary); // 65
console.log(octal);  // 65
console.log(hex);    // 65
console.log(binary === octal); // true
console.log(octal === hex);    // true

// 숫자 타입은 모두 실수로 처리된다.
console.log(1 === 1.0); // true
console.log(4 / 2);     // 2
console.log(3 / 2);     // 1.5

// 숫자 타입의 세 가지 특별한 값
console.log(10 / 0);       // Infinity
console.log(10 / -0);      // -Infinity
console.log(1 * 'String'); // NaN

// 2. string type
var string;
string = '문자열'; // 작은따옴표
string = "문자열"; // 큰따옴표
string = `문자열`; // 백틱 (ES6)

var template = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>';
console.log(template);

// 백틱 사용으로 개행(newline) 문자를 사용하지 않고 처리 가능
var template = `<ul>
  <li><a href="#">Home</a></li>
</ul>`;
console.log(template);


var first = 'Ung-mo';
var last = 'Lee';

// ES6: 표현식 삽입. 표현식의 평가 결과가 문자열이 아니더라도 문자열로 타입이 강제로 변환됨!
// 반드시 template literal 내에서 사용해야함!
console.log(`My name is ${first} ${last}.`); // My name is Ung-mo Lee.

// 3. boolean type
var foo = true;
console.log(foo); // true

foo = false;
console.log(foo); // false

// 4. undefined type
// undefined type은 undefined가 유일함.
// var 키워드로 선언한 변수는 암묵적으로 undifined로 초기화됨. 변수 선언에 의해 확보된 메모리 공간을
// 처음 할당이 이뤄질 때까지 빈 상태로 내버려두지 않고 javascript 엔진이 undefined로 초기화함.
// 변수를 참조했을 때 undefined가 반환된다면 참조한 변수가 선언 이후 값이 할당된 적이 없는, 초기화되지 않은 변수라는 것을 간파할 수 있음!
// 개발자가 의도적으로 undefined를 변수에 할당하는 것을 undefined의 본래의 취지가 아님! 권장되지 않음!
// 변수에 값이 없다는 것을 명시하고 싶을 때 => null을 할당하도록!
var foo;
console.log(foo); // undefined



