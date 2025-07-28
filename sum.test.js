const sum = require("./sum");

test("legger sammen 1 + 2 for å bli 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("legger sammen to negative tall", () => {
  expect(sum(-1, -2)).toBe(-3);
});

test("legger sammen positivt og negativt tall", () => {
  expect(sum(5, -3)).toBe(2);
});
