(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{52:function(e,t,l){"use strict";l.r(t),l.d(t,"default",function(){return c});var n=l(0),a=l.n(n),o=l(15),r=l(9);function c(){var e=Object(o.useRouteData)().posts;return a.a.createElement("div",null,a.a.createElement("h1",null,"It's blog time."),a.a.createElement("div",null,a.a.createElement("a",{href:"#bottom",id:"top"},"Scroll to bottom!")),a.a.createElement("br",null),"All Posts:",a.a.createElement("ul",null,e.map(function(e){return a.a.createElement("li",{key:e.id},a.a.createElement(r.a,{to:"/blog/post/".concat(e.id,"/")},e.title))})),a.a.createElement("a",{href:"#top",id:"bottom"},"Scroll to top!"))}}}]);