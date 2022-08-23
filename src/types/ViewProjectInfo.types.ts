export interface ViewProjectColumn {
    id:
        | "name"
        | "code"
        | "channelOwner"
        | "activitiesLastWeek"
        | "activitiesNextWeek"
        | "accomplishments"
        | "status"
        | "completionDate"
        | "bandwidthAvailable";
    label: string;
    minWidth?: number;
    align?: "right";
    format?: (value: number) => string;
}

export interface ViewProjectData {
    name: string;
    code: string;
    channelOwner: string;
    activitiesLastWeek: string;
    activitiesNextWeek: string;
    accomplishments: string;
    status: string;
    completionDate: string;
    bandwidthAvailable: string;
}
