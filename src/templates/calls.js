import React from "react"

import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import dates from "../content/dates"
import DateSection from "../components/datesection"

const sections = [
  {
    name: `Information`,
    slug: `/calls`
  },
  {
    name: `Conference Track`,
    slug: `/calls/conference-track`
  },
  {
    name: `Journal Track`,
    slug: `/calls/journal-track`
  },
  {
    name: `Submissions`,
    slug: `/calls/submissions`
  },
  // {
  //   name: `Tutorials`,
  //   slug: `tutorials`
  // }
]

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

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
              return <li css={{listStyle: `none`, margin: 0, textDecoration: frontmatter.path === s.slug ? `underline`: `none`}}>
                <Link to={s.slug}>{s.name}</Link>
              </li>
            })
          }
        </ul>
      </div>
    </div>
    <div css={{marginLeft: `250px`}}>
      {frontmatter.requireDate}
      <h1>{frontmatter.title}</h1>
      { frontmatter.requireDate && 
        <div css={{}}>
          <b>Important Dates</b>
          <DateSection events={dates.filter(d => d.slug === frontmatter.path)[0].events}></DateSection>
        </div>
      }
      <div dangerouslySetInnerHTML={{__html: html}}/>
    </div>
  </div>
</Layout>
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        requireDate
      }
      headings {
        value
        depth
      }
    }
  }
`