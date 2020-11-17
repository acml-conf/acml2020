const { publicDecrypt } = require("crypto")
const path = require(`path`)

const papers = require("./src/content/acml-papers.json")
const talkTutorialVideos = require("./src/content/talk-tutorial-videos.json")

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
      name: `Awards`,
      slug: `/program/awards`
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
        jmlrURL: ``,
        pdfURL: p.url,
      }

    return {
      type: "paper",
      id: p.ID,
      title: p.title,
      by: p.author,
      abstract: p.abstract,
      videolectureId: p.ID,
      ...urls
    }
  }).concat(talkTutorialVideos.map(t => {
    return {
      id: t.by.toLowerCase().replace(/ /g, "-"),
      ...t
    }
  }))

  videos.forEach( p => {
    console.log(`Creating video page for ${p.type}-${p.title}`)
    createPage({
      path: `video/${p.type}/${p.id}`,
      component: videoTemplate,
      context: p
    })
  })
})
}