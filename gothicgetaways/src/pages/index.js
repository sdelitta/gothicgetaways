import * as React from "react"
import Layout from "../components/layout"
import BlogPosts from "../components/BlogPosts"
import banner from "../images/banner.png"

const IndexPage = () => (
  <Layout>
    <div className="banner">
      <div className="banner-overlay"></div>
      <div className="banner-text">
        <h1>GOTHIC GETAWAYS</h1>
        <h4>The intern</h4>
      </div>
      <div></div>
    </div>
    <p>Welcome to your one-stop destination for everything eerie and enchanting. Unravel the world’s most haunted hideaways, chilling tours, and other spine-tingling adventures that will leave even the bravest souls questioning their courage. Step into the unknown and embark on a journey into the unexplored corners of the world where the paranormal and the extraordinary collide. Discover, if you dare, where mystery reigns and reality blurs.</p>
    <BlogPosts />
  </Layout>
)

export default IndexPage