const __vite__fileDeps=["assets/announce_數理資訊社幹部招募.md.C1d9m262.js","assets/chunks/framework.ByW368YX.js","assets/announce_焦點.md.MNk83Ad-.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as l,o as c,c as r,l as e,a4 as v,j as $,k as g,h as x,F as I,E as k,a3 as h,t as p,p as m,q as b,r as C,a as s,I as _}from"./chunks/framework.ByW368YX.js";const y={name:"Banner"},M={class:"banner"},z=e("div",{class:"banner-overlay"},[e("h1",{class:"banner-title"},"政大數理資訊社"),e("p",{class:"banner-subtitle"},"NCCU MITC")],-1),P=e("img",{src:v,alt:"banner",class:"banner-image"},null,-1),D=[z,P];function E(t,i,d,n,o,a){return c(),r("div",M,D)}const N=l(y,[["render",E]]),T={class:"cards-container"},j=["href"],w=["src"],A={class:"card-title"},U={class:"card-description"},O={__name:"AnnounceCards",setup(t){const i=$([]);g(async()=>{const n=Object.assign({"/announce/數理資訊社幹部招募.md":()=>h(()=>import("./announce_數理資訊社幹部招募.md.C1d9m262.js"),__vite__mapDeps([0,1])),"/announce/焦點.md":()=>h(()=>import("./announce_焦點.md.MNk83Ad-.js"),__vite__mapDeps([2,1]))});for(const o in n){const a=await n[o](),{frontmatter:u}=a.__pageData,f=o.replace("/docs","").replace(".md","");u.link=`/MITC-Web-vitepress${f}`,i.value.push(u)}});const d=x(()=>i.value.sort((n,o)=>new Date(o.date)-new Date(n.date)));return(n,o)=>(c(),r("div",T,[(c(!0),r(I,null,k(d.value,a=>(c(),r("div",{key:a.title,class:"card"},[e("a",{href:a.link,class:"card-link"},[e("img",{src:a.image,alt:"Card Image",class:"card-image"},null,8,w),e("h3",A,p(a.title),1),e("p",U,p(a.description),1)],8,j)]))),128))]))}},S=l(O,[["__scopeId","data-v-a319b729"]]),W={},Y=t=>(m("data-v-b5ef0555"),t=t(),b(),t),B={class:"calendar-container"},Z=Y(()=>e("iframe",{src:"https://calendar.google.com/calendar/embed?src=M2MyNzc4MWE2YmMyNWU0ZDAwZWUyZmU5OWNmNzY0M2RkMGFmMjJhMDI3ZjdmZDdiYzg0ZTkwYTljMzc2OWIyYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&ctz=Asia/Taipei",style:{border:"0"},width:"800",height:"600",frameborder:"0",scrolling:"no"},null,-1)),V=[Z];function R(t,i){return c(),r("div",B,V)}const F=l(W,[["render",R],["__scopeId","data-v-b5ef0555"]]),G={mounted(){const t=document.createElement("script");t.src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js",t.async=!0,document.body.appendChild(t)}},L=t=>(m("data-v-8df1fbc2"),t=t(),b(),t),H={class:"layout"},J=L(()=>e("footer",null,[e("span",{id:"busuanzi_container_site_pv"},[s(" 本站總訪問量"),e("span",{id:"busuanzi_value_site_pv"}),s("次 ")]),e("br"),e("span",{id:"busuanzi_container_page_pv"},[s(" 本頁總訪問量"),e("span",{id:"busuanzi_value_page_pv"}),s("次 ")])],-1));function q(t,i,d,n,o,a){return c(),r("div",H,[e("main",null,[C(t.$slots,"default",{},void 0,!0)]),J])}const K=l(G,[["render",q],["__scopeId","data-v-8df1fbc2"]]),Q=e("hr",null,null,-1),X=e("h1",{id:"about",tabindex:"-1"},[s("About "),e("a",{class:"header-anchor",href:"#about","aria-label":'Permalink to "About"'},"​")],-1),ee=e("p",null,"歡迎來到 MITc NCCU 數理資訊社！",-1),te=e("p",null,"在數理資訊社",-1),ae=e("p",null,"... 略",-1),se=e("h1",{id:"upcomming-events",tabindex:"-1"},[s("Upcomming Events "),e("a",{class:"header-anchor",href:"#upcomming-events","aria-label":'Permalink to "Upcomming Events"'},"​")],-1),ne=e("br",null,null,-1),oe=e("h1",{id:"calendar",tabindex:"-1"},[s("Calendar "),e("a",{class:"header-anchor",href:"#calendar","aria-label":'Permalink to "Calendar"'},"​")],-1),ce=e("h1",{id:"photos",tabindex:"-1"},[s("Photos "),e("a",{class:"header-anchor",href:"#photos","aria-label":'Permalink to "Photos"'},"​")],-1),de=JSON.parse('{"title":"Home","description":"","frontmatter":{"layout":"home","title":"Home"},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),re={name:"index.md"},_e=Object.assign(re,{setup(t){return(i,d)=>(c(),r("div",null,[_(N),Q,X,ee,te,ae,se,ne,_(S),oe,_(F),ce,_(K)]))}});export{de as __pageData,_e as default};
