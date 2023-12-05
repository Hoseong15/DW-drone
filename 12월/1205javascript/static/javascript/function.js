$('.house').on('dblclick',update);


// javasciprt - innerHtml , jquery - html()
// innerHtml = "<input>", html('<input>)
// innerHtml과 html()은 덮어쓰기 형태로 추가한다.(기준의 내용삭제)

// a라는 함수안에 변수의 값을 b라는 함수에 사용하려면
// b함수의 매개변수를 통해 전달하거나, 
// 전역변수를 통해 사용 가능하게한다.

// on("이벤트명", "이벤트 발생 시 실행 할 함수")
// 이벤트 발생 시 함수는 익명함수(function(){})이거나 함수명 만 작성

// input type이 날짜 또는 시간형식 일 경우에
// value값은 형태가 2023-12-01 11:09 형식이다.
// 즉 input type=date value= '2023-12-01'이 되어야한다.


function update(){
 var td = $(this); // 클릭한 td태그
 var td_text = $(this).text(); // 클릭한 td태그만의 텍스트
 var type="text";

 if( td.hasClass("date") ){
  type="date";
  td_text = changeDate(td_text);
 } 

 td.html(`<input type='${type}' value='${td_text}'>
          <button class='modify'>수정</button>`);
 $('.modify').on('click',function(){
  save(td);
 });
}
// 내용이 복잡해지는 경우 분할하여 코드가 한곳에 집중되는것을 방지한다.
// 코드기 힌곳에 집중되어 작성되면 개발자 입장에서 코드를 파악하기 힘들다.
// 코드를 정리하여 작성하는 것 개발자가 가져야할 습관중 하나이다.

function changeDate(date) {
  // td_text = td_text.split(".")[0] +"-" + td_text.split(".")[1];
  let month = digits(date.split(".")[0]);
  let day = digits(date.split(".")[1]);
  return "2023-" +month + "-" + day; 
}
//중복적으로 코드가 사용되는경우 함수로 구현한다.
function digits(num) {
  if(num.length == 1)
    num = "0" + num;
  return num;
}

function save(e){ // 수정버튼 클릭이벤트 등록시 td를 e변수로 전달받음
  var text = e.children('input').val(); // input태그의 작성된 텍스트
  e.text(text);
}