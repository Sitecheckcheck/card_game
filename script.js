import { renderGame } from "./game-page.js"
import { renderGameClose } from "./game-page-close.js"

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
            }, 8000)
        }
    })
}
