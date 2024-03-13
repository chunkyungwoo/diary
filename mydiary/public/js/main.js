const NAV_TEXT = {
  일기장: "일기장",
  육아일기: "육아일기",
  나의목표: "나의목표",
  반려동물일기: "반려동물일기",
  로그인: "로그인",
  회원가입: "회원가입",
  작성하기: "작성하기",
  로그아웃: "로그아웃",
};

document.addEventListener("DOMContentLoaded", () => {
  const main_nav = document.querySelector("nav.main");
  main_nav.addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName === "LI") {
      const navText = target.textContent;
      let url = "";
      if (navText === NAV_TEXT.일기장) {
        url = "/menu/diary";
      } else if (navText === NAV_TEXT.육아일기) {
        url = "/menu/baby";
      } else if (navText === NAV_TEXT.나의목표) {
        url = "/menu/goal";
      } else if (navText === NAV_TEXT.반려동물일기) {
        url = "/menu/animal";
      } else if (navText === NAV_TEXT.로그인) {
        url = "/users/login";
      } else if (navText === NAV_TEXT.로그아웃) {
        url = "/users/logout";
      } else if (navText === NAV_TEXT.작성하기) {
        url = "/menu/write";
      } else if (navText === NAV_TEXT.회원가입) {
        url = "/users/join";
      }
      document.location.href = url;
    }
  });
});
