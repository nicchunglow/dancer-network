import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

describe("Header.js", () => {
  test("should render <Header/> with menu", () => {
    const { getByAltText } = render(<Header />);
    const HeaderComponent = getByAltText("menu");
    expect(HeaderComponent).toBeInTheDocument();
  });
});
