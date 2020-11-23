import React from "react"
import Section from "../Section"
import dom from "../../images/domski.jpg"

const AboutDom = props => {
    return (
        <Section
            id="about"
            title="about"
            subline="Me, Mself and I"
            showHeadline={true}
            marginBottom={150}
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-7">
                                    <h4 className={"dom-about__headline"}>
                                        Dom the dev
                                    </h4>
                                    <p className={"dom-about__text"}>
                                        My name is Domink Amrugiewicz. I am born
                                        and raised in a small town in southern
                                        Germany.
                                    </p>
                                    <p className={"dom-about__text"}>
                                        After six beautiful years in Germanys
                                        capitol city Berlin, where i passed my
                                        web developer vocational training and
                                        started to work for{" "}
                                        <a
                                            href="https://www.sirup.com"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            SIRUP
                                        </a>{" "}
                                        agency i moved back to my hometown.
                                    </p>
                                    <p className={"dom-about__text"}>
                                        Today i am still working as a web
                                        developer in full time. When i find some
                                        time, i like to work on open source
                                        projects and always try to learn more
                                        about all kinds of JavaScript.
                                    </p>
                                </div>

                                <div className="col-12 col-md-5">
                                    <div className="dom-about__imageWrapper">
                                        <img
                                            className={"dom-about__avatar"}
                                            src={dom}
                                            alt=""
                                        />
                                        <div className="overlay" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default AboutDom
