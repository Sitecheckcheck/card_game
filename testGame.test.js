import { it, expect, describe } from "@jest/globals"
import { sum, renderFinish } from "./game.js"

describe("renderFinish", () => {
    it("should return winner if player win", () => {
        const winner = true
        const expected = `<div class="body">
            <div class="start">
                <div><img src="./static/img/выиграли.png" alt="выиграли"></div>
                <h2 class="start-title">Вы выиграли!</h2>
            <div class="finish-time-text">
                Затраченное время:
            </div>
            <div class="time finish-time">
                    <p class="min-value"></p>
                    <p class="sek-value"></p>
            </div>
            <button id="buttonFinish" class="button-start finish-button">Играть снова</button>
        </div>
    </div>`

        const result = renderFinish(winner)

        expect(expected).toBe(result)
    })

    it("should sum", () => {
        const a = 3
        const b = 4
        const expected = 7

        const result = sum(a, b)

        expect(expected).toBe(result)
    })
})

const { shuffle } = require("./game-page.ts")

describe("shuffle", () => {
    it("should shuffle array", () => {
        const arr = ["1", "2", "3", "4", "5"]
        const arr1 = arr

        shuffle(arr)

        expect(arr[1]).not.toBe(arr1[1])
    })
})
