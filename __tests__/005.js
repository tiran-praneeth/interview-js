import Car from "../questions/005";

describe("Question 005", () => {
  it("constructs", () => {
    const instance = new Car();
    expect(instance).toBeDefined();
  });

  it("constructs with a color (default)", () => {
    const instance = new Car();
    expect(instance.color).toEqual("pink");
  });

  it("constructs with a color (custom)", () => {
    const instance = new Car({ color: "red" });
    expect(instance.color).toEqual("red");
  });

  it("honks", () => {
    const instance = new Car({ color: "blue" });
    expect(instance.honk()).toEqual("Honk from color: blue");
  });
});
