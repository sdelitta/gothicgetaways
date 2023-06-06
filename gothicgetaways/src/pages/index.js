import * as React from "react"
import { Link } from "gatsby";
import Layout from "../components/layout"
import BlogPosts from "../components/BlogPosts"
import west from '../images/regions/west.png'
import NewEngland from '../images/regions/NewEngland.png'
import SouthEast from '../images/regions/SouthEast.png'
import MidWest from '../images/regions/MidWest.png'
import logo from '../images/Logo copy.png'
import WideCemetery from '../images/WideCemetery.png'
import Ethereal from '../images/EtherealForest.png'

const IndexPage = () => (
  <Layout>
    <div className="banner">
      <div className="banner-overlay">
        <div className="banner-text">
          <h1>Gothic Getaways</h1>
          <h4>The #1 Travel Site for haunted retreats, chilling tours, and other spine-tingling adventures </h4>
        </div>
      </div>
    
    </div>
    <div className="regions">
      <div className="regions-cards">
        <Link to="/west">
          <div className="west">
            <img src={west} alt="West" />
          </div>
        </Link>
        <Link to="/southeast">
          <div className="southeast">
            <img src={SouthEast} alt="South East" />
          </div>
        </Link>
        <Link to="/midwest">
          <div className="midwest">
            <img src={MidWest} alt="Mid West" />
          </div>
        </Link>
        <Link to="/newengland">
          <div className="new-england">
            <img src={NewEngland} alt="New England" />
          </div>
        </Link>
      </div>
    </div>
    <div className="landing-img">
      <img src={WideCemetery} alt="Wide Cemetery" />
    </div>
    <div className="welcome">
      <div className="welcome-text">Welcome, eerie traveller. Gothic Getaways is your one-stop destination for everything esoteric and enchanting. Unravel the world’s most haunted hideaways, chilling tours, and other spine-tingling adventures that will leave even the bravest souls questioning their courage. Step into the unknown and embark on a journey into the unexplored corners of the world where the paranormal and the extraordinary collide. Discover, if you dare, where mystery reigns and reality blurs.
      </div>
      <div className="welcome-img">
        <img src={logo} alt="Logo" />
      </div>

    </div>
    <div className="landing-img">
      
    </div>
    <div className="latest">
      <div className="latest-title">
        <h1>Latest Articles</h1>
      </div>
    </div>
    <BlogPosts />
  </Layout>
)

export default IndexPage