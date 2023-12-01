// let box = document.getElementsByClassName('box');
// for(let i = 0; i < box.length; i++) {
//   box[i].innerHTML = Math.floor(Math.random()*100)+1;
//   box[i].addEventListener('mouseover',function(){
//     this.style.fontSize='40px'
//   })
//   box[i].addEventListener('mouseleave',function(){
//     this.style.fontSize='20px'
//   })

// }

/*       // 이벤트  //
마우스 왼쪽클릭 : click  
더블클릭 : dbclick
마우스 오른쪽클릭 : rightclick
마우스 누르면 : mousedown 
마우스 떼면 : mouseup
마우스 움직이면 : mousemove 
마우스가 태그위로 mouseover
마우스가 태그 벗어나면 : mouseout
키보드 누르면 : keydown 
키보드떼떼면 :keyup
글자입력 되면 : keypress 
브라우저 크기변하면 : resize
브라우저 스크롤 움직이면 : scroll
input태그 내용이 변경되면 : change 
input태그 선택하면 : select 
*/
 - 

$(".box").on('click',function(){
  $(this).css("background", "red");
});

for(var i = 0; i < $(".box").length; i++) {
  $(".box").eq(i).html(Math.floor(Math.random()*100)+1)
}
