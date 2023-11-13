//Array [], med objekt som beskriver scenerna

let activeSceneIndex = 0;
const scenes = [
  // Scen- Start - 0
  {
    text: "Välkommen till Hogwarts äventyr. Vilken tur att du är här, Ron har blivit kidnappad av Lord Voldemort, kan du rädda honom?",
    background: 'url("pics/slottet.jpg")',
    actions: [
      {
        text: "Ja det kan jag",
        activeSceneIndex: 1,
      },
      {
        text: "Nej, jag vågar inte",
        activeSceneIndex: 4,
      },
    ],
  },
  // Scen Hagrid - 1
  {
    startBackgroundMusic: true,
    background: 'url("pics/hagrid.jpg")',
    text: "Det är jag som är Rubeus Hagrid! Jag är en halvjätte och arbetar som skogvaktare här på Hogwarts. Vilken tur att du har kommit, Ron är verkligen i fara! Du behöver plocka med dig en trollstav och en hatt. Tyckte jag såg att det fanns en trollstav här någon stans, hmm..",
    things: [
      {
        name: "Trollstav",
        url: "pics/trollstav.jpg",
      },
      {
        name: "Hatt",
        url: "pics/hatt.jpg",
      },
      {
        name: "Pumpa",
        url: "pics/pumpa.jpg",
      },
      {
        name: "Sten",
        url: "pics/sten.jpg",
      },
      {
        name: "Fjäder",
        url: "pics/fjäder.jpg",
      },
    ],
    actions: [
      {
        text: "Gå till kartan",
        activeSceneIndex: 2,
      },
      {
        text: "Gå tillbaka",
        activeSceneIndex: 0,
      },
    ],
  },
  //Scen - Karta - 2
  {
    background: 'url("pics/map.jpg")',
    text: "Du har hittat kartan! Här kan du hitta vägen till Ron. Ser ut som att du kommer att få gå till den förbjudna skogen. Det är där Ron hålls fången. Bara du kan rädda honom nu!",
    actions: [
      {
        text: "Gå till skogen",
        activeSceneIndex: 3,
      },
      {
        text: "Gå tillbaka till Hagrid",
        activeSceneIndex: 1,
      },
    ],
  }, // Scen skogen - 3
  {
    background: 'url("pics/skogen.jpg")',
    text: "Dags att möta Voldemort, kasta iväg en besvärjelse för att rädda Ron innan det är försent!",
    actions: [
      {
        text: "Defendio",
        activeSceneIndex: 6,
      },
      {
        text: "Kastar en sten",
        activeSceneIndex: 5,
      },
    ],
  }, // Fail mission page - 4
  {
    background: 'url("pics/slottet.jpg")',
    text: "Du är en mes, ingen äkta trollkarl eller häxa!",
    actions: [
      {
        text: "Gå tillbaka",
        activeSceneIndex: 0,
      },
    ],
  }, // scen Fail page  - 5
  {
    background: 'url("pics/sadRon.jpg")',
    text: "Du kan inte kasta en sten mot Lord Voldemort ? Försök igen",
    actions: [
      {
        text: "Försök igen",
        activeSceneIndex: 3,
      },
      {
        text: "Gå tillbaka",
        activeSceneIndex: 2,
      },
    ],
  }, // scen endGame - 6
  {
    background: 'url("pics/vinst.jpg")',
    text: "Tack så mycket för att du räddade mitt liv, jag är evigt tacksam!",
    actions: [
      {
        text: "Spela igen",
        activeSceneIndex: 0,
      },
    ],
  },
];
