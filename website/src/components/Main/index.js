import React from "react"
import PropTypes from "prop-types"

import MainStyled from "./styled/MainStyled"

const Main = ({ children }) => <MainStyled>{children}</MainStyled>

Main.propTypes = {
  children: PropTypes.any,
}

export default Main
