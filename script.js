var req = new XMLHttpRequest();
req.open("GET", "json/image_list.json"); // json 문서 파일 얻어오도록 요청
req.onreadystatechange = function () {
  // 콜백함수 등록 == 두번 째 인자에 부합하는 조건 값이 대입되면 함수 호출
  if (this.readyState == 4) {
    // 데이터 통신이 정상적으로 수신 됐을 때
    // console.log(this.response);
    // response 출력
    var data = JSON.parse(this.response);
    // image_list에 정제된 json 파일의 데이터를 파싱하여 값으로 반환하는 반복.
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      // div 변수를 선언하여 document에 div 엘리먼트를 생성하는 함수 할당
      div.setAttribute("class", "image");
      // class = "image"를 포함하고 있는 div 태그 생성
      div.onclick = function () {
        // if (this.getAttribute("class").indexOf("image-selected") == -1) {
        //   this.setAttribute("class", "image image-selected");
        // } else {
        //   this.setAttribute("class", "image");
        // }
        this.classList.toggle("image-selected");
        //<div class ="image image-selected"> 생성
      };
      var img = document.createElement("img");
      // img 태그 생성
      img.src = data[i]; // src에 datap[i] 인덱스 값을 소스로 전달.
      div.appendChild(img);
      // img content를 포함하는 div 태그 생성.

      document.body.appendChild(div);
      //body 태그 안에 div 태그 생성.
    }
  }
};

req.send();

function selectAll(btn) {
  var images = document.getElementsByClassName("image");
  // image를 포함한 div 태그를 검색
  for (var i = 0; i < images.length; i++) {
    if (btn.value === "Unselect All") {
      images[i].classList.remove("image-selected");
    } else {
      images[i].classList.add("image-selected");
    }
  }

  if (btn.value === "Unselect All") {
    btn.value = "Select All";
  } else {
    btn.value = "Unselect All";
  }
  // btn.value = "Unselect All";
}
