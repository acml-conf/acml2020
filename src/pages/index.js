import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CoverImg from "../components/coverimg"

import DateSection from "../components/datesection"
import DateWarning from "../components/datewarning"

import dates from "../content/dates"

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

  return <Layout>
    <SEO title="Home" />
    <CoverImg/>
    <br/>

    <h2>Welcome!</h2>
    <div dangerouslySetInnerHTML={{__html: welcomeMSG}}/>

    <h2 css={{marginBottom: `5px`}}>Important Dates</h2>

    <DateWarning/>
    <br/>
    {
      dates.map( (s, i) => <DateSection name={s.section} events={s.events} showDeadlineWarning={false}/>)
    }
  </Layout>
}

export default IndexPage
