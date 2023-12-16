function add(x, y) {
    // 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
    // 즉, 매개변수의 스코프(유효범위)는 함수 몸체 내부다.
    console.log(x, y); // 2 5
    return x + y;
}

add(2, 5);

// 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
// console.log(x, y); // ReferenceError: x is not defined


var var1 = 1; // 코드의 가장 바깥 영역에서 선언한 변수

if (true) {
    var var2 = 2; // 코드 블록 내에서 선언한 변수
    if (true) {
        var var3 = 3; // 중첩된 코드 블록 내에서 선언한 변수
    }
}

function foo() {
    var var4 = 4; // 함수 내에서 선언한 변수

    function bar() {
        var var5 = 5; // 중첩된 함수 내에서 선언한 변수
    }
}

console.log(var1); // 1
console.log(var2); // 2
console.log(var3); // 3
// console.log(var4); // ReferenceError: var4 is not defined
// console.log(var5); // ReferenceError: var5 is not defined

// 모든 식별자(변수 이름, 함수 이름, 클래스 이름 등)는 자신이 선언된 위치에 의해 다른 코드가 식별자 자신을
// 참조할 수 있는 유효 범위가 결정된다. 이를 스코프(scope)라 한다. 스코프는 식별자가 유효한 범위를 말한다.

function foo() {
    var x = 1;
    // var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
    // 아래 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.
    var x = 2;
    console.log(x); // 2
}
foo();

function bar() {
    let x = 1;
    // let이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다.
    // let x = 2; // SyntaxError: Identifier 'x' has already been declared
}
bar();

// 변수를 참조할 때 자바스크립트 엔진은 스코프 체인을 통해 변수를 참조하는 코드의 스코프에서 시작하여
// 상위 스코프 방향으로 이동하며 선언된 변수를 검색(identifier resolution)한다.
// 렉시걸 환경(Lexical Environment) : 스코프 체인은 실행 컨텍스트의 렉시컬 환경을 단방향으로 연결(chaining)한 것이다.
// 전역 렉시컬 환경은 코드가 로드되면 곧바로 생성되고 함수의 렉시컬 환경은 함수가 호출되면 곧바로 생성된다.

// 전역 함수
function foo1() {
    console.log('global function foo');
}

function bar1() {
    // 중첩 함수
    function foo1() {
        console.log('local function foo');
    }

    foo1(); // ①
}

bar1();


var x = 1;

if (true) {
    // var 키워드로 선언된 변수는 함수의 코드 블록(함수 몸체)만을 지역 스코프로 인정한다.
    // 함수 밖에서 var 키워드로 선언된 변수는 코드 블록 내에서 선언되었다 할지라도 모두 전역 변수다.
    // 따라서 x는 전역 변수다. 이미 선언된 전역 변수 x가 있으므로 x 변수는 중복 선언된다.
    // 이는 의도치 않게 변수 값이 변경되는 부작용을 발생시킨다.
    var x = 10;
}

console.log(x); // 10


var i = 10;

// for 문에서 선언한 i는 전역 변수다. 이미 선언된 전역 변수 i가 있으므로 중복 선언된다.
for (var i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
}

// 의도치 않게 변수의 값이 변경되었다.
console.log(i); // 5


var a = 1;

function foo2() {
  var a = 10;
  bar2();
}

function bar2() {
  console.log(a);
}

foo2(); // ?
bar2(); // ?

// 자바스크립트는 렉시컬 스코프를 따르므로 함수를 어디서 호출했는지가 아니라 함수를 어디서 정의했는지에 따라 상위 스코프를 결정한다.
// 함수가 호출된 위치는 상위 스코프 결정에 어떠한 영향도 주지 않는다. 즉, 함수의 상위 스코프는 언제나 자신이 정의된 스코프다.

// 이처럼 함수의 상위 스코프는 함수 정의가 실행될 때 정적으로 결정된다. 함수 정의(함수 선언문 또는 함수 표현식)가 실행되어
// 생성된 함수 객체는 이렇게 결정된 상위 스코프를 기억한다. 함수가 호출될 때마다 함수의 상위 스코프를 참조할 필요가 있기 때문이다.
