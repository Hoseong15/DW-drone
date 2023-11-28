// id가 name인곳에 이름을 입력하여 성적조회버튼을 클릭한다.
//  입력한 이름의 학생 성적을 국어 :점 수학 :점 영어 :점 
//  평균 점 출력
// 이름이 없는 학생 검색시 등록되지않은 학생입니다. 출력

//  id가 avg인곳에 평균 점수를 입력하고 검색 버튼 클릭
//  입력한 평균 점수 이상이 학생들의 이름을 출력
//  해당되는 학생이 한명도 없을시 검색 결과 없다고


let name = ["하지원", "전지현", "남기현",
  "이다희", "이가림", "김정환"];

let score = [
  [78, 87, 54, 219, 73],
  [80, 70, 60, 210, 70],
  [88, 99, 65, 252, 84],
  [95, 34, 87, 215, 71],
  [10, 20, 30, 60, 20],
  [1, 2, 3, 6, 2]
];

function search() {
  var a = $("#name").val();
  var index = name.indexOf(a);

  if (index != -1) {
    var num = score[index];
    $("#result").text(`국어: ${num[0]} 수학: ${num[1]} 영어: ${num[2]} 평균:${num[4]}`);
  } else {
    $("#result").text("없는 학생인데요?")
  }
}

function over() {
  var ac = parseInt($("#avg").val());
  var output = "";

  for(let i =0; i < score.length; i++) {
    if(score[i][4] >= ac) {
      output += name[i]+ " ";
    }
  }
  if(output == "") {
    output = "조건에 맞는 학생이없다."
  }
  $("#result").text(output);

}












