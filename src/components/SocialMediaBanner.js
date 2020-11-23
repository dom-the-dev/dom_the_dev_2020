import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faInstagram,
    faGithub,
    faCodepen,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons"

const SocialMediaBanner = props => {
    return (
        <ul className={"dom-social-media-banner"}>
            <li className={"dom-social-media-banner__link"}>
                <a href="https://twitter.com/dom_the_dev"
                    target="_blank"
                    rel="noreferrer">
                    <span className="sr-only">Twitter</span>
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </li>
            <li
                className={"dom-social-media-banner__link"}
            >
                <a href="https://github.com/dom-the-dev"
                    target="_blank"
                    rel="noreferrer">
                    <span className="sr-only">GitHub</span>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </li>
            <li className={"dom-social-media-banner__link"}>
                <a
                    href="https://codepen.io/dom-the-dev/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span className="sr-only">CodePen</span>
                    <FontAwesomeIcon icon={faCodepen} />
                </a>
            </li>
            <li className={"dom-social-media-banner__link"}>
                <a
                    href="https://www.instagram.com/dom_der_dude/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span className="sr-only">Instagram</span>
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </li>
            {/* <li>
                <a href="https://www.youtube.com/channel/UCAa2t4QIxlaUuPO2FKq5TDw">YouTube</a>
                    <span className="sr-only">Youtube</span>
                    <FontAwesomeIcon icon={faYoutube} />
            </li> */}
        </ul>
    )
}

export default SocialMediaBanner
