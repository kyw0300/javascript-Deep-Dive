// 연산의 대상을 피연산자(operand)라고 함.
// 피연산자는 값으로 평가될 수 있는 표현식이여야 함!
// 또한 피연산자와 연산자의 조합으로 이뤄진 연산자 표현식도 값으로 평가될 수 있는 표현식임!

// 삼항 조건 연산자(ternary operator)
// if...else 문과 차이 : 삼항 조건 연산자 표현식은 값처럼 사용할 수 있지만 if...else는 불가!!
// 삼항 조건 연산자 표현식은 값으로 평가할 수 있는 표현식인 문 ==> 매우 유용함!!

// 2 % 2는 0이고 0은 false로 암묵적 타입 변환된다.
var result = x % 2 ? '홀수' : '짝수';
console.log(result); // 짝수

var x = 2, result;

// 2 % 2는 0이고 0은 false로 암묵적 타입 변환된다.
if (x % 2) result = '홀수';
else       result = '짝수';
console.log(result); // 짝수


```javascript
var x = 10;

// 삼항 조건 연산자 표현식은 표현식인 문이다. 따라서 값처럼 사용할 수 있다.
var result = x % 2 ? '홀수' : '짝수';
console.log(result); // 짝수
```

var x = 10;

// 삼항 조건 연산자 표현식은 표현식인 문이다. 따라서 값처럼 사용할 수 있다.
var result = x % 2 ? '홀수' : '짝수';
console.log(result); // 짝수


// typeof 연산자
// typeof 연산자로 null 값을 연산해보면 "null"이 아닌 "object"를 반환한다는 데 주의!! 버그임
// 값이 null 타입인지 확인할 때는 typeof 연산자를 사용하지 말고 일치 연산자(===)를 사용하자!
// 선언하지 않은 식별자를 typeof 연산자로 연산해 보면 ReferenceError가 발생하지 않고 undefined를 반환한다.