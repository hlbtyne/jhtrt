const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/davide/Harriet/jhtrt/.cache/dev-404-page.js"))),
  "component---node-modules-gatsby-source-prismic-graphql-components-preview-page-js": hot(preferDefault(require("/Users/davide/Harriet/jhtrt/node_modules/gatsby-source-prismic-graphql/components/PreviewPage.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/davide/Harriet/jhtrt/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/davide/Harriet/jhtrt/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/davide/Harriet/jhtrt/src/pages/index.js"))),
  "component---src-pages-legacy-js": hot(preferDefault(require("/Users/davide/Harriet/jhtrt/src/pages/legacy.js"))),
  "component---src-pages-submissions-js": hot(preferDefault(require("/Users/davide/Harriet/jhtrt/src/pages/submissions.js"))),
  "component---src-pages-trustees-js": hot(preferDefault(require("/Users/davide/Harriet/jhtrt/src/pages/trustees.js")))
}

