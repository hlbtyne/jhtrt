(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0bwd":function(e,a,n){e.exports=n.p+"static/6-98f38c6a0bfe6d1842051c25cf0b4316.png"},Bdqn:function(e,a,n){"use strict";n.d(a,"a",(function(){return l}));var t=n("q1tI"),r=n.n(t),i=n("vOnD"),c=n("AF9i"),d=i.a.div.withConfig({displayName:"CardSection__CardsContainer",componentId:"sc-vrecmp-0"})(["@media (min-width:950px){display:flex;justify-content:space-between;padding:40px;}background-color:rgba(194,176,145,0.4);padding:20px;"]),o=i.a.div.withConfig({displayName:"CardSection__Card",componentId:"sc-vrecmp-1"})(["display:flex;flex-direction:column;justify-content:center;min-width:225px;margin:0 auto 20px;padding:25px;border:",";border-radius:10px;@media (min-width:950px){margin:8px 20px;width:500px;padding:50px 25px;}"],(function(e){return e.orange?"solid 3px #db5c1a":null})),l=function(e){var a=e.cardsData,n=e.orange,t=a.map((function(e){return r.a.createElement(o,{orange:n},e.card_header&&r.a.createElement(c.a,{orange:!0,content:e.card_header[0]}),e.card_text&&r.a.createElement(c.a,{orange:!0,content:e.card_text[0]}))}));return r.a.createElement(d,null,t)}},JTnL:function(e,a,n){"use strict";n.d(a,"a",(function(){return s}));var t=n("q1tI"),r=n.n(t),i=n("vOnD"),c=n("AF9i"),d=i.a.div.withConfig({displayName:"LargeCardSection__LargeCardSectionContainer",componentId:"sc-1lhjqth-0"})(["@media (min-width:600px){display:flex;flex-direction:",";justify-content:start;margin:30px auto 40px;}@media (min-width:900px){margin:30px auto;max-width:800px;}display:flex;flex-direction:column;justify-content:start;margin:30px 0;"],(function(e){return e.wrap?"row":"column"})),o=i.a.div.withConfig({displayName:"LargeCardSection__LargeCard",componentId:"sc-1lhjqth-1"})(["display:flex;flex-direction:column;justify-content:start;@media (min-width:950px){margin:",";}@media (min-width:600px){margin:",";width:",";}margin:0 0 20px;padding:40px 20px;background-color:",";border:",";border-radius:10px;"],(function(e){return e.wrap?"0 15px":"8px 0 40px"}),(function(e){return e.wrap?"0 15px":"0 auto 30px"}),(function(e){return e.wrap?"50%":null}),(function(e){return e.orange?"white":"rgba(194,176,145,0.2)"}),(function(e){return e.orange?"solid 3px #db5c1a":null})),l=i.a.div.withConfig({displayName:"LargeCardSection__LargeCardImageContainer",componentId:"sc-1lhjqth-2"})(["position:relative;height:0;width:100%;margin:0 0 10px;padding-bottom:100%;background:gray;"]),p=i.a.img.withConfig({displayName:"LargeCardSection__StyledLargeCardImage",componentId:"sc-1lhjqth-3"})(["position:absolute;width:100%;height:100%;object-fit:cover;"]),m=i.a.div.withConfig({displayName:"LargeCardSection__CardContent",componentId:"sc-1lhjqth-4"})(["max-height:",";overflow-y:auto;"],(function(e){return e.wrap?"null":"250px"})),u=i.a.div.withConfig({displayName:"LargeCardSection__Spacer",componentId:"sc-1lhjqth-5"})(["height:6px;"]),g=i.a.iframe.withConfig({displayName:"LargeCardSection__StyledVideo",componentId:"sc-1lhjqth-6"})(["margin-top:10px;margin-bottom:20px;border:none;"]),s=function(e){var a=e.cards,n=e.orange,t=e.wrap;return r.a.createElement(d,{wrap:t},a.map((function(e){return console.log(e)||r.a.createElement(o,{orange:n,wrap:t},e.card_image&&r.a.createElement(l,null,r.a.createElement(p,{src:e.card_image.url})),e.video_url_large&&r.a.createElement(g,{width:"100%",height:"400px",src:e.video_url_large,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),r.a.createElement(m,{wrap:t},e.card_title&&e.card_title.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{content:e.card_title[0]}),r.a.createElement(u,null)):null,e.card_subheader&&e.card_subheader.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{content:e.card_subheader[0]}),r.a.createElement(u,null)):null,e.large_card_text&&e.large_card_text.length&&e.large_card_text.map((function(e){return r.a.createElement(c.a,{content:e})}))))})))}},"O+JX":function(e,a,n){e.exports=n.p+"static/7-af0a01c71b6dd9ab738406ff0acb535c.png"},RXBc:function(e,a,n){"use strict";n.r(a),n.d(a,"query",(function(){return w}));var t=n("q1tI"),r=n.n(t),i=(n("hZiR"),n("nb5R")),c=n.n(i),d=n("0bwd"),o=n.n(d),l=n("O+JX"),p=n.n(l),m=n("Bdqn"),u=n("SMfn"),g=n("xdOt"),s=n("Fzi1"),_=n("JTnL"),f=n("n367"),h=n("diRT"),x=n("rQ/Z"),w={id:"2712660197",source:'\n  {\n    prismic {\n      page(lang: "en-gb", uid: "home") {\n        quote\n        body1 {\n          ... on PRISMIC_PageBody1Info_card {\n            type\n            fields {\n              card_header\n              card_text\n            }\n          }\n          ... on PRISMIC_PageBody1Past_projects {\n            type\n            label\n            primary {\n              past_projects_title\n            }\n            fields {\n              project_date\n              project_description\n              researcher_name\n              video_url\n            }\n          }\n          ... on PRISMIC_PageBody1Large_info_card {\n            primary {\n              large_card_title\n              large_card_section_intro\n            }\n            fields {\n              card_title\n              large_card_text\n              card_subheader\n              video_url_large\n              card_image\n            }\n          }\n        }\n        _meta {\n          uid\n        }\n        page_text\n      }\n    }\n  }\n',toString:function(){return this.id}};a.default=function(e){var a=e.data,n=a.prismic.page.quote[0],t=a.prismic.page.body1[0].fields,i=a.prismic.page.body1[1].primary.large_card_title[0],d=a.prismic.page.body1[1].primary.large_card_section_intro,l=a.prismic.page.body1[1].fields,w=a.prismic.page.body1[2].primary.large_card_title[0],y=a.prismic.page.body1[2].fields,b=a.prismic.page.body1[3].fields;return r.a.createElement("div",null,r.a.createElement(u.a,null),r.a.createElement(g.a,{quoteData:n,imageSrc:o.a}),t.length?r.a.createElement(m.a,{orange:!0,cardsData:t}):null,r.a.createElement(g.a,{imageSrc:p.a}),r.a.createElement(f.a,null,i?r.a.createElement(h.a,{titleData:i}):null,d.length?r.a.createElement(x.a,{textData:d}):null,l.length?r.a.createElement(_.a,{cards:l,orange:!0,wrap:!0}):null,w?r.a.createElement(h.a,{titleData:w}):null,y.length?r.a.createElement(_.a,{cards:y}):null),r.a.createElement(g.a,{imageSrc:c.a}),b.length?r.a.createElement(m.a,{cardsData:b}):null,r.a.createElement(s.a,null))}},nb5R:function(e,a,n){e.exports=n.p+"static/9-6fa1d9241dbd754ab98fc9c5d074ca6c.png"},"rQ/Z":function(e,a,n){"use strict";n.d(a,"a",(function(){return l}));var t=n("q1tI"),r=n.n(t),i=n("vOnD"),c=n("AF9i"),d=i.a.div.withConfig({displayName:"TextSection__TextContainer",componentId:"sc-dj37gz-0"})(["margin:20px 0 50px;"]),o=i.a.div.withConfig({displayName:"TextSection__Paragraph",componentId:"sc-dj37gz-1"})(["margin:0 0 20px;"]),l=function(e){var a=e.textData.map((function(e){return r.a.createElement(o,null,r.a.createElement("div",null,r.a.createElement(c.a,{content:e})))}));return r.a.createElement(d,null,a)}}}]);
//# sourceMappingURL=component---src-pages-index-js-cc82130f6180ed555765.js.map