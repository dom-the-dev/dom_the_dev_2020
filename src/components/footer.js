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
            <span>{data.site.siteMetadata.title} © {new Date().getFullYear()}</span> <Link to={"/legal-notice"}>Impressum</Link>
        </footer>
    )
};

export default Footer;
