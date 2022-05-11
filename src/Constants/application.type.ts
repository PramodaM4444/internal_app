import { UIConstants } from "./UIConstants";

export interface SinleMenuListHOC {
    IconComponentName: any;
    menuTitle: string;
}

export type UIConstantsKeys = keyof typeof UIConstants;

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
    error: any;
    helperText: any;
}
