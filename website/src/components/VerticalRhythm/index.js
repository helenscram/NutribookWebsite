import styled from "styled-components"
import breakpoints from "../../theme/breakpoints"

export const H1 = styled.h1`
  font-size: 2.6111111rem;
  line-height: 3.8333333rem;
  margin-top: 1.2777778rem;
  margin-bottom: 1.2777778rem;
  @media (min-width: ${breakpoints.sm}) {
    font-size: 4.2222222rem;
    line-height: 5.1111111rem;
    margin-top: 1.2777778rem;
    margin-bottom: 2.5555556rem;
  }
`
export const H2 = styled.h2`
  font-size: 1.6111111rem;
  line-height: 2.5555556rem;
  margin-top: 1.2777778rem;
  margin-bottom: 0rem;
  @media (min-width: ${breakpoints.sm}) {
    font-size: 2.6111111rem;
    line-height: 3.8333333rem;
    margin-top: 1.2777778rem;
    margin-bottom: 1.2777778rem;
  }
`

export const H3 = styled.h3`
  font-size: 1.6111111rem;
  line-height: 2.5555556rem;
  margin-top: 1.2777778rem;
  margin-bottom: 0rem;
`

export const H4 = styled.h4`
  font-size: 1rem;
  line-height: 1.2777778rem;
  margin-top: 1.2777778rem;
  margin-bottom: 0rem;
`
export const H5 = styled.h5`
  font-size: 1rem;
  line-height: 1.2777778rem;
  margin-top: 1.2777778rem;
  margin-bottom: 0rem;
`
export const P = styled.p`
  margin-top: 0rem;
  margin-bottom: 1.2777778rem;
  text-align: justify;
`

export const Ul = styled.ul`
  margin-top: 0rem;
  margin-bottom: 1.2777778rem;
`

export const Ol = styled.ol`
  margin-top: 0rem;
  margin-bottom: 1.2777778rem;
  > li {
    font-weight: bold;
  }
`

export const Pre = styled.pre`
  margin-top: 0rem;
  margin-bottom: 1.2777778rem;
`

export const Table = styled.table`
  margin-top: 0rem;
  margin-bottom: 1.2777778rem;
`

export const Blockquote = styled.blockquote`
  margin-top: 0rem;
  margin-bottom: 1.2777778rem;
`

export const Hr = styled.hr`
  border: 1px solid;
  margin: -1px 0;
`
