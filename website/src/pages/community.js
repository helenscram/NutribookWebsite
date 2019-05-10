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
import meal1_4x3 from "../images/blog/4x3/meal1.jpg"
import meal2_4x3 from "../images/blog/4x3/meal2.jpg"
import meal3_4x3 from "../images/blog/4x3/meal3.jpg"
import cook_16x9 from "../images/blog/16x9/cook.jpg"
import cook2_16x9 from "../images/blog/16x9/cook2.jpg"
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
      <p>See what other users created and get inspiration!</p>
      <Section>
        <Figure caption="Photos from pexels.com">
          <div class="row">
            <smallpicture class="column">
              <source
                srcSet={meal1_4x3}
                media={`(min-width: ${breakpoints.sm})`}
              />
              <img src={meal1_4x3} alt="Berries" />
            </smallpicture>
            <smallpicture class="column">
              <source
                srcSet={meal2_4x3}
                media={`(min-width: ${breakpoints.sm})`}
              />
              <img src={meal2_4x3} alt="Berries" />
            </smallpicture>
            <smallpicture class="column">
              <source
                srcSet={meal3_4x3}
                media={`(min-width: ${breakpoints.sm})`}
              />
              <img src={meal3_4x3} alt="Berries" />
            </smallpicture>
          </div>
        </Figure>
        <button onclick="/blog">Browse</button>
        <H3>Create your own recipe collection</H3>
      </Section>
      <p>
        You can also start creating your own recipes acoording to your diest and
        your taste!
      </p>
      <Figure caption="Photos from pexels.com">
        <div class="row">
          <smallpicture class="column">
            <source
              srcSet={cook_16x9}
              media={`(min-width: ${breakpoints.sm})`}
            />
            <img src={cook_16x9} alt="Berries" />
          </smallpicture>
          <smallpicture class="column">
            <source
              srcSet={cook2_16x9}
              media={`(min-width: ${breakpoints.sm})`}
            />
            <img src={cook2_16x9} alt="Berries" />
          </smallpicture>
        </div>
      </Figure>
      <button onclick="/blog">Create Recipes</button>
    </Section>
  </Layout>
)

export default AboutPage
