/* 
**문제** 
배열과 콜백을 받아 각 요소에 대해 콜백을 실행하는 myForEach를 작성하세요.
*/
function myForeach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    callback(item, i);
  }
}

myForeach(["a", "b", "c"], function (item, index) {
  console.log(index, item);
});
