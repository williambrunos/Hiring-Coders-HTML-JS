let cont = 0;
const el = document.querySelector("body");
console.log(el.parentNode);
function changeColor() {
  if (cont === 0) {
    const title = document.querySelector("h1");
    title.style.color = "blue";

    cont++;
  }
}

function addDescription() {
  const container = document.querySelector("#description");
  container.innerHTML = "<p>In this webpage, i'm testing how to manipulate DOM</p>";
}

function addH2() {
  const h2 = document.createElement("h2");
  h2.innerText = "Oh, you created me :)";
  const btnTarget = document.querySelector("#header-2");

  document.querySelector("body").insertBefore(h2, btnTarget);
}

function addH2After() {
  const h2 = document.createElement("h2");
  h2.innerText = "Oh, you created me :)";
  const btnTarget = document.querySelector("#header-2-after");

  document.querySelector("body").insertBefore(h2, btnTarget.nextElementSibling);
}