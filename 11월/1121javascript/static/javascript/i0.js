function enroll() {
  // let nameTag = document.getElementById('name');
  // let res = document.getElementById('result');
  // // res.innerHTML = nameTag.value;
  // res.innerText = "<h1>nameTag.value</h1>";

  // jqury 태그 선택방법 - $("#아이디", ".클래스")

  // document.getElementById('name').value를
  // jqury로 변경하면 $("#name").val()

  // $("#result").text($("#name").val());

  var birth = $("#name").val();
  var age = 2023 - Number(birth.substring(0,4));
  $("#result").text(age);
};

