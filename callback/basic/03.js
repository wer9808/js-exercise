import repeat from "../repeat.js";

const logOdd = (i) => {
  if (i % 2 == 1) console.log(i);
};

repeat(10, logOdd);
