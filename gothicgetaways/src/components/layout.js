/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Link } from "gatsby";
import * as styles from './layout.module.css';
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Gothic Getaways</h1>
        <nav>
          <ul className={styles.nav}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        © {new Date().getFullYear()}, Gothic Getaways
      </footer>
    </div>
  )
}

export default Layout
