/* if문 - 조건식의 참, 거짓에의해 내용을 실행 시킨다/
if(조건식) {
참일 경우 실행 할 내용
} else {
거짓일 경우 실행 할 내용
}
if뒤에 작은괄호 열어서 안에 조건식을 작성한다.
조건식 뒤에는 중괄호를 열어서 안에 참일 겨우 실행 할 내용을 작성한다.
조건식이 거짓이라면 첫번째 중괄호는 건너뛰고(jump)
else 뒤의 중괄호를 실행시킨다.
if문에서 조건식 작성할 수 있는곳은 오직 if뒤에만 가능하다.
else뒤에는 조건식 넣을수 없다.

조건에 따라 실행될 내용이 여러개라면(3개 이상)
if(조건식) {

} els if(조건식) {

} else {

};




*/

// var num = 20;  // num이라는 변수공간에 20을 저장해라
// //(num > 0 ) ? "양수" : "음수"
// if(num > 0) {
//   console.log("양수다")
// } else{
//   console.log("음수다")
// };

// var birth = parseInt(prompt("생년월일(8자리)"));

// if(birth > 20041231) {
//   console.log("미성년자입니다");
// } else {
//   console.log("성인입니다");
// };

// 국어,영어,수학 3과목 점수 입력받기
// 3과목의 평균점수가 65점 이상이면 통과라고 출력
// 65점 미만이면 낙제라고 출력하시오

// var kor = parseInt(prompt("국어점수를 입력"));
// var eng = parseInt(prompt("영어점수를 입력"));
// var mat = parseInt(prompt("수학점수를 입력"));

// if((kor + eng + mat)/3 >=65) {
//   console.log("통과")
// } else {
//   console.log("낙제")
// }

// 동전 앞면 뒷면 맞추기

  // var coin = Math.floor(Math.random() * 2) + 1;   
  // var front = document.getElementById('front');
  // var back = document.querySelector('#back')
  
  // front.addEventListener('click', function() {
  //   if(coin == 1) {
  //     alert("정답입니다.")
  //   } else {
  //     alert("틀렸습니다.")
  //   }
  // });

  // back.addEventListener('click',function() {
  //   if(coin == 2) {
  //     console.log("맞춤")
  //   } else {
  //     console.log("틀림")
  //   }
  // });

  // 세개의 정수를 입력 받아 가장 작은 수 출력, 모두 같다면 같다 출력

  // var num1 = parseInt(prompt("첫번째 정수 입력"));
  // var num2 = parseInt(prompt("두번째 정수 입력"));
  // var num3 = parseInt(prompt("세번째 정수 입력"));

  // // if(num1 < num2){
  // //   if(num1 < num3) {
  // //     console.log("작은수" + num1);
  // //   } else {
  // //     console.log("작은수" + num3);
  // //   }
  // // } else if(num2 < num3) {
  // //   console.log("작은수" + num2);
  // // } else {
  // //   console.log("작은수" + num3);
  // // }
  // if(num1 == num2 && num2 == num3) {
  //   console.log("모두같다")
  // } else if(num1 < num2 && num1 < num3) {
  //   console.log("작은수 :" + num1);
  // } else if(num2 < num3 && num2 < num1) {
  //   console.log("작은수 :" + num2);
  // }  else {
  //   console.log("작은수 :" + num3);
  // }

  // 가위 바위 보 게임 만들기
  // 1.가위 , 2.바위 , 3.보

  // var user = parseInt(prompt("가위 바위 보를 입력하세요"));
  var com = Math.floor(Math.random() * 3) + 1;
  var sci = document.getElementById('scissors');
  var roc = document.getElementById('rock');
  var pap = document.getElementById('paper');


  sci.addEventListener('click', function(){
    if(com == 1){
      console.log("비겼음")
    }else if( com === 3){
      console.log("이겼음")
    } else {
      console.log("졌음")
    }
    sci.style.backgroundColor='red';
    roc.style.backgroundColor='aqua';
    pap.style.backgroundColor='brown';
  });
  roc.addEventListener('click', function(){
    if(com == 2){
      console.log("비겼음")
    }else if( com === 1){
      console.log("이겼음")
    } else {
      console.log("졌음")
    }
    sci.style.backgroundColor='black';
    roc.style.backgroundColor='red';
    pap.style.backgroundColor='blue';
  });
  pap.addEventListener('click', function(){
    if(com == 3){
      console.log("비겼음")
    }else if( com === 2){
      console.log("이겼음")
    } else {
      console.log("졌음")
    }
    sci.style.backgroundColor='puple';
    roc.style.backgroundColor='bisque';
    pap.style.backgroundColor='red';
  });


  // if(user === com) {
  //   console.log("무승부");
  // } else if(
  //   (user == 1 && com == 3) || 
  //   (user == 2 && com ==1) || 
  //   (user ==3 && com ==2)
  //   ) {
  //   console.log("나"+user + "컴퓨터" + com +"이겼다");
  // } else {
  //   console.log("나"+user + "컴퓨터" + com +"졌다");
  // }

  //