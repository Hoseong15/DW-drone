$("#allchk").on('click',function(){
  let check = $(this).is(":checked");
  if(check) {
    $(".agree").prop('checked', true)
  } else {
    $(".agree").prop('checked', false)
  }

})

//클래스명이 agree인 체크박스에 하나씩 체크하거나 
//전체체크 된 경우 하나이상 체크해제 했을때 모두 동의
// 체크박스를 해체

$(".agree").on('click',function(){
  let c = $(".agree:checked").length;
  let d = $(".agree").length;
  if(c == d) {
    $("#allchk").prop('checked',true);
  } else {
    $("#allchk").prop('checked',false);
  }
})

$("#pass").on('click',function(){
  let a = $(".agree:checked").length;
  let b = $(".agree").length;
  if(a != b) {
    alert('모두 체크하세요')
  } 
})






