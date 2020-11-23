import React from "react"
import Section from "../Section"
import ScrollAnimation from 'react-animate-on-scroll';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faReact,
    faJsSquare,
    faSass,
    faHtml5,
    faCss3,
    faNodeJs,
} from "@fortawesome/free-brands-svg-icons"
import SkillIcon from "../SkillIcon"

const Skills = props => {
    return (
        <Section
            id="skills"
            title={"Skills"}
            subline={"Some of the technologies i love to work with"}
            showHeadline={true}
        >
            <div className="col-12 col-md-10">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-md-4 mt-3 mb-3">
                            <ScrollAnimation delay={100} animateIn='fadeIn' animateOut={'0'} duration={0.5}>
                                <SkillIcon>
                                    <FontAwesomeIcon
                                        icon={faJsSquare}
                                        size={"4x"}
                                    />
                                </SkillIcon>
                                <h4 className="dom-skills__title">JavaScript ♥</h4>
                            </ScrollAnimation>
                        </div>
                        <div className="col-6 col-md-4 mt-3 mb-3">
                            <ScrollAnimation delay={200} animateIn='zoomIn' duration={0.5}>
                                <SkillIcon>
                                    <FontAwesomeIcon icon={faCss3} size={"4x"} />
                                </SkillIcon>
                                <h4 className="dom-skills__title">CSS3</h4>
                            </ScrollAnimation>
                        </div>

                        <div className="col-6 col-md-4 mt-3 mb-3">
                            <ScrollAnimation delay={300} animateIn='zoomIn' duration={0.5}>
                                <SkillIcon>
                                    <FontAwesomeIcon icon={faHtml5} size={"4x"} />
                                </SkillIcon>
                                <h4 className="dom-skills__title">HTML</h4>
                            </ScrollAnimation>
                        </div>

                        <div className="col-6 col-md-4 mt-3 mb-3">
                            <ScrollAnimation delay={400} animateIn='zoomIn' duration={0.5}>
                                <SkillIcon>
                                    <FontAwesomeIcon icon={faReact} size={"4x"} />
                                </SkillIcon>
                                <h4 className="dom-skills__title">React</h4>
                            </ScrollAnimation>
                        </div>

                        <div className="col-6 col-md-4 mt-3 mb-3">
                            <ScrollAnimation delay={500} animateIn='zoomIn' duration={0.5}>
                                <SkillIcon>
                                    <FontAwesomeIcon icon={faNodeJs} size={"4x"} />
                                </SkillIcon>
                                <h4 className="dom-skills__title">Node.JS</h4>
                            </ScrollAnimation>
                        </div>

                        <div className="col-6 col-md-4 mt-3 mb-3">
                            <ScrollAnimation delay={600} animateIn='zoomIn' duration={0.5}>
                                <SkillIcon>
                                    <FontAwesomeIcon icon={faSass} size={"4x"} />
                                </SkillIcon>
                                <h4 className="dom-skills__title">Sass</h4>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Skills
