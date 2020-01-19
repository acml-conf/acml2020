import BeautifulLink from "../components/link"
import PropTypes from "prop-types"
import React from "react"

import { DESKTOP_MIN_WIDTH, media } from "../style"

import { Location } from '@reach/router'

const menus = [
  { name: `Program`, url: `/program`},
  { name: `Calls`, url: `/calls`},
  // { name: `Blog`, url: `/blog`},
  { name: `Participants`, url: `/participants`},
  { name: `Organization`, url: `/organization`},
]



const HeaderLink = ({children, to, location}) => {
  const path = location.pathname

  return <span css={{
    fontWeight: (path.match(to) && to !== "/") || (path === to) ? "bold" : "none"
  }}>{children}</span>
}


const Header = ({ siteTitle }) => (
  <header
    css={{
      borderBottom: `solid #ddd 1px`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1024,
        padding: `1rem 1.0875rem`,
        fontSize: `1.1em`,
      }}
    >
      <BeautifulLink
          to="/"
          css={{
            textDecoration: `none`,
          }}
        >
          <b>{siteTitle} <span role="img">🇹🇭</span></b>
        </BeautifulLink>
        <ul css={{
          listStyle: `none`, 
          display: `inline-block`,
          width: `100%`,
          padding: 0,
          margin: 0,
          fontSize: `0.9em`,
          textAlign: `center`,
          marginTop: `10px`,
          [media(DESKTOP_MIN_WIDTH)]: {
            width: `auto`,
            display: `inline`,
            marginTop: 0,
            float: `right`,
            fontSize: `1em`,
          }
        }}>
          <Location>
            {({ location }) => {
              return menus.map( (m, i) => {
                return <li css={{
                  margin: `5px`,
                  display: `inline`,
                  }}>
                  <HeaderLink location={location} to={m.url}>
                    <BeautifulLink to={m.url}>{m.name}</BeautifulLink>
                  </HeaderLink>
                </li>
              })
            }}
          </Location>
            <li css={{
              display: `inline`,
              [media(DESKTOP_MIN_WIDTH)]: {
                display: `none`, 
              }
            }}>
            </li>
        </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
