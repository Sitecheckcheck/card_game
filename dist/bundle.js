/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./cards.js":
/*!******************!*\
  !*** ./cards.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cards: () => (/* binding */ cards)
/* harmony export */ });
const cards = [
    {
        name: "закрытая",
        img: "./static/img/закрытая.png",
        id: 0,
    },
    {
        name: "6 бубны",
        img: "./static/img/6 бубны.png",
        id: 1,
    },
    {
        name: "6 крести",
        img: "./static/img/6 крести.png",
        id: 2,
    },
    {
        name: "6 пики",
        img: "./static/img/6 пики.png",
        id: 3,
    },
    {
        name: "6 черви",
        img: "./static/img/6 черви.png",
        id: 4,
    },
    {
        name: "7 бубны",
        img: "./static/img/7 бубны.png",
        id: 5,
    },
    {
        name: "7 крести",
        img: "./static/img/7 крести.png",
        id: 6,
    },
    {
        name: "7 пики",
        img: "./static/img/7 пики.png",
        id: 7,
    },
    {
        name: "7 черви",
        img: "./static/img/7 черви.png",
        id: 8,
    },
    {
        name: "8 бубны",
        img: "./static/img/8 бубны.png",
        id: 9,
    },
    {
        name: "8 крести",
        img: "./static/img/8 крести.png",
        id: 10,
    },
    {
        name: "8 черви",
        img: "./static/img/8 черви.png",
        id: 11,
    },
    {
        name: "8 пики",
        img: "./static/img/8 пики.png",
        id: 12,
    },
    {
        name: "9 бубны",
        img: "./static/img/9 бубны.png",
        id: 13,
    },
    {
        name: "9 крести",
        img: "./static/img/9 крести.png",
        id: 14,
    },
    {
        name: "9 пики",
        img: "./static/img/9 пики.png",
        id: 15,
    },
    {
        name: "9 черви",
        img: "./static/img/9 черви.png",
        id: 16,
    },
    {
        name: "10 бубны",
        img: "./static/img/10 бубны.png",
        id: 17,
    },
    {
        name: "10 крести",
        img: "./static/img/10 крести.png",
        id: 18,
    },
    {
        name: "10 пики",
        img: "./static/img/10 пики.png",
        id: 19,
    },
    {
        name: "10 черви",
        img: "./static/img/10 черви.png",
        id: 20,
    },
    {
        name: "валет бубны",
        img: "./static/img/валет бубны.png",
        id: 21,
    },
    {
        name: "валет крести",
        img: "./static/img/валет крести.png",
        id: 22,
    },
    {
        name: "валет пики",
        img: "./static/img/валет пики.png",
        id: 23,
    },
    {
        name: "валет черви",
        img: "./static/img/валет черви.png",
        id: 24,
    },
    {
        name: "дама бубны",
        img: "./static/img/дама бубны.png",
        id: 25,
    },
    {
        name: "дама крести",
        img: "./static/img/дама крести.png",
        id: 26,
    },
    {
        name: "дама пики",
        img: "./static/img/дама пики.png",
        id: 27,
    },
    {
        name: "дама черви",
        img: "./static/img/дама черви.png",
        id: 28,
    },
    {
        name: "король бубны",
        img: "./static/img/король бубны.png",
        id: 29,
    },
    {
        name: "король крести",
        img: "./static/img/король крести.png",
        id: 30,
    },
    {
        name: "король пики",
        img: "./static/img/король пики.png",
        id: 31,
    },
    {
        name: "король черви",
        img: "./static/img/король черви.png",
        id: 32,
    },
    {
        name: "туз бубны",
        img: "./static/img/туз бубны.png",
        id: 33,
    },
    {
        name: "туз крести",
        img: "./static/img/туз крести.png",
        id: 34,
    },
    {
        name: "туз пики",
        img: "./static/img/туз пики.png",
        id: 35,
    },
    {
        name: "туз черви",
        img: "./static/img/туз черви.png",
        id: 36,
    },
]


/***/ }),

/***/ "./game-page-close.js":
/*!****************************!*\
  !*** ./game-page-close.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderGameClose: () => (/* binding */ renderGameClose)
/* harmony export */ });
/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards.js */ "./cards.js");
/* harmony import */ var _game_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-page.js */ "./game-page.js");


function renderGameClose(level) {
    let appHtml
    if (level === "1") {
        appHtml = `
    <div class="body game">
        <div class="game-header">
            <div class="time">
                <div class="time__block">
                    <p class="time-name">min</p> 
                    <p class="min__value">00</p>
                </div>
                <div class="time__block">
                    <p class="time-name">sek</p> 
                    <p class="sek__value">.00</p>
                </div>
            </div>
            <button class="button-start">Начать заново</button>
        </div>
        <ul class="game-zone-1">
            <li class="game__card" data-id="${_game_page_js__WEBPACK_IMPORTED_MODULE_1__.cardsGame[0].id}">
                <img class="game-card"  src="${_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[0].img}" alt="1">
            </li>
            <li class="game__card" data-id="${_game_page_js__WEBPACK_IMPORTED_MODULE_1__.cardsGame[1].id}">
                <img class="game-card"  src="${_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[0].img}" alt="2">
            </li>
            <li class="game__card" data-id="${_game_page_js__WEBPACK_IMPORTED_MODULE_1__.cardsGame[2].id}">
                <img class="game-card"  src="${_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[0].img}" alt="3">
            </li>
            <li class="game__card" data-id="${_game_page_js__WEBPACK_IMPORTED_MODULE_1__.cardsGame[3].id}" >
                <img class="game-card" src="${_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[0].img}" alt="4">
            </li>
            <li class="game__card" data-id="${_game_page_js__WEBPACK_IMPORTED_MODULE_1__.cardsGame[4].id}">
                <img class="game-card"  src="${_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[0].img}" alt="5">
            </li>
            <li class="game__card" data-id="${_game_page_js__WEBPACK_IMPORTED_MODULE_1__.cardsGame[5].id}">
                <img class="game-card"  src="${_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[0].img}" alt="6">
            </li>
        </ul>
    </div>
    `
    } else if (level === "2") {
        appHtml = `
        <div class="body game">
        <div class="game-header">
            <div class="time">
                <div class="time__block">
                    <p class="time-name">min</p> 
                    <p class="min__value">00</p>
                </div>
                <div class="time__block">
                    <p class="time-name">sek</p> 
                    <p class="sek__value">.00</p>
                </div>
            </div>
            <button class="button-start">Начать заново</button>
        </div>
        <ul class="game-zone-2">
            <li class="game__card" data-id="${_game_page_js__WEBPACK_IMPORTED_MODULE_1__.cardsGame[0].id}">
                <img class="game-card" src="${_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[0].img}" alt="1">
            </li>
            <li class="game__card" data-id="${_game_page_js__WEBPACK_IMPORTED_MODULE_1__.cardsGame[1].id}">
                <img class="game-card" src="${_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[0].img}" alt="2">
            </li>
            <li class="game__card" data-id="${_game_page_js__WEBPACK_IMPORTED_MODULE_1__.cardsGame[2].id}">
                <img class="game-card" src="${_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[0].img}" alt="3">
            </li>
            <li class="game__card" data-id="${_game_page_js__WEBPACK_IMPORTED_MODULE_1__.cardsGame[3].id}">
                <img class="game-card" src="${_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[0].img}" alt="4">
            </li>
            <li class="game__card" data-id="${_game_page_js__WEBPACK_IMPORTED_MODULE_1__.cardsGame[4].id}">
                <img class="game-card" src="${_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[0].img}" alt="5">
            </li>
            <li class="game__card" data-id="${_game_page_js__WEBPACK_IMPORTED_MODULE_1__.cardsGame[5].id}">
                <img class="game-card" src="${_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[0].img}" alt="6">
            </li>
            <li class="game__card" data-id="${_game_page_js__WEBPACK_IMPORTED_MODULE_1__.cardsGame[6].id}">
                <img class="game-card" src="${_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[0].img}" alt="7">
            </li>
            <li class="game__card" data-id="${_game_page_js__WEBPACK_IMPORTED_MODULE_1__.cardsGame[7].id}">
                <img class="game-card" src="${_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[0].img}" alt="8">
            </li>
            <li class="game__card" data-id="${_game_page_js__WEBPACK_IMPORTED_MODULE_1__.cardsGame[8].id}">
                <img class="game-card" src="${_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[0].img}" alt="9">
            </li>
            <li class="game__card" data-id="${_game_page_js__WEBPACK_IMPORTED_MODULE_1__.cardsGame[9].id}">
                <img class="game-card" src="${_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[0].img}" alt="10">
            </li>
            <li class="game__card" data-id="${_game_page_js__WEBPACK_IMPORTED_MODULE_1__.cardsGame[10].id}">
                <img class="game-card" src="${_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[0].img}" alt="11">
            </li>
            <li class="game__card" data-id="${_game_page_js__WEBPACK_IMPORTED_MODULE_1__.cardsGame[11].id}">
                <img class="game-card" src="${_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[0].img}" alt="12">
            </li>
        </ul>
    </div>
    `
    } else {
        appHtml = `
        <div class="body game">
        <div class="game-header">
            <div class="time">
                <div class="time__block">
                    <p class="time-name">min</p> 
                    <p class="min__value">00</p>
                </div>
                <div class="time__block">
                    <p class="time-name">sek</p> 
                    <p class="sek__value">.00</p>
                </div>
            </div>
            <button class="button-start">Начать заново</button>
        </div>
        <ul class="game-zone-3">
            <li class="game__card" data-id="${_game_page_js__WEBPACK_IMPORTED_MODULE_1__.cardsGame[0].id}">
                <img class="game-card" src="${_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[0].img}" alt="1">
            </li>
            <li class="game__card" data-id="${_game_page_js__WEBPACK_IMPORTED_MODULE_1__.cardsGame[1].id}">
                <img class="game-card" src="${_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[0].img}" alt="2">
            </li>
            <li class="game__card" data-id="${_game_page_js__WEBPACK_IMPORTED_MODULE_1__.cardsGame[2].id}">
                <img class="game-card" src="${_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[0].img}" alt="3">
            </li>
            <li class="game__card" data-id="${_game_page_js__WEBPACK_IMPORTED_MODULE_1__.cardsGame[3].id}">
                <img class="game-card" src="${_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[0].img}" alt="4">
            </li>
            <li class="game__card" data-id="${_game_page_js__WEBPACK_IMPORTED_MODULE_1__.cardsGame[4].id}">
                <img class="game-card" src="${_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[0].img}" alt="5">
            </li>
            <li class="game__card" data-id="${_game_page_js__WEBPACK_IMPORTED_MODULE_1__.cardsGame[5].id}">
                <img class="game-card" src="${_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[0].img}" alt="6">
            </li>
            <li class="game__card" data-id="${_game_page_js__WEBPACK_IMPORTED_MODULE_1__.cardsGame[6].id}">
                <img class="game-card" src="${_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[0].img}" alt="7">
            </li>
            <li class="game__card" data-id="${_game_page_js__WEBPACK_IMPORTED_MODULE_1__.cardsGame[7].id}">
                <img class="game-card" src="${_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[0].img}" alt="8">
            </li>
            <li class="game__card" data-id="${_game_page_js__WEBPACK_IMPORTED_MODULE_1__.cardsGame[8].id}">
                <img class="game-card" src="${_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[0].img}" alt="9">
            </li>
            <li class="game__card" data-id="${_game_page_js__WEBPACK_IMPORTED_MODULE_1__.cardsGame[9].id}">
                <img class="game-card" src="${_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[0].img}" alt="10">
            </li>
            <li class="game__card" data-id="${_game_page_js__WEBPACK_IMPORTED_MODULE_1__.cardsGame[10].id}">
                <img class="game-card" src="${_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[0].img}" alt="11">
            </li>
            <li class="game__card" data-id="${_game_page_js__WEBPACK_IMPORTED_MODULE_1__.cardsGame[11].id}">
                <img class="game-card" src="${_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[0].img}" alt="12">
            </li>
            <li class="game__card" data-id="${_game_page_js__WEBPACK_IMPORTED_MODULE_1__.cardsGame[12].id}">
                <img class="game-card" src="${_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[0].img}" alt="13">
            </li>
            <li class="game__card" data-id="${_game_page_js__WEBPACK_IMPORTED_MODULE_1__.cardsGame[13].id}">
                <img class="game-card" src="${_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[0].img}" alt="14">
            </li>
            <li class="game__card" data-id="${_game_page_js__WEBPACK_IMPORTED_MODULE_1__.cardsGame[14].id}">
                <img class="game-card" src="${_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[0].img}" alt="15">
            </li>
            <li class="game__card" data-id="${_game_page_js__WEBPACK_IMPORTED_MODULE_1__.cardsGame[15].id}">
                <img class="game-card" src="${_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[0].img}" alt="16">
            </li>
            <li class="game__card" data-id="${_game_page_js__WEBPACK_IMPORTED_MODULE_1__.cardsGame[16].id}">
                <img class="game-card" src="${_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[0].img}" alt="17">
            </li>
            <li class="game__card" data-id="${_game_page_js__WEBPACK_IMPORTED_MODULE_1__.cardsGame[17].id}">
                <img class="game-card" src="${_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[0].img}" alt="18">
            </li>
        </ul>
    </div>
    `
    }

    return appHtml
}


/***/ }),

/***/ "./game-page.js":
/*!**********************!*\
  !*** ./game-page.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cardsGame: () => (/* binding */ cardsGame),
/* harmony export */   renderGame: () => (/* binding */ renderGame)
/* harmony export */ });
/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards.js */ "./cards.js");


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
    }
}

function createCards(arr) {
    return arr.reduce((res, current) => res.concat([current, current]), [])
}

let cardsGameFirst = []
let cardsGame = []

function renderGame(level) {
    let appHtml
    if (level === "1") {
        while (cardsGameFirst.length < 3) {
            let index = getRandomIntInclusive(1, 36)
            if (!cardsGameFirst.includes(_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[index])) {
                cardsGameFirst.push(_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[index])
            }
        }

        cardsGame = createCards(cardsGameFirst)

        shuffle(cardsGame)

        appHtml = `
    <div class="body game">
        <div class="game-header">
            <div class="time">
                <div class="time__block">
                    <p class="time-name">min</p> 
                    <p class="min__value">00</p>
                </div>
                <div class="time__block">
                    <p class="time-name">sek</p> 
                    <p class="sek__value">.00</p>
                </div>
            </div>
            <button class="button-start">Начать заново</button>
        </div>
        <ul class="game-zone-1">
            <li class="game__card">
                <img class="game-card" src="${cardsGame[0].img}" alt="1">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[1].img}" alt="2">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[2].img}" alt="3">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[3].img}" alt="4">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[4].img}" alt="5">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[5].img}" alt="6">
            </li>
        </ul>
    </div>
    `
    } else if (level === "2") {
        while (cardsGameFirst.length < 6) {
            let index = getRandomIntInclusive(1, 36)
            if (!cardsGameFirst.includes(_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[index])) {
                cardsGameFirst.push(_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[index])
            }
        }

        cardsGame = createCards(cardsGameFirst)

        shuffle(cardsGame)

        appHtml = `
        <div class="body game">
        <div class="game-header">
            <div class="time">
                <div class="time__block">
                    <p class="time-name">min</p> 
                    <p class="min__value">00</p>
                </div>
                <div class="time__block">
                    <p class="time-name">sek</p> 
                    <p class="sek__value">.00</p>
                </div>
            </div>
            <button class="button-start">Начать заново</button>
        </div>
        <ul class="game-zone-2">
            <li class="game__card">
                <img class="game-card" src="${cardsGame[0].img}" alt="1">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[1].img}" alt="2">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[2].img}" alt="3">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[3].img}" alt="4">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[4].img}" alt="5">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[5].img}" alt="6">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[6].img}" alt="7">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[7].img}" alt="8">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[8].img}" alt="9">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[9].img}" alt="10">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[10].img}" alt="11">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[11].img}" alt="12">
            </li>
        </ul>
    </div>
    `
    } else {
        while (cardsGameFirst.length < 9) {
            let index = getRandomIntInclusive(1, 36)
            if (!cardsGameFirst.includes(_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[index])) {
                cardsGameFirst.push(_cards_js__WEBPACK_IMPORTED_MODULE_0__.cards[index])
            }
        }

        cardsGame = createCards(cardsGameFirst)

        shuffle(cardsGame)

        appHtml = `
        <div class="body game">
        <div class="game-header">
            <div class="time">
                <div class="time__block">
                    <p class="time-name">min</p> 
                    <p class="min__value">00</p>
                </div>
                <div class="time__block">
                    <p class="time-name">sek</p> 
                    <p class="sek__value">.00</p>
                </div>
            </div>
            <button class="button-start">Начать заново</button>
        </div>
        <ul class="game-zone-3">
            <li class="game__card">
                <img class="game-card" src="${cardsGame[0].img}" alt="1">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[1].img}" alt="2">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[2].img}" alt="3">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[3].img}" alt="4">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[4].img}" alt="5">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[5].img}" alt="6">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[6].img}" alt="7">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[7].img}" alt="8">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[8].img}" alt="9">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[9].img}" alt="10">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[10].img}" alt="11">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[11].img}" alt="12">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[12].img}" alt="13">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[13].img}" alt="14">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[14].img}" alt="15">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[15].img}" alt="16">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[16].img}" alt="17">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[17].img}" alt="18">
            </li>
        </ul>
    </div>
    `
    }

    return appHtml
}


/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-page.js */ "./game-page.js");
/* harmony import */ var _game_page_close_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-page-close.js */ "./game-page-close.js");
/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards.js */ "./cards.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./style.css");





const appEl = document.getElementById("app")

renderApp(_game_page_js__WEBPACK_IMPORTED_MODULE_0__.renderGame)
window.application = {
    level: null,
}

function renderApp(renderGame) {
    const appHtml = `
    <div class="body">
        <div class="start">
            <h2 class="start-title">Выбери <br> сложность</h2>
            <div class="levels">
                <div class="form-radio-btn">
                    <input class="level-input" id="level-1" type="radio" name="level" value="1">
                    <label class="level-label" for="level-1">1</label>
                </div>
                 
                <div class="form-radio-btn">
                    <input class="level-input" id="level-2" type="radio" name="level" value="2">
                    <label class="level-label" for="level-2">2</label>
                </div>
                 
                <div class="form-radio-btn">
                    <input class="level-input" id="level-3" type="radio" name="level" value="3">
                    <label class="level-label" for="level-3">3</label>
                </div>
            </div>
            <button id="buttonStart" class="button-start">Старт</button>
        </div>
    </div>
    `

    appEl.innerHTML = appHtml

    document.getElementById("buttonStart").addEventListener("click", () => {
        let levelElements = document.querySelectorAll(".level-input")

        for (const levelElement of levelElements) {
            if (levelElement.checked) {
                window.application.level = levelElement.value
                break
            }
        }

        if (!window.application.level) {
            alert("Выберете сложность")
        } else {
            appEl.innerHTML = renderGame(window.application.level)
            setTimeout(() => {
                appEl.innerHTML = (0,_game_page_close_js__WEBPACK_IMPORTED_MODULE_1__.renderGameClose)(window.application.level)
                let cardElements = document.querySelectorAll(".game__card")
                let firstCard = null
                for (const cardElement of cardElements) {
                    cardElement.addEventListener("click", () => {
                        if (!firstCard) {
                            firstCard = cardElement.dataset.id
                            cardElement.innerHTML = `<img class="game-card" src="${_cards_js__WEBPACK_IMPORTED_MODULE_2__.cards[firstCard].img}" alt="1"></img>`
                        } else {
                            if (cardElement.dataset.id === firstCard) {
                                cardElement.innerHTML = `<img class="game-card" src="${
                                    _cards_js__WEBPACK_IMPORTED_MODULE_2__.cards[cardElement.dataset.id].img
                                }" alt="1"></img>`
                                firstCard = null
                                alert("Вы победили!")
                            } else {
                                let cardsEl = document.querySelectorAll(
                                    `[data-id="${firstCard}"]`
                                )
                                for (const i of cardsEl) {
                                    i.innerHTML = `<img class="game-card"  src="${_cards_js__WEBPACK_IMPORTED_MODULE_2__.cards[0].img}" alt="1">`
                                }
                                firstCard = null
                                alert("Вы проиграли!")
                            }
                        }
                    })
                }
            }, 5000)
        }
    })
}

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map