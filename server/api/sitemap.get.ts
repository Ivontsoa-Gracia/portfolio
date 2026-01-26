export default defineEventHandler((event) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
                      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

  <url>
    <loc>https://nerah-agency.vercel.app/</loc>
    <lastmod>2025-10-12</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>https://nerah-agency.vercel.app/main</loc>
    <lastmod>2025-10-12</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://nerah-agency.vercel.app/portfolio</loc>
    <lastmod>2025-10-12</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://nerah-agency.vercel.app/services</loc>
    <lastmod>2025-10-12</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>

</urlset>`;

  setHeader(event, 'Content-Type', 'application/xml');

  setHeader(event, 'Cache-Control', 'no-store'); 
  setHeader(event, 'Content-Encoding', 'identity');
  
  return sitemap;
});
