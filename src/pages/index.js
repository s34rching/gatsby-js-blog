import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Someone's blog</h1>
      <h4>{data.allMarkdownRemark.totalCount}</h4>
      {
        data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <span>{node.frontmatter.title} - {node.frontmatter.date}</span>
            <p>{node.excerpt}</p>
          </div>
        ))
      }
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage;
export const query = graphql`
  query {
    allMarkdownRemark {
    totalCount
      edges {
        node {
          id
          frontmatter {
            description
            title
            date
          }
          excerpt
        }
      }
    }
  }
`;
