import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import axios from "../utils/axios";
import Login from "../Component/Login";
import MockAdapter from "axios-mock-adapter";
const mockAxios = new MockAdapter(axios);

describe("Login.js", () => {
  afterEach(async () => {
    jest.resetAllMocks();
  });
  test("Login title text should appear when page renders", () => {
    const { getByLabelText } = render(<Login />);
    const loginTitle = getByLabelText("Title");
    expect(loginTitle).toBeInTheDocument();
  });
  test("<h5> 'Login Successful!' should appear when login is successful.", async () => {
    mockAxios
      .onPost("https://dancer-network.herokuapp.com/users/login", {
        username: "hellokitty",
        password: "Abc123123",
      })
      .reply(201);
    const { getByText, getByLabelText } = render(<Login />);
    const usernameInput = getByLabelText("username");
    const passwordInput = getByLabelText("password");
    fireEvent.change(usernameInput, { target: { value: "hellokitty" } });
    fireEvent.change(passwordInput, { target: { value: "Abc123123" } });
    const loginButton = getByLabelText("loginButton");
    fireEvent.click(loginButton);
    await wait(() =>
      expect(getByText("Login Successful!")).toBeInTheDocument()
    );
  });
});
