// import { renderGame } from "./game-page.js"
import "./style.css"
import { game } from "./game"

export const appEl = document.getElementById("app") !

renderApp();

(<any>window).application = {
    level: null,
}

export function renderApp() {
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

    const startButton = document.getElementById("buttonStart")

    startButton?.addEventListener("click", () => {
        const levelElements = Array.from(document.querySelectorAll(".level-input")) as Array<HTMLInputElement> 
console.log(levelElements);
        for (const levelElement of levelElements) {
            if (levelElement.checked) {
                ;(<any>window).application.level = levelElement.value
                break
            }
        }

        if (!(<any>window).application.level) {
            alert("Выберете сложность")
        } else {
            game()
        }
    })
}
