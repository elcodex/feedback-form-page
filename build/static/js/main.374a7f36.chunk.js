(this["webpackJsonpsend-to-email"]=this["webpackJsonpsend-to-email"]||[]).push([[0],[,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(6),i=s.n(n),l=(s(11),s(12),s(13),s(14),s(0));function r(){return Object(l.jsxs)("nav",{className:"nav",children:[Object(l.jsx)("div",{className:"nav__logo",children:Object(l.jsx)("a",{href:".",children:Object(l.jsx)("img",{className:"nav__img",src:"".concat(".","/static/media/logo.png"),alt:"TEST TASK"})})}),Object(l.jsxs)("ul",{className:"nav__menu",children:[Object(l.jsx)("li",{className:"menu__item",children:Object(l.jsx)("a",{className:"menu__link",href:".",children:"Home"})}),Object(l.jsx)("li",{className:"menu__item",children:Object(l.jsx)("a",{className:"menu__link",href:".",children:"About"})}),Object(l.jsx)("li",{className:"menu__item",children:Object(l.jsx)("a",{className:"menu__link menu_selected",href:".",children:"Contact Us"})})]})]})}var o=s(3),j=s.n(o),u=s(4),d=s(2);s(17);function m(e){var t=e.type,s=e.label,a=e.focus,n=void 0!==a&&a,i=e.isRequired,r=void 0!==i&&i,o=e.setValue,j=e.id,u=Object(c.useRef)(null),m=Object(c.useRef)(null),_=Object(c.useState)(""),b=Object(d.a)(_,2),h=b[0],f=b[1];function O(){h||u.current.classList.add("label_top")}function x(){h||u.current.classList.remove("label_top")}function p(e){f(e.currentTarget.value),o(e.currentTarget.value)}return Object(c.useEffect)((function(){n&&m.current.focus()}),[n]),Object(l.jsxs)("div",{className:"form__input",onClick:function(){m.current.focus()},children:["textarea"===t?Object(l.jsx)("textarea",{ref:m,className:"input",required:r,onFocus:O,onBlur:x,onChange:p,value:h,id:j}):Object(l.jsx)("input",{type:"text",ref:m,className:"input",required:r,onFocus:O,onBlur:x,onChange:p,value:h,id:j}),Object(l.jsx)("label",{htmlFor:j,ref:u,className:"input__label",children:"".concat(s," ").concat(r?"*":"")})]})}function _(e){return b.apply(this,arguments)}function b(){return(b=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://beryl-boggy-ceiling.glitch.me/email",{method:"POST",body:t}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h="Server error. Please try again later.",f="Files size is more than 2 mb.",O="Well, you found a glitch.";function x(e){return p.apply(this,arguments)}function p(){return(p=Object(u.a)(j.a.mark((function e(t){var s,c,a,n,i,l,r,o,u,d;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.name,c=void 0===s?"":s,a=t.email,n=void 0===a?"":a,i=t.message,l=void 0===i?"":i,r=t.files,o=void 0===r?[]:r,e.prev=1,v({name:c,email:n,message:l,files:o}),(u=new FormData).append("test_name",c),u.append("test_email",n),u.append("test_message",l),o.forEach((function(e){return u.append("test_file",e)})),e.next=10,_(u);case 10:if((d=e.sent).ok){e.next=20;break}if(!(d.status>=500)){e.next=14;break}return e.abrupt("return",{error:h});case 14:if(400!==d.status){e.next=19;break}return e.next=17,d.text();case 17:return e.t0=e.sent,e.abrupt("return",{error:e.t0});case 19:return e.abrupt("return",{error:O});case 20:e.next=25;break;case 22:return e.prev=22,e.t1=e.catch(1),e.abrupt("return",{error:e.t1.message});case 25:case"end":return e.stop()}}),e,null,[[1,22]])})))).apply(this,arguments)}function v(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=[];if(t.name||s.push("Name"),t.email||s.push("Email"),t.message||s.push("Message"),s.length)throw new Error("Please fill ".concat(s.join(", "),"."));if(null===(e=t.files)||void 0===e?void 0:e.length){var c=t.files.reduce((function(e,t){return e+t.size}),0);if(c>2097152)throw new Error(f)}}s(18);function g(e,t){for(var s=[],c=0;c<t.length;c++)s.push(t[c].name);return s}function N(e){var t=e.setFiles,s=Object(c.useReducer)(g,[]),a=Object(d.a)(s,2),n=a[0],i=a[1],r=Object(c.useState)(!1),o=Object(d.a)(r,2),j=o[0],u=o[1],m=Object(c.useRef)(null);function _(e){var s;if(null===(s=e.target.files)||void 0===s?void 0:s.length){var c=e.target.files;i(c),t(c)}}function b(e){var s;if(e.preventDefault(),null===(s=e.dataTransfer)||void 0===s?void 0:s.files){var c=e.dataTransfer.files;i(c),t(c)}u(!1)}function h(e){var t;e.preventDefault(),(null===(t=e.dataTransfer)||void 0===t?void 0:t.files)&&u(!0)}function f(){u(!1)}return Object(l.jsxs)("div",{className:"files",children:[n.length?Object(l.jsx)("ol",{className:"files__names",children:n.map((function(e,t){return Object(l.jsx)("li",{className:"names__item",children:e},"".concat(t,"_").concat(e))}))}):Object(l.jsx)("div",{className:"files__caption",children:"Upload your files"}),Object(l.jsxs)("button",{className:["files__uploader",j?"files__uploader_drag":""].filter((function(e){return e})).join(" "),onDrop:b,onDragEnter:h,onDragLeave:f,onDragOver:h,onClick:function(){(null===m||void 0===m?void 0:m.current)&&m.current.click()},children:[Object(l.jsx)("input",{className:"form__inputFile",type:"file",ref:m,multiple:!0,onChange:_}),Object(l.jsxs)("div",{onDrop:b,onDragEnter:h,onDragLeave:f,onDragOver:h,children:[Object(l.jsx)("div",{className:"uploader__img",children:Object(l.jsx)("img",{src:"".concat(".","/static/media/folder.svg"),alt:""})}),Object(l.jsx)("p",{className:"uploader__text",children:"Drag your files here."}),Object(l.jsx)("p",{className:"uploader__text",children:"Maximum size: 2mb"})]})]})]})}s(19),s(20);function k(e,t){for(var s=[],c=0;c<t.length;c++)s.push(t[c]);return s}function y(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(""),i=Object(d.a)(n,2),r=i[0],o=i[1],_=Object(c.useState)(""),b=Object(d.a)(_,2),h=b[0],f=b[1],O=Object(c.useState)(""),p=Object(d.a)(O,2),v=p[0],g=p[1],y=Object(c.useReducer)(k,[]),w=Object(d.a)(y,2),S=w[0],C=w[1],T=Object(c.useState)(""),D=Object(d.a)(T,2),F=D[0],L=D[1];function E(){return(E=Object(u.a)(j.a.mark((function e(t){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a(!0),L(""),e.next=5,x({name:r,email:h,message:v,files:S});case 5:(null===(s=e.sent)||void 0===s?void 0:s.error)&&L(s.error),a(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.jsxs)("div",{className:"form",children:[Object(l.jsxs)("div",{className:"form__fields",children:[Object(l.jsxs)("div",{className:"form__inputs",children:[Object(l.jsx)(m,{id:"name-input",type:"input",label:"Name",isRequired:!0,setValue:o,focus:!0}),Object(l.jsx)(m,{id:"email-input",type:"input",label:"Email Address",isRequired:!0,setValue:f}),Object(l.jsx)(m,{id:"message-input",type:"textarea",label:"Your Message",isRequired:!0,setValue:g})]}),Object(l.jsx)("div",{className:"form__files",children:Object(l.jsx)(N,{setFiles:C})})]}),F&&Object(l.jsx)("p",{children:F}),Object(l.jsx)("button",{className:"form__button",onClick:function(e){return E.apply(this,arguments)},disabled:s,children:s?"Sending...":"Send"})]})}s(21),s(22);function w(){return Object(l.jsx)("main",{className:"main",children:Object(l.jsxs)("div",{className:"main__contactus",children:[Object(l.jsx)("h1",{className:"contactus__header",children:Object(l.jsx)("span",{className:"contactus__header__text",children:"Get In Touch"})}),Object(l.jsx)("p",{className:"contactus__text",children:"Leave us a message"}),Object(l.jsx)(y,{})]})})}s(23);function S(){return Object(l.jsxs)("footer",{className:"footer",children:[Object(l.jsxs)("div",{className:"footer__info",children:[Object(l.jsxs)("div",{className:"info__links",children:[Object(l.jsx)("div",{className:"links__logo",children:Object(l.jsx)("a",{href:".",children:Object(l.jsx)("img",{className:"links__img",src:"".concat(".","/static/media/footer-logo.png"),alt:"TEST TASK Logo"})})}),Object(l.jsx)("div",{className:"links__title",children:Object(l.jsx)("span",{className:"title__text",children:"Quick Links"})}),Object(l.jsxs)("ul",{className:"links__list list_style_none",children:[Object(l.jsx)("li",{className:"links__item",children:Object(l.jsx)("a",{className:"links__link",href:".",children:"Sign Up"})}),Object(l.jsx)("li",{className:"links__item",children:Object(l.jsx)("a",{className:"links__link",href:".",children:"About Us"})})]})]}),Object(l.jsxs)("div",{className:"info__links",children:[Object(l.jsx)("div",{className:"links__title",children:Object(l.jsx)("span",{className:"title__text",children:"Others"})}),Object(l.jsxs)("ul",{className:"links_list list_style_none",children:[Object(l.jsx)("li",{className:"links__item",children:Object(l.jsx)("a",{className:"links__link",href:".",children:"User FAQs"})}),Object(l.jsx)("li",{className:"links__item",children:Object(l.jsx)("a",{className:"links__link",href:".",children:"Contact Us"})}),Object(l.jsx)("li",{className:"links__item",children:Object(l.jsx)("a",{className:"links__link",href:".",children:"Legal"})}),Object(l.jsx)("li",{className:"links__item",children:Object(l.jsx)("a",{className:"links__link",href:".",children:"Privacy Policy"})}),Object(l.jsx)("li",{className:"links__item",children:Object(l.jsx)("a",{className:"links__link",href:".",children:"Terms and Conditions"})})]})]}),Object(l.jsxs)("div",{className:"info__contacts",children:[Object(l.jsxs)("div",{className:"contacts__text",children:[Object(l.jsxs)("ul",{className:"contacts__list list_style_none",children:[Object(l.jsxs)("li",{className:"contacts__item",children:[Object(l.jsx)("div",{className:"contacts__icon",children:Object(l.jsx)("img",{className:"contacts__img",src:"".concat(".","/static/media/map-marker.svg"),alt:""})}),Object(l.jsxs)("div",{children:["Information technologies building,",Object(l.jsx)("br",{}),"Victoria Island, Lagos, Nigeria."]})]}),Object(l.jsxs)("li",{className:"contacts__item",children:[Object(l.jsx)("div",{className:"contacts__icon",children:Object(l.jsx)("img",{className:"contacts__img",src:"".concat(".","/static/media/phone.svg"),alt:""})}),Object(l.jsx)("div",{children:Object(l.jsx)("a",{className:"contacts__link",href:"tel:+23408112364568",target:"_blank",rel:"noreferrer",children:"+234\xa0081-1236-4568"})})]}),Object(l.jsxs)("li",{className:"contacts__item item_font_roboto",children:[Object(l.jsx)("div",{className:"contacts__icon",children:Object(l.jsx)("img",{className:"contacts__img",src:"".concat(".","/static/media/mail.svg"),alt:""})}),Object(l.jsx)("div",{children:Object(l.jsx)("a",{className:"contacts__link",href:"mailto:hello@example.com",target:"_blank",rel:"noreferrer",children:"hello@example.com"})})]})]}),Object(l.jsxs)("ul",{className:"contacts__social list_style_none",children:[Object(l.jsx)("li",{className:"social__li",children:Object(l.jsx)("a",{href:"https://youtube.com",target:"_blank",rel:"noreferrer",title:"youtube",children:Object(l.jsx)("div",{className:"social__li__container",children:Object(l.jsx)("img",{src:"".concat(".","/static/media/youtube.svg"),alt:""})})})}),Object(l.jsx)("li",{className:"social__li",children:Object(l.jsx)("a",{href:"https://instagram.com",target:"_blank",rel:"noreferrer",title:"instagram",children:Object(l.jsx)("div",{className:"social__li__container",children:Object(l.jsx)("img",{src:"".concat(".","/static/media/instagram.svg"),alt:""})})})}),Object(l.jsx)("li",{className:"social__li",children:Object(l.jsx)("a",{href:"https://facebook.com",target:"_blank",rel:"noreferrer",title:"facebook",children:Object(l.jsx)("div",{className:"social__li__container",children:Object(l.jsx)("img",{src:"".concat(".","/static/media/facebook.svg"),alt:""})})})}),Object(l.jsx)("li",{className:"social__li",children:Object(l.jsx)("a",{href:"https://twitter.com",target:"_blank",rel:"noreferrer",title:"twitter",children:Object(l.jsx)("div",{className:"social__li__container",children:Object(l.jsx)("img",{src:"".concat(".","/static/media/twitter.svg"),alt:""})})})})]})]}),Object(l.jsx)("div",{className:"contacts__map",children:Object(l.jsx)("iframe",{title:"address",src:"https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d7929.440488692208!2d3.425263!3d6.4299739!3m2!1i1024!2i768!4f13.1!2m1!1z0J7RgdGC0YDQvtCyINCS0LjQutGC0L7RgNC40Y8!5e0!3m2!1sen!2sus!4v1615753827155!5m2!1sen!2sus",width:"280",height:"143",style:{border:0},allowFullScreen:"",loading:"lazy"})})]})]}),Object(l.jsx)("div",{className:"footer__copyright",children:"Copyright \xa9 2020. All rights reserved."})]})}var C=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("div",{className:"App__background"}),Object(l.jsx)("div",{className:"App__header",children:Object(l.jsx)(r,{})}),Object(l.jsx)(w,{}),Object(l.jsx)(S,{})]})},T=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,25)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root")),T()}],[[24,1,2]]]);
//# sourceMappingURL=main.374a7f36.chunk.js.map