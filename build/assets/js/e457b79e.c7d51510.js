"use strict";(self.webpackChunkdocubook=self.webpackChunkdocubook||[]).push([[8335],{2871:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>a,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var c=o(4848),s=o(8453);const t={},l="\ucef4\ud3ec\ub10c\ud2b8 \uc131\ub2a5 \ucd5c\uc801\ud654 \uae30\ubc95",r={id:"Optimization/8-1. \ucef4\ud3ec\ub10c\ud2b8 \uc131\ub2a5 \ucd5c\uc801\ud654 \uae30\ubc95",title:"\ucef4\ud3ec\ub10c\ud2b8 \uc131\ub2a5 \ucd5c\uc801\ud654 \uae30\ubc95",description:"React \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uac1c\ubc1c\ud558\uba74\uc11c \uc131\ub2a5 \ucd5c\uc801\ud654\ub294 \ub9e4\uc6b0 \uc911\uc694\ud55c \ubd80\ubd84\uc785\ub2c8\ub2e4. \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \uac1c\uc120\ud558\uace0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ubc18\uc751\uc131\uc744 \ub192\uc774\uae30 \uc704\ud574 \ucef4\ud3ec\ub10c\ud2b8 \uc131\ub2a5 \ucd5c\uc801\ud654 \uae30\ubc95\uc744 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.",source:"@site/docs/8. Optimization/8-1. \ucef4\ud3ec\ub10c\ud2b8 \uc131\ub2a5 \ucd5c\uc801\ud654 \uae30\ubc95.md",sourceDirName:"8. Optimization",slug:"/Optimization/8-1. \ucef4\ud3ec\ub10c\ud2b8 \uc131\ub2a5 \ucd5c\uc801\ud654 \uae30\ubc95",permalink:"/docubook/Optimization/8-1. \ucef4\ud3ec\ub10c\ud2b8 \uc131\ub2a5 \ucd5c\uc801\ud654 \uae30\ubc95",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Custom Hooks",permalink:"/docubook/Hook/7-9. Custom Hooks"},next:{title:"\ub80c\ub354\ub9c1 \ucd5c\uc801\ud654 \uae30\ubc95",permalink:"/docubook/Optimization/8-2. \ub80c\ub354\ub9c1 \ucd5c\uc801\ud654 \uae30\ubc95"}},i={},d=[{value:"\ubd88\ud544\uc694\ud55c \ub80c\ub354\ub9c1 \ubc29\uc9c0",id:"\ubd88\ud544\uc694\ud55c-\ub80c\ub354\ub9c1-\ubc29\uc9c0",level:2},{value:"<code>React.memo</code> \uc0ac\uc6a9\ud558\uae30",id:"reactmemo-\uc0ac\uc6a9\ud558\uae30",level:3},{value:"<code>useMemo</code>\uc640 <code>useCallback</code> \uc0ac\uc6a9\ud558\uae30",id:"usememo\uc640-usecallback-\uc0ac\uc6a9\ud558\uae30",level:2},{value:"<code>useMemo</code>\ub85c \uac12 \uba54\ubaa8\uc774\uc81c\uc774\uc158\ud558\uae30",id:"usememo\ub85c-\uac12-\uba54\ubaa8\uc774\uc81c\uc774\uc158\ud558\uae30",level:3},{value:"<code>useCallback</code>\uc73c\ub85c \ud568\uc218 \uba54\ubaa8\uc774\uc81c\uc774\uc158\ud558\uae30",id:"usecallback\uc73c\ub85c-\ud568\uc218-\uba54\ubaa8\uc774\uc81c\uc774\uc158\ud558\uae30",level:3},{value:"<code>React.lazy</code>\uc640 <code>Suspense</code>\ub97c \uc774\uc6a9\ud55c \ucf54\ub4dc \ubd84\ud560",id:"reactlazy\uc640-suspense\ub97c-\uc774\uc6a9\ud55c-\ucf54\ub4dc-\ubd84\ud560",level:2},{value:"\ub354 \uc54c\uc544\ubcf4\uae30",id:"\ub354-\uc54c\uc544\ubcf4\uae30",level:2},{value:"\ub0b4\uc6a9 \uc694\uc57d",id:"\ub0b4\uc6a9-\uc694\uc57d",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"\ucef4\ud3ec\ub10c\ud2b8-\uc131\ub2a5-\ucd5c\uc801\ud654-\uae30\ubc95",children:"\ucef4\ud3ec\ub10c\ud2b8 \uc131\ub2a5 \ucd5c\uc801\ud654 \uae30\ubc95"}),"\n",(0,c.jsx)(n.p,{children:"React \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uac1c\ubc1c\ud558\uba74\uc11c \uc131\ub2a5 \ucd5c\uc801\ud654\ub294 \ub9e4\uc6b0 \uc911\uc694\ud55c \ubd80\ubd84\uc785\ub2c8\ub2e4. \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \uac1c\uc120\ud558\uace0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ubc18\uc751\uc131\uc744 \ub192\uc774\uae30 \uc704\ud574 \ucef4\ud3ec\ub10c\ud2b8 \uc131\ub2a5 \ucd5c\uc801\ud654 \uae30\ubc95\uc744 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,c.jsx)(n.h2,{id:"\ubd88\ud544\uc694\ud55c-\ub80c\ub354\ub9c1-\ubc29\uc9c0",children:"\ubd88\ud544\uc694\ud55c \ub80c\ub354\ub9c1 \ubc29\uc9c0"}),"\n",(0,c.jsx)(n.p,{children:"React\uc5d0\uc11c\ub294 \uc0c1\ud0dc(State)\ub098 \uc18d\uc131(Props)\uc774 \ubcc0\uacbd\ub420 \ub54c\ub9c8\ub2e4 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub2e4\uc2dc \ub80c\ub354\ub9c1\ub429\ub2c8\ub2e4. \ud558\uc9c0\ub9cc, \ubaa8\ub4e0 \ub80c\ub354\ub9c1\uc774 \ud544\uc694\ud55c \uac83\uc740 \uc544\ub2c8\ubbc0\ub85c \ubd88\ud544\uc694\ud55c \ub80c\ub354\ub9c1\uc744 \ubc29\uc9c0\ud558\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4."}),"\n",(0,c.jsxs)(n.h3,{id:"reactmemo-\uc0ac\uc6a9\ud558\uae30",children:[(0,c.jsx)(n.code,{children:"React.memo"})," \uc0ac\uc6a9\ud558\uae30"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"React.memo"}),"\ub294 \ud568\uc218\ud615 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c props\uac00 \ubcc0\uacbd\ub418\uc9c0 \uc54a\uc73c\uba74 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub2e4\uc2dc \ub80c\ub354\ub9c1\ud558\uc9c0 \uc54a\ub3c4\ub85d \ud569\ub2c8\ub2e4."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",children:"import React from 'react';\n\nconst MyComponent = React.memo(({ name }) => {\n  console.log('\ub80c\ub354\ub9c1!');\n  return <div>{name}</div>;\n});\n\n// App \ucef4\ud3ec\ub10c\ud2b8\nconst App = () => {\n  const [count, setCount] = React.useState(0);\n\n  return (\n    <div>\n      <MyComponent name=\"React\" />\n      <button onClick={() => setCount(count + 1)}>\uc99d\uac00</button>\n    </div>\n  );\n};\n\nexport default App;\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\uc704 \uc608\uc2dc\uc5d0\uc11c ",(0,c.jsx)(n.code,{children:"MyComponent"}),"\ub294 ",(0,c.jsx)(n.code,{children:"name"})," props\uac00 \ubcc0\uacbd\ub418\uc9c0 \uc54a\ub294 \ud55c \ub2e4\uc2dc \ub80c\ub354\ub9c1\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."]}),"\n",(0,c.jsxs)(n.h2,{id:"usememo\uc640-usecallback-\uc0ac\uc6a9\ud558\uae30",children:[(0,c.jsx)(n.code,{children:"useMemo"}),"\uc640 ",(0,c.jsx)(n.code,{children:"useCallback"})," \uc0ac\uc6a9\ud558\uae30"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"useMemo"}),"\uc640 ",(0,c.jsx)(n.code,{children:"useCallback"})," \ud6c5\uc740 \uac12\uc774\ub098 \ud568\uc218\ub97c \uba54\ubaa8\uc774\uc81c\uc774\uc158\ud558\uc5ec \ubd88\ud544\uc694\ud55c \uc5f0\uc0b0\uacfc \ub80c\ub354\ub9c1\uc744 \uc904\uc5ec\uc90d\ub2c8\ub2e4."]}),"\n",(0,c.jsxs)(n.h3,{id:"usememo\ub85c-\uac12-\uba54\ubaa8\uc774\uc81c\uc774\uc158\ud558\uae30",children:[(0,c.jsx)(n.code,{children:"useMemo"}),"\ub85c \uac12 \uba54\ubaa8\uc774\uc81c\uc774\uc158\ud558\uae30"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",children:"import React, { useState, useMemo } from 'react';\n\nconst ExpensiveComponent = ({ number }) => {\n  const computeExpensiveValue = (num) => {\n    console.log('\ubcf5\uc7a1\ud55c \uacc4\uc0b0 \uc911...');\n    return num * 2;\n  };\n\n  const expensiveValue = useMemo(() => computeExpensiveValue(number), [number]);\n\n  return <div>{expensiveValue}</div>;\n};\n\nconst App = () => {\n  const [count, setCount] = useState(0);\n  const [number, setNumber] = useState(1);\n\n  return (\n    <div>\n      <ExpensiveComponent number={number} />\n      <button onClick={() => setCount(count + 1)}>\uce74\uc6b4\ud2b8 \uc99d\uac00</button>\n      <button onClick={() => setNumber(number + 1)}>\ub118\ubc84 \uc99d\uac00</button>\n    </div>\n  );\n};\n\nexport default App;\n"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"useMemo"}),"\ub294 ",(0,c.jsx)(n.code,{children:"number"}),"\uac00 \ubcc0\uacbd\ub420 \ub54c\ub9cc ",(0,c.jsx)(n.code,{children:"computeExpensiveValue"})," \ud568\uc218\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4."]}),"\n",(0,c.jsxs)(n.h3,{id:"usecallback\uc73c\ub85c-\ud568\uc218-\uba54\ubaa8\uc774\uc81c\uc774\uc158\ud558\uae30",children:[(0,c.jsx)(n.code,{children:"useCallback"}),"\uc73c\ub85c \ud568\uc218 \uba54\ubaa8\uc774\uc81c\uc774\uc158\ud558\uae30"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",children:"import React, { useState, useCallback } from 'react';\n\nconst MyButton = React.memo(({ onClick, children }) => {\n  console.log('\ubc84\ud2bc \ub80c\ub354\ub9c1');\n  return <button onClick={onClick}>{children}</button>;\n});\n\nconst App = () => {\n  const [count, setCount] = useState(0);\n\n  const handleClick = useCallback(() => {\n    console.log('\ud074\ub9ad');\n    setCount((prevCount) => prevCount + 1);\n  }, []);\n\n  return (\n    <div>\n      <MyButton onClick={handleClick}>\ud074\ub9ad</MyButton>\n      <p>{count}</p>\n    </div>\n  );\n};\n\nexport default App;\n"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"useCallback"}),"\uc740 ",(0,c.jsx)(n.code,{children:"handleClick"})," \ud568\uc218\uac00 \ucc38\uc870 \ub3d9\uc77c\uc131\uc744 \uc720\uc9c0\ud558\ub3c4\ub85d \ud558\uc5ec, ",(0,c.jsx)(n.code,{children:"MyButton"}),"\uc774 \ubd88\ud544\uc694\ud558\uac8c \ub80c\ub354\ub9c1\ub418\uc9c0 \uc54a\ub3c4\ub85d \ud569\ub2c8\ub2e4."]}),"\n",(0,c.jsxs)(n.h2,{id:"reactlazy\uc640-suspense\ub97c-\uc774\uc6a9\ud55c-\ucf54\ub4dc-\ubd84\ud560",children:[(0,c.jsx)(n.code,{children:"React.lazy"}),"\uc640 ",(0,c.jsx)(n.code,{children:"Suspense"}),"\ub97c \uc774\uc6a9\ud55c \ucf54\ub4dc \ubd84\ud560"]}),"\n",(0,c.jsxs)(n.p,{children:["\ud070 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc740 \ucd08\uae30 \ub85c\ub529 \uc18d\ub3c4\ub97c \ucd5c\uc801\ud654\ud558\uae30 \uc704\ud574 \ucf54\ub4dc \ubd84\ud560\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. ",(0,c.jsx)(n.code,{children:"React.lazy"}),"\uc640 ",(0,c.jsx)(n.code,{children:"Suspense"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub3d9\uc801\uc73c\ub85c \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub85c\ub4dc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",children:"import React, { Suspense } from 'react';\n\nconst OtherComponent = React.lazy(() => import('./OtherComponent'));\n\nconst App = () => {\n  return (\n    <div>\n      <Suspense fallback={<div>Loading...</div>}>\n        <OtherComponent />\n      </Suspense>\n    </div>\n  );\n};\n\nexport default App;\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\uc704 \uc608\uc2dc\uc5d0\uc11c ",(0,c.jsx)(n.code,{children:"OtherComponent"}),"\ub294 \ud544\uc694\ud560 \ub54c\ub9cc \ub85c\ub4dc\ub418\ubbc0\ub85c \ucd08\uae30 \ub85c\ub529 \uc2dc\uac04\uc744 \uc904\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,c.jsx)(n.h2,{id:"\ub354-\uc54c\uc544\ubcf4\uae30",children:"\ub354 \uc54c\uc544\ubcf4\uae30"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"React.memo"}),": \ucef4\ud3ec\ub10c\ud2b8\uc758 \ubd88\ud544\uc694\ud55c \ub80c\ub354\ub9c1\uc744 \ubc29\uc9c0\ud558\ub294 \ubc29\ubc95"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"useMemo"}),": \uac12\uc758 \uba54\ubaa8\uc774\uc81c\uc774\uc158\uc744 \ud1b5\ud55c \uc131\ub2a5 \ucd5c\uc801\ud654"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"useCallback"}),": \ud568\uc218\uc758 \uba54\ubaa8\uc774\uc81c\uc774\uc158\uc744 \ud1b5\ud55c \uc131\ub2a5 \ucd5c\uc801\ud654"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"React.lazy\uc640 Suspense"}),": \ucf54\ub4dc \ubd84\ud560\uc744 \ud1b5\ud574 \ucd08\uae30 \ub85c\ub529 \uc18d\ub3c4\ub97c \ucd5c\uc801\ud654\ud558\ub294 \ubc29\ubc95"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\ub0b4\uc6a9-\uc694\uc57d",children:"\ub0b4\uc6a9 \uc694\uc57d"}),"\n",(0,c.jsxs)(n.p,{children:["\ucef4\ud3ec\ub10c\ud2b8 \uc131\ub2a5 \ucd5c\uc801\ud654\ub294 \ubd88\ud544\uc694\ud55c \ub80c\ub354\ub9c1\uc744 \ubc29\uc9c0\ud558\uace0, \uac12\uacfc \ud568\uc218\ub97c \uba54\ubaa8\uc774\uc81c\uc774\uc158\ud558\uc5ec \uc131\ub2a5\uc744 \ub192\uc774\ub294 \uac83\uc744 \ubaa9\ud45c\ub85c \ud569\ub2c8\ub2e4. ",(0,c.jsx)(n.code,{children:"React.memo"}),", ",(0,c.jsx)(n.code,{children:"useMemo"}),", ",(0,c.jsx)(n.code,{children:"useCallback"}),"\uacfc \uac19\uc740 \ub3c4\uad6c\ub4e4\uc744 \uc0ac\uc6a9\ud558\uba74 \ud6a8\uacfc\uc801\uc73c\ub85c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc131\ub2a5\uc744 \uac1c\uc120\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c, ",(0,c.jsx)(n.code,{children:"React.lazy"}),"\uc640 ",(0,c.jsx)(n.code,{children:"Suspense"}),"\ub97c \uc774\uc6a9\ud55c \ucf54\ub4dc \ubd84\ud560\uc744 \ud1b5\ud574 \ucd08\uae30 \ub85c\ub529 \uc2dc\uac04\uc744 \uc904\uc774\ub294 \uac83\ub3c4 \uc911\uc694\ud55c \uae30\ubc95\uc785\ub2c8\ub2e4."]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>r});var c=o(6540);const s={},t=c.createContext(s);function l(e){const n=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),c.createElement(t.Provider,{value:n},e.children)}}}]);