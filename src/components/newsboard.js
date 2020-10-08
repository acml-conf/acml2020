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
  },
  {
    date: `2020/06/15`,
    content: `Conference track deadline extended by 2 weeks to 29 June 2020 as well as the other dates.`
  },
  // {
  //   date: `2020/10/03`,
  //   content: `Conference trackpapers are now available in [PMLR Volume 129](http://proceedings.mlr.press/v129/).`
  // },
  {
    date: `2020/10/08`,
    content: `[Our registration portal](pathPrefix::/registration) is now open! 🎉`
  }
]

const NewsBoard = ({showOnly}) => {
  const sortedNews = news.sort((a, b) => -a.date.localeCompare(b.date))
  const selectedNews = showOnly ? sortedNews.slice(0, showOnly) : news

  return <>
    <h2>News</h2>
    {
      selectedNews.map(n => {
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