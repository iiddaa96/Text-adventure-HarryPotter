/*
 * Händelsehanterare för "DOMContentLoaded" väntar på att hela HTML-dokumentet ska laddas innan JavaScript-koden körs.
 * När HTML-dokumentet är klart att användas, triggas händelsen "DOMContentLoaded", och funktionen `main` körs.
 */
window.addEventListener("DOMContentLoaded", main);

//En global variabel som innehåller en lista över objekt i backpack.
let backpackItems = [];

//En global variabel, Representerar bakgrundsmusiken för spelet.
let backgroundMusic;

//Huvudfunktionen som körs vid start av applikationen.
function main() {
  renderScene(); //Visar scen 1
  loadBackpackFromLocalStorage(); // Ladda information om ryggsäcken från webbläsarens lokal lagring
}

//Renderar den aktuella scenen baserat på den globala variabeln activeSceneIndex.
function renderScene() {
  const text = document.getElementById("text");
  const actionButtons = document.getElementById("action-buttons");
  const thingList = document.getElementById("thing-list");
  const backpack = document.getElementById("backpack");

  const scene = scenes[activeSceneIndex];

  // Lite musik genom scenerna, startar från scen 1 och fortsätter till slutscenen
  if (activeSceneIndex >= 1) {
    if (!backgroundMusic) {
      backgroundMusic = new Audio("music/Potter.mp3");
      backgroundMusic.volume = 0.5;
      backgroundMusic.loop = true;

      // Lägger till en lyssnare för att återställa musiken när den är slut
      backgroundMusic.addEventListener("ended", function () {
        this.currentTime = 0;
        this.play();
      });

      backgroundMusic.play();
    }
  }

  // Tar ut style för bakgrundsbilderna i scene
  document.body.style.backgroundImage = scene.background;
  // Textinnehållet sätts för HTML-element med variabeln 'text'
  text.textContent = scene.text;

  //Om scenen är 0 och 4 så ska inte ryggsäcken visas på sidan
  if (activeSceneIndex === 0 || activeSceneIndex === 4) {
    backpack.style.display = "none";
  } else {
    backpack.style.display = null;
  }

  /*
   * Loop för actions (knapparna)
   * Tömmer diven "action-buttons" så nya knapparna kan komma fram till scenes
   */
  actionButtons.innerHTML = "";
  // FOR loop, "för en knapp av scen knapparna" skapar knapp button.
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

  /*
   * Med hjälp av if sats gör jag så att listan med bilder bara finns med i scen 1, Hagrids hus.
   * Med denna for loopen så skapar jag img, där jag kopplar src och alt med thing som ligger i scene
   */
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
}
/**
 * Lägger till en bild som finns i (thing) i ryggsäcken och uppdaterar sedan backpack.
 * @param {{ name: string, url: string }} thing - Objekt som representerar en bild med en namn- och url-egenskap.
 */
function addToBackpack(thing) {
  // Lägg till thing i backpackItems och spara till Local Storage
  backpackItems.push(thing);
  saveBackpackToLocalStorage();
  renderBackpack();
}

//Sparar ryggsäckens innehåll till webbläsarens lokal lagring.
function saveBackpackToLocalStorage() {
  localStorage.setItem("backpackItems", JSON.stringify(backpackItems));
}

/**
 * Laddar ryggsäckens innehåll från webbläsarens lokal lagring och uppdaterar visningen.
 * @returns {Array<{ name: string, url: string }>} - Ryggsäckens innehåll.
 */
function loadBackpackFromLocalStorage() {
  const savedBackpack = localStorage.getItem("backpackItems");
  if (savedBackpack) {
    backpackItems = JSON.parse(savedBackpack);
    renderBackpack(); // Uppdatera visningen av backpack vid laddning
  }
  return backpackItems;
}

//Renderar ryggsäckens innehåll.
function renderBackpack() {
  const backpack = document.getElementById("backpack-items");
  backpack.innerHTML = "";

  backpackItems.forEach((item) => {
    const backpackImg = document.createElement("img");
    backpackImg.src = item.url;
    backpackImg.alt = item.name;
    backpackImg.className = "backpack-image";

    // Lägger till en funktion med eventlyssnare för att ta bort objekt från ryggsäcken
    backpackImg.addEventListener("click", function (event) {
      removeFromBackpack(item);
    });

    backpack.appendChild(backpackImg);
  });
}

/**
 * Navigerar användaren till nästa scen baserat på det angivna scenindexet.
 * @param {number} sceneIndex - Indexet för scenen att navigera till.
 */
function goToNextScene(sceneIndex) {
  activeSceneIndex = sceneIndex;
  renderScene(); // Återanvänder från render funktionen, bygga den igen
  loadBackpackFromLocalStorage();
}

/**
 * Tar bort det angivna objektet(bilden) från ryggsäcken.
 * @param {any} backpackItem - Objektet som ska tas bort från ryggsäcken.
 */
function removeFromBackpack(backpackItem) {
  console.log("remove");
  // Hitta indexen för den klickade bilden i ryggsäcken
  // Ta bort objektet från backpackItems och spara sedan till Local Storage
  const index = backpackItems.indexOf(backpackItem);
  backpackItems.splice(index, 1);
  saveBackpackToLocalStorage();
  renderBackpack();
}
