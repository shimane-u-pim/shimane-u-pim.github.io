import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: '島根大学ものづくり部 Pim',
    siteUrl: `https://pim-shimane.com`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/locales`,
        name: `locale`
      }
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`ja`, `en`],
        defaultLanguage: `ja`,
        fallbackLanguage: 'ja',
        siteUrl: `https://pim-shimane.com`,
        // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
        trailingSlash: 'always',
        redirect: false,
        generateDefaultLanguagePage: true,
        // you can pass any i18next options
        i18nextOptions: {
          keySeparator: false,
          nsSeparator: false
        }
      }
    },
  ],
}


export default config
