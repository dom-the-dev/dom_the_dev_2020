import React from "react"
import ProjectPreview from "../ProjectPreview"
import Section from "../Section"
import savethemix from "../../images/savethemix.png"
import ScrollAnimation from 'react-animate-on-scroll';

const Projects = props => {
    return (
        <Section
            id="projects"
            showHeadline={true}
            title={"Projects"}
            subline={"look up some of my stuff"}
        >
            <ScrollAnimation delay={100} animateIn='fadeIn slideInUp' animateOut={'0'} duration={0.5} animateOnce={true}>
                <ProjectPreview
                    isFirst={true}
                    imageLeft={true}
                    image={savethemix}
                    title={"SAVETHEMIX"}
                    url={"https://www.savethemix.de"}
                    tags={"Create-React-App / Redux"}
                    text={"Small web app to save playlists you follow as your own. This will help you to safe the playlists you love like Daily Mixes or Discover weekly by Spotify. This app is built with REACT and uses the Spotify API."}
                />
            </ScrollAnimation>
            {/* <ProjectPreview
            isFirst={false}
            imageLeft={false}
            image={savethemix}
            title={"SAVETHEMIX"}
            url={"https://www.savethemix.de"}
            text={"A small web app to save playlists you follow as your own. This will help you to safe the playlists you love like Daily Mixes or Discover weekly by Spotify. This app is built with REACT and uses the Spotify API."}
        /> */}

        </Section>
    )
}

export default Projects
