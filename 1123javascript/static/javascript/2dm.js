let image = ["딸기.jpg", "망고.jpg", "배.jpg", "복숭아.jpg",
  "사과1.jpg", "참외.jpg", "키위.jpg", "파인애플1.jpg"];

let board = new Array();  // 게임판

let box = 0;


box = $(".pic").length;

for (var i = 1; i <= parseInt(box / 2); i++) {
  var tmp = new Array();
  for (var k = 1; k <= parseInt(box / 2); k++) {
    var t = Math.floor(Math.random() * parseInt(box / 2));
    if (tmp.indexOf(t) == -1)
      tmp.push(t);
    else
      k--;
  }
  board.push(tmp);
};

for (var i = 0; i < board.length; i++) {
  for (var k = 0; k < board[i].length; k++) {
    $(".pic").eq(i * board[i].length + k).
      find("img").attr("src", "./static/images/" + image[board[i][k]]);

    $(".pic").eq(i * board[i].length + k).
      find("img").hide();
  }
};


let clk = 0; // 클릭횟수
let click_img = 0; // 첫번쨰 클릭한 이미지
let pic = [-1,-1]; //서로 다른이미지 선택 한 경우
let same = false; // 같은 이미지 찾은경우 감추기 안되게

$(".pic").on("click", function () {
  $(this).find("img").show();
  clk++;
  var th = $(".pic").index($(this));

  if (clk == 1) {
    if(pic[0] != -1 && !same){
      $(".pic").eq(pic[0]).find("img").hide();
      $(".pic").eq(pic[1]).find("img").hide();
    }
    pic = [-1,-1];
    same=false;
    click_img = board[parseInt(th / parseInt(box / 2))][th % parseInt(box / 2)];
    pic[0] = th;
  } 
  
  if (clk == 2) {
    var sec = board[parseInt(th / parseInt(box / 2))][th % parseInt(box / 2)];
    pic[1] = th;
    if(click_img == sec){
      alert("같은 이미지 찾음");
      same = true;
    } 
     
    clk=0;
    click_img = 0;
  }
  

});


