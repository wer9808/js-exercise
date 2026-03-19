import repeat from "../repeat.js";

// i = 0일 때 별이 1개이므로 i + 1개 출력
const logStar = (i) => {
  console.log("*".repeat(i + 1));
};

repeat(4, logStar);
