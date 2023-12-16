// 즉시 실행 함수(IIFE: Immediately Invoked Function Expression)
// 함수 정의와 동시에 즉시 호출되는 함수. 단 한 번만 호출되며 다시 호출할 수 없다.

// 익명 즉시 실행 함수
(function () {
    var a = 3;
    var b = 5;
    console.log(a * b);
    return a * 5;
}());

// 기명 즉시 실행 함수
(function foo() {
    var a = 3;
    var b = 5;
    return a * b;
}());

// foo(); // ReferenceError: foo is not defined

// function foo() {}(); // => function foo() {};();
// (); // SyntaxError: Unexpected token ')'

// 그룹 연산자로 함수를 묶은 이유는 먼저 함수 리터럴을 평가해서 함수 객체를 생성하기 위해서다.
// 함수 리터럴을 평가해서 함수 객체를 생성할 수 있다면 다음과 같이 그룹 연산자 이외의 연산자를 사용해도됨. !, $, + 등등..
(function () {
    // ...
}());

(function () {
    // ...
})();

!function () {
    // ...
}();

+function () {
    // ...
}();


// 즉시 실행 함수도 일반 함수처럼 값을 반환할 수 있다.
var res = (function () {
    var a = 3;
    var b = 5;
    return a * b;
}());

console.log(res); // 15

// 즉시 실행 함수에도 일반 함수처럼 인수를 전달할 수 있다.
res = (function (a, b) {
    return a * b;
}(3, 5));

console.log(res); // 15


// 재귀 함수(recursive function): 함수가 자기 자신을 호출하는 것을 재귀 호출(recursive call)이라 한다.
function countdown(n) {
    if (n < 0) return;
    console.log(n);
    countdown(n - 1); // 재귀 호출
}

countdown(10);

// 팩토리얼(계승)은 1부터 자신까지의 모든 양의 정수의 곱이다.
// n! = 1 * 2 * ... * (n-1) * n
function factorial(n) {
    // 탈출 조건: n이 1 이하일 때 재귀 호출을 멈춘다.
    if (n <= 1) return 1;
    // 재귀 호출
    return n * factorial(n - 1);
}

console.log(factorial(0)); // 0! = 1
console.log(factorial(1)); // 1! = 1
console.log(factorial(2)); // 2! = 2 * 1 = 2
console.log(factorial(3)); // 3! = 3 * 2 * 1 = 6
console.log(factorial(4)); // 4! = 4 * 3 * 2 * 1 = 24
console.log(factorial(5)); // 5! = 5 * 4 * 3 * 2 * 1 = 120

// factorial 함수 내부에서 자기 자신을 호출할 때 사용한 식별자 factorial은 함수 이름이다.
// 함수 이름은 함수 몸체 내부에서만 유효함. 따라서 함수 내부에서는 함수 이름을 사용해 자기 자신을 호출할 수 있다.
// 함수 표현식으로 정의한 함수 내부에서는 함수 이름은 물론 함수를 가리키는 식별자로도 자기 자신을 재귀 호출할 수 있다.
// 단, 함수 외부에서 함수를 호출할 때는 반드시 함수를 가리키는 식별자로 해야함.
var factorial = function foo(n) {
    // 탈출 조건: n이 1 이하일 때 재귀 호출을 멈춘다.
    if (n <= 1) return 1;
    // 함수를 가리키는 식별자로 자기 자신을 재귀 호출
    return n * factorial(n - 1);

    // 함수 이름으로 자기 자신을 재귀 호출할 수도 있다.
    // console.log(factorial === foo); // true
    // return n * foo(n - 1);
};

console.log(factorial(5)); // 5! = 5 * 4 * 3 * 2 * 1 = 120

// 재귀 함수는 자신을 무한 재귀 호출한다. 따라서 재귀 함수 내에는 재귀 호출을 멈출 수 있는 탈출 조건을 반드시 만들어야 한다.
// 탈출 조건이 없으면 함수가 무한 호출되어 스택 오버플로(stack overflow)에러가 발생한다.


// 중첩 함수(nested function)
function outer() {
    var x = 1;

    // 중첩 함수
    function inner() {
        var y = 2;
        // 외부 함수의 변수를 참조할 수 있다.
        console.log(x + y); // 3
    }

    inner();
}

outer();
// 함수 정의는 문이 위치할 수 있는 문맥이라면 어디든지 가능하지만, if문 이나 for문 등의 코드 블록 내에서는
// 호이스팅으로 인해 혼란이 발생할 수 있으므로 바람직하지 않음.
// 중첩 함수는 스코프와 클로저에 깊은 관련이 있음.


// 콜백 함수(callback function) : 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수
// 외부에서 전달받은 f를 n만큼 반복 호출한다.
function repeat(n, f) {
    for (var i = 0; i < n; i++) {
        f(i); // i를 전달하면서 f를 호출
    }
}

var logAll = function (i) {
    console.log(i);
};

// 반복 호출할 함수를 인수로 전달한다.
repeat(5, logAll); // 0 1 2 3 4

var logOdds = function (i) {
    if (i % 2) console.log(i);
};

// 반복 호출할 함수를 인수로 전달한다.
repeat(5, logOdds); // 1 3

// 내부 로직에 강력히 의존하지 않고 외부에서 로직의 일부분을 함수로 전달받아 수행하므로 더욱 유연한 구조를 갖게됨.

// 고차 함수(Higher-Order Function, HOF) : 매개변수를 통해 함수의 외부에서 콜백 함수를 전달받은 함수. 콜백 함수를 자신의 일부분으로 합성한다.
// 고차 함수는 매개변수를 통해 전달받은 콜백 함수의 호출 시점을 결정해서 호출한다.
// 다시 말해, 콜백함수는 고차 함수에 의해 호출되며 이때 고차 함수는 필요에 따라 콜백 함수에 인수를 전달할 수 있다.
// 따라서 고차 함수에 콜백 함수를 전달할 때 콜백 함수를 호출하지 않고 함수 자체를 전달해야함.

// 익명 함수 리터럴을 콜백 함수로 고차 함수에 전달한다.
// 익명 함수 리터럴은 repeat 함수를 호출할 때마다 평가되어 함수 객체를 생성한다.
repeat(5, function (i) {
    if (i % 2) console.log(i);
}); // 1 3

// logOdds 함수는 단 한 번만 생성된다.
var logOdds = function (i) {
    if (i % 2) console.log(i);
};

// 고차 함수에 함수 참조를 전달한다.
repeat(5, logOdds); // 1 3

// 위의 logOdds 함수는 단 한 번만 생성된다. 하지만 콜백 함수를 익명 함수 리터럴로 정의하면서 곧바로
// 고차 함수에 전달하면 고차 함수가 호출될 때마다 콜백 함수가 생성된다.
// 콜백 함수는 함수형 프로그래밍 패러다임뿐만 아니라 비동기 처리(이벤트 처리, Aajx 통신, 타이머 함수 등)에 활용되는 중요한 패턴임.
// 콜백 함수는 비동기 처리뿐 아니라 배열 고차 함수에서도 사용됨.


// 순수 함수(pure function) : 어떤 외부 상태에 의존하지도 않고 변경하지도 않는, 즉 부수 효과(side effect)가 없는 함수
// 비순수 함수(impure function) : 외부 상태에 의존하거나 외부 상태를 변경하는, 즉 부수 효과(side effect)가 있는 함수
var count = 0; // 현재 카운트를 나타내는 상태: increase 함수에 의해 변화한다.

// 비순수 함수
function increase() {
    return ++count; // 외부 상태에 의존하며 외부 상태를 변경한다.
}

// 비순수 함수는 외부 상태(count)를 변경하므로 상태 변화를 추적하기 어려워진다.
increase();
console.log(count); // 1

increase();
console.log(count); // 2

// 비순수 함수를 최대한 줄이는 것은 부수 효과를 최대한 억제하는 것과 같다.

// 함수형 프로그래밍은 순수 함수와 보조 함수의 조합을 통해 외부 상태를 변경하는 부수 효과를 최소화해서
// 불변성(immutability)을 지향하는 프로그래밍 패더다임임.
// 로직 내에 존재하는 조건문과 반복문을 제거해서 복잡성을 해결하며,
// 변수 사용을 억제하거나 생명주기를 최소화해서 상태 변경을 피해 오류를 최소화하는 것을 목표로 한다.
// 조건문이나 반복문은 로직의 흐름을 이해하기 어렵게 해서 가독성을 해치고,
// 변수의 값은 누군가에 의해 언제든지 변경될 수 있어 오류 발생의 근본적 원인이 될 수 있다.

// 함수형 프로그래밍은 결국 순수 함수를 통해 부수 효과를 최대한 억제해 오류를 피하고 프로그램의 안정성을 높이려는 노력의 일환임.
// 자바스크립트는 멀티 패러다임 언어이므로 객체지향 프로그래밍뿐만 아니라 함수형 프로그래밍을 적극적으로 활용하고 있다.
