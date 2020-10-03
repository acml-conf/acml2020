module.exports = {
  pathPrefix: `/2020`,
  siteMetadata: {
    title: `ACML 2020`,
    description: `12th Asian Conference on Machine Learning, November 18-20 2020, Bangkok, Thailand 🇹🇭`,
    author: `ACML 2020 Team`,
    url: `http://www.acml-conf.org/2020`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
          name: `content`,
          path: `${__dirname}/src/content`
      }
    },
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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-build-date`,
      options: {
        formatting: {
          format: 'DD/MM/YYYY', // string, defaults to "MM/DD/YYYY" - pass in any acceptable date-and-time format
          utc: true, // boolean, defaults to false - output time as UTC or not, following date-and-time API
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
      }
    }
  ],
}
