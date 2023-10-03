"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[38303],{99742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={id:"typescript-sdk",title:"TypeScript SDK",pagination_label:"TypeScript SDK",sidebar_label:"TypeScript",sidebar_position:4,sidebar_class_name:"typescriptsdk",keywords:["tsc","typescript","sdk"],description:"Learn how to use the TypeScript SDK in this guide.",slug:"/tools/sdk/typescript",tags:["SDK"]},o=void 0,l={unversionedId:"tools/sdk/typescript-sdk",id:"tools/sdk/typescript-sdk",title:"TypeScript SDK",description:"Learn how to use the TypeScript SDK in this guide.",source:"@site/products/idn/tools/sdk/typescript.md",sourceDirName:"tools/sdk",slug:"/tools/sdk/typescript",permalink:"/idn/tools/sdk/typescript",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/tools/sdk/typescript.md",tags:[{label:"SDK",permalink:"/idn/tags/sdk"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1696346252,formattedLastUpdatedAt:"Oct 3, 2023",sidebarPosition:4,frontMatter:{id:"typescript-sdk",title:"TypeScript SDK",pagination_label:"TypeScript SDK",sidebar_label:"TypeScript",sidebar_position:4,sidebar_class_name:"typescriptsdk",keywords:["tsc","typescript","sdk"],description:"Learn how to use the TypeScript SDK in this guide.",slug:"/tools/sdk/typescript",tags:["SDK"]},sidebar:"sdkSidebar",previous:{title:"PowerShell SDK",permalink:"/idn/tools/sdk/powershell"}},s={},p=[{value:"Start using the TypeScript SDK",id:"start-using-the-typescript-sdk",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Setup",id:"setup",level:2},{value:"Install the SDK",id:"install-the-sdk",level:3},{value:"Configure the SDK",id:"configure-the-sdk",level:3},{value:"Manual Configuration",id:"manual-configuration",level:4},{value:"CLI assisted configuration",id:"cli-assisted-configuration",level:4},{value:"Environment variable configuration",id:"environment-variable-configuration",level:4},{value:"Run an example request",id:"run-an-example-request",level:2},{value:"Transform",id:"transform",level:3},{value:"Run an API request",id:"run-an-api-request",level:3},{value:"Paginate results",id:"paginate-results",level:4},{value:"Search",id:"search",level:3},{value:"Get started",id:"get-started",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"start-using-the-typescript-sdk"},"Start using the TypeScript SDK"),(0,i.kt)("p",null,"Learn how to use the TypeScript SDK in this guide. The TypeScript SDK has some pre-built code examples you can use to learn how to build tools that can interact with IdentityNow (IDN)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install sailpoint-api-client\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn add sailpoint-api-client\n")),(0,i.kt)("p",null,"You can find the SDK and its examples in its GitHub repo ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/typescript-sdk"},"here"),"."),(0,i.kt)("p",null,"The TypeScript SDK includes the following functionality: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#run-an-api-request"},"APIs"),": "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"All ",(0,i.kt)("a",{parentName:"p",href:"/idn/api/v3"},"V3")," and ",(0,i.kt)("a",{parentName:"p",href:"/idn/api/beta"},"Beta")," APIs are available.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The following V2 APIs are available: "),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Collection"),(0,i.kt)("th",{parentName:"tr",align:null},"Endpoint"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Workgroups"),(0,i.kt)("td",{parentName:"tr",align:null},"GET Workgroup, PATCH Workgroup, DELETE Workgroup, GET Workgroups, POST Workgroups, GET Workgroup Members, POST Workgroup Members, GET Workgroup Connections, POST Bulk Delete Workgroups")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Organizations"),(0,i.kt)("td",{parentName:"tr",align:null},"GET Organization, PATCH Organization"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The following CC APIs are available: "),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Collection"),(0,i.kt)("th",{parentName:"tr",align:null},"Endpoint"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Accounts"),(0,i.kt)("td",{parentName:"tr",align:null},"GET Accounts, POST Remove Account")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Applications"),(0,i.kt)("td",{parentName:"tr",align:null},"GET Applications, GET Application, POST Application, POST Update Application, POST Delete Application, GET Application Access Profiles")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Connectors"),(0,i.kt)("td",{parentName:"tr",align:null},"GET Connectors, POST Connector, POST Delete Connector, GET Export Connector, POST Import Connector")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"User"),(0,i.kt)("td",{parentName:"tr",align:null},"POST Update User Permissions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Sources"),(0,i.kt)("td",{parentName:"tr",align:null},"POST Account Aggregation, GET Export Account Feed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"System"),(0,i.kt)("td",{parentName:"tr",align:null},"POST Refresh Identities"))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#search"},"Search"),": You can use IDN's search. To learn more about IDN's search, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/search/index.html"},"Search"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#transform"},"Transforms"),": You can use transforms, configurable JSON objects that define easy ways to manipulate attribute data without your needing to write any code. To learn more about IDN's transforms, refer to ",(0,i.kt)("a",{parentName:"p",href:"/idn/docs/transforms"},"Transforms"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#paginate-results"},"Pagination"),": You can use the SDK's pre-built pagination functionality to paginate the responses to your SDK requests. To learn more about pagination, refer to ",(0,i.kt)("a",{parentName:"p",href:"/idn/api/standard-collection-parameters#paginating-results"},"Paginating Results"),"."))),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"You need the following to use the TypeScript SDK:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"TypeScript. To learn how to download it and set it up, go ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/download"},"here"),". ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Your tenant name in IDN. To learn how to find it, refer to ",(0,i.kt)("a",{parentName:"p",href:"/idn/api/getting-started#find-your-tenant-name"},"Getting Started"),". The SDK will use this tenant name to connect to your IDN instance. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A PAT with a client secret and ID. To learn how to create one in IDN, refer to ",(0,i.kt)("a",{parentName:"p",href:"/idn/api/authentication#personal-access-tokens"},"Personal Access Tokens"),". The SDK will use this PAT to authenticate with the SailPoint APIs. "))),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"To set up your TypeScript SDK, follow these steps: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#install-the-sdk"},"Install the SDK")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#configure-the-sdk"},"Configure the SDK"))),(0,i.kt)("h3",{id:"install-the-sdk"},"Install the SDK"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Run the ",(0,i.kt)("inlineCode",{parentName:"li"},"npm init"),' command in your project directory and answer the questions. Doing so initializes your project and creates the "package.json" file. You will use npm to update this file with the dependencies necessary to use the SDK. '),(0,i.kt)("li",{parentName:"ol"},'Create a source folder named "src". The SDK will include the ',(0,i.kt)("inlineCode",{parentName:"li"},'"src/**/*"')," folder path when it compiles, so your SDK file must be there. "),(0,i.kt)("li",{parentName:"ol"},'Go to the "src" folder and create a file named "index.ts" in there. You will need to compile the "index.ts" file to run the SDK. You can leave this "index.ts" file empty for now. '),(0,i.kt)("li",{parentName:"ol"},'Go to the project directory and create a file named "tsconfig.json" in there. This file will contain your compiler configuration. Copy this information into your "tsconfig.json" file: ')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n    "compilerOptions": {\n      "target": "ES2020",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */\n      "module": "commonjs",                                /* Specify what module code is generated. */\n      "moduleResolution": "node",                       /* Specify how TypeScript looks up a file from a given module specifier. */\n      "esModuleInterop": true,                             /* Omit additional JavaScript to ease support for importing CommonJS modules. This enables \'allowSyntheticDefaultImports\' for type compatibility. */\n      "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */\n      "strict": true,                                      /* Enable all strict type-checking options. */\n      "skipLibCheck": true,\n      "outDir": "./build",\n      "rootDir": "src", \n      "sourceMap": true\n    },\n    "include": ["src/**/*"],\n    "exclude": ["node_modules"]\n  }\n')),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Run the ",(0,i.kt)("inlineCode",{parentName:"li"},"npm install sailpoint-api-client")," to install the SDK. "),(0,i.kt)("li",{parentName:"ol"},"Run the command ",(0,i.kt)("inlineCode",{parentName:"li"},"npm install -D ts-node")," to install the TypeScript execution engine. Once ts-node is installed and you are configured, you will be able to run the ",(0,i.kt)("inlineCode",{parentName:"li"},"tsc src/index.ts"),' command to compile your project. Doing so creates a corresponding "index.js" JavaScript file you can run with this command: ',(0,i.kt)("inlineCode",{parentName:"li"},"node src/index.js"),". "),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#configure-the-sdk"},"Configure the SDK"),". You will need to authenticate to connect to the SDK. Once you are configured, you can start running the examples and get started!")),(0,i.kt)("h3",{id:"configure-the-sdk"},"Configure the SDK"),(0,i.kt)("p",null,"To configure the SDK, create a configuration file or save your configuration as environment variables.\nYou can use any of the following ways to do so: "),(0,i.kt)("h4",{id:"manual-configuration"},"Manual Configuration"),(0,i.kt)("p",null,'One way to create a configuration file is to create a "config.yaml" file in your project and specify the following information in it: '),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'activeenvironment: example # the key that identifies the currently active environment\nauthtype: pat # currently only pat and pipeline are supported if the ENV VAR SAIL_AUTH_TYPE is configured to "pipeline" it will override this value\ncustomexporttemplatespath: "" # the path to the users custom export templates file if one is provided\ncustomsearchtemplatespath: "" # the path to the users custom search templates file if one is provided\ndebug: false # the debug setting  \nenvironments: # the configured environments  \n  example:\n    baseurl: https://example.api.identitynow.com\n    pat:\n      accesstoken: example-access-token\n      clientid: example-client-id\n      clientsecret: example-client-secret\n      expiry: example-access-token-expiry\n    tenanturl: https://example.identitynow.com\n')),(0,i.kt)("p",null,"You must specify the following information: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"activeenvironment"),': This key identifies the current active environment the SDK is connecting to. This environment name refers to your IDN tenant name. In the example, the key is "example". You must also make sure the environment name listed under ',(0,i.kt)("inlineCode",{parentName:"li"},"environments")," matches the ",(0,i.kt)("inlineCode",{parentName:"li"},"activeenvironment"),". "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"authtype"),': The authentication type. Currently only "pat" and "pipeline" are supported. Configuring ENV VAR SAIL_AUTH_TYPE to "pipeline" overrides this value. In the example, the authentication type is "pat". You must also make sure the authentication type listed under the environment name "example" matches the ',(0,i.kt)("inlineCode",{parentName:"li"},"authtype"),". "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"baseurl")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"tenanturl"),": These refer to your IDN tenant URL. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"clientsecret"),": The PAT's client secret. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"clientid"),": The PAT's client ID. ")),(0,i.kt)("p",null,"Here's an example: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'activeenvironment: devrel # the key that identifies the currently active environment\nauthtype: pat # currently only pat and pipeline are supported if the ENV VAR SAIL_AUTH_TYPE is configured to "pipeline" it will override this value\ncustomexporttemplatespath: "" # the path to the users custom export templates file if one is provided\ncustomsearchtemplatespath: "" # the path to the users custom search templates file if one is provided\ndebug: false # the debug setting  \nenvironments: # the configured environments \n  example:\n    baseurl: https://devrel.api.identitynow.com\n    pat:\n      accesstoken: example-access-token\n      clientid: g0567b766b413b22c05c66e75d532f1b\n      clientsecret: cabd0e950a7230b63c1ff45be33fb22065b382b6251a73c61177a8bb5482fcc7\n      expiry: example-access-token-expiry\n    tenanturl: https://devrel.identitynow.com\n')),(0,i.kt)("p",null,"You can also specify this optional information: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"customexporttemplatespath"),": Specifies the folder path to save your custom export templates file in. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"customsearchtemplatespath"),": Specifies the folder path to save your custom search templates file in."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"debug"),': The debug setting. By default, it\'s set to "false".'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accesstoken"),": The PAT's name. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expiry"),": The PAT's expiry date.")),(0,i.kt)("h4",{id:"cli-assisted-configuration"},"CLI assisted configuration"),(0,i.kt)("p",null,"Another way to create a configuration file is to use the SailPoint CLI. To learn how to use the SailPoint CLI to create a configuration file, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/sailpoint-cli#manual-configuration"},"Assisted Configuration"),"."),(0,i.kt)("h4",{id:"environment-variable-configuration"},"Environment variable configuration"),(0,i.kt)("p",null,"You can also store your configuration in environment variables. "),(0,i.kt)("p",null,"On ",(0,i.kt)("strong",{parentName:"p"},"Linux/Mac"),", export the following environment variables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"export SAIL_BASE_URL=https://{tenant}.api.identitynow.com\nexport SAIL_CLIENT_ID={clientID}\nexport SAIL_CLIENT_SECRET={clientSecret}\n")),(0,i.kt)("p",null,"To get your environment variables to persist across terminal sessions, add these exports to your shell profile, something like ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.bash_profile"),".\nOn ",(0,i.kt)("strong",{parentName:"p"},"Windows PowerShell"),", run the following commands: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"$env:SAIL_BASE_URL=https://{tenant}.api.identitynow.com\n$env:SAIL_CLIENT_ID={clientID}\n$env:SAIL_CLIENT_SECRET={clientSecret}\n")),(0,i.kt)("p",null,"To get your environment variables to persist across PowerShell sessions, use these commands instead: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},"[System.Environment]::SetEnvironmentVariable('SAIL_BASE_URL','https://{tenant}.api.identitynow.com')\n[System.Environment]::SetEnvironmentVariable('SAIL_CLIENT_ID','{clientID}')\n[System.Environment]::SetEnvironmentVariable('SAIL_CLIENT_SECRET','clientSecret}')\n")),(0,i.kt)("h2",{id:"run-an-example-request"},"Run an example request"),(0,i.kt)("p",null,"Once your SDK is installed and configured, you can start accessing the SDK's different functionalities. The SDK includes some prebuilt examples you can copy into your PowerShell instance to start learning how to use the SDK. "),(0,i.kt)("p",null,"Use the examples to learn how to do the following: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#transform"},"Transform")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#run-an-api-request"},"Run an API request"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#paginate-results"},"Paginate results")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#search"},"Search"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#paginate-search-results"},"Paginate search results"))))),(0,i.kt)("h3",{id:"transform"},"Transform"),(0,i.kt)("p",null,'To get start using the SDK to create, manage, and delete transforms, you can copy this example request into your "index.ts" file: '),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Configuration, TransformsApi, TransformsApiCreateTransformRequest} from "sailpoint-api-client"\n\nconst createTransform = async () => {\n\n    let apiConfig = new Configuration()\n    let api = new TransformsApi(apiConfig)\n    let transform: TransformsApiCreateTransformRequest = \n    {\n        transform:\n        {\n            name: "Test Transform",\n            type: "dateFormat",\n            attributes: {\n                inputFormat: "MMM dd yyyy, HH:mm:ss.SSS",\n                outputFormat: "yyyy/dd/MM"\n            }\n        }\n    }\n    const val = await api.createTransform(transform)\n    console.log(val)\n}\ncreateTransform()\n')),(0,i.kt)("p",null,"This example transform, named ",(0,i.kt)("inlineCode",{parentName:"p"},'"Test Transform"')," connects to the ",(0,i.kt)("inlineCode",{parentName:"p"},"TransformsApi")," and uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"TransformsApiCreateTransformRequest")," endpoint to transform the ",(0,i.kt)("inlineCode",{parentName:"p"},'"dateFormat"')," attribute so that date inputs in the ",(0,i.kt)("inlineCode",{parentName:"p"},'"MMM dd yyyy"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'"HH:mm:ss.SSS"')," formats are transformed into date outputs in the ",(0,i.kt)("inlineCode",{parentName:"p"},'"yyy/dd/MM"')," format. "),(0,i.kt)("p",null,"To make sure that your SDK is connecting to the APIs you need, you can specify the API within the curly brackets in ",(0,i.kt)("inlineCode",{parentName:"p"},"import {}"),' at the top of the "index.ts" file. In this example, you could add ',(0,i.kt)("inlineCode",{parentName:"p"},"AccountsApi")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"AccountsApiCreateAccountRequest")," to add the functionality to create accounts as well as transforms. "),(0,i.kt)("p",null,"To compile the file, first run the ",(0,i.kt)("inlineCode",{parentName:"p"},"tsc src/index.ts")," command. This command creates a corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"index.js")," file you can use to run the SDK. "),(0,i.kt)("p",null,"To run the SDK, run the ",(0,i.kt)("inlineCode",{parentName:"p"},"node src/index.js")," command. This command sends the request and outputs a confirmation that your new transform has been created in IDN. This transform will then be available in your IDN tenant. "),(0,i.kt)("h3",{id:"run-an-api-request"},"Run an API request"),(0,i.kt)("p",null,"One of the most useful functionalities of the SDK is your ability to call the SailPoint API. "),(0,i.kt)("p",null,"Here's an example of the SDK using the API: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const getPaginatedAccounts = async () => {\n\n    \n    let apiConfig = new Configuration()\n    apiConfig.retriesConfig = {\n        retries: 4,\n        retryDelay: axiosRetry.exponentialDelay,\n        onRetry(retryCount, error, requestConfig) {\n            console.log(`retrying due to request error, try number ${retryCount}`)\n        },\n    }\n    let api = new AccountsApi(apiConfig)\n    \n    const val = await Paginator.paginate(api, api.listAccounts, {limit: 100}, 10)\n\n    console.log(val)\n\n}\n")),(0,i.kt)("p",null,"This example calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"AccountsApi")," and uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"listAccounts")," endpoint to list the accounts in your IDN tenant. You can manipulate this example to call different APIs and create totally new tools."),(0,i.kt)("p",null,"To make sure that your SDK is connecting to the APIs you need, you can specify the API within the curly brackets in ",(0,i.kt)("inlineCode",{parentName:"p"},"import {}"),' at the top of the "index.ts" file. In this example, you could add ',(0,i.kt)("inlineCode",{parentName:"p"},"AccountsApi")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"AccountsApiCreateAccountRequest")," to add the functionality to create accounts as well as transforms. "),(0,i.kt)("h4",{id:"paginate-results"},"Paginate results"),(0,i.kt)("p",null,"The earlier example listing accounts in your tenant also has pagination implemented. By default, your requests will return a maximum of 250 records. To return more, you must implement pagination. To learn more about pagination, refer to ",(0,i.kt)("a",{parentName:"p",href:"/idn/api/standard-collection-parameters/#paginating-results"},"Paginating Results"),". "),(0,i.kt)("p",null,"You can use the SDK to implement pagination for your API, search, and transform requests' results. "),(0,i.kt)("p",null,"The pagination is implemented in this line: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const val = await Paginator.paginate(api, api.listAccounts, {limit: 100}, 10)\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"limit")," specifies the total number of results you can return, 100. The following unlabeled number, 10, refers to the ",(0,i.kt)("inlineCode",{parentName:"p"},"increment"),", the number of records per page. For example, changing the ",(0,i.kt)("inlineCode",{parentName:"p"},"limit"),' to 50 and the following "10" to 5 would change the request to return a total of 50 records, 5 at a time. '),(0,i.kt)("p",null,"You can also provide an ",(0,i.kt)("inlineCode",{parentName:"p"},"initialOffset")," value to specify the record number to start the request on. For example, you can provide add ",(0,i.kt)("inlineCode",{parentName:"p"},"{initialOffset: 11}")," to start getting accounts from 11 instead of 0. "),(0,i.kt)("p",null,"To find out whether an endpoint supports pagination, refer to its documentation. Any API supporting pagination lists the optional query parameters detailed in ",(0,i.kt)("a",{parentName:"p",href:"/idn/api/standard-collection-parameters/#paginating-results"},"Paginating Results"),"."),(0,i.kt)("h3",{id:"search"},"Search"),(0,i.kt)("p",null,"To try using the IDN ",(0,i.kt)("a",{parentName:"p",href:"/idn/api/v3/search-post"},"search functionality"),' along with pagination, copy this code into your "index.ts" file:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'const search = async () => {\n    let apiConfig = new Configuration()\n    let api = new SearchApi(apiConfig)\n    let search: Search = {\n        indices: [\n            "identities"\n        ],\n        query: {\n            query: "*"\n        },\n        sort: ["-name"]\n    }\n    const val = await Paginator.paginateSearchApi(api, search, 100, 1000)\n\n    for (const result of val.data) {\n        const castedResult: IdentityDocument = result\n        console.log(castedResult.name)\n    }\n    \n}\n')),(0,i.kt)("p",null,'This example returns 1000 identities, 100 at a time, and sorts them in descending order by name. You can also change the search pagination by changing "100" and "1000", respectively. '),(0,i.kt)("p",null,"The two main ways you can manipulate this example are to change the ",(0,i.kt)("inlineCode",{parentName:"p"},"indices")," or the ",(0,i.kt)("inlineCode",{parentName:"p"},"query"),". If you add ",(0,i.kt)("inlineCode",{parentName:"p"},'"access profiles"'),' to the indices, and the SDK will search access profiles too. If you change the query to "a*", the search will return all records starting with the letter "a". '),(0,i.kt)("p",null,"You can also change the sorting logic in the brackets next to ",(0,i.kt)("inlineCode",{parentName:"p"},"sort"),". "),(0,i.kt)("h2",{id:"get-started"},"Get started"),(0,i.kt)("p",null,"You can use this SDK to build new tools that extend your IDN platform and improve experiences across your organization. Use this guide to get started, and if you have questions, don't hesitate to reach out on the SailPoint Developer Community forum at ",(0,i.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/discuss"},"https://developer.sailpoint.com/discuss"),"!"))}c.isMDXComponent=!0}}]);