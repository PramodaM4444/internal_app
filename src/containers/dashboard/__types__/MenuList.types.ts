export interface EachMenuItem {
    MuiIcon: any;
    menuTitle: string;
    route: string;
}

export interface EachItem {
    item: EachMenuItem;
}

export interface ListItems {
    list: EachMenuItem[];
}
