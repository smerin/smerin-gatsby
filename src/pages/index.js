import React, { Component } from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Template from "../components/Template";
import PageBanner from "../components/PageBanner";
import PostGrid from "../components/PostGrid";

class HomePage extends Component {
  render() {
    const {
      banner,
      previewImage,
      allMarkdownRemark: { edges: posts }
    } = this.props.data;

    return (
      <Template location={this.props.location}>
        <SEO
          title="George Smerin | Musician and web developer from Bristol, UK"
          titleTemplate="%s"
          pathname=""
          image={previewImage.childImageSharp.gatsbyImageData}
          description="Welcome to the website of George Smerin, musician and web developer from Bristol (UK). Read all about my recent adventures in music and technology."
        />
        <PageBanner
          title="George Smerin"
          subtitle="Musician and web developer from Bristol, UK"
          banner={banner}
        />
        <PostGrid posts={posts} title="Latest from the blog" />
      </Template>
    );
  }
}

export default HomePage;

export const homePageQuery = graphql`
  query {
    banner: file(relativePath: { eq: "home-banner.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    previewImage: file(relativePath: { eq: "preview/home-preview.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 1200, height: 630)
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 6
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            date(formatString: "MMMM DD, YYYY")
            excerpt
            previewImage {
              childImageSharp {
                gatsbyImageData(width: 600)
              }
            }
          }
        }
      }
    }
  }
`;
