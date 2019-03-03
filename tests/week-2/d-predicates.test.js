const {
  isNegative,
  isBetweenZeroAnd10
} = require("../../week-2/D-predicates/exercise");

test("'isNegative' is a predicate", () => {
  expect(typeof isNegative(2)).toBe("boolean");
});

test("'isBetweenZeroAnd10' is a predicate", () => {
  expect(typeof isBetweenZeroAnd10(2)).toBe("boolean");
});

test("'isNegative' returns true when number is negative", () => {
  const getRandomNum = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  for (let i = 0; i < 21; i++) {
    const randomNum = getRandomNum();
    const correctResult = randomNum < 0;
    expect(isNegative(randomNum)).toBe(correctResult);
  }
});

test("'isBetweenZeroAnd10' returns true when number is between 0 and 10", () => {
  const getRandomNum = () => {
    return Math.floor(Math.random() * 51) - 10;
  };

  for (let i = 0; i < 51; i++) {
    const randomNum = getRandomNum();
    const correctResult = randomNum > 0 && randomNum < 10;
    expect(isBetweenZeroAnd10(randomNum)).toBe(correctResult);
  }
});
