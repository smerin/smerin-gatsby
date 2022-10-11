import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Template, SEO, ContentFeature } from "../components";
import Mailchimp from "../components/Mailchimp";
import * as style from "./BlogPost.module.scss";

export default function BlogTemplate({ data, location }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  const { title, banner, previewImage, seoTitle, seoDescription } = frontmatter;

  return (
    <Template location={location.pathname}>
      <SEO
        title={seoTitle}
        description={seoDescription}
        pathname={location.pathname}
        image={previewImage.childImageSharp.gatsbyImageData}
        article
      />
      <div className={style.banner}>
        {banner && (
          <div>
            <GatsbyImage alt={title} image={banner.childImageSharp.gatsbyImageData} />
          </div>
        )}
      </div>
      <div className="container">
        <div className={style.content}>
          <h1>{title}</h1>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <ContentFeature>
            <h3>Monthly newsletter</h3>
            <p>
              I’d love to send you my latest posts, music and videos in a
              monthly email. Guaranteed no spam and you can unsubscribe at any
              time.
            </p>
            <Mailchimp />
          </ContentFeature>
        </div>
      </div>
    </Template>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        previewImage {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 1200, height: 630)
          }
        }
        banner {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        seoTitle
        seoDescription
      }
    }
  }
`;
