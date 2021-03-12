module.exports = {
  pathPrefix: `/working-notes`,
  siteMetadata: {
    title: `Adit's Public Working Notes`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        rootNote: "/home",
        contentPath: `${__dirname}/..`,
        ignore: [
          "**/_layouts/**",
          "**/.git/**",
          "**/readme.md",
          "**/.github/**",
          "**/.vscode/**",
        ],
      },
    },
  ],
};
