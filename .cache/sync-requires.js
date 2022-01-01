const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/thomashall/Dev/thall1961.github.io/src/pages/404.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/thomashall/Dev/thall1961.github.io/src/pages/index.tsx"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/thomashall/Dev/thall1961.github.io/src/templates/blog-post.js")))
}

