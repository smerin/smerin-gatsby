import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import SEO from "../components/SEO";
import Template from "../components/Template";
import PageBanner from "../components/PageBanner";

class MusicPage extends Component {
  render() {
    const { banner, previewImage } = this.props.data;

    return (
      <Template location={this.props.location}>
        <SEO
          title="Guitarist, kora player and world music enthusiast"
          description="Tutorial videos and articles on guitar, kora and world music. Join me on a journey in discovering music from around the world!"
          pathname="/music"
          image={previewImage.childImageSharp.gatsbyImageData}
        />
        <PageBanner
          title="Music"
          subtitle="Join me on a journey in discovering music from around the world!"
          banner={banner}
        />
        <div className="container">
          <div className="content">
            <h1>Guitarist &amp; kora player</h1>
            <p>
              I'm on a life-long mission to learn to play the guitar and (more
              recently) the Kora, a type of harp from West Africa. You can see
              videos of my playing and get the latest updates on{" "}
              <a href="http://www.facebook.com/smerin" target="_blank">
                Facebook
              </a>
              ,{" "}
              <a href="http://www.youtube.com/smerin" target="_blank">
                YouTube
              </a>{" "}
              and{" "}
              <a href="http://www.instagram.com/smerin" target="_blank">
                Instagram
              </a>
              .
            </p>
            <h2>My story...</h2>
            <p>
              After picking up the Spanish guitar aged 13, I quickly became
              fascinated by choro music from Brazil. My love of music from all
              around the world had begun! In 2001, I founded{" "}
              <a href="http://www.smerins.com" target="_blank">
                Smerin's Anti-Social Club
              </a>{" "}
              with the same group of friends that still play in the band to this
              day. The Buena Vista covers are long gone now, replaced with an
              eclectic blend of influences and an energy that have seen the band
              become regulars on the UK's festival circuit.
            </p>

            <p>
              In recent years, I've taken up playing the kora and fallen in love
              with the music of the Mandinka people of West Africa. In 2018 I
              travelled to Senegal and The Gambia, and encountered some
              incredible musicians who I have written about in the blog,
              including{" "}
              <Link to="/mafu-conteh-gambian-kora-player">Mafu Conteh</Link>,{" "}
              <Link to="/watcha-jola-akonting-kamale-ngoni">Watcha</Link> and{" "}
              <Link to="/alia-balafon-abene-festival">Alia balafon</Link>.
            </p>

            <blockquote>
              <p>
                “It must be a great feeling to know that you’ve made your own
                name a synonym for good-time fun, but that’s just what George
                Smerin has achieved with his eponymous Anti-Social Club.” Tony
                Benjamin, Venue Magazine 2014
              </p>
            </blockquote>
            <p>Thanks Tony, it certainly is! 😃</p>
          </div>
        </div>
      </Template>
    );
  }
}

export default MusicPage;

export const musicBannerQuery = graphql`
  query {
    banner: file(relativePath: { eq: "music-banner.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    previewImage: file(relativePath: { eq: "preview/music-preview.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 1200, height: 630)
      }
    }
  }
`;
