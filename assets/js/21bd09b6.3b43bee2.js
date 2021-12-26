"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[270],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43609:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,toc:()=>c,default:()=>m});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"migration_v3_to_v4",title:"Migration from v3 to v4"},s=void 0,p={unversionedId:"migration_v3_to_v4",id:"migration_v3_to_v4",title:"Migration from v3 to v4",description:"Table of Contents",source:"@site/docs/migration-v4.md",sourceDirName:".",slug:"/migration_v3_to_v4",permalink:"/docs/next/migration_v3_to_v4",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/migration-v4.md",tags:[],version:"current",frontMatter:{id:"migration_v3_to_v4",title:"Migration from v3 to v4"},sidebar:"docs",previous:{title:"Label Guide",permalink:"/docs/next/labels"}},c=[{value:"Table of Contents",id:"table-of-contents",children:[],level:3},{value:"What&#39;s New?",id:"whats-new",children:[{value:"Migration to Functional",id:"migration-to-functional",children:[{value:"Why?",id:"why",children:[],level:4},{value:"How would it affect?",id:"how-would-it-affect",children:[],level:4}],level:3},{value:"Migration to Pressable",id:"migration-to-pressable",children:[{value:"The Reason",id:"the-reason",children:[],level:4}],level:3},{value:"Tests migrated to React Native Testing library",id:"tests-migrated-to-react-native-testing-library",children:[],level:3}],level:2},{value:"Handling breaking changes",id:"handling-breaking-changes",children:[{value:"Tooltip",id:"tooltip",children:[],level:3},{value:"Text",id:"text",children:[],level:3}],level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"table-of-contents"},"Table of Contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#whats-new"},"What's New?"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#migration-to-functional"},"Migration to Functional"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#why"},"Why?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-would-it-affect"},"How would it affect?")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#migration-to-pressable"},"Migration to Pressable"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#the-reason"},"The Reason")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#tests-migrated-to-react-native-testing-library"},"Tests migrated to React Native Testing library")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#handling-breaking-changes"},"Handling breaking changes"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#tooltip"},"Tooltip")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#text"},"Text"))))),(0,i.kt)("h2",{id:"whats-new"},"What's New?"),(0,i.kt)("p",null,"React Native Elements v4 introduces many features including few new components, fully typescript support and some breaking changes whose migration is being ",(0,i.kt)("a",{parentName:"p",href:"#handling-breaking-changes"},"given below"),"."),(0,i.kt)("h3",{id:"migration-to-functional"},"Migration to Functional"),(0,i.kt)("p",null,"These components are converted to Functional Components,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Button"),(0,i.kt)("li",{parentName:"ul"},"Slider"),(0,i.kt)("li",{parentName:"ul"},"Tooltip"),(0,i.kt)("li",{parentName:"ul"},"Image")),(0,i.kt)("h4",{id:"why"},"Why?"),(0,i.kt)("h4",{id:"how-would-it-affect"},"How would it affect?"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"ref")," may not work as of now, but would be added in future releases.")),(0,i.kt)("h3",{id:"migration-to-pressable"},"Migration to Pressable"),(0,i.kt)("h4",{id:"the-reason"},"The Reason"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Earlier React Native Elements was using ",(0,i.kt)("inlineCode",{parentName:"p"},"Touchable")," as touch handler, but since ",(0,i.kt)("inlineCode",{parentName:"p"},"v4.0")," will use ",(0,i.kt)("inlineCode",{parentName:"p"},"Pressable")))),(0,i.kt)("h3",{id:"tests-migrated-to-react-native-testing-library"},"Tests migrated to React Native Testing library"),(0,i.kt)("h2",{id:"handling-breaking-changes"},"Handling breaking changes"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/pressable"},"Pressable")," is a Core Component wrapper that can detect various stages of press interactions on any of its defined children.")),(0,i.kt)("p",null,"This change would let you use ",(0,i.kt)("inlineCode",{parentName:"p"},"onPressIn")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"onPressOut")," APIs in RNE components, For example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'  <CheckBox\n    title="I agree"\n+   onPressIn={()=>{}}\n+   onPressOut={()=>{}}\n    onPress={() => {}}\n  />\n')),(0,i.kt)("p",null,"and the rest of props for ",(0,i.kt)("inlineCode",{parentName:"p"},"Pressable")," can be added via ",(0,i.kt)("inlineCode",{parentName:"p"},"pressableProps")," API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"  <ButtonGroup\n+   pressableProps={{android_ripple:{radius:2}}}\n  />\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"Button")," Component still uses Touchable, As ",(0,i.kt)("inlineCode",{parentName:"p"},"Pressable")," works differently compared to ",(0,i.kt)("inlineCode",{parentName:"p"},"TouchableNativeFeedback"),", for instance, the Button will apply the primary color as the button background color, however, the pressable ripple effect will then render behind the button, which results in no ripple."))),(0,i.kt)("h3",{id:"tooltip"},"Tooltip"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Tooltip")," is one of core component of RNE, Since v4 this component would be stateless and would use ",(0,i.kt)("inlineCode",{parentName:"p"},"visible"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"onOpen")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"onClose")," Props for its working"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'  <Tooltip\n+   visible={open}\n+   onOpen={() => {\n+      setOpen(true);\n+   }}\n+   onClose={() => {\n+      setOpen(false);\n+   }}\n    popover="Hey All"\n  />\n')),(0,i.kt)("p",null,"You can still use Tooltip as stateful component by doing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const ControlledTooltip: React.FC<TooltipProps> = (props) => {\n  const [open, setOpen] = React.useState(false);\n  return (\n    <Tooltip\n      visible={open}\n      onOpen={() => {\n        setOpen(true);\n      }}\n      onClose={() => {\n        setOpen(false);\n      }}\n      {...props}\n    />\n  );\n};\n")),(0,i.kt)("h3",{id:"text"},"Text"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"variant")," can be => h1 h2 h3 h4 caption props"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'  <Text\n-  h1\n-  h1style={{}}\n+  variant="h1"\n   style={{}}\n  />\n')))}m.isMDXComponent=!0}}]);