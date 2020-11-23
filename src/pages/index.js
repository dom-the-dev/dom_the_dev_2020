import React from "react"
import ScrollAnimation from 'react-animate-on-scroll';

import Layout from "../components/Layout"
import Head from "../components/head"

import Intro from "../components/sections/Intro"
import AboutDom from "../components/sections/AboutDom"
import Skills from "../components/sections/Skills"
import OpenSource from "../components/sections/OpenSource"
import Projects from "../components/sections/Projects"
import Contact from "../components/sections/Contact"

import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Head page={"Home"} />

      <ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={300}>
        <Intro />
      </ScrollAnimation>
      <ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={300}>
        <AboutDom />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true} offset={300}>
        <Skills />
      </ScrollAnimation>
      <OpenSource openSource={data.allMarkdownRemark.edges} />
      <Projects />
      <ScrollAnimation animateIn='fadeIn' animateOnce={true} offset={300}>
        <Contact />
      </ScrollAnimation>
    </Layout >
  )
}

export default IndexPage

export const query = graphql`
query {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC},limit: 4, filter: {fileAbsolutePath: {regex: "/(open-source)/"  }}) {
    edges {
      node {
        id
        frontmatter {
          title
          topic
          tags
          github
          demo
          codepen
          date
          abstract
        }
      }
    }
  }
}
`
