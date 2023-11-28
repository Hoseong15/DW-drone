// // 배열
// // 배열 - 변수를 연속적으로 나열되어 있는 공간
// //  변수는 단 하나의 값만 저장 할 수 있지만
// //  배열은 다수의 값을 저장할 수 있다.
// //  많은 데이터를 저장하고 관리하기에 가장 쉬운 방법

// let arr1 = [];
// let arr2 = [1,2,3,4,5];
// let arr3 = new Array();


// arr3.push(1);
// arr3.push(41);
// arr3.push(44);
// // document.write(arr3[1]);

// for(let i = 0; i < arr3.length; i++) {
//   console.log(arr3[i])
// }

// let name = ["이순신", "강감찬", "장보고", "장영실","이성계"];

// document.write(name);
// name[2] = "김춘추";
// document.write("<br>"+name);

// // 배열에 새로운 데이터 저장 - push
// // push는 배열의 마지막에 데이터를 저장한다.

// // 배열에 저장된 데이터 삭제 - pop(마지막 데이터 삭제)
// document.write("<br> 삭제데이터" + name.pop());
// document.write("<br>"+name)

// // 배열에 맨 앞쪽에 저장 - unshift() 
// name.unshift("정도전");
// document.write("<br>"+name)

// // 배열에 맨 앞쪽 삭제 - shift();
// name.shift();
// document.write("<br>" + name);

// // 배열의 특정위치에 추가하거나 삭제 - splice();
// name.splice(2,0,"악진","장료","이전");
// // 2번쨰 인덱스에서 0개 삭제하고 3개 데이터 추가
// document.write("<br>" + name)
// name.splice(2,3);
// // 2번쨰 인덱스에서 3개 데이터 삭제
// document.write("<br>" + name)

// // 배열에서 특정위치의 데이터를 가져오기 - slice();
// let name2 = name.slice(1,3);
// // 1번쨰 인덱스에서 3번째전까의 인덱스 데이터 가져오기
// document.write("<br>" + name2);
// document.write("<br>" + name);

// // 다수의 배열을 하나로 합치기 - concat();
// let name3 = name.concat(name2);
// document.write("<br>"+name3);

// // 배열에 저장된 데이터들을 사전적순으로 정렬 - sort();
// name3.sort();
// document.write("<br>"+name3);

// // 배열을 역순으로 정렬(순서만 바뀌는것) - reverse();
// name3.reverse();
// document.write("<br>" + name3);

// // 배열의 모든 데이터를 지정된 문자로 연결하여 하나의 문자열로 변환
// // - join

// var str = name3.join("-");
// document.write("<br>" + str);

// document.write("<br>" + (str.split("-")));

// let num = new Array();

// for(var i = 1; i <= 10; i++) {
//   num.push(Math.floor(Math.random()*50)+1);
// }
// document.write(num + "<br>");

// 배열에서 저장된 숫자중에서 5의 배수만 출력하시오
// for(let i = 1; i <= num.length; i++) {
//   if(num[i] % 5 == 0) {
//     document.write(num[i]+" ");
//   }
// }
// let temp = new Array();
// for(var i = 1; i<num.length; i++) {
//   if(num[i] % 5 == 0) {
//     temp.push(num[i]);
//   }
// }
// document.write("5의배수는 "+temp + "<br>");




// for(var i = 0; i<num.length; i++) {
//   if(num[i] % 2 == 1) {
//     num[i] = num[i]+1;
//   }
// }
// document.write(num+"<br>");

// const subject = ["국어","영어","수학","과학"];

// for(var i = 0; i <subject.length; i++) {
//   var score = prompt(subject[i] + "점수입력");
//   document.write(subject[i]+": "+score+"점"+"<br>")
// }

// const subject = ["국어","영어","수학","과학"];
// let idx = 0; // subject 배열의 인덱스 표현 변수
// let score = new Array();  // 점수가 저장될 배열
// $("#subject").text(subject[idx]);

// function save() {
//   score.push(Number($("#score").val()));
//   if(idx == subject.length-1){
//     var total = score[0] + score[1]+ score[2] + score[3];
//     var avg = total/score.length;
//     var out = "<ul>";
//     for(var i = 0; i <subject.length; i++) {
//       out += "<li>" + subject[i] + ":"+score[i]+ "</li>"; 
//     }
//     out += "</ul>"
//     out += "총점 :" + total + "점  평균 :" + avg + "점"   
//     $("#result").text(out);
//   }
//   $("#subject").text(subject[++idx]);
//   $("#score").val(""); // input태그의 value비우기
//   $("#score").focus(); // input태그의 커서표시
// }

// 5명의 사람이 있다
// 5명이 놀다가 문득 궁금해졌다.
// 우리들의 평균 키는 얼마일까?
// 이 사람들의 궁금증을 해결해주세요
// member = ["김유신","김민숙","송재열","남기정","서종순"]

// const member = ["김유신", "김민숙", "송재열", "남기정", "서종순"];
// let idx = 0;
// let height = [];

// function save() {
//   height.push(Number($("#score").val()));

//   if (idx == member.length-1) {
//     var total = 0;
//     for (let i = 0; i < member.length; i++) {
//       total = total + height[i]
//     }

//     var avg = total / height.length;
//     var result = "";

//     for (var i = 0; i < member.length; i++) {
//       result += member[i] + height[i];
//     }

//     result += "평균키는 : " + avg
//     $("#result").text(result);
//   }

//   $("#member").text(member[++idx]);
//   $("#score").val("");
//   $("#score").focus();
// }

const member = ["손책","육손","주유","여몽","주연"];
let idx = 0;
let total = 0;
let tall = new Array();
let avg_below = new Array();  // 평균키보다 작은 사람들이 누구냐

$("#name").text(member[idx]);

function enroll() {
  tall.push(Number($("#tall").val()));
  total += tall[idx];
  if(idx == member.length-1) {
    var avg = total/member.length;

    var out = "<ul>";
    for(var i = 0; i <tall.length; i++) {
      out += "<li>"+member[i]+ "" + tall[i] + "cm</li>"

      if(tall[i] < avg) {
        avg_below.push(member[i]);
      }
    }
    out += "</ul>";
    out += "평균키 :" + avg + "cm" 
    out += "<div>평균키 미만" + avg_below + "</div>"
    $("#result").html(out);
  }

  $("#name").text(member[++idx]);
  $("#tall").val("");
  $("#tall").focus();












}