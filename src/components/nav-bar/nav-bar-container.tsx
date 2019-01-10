//import * as actions from '../../actions/actions';
import { WebsiteState, NavItem } from '../../types/types';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import {NavBar} from "./nav-bar";

export interface NavBarContainerProps {
    config: Array<NavItem>
}

// Returned object decides if re-render is necessary
export function mapStateToProps({ }: WebsiteState, { config }: NavBarContainerProps) {
    return config;
}

export function mapDispatchToProps(dispatch: ThunkDispatch<WebsiteState, void, Action>) {
    return {};
}

// Connect will take mapStateToProps amd mapDispatchToProps and return another function we can use to wrap our component
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);