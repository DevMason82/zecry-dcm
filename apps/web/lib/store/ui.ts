"use client";

import { create } from "zustand";

type UIState = {
  modalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const useUI = create<UIState>((set) => ({
  modalOpen: false,
  openModal: () => set({ modalOpen: true }),
  closeModal: () => set({ modalOpen: false }),
}));
