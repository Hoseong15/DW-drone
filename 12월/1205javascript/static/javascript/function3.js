$('.item').on('click', input);

let oldNum = 0; // 연산자 클릭 이전의 숫자 저장변수
let op = ''; // 클릭한 연산자 저장변수
let nowNum = 0; // 최근에 클릭한 숫자 저장변수

function input() {
  var div = $(this); // 클릭한 div태그
  var data = div.data("value");

  data = (data === "=" ? calc() : operand(data, isNaN(data)));

  $('#res').append(data);
};

function calc() { // = 요 녀석을 클릭하면 oldNum과 nowNum을 op에 맞춰서 계산
  $("#res").empty(); // 태그내부를 비워주는 함수
  switch(op) {
    case "+":
      return nowNum = oldNum + nowNum; 
    case "-":
      return nowNum = oldNum - nowNum; 
    case "*":
      return nowNum = oldNum * nowNum; 
    case "/":
      return nowNum = oldNum / nowNum;  
  }
};


function operand(d, i) {
  if (i) { // isNaN이 true라면 숫자변환불가(숫자가 아님),false면 숫자
    op = d; // 클릭한 연산자를 op에 저장
    oldNum = nowNum; // 연산자 클릭했으니까 처음 입력한 숫자를 oldNum에 옮기기
    nowNum = 0; // 두번쨰 숫자 입력받을 수 있도록 0으로 초기화
  } else {
    nowNum = nowNum * 10 + Number(d);
  }
  return d;
};