/*
# 7. 성공/실패 콜백 분리

**문제**

다음 요구사항에 맞는 `checkNumber` 함수를 작성하세요.

- 첫 번째 인수: 숫자
- 두 번째 인수: 성공 콜백
- 세 번째 인수: 실패 콜백
- 숫자가 10보다 크면 성공 콜백 실행
- 아니면 실패 콜백 실행
*/

function checkNumber(num, onSuccess, onFail) {
  if (num > 10) {
    onSuccess();
  } else onFail();
}

checkNumber(
  15,
  function () {
    console.log("성공");
  },
  function () {
    console.log("실패");
  },
);
