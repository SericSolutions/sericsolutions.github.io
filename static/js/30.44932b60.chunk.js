webpackJsonp([30,124,127,128,129],{1847:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"GoogleChart",function(){return y});var l=n(0),o=n.n(l),c=n(2707),s=n(34),u=n(1969),d=n(1967),p=n(1955),m=n(1988),f=n(2038),h=n(2817),g=n(2093),x=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),y=function(t){return o.a.createElement(g.a,null,o.a.createElement(c.a,{load:n.e(126).then(n.bind(null,2982)),componentProps:t,componentArguement:"googleChart"}))},b=function(t){function e(){return r(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),x(e,[{key:"render",value:function(){var t=[{eventName:"select",callback:function(t){}}],e=f.a.rowStyle,n=f.a.colStyle,r=f.a.gutter;return o.a.createElement(p.default,{className:"isoMapPage"},o.a.createElement(u.default,null,"Google Charts"),o.a.createElement(s.D,{style:e,gutter:r,justify:"start"},o.a.createElement(s.k,{md:12,xs:24,style:n},o.a.createElement(d.default,{title:h.b.title},o.a.createElement(m.default,null,o.a.createElement(y,Object.assign({},h.b,{chartEvents:t}))))),o.a.createElement(s.k,{md:12,xs:24,style:n},o.a.createElement(d.default,{title:h.p.title},o.a.createElement(m.default,null,o.a.createElement(y,h.p))))),o.a.createElement(s.D,{style:e,gutter:r,justify:"start"},o.a.createElement(s.k,{md:12,xs:24,style:n},o.a.createElement(d.default,{title:h.c.title},o.a.createElement(m.default,null,o.a.createElement(y,h.c)))),o.a.createElement(s.k,{md:12,xs:24,style:n},o.a.createElement(d.default,{title:h.h.title},o.a.createElement(m.default,null,o.a.createElement(y,h.h))))),o.a.createElement(s.D,{style:e,gutter:r,justify:"start"},o.a.createElement(s.k,{md:12,xs:24,style:n},o.a.createElement(d.default,{title:h.i.title},o.a.createElement(m.default,null,o.a.createElement(y,h.i)))),o.a.createElement(s.k,{md:12,xs:24,style:n},o.a.createElement(d.default,{title:h.a.title},o.a.createElement(m.default,null,o.a.createElement(y,h.a))))),o.a.createElement(s.D,{style:e,gutter:r,justify:"start"},o.a.createElement(s.k,{md:12,xs:24,style:n},o.a.createElement(d.default,{title:h.d.title},o.a.createElement(m.default,null,o.a.createElement(y,h.d)))),o.a.createElement(s.k,{md:12,xs:24,style:n},o.a.createElement(d.default,{title:h.e.title},o.a.createElement(m.default,null,o.a.createElement(y,h.e))))),o.a.createElement(s.D,{style:e,gutter:r,justify:"start"},o.a.createElement(s.k,{md:12,xs:24,style:n},o.a.createElement(d.default,{title:h.f.title},o.a.createElement(m.default,null,o.a.createElement(y,h.f)))),o.a.createElement(s.k,{md:12,xs:24,style:n},o.a.createElement(d.default,{title:h.j.title},o.a.createElement(m.default,null,o.a.createElement(y,h.j))))),o.a.createElement(s.D,{style:e,gutter:r,justify:"start"},o.a.createElement(s.k,{md:12,xs:24,style:n},o.a.createElement(d.default,{title:h.k.title},o.a.createElement(m.default,null,o.a.createElement(y,h.k)))),o.a.createElement(s.k,{md:12,xs:24,style:n},o.a.createElement(d.default,{title:h.l.title},o.a.createElement(m.default,null,o.a.createElement(y,h.l))))),o.a.createElement(s.D,{style:e,gutter:r,justify:"start"},o.a.createElement(s.k,{md:12,xs:24,style:n},o.a.createElement(d.default,{title:h.m.title},o.a.createElement(m.default,null,o.a.createElement(y,h.m)))),o.a.createElement(s.k,{md:12,xs:24,style:n},o.a.createElement(d.default,{title:h.n.title},o.a.createElement(m.default,null,o.a.createElement(y,h.n))))),o.a.createElement(s.D,{style:e,gutter:r,justify:"start"},o.a.createElement(s.k,{md:12,xs:24,style:n},o.a.createElement(d.default,{title:h.g.title},o.a.createElement(m.default,null,o.a.createElement(y,h.g)))),o.a.createElement(s.k,{md:12,xs:24,style:n},o.a.createElement(d.default,{title:h.o.title},o.a.createElement(m.default,null,o.a.createElement(y,h.o))))))}}]),e}(l.Component);e.default=b},1955:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),a=n.n(r),i=n(1976);e.default=function(t){return a.a.createElement(i.a,Object.assign({className:null!=t.className?t.className+" isoLayoutContentWrapper":"isoLayoutContentWrapper"},t),t.children)}},1967:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),a=n.n(r),i=n(1978),l=n(1980);e.default=function(t){return a.a.createElement(l.a,{className:t.className+" isoBoxWrapper",style:t.style},a.a.createElement(i.a,{title:t.title,subtitle:t.subtitle}),t.children)}},1969:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),a=n.n(r),i=n(1993);e.default=function(t){return a.a.createElement(i.a,{className:"isoComponentTitle"},t.children)}},1976:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(43),a=function(t,e){return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"],["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]),i=r.b.div(a)},1978:function(t,e,n){"use strict";var r=n(0),a=n.n(r),i=n(1979);e.a=function(t){return a.a.createElement("div",null,t.title?a.a.createElement(i.b,{className:"isoBoxTitle"}," ",t.title," "):"",t.subtitle?a.a.createElement(i.a,{className:"isoBoxSubTitle"}," ",t.subtitle," "):"")}},1979:function(t,e,n){"use strict";function r(t,e){return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}n.d(e,"b",function(){return c}),n.d(e,"a",function(){return s});var a=n(43),i=n(68),l=(n.n(i),r(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"],["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"])),o=r(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"],["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]),c=a.b.h3(l,Object(i.palette)("text",0)),s=a.b.p(o,Object(i.palette)("text",3))},1980:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var r=n(43),a=n(68),i=(n.n(a),function(t,e){return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"],["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"])),l=r.b.div(i,Object(a.palette)("border",0),"")},1988:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),a=n.n(r),i=n(2033);e.default=function(t){return a.a.createElement(i.a,{className:"isoExampleWrapper",style:t.style},t.children)}},1993:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n(43),a=n(68),i=(n.n(a),n(75)),l=function(t,e){return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"],["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]),o=r.b.h1(l,Object(a.palette)("secondary",2),Object(a.palette)("secondary",3),function(t){return"rtl"===t["data-rtl"]?"0 0 0 15px":"0 15px 0 0"},Object(a.palette)("secondary",3),function(t){return"rtl"===t["data-rtl"]?"0 15px 0 0":"0 0 0 15px"}),c=Object(i.a)(o)},2033:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n(43),a=n(68),i=(n.n(a),n(75)),l=function(t,e){return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ",";\n      margin-right: ",";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ",";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ",";\n      margin-right: ",";\n    }\n\n    &:nth-child(4) {\n      margin-left: ",";\n      margin-right: ",";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ",";\n      white-space: nowrap;\n      margin-right: ",";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ",";\n      margin-left: ",";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ",";\n    margin-right: ",";\n    margin-left: ",";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ",";\n      margin-left: ",";\n\n      &:last-child {\n        margin-right: ",";\n        margin-left: ",";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"],["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ",";\n      margin-right: ",";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ",";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ",";\n      margin-right: ",";\n    }\n\n    &:nth-child(4) {\n      margin-left: ",";\n      margin-right: ",";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ",";\n      white-space: nowrap;\n      margin-right: ",";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ",";\n      margin-left: ",";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ",";\n    margin-right: ",";\n    margin-left: ",";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ",";\n      margin-left: ",";\n\n      &:last-child {\n        margin-right: ",";\n        margin-left: ",";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"]),o=r.b.div(l,function(t){return"rtl"===t["data-rtl"]?"0":"10px"},function(t){return"rtl"===t["data-rtl"]?"10px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"70px"},function(t){return"rtl"===t["data-rtl"]?"70px":"0"},function(t){return"rtl"===t["data-rtl"]?"right":"left"},function(t){return"rtl"===t["data-rtl"]?"0":"295px"},function(t){return"rtl"===t["data-rtl"]?"295px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"70px"},function(t){return"rtl"===t["data-rtl"]?"70px":"0"},function(t){return"rtl"===t["data-rtl"]?"8px":"0 !important"},function(t){return"rtl"===t["data-rtl"]?"0 !important":"8px"},function(t){return"rtl"===t["data-rtl"]?"0":"8px"},function(t){return"rtl"===t["data-rtl"]?"8px":"0"},Object(a.palette)("secondary",1),function(t){return"rtl"===t["data-rtl"]?"auto":"6px"},function(t){return"rtl"===t["data-rtl"]?"6px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"15px"},function(t){return"rtl"===t["data-rtl"]?"15px":"0"},function(t){return t["data-rtl"],"0"},function(t){return t["data-rtl"],"0"}),c=Object(i.a)(o)},2038:function(t,e,n){"use strict";var r={width:"100%",display:"flex",flexFlow:"row wrap"},a={marginBottom:"16px"},i={rowStyle:r,colStyle:a,gutter:16};e.a=i},2093:function(t,e,n){"use strict";var r=n(43),a=n(68),i=(n.n(a),n(75)),l=function(t,e){return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  .isoChartControl {\n    display: flex;\n    align-items: center;\n    margin-left: ",";\n    margin-right: ",";\n    margin-bottom: 20px;\n\n    span {\n      font-size: 13px;\n      color: ",";\n      font-weight: 400;\n      margin-right: ",";\n      margin-left: ",";\n    }\n\n    button {\n      border: 1px solid ",";\n      padding: 0 10px;\n      border-radius: 0;\n      position: relative;\n\n      span {\n        margin: 0;\n      }\n\n      &:last-child {\n        margin-left: ",";\n        margin-right: ",";\n      }\n\n      &:hover {\n        color: ",";\n        border-color: ",";\n        z-index: 1;\n\n        span {\n          color: ",";\n        }\n      }\n    }\n  }\n"],["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  .isoChartControl {\n    display: flex;\n    align-items: center;\n    margin-left: ",";\n    margin-right: ",";\n    margin-bottom: 20px;\n\n    span {\n      font-size: 13px;\n      color: ",";\n      font-weight: 400;\n      margin-right: ",";\n      margin-left: ",";\n    }\n\n    button {\n      border: 1px solid ",";\n      padding: 0 10px;\n      border-radius: 0;\n      position: relative;\n\n      span {\n        margin: 0;\n      }\n\n      &:last-child {\n        margin-left: ",";\n        margin-right: ",";\n      }\n\n      &:hover {\n        color: ",";\n        border-color: ",";\n        z-index: 1;\n\n        span {\n          color: ",";\n        }\n      }\n    }\n  }\n"]),o=r.b.div(l,function(t){return"rtl"===t["data-rtl"]?"inherit":"auto"},function(t){return"rtl"===t["data-rtl"]?"auto":"inherit"},Object(a.palette)("text",1),function(t){return"rtl"===t["data-rtl"]?"inherit":"15px"},function(t){return"rtl"===t["data-rtl"]?"15px":"inherit"},Object(a.palette)("border",0),function(t){return"rtl"===t["data-rtl"]?"inherit":"-1px"},function(t){return"rtl"===t["data-rtl"]?"-1px":"inherit"},Object(a.palette)("primary",0),Object(a.palette)("primary",0),Object(a.palette)("primary",0));e.a=Object(i.a)(o)},2707:function(t,e,n){"use strict";function r(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function r(a,i){try{var l=e[a](i),o=l.value}catch(t){return void n(t)}if(!l.done)return Promise.resolve(o).then(function(t){r("next",t)},function(t){r("throw",t)});t(o)}return r("next")})}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function l(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var o=n(24),c=n.n(o),s=n(0),u=n.n(s),d=n(729),p=n.n(d),m=n(730),f=(n.n(m),function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()),h=function(t){function e(){var t,n,r,l;a(this,e);for(var o=arguments.length,c=Array(o),s=0;s<o;s++)c[s]=arguments[s];return n=r=i(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(c))),r.state={Component:void 0},l=n,i(r,l)}return l(e,t),f(e,[{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"componentDidMount",value:function(){function t(){return e.apply(this,arguments)}var e=r(c.a.mark(function t(){var e,n,r,a,i,l;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.mounted=!0,e=this.props.componentArguement,n=void 0,t.t0=e,t.next="googleChart"===t.t0?6:12;break;case 6:return t.next=8,this.props.load;case 8:return r=t.sent,a=r.Chart,n=a,t.abrupt("break",17);case 12:return t.next=14,this.props.load;case 14:i=t.sent,l=i.default,n=l;case 17:this.mounted&&this.setState({Component:u.a.createElement(n,this.props.componentProps)});case 18:case"end":return t.stop()}},t,this)}));return t}()},{key:"render",value:function(){var t=this.state.Component||u.a.createElement("div",null);try{if(this.mounted)return u.a.createElement(p.a,{type:"text",rows:7,ready:void 0!==t},t)}catch(t){}return u.a.createElement("div",null)}}]),e}(s.Component);e.a=h},2817:function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"p",function(){return i}),n.d(e,"c",function(){return l}),n.d(e,"h",function(){return o}),n.d(e,"i",function(){return c}),n.d(e,"a",function(){return s}),n.d(e,"d",function(){return u}),n.d(e,"e",function(){return d}),n.d(e,"f",function(){return p}),n.d(e,"j",function(){return m}),n.d(e,"k",function(){return f}),n.d(e,"l",function(){return h}),n.d(e,"m",function(){return g}),n.d(e,"n",function(){return x}),n.d(e,"g",function(){return y}),n.d(e,"o",function(){return b});var r="400px",a={title:"BarChart",key:"BarChart",chartType:"BarChart",width:"90%",height:r,data:[["Year","Trafic",{role:"style"}],["2010",1e4,"fill-color: #48A6F2; fill-opacity: 0.4"],["2012",21500,"fill-color: #f64744; fill-opacity: 0.4"],["2014",56598,"fill-color: #ffbf00; fill-opacity: 0.4"],["2016",85256,"fill-color: #511E78; fill-opacity: 0.4"]],options:{title:"Visitor statistics from 2010 to 2016",titleTextStyle:{color:"#788195"},bar:{groupWidth:"95%"},legend:{position:"none"},animation:{duration:1e3,easing:"in",startup:!0},hAxis:{textStyle:{color:"#788195"}},vAxis:{textStyle:{color:"#788195"}},tooltip:{textStyle:{color:"#788195"}}},chartEvents:[{eventName:"onmouseover"}]},i={title:"Line Chart",chartType:"LineChart",key:"LineChart",width:"90%",height:r,columns:[{label:"time",type:"number"},{label:"Air Passengers",type:"number"}],rows:[[1949,11],[1949.08333333333,11],[1949.16666666667,13],[1949.25,12],[1949.33333333333,12],[1949.41666666667,13],[1949.5,14],[1949.58333333333,14],[1949.66666666667,136],[1949.75,119],[1949.83333333333,104],[1949.91666666667,118],[1950,115],[1950.08333333333,126],[1950.16666666667,141],[1950.25,135],[1950.33333333333,125],[1950.41666666667,149],[1950.5,170],[1950.58333333333,170],[1950.66666666667,158],[1950.75,133],[1950.83333333333,114],[1950.91666666667,140],[1951,145],[1951.08333333333,150],[1951.16666666667,178],[1951.25,163],[1951.33333333333,172],[1951.41666666667,178],[1951.5,199],[1951.58333333333,199],[1951.66666666667,184],[1951.75,162],[1951.83333333333,146],[1951.91666666667,166],[1952,171],[1952.08333333333,180],[1952.16666666667,193],[1952.25,181],[1952.33333333333,183],[1952.41666666667,218],[1952.5,230],[1952.58333333333,242],[1952.66666666667,209],[1952.75,191],[1952.83333333333,172],[1952.91666666667,194],[1953,196],[1953.08333333333,196],[1953.16666666667,236],[1953.25,235],[1953.33333333333,229],[1953.41666666667,243],[1953.5,264],[1953.58333333333,272],[1953.66666666667,237],[1953.75,211],[1953.83333333333,180],[1953.91666666667,201],[1954,204],[1954.08333333333,188],[1954.16666666667,235],[1954.25,227],[1954.33333333333,234],[1954.41666666667,264],[1954.5,302],[1954.58333333333,293],[1954.66666666667,259],[1954.75,229],[1954.83333333333,203],[1954.91666666667,229],[1955,242],[1955.08333333334,233],[1955.16666666667,267],[1955.25,269],[1955.33333333334,270],[1955.41666666667,315],[1955.5,364],[1955.58333333334,347],[1955.66666666667,312],[1955.75,274],[1955.83333333334,237],[1955.91666666667,278],[1956,284],[1956.08333333334,277],[1956.16666666667,317],[1956.25,313],[1956.33333333334,318],[1956.41666666667,374],[1956.5,413],[1956.58333333334,405],[1956.66666666667,355],[1956.75,306],[1956.83333333334,271],[1956.91666666667,306],[1957,315],[1957.08333333334,301],[1957.16666666667,356],[1957.25,348],[1957.33333333334,355],[1957.41666666667,422],[1957.5,465],[1957.58333333334,467],[1957.66666666667,404],[1957.75,347],[1957.83333333334,305],[1957.91666666667,336],[1958,340],[1958.08333333334,318],[1958.16666666667,362],[1958.25,348],[1958.33333333334,363],[1958.41666666667,435],[1958.5,491],[1958.58333333334,505],[1958.66666666667,404],[1958.75,359],[1958.83333333334,310],[1958.91666666667,337],[1959,360],[1959.08333333334,342],[1959.16666666667,406],[1959.25,396],[1959.33333333334,420],[1959.41666666667,472],[1959.5,548],[1959.58333333334,559],[1959.66666666667,463],[1959.75,407],[1959.83333333334,362],[1959.91666666667,405],[1960,417],[1960.08333333334,391],[1960.16666666667,419],[1960.25,461],[1960.33333333334,472],[1960.41666666667,535],[1960.5,622],[1960.58333333334,606],[1960.66666666667,508],[1960.75,461],[1960.83333333334,390],[1960.91666666667,432]],options:{legend:{textStyle:{color:"#788195"}},hAxis:{textStyle:{color:"#788195"},title:"Time",titleTextStyle:{color:"#788195"}},vAxis:{textStyle:{color:"#788195"},title:"Air Passengers",titleTextStyle:{color:"#788195"}},colors:["#48A6F2"],dataOpacity:1,animation:{duration:1e3,easing:"in",startup:!0},tooltip:{textStyle:{color:"#788195"}}}},l={title:"Bubble Chart",key:"BubbleChart",chartType:"BubbleChart",width:"90%",height:r,data:[["ID","Life Expectancy","Fertility Rate","Region","Population"],["CAN",80.66,1.67,"North America",33739900],["DEU",79.84,1.36,"Europe",81902307],["DNK",78.6,1.84,"Europe",5523095],["EGY",72.73,2.78,"Middle East",79716203],["GBR",80.05,2,"Europe",61801570],["IRN",72.49,1.7,"Middle East",73137148],["IRQ",68.09,4.77,"Middle East",31090763],["ISR",81.55,2.96,"Middle East",7485600],["RUS",68.6,1.54,"Europe",14185e4],["USA",78.09,2.05,"North America",307007e3]],options:{title:"Correlation between life expectancy, fertility rate and population of some world countries (2010)",titleTextStyle:{color:"#788195"},legend:{textStyle:{color:"#788195"}},hAxis:{textStyle:{color:"#788195"},title:"Life Expectancy",titleTextStyle:{color:"#788195"}},vAxis:{textStyle:{color:"#788195"},title:"Fertility Rate",titleTextStyle:{color:"#788195"}},bubble:{opacity:.6,stroke:"#ffffff",textStyle:{fontSize:11,color:"#788195"}},tooltip:{textStyle:{color:"#788195"}},colors:["#48A6F2","#F55F82","#ffbf00"],animation:{duration:1e3,easing:"in",startup:!0}}},o={title:"Histogram",key:"Histogram",chartType:"Histogram",width:"90%",height:r,data:[["Dinosaur","Length"],["Acrocanthosaurus (top-spined lizard)",12.2],["Albertosaurus (Alberta lizard)",9.1],["Allosaurus (other lizard)",12.2],["Apatosaurus (deceptive lizard)",22.9],["Archaeopteryx (ancient wing)",.9],["Argentinosaurus (Argentina lizard)",36.6],["Baryonyx (heavy claws)",9.1],["Brachiosaurus (arm lizard)",30.5],["Ceratosaurus (horned lizard)",6.1],["Coelophysis (hollow form)",2.7],["Compsognathus (elegant jaw)",.9],["Deinonychus (terrible claw)",2.7],["Diplodocus (double beam)",27.1],["Dromicelomimus (emu mimic)",3.4],["Gallimimus (fowl mimic)",5.5],["Mamenchisaurus (Mamenchi lizard)",21],["Megalosaurus (big lizard)",7.9],["Microvenator (small hunter)",1.2],["Ornithomimus (bird mimic)",4.6],["Oviraptor (egg robber)",1.5],["Plateosaurus (flat lizard)",7.9],["Sauronithoides (narrow-clawed lizard)",2],["Seismosaurus (tremor lizard)",45.7],["Spinosaurus (spiny lizard)",12.2],["Supersaurus (super lizard)",30.5],["Tyrannosaurus (tyrant lizard)",15.2],["Ultrasaurus (ultra lizard)",30.5],["Velociraptor (swift robber)",1.8]],options:{title:"Lengths of dinosaurs, in meters",titleTextStyle:{color:"#788195"},legend:{textStyle:{color:"#788195"}},colors:["#511E78"],dataOpacity:.6,animation:{duration:1e3,easing:"in",startup:!0},hAxis:{textStyle:{color:"#788195"}},vAxis:{textStyle:{color:"#788195"}},tooltip:{textStyle:{color:"#788195"}}}},c={title:"Scatter Chart",key:"ScatterChart",chartType:"ScatterChart",width:"90%",height:r,data:[["Age","Weight"],[8,12],[4,10.5],[11,14],[4,5],[3,3.5],[6.5,7],[8,11],[12,8],[9.5,14],[6.5,12]],options:{title:"Age vs. Weight Comparison",titleTextStyle:{color:"#788195"},hAxis:{title:"Age",titleTextStyle:{color:"#788195"},minValue:0,maxValue:15,textStyle:{color:"#788195"}},vAxis:{title:"Weight",titleTextStyle:{color:"#788195"},minValue:0,maxValue:15,textStyle:{color:"#788195"}},legend:"none",colors:["#42A5F5"],dataOpacity:.8,tooltip:{textStyle:{color:"#788195"}}}},s={title:"Area Chart",key:"AreaChart",chartType:"AreaChart",width:"90%",height:r,data:[["Year","Sales","Expenses"],["2013",1e3,400],["2014",1170,460],["2015",660,1120],["2016",1030,540]],options:{legend:{textStyle:{color:"#788195"}},animation:{duration:1e3,easing:"in",startup:!0},hAxis:{textStyle:{color:"#788195"}},vAxis:{textStyle:{color:"#788195"}},colors:["#48A6F2","#511E78"],dataOpacity:.6,tooltip:{textStyle:{color:"#788195"}}}},u={title:"Candlestick Chart",key:"CandlestickChart",chartType:"CandlestickChart",width:"90%",height:r,data:[["DAY","val1","val2","val3","val4"],["Mon",20,28,38,45],["Tue",31,38,55,66],["Wed",50,55,77,80],["Thu",77,77,66,50],["Fri",68,66,22,15]],options:{title:"Visitors Per Day",titleTextStyle:{color:"#788195"},legend:"none",hAxis:{textStyle:{color:"#788195"}},vAxis:{textStyle:{color:"#788195"}},animation:{duration:1e3,easing:"in",startup:!0},colors:["#48A6F2"],tooltip:{textStyle:{color:"#788195"}}}},d={title:"Combo Chart",key:"ComboChart",chartType:"ComboChart",width:"90%",height:r,data:[["Month","Bolivia","Ecuador","Madagascar","Papua New Guinea","Rwanda","Average"],["2004/05",165,938,522,998,450,614.6],["2005/06",135,1120,599,1268,288,682],["2006/07",157,1167,587,807,397,623],["2007/08",139,1110,615,968,215,609.4],["2008/09",136,691,629,1026,366,569.6]],options:{title:"Monthly Coffee Production by Country",titleTextStyle:{color:"#788195"},legend:{textStyle:{color:"#788195"}},hAxis:{textStyle:{color:"#788195"},title:"Cups",titleTextStyle:{color:"#788195"}},vAxis:{textStyle:{color:"#788195"},title:"Month",titleTextStyle:{color:"#788195"}},seriesType:"bars",series:{5:{type:"line"}},animation:{duration:1e3,easing:"in",startup:!0},colors:["#00b16a","#ff6384","#511E78","#01C0C8","#ffbf00","#48A6F2"],dataOpacity:.6,tooltip:{textStyle:{color:"#788195"}}}},p={title:"Donut Chart",key:"DonutChart",chartType:"PieChart",width:"90%",height:r,data:[["Task","Hours per Day"],["Work",11],["Eat",2],["Commute",2],["Watch TV",2],["Sleep",7]],options:{title:"My Daily Activities",titleTextStyle:{color:"#788195"},legend:{textStyle:{color:"#788195"}},pieHole:.4,pieSliceTextStyle:{color:"#ffffff"},is3D:!0,colors:["#9678AE","#F99FB4","#C8E4FB","#01C0C8","#ffbf00"],tooltip:{textStyle:{color:"#788195"}}}},m={title:"Stepped Area Chart",key:"SteppedAreaChart",chartType:"SteppedAreaChart",width:"90%",height:r,data:[["Director (Year)","Rotten Tomatoes","IMDB"],["Alfred Hitchcock (1935)",8.4,7.9],["Ralph Thomas (1959)",6.9,6.5],["Don Sharp (1978)",6.5,6.4],["James Hawes (2008)",4.4,6.2]],options:{title:"The decline of The 39 Steps",titleTextStyle:{color:"#788195"},legend:{textStyle:{color:"#788195"}},animation:{duration:1e3,easing:"in",startup:!0},colors:["#511E78","#F55F82"],hAxis:{textStyle:{color:"#788195"}},vAxis:{textStyle:{color:"#788195"},title:"Accumulated Rating",titleTextStyle:{color:"#788195"}},isStacked:!0,tooltip:{textStyle:{color:"#788195"}}}},f={title:"Timeline",key:"Timeline",chartType:"Timeline",chartPackage:"timeline",width:"90%",height:r,columns:[{id:"Term",type:"string"},{id:"President",type:"string"},{id:"Start",type:"date"},{id:"End",type:"date"}],rows:[["1","Washington",new Date("1789-04-29T18:00:00.000Z"),new Date("1797-03-03T18:00:00.000Z")],["2","Adams",new Date("1797-03-03T18:00:00.000Z"),new Date("1801-03-03T18:00:00.000Z")],["3","Jefferson",new Date("1801-03-03T18:00:00.000Z"),new Date("1809-03-03T18:00:00.000Z")]],options:{colors:["#ffbf00","#F55F82","#48A6F2"],tooltip:{textStyle:{color:"#788195"}}}},h={title:"TreeMap",key:"TreeMap",chartType:"TreeMap",chartPackages:["treemap"],width:"90%",height:r,data:[["Location","Parent","Market trade volume (size)","Market increase/decrease (color)"],["Global",null,0,0],["America","Global",0,0],["Europe","Global",0,0],["Asia","Global",0,0],["Australia","Global",0,0],["Africa","Global",0,0],["Brazil","America",11,10],["USA","America",52,31],["Mexico","America",24,12],["Canada","America",16,-23],["France","Europe",42,-11],["Germany","Europe",31,-2],["Sweden","Europe",22,-13],["Italy","Europe",17,4],["UK","Europe",21,-5],["China","Asia",36,4],["Japan","Asia",20,-12],["India","Asia",40,63],["Laos","Asia",4,34],["Mongolia","Asia",1,-5],["Israel","Asia",12,24],["Iran","Asia",18,13],["Pakistan","Asia",11,-52],["Egypt","Africa",21,0],["S. Africa","Africa",30,43],["Sudan","Africa",12,2],["Congo","Africa",10,12],["Zaire","Africa",8,10]],options:{minColor:"#511E78",midColor:"#C8E4FB",maxColor:"#48A6F2"}},g={title:"TrendLines",key:"TrendLines",chartType:"ScatterChart",width:"90%",height:r,data:[["Diameter","Age"],[8,37],[4,19.5],[11,52],[4,22],[3,16.5],[6.5,32.8],[14,72]],options:{title:"Age of sugar maples vs. trunk diameter, in inches",titleTextStyle:{color:"#788195"},hAxis:{textStyle:{color:"#788195"},title:"Diameter",titleTextStyle:{color:"#788195"}},vAxis:{textStyle:{color:"#788195"},title:"Age",titleTextStyle:{color:"#788195"}},legend:"none",trendlines:{0:{type:"exponential",colors:"#48A6F2"}},tooltip:{textStyle:{color:"#788195"}}}},x={title:"Waterfall",key:"Waterfall",chartType:"CandlestickChart",width:"90%",height:r,data:[["DAY","val1","val2","val3","val4"],["Mon",20,28,38,45],["Tue",31,38,55,66],["Wed",50,55,77,80],["Thu",77,77,66,50],["Fri",68,66,22,15]],options:{legend:"none",bar:{groupWidth:"100%"},hAxis:{textStyle:{color:"#788195"}},vAxis:{textStyle:{color:"#788195"}},animation:{duration:1e3,easing:"in",startup:!0},tooltip:{textStyle:{color:"#788195"}},candlestick:{fallingColor:{strokeWidth:0,fill:"#F55F82"},risingColor:{strokeWidth:0,fill:"#48A6F2"}}}},y={title:"Gantt",key:"Gantt",chartType:"Gantt",chartPackages:["gantt"],width:"90%",height:r,columns:[{id:"Task ID",type:"string"},{id:"Task Name",type:"string"},{id:"Start Date",type:"date"},{id:"End Date",type:"date"},{id:"Duration",type:"number"},{id:"Percent Complete",type:"number"},{id:"Dependencies",type:"string"}],rows:[["Research","Find sources",new Date("2014-12-31T18:00:00.000Z"),new Date("2015-01-04T18:00:00.000Z"),null,100,null],["Write","Write paper",null,new Date("2015-01-08T18:00:00.000Z"),2592e5,25,"Research,Outline"],["Cite","Create bibliography",null,new Date("2015-01-06T18:00:00.000Z"),864e5,20,"Research"],["Complete","Hand in paper",null,new Date("2015-01-09T18:00:00.000Z"),864e5,0,"Cite,Write"],["Outline","Outline paper",null,new Date("2015-01-05T18:00:00.000Z"),864e5,100,"Research"]],options:{tooltip:{textStyle:{color:"#788195"}},gantt:{criticalPathEnabled:!1,arrow:{angle:100,width:2,color:"#9678AE",radius:0}}}},b={title:"WordTree",key:"WordTree",chartType:"WordTree",chartPackages:["wordtree"],width:"90%",height:r,data:[["Phrases"],["cats are better than dogs"],["cats eat kibble"],["cats are better than hamsters"],["cats are awesome"],["cats are people too"],["cats eat mice"],["cats meowing"],["cats in the cradle"],["cats eat mice"],["cats in the cradle lyrics"],["cats eat kibble"],["cats for adoption"],["cats are family"],["cats eat mice"],["cats are better than kittens"],["cats are evil"],["cats are weird"],["cats eat mice"]],options:{tooltip:{textStyle:{color:"#788195"}},wordtree:{format:"implicit",word:"cats"}}}}});