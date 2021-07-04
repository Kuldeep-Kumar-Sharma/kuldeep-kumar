module.exports = {
  siteMetadata: {
    title: "Kuldeep Kumar",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
