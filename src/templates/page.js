import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return <Layout>
    <SEO title={`${frontmatter.title}`}/>
    <br/>
    <h1>{frontmatter.title}</h1>
    <div
      css={{marginTop: "50px"}}
      className="blog-post-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </Layout>
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      tableOfContents(
        absolute: false 
        pathToSlugField: "frontmatter.path"
        maxDepth: 3
      )
      frontmatter {
        path
        title
      }
      headings {
        value
        depth
      }
    }
  }
`