import repeat from "../repeat.js";

let sum = 0;

// i = 0일 때 별이 1개이므로 i + 1개 출력
const add = function (i) {
  sum += i;
};

repeat(5, add);

console.log(sum);
