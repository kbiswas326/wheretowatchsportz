module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({
    "wtws/css": "css"
  });

  eleventyConfig.addPassthroughCopy({
    "wtws/js": "js"
  });

  eleventyConfig.addPassthroughCopy({
    "wtws/admin": "admin"
  });

  eleventyConfig.addPassthroughCopy({
    "wtws/images": "images"
  });

  return {
    dir: {
      input: "wtws/src",
      includes: "layouts",
      output: "_site"
    }
  };
};