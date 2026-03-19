import repeat from "../repeat.js";

const logMultipleOf3 = (i) => {
  if (i % 3 == 0) console.log(i);
};

repeat(10, logMultipleOf3);
