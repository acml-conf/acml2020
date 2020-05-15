const path = require(`path`)

// todo: extract this from pages
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
      name: `Invited Speakers`,
      slug: `/program/invited-speakers`
    }
  ]
}


exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/page.js`)
  const callTemplate = path.resolve(`src/templates/pageWithMenu.js`)
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
      sectionMenu: sectionMenuGroup[group]
    }, // additional data can be passed via context
  })
})
}