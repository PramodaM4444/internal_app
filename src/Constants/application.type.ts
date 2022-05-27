import { UIConstants } from "@constants/UIConstants";

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
