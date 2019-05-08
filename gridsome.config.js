// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'pointud.com',
  siteUrl: 'https://www.pointud.com',
  siteDescription: 'Mathieu Pointud - Intégrateur Web HTML CSS à Clermont-Ferrand, Puy-de-Dôme 63, Auvergne',
  plugins: [
    {
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/'],
        width: 1300,
        height: 900
      }
    },
    {
      use: '@gridsome/plugin-sitemap'
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/*.md',
        typeName: 'BlogPost',
        route: 'blog/:slug'
      }
    }
  ]
}