"use strict";(self.webpackChunkdocubook=self.webpackChunkdocubook||[]).push([[7684],{7576:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=t(4848),c=t(8453);const o={},i="useLayoutEffect",r={id:"Hook/7-6. useLayoutEffect",title:"useLayoutEffect",description:"React\uc5d0\uc11c useLayoutEffect \ud6c5\uc740 \ucef4\ud3ec\ub10c\ud2b8\uc758 \ub808\uc774\uc544\uc6c3\uc774 \ubcc0\ud558\uae30 \uc804\uc5d0 \uc2e4\ud589\ub418\uc5b4\uc57c \ud558\ub294 \uc791\uc5c5\uc744 \ucc98\ub9ac\ud560 \ub54c \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c DOM\uc774 \uc5c5\ub370\uc774\ud2b8\ub41c \ud6c4\uc5d0 \uc2e4\ud589\ub418\ub294 useEffect\uc640 \ub2ec\ub9ac, useLayoutEffect\ub294 DOM \ubcc0\uacbd \ud6c4, \uadf8\ub9ac\uae30 \uc804\uc5d0 \uc2e4\ud589\ub429\ub2c8\ub2e4. \uc774\ub85c \uc778\ud574 DOM\uc758 \uc77c\uad00\uc131\uc744 \uc720\uc9c0\ud558\uace0, \ub808\uc774\uc544\uc6c3\uc774\ub098 UI\uc758 \uae5c\ube61\uc784\uc744 \ubc29\uc9c0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/docs/7. Hook/7-6. useLayoutEffect.md",sourceDirName:"7. Hook",slug:"/Hook/7-6. useLayoutEffect",permalink:"/docubook/en/Hook/7-6. useLayoutEffect",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useReducer",permalink:"/docubook/en/Hook/7-5. useReducer"},next:{title:"useLayoutEffect\uc640 useEffect\uc758 \ucc28\uc774\uc810",permalink:"/docubook/en/Hook/7-7. useLayoutEffect\uc640 useEffect\uc758 \ucc28\uc774\uc810"}},d={},l=[{value:"<code>useLayoutEffect</code>\ub97c \uc0ac\uc6a9\ud558\ub294 \uc774\uc720",id:"uselayouteffect\ub97c-\uc0ac\uc6a9\ud558\ub294-\uc774\uc720",level:2},{value:"\ucf54\ub4dc \uc124\uba85",id:"\ucf54\ub4dc-\uc124\uba85",level:3},{value:"\uc8fc\uc758\ud574\uc57c \ud560 \uc810",id:"\uc8fc\uc758\ud574\uc57c-\ud560-\uc810",level:2},{value:"\ub354 \uc54c\uc544\ubcf4\uae30",id:"\ub354-\uc54c\uc544\ubcf4\uae30",level:2},{value:"\ub0b4\uc6a9 \uc694\uc57d",id:"\ub0b4\uc6a9-\uc694\uc57d",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"uselayouteffect",children:"useLayoutEffect"}),"\n",(0,s.jsxs)(n.p,{children:["React\uc5d0\uc11c ",(0,s.jsx)(n.code,{children:"useLayoutEffect"})," \ud6c5\uc740 \ucef4\ud3ec\ub10c\ud2b8\uc758 \ub808\uc774\uc544\uc6c3\uc774 \ubcc0\ud558\uae30 \uc804\uc5d0 \uc2e4\ud589\ub418\uc5b4\uc57c \ud558\ub294 \uc791\uc5c5\uc744 \ucc98\ub9ac\ud560 \ub54c \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c DOM\uc774 \uc5c5\ub370\uc774\ud2b8\ub41c \ud6c4\uc5d0 \uc2e4\ud589\ub418\ub294 ",(0,s.jsx)(n.code,{children:"useEffect"}),"\uc640 \ub2ec\ub9ac, ",(0,s.jsx)(n.code,{children:"useLayoutEffect"}),"\ub294 DOM \ubcc0\uacbd \ud6c4, \uadf8\ub9ac\uae30 \uc804\uc5d0 \uc2e4\ud589\ub429\ub2c8\ub2e4. \uc774\ub85c \uc778\ud574 DOM\uc758 \uc77c\uad00\uc131\uc744 \uc720\uc9c0\ud558\uace0, \ub808\uc774\uc544\uc6c3\uc774\ub098 UI\uc758 \uae5c\ube61\uc784\uc744 \ubc29\uc9c0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.h2,{id:"uselayouteffect\ub97c-\uc0ac\uc6a9\ud558\ub294-\uc774\uc720",children:[(0,s.jsx)(n.code,{children:"useLayoutEffect"}),"\ub97c \uc0ac\uc6a9\ud558\ub294 \uc774\uc720"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"useLayoutEffect"}),"\ub294 \ud654\uba74\uc5d0 \ub80c\ub354\ub9c1 \ub418\uae30 \uc804\uc5d0 \uc2e4\ud589\ub418\ubbc0\ub85c, DOM \uc870\uc791\uc774 \ud544\uc694\ud55c \uacbd\uc6b0\uc5d0 \uc720\uc6a9\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, DOM \uc694\uc18c\uc758 \ud06c\uae30\ub098 \uc704\uce58\ub97c \uce21\uc815\ud558\uace0, \uc774\ub97c \uae30\ubc18\uc73c\ub85c \uc2a4\ud0c0\uc77c\uc744 \uc870\uc815\ud574\uc57c \ud560 \ub54c \uc0ac\uc6a9\ub429\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.p,{children:"\ub2e4\uc74c\uc740 \uac04\ub2e8\ud55c \uc608\uc81c\uc785\ub2c8\ub2e4. \uc774 \uc608\uc81c\uc5d0\uc11c\ub294 DOM \uc694\uc18c\uc758 \ud06c\uae30\ub97c \uce21\uc815\ud558\uace0 \uc774\ub97c \uc0c1\ud0dc\uc5d0 \uc800\uc7a5\ud558\uc5ec \ub80c\ub354\ub9c1\uc5d0 \ubc18\uc601\ud558\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import React, { useState, useLayoutEffect, useRef } from 'react';\n\nfunction MeasureExample() {\n  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });\n  const boxRef = useRef(null);\n\n  useLayoutEffect(() => {\n    if (boxRef.current) {\n      const { width, height } = boxRef.current.getBoundingClientRect();\n      setBoxSize({ width, height });\n    }\n  }, []);\n\n  return (\n    <div>\n      <div ref={boxRef} style={{ width: '100px', height: '100px', backgroundColor: 'lightblue' }}>\n        Measure this box\n      </div>\n      <p>Box width: {boxSize.width}px</p>\n      <p>Box height: {boxSize.height}px</p>\n    </div>\n  );\n}\n\nexport default MeasureExample;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\ucf54\ub4dc-\uc124\uba85",children:"\ucf54\ub4dc \uc124\uba85"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\uc0c1\ud0dc \uc120\uc5b8"}),": ",(0,s.jsx)(n.code,{children:"useState"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec ",(0,s.jsx)(n.code,{children:"boxSize"}),"\ub77c\ub294 \uc0c1\ud0dc\ub97c \uc120\uc5b8\ud569\ub2c8\ub2e4. \uc774 \uc0c1\ud0dc\ub294 \ubc15\uc2a4\uc758 \ud06c\uae30\ub97c \uc800\uc7a5\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\ucc38\uc870 \uc0dd\uc131"}),": ",(0,s.jsx)(n.code,{children:"useRef"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec ",(0,s.jsx)(n.code,{children:"boxRef"}),"\ub77c\ub294 \ucc38\uc870\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4. \uc774 \ucc38\uc870\ub294 \ud2b9\uc815 DOM \uc694\uc18c\ub97c \uc9c1\uc811 \uac00\ub9ac\ud0b5\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"useLayoutEffect"})," \uc0ac\uc6a9"]}),": \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub80c\ub354\ub9c1\ub41c \ud6c4, \ud558\uc9c0\ub9cc \ud654\uba74\uc5d0 \uadf8\ub824\uc9c0\uae30 \uc804\uc5d0 ",(0,s.jsx)(n.code,{children:"useLayoutEffect"}),"\uac00 \uc2e4\ud589\ub429\ub2c8\ub2e4. \uc774 \ud6c5\uc740 ",(0,s.jsx)(n.code,{children:"boxRef"}),"\uac00 \uac00\ub9ac\ud0a4\ub294 DOM \uc694\uc18c\uc758 \ud06c\uae30\ub97c \uce21\uc815\ud558\uace0, \uadf8 \uac12\uc744 ",(0,s.jsx)(n.code,{children:"boxSize"})," \uc0c1\ud0dc\uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\ub80c\ub354\ub9c1"}),": ",(0,s.jsx)(n.code,{children:"boxSize"})," \uc0c1\ud0dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubc15\uc2a4\uc758 \ud06c\uae30\ub97c \ud654\uba74\uc5d0 \ucd9c\ub825\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\uc8fc\uc758\ud574\uc57c-\ud560-\uc810",children:"\uc8fc\uc758\ud574\uc57c \ud560 \uc810"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\uc131\ub2a5"}),": ",(0,s.jsx)(n.code,{children:"useLayoutEffect"}),"\ub294 \ub3d9\uae30\uc801\uc73c\ub85c \uc2e4\ud589\ub418\ubbc0\ub85c, \ucef4\ud3ec\ub10c\ud2b8\uc758 \ub80c\ub354\ub9c1 \uc131\ub2a5\uc5d0 \uc601\ud5a5\uc744 \uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c, DOM \uc870\uc791\uc774 \ud544\uc694\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0\uc5d0\ub294 ",(0,s.jsx)(n.code,{children:"useEffect"}),"\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \ub354 \uc88b\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\ube44\ub3d9\uae30 \ub3d9\uc791"}),": ",(0,s.jsx)(n.code,{children:"useLayoutEffect"})," \ub0b4\ubd80\uc5d0\uc11c\ub294 \ube44\ub3d9\uae30 \uc791\uc5c5\uc744 \ucc98\ub9ac\ud558\uc9c0 \uc54a\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. \ube44\ub3d9\uae30 \uc791\uc5c5\uc740 ",(0,s.jsx)(n.code,{children:"useEffect"}),"\uc5d0\uc11c \ucc98\ub9ac\ud558\ub294 \uac83\uc774 \ub354 \uc801\uc808\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\ub354-\uc54c\uc544\ubcf4\uae30",children:"\ub354 \uc54c\uc544\ubcf4\uae30"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"React \ud6c5"}),": ",(0,s.jsx)(n.a,{href:"https://react.dev",children:"React \uacf5\uc2dd \ubb38\uc11c"}),"\uc5d0\uc11c \ub2e4\uc591\ud55c \ud6c5\uc5d0 \ub300\ud574 \ub354 \uc54c\uc544\ubcf4\uc138\uc694."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"useEffect\uc640 useLayoutEffect \ucc28\uc774\uc810"}),": ",(0,s.jsx)(n.a,{href:"https://react.dev",children:"React \uacf5\uc2dd \ubb38\uc11c"}),"\uc5d0\uc11c \ub450 \ud6c5\uc758 \ucc28\uc774\uc810\uc744 \ud655\uc778\ud558\uc138\uc694."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"DOM \uc870\uc791"}),": ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",children:"MDN \ubb38\uc11c"}),"\uc5d0\uc11c DOM \uc870\uc791\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc815\ubcf4\ub97c \uc5bb\uc73c\uc138\uc694."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\ub0b4\uc6a9-\uc694\uc57d",children:"\ub0b4\uc6a9 \uc694\uc57d"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"useLayoutEffect"}),"\ub294 React\uc5d0\uc11c DOM\uc774 \uc5c5\ub370\uc774\ud2b8\ub41c \ud6c4, \ud654\uba74\uc5d0 \uadf8\ub824\uc9c0\uae30 \uc804\uc5d0 \uc2e4\ud589\ub418\ub294 \ud6c5\uc785\ub2c8\ub2e4. \uc774\ub97c \uc0ac\uc6a9\ud558\uc5ec DOM \uc870\uc791 \ubc0f \ub808\uc774\uc544\uc6c3 \uce21\uc815\uc744 \ucc98\ub9ac\ud560 \uc218 \uc788\uc73c\uba70, \uc8fc\ub85c \ud654\uba74 \uae5c\ube61\uc784\uc744 \ubc29\uc9c0\ud558\uace0 \ub808\uc774\uc544\uc6c3\uc758 \uc77c\uad00\uc131\uc744 \uc720\uc9c0\ud558\ub294 \ub370 \uc720\uc6a9\ud569\ub2c8\ub2e4. \uc131\ub2a5\uc5d0 \uc8fc\uc758\ud558\uba74\uc11c \uc801\uc808\ud55c \uc0c1\ud669\uc5d0\uc11c \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4."]})]})}function f(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var s=t(6540);const c={},o=s.createContext(c);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);