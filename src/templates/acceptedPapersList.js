import React from "react"

const papers = require("../content/acml-papers.json")
    .map(p => {
        return {
            ...p,
            title: p.title.replace(/[\{\}]/g, ``),
        }
    })
    .sort( (a, b) => a.title.localeCompare(b.title))


const Paper = ({title, authors}) => {
    return <li key={title}>
        <b>{title}</b><br/>
        {authors}
    </li>
}

const AcceptedPapersList = () => {
    console.log(papers)
    const journalPapers = papers.filter(p => p.crossref === "Journal Track")
    const confPapers = papers.filter(p => p.crossref === "acml20")

    return <div>
        <h3 css={{marginBottom: 0}}>Journal Track ({journalPapers.length} papers)</h3>
        <br/>
        <ul css={{listStyle: `none`, padding: 0, margin: 0}}>
            {
                journalPapers.map(
                    paper => <Paper title={paper.title} authors={paper.author}/>
                )
            }
        </ul><br/>
        <h3 css={{marginBottom: 0}}>Conference Track ({confPapers.length} papers)</h3>
        <br/>
        <ul css={{listStyle: `none`, padding: 0, margin: 0}}>
            {
                confPapers.map(
                    paper => <Paper title={paper.title} authors={paper.author}/>
                )
            }
        </ul>
    </div>
}

export default AcceptedPapersList