!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(e){return(e=e.toLowerCase()).charAt(0).toUpperCase()+e.substring(1)},e.exports.words=function(e){return e.toLowerCase().replace(/(^|[^a-zA-Z\u00C0-\u017F'])([a-zA-Z\u00C0-\u017F])/g,function(e){return e.toUpperCase()})}},function(e,t,n){"use strict";n.r(t);var o,r=function(e,t,n){var o=[];return o=t?e.items.filter(function(e){return e.categories.includes(t)}):e.items,n&&(o=o.filter(function(e){return new Date(e.date_published).getFullYear()==n})),o},c=function(e,t){t.insertAdjacentHTML("beforeend",a(e));var n=t.querySelector(".post:last-child"),o=n.querySelector(".read-more > a");if(o){var r=n.querySelector(".read-more-content");o.addEventListener("click",function(t){t.preventDefault(),r.style.display="block",setTimeout(function(){r.style.opacity="1"},100);var n=new URL(location.href);n.pathname=e.url,n.search="",document.title="".concat(e.title," · Matthew Bischoff"),window.history.replaceState(document.title,document.title,n.toString()),o.remove()})}},a=function(e){var t;return t="tweet"==e.format?l(e):"link"==e.format?u(e):i(e),'\n    <article class="post">\n      '.concat(t,"\n    </article>\n  ")},i=function(e){var t,n=e.url,o=e.title;if(e.content_html.includes("\x3c!-- more --\x3e")){var r=e.content_html.split("\x3c!-- more --\x3e");t=r[0],t+='\n      <div class="read-more">\n        <a href="'.concat(n,'"> Read More </a>\n      </div>\n      <div class="read-more-content">\n        ').concat(r[1],"\n      <div>\n    ")}else t=e.content_html;return'\n    <div class="long-form-post">\n      '.concat(s(e),'\n      <a href="').concat(n,'">\n        <h2 class="post-title">\n          ').concat(o,"\n        </h2>\n      </a>\n\n      ").concat(t,"\n    </div>\n  ")},u=function(e){var t=e.external_url,n=e.title;return'\n    <div class="link-post">\n      '.concat(s(e),'\n      <h2><a href="').concat(t,'" target="_blank">').concat(n,"</a></h2>\n    </div>\n  ")},l=function(e){var t=e.colour,n=e.content_html;return'\n    <div class="short-form-post">\n      <div class="colour-'.concat(t,'"></div>\n      <div class="colour-dark-').concat(t,'">\n        ').concat(s(e),"\n        ").concat(n,"\n      </div>\n    </div>\n  ")},s=function(e){var t=e.date_published,n=new Date(e.date_published).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return'\n    <time datetime="'.concat(t,'" class="post-date">\n      <a href="').concat(e.url,'">').concat(n,"</a>\n    </time>\n  ")},d=function(e,t){var n=w(),o=g();null!==document.querySelector(".posts")&&(Array.from(document.querySelectorAll("article.post")).forEach(function(e){return e.remove()}),r(e,o,n).slice(0,5).forEach(function(e){return c(e,t)}))},f=document.querySelector("#latest"),m=document.querySelector("#years"),y=function(){m.style.height="".concat(38*o.length,"px"),f.classList.add("blue-highlight"),m.classList.add("show")},h=function(){m.style.height="0px",f.classList.remove("blue-highlight"),m.classList.remove("show")},p=n(0),v=n.n(p);n.d(t,"getCategory",function(){return g}),n.d(t,"setCategory",function(){return b}),n.d(t,"removeCategory",function(){return S}),n.d(t,"getYear",function(){return w}),n.d(t,"setYear",function(){return L}),n.d(t,"removeYear",function(){return q});var g=function(){var e=document.querySelector("meta[name='category']").content;return""!==e?e:null},b=function(e){document.querySelector("meta[name='category']").setAttribute("content",e)},S=function(){document.querySelector("meta[name='category']").removeAttribute("content")},w=function(){var e=document.querySelector("meta[name='year']").content;return""!==e?parseInt(e):null},L=function(e){document.querySelector("meta[name='year']").setAttribute("content",e)},q=function(){document.querySelector("meta[name='year']").removeAttribute("content")},T=new URL(location.href).searchParams.get("year");T?document.head.insertAdjacentHTML("beforeend",'<meta name="year" content="'.concat(T,'">')):document.head.insertAdjacentHTML("beforeend",'<meta name="year">');var x=location.href.match(/\/category\/(\w+)/);x?document.head.insertAdjacentHTML("beforeend",'<meta name="category" content="'.concat(x[1],'">')):document.head.insertAdjacentHTML("beforeend",'<meta name="category">');var A=document.querySelector(".posts"),E=document.querySelector("main"),M=document.querySelector("footer");document.querySelector(".posts")&&(M.style.opacity="0",M.style.transition="opacity 0.4s ease",E.style.opacity="0",E.style.transition="opacity 0.4s ease"),fetch("/feed.json").then(function(e){return e.json()}).then(function(e){d(e,A),function(e,t){null!==document.querySelector(".posts")&&window.addEventListener("scroll",function(){var n=w(),o=g();if(document.body.clientHeight-window.scrollY-window.innerHeight<1500){var a=document.querySelectorAll("article.post").length,i=r(e,o,n)[a];void 0!==i&&c(i,t)}})}(e,A),function(e,t){var n=document.querySelector("footer"),r=document.querySelector("main"),c=document.querySelectorAll(".category");if(![f,m].some(function(e){return null===e})){var a=w();a&&(f.innerText=a,f.classList.add("blue-highlight")),(o=Array.from(new Set(e.items.map(function(e){return new Date(e.date_published).getFullYear()})))).forEach(function(e){m.insertAdjacentHTML("beforeend",'\n      <li class="button-round">\n        <a class="year" data-year="'.concat(e,'" href="/?year=').concat(e,'">\n          ').concat(e,"\n        </a>\n      </li>\n    "))}),document.querySelectorAll(".year").forEach(function(o){o.addEventListener("click",function(a){var i=parseInt(o.dataset.year);if(L(i),S(),t){a.preventDefault(),n.style.opacity="0",r.style.opacity="0",setTimeout(function(){d(e,t),setTimeout(function(){r.style.opacity="1",n.style.opacity="1"},300)},300);var u=new URL(location.href);u.pathname="",u.search="year=".concat(i),f.innerText=i,document.title="".concat(i," · Matthew Bischoff"),window.history.replaceState(document.title,document.title,u.toString()),m.style.height="0px",m.classList.toggle("show"),c.forEach(function(e){return e.classList.remove("blue-highlight")})}})}),f.addEventListener("click",function(e){e.preventDefault(),m.classList.contains("show")?h():y()})}}(e,A),function(e,t){if(t){var n=document.querySelectorAll(".category"),o=document.querySelector("footer"),r=document.querySelector("main"),c=document.querySelector("#latest");n.forEach(function(a){a.addEventListener("click",function(i){var u=a.dataset.categoryName;b(u),q(),i.preventDefault(),n.forEach(function(e){return e.classList.remove("blue-highlight")}),c.classList.remove("blue-highlight"),a.classList.add("blue-highlight"),o.style.opacity="0",r.style.opacity="0",setTimeout(function(){d(e,t),setTimeout(function(){r.style.opacity="1",o.style.opacity="1"},300)},300);var l=new URL(location.href);l.pathname="category/".concat(u),l.search="",document.title="".concat(v()(u)," · Matthew Bischoff"),window.history.replaceState(document.title,document.title,l.toString());var s='<img id="carrot" src="/uploads/carrot.svg" alt=""><span>Latest</span>';c.innerHTML!==s&&(c.innerHTML=s),h()})})}}(e,A),setTimeout(function(){E.style.opacity="1",M.style.opacity="1"},100)}).catch(function(){setTimeout(function(){E.style.opacity="1",M.style.opacity="1"},100)}),function(){var e=document.querySelector("#mobile-menu"),t=document.querySelector("#hamburger-button"),n=document.querySelector("#close-mobile-menu");if([e,t,n].some(function(e){return null===e}))return!1;t.addEventListener("click",function(){e.style.display="block",setTimeout(function(){return e.style.opacity="1"},0),document.body.classList.add("fix")}),n.addEventListener("click",function(){e.style.opacity="0",setTimeout(function(){e.style.display="none"},250),document.body.classList.remove("fix")})}();var _=document.querySelector("#categories>div");window.innerWidth<700?window.onload=function(){_.style.left="-20px",setTimeout(function(){_.style.left="0px",setTimeout(function(){_.style.width="initial",_.parentElement.style.overflowX="visible"},800)},800)}:(_.style.width="initial",_.parentElement.style.overflowX="visible"),_.addEventListener("scroll",h)}]);
//# sourceMappingURL=index.js.map