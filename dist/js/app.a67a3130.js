(function(t){function e(e){for(var r,i,o=e[0],c=e[1],u=e[2],p=0,d=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},s=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0753":function(t,e,n){"use strict";n("1341")},1341:function(t,e,n){},"1eea":function(t,e,n){},"283c":function(t,e,n){"use strict";n("dd38")},3247:function(t,e,n){},"3ee2":function(t,e,n){},"48d7":function(t,e,n){"use strict";n("1eea")},"56d7":function(t,e,n){"use strict";n.r(e);n("c3a6");var r=n("ad06"),a=(n("0653"),n("34e9")),s=(n("c194"),n("7744")),i=(n("66cf"),n("343b")),o=(n("4056"),n("44bf")),c=(n("4d48"),n("d1e1")),u=(n("81e6"),n("9ffb")),l=(n("5852"),n("d961")),p=(n("a52c"),n("2ed4")),d=(n("537a"),n("ac28")),f=(n("5246"),n("6b41")),h=(n("66b9"),n("b650")),m=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view")],1)},g=[],y={},b=y,w=(n("034f"),n("2877")),_=Object(w["a"])(b,v,g,!1,null,null,null),x=_.exports,C=n("8c4f"),S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"layout"}},[n("van-nav-bar",{attrs:{title:t.$route.meta.title,fixed:""}}),n("router-view"),n("van-tabbar",{attrs:{route:""}},[n("van-tabbar-item",{attrs:{replace:"",to:"/layout/home",icon:"home-o"}},[t._v("首页")]),n("van-tabbar-item",{attrs:{replace:"",to:"/layout/search",icon:"search"}},[t._v("搜索")])],1)],1)},k=[],L={name:"Layout",data:function(){return{}},created:function(){},methods:{}},j=L,O=(n("48d7"),Object(w["a"])(j,S,k,!1,null,"7432b53b",null)),I=O.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("p",{staticClass:"title"},[t._v("推荐歌单")]),n("div",[n("van-row",{attrs:{gutter:"20"}},t._l(t.list,(function(e){return n("van-col",{key:e.id,attrs:{span:"8"}},[n("van-image",{attrs:{fit:"cover",height:"3rem","lazy-load":"",src:e.picUrl}}),n("p",{staticClass:"song_name"},[t._v(" "+t._s(e.name)+" ")])],1)})),1)],1),n("p",{staticClass:"title"},[t._v("最新音乐")]),n("van-cell-group",t._l(t.newList,(function(t){return n("SongItem",{key:t.id,attrs:{id:t.id,title:t.name,label:t.song.artists[0].name}})})),1)],1)},R=[],E=n("1da1"),P=(n("96cf"),n("d3b7"),n("bc3a")),D=n.n(P),T=D.a.create({baseURL:"http://localhost:3000",timeout:3e3});T.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),T.interceptors.response.use((function(t){return t.data}),(function(t){return Promise.reject(t)}));var z=T;function H(){return z({method:"get",url:"/personalized",params:{limit:6}})}var M=function(){return z({method:"get",url:"/personalized/newsong"})},N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-cell",{attrs:{center:"",title:t.title,label:t.label},on:{click:t.play},scopedSlots:t._u([{key:"right-icon",fn:function(){return[n("van-icon",{attrs:{name:"play-circle-o",size:"24"}})]},proxy:!0}])})},U=[],q=(n("a9e3"),{props:{title:String,label:String,id:Number},methods:{play:function(){this.$router.push({name:"play",params:{id:this.id}})}}}),A=q,B=Object(w["a"])(A,N,U,!1,null,null,null),G=B.exports,J={name:"Home",components:{SongItem:G},data:function(){return{list:[],newList:[]}},created:function(){this.getData(),this.getNewData()},methods:{getNewData:function(){var t=this;return Object(E["a"])(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,M();case 2:n=e.sent,r=n.code,a=n.result,200===r&&(t.newList=a);case 6:case"end":return e.stop()}}),e)})))()},getData:function(){var t=this;return Object(E["a"])(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,H();case 2:n=e.sent,r=n.code,a=n.result,200===r&&(t.list=a);case 6:case"end":return e.stop()}}),e)})))()}}},V=J,F=(n("f6b9"),Object(w["a"])(V,$,R,!1,null,"0215eb78",null)),K=F.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-search",{attrs:{shape:"round",placeholder:"请输入搜索关键词"},on:{input:t.searchByInput},model:{value:t.words,callback:function(e){t.words=e},expression:"words"}}),n("div",{staticClass:"search_wrap"},[0===t.searchList.length?n("div",{staticClass:"hot_name_wrap"},[n("p",{staticClass:"hot_title"},[t._v("热门搜索")]),t._l(t.hotArr,(function(e,r){return n("span",{key:r,staticClass:"hot_item",on:{click:function(n){return t.handleClickHot(e.first)}}},[t._v(t._s(e.first))])}))],2):n("div",{staticClass:"hot_name_wrap"},[n("p",{staticClass:"hot_title"},[t._v("搜索列表")]),n("van-cell-group",t._l(t.searchList,(function(t){return n("SongItem",{key:t.id,attrs:{id:t.id,title:t.name,label:t.artists[0].name}})})),1)],1)])],1)},W=[],X=function(){return z({url:"/search/hot"})},Y=function(t){return z({method:"get",url:"/search",params:{keywords:t,limit:20}})},Z={name:"Search",components:{SongItem:G},data:function(){return{hotArr:[],words:"",searchList:[]}},created:function(){this.getHotData()},methods:{getHotData:function(){var t=this;return Object(E["a"])(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,X();case 2:n=e.sent,r=n.code,a=n.result,200===r&&(t.hotArr=a.hots);case 6:case"end":return e.stop()}}),e)})))()},handleClickHot:function(t){var e=this;return Object(E["a"])(regeneratorRuntime.mark((function n(){var r,a,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.words=t,n.next=3,Y(e.words);case 3:r=n.sent,a=r.code,s=r.result,200===a&&(e.searchList=s.songs);case 7:case"end":return n.stop()}}),n)})))()},searchByInput:function(){var t=this;return Object(E["a"])(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==t.words){e.next=3;break}return t.searchList=[],e.abrupt("return");case 3:return e.next=5,Y(t.words);case 5:n=e.sent,r=n.code,a=n.result,200===r&&(t.searchList=a.songs);case 9:case"end":return e.stop()}}),e)})))()}}},tt=Z,et=(n("283c"),Object(w["a"])(tt,Q,W,!1,null,"f92c40ea",null)),nt=et.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"play"},[n("div",{staticClass:"song-bg",style:"background-image: url("+(t.songInfo&&t.songInfo.al&&t.songInfo.al.picUrl)+"?imageView&thumbnail=360y360&quality=75&tostatic=0);"}),n("div",{staticClass:"header"},[n("van-icon",{staticClass:"left-incon",attrs:{name:"arrow-left",size:"20"},on:{click:function(e){return t.$router.back()}}})],1),n("div",{staticClass:"song-wrapper"},[n("div",{staticClass:"song-turn ani",style:"animation-play-state:"+(t.playState?"running":"paused")},[n("div",{staticClass:"song-img"},[n("img",{staticStyle:{width:"100%"},attrs:{src:(t.songInfo&&t.songInfo.al&&t.songInfo.al.picUrl)+"?imageView&thumbnail=360y360&quality=75&tostatic=0",alt:""}})])]),n("div",{staticClass:"start-box",on:{click:t.audioStart}},[n("span",{directives:[{name:"show",rawName:"v-show",value:!t.playState,expression:"!playState"}],staticClass:"song-start"})]),n("div",{staticClass:"song-msg"},[n("h2",{staticClass:"m-song-h2"},[n("span",{staticClass:"m-song-sname"},[t._v(t._s(t.songInfo.name)+"-"+t._s(t.songInfo&&t.songInfo.ar&&t.songInfo.ar[0].name))])]),n("div",{staticClass:"lrcContent"},[n("p",{staticClass:"lrc"},[t._v(t._s(t.curLyric))])])]),n("div",{staticClass:"needle",style:"transform: rotate("+t.needleDeg+");"})]),n("audio",{ref:"audio",attrs:{preload:"true",src:"https://music.163.com/song/media/outer/url?id="+t.id+".mp3"}})])},at=[],st=n("ade3"),it=(n("b0c0"),n("ac1f"),n("466d"),n("fb6a"),n("1276"),n("159b"),function(t){return z({url:"/song/detail?ids=".concat(t),method:"GET"})}),ot=function(t){return z({url:"/lyric?id=".concat(t),method:"GET"})},ct={components:Object(st["a"])({},r["a"].name,r["a"]),name:"play",data:function(){return{playState:!1,id:this.$route.params.id,songInfo:{},lyric:{},curLyric:"",lastLy:""}},computed:{needleDeg:function(){return this.playState?"-7deg":"-38deg"}},methods:{getSong:function(){var t=this;return Object(E["a"])(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,it(t.id);case 2:return n=e.sent,t.songInfo=n.songs[0],e.next=6,ot(t.id);case 6:r=e.sent,a=r.lrc.lyric,t.lyric=t._formatLyr(a),t.curLyric=t.lyric[0];case 10:case"end":return e.stop()}}),e)})))()},_formatLyr:function(t){var e=/\[.+?\]/g,n=t.match(e),r=t.split(/\[.+?\]/).slice(1),a={};return n.forEach((function(t,e){var n=60*t.split(":")[0].split("")[2],s="0"===t.split(":")[1].split(".")[0].split("")[0]?t.split(":")[1].split(".")[0].split("")[1]:t.split(":")[1].split(".")[0];a[n+Number(s)]=r[e]})),a},audioStart:function(){this.playState?this.$refs.audio.pause():this.$refs.audio.play(),this.playState=!this.playState},showLyric:function(){var t=this;this.$refs.audio.addEventListener("timeupdate",(function(){if(t.$refs.audio){var e=Math.floor(t.$refs.audio.currentTime);t.lyric[e]?(t.curLyric=t.lyric[e],t.lastLy=t.curLyric):t.curLyric=t.lastLy}}))}},mounted:function(){this.getSong(),this.showLyric(),console.log(this.$route.params.id)}},ut=ct,lt=(n("0753"),Object(w["a"])(ut,rt,at,!1,null,"e4a6899a",null)),pt=lt.exports;m["a"].use(C["a"]);var dt=new C["a"]({mode:"history",routes:[{path:"/",redirect:"/layout"},{name:"layout",path:"/layout",component:I,children:[{path:"/layout",redirect:"/layout/home"},{path:"home",component:K,meta:{title:"首页"}},{path:"search",component:nt,meta:{title:"搜索"}}]},{name:"play",path:"/play/:id",component:pt}]});n("5cfb"),n("3ee2");m["a"].use(h["a"]),m["a"].use(f["a"]),m["a"].use(d["a"]),m["a"].use(p["a"]),m["a"].use(l["a"]),m["a"].use(u["a"]),m["a"].use(c["a"]),m["a"].use(o["a"]),m["a"].use(i["a"]),m["a"].use(s["a"]),m["a"].use(a["a"]),m["a"].use(r["a"]),m["a"].config.productionTip=!1,new m["a"]({router:dt,render:function(t){return t(x)}}).$mount("#app")},"85ec":function(t,e,n){},dd38:function(t,e,n){},f6b9:function(t,e,n){"use strict";n("3247")}});
//# sourceMappingURL=app.a67a3130.js.map