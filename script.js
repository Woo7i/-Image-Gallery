var req = new XMLHttpRequest();
req.open("GET", "image_list.json"); // json 문서 파일 얻어오도록 요청
req.onreadystatechange = function () {
  // 콜백함수 등록 == 두번 째 인자에 부합하는 조건 값이 대입되면 함수 호출
  if (this.readyState == 4) {
    // 데이터 통신이 정상적으로 수신 됐을 때
    console.log(this.response);
    // response 출력
  }
};

req.send();
