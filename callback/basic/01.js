import repeat from "../repeat.js";

// 입력되는 i 값을 출력
// i로 입력되는 값 : 현재 반복회차 인덱스
const logAll = function (i) {
  console.log(i);
};

// 5번 반복해서 logAll 실행
repeat(5, logAll);
