const config = {
  siteTitle: 'Česko.Digital Blog', // Site title.
  siteTitleAlt: 'Česko.Digital Blog', // Alternative site title for SEO.
  siteLogo: '/logos/logo.svg', // Logo used for SEO and manifest.
  siteUrl: 'https://blog.cesko.digital/', // Domain of your website without pathPrefix.
  siteImage: 'https://data.cesko.digital/img/172a1526.png', // Image to use in Open Graph metadata
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: 'Skrz jedničky a nuly měníme svět k lepšímu.', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteDefaultLanguage: 'cs',
  siteFBAppID: '', // FB Application ID for using app insights
  googleTagManagerId: 'GTM-KTZCXT7', // GA tracking ID.
  dateFromFormat: 'YYYY-MM-DD-HH-mm', // Date format used in the frontmatter.
  twitter: 'CeskoDigital', // Optionally renders "Follow Me" in the UserInfo segment.
  copyright: 'Copyright © Česko.Digital', // Copyright string for the footer of the website and RSS feed.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`;

module.exports = config;
