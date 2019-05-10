import PropTypes from "prop-types"
import React from "react"
import LogoImg from "./styled/LogoImg"
import LogoText from "./styled/LogoText"
import LogoStyled from "./styled/LogoStyled"
import LinkStyled from "./styled/LinkStyled"

const Logo = ({ to, img, text, children }) => (
  <LogoStyled>
    <LinkStyled to={to}>
      {img && <LogoImg src={img} alt="Logo" />}
      {text && <LogoText>{text} </LogoText>}
      {children}
    </LinkStyled>
  </LogoStyled>
)

Logo.propTypes = {
  to: PropTypes.string.isRequired,
  img: PropTypes.any,
  text: PropTypes.string,
  children: PropTypes.node,
}

export default Logo
