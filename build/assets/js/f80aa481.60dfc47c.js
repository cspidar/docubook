"use strict";(self.webpackChunkdocubook=self.webpackChunkdocubook||[]).push([[8270],{3473:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>a,frontMatter:()=>c,metadata:()=>u,toc:()=>l});var s=t(4848),r=t(8453);const c={},o="useState, useRef, useEffect \ub2e4\uc2dc\ubcf4\uae30",u={id:"Hook/7-1. useState, useRef, useEffect \ub2e4\uc2dc\ubcf4\uae30",title:"useState, useRef, useEffect \ub2e4\uc2dc\ubcf4\uae30",description:"React\uc5d0\uc11c useState, useRef, useEffect\ub294 \uac00\uc7a5 \uae30\ubcf8\uc801\uc774\uba74\uc11c\ub3c4 \uac15\ub825\ud55c \ud6c5\uc785\ub2c8\ub2e4. \uc774 \ud6c5\ub4e4\uc744 \uc798 \ud65c\uc6a9\ud558\uba74 \uc0c1\ud0dc \uad00\ub9ac\uc640 \uc0dd\uba85 \uc8fc\uae30 \uc81c\uc5b4\ub97c \ud6a8\uc728\uc801\uc73c\ub85c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uae00\uc5d0\uc11c\ub294 \uac01\uac01\uc758 \ud6c5\uc744 \uac04\ub2e8\ud55c \uc608\uc81c\uc640 \ud568\uaed8 \uc124\uba85\ud558\uace0, \uc8fc\uc758\ud574\uc57c \ud560 \uc810\ub4e4\uc744 \uc9da\uc5b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.",source:"@site/docs/7. Hook/7-1. useState, useRef, useEffect \ub2e4\uc2dc\ubcf4\uae30.md",sourceDirName:"7. Hook",slug:"/Hook/7-1. useState, useRef, useEffect \ub2e4\uc2dc\ubcf4\uae30",permalink:"/docubook/Hook/7-1. useState, useRef, useEffect \ub2e4\uc2dc\ubcf4\uae30",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"7-0. aaa copy 5",permalink:"/docubook/Hook/7-0. aaa copy 5"},next:{title:"Custom Hooks \ubc18\ud658\uc758 \uc885\ub958",permalink:"/docubook/Hook/7-10. Custom Hooks \ubc18\ud658\uc758 \uc885\ub958"}},i={},l=[{value:"useState: \uc0c1\ud0dc \uad00\ub9ac",id:"usestate-\uc0c1\ud0dc-\uad00\ub9ac",level:2},{value:"\uc0ac\uc6a9 \uc608\uc81c",id:"\uc0ac\uc6a9-\uc608\uc81c",level:3},{value:"\ud575\uc2ec \uac1c\ub150",id:"\ud575\uc2ec-\uac1c\ub150",level:3},{value:"useRef: DOM \uc811\uadfc \ubc0f \ubcc0\uc218 \uc800\uc7a5",id:"useref-dom-\uc811\uadfc-\ubc0f-\ubcc0\uc218-\uc800\uc7a5",level:2},{value:"\uc0ac\uc6a9 \uc608\uc81c",id:"\uc0ac\uc6a9-\uc608\uc81c-1",level:3},{value:"\ud575\uc2ec \uac1c\ub150",id:"\ud575\uc2ec-\uac1c\ub150-1",level:3},{value:"useEffect: \uc0dd\uba85 \uc8fc\uae30 \uc81c\uc5b4",id:"useeffect-\uc0dd\uba85-\uc8fc\uae30-\uc81c\uc5b4",level:2},{value:"\uc0ac\uc6a9 \uc608\uc81c",id:"\uc0ac\uc6a9-\uc608\uc81c-2",level:3},{value:"\ud575\uc2ec \uac1c\ub150",id:"\ud575\uc2ec-\uac1c\ub150-2",level:3},{value:"\ub354 \uc54c\uc544\ubcf4\uae30",id:"\ub354-\uc54c\uc544\ubcf4\uae30",level:2},{value:"\ub0b4\uc6a9 \uc694\uc57d",id:"\ub0b4\uc6a9-\uc694\uc57d",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"usestate-useref-useeffect-\ub2e4\uc2dc\ubcf4\uae30",children:"useState, useRef, useEffect \ub2e4\uc2dc\ubcf4\uae30"}),"\n",(0,s.jsxs)(n.p,{children:["React\uc5d0\uc11c ",(0,s.jsx)(n.strong,{children:"useState"}),", ",(0,s.jsx)(n.strong,{children:"useRef"}),", ",(0,s.jsx)(n.strong,{children:"useEffect"}),"\ub294 \uac00\uc7a5 \uae30\ubcf8\uc801\uc774\uba74\uc11c\ub3c4 \uac15\ub825\ud55c \ud6c5\uc785\ub2c8\ub2e4. \uc774 \ud6c5\ub4e4\uc744 \uc798 \ud65c\uc6a9\ud558\uba74 \uc0c1\ud0dc \uad00\ub9ac\uc640 \uc0dd\uba85 \uc8fc\uae30 \uc81c\uc5b4\ub97c \ud6a8\uc728\uc801\uc73c\ub85c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uae00\uc5d0\uc11c\ub294 \uac01\uac01\uc758 \ud6c5\uc744 \uac04\ub2e8\ud55c \uc608\uc81c\uc640 \ud568\uaed8 \uc124\uba85\ud558\uace0, \uc8fc\uc758\ud574\uc57c \ud560 \uc810\ub4e4\uc744 \uc9da\uc5b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.h2,{id:"usestate-\uc0c1\ud0dc-\uad00\ub9ac",children:"useState: \uc0c1\ud0dc \uad00\ub9ac"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"useState"}),"\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud558\ub294 \ud6c5\uc785\ub2c8\ub2e4. \uc0c1\ud0dc\ub294 \ucef4\ud3ec\ub10c\ud2b8 \ub0b4\uc5d0\uc11c \uac12\uc774 \ubcc0\ud560 \uc218 \uc788\ub294 \ub370\uc774\ud130\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.h3,{id:"\uc0ac\uc6a9-\uc608\uc81c",children:"\uc0ac\uc6a9 \uc608\uc81c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"import React, { useState } from 'react';\n\nfunction Counter() {\n  // count\ub77c\ub294 \uc0c1\ud0dc \ubcc0\uc218\uc640 setCount\ub77c\ub294 \uc0c1\ud0dc \ubcc0\uacbd \ud568\uc218\ub97c \uc120\uc5b8\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>\ud604\uc7ac \uce74\uc6b4\ud2b8: {count}</p>\n      <button onClick={() => setCount(count + 1)}>\uc99d\uac00</button>\n      <button onClick={() => setCount(count - 1)}>\uac10\uc18c</button>\n    </div>\n  );\n}\n\nexport default Counter;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\ud575\uc2ec-\uac1c\ub150",children:"\ud575\uc2ec \uac1c\ub150"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\ucd08\uae30\uac12 \uc124\uc815:"})," ",(0,s.jsx)(n.code,{children:"useState(0)"}),"\uc740 \ucd08\uae30\uac12\uc744 0\uc73c\ub85c \uc124\uc815\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\uc0c1\ud0dc \ubcc0\uacbd \ud568\uc218:"})," ",(0,s.jsx)(n.code,{children:"setCount"}),"\ub97c \ud1b5\ud574 ",(0,s.jsx)(n.code,{children:"count"})," \uac12\uc744 \uc5c5\ub370\uc774\ud2b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\uc8fc\uc758\ud560 \uc810:"})," \uc0c1\ud0dc \ubcc0\uacbd \ud568\uc218\ub294 \ube44\ub3d9\uae30\uc801\uc73c\ub85c \ub3d9\uc791\ud558\ubbc0\ub85c \uc0c1\ud0dc\ub97c \uc5c5\ub370\uc774\ud2b8\ud560 \ub54c \uc774\uc804 \uc0c1\ud0dc\ub97c \ucc38\uc870\ud574\uc57c \ud560 \uacbd\uc6b0\uc5d0\ub294 \ud568\uc218\ud615 \uc5c5\ub370\uc774\ud2b8\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"<button onClick={() => setCount(prevCount => prevCount + 1)}>\uc99d\uac00</button>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"useref-dom-\uc811\uadfc-\ubc0f-\ubcc0\uc218-\uc800\uc7a5",children:"useRef: DOM \uc811\uadfc \ubc0f \ubcc0\uc218 \uc800\uc7a5"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"useRef"}),"\ub294 DOM \uc694\uc18c\uc5d0 \uc811\uadfc\ud558\uac70\ub098, \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc0dd\uc560 \ub3d9\uc548 \uc720\uc9c0\ub418\uc5b4\uc57c \ud558\ub294 \uac12\uc744 \uc800\uc7a5\ud560 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.h3,{id:"\uc0ac\uc6a9-\uc608\uc81c-1",children:"\uc0ac\uc6a9 \uc608\uc81c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"import React, { useRef } from 'react';\n\nfunction TextInput() {\n  const inputRef = useRef(null);\n\n  const focusInput = () => {\n    if (inputRef.current) {\n      inputRef.current.focus();\n    }\n  };\n\n  return (\n    <div>\n      <input ref={inputRef} type=\"text\" />\n      <button onClick={focusInput}>\uc785\ub825\ucc3d \ud3ec\ucee4\uc2a4</button>\n    </div>\n  );\n}\n\nexport default TextInput;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\ud575\uc2ec-\uac1c\ub150-1",children:"\ud575\uc2ec \uac1c\ub150"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"DOM \uc811\uadfc:"})," ",(0,s.jsx)(n.code,{children:"inputRef.current"}),"\ub97c \ud1b5\ud574 DOM \uc694\uc18c\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\ubcc0\uc218 \uc800\uc7a5:"})," \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub9ac\ub80c\ub354\ub9c1\ub418\uc5b4\ub3c4 ",(0,s.jsx)(n.code,{children:"useRef"}),"\ub97c \ud1b5\ud574 \uc800\uc7a5\ud55c \uac12\uc740 \uadf8\ub300\ub85c \uc720\uc9c0\ub429\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\uc8fc\uc758\ud560 \uc810:"})," ",(0,s.jsx)(n.code,{children:"useRef"}),"\ub85c \uc800\uc7a5\ud55c \uac12\uc774 \ubcc0\uacbd\ub418\uc5b4\ub3c4 \ucef4\ud3ec\ub10c\ud2b8\ub294 \ub9ac\ub80c\ub354\ub9c1\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"useeffect-\uc0dd\uba85-\uc8fc\uae30-\uc81c\uc5b4",children:"useEffect: \uc0dd\uba85 \uc8fc\uae30 \uc81c\uc5b4"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"useEffect"}),"\ub294 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub80c\ub354\ub9c1\ub420 \ub54c, \ud2b9\uc815 \uc791\uc5c5\uc744 \uc218\ud589\ud560 \uc218 \uc788\ub3c4\ub85d \ud574\uc90d\ub2c8\ub2e4. \ub9c8\uc6b4\ud2b8, \uc5b8\ub9c8\uc6b4\ud2b8, \uc5c5\ub370\uc774\ud2b8 \uc2dc \ubaa8\ub450 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.h3,{id:"\uc0ac\uc6a9-\uc608\uc81c-2",children:"\uc0ac\uc6a9 \uc608\uc81c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"import React, { useState, useEffect } from 'react';\n\nfunction Timer() {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    const interval = setInterval(() => {\n      setCount(prevCount => prevCount + 1);\n    }, 1000);\n\n    return () => clearInterval(interval);\n  }, []);\n\n  return <div>\ud0c0\uc774\uba38: {count}\ucd08</div>;\n}\n\nexport default Timer;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\ud575\uc2ec-\uac1c\ub150-2",children:"\ud575\uc2ec \uac1c\ub150"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\uc758\uc874\uc131 \ubc30\uc5f4:"})," \ub450 \ubc88\uc9f8 \uc778\uc790\uc778 \ube48 \ubc30\uc5f4 ",(0,s.jsx)(n.code,{children:"[]"}),"\uc740 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ucc98\uc74c \ub9c8\uc6b4\ud2b8\ub420 \ub54c\ub9cc \uc774\ud399\ud2b8\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\ud074\ub9b0\uc5c5 \ud568\uc218:"})," \uc774\ud399\ud2b8 \ub0b4\uc5d0\uc11c \ubc18\ud658\ud558\ub294 \ud568\uc218\ub294 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc5b8\ub9c8\uc6b4\ud2b8\ub418\uac70\ub098 \ub2e4\uc74c \uc774\ud399\ud2b8\uac00 \uc2e4\ud589\ub418\uae30 \uc804\uc5d0 \uc2e4\ud589\ub429\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\uc8fc\uc758\ud560 \uc810:"})," \uc758\uc874\uc131 \ubc30\uc5f4\uc744 \uc798\ubabb \uc124\uc815\ud558\uba74 \ubd88\ud544\uc694\ud55c \ub9ac\ub80c\ub354\ub9c1\uc774\ub098 \ud074\ub9b0\uc5c5 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\ub354-\uc54c\uc544\ubcf4\uae30",children:"\ub354 \uc54c\uc544\ubcf4\uae30"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\uc0c1\ud0dc \uad00\ub9ac\uc758 \uc911\uc694\uc131:"})," \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud558\ub294 \ub2e4\uc591\ud55c \ubc29\ubc95\ub4e4\uacfc \uadf8 \uc911\uc694\uc131\uc5d0 \ub300\ud574 \ub354 \uc54c\uc544\ubcf4\uc138\uc694."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Ref\uc640 DOM:"})," Ref\ub97c \uc0ac\uc6a9\ud558\uc5ec DOM \uc694\uc18c\uc5d0 \uc811\uadfc\ud558\ub294 \ub2e4\uc591\ud55c \uc0ac\ub840\ub97c \ud655\uc778\ud574\ubcf4\uc138\uc694."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"React \uc0dd\uba85 \uc8fc\uae30:"})," \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc0dd\uba85 \uc8fc\uae30\ub97c \uc774\ud574\ud558\uace0 \uc774\ub97c \ud65c\uc6a9\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \ud559\uc2b5\ud574\ubcf4\uc138\uc694."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\ub0b4\uc6a9-\uc694\uc57d",children:"\ub0b4\uc6a9 \uc694\uc57d"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"useState"}),", ",(0,s.jsx)(n.strong,{children:"useRef"}),", ",(0,s.jsx)(n.strong,{children:"useEffect"}),"\ub294 React\uc5d0\uc11c \uc0c1\ud0dc \uad00\ub9ac\uc640 \uc0dd\uba85 \uc8fc\uae30 \uc81c\uc5b4\uc5d0 \uc911\uc694\ud55c \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4. \uac01\uac01\uc758 \ud6c5\uc740 \uc0c1\ud0dc \ubcc0\uc218 \uc120\uc5b8, DOM \uc811\uadfc, \ucef4\ud3ec\ub10c\ud2b8 \uc0dd\uba85 \uc8fc\uae30 \uc81c\uc5b4 \ub4f1 \ub2e4\uc591\ud55c \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc774\ub97c \uc801\uc808\ud788 \uc0ac\uc6a9\ud558\uba74 \ud6a8\uc728\uc801\uc778 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>u});var s=t(6540);const r={},c=s.createContext(r);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);