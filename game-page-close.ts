import { cards } from "./cards"
import { cardsGame } from "./game-page"
export function renderGameClose(level: string) {
    let appHtml
    if (level === "1") {
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
            <li class="game__card" data-id="${cardsGame[0].id}" data-index=0>
                <img class="game-card"  src="${cards[0].img}" alt="1">
            </li>
            <li class="game__card" data-id="${cardsGame[1].id}" data-index=1>
                <img class="game-card"  src="${cards[0].img}" alt="2">
            </li>
            <li class="game__card" data-id="${cardsGame[2].id}" data-index=2>
                <img class="game-card"  src="${cards[0].img}" alt="3">
            </li>
            <li class="game__card" data-id="${cardsGame[3].id}" data-index=3>
                <img class="game-card" src="${cards[0].img}" alt="4">
            </li>
            <li class="game__card" data-id="${cardsGame[4].id}" data-index=4>
                <img class="game-card"  src="${cards[0].img}" alt="5">
            </li>
            <li class="game__card" data-id="${cardsGame[5].id}" data-index=5>
                <img class="game-card"  src="${cards[0].img}" alt="6">
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
            <li class="game__card" data-id="${cardsGame[0].id}" data-index=0>
                <img class="game-card"  src="${cards[0].img}" alt="1">
            </li>
            <li class="game__card" data-id="${cardsGame[1].id}" data-index=1>
                <img class="game-card" src="${cards[0].img}" alt="2">
            </li>
            <li class="game__card" data-id="${cardsGame[2].id}" data-index=2>
                <img class="game-card" src="${cards[0].img}" alt="3">
            </li>
            <li class="game__card" data-id="${cardsGame[3].id}" data-index=3>
                <img class="game-card" src="${cards[0].img}" alt="4">
            </li>
            <li class="game__card" data-id="${cardsGame[4].id}" data-index=4>
                <img class="game-card" src="${cards[0].img}" alt="5">
            </li>
            <li class="game__card" data-id="${cardsGame[5].id}" data-index=5>
                <img class="game-card" src="${cards[0].img}" alt="6">
            </li>
            <li class="game__card" data-id="${cardsGame[6].id}" data-index=6>
                <img class="game-card" src="${cards[0].img}" alt="7">
            </li>
            <li class="game__card" data-id="${cardsGame[7].id}" data-index=7>
                <img class="game-card" src="${cards[0].img}" alt="8">
            </li>
            <li class="game__card" data-id="${cardsGame[8].id}" data-index=8>
                <img class="game-card" src="${cards[0].img}" alt="9">
            </li>
            <li class="game__card" data-id="${cardsGame[9].id}" data-index=9>
                <img class="game-card" src="${cards[0].img}" alt="10">
            </li>
            <li class="game__card" data-id="${cardsGame[10].id}" data-index=10>
                <img class="game-card" src="${cards[0].img}" alt="11">
            </li>
            <li class="game__card" data-id="${cardsGame[11].id}" data-index=11>
                <img class="game-card" src="${cards[0].img}" alt="12">
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
            <li class="game__card" data-id="${cardsGame[0].id}" data-index=0>
                <img class="game-card" src="${cards[0].img}" alt="1">
            </li>
            <li class="game__card" data-id="${cardsGame[1].id}" data-index=1>
                <img class="game-card" src="${cards[0].img}" alt="2">
            </li>
            <li class="game__card" data-id="${cardsGame[2].id}" data-index=2>
                <img class="game-card" src="${cards[0].img}" alt="3">
            </li>
            <li class="game__card" data-id="${cardsGame[3].id}" data-index=3>
                <img class="game-card" src="${cards[0].img}" alt="4">
            </li>
            <li class="game__card" data-id="${cardsGame[4].id}" data-index=4>
                <img class="game-card" src="${cards[0].img}" alt="5">
            </li>
            <li class="game__card" data-id="${cardsGame[5].id}" data-index=5>
                <img class="game-card" src="${cards[0].img}" alt="6">
            </li>
            <li class="game__card" data-id="${cardsGame[6].id}" data-index=6>
                <img class="game-card" src="${cards[0].img}" alt="7">
            </li>
            <li class="game__card" data-id="${cardsGame[7].id}" data-index=7>
                <img class="game-card" src="${cards[0].img}" alt="8">
            </li>
            <li class="game__card" data-id="${cardsGame[8].id}" data-index=8>
                <img class="game-card" src="${cards[0].img}" alt="9">
            </li>
            <li class="game__card" data-id="${cardsGame[9].id}" data-index=9>
                <img class="game-card" src="${cards[0].img}" alt="10">
            </li>
            <li class="game__card" data-id="${cardsGame[10].id}" data-index=10>
                <img class="game-card" src="${cards[0].img}" alt="11">
            </li>
            <li class="game__card" data-id="${cardsGame[11].id}" data-index=11>
                <img class="game-card" src="${cards[0].img}" alt="12">
            </li>
            <li class="game__card" data-id="${cardsGame[12].id}" data-index=12>
                <img class="game-card" src="${cards[0].img}" alt="13">
            </li>
            <li class="game__card" data-id="${cardsGame[13].id}" data-index=13>
                <img class="game-card" src="${cards[0].img}" alt="14">
            </li>
            <li class="game__card" data-id="${cardsGame[14].id}" data-index=14>
                <img class="game-card" src="${cards[0].img}" alt="15">
            </li>
            <li class="game__card" data-id="${cardsGame[15].id}" data-index=15>
                <img class="game-card" src="${cards[0].img}" alt="16">
            </li>
            <li class="game__card" data-id="${cardsGame[16].id}" data-index=16>
                <img class="game-card" src="${cards[0].img}" alt="17">
            </li>
            <li class="game__card" data-id="${cardsGame[17].id}" data-index=17>
                <img class="game-card" src="${cards[0].img}" alt="18">
            </li>
        </ul>
    </div>
    `
    }

    return appHtml
}
