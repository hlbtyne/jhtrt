(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{RXBc:function(n,e,t){"use strict";t.r(e),t.d(e,"query",(function(){return m}));var a=t("q1tI"),r=t.n(a),i=(t("hZiR"),t("vOnD")),c=t("AF9i");function u(){var n=o(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin: 8px 20px 30px 20px;\n    padding: 40px 20px;\n    border: 1px solid rgba(0,0,0,0.1);\n    /* box-shadow: 2px 2px 10px silver; */\n    @media (min-width: 900px) {\n      max-width: 300px;\n    }\n"]);return u=function(){return n},n}function d(){var n=o(["\n  @media (min-width: 900px) {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n  padding: 0 20px;\n"]);return d=function(){return n},n}function o(n,e){return e||(e=n.slice(0)),n.raw=e,n}var l=i.a.div(d()),p=i.a.div(u()),f=function(n){var e=n.cardsData.map((function(n){return r.a.createElement(p,null,r.a.createElement("div",null,r.a.createElement(c.a,{content:n.card_text[0]})))}));return r.a.createElement(l,null,e)},x=t("gMrH"),s=t("SMfn"),m={id:"370114636",source:'\n{\n  prismic {\n    page(lang: "en-gb", uid: "home") {\n      quote\n      body1 {\n        ... on PRISMIC_PageBody1Info_card {\n          type\n          fields {\n            card_text\n          }\n        }\n      }\n      _meta {\n        uid\n      }\n      page_text\n    }\n  }\n}\n',toString:function(){return this.id}};e.default=function(n){var e=n.data,t=e.prismic.page.quote[0],a=e.prismic.page.body1[0].fields;return r.a.createElement("div",null,r.a.createElement(s.a,null),t?r.a.createElement(x.a,{quoteData:t}):null,a.length?r.a.createElement(f,{cardsData:a}):null)}},hZiR:function(n,e,t){}}]);
//# sourceMappingURL=component---src-pages-index-js-e98d1deb067c482746b8.js.map