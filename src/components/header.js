import BeautifulLink from "../components/link"
import PropTypes from "prop-types"
import React from "react"

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
          <b>{siteTitle} 🇹🇭</b>
        </BeautifulLink>
        <ul css={{listStyle: `none`, display: `inline`, float: `right`}}>
          <Location>
            {({ location }) => {
              return menus.map(m => {
                return <li css={{display: `inline`, margin: `5px`}}>
                  <HeaderLink location={location} to={m.url}>
                    <BeautifulLink to={m.url}>{m.name}</BeautifulLink>
                  </HeaderLink>
                </li>
              })
            }}

          </Location>
          {
          }
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
