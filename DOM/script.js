let cont = 0;

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