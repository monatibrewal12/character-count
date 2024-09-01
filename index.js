let textbox = document.getElementById("textbox");
let count = document.getElementById("count");

function updateCount() {
  count.innerHTML = textbox.value.length;
}

textbox.oninput = updateCount;