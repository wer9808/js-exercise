// n번 루프를 돌면서 f에 현재 인덱스를 전달하여 실행하는 함수
export default function repeat(n, f) {
  for (let i = 0; i < n; i++) {
    f(i);
  }
}
