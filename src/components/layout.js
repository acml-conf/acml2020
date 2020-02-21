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

import packageData from "../../package.json"

config.autoAddCss = false;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      currentBuildDate {
        currentDate
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
            <b>Follow us:</b> <a css={{color: `white`}} href="https://github.com/heytitle/acml2020"><FontAwesomeIcon icon={faGithub}/></a> 
            <div css={{fontSize: "0.8em", color:"gray"}}>
              Last updated: {data.currentBuildDate.currentDate} (v{packageData.version})
            </div>
          </div>
        © {new Date().getFullYear()} ACML, Built with
        {` `}
        <a css={{color: `white`}} href="https://www.gatsbyjs.org">Gatsby</a>.
        <br/>
        Layout and design inspired by <a css={{color: `white`}} href="https://acl2020.org">ACL2020's website</a>.
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout