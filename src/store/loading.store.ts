/**
 * Zustand store for managing loading states.
 *
 * This store uses the `persist` middleware to persist loading states in localStorage
 * under the key "loading", allowing the state to survive page reloads.
 *
 * Types:
 * - LoadingState: A type representing a dynamic object with boolean values
 *   indicating whether a given process is loading or not.
 *
 * State:
 * - loading: An object where each key corresponds to a process and its boolean
 *   value indicates if it is currently loading.
 *
 * Actions:
 * - setLoading(key: string, value: boolean): Sets the loading state for a specific key.
 * - resetLoading(): Resets the loading state to the initial empty object.
 *
 * Persistence:
 * - The state is automatically rehydrated from localStorage.
 * - The `name` option in `persist` defines the storage key.
 */

import type { LoadingState } from "@/types/loader";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface loaderState {
  // State
  loading: LoadingState;
  // Actions
  setLoading: (key: string, value: boolean) => void;
  resetLoading: () => void;
}

const initialState = {
  loading: {},
};

export const useLoadingStore = create<loaderState>()(
  persist(
    (set) => ({
      ...initialState,

      setLoading: (key, value) =>
        set((state) => ({
          loading: {
            ...state.loading,
            [key]: value,
          },
        })),

      resetLoading: () => set(initialState),
    }),
    {
      name: "loading",
      // onRehydrateStorage: () => (state) => {
      //   // console.log("Rehydrating loading state...", state);
      // },
    }
  )
);
