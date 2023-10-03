"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[33470],{30605:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),s=(a(67294),a(3905));const l={id:"cli-template-search",title:"Search Template",pagination_label:"CLI Templates Search",sidebar_label:"Search",sidebar_position:7,sidebar_class_name:"cli-template-search",keywords:["cli","template","search"],description:"Learn about the commands you can use to run search templates from the CLI.",slug:"/tools/cli/templates/search",tags:["CLI"]},r=void 0,o={unversionedId:"tools/cli/Templates/cli-template-search",id:"tools/cli/Templates/cli-template-search",title:"Search Template",description:"Learn about the commands you can use to run search templates from the CLI.",source:"@site/products/idn/tools/cli/Templates/search.md",sourceDirName:"tools/cli/Templates",slug:"/tools/cli/templates/search",permalink:"/idn/tools/cli/templates/search",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/tools/cli/Templates/search.md",tags:[{label:"CLI",permalink:"/idn/tags/cli"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1696346252,formattedLastUpdatedAt:"Oct 3, 2023",sidebarPosition:7,frontMatter:{id:"cli-template-search",title:"Search Template",pagination_label:"CLI Templates Search",sidebar_label:"Search",sidebar_position:7,sidebar_class_name:"cli-template-search",keywords:["cli","template","search"],description:"Learn about the commands you can use to run search templates from the CLI.",slug:"/tools/cli/templates/search",tags:["CLI"]},sidebar:"sdkSidebar",previous:{title:"CLI Templates Report",permalink:"/idn/tools/cli/templates/report"},next:{title:"CLI Templates SPConfig",permalink:"/idn/tools/cli/templates/spconfig"}},i={},p=[],c={toc:p};function u(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Use search templates to run predefined search queries from the CLI."),(0,s.kt)("p",null,"This is an example of a template file with 3 search templates populated: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "name": "all-account-unlocks",\n    "description": "All account unlocks in the tenant for a given time range",\n    "variables": [{"name": "days", "prompt": "Days before today"}],\n    "searchQuery": {\n      "indices": ["events"],\n      "queryType": null,\n      "queryVersion": null,\n      "query": {\n        "query": "(USER_UNLOCK_PASSED AND created:[now-{{days}}d TO now])"\n      },\n      "sort": [],\n      "searchAfter": []\n    }\n  },\n  {\n    "name": "all-provisioning-events",\n    "description": "All provisioning events in the tenant for a given time range",\n    "variables": [{"name": "days", "prompt": "Days before today"}],\n    "searchQuery": {\n      "indices": ["events"],\n      "queryType": null,\n      "queryVersion": null,\n      "query": {\n        "query": "(type:provisioning AND created:[now-{{days}}d TO now])"\n      },\n      "sort": [],\n      "searchAfter": []\n    }\n  },\n  {\n    "name": "all-provisioning-events-90-days",\n    "description": "All provisioning events in the tenant for a given time range",\n    "variables": [],\n    "searchQuery": {\n      "indices": ["events"],\n      "queryType": null,\n      "queryVersion": null,\n      "query": {\n        "query": "(type:provisioning AND created:[now-90d TO now])"\n      },\n      "sort": [],\n      "searchAfter": []\n    }\n  }\n]\n')),(0,s.kt)("p",null,"This is the search template anatomy:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "all-account-unlocks",\n')),(0,s.kt)("p",null,"This is the search template's name. "),(0,s.kt)("p",null,"It displays in the template list when you run ",(0,s.kt)("inlineCode",{parentName:"p"},"sail search template"),"."),(0,s.kt)("p",null,"You can also provide this name as an argument: ",(0,s.kt)("inlineCode",{parentName:"p"},"sail search template all-account-unlocks")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'  "description": "All account unlocks in the tenant for a given time range"\n')),(0,s.kt)("p",null,"This is the search template's description. "),(0,s.kt)("p",null,"It displays following the template name in the ",(0,s.kt)("inlineCode",{parentName:"p"},"sail search template")," list."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'  "variables": [{"name": "days", "prompt": "Days before today"}],\n')),(0,s.kt)("p",null,"Use variables to dynamically populate values in the following content during command run time. "),(0,s.kt)("p",null,"For example, the variable in this template is configured so you can choose how many days back you want to search for account unlock events. When you run ",(0,s.kt)("inlineCode",{parentName:"p"},"sail search template all-account-unlocks"),", a prompt displays, ",(0,s.kt)("inlineCode",{parentName:"p"},"Input Days before today:")," The number you enter will then populate anywhere the variable is used in the following object, and then the query runs. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'  "searchQuery": {\n    "indices": ["events"],\n    "queryType": null,\n    "queryVersion": null,\n    "query": {\n      "query": "(USER_UNLOCK_PASSED AND created:[now-{{days}}d TO now])" },\n      "sort": [], "searchAfter": []\n      }\n  }\n')),(0,s.kt)("p",null,"Everything inside this searchQuery object matches the standard format of an ",(0,s.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/search/building-query.html"},"IdentityNow search query"),". A limited number of examples are provided ",(0,s.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/idn/api/v3/search-post"},"here"),", but the searchQuery object is mapped to the full search object. This means that you can add any search query values missing from this object."))}u.isMDXComponent=!0}}]);