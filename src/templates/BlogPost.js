import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Template, SEO, ContentFeature, Mailchimp } from "../components";
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
        image={previewImage.childImageSharp.fixed.src}
        article
      />
      <div className={style.banner}>
        {banner && (
          <div>
            <Img alt={title} fluid={banner.childImageSharp.fluid} />
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
            fixed(width: 1200, height: 630) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        banner {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        seoTitle
        seoDescription
      }
    }
  }
`;
