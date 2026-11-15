import { describe, it, expect } from "vitest";
import { getRiskLevel } from "./security";

describe("CyberShield Risk Analysis", () => {

  it("should identify low risk", () => {
    expect(getRiskLevel(90)).toBe("LOW");
  });

  it("should identify medium risk", () => {
    expect(getRiskLevel(60)).toBe("MEDIUM");
  });

  it("should identify high risk", () => {
    expect(getRiskLevel(30)).toBe("HIGH");
  });

});