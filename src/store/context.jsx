import { create } from "zustand";

export const useModalStore = create((set) => ({
  modal: false,
  openModal: () => set(() => ({ modal: true })),
  closeModal: () => set(() => ({ modal: false })),
}));
