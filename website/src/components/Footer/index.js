import React from "react"
import PropTypes from "prop-types"

import FooterStyled from "./styled/FooterStyled"
import FooterSection from "./styled/FooterSection"

const Footer = ({ children }) => (
  <FooterStyled>
    <FooterSection>{children}</FooterSection>
  </FooterStyled>
)

export default Footer

Footer.propTypes = {
  children: PropTypes.any,
}
