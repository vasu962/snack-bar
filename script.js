let snackBar = document.getElementById("snackBar");

let successMsg =
  '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
let invalidMsg =
  '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again';

function showSnackBar(msg) {
  let snack = document.createElement("div");
  snack.classList.add("snack");
  snack.innerHTML = msg;
  snackBar.appendChild(snack);

  if (msg.includes("error")) {
    snack.classList.add("error");
  }
  if (msg.includes("Invalid")) {
    snack.classList.add("invalid");
  }

  setInterval(() => {
    snack.remove();
  }, 6000);
}
