(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0bwd":function(e,n,a){e.exports=a.p+"static/6-98f38c6a0bfe6d1842051c25cf0b4316.png"},Bdqn:function(e,n,a){"use strict";a.d(n,"a",(function(){return l}));var t=a("q1tI"),r=a.n(t),i=a("vOnD"),d=a("AF9i"),c=i.a.div.withConfig({displayName:"CardSection__CardsContainer",componentId:"vrecmp-0"})(["@media (min-width:950px){display:flex;justify-content:space-between;padding:40px;}padding:20px;margin:0px auto 40px;"]),o=i.a.div.withConfig({displayName:"CardSection__Card",componentId:"vrecmp-1"})(["display:flex;flex-direction:column;justify-content:center;min-width:225px;margin:8px auto 30px;padding:60px 30px;border:solid 1px #db5c1a;border-radius:10px;@media (min-width:950px){margin:8px 20px;width:420px;}"]),l=function(e){var n=e.cardsData.map((function(e){return r.a.createElement(o,null,e.card_header&&r.a.createElement(d.a,{content:e.card_header[0]}),e.card_text&&r.a.createElement(d.a,{orange:!0,content:e.card_text[0]}))}));return r.a.createElement(c,null,n)}},RXBc:function(e,n,a){"use strict";a.r(n),a.d(n,"query",(function(){return b}));var t=a("q1tI"),r=a.n(t),i=(a("hZiR"),a("0bwd")),d=a.n(i),c=a("Bdqn"),o=a("SMfn"),l=a("xdOt"),p=a("Fzi1"),m=a("vOnD"),u=a("AF9i"),s=m.a.div.withConfig({displayName:"Carousel__CarouselContainer",componentId:"z25bab-0"})(["@media (min-width:600px){margin:30px auto;}@media (min-width:900px){margin:30px auto;max-width:800px;}margin:30px 0;"]),x=m.a.div.withConfig({displayName:"Carousel__CarouselCard",componentId:"z25bab-1"})(["display:flex;flex-direction:column;justify-content:start;margin:0 auto 30px;padding:40px 20px;background-color:rgba(194,176,145,0.2);border-radius:10px;height:215px;@media (min-width:950px){margin:8px 0 40px;}"]),g=m.a.div.withConfig({displayName:"Carousel__CardContent",componentId:"z25bab-2"})(["height:200px;overflow-y:scroll;"]),_=function(e){e.title;var n=e.cards;return r.a.createElement(s,null,n.map((function(e){return r.a.createElement(x,null,r.a.createElement(g,null,r.a.createElement(u.a,{content:e.card_title[0]}),e.large_card_text.map((function(e){return r.a.createElement(u.a,{content:e})}))))})))},f=a("n367"),h=a("diRT"),b={id:"931600924",source:'\n{\n  prismic {\n    page(lang: "en-gb", uid: "home") {\n      quote\n      body1 {\n        ... on PRISMIC_PageBody1Info_card {\n          type\n          fields {\n            card_header\n            card_text\n          }\n        }\n        ... on PRISMIC_PageBody1Past_projects {\n          type\n          label\n          primary {\n            past_projects_title\n          }\n          fields {\n            project_date\n            project_description\n            researcher_name\n            video_url\n          }\n        }\n        ... on PRISMIC_PageBody1Large_info_card {\n          primary {\n            large_card_title\n          }\n          fields {\n            card_title\n            large_card_text\n          }\n        }\n      }\n      _meta {\n        uid\n      }\n      page_text\n    }\n  }\n}\n',toString:function(){return this.id}};n.default=function(e){var n=e.data,a=n.prismic.page.quote[0],t=n.prismic.page.body1[0].fields,i=n.prismic.page.body1[1].primary.large_card_title[0],m=n.prismic.page.body1[1].fields;return r.a.createElement("div",null,r.a.createElement(o.a,null),r.a.createElement(l.a,{quoteData:a,imageSrc:d.a}),t.length?r.a.createElement(c.a,{cardsData:t}):null,r.a.createElement(f.a,null,i?r.a.createElement(h.a,{titleData:i}):null,m.length?r.a.createElement(_,{title:i,cards:m}):null),r.a.createElement(p.a,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-b53910546b9d9c60c97c.js.map