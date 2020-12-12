import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "../../AppContext";
import JobsClass from "./Jobs";

describe("Job List", () => {
  test("Jobs list showed after Loader", async () => {
    const { getByRole, findByText } = render(
      <Provider>
        <JobsClass />
      </Provider>
    );

    expect(getByRole("img")).toBeTruthy();

    expect(await findByText("Management")).toBeTruthy();

    expect(await findByText("Back-End")).toBeTruthy();

    expect(await findByText("Architect")).toBeTruthy();
  });
});
