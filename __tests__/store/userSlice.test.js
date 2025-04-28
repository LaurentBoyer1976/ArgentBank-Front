import userReducer, { setToken, clearUser, fetchUserData } from "../../app/store/userSlice";

describe("userSlice", () => {
  const initialState = {
    firstName: null,
    name: null,
    token: null,
    status: "idle",
    error: null,
  };

  it("should handle initial state", () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle setToken", () => {
    const action = setToken("mockToken");
    const state = userReducer(initialState, action);
    expect(state.token).toEqual("mockToken");
  });

  it("should handle clearUser", () => {
    const action = clearUser();
    const state = userReducer(
      { ...initialState, firstName: "John", name: "Doe", token: "mockToken" },
      action
    );
    expect(state).toEqual(initialState);
  });

  it("should handle fetchUserData.fulfilled", () => {
    const action = {
      type: fetchUserData.fulfilled.type,
      payload: { firstName: "John", lastName: "Doe" },
    };
    const state = userReducer(initialState, action);
    expect(state.firstName).toEqual("John");
    expect(state.name).toEqual("Doe");
    expect(state.status).toEqual("succeeded");
  });
});