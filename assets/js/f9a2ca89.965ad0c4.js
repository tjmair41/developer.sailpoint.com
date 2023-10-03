"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[53188],{58327:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=i(87462),n=(i(67294),i(3905));const s={id:"prerequisites",title:"Prerequisites",pagination_label:"Prerequisites",sidebar_label:"Prerequisites",sidebar_position:1,sidebar_class_name:"prerequisites",keywords:["connectivity","connectors","prerequisites"],description:"These are some prerequisites you must have before you start building SaaS Connectors.",slug:"/docs/saas-connectivity/prerequisites",tags:["Connectivity"]},r=void 0,a={unversionedId:"docs/identity-now/saas-connectivity/prerequisites",id:"docs/identity-now/saas-connectivity/prerequisites",title:"Prerequisites",description:"These are some prerequisites you must have before you start building SaaS Connectors.",source:"@site/products/idn/docs/identity-now/saas-connectivity/prerequisites.md",sourceDirName:"docs/identity-now/saas-connectivity",slug:"/docs/saas-connectivity/prerequisites",permalink:"/idn/docs/saas-connectivity/prerequisites",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/saas-connectivity/prerequisites.md",tags:[{label:"Connectivity",permalink:"/idn/tags/connectivity"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1696346252,formattedLastUpdatedAt:"Oct 3, 2023",sidebarPosition:1,frontMatter:{id:"prerequisites",title:"Prerequisites",pagination_label:"Prerequisites",sidebar_label:"Prerequisites",sidebar_position:1,sidebar_class_name:"prerequisites",keywords:["connectivity","connectors","prerequisites"],description:"These are some prerequisites you must have before you start building SaaS Connectors.",slug:"/docs/saas-connectivity/prerequisites",tags:["Connectivity"]},sidebar:"idnDocs",previous:{title:"SaaS Connectivity",permalink:"/idn/docs/saas-connectivity"},next:{title:"Videos",permalink:"/idn/docs/saas-connectivity/videos"}},c={},l=[{value:"Required Software",id:"required-software",level:2},{value:"Node",id:"node",level:3},{value:"SailPoint CLI",id:"sailpoint-cli",level:3},{value:"Recommended Software",id:"recommended-software",level:2},{value:"IDE",id:"ide",level:3},{value:"Postman",id:"postman",level:3},{value:"Creating your first project",id:"creating-your-first-project",level:2},{value:"Source Files",id:"source-files",level:3}],p={toc:l};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"required-software"},"Required Software"),(0,n.kt)("h3",{id:"node"},"Node"),(0,n.kt)("p",null,"To develop a connector, Node >= 18.0.0 is required. Download node from the ",(0,n.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download"},"nodejs.org downloads page"),"."),(0,n.kt)("h3",{id:"sailpoint-cli"},"SailPoint CLI"),(0,n.kt)("p",null,"SailPoint provides a CLI tool to manage the connectors' lifecycles. To install and set up the CLI, ",(0,n.kt)("a",{parentName:"p",href:"../../../idn/tools/cli"},"follow the instructions here")," or you can directly download and install from the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/sailpoint-cli/releases"},"GitHub releases page")),(0,n.kt)("h2",{id:"recommended-software"},"Recommended Software"),(0,n.kt)("h3",{id:"ide"},"IDE"),(0,n.kt)("p",null,"Although you can develop connectors in a text editor, use an Integrated Development Environment (IDE) for a better experience. There are many IDEs that support Javascript/Typescript, including ",(0,n.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/Download"},"Visual Sudio Code"),", a free IDE with native support for Javascript/Typescript. VS Code provides syntax highlight, debugging, hints, code completion, and other helpful options."),(0,n.kt)("h3",{id:"postman"},"Postman"),(0,n.kt)("p",null,"A convenient way to test your connector before deploying to IDN is to use Postman. You can get it from the ",(0,n.kt)("a",{parentName:"p",href:"https://www.postman.com/downloads/"},"postman.com downloads page")),(0,n.kt)("h2",{id:"creating-your-first-project"},"Creating your first project"),(0,n.kt)("p",null,"To create an empty connector project, run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sail conn init my-first-project\n")),(0,n.kt)("p",null,"The CLI init command creates a new folder with your project name in the location where you run the command."),(0,n.kt)("p",null,"Run npm install to change the directory to the project folder and install the dependencies. You may need to provide your GitHub credentials because the CLI tool depends on a SailPoint internal GitHub repository."),(0,n.kt)("h3",{id:"source-files"},"Source Files"),(0,n.kt)("p",null,"The earlier command creates the initial project source directory below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"my-first-project\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 connector-spec.json\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 src/\n|   \u251c\u2500\u2500 index.ts\n|   \u251c\u2500\u2500 my-client.txt\n|   \u2514\u2500\u2500 connector-spec.ts\n\u251c\u2500\u2500 tsconfig.json\n")),(0,n.kt)("p",null,"This directory contains three main files:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"index.ts:")," Use this file to register all the available commands the connector supports, provide the necessary configuration options to the client code implementing the API for the source, and pass data the client code obtains to IdentityNow. This file can either use a vendor supplied client Software Development Kit (SDK) to interact with the web service or reference custom client code within the project.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"my-client.ts:")," Use this template to create custom client code to interact with a web service\u2019s APIs. If the web service does not provide an SDK, you can modify this file to implement the necessary API calls to interact with the source web service.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"connector-spec.ts")," This file describes how the connector works to IDN. More information about the connector spec is available in the next section. At a high level, it has the information for the following:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"What commands the connector supports"),(0,n.kt)("li",{parentName:"ul"},"What config values the user must provide when creating the connector"),(0,n.kt)("li",{parentName:"ul"},"Defining the account schema"),(0,n.kt)("li",{parentName:"ul"},"Defining the entitlment schema"),(0,n.kt)("li",{parentName:"ul"},"Defining the account create template that maps fields from IDN to the connector")))),(0,n.kt)("p",null,"These files are templates that provide guidance to begin implementing the connector on the target web service. Although you can implement a connector's entire functionality within these three files (or even just one if the web service provides an SDK), you can implement your own code architecture, like breaking out common utility functions into a separate file or creating separate files for each operation."))}d.isMDXComponent=!0}}]);