window.addEventListener("DOMContentLoaded", main);

// Global variabel
let backpackItems = [];

function main() {
  renderScene(); //Visar scen 1
  loadBackpackFromLocalStorage();
}

function renderScene() {
  const text = document.getElementById("text");
  const actionButtons = document.getElementById("action-buttons");
  const thingList = document.getElementById("thing-list");
  const backpack = document.getElementById("backpack-items");
  const backpackHeading = document.querySelector("#backpack h3");

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

  // Om scenen är 0 så ska inte ryggsäcken visas
  if (activeSceneIndex === 0) {
    backpackHeading.style.display = "none";
  } else {
    backpackHeading.style.display = "block";
  }

  // Loop för actions (knappar)
  // Tömmer diven så nya knapparna kan komma fram
  actionButtons.innerHTML = "";
  // for loop, "för en knapp av scen knapparna" skapar knapp button.
  for (const action of scene.actions) {
    const btn = document.createElement("button");
    // action.text är för att skriva ut texten för de knappar som finns i arrayen
    btn.textContent = action.text;
    btn.className = "btn";
    // Nedan, så vill hamna på en ny scen med onClick, vi ska inte anropa utan systemet ska, därav inga ()
    btn.onclick = function () {
      goToNextScene(action.activeSceneIndex);
    };
    actionButtons.append(btn);
  }

  // Med hjälp av if sats gör jag så att listan med bilder bara finns med i scen 1, Hagrids hus.
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

  // Lägger till en funktion med eventlyssnare för att ta bort objekt från ryggsäcken
  backpack.addEventListener("click", function (event) {
    if (event.target.tagName === "IMG") {
      removeFromBackpack(event.target);
    }
  });
  function addToBackpack(thing) {
    const backpackImg = document.createElement("img");
    backpackImg.src = thing.url;
    backpackImg.alt = thing.name;
    backpackImg.className = "backpack-image";

    backpack.appendChild(backpackImg);

    // Lägg till thing i backpackItems och spara till Local Storage
    backpackItems.push(thing);
    saveBackpackToLocalStorage();
  }

  function saveBackpackToLocalStorage() {
    localStorage.setItem("backpackItems", JSON.stringify(backpackItems));
  }

  function loadBackpackFromLocalStorage() {
    const savedBackpack = localStorage.getItem("backpackItems");
    if (savedBackpack) {
      backpackItems = JSON.parse(savedBackpack);
      renderBackpack(); // Uppdatera visningen av backpack vid laddning
    }
    return backpackItems;
  }

  function renderBackpack() {
    const backpack = document.getElementById("backpack-items");
    backpack.innerHTML = "";

    backpackItems.forEach((item) => {
      const backpackImg = document.createElement("img");
      backpackImg.src = item.url;
      backpackImg.alt = item.name;
      backpackImg.className = "backpack-image";

      backpack.appendChild(backpackImg);
    });
  }

  function goToNextScene(sceneIndex) {
    activeSceneIndex = sceneIndex;
    renderScene(); // Återanvänder från render funktionen, bygga den igen
    loadBackpackFromLocalStorage();
  }

  function removeFromBackpack(clickedImage) {
    // Hitta indexen för den klickade bilden i ryggsäcken
    const index = Array.from(backpack.children).indexOf(clickedImage);

    // Ta bort bilden från DOM:en
    backpack.removeChild(clickedImage);

    // Ta bort objektet från backpackItems och spara sedan till Local Storage
    const removedItem = backpackItems.splice(index, 1)[0];
    saveBackpackToLocalStorage();
  }
}
