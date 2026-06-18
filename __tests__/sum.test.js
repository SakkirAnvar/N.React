import { sum } from "../src/components/sum";

test("Add the two parameters and give the summation", () => {
  const result = sum(3, 7);

  //Assertion
  expect(result).toBe(10);
});
