module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          'G-E51S0E1JG0', // Google Analytics / GA
        ],
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
  ],
};
