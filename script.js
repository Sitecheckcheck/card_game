import { renderGame, cardsGameFirst } from "./game-page.js"
import { renderGameClose } from "./game-page-close.js"
import { cards } from "./cards.js"
import "./style.css"

const appEl = document.getElementById("app")

renderApp(renderGame)
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
                appEl.innerHTML = renderGameClose(window.application.level)
                let cardElements = document.querySelectorAll(".game__card")
                let firstCard = null
                let cardIndex
                let count = 0
                for (const cardElement of cardElements) {
                    cardElement.addEventListener("click", () => {
                        console.log(cardElement)
                        if (
                            !firstCard &&
                            cardElement.childNodes ===
                                "./static/img/закрытая.png"
                        ) {
                            firstCard = cardElement.dataset.id
                            cardIndex = cardElement.dataset.index
                            cardElement.innerHTML = `<img class="game-card" src="${cards[firstCard].img}" alt="1"></img>`
                        } else {
                            if (
                                cardElement.dataset.id === firstCard &&
                                cardElement.dataset.index !== cardIndex
                            ) {
                                cardElement.innerHTML = `<img class="game-card" src="${
                                    cards[cardElement.dataset.id].img
                                }" alt="1"></img>`
                                firstCard = null
                                count++
                                if (count === cardsGameFirst.length) {
                                    clearInterval(interval)
                                }
                            } else if (
                                cardElement.dataset.index === cardIndex
                            ) {
                                return
                            } else {
                                let cardsEl = document.querySelectorAll(
                                    `[data-id="${firstCard}"]`
                                )
                                for (const i of cardsEl) {
                                    i.innerHTML = `<img class="game-card"  src="${cards[0].img}" alt="1">`
                                }
                                firstCard = null
                            }
                        }
                    })
                }
                let sek = document.querySelector(".sek-value")
                let min = document.querySelector(".min-value")
                let seconds = 0
                let minutes = 0
                let interval = setInterval(updateTime, 1000)

                function updateTime() {
                    seconds++
                    if (seconds === 60) {
                        minutes++
                        seconds = 0
                    }
                    sek.textContent = `.${seconds.toString().padStart(2, "0")}`
                    min.textContent = `${minutes.toString().padStart(2, "0")}`
                }
            }, 1000)
        }
    })
}
