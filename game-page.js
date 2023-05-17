import { cards } from "./cards.js"

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

let cardsGame = []

export function renderGame(level) {
    let appHtml
    if (level === "1") {
        for (let i = 0; i < 3; i++) {
            let index = getRandomIntInclusive(1, 36)
            cardsGame.push(cards[index])
        }

        let arr = [0, 1, 2]
        shuffle(arr)

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
                <img class="game-card" src="${cardsGame[arr[0]].img}" alt="1">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[arr[1]].img}" alt="2">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[arr[2]].img}" alt="3">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[0].img}" alt="4">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[1].img}" alt="5">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[2].img}" alt="6">
            </li>
        </ul>
    </div>
    `
    } else if (level === "2") {
        for (let i = 0; i < 6; i++) {
            let index = getRandomIntInclusive(1, 36)
            cardsGame.push(cards[index])
        }

        let arr = [0, 1, 2, 3, 4, 5]
        shuffle(arr)

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
                <img class="game-card" src="${cardsGame[arr[0]].img}" alt="7">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[arr[1]].img}" alt="8">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[arr[2]].img}" alt="9">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[arr[3]].img}" alt="10">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[arr[4]].img}" alt="11">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[arr[5]].img}" alt="12">
            </li>
        </ul>
    </div>
    `
    } else {
        for (let i = 0; i < 9; i++) {
            let index = getRandomIntInclusive(1, 36)
            cardsGame.push(cards[index])
        }

        let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
        shuffle(arr)

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
                <img class="game-card" src="${cardsGame[arr[0]].img}" alt="10">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[arr[1]].img}" alt="11">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[arr[2]].img}" alt="12">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[arr[3]].img}" alt="13">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[arr[4]].img}" alt="14">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[arr[5]].img}" alt="15">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[arr[6]].img}" alt="16">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[arr[7]].img}" alt="17">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cardsGame[arr[8]].img}" alt="18">
            </li>
        </ul>
    </div>
    `
    }

    return appHtml
}
