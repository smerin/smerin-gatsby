module.exports = {
  siteMetadata: {
    title: "Standard title",
    titleTemplate: "%s | George Smerin",
    description: "Musician and web developer from Bristol, UK",
    url: "https://www.smerin.com",
    image: "/images/george.jpg",
    twitterUsername: "@smerindigital"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/content/blog`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              height: 450,
              related: false,
              noIframeBorder: true,
            }
          },
          "gatsby-remark-responsive-iframe"
        ]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://smerin.us7.list-manage.com/subscribe/post?u=a0980efdba90a553e9659ac7e&amp;id=b2e86e08f0"
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-11627534-6"
      }
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en"
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "smerin.com",
        short_name: "smerin.com",
        start_url: "/",
        background_color: "#333333",
        theme_color: "#00a6cc",
        icon: "src/images/icon.png",
        display: "fullscreen"
      }
    },
    "gatsby-plugin-offline"
  ]
};
