import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import * as style from "./PostGrid.module.scss";

const PostGrid = ({ title, posts }) => {
  const defaultPreviewImage = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "preview/default-preview.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 600)
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
                    <GatsbyImage
                      alt={title}
                      image={previewImage.childImageSharp.gatsbyImageData}
                    />
                  ) : (
                    <StaticImage
                      alt={title}
                      src="../images/preview/default-preview.jpg"
                    />
                  )}
                </Link>
                <h3>
                  <Link to={path}>{title}</Link>
                </h3>
                <p>{excerpt}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PostGrid;
