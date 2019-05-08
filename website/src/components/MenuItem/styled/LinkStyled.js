import styled from "styled-components"
import { Link } from "gatsby"

const LinkStyled = styled(Link)`
  display: table-cell;
  background: transparent;
  color: #fff;
  text-decoration: none;
  vertical-align: bottom;
  padding-left: 1rem;
  &:hover {
    color: rgb(247, 173, 59);
  }
`

export default LinkStyled
