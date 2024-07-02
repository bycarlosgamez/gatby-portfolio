module.exports = {
  siteMetadata: {
    pathPrefix: '/gatsby-portfolio',
    title: 'Gatsby Portfolio',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-favicons',
      options: {
        logo: './src/images/icon.png',
        appName: 'Daniel D',
        background: '#fff',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          yandex: false,
          windows: false,
        },
      },
    },
  ],
};
