(() => {
  const snowWrapper = document.querySelector(".snow-wrapper");
  for (let i = 0; i < 200; i++) {
    const elemDiv = document.createElement("div");
    elemDiv.classList.add("snow");
    snowWrapper.appendChild(elemDiv);
  }
})();
