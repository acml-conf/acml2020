import React from "react"

import { graphql } from "gatsby"
import { Link } from "gatsby"
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';

import { DESKTOP_MIN_WIDTH, media } from "../style"
import Layout from "../components/layout"
import SEO from "../components/seo"

import dates from "../content/dates"
import DateSection from "../components/datesection"
import { replacePathPrefixHTML } from "../utils";


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  pageContext
}) {

  const { sectionMenu, sectionName } = pageContext
  const { mdx } = data // data.markdownRemark holds your post data
  const { frontmatter, body} = mdx

  return <Layout>
  <SEO title={sectionName}/>
  <br/>
  <div css={{position: `relative`}}>
    <div css={{
      [media(DESKTOP_MIN_WIDTH)]: {
        float: `left`,
        maxWidth: `200px`,
        marginRight: `50px`,
        left: 0,
        position: `absolute`
      }
    }}>
      <div>
        <b css={{textTransform: `capitalize`, textDecoration: frontmatter.path === `/${sectionName}` ? `underline`: `none`}}>
          <Link to={`/${sectionName}`} css={{textDecoration: `none`}}>{sectionName}</Link>
        </b>
        <ul css={{margin: 0, padding: 0}}>
          {
            sectionMenu.map(s => {
              return <li css={{listStyle: `none`, margin: 0, textDecoration: frontmatter.path === s.slug ? `underline`: `none`}}>
                <Link to={s.slug} css={{textDecoration: `none`}}>{s.name}</Link>
              </li>
            })
          }
        </ul>
      </div>
    </div>
    <div css={{
        [media(DESKTOP_MIN_WIDTH)]: {
          marginLeft: `250px`
        }
      }}>
      {frontmatter.requireDate}
      <h1>{frontmatter.title}</h1>
      { frontmatter.requireDate && 
        <div css={{}}>
          <b>Important Dates</b>
          <DateSection events={dates.filter(d => d.slug === frontmatter.path)[0].events}></DateSection>
        </div>
      }
      <MDXRenderer>{body}</MDXRenderer>
    </div>
  </div>
</Layout>
}

export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
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