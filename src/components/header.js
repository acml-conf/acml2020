import BeautifulLink from "../components/link"
import PropTypes from "prop-types"
import React, { useState } from "react"

import { DESKTOP_MIN_WIDTH, media } from "../style"

import { Location } from '@reach/router'

import { HamburgerButton } from 'react-hamburger-button';


const menus = [
  { name: `News`, url: `/news`},
  { name: `Program`, url: `/program/papers`},
]



const HeaderLink = ({children, to, location}) => {
  const path = location.pathname

  return <span css={{
    fontWeight: (path.match(to) && to !== "/") || (path === to) ? "bold" : "none"
  }}>{children}</span>
}


const Header = ({ siteTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return <header
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
          underLine={false}
        >
          <b>{siteTitle} <span role="img">🇹🇭</span></b>
          {` `}
        </BeautifulLink>
        {/* <Location>
            {({ location }) => {
              console.log(location)
              return <HeaderLink location={location} to="/virtual-site">
                <BeautifulLink to="/virtual-site" underLine={false}>Virtual Site</BeautifulLink>
              </HeaderLink>
            }}
        </Location> */}
        <ul css={{
          listStyle: `none`, 
          display: `inline-block`,
          padding: 0,
          margin: 0,
          fontSize: `0.9em`,
          textAlign: `center`,
          float: `right`,
          [media(DESKTOP_MIN_WIDTH)]: {
            width: `auto`,
            display: `inline`,
            marginTop: 0,
            fontSize: `1em`,
          }
        }}>
          <Location>
            {({ location }) => {
              return menus.map( (m, i) => {
                return <li
                  css={{
                    margin: `5px 10px`,
                    display: i === 0 ? `inline`: `none`,
                    [media(DESKTOP_MIN_WIDTH)]: {
                      display: `inline`
                    }
                  }}
                  key={m.url}
                  >
                  <HeaderLink location={location} to={m.url}>
                    <BeautifulLink to={m.url} underLine={false}>{m.name}</BeautifulLink>
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
              <span css={{marginLeft: `5px`, '& div': { display: `inline-block`}}}>
                <HamburgerButton
                    open={isMenuOpen}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    width={18}
                    height={15}
                    strokeWidth={2}
                    rotate={0}
                    color='black'
                    borderRadius={0}
                    animationDuration={0.5}
                />
              </span>
            </li>
        </ul>
    </div>
    { isMenuOpen &&
      <div css={{
          position: `absolute`,
          background: `#F7F7F7`,
          borderLeft: `1px solid #ddd`,
          right: 0,
          width: `60%`,
          height: `100%`,
          zIndex: 1000
        }}>
          <div css={{padding: `10px`}}>
            <ul>
              <Location>
                {({ location }) => {
                  return menus.map( (m, i) => {
                    return <li
                      css={{
                        margin: `5px`,
                        display: `block`,
                      }}
                      key={m.url}
                      >
                      <HeaderLink location={location} to={m.url}>
                        <BeautifulLink to={m.url}>{m.name}</BeautifulLink>
                      </HeaderLink>
                    </li>
                  })
                }}
              </Location>
            </ul>
          </div>
      </div>
    }
  </header>
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
