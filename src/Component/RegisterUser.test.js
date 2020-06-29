import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import axios from "../utils/axios";
import RegisterUser from "../Component/RegisterUser";
import MockAdapter from "axios-mock-adapter";
const mockAxios = new MockAdapter(axios);

describe("RegisterUser.js", () => {
  test("<h5> 'Registration Successful!' should appear when Registration is successful.", async () => {
    mockAxios
      .onPost("https://dancer-network.herokuapp.com/users/register", {
        username: "chocoman",
        password: "Abc123123",
        firstName: "choco",
        lastName: "man",
        stageName: "chocoman",
      })
      .reply(201);
    const { getByText, getByLabelText } = render(<RegisterUser />);
    const usernameInput = getByLabelText("username");
    const passwordInput = getByLabelText("password");
    const firstNameInput = getByLabelText("firstName");
    const lastNameInput = getByLabelText("lastName");
    const stageNameInput = getByLabelText("stageName");
    fireEvent.change(usernameInput, { target: { value: "chocoman" } });
    fireEvent.change(passwordInput, { target: { value: "Abc123123" } });
    fireEvent.change(firstNameInput, { target: { value: "choco" } });
    fireEvent.change(lastNameInput, { target: { value: "man" } });
    fireEvent.change(stageNameInput, { target: { value: "chocoman" } });
    const registerButton = getByLabelText("registerButton");
    fireEvent.click(registerButton);
    await wait(() => expect(getByLabelText("successText")).toBeInTheDocument());
  });
});
