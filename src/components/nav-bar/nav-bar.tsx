import * as React from 'react';
import {NavItem} from "../../types/types";

export interface NavBarProps {
    config: Array<NavItem>;
}

export const NavBar: React.FunctionComponent<NavBarProps> = (props) => {
    const {config} = props;

    return (
        <div className="w3-top">
            <div className={"w3-bar" + (document.documentElement.scrollTop > 100 ?
                " w3-card w3-animate-top w3-white" : "")} id="myNavbar">
                <a className="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right"
                   href="javascript:void(0);" title="Toggle Navigation Menu">
                    <i className="fa fa-bars"/>
                </a>
                {/*<a href="#home" className="w3-bar-item w3-button">HOME</a>
                <a href="#about" className="w3-bar-item w3-button w3-hide-small"><i
                    className="fa fa-user"/> ABOUT</a>
                <a href="#portfolio" className="w3-bar-item w3-button w3-hide-small"><i
                    className="fa fa-th"/> PORTFOLIO</a>
                <a href="#contact" className="w3-bar-item w3-button w3-hide-small"><i
                    className="fa fa-envelope"/> CONTACT</a>
                <a href="#" className="w3-bar-item w3-button w3-hide-small w3-right w3-hover-red">
                    <i className="fa fa-search"/>
                </a>*/}
                {config.map((item, idx) => (
                    <a key={item.id} href={"#" + item.id} className={"w3-bar-item w3-button w3-hide-small"}>
                        <i className={"fa " + item.icon}/> {item.text}
                    </a>
                ))}
            </div>

            {/* Navbar on small screens */}
            <div id="navDemo" className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
                <a href="#about" className="w3-bar-item w3-button" >ABOUT</a>
                <a href="#portfolio" className="w3-bar-item w3-button">PORTFOLIO</a>
                <a href="#contact" className="w3-bar-item w3-button" >CONTACT</a>
                <a href="#" className="w3-bar-item w3-button">SEARCH</a>
            </div>
        </div>
    );
};