export interface TCreateIssue {
    title: string;
    description: string;
    type: "bug" | "feature_request";
    status: IssueStatus;
    reporter_id: number;
}

export enum IssueStatus {
    OPEN = "open",
    IN_PROGRESS = "in_progress",
    RESOLVED = "resolved",
}

export interface TUpdateIssue {
    title?: string;
    description?: string;
    type?: "bug" | "feature_request";
    status?: "open" | "in_progress" | "resolved";
}


export interface IUser {
    name: string;
    email: string;
    password: string;
    role?: UserRole;
}


export enum UserRole {
    MAINTAINER = "maintainer",
    CONTRIBUTOR = "contributor",
}

export interface IAuth {
    email: string;
    password: string;
}
