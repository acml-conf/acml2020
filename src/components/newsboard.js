import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { DESKTOP_MIN_WIDTH, media } from "../style"
import ReactMarkdown from "react-markdown"


const news = [
  {
    date: `2020/05/30`,
    content: `something [334](http://www.google.com)`
  }
]

const NewsBoard = ({showOnly}) => {
  return <>
    <h2>News</h2>
    {
      news.map(n => {
      return <div css={{textAlign: `center`}}>
        <div css={{
          padding: `10px`,
          borderRadius: `5px`,
          textAlign: `left`,
          background: `#E7E7E7`,
          margin: `auto`,
          p: {
            marginBottom: `0px`,
          },
        }}>
          <ReactMarkdown source={`**${n.date}**: ${n.content}`}/>
        </div>
      </div>
      })
    }
    <div css={{
      textAlign: `center`,
      marginTop: `10px`,
      color: `gray`,
    }}>
      <a css={{color: `gray`}} href="...">Older News ({news.length})</a>
    </div>
  </>
}

export default NewsBoard