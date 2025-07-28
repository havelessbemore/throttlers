import { ACQUIRED } from "src/utils/constants";

describe("ACQUIRED", () => {
  it("is defined", () => {
    expect(ACQUIRED).toBeDefined();
  });

  it("is a number", () => {
    expect(typeof ACQUIRED).toBe("number");
  });

  it("is an integer", () => {
    expect(Number.isInteger(ACQUIRED)).toBe(true);
  });

  it("is a safe integer", () => {
    expect(Number.isSafeInteger(ACQUIRED)).toBe(true);
  });

  it("is less than or equal to 0", () => {
    expect(ACQUIRED <= 0).toBe(true);
  });
});
