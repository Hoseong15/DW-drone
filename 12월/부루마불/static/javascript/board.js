// 플레이어 생성자 함수
function player(num, color) {
  this.num = num;
  this.color = color;
  this.money = 100; // 초기 게임머니 100만원
  this.zone = new Array(); // 매입 한 토지
  this.drrft_turn = 0; // 무인도 남은 턴
  this.location = 0; // 현재위치
}

// 전역변수
let fund = 0; // 사회복지기금 모금 금액 저장변수
let island_ = new Array(); // 무인도에 도착한 플레이어
let zone = new Array(); // 각 구역의 객체 저장 배열
let player_list = new Array(); // 개임 참가자


// 함수정의
// 구역객체들을 zone 클래스 div에 적용하기

//현재 상황 - json파일내용은 어제 다루었던 zone배열안의 내용과 같다
// getJSON으로 json파일을 읽어와서 zone배열에 저장
// zone배열의 내용은 어제와 동일
// zone_draw()함수는 zone배열의 값을 가지고와서 화면에 표시
// 하지만 zone_draw()함수가 정상적으로 동작하지 못하고있다.
// getJSON의 function(data) {}안으로 zone_draw()함수를 넣어주면
// 정상적으로 실행된다.
// 비동기문제 발생!!!
// 비동기처리 코드가 실행이 완료되면 그다음 실행 될 수 있게 하는방법
// async, await
// async를 비동기함수 앞에 붙여준다.
// await는 비동기 처리 앞에 붙여준다.
// asunc function a(){await $.getJSON();}
$.getJSON("./data/city.json", function(data){
  zone= data;
  zone_draw()
});

function zone_draw() {
  $.each(zone, function(idx, obj){
    if(idx == 0 || idx == 8 || idx == 23 || idx == 31){
      $(".zone").eq(idx).css("background-image","url(./static/images/"+obj.back+")");
      $(".zone").eq(idx).css("background-size", "cover");
      $(".zone").eq(idx).css("background-position", "center");
    }
    else{
      $(".zone").eq(idx).children(".zone_name").text(obj.name);
      $(".zone").eq(idx).children(".zone_color").css("background", obj.color);
    }
  });
}

$("#enroll").on('click', game_init );
$("#player_number").on('change', function(){
  $(this).next().text($(this).val() + "명");
});
$("#player_number + label").text(2 + "명");
$("input[type=color]").on('change', change_pcl);

function change_pcl() {

}

function game_init() {
  var pc = Number( $("#player_number").val() );
  $("#game_state").html("<h3>게임현황</h3>");

  for(var i = 1; i <= pc; i++) {
    player_list.push(new player(i, "#ff0000"));
    $("#game_state").append(
      `<div class='ps'>
        <b class='pnum'>${i}</b>
        <input type='color' id='pcl${i}' value='${player_list[i-1].color}'>
        <div class='steate'>
          자금 : <b id='pm${i}'>${player_list[i-1].money}만원</b>
          보유도시 : <b id='pcity${i}'>${player_list[i-1].zone.length}개</b>
        </div>
      </div>`
    );
  }
  $("#game_state").show();
  $("#set_player").hide();
}

// 게임 플레이어수에 맞는 말 만들기
// svg - scalable vector graphics



// const zone_name = [
//   "복지기금", "화성", "성남", "창원", "제주", "용인", "수원", "울산",
//   "인천공항","청주","광주","부천","대구","남양주","인천","포항",
//   "복지기금납부","천안","부산","전주","서울","안산","대전",
//   "무인도","안양","김해","평택","시흥","파주","의정부","김포","출발"
// ];
// const zone_color = ["#FF2424", "#53C14B", "#FFBB00", "#121212"];
// const land_purchase = [ // 각 도시의 매입가격(만단위)
//   0, 25, 27, 26, 34, 28, 27, 39,
//   0, 16, 42, 20, 45, 19, 48, 27,
//   0, 21, 52, 20, 80, 22, 120, 
//   0, 12, 10, 15, 12, 9, 9, 7, 0
// ];
// const bg_image = [ // 모서리구역의 배경이미지
//   "출발.png", "무인도.jpg","납부.jpg","인천공항.jpg"
// ];

// // 각 구역의 객체 생성자 함수
// // 구역이름, 토지매입가격, 소유자, 색상, 기능(모서리), 이미지

// function zone_object(name, purchase, owner, color, func, image) {
//   this.name = name;
//   this.purchase = purchase;
//   this.owner = owner;
//   this.color = color;
//   this.func = func;
//   this.back = image;
// }



// function zone_create() {
//   for(var i = 0; i < zone_name.length; i++) {
//     var color =  zone_color[0];
//     if(i >=0 & i<=7) 
//       color =  zone_color[2];
//     if( (i >=8 & i<=23) & i%2==0)
//       color =  zone_color[3];
//     if( (i >=8 & i<=23) & i%2==1)
//       color =  zone_color[1];
      
//     var image = "";
//     if(i == 0) image = bg_image[2];
//     if(i == 8) image = bg_image[3];
//     if(i == 23) image = bg_image[1];
//     if(i == 31) image = bg_image[0];



//     zone.push(new zone_object(
//       zone_name[i], land_purchase[i], "", color, "", image,   
//     ));
//   }
//   console.log(JSON.stringify(zone));
// }
// zone_create();

