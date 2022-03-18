const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    test("shuffleArray should return a string", () => {
        let shuffledArray = shuffleArray(testData.array);
        expect(typeof shuffledArray).toBe("string")
    })
});

describe("shuffleArray should", () => {
test("shuffleArray should duel", () => {
    let shuffledArray = shuffleArray(testData.title);
    expect(shuffledArray).toBe("Rusty");
  });
});