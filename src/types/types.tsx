export interface WebsiteState {
    readonly contact: Contact;
    readonly portfolio: Portfolio;
}

export interface Contact {
    name: string;
    email: string;
    message: string;
}

export interface Portfolio {
    projects: Array<object>;
}

export interface NavItem {
    id: string;
    text?: string;
    icon?: string;
}