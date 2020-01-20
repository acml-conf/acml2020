/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { config } from "@fortawesome/fontawesome-svg-core";

import { DESKTOP_MIN_WIDTH, media } from "../style"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import Header from "./header"
import "./layout.css"
import BeautifulLink from "./link"

config.autoAddCss = false;

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
        <div css={{maxWidth: 1024, margin: `0 auto`, padding: "0 10px"}}>
          <div css={{
              fontSize: `1em`, marginBottom: `10px`,
              [media(DESKTOP_MIN_WIDTH)]: {
                float: `right`,
                clear: `both`,
              }
            }}>
            <b>Follow us:</b> <BeautifulLink to="https://github.com/heytitle/acml2020" color="white"><FontAwesomeIcon icon={faGithub}/></BeautifulLink> 
          </div>
        © {new Date().getFullYear()} ACML, Built with
        {` `}
        <BeautifulLink color="white" to="https://www.gatsbyjs.org">Gatsby</BeautifulLink>.
        <br/>
        Layout and design inspired by <BeautifulLink color="white" to="https://acl2020.org">ACL2020's webiste</BeautifulLink>.
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
