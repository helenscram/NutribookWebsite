import PropTypes from "prop-types"
import React from "react"
import LinkStyled from "./styled/LinkStyled"

const MenuItem = ({ to, children }) => (
  <LinkStyled to={to}>{children}</LinkStyled>
)

MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default MenuItem
