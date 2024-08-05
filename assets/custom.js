//Temporary multiple functions. Later to change to single. V0.01
function switchDesc1() {
  const currentClasses = document.getElementsByClassName("about-me-single");
  const currentButtonClass = document.getElementsByClassName("about-me-button");
  const currentId = document.getElementById("who-i-am");
  const currentButton = document.getElementById("who-i-am-button");
  for (let i = 0; i < currentClasses.length; i++) {
    if (currentClasses[i].classList.contains('show')) {
      currentClasses[i].classList.remove('show');
      currentClasses[i].classList.add('hide');
    }
  }
  for (let i = 0; i < currentButtonClass.length; i++) {
    if (currentButtonClass[i].classList.contains('active')) {
      currentButtonClass[i].classList.remove('active');
    }
  }
  currentId.classList.remove('hide');
  currentId.classList.add('show');
  currentButton.classList.add('active');
}
function switchDesc2() {
  const currentClasses = document.getElementsByClassName("about-me-single");
  const currentButtonClass = document.getElementsByClassName("about-me-button");
  const currentId = document.getElementById("education");
  const currentButton = document.getElementById("education-button");
  for (let i = 0; i < currentClasses.length; i++) {
    if (currentClasses[i].classList.contains('show')) {
      currentClasses[i].classList.remove('show');
      currentClasses[i].classList.add('hide');
    }
  }
  for (let i = 0; i < currentButtonClass.length; i++) {
    if (currentButtonClass[i].classList.contains('active')) {
      currentButtonClass[i].classList.remove('active');
    }
  }
  currentId.classList.remove('hide');
  currentId.classList.add('show');
  currentButton.classList.add('active');
}
function switchDesc3() {
  const currentClasses = document.getElementsByClassName("about-me-single");
  const currentButtonClass = document.getElementsByClassName("about-me-button");
  const currentId = document.getElementById("current-status");
  const currentButton = document.getElementById("current-status-button");
  for (let i = 0; i < currentClasses.length; i++) {
    if (currentClasses[i].classList.contains('show')) {
      currentClasses[i].classList.remove('show');
      currentClasses[i].classList.add('hide');
    }
  }
  for (let i = 0; i < currentButtonClass.length; i++) {
    if (currentButtonClass[i].classList.contains('active')) {
      currentButtonClass[i].classList.remove('active');
    }
  }
  currentId.classList.remove('hide');
  currentId.classList.add('show');
  currentButton.classList.add('active');
}
function switchDesc4() {
  const currentClasses = document.getElementsByClassName("about-me-single");
  const currentButtonClass = document.getElementsByClassName("about-me-button");
  const currentId = document.getElementById("future-goals");
  const currentButton = document.getElementById("future-goals-button");
  for (let i = 0; i < currentClasses.length; i++) {
    if (currentClasses[i].classList.contains('show')) {
      currentClasses[i].classList.remove('show');
      currentClasses[i].classList.add('hide');
    }
  }
  for (let i = 0; i < currentButtonClass.length; i++) {
    if (currentButtonClass[i].classList.contains('active')) {
      currentButtonClass[i].classList.remove('active');
    }
  }
  currentId.classList.remove('hide');
  currentId.classList.add('show');
  currentButton.classList.add('active');
}
function switchDesc5() {
  const currentClasses = document.getElementsByClassName("about-me-single");
  const currentButtonClass = document.getElementsByClassName("about-me-button");
  const currentId = document.getElementById("why-hire-me");
  const currentButton = document.getElementById("why-hire-me-button");
  for (let i = 0; i < currentClasses.length; i++) {
    if (currentClasses[i].classList.contains('show')) {
      currentClasses[i].classList.remove('show');
      currentClasses[i].classList.add('hide');
    }
  }
  for (let i = 0; i < currentButtonClass.length; i++) {
    if (currentButtonClass[i].classList.contains('active')) {
      currentButtonClass[i].classList.remove('active');
    }
  }
  currentId.classList.remove('hide');
  currentId.classList.add('show');
  currentButton.classList.add('active');
}

function initfunctions() {
  //Temporary multiple inits. Later to change to single V0.01
  document.getElementById("who-i-am-button").addEventListener("click", switchDesc1);
  document.getElementById("education-button").addEventListener("click", switchDesc2);
  document.getElementById("current-status-button").addEventListener("click", switchDesc3);
  document.getElementById("future-goals-button").addEventListener("click", switchDesc4);
  document.getElementById("why-hire-me-button").addEventListener("click", switchDesc5);
}




window.onload = initfunctions;