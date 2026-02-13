
function kiss_rain() {
  const kiss = document.createElement("img");

  kiss.src = "imgs/heart.png"
  kiss.classList.add("falling-kiss");

  kiss.style.left = Math.random() * 100 + "vw";

  const size = Math.random() * 30 + 20;
  kiss.style.width = size + "px";

  const duration = Math.random() * 3 + 3; // 3–6 seconds
  kiss.style.animationDuration = duration + "s";

  document.body.appendChild(kiss);

  // Remove after animation
  setTimeout(() => {
    kiss.remove();
  }, duration * 1000);
}

window.onload = () => {
  for (let i = 0; i < 40; i++) {
    setTimeout(kiss_rain, i * 100);
  }
  if (no_count == 3) {
    let remark = document.createElement("p");
    remark.innerText = "Too bad! You will be my valentine.";
    document.appendChild(remark);
  }
};
