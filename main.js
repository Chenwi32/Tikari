"use strict";
////////////////////////////////////////////////////////////////////////////
const next = document.querySelector(".next");
const previous = document.querySelector(".prev");
const image = document.querySelector(".img");
///////////////////////////////////////////////////////////////////////////

const gallery = function () {
  let count = 1;
  ///////////////////////////////////////////////////////////////
  next.addEventListener("click", () => {
    if (count >= 10) return (next.style.display = "none");
    count++;
    image.innerHTML = `<img src="./images/project-${count}.jpg" alt="" />`;

    if (count >= 1) previous.style.display = "block";
  });
  //////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////
  previous.addEventListener("click", () => {
    if (count <= 1) return (previous.style.display = "none");

    count = count - 1;

    image.innerHTML = `<img src="./images/project-${count}.jpg" alt="" />`;

    next.style.display = "block";
  });
  //////////////////////////////////////////////////////////////

  setInterval(() => {
    if (count >= 10) return (count = 0);
    count++;
    image.innerHTML = `<img src="./images/project-${count}.jpg" alt="" />`;
  }, 8000);
};

gallery();
