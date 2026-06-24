// XSS variant: Vue v-html directive renders raw HTML (FN target — framework sink).
const app = { data() { return { q: new URLSearchParams(location.search).get('q') }; },
  template: '<div v-html="q"></div>' }; // SINK CWE-79 (Vue v-html)
module.exports = app;
