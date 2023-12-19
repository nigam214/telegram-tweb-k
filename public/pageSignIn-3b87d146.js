import{a as s,b as L,s as E,c as w,i as m,A as C,_ as I,d as x,I as N,e as M,f as F}from"./index-72a9583b.js";import{p as O}from"./putPreloader-e976e17e.js";import{P as V,a as B}from"./page-b6554ddc.js";import{C as U,T as W,a as z}from"./countryInputField-75c3e7c5.js";import{B as P,r as H}from"./button-c51ae85b.js";import{p as K,l as Q,t as $,r as h}from"./wrapEmojiText-80f04338.js";import{p as j,g as q}from"./pageSignQR-03a8871b.js";import"./scrollable-50ab9bf6.js";import"./textToSvgURL-c6ebb454.js";let a=null,l;const D=()=>{const g=document.createElement("div");g.classList.add("input-wrapper");let y,k;const d=new U({onCountryChange:(e,t)=>{y=e,k=t,t&&(i.value=i.lastValue="+"+t.country_code,setTimeout(()=>{u.focus(),K(u,!0)},0))}}),i=new W({onInput:e=>{Q.loadLottieWorkers();const{country:t,code:o}=e||{},n=t?t.name||t.default_name:"";n!==d.value&&(!y||!t||!o||y!==t&&k.country_code!==o.country_code)&&d.override(t,o,n),t||i.value.length-1>1?a.style.visibility="":a.style.visibility="hidden"}}),u=i.input;u.addEventListener("keypress",e=>{if(!a.style.visibility&&e.key==="Enter")return S()});const c=new z({text:"Login.KeepSigned",name:"keepSession",withRipple:!0,checked:!0});c.input.addEventListener("change",()=>{const e=c.checked;s.managers.appStateManager.pushToState("keepSigned",e),L.toggleStorages(e,!0)}),L.getState().then(e=>{E.isAvailable()?c.checked=e.keepSigned:(c.checked=!1,c.label.classList.add("checkbox-disabled"))}),a=P("btn-primary btn-color-primary",{text:"Login.Next"}),a.style.visibility="hidden";const S=e=>{e&&w(e);const t=$([a,l],!0);h(a,m("PleaseWait")),O(a);const o=i.value;s.managers.apiManager.invokeApi("auth.sendCode",{phone_number:o,api_id:C.id,api_hash:C.hash,settings:{_:"codeSettings",pFlags:{}}}).then(n=>{if(n._==="auth.sentCodeSuccess"){const{authorization:r}=n;r._==="auth.authorization"&&(s.managers.apiManager.setUser(r.user),I(()=>import("./pageIm-b8dc8562.js"),["./pageIm-b8dc8562.js","./index-72a9583b.js","./index-5c4b8e53.css","./page-b6554ddc.js"],import.meta.url).then(b=>{b.default.mount()}))}I(()=>import("./pageAuthCode-f4b78d21.js"),["./pageAuthCode-f4b78d21.js","./index-72a9583b.js","./index-5c4b8e53.css","./page-b6554ddc.js","./codeInputField-08065f19.js","./wrapEmojiText-80f04338.js","./button-c51ae85b.js","./putPreloader-e976e17e.js","./countryInputField-75c3e7c5.js","./scrollable-50ab9bf6.js","./pageSignQR-03a8871b.js","./textToSvgURL-c6ebb454.js"],import.meta.url).then(r=>r.default.mount(Object.assign(n,{phone_number:o})))}).catch(n=>{switch(t(),n.type){case"PHONE_NUMBER_INVALID":i.setError(),h(i.label,m("Login.PhoneLabelInvalid")),u.classList.add("error"),h(a,m("Login.Next"));break;default:console.error("auth.sendCode error:",n),a.innerText=n.type;break}})};B(a,S),l=P("btn-primary btn-secondary btn-primary-transparent primary",{text:"Login.QR.Login"}),l.addEventListener("click",()=>{j.mount()}),g.append(d.container,i.container,c.label,a,l);const _=document.createElement("h4");_.classList.add("text-center"),x(_,"Login.Title");const f=document.createElement("div");f.classList.add("subtitle","text-center"),x(f,"Login.StartText"),R.pageEl.querySelector(".container").append(_,f,g);const T=()=>{s.managers.apiManager.invokeApi("help.getNearestDc").then(e=>{const t=E.getFromCache("langPack");t&&!t.countries?.hash&&M.getLangPack(t.lang_code).then(()=>{i.simulateInputEvent()});const o=new Set([1,2,3,4,5]),n=[e.this_dc];let r;return e.nearest_dc!==e.this_dc&&(r=s.managers.apiManager.getNetworkerVoid(e.nearest_dc).then(()=>{n.push(e.nearest_dc)})),(r||Promise.resolve()).then(()=>{n.forEach(p=>{o.delete(p)});const b=[...o],v=async()=>{const p=b.shift();if(!p)return;const A=`dc${p}_auth_key`;if(await F.get(A))return v();setTimeout(()=>{s.managers.apiManager.getNetworkerVoid(p).finally(v)},3e3)};v()}),e}).then(e=>{!d.value.length&&!i.value.length&&d.selectCountryByIso2(e.country)})};N||setTimeout(()=>{u.focus()},0),q(g),T()},R=new V("page-sign",!0,D,()=>{a&&(h(a,m("Login.Next")),H(a,void 0,void 0,!0),a.removeAttribute("disabled")),l&&l.removeAttribute("disabled"),s.managers.appStateManager.pushToState("authState",{_:"authStateSignIn"})});export{R as default};
//# sourceMappingURL=pageSignIn-3b87d146.js.map
