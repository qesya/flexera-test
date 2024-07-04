"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Repository } from "@/types/repository";

interface RepositoryState {
  repository: Repository[] | null;
}

const initialState: RepositoryState = {
  repository: [],
};

const repositorySlice = createSlice({
  name: "repository",
  initialState,
  reducers: {
    setRepository: (state, action: PayloadAction<RepositoryState>) => {
      state.repository = action.payload.repository;
    },
    clear: (state) => {
      state.repository = [];
    },
  },
});

export const { setRepository, clear } = repositorySlice.actions;
export default repositorySlice.reducer;
