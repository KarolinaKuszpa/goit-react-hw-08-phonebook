"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[598],{3598:function(t,e,n){n.r(e),n.d(e,{default:function(){return b}});var a=n(2791),r=n(9434),c=n(4270),s=n(3634),o=n(9439),i={form:"ContactForm_form__dhl+T",label:"ContactForm_label__-cVXI",input:"ContactForm_input__Bl93P",button:"ContactForm_button__eSwX9",error:"ContactForm_error__C1smZ",container:"ContactForm_container__qpJ1N"},u=n(3329),l=function(){var t=(0,r.I0)(),e=(0,a.useState)(""),n=(0,o.Z)(e,2),c=n[0],l=n[1],m=(0,a.useState)(""),d=(0,o.Z)(m,2),f=d[0],h=d[1];return(0,u.jsx)("div",{className:i.container,children:(0,u.jsxs)("form",{className:i.form,onSubmit:function(e){e.preventDefault(),""!==c.trim()&&""!==f.trim()&&(t((0,s.xf)({name:c,number:f})),l(""),h(""))},children:[(0,u.jsx)("input",{type:"text",placeholder:"Name",value:c,name:"name",pattern:"^^[A-Za-z.'\\- ]+$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(t){return l(t.target.value)},className:i.input}),(0,u.jsx)("input",{type:"text",placeholder:"Phone Number",value:f,pattern:"^\\+?\\d{1,4}?\\s?\\(?\\d{1,4}?\\)?\\s?\\d{1,4}\\s?\\d{1,4}\\s?\\d{1,9}$",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:function(t){return h(t.target.value)},className:i.input}),(0,u.jsx)("button",{className:i.addContactBtn,type:"submit",children:"Add Contact"})]})})},m=n(5861),d=n(7757),f=n.n(d),h={list:"ContactList_list__csErn",item:"ContactList_item__EZYHO",button:"ContactList_button__7kL4l"},p=function(){var t=(0,r.I0)(),e=(0,r.v9)((function(t){return t.contacts.contacts})),n=(0,r.v9)((function(t){return t.contacts.filter}));(0,a.useEffect)((function(){var e=function(){var e=(0,m.Z)(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t((0,s.yF)());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]);var c=e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}));return(0,u.jsx)("div",{className:h.container,children:(0,u.jsx)("ul",{className:h.contactList,children:c.map((function(e){return(0,u.jsxs)("li",{className:h.contactItem,children:[(0,u.jsx)("span",{className:h.contactName,children:e.name}),(0,u.jsx)("span",{className:h.contactNumber,children:e.number}),(0,u.jsx)("button",{className:h.deleteBtn,onClick:function(){return n=e.id,void t((0,s.GK)(n));var n},children:"Delete"})]},e.id)}))})})},_=function(t){return t.contacts.loading},v=function(t){return t.contacts.filter},x="Filter_container__L5eml",C="Filter_input__N7T3z",j=function(t){var e=t.filter,n=t.handleFilterChange;return(0,u.jsx)("div",{className:x,children:(0,u.jsx)("input",{className:C,type:"text",placeholder:"Search contacts...",value:e,onChange:n})})},N=n(1538);function b(){var t=(0,r.I0)(),e=(0,r.v9)(_),n=(0,r.v9)(v);(0,a.useEffect)((function(){t((0,s.yF)())}),[t]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c.q,{children:(0,u.jsx)("title",{children:"Your tasks"})}),(0,u.jsx)("div",{children:e&&"Request in progress..."}),(0,u.jsx)(l,{}),(0,u.jsx)(j,{filter:n,handleFilterChange:function(e){t((0,N.Tv)(e.target.value))}}),(0,u.jsx)(p,{})]})}}}]);
//# sourceMappingURL=598.83ae0b6a.chunk.js.map