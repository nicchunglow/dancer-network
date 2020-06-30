import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer.js", () => {
  test("should render 'Nicholas Chung' as part of the footer", () => {
    const { getByText } = render(<Footer />);
    const footerText = getByText("Created by Nicholas Chung");
    expect(footerText).toBeInTheDocument();
  });
});
