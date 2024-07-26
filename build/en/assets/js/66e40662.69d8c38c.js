"use strict";(self.webpackChunkdocubook=self.webpackChunkdocubook||[]).push([[2714],{1574:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>a,frontMatter:()=>c,metadata:()=>u,toc:()=>o});var s=r(4848),t=r(8453);const c={},d="useReducer",u={id:"Hook/7-5. useReducer",title:"useReducer",description:"useReducer \uc18c\uac1c",source:"@site/docs/7. Hook/7-5. useReducer.md",sourceDirName:"7. Hook",slug:"/Hook/7-5. useReducer",permalink:"/docubook/en/Hook/7-5. useReducer",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useMemo",permalink:"/docubook/en/Hook/7-4. useMemo"},next:{title:"useLayoutEffect",permalink:"/docubook/en/Hook/7-6. useLayoutEffect"}},i={},o=[{value:"useReducer \uc18c\uac1c",id:"usereducer-\uc18c\uac1c",level:2},{value:"useReducer \uae30\ubcf8 \uc0ac\uc6a9\ubc95",id:"usereducer-\uae30\ubcf8-\uc0ac\uc6a9\ubc95",level:2},{value:"\ub9ac\ub4c0\uc11c \ud568\uc218 \uc608\uc2dc",id:"\ub9ac\ub4c0\uc11c-\ud568\uc218-\uc608\uc2dc",level:3},{value:"useReducer \ud6c5 \uc0ac\uc6a9 \uc608\uc2dc",id:"usereducer-\ud6c5-\uc0ac\uc6a9-\uc608\uc2dc",level:3},{value:"useReducer\uc758 \uc7a5\uc810",id:"usereducer\uc758-\uc7a5\uc810",level:2},{value:"\uc8fc\uc758\ud574\uc57c \ud560 \uc810",id:"\uc8fc\uc758\ud574\uc57c-\ud560-\uc810",level:2},{value:"\ub354 \uc54c\uc544\ubcf4\uae30",id:"\ub354-\uc54c\uc544\ubcf4\uae30",level:2},{value:"\ub0b4\uc6a9 \uc694\uc57d",id:"\ub0b4\uc6a9-\uc694\uc57d",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"usereducer",children:"useReducer"}),"\n",(0,s.jsx)(n.h2,{id:"usereducer-\uc18c\uac1c",children:"useReducer \uc18c\uac1c"}),"\n",(0,s.jsxs)(n.p,{children:["\ub9ac\uc561\ud2b8(React)\uc5d0\uc11c \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud558\ub294 \uac00\uc7a5 \uc77c\ubc18\uc801\uc778 \ubc29\ubc95\uc740 ",(0,s.jsx)(n.code,{children:"useState"})," \ud6c5\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc0c1\ud0dc \uad00\ub9ac\uac00 \ubcf5\uc7a1\ud574\uc9c0\uba74 ",(0,s.jsx)(n.code,{children:"useState"}),"\ub85c\ub294 \ud55c\uacc4\uac00 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub54c ",(0,s.jsx)(n.code,{children:"useReducer"})," \ud6c5\uc744 \uc0ac\uc6a9\ud558\uba74 \ud6a8\uc728\uc801\uc73c\ub85c \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,s.jsx)(n.code,{children:"useReducer"}),"\ub294 Redux\uc640 \uac19\uc740 \uc0c1\ud0dc \uad00\ub9ac \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \ub9ac\ub4c0\uc11c \ud328\ud134\uc744 \uc801\uc6a9\ud558\uc5ec \uc0c1\ud0dc\ub97c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.h2,{id:"usereducer-\uae30\ubcf8-\uc0ac\uc6a9\ubc95",children:"useReducer \uae30\ubcf8 \uc0ac\uc6a9\ubc95"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"useReducer"}),"\ub294 \uc138 \uac00\uc9c0 \uc778\uc790\ub97c \ubc1b\uc2b5\ub2c8\ub2e4:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\ub9ac\ub4c0\uc11c \ud568\uc218"}),": \ud604\uc7ac \uc0c1\ud0dc\uc640 \uc561\uc158\uc744 \ubc1b\uc544\uc11c \uc0c8\ub85c\uc6b4 \uc0c1\ud0dc\ub97c \ubc18\ud658\ud558\ub294 \ud568\uc218"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\ucd08\uae30 \uc0c1\ud0dc"}),": \uc0c1\ud0dc\uc758 \ucd08\uae30\uac12"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\ucd08\uae30\ud654 \ud568\uc218 (\uc120\ud0dd\uc801)"}),": \ucd08\uae30 \uc0c1\ud0dc\ub97c \ub9cc\ub4dc\ub294 \ud568\uc218"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\ub9ac\ub4c0\uc11c-\ud568\uc218-\uc608\uc2dc",children:"\ub9ac\ub4c0\uc11c \ud568\uc218 \uc608\uc2dc"}),"\n",(0,s.jsx)(n.p,{children:"\ub9ac\ub4c0\uc11c \ud568\uc218\ub294 \ub450 \uac00\uc9c0 \uc778\uc790\ub97c \ubc1b\uc2b5\ub2c8\ub2e4:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"state"}),": \ud604\uc7ac \uc0c1\ud0dc"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"action"}),": \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud558\ub294 \ub370 \ud544\uc694\ud55c \uc815\ubcf4\ub97c \ub2f4\uace0 \uc788\ub294 \uac1d\uccb4"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const initialState = { count: 0 };\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'increment':\n      return { count: state.count + 1 };\n    case 'decrement':\n      return { count: state.count - 1 };\n    case 'reset':\n      return { count: 0 };\n    default:\n      throw new Error('Unknown action type');\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"usereducer-\ud6c5-\uc0ac\uc6a9-\uc608\uc2dc",children:"useReducer \ud6c5 \uc0ac\uc6a9 \uc608\uc2dc"}),"\n",(0,s.jsxs)(n.p,{children:["\uc544\ub798\ub294 ",(0,s.jsx)(n.code,{children:"useReducer"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \uce74\uc6b4\ud130\ub97c \uad6c\ud604\ud558\ub294 \uc608\uc81c\uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"import React, { useReducer } from 'react';\n\nconst initialState = { count: 0 };\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'increment':\n      return { count: state.count + 1 };\n    case 'decrement':\n      return { count: state.count - 1 };\n    case 'reset':\n      return { count: 0 };\n    default:\n      throw new Error('Unknown action type');\n  }\n}\n\nfunction Counter() {\n  const [state, dispatch] = useReducer(reducer, initialState);\n\n  return (\n    <div>\n      <p>Count: {state.count}</p>\n      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>\n      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>\n      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>\n    </div>\n  );\n}\n\nexport default Counter;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usereducer\uc758-\uc7a5\uc810",children:"useReducer\uc758 \uc7a5\uc810"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\ubcf5\uc7a1\ud55c \uc0c1\ud0dc \uad00\ub9ac"}),": \uc5ec\ub7ec \uc0c1\ud0dc\uac12\uc744 \uac16\ub294 \ubcf5\uc7a1\ud55c \ub85c\uc9c1\uc744 \ub2e8\uc21c\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\uc561\uc158 \uc911\uc2ec\uc758 \uc0c1\ud0dc \uc5c5\ub370\uc774\ud2b8"}),": \uc0c1\ud0dc \ubcc0\uacbd\uc774 \uc561\uc158\uc744 \ud1b5\ud574 \uba85\ud655\ud558\uac8c \uc774\ub8e8\uc5b4\uc9c0\ubbc0\ub85c \ucf54\ub4dc\uc758 \uac00\ub3c5\uc131\uc774 \ub192\uc544\uc9d1\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\ud14c\uc2a4\ud2b8 \uc6a9\uc774"}),": \ub9ac\ub4c0\uc11c \ud568\uc218\ub294 \uc21c\uc218 \ud568\uc218\uc774\ubbc0\ub85c \ub3c5\ub9bd\uc801\uc73c\ub85c \ud14c\uc2a4\ud2b8\ud558\uae30\uac00 \uc27d\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\uc8fc\uc758\ud574\uc57c-\ud560-\uc810",children:"\uc8fc\uc758\ud574\uc57c \ud560 \uc810"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\ucd08\uae30 \uc0c1\ud0dc \uc124\uc815"}),": \ucd08\uae30 \uc0c1\ud0dc\ub294 \ub2e8\uc21c\ud55c \uac12\uc774\ub098 \uac1d\uccb4\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ub9cc\uc57d \ucd08\uae30 \uc0c1\ud0dc\ub97c \uacc4\uc0b0\ud574\uc57c \ud55c\ub2e4\uba74 \ucd08\uae30\ud654 \ud568\uc218\ub97c \uc138 \ubc88\uc9f8 \uc778\uc790\ub85c \uc804\ub2ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\ubcf5\uc7a1\ud55c \uc561\uc158 \ucc98\ub9ac"}),": \uc561\uc158\uc758 \ud0c0\uc785\uacfc \ud398\uc774\ub85c\ub4dc(payload)\ub97c \uc798 \uc815\uc758\ud558\uc5ec\uc57c \ud569\ub2c8\ub2e4. \uc561\uc158 \ud0c0\uc785\uc740 \ubb38\uc790\uc5f4\ub85c \uc815\uc758\ud558\uace0, \ud544\uc694\ud55c \ub370\uc774\ud130\ub97c \uc561\uc158 \uac1d\uccb4\uc758 \uc18d\uc131\uc73c\ub85c \ud3ec\ud568\uc2dc\ud0b5\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\ubd88\ubcc0\uc131 \uc720\uc9c0"}),": \ub9ac\ub4c0\uc11c \ud568\uc218\ub294 \ubd88\ubcc0\uc131\uc744 \uc720\uc9c0\ud574\uc57c \ud558\ubbc0\ub85c, \uae30\uc874 \uc0c1\ud0dc\ub97c \uc9c1\uc811 \ubcc0\uacbd\ud558\uc9c0 \uc54a\uace0 \uc0c8\ub85c\uc6b4 \uc0c1\ud0dc \uac1d\uccb4\ub97c \ubc18\ud658\ud574\uc57c \ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\ub354-\uc54c\uc544\ubcf4\uae30",children:"\ub354 \uc54c\uc544\ubcf4\uae30"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Redux"}),": \ub9ac\uc561\ud2b8 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\uc11c \ub354 \ubcf5\uc7a1\ud55c \uc0c1\ud0dc \uad00\ub9ac\ub97c \uc704\ud574 ",(0,s.jsx)(n.code,{children:"useReducer"})," \ub300\uc2e0 Redux\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,s.jsx)(n.a,{href:"https://redux.js.org/",children:"Redux \uacf5\uc2dd \ubb38\uc11c"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\ucee8\ud14d\uc2a4\ud2b8 API\uc640 \ud568\uaed8 \uc0ac\uc6a9"}),": ",(0,s.jsx)(n.code,{children:"useReducer"}),"\uc640 \ucee8\ud14d\uc2a4\ud2b8 API\ub97c \uacb0\ud569\ud558\uba74 \uc804\uc5ed \uc0c1\ud0dc \uad00\ub9ac\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4. ",(0,s.jsx)(n.a,{href:"https://react.dev",children:"React Context"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\ub9ac\ub4c0\uc11c \ud328\ud134"}),": \uc0c1\ud0dc \uad00\ub9ac \ud328\ud134\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc124\uba85\uc740 ",(0,s.jsx)(n.a,{href:"https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers",children:"\ub9ac\ub4c0\uc11c \ud328\ud134"})," \ubb38\uc11c\ub97c \ucc38\uace0\ud558\uc138\uc694."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\ub0b4\uc6a9-\uc694\uc57d",children:"\ub0b4\uc6a9 \uc694\uc57d"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"useReducer"})," \ud6c5\uc740 \ubcf5\uc7a1\ud55c \uc0c1\ud0dc \uad00\ub9ac \ub85c\uc9c1\uc744 \ub2e8\uc21c\ud654\ud558\uace0, \uc0c1\ud0dc \ubcc0\uacbd\uc744 \uba85\ud655\ud558\uac8c \ud560 \uc218 \uc788\ub294 \uac15\ub825\ud55c \ub3c4\uad6c\uc785\ub2c8\ub2e4. \ub9ac\ub4c0\uc11c \ud568\uc218\uc640 \uc561\uc158\uc744 \ud1b5\ud574 \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud558\uba70, \ucd08\uae30 \uc0c1\ud0dc\uc640 \uc561\uc158 \ud0c0\uc785\uc744 \uc798 \uc815\uc758\ud558\uc5ec\uc57c \ud569\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \uc0c1\ud0dc \uad00\ub9ac\uc758 \uac00\ub3c5\uc131\uc744 \ub192\uc774\uace0 \uc720\uc9c0\ubcf4\uc218\ub97c \uc27d\uac8c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>u});var s=r(6540);const t={},c=s.createContext(t);function d(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);