export default async function (eleventyConfig) {
  // Copy the contents of the `public` folder to the output folder
  // For example, `./public/css/` ends up in `_site/css/`
  eleventyConfig.addPassthroughCopy({
    "./public/": "/",
  });

  // Copy '_headers' to '_site/_headers' which is used by netlify dev and Visua Editor
  eleventyConfig.addPassthroughCopy("_headers");

  // Filter: Stringify JSON
  eleventyConfig.addFilter("json", function (value) {
    return JSON.stringify(value, null, 2);
  });

  // Shortcode: Current date and time in YYYY-MM-DD HH:MM:SS format
  eleventyConfig.addShortcode("now", function () {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  });
  eleventyConfig.setServerOptions({
    // Show local network IP addresses for device testing
    showAllHosts: true,
  });

  /* 
     Return your Object options:
  */
  return {
    dir: {
      input: "content",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      markdownTemplateEngine: "njk",
    },
  };
}
