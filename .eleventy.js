module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy('css');

  let markdownIt = require("markdown-it");
  var markdownItAttrs = require('markdown-it-attrs');
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  let markdownLib = markdownIt(options).use(markdownItAttrs);
  eleventyConfig.setLibrary("md", markdownLib);

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