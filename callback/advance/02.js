/* 
**문제** 
배열과 콜백을 받아 새 배열을 반환하는 myMap 함수를 작성하세요.
*/
function myMap(arr, callback) {
  const resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    resultArr[i] = callback(arr[i]);
  }
  return resultArr;
}

const result = myMap([1, 2, 3], function (x) {
  return x * 2;
});

console.log(result);
