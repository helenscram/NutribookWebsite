import React from "react"
import PropTypes from "prop-types"

import SectionStyled from "./styled/SectionStyled"

const Section = ({ children }) => <SectionStyled>{children}</SectionStyled>

Section.propTypes = {
  children: PropTypes.any,
}

export default Section
