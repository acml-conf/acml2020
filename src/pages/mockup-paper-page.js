import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Utterances from "utterances-react"

const mockPaperData = [
  {
    title: `Paper 1`,
    authors: `Mr. Foo Bar, Mrs. ABC DEF`,
    presenationSlots: [
      `2020/11/19 3pm`,
      `2020/11/20 1am`,
    ]
  },
  {
    title: `Paper 2`,
    authors: `Mr. Goo Bar, Mrs. ABC DEF`,
    presenationSlots: [
      `2020/11/19 3pm`,
      `2020/11/20 1am`,
    ]
  },
  {
    title: `Paper 3`,
    authors: `Mr. Eoo Bar, Mrs. ABC DEF`,
    presenationSlots: [
      `2020/11/19 3pm`,
      `2020/11/20 1am`,
    ]
  },
]


const GreetingMSG = () => {
  return <div css={{marginBottom: `10px`}}>
    <h2>Welcome to ACML2020's Virtual Site 👋 (under construction)</h2>
  </div>
}


const IndexPage = () => {
  return <Layout>
    <SEO title="Page Paper 1 : ..."/>


    <div style={{marginTop: `5px`, textAlign: `right`}}>
      <span>[PDF]</span>
    </div>
    <h3 style={{marginTop: `10px`, marginBottom: `10px`}}>Paper Title (mock up paper/talk page)</h3>

    <div css={{width: `100%`, marginTop: `10px`}}>
      <iframe
        src="//videolectures.net/lawandethics2017_wilson_algorithmic_patrol/iframe/1/"
        style={{border: 0, width: `100%`, height: `425px`, marginBottom: `0px`}}
      />
    </div>


    <h4 style={{textDecoration: `none`, margin: 0}}>By Mr. A, Mr. B</h4>
    <p style={{marginTop: `10px`, padding: `10px`, backgroundColor: `#eee`, borderRadius: `5px`}}>
      <b>Abstract</b><br/>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    <Utterances
      repo="acml-conf/acml2020"
      issueTerm="url"
      label="web-comment"
      theme="github-light"
      crossorigin="anonymous"
      async={false}
      style={`
      & .utterances {
        max-width: 950px;
      }
    `}
    />

  </Layout>
}

export default IndexPage
