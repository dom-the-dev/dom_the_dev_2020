import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Navigation = ({ showNav }) => {
    return (
        <ul className={`dom-navigation ${showNav ? 'dom-navigation--show' : ''}`}>
            <li>
                <AnchorLink
                    className={"dom-navigation__link"}
                    href="#dom-about"
                >
                    About
                </AnchorLink>
            </li>
            <li>
                <AnchorLink
                    className={"dom-navigation__link"}
                    href="#dom-skills"
                >
                    Skills
                </AnchorLink>
            </li>
            <li>
                <AnchorLink
                    className={"dom-navigation__link"}
                    href="#dom-openSource"
                >
                    Open Source
                </AnchorLink>
            </li>
            <li>
                <AnchorLink
                    className={"dom-navigation__link"}
                    href="#dom-projects"
                >
                    Projects
                </AnchorLink>
            </li>
            <li>
                <AnchorLink
                    className={"dom-navigation__link"}
                    href="#dom-contact"
                >
                    Contact
                </AnchorLink>
            </li>
        </ul>
    )
}

export default Navigation
