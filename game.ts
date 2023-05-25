import { renderGameClose } from "./game-page-close"
import { cards } from "./cards"
import { renderGame, cardsGameFirst } from "./game-page"
import { appEl, renderApp } from "./script"

export function game() {
    appEl.innerHTML = renderGame((<any>window).application.level)
    setTimeout(() => {
        appEl.innerHTML = renderGameClose((<any>window).application.level)
        let cardElements: any = document.querySelectorAll(".game__card")
        let firstCard: any
        let cardIndex: number
        let count = 0
        let countGame = 0
        let winner
        for (const cardElement of cardElements) {
            cardElement.addEventListener("click", () => {
                if (!firstCard && !cardElement.classList.contains("open")) {
                    firstCard = cardElement.dataset.id
                    cardIndex = cardElement.dataset.index
                    cardElement.innerHTML = `<img class="game-card" src="${cards[firstCard].img}" alt="1"></img>`
                    cardElement.classList.add("open")
                } else {
                    if (
                        cardElement.dataset.id === firstCard &&
                        cardElement.dataset.index !== cardIndex
                    ) {
                        cardElement.innerHTML = `<img class="game-card" src="${
                            cards[cardElement.dataset.id].img
                        }" alt="1"></img>`
                        firstCard = null
                        cardElement.classList.add("open")
                        count++
                        if (count === cardsGameFirst.length) {
                            clearInterval(interval)
                            winner = true
                            appEl.innerHTML = renderFinish(winner)

                            const buttonFinish= document.getElementById("buttonFinish")

                            buttonFinish?.addEventListener("click", () => {
                                renderApp()
                            })
                        }
                    } else if (cardElement.dataset.index === cardIndex) {
                        return
                    } else {
                        countGame++
                        if (countGame > (<any>window).application.level) {
                            winner = false
                            appEl.innerHTML = renderFinish(winner)

                            const buttonFinish = document.getElementById("buttonFinish")
                            buttonFinish?.addEventListener("click", () => {
                                    renderApp()
                                })
                        }
                        let cardsEl: any = document.querySelectorAll(
                            `[data-id="${firstCard}"]`
                        )
                        for (const i of cardsEl) {
                            i.innerHTML = `<img class="game-card"  src="${cards[0].img}" alt="1">`
                            i.classList.remove("open")
                        }
                        firstCard = null
                    }
                }
            })
        }
        let sek = document.querySelector(".sek-value") as HTMLElement
        let min = document.querySelector(".min-value") as HTMLElement
        let seconds = 0
        let minutes = 0
        let interval = setInterval(updateTime, 1000)

        let buttonRestart = document.querySelector(".button-start") as HTMLElement
        buttonRestart.addEventListener("click", () => {
            game()
        })

        function renderFinish(winner: boolean) {
            let appHtml = `<div class="body">
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
            return appHtml
        }

        function updateTime() {
            seconds++
            if (seconds === 60) {
                minutes++
                seconds = 0
            }
            sek.textContent = `.${seconds.toString().padStart(2, "0")}`
            min.textContent = `${minutes.toString().padStart(2, "0")}`
        }
    }, 3000)
}
