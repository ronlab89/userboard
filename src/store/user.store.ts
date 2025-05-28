/**
 * Zustand store for managing user data.
 *
 * This store uses the `persist` middleware to persist user data in localStorage
 * under the key "users", allowing the state to survive page reloads.
 *
 * Types:
 * - Users: A custom type imported from "@/types/user" that represents the user structure.
 *
 * State:
 * - users: Holds the list of users or null if no data is present.
 *
 * Actions:
 * - setUsers(data: Users | null): Sets the users state with the provided data.
 * - resetUsers(): Resets the users state to the initial state (empty array).
 *
 * Persistence:
 * - The state is automatically rehydrated from localStorage.
 * - The `name` option in `persist` defines the storage key.
 */

import type { Users } from "@/types/user";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  // State
  users: Users | null;
  // Actions
  setUsers: (data: Users | null) => void;
  resetUsers: () => void;
}

const initialState = {
  users: [],
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      ...initialState,

      setUsers: (data) => set({ users: data }),
      resetUsers: () => set(initialState),
    }),
    {
      name: "users",
      // onRehydrateStorage: () => (state) => {
      //   // console.log("Rehydrating users state...", state);
      // },
    }
  )
);
