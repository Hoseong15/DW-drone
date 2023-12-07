  // 객체 생성방법과, 객체에 함수(매서드)를 정의, 실행하는 방법
  // 객체를 사용하는 이유는 데이터를 체계적으로 관리하기 위해
  // 많은 양의 데이터를 다룰떄 각각의 데이터들의 명칭을 지정해주면
  // 데이터 찾기, 데이터 저장, 데이터 가공하기가 개발자 입장에서 보다 편하다.
  // 도서관에 책들이 아무렇게 비치 되어있으면 책을 찾는 입장에서
  // 도서관 전체를 돌아다니면 찾아야하지만 도서를 분류하고, 그안에서 가나다순으로
  // 비치하면 책을 찾는 사람은 보다 쉽게 찾을 수 있다.
  // 데이터도 정리하여 저장되도록 하는게 개발자입장에서 다루기 수월해진다.

// 자바스크립트 객체를 생성하는방법
// a = new Array();   a=[];
// 객체 key:value   1:1로 저장 , key는 중복x

var animal = {}; // var animal = new Object(); 
animal.kind = '강아지';
animal.age = 4;
// kind = '강아지' , age: 4

var animal1 = {
  동물이름 : "토끼" , 
  age: 4
};
console.log(animal1.동물이름)
animal1.eat = "풀";
console.log(animal1.eat)

// function 을 이용한 객체 생성

function dog() { // 객체생성자 함수
  this.품종 = '말티즈';
  this.크기 = '소형견';
  this.특징 = '지랄맞음';
}
dog.prototype.view = function() {
  document.write(this.품종 + " " + this.크기 + " " + this.특징+ " " + this.종);
}
dog.prototype.종 = "강아지";
//prototype은 자바스크립트에서 기존의 객체에 새로운 객체를 생성할떄 사용된다.
// dog라는 객체를 복사하여 prototype에 넣어주고 prototype을 통해 매서드를 연결하여
// 다시 dog라는 객체에 저장하는 방식으로 동작한다.

// 생성자 함수에 익명함수를 작성할시 객체가 생성될때마다 생성자함수안에 있는
// key, value들이 메모리에 생성된다. 즉 모든 객체가 같은 내용을 가지는
// 익명함수가 여러번 생성된다.

var d1 = new dog(); // 생성자함수를 통해 객체 생성
console.log(d1.품종); // 연산자 순위  () , [] , . , -> ,  
console.log(d1['크기'])
d1.view();