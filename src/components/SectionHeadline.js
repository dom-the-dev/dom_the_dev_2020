import React from "react"
import PropTypes from "prop-types"

const SectionHeadline = props => {
    return (
        <div className={"dom-sectionHeadline"}>
            <div className="dom-sectionHeadline__wrapper">
                <h3 className={"dom-sectionHeadline__title"}>{props.title}</h3> <br className={"only-mobile"}/>  
                <span className={"dom-sectionHeadline__subline"}>
                    {props.subline}
                </span>
            </div>
        </div>
    )
}

SectionHeadline.propTypes = {
    title: PropTypes.string.isRequired,
    subline: PropTypes.string,
}

export default SectionHeadline
