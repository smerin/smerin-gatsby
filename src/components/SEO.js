import React from "react";
import Helmet from "react-helmet";
import { getSrc } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

export const SEO = ({
  title,
  titleTemplate,
  description,
  image,
  pathname,
  article
}) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          defaultTitleTemplate,
          defaultDescription,
          siteUrl,
          defaultImage,
          twitterUsername
        }
      }
    }) => {
      const seo = {
        title: title || defaultTitle,
        titleTemplate: titleTemplate || defaultTitleTemplate,
        description: description || defaultDescription,
        image: `${siteUrl}${getSrc(image) || defaultImage}`,
        url: `${siteUrl}${pathname ? pathname : ""}/`
      };

      return (
        <>
          <Helmet title={seo.title} titleTemplate={seo.titleTemplate}>
            <link rel="canonical" href={seo.url} />
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta property="fb:app_id" content={process.env.GATSBY_FB_APP_ID} />

            {/* Open Graph data */}
            {seo.title && <meta property="og:title" content={seo.title} />}
            <meta
              property="og:type"
              content={article ? "article" : "website"}
            />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {seo.image && <meta property="og:image" content={seo.image} />}
            {/* {seo.image && <meta property="og:image:width" content={1200} />}
            {seo.image && <meta property="og:image:height" content={630} />} */}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}

            {/* Twitter Card data */}
            <meta name="twitter:card" content="summary_large_image" />
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
              <meta name="twitter:description" content={seo.description} />
            )}
            {twitterUsername && (
              <meta name="twitter:creator" content={twitterUsername} />
            )}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
          </Helmet>
        </>
      );
    }}
  />
);

export default SEO;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultTitleTemplate: titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.object,
  pathname: PropTypes.string,
  article: PropTypes.bool
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false
};
