import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCodepen, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import Card from "./Card"
import ScrollAnimation from 'react-animate-on-scroll';

const OpenSourcePreview = ({ delay, project }) => {
    return (
        <div className={"col-12 col-sm-6 mb-4"}>
            <ScrollAnimation delay={delay} animateIn='fadeIn' duration={0.5}>
                <Card>
                    <div className="dom-openSourcePreview">
                        <div className="dom-openSourcePreview__contentWrapper">
                            {project.frontmatter.date && (
                                <p className="dom-openSourcePreview__date">
                                    {project.frontmatter.date}
                                </p>
                            )}

                            {project.frontmatter.title && (
                                <h5 className="dom-openSourcePreview__title">
                                    {project.frontmatter.title}
                                </h5>
                            )}

                            {project.frontmatter.abstract && (
                                <p className="dom-openSourcePreview__abstract">
                                    {project.frontmatter.abstract}
                                </p>
                            )}

                            {project.frontmatter.tags && (
                                <div
                                    className={"dom-openSourcePreview__tagWrapper"}
                                >
                                    {renderTags(project.frontmatter.tags)}
                                </div>
                            )}

                            {project.frontmatter.demo && (
                                <a
                                    href={project.frontmatter.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="dom-openSourcePreview__abstract"
                                >
                                    Demo
                                </a>
                            )}
                        </div>

                        <div className="dom-openSourcePreview__linkWrapper">
                            {project.frontmatter.fields &&
                                project.frontmatter.fields.slug(
                                    <a
                                        className={"dom-openSourcePreview__link"}
                                        href={"/open-source/" + project.fields.slug}
                                    >
                                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                                    </a>
                                )}

                            {project.frontmatter.github && (
                                <a
                                    className={"dom-openSourcePreview__link"}
                                    href={project.frontmatter.github}
                                >
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            )}

                            {project.frontmatter.codepen && (
                                <a
                                    className={"dom-openSourcePreview__link"}
                                    href={project.frontmatter.codepen}
                                >
                                    <FontAwesomeIcon icon={faCodepen} />
                                </a>
                            )}
                        </div>
                    </div>
                </Card>
            </ScrollAnimation>
        </div>
    )
}

const renderTags = tags => {
    let tagArray = tags.split(",")
    return tagArray.map((tag, index) => {
        return (
            <span className={"dom-openSourcePreview__tag"} key={tag + index}>
                {tag}
                {index + 1 < tagArray.length ? " /" : ""}
            </span>
        )
    })
}

OpenSourcePreview.propTypes = {
    project: PropTypes.any.isRequired,
}

export default OpenSourcePreview
