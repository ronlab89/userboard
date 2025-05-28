import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PaginationState {
  // State
  currentPage: number;
  rowsPerPage: number;
  totalUsers: number;
  totalPages: number;
  // Actions
  setCurrentPage: (page: number) => void;
  setRowsPerPage: (rows: number) => void;
  setTotalUsers: (total: number) => void;
  setTotalPages: (total: number) => void;
  resetPagination: () => void;
}

const initialState = {
  currentPage: 1,
  rowsPerPage: 7,
  totalUsers: 0,
  totalPages: 0,
};

export const usePaginationStore = create<PaginationState>()(
  persist(
    (set) => ({
      ...initialState,

      setCurrentPage: (page) => set({ currentPage: page }),
      setRowsPerPage: (rows) => set({ rowsPerPage: rows }),
      setTotalUsers: (total) => set({ totalUsers: total }),
      setTotalPages: (total) => set({ totalPages: total }),
      resetPagination: () => set(initialState),
    }),
    {
      name: "pagination",
      // onRehydrateStorage: () => (state) => {
      //   // console.log("Rehydrating pagination state...", state);
      // },
    }
  )
);
