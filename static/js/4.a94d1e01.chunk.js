(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{55:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,"a",(function(){return c}))},56:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}r.d(t,"a",(function(){return n}))},57:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(55),a=r(56),c=r(6),i=(r(0),r(2)),o=r(1),s=function(e){var t=e.to,r=e.children,s=e.className,l=e.isAnchor,d=Object(a.a)(e,["to","children","className","isAnchor"]),j=Object(i.b)();return l?Object(o.jsx)("a",Object(n.a)(Object(n.a)({href:t,className:s},d),{},{children:r})):Object(o.jsx)("a",{href:t,className:s,onClick:function(e){e.preventDefault(),j(Object(c.c)(!0)),setTimeout((function(){j(Object(c.c)(!1)),j(Object(c.a)(t))}),100)},children:r})};s.defaultProps={isAnchor:!1};var l=s},58:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(55),a=r(56),c=(r(0),r(57)),i=r(63),o=r.n(i),s=r(1),l=function(e){var t=e.children,r=e.isActive,i=e.isLink,l=e.variant,d=e.isAnchor,j=e.to,_=e.className,u=Object(a.a)(e,["children","isActive","isLink","variant","isAnchor","to","className"]),b=[o.a.button,r?o.a.secondary:null,o.a[l],_];return i?Object(s.jsx)(c.a,Object(n.a)(Object(n.a)({to:j,isAnchor:d,className:b.join(" ")},u),{},{children:t})):Object(s.jsx)("button",Object(n.a)(Object(n.a)({className:b.join(" ")},u),{},{children:t}))};l.defaultProps={isActive:!1,isLink:!1,variant:"primary",isAnchor:!1};var d=l},62:function(e,t,r){e.exports={card:"Card_card__3aGLj","c-end":"Card_c-end__1DcYM","c-start":"Card_c-start__2ogKJ",content:"Card_content__3F6jN",img:"Card_img__3ftSj",title:"Card_title__33NKL",tag:"Card_tag__REFaf",attr:"Card_attr__ZkErH"}},63:function(e,t,r){e.exports={button:"Button_button__1-zFo",active:"Button_active__HwX5g",primary:"Button_primary__1ZZ0X",secondary:"Button_secondary__3UygD"}},64:function(e,t,r){e.exports={card:"Card_card__2rshT","model-1":"Card_model-1__3nKan","model-2":"Card_model-2__3ozfL","model-3":"Card_model-3__5Sne5",content:"Card_content__2DhLo",img:"Card_img__lVL7W",title:"Card_title__2ekot",desc:"Card_desc__nGAMe",tech:"Card_tech__1SIzz"}},65:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r(0);var n=r(62),a=r.n(n),c=r(1);function i(e){var t=e.isRight,r=e.imgUrl,n=e.url,i=e.title,o=e.published,s=e.minutes,l=e.tag;return Object(c.jsxs)("div",{className:[a.a.card,t?a.a["c-end"]:a.a["c-start"]].join(" "),children:[Object(c.jsx)("div",{className:a.a.img,children:Object(c.jsx)("img",{src:r,alt:"",height:80,width:80})}),Object(c.jsxs)("div",{className:a.a.content,children:[Object(c.jsx)("a",{href:n,rel:"noopener noreferrer",target:"_blank",children:Object(c.jsx)("h2",{className:a.a.title,children:i})}),Object(c.jsx)("p",{className:a.a.tag,children:l&&"#"+(null===l||void 0===l?void 0:l.join(" #"))}),Object(c.jsxs)("p",{className:a.a.attr,children:[Object(c.jsx)("span",{children:"Published:"})," ",o]}),Object(c.jsxs)("p",{className:a.a.attr,children:[s," min read"]})]})]})}},66:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(7),a=(r(0),r(64)),c=r.n(a),i=r(1);function o(e){var t=e.models,r=e.image,a=e.title,o=e.desc,s=e.demo,l=e.tech,d=[1,2,3],j="";return d[t]&&(j=c.a["model-".concat(d[t])]),Object(i.jsxs)("div",{className:[c.a.card,j].join(" "),children:[Object(i.jsx)("div",{className:c.a.img,children:Object(i.jsx)("img",{src:"".concat(n.c).concat(r),alt:a,height:80,width:80})}),Object(i.jsxs)("div",{className:c.a.content,children:[s?Object(i.jsx)("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:Object(i.jsx)("h2",{className:c.a.title,children:a})}):Object(i.jsx)("h2",{className:c.a.title,children:a}),Object(i.jsx)("p",{className:c.a.desc,children:o}),Object(i.jsx)("span",{className:c.a.tech,children:l})]})]})}},80:function(e,t,r){e.exports={container:"Portfolio_container__3Bpg3",load:"Portfolio_load__37ov_",title:"Portfolio_title__34dSZ",portfolio:"Portfolio_portfolio__3F63b",button:"Portfolio_button__3zJim",datanotfound:"Portfolio_datanotfound__3zTrt"}},81:function(e,t,r){e.exports={container:"Hero_container__1fjub",load:"Hero_load__3k5v9",head:"Hero_head__1XT77",iam:"Hero_iam__3wEBD",wrapperNameRole:"Hero_wrapperNameRole__3YbsU",dicky:"Hero_dicky__2OUqM",role:"Hero_role__1iu4J",body:"Hero_body__2maZJ",cta:"Hero_cta__1m0e1"}},82:function(e,t,r){e.exports={container:"Article_container__2rktH",load:"Article_load__1VA_S",title:"Article_title__2reI0",portfolio:"Article_portfolio__26nBe",button:"Article_button__2hOZO",datanotfound:"Article_datanotfound__4aM0C"}},87:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return f}));var n=r(58),a=r(66),c=r(4),i=r(2),o=r(80),s=r.n(o),l=r(1),d=function(){var e,t=Object(i.c)(c.i),r=null===t||void 0===t||null===(e=t.project)||void 0===e?void 0:e.slice(0,3);return Object(l.jsxs)("div",{className:s.a.container,children:[Object(l.jsx)("h2",{className:s.a.title,children:null===t||void 0===t?void 0:t.title}),(null===r||void 0===r?void 0:r.length)>0?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:s.a.portfolio,children:null===r||void 0===r?void 0:r.map((function(e,t){var r=t%2?2:0;return Object(l.jsx)(a.a,{models:r,image:e.cover,demo:e.demo,desc:e.desc,title:e.title,tech:e.tech},t)}))}),Object(l.jsx)(n.a,{isLink:!0,to:"/portfolio",className:s.a.button,children:"See all Project"})]}):Object(l.jsx)("h2",{className:s.a.datanotfound,children:"Data not found!"})]})},j=(r(0),r(81)),_=r.n(j),u=function(){var e,t=Object(i.c)(c.f);return Object(l.jsxs)("div",{className:_.a.container,children:[Object(l.jsxs)("div",{className:_.a.head,children:[Object(l.jsx)("span",{className:_.a.iam,children:"I am"}),Object(l.jsxs)("div",{className:_.a.wrapperNameRole,children:[Object(l.jsx)("h1",{className:_.a.dicky,children:null===t||void 0===t?void 0:t.name}),Object(l.jsx)("h2",{className:_.a.role,children:null===t||void 0===t?void 0:t.role})]})]}),Object(l.jsx)("div",{className:_.a.body,children:Object(l.jsx)("p",{children:null===t||void 0===t?void 0:t.short_desc})}),Object(l.jsxs)("div",{className:_.a.cta,children:[Object(l.jsx)(n.a,{isAnchor:!0,variant:"secondary",isLink:!0,to:null===t||void 0===t||null===(e=t.quote)||void 0===e?void 0:e.link,target:"_blank",rel:"noopener noreferrer",children:"Email Me"}),Object(l.jsx)(n.a,{variant:"primary",children:"Download CV"})]})]})},b=r(65),h=r(82),m=r.n(h),O=function(){var e=Object(i.c)(c.g),t=null===e||void 0===e?void 0:e.slice(0,3);return Object(l.jsxs)("div",{className:m.a.container,children:[Object(l.jsx)("h2",{className:m.a.title,children:"Article"}),(null===t||void 0===t?void 0:t.length)>0?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:m.a.portfolio,children:null===t||void 0===t?void 0:t.map((function(e,t){var r=!!(t%2);return Object(l.jsx)(b.a,{imgUrl:e.cover_image,url:e.url,isRight:r,title:e.title,published:e.readable_publish_date,minutes:e.reading_time_minutes,tag:e.tag_list},t)}))}),Object(l.jsx)(n.a,{isLink:!0,to:"/article",className:m.a.button,children:"See all Article"})]}):Object(l.jsx)("h2",{className:m.a.datanotfound,children:"Data not found!"})]})},f=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u,{}),Object(l.jsx)(d,{}),Object(l.jsx)(O,{})]})}}}]);
//# sourceMappingURL=4.a94d1e01.chunk.js.map