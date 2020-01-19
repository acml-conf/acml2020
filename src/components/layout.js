/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import BeautifulLink from "./link"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div css={{fontFamily: `sans-serif`}}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        css={{
          margin: `0 auto`,
          maxWidth: 1024,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
      <footer css={{background: `black`, color: `white`, padding: `2em 0`}}>
        <div css={{maxWidth: 1024, margin: `0 auto`}}>
        © {new Date().getFullYear()} ACML, Built with
        {` `}
        <BeautifulLink color="white" to="https://www.gatsbyjs.org">Gatsby</BeautifulLink>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
