// String 생성자 함수에 의한 String 객체 생성
const strObj = new String('Lee');
console.log(typeof strObj); // object
console.log(strObj);        // String {"Lee"}

// Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(123);
console.log(typeof numObj); // object
console.log(numObj);        // Number {123}

// Boolean 생성자 함수에 의한 Boolean 객체 생성
const boolObj = new Boolean(true);
console.log(typeof boolObj); // object
console.log(boolObj);        // Boolean {true}

// Function 생성자 함수에 의한 Function 객체(함수) 생성
const func = new Function('x', 'return x * x');
console.log(typeof func); // function
console.dir(func);        // ƒ anonymous(x)

// Array 생성자 함수에 의한 Array 객체(배열) 생성
const arr = new Array(1, 2, 3);
console.log(typeof arr); // object
console.log(arr);        // [1, 2, 3]

// RegExp 생성자 함수에 의한 RegExp 객체(정규 표현식) 생성
const regExp = new RegExp(/ab+c/i);
console.log(typeof regExp); // object
console.log(regExp);        // /ab+c/i

// Date 생성자 함수에 의한 Date 객체 생성
const date = new Date();
console.log(typeof date); // object
console.log(date);        // Mon May 04 2020 08:36:33 GMT+0900 (대한민국 표준시)


// 객체 리터럴에 의한 객체 생성 방식은 직관적이고 간편하지만, 동일한 프로퍼티를 갖는 객체를 
// 여러 개 생성해야 하는 경우 매번 같은 프로퍼티를 기술해야 하기 때문에 비효율적이다.
// 생성자 함수에 의한 객체 생성 방식은 마치 객체(인스턴스)를 생성하기 위한 템플릿(클래스)처럼 
// 생성자 함수를 이용하여 프로퍼티 구조가 동일한 객체 어러 개를 간펀하게 생성할 수 있다.

// 생성자 함수
function Circle(radius) {
    // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

// 인스턴스의 생성
const circle1 = new Circle(5);  // 반지름이 5인 Circle 객체를 생성
const circle2 = new Circle(10); // 반지름이 10인 Circle 객체를 생성

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20


//  this : 객체 자신의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수(self-referending variable)다.
// this가 가리키는 값, 즉 this 바인딩은 함수 호출 방식에 따라 동적으로 결정된다.
// 일반 함수로서 호출 : 전역 객체(window)
// 메서드로서 호출 : 메서드를 호출한 객체(마침표 앞의 객체)
// 생성자 함수로서 호출 : 생성자 함수가 (미래에) 생성할 인스턴스

// new 연산자와 함께 호출하면 해당 함수는 생성자 함수로 동작하지만, new 연산자와 함께 생성자 함수를
// 호출하지 않으면 생성자 함수가 아니라 일반 함수로 동작한다.
// new 연산자와 함께 호출하지 않으면 생성자 함수로 동작하지 않는다.
// 즉, 일반 함수로서 호출된다.
const circle3 = Circle(15);

// 일반 함수로서 호출된 Circle은 반환문이 없으므로 암묵적으로 undefined를 반환한다.
console.log(circle3); // undefined

// 일반 함수로서 호출된 Circle내의 this는 전역 객체를 가리킨다.
console.log(radius); // 15


// 생성자 함수의 역할은 인스턴스를 생성하는 것과 생성된 인스턴스를 초기화(인스턴스 프로퍼티 추가 및 초기값 할당)하는 것
// 1. 인스턴스 생성과 this 바인딩
// 2. 인스턴스 초기화
// 3. 인스턴스 반환 : 생성자 함수에서 모든 처리가 끝나면 완성된 인스턴스가 바인딩된 this를 암묵적으로 반환한다.

function Circle1(radius) {
    // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.

    // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };

    // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다

    // * 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시된다.
    // return {};

    // * 명시적으로 원시값을 반환하면 원시값 반환은 무시되고 암묵적으로 this가 반환된다.
    return 100;
}

// 인스턴스 생성. Circle 생성자 함수는 암묵적으로 this를 반환한다.
const circle = new Circle1(1);
console.log(circle); // Circle {radius: 1, getDiameter: ƒ}