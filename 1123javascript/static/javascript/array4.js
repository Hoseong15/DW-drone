// const movie = ["서울의 봄","프레디의피자가게","사채소년",
// "헝거게임","더와일드","더마블스","30일","나폴레옹"];

// const grade = [8.7,7.3,7.3,6.7,3.9,6.9,9.6,9.0];

// const nation = ["한국","미국","한국","미국","미국","미국","한국"
// ,"영국","한국"];


// //영화 제목을 검색하여 평점과 국가을 출력하세요
// function search(){
//   let seoulSpring =($("#movie").val()).replace(/\s/g , "");
//   var index = movie.indexOf(seoulSpring);
//   console.log(index)
//   if(index == -1) {
//     $("#result").text("없는 영화인데?");
//   } else {
//     $("#result").text( `평점 : ${grade[index]}점 ${nation[index]}에서 개봉함`);
//   }
//  }


// 다차원배열 - 1차원배열이 1차원배열들을 연결하여 만들어지는 배열
// 여러개의 1차원배열들이 존재하는 배열
// let a = [1, 2, 3, 4, 5,];
// let b = ["아", "야", "어", "여", "오"];
// let c = [a, b];
// console.log(c[0][1])

let num = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(num[0][2]);
// 2차원배열은 인덱스가 2개이기 때문에 반복문도 2번 사용된다
for (let i = 0; i < num.length; i++) {
  for (let k = 0; k < num[i].length; k++) {
    console.log(num[i][k])
  }
}