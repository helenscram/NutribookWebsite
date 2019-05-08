import styled from "styled-components"

const RespGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${props => props.min}, 1fr));
  grid-column-gap: 1rem;
`

export default RespGrid
