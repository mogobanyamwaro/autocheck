"use client";

import { atom, useSetAtom, useAtomValue } from "jotai";

export type MODAL_VIEW = "SHARE";

const modalAtom = atom({
  open: false,
  view: "ADD_REVIEW_VIEW",
});

export function useModal() {
  let modal = useAtomValue(modalAtom);
  let setModal = useSetAtom(modalAtom);

  function openModal(view: MODAL_VIEW) {
    setModal({
      ...modal,
      view,
      open: true,
    });
  }

  function closeModal() {
    setModal({
      ...modal,
      open: false,
    });
  }

  return {
    ...modal,
    openModal,
    closeModal,
  };
}
