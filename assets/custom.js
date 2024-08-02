function switchDesc() {
  alert("You clicked a button");
}

function initfunctions() {
  document.getElementById("education-button").addEventListener("click", switchDesc);
}




window.onload = initfunctions;