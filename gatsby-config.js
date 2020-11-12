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
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `/static/favicon.svg`,
      }
    }
  ],
  siteMetadata: {
    title: "John Hodgson Theatre Research Trust",
    description:
      "",
    url: "https://jhtrt.org.uk",
    image: "/static/favicon.svg",
  },
}
