require('dotenv').config();
const fs = require('fs');
const { createClient } = require('contentful');
const xml2js = require('xml2js');

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
});

const builder = new xml2js.Builder({
  rootName: 'urlset',
  xmldec: { version: '1.0', encoding: 'UTF-8' },
  headless: true
});

(async () => {
  try {
    const entries = await client.getEntries({
      content_type: 'blogPage',
    });
    const urls = entries.items.map(entry => ({
      url: {
        loc: `https://linkedgage.com/blog/${entry.fields.slug}`,
        lastmod: new Date(entry.sys.updatedAt).toISOString(),
        priority: 0.9,
        changefreq: 'weekly'
      }
    }));

    const sitemapObj = { urlset: { url: urls } };
    const xml = builder.buildObject(sitemapObj);
    fs.writeFileSync('./public/sitemap-blogs.xml', xml);
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Failed to generate sitemap:', error);
  }
})();
