import { renderGameClose } from "./game-page-close"
import { cards } from "./cards"
import { renderGame, cardsGameFirst, renderFinish } from "./game-page"
import { appEl, renderApp } from "./script"

export function game() {
    appEl.innerHTML = renderGame((<any>window).application.level)
    setTimeout(() => {
        appEl.innerHTML = renderGameClose((<any>window).application.level)
        let cardElements = Array.from(
            document.querySelectorAll(".game__card")
        ) as Array<HTMLElement>
        let firstCard: number | null = null
        let cardIndex: string
        let count = 0
        let countGame = 0
        let winner
        let seconds = 0
        let minutes = 0
        for (const cardElement of cardElements) {
            cardElement.addEventListener("click", () => {
                if (!firstCard && !cardElement.classList.contains("open")) {
                    firstCard = cardElement.dataset.id as unknown as number
                    cardIndex = cardElement.dataset.index!
                    cardElement.innerHTML = `<img class="game-card" src="${cards[firstCard].img}" alt="1"></img>`
                    cardElement.classList.add("open")
                } else {
                    if (
                        (cardElement.dataset.id as unknown as number) ===
                            firstCard &&
                        cardElement.dataset.index !== cardIndex
                    ) {
                        cardElement.innerHTML = `<img class="game-card" src="${cards[firstCard].img}" alt="1"></img>`
                        firstCard = null
                        cardElement.classList.add("open")
                        count++
                        if (count === cardsGameFirst.length) {
                            clearInterval(interval)
                            winner = true
                            appEl.innerHTML = renderFinish(
                                winner,
                                minutes,
                                seconds
                            )

                            const buttonFinish =
                                document.getElementById("buttonFinish")

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
                            appEl.innerHTML = renderFinish(
                                winner,
                                minutes,
                                seconds
                            )

                            const buttonFinish =
                                document.getElementById("buttonFinish")
                            buttonFinish?.addEventListener("click", () => {
                                renderApp()
                            })
                        }
                        let cardsEl = Array.from(
                            document.querySelectorAll(
                                `[data-id="${firstCard}"]`
                            )
                        ) as Array<HTMLElement>
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
        let interval = setInterval(updateTime, 1000)

        let buttonRestart = document.querySelector(
            ".button-start"
        ) as HTMLElement
        buttonRestart.addEventListener("click", () => {
            game()
        })

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
