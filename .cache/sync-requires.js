// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-service-js": preferDefault(require("/mnt/d/Data/HTML/gatsby-serif/src/templates/service.js")),
  "component---src-templates-team-js": preferDefault(require("/mnt/d/Data/HTML/gatsby-serif/src/templates/team.js")),
  "component---src-templates-testimonial-js": preferDefault(require("/mnt/d/Data/HTML/gatsby-serif/src/templates/testimonial.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/mnt/d/Data/HTML/gatsby-serif/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/mnt/d/Data/HTML/gatsby-serif/src/pages/404.js")),
  "component---src-pages-contact-index-js": preferDefault(require("/mnt/d/Data/HTML/gatsby-serif/src/pages/contact/index.js")),
  "component---src-pages-index-js": preferDefault(require("/mnt/d/Data/HTML/gatsby-serif/src/pages/index.js")),
  "component---src-pages-services-index-js": preferDefault(require("/mnt/d/Data/HTML/gatsby-serif/src/pages/services/index.js")),
  "component---src-pages-team-index-js": preferDefault(require("/mnt/d/Data/HTML/gatsby-serif/src/pages/team/index.js")),
  "component---src-pages-testimonials-index-js": preferDefault(require("/mnt/d/Data/HTML/gatsby-serif/src/pages/testimonials/index.js"))
}

