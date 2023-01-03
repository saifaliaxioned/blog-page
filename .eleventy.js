module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addCollection("post", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blogs/*.md");
  });
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
}