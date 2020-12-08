module.exports = {
  siteMetadata: {
    title: `Hairstylist Hair by B`,
    description: `Hairstylist Hair by B.  Making Wesley Chapel and Lutz hair reflect their story and spirit.  Dominican salon style`,
    author: `@Bruni`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#F3F3ED`,
        theme_color: `#707070`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-anchor-links`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:300,400,700`,
          `Lobster\:400`,
          `Open Sans\:300,400,400i,700`,
        ],
        display: "swap",
      },
    },
  ],
}
