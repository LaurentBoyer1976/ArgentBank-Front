import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import LoginModal from "../../app/components/loginModal";

const mockStore = configureStore([]);

describe("LoginModal Component", () => {
  it("renders without crashing", () => {
    const store = mockStore({ user: { token: null } });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginModal />
        </BrowserRouter>
      </Provider>
    );
  });
});