import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import { Career } from "../../types";
import JobsList from "./JobsList";

const mockCustomer: Career = {
  pathId: 'dsawe3232dxa32323',
  name: "Job Name",
  isWishOfDevelopment: true,
  jobs: [{
    jobId: "JvbGUYgICAmK6o3wsM",
    name: "Back-End Developer",
    isWishOfDevelopment: false,
  }]
};

const checkJob = jest.fn();

describe("Job List", () => {
  test("renders", async () => {
    const { findByText } = render(
      <JobsList career={mockCustomer.jobs} pathId={mockCustomer.pathId} checkJob={checkJob} />
    );

    expect(await findByText(mockCustomer.jobs[0].name)).toBeTruthy();
    expect(await findByText("Back-End Developer")).toBeTruthy();
  });

  test("calls checkJob prop onJobRow Click", () => {
    const { getByTestId } = render(
      <JobsList career={mockCustomer.jobs} pathId={mockCustomer.pathId} checkJob={checkJob} />
    );

    act(() => {
      fireEvent.click(getByTestId(`jobs-${mockCustomer.pathId}`));
    });

    expect(checkJob).toHaveBeenCalled();
  });
});
