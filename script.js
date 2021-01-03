const toggleSwitch = document.querySelector("input[type='checkbox']");

// switch theme dynamically 
function switchTheme(event) {
  console.log(event);
}

// event listener 
toggleSwitch.addEventListener("change", switchTheme);