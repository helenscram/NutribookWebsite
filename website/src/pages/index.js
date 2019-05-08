import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import Figure from "../components/Figure"
import { H1, H3, P } from "../components/VerticalRhythm"
import img01_4x1 from "../images/blog/4x1/berries-bowl.jpg"
import img01_21x9 from "../images/blog/21x9/berries-bowl.jpg"
import img01_16x9 from "../images/blog/16x9/berries-bowl.jpg"
import img01_3x2 from "../images/blog/3x2/berries-bowl.jpg"
import img01_4x3 from "../images/blog/4x3/berries-bowl.jpg"
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
      <H3>Browse Recipes of the community</H3>
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
      <H3>Create your own</H3>
      <P>
        Look at these words. Are they small words? And he referred to my words -
        if they're small, something else must be small. I guarantee you there's
        no problem, I guarantee. We have so many things that we have to do
        better... and certainly ipsum is one of them. All of the words in Lorem
        Ipsum have flirted with me - consciously or unconsciously. That's to be
        expected. I don't think anybody knows it was Russia that wrote Lorem
        Ipsum, but I don't know, maybe it was. It could be Russia, but it could
        also be China. It could also be lots of other people. It also could be
        some wordsmith sitting on their bed that weights 400 pounds. Ok? Lorem
        Ipsum is unattractive, both inside and out. I fully understand why it’s
        former users left it for something else. They made a good decision. Be
        careful, or I will spill the beans on your placeholder text.
      </P>
      <p>
        <a href="http://gatsbyjs.org/" target="_blank" rel="nofollow noopener">
          Create own Nutribook
        </a>
      </p>
      <button onclick="window.location='blog.js'">Visit Page Now</button>
    </Section>
  </Layout>
)

export default IndexPage
