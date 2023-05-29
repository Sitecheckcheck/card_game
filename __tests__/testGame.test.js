/**
 * @jest-environment jsdom
 */
const { it, expect, describe } = require("@jest/globals")
const {
    shuffle,
    getRandomIntInclusive,
    createCards,
} = require("../game-page.ts")

describe("shuffle", () => {
    it("should shuffle array", () => {
        const arr = ["1", "2", "3", "4", "5"]

        shuffle(arr)

        expect(arr[2]).not.toBe("3") || expect(arr[1]).not.toBe("2")
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
