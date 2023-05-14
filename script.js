const appEl = document.getElementById("app");

const cards = [
  {
    name: "закрытая",
    img: "./img/закрытая.png",
    id: 0,
  },
  {
    name: "6 бубны",
    img: "./img/6 бубны.png",
    id: 1,
  },
  {
    name: "6 крести",
    img: "./img/6 крести.png",
    id: 2,
  },
  {
    name: "6 пики",
    img: "./img/6 пики.png",
    id: 3,
  },
  {
    name: "6 черви",
    img: "./img/6 черви.png",
    id: 4,
  },
  {
    name: "7 бубны",
    img: "./img/7 бубны.png",
    id: 5,
  },
  {
    name: "7 крести",
    img: "./img/7 крести.png",
    id: 6,
  },
  {
    name: "7 пики",
    img: "./img/7 пики.png",
    id: 7,
  },
  {
    name: "7 черви",
    img: "./img/7 черви.png",
    id: 8,
  },
  {
    name: "8 бубны",
    img: "./img/8 бубны.png",
    id: 9,
  },
  {
    name: "8 крести",
    img: "./img/8 крести.png",
    id: 10,
  },
  {
    name: "8 крести",
    img: "./img/8 крести.png",
    id: 11,
  },
  {
    name: "8 пики",
    img: "./img/пики.png",
    id: 12,
  },
  {
    name: "9 бубны",
    img: "./img/9 бубны.png",
    id: 13,
  },
  {
    name: "9 крести",
    img: "./img/9 крести.png",
    id: 14,
  },
  {
    name: "9 пики",
    img: "./img/9 пики.png",
    id: 15,
  },
  {
    name: "9 черви",
    img: "./img/9 черви.png",
    id: 16,
  },
  {
    name: "10 бубны",
    img: "./img/10 бубны.png",
    id: 17,
  },
  {
    name: "10 крести",
    img: "./img/10 крести.png",
    id: 18,
  },
  {
    name: "10 пики",
    img: "./img/10 пики.png",
    id: 19,
  },
  {
    name: "10 черви",
    img: "./img/10 черви.png",
    id: 20,
  },
  {
    name: "валет бубны",
    img: "./img/валет бубны.png",
    id: 21,
  },
  {
    name: "валет крести",
    img: "./img/валет крести.png",
    id: 22,
  },
  {
    name: "валет пики",
    img: "./img/валет пики.png",
    id: 23,
  },
  {
    name: "валет черви",
    img: "./img/валет черви.png",
    id: 24,
  },
  {
    name: "дама бубны",
    img: "./img/дама бубны.png",
    id: 25,
  },
  {
    name: "дама крести",
    img: "./img/дама крести.png",
    id: 26,
  },
  {
    name: "дама пики",
    img: "./img/дама пики.png",
    id: 27,
  },
  {
    name: "дама черви",
    img: "./img/дама черви.png",
    id: 28,
  },
  {
    name: "король бубны",
    img: "./img/король бубны.png",
    id: 29,
  },
  {
    name: "король крести",
    img: "./img/король крести.png",
    id: 30,
  },
  {
    name: "король пики",
    img: "./img/король пики.png",
    id: 31,
  },
  {
    name: "король черви",
    img: "./img/король черви.png",
    id: 32,
  },
  {
    name: "туз бубны",
    img: "./img/туз бубны.png",
    id: 33,
  },
  {
    name: "туз крести",
    img: "./img/туз крести.png",
    id: 34,
  },
  {
    name: "туз пики",
    img: "./img/туз пики.png",
    id: 35,
  },
  {
    name: "туз черви",
    img: "./img/туз черви.png",
    id: 36,
  },
];

renderApp();
window.application = {
  level: null,
};

function renderApp() {
  const appHtml = `
    <div class="body">
        <div class="start">
            <h2 class="start__title">Выбери <br> сложность</h2>
            <div class="levels">
                <div class="form_radio_btn">
                    <input class="level-input" id="level-1" type="radio" name="level" value="1">
                    <label class="level-label" for="level-1">1</label>
                </div>
                 
                <div class="form_radio_btn">
                    <input class="level-input" id="level-2" type="radio" name="level" value="2">
                    <label class="level-label" for="level-2">2</label>
                </div>
                 
                <div class="form_radio_btn">
                    <input class="level-input" id="level-3" type="radio" name="level" value="3">
                    <label class="level-label" for="level-3">3</label>
                </div>
            </div>
            <button id="buttonStart" class="button-start">Старт</button>
        </div>
    </div>
    `;

  appEl.innerHTML = appHtml;

  document.getElementById("buttonStart").addEventListener("click", () => {
    let levelElements = document.querySelectorAll(".level-input");

    for (const levelElement of levelElements) {
      if (levelElement.checked) {
        window.application.level = levelElement.value;
        break;
      }
    }

    !window.application.level
      ? alert("Выберете сложность")
      : renderGame(window.application.level);
  });
}

function renderGame(level) {
  let appHtml;
  if (level == 1) {
    appHtml = `
    <div class="body game">
        <div class="game__header">
            <div class="time">
                <div class="time__block">
                    <p class="time__name">min</p> 
                    <p class="min__value">00</p>
                </div>
                <div class="time__block">
                    <p class="time__name">sek</p> 
                    <p class="sek__value">.00</p>
                </div>
            </div>
            <button class="button-start">Начать заново</button>
        </div>
        <ul class="game__zone">
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="1">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="2">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="3">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="4">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="5">
            </li>
            <li class="game__card">
                <img class="game-card" src="img/закрытая.png" alt="6">
            </li>
        </ul>
    </div>
    `;
  } else {
    appHtml = `
    <h1>сложность 2 или 3</h1>
    `;
  }
  appEl.innerHTML = appHtml;
}
