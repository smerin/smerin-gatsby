import React, { Component } from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Template from "../components/Template";
import PageBanner from "../components/PageBanner";
import WebsitesContent from "../components/WebsitesContent";

class WebsitesPage extends Component {
  render() {
    const { banner } = this.props.data;

    return (
      <Template location={this.props.location}>
        <SEO
          title="React JS / JavaScript front-end developer in Bristol"
          description="Front-end developer specialising in React JS, JavaScript, Gatsby, GraphQL and Node JS. Strong UX / UI skills. Call 07887 868522 or email mail@smerin.com"
        />
        <PageBanner
          title="Websites"
          subtitle="I love building beautiful and user-friendly websites and apps"
          banner={banner}
        />
        <WebsitesContent />
      </Template>
    );
  }
}

export default WebsitesPage;

export const websitesBannerQuery = graphql`
  query {
    banner: file(relativePath: { eq: "websites-banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;