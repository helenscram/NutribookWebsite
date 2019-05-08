import PropTypes from "prop-types"
import React from "react"
import MenuStyled from "./styled/MenuStyled"

const Menu = ({ children }) => <MenuStyled>{children}</MenuStyled>

Menu.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Menu
