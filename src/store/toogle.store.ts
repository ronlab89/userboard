/**
 * Zustand store for managing toggle states related to modals and tooltips.
 *
 * State properties:
 * - toggleModal: boolean indicating if a modal is open or closed.
 * - modalType: string or null representing the current modal type.
 * - data: object holding arbitrary data associated with the modal or tooltip.
 * - tooltip: object with:
 *    - status: boolean indicating tooltip visibility.
 *    - id: string or undefined representing the tooltip identifier.
 *
 * Actions (methods) to update state:
 * - setToggleModal(bool): sets the modal open/close state.
 * - setModalType(type): sets the modal type.
 * - setData(info): sets the data associated with modal or tooltip.
 * - setTooltip(bool, id): sets the tooltip visibility and its id.
 * - resetToggles(): resets all toggles and data to initial default state.
 *
 * Persistence:
 * - The store state is persisted under the key "toggle" using zustand's persist middleware.
 */

import type { User } from "@/types/user";
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Tipado general del store
interface TooltipWithId {
  status: boolean;
  id: string | undefined;
}

interface ToggleState {
  toggleModal: boolean;
  modalType: string | null;
  data: Record<string, unknown> | User;
  tooltip: TooltipWithId;

  // Métodos
  setToggleModal: (bool: boolean) => void;
  setModalType: (type: string | null) => void;
  setData: (info: Record<string, unknown>) => void;
  setTooltip: (bool: boolean, id: string | undefined) => void;
  resetToggles: () => void;
}

const initialState = {
  toggleModal: false,
  modalType: null,
  data: {},
  tooltip: { status: false, id: "" } as TooltipWithId,
};

export const useToggleStore = create<ToggleState>()(
  persist(
    (set) => ({
      ...initialState,

      setToggleModal: (bool) => set({ toggleModal: bool }),
      setModalType: (type) => set({ modalType: type }),
      setData: (info) => set({ data: info }),
      setTooltip: (bool, id) => set({ tooltip: { status: bool, id: id } }),
      resetToggles: () => set(initialState),
    }),
    {
      name: "toggle",
      // onRehydrateStorage: () => (state) => {
      //   // console.log("Rehydrating toggle state...", state);
      // },
    }
  )
);
