// import { it, expect } from "@jest/globals"
// import { renderFinish } from "./game.ts"

// it("should return winтer if player win", () => {
//     const winner = true
//     const expected = `<div class="body">
//         <div class="start">
//             <div><img src="./static/img/выиграли.png" alt="выиграли"></div>
//             <h2 class="start-title">Вы выиграли!</h2>
//         <div class="finish-time-text">
//             Затраченное время:
//         </div>
//         <div class="time finish-time">
//                 <p class="min-value"></p>
//                 <p class="sek-value"></p>
//         </div>
//         <button id="buttonFinish" class="button-start finish-button">Играть снова</button>
//     </div>
// </div>`

//     const result = renderFinish(winner)

//     expect(expected).toBe(result)
// })

const { it, expect } = require("@jest/globals")
const { sum } = require("./game.ts")

it("should sum", () => {
    const a = 3
    const b = 4
    const expected = 7

    const result = sum(a, b)

    expect(expected).toBe(result)
})
