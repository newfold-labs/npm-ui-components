"use strict";(self.webpackChunknewfold_ui_docs=self.webpackChunknewfold_ui_docs||[]).push([[371],{5667:(e,a,n)=>{n.d(a,{Z:()=>c});var l=n(7294),t=n(4184),o=n.n(t),r=n(5697),i=n.n(r);const s=(0,l.forwardRef)((({as:e,className:a,label:n,children:t,...r},i)=>(0,l.createElement)(e,{ref:i,className:o()("nfd-label",a),...r},n||t||null))),d={label:i().string,children:i().string,as:i().elementType,className:i().string};s.propTypes=d,s.defaultProps={label:"",children:"",as:"label",className:""};const p=e=>(0,l.createElement)(s,{...e});p.propTypes=d,p.defaultProps=s.defaultProps,p.displayName="Label";const c=s},6471:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>E,contentTitle:()=>L,default:()=>G,frontMatter:()=>_,metadata:()=>O,toc:()=>w});var l=n(7462),t=n(7294),o=n(3905),r=n(2504),i=n(1629),s=n(4184),d=n.n(s),p=n(6486),c=n(5697),u=n.n(c),m=n(5667),b=n(5426),f=n(7201);const g=(0,t.forwardRef)((({id:e,name:a,value:n,label:l,screenReaderLabel:o,variant:r,disabled:i,className:s,isLabelDangerousHtml:p,...c},u)=>{const g=(0,f.Z)();return"inline-block"===r?(0,t.createElement)("div",{className:d()("nfd-radio","nfd-radio--inline-block",i&&"nfd-radio--disabled",s)},(0,t.createElement)("input",{type:"radio",id:e,name:a,value:n,disabled:i,className:"nfd-radio__input","aria-label":o,...c}),(0,t.createElement)("span",{className:"nfd-radio__content"},(0,t.createElement)(m.Z,{htmlFor:e,className:"nfd-radio__label",label:p?null:l,dangerouslySetInnerHTML:p?{__html:l}:null}),(0,t.createElement)(b.Z,{className:"nfd-radio__check",...g}))):(0,t.createElement)("div",{className:d()("nfd-radio",i&&"nfd-radio--disabled",s)},(0,t.createElement)("input",{ref:u,type:"radio",id:e,name:a,value:n,disabled:i,className:"nfd-radio__input",...c}),(0,t.createElement)(m.Z,{htmlFor:e,className:"nfd-radio__label",label:p?null:l,dangerouslySetInnerHTML:p?{__html:l}:null}))})),v={name:u().string.isRequired,id:u().string.isRequired,value:u().string.isRequired,label:u().string.isRequired,isLabelDangerousHtml:u().bool,screenReaderLabel:u().string,variant:u().oneOf(Object.keys({default:"","inline-block":"nfd-radio--inline-block"})),disabled:u().bool,className:u().string};g.propTypes=v,g.defaultProps={screenReaderLabel:"",variant:"default",disabled:!1,className:"",isLabelDangerousHtml:!1};const h=e=>(0,t.createElement)(g,{...e});h.propTypes=v,h.defaultProps=g.defaultProps,h.displayName="Radio";const R=g,y={variant:{default:"","inline-block":"nfd-radio-group--inline-block"}},k=({children:e=null,id:a="",name:n="",value:l="",label:o,description:r,options:i,onChange:s=p.noop,variant:c="default",disabled:u=!1,className:b="",...f})=>{const g=(0,t.useCallback)((({target:e})=>e.checked&&s(e.value)),[s]);return(0,t.createElement)("fieldset",{id:`radio-group-${a}`,className:d()("nfd-radio-group",u&&"nfd-radio-group--disabled",y.variant[c],b)},o&&(0,t.createElement)(m.Z,{as:"legend",className:"nfd-radio-group__label",label:o}),r&&(0,t.createElement)("div",{className:"nfd-radio-group__description"},r),(0,t.createElement)("div",{className:"nfd-radio-group__options"},e||i.map(((e,o)=>{const r=`radio-${a}-${o}`;return(0,t.createElement)(R,{key:r,id:r,name:n,value:e.value,label:e.label,screenReaderLabel:e.screenReaderLabel,variant:c,checked:l===e.value,onChange:g,disabled:u,...f})}))))};k.propTypes={children:u().node,id:u().string,name:u().string,value:u().string,label:u().string,description:u().string,options:u().arrayOf(u().shape({value:u().string.isRequired,label:u().string.isRequired,screenReaderLabel:u().string})),onChange:u().func,variant:u().oneOf(Object.keys(y.variant)),disabled:u().bool,className:u().string},(k.Radio=R).displayName="RadioGroup.Radio";const N=k,_={},L="Radio Group",O={unversionedId:"components/RadioGroup",id:"components/RadioGroup",title:"Radio Group",description:"A simple radio group component.",source:"@site/docs/components/RadioGroup.mdx",sourceDirName:"components",slug:"/components/RadioGroup",permalink:"/npm-ui-component-library/docs/components/RadioGroup",draft:!1,editUrl:"https://github.com/newfold-labs/npm-ui-component-library/docs/docs/components/RadioGroup.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Notifications",permalink:"/npm-ui-component-library/docs/components/Notifications"},next:{title:"Root",permalink:"/npm-ui-component-library/docs/components/Root"}},E={},w=[{value:"Usage",id:"usage",level:3},{value:"Variants",id:"variants",level:3},{value:"Props",id:"props",level:3}],T={toc:w},C="wrapper";function G(e){let{components:a,...n}=e;return(0,o.kt)(C,(0,l.Z)({},T,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"radio-group"},"Radio Group"),(0,o.kt)("p",null,"A simple radio group component."),(0,o.kt)(i.Z,{mdxType:"NewfoldRoot"},(0,o.kt)(N,{id:"radio-group",label:"A radio group",onChange:function(){},name:"name",description:"This is the description",options:[{label:"Option 1",value:"1",screenReaderLabel:"Option 1"},{label:"Option 2",value:"2",screenReaderLabel:"Option 2"},{label:"Option 3",value:"3",screenReaderLabel:"Option 3"},{label:"Option 4",value:"4",screenReaderLabel:"Option 4"}],value:"3",mdxType:"RadioGroup"})),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<RadioGroup\n    id=\"radio-group\"\n    label=\"A radio group\"\n    onChange={function noRefCheck(){}}\n    name=\"name\"\n    options={[\n    {\n        label: 'Option 1',\n        value: '1',\n        screenReaderLabel: \"Option 1\",\n    },\n    {\n        label: 'Option 2',\n        value: '2',\n        screenReaderLabel: \"Option 2\",\n    },\n    {\n        label: 'Option 3',\n        value: '3',\n        screenReaderLabel: \"Option 3\",\n    },\n    {\n        label: 'Option 4',\n        value: '4',\n        screenReaderLabel: \"Option 4\",\n    }\n    ]}\n    value='3'\n>\n</RadioGroup>\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"variants"},"Variants"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"props"},"Props"),(0,o.kt)(r.Z.Table,{docs:{children:{type:"node"},className:{type:"string",description:"Class attribute to add to the element",defaultValue:'""'},description:{type:"string",description:"Form element description for whole radio group",defaultValue:'""'},disabled:{type:"boolean",description:"Disabled flag",defaultValue:"false"},id:{type:"string",description:"Element id attribute",defaultValue:'""'},label:{type:"string",description:"Form label for whole radio group",defaultValue:'""'},name:{type:"string",description:"Element name",defaultValue:'""'},onChange:{type:"func",defaultValue:"noop",description:"Handler for when value changes"},options:{type:"Array of Objects",description:"The radio options destined for the group. [{value: string,label: string,screenReaderLabel: string},...]"},value:{type:"string",description:"Desired selected value matching the value of the option"},variant:{type:'string ["default", "inline-block"]',description:"Type of radio group to render",defaultValue:"default"}}}))}G.isMDXComponent=!0},5426:(e,a,n)=>{n.d(a,{Z:()=>t});var l=n(7294);const t=l.forwardRef((function(e,a){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:a},e),l.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}))}))}}]);