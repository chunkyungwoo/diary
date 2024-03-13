document.addEventListener("DOMContentLoaded", async () => {
  const diary_list = document.querySelector("ul.diary");
  const btn_input = document.querySelector("input.btn");
  const back_input = document.querySelector("input.back");
  const update_input = document.querySelector("input.update");
  const delete_input = document.querySelector("input.delete");

  btn_input?.addEventListener("click", (e) => {
    const target = e.target;
    if (target.value === "작성하기") {
      document.location.href = "/menu/diary/input";
    }
  });

  diary_list?.addEventListener("click", async (e) => {
    const target = e.target;
    const classList = target.classList;
    if (classList.contains("diary")) {
      const seq = classList.contains("list")
        ? target.dataset.seq
        : target.closest("li").dataset.seq;
      // console.log(json);
      document.location.href = `/menu/diary/${seq}/detail`;
    }
  });

  back_input?.addEventListener("click", (e) => {
    document.location.href = "/menu/diary";
  });

  update_input?.addEventListener("click", (e) => {
    const seq = update_input.dataset.seq;

    document.location.href = `/menu/diary/${seq}/update`;
  });

  delete_input?.addEventListener("click", (e) => {
    const seq = delete_input.dataset.seq;
    if (confirm("일기를 삭제할까요?")) {
      document.location.replace(`/menu/diary/${seq}/delete`);
    }
  });
});
