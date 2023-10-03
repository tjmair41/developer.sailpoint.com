"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[81606],{2974:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={id:"replace-all",title:"Replace All",pagination_label:"Replace All",sidebar_label:"Replace All",sidebar_class_name:"replaceAll",keywords:["transforms","operations","replace all"],description:"Find and replace all instances of all patterns.",slug:"/docs/transforms/operations/replace-all",tags:["Transforms","Transform Operations"]},s=void 0,i={unversionedId:"docs/identity-now/transforms/operations/replace-all",id:"docs/identity-now/transforms/operations/replace-all",title:"Replace All",description:"Find and replace all instances of all patterns.",source:"@site/products/idn/docs/identity-now/transforms/operations/replace-all.md",sourceDirName:"docs/identity-now/transforms/operations",slug:"/docs/transforms/operations/replace-all",permalink:"/idn/docs/transforms/operations/replace-all",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/transforms/operations/replace-all.md",tags:[{label:"Transforms",permalink:"/idn/tags/transforms"},{label:"Transform Operations",permalink:"/idn/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1696346252,formattedLastUpdatedAt:"Oct 3, 2023",frontMatter:{id:"replace-all",title:"Replace All",pagination_label:"Replace All",sidebar_label:"Replace All",sidebar_class_name:"replaceAll",keywords:["transforms","operations","replace all"],description:"Find and replace all instances of all patterns.",slug:"/docs/transforms/operations/replace-all",tags:["Transforms","Transform Operations"]},sidebar:"idnDocs",previous:{title:"Reference",permalink:"/idn/docs/transforms/operations/reference"},next:{title:"Replace",permalink:"/idn/docs/transforms/operations/replace"}},o={},p=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2},{value:"References",id:"references",level:2}],m={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The replace all transform works like the replace transform, except that it can perform multiple replace operations on the incoming data instead of just one pattern. Use the replace all transform to find multiple patterns of characters within incoming data and replace all instances of those patterns with alternate values. The transform recognizes standard regex syntax. See the ",(0,n.kt)("a",{parentName:"p",href:"#references"},"References")," section for more information about regex."),(0,n.kt)("h2",{id:"transform-structure"},"Transform Structure"),(0,n.kt)("p",null,"The replace transform takes a ",(0,n.kt)("inlineCode",{parentName:"p"},"table")," attribute of key-value pairs as an argument. Each pair identifies the pattern to search for as its key and the replacement string as its value. The transform also requires the standard ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," attributes:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "table": {\n      "-": " ",\n      "\\"": "\'",\n      "\xf1": "n"\n    }\n  },\n  "type": "replaceAll",\n  "name": "Replace All Transform"\n}\n')),(0,n.kt)("h2",{id:"attributes"},"Attributes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Required Attributes")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,n.kt)("inlineCode",{parentName:"li"},"replaceAll"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"regex")," - This is the pattern you want to replace."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"replacement")," - This is the replacement string that replaces the pattern wherever it occurs."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Optional Attributes")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,n.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"input")," - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.")))),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,'This transform makes a simple set of special character replacements, exchanging a space for a hyphen and removing the Spanish tilde from the "n."'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'Input: "Enrique Jose-Pi\xf1on"\nOutput: "Enrique Jose Pinon"\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "table": {\n      ".": "-",\n      "\\"": "\'",\n      "\xf1": "n"\n    }\n  },\n  "type": "replaceAll",\n  "name": "Replace All Transform"\n}\n')),(0,n.kt)("hr",null),(0,n.kt)("p",null,"\xa0"),(0,n.kt)("p",null,"This example uses more complex regex patterns to remove any alphabet characters from the input string and replace periods with hyphens."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'Input: "ad512.777.1234"\nOutput: "512-777-1234"\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "input": "",\n    "table": {\n      "[.]": "-",\n      "[a-zA-z]": ""\n    }\n  },\n  "type": "replaceAll",\n  "name": "Replace All Transform"\n}\n')),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.regular-expressions.info/replacetutorial.html"},"https://www.regular-expressions.info/replacetutorial.html")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://regex101.com/"},"https://regex101.com/"))))}c.isMDXComponent=!0}}]);