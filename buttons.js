
const no_button = document.querySelector("#no")

let no_count = Number(localStorage.getItem("noCount")) || 0;

//reset no_count to 0 after it reaches 3
if (no_count == 3) {
  no_count = 0;
}


no_button.addEventListener("click", () => {
  no_count = no_count + 1;
  localStorage.setItem("noCount", no_count);

  console.log(no_count);
  if (no_count == 1) {
    window.location.href = "no1.html";
  }
  else if (no_count == 2) {
    window.location.href = "no2.html";

  }
  else if (no_count >= 3) {
    window.location.href = "yes.html";
  }
});


const yes_button = document.querySelector("#yes")

yes_button.onclick = () => {
  window.location.href = "yes.html";
};

