import{d as T,u as F,r as v,o as P,a as Q,b as u,c as r,e,t as l,f as t,w as f,v as w,g as y,h as U,F as S,i as N,j as G,k as J}from"./index-9ab13210.js";import{_ as x}from"./Svg.vue_vue_type_style_index_0_lang-fbdd2fff.js";const O={class:"container"},Z={class:"quiz"},$={class:"question"},A={key:0,class:"svg-clickable"},H={key:1,class:"svg-non-clickable"},K={class:"next-overlay"},W={class:"start-overlay"},X={class:"start-ui"},Y=e("h1",null,"Level:",-1),ee=["id","value"],te={for:"one"},se=e("p",null,"Totaal aantal gemeentes: todo ",-1),oe={class:"end-overlay"},ne=e("h1",null,"End",-1),le=T({__name:"Quiz",setup(q){const m=+F().params.id,j=["Makkelijk","Normaal","Moeilijk"];let d=[],i=[],c=0,_=!1,b=[],C=v(""),a=v(),p=v("?"),z=v(0),h=v("start");P(()=>{M()});function M(){if(localStorage.getItem("data"))d=JSON.parse(localStorage.getItem("data")||"[]");else for(let o=0;o<Q.length;o++)d.push(Q[o])}function V(){i=E(a.value,5),h.value="ongoing",console.log(i)}function D(o){let s;switch(o){case"Makkelijk":s=0;break;case"Normaal":s=1;break;case"Moeilijk":s=2;break;default:s=0;break}return s}function E(o,s){console.log("level"+o);let n=[],g=D(o);for(let k=0;k<d[m].towns.length;k++)d[m].towns[k].level==g&&n.push(d[m].towns[k].name);return n.sort(()=>.5-Math.random()).slice(0,s)}function I(o){if(o.toLowerCase()==i[c].toLowerCase()){p.value="correct, gemeente is "+o,z.value++;let s={id:i[c],answer:"correct"};b.push(s)}else{p.value="incorrect, gemeente is "+o;let s={id:i[c],answer:"incorrect"};b.push(s)}_=!0}function B(){c>=i.length&&(h.value="end")}function R(){c++,p.value="?",B(),_=!1}return(o,s)=>(u(),r("div",O,[e("h1",null,"Quiz: "+l(t(C))+" ("+l(t(a))+")",1),f(e("div",Z,[e("h2",$,"Duid "+l(t(i)[t(c)])+" aan",1),e("p",null,l(t(p)),1),e("p",null,"Score: "+l(t(z)),1),t(_)?t(_)?(u(),r("div",H,[y(x)])):U("",!0):(u(),r("div",A,[y(x,{onGetTown:s[0]||(s[0]=n=>I(n))})]))],512),[[w,t(h)=="ongoing"]]),f(e("div",K,[e("button",{type:"button",class:"btnNext",onClick:R},"Volgende")],512),[[w,t(_)]]),f(e("div",W,[e("div",X,[Y,(u(),r(S,null,N(j,n=>e("div",null,[f(e("input",{"onUpdate:modelValue":s[1]||(s[1]=g=>G(a)?a.value=g:a=g),type:"radio",id:n,value:n},null,8,ee),[[J,t(a)]]),e("label",te,l(n),1)])),64)),se,e("button",{type:"button",class:"btnStart",onClick:V},"Start quiz"),e("h1",null,l(t(a)),1)])],512),[[w,t(h)=="start"]]),f(e("div",oe,[ne,e("h2",null,"Score: "+l(t(z)),1),e("h3",null,"Level: "+l(t(a)),1),e("ul",null,[(u(!0),r(S,null,N(t(b),n=>(u(),r("li",null,l(n.id)+": "+l(n.answer),1))),256))])],512),[[w,t(h)=="end"]])]))}});const ce=T({__name:"QuizView",setup(q){return(L,m)=>(u(),r("main",null,[y(le)]))}});export{ce as default};
