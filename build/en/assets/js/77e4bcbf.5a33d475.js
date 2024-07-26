"use strict";(self.webpackChunkdocubook=self.webpackChunkdocubook||[]).push([[5039],{3629:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>i});var c=l(4848),s=l(8453);const o={},t="useCallback",r={id:"Hook/7-3. useCallback",title:"useCallback",description:"useCallback \uac1c\uc694",source:"@site/docs/7. Hook/7-3. useCallback.md",sourceDirName:"7. Hook",slug:"/Hook/7-3. useCallback",permalink:"/docubook/en/Hook/7-3. useCallback",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useContext",permalink:"/docubook/en/Hook/7-2. useContext"},next:{title:"useMemo",permalink:"/docubook/en/Hook/7-4. useMemo"}},a={},i=[{value:"useCallback \uac1c\uc694",id:"usecallback-\uac1c\uc694",level:2},{value:"useCallback \uc0ac\uc6a9 \uc608\uc2dc",id:"usecallback-\uc0ac\uc6a9-\uc608\uc2dc",level:2},{value:"\uc8fc\uc758\ud574\uc57c \ud560 \uc810",id:"\uc8fc\uc758\ud574\uc57c-\ud560-\uc810",level:2},{value:"\ub354 \uc54c\uc544\ubcf4\uae30",id:"\ub354-\uc54c\uc544\ubcf4\uae30",level:2},{value:"\ub0b4\uc6a9 \uc694\uc57d",id:"\ub0b4\uc6a9-\uc694\uc57d",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"usecallback",children:"useCallback"}),"\n",(0,c.jsx)(n.h2,{id:"usecallback-\uac1c\uc694",children:"useCallback \uac1c\uc694"}),"\n",(0,c.jsxs)(n.p,{children:["React\ub97c \uc0ac\uc6a9\ud558\ub2e4 \ubcf4\uba74, \ucef4\ud3ec\ub10c\ud2b8\uac00 \ubd88\ud544\uc694\ud558\uac8c \ub2e4\uc2dc \ub80c\ub354\ub9c1\ub418\ub294 \uacbd\uc6b0\ub97c \uc885\uc885 \ub9c8\uc8fc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 ",(0,c.jsx)(n.code,{children:"useCallback"})," \ud6c5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,c.jsx)(n.code,{children:"useCallback"}),"\uc740 \uba54\ubaa8\uc774\uc81c\uc774\uc158\ub41c \ucf5c\ubc31 \ud568\uc218\ub97c \ubc18\ud658\ud558\uc5ec, \uc758\uc874\uc131 \ubc30\uc5f4\uc758 \uac12\uc774 \ubcc0\uacbd\ub418\uc9c0 \uc54a\ub294 \ud55c, \ub3d9\uc77c\ud55c \ud568\uc218\ub97c \uc7ac\uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ud569\ub2c8\ub2e4. \uc774\ub294 \ud2b9\ud788 \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ud568\uc218\ub97c \uc804\ub2ec\ud560 \ub54c \uc720\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,c.jsx)(n.h2,{id:"usecallback-\uc0ac\uc6a9-\uc608\uc2dc",children:"useCallback \uc0ac\uc6a9 \uc608\uc2dc"}),"\n",(0,c.jsxs)(n.p,{children:["\uba3c\uc800, ",(0,c.jsx)(n.code,{children:"useCallback"}),"\uc758 \uae30\ubcf8 \uc0ac\uc6a9\ubc95\uc744 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc544\ub798 \uc608\uc81c\ub294 \uac04\ub2e8\ud55c \uce74\uc6b4\ud130 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",children:"import React, { useState, useCallback } from 'react';\n\nconst Counter = () => {\n  const [count, setCount] = useState(0);\n\n  const increment = useCallback(() => {\n    setCount((prevCount) => prevCount + 1);\n  }, []);\n\n  return (\n    <div>\n      <p>{count}</p>\n      <button onClick={increment}>Increment</button>\n    </div>\n  );\n};\n\nexport default Counter;\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\uc704 \uc608\uc81c\uc5d0\uc11c ",(0,c.jsx)(n.code,{children:"increment"})," \ud568\uc218\ub294 ",(0,c.jsx)(n.code,{children:"useCallback"}),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \uba54\ubaa8\uc774\uc81c\uc774\uc158\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c ",(0,c.jsx)(n.code,{children:"increment"})," \ud568\uc218\ub294 ",(0,c.jsx)(n.code,{children:"count"})," \uc0c1\ud0dc\uac00 \ubcc0\uacbd\ub418\uc5b4\ub3c4 \uc0c8\ub85c \uc0dd\uc131\ub418\uc9c0 \uc54a\uace0 \ub3d9\uc77c\ud55c \ud568\uc218\uac00 \uc720\uc9c0\ub429\ub2c8\ub2e4."]}),"\n",(0,c.jsx)(n.h2,{id:"\uc8fc\uc758\ud574\uc57c-\ud560-\uc810",children:"\uc8fc\uc758\ud574\uc57c \ud560 \uc810"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"\uc758\uc874\uc131 \ubc30\uc5f4"}),": ",(0,c.jsx)(n.code,{children:"useCallback"}),"\uc744 \uc0ac\uc6a9\ud560 \ub54c\ub294 \uc758\uc874\uc131 \ubc30\uc5f4\uc744 \uc2e0\uc911\ud558\uac8c \uad00\ub9ac\ud574\uc57c \ud569\ub2c8\ub2e4. \uc758\uc874\uc131 \ubc30\uc5f4\uc5d0 \ud3ec\ud568\ub41c \uac12\uc774 \ubcc0\uacbd\ub420 \ub54c\ub9cc \ud568\uc218\uac00 \uc7ac\uc0dd\uc131\ub418\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"\ud544\uc694\ud55c \uacbd\uc6b0\uc5d0\ub9cc \uc0ac\uc6a9"}),": \ubaa8\ub4e0 \ud568\uc218\ub97c ",(0,c.jsx)(n.code,{children:"useCallback"}),"\uc73c\ub85c \uac10\uc2f8\ub294 \uac83\uc740 \uc624\ud788\ub824 \uc131\ub2a5\uc744 \uc800\ud558\uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc790\uc8fc \uc7ac\uc0dd\uc131\ub418\ub294 \ud568\uc218\ub098 \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\uc5d0 props\ub85c \uc804\ub2ec\ub418\ub294 \ud568\uc218\uc5d0\ub9cc \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\ub354-\uc54c\uc544\ubcf4\uae30",children:"\ub354 \uc54c\uc544\ubcf4\uae30"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"useMemo"}),": ",(0,c.jsx)(n.code,{children:"useCallback"}),"\uacfc \uc720\uc0ac\ud558\uc9c0\ub9cc, \ud568\uc218\uac00 \uc544\ub2cc \uac12\uc744 \uba54\ubaa8\uc774\uc81c\uc774\uc158\ud560 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"React.memo"}),": \ucef4\ud3ec\ub10c\ud2b8\uc758 \ubd88\ud544\uc694\ud55c \ub80c\ub354\ub9c1\uc744 \ubc29\uc9c0\ud558\uae30 \uc704\ud55c \uace0\ucc28 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"\uc131\ub2a5 \ucd5c\uc801\ud654"}),": React\uc5d0\uc11c \uc131\ub2a5\uc744 \ucd5c\uc801\ud654\ud558\ub294 \ub2e4\uc591\ud55c \uae30\ubc95\ub4e4\uc5d0 \ub300\ud574 \ub354 \uc54c\uc544\ubcf4\uc138\uc694."]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\ub0b4\uc6a9-\uc694\uc57d",children:"\ub0b4\uc6a9 \uc694\uc57d"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"useCallback"}),"\uc740 React \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \ud568\uc218\ub97c \uba54\ubaa8\uc774\uc81c\uc774\uc158\ud558\uc5ec \ubd88\ud544\uc694\ud55c \ub80c\ub354\ub9c1\uc744 \ubc29\uc9c0\ud558\ub294 \ub370 \uc720\uc6a9\ud569\ub2c8\ub2e4. \ud2b9\ud788, \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ud568\uc218\ub97c props\ub85c \uc804\ub2ec\ud560 \ub54c \uc720\uc6a9\ud558\uac8c \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uc758\uc874\uc131 \ubc30\uc5f4\uc744 \uc2e0\uc911\ud558\uac8c \uad00\ub9ac\ud574\uc57c \ud558\uba70, \ud544\uc694\ud55c \uacbd\uc6b0\uc5d0\ub9cc \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>t,x:()=>r});var c=l(6540);const s={},o=c.createContext(s);function t(e){const n=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),c.createElement(o.Provider,{value:n},e.children)}}}]);