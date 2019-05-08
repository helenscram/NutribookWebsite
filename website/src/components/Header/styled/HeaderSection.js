import styled from "styled-components"
import theme from "../../../theme"

const HeaderSection = styled.section`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  height: ${theme.headerHeight || "100px"};
  max-width: ${theme.sectionWidth};
  margin: auto;
`

export default HeaderSection
