"use strict";(self.webpackChunkdocubook=self.webpackChunkdocubook||[]).push([[6438],{9756:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=t(4848),r=t(8453);const s={},c="useContext",l={id:"Hook/7-2. useContext",title:"useContext",description:"useContext \uc18c\uac1c",source:"@site/docs/7. Hook/7-2. useContext.md",sourceDirName:"7. Hook",slug:"/Hook/7-2. useContext",permalink:"/docubook/en/Hook/7-2. useContext",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Custom Hooks\ub85c \uc0c1\ud0dc \ub85c\uc9c1 \ucd94\ucd9c",permalink:"/docubook/en/Hook/7-11. Custom Hooks\ub85c \uc0c1\ud0dc \ub85c\uc9c1 \ucd94\ucd9c"},next:{title:"useCallback",permalink:"/docubook/en/Hook/7-3. useCallback"}},i={},d=[{value:"useContext \uc18c\uac1c",id:"usecontext-\uc18c\uac1c",level:2},{value:"Context \uc0dd\uc131 \ubc0f \uc0ac\uc6a9 \ubc29\ubc95",id:"context-\uc0dd\uc131-\ubc0f-\uc0ac\uc6a9-\ubc29\ubc95",level:3},{value:"Props\uc640\uc758 \ucc28\uc774\uc810",id:"props\uc640\uc758-\ucc28\uc774\uc810",level:3},{value:"\uc8fc\uc758\ud560 \uc810",id:"\uc8fc\uc758\ud560-\uc810",level:3},{value:"\ucf54\ub4dc \uc608\uc81c",id:"\ucf54\ub4dc-\uc608\uc81c",level:3},{value:"\ub354 \uc54c\uc544\ubcf4\uae30",id:"\ub354-\uc54c\uc544\ubcf4\uae30",level:2},{value:"\ub0b4\uc6a9 \uc694\uc57d",id:"\ub0b4\uc6a9-\uc694\uc57d",level:2}];function x(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"usecontext",children:"useContext"}),"\n",(0,o.jsx)(n.h2,{id:"usecontext-\uc18c\uac1c",children:"useContext \uc18c\uac1c"}),"\n",(0,o.jsxs)(n.p,{children:["React\uc5d0\uc11c ",(0,o.jsx)(n.strong,{children:"useContext"}),"\ub294 \ucef4\ud3ec\ub10c\ud2b8 \ud2b8\ub9ac \uc804\ubc18\uc5d0 \uac78\uccd0 \ub370\uc774\ud130\ub97c \ud6a8\uc728\uc801\uc73c\ub85c \uacf5\uc720\ud560 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc8fc\ub294 \ud6c5\uc785\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c, \ub370\uc774\ud130\ub97c \uc5ec\ub7ec \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc804\ub2ec\ud558\ub824\uba74 \ubd80\ubaa8\uc5d0\uc11c \uc790\uc2dd\uc73c\ub85c props\ub97c \uacc4\uc18d \uc804\ub2ec\ud574\uc57c \ud558\ub294\ub370, \uc774\ub294 \ubcf5\uc7a1\ud558\uace0 \ubd88\ud3b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,o.jsx)(n.strong,{children:"useContext"}),"\ub97c \uc0ac\uc6a9\ud558\uba74 \uc774\ub7ec\ud55c \ubd88\ud3b8\ud568\uc744 \uc904\uc774\uace0 \ub370\uc774\ud130\ub97c \uac04\ub2e8\ud558\uac8c \uacf5\uc720\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,o.jsx)(n.h3,{id:"context-\uc0dd\uc131-\ubc0f-\uc0ac\uc6a9-\ubc29\ubc95",children:"Context \uc0dd\uc131 \ubc0f \uc0ac\uc6a9 \ubc29\ubc95"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Context \uc0dd\uc131"})}),"\n",(0,o.jsxs)(n.p,{children:["\uba3c\uc800, \ub370\uc774\ud130\ub97c \uacf5\uc720\ud560 Context\ub97c \uc0dd\uc131\ud574\uc57c \ud569\ub2c8\ub2e4. ",(0,o.jsx)(n.code,{children:"React.createContext"}),"\ub97c \uc0ac\uc6a9\ud558\uba74 \ub429\ub2c8\ub2e4."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"import React, { createContext } from 'react';\n\n// \ucd08\uae30\uac12\uc744 \uc124\uc815\ud558\uc5ec Context \uc0dd\uc131\nconst MyContext = createContext('default value');\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Provider\ub97c \ud1b5\ud574 \uac12 \uc804\ub2ec"})}),"\n",(0,o.jsxs)(n.p,{children:["Context\ub97c \uc0dd\uc131\ud55c \ud6c4, ",(0,o.jsx)(n.code,{children:"Provider"}),"\ub97c \uc0ac\uc6a9\ud574 \ub370\uc774\ud130\ub97c \uc804\ub2ec\ud569\ub2c8\ub2e4. ",(0,o.jsx)(n.code,{children:"Provider"}),"\ub294 Context\ub97c \uad6c\ub3c5\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uac8c \uac12\uc744 \uc804\ub2ec\ud558\ub294 \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './App';\n\nReactDOM.render(\n  <MyContext.Provider value=\"Hello, World!\">\n    <App />\n  </MyContext.Provider>,\n  document.getElementById('root')\n);\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"useContext\ub85c \uac12 \uc0ac\uc6a9"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"useContext"})," \ud6c5\uc744 \uc0ac\uc6a9\ud558\uc5ec Context\uc758 \uac12\uc744 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"import React, { useContext } from 'react';\nimport { MyContext } from './MyContext';\n\nfunction MyComponent() {\n  const value = useContext(MyContext);\n  return <div>{value}</div>;\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"props\uc640\uc758-\ucc28\uc774\uc810",children:"Props\uc640\uc758 \ucc28\uc774\uc810"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"useContext"}),"\ub97c \uc0ac\uc6a9\ud558\uba74 props\ub97c \ud1b5\ud574 \ub370\uc774\ud130\ub97c \uc804\ub2ec\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub418\ubbc0\ub85c, \ucef4\ud3ec\ub10c\ud2b8 \uad6c\uc870\uac00 \ub2e8\uc21c\ud574\uc9c0\uace0 \uc720\uc9c0 \ubcf4\uc218\uac00 \uc26c\uc6cc\uc9d1\ub2c8\ub2e4. \ubc18\uba74, props\ub294 \ubd80\ubaa8\uc5d0\uc11c \uc790\uc2dd\uc73c\ub85c \ub370\uc774\ud130\ub97c \uba85\uc2dc\uc801\uc73c\ub85c \uc804\ub2ec\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c, \ucef4\ud3ec\ub10c\ud2b8 \uac04\uc758 \ub370\uc774\ud130 \ud750\ub984\uc744 \uba85\ud655\ud558\uac8c \uc774\ud574\ud560 \uc218 \uc788\uac8c \ud574\uc90d\ub2c8\ub2e4. \uc0c1\ud669\uc5d0 \ub530\ub77c \uc801\uc808\ud55c \ubc29\uc2dd\uc744 \uc120\ud0dd\ud574\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,o.jsx)(n.h3,{id:"\uc8fc\uc758\ud560-\uc810",children:"\uc8fc\uc758\ud560 \uc810"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"\ucd5c\uc801\ud654 \ubb38\uc81c"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"useContext"}),"\ub294 Context \uac12\uc774 \ubcc0\uacbd\ub418\uba74 \ud574\ub2f9 Context\ub97c \uad6c\ub3c5\ud558\ub294 \ubaa8\ub4e0 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub9ac\ub80c\ub354\ub9c1\ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c \ube48\ubc88\ud55c \uac12 \ubcc0\uacbd\uc774 \ubc1c\uc0dd\ud558\ub294 \uacbd\uc6b0 \uc131\ub2a5 \ubb38\uc81c\uac00 \uc0dd\uae38 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uacbd\uc6b0 ",(0,o.jsx)(n.code,{children:"useReducer"}),"\ub098 ",(0,o.jsx)(n.code,{children:"useState"}),"\uc640 \uac19\uc740 \ud6c5\uc744 \ud568\uaed8 \uc0ac\uc6a9\ud558\ub294 \uac83\uc744 \uace0\ub824\ud574\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"\ub2e8\uc77c \ucc45\uc784 \uc6d0\uce59"})}),"\n",(0,o.jsx)(n.p,{children:"Context\ub97c \ub108\ubb34 \ub9ce\uc774 \uc0ac\uc6a9\ud558\uba74 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub9ce\uc740 \ucc45\uc784\uc744 \uac00\uc9c0\uac8c \ub418\uc5b4 \uc720\uc9c0 \ubcf4\uc218\uac00 \uc5b4\ub824\uc6cc\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c, Context\ub97c \uc0ac\uc6a9\ud558\ub354\ub77c\ub3c4 \uac01 Context\uac00 \ub2e8\uc77c \ucc45\uc784\uc744 \uac00\uc9c0\ub3c4\ub85d \uc124\uacc4\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"\ucf54\ub4dc-\uc608\uc81c",children:"\ucf54\ub4dc \uc608\uc81c"}),"\n",(0,o.jsxs)(n.p,{children:["\ub2e4\uc74c\uc740 ",(0,o.jsx)(n.code,{children:"useContext"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud14c\ub9c8\ub97c \uad00\ub9ac\ud558\ub294 \uac04\ub2e8\ud55c \uc608\uc81c\uc785\ub2c8\ub2e4."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"import React, { createContext, useContext, useState } from 'react';\n\n// \ud14c\ub9c8 Context \uc0dd\uc131\nconst ThemeContext = createContext();\n\nfunction App() {\n  const [theme, setTheme] = useState('light');\n\n  return (\n    <ThemeContext.Provider value={{ theme, setTheme }}>\n      <Toolbar />\n    </ThemeContext.Provider>\n  );\n}\n\nfunction Toolbar() {\n  return (\n    <div>\n      <ThemedButton />\n    </div>\n  );\n}\n\nfunction ThemedButton() {\n  const { theme, setTheme } = useContext(ThemeContext);\n  \n  return (\n    <button\n      style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}\n      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}\n    >\n      Toggle Theme\n    </button>\n  );\n}\n\nexport default App;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\uc704 \uc608\uc81c\uc5d0\uc11c, ",(0,o.jsx)(n.code,{children:"ThemeContext"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc571 \uc804\ubc18\uc5d0\uc11c \ud14c\ub9c8\ub97c \uc27d\uac8c \uad00\ub9ac\ud558\uace0 \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,o.jsx)(n.code,{children:"Provider"}),"\ub294 ",(0,o.jsx)(n.code,{children:"theme"}),"\uacfc ",(0,o.jsx)(n.code,{children:"setTheme"}),"\uc744 \uc804\ub2ec\ud558\uba70, ",(0,o.jsx)(n.code,{children:"useContext"})," \ud6c5\uc744 \uc0ac\uc6a9\ud574 ",(0,o.jsx)(n.code,{children:"ThemedButton"})," \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc774 \uac12\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,o.jsx)(n.h2,{id:"\ub354-\uc54c\uc544\ubcf4\uae30",children:"\ub354 \uc54c\uc544\ubcf4\uae30"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Context API"}),": Context\uc758 \ub3d9\uc791 \uc6d0\ub9ac\uc640 \ucd94\uac00 \uae30\ub2a5\uc5d0 \ub300\ud574 \ub354 \uc54c\uc544\ubcf4\uc138\uc694. ",(0,o.jsx)(n.a,{href:"https://react.dev",children:"React \uacf5\uc2dd \ubb38\uc11c"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"useReducer"}),": \ubcf5\uc7a1\ud55c \uc0c1\ud0dc \ub85c\uc9c1\uc744 \ub2e8\uc21c\ud654\ud558\uace0 \uc131\ub2a5\uc744 \ucd5c\uc801\ud654\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc744 \uc54c\uc544\ubcf4\uc138\uc694. ",(0,o.jsx)(n.a,{href:"https://react.dev",children:"React \uacf5\uc2dd \ubb38\uc11c"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\ub0b4\uc6a9-\uc694\uc57d",children:"\ub0b4\uc6a9 \uc694\uc57d"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"useContext"})," \ud6c5\uc740 React\uc5d0\uc11c \uc5ec\ub7ec \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ub370\uc774\ud130\ub97c \uc27d\uac8c \uacf5\uc720\ud560 \uc218 \uc788\uac8c \ud574\uc90d\ub2c8\ub2e4. Context\ub97c \uc0dd\uc131\ud558\uace0 ",(0,o.jsx)(n.code,{children:"Provider"}),"\ub85c \uac12\uc744 \uc804\ub2ec\ud55c \ud6c4, ",(0,o.jsx)(n.code,{children:"useContext"})," \ud6c5\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud574\ub2f9 \uac12\uc744 \uac00\uc838\uc635\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 props \uc804\ub2ec\uc758 \ubc88\uac70\ub85c\uc6c0\uc744 \uc904\uc774\uace0 \ucef4\ud3ec\ub10c\ud2b8 \uad6c\uc870\ub97c \ub2e8\uc21c\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc, \ub108\ubb34 \uc790\uc8fc \uc0ac\uc6a9\ud558\uba74 \uc131\ub2a5 \ubb38\uc81c\uc640 \ub2e8\uc77c \ucc45\uc784 \uc6d0\uce59 \uc704\ubc18\uc774 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc73c\ubbc0\ub85c \uc8fc\uc758\ud574\uc57c \ud569\ub2c8\ub2e4."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(x,{...e})}):x(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var o=t(6540);const r={},s=o.createContext(r);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);