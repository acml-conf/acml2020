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
        We have accepted in total {papers.length} papers this year.

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