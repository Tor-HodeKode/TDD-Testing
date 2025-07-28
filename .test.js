const sum = require("./sum");

test("legger sammen 1 + 2 for å bli 3", () => {
  expect(sum(1, 2)).toBe(3);
});
