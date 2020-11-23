import React from 'react'
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/head"

function OpenSource(props) {
    return (
        <Layout>
            <Head page={"Open Source"} />
        </Layout>
    )
}

export default OpenSource


export const query = graphql`
query {
  allMarkdownRemark(limit: 4) {
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


