import React from 'react';
import { useStaticQuery, Link, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(
    graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
  )

  return (
    <footer className={"dom-footer"}>
      <a href="https://github.com/dom-the-dev/dom_the_dev_2020">{data.site.siteMetadata.title} © {new Date().getFullYear()}</a> <br />
       <Link to={"/legal-notice"}>Impressum</Link>
    </footer>
  )
};

export default Footer;
