function openModal() {
  const divModal = document.querySelector("#modal");
  divModal.style.visibility = "visible";
}

document.addEventListener("keydown", (event) => {
  const divModal = document.querySelector("#modal");
  const isHidden = divModal.style.visibility === "hidden";
  const key = event.key;

  if(key === "Escape"  && !isHidden) {
    divModal.style.visibility = "hidden";
    console.log("fechou!!");
  }
});