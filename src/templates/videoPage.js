import React from "react"

import ReactMarkdown from 'react-markdown'
import {InlineMath, BlockMath} from 'react-katex'
import RemarkMathPlugin from 'remark-math'
import 'katex/dist/katex.min.css'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Utterances from "utterances-react"

const linkMappings = [
  { name: `pmlrURL`, desc: `Link to PMLR`},
  { name: `jmlrURL`, desc: `Link to JMLR`},
  { name: `pdfURL`, desc: `Download PDF`},
]

const renderers = {
  inlineMath: ({value}) => <InlineMath math={value}/>,
  math: ({value}) => <BlockMath math={value}/>
}

const hideChatSection = false

export default function Template({data, pageContext}){
  return <Layout>
    <SEO title={`${pageContext.title} by ${pageContext.by}`}/>


    <div style={{marginTop: `5px`, textAlign: `right`}}>
      {
        linkMappings.filter(l => {
          return l.name in pageContext
        }).map( (l, i) => {
          return <a key={i} style={{marginLeft: `5px`}} href={pageContext[l.name]}>[{l.desc}]</a>
        })
      }
    </div>
    <h3 style={{marginTop: `10px`, marginBottom: `10px`}}>
      {pageContext.title}
    </h3>

    <div css={{width: `100%`, marginTop: `10px`}}>
      { pageContext.videolectureId &&
        <iframe
          src={`//videolectures.net/acml2020_${pageContext.videolectureId}/iframe/1/`}
          style={{border: 0, width: `100%`, height: `425px`, marginBottom: `0px`}}
        />
      }
    </div>


    <h4 style={{textDecoration: `none`, margin: 0, marginTop: `5px`}}>By {pageContext.by}</h4>
    <div style={{marginTop: `10px`, padding: `10px`, backgroundColor: `#eee`, borderRadius: `5px`}}>
      <b>Abstract</b><br/>
      {/* {} */}
      <ReactMarkdown
        style={{marginBottom: 0, '> p': {marginBottom: 0}}}
        plugins={[RemarkMathPlugin]}
        renderers={renderers}
      >
        {pageContext.abstract}
      </ReactMarkdown>
    </div>
    {
      !hideChatSection && <Utterances
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
    }

    {
      hideChatSection && <div>
        Chat section will be activated soon.
      </div>
    }

  </Layout>
}