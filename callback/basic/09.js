import repeat from "../repeat.js";

const arr = [];

// i = 0일 때 별이 1개이므로 i + 1개 출력
const saveNumber = (i) => {
  arr.push(i);
};

repeat(5, saveNumber);

console.log(arr);
