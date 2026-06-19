module.exports = function(eleventyConfig) {

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

  return {
    dir: {
      input: "wtws/src",
      includes: "layouts",
      output: "_site"
    }
  };
};