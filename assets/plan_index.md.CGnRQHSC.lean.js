const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/proj_website.md.Cdz-UCxJ.js","assets/chunks/framework.BYDQR71q.js"])))=>i.map(i=>d[i]);
import{_ as h,p,v as u,h as m,c as n,o,F as f,B as P,j as t,t as d,af as b,ae as x,G as v,a as k}from"./chunks/framework.BYDQR71q.js";const g={class:"cards-container"},T=["href"],D=["src"],V={class:"card-title"},j={class:"card-description"},q={__name:"ProjCards",setup(l){const i=p([]);u(async()=>{const s=Object.assign({"/proj/website.md":()=>b(()=>import("./proj_website.md.Cdz-UCxJ.js"),__vite__mapDeps([0,1]))});for(const r in s){const a=await s[r](),{frontmatter:c}=a.__pageData,_=r.replace("/docs","").replace(".md","");c.link=`/MITC-Web-vitepress${_}`,i.value.push(c)}});const e=m(()=>i.value.sort((s,r)=>new Date(r.date)-new Date(s.date)));return(s,r)=>(o(),n("div",g,[(o(!0),n(f,null,P(e.value,a=>(o(),n("div",{key:a.title,class:"card"},[t("a",{href:a.link,class:"card-link"},[t("img",{src:a.image,alt:"Card Image",class:"card-image"},null,8,D),t("h3",V,d(a.title),1),t("p",j,d(a.description),1)],8,T)]))),128))]))}},C=h(q,[["__scopeId","data-v-e56e2561"]]),S=JSON.parse('{"title":"本學期規劃","description":"","frontmatter":{},"headers":[],"relativePath":"plan/index.md","filePath":"plan/index.md"}'),I={name:"plan/index.md"},w=Object.assign(I,{setup(l){return(i,e)=>(o(),n("div",null,[e[0]||(e[0]=x("",5)),v(C),e[1]||(e[1]=t("h2",{id:"工作坊",tabindex:"-1"},[k("工作坊 "),t("a",{class:"header-anchor",href:"#工作坊","aria-label":'Permalink to "工作坊"'},"​")],-1))]))}});export{S as __pageData,w as default};
