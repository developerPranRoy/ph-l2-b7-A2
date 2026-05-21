export interface TCreateIssue {
    title: string;
    description: string;
    type: "bug" | "feature_request";
    reporter_id: number;
}

export interface TUpdateIssue {
    title?: string;
    description?: string;
    type?: "bug" | "feature_request";
    status?: "open" | "in_progress" | "resolved";
}