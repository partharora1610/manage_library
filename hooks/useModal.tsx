// This is the modal store that I am creating using zustand...
import { create } from "zustand";

export type ModalType = "issueBook" | "recieveBook";

interface ModalData {
  bookId?: string;
}

interface ModalStore {
  type: ModalType | null;
  data: ModalData;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  isOpen: false,
  data: {},
  onOpen: (type, data = {}) =>
    set({
      isOpen: true,
      type,
      data,
    }),
  onClose: () =>
    set({
      isOpen: false,
      type: null,
    }),
}));
