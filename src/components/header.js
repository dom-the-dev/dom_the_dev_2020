import React from "react"
import logo from "../images/dom_the_dev_logo.png"
import Navigation from "./Navigation"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Header = () => {
    return (
        <header className={"dom-header"}>
            <div className="dom-header__wrapper">
                <AnchorLink href="#start">
                    <img src={logo} alt="dom-the-dev-logo" width={30} />
                </AnchorLink>

                <Navigation />
            </div>
        </header>
    )
}

export default Header
