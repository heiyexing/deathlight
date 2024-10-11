"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[371],{825:function(xe,R,t){t.r(R),t.d(R,{default:function(){return ie}});var x=t(9361),N=x.Z.useToken,y=function(){var l=N(),n=l.token;return n},z=t(5574),F=t.n(z),V=t(11713),k=t(27732),$=t(28699),p=t(55241),d=t(4301),j=t(67294),e=t(85893),I=function(){var l=(0,j.useRef)(document.querySelector("body")),n=(0,$.Z)(l),s=F()(n,2),u=s[0],i=s[1].toggleFullscreen;return(0,e.jsx)(p.Z,{content:u?"\u9000\u51FA\u5168\u5C4F":"\u5168\u5C4F",children:(0,e.jsx)(d.ZP,{type:"text",size:"large",icon:u?(0,e.jsx)(V.Z,{}):(0,e.jsx)(k.Z,{}),onClick:i})})},G=I,P={pageHome:"pageHome___lOQeO",centerPanel:"centerPanel___EWrCA",floatBtnGroup:"floatBtnGroup___vTKbU"},m=t(14244),L=t(28459),K=t(71230),f=t(15746),J=t(27484),v=t.n(J),g={countdown:"countdown___kvtlB",countdownLabel:"countdownLabel___Zr0s3",countdownValue:"countdownValue___oqTnL",countdownOpeartion:"countdownOpeartion___SGeyA"},Q=function(l){var n=v().duration(l);return n.format("HH:mm:ss")};function H(o){var l=o.value,n=l===void 0?0:l,s=o.onChange,u=o.title,i=y(),a=function(c){s==null||s(c<0?0:c)};return(0,e.jsxs)("div",{className:g.countdown,children:[(0,e.jsxs)("div",{className:g.countdownLabel,style:{color:i.colorTextDescription},children:[u,"\uFF1A"]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:g.countdownValue,children:Q(n)}),(0,e.jsxs)(K.Z,{className:g.countdownOpeartion,children:[(0,e.jsx)(f.Z,{span:6,children:(0,e.jsx)(d.ZP,{type:"text",size:"large",block:!0,onClick:function(){return a==null?void 0:a(n-60*1e3)},children:"-1\u5206"})}),(0,e.jsx)(f.Z,{span:6,children:(0,e.jsx)(d.ZP,{type:"text",size:"large",block:!0,onClick:function(){return a==null?void 0:a(n-1e3)},children:"-1\u79D2"})}),(0,e.jsx)(f.Z,{span:6,children:(0,e.jsx)(d.ZP,{type:"text",size:"large",block:!0,onClick:function(){return a==null?void 0:a(n+1e3)},children:"+1\u79D2"})}),(0,e.jsx)(f.Z,{span:6,children:(0,e.jsx)(d.ZP,{type:"text",size:"large",block:!0,onClick:function(){return a==null?void 0:a(n+60*1e3)},children:"+1\u5206"})})]})]})]})}var U=t(74842),W=t(30159),X=t(93558),Y={pauseBtn:"pauseBtn___VnEmJ"};function b(){var o=(0,m.useModel)("global"),l=o.isPaused,n=o.setIsPaused,s=function(){n(!l)};return(0,X.Z)("Space",s),(0,e.jsx)(d.ZP,{type:"text",size:"large",className:Y.pauseBtn,icon:l?(0,e.jsx)(U.Z,{}):(0,e.jsx)(W.Z,{}),onClick:s,onFocus:function(i){return i.target.blur()}})}var w=t(87740),q=t(68872),_=t(86738),ee=function(){var l=(0,m.useModel)("global"),n=l.setPauseTime,s=l.setRecallTime,u=l.totalPauseTime,i=l.totalRecallTime,a=function(){n(u),s(i),q.ZP.success("\u91CD\u7F6E\u6210\u529F")};return(0,e.jsx)(_.Z,{title:"\u63D0\u793A",description:"\u662F\u5426\u8FD8\u539F\u6240\u6709\u65F6\u95F4\uFF1F",onConfirm:a,trigger:"hover",children:(0,e.jsx)(d.ZP,{type:"text",size:"large",icon:(0,e.jsx)(w.Z,{})})})},te=ee,le=t(42952),T=t(82601),ne=t(6137),A=t(23085),oe=function(){var l=(0,j.useState)(!1),n=F()(l,2),s=n[0],u=n[1],i=T.Z.useForm(),a=F()(i,1),r=a[0],c=(0,m.useModel)("global"),B=c.totalPauseTime,re=B===void 0?0:B,E=c.totalRecallTime,ce=E===void 0?0:E,de=c.setTotalPauseTime,me=c.setTotalRecallTime,ve=c.setPauseTime,fe=c.setRecallTime,ge=function(){u(!0)};(0,j.useEffect)(function(){s&&r.setFieldsValue({totalPauseTime:v()(v().duration(re).format("HH:mm:ss"),"HH:mm:ss"),totalRecallTime:v()(v().duration(ce).format("HH:mm:ss"),"HH:mm:ss")})},[s]);var h=function(){u(!1)},Te=function(){var M=r.getFieldsValue(),Z=M.totalPauseTime,C=M.totalRecallTime,S=Z.get("hour")*60*60*1e3+Z.get("minute")*60*1e3+Z.get("second")*1e3,D=C.get("hour")*60*60*1e3+C.get("minute")*60*1e3+C.get("second")*1e3;de(S),me(D),ve(S),fe(D),h()};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(p.Z,{content:"\u8BBE\u7F6E",children:(0,e.jsx)(d.ZP,{type:"text",size:"large",icon:(0,e.jsx)(le.Z,{}),onClick:ge})}),(0,e.jsx)(ne.Z,{title:"\u8BBE\u7F6E\u9ED8\u8BA4\u65F6\u957F",open:s,onOk:Te,onCancel:h,onClose:h,children:(0,e.jsxs)(T.Z,{form:r,children:[(0,e.jsx)(T.Z.Item,{label:"\u9ED8\u8BA4\u6682\u505C\u5269\u4F59\u65F6\u957F",name:"totalPauseTime",children:(0,e.jsx)(A.Z,{allowClear:!1,showNow:!1,needConfirm:!1})}),(0,e.jsx)(T.Z.Item,{label:"\u9ED8\u8BA4\u56DE\u6EAF\u5269\u4F59\u65F6\u957F",name:"totalRecallTime",children:(0,e.jsx)(A.Z,{allowClear:!1,showNow:!1,needConfirm:!1})})]})})]})},se=oe;function ae(){var o=(0,m.useModel)("global"),l=o.recallTime,n=o.setRecallTime,s=o.pauseTime,u=o.setPauseTime,i=y();return(0,e.jsxs)("div",{className:P.pageHome,style:{background:i.colorBgContainer,color:i.colorText},children:[(0,e.jsxs)("div",{className:P.centerPanel,children:[(0,e.jsx)(H,{title:"\u6682\u505C\u5269\u4F59\u65F6\u957F",value:s,onChange:u}),(0,e.jsx)(H,{title:"\u56DE\u6EAF\u5269\u4F59\u65F6\u957F",value:l,onChange:n}),(0,e.jsx)(b,{})]}),(0,e.jsxs)("div",{className:P.floatBtnGroup,children:[(0,e.jsx)(te,{}),(0,e.jsx)(se,{}),(0,e.jsx)(G,{})]})]})}var ue=function(){var l=(0,m.useModel)("global"),n=l.isPaused;return(0,e.jsx)(L.ZP,{theme:{algorithm:n?x.Z.defaultAlgorithm:x.Z.darkAlgorithm},children:(0,e.jsx)(ae,{})})},ie=ue}}]);