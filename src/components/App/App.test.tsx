import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders and has header in the document", () => {
  const { getByText } = render(<App />);
  const header = getByText('Test here');
  expect(header).toBeInTheDocument();
});
