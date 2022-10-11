import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { LinkButton } from "./Buttons";
import Mailchimp from "./Mailchimp";
import * as style from "./KoraFeature.module.scss";

const KoraFeature = ({ data: { banner } }) => {
  return (
    <div className={style.feature}>
      <div className="container">
        <div className={style.intro}>
          <h2>Kora Diaries</h2>
          <p>
            Join me on a journey in learning to play the kora, <br />a
            traditional harp from West Africa
          </p>

          <Mailchimp title="Subscribe for updates" />
        </div>

        {/* <LinkButton className="button" url="/kora-diaries">
          Go to diaries
        </LinkButton> */}
        {/* <div className={style.background}>
          <Img fluid={banner.childImageSharp.fluid} />
        </div> */}
      </div>
    </div>
  );
};

// export default KoraFeature;

export default props => (
  <StaticQuery
    query={graphql`
      query {
        banner: file(relativePath: { eq: "kora-banner-light.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 3600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <KoraFeature data={data} {...props} />}
  />
);
