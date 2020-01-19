const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/page.js`)
  const callTemplate = path.resolve(`src/templates/calls.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
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

  const normalPages = pages.filter(n => !n.node.frontmatter.path.match(/\/calls/))

  normalPages.forEach(({ node }) => {
        createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
        })
    })

  pages.filter(n => n.node.frontmatter.path.match(/calls/)).forEach(({ node }) => {
    createPage({
    path: node.frontmatter.path,
    component: callTemplate,
    context: {}, // additional data can be passed via context
  })
})
}