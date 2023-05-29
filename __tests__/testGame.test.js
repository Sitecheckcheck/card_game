/**
 * @jest-environment jsdom
 */
const { it, expect, describe } = require("@jest/globals")
const {
    shuffle,
    getRandomIntInclusive,
    createCards,
    renderFinish,
} = require("../game-page.ts")

describe("shuffle", () => {
    it("should shuffle array", () => {
        const arr = [1, 2, 3, 4, 5]
        const arr2 = [1, 2, 3, 4, 5]

        shuffle(arr)

        expect(arr2).not.toEqual(arr)
    })
})

describe("getRandomIntInclusive", () => {
    it("should return random namber between min and max", () => {
        const min = 1
        const max = 10

        const result = getRandomIntInclusive(min, max)

        expect(result).toBeGreaterThan(min - 1)
        expect(result).toBeLessThan(max + 1)
    })
})

describe("createCards", () => {
    it("should double the array", () => {
        const arr = ["1", "2", "3"]

        const result = createCards(arr)

        expect(result).toHaveLength(arr.length * 2)
    })
})

describe("renderFinish", () => {
    it("should return HTML-code", () => {
        const winner = true
        const min = 12
        const sec = 21

        const result = renderFinish(winner, min, sec)

        expect(typeof result).toBe("string")
    })
})
