"use strict";(self.webpackChunkkakao_shop_clone=self.webpackChunkkakao_shop_clone||[]).push([[193],{8193:(e,s,l)=>{l.r(s),l.d(s,{default:()=>m});var a=l(2907),t=l(9397),n=l(5142),c=l(5043),d=l(6099),i=l(4552),r=l(6576),o=l(3216),x=l(579);const h={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_PATH:"http://localhost",REACT_APP_API_COUPON_URL:"http://localhost:8080",REACT_APP_SHOP_API_URL:"http://localhost:8082"}.REACT_APP_PATH||"",m=e=>{var s,l,m,p;let{data:u}=e;const b=null===u||void 0===u||null===(s=u.data)||void 0===s||null===(l=s.response)||void 0===l?void 0:l.products,j=null===u||void 0===u||null===(m=u.data)||void 0===m||null===(p=m.response)||void 0===p?void 0:p.totalPrice,N=(0,o.Zp)(),[f,g]=(0,c.useState)(!1),[v,y]=(0,c.useState)(!1),_=(0,c.useRef)(null),w=(0,c.useRef)(null),k=(0,c.useRef)(null),P=e=>{const{name:s,checked:l}=e.target;"payment-agree"===s?g(l):"policy-agree"===s&&y(l)},{mutate:C}=(0,a.useMutation)({mutationFn:n.f}),A=()=>null===b||void 0===b?void 0:b.map((e=>null!==e&&void 0!==e&&e.carts.every((e=>0===e.quantity))?null:(0,x.jsxs)("div",{className:"border rounded bg-white p-4 my-2",children:[e.carts.map((s=>0!==s.quantity?(0,x.jsxs)("div",{className:"flex items-center gap-3 py-2",children:[(0,x.jsx)("img",{className:"w-[80px] h-[80px] border rounded-lg",src:`http://localhost/images/${e.id}.jpg`,alt:""}),(0,x.jsxs)("div",{className:"product-info",children:[(0,x.jsxs)("div",{className:"product-name-option-quantity",children:[(0,x.jsx)("p",{className:"font-semibold",children:e.productName}),(0,x.jsxs)("span",{className:"text-sm",children:["[\uc635\uc158] ",s.option.optionName,","," "]}),(0,x.jsxs)("span",{children:[s.quantity,"\uac1c"]})]}),(0,x.jsx)("div",{className:"price",children:(0,x.jsxs)("p",{className:"text-[17px] font-bold",children:[(0,t.c)(s.price),"\uc6d0"]})})]})]},s.id):null)),(0,x.jsx)("hr",{}),(0,x.jsxs)("div",{className:"pt-4 text-center text-blue-500",children:[(0,x.jsx)(i.vBC,{className:"inline text-2xl"}),(0,x.jsx)("span",{className:"px-1 font-bold",children:"\ubb34\ub8cc\ubc30\uc1a1"})]})]},e.id)));return b?(0,x.jsx)("div",{className:"pt-[15px] pb-[50px] bg-[#F4F4F4] bg-opacity-70",children:(0,x.jsxs)("div",{className:"block mx-auto max-w-[870px] w-full ",children:[(0,x.jsx)("div",{className:"border rounded py-4 text-center bg-white",children:(0,x.jsx)("h1",{className:"text-xl font-bold",children:"\uc8fc\ubb38\ud558\uae30"})}),0===b.length?(0,x.jsx)("div",{className:"ship-info-not-found border rounded my-2 bg-white",children:(0,x.jsxs)("div",{className:"h-[600px] min-h-fit flex flex-col items-center justify-center",children:[(0,x.jsx)(i.nFu,{className:"text-8xl text-neutral-400"}),(0,x.jsx)("p",{className:"mt-10 mb-6 text-2xl text-neutral-600",children:"\uc8fc\ubb38\ud560 \uc0c1\ud488\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}),(0,x.jsxs)("div",{className:"flex w-fit mx-auto my-4",children:[(0,x.jsx)("button",{className:"w-[100px] mx-2 px-3 py-2 rounded border border-neutral-300 bg-white",onClick:()=>N(-1),children:(0,x.jsx)("span",{className:"text-sm text-black",children:"\uc774\uc804\ud654\uba74"})}),(0,x.jsx)("button",{className:"w-[100px] mx-2 px-3 py-2 rounded bg-black",onClick:()=>N(h+"/"),children:(0,x.jsx)("span",{className:"text-sm text-white",children:"\uc1fc\ud551\ud558\uae30 \ud648"})})]})]})}):(0,x.jsxs)("div",{children:[(0,x.jsxs)("div",{className:"ship-info border rounded my-2 bg-white",children:[(0,x.jsx)("div",{className:"p-4 pb-3",children:(0,x.jsx)("h1",{className:"text-xl font-bold",children:"\ubc30\uc1a1\uc9c0 \uc815\ubcf4"})}),(0,x.jsxs)("div",{className:"user-ship-info flex flex-col gap-2 px-4 pb-4",children:[(0,x.jsx)("div",{className:"",children:(0,x.jsxs)("h1",{className:"flex items-center gap-2 text-lg font-bold",children:["\ud64d\uae38\ub3d9",(0,x.jsx)("span",{className:"text-blue-400 bg-blue-100 rounded text-xs p-1",children:"\uae30\ubcf8 \ubc30\uc1a1\uc9c0"})]})}),(0,x.jsx)("div",{className:"text-[15px]",children:(0,x.jsx)("span",{children:"010-0000-0000"})}),(0,x.jsx)("div",{className:"text-[14px]",children:(0,x.jsx)("span",{children:"\uc11c\uc6b8\ud2b9\ubcc4\uc2dc \ub3c4\uace1\ub3d9 000-00"})}),(0,x.jsx)("textarea",{className:"border rounded h-16 p-3",placeholder:"\ubc30\uc1a1\uc2dc \uc694\uccad\uc0ac\ud56d\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694 (\ucd5c\ub300 50\uc790)"})]})]}),(0,x.jsx)("div",{className:"border rounded p-4 bg-white",children:(0,x.jsx)("span",{className:"text-lg font-bold",children:"\uc8fc\ubb38\uc0c1\ud488 \uc815\ubcf4 "})}),(0,x.jsx)(A,{}),(0,x.jsxs)("div",{className:"flex items-center justify-between border p-4 bg-white",children:[(0,x.jsx)("span",{className:"text-xl font-bold",children:"\ucd1d \uc8fc\ubb38 \uae08\uc561"}),(0,x.jsxs)("span",{className:"price text-xl font-bold",children:[(0,t.c)(j),"\uc6d0"]})]}),(0,x.jsxs)("div",{className:"flex flex-col gap-4 border rounded my-2 p-4 bg-white",children:[(0,x.jsxs)("div",{className:"flex items-center gap-2",children:[(0,x.jsx)("input",{className:"h-5 w-5",type:"checkbox",id:"all-agree",ref:_,checked:f&&v,onChange:e=>{const s=e.target.checked;g(s),y(s)}}),(0,x.jsx)("label",{htmlFor:"all-agree",className:"text-lg font-bold",children:"\uc804\uccb4 \ub3d9\uc758"})]}),(0,x.jsx)("hr",{}),(0,x.jsxs)("div",{className:"flex items-center gap-2",children:[(0,x.jsx)("input",{className:"h-5 w-5",type:"checkbox",id:"agree",ref:w,checked:f,name:"payment-agree",onChange:P}),(0,x.jsx)("label",{htmlFor:"agree",className:"text-base ",children:"\uad6c\ub9e4\uc870\uac74 \ud655\uc778 \ubc0f \uacb0\uc81c \uc9c4\ud589 \ub3d9\uc758"})]}),(0,x.jsxs)("div",{className:"flex items-center gap-2",children:[(0,x.jsx)("input",{className:"h-5 w-5",type:"checkbox",id:"policy",ref:k,checked:v,name:"policy-agree",onChange:P}),(0,x.jsx)("label",{htmlFor:"policy",className:"text-base",children:"\uac1c\uc778\uc815\ubcf4 \uc81c 3\uc790 \ub3d9\uc758"})]})]}),(0,x.jsxs)("div",{className:"border rounded my-2 p-4 bg-slate-50",children:[(0,x.jsx)("span",{className:"text-base font-bold",children:"\ubc95\uc801\uace0\uc9c0 "}),(0,x.jsx)("p",{className:"text-sm text-neutral-500",children:"(\uc8fc)\uce74\uce74\uc624\uc5d0\uc11c \ud310\ub9e4\ud558\ub294 \uc0c1\ud488 \uc911\uc5d0\ub294 \uac1c\ubcc4 \ud310\ub9e4\uc790\uac00 \ud310\ub9e4\ud558\ub294 \uc0c1\ud488\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uac1c\ubcc4 \ud310\ub9e4\uc790\uac00 \ud310\ub9e4\ud558\ub294 \uc0c1\ud488\uc5d0 \ub300\ud574 (\uc8fc)\uce74\uce74\uc624\ub294 \ud1b5\uc2e0\uc911\uac1c \ud310\ub9e4\uc5c5\uc790\ub85c\uc11c \ud1b5\uc2e0\ud310\ub9e4\uc758 \ub2f9\uc0ac\uc790\uac00 \uc544\ub2c8\uba70 \uc0c1\ud488\uc758 \uc8fc\ubb38, \ubc30\uc1a1 \ubc0f \ud658\ubd88 \ub4f1\uacfc \uad00\ub828\ud55c \uc758\ubb34\uc640 \ucc45\uc784\uc740 \uac01 \ud310\ub9e4\uc790\uc5d0\uac8c \uc788\uc2b5\ub2c8\ub2e4."})]}),(0,x.jsx)("button",{className:"border rounded w-full my-4 p-4 font-medium "+(f&&v?"bg-[#feeb00] hover:bg-yellow-300":"bg-neutral-300 text-neutral-500"),onClick:()=>{!1!==f&&!1!==v?C(null,{onError:e=>{alert("\uc8fc\ubb38\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4. \uc7ac\ub85c\uadf8\uc778 \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc2ed\uc2dc\uc624."),(0,d.A)().then((()=>{N("/login")}))},onSuccess:e=>{const s=e.data.response.id;alert("\uc8fc\ubb38\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),N(h+`/order/complete/${s}`)}}):alert("\ubaa8\ub4e0 \ud56d\ubaa9\uc5d0 \ub3d9\uc758\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.")},children:(0,x.jsxs)("span",{className:"font-bold text-xl",children:[(0,t.c)(j),"\uc6d0 \uacb0\uc81c\ud558\uae30"]})})]}),(0,x.jsx)("hr",{})]})}):(0,x.jsx)(r.A,{})}}}]);
//# sourceMappingURL=193.d5ed46d7.chunk.js.map