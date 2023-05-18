import { cards } from "./cards.js"
export function renderGameClose(level) {
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
            <li class="game__card">
                <img class="game-card" src="${cards[0].img}" alt="1">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cards[0].img}" alt="2">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cards[0].img}" alt="3">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cards[0].img}" alt="4">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cards[0].img}" alt="5">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cards[0].img}" alt="6">
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
            <li class="game__card">
                <img class="game-card" src="${cards[0].img}" alt="1">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cards[0].img}" alt="2">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cards[0].img}" alt="3">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cards[0].img}" alt="4">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cards[0].img}" alt="5">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cards[0].img}" alt="6">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cards[0].img}" alt="7">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cards[0].img}" alt="8">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cards[0].img}" alt="9">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cards[0].img}" alt="10">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cards[0].img}" alt="11">
            </li>
            <li class="game__card">
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
                <img class="game-card" src="${cards[0].img}" alt="1">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cards[0].img}" alt="2">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cards[0].img}" alt="3">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cards[0].img}" alt="4">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cards[0].img}" alt="5">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cards[0].img}" alt="6">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cards[0].img}" alt="7">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cards[0].img}" alt="8">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cards[0].img}" alt="9">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cards[0].img}" alt="10">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cards[0].img}" alt="11">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cards[0].img}" alt="12">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cards[0].img}" alt="13">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cards[0].img}" alt="14">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cards[0].img}" alt="15">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cards[0].img}" alt="16">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cards[0].img}" alt="17">
            </li>
            <li class="game__card">
                <img class="game-card" src="${cards[0].img}" alt="18">
            </li>
        </ul>
    </div>
    `
    }

    return appHtml
}
