import * as React from "react"
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby";
import * as styles from './layout.module.css';
import "./layout.css"
import logo from '../images/Logo copy.png';

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
    <div className={`${styles.container} mr-darcy`}>
      <header className={`${styles.header}`}>
        <Navbar className="justify-content-center" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <div className="d-flex flex-grow-1 align-items-center">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <Link to="/">
              <Navbar.Brand href="#home">Gothic Getaways</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <NavDropdown title="Type of Trip" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#luxury">Deluxe</NavDropdown.Item>
                  <NavDropdown.Item href="#inexpensive">Inexpensive</NavDropdown.Item>
                  <NavDropdown.Item href="#group">Group</NavDropdown.Item>
                  {/* Add more dropdown items here */}
                </NavDropdown>
                <NavDropdown title="Destinations" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#historical-haunts">Historical Haunts</NavDropdown.Item>
                  <NavDropdown.Item href="#cemeteries">Cemeteries</NavDropdown.Item>
                  <NavDropdown.Item href="#film-sites">Film Sites</NavDropdown.Item>
                  <NavDropdown.Item href="#haunted-attractions">Haunted Attractions</NavDropdown.Item>
                  <NavDropdown.Item href="#paranormal-accomodations">Paranormal Accomodations</NavDropdown.Item>
                  {/* Add more dropdown items here */}
                </NavDropdown>
                <NavDropdown title="Activities" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#tours">Tours</NavDropdown.Item>
                  <NavDropdown.Item href="#Explore">Explore</NavDropdown.Item>
                  <NavDropdown.Item href="#shopping">Shopping</NavDropdown.Item>
                  <NavDropdown.Item href="#dining">Dining</NavDropdown.Item>
                  <NavDropdown.Item href="#haunted-attractions">Haunted Attractions</NavDropdown.Item>
                  {/* Add more dropdown items here */}
                </NavDropdown>
                {/* Add more Nav and NavDropdown components as needed */}
              </Nav>
              <Nav>
                <li><Link to="/about">About</Link></li>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        © {new Date().getFullYear()}, Gothic Getaways
      </footer>
    </div>
  )
}

export default Layout
