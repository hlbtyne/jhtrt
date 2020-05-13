const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/harrietballantyne/Dev/jhtrt/jhtrt-site/.cache/dev-404-page.js"))),
  "component---node-modules-gatsby-source-prismic-graphql-components-preview-page-js": hot(preferDefault(require("/Users/harrietballantyne/Dev/jhtrt/jhtrt-site/node_modules/gatsby-source-prismic-graphql/components/PreviewPage.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/harrietballantyne/Dev/jhtrt/jhtrt-site/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/harrietballantyne/Dev/jhtrt/jhtrt-site/src/pages/index.js"))),
  "component---src-pages-legacy-js": hot(preferDefault(require("/Users/harrietballantyne/Dev/jhtrt/jhtrt-site/src/pages/legacy.js"))),
  "component---src-pages-submissions-js": hot(preferDefault(require("/Users/harrietballantyne/Dev/jhtrt/jhtrt-site/src/pages/submissions.js"))),
  "component---src-pages-trustees-js": hot(preferDefault(require("/Users/harrietballantyne/Dev/jhtrt/jhtrt-site/src/pages/trustees.js")))
}

