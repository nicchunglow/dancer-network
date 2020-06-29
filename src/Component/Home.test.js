import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";

describe("Home.js", () => {
  test("should render <Home/> with description and image", () => {
    const { getByText, getByAltText } = render(<Home />);
    const description =
      "This web-app aims to bring the dance community together by connecting daners to various dance events! As this app progress, it hopes to connect with dancers locally, in Singapore, first before reaching other events in the regional countries, and hopefully the rest of the world, in the future. If you like the idea, do use it and share it with your friends!";
    const logo = getByAltText("logo");
    const homeDescription = getByText(description);
    expect(logo).toBeInTheDocument();
    expect(homeDescription).toBeInTheDocument();
  });
});
