import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import CoverImg from "../components/coverimg"

import dates from "../content/dates"

const DateSection = ({name, events}) => {
  return <div>
    <h3>{name}</h3>
    <ul css={{marginLeft: 0}}>
      {
        events.map(e => {
          return <li css={{listStyle: `none`, margin: 0}}>{e.date}: <b>{e.event}</b></li>
        })
      }
    </ul>
  </div>
}

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
      allMarkdownRemark(filter: {frontmatter: {content_id: {eq: "welcome"}}}) {
        edges {
          node {
            html
            frontmatter {
              content_id
            }
          }
        }
      }
    }
    `
  )

  const welcomeMSG = allMarkdownRemark.edges[0].node.html
  console.log(dates)

  return <Layout>
    <SEO title="Home" />
    <CoverImg/>
    <br/>

    <h2>Welcome!</h2>
    <div dangerouslySetInnerHTML={{__html: welcomeMSG}}/>

    <h2>Important Dates</h2>
    {
      dates.map(s => <DateSection name={s.section} events={s.events}/>)
    }
  </Layout>
}

export default IndexPage
