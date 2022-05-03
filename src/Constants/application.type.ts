export interface SinleMenuListHOC {
    IconComponentName: any;
    menuTitle: string;
}

export interface DropdownProps {
    label: string;
    autoFocus?: boolean;
    name: string;
    renderValue?: any;
    error: any;
    onChange: any;
    helperText: any;
    options: Record<string, any>;
}
