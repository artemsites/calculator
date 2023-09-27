document.addEventListener("DOMContentLoaded", function () {
  try {

    const switcherAll = document.querySelectorAll(".switcher");
    switcherAll.forEach(function (switcher) {
      switcher.addEventListener("click", function() {

        if (switcher.classList.contains("_on")) {
          switcher.classList.remove("_on");
          switcher.classList.add("_off");
        } else {
          switcher.classList.remove("_off");
          switcher.classList.add("_on");
        }

        // Установка значения checked в value
        const checkbox = switcher.querySelector(".switcher__checkbox");
        checkbox.value=checkbox.checked

        // Сброс анимации индикатора
        const indicator = switcher.querySelector(".switcher__indicator");
        indicator.style.animationName = "none";
        requestAnimationFrame(function () {
          indicator.style.animationName = "";
        });

      });
    });

  } catch (err) {
    console.error("switcher.js: ", err);
  } finally {
  }
});