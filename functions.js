// funktion till en knapp, Hagrids scen, som visar olika redskap som man ska använda till fighten

// function items() {
//   const itemList = ["Pumpa", "Trollstav", "Fjäder", "Sten", "Bläck"];
//   const showList = document.getElementById("showList");

//   const itemListInput = prompt(
//     "Välj ett redskap från listan att ta med dig in till skogen"
//   );
//   for (let i = 0; i < itemList.length; i++) {
//     if (itemList[i] === itemListInput) {
//       // Om man väljer ett redskap som är likt med listan så loggas det ut
//       console.log(itemList[i]);
//       alert("Du har nu plockat med dig ett redskap");
//       showList.innerText = itemList;
//       break; // Då slutar loopen
//     } else {
//       console.log("Ingen matchning hittades, försök igen"); // Om inte så dyker ett felmeddelande upp på konsolen
//     }
//   }
// }

// // En funktion till den andra knappen som finns på house.html
// function hagridHouse() {
//   const items = ["Pumpa", "Trollstav", "Fjäder", "Sten", "Bläck"];
//   const listItems = document.getElementById("hagridsList");

//   for (const item of items) {
//     console.log(items);

//     listItems.innerText = items;
//     break;
//   }

//Global tom array
const playerInventory = [];

function addToInventory(item) {
  playerInventory.push(item);
  updateInventory();
}

// Funktion för att ta bort ett redskap från inventory
function removeFromInventory(item) {
  const index = playerInventory.indexOf(item);
  if (index > -1) {
    playerInventory.splice(index, 1);
    updateInventory(); // Uppdatera inventory-gränssnittet
  }
}
