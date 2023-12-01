// 브라우저에 html태그가 모두 로드 되면 실행되는 스크립트 코드
window.onload=function() {

  // 조건문 - if문 , switch문

  // let a = 3;
  // switch(a){
  //   case 1:
  //     console.log("1");
  //     break;
  //   case 2:
  //     console.log("2");
  //     break;
  //   case 3:
  //     console.log("3");
  //     break;
  //   case 4:
  //     console.log("4");
  //     break;
  // }

  // var alp = "t";
  // switch(alp) {
  //   case "t" :
  //     document.write("table");
  //     break;

  //   case "d" :
  //     document.write("dog");
  //     break;

  //   case "a" :
  //     document.write("apple");
  //     break;
  // }

  // var airJordan = 2;
  // var airMax = 97;
  // var air = "나이키 에어포스 90 재고"
  
  // switch(air.split("")[1]){
  //   case "에어조던" :
  //     document.write("현재 재고 수량은" + airJordan + "개");
  //     break;

  //   case "에어맥스" :
  //     document.write("현재 재고 수량은" + airMax + "개");
  //     break;

  //   case "a" :
  //     document.write("apple");
  //     break;

  //   default:
  //     document.write("뭔지 모르겠습니다.") 
  // }


  // var score = 76;
  // switch( parseInt(score / 10) ) {
  //   case 10 : case 9:
  //     document.write("A학점");
  //     break;
  //   case 8 :
  //     document.write("B학점"); 
  //     break;
  //   case 7 :
  //     document.write("C학점");
  //     break;
  //   default :
  //     document.write("F학점");
  // }


  // 주사위 게임 만들기 // 
  // 컴퓨터와 주사위 게임을 한다.
  // 각자 주사위 하나씩 던진다. 주사위 값이 큰쪽이 이긴다.
  // 단, 두 주사위값이 같은 숫자라면 나온쪽이 이긴다.
  // 둘다 같은숫자가 나온다면 합이 큰쪽이 이긴다
  
  // var user = Math.floor(Math.random()*6)+1;
  // var com = Math.floor(Math.random()*6)+1;
  
  // if(user > com) {
  //   console.log("유저"+user +"컴퓨터" +com+ "내가 이겼다");
  // } else if(user === com) {
  //   console.log("유저"+user +"컴퓨터" +com+ "비겼음");
  // } else {
  //   console.log("유저"+user +"컴퓨터" +com+ "컴퓨터가 이겼다");
  // }

  // var user1 =Math.floor(Math.random()*6)+1;
  // var user2 =Math.floor(Math.random()*6)+1;
  // var com1 =Math.floor(Math.random()*6)+1;
  // var com2 =Math.floor(Math.random()*6)+1;

  // let user = user1 + user2;
  // let com = com1 + com2;
  

  // if(user > com) {
  //   if((com1 == com2) && (user1 != user2)){
  //     console.log("컴퓨터가 같은 숫자가 나와서 패배")
  //   } else{
  //     console.log("승리")
  //   }
  // } else if(user < com) {
  //   if((user1 == user2) && (com1 != com2)) {
  //     console.log("내가 같은 숫자가 나와서 승리")
  //   } else {
  //     console.log("패배")
  //   }
  // } else {
  //   if((user1 == user2) && (com1 != com2)) {
  //     console.log("승리")
  //   } else if((user1 != user2) && (com1 == com2)) {
  //     console.log("패배")
  //   } else {
  //     console.log("무승부")
  //   }
  // }



  // 과제   if문으로 작성 //
  // 3. 주차비 정산
  // apple주차장의 주차요금 표
  // 기본 주차비 - 1000원 , 기본시간 30분
  // (30분이내 주차 시 1000원 , 5분 주차해도 1000원 , 39분까지 1000원)
  // 10분당 100원씩 추가 (40분 주차시 1100원,  54분 1200원)

  // 2시간 이상 주차시 기본요금 변경
  //      기본요금 - 1500원
  // 4시간 이상 주차시 기본요금 변경
  //      기본요금 - 2500원
  // 8시간 이상 주차시 요금은 무조건 10,000원
  //      (10시간,12시간,9시간 43분  무조건 10,000원)

  //      (2시간 1분 주차시 - 1500원 , 2시간 34분 - 1800원)
  // 주차시간을 분단위로 입력하여 주차요금이 얼마인지 출력하시오.


  var time = parseInt(prompt("몇분 주차 하셨습니까?"));
  var cost = 1000;

  if(time >= 480) {
    cost = 10000; time=0
  } else if(time >= 240) {
    cost = 2500; time = time-240
  } else if(time >= 120) {
    cost = 1500; time = time-120
  } else {
    time= time < 30 ? 0 : time - 30;
  }
  var pay = Math.floor(time / 10) + cost;
  console.log(`주차요금 ${pay}원 `);


}