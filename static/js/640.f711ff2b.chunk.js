"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[640],{1640:function(e,n,o){o.d(n,{Z:function(){return D}});var i=o(9439),t=o(4942),a=o(3366),r=o(7462),l=o(2791),c=o.t(l,2),s=o(3733),u=o(9884),d={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},v=o(4419),p=o(5402),m=o(4036),f=0;var h=c["useId".toString()];var y=function(e){if(void 0!==h){var n=h();return null!=e?e:n}return function(e){var n=l.useState(e),o=(0,i.Z)(n,2),t=o[0],a=o[1],r=e||t;return l.useEffect((function(){null==t&&a("mui-".concat(f+=1))}),[t]),r}(e)},g=o(2922).Z,b=o(6017),Z=o(7684),x=o(6189),S=o(3329),F=(0,x.Z)((0,S.jsx)("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),w=(0,x.Z)((0,S.jsx)("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder"),A=o(1020),V=o(9007),C=o(2190),M=o(5878),R=o(1217);function L(e){return(0,R.ZP)("MuiRating",e)}var z=(0,M.Z)("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]),j=["value"],E=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function H(e,n){if(null==e)return e;var o=Math.round(e/n)*n;return Number(o.toFixed(function(e){var n=e.toString().split(".")[1];return n?n.length:0}(n)))}var O=(0,V.ZP)("span",{name:"MuiRating",slot:"Root",overridesResolver:function(e,n){var o=e.ownerState;return[(0,t.Z)({},"& .".concat(z.visuallyHidden),n.visuallyHidden),n.root,n["size".concat((0,m.Z)(o.size))],o.readOnly&&n.readOnly]}})((function(e){var n,o=e.theme,i=e.ownerState;return(0,r.Z)((n={display:"inline-flex",position:"relative",fontSize:o.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",width:"min-content",WebkitTapHighlightColor:"transparent"},(0,t.Z)(n,"&.".concat(z.disabled),{opacity:(o.vars||o).palette.action.disabledOpacity,pointerEvents:"none"}),(0,t.Z)(n,"&.".concat(z.focusVisible," .").concat(z.iconActive),{outline:"1px solid #999"}),(0,t.Z)(n,"& .".concat(z.visuallyHidden),d),n),"small"===i.size&&{fontSize:o.typography.pxToRem(18)},"large"===i.size&&{fontSize:o.typography.pxToRem(30)},i.readOnly&&{pointerEvents:"none"})})),k=(0,V.ZP)("label",{name:"MuiRating",slot:"Label",overridesResolver:function(e,n){var o=e.ownerState;return[n.label,o.emptyValueFocused&&n.labelEmptyValueActive]}})((function(e){var n=e.ownerState;return(0,r.Z)({cursor:"inherit"},n.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})})),I=(0,V.ZP)("span",{name:"MuiRating",slot:"Icon",overridesResolver:function(e,n){var o=e.ownerState;return[n.icon,o.iconEmpty&&n.iconEmpty,o.iconFilled&&n.iconFilled,o.iconHover&&n.iconHover,o.iconFocus&&n.iconFocus,o.iconActive&&n.iconActive]}})((function(e){var n=e.theme,o=e.ownerState;return(0,r.Z)({display:"flex",transition:n.transitions.create("transform",{duration:n.transitions.duration.shortest}),pointerEvents:"none"},o.iconActive&&{transform:"scale(1.2)"},o.iconEmpty&&{color:(n.vars||n).palette.action.disabled})})),T=(0,V.ZP)("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:function(e){return(0,C.Z)(e)&&"iconActive"!==e},overridesResolver:function(e,n){var o=e.iconActive;return[n.decimal,o&&n.iconActive]}})((function(e){var n=e.iconActive;return(0,r.Z)({position:"relative"},n&&{transform:"scale(1.2)"})}));function N(e){var n=(0,a.Z)(e,j);return(0,S.jsx)("span",(0,r.Z)({},n))}function P(e){var n=e.classes,o=e.disabled,i=e.emptyIcon,t=e.focus,a=e.getLabelText,c=e.highlightSelectedOnly,u=e.hover,d=e.icon,v=e.IconContainerComponent,p=e.isActive,m=e.itemValue,f=e.labelProps,h=e.name,g=e.onBlur,b=e.onChange,Z=e.onClick,x=e.onFocus,F=e.readOnly,w=e.ownerState,A=e.ratingValue,V=c?m===A:m<=A,C=m<=u,M=m<=t,R=m===e.ratingValueRounded,L=y(),z=(0,S.jsx)(I,{as:v,value:m,className:(0,s.Z)(n.icon,V?n.iconFilled:n.iconEmpty,C&&n.iconHover,M&&n.iconFocus,p&&n.iconActive),ownerState:(0,r.Z)({},w,{iconEmpty:!V,iconFilled:V,iconHover:C,iconFocus:M,iconActive:p}),children:i&&!V?i:d});return F?(0,S.jsx)("span",(0,r.Z)({},f,{children:z})):(0,S.jsxs)(l.Fragment,{children:[(0,S.jsxs)(k,(0,r.Z)({ownerState:(0,r.Z)({},w,{emptyValueFocused:void 0}),htmlFor:L},f,{children:[z,(0,S.jsx)("span",{className:n.visuallyHidden,children:a(m)})]})),(0,S.jsx)("input",{className:n.visuallyHidden,onFocus:x,onBlur:g,onChange:b,onClick:Z,disabled:o,value:m,id:L,type:"radio",name:h,checked:R})]})}var B=(0,S.jsx)(F,{fontSize:"inherit"}),_=(0,S.jsx)(w,{fontSize:"inherit"});function X(e){return"".concat(e," Star").concat(1!==e?"s":"")}var D=l.forwardRef((function(e,n){var o=(0,A.i)({name:"MuiRating",props:e}),t=o.className,c=o.defaultValue,d=void 0===c?null:c,f=o.disabled,h=void 0!==f&&f,x=o.emptyIcon,F=void 0===x?_:x,w=o.emptyLabelText,V=void 0===w?"Empty":w,C=o.getLabelText,M=void 0===C?X:C,R=o.highlightSelectedOnly,z=void 0!==R&&R,j=o.icon,I=void 0===j?B:j,D=o.IconContainerComponent,W=void 0===D?N:D,Y=o.max,q=void 0===Y?5:Y,G=o.name,J=o.onChange,K=o.onChangeActive,Q=o.onMouseLeave,U=o.onMouseMove,$=o.precision,ee=void 0===$?1:$,ne=o.readOnly,oe=void 0!==ne&&ne,ie=o.size,te=void 0===ie?"medium":ie,ae=o.value,re=(0,a.Z)(o,E),le=y(G),ce=g({controlled:ae,default:d,name:"Rating"}),se=(0,i.Z)(ce,2),ue=se[0],de=se[1],ve=H(ue,ee),pe=(0,p.V)(),me=l.useState({hover:-1,focus:-1}),fe=(0,i.Z)(me,2),he=fe[0],ye=he.hover,ge=he.focus,be=fe[1],Ze=ve;-1!==ye&&(Ze=ye),-1!==ge&&(Ze=ge);var xe=(0,b.Z)(),Se=xe.isFocusVisibleRef,Fe=xe.onBlur,we=xe.onFocus,Ae=xe.ref,Ve=l.useState(!1),Ce=(0,i.Z)(Ve,2),Me=Ce[0],Re=Ce[1],Le=l.useRef(),ze=(0,Z.Z)(Ae,Le,n),je=function(e){var n=""===e.target.value?null:parseFloat(e.target.value);-1!==ye&&(n=ye),de(n),J&&J(e,n)},Ee=function(e){0===e.clientX&&0===e.clientY||(be({hover:-1,focus:-1}),de(null),J&&parseFloat(e.target.value)===ve&&J(e,null))},He=function(e){we(e),!0===Se.current&&Re(!0);var n=parseFloat(e.target.value);be((function(e){return{hover:e.hover,focus:n}}))},Oe=function(e){if(-1===ye){Fe(e),!1===Se.current&&Re(!1);be((function(e){return{hover:e.hover,focus:-1}}))}},ke=l.useState(!1),Ie=(0,i.Z)(ke,2),Te=Ie[0],Ne=Ie[1],Pe=(0,r.Z)({},o,{defaultValue:d,disabled:h,emptyIcon:F,emptyLabelText:V,emptyValueFocused:Te,focusVisible:Me,getLabelText:M,icon:I,IconContainerComponent:W,max:q,precision:ee,readOnly:oe,size:te}),Be=function(e){var n=e.classes,o=e.size,i=e.readOnly,t=e.disabled,a=e.emptyValueFocused,r=e.focusVisible,l={root:["root","size".concat((0,m.Z)(o)),t&&"disabled",r&&"focusVisible",i&&"readOnly"],label:["label","pristine"],labelEmptyValue:[a&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return(0,v.Z)(l,L,n)}(Pe);return(0,S.jsxs)(O,(0,r.Z)({ref:ze,onMouseMove:function(e){U&&U(e);var n,o=Le.current.getBoundingClientRect(),i=o.right,t=o.left,a=o.width;n=pe?(i-e.clientX)/a:(e.clientX-t)/a;var r=H(q*n+ee/2,ee);r=(0,u.Z)(r,ee,q),be((function(e){return e.hover===r&&e.focus===r?e:{hover:r,focus:r}})),Re(!1),K&&ye!==r&&K(e,r)},onMouseLeave:function(e){Q&&Q(e);be({hover:-1,focus:-1}),K&&-1!==ye&&K(e,-1)},className:(0,s.Z)(Be.root,t,oe&&"MuiRating-readOnly"),ownerState:Pe,role:oe?"img":null,"aria-label":oe?M(Ze):null},re,{children:[Array.from(new Array(q)).map((function(e,n){var o=n+1,i={classes:Be,disabled:h,emptyIcon:F,focus:ge,getLabelText:M,highlightSelectedOnly:z,hover:ye,icon:I,IconContainerComponent:W,name:le,onBlur:Oe,onChange:je,onClick:Ee,onFocus:He,ratingValue:Ze,ratingValueRounded:ve,readOnly:oe,ownerState:Pe},t=o===Math.ceil(Ze)&&(-1!==ye||-1!==ge);if(ee<1){var a=Array.from(new Array(1/ee));return(0,S.jsx)(T,{className:(0,s.Z)(Be.decimal,t&&Be.iconActive),ownerState:Pe,iconActive:t,children:a.map((function(e,n){var t=H(o-1+(n+1)*ee,ee);return(0,S.jsx)(P,(0,r.Z)({},i,{isActive:!1,itemValue:t,labelProps:{style:a.length-1===n?{}:{width:t===Ze?"".concat((n+1)*ee*100,"%"):"0%",overflow:"hidden",position:"absolute"}}}),t)}))},o)}return(0,S.jsx)(P,(0,r.Z)({},i,{isActive:t,itemValue:o}),o)})),!oe&&!h&&(0,S.jsxs)(k,{className:(0,s.Z)(Be.label,Be.labelEmptyValue),ownerState:Pe,children:[(0,S.jsx)("input",{className:Be.visuallyHidden,value:"",id:"".concat(le,"-empty"),type:"radio",name:le,checked:null==ve,onFocus:function(){return Ne(!0)},onBlur:function(){return Ne(!1)},onChange:je}),(0,S.jsx)("span",{className:Be.visuallyHidden,children:V})]})]}))}))}}]);
//# sourceMappingURL=640.f711ff2b.chunk.js.map