import {WebsiteState} from "../types/types";
import {WebsiteAction} from "./actions";


export function app (state: WebsiteState, action: WebsiteAction): WebsiteState {
    switch (action.type) {
        case "ADD_MESSAGE":
            return {...state, contact: action.contact};
        default:
            return {
                contact: {
                    name: "",
                    email: "",
                    message: ""
                },
                portfolio: {
                    projects: []
                }
            };
    }
};
