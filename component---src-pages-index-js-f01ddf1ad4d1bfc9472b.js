(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RXBc:function(n,t,e){"use strict";e.r(t),e.d(t,"query",(function(){return s}));var a=e("q1tI"),r=e.n(a),i=(e("hZiR"),e("vOnD")),u=e("AF9i");function c(){var n=d(["\n   display: flex;\n    flex-direction: column;\n    justify-content: center;\n    max-width: 500px;\n    margin: 8px auto 30px;\n    padding: 40px 20px;\n    border: 1px solid rgba(0,0,0,0.1);\n    @media (min-width: 950px) {\n      margin: 8px 20px 30px 20px;\n    }\n"]);return c=function(){return n},n}function o(){var n=d(["\n  @media (min-width: 950px) {\n    display: flex;\n    justify-content: center;\n    max-width: 1200px;\n    margin: 50px auto;\n  }\n  padding: 0 20px;\n  margin: 50px;\n"]);return o=function(){return n},n}function d(n,t){return t||(t=n.slice(0)),n.raw=t,n}var l=i.a.div(o()),p=i.a.div(c()),m=function(n){var t=n.cardsData.map((function(n){return r.a.createElement(p,null,r.a.createElement("div",null,r.a.createElement(u.a,{content:n.card_text[0]})))}));return r.a.createElement(l,null,t)},f=e("gMrH"),x=e("SMfn"),s={id:"370114636",source:'\n{\n  prismic {\n    page(lang: "en-gb", uid: "home") {\n      quote\n      body1 {\n        ... on PRISMIC_PageBody1Info_card {\n          type\n          fields {\n            card_text\n          }\n        }\n      }\n      _meta {\n        uid\n      }\n      page_text\n    }\n  }\n}\n',toString:function(){return this.id}};t.default=function(n){var t=n.data,e=t.prismic.page.quote[0],a=t.prismic.page.body1[0].fields;return r.a.createElement("div",null,r.a.createElement(x.a,null),e?r.a.createElement(f.a,{quoteData:e}):null,a.length?r.a.createElement(m,{cardsData:a}):null)}},gMrH:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var a=e("q1tI"),r=e.n(a),i=e("vOnD"),u=e("AF9i");function c(){var n=function(n,t){t||(t=n.slice(0));return n.raw=t,n}(["\n    margin: 20px; \n  "]);return c=function(){return n},n}var o=function(n){var t=n.quoteData,e=i.a.div(c());return r.a.createElement(e,null,r.a.createElement(u.a,{content:t}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-f01ddf1ad4d1bfc9472b.js.map