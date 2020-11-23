import React from "react"
import Section from "../Section"
import OpenSourcePreview from "../OpenSourcePreview"

const OpenSource = props => {
    return (
        <Section
            id="openSource"
            title={"Open Source"}
            showHeadline={true}
            subline={"Because Sharing is Caring"}
        >
            {props.openSource
                ? renderProjects(props.openSource)
                : "no projects available"}
        </Section>
    )
}

const renderProjects = projects => {
    return projects.map((project, index) => (
        <OpenSourcePreview key={index} project={project.node} />
    ))
}

export default OpenSource
