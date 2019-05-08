import React from "react"
import { Flex, Box } from "rebass"
import { H1, H2, H3, P, Ol } from "../components/VerticalRhythm"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import RespGrid from "../components/RespGrid"
import Figure from "../components/Figure"
import img01_4x1 from "../images/blog/4x1/foodbook.jpg"
import img01_21x9 from "../images/blog/21x9/foodbook.jpg"
import img01_16x9 from "../images/blog/16x9/foodbook.jpg"
import img01_3x2 from "../images/blog/3x2/foodbook.jpg"
import img01_4x3 from "../images/blog/4x3/foodbook.jpg"
import breakpoints from "../theme/breakpoints"

const ResourcesPage = () => (
  <Layout>
    <SEO title="Foodbook" keywords={[`gatsby`, `application`, `react`]} />
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
      <H1>My Nutribook</H1>
    </Section>
    <Section>
      <H2>Find, cook, create!</H2>
      <Ol>
        <li>Find the perfect Recipe</li>
        <ul>
          <li>Browse recipes of the community </li>
          <li>Save you favorites to your Nutribook </li>
        </ul>
        <li>Plan your meals</li>
        <ul>
          <li>Plan macros </li>
          <li>count calories </li>
          <li>adapt to you dietarian needs </li>
          <li>or just choose the tastiest recipes! </li>
        </ul>
        <li>Cook</li>
        <ul>
          <li>Follow the steps </li>
          <li>Experiment</li>
          <li>Add your own signature </li>
        </ul>
        <li>Create your own recipes</li>
        <ul>
          <li>According to your diet </li>
          <li>According to your needs and </li>
          <li>According to your taste! </li>
        </ul>
      </Ol>
    </Section>
    <Section>
      <H3>Sign up here</H3>
      <ul>
        <li>Document components with Markdown.</li>
        <li>
          Perform tests with react-testing-library:{" "}
          <a
            href="https://testing-library.com/react"
            target="_blank"
            rel="nofollow"
          >
            https://testing-library.com/react
          </a>
        </li>
      </ul>
    </Section>
  </Layout>
)

export default ResourcesPage
