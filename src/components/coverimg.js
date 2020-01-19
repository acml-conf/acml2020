import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// https://unsplash.com/photos/VtBvATAwMUA
const credit = `Worachat Sodsri on Unsplash`
const img = `https://images.unsplash.com/photo-1578167635857-3c2713865774?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80`
const CoverImg = () => {
    const { site } = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                description
              }
            }
          }
        `
      )

    return <div css={{
            width: `100%`,  height: `250px`,
            position: `relative`,
        }}>
        <h3 css={{
            padding: `10px`, zIndex: 6, textShadow: `-1px -1px 5px white`
            }}>{site.siteMetadata.description}</h3>
        <div css={{
            fontSize: `0.8em`,
            position: `absolute`, right: `5px`,
            bottom: `5px`, zIndex: 5, padding: `2px`}}>
        ©  {credit}
        </div>
        <div css={{
            content: ``,
            backgroundImage: `url(${img})`,
            backgroundSize: `cover`,
            backgroundPosition: `center 10%`,
            position: `absolute`,
            top: 0,
            lef: 0,
            width: `100%`,
            height: `100%`,
            zIndex: -1,
            opacity: 0.6,
            backgroundColor: "black",
        }}>
        </div>
    </div>
}

export default CoverImg