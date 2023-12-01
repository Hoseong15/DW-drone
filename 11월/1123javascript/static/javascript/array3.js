const store = ["슈펜","니꼴밀러","피에르가르뎅","엘칸토"
,"미쏘","치크","뉴발란스","애슐리","자연별곡","코코몽키즈랜드"];

const floor = [1,1,1,4,3,5,2,7,8,10];
const zone = ["D","B","C","A","D","A","C","A","A","A"];


// store 매정명, floor - 층수, zone - 구역

// 매장명을 입력하면 매장의 위치를 출력
// keydown, keyup,keypress

$("#store").keyup(function(k){
  if(k.keyCode == 13) {
    store_search();
  }
})

function store_search(){
  let brand = $("#store").val();
  //배열에서 데이터 존재유무 확인
  var idx = store.indexOf(brand);
  if(idx == -1) {
    $("#result").text("존재하지않는 브랜드");
  } else {
    var res = `<b>${floor[idx]}</b>층, ${zone[idx]}구역`
    res += `<h3>${floor[idx]}층 매장</h3>`;

    let same_floor = new Array(); 
    for(let i = 0; i < floor.length; i++) {
      if(floor[i] == floor[idx] && i!=idx) {
        same_floor.push(store[i]);
      }
    }
    res += same_floor;

    $("#result").html(res);
  }
}


