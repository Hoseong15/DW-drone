// 2차원 배열 // 

// let arr = [
//   [1,2,3,4,5,6,7,8] ,
//   [10,20,30,44,55,66,77]
// ];

// for(let i = 0; i < arr.length; i++) { // 2번반복 - arr에는 저장공간이 2개
//   for(let k = 0; k < arr[i].length; k++) { // arr[0]인덱스 length,arr[1]인덱스 length
//     document.write(arr[i][k] + " ")
//   }
//   document.write("<br>")
// }

let people = [
  ["김유신", 45, "군인"],
  ["이순신", 38, "군인"],
  ["서종우", 51, "변호사"],
  ["김민수", 32, "편의점알바"],
  ["송재영", 25, "농심연구원"],
  ["이민재", 29, "한화이글스관람객"]
];

for (let i = 0; i < people.length; i++) {
  for (let k = 0; k < people[i].length; k++) {
    document.write(people[i][k] + " ");
  }
  document.write(people[i][0])
  document.write("<br>")

  //  if(people[i][1] > 30) {
  //    document.write(people[i][0] + " ," + people[i][2] + "<br>");
  //  }

  // if(people[i][0].indexOf("김") != -1) {
  //   document.write(people[i][0] );
  // }
}

// let board = [
//   [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   [1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
//   [1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
//   [1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
//   [1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
//   [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
//   [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
//   [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
//   [1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 2],
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// ];

// let x = 0; y = 0;

// function draw() {
//   for (var i = 0; i < board.length; i++) {
//     for (var k = 0; k < board[i].length; k++) {
//       if (board[i][k] == 0)
//         $("#box").append("&ensp;&ensp;");
//       if (board[i][k] == 1)
//         $("#box").append("■")
//       if (board[i][k] == 2) {
//         $("#box").append("♣")
//         x = k; y = i;
//       }
//     }
//     $("#box").append("<br>")
//   }
// }

// draw();

// $(document).on("keyup", function (e) {
//   switch (e.keyCode) {
//     case 87:
//       if (board[y - 1][x] !== 1) {
//         board[y][x] = 0;
//         board[--y][x] = 2;
//       }
//       break;
//     case 65:
//       if (board[y][x - 1] !== 1) {
//         board[y][x] = 0;
//         board[y][--x] = 2;
//       }
//       break;
//     case 83:
//       if (board[y + 1][x] !== 1) {
//         board[y][x] = 0;
//         board[++y][x] = 2;
//       }
//       break;
//     case 68:
//       if (board[y][x + 1] !== 1) {
//         board[y][x] = 0;
//         board[y][++x] = 2;
//       }
//       break;
//     default:
//       alert("wasd를 방향키로 사용합니다");
//   }
//   $("#box").html("");
//   draw();
// });



