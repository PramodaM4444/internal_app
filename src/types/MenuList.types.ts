export interface EachMenuItem {
    MuiIcon: any;
    menuTitle: string;
    route: string;
}

export interface EachItem {
    item: EachMenuItem;
    path: string;
}

export interface ListItems {
    list: EachMenuItem[];
    currentPath: string;
}
