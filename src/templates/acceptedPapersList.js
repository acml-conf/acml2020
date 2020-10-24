import React, { useState } from "react"

import { withPrefix } from "gatsby"

const papers = require("../content/acml-papers.json")
    .map(p => {
        return {
            ...p,
            title: p.title.replace(/[\{\}]/g, ``),
        }
    })
    .sort( (a, b) => a.title.localeCompare(b.title))


const Paper = ({id, title, authors}) => {
    return <li key={title}>
        <a href={withPrefix(`video/paper-${id}`)}>
            <b>{title}</b>
        </a>
        <br/>
        {authors}
    </li>
}

const paperFilter = (p, query) => {
    if (query === "") {
        return true
    }


    const rx = new RegExp(query, "i")

    return p.title.match(rx)
        || p.author.match(rx)
        || (p.abstract !== null && p.abstract.match(rx))
}

const AcceptedPapersList = () => {
    const [query, setQuery] = useState("")

    const journalPapers = papers
        .filter(p => p.crossref === "Journal Track")
        .filter(p => paperFilter(p, query))

    const confPapers = papers
        .filter(p => p.crossref === "acml20")
        .filter(p => paperFilter(p, query))


    const handleChange = (evt) => {
        const value = evt.target.value
        if (value.length >= 3) {
            setQuery(value)
        } else{
            setQuery("")
        }
    }

    return <div>
        <div style={{margin: `10px 0`, textAlign: `right`}}>
            Filter: <input type="text" placeholder="by keyword or name" onChange={handleChange} autoFocus/>
        </div>

        <h3 css={{marginBottom: 0}}>Journal Track ({journalPapers.length} papers)</h3>
        <br/>
        <ul css={{listStyle: `none`, padding: 0, margin: 0}}>
            {
                journalPapers.map(
                    paper => <Paper id={paper.ID} title={paper.title} authors={paper.author}/>
                )
            }
        </ul><br/>
        <h3 css={{marginBottom: 0}}>Conference Track ({confPapers.length} papers)</h3>
        <br/>
        <ul css={{listStyle: `none`, padding: 0, margin: 0}}>
            {
                confPapers.map(
                    paper => <Paper id={paper.ID} title={paper.title} authors={paper.author}/>
                )
            }
        </ul>
    </div>
}

export default AcceptedPapersList