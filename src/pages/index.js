import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import Figure from "../components/Figure"
import { H1, H2, H3, P } from "../components/VerticalRhythm"
import img01_4x1 from "../images/blog/4x1/berries-bowl.jpg"
import img01_21x9 from "../images/blog/21x9/berries-bowl.jpg"
import img01_16x9 from "../images/blog/16x9/berries-bowl.jpg"
import img01_3x2 from "../images/blog/3x2/berries-bowl.jpg"
import img01_4x3 from "../images/blog/4x3/berries-bowl.jpg"
import fork1_4x1 from "../images/blog/4x1/fork1.jpg"
import fork2_4x1 from "../images/blog/4x1/fork2.jpg"
import fork3_4x1 from "../images/blog/4x1/fork3.jpg"
import breakpoints from "../theme/breakpoints"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
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
      <H1>Welcome to Nutribook!</H1>
      <H2>Nutribook helps you to create your own recipe collection</H2>
      <Figure>
        <picture>
          <source srcSet={fork1_4x1} media={`(min-width: ${breakpoints.sm})`} />
          <img src={fork1_4x1} alt="Berries" />
        </picture>
      </Figure>
      <P>
        Every lifestyle cook knows the problem: you love cooking, you love
        improvising, and you love collecting recipes. Besides having 10 cook
        books, ripped out recipes of your favorite magazines, and notes from
        grandmas secret apple pie, we all saved hundreds of awesome recipes
        online as well.How to possibly manage them? Nutribook is your personal
        recipe collection that does just that! Here you can add recipes of any
        format and keep an overview. And even if you start a diet, you can add
        their nutrients so that you will always be able to track your favorite
        recipes properly.
      </P>
    </Section>
    <Section>
      <H3>Browse recipes</H3>
      <Figure>
        <picture>
          <source srcSet={fork2_4x1} media={`(min-width: ${breakpoints.sm})`} />
          <img src={fork2_4x1} alt="Berries" />
        </picture>
      </Figure>
      <P>
        Everyone on Nutribook is part of our community. The community has grown
        and therefore we have a variety of recipes available for you! The
        recipes are diverse as each and everyone has their own preferences,
        taste, and diet. YOu can benefit from this variety and can contribute
        yourself. Often it is easier to get inspired first, so why not browse
        through others' creations? Come on and find out what our community has
        created!
      </P>
      <button>
        <Link to="/community"> Browse Recipes</Link>
      </button>
      <H3>Create your own meals</H3>
      <Figure>
        <picture>
          <source srcSet={fork3_4x1} media={`(min-width: ${breakpoints.sm})`} />
          <img src={fork3_4x1} alt="Berries" />
        </picture>
      </Figure>
      <P>
        It's nice to get inspired by others, but why not inspire OTHERS? with
        Nutribook you are able to create and document your own recipes. You have
        a certain diet? Great, share your experience, knowledge and expertise
        with others. Just add relevant information to your recipe, e.g. macros
        and calories. This way it will be easier for others to follow your diet
        as well or adapt it to theirs.
      </P>
      <button>
        <Link to="/nutribook"> Create own Nutribook</Link>
      </button>
    </Section>
  </Layout>
)

export default IndexPage
