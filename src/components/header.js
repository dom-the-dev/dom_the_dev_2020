import React, { useState, useEffect } from "react"
import logo from "../images/dom_the_dev_logo.png"
import Navigation from "./Navigation"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Link } from "gatsby"

const Header = () => {

    let onIndex = true;
    if (typeof window !== `undefined`) {
        onIndex = window.location.pathname === '/';
    }

    const [showNav, setShowNav] = useState(false);
    const [scrollPos, setScrollPos] = useState(0);
    const [scrolled, setScrolled] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    })

    const handleScroll = () => {
        if (scrollPos <= window.pageYOffset) {
            setScrolled(false)
        } else if (scrollPos > window.pageYOffset) {
            setScrolled(true)
        }
        setScrollPos(window.pageYOffset)
    }

    return (
        <header className={`dom-header ${scrolled || showNav ? 'dom-header--scrolled' : ''}`}>
            <div className="dom-header__wrapper">
                {onIndex ? <AnchorLink href="#start">
                    <img src={logo} alt="dom-the-dev-logo" width={30} />
                </AnchorLink>
                    : <Link to={"/"}>
                        <img src={logo} alt="dom-the-dev-logo" width={30} />
                    </Link>
                }

                <button className={`dom-header__navigationToggle ${showNav ? 'dom-header__navigationToggle--active' : ''}`} onClick={() => setShowNav(!showNav)}>
                    <div className={"burger burger-1"}></div>
                    <div className={"burger burger-2"}></div>
                    <div className={"burger burger-3"}></div>
                </button>

                <Navigation showNav={showNav} onIndex={onIndex} />
            </div>
        </header>
    )
}

export default Header
