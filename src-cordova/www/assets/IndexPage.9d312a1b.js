import{Q as n}from"./QImg.335d7c84.js";import{Q as t}from"./QBtn.61f4c83c.js";import{Q as _}from"./QPage.7559e4b7.js";import{_ as h,I as v,r as c,K as r,L as g,M as y,Y as s,Q as d,N as e,U as u}from"./index.3a3b590a.js";import"./render.452481b2.js";const f=v({name:"IndexPage",setup(){const o=c(null),a=c("play_arrow"),l=c("volume_up");let i="play";return{audio:o,muteIcon:l,playIcon:a,playPause:()=>{i=="play"?(a.value="pause",o.value.pause(),i="pause"):(a.value="play_arrow",o.value.play(),i="play")},muteUnmute:()=>{l.value=l.value=="volume_up"?"volume_off":"volume_up",o.value.muted=!o.value.muted}}}}),x={autoplay:"",ref:"audio"},k=s("source",{src:"/audio/intro.mp3",type:"audio/mpeg"},null,-1),w=[k],b={key:0},C=s("div",{class:"row justify-center"},[s("div",{class:"col-5 text-center",style:{"margin-top":"10px",border:"dashed #d5d656"}},[s("span",{class:"text-h6"}," Ol\xE1, eu sou o Luke, um dognauta! Preciso resgatar meu irm\xE3o Mike no planeta tamon Voc\xEA poderia me ajudar? ")])],-1),q={class:"row"},I={class:"col"},$={class:"col",style:{"margin-top":"80px","margin-left":"250px"}},P={class:"btn-box"},Q={class:"row"},B={class:"col"},U={class:"row"},j={class:"col-auto"},z={class:"row",style:{"margin-left":"50px"}},N={class:"col"},V={class:"col"},J={class:"col"},L={class:"row",style:{"margin-top":"45px"}},M={class:"col"},E={key:1},K={class:"row justify-center items-center content-center"},O={class:"row justify-center items-center content-center"},S={class:"btn-box"},Y={class:"row"},A={class:"col"},D={class:"row"},F={class:"col"},G={class:"row",style:{"margin-left":"50px"}},H={class:"col"},R={class:"col"};function T(o,a,l,i,m,p){return r(),g(_,{class:"q-pa-sm"},{default:y(()=>[s("audio",x,w,512),o.$q.screen.md||o.$q.screen.xl||o.$q.screen.lg?(r(),d("div",b,[C,s("div",q,[s("div",I,[e(n,{src:"/images/game/rocket.png",style:{height:"280px","max-width":"300px"}})]),s("div",$,[s("div",P,[s("div",Q,[s("div",B,[e(t,{class:"btn",outline:"",rounded:"",icon:"sports_esports",color:"primary",label:"Jogar",size:"xl",to:"/game"})])]),s("div",U,[s("div",j,[e(t,{class:"btn",icon:"tips_and_updates",outline:"",rounded:"",color:"primary",label:"Cr\xE9ditos",size:"xl",to:"/creditos"})])]),s("div",z,[s("div",N,[e(t,{round:"",outline:"",color:"light",class:"q-ma-xs",icon:o.playIcon,onClick:o.playPause},null,8,["icon","onClick"])]),s("div",V,[e(t,{round:"",outline:"",color:"light",class:"q-ma-xs",icon:o.muteIcon,onClick:o.muteUnmute},null,8,["icon","onClick"])])])])]),s("div",J,[e(n,{src:"/images/game/luke.png",style:{height:"280px","max-width":"200px","margin-left":"80px"}})])]),s("div",L,[s("div",M,[e(n,{src:"/images/background/sand_2.png",style:{height:"auto","max-width":"100%"}})])])])):u("",!0),o.$q.screen.sm||o.$q.screen.xs?(r(),d("div",E,[s("div",K,[e(n,{src:"/images/game/levels/initial.png",style:{height:"380px","max-width":"300px"}})]),s("div",O,[s("div",S,[s("div",Y,[s("div",A,[e(t,{class:"btn",outline:"",rounded:"",color:"primary",label:"Jogar",size:"xl",to:"/game"})])]),s("div",D,[s("div",F,[e(t,{class:"btn",outline:"",rounded:"",color:"primary",label:"Cr\xE9ditos",size:"xl",to:"/creditos"})])]),s("div",G,[s("div",H,[e(t,{round:"",outline:"",color:"light",class:"q-ma-xs",icon:o.playIcon,onClick:o.playPause},null,8,["icon","onClick"])]),s("div",R,[e(t,{round:"",outline:"",color:"light",class:"q-ma-xs",icon:o.muteIcon,onClick:o.muteUnmute},null,8,["icon","onClick"])])])])])])):u("",!0)]),_:1})}var es=h(f,[["render",T]]);export{es as default};
