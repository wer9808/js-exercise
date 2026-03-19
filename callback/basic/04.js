import repeat from "../repeat.js";

const logSquare = (i) => {
  console.log(Math.pow(i, 2));
};

repeat(5, logSquare);
