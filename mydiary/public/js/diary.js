document.addEventListener("DOMContentLoaded", () => {
  const date_form = document.querySelector("form.date");
  const input_form = document.querySelector("form.input");
  const toDate = document.querySelector("input.todate");
  const imagef = document.querySelector("input.imagef");
  const image = document.querySelector("img.image");
  const subject = document.querySelector("input.subject");
  const content = document.querySelector("input.content");
  const btn_save = document.querySelector("input.btn_save");
  const list = document.querySelector("input.list");

  list.addEventListener("click", (e) => {
    const target = e.target;
    if (target.value === "일기장리스트") {
      return (document.location.href = "/menu/diary");
    }
  });

  image.addEventListener("click", () => {
    imagef.click();
  });

  imagef.addEventListener("change", (event) => {
    // 파일 열기에서 선택한 파일
    const imageFile = event.target.files[0];
    // 파일열기에서 선택한파일 화면에 미리보기 구현
    const imageURL = (window.URL || webkitURL).createObjectURL(
      imageFile
    );
    image.src = imageURL;
  });

  // toDate,toTime 을 input_form 에 추가하고 보내라
  btn_save?.addEventListener("click", () => {
    const toTime = document.querySelector(".totime");
    input_form.appendChild(toDate);
    input_form.appendChild(toTime);
    input_form.submit();
  });
});
