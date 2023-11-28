$("#join").on('click', function () {
  if ($("#myid").val() == '') {
    alert("아이디를 입력하세요");
    $("#myid").focus();
  }
  if ($("mypw").val() != $("#pwre").val()) {
    alert("비밀번호가 달라요");
    $("#mypw").val('');
    $("#pwre").val('');
    $("#mypw").focus();
  }
})

$("#mypw").on('keyup', function () {
  let len = $(this).val().length;
  if (len < 6 || len > 12) {
    $(".pwvaild").text("비밀번호는 6~12자 입니다.");
  } else {
    $(".pwvaild").text("안전합니다!");
  }
})




