"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[917],{3917:function(e,t,n){n.r(t);var r=n(885),a=n(5984),o=n(5048),s=n(2791),u=n(8724),i=n(3329);t.default=function(){var e=(0,s.useState)(""),t=(0,r.Z)(e,2),n=t[0],l=t[1],c=(0,s.useState)(""),m=(0,r.Z)(c,2),p=m[0],d=m[1],h=(0,o.I0)(),f=(0,a.x0)(),g=(0,a.x0)(),w=function(e){var t=e.currentTarget,n=t.name,r=t.value;switch(console.log(e.currentTarget.name),n){case"email":l(r);break;case"password":d(r);break;default:return}};return(0,i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h(u.Z.logIn({email:n,password:p})),l(""),d("")},children:[(0,i.jsxs)("label",{htmlFor:f,children:["Email",(0,i.jsx)("input",{onChange:w,type:"email",name:"email",required:!0})]}),(0,i.jsxs)("label",{htmlFor:g,children:["Password",(0,i.jsx)("input",{onChange:w,type:"password",name:"password",minLength:7,autoComplete:"current-password",required:!0})]}),(0,i.jsx)("button",{className:"main_button",type:"submit",children:"Log In"})]})}},5984:function(e,t,n){n.d(t,{x0:function(){return r}});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=917.8fe75ace.chunk.js.map