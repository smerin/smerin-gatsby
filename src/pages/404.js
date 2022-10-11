import React, { Component } from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Template from "../components/Template";
import PageBanner from "../components/PageBanner";
import PostGrid from "../components/PostGrid";

class Page404 extends Component {
  render() {
    const {
      banner,
    } = this.props.data;

    return (
      <Template location={this.props.location}>
        <PageBanner
          title="404"
          subtitle="Page not found"
          banner={banner}
        />
      </Template>
    );
  }
}

export default Page404;

export const page404Query = graphql`
  query {
    banner: file(relativePath: { eq: "home-banner.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
