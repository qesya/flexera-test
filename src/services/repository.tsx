"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/app";
import { clear, setRepository } from "@/store/repository";
import { Repository } from "@/types/repository";

type RepositoryContextProps = {
  selectedRepositories: Repository[];
  setRepository: (repository: Repository[]) => Promise<void>;
  clear: () => Promise<void>;
  repositories: Repository[];
  fetchRepositories: (params: FetchRepositoriesParams) => Promise<void>;
  loading: boolean;
};

type FetchRepositoriesParams = {
  page: number;
};

const RepositoryContext = createContext<RepositoryContextProps | undefined>(
  undefined,
);

export const RepositoryProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [repositories, setRepositories] = useState([]);
  const { repository: selectedRepositories } = useSelector(
    (e: RootState) => e.repository,
  );

  const fetchRepositories = async ({ page }: FetchRepositoriesParams) => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?sort=stars&q=javascript&per_page=10&page=${page}`,
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);

      setRepositories(data.items);

      setLoading(false);
    } catch (error: any) {
      setRepositories(error);
    }
  };

  const selectRepository = async (repository: Repository[]) => {
    dispatch(setRepository({ repository }));
  };

  const emptyRepository = async () => {
    dispatch(clear());
  };

  return (
    <RepositoryContext.Provider
      value={{
        repositories,
        fetchRepositories,
        selectedRepositories: selectedRepositories || [],
        setRepository: selectRepository,
        clear: emptyRepository,
        loading,
      }}
    >
      {children}
    </RepositoryContext.Provider>
  );
};

export const useRepository = () => {
  const context = useContext(RepositoryContext);
  if (!context) {
    throw new Error("useRepository must be used within an Provider");
  }

  return context;
};
