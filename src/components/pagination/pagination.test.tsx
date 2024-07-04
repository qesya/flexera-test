import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Pagination from "./pagination";

describe("Pagination component", () => {
  it("renders correctly with initial page", () => {
    const { getByText } = render(
      <Pagination page={1} onPageChange={() => {}} />,
    );

    expect(getByText("1")).toBeInTheDocument();
    expect(getByText("Prev")).toBeDisabled();
    expect(getByText("Next")).toBeEnabled();
  });

  it("calls onPageChange with the correct page number when clicking next", () => {
    const onPageChangeMock = jest.fn();
    const { getByText } = render(
      <Pagination page={1} onPageChange={onPageChangeMock} />,
    );

    fireEvent.click(getByText("Next"));
    expect(onPageChangeMock).toHaveBeenCalledWith(2);
  });

  it("calls onPageChange with the correct page number when clicking prev", () => {
    const onPageChangeMock = jest.fn();
    const { getByText } = render(
      <Pagination page={2} onPageChange={onPageChangeMock} />,
    );

    fireEvent.click(getByText("Prev"));
    expect(onPageChangeMock).toHaveBeenCalledWith(1);
  });

  it("disables the Prev button on the first page", () => {
    const { getByText } = render(
      <Pagination page={1} onPageChange={() => {}} />,
    );

    expect(getByText("Prev")).toBeDisabled();
  });

  it("enables the Prev button on any page other than the first", () => {
    const { getByText } = render(
      <Pagination page={2} onPageChange={() => {}} />,
    );

    expect(getByText("Prev")).toBeEnabled();
  });
});
