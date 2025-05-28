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
  data: Record<string, unknown>;
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
