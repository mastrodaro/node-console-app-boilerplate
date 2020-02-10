import hello from "../src/hello";

describe("Example test suite", () => {
  it("Example test", () => {
    expect(hello()).toEqual("Hello world");
  });
});
