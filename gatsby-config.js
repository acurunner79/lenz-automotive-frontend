/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Lenz Automtive`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-styled-components",
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `gatsby-starter-default`,
      short_name: `starter`,
      start_url: `/`,
      background_color: `#000000`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/images/favicon-icon.png`, // This path is relative to the root of the site.
    },
  },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Kanit`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ]
};