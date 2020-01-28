// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-service-js": () => import("/mnt/d/Data/HTML/gatsby-serif/src/templates/service.js" /* webpackChunkName: "component---src-templates-service-js" */),
  "component---src-templates-team-js": () => import("/mnt/d/Data/HTML/gatsby-serif/src/templates/team.js" /* webpackChunkName: "component---src-templates-team-js" */),
  "component---src-templates-testimonial-js": () => import("/mnt/d/Data/HTML/gatsby-serif/src/templates/testimonial.js" /* webpackChunkName: "component---src-templates-testimonial-js" */),
  "component---cache-dev-404-page-js": () => import("/mnt/d/Data/HTML/gatsby-serif/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/mnt/d/Data/HTML/gatsby-serif/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-contact-index-js": () => import("/mnt/d/Data/HTML/gatsby-serif/src/pages/contact/index.js" /* webpackChunkName: "component---src-pages-contact-index-js" */),
  "component---src-pages-index-js": () => import("/mnt/d/Data/HTML/gatsby-serif/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-services-index-js": () => import("/mnt/d/Data/HTML/gatsby-serif/src/pages/services/index.js" /* webpackChunkName: "component---src-pages-services-index-js" */),
  "component---src-pages-team-index-js": () => import("/mnt/d/Data/HTML/gatsby-serif/src/pages/team/index.js" /* webpackChunkName: "component---src-pages-team-index-js" */),
  "component---src-pages-testimonials-index-js": () => import("/mnt/d/Data/HTML/gatsby-serif/src/pages/testimonials/index.js" /* webpackChunkName: "component---src-pages-testimonials-index-js" */)
}

exports.data = () => import("/mnt/d/Data/HTML/gatsby-serif/.cache/data.json")

