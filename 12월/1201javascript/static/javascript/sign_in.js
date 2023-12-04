
let mid = ["abc","good","nice","skyblue","as","vv","gg","rw"];
let mpw = ["123","456","789","111","222","333","444","555"];


$("#signBt").on('click', function () {

  if ($('#id').val() == '') {
    alert("아이디 입력바람");
    $('#id').focus();
  } else if ($('#pw').val() == '') {
    alert("비번 입력하시오");
    $('#pw').focus();
  } else{

    //아이디 존재유무
    var idx = mid.indexOf($("#id").val());
    if(idx == -1) {
      var ok = confirm("아이디가 없습니다\n회원가입하시겠습니까?");
      if(ok) location.href="signup.html"  
    } else if(mpw[idx] == $("#pw").val()){
      alert("로그인 성공");
    } else{
      alert("비밀번호가 일치하지않습니다.");
      $("#pw").val('').focus();
    }

    // for(var tmp in mid){
    //   if(mid[tmp] == $('#id').val()) {
    //     if(mpw[tmp] == $('#pw').val()) {
    //       alert("로그인 성공");
    //       break;
    //     } else{
    //       alert("비밀번호가 일치하지않습니다.")
    //       break;
    //     }
    //   }
    // }
  }
  //var tmp is mid -> mid의 인덱스와 값을 tmp에 저장
  //var tmp of mid -> mid의 값을 tmp에 저장






  // if($('#id').val != ''){
  
  // }
  // // 로그인 시도가 된다면 - 아이디 비밀번호 올바르지않은경우
  // else if ($('#id').val != '' && $('#pw').val != '') {
  //   alert("아이디 또는 비밀번호가 올바르지 않습니다.");
  //   $('#id').val('').focus();
  //   $('#pw').val('');
  // }


});

