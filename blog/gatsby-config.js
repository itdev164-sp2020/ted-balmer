require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `Gatsby Blog`,
    description: `ITDEV-164 Gatsby Blog.`,
    author: `Ted Balmer`,
    contact: {
      name: `Ted Balmer`,
      company: `Blogs Inc.`,
      address: `PO Box 12345`
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        //spaceId: `${process.env.SPACE_ID}`,
        //accessToken: `${process.env.ACCESS_TOKEN}`
        spaceId: 'jq5u5655jt6n',
        accessToken: 'vWbc68JHXz9lXScr-rRE__FzK-z4RwSW2ML6WBNCwG8'
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
