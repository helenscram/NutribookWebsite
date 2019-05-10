import React from "react"
import PropTypes from "prop-types"

import FigureStyled from "./styled/FigureStyled"
import FigureCaption from "./styled/FigureCaption"

const Figure = ({ caption, children }) => (
  <FigureStyled>
    {children}
    <FigureCaption>{caption}</FigureCaption>
  </FigureStyled>
)

export default Figure

Figure.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.any,
}
