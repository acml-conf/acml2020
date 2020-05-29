import React from "react"
import ReactMarkdown from "react-markdown"

import BeautifulLink from "../components/link"

import { replacePathPrefixHTML } from "../utils"


const news = [
  {
    date: `2020/05/28`,
    content: `Selected papers from the conference track may now appear in a [journal special issue](pathPrefix::/calls/conference-track).`
  },
  {
    date: `2020/05/16`,
    content: `[Invited speakers have now been announced.](pathPrefix::/program/invited-speakers)`
  }
]

const NewsBoard = ({showOnly}) => {
  return <>
    <h2>News</h2>
    {
      news.map(n => {
      return <div css={{textAlign: `center`, marginBottom: `10px`}}>
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
          <ReactMarkdown source={`**${n.date}**: ${replacePathPrefixHTML(n.content)}`}/>
        </div>
      </div>
      })
    }
    { showOnly && <div css={{
        textAlign: `center`,
        marginTop: `10px`,
        color: `gray`,
      }}>
        <BeautifulLink
          to="/news"
          underLine={false}
          color="gray"
        >
          Older News ({news.length})
        </BeautifulLink>
      </div>
    }
  </>
}

export default NewsBoard