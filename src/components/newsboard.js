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
  {
    date: `2020/10/03`,
    content: `Conference trackpapers are now available in [PMLR Volume 129](http://proceedings.mlr.press/v129/).`
  },
  {
    date: `2020/10/08`,
    content: `We've sent out the registration link to the authors of accepted papers!`,
  },
  {
    date: `2020/10/22`,
    content: `ACML2020 will be free of charge for participants; paper authors please register via the link sent by email.`,
  },
  {
    date: `2020/11/16`,
    content: `We've just published all the talks including [papers](http://www.acml-conf.org/2020/program/papers), [tutorials](http://www.acml-conf.org/2020/program/tutorials), and [invited talks](http://www.acml-conf.org/2020/program/invited-speakers).`,
  },
  {
    date: `2020/11/18`,
    content: `The **program** is now complete with all videos available.  Welcome to the conference! Now free`,
    pin: true,
  }
]

const NewsBoard = ({showOnly}) => {
  const sortedNews = news.sort((a, b) => -a.date.localeCompare(b.date))

  const pinnedNews = sortedNews.filter(n=> n.pin)
  const notPinnedNews = sortedNews.filter(n=> !n.pin)

  const selectedNews = showOnly ? notPinnedNews.slice(0, showOnly - pinnedNews.length) : notPinnedNews
  const showedNews = pinnedNews.concat(selectedNews)

  return <>
    <h2>News</h2>
    {
      showedNews.map(n => {
      return <div css={{textAlign: `center`, marginBottom: `10px`}}>
        <div css={{
          position: `relative`,
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
          { n.pin && 
            <span css={{float: `right`, top: 5, right: 10, position: `absolute`}}>📍</span>
          }
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