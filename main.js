window.addEventListener("DOMContentLoaded", main);

function main() {
  renderScene(); //Visar scen 1
}
const playerInventory = [];

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
  btn2.classList.add("col3", "btn-2");

  // Döljer knapp 3 och knapp 4
  btn3.style.display = "none";
  btn4.style.display = "none";

  // Gör så att knapp 3 och 4 visas bara på scen 1
  if (activeSceneIndex === 1) {
    btn3.textContent = scene.button3.text;
    btn3.classList.add("col3", "btn-3");
    btn3.style.display = "block";

    btn4.textContent = scene.button4.text;
    btn4.classList.add("col3", "btn-4");
    btn4.style.display = "block";
  } else {
    btn3.style.display = "none";
    btn4.style.display = "none";
  }
  // Döljer knapp 2 i scen 5 och 7
  if (activeSceneIndex === 5 || activeSceneIndex === 7) {
    btn2.style.display = "none";
  } else {
    btn2.style.display = "block";
  }

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
  // Tredje knappen om man klickar på den
  btn3.onclick = function () {
    useItem(2); // Skicka index 2 för att använda det tredje redskapet
  };
  // Fjärde knappen om man klickar på den
  btn4.onclick = function () {
    useItem(3); // Skicka index 3 för att använda det fjärde redskapet
  };
}

// Function till goToNextScen
function goToNextScene(sceneIndex) {
  activeSceneIndex = sceneIndex;
  renderScene(); // Återanvänder från render functionen, bygga den igen
}
