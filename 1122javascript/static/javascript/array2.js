// let num = [10,20,30,40,50,60];

// // num배열에 10단위로 100까지 숫자를 추가로 저장
// num.push(70,80,90,100);

// // num배열에 저장된 숫자를 한줄씩 하나씩 출력(반복)
// // for(var i = 0; i < num.length; i++) {
// //   document.write(num[i]+"<br>");
// // }

// // num배열에 저장된 숫자들에게 +3을 해주고 결과를 출력
// // for(var i = 0; i < num.length; i++) {
// //   num[i] = num[i] + 3;
// //   document.write(num[i] + "<br>");
// // }

// // num 배열에서 55보다 큰 숫자들만 출력하세요
// for(var i = 0; i < num.length; i++) {
//   if(num[i] > 55) {
//     document.write(`${num[i]} `);
//   }
// }

// let num1 = [1, 2, 3];
// let num2 = [4, 5, 6];

// // 두 배열에 같은 인덱스 위치에 있는 숫자들끼리의 합을 출력하세요
// for (var i = 0; i < 3; i++) {
//   total = num1[i] + num2[i];
//   document.write(`${total} `);
// }

//num1과 num2배열에서 짝수에 해당하는 숫자만 num이라는 배열에 저장하고 출력
// let num3 = new Array();

// for (var i = 0; i < 3; i++) {
//   if (num1[i] % 2 == 0) {
//     num3.push(num1[i]);
//   }
//   if (num2[i] % 2 == 0) {
//     num3.push(num2[i]);
//   }
//   console.log(num3[i])
// }


// 과제 //
// 한활이글스 투수들의 평균자책점
// name = ["주현상","윤대경","이민우","이태양","페냐","박상원"]
// era = [1.96,2.45,2.63,3.23,3.60,3.65]
// era -> 평균자책점
// 7명 선수들의 평균자책점의 평균치를 구하시오
// 평균치 이상인 선수들이 누구인지 출력하세요.

let name = ["주현상", "윤대경", "이민우", "이태양", "페냐", "박상원", "장시환"];
let era = [1.96, 2.45, 2.63, 3.23, 3.60, 3.65, 3.38];
let total = 0;

for (let i = 0; i < era.length; i++) {
  total += era[i]
}
let avg = total / era.length;
document.write(`평균자책점 : ${avg}<br>`)

for (let i = 0; i < era.length; i++) {
  if (era[i] > avg) {
    document.write(`${name[i]}: ${era[i]}`)
  }
}
