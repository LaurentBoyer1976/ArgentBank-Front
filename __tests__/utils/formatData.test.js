import { formatAccounts } from "../../app/utils/formatData";

describe("formatAccounts", () => {
  it("should format accounts correctly", () => {
    const accounts = [
      { _id: "1", title: "Account 1", amount: "$100", description: "Test" },
    ];
    const formatted = formatAccounts(accounts);
    expect(formatted).toEqual([
      { _id: "1", title: "Account 1", amount: "$100", description: "Test" },
    ]);
  });
});