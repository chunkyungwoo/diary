const join_btn_click_event = async () => {
  const join_form = document.querySelector("form.join");
  const id = join_form.querySelector("#id");
  const password = join_form.querySelector("#password");
  const re_password = join_form.querySelector("#re_password");
  const name = join_form.querySelector("#name");
  const tel = join_form.querySelector("#tel");
  const email = join_form.querySelector("#email");

  if (id.value === "") {
    alert("ID를 입력해주세요");
    id.select();
    return false;
  }
  if (password.value === "") {
    alert("비밀번호를 입력해주세요");
    password.select();
    return false;
  }
  if (re_password.value === "") {
    alert("비밀번호 확인을 입력해주세요");
    re_password.select();
    return false;
  }
  if (password.value !== re_password.value) {
    alert("동일한 비밀번호를 입력해주세요");
    password.select();
    return false;
  }
  if (name.value === "") {
    alert("이름을 입력해주세요");
    name.select();
    return false;
  }

  join_form.submit();
  alert("회원가입 완료!!");
};

const id_btn_click_event = async () => {
  const join_form = document.querySelector("form.join");
  const id = join_form.querySelector("#id");

  if (id.value === "") {
    alert("ID를 입력해주세요");
    id.select();
    return false;
  } else {
    const response = await fetch(`/users/${id.value}/check`);
    const json = await response.json();
    if (json.MESSAGE === "FOUND") {
      alert("이미 등록된 ID입니다");
      id.select();
      return false;
    } else {
      alert("사용가능한 ID입니다");
      // password.select();
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const join_form = document.querySelector("form.join");
  const checkpw_span = document.querySelector("#checkpw");
  const password = join_form.querySelector("#password");
  const re_password = join_form.querySelector("#re_password");
  // 비밀번호 입력할때마다 검사하기위한 함수
  function checkPassword() {
    if (password.value === re_password.value) {
      checkpw_span.textContent = "✓";
      checkpw_span.style.color = "green";
      // checkpw_span.classList.add("checkmark");
    } else {
      checkpw_span.textContent = "!";
      checkpw_span.style.color = "red";
      // alert("비밀번호가 일치하지않습니다");
    }
  }
  // 사용자가 입력할때마다 함수를 호출하기위해
  password.addEventListener("input", checkPassword);
  re_password.addEventListener("input", checkPassword);
});

document?.addEventListener("DOMContentLoaded", () => {
  const join_btn = document.querySelector("#join_btn");
  join_btn.addEventListener("click", join_btn_click_event);
});
document?.addEventListener("DOMContentLoaded", () => {
  const join_btn = document.querySelector("#checkid");
  join_btn.addEventListener("click", id_btn_click_event);
});
