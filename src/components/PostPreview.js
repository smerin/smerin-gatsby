import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import * as style from "./PostPreview.module.scss";

const PostPreview = ({ post }) => {
  const { path, title, date, excerpt, banner } = post.frontmatter;

  return (
    <div className={style.preview}>
      <Link to={path}>
        <Img alt={title} fluid={banner.childImageSharp.fluid} />
      </Link>
      <div className={style.content}>
        <h3>
          <Link to={path}>{title}</Link>
        </h3>
        <p>{date}</p>
        <p>{excerpt}</p>
        {/* <LinkButton className="button" url={path}>
        Read more
      </LinkButton> */}
      </div>
    </div>
  );
};

export default PostPreview;
