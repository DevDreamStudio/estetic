import{o as i,b as t,e,f as m,g as r,i as $,A as M,B as S,r as B,t as g,I as E,w as V,m as h,F as v,k as f,l as y,j as L,p as _,S as H,q as I,y as N,N as O,s as T,v as j,x as A,J as R,K as D,z as F,c as k,C as Q,T as Z,E as q,L as U}from"./index-ebec1b72.js";import{_ as J}from"./BookingModal-8acb067d.js";import{_ as C}from"./ServicesItem-00399d7e.js";const K="/estetic/assets/quotes-c7c58e16.svg",Y={key:0,class:"main__specitem-certificates"},G={class:"main__specitem-certificates-wrapper"},W=e("h4",{class:"main__specitem-certificates-wrapper-title"},"Сертификаты:",-1),X=["innerHTML"],ee={key:0,class:"main__specitem-certificates-wrapper-img",src:K,alt:"декоративная картинка"},se={__name:"SpecialistCertificates",props:{profile:{type:Object}},setup(s){return(o,a)=>s.profile&&s.profile.certificates?(i(),t("div",Y,[e("div",G,[W,e("div",{innerHTML:s.profile.certificates,class:"main__specitem-certificates-wrapper-text"},null,8,X),s.profile.certificates?(i(),t("img",ee)):m("",!0)])])):m("",!0)}},ie={key:0,"data-aos":"fade-down",class:"main__specitem-profile"},te={class:"main__specitem-profile-inner"},oe={class:"main__specitem-profile-content"},ne={class:"main__specitem-profile-content-title"},ae={class:"main__specitem-profile-content-position"},le=["innerHTML"],ce=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 28 28"},[e("path",{d:"M20.6357 16.8975L20.627 8.07324C20.627 7.45801 20.2227 7.03613 19.5898 7.03613H10.7568C10.1592 7.03613 9.74609 7.48438 9.74609 8.01172C9.74609 8.53027 10.1943 8.96094 10.7305 8.96094H13.8857L17.6123 8.83789L16.0127 10.2441L7.67188 18.5938C7.46973 18.8047 7.35547 19.0508 7.35547 19.2969C7.35547 19.8154 7.83008 20.3076 8.36621 20.3076C8.6123 20.3076 8.8584 20.2021 9.06934 20L17.4189 11.6504L18.8428 10.0508L18.6934 13.6191V16.9238C18.6934 17.4688 19.124 17.9258 19.6602 17.9258C20.1875 17.9258 20.6357 17.4775 20.6357 16.8975Z"})],-1),re={class:"main__specitem-profile-wrapper"},pe={class:"main__specitem-profile-wrapper-img"},de={key:0,class:"main__specitem-profile-wrapper-img-mobile"},_e={alt:"фото врача"},me={key:1,viewBox:"0 0 496 628",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ue=e("defs",null,[e("clipPath",{id:"clip0_1575_6295"},[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M185 0H40C17.9086 0 0 17.9086 0 40V428C0 450.091 17.9086 468 40 468H145C167.091 468 185 485.909 185 508V588C185 610.091 202.909 628 225 628H456C478.091 628 496 610.091 496 588V468V40C496 17.9086 478.091 0 456 0H185Z"})])],-1),fe={"clip-path":"url(#clip0_1575_6295)"},he=e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M185 0H40C17.9086 0 0 17.9086 0 40V428C0 450.091 17.9086 468 40 468H145C167.091 468 185 485.909 185 508V588C185 610.091 202.909 628 225 628H456C478.091 628 496 610.091 496 588V468V40C496 17.9086 478.091 0 456 0H185Z",fill:"#A3C8F2","fill-opacity":"0.2"},null,-1),ve=["href"],we={class:"main__specitem-profile-wrapper-inner"},ge={class:"main__specitem-profile-wrapper-inner-box"},ye={class:"main__specitem-profile-wrapper-inner-box-content"},xe={class:"main__specitem-profile-wrapper-inner-box-content-title"},ke=e("span",{class:"main__specitem-profile-wrapper-inner-box-content-caption"}," Стаж работы в клинике Эстетик ",-1),Le={class:"main__specitem-profile-wrapper-inner-box"},be={class:"main__specitem-profile-wrapper-inner-box-content"},Ce={class:"main__specitem-profile-wrapper-inner-box-content-title"},$e=e("span",{class:"main__specitem-profile-wrapper-inner-box-content-caption"}," Стаж в косметологии ",-1),Me={class:"main__specitem-profile-wrapper-inner-box"},Se={class:"main__specitem-profile-wrapper-inner-box-content"},Be={class:"main__specitem-profile-wrapper-inner-box-content-title"},Ve=e("span",{class:"main__specitem-profile-wrapper-inner-box-content-caption"}," Опыт работы ",-1),He={__name:"SpecialistProfile",props:{profile:{type:Object}},setup(s){const o=r(!1),a=()=>{o.value=!0,document.body.classList.add("no-scroll")},p=()=>{o.value=!1,document.body.classList.remove("no-scroll")},n=r(!1),c=window.matchMedia("(max-width: 480px)");function d(l){n.value=l.matches}return $(()=>{M.refresh(),n.value=c.matches,c.addEventListener("change",d)}),S(()=>{c.removeEventListener("change",d)}),(l,u)=>{const w=B("lazy");return i(),t(v,null,[s.profile?(i(),t("div",ie,[e("div",te,[e("div",oe,[e("h3",ne,g(s.profile.full_name),1),e("span",ae,g(s.profile.position),1),e("div",{class:"main__specitem-profile-content-certificate",innerHTML:s.profile.about},null,8,le),e("button",{onClick:a,class:"main__specitem-profile-content-btn"},[E(" записаться к врачу "),ce])]),e("div",re,[e("div",pe,[n.value?(i(),t("div",de,[V(e("img",_e,null,512),[[w,s.profile.photo]])])):(i(),t("svg",me,[ue,e("g",fe,[he,e("image",{href:s.profile.photo,x:"0",y:"0",width:"100%",height:"105%",preserveAspectRatio:"xMaxYMax slice"},null,8,ve)])]))]),e("div",we,[e("div",ge,[e("div",ye,[e("h4",xe,g(s.profile.experience_in_company)+"+ ",1),ke])]),e("div",Le,[e("div",be,[e("h4",Ce,g(s.profile.experience_in_field)+"+ ",1),$e])]),e("div",Me,[e("div",Se,[e("h4",Be,g(s.profile.experience_in_years)+"+ ",1),Ve])])])])])])):m("",!0),o.value?(i(),h(J,{key:1,onCloseModalRewiev:p})):m("",!0)],64)}}};const Ie={key:0,"data-aos":"fade-down",class:"main__specitem-diploms"},Pe=e("h3",{class:"main__specitem-diploms-title"},"дипломы сотрудника",-1),ze={class:"main__specitem-diploms-wrapper"},Ee=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 28 28",fill:"none"},[e("path",{d:"M16.8002 19.6001L11.2002 14.0001L16.8002 8.4001","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"})],-1),Ne=[Ee],Oe={class:"main__specitem-diploms-wrapper-inner"},Te={class:"main__specitem-diploms-wrapper-inner-slider-slide-img"},je=["onClick","src"],Ae=e("div",{class:"swiper-lazy-preloader"},null,-1),Re=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 28 28",fill:"none"},[e("path",{d:"M11.1998 8.3999L16.7998 13.9999L11.1998 19.5999","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"})],-1),De=[Re],Fe={alt:"фото диплома"},Qe=e("path",{d:"M15 1L1 15M15 15L1 1","stroke-width":"2","stroke-linecap":"round"},null,-1),Ze=[Qe],qe={__name:"DiplomSpecItem",props:{profile:{type:Object}},setup(s){const o=r(null),a=r(null),p=r([O,T]);let n=r({breakpoints:{360:{spaceBetween:15},600:{spaceBetween:24}}});const c=r(!1),d=r(""),l=w=>{d.value=w,c.value=!0,document.body.classList.add("no-scroll")},u=()=>{c.value=!1,document.body.classList.remove("no-scroll")};return(w,x)=>{const P=B("lazy");return i(),t(v,null,[s.profile&&s.profile.diplomas.length?(i(),t("div",Ie,[Pe,e("div",ze,[e("button",{ref_key:"prev",ref:o,class:"main__specitem-diploms-wrapper-prev"},Ne,512),e("div",Oe,[f(_(I),{centeredSlides:s.profile.diplomas.length<3,breakpoints:_(n).breakpoints,modules:p.value,navigation:{prevEl:o.value,nextEl:a.value},loop:s.profile.diplomas.length>3,spaceBetween:24,slidesPerView:"auto",class:"main__specitem-diploms-wrapper-inner-slider",lazy:!0,lazyPreloadPrevNext:1,preloadImages:"false"},{default:y(()=>[(i(!0),t(v,null,L(s.profile.diplomas,(b,z)=>(i(),h(_(H),{key:z,class:"main__specitem-diploms-wrapper-inner-slider-slide"},{default:y(()=>[e("div",Te,[e("img",{onClick:is=>l(b.file),src:b.file,alt:"фото диплома",loading:"lazy"},null,8,je),Ae])]),_:2},1024))),128))]),_:1},8,["centeredSlides","breakpoints","modules","navigation","loop"])]),e("button",{ref_key:"next",ref:a,class:"main__specitem-diploms-wrapper-next"},De,512)])])):m("",!0),c.value?(i(),t("div",{key:1,class:"main__specitem-diploms-modal",onClick:u},[e("div",{class:"main__specitem-diploms-modal-content",onClick:x[0]||(x[0]=N(()=>{},["stop"]))},[V(e("img",Fe,null,512),[[P,d.value]])]),(i(),t("svg",{onClick:u,class:"main__specitem-diploms-modal-close",width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},Ze))])):m("",!0)],64)}}},Ue={key:0,class:"main__specitem-performed"},Je={key:0,"data-aos":"fade-down",class:"main__specitem-performed-wrapper"},Ke=e("h2",{class:"main__specitem-performed-wrapper-title"}," выполняемые процедуры ",-1),Ye={class:"main__specitem-performed-inner"},Ge={key:1,class:"main__specitem-performed"},We={key:0,"data-aos":"fade-down",class:"main__specitem-performed-wrapper"},Xe=e("h2",{class:"main__specitem-performed-wrapper-title"}," выполняемые процедуры ",-1),es={class:"main__specitem-performed-slider"},ss={__name:"SpecialistPerformed",props:{specialiList:{type:Array}},setup(s){const o=r(!1),a=window.matchMedia("(min-width: 710px)"),p=()=>{o.value=a.matches};j(()=>{p(),a.addEventListener("change",p)}),A(()=>{a.removeEventListener("change",p)});const n=r({breakpoints:{360:{slidesPerView:1,spaceBetween:16},680:{slidesPerView:2}}});return(c,d)=>o.value?(i(),t("div",Ue,[s.specialiList&&s.specialiList.length?(i(),t("div",Je,[Ke,e("div",Ye,[(i(!0),t(v,null,L(s.specialiList,l=>(i(),h(C,{item:l.service,key:l.id},null,8,["item"]))),128))])])):m("",!0)])):(i(),t("div",Ge,[s.specialiList&&s.specialiList.length?(i(),t("div",We,[Xe,e("div",es,[f(_(I),{loop:s.specialiList.length>4,breakpoints:n.value.breakpoints},{default:y(()=>[(i(!0),t(v,null,L(s.specialiList,l=>(i(),h(_(H),{key:l.id},{default:y(()=>[f(C,{item:l.service},null,8,["item"])]),_:2},1024))),128))]),_:1},8,["loop","breakpoints"])])])):m("",!0)]))}},as={__name:"SpecialistItemPage",setup(s){const o=r(!1),a=R(),p=D();let n=F(),c=k(()=>a.params?a.params.id:1),d=k(()=>c?n.specialistId:"");const l=k(()=>n.specialistId?n.specialistId.procedures:null);return $(async()=>{M.refresh(),document.body.classList.add("no-scroll"),o.value=!1;try{const u=await n.getSpecialistById(c.value);u.success||p.push(u.status===404?"/404":"/error")}catch(u){console.error("Ошибка при получении специалиста:",u),p.push("/error")}finally{o.value=!0,document.body.classList.remove("no-scroll")}}),S(()=>{o.value===!1&&document.body.classList.remove("no-scroll")}),(u,w)=>{const x=Q("Preloader");return i(),t(v,null,[f(Z,{name:"preloader"},{default:y(()=>[o.value?m("",!0):(i(),h(x,{key:0}))]),_:1}),f(He,{profile:_(d)},null,8,["profile"]),f(se,{profile:_(d)},null,8,["profile"]),_(n).specialistId&&_(n).specialistId.procedures.length?(i(),h(ss,{key:0,specialiList:l.value},null,8,["specialiList"])):m("",!0),f(q),f(qe,{profile:_(d)},null,8,["profile"]),f(U)],64)}}};export{as as default};
