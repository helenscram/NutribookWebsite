import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import CookieConsent from "react-cookie-consent"
import "./styled/layout.css"
import { ThemeProvider } from "styled-components"
import { Flex } from "rebass"
import "typeface-nunito"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { library } from "@fortawesome/fontawesome-svg-core"
import {
  fab,
  faFacebookSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"
import { faPeace, faCoffee, faYinYang } from "@fortawesome/free-solid-svg-icons"

import theme from "../../theme"
import Container from "../Container"
import Header from "../Header"
import Logo from "../Logo"
import Main from "../Main"
import Footer from "../Footer"
import Menu from "../Menu"
import MenuItem from "../MenuItem"
import imgLogo from "../../images/026-cutlery.png"

library.add(
  fab,
  faCoffee,
  faPeace,
  faYinYang,
  faTwitterSquare,
  faFacebookSquare
)

const Layout = ({ children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            version
          }
        }
      }
    `
  )
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header>
          <Logo to="/" text="Nutribook" img={imgLogo} />
          <Menu>
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/nutribook/">My Nutribook</MenuItem>
            <MenuItem to="/blog/">Blog</MenuItem>
            <MenuItem to="/community/">Community</MenuItem>
          </Menu>
        </Header>
        <Main>{children}</Main>
        <Footer>
          <Flex flexDirection="column">
            <span>© Helen Cramer</span>
            <span> Version: {site.siteMetadata.version}</span>
          </Flex>
          <Flex flexDirection="column">
            <span>Roadmap</span>
            <Link to="/">Home</Link>
            <Link to="/nutribook">My Nutribook</Link>
            <Link to="/blog/">Blog</Link>
            <Link to="/community">Community</Link>
            <Link to="/imprint/">Impressum</Link>
            <Link to="/data-protection/">Data Protection</Link>
          </Flex>
          <Flex width={"3rem"} justifyContent="space-between">
            <span>Email: helen.cramer@cbs-mail.de</span>
          </Flex>
        </Footer>
        <CookieConsent
          location="bottom"
          buttonText="I agree"
          cookieName="gsuaCookie"
          style={{ background: "rgb(138, 207, 99)" }}
          buttonStyle={{ color: "#4e503b", fontSize: "15px" }}
          expires={150}
        >
          By using this website you agree to the application of cookies.
        </CookieConsent>
      </Container>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
