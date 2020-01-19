import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import dates from "../content/dates"
import DateSection from "../components/datesection"

const sections = [
  {
    name: `Information`,
    slug: `information`
  },
  {
    name: `Conference Track`,
    slug: `conference-track`
  },
  {
    name: `Journal Track`,
    slug: `journal-track`
  },
  {
    name: `Submissions`,
    slug: `submissions`
  },
  // {
  //   name: `Tutorials`,
  //   slug: `tutorials`
  // }
]

const CallPage = (location) => {

  const slug = location[`*`] || sections[0].slug

  const key = `call-${slug}`

  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
      allMarkdownRemark(filter: {frontmatter: {content_id: {glob: "call-*"}}}) {
        edges {
          node {
            html
            tableOfContents(
              absolute: false 
              pathToSlugField: "frontmatter.path"
              maxDepth: 3
            )
            frontmatter {
              content_id
              title
            }
          }
        }
      }
    }
    `
  )

  const node = allMarkdownRemark
    .edges.filter(e => e.node.frontmatter.content_id == key)[0].node
  const title = node.frontmatter.title
  const content = node.html
  const toc = node.tableOfContents

  const events = dates.filter(d => d.key === key)[0].events

  return <Layout>
    <SEO title="Calls"/>
    <br/>
    <div css={{position: `relative`}}>
      <div css={{
        float: `left`,
        maxWidth: `200px`,
        marginRight: `50px`,
        left: 0,
        position: `absolute`
      }}>
        <div>
          <b>Sections</b>
          <ul css={{margin: 0}}>
            {
              sections.map(s => {
                return <li css={{listStyle: `none`, margin: 0, textDecoration: slug === s.slug ? `underline`: `none`}}>
                  <Link to={`/calls/${s.slug}`}>{s.name}</Link>
                </li>
              })
            }
          </ul>
        </div>
      </div>
      <div css={{marginLeft: `250px`}}>
        <h1>{title}</h1>
        { events.length > 0 && 
          <div css={{}}>
            <b>Important Dates</b>
            <DateSection events={events}></DateSection>
          </div>
        }
        <div dangerouslySetInnerHTML={{__html: content}}/>
      </div>
    </div>
  </Layout>
}

export default CallPage
