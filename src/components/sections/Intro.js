import React from "react"
import SocialMediaBanner from "../SocialMediaBanner"
import Section from "../Section"
// import { Link } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Intro = props => {
  return (
    <Section
      id="intro"
      showHeadline={false}
      center={false}
      inContainer={true}
    >
      <div className="col-12">
        <div className="dom-intro__headlineWrapper">
                    <span className={"dom-intro__headlinePrefix"}>
                        Hi, my name is
                    </span>
          <h1 className={"dom-intro__headline"}>
            Dominik
            <br />
            Amrugiewicz
          </h1>
          <h2 className={"dom-intro__subline"}>
            but you can call me Dom.
          </h2>
        </div>

        <div className={"dom-intro__textWrapper"}>
          <div className="col-12 col-md-8">
            <p className={"dom-intro__text"}>
              I’m a web developer based in Germany and this is my
              portfolio. Follow me on my way of web development
              and feel free to <AnchorLink href="#dom-contact">contact</AnchorLink> me.
            </p>
            <SocialMediaBanner />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Intro
