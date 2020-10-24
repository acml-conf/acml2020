const { publicDecrypt } = require("crypto")
const path = require(`path`)

const papers = require("./src/content/acml-papers.json")

const mockPapers = [
  {
    id: 0,
    title: `Paper 1`,
    authors: `Mr. Foo Bar, Mrs. ABC DEF`,
    presenationSlots: [
      `2020/11/19 3pm`,
      `2020/11/20 1am`,
    ]
  },
  {
    id: 1,
    title: `Paper 2`,
    authors: `Mr. Goo Bar, Mrs. ABC DEF`,
    presenationSlots: [
      `2020/11/19 3pm`,
      `2020/11/20 1am`,
    ]
  },
  {
    id: 2,
    title: `Paper 3`,
    authors: `Mr. Eoo Bar, Mrs. ABC DEF`,
    presenationSlots: [
      `2020/11/19 3pm`,
      `2020/11/20 1am`,
    ]
  },
]

const sectionMenuGroup = {
  calls:[
    {
      name: `Information`,
      slug: `/calls`
    },
    {
      name: `Conference Track`,
      slug: `/calls/conference-track`
    },
    {
      name: `Journal Track`,
      slug: `/calls/journal-track`
    },
    {
      name: `Tutorials`,
      slug: `/calls/tutorials`
    },
    {
      name: `Workshops`,
      slug: `/calls/workshops`
    },
    {
      name: `ACML Distinguished Contribution Award`,
      slug: `/calls/nominations`
    },
  ],
  program: [
    {
      name: `Main Conference`,
      slug: `/program/papers`
    },
    {
      name: `Invited Speakers`,
      slug: `/program/invited-speakers`
    },
    {
      name: `Tutorials`,
      slug: `/program/tutorials`
    },
    {
      name: `Workshops`,
      slug: `/program/workshops`
    },
  ]
}


exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/page.js`)
  const callTemplate = path.resolve(`src/templates/pageWithMenu.js`)
  const videoTemplate = path.resolve(`src/templates/videoPage.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              withSectionMenu
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const pages = result.data.allMarkdownRemark.edges
    .filter(n => n.node.frontmatter.path)

  const normalPages = pages.filter(n => !n.node.frontmatter.withSectionMenu)

  normalPages.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })

  pages.filter(n => n.node.frontmatter.withSectionMenu).forEach(({ node }) => {
    const group = node.frontmatter.path.split("/")[1]
    createPage({
    path: node.frontmatter.path,
    component: callTemplate,
    context: {
      sectionMenu: sectionMenuGroup[group],
      sectionName: group
    }, // additional data can be passed via context
  })


  const videos = papers.map(p => {
    const urls = p.crossref === "acml20" ?
      {
        pmlrURL: `http://proceedings.mlr.press/v129/${p.ID}.html`,
        pdfURL: `http://proceedings.mlr.press/v129/${p.ID}/${p.ID}.pdf`,
      } :
      {
        jmlrURL: `#jmlrURL`,
        pdfURL: `#jmlrPDF`,
      }

    return {
      type: "paper",
      id: p.ID,
      title: p.title,
      by: p.author,
      abstract: p.abstract,
      videolectureID: ``,
      ...urls
    }
  })

  videos.forEach( p => {
    console.log(`Creating ${p.title}`)
    createPage({
      path: `video/${p.type}-${p.id}`,
      component: videoTemplate,
      context: p
    })
  })
})
}