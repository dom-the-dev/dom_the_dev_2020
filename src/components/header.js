import React, { useState } from "react"
import logo from "../images/dom_the_dev_logo.png"
import Navigation from "./Navigation"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Header = () => {
    const [showNav, setShowNav] = useState(false);
    return (
        <header className={"dom-header"}>
            <div className="dom-header__wrapper">
                <AnchorLink href="#start">
                    <img src={logo} alt="dom-the-dev-logo" width={30} />
                </AnchorLink>

                <button className={`dom-header__navigationToggle ${showNav ? 'dom-header__navigationToggle--active' : ''}`} onClick={() => setShowNav(!showNav)}>
                    <div className={"burger burger-1"}></div>
                    <div className={"burger burger-2"}></div>
                    <div className={"burger burger-3"}></div>
                </button>

                <Navigation showNav={showNav} />
            </div>
        </header>
    )
}

export default Header
