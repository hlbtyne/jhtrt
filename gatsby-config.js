/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-prismic-graphql',
        options: {
          repositoryName: 'jhtrt', 
          langs: ['en-gb'],
          defaultLang: 'en-gb',
          previews: true,
          
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
      },
    },
  ],
}
