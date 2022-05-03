import { smithFinder } from "../questions/006";

const NAMES = `
John Smith
Angela Jones
Bart Campbell
Joane Smith
Chris Woakes
Jeff Conners
Jim Smith
Carter Patrick
`;

describe("smithFinder", () => {
  it("should find smiths", () => {
    const smiths = smithFinder(NAMES);
    expect(smiths.length).toEqual(3);
    expect(smiths[0]).toEqual("John Smith");
    expect(smiths[1]).toEqual("Joane Smith");
    expect(smiths[2]).toEqual("Jim Smith");
  });
});
