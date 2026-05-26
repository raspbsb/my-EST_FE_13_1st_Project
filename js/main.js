const popup = document.querySelector(".popup-ui");
const popupCloseBtn = popup.querySelector(".popup-close");
const agree = document.querySelector("#agree");
const link = document.querySelectorAll(".popup-ui a");

// 쿠키 확인 있는지 확인하는 result 변수 생성
let result = document.cookie.includes("popup=noPopup");
if (result === true) {
  // popup=noPopup 쿠키가 있다면, dialog 끄기
  popup.close();
} else {
  // popup=noPopup 쿠키가 없다면, dialog 켜기
  popup.showModal();
}

// 쿠키 생성/제거 이벤트
popupCloseBtn.addEventListener("click", () => {
  // 닫기 버튼을 클릭하면 popup이 안보인다.
  popup.close();
  if (agree.checked) {
    // 하루 안보기를 체크하고 닫았다면 오늘까지 유지되는 popup=noPopup 쿠키 생성
    createCookie("popup", "noPopup", 1);
  } else {
    // 하루 안보기를 체크하지 않고 닫았다면 popup=noPopup 쿠키 제거
    createCookie("popup", "noPopup", -1);
  }
});

// 쿠키 생성 함수
function createCookie(name, value, expire) {
  let today = new Date();
  today.setDate(today.getDate() + expire);
  document.cookie = `${name} = ${value}; Expires=${today.toString()}`;
}
