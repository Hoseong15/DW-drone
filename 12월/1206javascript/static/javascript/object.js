//  객체 -  의사나 행위가 미치는 대상
//          의사  -  무엇을 하고자 하는 생각
//          행위  -  행동

//  자바스크립트에서 객체에 데이터는 key-value 1:1로 표현된다.
//  key는 객체 내부에서 유일한 명칭이어야한다.
// var obj1 = {이름:"김유신", age : 23 , 직업 : "군인"};

//  function 사용한 생성자 함수라는것으로 객체를 생성한다.

// function apple() {  // 생성자 함수
//   this.name = "노진구";
//   this.age = 20;
//   this.birth = function(){console.log(2023-this.age)}; 
// }

// let you = new Array();
// you.push(new apple());
// you.push(new apple());
// you.push(new apple());

// console.log(you[0].birth())
// console.log(you[0]['name'] + " " + you[0].age)
// console.log(you[1]['age'] + " " + you[0].name)

// html태그들의 style과 id,class, 이벤트들을 정하여 태그 생성을 할 수 있다.
// 데이터들을 보다 관리가 용이한 구조로 만들어 사용할 수 있다.

// 이름 - key , 김유신 - value
// console.log(obj1['age']);


let mybt = new myButton("pink", "30px", "200px", "50px", "blue", "white");

function myButton(bgColor, fSize, width, height, bdColor, color) { // 생성자함수, 내가 원하는 스타일의 버튼 만들기
  this.bgColor = bgColor;
  this.fontsize = fSize;
  this.width = width;
  this.height = height;
  this.borderColor = bdColor;
  this.color = color;

  this.make=function() {
    document.write(`<button 
    style='background:${this.bgColor}; 
    font-size:${this.fontsize};
    width:${this.width}; 
    height:${this.height}; 
    border-color:${this.borderColor};
    color:${this.color};
    '>내꺼 버튼</button>`    )
  }
}
mybt.make()