/*global google*/

import React from "react";
import { render } from "@testing-library/react";
import EventGallery from "./EventGallery";

describe("EventGallery.js", () => {
  test("should render All Events Text", () => {
    const { getByText } = render(<EventGallery />);
    const allEventsText = getByText("All Events");
    expect(allEventsText).toBeInTheDocument();
  });
});
