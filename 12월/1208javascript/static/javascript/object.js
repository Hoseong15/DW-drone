// 객체, json

// 전역변수
let name = ""; // 입력한 이름저장
let age = ""; // 입력한 나이 저장
let list = []; // 배열

let info = {
  100 : {name:"이순신", job:"군인", 활동지:"여수"},
  101 : {name:"김유신", job:"군인", 활동지:"경주"},
  102 : {name:"장보고", job:"군인", 활동지:"청해진"},
  103 : {name:"문익점", job:"산업스파이", 활동지:"원나라"}
};


function save() { // 저장버튼 클릭시 동작할 함수
  name = $('#name').val();
  age = $("#age").val();

  var obj = { 이름: name, 나이: age };
  list.push(obj);

  var out = "";

  for(var object of list) {
    out += object.이름 + " " + object.나이 + "<br>"
  }

  $('#res').html(out);
};

function list_print() { // 객체에 저장된 value(데이터)를 출력하는 함수
  // 객체의 key만 추출하는 방법 - Object.keys(객체명);
  // 객체의 value만 추출하는 방법 - Object.values(객체명);
  // Object.keys(), Object.values()의 결과는 배열에 저장된다.

  let info_keys = Object.keys(info);

  for(var key of info_keys) { // key변수에는 info객체의 key가 하니씩 저장
    $("#res").append(info[key].name + " " + info[key].job + " " + info[key].활동지 + "<br>") ;
  }
}
