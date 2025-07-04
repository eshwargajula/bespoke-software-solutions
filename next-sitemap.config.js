/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.bespokesoftware.in', // ✅ no trailing slash
  generateRobotsTxt: true, // ✅ creates robots.txt
  sitemapSize: 5000,
  generateIndexSitemap: true,
  exclude: ['/404', '/500'], // Exclude error pages
  changefreq: 'weekly',
  priority: 0.7,
  alternateRefs: [], // For future multilingual versions if needed
};
