import {Contact} from "../types/types";

export type WebsiteAction = AddContact;

export interface AddContact {
    type: "ADD_MESSAGE",
    contact: Contact;
}