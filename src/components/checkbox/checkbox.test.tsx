import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Checkbox from "./checkbox";

describe("Checkbox Component", () => {
  const label = "Test Checkbox";

  test("renders the checkbox with label", () => {
    render(<Checkbox label={label} />);

    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  test("renders the checkbox without label", () => {
    render(<Checkbox />);

    expect(screen.queryByText(label)).not.toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  test("checkbox is checked when checked prop is true", () => {
    render(<Checkbox checked={true} />);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  test("checkbox is not checked when checked prop is false", () => {
    render(<Checkbox checked={false} />);

    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  test("checkbox changes state when clicked", () => {
    const onChange = jest.fn();
    render(<Checkbox checked={false} onChange={onChange} />);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(onChange).toHaveBeenCalled();
  });
});
