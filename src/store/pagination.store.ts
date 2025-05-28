/**
 * usePaginationStore
 *
 * Zustand store to manage pagination state in a React application.
 * Supports persistence across reloads using Zustand's `persist` middleware.
 *
 * State:
 * - currentPage: Current visible page in the table view.
 * - rowsPerPage: Number of rows to show per page (defaults to 7).
 * - totalUsers: Total number of users or items (usually from backend).
 * - totalPages: Computed total pages based on users and rowsPerPage.
 *
 * Actions:
 * - setCurrentPage(page): Sets the current page number.
 * - setRowsPerPage(rows): Sets the number of rows per page.
 * - setTotalUsers(total): Sets the total number of users.
 * - setTotalPages(total): Sets the total number of pages.
 * - resetPagination(): Resets the pagination state to initial values.
 *
 * Example usage:
 * ```ts
 * const currentPage = usePaginationStore(state => state.currentPage);
 * const setRowsPerPage = usePaginationStore(state => state.setRowsPerPage);
 * ```
 *
 * @returns Zustand store with pagination state and actions.
 */

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
      //   setRowsPerPage: (rows) => set({ rowsPerPage: rows }),
      //   setTotalUsers: (total) => set({ totalUsers: total }),
      setTotalPages: (total) => set({ totalPages: total }),

      setTotalUsers: (total) =>
        set((state) => ({
          totalUsers: total,
          totalPages: Math.ceil(total / state.rowsPerPage),
        })),

      setRowsPerPage: (rows) =>
        set((state) => ({
          rowsPerPage: rows,
          totalPages: Math.ceil(state.totalUsers / rows),
          currentPage: 1, // opcional: reinicia al cambiar filas por página
        })),
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
