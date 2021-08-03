function setMain(src) {
  document.getElementById("main-img").src = src;
}

function loadImage() {
  const width = document.getElementById("w").value;
  const height = document.getElementById("h").value;
  const list = document.querySelector(".list-container");
  list.innerHTML = "";

  let setMain = true;
  for (let i = 0; i < 4; i++) {
    const div = document.createElement("DIV");
    div.classList.add("img-container");
    const img = document.createElement("IMG");

    img.src = `https://picsum.photos/seed/${Math.random()}/${width}/${height}`;
    div.appendChild(img);
    list.appendChild(div);

    if (setMain) {
      setMain = false;
      document.getElementById("main-img").src = img.src;
    }
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  document
    .querySelector(".list-container")
    .addEventListener("click", function (e) {
      document.getElementById("main-img").src = e.target.src;
    });
});
