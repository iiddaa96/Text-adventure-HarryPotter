//Array [], med objekt som beskriver scenerna

let activeSceneIndex = 0;
const scenes = [
  // Scen- Start - 0
  {
    text: "Välkommen till Hogwarts äventyr. Vilken tur att du är här, Ron har blivit kidnappad av Lord Voldemort, kan du rädda honom?",
    background: 'url("pics/sorting-hat.jpeg")',
    button1: {
      text: "Ja det kan jag",
      activeSceneIndex: 1,
    },
    button2: {
      text: "Nej, jag vågar inte",
      activeSceneIndex: 5,
    },
  },
  // Scen Hagrid - 1
  {
    background: 'url("pics/hagrids-house.png")',
    text: "Det är jag som är Rubeus Hagrid! Jag är en halvjätte och arbetar som skogvaktare här på Hogwarts. Vilken tur att du har kommit, Ron är verkligen i fara! Behöver du något som kan hjälpa honom? Såg att det fanns en trollstav här någon stans. Om du ser trollstaven tar den med dig.",
    things: [
      {
        name: "Trollstav",
        url: 'url("pics/trollstav.jpg")',
      },
      {
        name: "Trollkarls hatt",
        url: 'url("pics/hatt.jpg")',
      },
      {
        name: "Pumpa",
        url: 'url("pics/pumpajpg")',
      },
      {
        name: "Sten",
        url: 'url("pics/sten.jpg")',
      },
      {
        name: "Fjäder",
        url: 'url("pics/fjäder.jpg")',
      },
    ],
    button1: {
      text: "Gå till kartan",
      activeSceneIndex: 2,
    },
    button2: {
      text: "Gå tillbaka",
      activeSceneIndex: 0,
    },
    button3: {
      text: "Klicka här för lista av redskap",
    },
    button4: {
      text: "Klicka här för att välja",
    },
  },
  //Scen - Karta - 2
  {
    background: 'url("pics/map3.jpg")',
    text: "Du har hittat kartan! Här kan du hitta vägen till Ron. Ser ut som att du kommer att få gå till den förbjudna skogen. Det är där Ron hålls fången. Bara du kan rädda honom nu!",
    button1: {
      text: "Gå till skogen",
      activeSceneIndex: 3,
    },
    button2: {
      text: "Gå tillbaka till Hagrid",
      activeSceneIndex: 1,
    },
  }, // Scen - karta - 3
  {
    background: 'url("pics/map3.jpg")',
    text: "Du har hittat kartan! Här kan du hitta vägen till Ron. Ser ut som att du kommer att få gå till den förbjudna skogen. Det är där Ron hålls fången. Bara du kan rädda honom nu!",
    button1: {
      text: "Gå till skogen",
      activeSceneIndex: 4,
    },
    button2: {
      text: "Gå tillbaka till Hagrid",
      activeSceneIndex: 1,
    },
  }, // Scen skogen 4
  {
    background: 'url("pics/car.png")',
    text: "Dags att möta Voldemort, kasta iväg en besvärjelse för att rädda Ron innan det är försent!",
    button1: {
      text: "Defendio",
      activeSceneIndex: 7,
    },
    button2: {
      text: "Kastar en sten",
      activeSceneIndex: 6,
    },
  }, // Fail mission page - 5
  {
    background: 'url("pics/roon.jpg")',
    text: "Du är en mes, ingen äkta trollkarl eller häxa!",
    button1: {
      text: "Gå tillbaka",
      activeSceneIndex: 0,
    },
    button2: {
      text: "Error",
      activeSceneIndex: 0,
    },
  }, // Fail page 2 - 6
  {
    background: 'url("pics/roon.jpg")',
    text: "Du kan inte kasta en sten mot Lord Voldemort ? Försök igen",
    button1: {
      text: "Försök igen",
      activeSceneIndex: 4,
    },
    button2: {
      text: "Gå tillbaka",
      activeSceneIndex: 3,
    },
  }, // scen endGame - 7
  {
    background: 'url("pics/celebration.jpg")',
    text: "Tack så mycket för att du räddade mitt liv, jag är evigt tacksam!",
    button1: {
      text: "Tillbaka",
      activeSceneIndex: 0,
    },
    button2: {
      text: "Gå tillbaka",
      activeSceneIndex: 4,
    },
  },
];
