/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)

  const result = await graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allContentfulBlogPost.edges

  posts.forEach((post, index) => {
    createPage({
      path: `/blog/${post.node.slug}/`,
      component: blogPostTemplate,
      context: {
        slug: post.node.slug,
      },
    })
  })
}