"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[371],{825:function(xe,y,n){n.r(y),n.d(y,{default:function(){return re}});var x=n(9361),z=x.Z.useToken,p=function(){var l=z(),t=l.token;return t},V=n(5574),h=n.n(V),k=n(11713),$=n(27732),I=n(28699),H=n(55241),d=n(4301),F=n(67294),e=n(85893),G=function(){var l=(0,F.useRef)(document.querySelector("body")),t=(0,I.Z)(l),a=h()(t,2),u=a[0],r=a[1].toggleFullscreen;return(0,e.jsx)(H.Z,{content:u?"\u9000\u51FA\u5168\u5C4F":"\u5168\u5C4F",children:(0,e.jsx)(d.ZP,{type:"text",size:"large",icon:u?(0,e.jsx)(k.Z,{}):(0,e.jsx)($.Z,{}),onClick:r})})},L=G,j={pageHome:"pageHome___lOQeO",centerPanel:"centerPanel___EWrCA",floatBtnGroup:"floatBtnGroup___vTKbU"},m=n(14244),P=n(93558),K=n(28459),J=n(71230),g=n(15746),Q=n(27484),v=n.n(Q),f={countdown:"countdown___kvtlB",countdownLabel:"countdownLabel___Zr0s3",countdownValue:"countdownValue___oqTnL",countdownOpeartion:"countdownOpeartion___SGeyA"},U=function(l){var t=v().duration(l);return t.format("HH:mm:ss")};function A(s){var l=s.value,t=l===void 0?0:l,a=s.onChange,u=s.title,r=p(),o=function(c){a==null||a(c<0?0:c)};return(0,e.jsxs)("div",{className:f.countdown,children:[(0,e.jsxs)("div",{className:f.countdownLabel,style:{color:r.colorTextDescription},children:[u,"\uFF1A"]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:f.countdownValue,children:U(t)}),(0,e.jsxs)(J.Z,{className:f.countdownOpeartion,children:[(0,e.jsx)(g.Z,{span:6,children:(0,e.jsx)(d.ZP,{type:"text",size:"large",block:!0,onClick:function(){return o==null?void 0:o(t-60*1e3)},children:"-1\u5206"})}),(0,e.jsx)(g.Z,{span:6,children:(0,e.jsx)(d.ZP,{type:"text",size:"large",block:!0,onClick:function(){return o==null?void 0:o(t-1e3)},children:"-1\u79D2"})}),(0,e.jsx)(g.Z,{span:6,children:(0,e.jsx)(d.ZP,{type:"text",size:"large",block:!0,onClick:function(){return o==null?void 0:o(t+1e3)},children:"+1\u79D2"})}),(0,e.jsx)(g.Z,{span:6,children:(0,e.jsx)(d.ZP,{type:"text",size:"large",block:!0,onClick:function(){return o==null?void 0:o(t+60*1e3)},children:"+1\u5206"})})]})]})]})}var W=n(74842),X=n(30159),Y={pauseBtn:"pauseBtn___VnEmJ"};function w(){var s=(0,m.useModel)("global"),l=s.isPaused,t=s.setIsPaused,a=function(){t(!l)};return(0,P.Z)("Space",a),(0,e.jsx)("div",{style:{height:0},children:(0,e.jsx)(d.ZP,{type:"text",size:"large",className:Y.pauseBtn,icon:l?(0,e.jsx)(W.Z,{}):(0,e.jsx)(X.Z,{}),onClick:a,onFocus:function(r){return r.target.blur()}})})}var b=n(87740),q=n(68872),_=n(86738),ee=function(){var l=(0,m.useModel)("global"),t=l.setPauseTime,a=l.setRecallTime,u=l.totalPauseTime,r=l.totalRecallTime,o=function(){t(u),a(r),q.ZP.success("\u91CD\u7F6E\u6210\u529F")};return(0,e.jsx)(_.Z,{title:"\u63D0\u793A",description:"\u662F\u5426\u8FD8\u539F\u6240\u6709\u65F6\u95F4\uFF1F",onConfirm:o,trigger:"hover",children:(0,e.jsx)(d.ZP,{type:"text",size:"large",icon:(0,e.jsx)(b.Z,{})})})},ne=ee,te=n(42952),T=n(82601),le=n(6137),B=n(23085),oe=function(){var l=(0,F.useState)(!1),t=h()(l,2),a=t[0],u=t[1],r=T.Z.useForm(),o=h()(r,1),i=o[0],c=(0,m.useModel)("global"),E=c.totalPauseTime,ie=E===void 0?0:E,O=c.totalRecallTime,ce=O===void 0?0:O,de=c.setTotalPauseTime,me=c.setTotalRecallTime,ve=c.setPauseTime,ge=c.setRecallTime,fe=function(){u(!0)};(0,F.useEffect)(function(){a&&i.setFieldsValue({totalPauseTime:v()(v().duration(ie).format("HH:mm:ss"),"HH:mm:ss"),totalRecallTime:v()(v().duration(ce).format("HH:mm:ss"),"HH:mm:ss")})},[a]);var Z=function(){u(!1)},Te=function(){var S=i.getFieldsValue(),C=S.totalPauseTime,R=S.totalRecallTime,D=C.get("hour")*60*60*1e3+C.get("minute")*60*1e3+C.get("second")*1e3,N=R.get("hour")*60*60*1e3+R.get("minute")*60*1e3+R.get("second")*1e3;de(D),me(N),ve(D),ge(N),Z()};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(H.Z,{content:"\u8BBE\u7F6E",children:(0,e.jsx)(d.ZP,{type:"text",size:"large",icon:(0,e.jsx)(te.Z,{}),onClick:fe})}),(0,e.jsx)(le.Z,{title:"\u8BBE\u7F6E\u9ED8\u8BA4\u65F6\u957F",open:a,onOk:Te,onCancel:Z,onClose:Z,children:(0,e.jsxs)(T.Z,{form:i,children:[(0,e.jsx)(T.Z.Item,{label:"\u9ED8\u8BA4\u6682\u505C\u5269\u4F59\u65F6\u957F",name:"totalPauseTime",children:(0,e.jsx)(B.Z,{allowClear:!1,showNow:!1,needConfirm:!1})}),(0,e.jsx)(T.Z.Item,{label:"\u9ED8\u8BA4\u56DE\u6EAF\u5269\u4F59\u65F6\u957F",name:"totalRecallTime",children:(0,e.jsx)(B.Z,{allowClear:!1,showNow:!1,needConfirm:!1})})]})})]})},se=oe;function ae(){var s=(0,m.useModel)("global"),l=s.recallTime,t=s.setRecallTime,a=s.pauseTime,u=s.setPauseTime,r=p();return(0,P.Z)("leftarrow",function(){t(function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return o-60*1e3>0?o-60*1e3:0})}),(0,P.Z)("rightarrow",function(){t(function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return o+60*1e3})}),(0,e.jsxs)("div",{className:j.pageHome,style:{background:r.colorBgContainer,color:r.colorText},children:[(0,e.jsxs)("div",{className:j.centerPanel,children:[(0,e.jsx)(A,{title:"\u6682\u505C\u5269\u4F59\u65F6\u957F",value:a,onChange:u}),(0,e.jsx)(A,{title:"\u56DE\u6EAF\u5269\u4F59\u65F6\u957F",value:l,onChange:t}),(0,e.jsx)(w,{})]}),(0,e.jsxs)("div",{className:j.floatBtnGroup,children:[(0,e.jsx)(ne,{}),(0,e.jsx)(se,{}),(0,e.jsx)(L,{})]})]})}var ue=function(){var l=(0,m.useModel)("global"),t=l.isPaused;return(0,e.jsx)(K.ZP,{theme:{algorithm:t?x.Z.defaultAlgorithm:x.Z.darkAlgorithm},children:(0,e.jsx)(ae,{})})},re=ue}}]);
