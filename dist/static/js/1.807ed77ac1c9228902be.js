webpackJsonp([1],{MGb7:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=["success","info","warning","danger"],a={name:"Alerts",props:{type:{default:"success",validator:function(e){return i.includes(e)}},dismissible:{default:!1}},computed:{classObject:function(){return{"alert-success":"success"===this.type,"alert-info":"info"===this.type,"alert-warning":"warning"===this.type,"alert-danger":"danger"===this.type,"alert-dissmissible":this.dismissible}}}},n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{name:"slide-fade"}},[s("div",{staticClass:"alert",class:e.classObject},[e.dismissible?s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-hidden":"true"}},[e._v("×")]):e._e(),e._v(" "),e._t("header"),e._v(" "),e._t("body")],2)])},staticRenderFns:[]};var r=s("VU/8")(a,n,!1,function(e){s("VIAi")},"data-v-4ed2bd20",null);t.default=r.exports},VIAi:function(e,t){}});
//# sourceMappingURL=1.807ed77ac1c9228902be.js.map