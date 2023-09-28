"use strict";(self.webpackChunknewfold_ui_docs=self.webpackChunknewfold_ui_docs||[]).push([[3217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:2,sidebar_label:"Installation"},a="Install Newfold UI Library",l={unversionedId:"installation",id:"installation",title:"Install Newfold UI Library",description:"To install the Newfold UI library, start with installing the package and its peer dependencies from NPM.",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/npm-ui-component-library/docs/installation",draft:!1,editUrl:"https://github.com/newfold-labs/npm-ui-component-library/docs/docs/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Installation"},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/npm-ui-component-library/docs/intro"},next:{title:"Starters",permalink:"/npm-ui-component-library/docs/starters"}},s={},p=[{value:"Setup",id:"setup",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"install-newfold-ui-library"},"Install Newfold UI Library"),(0,o.kt)("p",null,"To install the Newfold UI library, start with installing the package and its peer dependencies from NPM."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @newfold/ui-component-library @wordpress/element\n")),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"This package assumes the use of tailwindcss for building CSS and therefore ships with Tailwind layered CSS. You can easily set up Tailwind using the ",(0,o.kt)("inlineCode",{parentName:"p"},"TAILWINDCSS_PRESET")," module."),(0,o.kt)("p",null,"In your ",(0,o.kt)("inlineCode",{parentName:"p"},"tailwind.config.js"),", make sure to import this module in your content configuration to prevent Tailwind from purging its styles like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { TAILWINDCSS_PRESET } from "@newfold/ui-component-library";\n\nmodule.exports = {\n    presets: [ TAILWINDCSS_PRESET ],\n    content: [\n        // Include all JS files inside the UI library in your content.\n        ...TAILWINDCSS_PRESET.content,\n        "./path/to/your/content/**/*.js",\n    ],\n};\n')),(0,o.kt)("p",null,"To include this packages CSS in your build, import it in your stylesheet ",(0,o.kt)("strong",{parentName:"p"},"before")," the Tailwind layers like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},'/* Import main CSS including all components. */\n@import "@newfold/ui-component-library";\n\n/* Tailwind layers */\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n')),(0,o.kt)("p",null,"Now that your CSS is set up, you can start using the React components. Always start your React tree with the ",(0,o.kt)("a",{parentName:"p",href:"/npm-ui-component-library/docs/components/root"},(0,o.kt)("inlineCode",{parentName:"a"},"Root"))," component, which provides a context for general options and a CSS classname for scoping this libraries CSS. Without it, components in this library will not render properly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Root, Alert } from "@newfold/ui-component-library";\n\nexport default () => (\n    <Root context={ { isRtl: false } }>\n        <Alert variant="success">\n            Congrats! You\'ve successfully setup the UI library.\n        </Alert>\n    </Root>\n);\n')),(0,o.kt)("p",null,"Please note that the CSS scoping adds one level of CSS specificity. Therefore ",(0,o.kt)("inlineCode",{parentName:"p"},"TAILWINDCSS_PRESET")," does the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Enables the ",(0,o.kt)("inlineCode",{parentName:"li"},"important")," rule for all utilities."),(0,o.kt)("li",{parentName:"ol"},"Disables the Tailwind ",(0,o.kt)("inlineCode",{parentName:"li"},"preflight")," styles (they are included in the ",(0,o.kt)("a",{parentName:"li",href:"/npm-ui-component-library/docs/components/root"},(0,o.kt)("inlineCode",{parentName:"a"},"Root"))," component's CSS)."),(0,o.kt)("li",{parentName:"ol"},"Configures ",(0,o.kt)("inlineCode",{parentName:"li"},"@tailwindcss/forms")," to use the ",(0,o.kt)("inlineCode",{parentName:"li"},"class")," strategy (they are included in the ",(0,o.kt)("a",{parentName:"li",href:"/npm-ui-component-library/docs/components/root"},(0,o.kt)("inlineCode",{parentName:"a"},"Root"))," component's CSS).")))}d.isMDXComponent=!0}}]);