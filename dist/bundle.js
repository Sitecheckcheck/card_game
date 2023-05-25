/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./cards.ts":
/*!******************!*\
  !*** ./cards.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cards: () => (/* binding */ cards)
/* harmony export */ });
var cards = [
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
];


/***/ }),

/***/ "./game-page-close.ts":
/*!****************************!*\
  !*** ./game-page-close.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderGameClose: () => (/* binding */ renderGameClose)
/* harmony export */ });
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards */ "./cards.ts");
/* harmony import */ var _game_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-page */ "./game-page.ts");


function renderGameClose(level) {
    var appHtml;
    if (level === "1") {
        appHtml = "\n    <div class=\"body game\">\n        <div class=\"game-header\">\n            <div class=\"time\">\n                <div class=\"time__block\">\n                    <p class=\"time-name\">min</p> \n                    <p class=\"min-value\">00</p>\n                </div>\n                <div class=\"time__block\">\n                    <p class=\"time-name\">sek</p> \n                    <p class=\"sek-value\">.00</p>\n                </div>\n            </div>\n            <button class=\"button-start\">\u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E</button>\n        </div>\n        <ul class=\"game-zone-1\">\n            <li class=\"game__card\" data-id=\"".concat(_game_page__WEBPACK_IMPORTED_MODULE_1__.cardsGame[0].id, "\" data-index=0>\n                <img class=\"game-card\"  src=\"").concat(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[0].img, "\" alt=\"1\">\n            </li>\n            <li class=\"game__card\" data-id=\"").concat(_game_page__WEBPACK_IMPORTED_MODULE_1__.cardsGame[1].id, "\" data-index=1>\n                <img class=\"game-card\"  src=\"").concat(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[0].img, "\" alt=\"2\">\n            </li>\n            <li class=\"game__card\" data-id=\"").concat(_game_page__WEBPACK_IMPORTED_MODULE_1__.cardsGame[2].id, "\" data-index=2>\n                <img class=\"game-card\"  src=\"").concat(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[0].img, "\" alt=\"3\">\n            </li>\n            <li class=\"game__card\" data-id=\"").concat(_game_page__WEBPACK_IMPORTED_MODULE_1__.cardsGame[3].id, "\" data-index=3>\n                <img class=\"game-card\" src=\"").concat(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[0].img, "\" alt=\"4\">\n            </li>\n            <li class=\"game__card\" data-id=\"").concat(_game_page__WEBPACK_IMPORTED_MODULE_1__.cardsGame[4].id, "\" data-index=4>\n                <img class=\"game-card\"  src=\"").concat(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[0].img, "\" alt=\"5\">\n            </li>\n            <li class=\"game__card\" data-id=\"").concat(_game_page__WEBPACK_IMPORTED_MODULE_1__.cardsGame[5].id, "\" data-index=5>\n                <img class=\"game-card\"  src=\"").concat(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[0].img, "\" alt=\"6\">\n            </li>\n        </ul>\n    </div>\n    ");
    }
    else if (level === "2") {
        appHtml = "\n        <div class=\"body game\">\n        <div class=\"game-header\">\n            <div class=\"time\">\n                <div class=\"time__block\">\n                    <p class=\"time-name\">min</p> \n                    <p class=\"min-value\">00</p>\n                </div>\n                <div class=\"time__block\">\n                    <p class=\"time-name\">sek</p> \n                    <p class=\"sek-value\">.00</p>\n                </div>\n            </div>\n            <button class=\"button-start\">\u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E</button>\n        </div>\n        <ul class=\"game-zone-2\">\n            <li class=\"game__card\" data-id=\"".concat(_game_page__WEBPACK_IMPORTED_MODULE_1__.cardsGame[0].id, "\" data-index=0>\n                <img class=\"game-card\"  src=\"").concat(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[0].img, "\" alt=\"1\">\n            </li>\n            <li class=\"game__card\" data-id=\"").concat(_game_page__WEBPACK_IMPORTED_MODULE_1__.cardsGame[1].id, "\" data-index=1>\n                <img class=\"game-card\" src=\"").concat(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[0].img, "\" alt=\"2\">\n            </li>\n            <li class=\"game__card\" data-id=\"").concat(_game_page__WEBPACK_IMPORTED_MODULE_1__.cardsGame[2].id, "\" data-index=2>\n                <img class=\"game-card\" src=\"").concat(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[0].img, "\" alt=\"3\">\n            </li>\n            <li class=\"game__card\" data-id=\"").concat(_game_page__WEBPACK_IMPORTED_MODULE_1__.cardsGame[3].id, "\" data-index=3>\n                <img class=\"game-card\" src=\"").concat(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[0].img, "\" alt=\"4\">\n            </li>\n            <li class=\"game__card\" data-id=\"").concat(_game_page__WEBPACK_IMPORTED_MODULE_1__.cardsGame[4].id, "\" data-index=4>\n                <img class=\"game-card\" src=\"").concat(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[0].img, "\" alt=\"5\">\n            </li>\n            <li class=\"game__card\" data-id=\"").concat(_game_page__WEBPACK_IMPORTED_MODULE_1__.cardsGame[5].id, "\" data-index=5>\n                <img class=\"game-card\" src=\"").concat(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[0].img, "\" alt=\"6\">\n            </li>\n            <li class=\"game__card\" data-id=\"").concat(_game_page__WEBPACK_IMPORTED_MODULE_1__.cardsGame[6].id, "\" data-index=6>\n                <img class=\"game-card\" src=\"").concat(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[0].img, "\" alt=\"7\">\n            </li>\n            <li class=\"game__card\" data-id=\"").concat(_game_page__WEBPACK_IMPORTED_MODULE_1__.cardsGame[7].id, "\" data-index=7>\n                <img class=\"game-card\" src=\"").concat(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[0].img, "\" alt=\"8\">\n            </li>\n            <li class=\"game__card\" data-id=\"").concat(_game_page__WEBPACK_IMPORTED_MODULE_1__.cardsGame[8].id, "\" data-index=8>\n                <img class=\"game-card\" src=\"").concat(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[0].img, "\" alt=\"9\">\n            </li>\n            <li class=\"game__card\" data-id=\"").concat(_game_page__WEBPACK_IMPORTED_MODULE_1__.cardsGame[9].id, "\" data-index=9>\n                <img class=\"game-card\" src=\"").concat(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[0].img, "\" alt=\"10\">\n            </li>\n            <li class=\"game__card\" data-id=\"").concat(_game_page__WEBPACK_IMPORTED_MODULE_1__.cardsGame[10].id, "\" data-index=10>\n                <img class=\"game-card\" src=\"").concat(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[0].img, "\" alt=\"11\">\n            </li>\n            <li class=\"game__card\" data-id=\"").concat(_game_page__WEBPACK_IMPORTED_MODULE_1__.cardsGame[11].id, "\" data-index=11>\n                <img class=\"game-card\" src=\"").concat(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[0].img, "\" alt=\"12\">\n            </li>\n        </ul>\n    </div>\n    ");
    }
    else {
        appHtml = "\n        <div class=\"body game\">\n        <div class=\"game-header\">\n            <div class=\"time\">\n                <div class=\"time__block\">\n                    <p class=\"time-name\">min</p> \n                    <p class=\"min-value\">00</p>\n                </div>\n                <div class=\"time__block\">\n                    <p class=\"time-name\">sek</p> \n                    <p class=\"sek-value\">.00</p>\n                </div>\n            </div>\n            <button class=\"button-start\">\u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E</button>\n        </div>\n        <ul class=\"game-zone-3\">\n            <li class=\"game__card\" data-id=\"".concat(_game_page__WEBPACK_IMPORTED_MODULE_1__.cardsGame[0].id, "\" data-index=0>\n                <img class=\"game-card\" src=\"").concat(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[0].img, "\" alt=\"1\">\n            </li>\n            <li class=\"game__card\" data-id=\"").concat(_game_page__WEBPACK_IMPORTED_MODULE_1__.cardsGame[1].id, "\" data-index=1>\n                <img class=\"game-card\" src=\"").concat(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[0].img, "\" alt=\"2\">\n            </li>\n            <li class=\"game__card\" data-id=\"").concat(_game_page__WEBPACK_IMPORTED_MODULE_1__.cardsGame[2].id, "\" data-index=2>\n                <img class=\"game-card\" src=\"").concat(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[0].img, "\" alt=\"3\">\n            </li>\n            <li class=\"game__card\" data-id=\"").concat(_game_page__WEBPACK_IMPORTED_MODULE_1__.cardsGame[3].id, "\" data-index=3>\n                <img class=\"game-card\" src=\"").concat(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[0].img, "\" alt=\"4\">\n            </li>\n            <li class=\"game__card\" data-id=\"").concat(_game_page__WEBPACK_IMPORTED_MODULE_1__.cardsGame[4].id, "\" data-index=4>\n                <img class=\"game-card\" src=\"").concat(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[0].img, "\" alt=\"5\">\n            </li>\n            <li class=\"game__card\" data-id=\"").concat(_game_page__WEBPACK_IMPORTED_MODULE_1__.cardsGame[5].id, "\" data-index=5>\n                <img class=\"game-card\" src=\"").concat(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[0].img, "\" alt=\"6\">\n            </li>\n            <li class=\"game__card\" data-id=\"").concat(_game_page__WEBPACK_IMPORTED_MODULE_1__.cardsGame[6].id, "\" data-index=6>\n                <img class=\"game-card\" src=\"").concat(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[0].img, "\" alt=\"7\">\n            </li>\n            <li class=\"game__card\" data-id=\"").concat(_game_page__WEBPACK_IMPORTED_MODULE_1__.cardsGame[7].id, "\" data-index=7>\n                <img class=\"game-card\" src=\"").concat(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[0].img, "\" alt=\"8\">\n            </li>\n            <li class=\"game__card\" data-id=\"").concat(_game_page__WEBPACK_IMPORTED_MODULE_1__.cardsGame[8].id, "\" data-index=8>\n                <img class=\"game-card\" src=\"").concat(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[0].img, "\" alt=\"9\">\n            </li>\n            <li class=\"game__card\" data-id=\"").concat(_game_page__WEBPACK_IMPORTED_MODULE_1__.cardsGame[9].id, "\" data-index=9>\n                <img class=\"game-card\" src=\"").concat(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[0].img, "\" alt=\"10\">\n            </li>\n            <li class=\"game__card\" data-id=\"").concat(_game_page__WEBPACK_IMPORTED_MODULE_1__.cardsGame[10].id, "\" data-index=10>\n                <img class=\"game-card\" src=\"").concat(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[0].img, "\" alt=\"11\">\n            </li>\n            <li class=\"game__card\" data-id=\"").concat(_game_page__WEBPACK_IMPORTED_MODULE_1__.cardsGame[11].id, "\" data-index=11>\n                <img class=\"game-card\" src=\"").concat(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[0].img, "\" alt=\"12\">\n            </li>\n            <li class=\"game__card\" data-id=\"").concat(_game_page__WEBPACK_IMPORTED_MODULE_1__.cardsGame[12].id, "\" data-index=12>\n                <img class=\"game-card\" src=\"").concat(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[0].img, "\" alt=\"13\">\n            </li>\n            <li class=\"game__card\" data-id=\"").concat(_game_page__WEBPACK_IMPORTED_MODULE_1__.cardsGame[13].id, "\" data-index=13>\n                <img class=\"game-card\" src=\"").concat(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[0].img, "\" alt=\"14\">\n            </li>\n            <li class=\"game__card\" data-id=\"").concat(_game_page__WEBPACK_IMPORTED_MODULE_1__.cardsGame[14].id, "\" data-index=14>\n                <img class=\"game-card\" src=\"").concat(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[0].img, "\" alt=\"15\">\n            </li>\n            <li class=\"game__card\" data-id=\"").concat(_game_page__WEBPACK_IMPORTED_MODULE_1__.cardsGame[15].id, "\" data-index=15>\n                <img class=\"game-card\" src=\"").concat(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[0].img, "\" alt=\"16\">\n            </li>\n            <li class=\"game__card\" data-id=\"").concat(_game_page__WEBPACK_IMPORTED_MODULE_1__.cardsGame[16].id, "\" data-index=16>\n                <img class=\"game-card\" src=\"").concat(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[0].img, "\" alt=\"17\">\n            </li>\n            <li class=\"game__card\" data-id=\"").concat(_game_page__WEBPACK_IMPORTED_MODULE_1__.cardsGame[17].id, "\" data-index=17>\n                <img class=\"game-card\" src=\"").concat(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[0].img, "\" alt=\"18\">\n            </li>\n        </ul>\n    </div>\n    ");
    }
    return appHtml;
}


/***/ }),

/***/ "./game-page.ts":
/*!**********************!*\
  !*** ./game-page.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cardsGame: () => (/* binding */ cardsGame),
/* harmony export */   cardsGameFirst: () => (/* binding */ cardsGameFirst),
/* harmony export */   renderGame: () => (/* binding */ renderGame)
/* harmony export */ });
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards */ "./cards.ts");

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function shuffle(array) {
    var _a;
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
    }
}
function createCards(arr) {
    return arr.reduce(function (res, current) { return res.concat([current, current]); }, []);
}
var cardsGameFirst = [];
var cardsGame = [];
function renderGame(level) {
    var appHtml;
    if (level === "1") {
        while (cardsGameFirst.length < 3) {
            var index = getRandomIntInclusive(1, 36);
            if (!cardsGameFirst.includes(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[index])) {
                cardsGameFirst.push(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[index]);
            }
        }
        cardsGame = createCards(cardsGameFirst);
        shuffle(cardsGame);
        appHtml = "\n    <div class=\"body game\">\n        <div class=\"game-header\">\n            <div class=\"time\">\n                <div class=\"time__block\">\n                    <p class=\"time-name\">min</p> \n                    <p class=\"min-value\">00</p>\n                </div>\n                <div class=\"time__block\">\n                    <p class=\"time-name\">sek</p> \n                    <p class=\"sek-value\">.00</p>\n                </div>\n            </div>\n            <button class=\"button-start\">\u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E</button>\n        </div>\n        <ul class=\"game-zone-1\">\n            <li class=\"game__card\">\n                <img class=\"game-card\" src=\"".concat(cardsGame[0].img, "\" alt=\"1\">\n            </li>\n            <li class=\"game__card\">\n                <img class=\"game-card\" src=\"").concat(cardsGame[1].img, "\" alt=\"2\">\n            </li>\n            <li class=\"game__card\">\n                <img class=\"game-card\" src=\"").concat(cardsGame[2].img, "\" alt=\"3\">\n            </li>\n            <li class=\"game__card\">\n                <img class=\"game-card\" src=\"").concat(cardsGame[3].img, "\" alt=\"4\">\n            </li>\n            <li class=\"game__card\">\n                <img class=\"game-card\" src=\"").concat(cardsGame[4].img, "\" alt=\"5\">\n            </li>\n            <li class=\"game__card\">\n                <img class=\"game-card\" src=\"").concat(cardsGame[5].img, "\" alt=\"6\">\n            </li>\n        </ul>\n    </div>\n    ");
    }
    else if (level === "2") {
        while (cardsGameFirst.length < 6) {
            var index = getRandomIntInclusive(1, 36);
            if (!cardsGameFirst.includes(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[index])) {
                cardsGameFirst.push(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[index]);
            }
        }
        cardsGame = createCards(cardsGameFirst);
        shuffle(cardsGame);
        appHtml = "\n        <div class=\"body game\">\n        <div class=\"game-header\">\n            <div class=\"time\">\n                <div class=\"time__block\">\n                    <p class=\"time-name\">min</p> \n                    <p class=\"min-value\">00</p>\n                </div>\n                <div class=\"time__block\">\n                    <p class=\"time-name\">sek</p> \n                    <p class=\"sek-value\">.00</p>\n                </div>\n            </div>\n            <button class=\"button-start\">\u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E</button>\n        </div>\n        <ul class=\"game-zone-2\">\n            <li class=\"game__card\">\n                <img class=\"game-card\" src=\"".concat(cardsGame[0].img, "\" alt=\"1\">\n            </li>\n            <li class=\"game__card\">\n                <img class=\"game-card\" src=\"").concat(cardsGame[1].img, "\" alt=\"2\">\n            </li>\n            <li class=\"game__card\">\n                <img class=\"game-card\" src=\"").concat(cardsGame[2].img, "\" alt=\"3\">\n            </li>\n            <li class=\"game__card\">\n                <img class=\"game-card\" src=\"").concat(cardsGame[3].img, "\" alt=\"4\">\n            </li>\n            <li class=\"game__card\">\n                <img class=\"game-card\" src=\"").concat(cardsGame[4].img, "\" alt=\"5\">\n            </li>\n            <li class=\"game__card\">\n                <img class=\"game-card\" src=\"").concat(cardsGame[5].img, "\" alt=\"6\">\n            </li>\n            <li class=\"game__card\">\n                <img class=\"game-card\" src=\"").concat(cardsGame[6].img, "\" alt=\"7\">\n            </li>\n            <li class=\"game__card\">\n                <img class=\"game-card\" src=\"").concat(cardsGame[7].img, "\" alt=\"8\">\n            </li>\n            <li class=\"game__card\">\n                <img class=\"game-card\" src=\"").concat(cardsGame[8].img, "\" alt=\"9\">\n            </li>\n            <li class=\"game__card\">\n                <img class=\"game-card\" src=\"").concat(cardsGame[9].img, "\" alt=\"10\">\n            </li>\n            <li class=\"game__card\">\n                <img class=\"game-card\" src=\"").concat(cardsGame[10].img, "\" alt=\"11\">\n            </li>\n            <li class=\"game__card\">\n                <img class=\"game-card\" src=\"").concat(cardsGame[11].img, "\" alt=\"12\">\n            </li>\n        </ul>\n    </div>\n    ");
    }
    else {
        while (cardsGameFirst.length < 9) {
            var index = getRandomIntInclusive(1, 36);
            if (!cardsGameFirst.includes(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[index])) {
                cardsGameFirst.push(_cards__WEBPACK_IMPORTED_MODULE_0__.cards[index]);
            }
        }
        cardsGame = createCards(cardsGameFirst);
        shuffle(cardsGame);
        appHtml = "\n        <div class=\"body game\">\n        <div class=\"game-header\">\n            <div class=\"time\">\n                <div class=\"time__block\">\n                    <p class=\"time-name\">min</p> \n                    <p class=\"min-value\">00</p>\n                </div>\n                <div class=\"time__block\">\n                    <p class=\"time-name\">sek</p> \n                    <p class=\"sek-value\">.00</p>\n                </div>\n            </div>\n            <button class=\"button-start\">\u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E</button>\n        </div>\n        <ul class=\"game-zone-3\">\n            <li class=\"game__card\">\n                <img class=\"game-card\" src=\"".concat(cardsGame[0].img, "\" alt=\"1\">\n            </li>\n            <li class=\"game__card\">\n                <img class=\"game-card\" src=\"").concat(cardsGame[1].img, "\" alt=\"2\">\n            </li>\n            <li class=\"game__card\">\n                <img class=\"game-card\" src=\"").concat(cardsGame[2].img, "\" alt=\"3\">\n            </li>\n            <li class=\"game__card\">\n                <img class=\"game-card\" src=\"").concat(cardsGame[3].img, "\" alt=\"4\">\n            </li>\n            <li class=\"game__card\">\n                <img class=\"game-card\" src=\"").concat(cardsGame[4].img, "\" alt=\"5\">\n            </li>\n            <li class=\"game__card\">\n                <img class=\"game-card\" src=\"").concat(cardsGame[5].img, "\" alt=\"6\">\n            </li>\n            <li class=\"game__card\">\n                <img class=\"game-card\" src=\"").concat(cardsGame[6].img, "\" alt=\"7\">\n            </li>\n            <li class=\"game__card\">\n                <img class=\"game-card\" src=\"").concat(cardsGame[7].img, "\" alt=\"8\">\n            </li>\n            <li class=\"game__card\">\n                <img class=\"game-card\" src=\"").concat(cardsGame[8].img, "\" alt=\"9\">\n            </li>\n            <li class=\"game__card\">\n                <img class=\"game-card\" src=\"").concat(cardsGame[9].img, "\" alt=\"10\">\n            </li>\n            <li class=\"game__card\">\n                <img class=\"game-card\" src=\"").concat(cardsGame[10].img, "\" alt=\"11\">\n            </li>\n            <li class=\"game__card\">\n                <img class=\"game-card\" src=\"").concat(cardsGame[11].img, "\" alt=\"12\">\n            </li>\n            <li class=\"game__card\">\n                <img class=\"game-card\" src=\"").concat(cardsGame[12].img, "\" alt=\"13\">\n            </li>\n            <li class=\"game__card\">\n                <img class=\"game-card\" src=\"").concat(cardsGame[13].img, "\" alt=\"14\">\n            </li>\n            <li class=\"game__card\">\n                <img class=\"game-card\" src=\"").concat(cardsGame[14].img, "\" alt=\"15\">\n            </li>\n            <li class=\"game__card\">\n                <img class=\"game-card\" src=\"").concat(cardsGame[15].img, "\" alt=\"16\">\n            </li>\n            <li class=\"game__card\">\n                <img class=\"game-card\" src=\"").concat(cardsGame[16].img, "\" alt=\"17\">\n            </li>\n            <li class=\"game__card\">\n                <img class=\"game-card\" src=\"").concat(cardsGame[17].img, "\" alt=\"18\">\n            </li>\n        </ul>\n    </div>\n    ");
    }
    return appHtml;
}


/***/ }),

/***/ "./game.ts":
/*!*****************!*\
  !*** ./game.ts ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   game: () => (/* binding */ game)
/* harmony export */ });
/* harmony import */ var _game_page_close__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-page-close */ "./game-page-close.ts");
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards */ "./cards.ts");
/* harmony import */ var _game_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-page */ "./game-page.ts");
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./script */ "./script.ts");




function game() {
    _script__WEBPACK_IMPORTED_MODULE_3__.appEl.innerHTML = (0,_game_page__WEBPACK_IMPORTED_MODULE_2__.renderGame)(window.application.level);
    setTimeout(function () {
        _script__WEBPACK_IMPORTED_MODULE_3__.appEl.innerHTML = (0,_game_page_close__WEBPACK_IMPORTED_MODULE_0__.renderGameClose)(window.application.level);
        var cardElements = document.querySelectorAll(".game__card");
        var firstCard;
        var cardIndex;
        var count = 0;
        var countGame = 0;
        var winner;
        var _loop_1 = function (cardElement) {
            cardElement.addEventListener("click", function () {
                if (!firstCard && !cardElement.classList.contains("open")) {
                    firstCard = cardElement.dataset.id;
                    cardIndex = cardElement.dataset.index;
                    cardElement.innerHTML = "<img class=\"game-card\" src=\"".concat(_cards__WEBPACK_IMPORTED_MODULE_1__.cards[firstCard].img, "\" alt=\"1\"></img>");
                    cardElement.classList.add("open");
                }
                else {
                    if (cardElement.dataset.id === firstCard &&
                        cardElement.dataset.index !== cardIndex) {
                        cardElement.innerHTML = "<img class=\"game-card\" src=\"".concat(_cards__WEBPACK_IMPORTED_MODULE_1__.cards[cardElement.dataset.id].img, "\" alt=\"1\"></img>");
                        firstCard = null;
                        cardElement.classList.add("open");
                        count++;
                        if (count === _game_page__WEBPACK_IMPORTED_MODULE_2__.cardsGameFirst.length) {
                            clearInterval(interval);
                            winner = true;
                            _script__WEBPACK_IMPORTED_MODULE_3__.appEl.innerHTML = renderFinish(winner);
                            var buttonFinish = document.getElementById("buttonFinish");
                            buttonFinish === null || buttonFinish === void 0 ? void 0 : buttonFinish.addEventListener("click", function () {
                                (0,_script__WEBPACK_IMPORTED_MODULE_3__.renderApp)();
                            });
                        }
                    }
                    else if (cardElement.dataset.index === cardIndex) {
                        return;
                    }
                    else {
                        countGame++;
                        if (countGame > window.application.level) {
                            winner = false;
                            _script__WEBPACK_IMPORTED_MODULE_3__.appEl.innerHTML = renderFinish(winner);
                            var buttonFinish = document.getElementById("buttonFinish");
                            buttonFinish === null || buttonFinish === void 0 ? void 0 : buttonFinish.addEventListener("click", function () {
                                (0,_script__WEBPACK_IMPORTED_MODULE_3__.renderApp)();
                            });
                        }
                        var cardsEl = document.querySelectorAll("[data-id=\"".concat(firstCard, "\"]"));
                        for (var _i = 0, cardsEl_1 = cardsEl; _i < cardsEl_1.length; _i++) {
                            var i = cardsEl_1[_i];
                            i.innerHTML = "<img class=\"game-card\"  src=\"".concat(_cards__WEBPACK_IMPORTED_MODULE_1__.cards[0].img, "\" alt=\"1\">");
                            i.classList.remove("open");
                        }
                        firstCard = null;
                    }
                }
            });
        };
        for (var _i = 0, cardElements_1 = cardElements; _i < cardElements_1.length; _i++) {
            var cardElement = cardElements_1[_i];
            _loop_1(cardElement);
        }
        var sek = document.querySelector(".sek-value");
        var min = document.querySelector(".min-value");
        var seconds = 0;
        var minutes = 0;
        var interval = setInterval(updateTime, 1000);
        var buttonRestart = document.querySelector(".button-start");
        buttonRestart.addEventListener("click", function () {
            game();
        });
        function renderFinish(winner) {
            var appHtml = "<div class=\"body\">\n                        <div class=\"start\">\n                            ".concat(!winner
                ? '<div><img src="./static/img/проиграли.png" alt="проиграли"></div>'
                : '<div><img src="./static/img/выиграли.png" alt="выиграли"></div>', " \n                            ").concat(!winner
                ? '<h2 class="start-title">Вы проиграли!</h2>'
                : '<h2 class="start-title">Вы выиграли!</h2>', " \n                            \n                            <div class=\"finish-time-text\">\n                                \u0417\u0430\u0442\u0440\u0430\u0447\u0435\u043D\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F:\n                            </div>\n                            <div class=\"time finish-time\">\n                                    <p class=\"min-value\">").concat(minutes
                .toString()
                .padStart(2, "0"), "</p>\n                                    <p class=\"sek-value\">.").concat(seconds
                .toString()
                .padStart(2, "0"), "</p>\n                            </div>\n                            <button id=\"buttonFinish\" class=\"button-start finish-button\">\u0418\u0433\u0440\u0430\u0442\u044C \u0441\u043D\u043E\u0432\u0430</button>\n                        </div>\n                    </div>");
            return appHtml;
        }
        function updateTime() {
            seconds++;
            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }
            sek.textContent = ".".concat(seconds.toString().padStart(2, "0"));
            min.textContent = "".concat(minutes.toString().padStart(2, "0"));
        }
    }, 3000);
}


/***/ }),

/***/ "./script.ts":
/*!*******************!*\
  !*** ./script.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appEl: () => (/* binding */ appEl),
/* harmony export */   renderApp: () => (/* binding */ renderApp)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./style.css");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./game.ts");
// import { renderGame } from "./game-page.js"


var appEl = document.getElementById("app");
renderApp();
window.application = {
    level: null,
};
function renderApp() {
    var appHtml = "\n    <div class=\"body\">\n        <div class=\"start\">\n            <h2 class=\"start-title\">\u0412\u044B\u0431\u0435\u0440\u0438 <br> \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C</h2>\n            <div class=\"levels\">\n                <div class=\"form-radio-btn\">\n                    <input class=\"level-input\" id=\"level-1\" type=\"radio\" name=\"level\" value=\"1\">\n                    <label class=\"level-label\" for=\"level-1\">1</label>\n                </div>\n                 \n                <div class=\"form-radio-btn\">\n                    <input class=\"level-input\" id=\"level-2\" type=\"radio\" name=\"level\" value=\"2\">\n                    <label class=\"level-label\" for=\"level-2\">2</label>\n                </div>\n                 \n                <div class=\"form-radio-btn\">\n                    <input class=\"level-input\" id=\"level-3\" type=\"radio\" name=\"level\" value=\"3\">\n                    <label class=\"level-label\" for=\"level-3\">3</label>\n                </div>\n            </div>\n            <button id=\"buttonStart\" class=\"button-start\">\u0421\u0442\u0430\u0440\u0442</button>\n        </div>\n    </div>\n    ";
    appEl.innerHTML = appHtml;
    var startButton = document.getElementById("buttonStart");
    startButton === null || startButton === void 0 ? void 0 : startButton.addEventListener("click", function () {
        var levelElements = document.querySelectorAll(".level-input");
        for (var _i = 0, levelElements_1 = levelElements; _i < levelElements_1.length; _i++) {
            var levelElement = levelElements_1[_i];
            if (levelElement.checked) {
                ;
                window.application.level = levelElement.value;
                break;
            }
        }
        if (!window.application.level) {
            alert("Выберете сложность");
        }
        else {
            (0,_game__WEBPACK_IMPORTED_MODULE_1__.game)();
        }
    });
}


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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./script.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map