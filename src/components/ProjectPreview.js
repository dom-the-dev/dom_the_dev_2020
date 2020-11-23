import React from "react"
import PropTypes from "prop-types"
import Card from "./Card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

const projectDesc = (title, text, url, isLeft) => {
    return (
        <>
            <div className="col-12 col-md-4 dom-projects__project">
                <div className="dom-projects__content">
                    <h4 className={"dom-projects__title"}>{title}</h4>
                    <p className="dom-projects__info">{text}</p>
                </div>
            </div>
            <a
                href={url}
                className={`dom-projects__openLink ${
                    isLeft ? "dom-projects__openLink--left" : ""
                }`}
            >
                <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
        </>
    )
}

const ProjectPreview = props => {
    return (
        <div className="col-12" style={{ marginTop: !props.isFirst && 100 }}>
            <Card>
                <div className="container dom-projects__wrapper">
                    <div className="row">
                        {props.imageLeft &&
                            projectDesc(
                                props.title,
                                props.text,
                                props.url,
                                true
                            )}

                        <div className="col-12 col-md-8 dom-projects__imageWrapper">
                            <div className="dom-projects__image">
                                <img src={props.image} alt="" />
                                <div className="img-overlay" />
                                {props.tags && (
                                    <p className={"dom-projects__tags"}>
                                        {props.tags}
                                    </p>
                                )}
                            </div>
                        </div>

                        {!props.imageLeft &&
                            projectDesc(
                                props.title,
                                props.text,
                                props.url,
                                false
                            )}
                    </div>
                </div>
            </Card>
        </div>
    )
}

ProjectPreview.propTypes = {
    image: PropTypes.string.isRequired,
    imageLeft: PropTypes.bool,
    isFirst: PropTypes.bool,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    tags: PropTypes.string,
}

export default ProjectPreview
