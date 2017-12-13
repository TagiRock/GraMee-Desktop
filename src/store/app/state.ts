import { SidebarItemType } from "domain/model/SidebarItemType";

export interface AppState {
    sidebars: SidebarState[];
}

export interface SidebarState {
    type: SidebarItemType;
    path: string;
    iconName: string;
    active: boolean;
}
