// 프로그래밍 언어의 함수는 일련의 과정을 문(statement)으로 구현하고 
// 코드 블록으로 감싸서 하나의 실행 단위로 정의한 것
// => 코드의 재사용 가능, 유지보수 편의성을 높이고 코드의 신뢰성을 높여준다.

// 리터럴은 값을 생성하기 위한 표기법이다. 따라서 함수 리터럴도 평가되어 값을 생성하며,
// 이 값은 객체다. 즉, 함수는 객체다. 일반 객체는 호출할 수 없지만 함수는 호출할 수 있다.
// 또한 일반 객체에는 없는 함수 객체만의 고유한 프로퍼티를 갖는다.

// 함수 선언문
function add(x, y) {
    return x + y;
}

// 함수 참조
// console.dir은 console.log와는 달리 함수 객체의 프로퍼티까지 출력한다.
// 단, Node.js 환경에서는 console.log와 같은 결과가 출력된다.
console.dir(add); // ƒ add(x, y)

// 함수 호출
console.log(add(2, 5)); // 7


// 함수 선언문은 표현식이 아닌 문이므로 변수에 할당할 수 없다.
// 하지만 함수 선언문이 변수에 할당되는 것처럼 보인다.
var add = function add(x, y) {
    return x + y;
};

// 함수 호출
console.log(add(2, 5)); // 7


// 기명 함수 리터럴을 단독으로 사용하면 함수 선언문으로 해석된다.
// 함수 선언문에서는 함수 이름을 생략할 수 없다.
function foo() { console.log('foo'); }
foo(); // foo

// 함수 리터럴을 피연산자로 사용하면 함수 선언문이 아니라 함수 리터럴 표현식으로 해석된다.
// 함수 리터럴에서는 함수 이름을 생략할 수 있다.
(function bar() { console.log('bar'); });
bar(); // ReferenceError: bar is not defined


// javascript 엔진은 생성된 함수를 호출하기 위해 함수 이름과 동일한 이름의 식별자를 암묵적으로 생성하고
// 거기에 함수 객체를 할당한다.
// 함수는 함수 이름으로 호출하는 것이 아니라 함수 객체를 가리키는 식별자로 호출한다.

var add = function add(x, y) {
    return x + y;
};

console.log(add(2, 5)); // 7
// 결론적으로 javascript 엔진은 함수 선언문을 함수 표현식으로 변환해 함수 객체를 생성한다고 볼 수 있다.
// but 선언문과 표현문이 완전 정확히 동일하게 동작하는 것은 아님