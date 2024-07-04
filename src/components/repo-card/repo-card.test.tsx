import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import RepoCard from "./repo-card";

describe("RepoCard Component", () => {
  const props = {
    title: "Test Title",
    description: "Test Description",
    image: "test-image.jpg",
    selected: false,
    onSelected: jest.fn(),
  };

  test("renders the component with props", () => {
    render(<RepoCard {...props} />);

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "test-image.jpg");
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  test("calls onSelected with true when checkbox is checked", () => {
    render(<RepoCard {...props} />);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(props.onSelected).toHaveBeenCalledWith(true);
  });

  test("calls onSelected with false when checkbox is unchecked", () => {
    render(<RepoCard {...props} selected={true} />);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(props.onSelected).toHaveBeenCalledWith(false);
  });
});
