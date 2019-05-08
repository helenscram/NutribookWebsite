import styled from "styled-components"
import { Link } from "gatsby"

const LinkStyled = styled(Link)`
  display: block;
  background: transparent;
  color: #fff;
  text-decoration: none;
  vertical-align: middle;
  &:hover {
    color: #fff;
  }
`

export default LinkStyled
