window.addEventListener("DOMContentLoaded", main);

function main() {
  renderScene(); //Visar scen 1
}

function renderScene() {
  const text = document.getElementById("text");
  const actionButtons = document.getElementById("action-buttons");
  const thingList = document.getElementById("thing-list");
  const backpack = document.getElementById("backpack-items");

  const scene = scenes[activeSceneIndex]; // Nu visas scene 1 på webbläsaren, sätts ihop med scenes.js scenes
  // Lite musik genom scenerna, startar från scen 1
  if (scene.startBackgroundMusic) {
    const backgroundMusic = new Audio("music/Potter.mp3");
    backgroundMusic.volume = 0.5;
    backgroundMusic.loop = true;
    backgroundMusic.play();
  }
  document.body.style.backgroundImage = scene.background;
  text.textContent = scene.text;

  // Loop för actions (knappar)
  // Tömmer diven så nya knapparna kan komma fram
  actionButtons.innerHTML = "";
  // for loop, "för en knapp av scen knapparna" skapar knapp button.
  for (const action of scene.actions) {
    const btn = document.createElement("button");
    // action.text är för att skriva ut texten för de knappar som finns i arrayen
    btn.textContent = action.text;
    btn.className = "btn";
    // Nedan, så vill hamna på en ny scen med onClick, vi ska inte anropa utan systemet ska därav inga ()
    btn.onclick = function () {
      goToNextScene(action.activeSceneIndex);
    };
    actionButtons.append(btn);
  }

  // Med hjälp av if sats gör jag så att listan med bilder bara finns med i scen 1, hagrids hus.
  // Med denna for loopen så skapar jag img, där jag kopplar src och alt med thing som ligger i scene
  if (activeSceneIndex === 1) {
    for (const thing of scene.things) {
      const img = document.createElement("img");
      img.src = thing.url;
      img.alt = thing.name;
      img.className = "thing-image";

      // Här läggs en klickhändelse till varje bild som ligger i thing
      img.addEventListener("click", function () {
        addToBackpack(thing);
      });

      thingList.appendChild(img); // Lägger till bilderna i diven
    }
  } else {
    // Om bilderna inte ligger i scen 1 så töms diven
    thingList.innerHTML = "";
  }

  function addToBackpack(thing) {
    const backpackImg = document.createElement("img");
    backpackImg.src = thing.url;
    backpackImg.alt = thing.name;
    backpackImg.className = "backpack-image";

    backpack.appendChild(backpackImg);
  }
}

// Function till goToNextScen
function goToNextScene(sceneIndex) {
  activeSceneIndex = sceneIndex;
  renderScene(); // Återanvänder från render functionen, bygga den igen
}
