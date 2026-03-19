import repeat from "../repeat.js";

const logDouble = (i) => {
  console.log(i * 2);
};

repeat(10, logDouble);
