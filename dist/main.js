(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>f});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),c=t(667),d=t.n(c),l=new URL(t(783),t.b),s=new URL(t(538),t.b),p=i()(a()),u=d()(l),m=d()(s);p.push([e.id,`/* Restaurant Page CSS stylesheet */\n\n@font-face {\n    font-family: 'Ysabeau Office';\n    src: \n        url(${u}) format('woff2'),\n        url(${m}) format('woff');\n    font-style: normal;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    /* border: 1px solid blue; */\n    transition: 0.2s all;\n}\n\nul {\n    list-style-type: none;\n}\n\nbutton {\n    background: none;\n    border: none;\n    \n    font-family: 'Ysabeau Office', sans-serif;\n    font-size: 1rem;\n}\n\nbutton.active-section {\n    font-weight: bolder;\n    font-size: 1.3rem;\n}\n\nbody {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 10rem 1fr;\n\n    background-color: rgba(248, 237, 211, 0.418);\n    font-family: 'Ysabeau Office', sans-serif;\n    font-size: 1rem;\n}\n\nheader {\n    display: flex;\n    flex-flow: column wrap;\n}\n\n#logo-wrapper {\n    text-align: center;\n    padding-top: 0.75rem;\n    padding-bottom: 0.25rem;\n}\n\n#omakase-logo {\n    width: 18rem;\n}\n\n#nav {\n    display: flex;\n    flex-flow: column;\n    justify-content: center;\n    padding: 0.25rem;\n    border-top: 1px solid black;\n    border-bottom: 1px solid black;\n}\n\n#socials-wrapper {  \n    display: flex;\n    justify-content: center;\n    padding: 0.25rem;\n    gap: 1rem;\n    border-bottom: 1px solid black;\n}\n\n#socials-wrapper a {\n    height: 1.5rem;\n}\n\n#facebook-icon, #instagram-icon {\n    width: 1.5rem;\n}\n\n#about-wrapper, #menu-wrapper, #contact-wrapper {\n    padding: 0.5rem;\n}\n\n#about-wrapper p {\n    margin-top: 1rem;\n}\n\n#menu-wrapper li {\n    margin-top: 1rem;\n}\n\n#contact-wrapper #location-card, \n#contact-wrapper #contact-me-card {\n    margin-top: 1rem;\n}\n\n#contact-wrapper li {\n    margin-left: 0.5rem;\n}\n\n#contact-wrapper li {\n    /* margin-bottom: 0.3rem; */\n}\n\n#contact-wrapper li:first-child {\n    margin-left: 0;\n}\n\n#contact-wrapper h4 {\n    margin-bottom: 0.25rem;\n}\n\n@media only screen and (min-width: 1000px) {\n    header {\n        flex-direction: row;\n        border-bottom: 1px solid black;\n    }\n\n    #logo-wrapper {\n        text-align: left;\n        padding: 0.5rem;\n    }\n    \n    #nav {\n        flex-direction: row;\n        flex: 1;\n        gap: 2rem;\n        border: none;\n    }\n\n    #socials-wrapper {\n        align-items: center;\n        justify-content: right;\n        padding: 0.5rem;\n        width: 18rem;\n        border: none;\n    }\n}`,""]);const f=p},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&i[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),n.push(s))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var d=e[c],l=r.base?d[0]+r.base:d[0],s=o[l]||0,p="".concat(l," ").concat(s);o[l]=s+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=a(m,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var d=r(e,a),l=0;l<o.length;l++){var s=t(o[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}o=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},538:(e,n,t)=>{e.exports=t.p+"44494e2d4aff54898ee2.woff"},783:(e,n,t)=>{e.exports=t.p+"ad29c952c16c85d9cb05.woff2"}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),a=t.n(r),o=t(569),i=t.n(o),c=t(565),d=t.n(c),l=t(216),s=t.n(l),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=s(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=t.p+"e8e64ee4580bcd70509e.png",g=t.p+"51f90461c0dfed370bf6.svg",b=t.p+"25f258e4bb39a7967b5e.svg",w=document.getElementById("content"),v=function(){const e=[],n=function(){e.forEach((e=>{e.classList=""}))};return{generateHeader:function(){const t=document.createElement("header");return t.id="header",t.appendChild(function(){const e=document.createElement("div");e.id="logo-wrapper";const n=document.createElement("img");return n.src=h,n.alt="O - Ma - Kase logo",n.id="omakase-logo",e.appendChild(n),e}()),t.appendChild(function(){const t=document.createElement("div");t.id="nav";const r=document.createElement("button");r.type="button",r.name="about-btn",r.id="about-btn",r.innerText="ABOUT",r.classList="active-section",t.appendChild(r),e.push(r);const a=document.createElement("button");a.type="button",a.name="menu-btn",a.id="menu-btn",a.innerText="MENU",t.appendChild(a),e.push(a);const o=document.createElement("button");return o.type="button",o.name="contact-btn",o.id="contact-btn",o.innerText="CONTACT US",t.appendChild(o),e.push(o),e.forEach((e=>{e.addEventListener("click",n),e.addEventListener("click",x.showSection)})),t}()),t.appendChild(function(){const e=document.createElement("div");e.id="socials-wrapper";const n=document.createElement("a");n.href="https://www.instagram.com/O.MA.KASE_NYC/",n.target="_blank",n.rel="noopener noreferrer";const t=document.createElement("img");t.src=g,t.alt="Instagram Icon",t.id="instagram-icon",n.appendChild(t),e.appendChild(n);const r=document.createElement("a");r.href="https://www.facebook.com/O.MA.KASE_NYC/",r.target="_blank",r.rel="noopener noreferrer";const a=document.createElement("img");return a.src=b,a.alt="Facebook Icon",a.id="facebook-icon",r.appendChild(a),e.appendChild(r),e}()),t}}}(),y=function(){const e=document.createElement("div");e.id="about-wrapper";const n=document.createElement("h2");n.innerText="ABOUT";const t=document.createElement("p");t.innerText='Omakase is a Japanese phrase which translates to "I leave it up to you." It is a term typically used in Japanese restaurants where the details of the meal are left up to the chef, who chooses seasonal specialties based on the highest quality ingredients available at the time.';const r=document.createElement("p");return r.innerText="O - MA - KASE is a Japanese-style restaurant that aims to bring that authentic, personalized dining experience from the streets of Tokyo to your neighborhood.",e.appendChild(n),e.appendChild(t),e.appendChild(r),e},E={generateMenu:function(){const e=document.createElement("div");e.id="menu-wrapper";const n=document.createElement("h2");n.innerText="MENU",e.appendChild(n);const t=document.createElement("ul");return t.appendChild(function(){const e=document.createElement("li"),n=document.createElement("h4");n.innerText="Ramen Omakase";const t=document.createElement("p");return t.innerText="Multi-course meal consisting of a seasonal salad made with locally sourced produce followed by a selection of the chef's choice of gourmet ramen with handmade noodles and locally sourced meat then finished with a seasonal dessert. Vegetarian options and beverage pairing available.",e.appendChild(n),e.appendChild(t),e}()),t.appendChild(function(){const e=document.createElement("li"),n=document.createElement("h4");n.innerText="Sushi Omakase";const t=document.createElement("p");return t.innerText="Multi-course meal consisting of approximately twenty pieces of nigiri sushi made with fish and shellfish sourced globally followed by tamago then finished with a seasonal dessert. Beverage pairing available.",e.appendChild(n),e.appendChild(t),e}()),e.appendChild(t),e}},C=function(){const e=document.createElement("div");e.id="contact-wrapper";const n=document.createElement("h2");return n.innerText="CONTACT US",e.appendChild(n),e.appendChild(function(){const e=document.createElement("ul");e.id="location-card";const n=document.createElement("li"),t=document.createElement("h4");t.innerText="ADDRESS:",n.appendChild(t),e.appendChild(n);const r=document.createElement("li");r.innerText="O - MA - KASE",e.appendChild(r);const a=document.createElement("li"),o=document.createElement("a");o.innerText="1-555-555-5555",o.href="tel:+1-555-555-5555",a.appendChild(o),e.appendChild(a);const i=document.createElement("li"),c=document.createElement("a");c.innerText="15121 123rd Street\nNew York, NY 101880",c.href="https://goo.gl/maps/iH7aiyujwQ9AQ69E8",c.target="_blank",c.rel="noopener noreferrer",i.appendChild(c),e.appendChild(i);const d=document.createElement("li");return d.innerText="Open Wednesday through Saturday\n5:00 PM to 11:00 PM",e.appendChild(d),e}()),e.appendChild(function(){const e=document.createElement("ul");e.id="contact-me-card";const n=document.createElement("li"),t=document.createElement("h4");t.innerText="FOR BUSINESS INQUIRIES:",n.appendChild(t),e.appendChild(n);const r=document.createElement("li");r.innerText="Wilson Lee",e.appendChild(r);const a=document.createElement("li"),o=document.createElement("a");o.innerText="1-555-555-5556",o.href="tel:+1-555-555-5556",a.appendChild(o),e.appendChild(a);const i=document.createElement("li"),c=document.createElement("a");c.innerText="wilsonlee093@gmail.com",c.href="mailto:wilsonlee093@gmail.com",i.appendChild(c),e.appendChild(i);const d=document.createElement("li"),l=document.createElement("a");return l.innerText="https://github.com/Estercade",l.href="https://github.com/Estercade",l.target="_blank",l.rel="noopener noreferrer",d.appendChild(l),e.appendChild(d),e}()),e},x=function(){const e=[],n=function(n){e.forEach((e=>{e.style.display="none",e.classList=""}))};return{renderPage:function(){w.appendChild(v.generateHeader()),function(){const n=E.generateMenu();w.appendChild(n),e.push(n)}(),function(){const n=C();w.appendChild(n),e.push(n)}(),n(),function(){const n=y();w.appendChild(n),e.push(n)}()},showSection:function(e){e.target.classList="active-section",n(),document.getElementById(`${e.target.id.split("-")[0]}-wrapper`).style.display="block"}}}();x.renderPage()})()})();