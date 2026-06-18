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

  eleventyConfig.addPassthroughCopy({
    "wtws/public/index.html": "index.html"
  });

  return {
    dir: {
      input: "wtws/src",
      output: "_site"
    }
  };
};