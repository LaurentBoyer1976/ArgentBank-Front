import accountReducer, { fetchUserAccounts } from "../../app/store/accountSlice";

describe("accountSlice", () => {
  const initialState = {
    accounts: [],
    status: "idle",
    error: null,
  };

  it("should handle initial state", () => {
    expect(accountReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle fetchUserAccounts.pending", () => {
    const action = { type: fetchUserAccounts.pending.type };
    const state = accountReducer(initialState, action);
    expect(state.status).toEqual("loading");
  });

  it("should handle fetchUserAccounts.fulfilled", () => {
    const action = {
      type: fetchUserAccounts.fulfilled.type,
      payload: [
        { id: "1", title: "Account 1", amount: "$100", description: "Test" },
      ],
    };
    const state = accountReducer(initialState, action);
    expect(state.status).toEqual("succeeded");
    expect(state.accounts).toHaveLength(1);
  });

  it("should handle fetchUserAccounts.rejected", () => {
    const action = {
      type: fetchUserAccounts.rejected.type,
      payload: "Error fetching accounts",
    };
    const state = accountReducer(initialState, action);
    expect(state.status).toEqual("failed");
    expect(state.error).toEqual("Error fetching accounts");
  });
});