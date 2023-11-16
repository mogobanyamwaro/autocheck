"use client";

import { usePathname } from "next/navigation";
import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import Drawer from "./drawer";
import clsx from "clsx";

const PhotoGallery = dynamic(() => import("@/components/common/gallery"));

export type DRAWER_VIEW = "PHOTO_GALLERY";

// render drawer contents
function renderDrawerContent(view: DRAWER_VIEW | string) {
  switch (view) {
    case "PHOTO_GALLERY":
      return <PhotoGallery />;
    default:
      return null;
  }
}

type DrawerPropsType = {
  isOpen: boolean;
  placement?: "top" | "right" | "bottom" | "left";
  view: string;
  customSize?: string;
};

export const drawerStateAtom = atom<DrawerPropsType>({
  isOpen: false,
  placement: "left",
  view: "SIDE_MENU",
});

export default function DrawerContainer() {
  let [drawerSate, setDrawerState] = useAtom(drawerStateAtom);
  const pathName = usePathname();
  useEffect(() => {
    setDrawerState({ ...drawerSate, isOpen: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName]);

  return (
    <>
      <Drawer
        isOpen={drawerSate.isOpen}
        placement={drawerSate.placement}
        customSize={drawerSate.customSize}
        containerClassName={clsx(
          drawerSate.view === "BOOKING_FORM" && "bg-white",
          drawerSate.view === "PHOTO_GALLERY" && "bg-white overflow-y-auto",
        )}
        onClose={() => setDrawerState({ ...drawerSate, isOpen: false })}
      >
        {renderDrawerContent(drawerSate.view)}
      </Drawer>
    </>
  );
}
