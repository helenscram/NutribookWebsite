import React from "react"
import { Link, graphql } from "gatsby"
import { Heading, Text } from "rebass"

import Layout from "../components/Layout"
import Section from "../components/Section"
import Figure from "../components/Figure"
import SEO from "../components/SEO"
import { H1, H3, P } from "../components/VerticalRhythm"
import img01_4x1 from "../images/blog/4x1/berries.jpg"
import img01_21x9 from "../images/blog/21x9/berries.jpg"
import img01_16x9 from "../images/blog/16x9/berries.jpg"
import img01_3x2 from "../images/blog/3x2/berries.jpg"
import img01_4x3 from "../images/blog/4x3/berries.jpg"
import calories2_4x3 from "../images/blog/4x3/calories2.jpg"
import mealprep_4x3 from "../images/blog/4x3/mealprep.jpg"
import belly_4x3 from "../images/blog/4x3/belly.jpg"
import breakpoints from "../theme/breakpoints"

class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Figure caption="Photo from pexels.com">
          <picture>
            <source
              srcSet={img01_4x1}
              media={`(min-width: ${breakpoints.xl})`}
            />
            <source
              srcSet={img01_21x9}
              media={`(min-width: ${breakpoints.lg})`}
            />
            <source
              srcSet={img01_16x9}
              media={`(min-width: ${breakpoints.md})`}
            />
            <source
              srcSet={img01_3x2}
              media={`(min-width: ${breakpoints.sm})`}
            />
            <img src={img01_21x9} alt="Berries" />
          </picture>
        </Figure>
        <Section>
          <H1>Blog</H1>
          <p> The latest health, nutrition, and fitness information for you!</p>
          <Figure caption="Photos from pexels.com">
            <div class="row">
              <smallpicture class="column">
                <source
                  srcSet={calories2_4x3}
                  media={`(min-width: ${breakpoints.sm})`}
                />
                <img src={calories2_4x3} alt="Berries" />
              </smallpicture>
              <smallpicture class="column">
                <source
                  srcSet={mealprep_4x3}
                  media={`(min-width: ${breakpoints.sm})`}
                />
                <img src={mealprep_4x3} alt="Berries" />
              </smallpicture>
              <smallpicture class="column">
                <source
                  srcSet={belly_4x3}
                  media={`(min-width: ${breakpoints.sm})`}
                />
                <img src={belly_4x3} alt="Berries" />
              </smallpicture>
            </div>
          </Figure>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <Heading as="h3" fontSize={3}>
                  <Link to={node.fields.slug}>{title}</Link>
                </Heading>
                <small>{node.frontmatter.date}</small>
                <Text
                  mt={"1rem"}
                  mb={"2rem"}
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
            )
          })}
        </Section>
      </Layout>
    )
  }
}

export default BlogPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
