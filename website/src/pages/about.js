import React from "react"
import { Flex, Box } from "rebass"
import { H1, H3, P } from "../components/VerticalRhythm"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import RespGrid from "../components/RespGrid"
import Figure from "../components/Figure"
import img01_4x1 from "../images/blog/4x1/community.jpg"
import img01_21x9 from "../images/blog/21x9/community.jpg"
import img01_16x9 from "../images/blog/16x9/community.jpg"
import img01_3x2 from "../images/blog/3x2/community.jpg"
import img01_4x3 from "../images/blog/4x3/community.jpg"
import breakpoints from "../theme/breakpoints"

const AboutPage = () => (
  <Layout>
    <SEO title="Community" keywords={[`gatsby`, `application`, `react`]} />
    <Figure caption="Photo from pexels.com">
      <picture>
        <source srcSet={img01_4x1} media={`(min-width: ${breakpoints.xl})`} />
        <source srcSet={img01_21x9} media={`(min-width: ${breakpoints.lg})`} />
        <source srcSet={img01_16x9} media={`(min-width: ${breakpoints.md})`} />
        <source srcSet={img01_3x2} media={`(min-width: ${breakpoints.sm})`} />
        <img src={img01_21x9} alt="Berries" />
      </picture>
    </Figure>
    <Section>
      <H1 fontSize={[6]} lineHeight={[1.5]}>
        Be part of the community
      </H1>
      <H3>Browse Recipes of other users</H3>
    </Section>
    <Section>
      <Flex flexWrap="wrap">
        <Box width={[1, 1 / 2]} pr={[0, 2]}>
          <P>
            Every lifestyle cook knows the problem: you love cooking, you love
            improvising, and you love collecting recipes. Besides having 10 cook
            books, ripped out recipes of your favorite magazines, and notes from
            grandmas secret apple pie, we all saved hundreds of awesome recipes
            online as well.
          </P>
        </Box>
        <Box width={[1, 1 / 2]} pl={[0, 2]}>
          <P>
            How to possibly manage them? Nutribook is your personal recipe
            collection that does just that! Here you can add recipes of any
            format and keep an overview. And even if you start a diet, you can
            add their nutrients so that you will always be able to track your
            favorite recipes properly.
          </P>
        </Box>
      </Flex>
      <Section>
        <H3>Create your own recipe collection</H3>
      </Section>
      <RespGrid min={"240px"}>
        <P>
          Occaecat aliqua excepteur labore anim quis aliquip. Do amet proident
          veniam dolore. Do non esse dolor nostrud in ipsum aliquip velit
          cupidatat esse dolor veniam aliqua. Pariatur enim exercitation eu
          occaecat. Occaecat reprehenderit reprehenderit cupidatat et fugiat
          veniam ea labore occaecat dolor magna.
        </P>
        <P>
          Cillum aliquip exercitation ut culpa sit. In ullamco aliqua occaecat
          pariatur officia qui magna labore aute. Consectetur irure est ex
          exercitation. Elit fugiat irure adipisicing elit tempor fugiat dolor
          esse occaecat. Dolor sint eu mollit et reprehenderit aute sunt dolor
          eu qui aliquip dolore reprehenderit magna.
        </P>
      </RespGrid>
    </Section>
  </Layout>
)

export default AboutPage
