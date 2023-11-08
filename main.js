window.addEventListener("DOMContentLoaded", main);

function main() {
  renderScene(); //Visar scen 1
}

function renderScene() {
  const text = document.getElementById("text");
  const actionButtons = document.getElementById("action-buttons");

  const scene = scenes[activeSceneIndex]; // Nu visas scene 1 på webbläsaren, sätts ihop med scenes.js scenes
  // Lite musik genom scenerna
  if (scene.startBackgroundMusic) {
    const backgroundMusic = new Audio("music/harryPotter.mp3");
    backgroundMusic.volume = 0.5;
    backgroundMusic.loop = true;
    backgroundMusic.play();
  }
  document.body.style.backgroundImage = scene.background;
  text.textContent = scene.text;

  actionButtons.innerHTML = "";
  for (const action of scene.actions) {
    const btn = document.createElement("button");
    btn.textContent = action.text;
    btn.className = "btn";
    // Nedan, så vill hamna på en ny scen med onClick, vi ska inte anropa utan systemet ska därav inga ()
    // Nedan, Kallas anonym function
    // Första knappen
    btn.onclick = function () {
      goToNextScene(action.activeSceneIndex);
    };
    actionButtons.append(btn);
  }

  if (scene.things) {
    // Visa bilder på sidan (for loop)
  }
}

// Function till goToNextScen
function goToNextScene(sceneIndex) {
  activeSceneIndex = sceneIndex;
  renderScene(); // Återanvänder från render functionen, bygga den igen
}
