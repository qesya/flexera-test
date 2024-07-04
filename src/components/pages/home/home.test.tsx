import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useRepository } from "@/services/repository";
import { repositoriesMock } from "@/mock";
import HomePage from "./home";

// Mock the useRepository hook
jest.mock("../../../services/repository.tsx", () => ({
  useRepository: jest.fn(),
}));

const useRepositoryMock = {
  repositories: repositoriesMock,
  selectedRepositories: [],
  setRepository: jest.fn(),
  fetchRepositories: jest.fn(),
  loading: false,
};

describe("HomePage Component", () => {
  beforeEach(() => {
    (useRepository as jest.Mock).mockReturnValue(useRepositoryMock);
  });

  test("renders the component with repositories", () => {
    render(<HomePage />);

    expect(screen.getByText("Browse Repository")).toBeInTheDocument();
    expect(screen.getByText("Repository 1")).toBeInTheDocument();
    expect(screen.getByText("Repository 2")).toBeInTheDocument();
  });

  test("handles repository selection", () => {
    render(<HomePage />);

    const checkbox = screen.getAllByRole("checkbox")[0];
    fireEvent.click(checkbox);

    expect(useRepositoryMock.setRepository).toHaveBeenCalled();
  });

  test("handles page change", () => {
    render(<HomePage />);

    const paginationButton = screen.getAllByText("Next"); // Assuming the pagination component renders page numbers as buttons
    fireEvent.click(paginationButton[0]);

    expect(useRepositoryMock.fetchRepositories).toHaveBeenCalledWith({
      page: 2,
    });
  });

  test("fetches repositories on initial render", () => {
    render(<HomePage />);

    expect(useRepositoryMock.fetchRepositories).toHaveBeenCalledWith({
      page: 1,
    }); // Initial page is 1
  });
});
