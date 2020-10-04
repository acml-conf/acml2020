import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


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
    <h2>Welcome to ACML2020's Virtual Site 👋</h2>
  </div>
}


const IndexPage = () => {
  return <Layout>
    <SEO title="Virtual Site"/>
    <div style={{margin: `30px 0`}}>

      <GreetingMSG/>

      <div css={{width: `100%`}}>
        <div css={{float: `right`}}>
          Your Current Timezone {` `}
          <select>
          <option>Europe/Berlin</option>
          </select>
        </div>
        <div css={{clear: `both`}}></div>
      </div>

      <div css={{width: `100%`, height: `400px`, background: `lightgray`}}>
        Calendar
      </div>
      <br/>
      <div>
        <h3>Papers</h3>
        <div><b>Filters:</b> {` `}
          <input type="checkbox"/>Machine Learning {` `}
          <input type="checkbox"/>Generative Models..
          <hr/>
          <ul css={{listStyle: `none`, padding: 0, margin: 0}}>
            { 
              mockPaperData.map(paper => {
                return <li key={paper.title}>                    
                  <img css={{height: `200px`, width: `200px`, float: `left`}} src="https://via.placeholder.com/200"/>
                  <div css={{marginLeft: `10px`, float: `left`}}>
                    <h4 css={{fontSize: `1.5em`, margin: `10px 0`}}>{paper.title}</h4>
                    <div>{paper.authors}</div>
                    <div css={{marginTop: `40px`}}>
                      <b>Scheduled Presenations:</b> {
                      paper.presenationSlots.map(s => {
                        return <span
                          key={s}
                          css={{borderRadius: `5px`, padding: `3px`, background: `lightgray`, margin: `0px 5px`}}>
                            {s}
                          </span>
                      })
                      }
                    </div>
                  </div>
                  <div css={{clear: `both`}}></div>
                </li>
              })
            }
          </ul>
        </div>

      </div>


    </div>
  </Layout>
}

export default IndexPage
