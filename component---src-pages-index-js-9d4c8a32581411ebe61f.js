(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0bwd":function(e,n,a){e.exports=a.p+"static/6-98f38c6a0bfe6d1842051c25cf0b4316.png"},Bdqn:function(e,n,a){"use strict";a.d(n,"a",(function(){return l}));var t=a("q1tI"),r=a.n(t),i=a("vOnD"),c=a("AF9i"),d=i.a.div.withConfig({displayName:"CardSection__CardsContainer",componentId:"vrecmp-0"})(["@media (min-width:950px){display:flex;justify-content:space-between;padding:40px;}background-color:rgba(194,176,145,0.4);padding:20px;"]),o=i.a.div.withConfig({displayName:"CardSection__Card",componentId:"vrecmp-1"})(["display:flex;flex-direction:column;justify-content:center;min-width:225px;margin:0 auto 20px;padding:25px;border:",";border-radius:10px;@media (min-width:950px){margin:8px 20px;width:420px;padding:50px 25px;}"],(function(e){return e.orange?"solid 3px #db5c1a":null})),l=function(e){var n=e.cardsData,a=e.orange,t=n.map((function(e){return r.a.createElement(o,{orange:a},e.card_header&&r.a.createElement(c.a,{orange:!0,content:e.card_header[0]}),e.card_text&&r.a.createElement(c.a,{orange:!0,content:e.card_text[0]}))}));return r.a.createElement(d,null,t)}},JTnL:function(e,n,a){"use strict";a.d(n,"a",(function(){return m}));var t=a("q1tI"),r=a.n(t),i=a("vOnD"),c=a("AF9i"),d=i.a.div.withConfig({displayName:"LargeCardSection__LargeCardSectionContainer",componentId:"sc-1lhjqth-0"})(["@media (min-width:600px){margin:30px auto;}@media (min-width:900px){margin:30px auto;max-width:800px;}margin:30px 0;"]),o=i.a.div.withConfig({displayName:"LargeCardSection__LargeCard",componentId:"sc-1lhjqth-1"})(["display:flex;flex-direction:column;justify-content:start;margin:0 auto 30px;padding:40px 20px;background-color:",";border:",";border-radius:10px;max-height:215px;@media (min-width:950px){margin:8px 0 40px;}"],(function(e){return e.orange?"white":"rgba(194,176,145,0.2)"}),(function(e){return e.orange?"solid 3px #db5c1a":null})),l=i.a.div.withConfig({displayName:"LargeCardSection__CardContent",componentId:"sc-1lhjqth-2"})(["max-height:200px;overflow-y:auto;"]),p=i.a.div.withConfig({displayName:"LargeCardSection__Spacer",componentId:"sc-1lhjqth-3"})(["height:6px;"]),m=function(e){var n=e.cards,a=e.orange;return r.a.createElement(d,null,n.map((function(e){return r.a.createElement(o,{orange:a},r.a.createElement(l,null,e.card_title?r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{content:e.card_title[0]}),r.a.createElement(p,null)):null,e.card_subheader?r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{content:e.card_subheader[0]}),r.a.createElement(p,null)):null,e.large_card_text.map((function(e){return r.a.createElement(c.a,{content:e})}))))})))}},"O+JX":function(e,n,a){e.exports=a.p+"static/7-af0a01c71b6dd9ab738406ff0acb535c.png"},RXBc:function(e,n,a){"use strict";a.r(n),a.d(n,"query",(function(){return b}));var t=a("q1tI"),r=a.n(t),i=(a("hZiR"),a("nb5R")),c=a.n(i),d=a("0bwd"),o=a.n(d),l=a("O+JX"),p=a.n(l),m=a("Bdqn"),u=a("SMfn"),g=a("xdOt"),s=a("Fzi1"),f=a("JTnL"),x=a("n367"),_=a("diRT"),h=a("rQ/Z"),b={id:"3997589597",source:'\n  {\n    prismic {\n      page(lang: "en-gb", uid: "home") {\n        quote\n        body1 {\n          ... on PRISMIC_PageBody1Info_card {\n            type\n            fields {\n              card_header\n              card_text\n            }\n          }\n          ... on PRISMIC_PageBody1Past_projects {\n            type\n            label\n            primary {\n              past_projects_title\n            }\n            fields {\n              project_date\n              project_description\n              researcher_name\n              video_url\n            }\n          }\n          ... on PRISMIC_PageBody1Large_info_card {\n            primary {\n              large_card_title\n              large_card_section_intro\n            }\n            fields {\n              card_title\n              large_card_text\n              card_subheader\n            }\n          }\n        }\n        _meta {\n          uid\n        }\n        page_text\n      }\n    }\n  }\n',toString:function(){return this.id}};n.default=function(e){var n=e.data,a=n.prismic.page.quote[0],t=n.prismic.page.body1[0].fields,i=n.prismic.page.body1[1].primary.large_card_title[0],d=n.prismic.page.body1[1].primary.large_card_section_intro,l=n.prismic.page.body1[1].fields,b=n.prismic.page.body1[2].fields;return r.a.createElement("div",null,r.a.createElement(u.a,null),r.a.createElement(g.a,{quoteData:a,imageSrc:o.a}),t.length?r.a.createElement(m.a,{orange:!0,cardsData:t}):null,r.a.createElement(g.a,{imageSrc:p.a}),r.a.createElement(x.a,null,i?r.a.createElement(_.a,{titleData:i}):null,d.length?r.a.createElement(h.a,{textData:d}):null,l.length?r.a.createElement(f.a,{cards:l}):null),r.a.createElement(g.a,{imageSrc:c.a}),b.length?r.a.createElement(m.a,{cardsData:b}):null,r.a.createElement(s.a,null))}},nb5R:function(e,n,a){e.exports=a.p+"static/9-6fa1d9241dbd754ab98fc9c5d074ca6c.png"},"rQ/Z":function(e,n,a){"use strict";a.d(n,"a",(function(){return l}));var t=a("q1tI"),r=a.n(t),i=a("vOnD"),c=a("AF9i"),d=i.a.div.withConfig({displayName:"TextSection__TextContainer",componentId:"dj37gz-0"})(["margin:20px 0 50px;"]),o=i.a.div.withConfig({displayName:"TextSection__Paragraph",componentId:"dj37gz-1"})(["margin:0 0 20px;"]),l=function(e){var n=e.textData.map((function(e){return r.a.createElement(o,null,r.a.createElement("div",null,r.a.createElement(c.a,{content:e})))}));return r.a.createElement(d,null,n)}}}]);
//# sourceMappingURL=component---src-pages-index-js-9d4c8a32581411ebe61f.js.map