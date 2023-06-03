import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      
    }
  }
`

const BlogTemplate = ({ data }) => {
  const post = data.contentfulBlogPost
  return (
    <div>
      <h1>{post.title}</h1>
      <img src={post.fields.featuredImage.fields.file.url}
                                alt={post.fields.title} />
      {/* Render your other fields here... */}
    </div>
  )
}

export default BlogTemplate