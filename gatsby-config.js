module.exports = {
  siteMetadata: {
    title: `Allison Donnelly`,
    description: `Allison Donnelly is a full stack web developer and a passionate problem-solver.`,
    author: `@allisonkydy`,
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
        name: `Allison Donnelly`,
        short_name: `Allison Donnelly`,
        start_url: `/`,
        background_color: `#f4f4f4`,
        theme_color: `#00ba94`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
