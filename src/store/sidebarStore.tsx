import { create } from "zustand";

type SidebarStore = {
  sidebarIsOpen: boolean;
  toggleSidebar: () => void;
};

export const sidebarToggle= create<SidebarStore>((set)=>({
    sidebarIsOpen: false,
    toggleSidebar: ()=>set((state)=>({sidebarIsOpen:!state.sidebarIsOpen}))
}))