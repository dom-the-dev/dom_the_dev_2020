import React from "react"
import { Link } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Navigation = ({ showNav, onIndex }) => {
    return (
        <ul className={`dom-navigation ${showNav ? 'dom-navigation--show' : ''}`}>
            <li>
                {onIndex ? <AnchorLink
                    className={"dom-navigation__link"}
                    href="#dom-about"
                >
                    About
                </AnchorLink>
                    : <Link className={"dom-navigation__link"} to={"/#dom-about"}>About</Link>
                }
            </li>
            <li>
                {onIndex ? <AnchorLink
                    className={"dom-navigation__link"}
                    href="#dom-skills"
                >
                    Skills
                </AnchorLink>
                    : <Link className={"dom-navigation__link"} to={"/#skills"}>Skills</Link>
                }
            </li>
            <li>
                {onIndex ? <AnchorLink
                    className={"dom-navigation__link"}
                    href="#dom-openSource"
                >
                    Open Source
                </AnchorLink>
                    : <Link className={"dom-navigation__link"} to={"/#dom-openSource"}>Open Source</Link>
                }
            </li>
            <li>
                {onIndex ? <AnchorLink
                    className={"dom-navigation__link"}
                    href="#dom-projects"
                >
                    Projects
                </AnchorLink>
                    : <Link className={"dom-navigation__link"} to={"/#dom-projects"}>Projects</Link>
                }
            </li>
            <li>
                {onIndex ? <AnchorLink
                    className={"dom-navigation__link"}
                    href="#dom-contact"
                >
                    Contact
                </AnchorLink>
                    : <Link className={"dom-navigation__link"} to={"/#dom-contact"}>Contact</Link>
                }
            </li>
        </ul>
    )
}


export default Navigation
