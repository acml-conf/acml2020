const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve(`src/templates/page.js`)
  const pageWithSideMenuTemplate = path.resolve(`src/templates/page-with-side-menu.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              sideMenu
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

  pages.filter(n => !n.node.frontmatter.sideMenu).forEach(({ node }) => {
        createPage({
        path: node.frontmatter.path,
        component: pageTemplate,
        context: {}, // additional data can be passed via context
        })
    })

  pages.filter(n => n.node.frontmatter.sideMenu).forEach(({ node }) => {
    createPage({
    path: node.frontmatter.path,
    component: pageWithSideMenuTemplate,
    context: {}, // additional data can be passed via context
  })
})
}