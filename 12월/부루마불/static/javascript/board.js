const zone_name = [
  "복지기금", "화성", "성남", "창원", "제주", "용인", "수원", "울산",
  "인천공항","청주","광주","부천","대구","남양주","인천","포항",
  "복지기금납부","천안","부산","전주","서울","안산","대전",
  "무인도","안양","김해","평택","시흥","파주","의정부","김포","출발"
];
const zone_color = ["#FF2424", "#53C14B", "#FFBB00", "#121212"];
const land_purchase = [ // 각 도시의 매입가격(만단위)
  0, 25, 27, 26, 34, 28, 27, 39,
  0, 16, 42, 20, 45, 19, 48, 27,
  0, 21, 52, 20, 80, 22, 120, 
  0, 12, 10, 15, 12, 9, 9, 7, 0
];
const bg_image = [ // 모서리구역의 배경이미지
  "출발.png", "무인도.jpg","복지기금.png","인천공항jpg"
];

// 각 구역의 객체 생성자 함수
// 구역이름, 토지매입가격, 소유자, 색상, 기능(모서리), 이미지

function zone_object(name, purchase, owner, color, func, image) {
  this.name = name;
  this.purchase = purchase;
  this.owner = owner;
  this.color = color;
  this.func = func;
  this.back = image;
}
// 플레이어 생성자 함수
function player(num) {
  this.num = num;
  this.color = color;
  this,money = 100; // 초기 게임머니 100만원
  this.zone = new Array(); // 매입 한 토지
  this.drrft_turn = 0; // 무인도 남은 턴
  this.location = 0; // 현재위치
}

// 전역변수
let fund = 0; // 사회복지기금 모금 금액 저장변수
let island_ = new Array(); // 무인도에 도착한 플레이어
let zone = new Array(); // 각 구역의 객체 저장 배열

function zone_create() {
  for(var i = 0; i < zone_name.length; i++) {
    for( var k = 0; k < zone_name[i].length; k++) {

    }
  }
}
zone_create();
