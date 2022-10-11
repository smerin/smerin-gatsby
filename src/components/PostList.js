import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import * as style from "./PostList.module.scss";

const PostList = ({ posts }) => {
  return (
    <ul>
      {posts.map(({ node: post }, index) => {
        const { path, title, date, excerpt, banner } = post.frontmatter;
        return (
          <li key={index} className={style.post}>
            <Link to={path}>
              <Img alt={title} fluid={banner.childImageSharp.fluid} />
            </Link>
            <h2>{title}</h2>
            <p>{date}</p>
            <p>{excerpt}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;
