import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import NewsBoard from "../components/newsboard"

const IndexPage = () => {

  return <Layout>
    <SEO title="News"/>
    <div style={{margin: `30px 0`}}>
      <NewsBoard/>
    </div>
  </Layout>
}

export default IndexPage
