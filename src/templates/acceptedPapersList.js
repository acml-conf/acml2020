import React from "react"

const papers = [
    {
        name: "Paper 1",
        authors: "Mr. A, Mr.B; Mr. C"
    },
    {
        name: "Paper 2",
        authors: "Mr. A, Mr.B; Mr. C"
    },
    {
        name: "Paper 3",
        authors: "Mr. A, Mr.B; Mr. C"
    },
]

const AcceptedPapersList = () => {
    return <div>

        In total, we have accepted {papers.length} papers out of XXX submissions.
        <br/>

        <ul css={{listStyle: `none`, padding: 0, margin: 0}}>
            {papers.map(paper => {
                return <li key={paper.name}>
                    <b>{paper.name}</b><br/>
                    {paper.authors}
                </li>
            })}
        </ul>
    </div>
}

export default AcceptedPapersList