import { SidebarState } from "./state";
export interface AppActions {
   selectSidebarItem: {
        item: SidebarState
    };
}
