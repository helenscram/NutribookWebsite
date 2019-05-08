import React from "react"
import PropTypes from "prop-types"

import HeaderStyled from "./styled/HeaderStyled"
import HeaderSection from "./styled/HeaderSection"

const Header = ({ children }) => (
  <HeaderStyled>
    <HeaderSection>{children}</HeaderSection>
  </HeaderStyled>
)

export default Header

Header.propTypes = {
  children: PropTypes.any,
}
