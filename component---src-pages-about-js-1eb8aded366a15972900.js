(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"3XHS":function(n,t,e){"use strict";e.r(t),e.d(t,"query",(function(){return p})),e.d(t,"AboutPage",(function(){return d}));var r=e("q1tI"),a=e.n(r),i=e("SMfn"),u=e("gMrH"),c=e("diRT"),o=e("rQ/Z"),l=e("n367"),p={id:"2415576950",source:'\n{\n  prismic {\n    page(lang: "en-gb", uid: "about-john-hodgson") {\n      quote\n      _meta {\n        uid\n      }\n      page_text\n      title\n      body1 {\n        ... on PRISMIC_PageBody1Info_card {\n          type\n          fields {\n            card_text\n          }\n        }\n        ... on PRISMIC_PageBody1Past_projects {\n          type\n          label\n          primary {\n            past_projects_title\n          }\n          fields {\n            project_date\n            project_description\n            researcher_name\n          }\n        }\n      }\n    }\n  }\n}\n',toString:function(){return this.id}},d=function(n){var t=n.data,e=t.prismic.page.quote[0],r=t.prismic.page.title[0],p=t.prismic.page.page_text;return a.a.createElement("div",null,a.a.createElement(i.a,null),e?a.a.createElement(u.a,{quoteData:e}):null,a.a.createElement(l.a,null,r?a.a.createElement(c.a,{titleData:r}):null,p.length?a.a.createElement(o.a,{textData:p}):null))};t.default=d},diRT:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var r=e("q1tI"),a=e.n(r),i=e("vOnD"),u=e("AF9i");function c(){var n=function(n,t){t||(t=n.slice(0));return n.raw=t,n}(["\n    margin: 20px; \n  "]);return c=function(){return n},n}var o=function(n){var t=n.titleData,e=i.a.div(c());return a.a.createElement(e,null,a.a.createElement(u.a,{content:t}))}},gMrH:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var r=e("q1tI"),a=e.n(r),i=e("vOnD"),u=e("AF9i");function c(){var n=function(n,t){t||(t=n.slice(0));return n.raw=t,n}(["\n    margin: 20px; \n  "]);return c=function(){return n},n}var o=function(n){var t=n.quoteData,e=i.a.div(c());return a.a.createElement(e,null,a.a.createElement(u.a,{content:t}))}},n367:function(n,t,e){"use strict";function r(){var n=function(n,t){t||(t=n.slice(0));return n.raw=t,n}(["\n  @media (min-width: 600px) {\n    margin: 50px 20px 80px;\n    }\n  @media (min-width: 900px) {\n    margin: 50px auto 80px;\n    max-width: 800px;\n    }\n  margin: 50px 0;\n"]);return r=function(){return n},n}e.d(t,"a",(function(){return a}));var a=e("vOnD").a.div(r())},"rQ/Z":function(n,t,e){"use strict";e.d(t,"a",(function(){return f}));var r=e("q1tI"),a=e.n(r),i=e("vOnD"),u=e("AF9i");function c(){var n=l(["\n    margin: 0 0 20px 0;\n"]);return c=function(){return n},n}function o(){var n=l(["\n    margin: 20px 20px 50px 20px; \n"]);return o=function(){return n},n}function l(n,t){return t||(t=n.slice(0)),n.raw=t,n}var p=i.a.div(o()),d=i.a.div(c()),f=function(n){var t=n.textData.map((function(n){return a.a.createElement(d,null,a.a.createElement("div",null,a.a.createElement(u.a,{content:n})))}));return a.a.createElement(p,null,t)}}}]);
//# sourceMappingURL=component---src-pages-about-js-1eb8aded366a15972900.js.map