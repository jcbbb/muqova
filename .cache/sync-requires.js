const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/home/jc/Data/HTML/muqova/src/pages/404.js"))),
  "component---src-pages-contact-index-js": hot(preferDefault(require("/home/jc/Data/HTML/muqova/src/pages/contact/index.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/jc/Data/HTML/muqova/src/pages/index.js"))),
  "component---src-pages-services-index-js": hot(preferDefault(require("/home/jc/Data/HTML/muqova/src/pages/services/index.js"))),
  "component---src-pages-team-index-js": hot(preferDefault(require("/home/jc/Data/HTML/muqova/src/pages/team/index.js"))),
  "component---src-templates-service-js": hot(preferDefault(require("/home/jc/Data/HTML/muqova/src/templates/service.js"))),
  "component---src-templates-team-js": hot(preferDefault(require("/home/jc/Data/HTML/muqova/src/templates/team.js")))
}

