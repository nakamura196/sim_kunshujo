(function(t){function e(e){for(var s,r,l=e[0],o=e[1],c=e[2],d=0,m=[];d<l.length;d++)r=l[d],i[r]&&m.push(i[r][0]),i[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,l=1;l<a.length;l++){var o=a[l];0!==i[o]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={app:0},n=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"30db":function(t,e,a){"use strict";var s=a("a4c0"),i=a.n(s);i.a},"3d0f":function(t,e,a){"use strict";var s=a("c4ad"),i=a.n(s);i.a},4459:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"material-kit"}},[a("div",{class:{"nav-open":t.NavbarStore.showNavbar}},[a("router-view",{attrs:{name:"header"}}),a("div",[a("router-view")],1),a("router-view",{attrs:{name:"footer"}})],1)])},n=[],r=a("2877"),l={},o=Object(r["a"])(l,i,n,!1,null,null,null),c=o.exports,u=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("parallax",{staticClass:"section page-header header-filter",style:t.headerStyle},[a("div",{staticClass:"container"},[a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item"},[a("h1",{staticClass:"title"},[t._v("貼り込み資料画像検索プロトタイプ\n          ")]),a("br"),a("md-button",{staticClass:"md-success md-lg",attrs:{to:{name:"search"}}},[a("i",{staticClass:"fas fa-search"}),t._v("試してみる\n          ")])],1)])])]),a("div",{staticClass:"main main-raised"},[t._m(0),a("div",{staticClass:"section",attrs:{id:"example"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"},[a("h2",{staticClass:"title text-center"},[t._v("検索例")]),a("div",{staticClass:"md-layout"},t._l(t.items,function(t,e){return a("div",{key:e,staticClass:"md-layout-item md-size-33 md-xsmall-size-100"},[a("router-link",{attrs:{to:{name:"search",query:{url:t.thumbnail}}}},[a("img",{staticClass:"rounded img-raised img-fluid",attrs:{src:t.thumbnail,alt:"Rounded Image"}})]),a("h4",[a("md-button",{staticClass:"md-just-icon md-simple md-dribbble",attrs:{to:{name:"search",query:{url:t.thumbnail}}}},[a("i",{staticClass:"fa fa-search"})])],1)],1)}),0)])])])])])],1)},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section",attrs:{id:"about"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"},[a("h2",{staticClass:"title text-center"},[t._v("About")]),a("div",{staticClass:"alert alert-info"},[a("div",{staticClass:"container"},[t._v("\n                本システムはプロトタイプ（試作品）であり、データ等が予告なく変更される可能性があります。この点を了解の上でご利用ください。\n              ")])]),a("br"),a("h5",{staticClass:"description"},[t._v("  本システムは東京大学総合図書館が公開する\n              "),a("a",{attrs:{href:"https://iiif.dl.itc.u-tokyo.ac.jp/repo/s/tanaka"}},[t._v("田中芳男・博物学コレクション")]),t._v("の資料と、国立国会図書館デジタルコレクションで公開されている\n              "),a("a",{attrs:{href:"http://dl.ndl.go.jp/info:ndljp/pid/2610716"}},[t._v("張交帖")]),t._v("を対象として、貼り込まれた資料単位での画像検索が可能なプロトタイプです。2019年1月末時点において、99帖、13,069コマ、34,746件の貼り込み資料が検索対象となっています。\n            ")]),a("h5",{staticClass:"description"},[t._v("  貼り込み資料の抽出は、物体検出アルゴリズムYOLO v3を用いて、機械的に実行しています。また、\n              "),a("a",{attrs:{href:"https://kunshujo.dl.itc.u-tokyo.ac.jp/"}},[t._v("電子展示『捃拾帖』")]),t._v("で公開されている貼り込み資料2,645件をモデルのファインチューニングに利用しています。詳細については、\n              "),a("a",{attrs:{href:"https://docs.google.com/presentation/d/1sfb57LXGQSNgJEvaqQUsjzImA6hoVBFBHyban4deYGA/edit?usp=sharing"}},[t._v("こちらの資料")]),t._v("をご確認ください。機械的な抽出処理を行っているため、\n              "),a("b",[t._v("貼り込み資料の抽出漏れ、および抽出誤りが含まれている点にご注意ください")]),t._v("。\n            ")]),a("h5",{staticClass:"description"},[t._v("  画像の閲覧ビューアには、人文学オープンデータ共同利用センターが開発した\n              "),a("a",{attrs:{href:"http://codh.rois.ac.jp/software/iiif-curation-viewer/"}},[t._v("IIIF Curation Viewer")]),t._v("を利用しています。\n            ")])])])])])}],p={bodyClass:"landing-page",props:{header:{type:String,default:a("d4b8")}},data:function(){return{items:[{thumbnail:"https://iiif.dl.itc.u-tokyo.ac.jp/iiif/kunshujou/A00_6010/046/046_0052.tif/4117,620,2186,2324/,300/0/default.jpg"},{thumbnail:"https://iiif.dl.itc.u-tokyo.ac.jp/iiif/kunshujou/A00_6010/053/053_0162.tif/955,699,1920,1349/,300/0/default.jpg"},{thumbnail:"https://iiif.dl.itc.u-tokyo.ac.jp/iiif/kunshujou/A00_6010/049/049_0175.tif/5397,2787,2009,2541/,300/0/default.jpg"},{thumbnail:"https://iiif.dl.itc.u-tokyo.ac.jp/iiif/kunshujou/A00_6010/043/043_0100.tif/5348,2846,1093,1004/,300/0/default.jpg"},{thumbnail:"https://iiif.dl.itc.u-tokyo.ac.jp/iiif/kunshujou/A00_6010/026/026_0027.tif/3813,1735,2678,3432/,300/0/default.jpg"},{thumbnail:"https://iiif.dl.itc.u-tokyo.ac.jp/iiif/kunshujou/A00_6010/065/065_0024.tif/5259,1940,1644,1960/,300/0/default.jpg"}]}},computed:{headerStyle:function(){return{backgroundImage:"url(".concat(this.header,")")}}}},f=p,h=(a("3d0f"),Object(r["a"])(f,d,m,!1,null,"620c893a",null)),v=h.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("parallax",{staticClass:"section page-header header-filter",style:t.headerStyle}),a("div",{staticClass:"main main-raised"},[a("div",{staticClass:"section text-center"},[a("div",{staticClass:"container"},[a("form",{staticClass:"contact-form"},[a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-size-66 mx-auto"},[a("div",{staticClass:"md-field md-theme-default"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],staticClass:"md-input",attrs:{placeholder:"Image URL: e.g. http://...jpg",type:"text",id:"md-input-czbyynxyg"},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}})])])]),a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-size-33 mx-auto"},[a("button",{staticClass:"md-button md-success md-theme-default",staticStyle:{"margin-right":"20px"},attrs:{type:"button"},on:{click:function(e){return t.$router.push({query:{url:t.url}})}}},[t._m(0)]),a("button",{staticClass:"md-button md-primary md-theme-default",attrs:{type:"button"},on:{click:function(e){return t.search_random()}}},[t._m(1)])])])]),a("div",{staticClass:"md-layout"},[null!=this.url?a("div",{staticClass:"md-layout-item md-size-20 md-xsmall-size-100 mx-auto"},[a("br"),a("img",{staticClass:"rounded img-raised img-fluid",attrs:{src:t.url,alt:"Rounded Image"}})]):t._e()]),a("br"),a("br"),a("div",{staticClass:"md-layout"},[this.loading?a("div",{staticClass:"md-layout-item mx-auto"},[a("br"),a("img",{attrs:{width:"45px",src:"https://secure.moneypak.com/cmsfolder/content/images/ring-alt_1.gif"}}),a("br")]):t._e()]),a("div",{staticClass:"md-layout"},t._l(t.items,function(e,s){return a("div",{key:s,staticClass:"md-layout-item md-size-20 md-xsmall-size-100"},[a("router-link",{attrs:{to:{name:"search",query:{url:e.thumbnail}}}},[a("img",{staticClass:"rounded img-raised img-fluid",attrs:{src:e.thumbnail,alt:"Rounded Image"}})]),a("h4",[t._v(t._s(e.label))]),a("p",[a("span",[e.score?a("md-progress-bar",{staticClass:"md-info",attrs:{"md-value":100*e.score}}):t._e(),a("md-tooltip",{attrs:{"md-direction":"top"}},[t._v("類似度: "+t._s(Math.ceil(100*e.score))+"%")])],1),t._l(e.metadata,function(e,s){return a("router-link",{attrs:{to:{name:"search",query:{where_metadata_label:e.label,where_metadata_value:e.value}}}},[a("badge",{attrs:{type:"default"}},[t._v(t._s(e.label)+": "+t._s(e.value))]),t._v(" \n                            ")],1)}),e.metadata.length>0?a("br"):t._e(),a("md-button",{staticClass:"md-just-icon md-simple md-dribbble",on:{click:function(a){return t.$router.push({query:{url:e.thumbnail}})}}},[a("i",{staticClass:"material-icons"},[t._v("search")])]),a("md-button",{staticClass:"md-just-icon md-simple md-twitter",attrs:{target:"_blank",href:e.url}},[a("i",{staticClass:"material-icons"},[t._v("open_in_new")])])],2)],1)}),0)])])])],1)},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"md-ripple"},[a("div",{staticClass:"md-button-content"},[a("i",{staticClass:"fa fa-search"}),t._v("　検索\n                            ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"md-ripple"},[a("div",{staticClass:"md-button-content"},[t._v("ランダム")])])}],_=(a("386d"),a("bc3a")),y=a.n(_),C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeDropDown,expression:"closeDropDown"}],class:[{open:t.isOpen},{dropdown:"down"===t.direction},{dropup:"up"===t.direction}],on:{click:t.toggleDropDown}},[t._t("title",[a("a",{staticClass:"dropdown-toggle",attrs:{"data-toggle":"dropdown",href:"javascript:void(0)"}},[a("i",{class:t.icon}),a("p",[t._v(t._s(t.title))])])]),t._t("default")],2)},w=[],x={name:"drop-down",props:{direction:{type:String,default:"down"},multiLevel:{type:Boolean,default:!1},title:String,icon:String},data:function(){return{isOpen:!1}},methods:{toggleDropDown:function(){this.multiLevel?this.isOpen=!0:this.isOpen=!this.isOpen},closeDropDown:function(){this.isOpen=!1}}},k=x,j=Object(r["a"])(k,C,w,!1,null,null,null),O=j.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:t.styles},[t._t("default")],2)},P=[];function N(t,e,a){var s;return function(){var i=this,n=arguments;clearTimeout(s),s=setTimeout(function(){s=null,a||t.apply(i,n)},e),a&&!s&&t.apply(i,n)}}var $={name:"parallax",data:function(){return{styles:{},debounceTimeout:6}},methods:{handleScroll:function(t){var e=t/3;this.styles={transform:"translate3d(0, ".concat(e,"px,0)")}},checkForParallax:function(t){var e=this,a=N(function(){return e.handleScroll(t)},this.debounceTimeout);a()}},mounted:function(){var t=this;window.addEventListener("scroll",function(){if(window.innerWidth>991){var e=this.scrollY;t.checkForParallax(e)}})}},E=$,T=Object(r["a"])(E,S,P,!1,null,null,null),D=T.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"pagination",class:t.paginationClass},[a("li",{staticClass:"page-item prev-page",class:{disabled:1===t.value,"no-arrows":t.noArrows}},[a("a",{staticClass:"page-link",attrs:{"aria-label":"Previous"},on:{click:t.prevPage}},[t.withText?[t._v("Prev")]:a("i",{staticClass:"fas fa-angle-double-left"})],2)]),t._l(t.range(t.minPage,t.maxPage),function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.value===e}},[a("a",{staticClass:"page-link",on:{click:function(a){return t.changePage(e)}}},[t._v(t._s(e))])])}),a("li",{staticClass:"page-item page-pre next-page",class:{disabled:t.value===t.totalPages,"no-arrows":t.noArrows}},[a("a",{staticClass:"page-link",attrs:{"aria-label":"Next"},on:{click:t.nextPage}},[t.withText?[t._v("Next")]:a("i",{staticClass:"fas fa-angle-double-right"})],2)])],2)},B=[],I=(a("c5f6"),a("6762"),a("2fdb"),{name:"pagination",props:{type:{type:String,default:"primary",validator:function(t){return["default","primary","danger","success","warning","info","rose"].includes(t)}},withText:Boolean,noArrows:Boolean,pageCount:{type:Number,default:0},perPage:{type:Number,default:10},total:{type:Number,default:0},value:{type:Number,default:1}},computed:{paginationClass:function(){return"pagination-".concat(this.type)},totalPages:function(){return this.pageCount>0?this.pageCount:this.total>0?Math.ceil(this.total/this.perPage):1},pagesToDisplay:function(){return this.totalPages>0&&this.totalPages<this.defaultPagesToDisplay?this.totalPages:this.defaultPagesToDisplay},minPage:function(){if(this.value>=this.pagesToDisplay){var t=Math.floor(this.pagesToDisplay/2),e=t+this.value;return e>this.totalPages?this.totalPages-this.pagesToDisplay+1:this.value-t}return 1},maxPage:function(){if(this.value>=this.pagesToDisplay){var t=Math.floor(this.pagesToDisplay/2),e=t+this.value;return e<this.totalPages?e:this.totalPages}return this.pagesToDisplay}},data:function(){return{defaultPagesToDisplay:5}},methods:{range:function(t,e){for(var a=[],s=t;s<=e;s++)a.push(s);return a},changePage:function(t){this.$emit("input",t)},nextPage:function(){this.value<this.totalPages&&this.$emit("input",this.value+1)},prevPage:function(){this.value>1&&this.$emit("input",this.value-1)}},watch:{perPage:function(){this.$emit("input",1)},total:function(){this.$emit("input",1)}}}),M=I,L=Object(r["a"])(M,A,B,!1,null,null,null),z=(L.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"slider",class:["slider-"+t.type],attrs:{disabled:t.disabled}})}),q=[],F=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),H=a("e9fa"),U=a.n(H);function V(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,s)}return a}function Y(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?V(a,!0).forEach(function(e){Object(F["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):V(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var G,J={name:"slider",props:{value:[String,Array,Number],disabled:Boolean,start:{type:[Number,Array],default:0},connect:{type:[Boolean,Array],default:function(){return[!0,!1]}},range:{type:Object,default:function(){return{min:0,max:100}}},type:{type:String,default:""},options:{type:Object,default:function(){return{}}}},data:function(){return{slider:null}},methods:{createSlider:function(){var t=this;U.a.create(this.$el,Y({start:this.value||this.start,connect:this.connect,range:this.range},this.options));var e=this.$el.noUiSlider;e.on("slide",function(){var a=e.get();a!==t.value&&t.$emit("input",a)})}},mounted:function(){this.createSlider()},watch:{value:function(t,e){var a=this.$el.noUiSlider,s=a.get();t!==e&&s!==t&&(Array.isArray(s)&&Array.isArray(t)?e.length===t.length&&e.every(function(e,a){return e===t[a]})&&a.set(t):a.set(t))}}},Q=J,R=Object(r["a"])(Q,z,q,!1,null,null,null),X=R.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.tag,{tag:"component",staticClass:"badge",class:"badge-"+t.type},[t._t("default")],2)},K=[],Z={name:"badge",props:{tag:{type:String,default:"span"},type:{type:String,default:"default",validator:function(t){var e=["primary","info","success","warning","danger","rose","default"];return-1!==e.indexOf(t)}}}},tt=Z,et=Object(r["a"])(tt,W,K,!1,null,null,null),at=et.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-card",{staticClass:"md-card-nav-tabs",class:{"no-label":t.noLabel,"md-card-plain":t.tabsPlain}},[a("md-card-content",[t._t("content")],2)],1)},it=[],nt={name:"nav-tabs-card",props:{noLabel:Boolean,tabsPlain:Boolean}},rt=nt,lt=Object(r["a"])(rt,st,it,!1,null,null,null),ot=(lt.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-card",{staticClass:"md-card-login",class:{"md-card-hidden":t.cardHidden}},[a("md-card-header",{class:t.getClass(t.headerColor)},[t._t("title"),a("div",{staticClass:"social-line"},[t._t("buttons")],2)],2),a("md-card-content",[t._t("description"),t._t("inputs")],2),a("md-card-actions",[t._t("footer")],2)],1)}),ct=[],ut={name:"login-card",props:{headerColor:{type:String,default:""}},data:function(){return{cardHidden:!0}},beforeMount:function(){setTimeout(this.showCard,400)},methods:{showCard:function(){this.cardHidden=!1},getClass:function(t){return"md-card-header-"+t}}},dt=ut,mt=Object(r["a"])(dt,ot,ct,!1,null,null,null),pt=(mt.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-card",{staticClass:"md-card-tabs",class:[{"flex-column":t.flexColumn},{"nav-pills-icons":t.navPillsIcons},{"md-card-plain":t.plain}]},[a("md-card-header",{attrs:{slot:"header-title"},slot:"header-title"}),a("md-card-content",[a("md-list",{staticClass:"nav-tabs"},t._l(t.tabName,function(e,s){var i;return a("md-list-item",{key:e,class:[{active:t.isActivePanel(t.tabName[s])},(i={},i[t.getColorButton(t.colorButton)]=t.isActivePanel(t.tabName[s]),i)],on:{click:function(e){return t.switchPanel(t.tabName[s])}}},[t._v("\n        "+t._s(t.tabName[s])+"\n        "),t.navPillsIcons?a("md-icon",[t._v(t._s(t.tabIcon[s]))]):t._e()],1)}),1),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("div",{staticClass:"tab-content"},t._l(t.tabName,function(e,s){return t.isActivePanel(t.tabName[s])?a("div",{key:e,class:t.getTabContent(s+1)},[t._t(t.getTabContent(s+1),[t._v("\n            This is the default text!\n          ")])],2):t._e()}),0)])],1)],1)}),ft=[],ht={props:{flexColumn:Boolean,navPillsIcons:Boolean,plain:Boolean,tabName:Array,tabIcon:Array,colorButton:{type:String,default:""}},data:function(){return{activePanel:this.tabName[0]}},methods:{switchPanel:function(t){this.activePanel=t},isActivePanel:function(t){return this.activePanel==t},getColorButton:function(t){return"md-"+t},getTabContent:function(t){return"tab-pane-"+t}}},vt=ht,bt=Object(r["a"])(vt,pt,ft,!1,null,null,null),gt=(bt.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeModal,expression:"closeModal"}],staticClass:"modal-container"},[a("div",{staticClass:"modal-header"},[t._t("header")],2),a("div",{staticClass:"modal-body text-center"},[t._t("body")],2),a("div",{staticClass:"modal-footer"},[t._t("footer")],2)])])])])}),_t=[],yt={name:"modal",methods:{closeModal:function(){this.$emit("close")}}},Ct=yt,wt=(a("30db"),Object(r["a"])(Ct,gt,_t,!1,null,null,null)),xt=(wt.exports,{components:{Badge:at,Slider:X},bodyClass:"profile-page",data:function(){return{url:null,items:[],number:60,loading:!0,prefix:"http://arctest06.dl.itc.u-tokyo.ac.jp"}},props:{header:{type:String,default:a("d4b8")}},watch:{$route:function(t,e){this.search()}},computed:{headerStyle:function(){return{backgroundImage:"url(".concat(this.header,")")}}},methods:{search:function(){var t=Object.assign({},this.$route.query);t.where_metadata_label?this.search_metadata(t.where_metadata_label,t.where_metadata_value):t.url?this.search_url(t.url):this.search_random()},search_random:function(){var t=this;this.loading=!0,this.url=null,this.items=[];var e=this.prefix+"/api/random",a={};a.rows=this.number,y.a.get(e,{params:a}).then(function(e){t.loading=!1,t.items=e.data}).catch(function(t){console.log(t)})},search_url:function(t){var e=this;this.loading=!0,this.items=[];var a={};a.url=t,a.rows=this.number,this.url=t;var s=this.prefix+"/api/asearch";y.a.get(s,{params:a}).then(function(t){e.loading=!1,e.items=t.data}).catch(function(t){console.log(t)})},search_metadata:function(t,e){var a=this;this.loading=!0,this.items=[],this.url=null;var s={};s.where_metadata_label=t,s.where_metadata_value=e,s.rows=this.number;var i=this.prefix+"/api/msearch";y.a.get(i,{params:s}).then(function(t){a.loading=!1,a.items=t.data,console.log(a.items)}).catch(function(t){console.log(t)})}},created:function(){this.search()}}),kt=xt,jt=(a("b993"),Object(r["a"])(kt,b,g,!1,null,"193861e6",null)),Ot=jt.exports,St=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("parallax",{staticClass:"section page-header header-filter",style:t.headerStyle}),a("div",{staticClass:"main main-raised"},[a("div",{staticClass:"section"},[a("div",{staticClass:"container"},[t._l(t.items,function(e,s){return[a("h2",{staticClass:"title text-center"},[t._v(t._s(s))]),a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-size-66 mx-auto"},t._l(e,function(e,i){return a("md-button",{attrs:{to:{name:"search",query:{where_metadata_label:s,where_metadata_value:i}}}},[a("i",{staticClass:"fas fa-tag"}),t._v(" "+t._s(i)+": "+t._s(e))])}),1)])]})],2)])])],1)},Pt=[],Nt={components:{Badge:at,Slider:X},bodyClass:"profile-page",data:function(){return{items:{},prefix:"http://arctest06.dl.itc.u-tokyo.ac.jp"}},props:{header:{type:String,default:a("d4b8")}},computed:{headerStyle:function(){return{backgroundImage:"url(".concat(this.header,")")}}},methods:{search:function(){var t=this;this.loading=!0,this.items={};var e=this.prefix+"/api/metadata";y.a.get(e).then(function(e){t.loading=!1,t.items=e.data,console.log(t.items)}).catch(function(t){console.log(t)})}},created:function(){this.search()}},$t=Nt,Et=(a("d4ab"),Object(r["a"])($t,St,Pt,!1,null,"ec8d65d8",null)),Tt=Et.exports,Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-toolbar",{staticClass:"md-transparent md-absolute",class:t.extraNavClasses,attrs:{id:"toolbar","md-elevation":"0","color-on-scroll":t.colorOnScroll}},[a("div",{staticClass:"md-toolbar-row md-collapse-lateral"},[a("div",{staticClass:"md-toolbar-section-start"},[a("h3",{staticClass:"md-title"},[t._v("貼り込み資料画像検索プロトタイプ")])]),a("div",{staticClass:"md-toolbar-section-end"},[a("md-button",{staticClass:"md-just-icon md-simple md-toolbar-toggle",class:{toggled:t.toggledClass},on:{click:function(e){return t.toggleNavbarMobile()}}},[a("span",{staticClass:"icon-bar"}),a("span",{staticClass:"icon-bar"}),a("span",{staticClass:"icon-bar"})]),a("div",{staticClass:"md-collapse"},[a("div",{staticClass:"md-collapse-wrapper"},[a("mobile-menu",{attrs:{"nav-mobile-section-start":"false"}}),a("md-list",[a("md-list-item",{attrs:{to:{name:"index"}}},[a("i",{staticClass:"material-icons"},[t._v("home")]),a("p",[t._v("HOME")])]),a("md-list-item",{attrs:{to:{name:"search"}}},[a("i",{staticClass:"material-icons"},[t._v("search")]),a("p",[t._v("画像検索")])]),a("md-list-item",{attrs:{to:{name:"metadata"}}},[a("i",{staticClass:"material-icons"},[t._v("list")]),a("p",[t._v("メタデータ検索")])]),a("md-list-item",{attrs:{target:"_blank",href:"https://nakamura196.github.io/sim_kunshujo/"}},[a("i",{staticClass:"material-icons"},[t._v("3d_rotation")]),a("p",[t._v("可視化")])]),a("md-list-item",{attrs:{href:"https://docs.google.com/presentation/d/1sfb57LXGQSNgJEvaqQUsjzImA6hoVBFBHyban4deYGA/edit?usp=sharing",target:"_blank"}},[a("i",{staticClass:"material-icons"},[t._v("book")]),a("p",[t._v("説明資料")])])],1)],1)])],1)])])},At=[],Bt=(a("7f7f"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return"true"===t.navMobileSectionStart?a("md-list",{staticClass:"nav-mobile-menu nav-mobile-section-start"},[t._t("default")],2):t._e()}),It=[],Mt={name:"mobile-menu",props:{navMobileSectionStart:{type:String,default:"false"}}},Lt=Mt,zt=Object(r["a"])(Lt,Bt,It,!1,null,null,null),qt=zt.exports;function Ft(t){G||(G=setTimeout(function(){G=null,t()},66))}var Ht={components:{MobileMenu:qt},props:{type:{type:String,default:"white",validator:function(t){return["white","default","primary","danger","success","warning","info"].includes(t)}},colorOnScroll:{type:Number,default:0}},data:function(){return{extraNavClasses:"",toggledClass:!1}},computed:{showDownload:function(){var t=this,e=["login","landing","profile"];return e.every(function(e){return e!==t.$route.name})}},methods:{bodyClick:function(){var t=document.getElementById("bodyClick");if(null===t){var e=document.querySelector("body"),a=document.createElement("div");a.setAttribute("id","bodyClick"),e.appendChild(a);var s=document.getElementById("bodyClick");s.addEventListener("click",this.toggleNavbarMobile)}else t.remove()},toggleNavbarMobile:function(){this.NavbarStore.showNavbar=!this.NavbarStore.showNavbar,this.toggledClass=!this.toggledClass,this.bodyClick()},handleScroll:function(){var t=document.body.scrollTop||document.documentElement.scrollTop,e=document.getElementById("toolbar");this.currentScrollValue=t,this.colorOnScroll>0&&t>this.colorOnScroll?(this.extraNavClasses="md-".concat(this.type),e.classList.remove("md-transparent")):this.extraNavClasses&&(this.extraNavClasses="",e.classList.add("md-transparent"))},scrollListener:function(){Ft(this.handleScroll)},scrollToElement:function(){var t=document.getElementById("downloadSection");t&&t.scrollIntoView({block:"end",behavior:"smooth"})}},mounted:function(){document.addEventListener("scroll",this.scrollListener)},beforeDestroy:function(){document.removeEventListener("scroll",this.scrollListener)}},Ut=Ht,Vt=Object(r["a"])(Ut,Dt,At,!1,null,null,null),Yt=Vt.exports,Gt=function(){var t,e=this,a=e.$createElement,s=e._self._c||a;return s("footer",{staticClass:"footer",class:(t={},t["footer-"+e.type]=e.type,t),attrs:{"data-background-color":e.backgroundColor}},[e._m(0)])},Jt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("nav",[a("ul",[a("li",[a("a",{attrs:{href:"https://iiif.dl.itc.u-tokyo.ac.jp/repo/s/tanaka"}},[t._v("\n                        田中芳男・博物学コレクション\n                    ")])]),a("li",[a("a",{attrs:{href:"https://kunshujo.dl.itc.u-tokyo.ac.jp/"}},[t._v("\n                        電子展示『捃拾帖』\n                    ")])]),a("li",[a("a",{attrs:{href:"http://dl.ndl.go.jp/info:ndljp/pid/2610716"}},[t._v("\n                        国立国会図書館『張交帖』\n                    ")])])])]),a("div",{staticClass:"copyright"},[t._v("\n            東京大学学術資産等アーカイブズ委員会事務局"),a("br"),t._v("\n            （東京大学附属図書館総務課／"),a("br"),t._v("\n            学術資産アーカイブ化推進室）"),a("br"),t._v("\n            E-mail：digital-archive [at] lib.u-tokyo.ac.jp\n            "),a("hr"),t._v("\n            Design from "),a("a",{attrs:{href:"https://www.creative-tim.com/"}},[t._v("Creative Tim")]),t._v(".\n        ")])])}],Qt={props:{backgroundColor:String,type:String},data:function(){return{year:(new Date).getFullYear()}}},Rt=Qt,Xt=Object(r["a"])(Rt,Gt,Jt,!1,null,null,null),Wt=Xt.exports;s["default"].use(u["a"]);var Kt=new u["a"]({routes:[{path:"/",name:"index",components:{default:v,header:Yt,footer:Wt},props:{header:{colorOnScroll:100},footer:{backgroundColor:"black"}}},{path:"/search",name:"search",components:{default:Ot,header:Yt,footer:Wt},props:{header:{colorOnScroll:10},footer:{backgroundColor:"black"}}},{path:"/metadata",name:"metadata",components:{default:Tt,header:Yt,footer:Wt},props:{header:{colorOnScroll:10},footer:{backgroundColor:"black"}}}],scrollBehavior:function(t){return t.hash?{selector:t.hash}:{x:0,y:0}}}),Zt=a("43f9"),te=a.n(Zt),ee=(a("51de"),a("60b6"),a("4459"),a("c7db")),ae={install:function(t){t.directive("click-outside",ee["directive"])}},se=ae,ie={install:function(t){t.mixin({mounted:function(){var t=this.$options.bodyClass;t&&document.body.classList.add(t)},beforeDestroy:function(){var t=this.$options.bodyClass;t&&document.body.classList.remove(t)}})}},ne=ie,re=a("e37d"),le={install:function(t){t.component("drop-down",O),t.component(D.name,D),t.component("v-popover",re["a"])}},oe=le,ce=a("caf9"),ue=a("0a63"),de=a.n(ue),me={install:function(t){t.use(te.a),t.use(se),t.use(ne),t.use(oe),t.use(de.a),t.use(ce["a"],{observer:!0,observerOptions:{rootMargin:"0px",threshold:.1}})}};s["default"].config.productionTip=!1,s["default"].use(me);var pe={showNavbar:!1};s["default"].mixin({data:function(){return{NavbarStore:pe}}}),new s["default"]({router:Kt,render:function(t){return t(c)}}).$mount("#app")},"60b6":function(t,e,a){},a4c0:function(t,e,a){},b535:function(t,e,a){},b993:function(t,e,a){"use strict";var s=a("f05d"),i=a.n(s);i.a},c4ad:function(t,e,a){},d4ab:function(t,e,a){"use strict";var s=a("b535"),i=a.n(s);i.a},d4b8:function(t,e,a){t.exports=a.p+"static/img/bg7.63731a37.jpg"},f05d:function(t,e,a){}});
//# sourceMappingURL=app.87f5e696.js.map