import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import * as style from "./PostGrid.module.scss";

const PostGrid = ({ title, posts }) => {
  const defaultPreviewImage = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "preview/default-preview.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className={style.postGrid}>
      <div className="container">
        {title && <h2>{title}</h2>}
        <ul>
          {posts.map((post, index) => {
            const {
              path,
              title,
              date,
              excerpt,
              previewImage
            } = post.node.frontmatter;

            return (
              <li key={index} className={style.post}>
                <Link to={path}>
                  {previewImage ? (
                    <Img
                      alt={title}
                      fluid={previewImage.childImageSharp.fluid}
                    />
                  ) : (
                    <Img
                      alt={title}
                      fluid={defaultPreviewImage.image.childImageSharp.fluid}
                    />
                  )}
                </Link>
                <h3>
                  <Link to={path}>{title}</Link>
                </h3>
                <p>{excerpt}</p>
                {/* <LinkButton className="button" url={path}>
                    Read more
                  </LinkButton> */}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PostGrid;
