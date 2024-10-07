document.addEventListener("DOMContentLoaded", function () {
  // Обработка клика по кнопке открытия модального окна
  document
    .getElementById("openModalButton1")
    .addEventListener("click", function () {
      const modal = document.querySelector(".modal");

      if (!modal.classList.contains("show")) {
        modal.style.opacity = 0;
        modal.style.visibility = "visible";

        setTimeout(() => {
          modal.classList.add("show");
          modal.style.opacity = 1;
        }, 100);
      } else {
        closeModal();
      }
    });
  document
    .getElementById("openModalButton2")
    .addEventListener("click", function () {
      const modal = document.querySelector(".modal");

      if (!modal.classList.contains("show")) {
        modal.style.opacity = 0;
        modal.style.visibility = "visible";

        setTimeout(() => {
          modal.classList.add("show");
          modal.style.opacity = 1;
        }, 100);
      } else {
        closeModal();
      }
    });

  // Обработка клика по кнопке закрытия модального окна
  document.getElementById("closeBtn").addEventListener("click", function () {
    closeModal();
  });

  // Автоматическое закрытие модального окна
  function closeModal() {
    const modal = document.querySelector(".modal");
    modal.classList.remove("show");

    setTimeout(() => {
      modal.style.opacity = 0;
      modal.style.visibility = "hidden";
    }, 100);
  }

  //   // Обработка кликов вне модального окна
  //   window.addEventListener("click", function (event) {
  //     const modal = document.querySelector(".modal");
  //     const btnClose = document.querySelector(".closeBtn");

  //     if (event.target === modal || event.target === btnClose) {
  //       return;
  //     }

  //     closeModal();
  //   });
});
