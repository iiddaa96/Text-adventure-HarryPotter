window.addEventListener("DOMContentLoaded", main);

function main() {
  renderScene(); //Visar scen 1
}

function renderScene() {
  const text = document.getElementById("text");
  const btn1 = document.getElementById("btn-1");
  const btn2 = document.getElementById("btn-2");
  const btn3 = document.getElementById("btn-3");
  const btn4 = document.getElementById("btn-4");

  const scene = scenes[activeSceneIndex]; // Nu visas scene 1 på webbläsaren, sätts ihop med scenes.js scenes
  text.textContent = scene.text;
  btn1.textContent = scene.button1.text;
  btn2.textContent = scene.button2.text;
  // CSS för bodyn
  document.body.style.background = scene.background;

  //CSS för h2
  text.textContent = scene.text;
  text.classList.add("font");

  //CSS för knapparna
  btn1.textContent = scene.button1.text;
  btn1.classList.add("col3", "btn-1");

  btn2.textContent = scene.button2.text;
  btn2.classList.add("col3", "btn-1");

  //   btn3.textContent = scene.button3.text;
  //   btn3.classList.add("col3", "btn-3");

  //   btn4.textContent = scene.button4.text;
  //   btn4.classList.add("col3", "btn-4");

  // Nedan, så vill hamna på en ny scen med onClick, vi ska inte anropa utan systemet ska därav inga ()
  // Nedan, Kallas anonym function
  // Första knappen
  btn1.onclick = function () {
    goToNextScene(scene.button1.activeSceneIndex);
  };
  //Andra knappen om man klickar på den
  btn2.onclick = function () {
    goToNextScene(scene.button2.activeSceneIndex);
  };
  //   //Tredje knappen om man klickar på den
  //   btn3.onclick = function () {
  //     goToNextScene(scene.button3.activeSceneIndex);
  //   };
  //   //Fjärde knappen om man klickar på den
  //   btn4.onclick = function () {
  //     goToNextScene(scene.button4.activeSceneIndex);
  //   };
}

// Function till goToNextScen
function goToNextScene(sceneIndex) {
  activeSceneIndex = sceneIndex;
  renderScene(); // Återanvänder från render functionen, bygga den igen
}
