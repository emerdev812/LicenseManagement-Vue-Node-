webpackJsonp([2],{"+Gxq":function(e,t,a){"use strict";var s=a("fnDg").a;var l=a("VU/8")(s,null,!1,function(e){a("4veK")},null,null);t.a=l.exports},"4veK":function(e,t){},"9M+g":function(e,t){},"HUt/":function(e,t,a){"use strict";var s=a("qRo1").a;var l=a("VU/8")(s,null,!1,function(e){a("n9mN")},null,null);t.a=l.exports},JCpY:function(e,t,a){"use strict";var s=a("rKsW").a;var l=a("VU/8")(s,null,!1,function(e){a("xBwK")},null,null);t.a=l.exports},JDVb:function(e,t,a){"use strict";var s=a("9NuQ").a;var l=a("VU/8")(s,null,!1,function(e){a("Y9O/")},null,null);t.a=l.exports},Jmt5:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={};a.d(s,"setRecords",function(){return C}),a.d(s,"setLoadingFlag",function(){return R}),a.d(s,"setLoadingText",function(){return w});var l={};a.d(l,"getLoadingFlag",function(){return y}),a.d(l,"getLoadingText",function(){return E}),a.d(l,"getRecords",function(){return S});var c=a("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var o=a("VU/8")({name:"app"},i,!1,function(e){a("n2wW")},null,null).exports,n=a("/ocq"),r=a("Dd8w"),d=a.n(r),u=a("NYxO"),p={name:"Content",computed:d()({},Object(u.b)({loading:"getLoadingFlag"})),components:{LoadingModal:function(){return a.e(0).then(a.bind(null,"NxGh"))}},data:function(){return{msg:"Welcome to Your Vue.js App",totalRecords:67,perPage:10,totalPages:1,currentPage:1,startIndex:0,endIndex:0,startExpireDate:"2018-01-01",endExpireDate:"2018-01-01",bumblebee:"accepted",eggplant:"accepted",dragonfly:"accepted",firefly:"accepted",pangolin:"accepted",paid:"accepted",evaluation:"accepted",basic:"accepted",enterprise:"accepted",showArchived:"not_accepted",selectedCustomStatus:"",customStatus:[{value:"",text:"All"},{value:"new",text:"New"},{value:"renewal",text:"Renewal"},{value:"lost",text:"Lost"}],records:[]}},created:function(){this.fetchNewRecords()},watch:{currentPage:{handler:function(){this.startIndex=(this.currentPage-1)*this.perPage,this.currentPage==this.totalPages?this.endIndex=this.totalRecords-1:this.endIndex=this.currentPage*this.perPage-1}}},methods:{vieweDetail:function(e){this.$router.push({name:"ViewDetail",params:{id:e+1}})},fetchNewRecords:function(){var e=this,t=this;this.$store.dispatch("setLoadingFlag","flex"),this.$store.dispatch("setLoadingText","Loading..."),this.$store.dispatch("fetchNewRecords").then(function(a){e.$store.dispatch("setLoadingFlag",!1),e.records=a,e.totalRecords=e.records.length,e.totalPages=Math.ceil(e.totalRecords/e.perPage),e.currentPage=1,e.totalRecords>10&&(e.endIndex=9),e.$store.dispatch("setLoadingFlag","none"),t.$ls.set("records",e.records),e.$store.dispatch("setRecords",e.records)}).catch(function(e){console.log("Error")})}}},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-fluid"},[a("h1",{staticClass:"page-title"},[e._v("License Database Records")]),e._v(" "),a("div",{staticClass:"panel-group"},[a("div",{staticClass:"panel panel-default"},[a("b-card",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],staticClass:"filter-panel",attrs:{variant:"primary"}},[e._v("Filter Options"),a("i",{staticClass:"fa fa-angle-double-down filter-condition-arrow"})]),e._v(" "),a("b-collapse",{staticClass:"filter-body",attrs:{id:"collapse1"}},[a("div",{staticClass:"row filter-row"},[a("div",{staticClass:"col-md-3 col-sm-4"},[a("p",[e._v("License Expiration Date Range ")]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6 col-md-6"},[a("b-form-input",{attrs:{id:"startExpireDate",type:"date"},model:{value:e.startExpireDate,callback:function(t){e.startExpireDate=t},expression:"startExpireDate"}})],1),e._v(" "),a("div",{staticClass:"col-sm-6 col-md-6"},[a("b-form-input",{attrs:{id:"endExpireDate",type:"date"},model:{value:e.endExpireDate,callback:function(t){e.endExpireDate=t},expression:"endExpireDate"}})],1)])]),e._v(" "),a("div",{staticClass:"col-md-7 col-sm-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3 col-sm-6"},[a("b-form-checkbox",{attrs:{value:"accepted","unchecked-value":"not_accepted"},model:{value:e.bumblebee,callback:function(t){e.bumblebee=t},expression:"bumblebee"}},[e._v("\n                    Bulblebee\n                ")]),e._v(" "),a("b-form-checkbox",{attrs:{value:"accepted","unchecked-value":"not_accepted"},model:{value:e.eggplant,callback:function(t){e.eggplant=t},expression:"eggplant"}},[e._v("\n                    Eggplant\n                ")]),e._v(" "),a("b-form-checkbox",{attrs:{value:"accepted","unchecked-value":"not_accepted"},model:{value:e.dragonfly,callback:function(t){e.dragonfly=t},expression:"dragonfly"}},[e._v("\n                    Dragonfly\n                ")]),e._v(" "),a("b-form-checkbox",{attrs:{value:"accepted","unchecked-value":"not_accepted"},model:{value:e.firefly,callback:function(t){e.firefly=t},expression:"firefly"}},[e._v("\n                    Firefly\n                ")]),e._v(" "),a("b-form-checkbox",{attrs:{value:"accepted","unchecked-value":"not_accepted"},model:{value:e.pangolin,callback:function(t){e.pangolin=t},expression:"pangolin"}},[e._v("\n                    Pangolin\n                ")])],1),e._v(" "),a("div",{staticClass:"col-md-3 col-sm-6"},[a("b-form-checkbox",{attrs:{value:"accepted","unchecked-value":"not_accepted"},model:{value:e.paid,callback:function(t){e.paid=t},expression:"paid"}},[e._v("\n                    Paid\n                ")]),e._v(" "),a("b-form-checkbox",{attrs:{value:"accepted","unchecked-value":"not_accepted"},model:{value:e.evaluation,callback:function(t){e.evaluation=t},expression:"evaluation"}},[e._v("\n                    Evaluation\n                ")])],1),e._v(" "),a("div",{staticClass:"col-md-3 col-sm-6"},[a("b-form-checkbox",{attrs:{value:"accepted","unchecked-value":"not_accepted"},model:{value:e.basic,callback:function(t){e.basic=t},expression:"basic"}},[e._v("\n                    Basic\n                ")]),e._v(" "),a("b-form-checkbox",{staticClass:"license-type",attrs:{value:"accepted","unchecked-value":"not_accepted"},model:{value:e.enterprise,callback:function(t){e.enterprise=t},expression:"enterprise"}},[e._v("\n                    Enterprise\n                ")])],1),e._v(" "),a("div",{staticClass:"col-md-3 col-sm-6"},[a("b-form-checkbox",{attrs:{value:"accepted","unchecked-value":"not_accepted"},model:{value:e.showArchived,callback:function(t){e.showArchived=t},expression:"showArchived"}},[e._v("\n                    Show Archived\n                ")])],1)])]),e._v(" "),a("div",{staticClass:"col-md-1 col-sm-2"},[a("b-form-select",{attrs:{id:"detailCustomStatus",options:e.customStatus},model:{value:e.selectedCustomStatus,callback:function(t){e.selectedCustomStatus=t},expression:"selectedCustomStatus"}})],1)]),e._v(" "),a("div",{staticClass:"filter-footer"},[a("button",{staticClass:"btn btn-success btn-filter",attrs:{type:"button"}},[e._v("Filter")])])])],1)]),e._v(" "),a("div",{staticClass:"database-table"},[a("table",{staticClass:"table table-striped table-hover"},[e._m(0),e._v(" "),e.records.length>0?a("tbody",e._l(e.endIndex-e.startIndex+1,function(t){return a("tr",{on:{click:function(a){e.vieweDetail(t-1)}}},[a("td",[e._v(e._s(e.records[t+e.startIndex-1].license_id))]),e._v(" "),a("td",[e._v(e._s(e.records[t+e.startIndex-1].userFullName))]),e._v(" "),a("td",[e._v(e._s(e.records[t+e.startIndex-1].userEMail))]),e._v(" "),a("td",[e._v(e._s(e.records[t+e.startIndex-1].userCompany))]),e._v(" "),a("td",[e._v(e._s(e.records[t+e.startIndex-1].productName))]),e._v(" "),a("td",[e._v(e._s(e.records[t+e.startIndex-1].issueDate))]),e._v(" "),a("td",[e._v(e._s(e.records[t+e.startIndex-1].expireDate))]),e._v(" "),a("td",[e._v("Email Sent")])])})):a("tbody",[e._m(1)])]),e._v(" "),a("b-pagination",{attrs:{size:"md","total-rows":e.totalRecords,"per-page":e.perPage},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1),e._v(" "),a("LoadingModal")],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",{staticStyle:{background:"rgb(114, 202, 95)",color:"white","font-size":"16px"}},[t("th",[this._v("ID")]),this._v(" "),t("th",[this._v("Name")]),this._v(" "),t("th",[this._v("Email")]),this._v(" "),t("th",[this._v("Company")]),this._v(" "),t("th",[this._v("Product")]),this._v(" "),t("th",[this._v("Issue Date")]),this._v(" "),t("th",[this._v("Expire Date")]),this._v(" "),t("th",[this._v("Status")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",{attrs:{colspan:"8"}},[this._v("\n            No Records\n          ")])])}]},m=a("VU/8")(p,v,!1,null,null,null).exports,b={name:"ViewDetail",created:function(){this.selectedIndex=-1,this.selectedIndex=this.$route.params.id-1,this.records=this.$ls.get("records");var e=this;$(document).ready(function(){e.setEditFields(!1)})},computed:{},watch:{selectedIndex:{handler:function(){this.selectedIndex<0||this.selectedIndex>=this.records.length?this.selectedRecord={accountsPayable:"",customerStatus:"",issueDate:"2018-01-01",expireDate:"2018-01-01",freshsalesURL:"",importantNotes:"",licenseState:"not_accepted",licenseStatus:"",licenseType:"",licenseURL:"",license_id:"",productName:"",userCompany:"",userEMail:"",userFullName:"",userRegisteredTo:""}:(this.records.length>0&&(this.selectedRecord=this.records[this.selectedIndex]),null==this.selectedRecord.issueDate&&(this.selectedRecord.issueDate="2018-01-02"),null==this.selectedRecord.expireDate&&(this.selectedRecord.expireDate="2018-01-02"),1==this.selectedRecord.licenseState?this.selectedRecord.licenseState="accepted":this.selectedRecord.licenseState="not_accepted")}}},data:function(){return{selectedRecord:{accountsPayable:"",customerStatus:"",expireDate:null,freshsalesURL:"",importantNotes:"",issueDate:null,licenseState:"not_accepted",licenseStatus:"",licenseType:"",licenseURL:"",license_id:"",productName:"",userCompany:"",userEMail:"",userFullName:"",userRegisteredTo:""},selectedIndex:-1,records:[],issueDate:"2017-12-12",expireDate:"2017-12-12",selectedCustomStatus:"new",customStatus:[{value:"new",text:"New"},{value:"renewal",text:"Renewal"},{value:"lost",text:"Lost"}],selectedType:"Enterprise",licenseType:[{value:"Enterprise",text:"Enterprise"},{value:"Basic",text:"Basic"}],selectedLicenseStatus:"TODO",licenseStatus:[{value:"TODO",text:"TODO"},{value:"Email Sent",text:"Email Sent"},{value:"Multiple Emails",text:"Multiple Emails"}],selectedProduct:"bumblebee",products:[{value:"bumblebee",text:"Bumblebee"},{value:"eggplant-alm",text:"Eggplant-alm"},{value:"dragonfly",text:"Dragonfly"},{value:"firefly",text:"Firefly"},{value:"pangolin",text:"Pangolin"}],renewStatus:"Renewed",licenseState:"not_accepted",payableContent:""}},methods:{backToHome:function(){this.$router.push({name:"Content"})},saveRecord:function(){console.log(this.selectedRecord)},setEditFields:function(e){e?($("input").removeAttr("disabled"),$("select").removeAttr("disabled"),$("textarea").removeAttr("disabled"),$(".col-detail button").removeAttr("disabled"),$(".col-part-detail button").removeAttr("disabled"),$("#btnSave").removeAttr("disabled"),$("#btnEdit").attr("disabled","")):($("input").attr("disabled",""),$("select").attr("disabled",""),$("textarea").attr("disabled",""),$(".col-detail button").attr("disabled",""),$(".col-part-detail button").attr("disabled",""),$("#btnSave").attr("disabled",""))}}},h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container view-detail"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("button",{staticClass:"btn btn-success btn-back-results",attrs:{type:"button"},on:{click:function(t){e.backToHome()}}},[a("i",{staticClass:"fa fa-angle-left"}),e._v("  Back to Search Results")]),e._v(" "),e._m(0)])]),e._v(" "),a("div",{staticClass:"row main-panel"},[a("div",{staticClass:"col-md-12 col-detail"},[a("div",{staticClass:"row sub-title"},[e._v("License Details")]),e._v(" "),a("div",{staticClass:"row detail-panel"},[a("div",{staticClass:"col-md-6 col-sm-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("b-form-group",{attrs:{horizontal:"",label:"License ID:","label-class":"text-sm-right","label-for":"detailLicenseID"}},[a("b-form-input",{attrs:{id:"detailLicenseID"},model:{value:e.selectedRecord.license_id,callback:function(t){e.$set(e.selectedRecord,"license_id",t)},expression:"selectedRecord.license_id"}})],1)],1),e._v(" "),a("div",{staticClass:"col-md-12"},[a("b-form-group",{attrs:{horizontal:"",label:"Company:","label-class":"text-sm-right","label-for":"detailCompany"}},[a("b-form-input",{attrs:{id:"detailCompany"},model:{value:e.selectedRecord.userCompany,callback:function(t){e.$set(e.selectedRecord,"userCompany",t)},expression:"selectedRecord.userCompany"}})],1)],1),e._v(" "),a("div",{staticClass:"col-md-12"},[a("b-form-group",{attrs:{horizontal:"",label:"Issue Date:","label-class":"text-sm-right","label-for":"detailIssueDate"}},[a("b-form-input",{attrs:{id:"detailIssueDate",type:"date"},model:{value:e.selectedRecord.issueDate,callback:function(t){e.$set(e.selectedRecord,"issueDate",t)},expression:"selectedRecord.issueDate"}})],1)],1),e._v(" "),a("div",{staticClass:"col-md-12"},[a("b-form-group",{attrs:{horizontal:"",label:"Expiry Date:","label-class":"text-sm-right","label-for":"detailExpireDate"}},[a("b-form-input",{attrs:{id:"detailExpireDate",type:"date"},model:{value:e.selectedRecord.expireDate,callback:function(t){e.$set(e.selectedRecord,"expireDate",t)},expression:"selectedRecord.expireDate"}})],1)],1),e._v(" "),a("div",{staticClass:"col-md-12"},[a("b-form-group",{attrs:{horizontal:"",label:"License Type:","label-class":"text-sm-right","label-for":"detailLicenseType"}},[a("b-form-select",{attrs:{id:"detailLicenseType",options:e.licenseType},model:{value:e.selectedRecord.licenseType,callback:function(t){e.$set(e.selectedRecord,"licenseType",t)},expression:"selectedRecord.licenseType"}})],1)],1),e._v(" "),a("div",{staticClass:"col-md-12"},[a("b-form-group",{attrs:{horizontal:"",label:"Product:","label-class":"text-sm-right","label-for":"detailProduct"}},[a("b-form-select",{attrs:{id:"detailProduct",options:e.products},model:{value:e.selectedRecord.productName,callback:function(t){e.$set(e.selectedRecord,"productName",t)},expression:"selectedRecord.productName"}})],1)],1)])]),e._v(" "),a("div",{staticClass:"col-md-6 col-sm-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("b-form-group",{attrs:{horizontal:"",label:"Contact Name:","label-class":"text-sm-right","label-for":"detailContactName"}},[a("b-form-input",{attrs:{id:"detailContactName"},model:{value:e.selectedRecord.userFullName,callback:function(t){e.$set(e.selectedRecord,"userFullName",t)},expression:"selectedRecord.userFullName"}})],1)],1),e._v(" "),a("div",{staticClass:"col-md-12"},[a("b-form-group",{attrs:{horizontal:"",label:"Contact Email:","label-class":"text-sm-right","label-for":"detailContactEmail"}},[a("b-form-input",{attrs:{id:"detailContactEmail"},model:{value:e.selectedRecord.userEMail,callback:function(t){e.$set(e.selectedRecord,"userEMail",t)},expression:"selectedRecord.userEMail"}})],1)],1),e._v(" "),a("div",{staticClass:"col-md-12"},[a("b-form-group",{attrs:{horizontal:"",label:"License URL:","label-class":"text-sm-right","label-for":"detailLicenseURL"}},[a("b-form-input",{attrs:{id:"detailLicenseURL"},model:{value:e.selectedRecord.licenseURL,callback:function(t){e.$set(e.selectedRecord,"licenseURL",t)},expression:"selectedRecord.licenseURL"}})],1)],1),e._v(" "),a("div",{staticClass:"col-md-12"},[a("b-form-group",{attrs:{horizontal:"",label:"Freshsales URL:","label-class":"text-sm-right","label-for":"detailFreshsalesURL"}},[a("b-form-input",{attrs:{id:"detailFreshsalesURL"},model:{value:e.selectedRecord.freshsalesURL,callback:function(t){e.$set(e.selectedRecord,"freshsalesURL",t)},expression:"selectedRecord.freshsalesURL"}})],1)],1),e._v(" "),a("div",{staticClass:"col-md-12"},[a("b-form-group",{attrs:{horizontal:"",label:"Customer Status:","label-class":"text-sm-right","label-for":"detailCustomStatus"}},[a("b-form-select",{attrs:{id:"detailCustomStatus",options:e.customStatus},model:{value:e.selectedRecord.customerStatus,callback:function(t){e.$set(e.selectedRecord,"customerStatus",t)},expression:"selectedRecord.customerStatus"}})],1)],1)])])])]),e._v(" "),a("div",{staticClass:"col-md-6 col-sm-6 col-xs-12 col-part-detail"},[a("div",{staticClass:"content-panel"},[a("div",{staticClass:"row sub-title"},[e._v("Accounts Payable + Decision Makers Info")]),e._v(" "),a("div",{staticClass:"row detail-panel",staticStyle:{"margin-bottom":"10px"}},[a("b-form-textarea",{attrs:{id:"textarea1",placeholder:"Enter something",rows:3,"no-resize":!0,"max-rows":3},model:{value:e.selectedRecord.accountsPayable,callback:function(t){e.$set(e.selectedRecord,"accountsPayable",t)},expression:"selectedRecord.accountsPayable"}})],1)])]),e._v(" "),a("div",{staticClass:"col-md-6 col-sm-6 col-xs-12 col-part-detail"},[a("div",{staticClass:"content-panel"},[a("div",{staticClass:"row sub-title"},[e._v("License Status")]),e._v(" "),a("div",{staticClass:"row detail-panel"},[a("div",{staticClass:"col-md-12"},[a("b-form-group",{attrs:{horizontal:"",label:"Status:","label-class":"text-sm-right","label-for":"detailLicenseStatus"}},[a("b-form-select",{staticClass:"mb-3",attrs:{id:"detailLicenseStatus",options:e.licenseStatus},model:{value:e.selectedRecord.licenseStatus,callback:function(t){e.$set(e.selectedRecord,"licenseStatus",t)},expression:"selectedRecord.licenseStatus"}})],1)],1),e._v(" "),a("div",{staticClass:"col-md-12"},[a("b-form-group",{attrs:{horizontal:"",label:"State:","label-class":"text-sm-right","label-for":"detailLicenseState"}},[a("b-form-checkbox",{attrs:{id:"detailLicenseState",value:"accepted","unchecked-value":"not_accepted"},model:{value:e.selectedRecord.licenseState,callback:function(t){e.$set(e.selectedRecord,"licenseState",t)},expression:"selectedRecord.licenseState"}},[e._v("\n                    Archive\n                ")])],1)],1)])])]),e._v(" "),e._m(1),e._v(" "),a("div",{staticClass:"col-md-12 col-detail"},[a("div",{staticClass:"row sub-title"},[e._v("Important Notes")]),e._v(" "),a("div",{staticClass:"row detail-panel"},[a("b-form-textarea",{staticClass:"form-group",attrs:{id:"textarea1",placeholder:"Enter something",rows:3,"no-resize":!0,"max-rows":3},model:{value:e.selectedRecord.importantNotes,callback:function(t){e.$set(e.selectedRecord,"importantNotes",t)},expression:"selectedRecord.importantNotes"}})],1)]),e._v(" "),a("div",{staticClass:"col-md-12",staticStyle:{"text-align":"right"}},[a("button",{staticClass:"btn btn-success btn-small form-group",attrs:{type:"button",id:"btnEdit"},on:{click:function(t){e.setEditFields(!0)}}},[e._v("Edit")]),e._v(" "),a("button",{staticClass:"btn btn-success btn-small form-group",attrs:{type:"button",id:"btnSave"},on:{click:function(t){e.saveRecord()}}},[e._v("Save")])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"btn-group-move"},[t("button",{staticClass:"btn btn-success",attrs:{type:"button"}},[t("i",{staticClass:"fa fa-angle-left"}),this._v("  Previous Record")]),this._v(" "),t("button",{staticClass:"btn btn-success",attrs:{type:"button"}},[this._v("Next Record  "),t("i",{staticClass:"fa fa-angle-right"})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-md-12 col-detail"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-4 col-sm-4 col-xs-12"},[t("div",{staticClass:"content-panel"},[t("div",{staticClass:"row sub-title"},[this._v("Invoices")]),this._v(" "),t("div",{staticClass:"row detail-panel"},[t("div",{staticClass:"col-md-12"},[this._v("12/1/17: In-4087.pdf")]),this._v(" "),t("div",{staticClass:"col-md-12"},[this._v("12/1/17: In-4087.pdf")]),this._v(" "),t("button",{staticClass:"btn btn-success btn-small form-group",attrs:{type:"button"}},[this._v("Add")])])])]),this._v(" "),t("div",{staticClass:"col-md-4 col-sm-4 col-xs-12"},[t("div",{staticClass:"content-panel"},[t("div",{staticClass:"row sub-title"},[this._v("Quotes")]),this._v(" "),t("div",{staticClass:"row detail-panel"},[t("div",{staticClass:"col-md-12"},[this._v("12/1/17: In-4087.pdf")]),this._v(" "),t("div",{staticClass:"col-md-12"},[this._v("12/1/17: In-4087.pdf")]),this._v(" "),t("button",{staticClass:"btn btn-success btn-small form-group",attrs:{type:"button"}},[this._v("Add")])])])]),this._v(" "),t("div",{staticClass:"col-md-4 col-sm-4 col-xs-12"},[t("div",{staticClass:"content-panel"},[t("div",{staticClass:"row sub-title"},[this._v("Purchase Orders")]),this._v(" "),t("div",{staticClass:"row detail-panel"},[t("div",{staticClass:"col-md-12"},[this._v("12/1/17: In-4087.pdf")]),this._v(" "),t("div",{staticClass:"col-md-12"},[this._v("12/1/17: In-4087.pdf")]),this._v(" "),t("button",{staticClass:"btn btn-success btn-small form-group",attrs:{type:"button"}},[this._v("Add")])])])])])])}]},f=a("VU/8")(b,h,!1,null,null,null).exports;c.a.use(n.a);var g=new n.a({routes:[{path:"/",name:"Content",component:m},{path:"/viewdetail/:id",name:"ViewDetail",component:f}]}),_=a("7t+N"),x=a.n(_),C=(a("hpwS"),function(e,t){(0,e.commit)("SET_RECORDS",t)}),R=function(e,t){(0,e.commit)("SET_LOADING_FLAG",t)},w=function(e,t){(0,e.commit)("SET_LOADING_TEXT",t)},y=function(e){return e.loading},E=function(e){return e.loadingText},S=function(e){return e.records},k=a("//Fk"),D=a.n(k),L=a("mtWM"),N=a.n(L),I=a("kxzG"),P=a.n(I),T={protocol:"https",address:"localhost",port:"8080",basePath:"",axiosConfig:{baseURL:"http://localhost:8080/",headers:{},withCredentials:!0},getEndpointUrl:function(){return this.protocol+"://"+this.address+(this.port?":"+this.port:"")+(this.basePath?this.basePath:"")}},F=N.a.create(T.axiosConfig),U=a("rezj"),A=a.n(U),O=(a("RyI1"),a("Ba3q"),{newRecords:{},backupRecords:{}}),z={state:O,actions:{fetchNewRecords:function(e){var t=e.commit;return console.log("Fetch New Records"),new D.a(function(e,a){(function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,l=null;return null!==s&&console.log(s),new D.a(function(t,s){F.get(e,a).then(function(e){var a=e.request.responseURL,c=new URL(a),i=c.origin+c.pathname;if(200===e.data.code||e.data.hasOwnProperty("code"))s({message:e.data.message,code:e.data.code});else{var o={};if(o.pagination={},e.headers.hasOwnProperty("x-pagination-total-count")&&(o.total=P()(e.headers["x-pagination-total-count"]),o.pagination.total=P()(e.headers["x-pagination-total-count"])),e.headers.hasOwnProperty("x-pagination-per-page")&&(o.perPage=P()(e.headers["x-pagination-per-page"]),o.pagination.per_page=P()(e.headers["x-pagination-per-page"]),o.pagination.first_page_url=i+c.search+"&page=1"),e.headers.hasOwnProperty("x-pagination-page-count")&&(l=P()(e.headers["x-pagination-page-count"]),o.pageCount=l,o.pagination.last_page=l,o.pagination.last_page_url=i+c.search+"&page="+l),e.headers.hasOwnProperty("x-pagination-current-page")){var n=P()(e.headers["x-pagination-current-page"]);o.currentPage=n,o.pagination.current_page=n,n<l&&n<=1&&l>1&&(o.pagination.next_page_url=i+c.search+"&page="+ ++n,o.pagination.prev_page_url=null),n>1&&n<=l&&l>1&&(o.pagination.prev_page_url=i+c.search+"&page="+--n),o.items=e.data,t(o)}else t(e.data)}}).catch(function(e){s(e)})})})("/getNewRecords",null,null).then(function(a){t("FETCH_NEW_RECORDS",a);var s=A()(O.newRecords);e(s)}).catch(function(e){a(e)})})}},getters:{getNewRecords:function(e){return A()(e.originalRecords)}},mutations:{FETCH_NEW_RECORDS:function(e,t){e.newRecords=t}}};c.a.use(u.a),c.a.prototype.$jQuery=x.a;var M=new u.a.Store({actions:s,getters:l,state:{loading:"none",loadingText:"Loading...",records:[]},mutations:{SET_RECORDS:function(e,t){e.records=t},SET_LOADING_FLAG:function(e,t){e.loading=t},SET_LOADING_TEXT:function(e,t){e.loadingText=t}},modules:{license:z}}),V=a("yXtV"),W=a.n(V),B=(a("qb6w"),a("ShJz"),a("OF5A"),a("e6fC"));a("Jmt5"),a("9M+g");c.a.use(W.a,{namespace:"vuejs__"}),c.a.use(B.a),c.a.config.productionTip=!1,new c.a({el:"#app",router:g,store:M,template:"<App/>",components:{App:o}})},ShJz:function(e,t){},"Y9O/":function(e,t){},dW2o:function(e,t){},n2wW:function(e,t){},n9mN:function(e,t){},qb6w:function(e,t){},r15W:function(e,t,a){"use strict";var s=a("E9Zr").a;var l=a("VU/8")(s,null,!1,function(e){a("dW2o")},null,null);t.a=l.exports},xBwK:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.6b03ec3bd80981aacee3.js.map