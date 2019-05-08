import styled from "styled-components"
import theme from "../../../theme"

const FooterSection = styled.section`
  display: flex;
  justify-content: space-between;
  height: ${theme.footerHeight || "200px"};
  max-width: ${theme.sectionWidth};
  margin: auto;
  padding: 0 0.5rem;
`

export default FooterSection
