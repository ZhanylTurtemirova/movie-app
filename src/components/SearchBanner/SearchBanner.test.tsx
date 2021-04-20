import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchBanner from "./SearchBanner";

describe("<SearchBanner />", () => {
  test("it should mount", () => {
    render(<SearchBanner />);

    const searchBanner = screen.getByTestId("SearchBanner");

    expect(searchBanner).toBeInTheDocument();
  });
});
