import{a as u,e as b,m as v,c as y,_ as S}from"./index-f0511d48.js";import{p as L}from"./putPreloader-9c44509c.js";import{P,a as k}from"./page-dec71894.js";import{B as I}from"./button-a6142618.js";import{P as _,a as E,h as M}from"./htmlToSpan-a92ba69f.js";import{L as x}from"./loginPage-f593ce3f.js";import{r as N,w as A,t as D}from"./wrapEmojiText-e095a953.js";let t;const T=()=>{const d=new x({className:"page-password",withInputWrapper:!0,titleLangKey:"Login.Password.Title",subtitleLangKey:"Login.Password.Subtitle"}),a=I("btn-primary btn-color-primary"),s=new b.IntlElement({key:"Login.Next"});a.append(s.element);const e=new _({label:"LoginPassword",name:"password"});t=e.input,d.inputWrapper.append(e.container,a);let l;const p=()=>(l||(l=window.setInterval(p,1e4)),u.managers.passwordManager.getState().then(r=>{n=r,n.hint?N(e.label,M(A(n.hint))):e.setLabel()}));let n;const m=r=>{if(r&&y(r),!t.value.length){t.classList.add("error");return}const h=D([t,a],!0),c=t.value;s.update({key:"PleaseWait"});const g=L(a);e.setValueSilently(""+Math.random()),e.setValueSilently(c),u.managers.passwordManager.check(c,n).then(i=>{switch(i._){case"auth.authorization":clearInterval(l),S(()=>import("./pageIm-2544e8f3.js"),["./pageIm-2544e8f3.js","./index-f0511d48.js","./index-5c4b8e53.css","./page-dec71894.js"],import.meta.url).then(f=>{f.default.mount()}),o&&o.remove();break;default:a.removeAttribute("disabled"),s.update({key:i._}),g.remove();break}}).catch(i=>{switch(h(),e.input.classList.add("error"),i.type){default:s.update({key:"PASSWORD_HASH_INVALID"}),t.select();break}g.remove(),p()})};k(a,m),t.addEventListener("keypress",function(r){if(this.classList.remove("error"),s.update({key:"Login.Next"}),r.key==="Enter")return m()});const w=v.isMobile?100:166,o=new E(e,w);return d.imageDiv.append(o.container),Promise.all([o.load(),p()])},K=new P("page-password",!0,T,null,()=>{t.focus(),u.managers.appStateManager.pushToState("authState",{_:"authStatePassword"})});export{K as default};
//# sourceMappingURL=pagePassword-a907d9dc.js.map
