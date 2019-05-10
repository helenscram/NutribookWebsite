import styled from "styled-components"
import theme from "../../../theme"

const FooterStyled = styled.footer`
  padding: 0.2rem 0;
  background: ${theme.bgHeader || "#49CD2B"};
  color: #fff;
  & a {
    color: #fff;
  }
  & a:hover {
    color: #cfd8dd;
  }
`

export default FooterStyled
