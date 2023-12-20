// 객체지향 프로그래밍 : 프로그램을 명령어 또는 함수의 목록으로 보는 전통적인 명령형 프로그래밍(Imperative programming)의
// 절차지향적 관점에서 벗어나 여러 개의 독립적 단위, 즉 객체(object)의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임

// 자바스크립트는 프로토타입을 기반으로 상속을 구현한다.
// 생성자 함수
function Circle(radius) {
    this.radius = radius;
}

// Circle 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를
// 공유해서 사용할 수 있도록 프로토타입에 추가한다.
// 프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩되어 있다.
Circle.prototype.getArea = function () {
    return Math.PI * this.radius ** 2;
};

// 인스턴스 생성
const circle1 = new Circle(1);
const circle2 = new Circle(2);

// Circle 생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역할을 하는
// 프로토타입 Circle.prototype으로부터 getArea 메서드를 상속받는다.
// 즉, Circle 생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea 메서드를 공유한다.
console.log(circle1.getArea === circle2.getArea); // true

console.log(circle1.getArea()); // 3.141592653589793
console.log(circle2.getArea()); // 12.566370614359172


// 프로토타입 객체 : 객체지향 프로그래밍의 근간을 이루는 갹체 간 상속(inheritance)을 구현하기 위해 사용
// 모든 객체는 하나의 프로토타입을 갖는다. 그리고 모든 프로토타입은 생성자 함수와 연결되어 있다.
// 객체와 프로토타입과 생성자 함수는 연결되어 있다.

const person = { name: 'JeongDaeMan'};
console.log('person', person);
console.log('person.__proto__', person.__proto__);