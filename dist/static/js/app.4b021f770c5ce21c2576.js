webpackJsonp([2],{"+Gxq":function(e,t,a){"use strict";var s=a("fnDg").a;var l=a("VU/8")(s,null,!1,function(e){a("4veK")},null,null);t.a=l.exports},"4veK":function(e,t){},"9M+g":function(e,t){},"HUt/":function(e,t,a){"use strict";var s=a("qRo1").a;var l=a("VU/8")(s,null,!1,function(e){a("n9mN")},null,null);t.a=l.exports},JCpY:function(e,t,a){"use strict";var s=a("rKsW").a;var l=a("VU/8")(s,null,!1,function(e){a("xBwK")},null,null);t.a=l.exports},JDVb:function(e,t,a){"use strict";var s=a("9NuQ").a;var l=a("VU/8")(s,null,!1,function(e){a("Y9O/")},null,null);t.a=l.exports},Jmt5:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={};a.d(s,"setRecords",function(){return C}),a.d(s,"setLoadingFlag",function(){return R}),a.d(s,"setLoadingText",function(){return w}),a.d(s,"setSelectedIndex",function(){return E});var l={};a.d(l,"getLoadingFlag",function(){return y}),a.d(l,"getLoadingText",function(){return k}),a.d(l,"getSelectedIndex",function(){return D}),a.d(l,"getRecords",function(){return N});var o=a("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var c=a("VU/8")({name:"app"},n,!1,function(e){a("n2wW")},null,null).exports,i=a("/ocq"),r=a("Dd8w"),d=a.n(r),u=a("NYxO"),p={name:"Content",computed:d()({},Object(u.b)({loading:"getLoadingFlag"})),components:{LoadingModal:function(){return a.e(0).then(a.bind(null,"NxGh"))}},data:function(){return{msg:"Welcome to Your Vue.js App",totalRecords:67,perPage:10,totalPages:1,currentPage:1,startIndex:0,endIndex:0,startExpireDate:"2018-01-01",endExpireDate:"2018-01-01",bumblebee:"accepted",eggplant:"accepted",dragonfly:"accepted",firefly:"accepted",pangolin:"accepted",paid:"accepted",evaluation:"accepted",basic:"accepted",enterprise:"accepted",showArchived:"not_accepted",selectedCustomStatus:"",customStatus:[{value:"",text:"All"},{value:"new",text:"New"},{value:"renewal",text:"Renewal"},{value:"lost",text:"Lost"}],records:[]}},created:function(){this.fetchNewRecords()},watch:{currentPage:{handler:function(){this.startIndex=(this.currentPage-1)*this.perPage,this.currentPage==this.totalPages?this.endIndex=this.totalRecords-1:this.endIndex=this.currentPage*this.perPage-1}}},methods:{vieweDetail:function(e){this.$router.push({name:"ViewDetail",params:{id:e+1}})},fetchNewRecords:function(){var e=this,t=this;this.$store.dispatch("setLoadingFlag","flex"),this.$store.dispatch("setLoadingText","Loading..."),this.$store.dispatch("fetchNewRecords").then(function(a){e.$store.dispatch("setLoadingFlag",!1),e.records=a,e.totalRecords=e.records.length,e.totalPages=Math.ceil(e.totalRecords/e.perPage),e.currentPage=1,e.totalRecords>10&&(e.endIndex=9),e.$store.dispatch("setLoadingFlag","none"),t.$ls.set("records",e.records),e.$store.dispatch("setRecords",e.records)}).catch(function(t){e.$store.dispatch("setLoadingFlag","none"),console.log("Error")})}}},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-fluid"},[a("h1",{staticClass:"page-title"},[e._v("License Database Records")]),e._v(" "),a("div",{staticClass:"panel-group"},[a("div",{staticClass:"panel panel-default"},[a("b-card",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"filter-panel",attrs:{variant:"primary"}},[e._v("Filter Options"),a("i",{staticClass:"fa fa-angle-double-down filter-condition-arrow"})]),e._v(" "),a("b-collapse",{staticClass:"filter-body",attrs:{id:"collapse1"}},[a("div",{staticClass:"row filter-row"},[a("div",{staticClass:"col-md-3 col-sm-4"},[a("p",[e._v("License Expiration Date Range ")]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6 col-md-6"},[a("b-form-input",{attrs:{id:"startExpireDate",type:"date"},model:{value:e.startExpireDate,callback:function(t){e.startExpireDate=t},expression:"startExpireDate"}})],1),e._v(" "),a("div",{staticClass:"col-sm-6 col-md-6"},[a("b-form-input",{attrs:{id:"endExpireDate",type:"date"},model:{value:e.endExpireDate,callback:function(t){e.endExpireDate=t},expression:"endExpireDate"}})],1)])]),e._v(" "),a("div",{staticClass:"col-md-7 col-sm-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3 col-sm-6"},[a("b-form-checkbox",{attrs:{value:"accepted","unchecked-value":"not_accepted"},model:{value:e.bumblebee,callback:function(t){e.bumblebee=t},expression:"bumblebee"}},[e._v("\n                    Bulblebee\n                ")]),e._v(" "),a("b-form-checkbox",{attrs:{value:"accepted","unchecked-value":"not_accepted"},model:{value:e.eggplant,callback:function(t){e.eggplant=t},expression:"eggplant"}},[e._v("\n                    Eggplant\n                ")]),e._v(" "),a("b-form-checkbox",{attrs:{value:"accepted","unchecked-value":"not_accepted"},model:{value:e.dragonfly,callback:function(t){e.dragonfly=t},expression:"dragonfly"}},[e._v("\n                    Dragonfly\n                ")]),e._v(" "),a("b-form-checkbox",{attrs:{value:"accepted","unchecked-value":"not_accepted"},model:{value:e.firefly,callback:function(t){e.firefly=t},expression:"firefly"}},[e._v("\n                    Firefly\n                ")]),e._v(" "),a("b-form-checkbox",{attrs:{value:"accepted","unchecked-value":"not_accepted"},model:{value:e.pangolin,callback:function(t){e.pangolin=t},expression:"pangolin"}},[e._v("\n                    Pangolin\n                ")])],1),e._v(" "),a("div",{staticClass:"col-md-3 col-sm-6"},[a("b-form-checkbox",{attrs:{value:"accepted","unchecked-value":"not_accepted"},model:{value:e.paid,callback:function(t){e.paid=t},expression:"paid"}},[e._v("\n                    Paid\n                ")]),e._v(" "),a("b-form-checkbox",{attrs:{value:"accepted","unchecked-value":"not_accepted"},model:{value:e.evaluation,callback:function(t){e.evaluation=t},expression:"evaluation"}},[e._v("\n                    Evaluation\n                ")])],1),e._v(" "),a("div",{staticClass:"col-md-3 col-sm-6"},[a("b-form-checkbox",{attrs:{value:"accepted","unchecked-value":"not_accepted"},model:{value:e.basic,callback:function(t){e.basic=t},expression:"basic"}},[e._v("\n                    Basic\n                ")]),e._v(" "),a("b-form-checkbox",{staticClass:"license-type",attrs:{value:"accepted","unchecked-value":"not_accepted"},model:{value:e.enterprise,callback:function(t){e.enterprise=t},expression:"enterprise"}},[e._v("\n                    Enterprise\n                ")])],1),e._v(" "),a("div",{staticClass:"col-md-3 col-sm-6"},[a("b-form-checkbox",{attrs:{value:"accepted","unchecked-value":"not_accepted"},model:{value:e.showArchived,callback:function(t){e.showArchived=t},expression:"showArchived"}},[e._v("\n                    Show Archived\n                ")])],1)])]),e._v(" "),a("div",{staticClass:"col-md-1 col-sm-2"},[a("b-form-select",{attrs:{id:"detailCustomStatus",options:e.customStatus},model:{value:e.selectedCustomStatus,callback:function(t){e.selectedCustomStatus=t},expression:"selectedCustomStatus"}})],1)]),e._v(" "),a("div",{staticClass:"filter-footer"},[a("button",{staticClass:"btn btn-success btn-filter",attrs:{type:"button"}},[e._v("Filter")])])])],1)]),e._v(" "),a("div",{staticClass:"database-table"},[a("table",{staticClass:"table table-striped table-hover"},[e._m(0),e._v(" "),e.records.length>0?a("tbody",e._l(e.endIndex-e.startIndex+1,function(t){return a("tr",{on:{click:function(a){e.vieweDetail(t-1)}}},[a("td",[e._v(e._s(e.records[t+e.startIndex-1].license_id))]),e._v(" "),a("td",[e._v(e._s(e.records[t+e.startIndex-1].userFullName))]),e._v(" "),a("td",[e._v(e._s(e.records[t+e.startIndex-1].userEMail))]),e._v(" "),a("td",[e._v(e._s(e.records[t+e.startIndex-1].userCompany))]),e._v(" "),a("td",[e._v(e._s(e.records[t+e.startIndex-1].productName))]),e._v(" "),a("td",[e._v(e._s(e.records[t+e.startIndex-1].issueDate))]),e._v(" "),a("td",[e._v(e._s(e.records[t+e.startIndex-1].expireDate))])])})):a("tbody",[e._m(1)])]),e._v(" "),a("b-pagination",{attrs:{size:"md","total-rows":e.totalRecords,"per-page":e.perPage},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1),e._v(" "),a("LoadingModal")],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",{staticStyle:{background:"rgb(114, 202, 95)",color:"white","font-size":"16px"}},[t("th",[this._v("ID")]),this._v(" "),t("th",[this._v("Name")]),this._v(" "),t("th",[this._v("Email")]),this._v(" "),t("th",[this._v("Company")]),this._v(" "),t("th",[this._v("Product")]),this._v(" "),t("th",[this._v("Issue Date")]),this._v(" "),t("th",[this._v("Expire Date")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",{attrs:{colspan:"8"}},[this._v("\n            No Records\n          ")])])}]},m=a("VU/8")(p,v,!1,null,null,null).exports,b={name:"ViewDetail",created:function(){this.selectedIndex=-1,this.records=this.$ls.get("records");var e=this;$(document).ready(function(){e.selectedIndex=e.$route.params.id-1,e.setEditFields(!1)})},computed:{},watch:{selectedIndex:{handler:function(){if(this.selectedIndex<0||this.selectedIndex>=this.records.length)return this.selectedRecord={accountsPayable:"",customerStatus:"",issueDate:"2018-01-01",expireDate:"2018-01-01",freshsalesURL:"",importantNotes:"",licenseType:"",licenseURL:"",license_id:"",productName:"",userCompany:"",userEMail:"",userFullName:"",userRegisteredTo:""},this.setEditFields(!1),void $("#btnEdit").attr("disabled","");this.records.length>0&&(this.selectedRecord=this.records[this.selectedIndex]),null==this.selectedRecord.issueDate&&(this.selectedRecord.issueDate="2018-01-02"),null==this.selectedRecord.expireDate&&(this.selectedRecord.expireDate="2018-01-02"),0==this.selectedIndex?$(".btn-previous").attr("disabled",""):$(".btn-previous").removeAttr("disabled"),this.selectedIndex==this.records.length-1?$(".btn-next").attr("disabled",""):$(".btn-next").removeAttr("disabled")}}},data:function(){return{selectedRecord:{accountsPayable:"",customerStatus:"",expireDate:null,freshsalesURL:"",importantNotes:"",issueDate:null,licenseState:"",licenseStatus:"",licenseType:"",licenseURL:"",license_id:"",productName:"",userCompany:"",userEMail:"",userFullName:"",userRegisteredTo:""},selectedIndex:-1,records:[],issueDate:"2017-12-12",expireDate:"2017-12-12",selectedCustomStatus:"new",customStatus:[{value:"new",text:"New"},{value:"renewal",text:"Renewal"},{value:"lost",text:"Lost"}],selectedType:"Enterprise",licenseType:[{value:"",text:"N/A"},{value:"evaluation",text:"Evaluation"},{value:"basic",text:"Basic"},{value:"enterprise",text:"Enterprise"},{value:"eggplant",text:"Eggplant"}],licenseState:[{value:"active",text:"Active"},{value:"archive",text:"Archive"}],selectedProduct:"bumblebee",products:[{value:"bumblebee",text:"Bumblebee"},{value:"eggplant-alm",text:"Eggplant-alm"},{value:"dragonfly",text:"Dragonfly"},{value:"firefly",text:"Firefly"},{value:"pangolin",text:"Pangolin"}],payableContent:""}},methods:{backToHome:function(){this.$router.push({name:"Content"})},saveRecord:function(){console.log(this.selectedRecord)},setEditFields:function(e){e?($("input").removeAttr("disabled"),$("select").removeAttr("disabled"),$("textarea").removeAttr("disabled"),$(".col-detail button").removeAttr("disabled"),$(".col-part-detail button").removeAttr("disabled"),$("#btnSave").removeAttr("disabled"),$("#btnEdit").attr("disabled","")):($("input").attr("disabled",""),$("select").attr("disabled",""),$("textarea").attr("disabled",""),$(".col-detail button").attr("disabled",""),$(".col-part-detail button").attr("disabled",""),$("#btnEdit").removeAttr("disabled"),$("#btnSave").attr("disabled",""))},gotoPrevious:function(){this.selectedIndex--,this.setEditFields(!1)},gotoNext:function(){this.selectedIndex++,this.setEditFields(!1)}}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container view-detail"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("button",{staticClass:"btn btn-success btn-back-results",attrs:{type:"button"},on:{click:function(t){e.backToHome()}}},[a("i",{staticClass:"fa fa-angle-left"}),e._v("  Back to Search Results")]),e._v(" "),a("div",{staticClass:"btn-group-move"},[a("button",{staticClass:"btn btn-success btn-previous",attrs:{type:"button"},on:{click:function(t){e.gotoPrevious()}}},[a("i",{staticClass:"fa fa-angle-left"}),e._v("  Previous Record")]),e._v(" "),a("button",{staticClass:"btn btn-success btn-next",attrs:{type:"button"},on:{click:function(t){e.gotoNext()}}},[e._v("Next Record  "),a("i",{staticClass:"fa fa-angle-right"})])])])]),e._v(" "),a("div",{staticClass:"row main-panel"},[a("div",{staticClass:"col-md-12 col-detail"},[a("div",{staticClass:"row sub-title"},[e._v("License Details")]),e._v(" "),a("div",{staticClass:"row detail-panel"},[a("div",{staticClass:"col-md-6 col-sm-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("b-form-group",{attrs:{horizontal:"",label:"Company:","label-class":"text-sm-right","label-for":"detailCompany"}},[a("b-form-input",{attrs:{id:"detailCompany"},model:{value:e.selectedRecord.userCompany,callback:function(t){e.$set(e.selectedRecord,"userCompany",t)},expression:"selectedRecord.userCompany"}})],1)],1),e._v(" "),a("div",{staticClass:"col-md-12"},[a("b-form-group",{attrs:{horizontal:"",label:"Issue Date:","label-class":"text-sm-right","label-for":"detailIssueDate"}},[a("b-form-input",{attrs:{id:"detailIssueDate",type:"date"},model:{value:e.selectedRecord.issueDate,callback:function(t){e.$set(e.selectedRecord,"issueDate",t)},expression:"selectedRecord.issueDate"}})],1)],1),e._v(" "),a("div",{staticClass:"col-md-12"},[a("b-form-group",{attrs:{horizontal:"",label:"Expiry Date:","label-class":"text-sm-right","label-for":"detailExpireDate"}},[a("b-form-input",{attrs:{id:"detailExpireDate",type:"date"},model:{value:e.selectedRecord.expireDate,callback:function(t){e.$set(e.selectedRecord,"expireDate",t)},expression:"selectedRecord.expireDate"}})],1)],1),e._v(" "),a("div",{staticClass:"col-md-12"},[a("b-form-group",{attrs:{horizontal:"",label:"Product:","label-class":"text-sm-right","label-for":"detailProduct"}},[a("b-form-select",{attrs:{id:"detailProduct",options:e.products},model:{value:e.selectedRecord.productName,callback:function(t){e.$set(e.selectedRecord,"productName",t)},expression:"selectedRecord.productName"}})],1)],1),e._v(" "),a("div",{staticClass:"col-md-12"},[a("b-form-group",{attrs:{horizontal:"",label:"License Type:","label-class":"text-sm-right","label-for":"detailLicenseType"}},[a("b-form-select",{attrs:{id:"detailLicenseType",options:e.licenseType},model:{value:e.selectedRecord.licenseType,callback:function(t){e.$set(e.selectedRecord,"licenseType",t)},expression:"selectedRecord.licenseType"}})],1)],1)])]),e._v(" "),a("div",{staticClass:"col-md-6 col-sm-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("b-form-group",{attrs:{horizontal:"",label:"Contact Name:","label-class":"text-sm-right","label-for":"detailContactName"}},[a("b-form-input",{attrs:{id:"detailContactName"},model:{value:e.selectedRecord.userFullName,callback:function(t){e.$set(e.selectedRecord,"userFullName",t)},expression:"selectedRecord.userFullName"}})],1)],1),e._v(" "),a("div",{staticClass:"col-md-12"},[a("b-form-group",{attrs:{horizontal:"",label:"Contact Email:","label-class":"text-sm-right","label-for":"detailContactEmail"}},[a("b-form-input",{attrs:{id:"detailContactEmail"},model:{value:e.selectedRecord.userEMail,callback:function(t){e.$set(e.selectedRecord,"userEMail",t)},expression:"selectedRecord.userEMail"}})],1)],1),e._v(" "),a("div",{staticClass:"col-md-12"},[a("b-form-group",{attrs:{horizontal:"",label:"License URL:","label-class":"text-sm-right","label-for":"detailLicenseURL"}},[a("b-form-input",{attrs:{id:"detailLicenseURL"},model:{value:e.selectedRecord.licenseURL,callback:function(t){e.$set(e.selectedRecord,"licenseURL",t)},expression:"selectedRecord.licenseURL"}})],1)],1),e._v(" "),a("div",{staticClass:"col-md-12"},[a("b-form-group",{attrs:{horizontal:"",label:"Freshsales URL:","label-class":"text-sm-right","label-for":"detailFreshsalesURL"}},[a("b-form-input",{attrs:{id:"detailFreshsalesURL"},model:{value:e.selectedRecord.freshsalesURL,callback:function(t){e.$set(e.selectedRecord,"freshsalesURL",t)},expression:"selectedRecord.freshsalesURL"}})],1)],1),e._v(" "),a("div",{staticClass:"col-md-12 customer-status"},[a("b-form-group",{attrs:{horizontal:"",label:"Customer Status:","label-class":"text-sm-right","label-for":"detailCustomStatus"}},[a("b-form-select",{attrs:{id:"detailCustomStatus",options:e.customStatus},model:{value:e.selectedRecord.customerStatus,callback:function(t){e.$set(e.selectedRecord,"customerStatus",t)},expression:"selectedRecord.customerStatus"}})],1)],1),e._v(" "),a("div",{staticClass:"col-md-12"},[a("b-form-group",{attrs:{horizontal:"",label:"State:","label-class":"text-sm-right","label-for":"detailLicenseState"}},[a("b-form-select",{attrs:{id:"detailLicenseState",options:e.licenseState},model:{value:e.selectedRecord.licenseState,callback:function(t){e.$set(e.selectedRecord,"licenseState",t)},expression:"selectedRecord.licenseState"}})],1)],1)])])])]),e._v(" "),a("div",{staticClass:"col-md-6 col-sm-6 col-xs-12 col-part-detail"},[a("div",{staticClass:"content-panel"},[a("div",{staticClass:"row sub-title"},[e._v("Accounts Payable + Decision Makers Info")]),e._v(" "),a("div",{staticClass:"row detail-panel",staticStyle:{"margin-bottom":"10px"}},[a("b-form-textarea",{attrs:{id:"textarea1",placeholder:"Enter something",rows:3,"no-resize":!0,"max-rows":3},model:{value:e.selectedRecord.accountsPayable,callback:function(t){e.$set(e.selectedRecord,"accountsPayable",t)},expression:"selectedRecord.accountsPayable"}})],1)])]),e._v(" "),e._m(0),e._v(" "),a("div",{staticClass:"col-md-12 col-detail"},[a("div",{staticClass:"row sub-title"},[e._v("Deal Notes")]),e._v(" "),a("div",{staticClass:"row detail-panel"},[a("b-form-textarea",{staticClass:"form-group",attrs:{id:"textarea1",placeholder:"Enter something",rows:3,"no-resize":!0,"max-rows":3},model:{value:e.selectedRecord.dealNotes,callback:function(t){e.$set(e.selectedRecord,"dealNotes",t)},expression:"selectedRecord.dealNotes"}})],1)]),e._v(" "),a("div",{staticClass:"col-md-12 col-detail"},[a("div",{staticClass:"row sub-title"},[e._v("Important Notes")]),e._v(" "),a("div",{staticClass:"row detail-panel"},[a("b-form-textarea",{staticClass:"form-group",attrs:{id:"textarea1",placeholder:"Enter something",rows:3,"no-resize":!0,"max-rows":3},model:{value:e.selectedRecord.importantNotes,callback:function(t){e.$set(e.selectedRecord,"importantNotes",t)},expression:"selectedRecord.importantNotes"}})],1)]),e._v(" "),a("div",{staticClass:"col-md-12",staticStyle:{"text-align":"right"}},[a("button",{staticClass:"btn btn-success btn-small form-group",attrs:{type:"button",id:"btnEdit"},on:{click:function(t){e.setEditFields(!0)}}},[e._v("Edit")]),e._v(" "),a("button",{staticClass:"btn btn-success btn-small form-group",attrs:{type:"button",id:"btnSave"},on:{click:function(t){e.saveRecord()}}},[e._v("Save")])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-md-6 col-sm-6 col-xs-12 col-part-detail"},[t("div",{staticClass:"content-panel"},[t("div",{staticClass:"row sub-title"},[this._v("Invoices")]),this._v(" "),t("div",{staticClass:"row detail-panel"},[t("div",{staticClass:"col-md-12"},[this._v("12/1/17: In-4087.pdf")]),this._v(" "),t("div",{staticClass:"col-md-12"},[this._v("12/1/17: In-4087.pdf")]),this._v(" "),t("button",{staticClass:"btn btn-success btn-small form-group",attrs:{type:"button"}},[this._v("Add")])])])])}]},h=a("VU/8")(b,f,!1,null,null,null).exports;o.a.use(i.a);var g=new i.a({routes:[{path:"/",name:"Content",component:m},{path:"/viewdetail/:id",name:"ViewDetail",component:h}]}),x=a("7t+N"),_=a.n(x),C=(a("hpwS"),function(e,t){(0,e.commit)("SET_RECORDS",t)}),R=function(e,t){(0,e.commit)("SET_LOADING_FLAG",t)},w=function(e,t){(0,e.commit)("SET_LOADING_TEXT",t)},E=function(e,t){(0,e.commit)("SET_SELECTED_INDEX",t)},y=function(e){return e.loading},k=function(e){return e.loadingText},D=function(e){return e.selectedIndex},N=function(e){return e.records},S=a("//Fk"),L=a.n(S),I=a("mtWM"),P=a.n(I),T=a("kxzG"),F=a.n(T),A={protocol:"https",address:"localhost",port:"8080",basePath:"",axiosConfig:{baseURL:"http://localhost:8080/",headers:{},withCredentials:!0},getEndpointUrl:function(){return this.protocol+"://"+this.address+(this.port?":"+this.port:"")+(this.basePath?this.basePath:"")}},U=P.a.create(A.axiosConfig),z=a("rezj"),O=a.n(z),M=(a("RyI1"),a("Ba3q"),{newRecords:{},backupRecords:{}}),V={state:M,actions:{fetchNewRecords:function(e){var t=e.commit;return console.log("Fetch New Records"),new L.a(function(e,a){(function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,l=null;return null!==s&&console.log(s),new L.a(function(t,s){U.get(e,a).then(function(e){var a=e.request.responseURL,o=new URL(a),n=o.origin+o.pathname;if(200===e.data.code||e.data.hasOwnProperty("code"))s({message:e.data.message,code:e.data.code});else{var c={};if(c.pagination={},e.headers.hasOwnProperty("x-pagination-total-count")&&(c.total=F()(e.headers["x-pagination-total-count"]),c.pagination.total=F()(e.headers["x-pagination-total-count"])),e.headers.hasOwnProperty("x-pagination-per-page")&&(c.perPage=F()(e.headers["x-pagination-per-page"]),c.pagination.per_page=F()(e.headers["x-pagination-per-page"]),c.pagination.first_page_url=n+o.search+"&page=1"),e.headers.hasOwnProperty("x-pagination-page-count")&&(l=F()(e.headers["x-pagination-page-count"]),c.pageCount=l,c.pagination.last_page=l,c.pagination.last_page_url=n+o.search+"&page="+l),e.headers.hasOwnProperty("x-pagination-current-page")){var i=F()(e.headers["x-pagination-current-page"]);c.currentPage=i,c.pagination.current_page=i,i<l&&i<=1&&l>1&&(c.pagination.next_page_url=n+o.search+"&page="+ ++i,c.pagination.prev_page_url=null),i>1&&i<=l&&l>1&&(c.pagination.prev_page_url=n+o.search+"&page="+--i),c.items=e.data,t(c)}else t(e.data)}}).catch(function(e){s(e)})})})("/getNewRecords",null,null).then(function(a){t("FETCH_NEW_RECORDS",a);var s=O()(M.newRecords);e(s)}).catch(function(e){a(e)})})}},getters:{getNewRecords:function(e){return O()(e.originalRecords)}},mutations:{FETCH_NEW_RECORDS:function(e,t){e.newRecords=t}}};o.a.use(u.a),o.a.prototype.$jQuery=_.a;var W=new u.a.Store({actions:s,getters:l,state:{loading:"none",loadingText:"Loading...",selectedIndex:-1,records:[]},mutations:{SET_RECORDS:function(e,t){e.records=t},SET_LOADING_FLAG:function(e,t){e.loading=t},SET_LOADING_TEXT:function(e,t){e.loadingText=t},SET_SELECTED_INDEX:function(e,t){e.selectedIndex=t}},modules:{license:V}}),G=a("yXtV"),B=a.n(G),q=(a("qb6w"),a("ShJz"),a("OF5A"),a("e6fC"));a("Jmt5"),a("9M+g");o.a.use(B.a,{namespace:"vuejs__"}),o.a.use(q.a),o.a.config.productionTip=!1,new o.a({el:"#app",router:g,store:W,template:"<App/>",components:{App:c}})},ShJz:function(e,t){},"Y9O/":function(e,t){},dW2o:function(e,t){},n2wW:function(e,t){},n9mN:function(e,t){},qb6w:function(e,t){},r15W:function(e,t,a){"use strict";var s=a("E9Zr").a;var l=a("VU/8")(s,null,!1,function(e){a("dW2o")},null,null);t.a=l.exports},xBwK:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.4b021f770c5ce21c2576.js.map