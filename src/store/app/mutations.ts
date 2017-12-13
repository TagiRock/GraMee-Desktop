import { SidebarState } from "./state";
export interface AppMutations {
    selectSidebarItem: {
        item: SidebarState;
    };
}
