module.exports = function(eleventyConfig) {

  eleventyConfig.addFilter("countryName", function(code) {
    if (!code) return "";
    return code
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  });

  eleventyConfig.addPassthroughCopy({
    "wtws/public/css": "css"
  });

  eleventyConfig.addPassthroughCopy({
    "wtws/public/js": "js"
  });

  eleventyConfig.addPassthroughCopy({
    "wtws/public/admin": "admin"
  });

  eleventyConfig.addPassthroughCopy({
    "wtws/public/images": "images"
  });

  eleventyConfig.addPassthroughCopy({
  "wtws/public/google10488c8b4d731a4e.html": "google10488c8b4d731a4e.html"
});

  return {
    dir: {
      input: "wtws/src",
      includes: "layouts",
      output: "_site"
    }
  };
};
