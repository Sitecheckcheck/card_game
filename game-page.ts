import { cards } from "./cards"
import { CardsType } from "./cards"

export function getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export function shuffle(array: CardsType) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
    }
}

export function createCards(arr: CardsType) {
    return arr.reduce(
        (res: CardsType, current) => res.concat([current, current]),
        []
    )
}

export let cardsGameFirst: CardsType = []
export let cardsGame: CardsType = []

export function renderGame(level: string) {
    let appHtml
    if (level === "1") {
        while (cardsGameFirst.length < 3) {
            const index: number = getRandomIntInclusive(1, 36)
            if (!cardsGameFirst.includes(cards[index])) {
                cardsGameFirst.push(cards[index])
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
                    <p class="min-value">00</p>
                </div>
                <div class="time__block">
                    <p class="time-name">sek</p> 
                    <p class="sek-value">.00</p>
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
            if (!cardsGameFirst.includes(cards[index])) {
                cardsGameFirst.push(cards[index])
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
                    <p class="min-value">00</p>
                </div>
                <div class="time__block">
                    <p class="time-name">sek</p> 
                    <p class="sek-value">.00</p>
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
            if (!cardsGameFirst.includes(cards[index])) {
                cardsGameFirst.push(cards[index])
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
                    <p class="min-value">00</p>
                </div>
                <div class="time__block">
                    <p class="time-name">sek</p> 
                    <p class="sek-value">.00</p>
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

export function renderFinish(
    winner: boolean,
    minutes: number,
    seconds: number
) {
    let result = `<div class="body">
                <div class="start">
                    ${
                        !winner
                            ? '<div><img src="./static/img/проиграли.png" alt="проиграли"></div>'
                            : '<div><img src="./static/img/выиграли.png" alt="выиграли"></div>'
                    } 
                    ${
                        !winner
                            ? '<h2 class="start-title">Вы проиграли!</h2>'
                            : '<h2 class="start-title">Вы выиграли!</h2>'
                    } 
                    
                    <div class="finish-time-text">
                        Затраченное время:
                    </div>
                    <div class="time finish-time">
                            <p class="min-value">${minutes
                                .toString()
                                .padStart(2, "0")}</p>
                            <p class="sek-value">.${seconds
                                .toString()
                                .padStart(2, "0")}</p>
                    </div>
                    <button id="buttonFinish" class="button-start finish-button">Играть снова</button>
                </div>
            </div>`
    return result
}
