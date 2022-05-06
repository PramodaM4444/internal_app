export interface SinleMenuListHOC {
    IconComponentName: any;
    menuTitle: string;
}

export interface UIConstantsType {
    projectHeaderTitle: string;
    addToCart: string;
    projectDetails: string;
    projectDetailsSubmit: string;
    projectName: string;
    projectCode: string;
    projectChannelOwner: string;
    projectActivitiesLastWeek: string;
    projectActivitiesNextWeek: string;
    projectAccomplishment: string;
    projectStatus: string;
    projectCompletionDate: string;
    projectBandwidthAvailble: string;
    leftMenuHome: string;
    leftMenuILC: string;
    leftMenuForum: string;
    leftMenuProjectDetails: string;
    leftMenuAdmin: string;
    leftMenuSettings: string;
    isRequired: string;
    maxMessage: string;
}

export interface DropdownType {
    label: string;
    autoFocus?: boolean;
    name: string;
    renderValue?: any;
    error: any;
    onChange: any;
    helperText: any;
    options: Record<string, any>;
}

export interface TextareaType {
    label: string;
    autoFocus?: boolean;
    name: string;
    renderValue?: any;
    error: any;
    onChange: any;
    helperText: any;
    options: Record<string, any>;
}
