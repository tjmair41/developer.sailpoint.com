"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[59600],{19844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={id:"powershell-sdk",title:"PowerShell SDK",pagination_label:"PowerShell SDK",sidebar_label:"PowerShell",sidebar_position:3,sidebar_class_name:"powershellsdk",keywords:["powershell","sdk"],description:"Learn how to use the PowerShell SDK in this guide.",slug:"/tools/sdk/powershell",tags:["SDK"]},o=void 0,l={unversionedId:"tools/sdk/powershell-sdk",id:"tools/sdk/powershell-sdk",title:"PowerShell SDK",description:"Learn how to use the PowerShell SDK in this guide.",source:"@site/products/idn/tools/sdk/powershell.md",sourceDirName:"tools/sdk",slug:"/tools/sdk/powershell",permalink:"/idn/tools/sdk/powershell",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/tools/sdk/powershell.md",tags:[{label:"SDK",permalink:"/idn/tags/sdk"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1696346252,formattedLastUpdatedAt:"Oct 3, 2023",sidebarPosition:3,frontMatter:{id:"powershell-sdk",title:"PowerShell SDK",pagination_label:"PowerShell SDK",sidebar_label:"PowerShell",sidebar_position:3,sidebar_class_name:"powershellsdk",keywords:["powershell","sdk"],description:"Learn how to use the PowerShell SDK in this guide.",slug:"/tools/sdk/powershell",tags:["SDK"]},sidebar:"sdkSidebar",previous:{title:"Go SDK",permalink:"/idn/tools/sdk/go"},next:{title:"TypeScript SDK",permalink:"/idn/tools/sdk/typescript"}},s={},p=[{value:"Start using the PowerShell SDK",id:"start-using-the-powershell-sdk",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Setup",id:"setup",level:2},{value:"Install the SDK",id:"install-the-sdk",level:3},{value:"Manually Install the SDK",id:"manually-install-the-sdk",level:3},{value:"Configure the SDK",id:"configure-the-sdk",level:3},{value:"Manual Configuration",id:"manual-configuration",level:4},{value:"CLI assisted configuration",id:"cli-assisted-configuration",level:4},{value:"Environment variable configuration",id:"environment-variable-configuration",level:4},{value:"Get the default configuration",id:"get-the-default-configuration",level:3},{value:"Run an example request",id:"run-an-example-request",level:2},{value:"Run an API request",id:"run-an-api-request",level:3},{value:"Paginate results",id:"paginate-results",level:4},{value:"Search",id:"search",level:3},{value:"Paginate search results",id:"paginate-search-results",level:4},{value:"Transform",id:"transform",level:3},{value:"Get started",id:"get-started",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"start-using-the-powershell-sdk"},"Start using the PowerShell SDK"),(0,i.kt)("p",null,"Learn how to use the PowerShell SDK in this guide. The PowerShell SDK has some pre-built code examples you can use to learn how to build tools that can interact with IdentityNow (IDN)."),(0,i.kt)("p",null,"You can find the SDK and its examples in its GitHub repo ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/powershell-sdk"},"here"),"."),(0,i.kt)("p",null,"The PowerShell SDK includes the following functionality: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#run-an-api-request"},"APIs"),": "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"All ",(0,i.kt)("a",{parentName:"p",href:"/idn/api/v3"},"V3")," and ",(0,i.kt)("a",{parentName:"p",href:"/idn/api/beta"},"Beta")," APIs are available.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The following V2 APIs are available: "),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Collection"),(0,i.kt)("th",{parentName:"tr",align:null},"Endpoint"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Workgroups"),(0,i.kt)("td",{parentName:"tr",align:null},"GET Workgroup, PATCH Workgroup, DELETE Workgroup, GET Workgroups, POST Workgroups, GET Workgroup Members, POST Workgroup Members, GET Workgroup Connections, POST Bulk Delete Workgroups")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Organizations"),(0,i.kt)("td",{parentName:"tr",align:null},"GET Organization, PATCH Organization"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The following CC APIs are available: "),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Collection"),(0,i.kt)("th",{parentName:"tr",align:null},"Endpoint"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Accounts"),(0,i.kt)("td",{parentName:"tr",align:null},"GET Accounts, POST Remove Account")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Applications"),(0,i.kt)("td",{parentName:"tr",align:null},"GET Applications, GET Application, POST Application, POST Update Application, POST Delete Application, GET Application Access Profiles")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Connectors"),(0,i.kt)("td",{parentName:"tr",align:null},"GET Connectors, POST Connector, POST Delete Connector, GET Export Connector, POST Import Connector")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"User"),(0,i.kt)("td",{parentName:"tr",align:null},"POST Update User Permissions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Sources"),(0,i.kt)("td",{parentName:"tr",align:null},"POST Account Aggregation, GET Export Account Feed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"System"),(0,i.kt)("td",{parentName:"tr",align:null},"POST Refresh Identities"))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#search"},"Search"),": You can use IDN's search. To learn more about IDN's search, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://documentation.sailpoint.com/saas/help/search/index.html"},"Search"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#transform"},"Transforms"),": You can use transforms, configurable JSON objects that define easy ways to manipulate attribute data without your needing to write any code. To learn more about IDN's transforms, refer to ",(0,i.kt)("a",{parentName:"p",href:"/idn/docs/transforms"},"Transforms"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#paginate-results"},"Pagination"),": You can use the SDK's pre-built pagination functionality to paginate the responses to your SDK requests. To learn more about pagination, refer to ",(0,i.kt)("a",{parentName:"p",href:"/idn/api/standard-collection-parameters#paginating-results"},"Paginating Results"),"."))),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"You need the following to use the PowerShell SDK:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Your tenant name in IDN. To learn how to find it, refer to ",(0,i.kt)("a",{parentName:"p",href:"/idn/api/getting-started#find-your-tenant-name"},"Getting Started"),". The SDK will use this tenant name to connect to your IDN instance. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A PAT with a client secret and ID. To learn how to create one in IDN, refer to ",(0,i.kt)("a",{parentName:"p",href:"/idn/api/authentication#personal-access-tokens"},"Personal Access Tokens"),". The SDK will use this PAT to authenticate with the SailPoint APIs. "))),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"To set up your PowerShell SDK, follow these steps: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#install-the-sdk"},"Install the SDK")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#configure-the-sdk"},"Configure the SDK")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#get-the-default-configuration"},"Get the default configuration"))),(0,i.kt)("h3",{id:"install-the-sdk"},"Install the SDK"),(0,i.kt)("p",null,"Install the SDK with this command: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-PowerShell"},"Install-Module -Name PSSailpoint\n")),(0,i.kt)("p",null,'This command installs the SailPoint PowerShell SDK modules. You will be prompted to confirm that you are sure you want to install the modules from \'PSGallery\'. Enter "A" to say "Yes to All". '),(0,i.kt)("p",null,"If you already have a version of the PowerShell SDK installed, you can install a new version side-by-side with it by adding the ",(0,i.kt)("inlineCode",{parentName:"p"},"-Force")," parameter to the end of your ",(0,i.kt)("inlineCode",{parentName:"p"},"Install-Module")," commmand. "),(0,i.kt)("h3",{id:"manually-install-the-sdk"},"Manually Install the SDK"),(0,i.kt)("p",null,"The Powershell SDK can be installed manually on Windows when access to the powershell gallery is not available."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If you manually install the module on a machine without access to the powershell gallery, you will also need to manually install updates to the SDK")),(0,i.kt)("p",null,"To manually install the PowerShell module:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download the source code zip from the most recent release on ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/sailpoint-oss/powershell-sdk/releases"},"GitHub")),(0,i.kt)("li",{parentName:"ol"},"Open the ZIP file, then open then folder labeled ",(0,i.kt)("inlineCode",{parentName:"li"},"powershell-sdk-x.x.x")," with the ",(0,i.kt)("inlineCode",{parentName:"li"},"x.x.x")," representing the version you downloaded"),(0,i.kt)("li",{parentName:"ol"},"Extract the ",(0,i.kt)("inlineCode",{parentName:"li"},"PSSailpoint")," module folder inside to one of the following locations:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"To install for the Current user: ",(0,i.kt)("inlineCode",{parentName:"li"},"C:\\Users\\<username>\\Documents\\WindowsPowerShell\\Modules\\PSSailpoint")),(0,i.kt)("li",{parentName:"ul"},"To install for All users (requires Administrator privileges): ",(0,i.kt)("inlineCode",{parentName:"li"},"C:\\Program Files\\WindowsPowerShell\\Modules\\PSSailpoint")))),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"Import-Module PSSailpoint")," to import the module into the current session."),(0,i.kt)("li",{parentName:"ol"},"To validate the module is installed, run ",(0,i.kt)("inlineCode",{parentName:"li"},"Get-Module -ListAvailable PSSailpoint")," and verify that the module is listed. Additionally, you can run ",(0,i.kt)("inlineCode",{parentName:"li"},"Get-Command -Module PSSailpoint")," to see the available commands included in the module.")),(0,i.kt)("h3",{id:"configure-the-sdk"},"Configure the SDK"),(0,i.kt)("p",null,"To configure the SDK, create a configuration file or save your configuration as environment variables.\nYou can use any of the following ways to do so: "),(0,i.kt)("h4",{id:"manual-configuration"},"Manual Configuration"),(0,i.kt)("p",null,'One way to create a configuration file is to create a "config.yaml" file in your project and specify the following information in it: '),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'activeenvironment: example # the key that identifies the currently active environment\nauthtype: pat # currently only pat and pipeline are supported if the ENV VAR SAIL_AUTH_TYPE is configured to "pipeline" it will override this value\ncustomexporttemplatespath: "" # the path to the users custom export templates file if one is provided\ncustomsearchtemplatespath: "" # the path to the users custom search templates file if one is provided\ndebug: false # the debug setting  \nenvironments: # the configured environments  \n  example:\n    baseurl: https://example.api.identitynow.com\n    pat:\n      accesstoken: example-access-token\n      clientid: example-client-id\n      clientsecret: example-client-secret\n      expiry: example-access-token-expiry\n    tenanturl: https://example.identitynow.com\n')),(0,i.kt)("p",null,"You must specify the following information: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"activeenvironment"),': This key identifies the current active environment the SDK is connecting to. This environment name refers to your IDN tenant name. In the example, the key is "example". You must also make sure the environment name listed under ',(0,i.kt)("inlineCode",{parentName:"li"},"environments")," matches the ",(0,i.kt)("inlineCode",{parentName:"li"},"activeenvironment"),". "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"authtype"),': The authentication type. Currently only "pat" and "pipeline" are supported. Configuring ENV VAR SAIL_AUTH_TYPE to "pipeline" overrides this value. In the example, the authentication type is "pat". You must also make sure the authentication type listed under the environment name "example" matches the ',(0,i.kt)("inlineCode",{parentName:"li"},"authtype"),". "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"baseurl"),": This refers to the URL used to access the API of your IDN tenant. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tenanturl"),": This refers to the URL used to access your IDN tenant. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"clientsecret"),": The PAT's client secret. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"clientid"),": The PAT's client ID. ")),(0,i.kt)("p",null,"Here's an example: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'activeenvironment: devrel # the key that identifies the currently active environment\nauthtype: pat # currently only pat and pipeline are supported if the ENV VAR SAIL_AUTH_TYPE is configured to "pipeline" it will override this value\ncustomexporttemplatespath: "" # the path to the users custom export templates file if one is provided\ncustomsearchtemplatespath: "" # the path to the users custom search templates file if one is provided\ndebug: false # the debug setting  \nenvironments: # the configured environments \n  devrel:\n    baseurl: https://devrel.api.identitynow.com\n    pat:\n      accesstoken: example-access-token\n      clientid: g0567b766b413b22c05c66e75d532f1b\n      clientsecret: cabd0e950a7230b63c1ff45be33fb22065b382b6251a73c61177a8bb5482fcc7\n      expiry: example-access-token-expiry\n    tenanturl: https://devrel.identitynow.com\n')),(0,i.kt)("p",null,"You can also specify this optional information: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"customexporttemplatespath"),": Specifies the folder path to save your custom export templates file in. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"customsearchtemplatespath"),": Specifies the folder path to save your custom search templates file in."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"debug"),': The debug setting. By default, it\'s set to "false".'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accesstoken"),": The PAT's name. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expiry"),": The PAT's expiry date.")),(0,i.kt)("p",null,'Save your "config.yaml" file in a folder called ".sailpoint" in your home directory. The SDK will look for this file here when you use PowerShell to get the default configuration. '),(0,i.kt)("h4",{id:"cli-assisted-configuration"},"CLI assisted configuration"),(0,i.kt)("p",null,"Another way to create a configuration file is to use the SailPoint CLI. To learn how to use the SailPoint CLI to create a configuration file, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/sailpoint-cli#manual-configuration"},"Assisted Configuration"),"."),(0,i.kt)("h4",{id:"environment-variable-configuration"},"Environment variable configuration"),(0,i.kt)("p",null,"You can also store your configuration in environment variables. "),(0,i.kt)("p",null,"On ",(0,i.kt)("strong",{parentName:"p"},"Linux/Mac"),", export the following environment variables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"export SAIL_BASE_URL=https://{tenant}.api.identitynow.com\nexport SAIL_CLIENT_ID={clientID}\nexport SAIL_CLIENT_SECRET={clientSecret}\n")),(0,i.kt)("p",null,"To get your environment variables to persist across terminal sessions, add these exports to your shell profile, something like ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.bash_profile"),".\nOn ",(0,i.kt)("strong",{parentName:"p"},"Windows PowerShell"),", run the following commands: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-PowerShell"},"$env:SAIL_BASE_URL=https://{tenant}.api.identitynow.com\n$env:SAIL_CLIENT_ID={clientID}\n$env:SAIL_CLIENT_SECRET={clientSecret}\n")),(0,i.kt)("p",null,"To get your environment variables to persist across PowerShell sessions, use these commands instead: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-PowerShell"},"[System.Environment]::SetEnvironmentVariable('SAIL_BASE_URL','https://{tenant}.api.identitynow.com')\n[System.Environment]::SetEnvironmentVariable('SAIL_CLIENT_ID','{clientID}')\n[System.Environment]::SetEnvironmentVariable('SAIL_CLIENT_SECRET','clientSecret}')\n")),(0,i.kt)("h3",{id:"get-the-default-configuration"},"Get the default configuration"),(0,i.kt)("p",null,'If you manually created the "config.yaml" file, you can get the default configuration for your SDK in PowerShell. To get the default configuration, run this command: '),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-PowerShell"},"Get-DefaultConfiguration\n")),(0,i.kt)("p",null,'This command will look for your "config.yaml" file to get your authentication information. Your "config.yaml" file should be located in a folder called ".sailpoint" in your home directory, like in folder path example: "c:\\users\\adam.archer/.sailpoint\\config.yaml"'),(0,i.kt)("p",null,"When this command is successful, the SDK displays your configuration information. "),(0,i.kt)("p",null,'If the command is unsuccessful, the SDK outputs this message: "Configuration file not found at {folder path}. Please provide a configuration file or configure using PowerShell environment variables." '),(0,i.kt)("p",null,"To resolve this error, find the configuration file and copy it into the correct the specified folder path and run ",(0,i.kt)("inlineCode",{parentName:"p"},"Get-DefaultConfiguration")," again. "),(0,i.kt)("h2",{id:"run-an-example-request"},"Run an example request"),(0,i.kt)("p",null,"Once your SDK is installed and configured, you can start accessing the SDK's different functionalities. The SDK includes some prebuilt examples you can copy into your PowerShell instance to start learning how to use the SDK. "),(0,i.kt)("p",null,"Use the examples to learn how to do the following: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#run-an-api-request"},"Run an API request"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"[Paginate results]"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#search"},"Search"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"[Paginate search results]"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#transforms"},"Transform"))),(0,i.kt)("h3",{id:"run-an-api-request"},"Run an API request"),(0,i.kt)("p",null,"To start using the API, you can copy this example request into your PowerShell instance: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-PowerShell"},'$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)\n$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)\n$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored. Because requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)\n$Filters = \'sourceId eq "f4e73766efdf4dc6acdeed179606d694"\' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **identityId**: *eq*  **name**: *eq, in*  **nativeIdentity**: *eq, in*  **sourceId**: *eq, in*  **uncorrelated**: *eq* (optional)\n\n# Accounts List\ntry {\n    \n    Get-Accounts -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters\n\n} catch {\n    Write-Host $_\n    Write-Host ("Exception occurred when calling Invoke-ListAccounts: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))\n    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))\n}\n')),(0,i.kt)("p",null,'This example calls the Accounts API to list the accounts in your tenant that have the sourceId ""f4e73766efdf4dc6acdeed179606d694"". '),(0,i.kt)("p",null,"To narrow the results you return and define how many you can return, you can specify these parameters: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$Limit"),": The maximum number of records to return per request. The default is 250. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$Offset"),": The number of the first record to return with the request. The default is 0. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$Count"),": This boolean, if enabled, populates the ",(0,i.kt)("em",{parentName:"li"},"X-Total-Count")," response header with the number of results that would be returned if ",(0,i.kt)("inlineCode",{parentName:"li"},"limit")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"offset")," were ignored. Because requesting a total count can have a performance impact, it's not recommended to enable ",(0,i.kt)("inlineCode",{parentName:"li"},"$count")," if you aren't using it."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$Filters"),": You can filter results using the standard syntax described in ",(0,i.kt)("a",{parentName:"li",href:"/idn/api/standard-collection-parameters#filtering-results"},"Filtering Results"),". Filtering is supported for the following fields and operators:  ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"eq, in"),"  ",(0,i.kt)("inlineCode",{parentName:"li"},"identityId"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"eq"),"  ",(0,i.kt)("inlineCode",{parentName:"li"},"name"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"eq, in"),"  ",(0,i.kt)("inlineCode",{parentName:"li"},"nativeIdentity"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"eq, in"),"  ",(0,i.kt)("inlineCode",{parentName:"li"},"sourceId"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"eq, in"),"  ",(0,i.kt)("inlineCode",{parentName:"li"},"uncorrelated"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"eq")," ")),(0,i.kt)("p",null,'In the API request example, the limit is set to 250, the count is set to true, and the filters are set to filter for only accounts associated with the source with the ID "f4e73766efdf4dc6acdeed179606d694". '),(0,i.kt)("h4",{id:"paginate-results"},"Paginate results"),(0,i.kt)("p",null,"You can paginate your API or transform requests' results by using the syntax shown in this example: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-PowerShell"},'$Parameters = @{\n    "Filters" = \'name co "Andrew"\'\n}\n\n# Accounts List\ntry {\n\n    Invoke-Paginate -Function "Get-Accounts" -Increment 250 -Limit 1000 -InitialOffset 0 -Parameters $Parameters\n\n} catch {\n    Write-Host $_\n    Write-Host ("Exception occurred when calling {1}: {0}" -f ($_.ErrorDetails | ConvertFrom-Json), "Get-Accounts")\n    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))\n}\n')),(0,i.kt)("p",null,'This example gets accounts named "Andrew" from your tenant. It can get a maximum of 1000 accounts, the ',(0,i.kt)("inlineCode",{parentName:"p"},"Limit"),", it can get 250 accounts per page, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Increment"),", starting from the first record, the ",(0,i.kt)("inlineCode",{parentName:"p"},"initialOffset")," of 0. "),(0,i.kt)("p",null,"To paginate the results, you can specify these parameters:\n-",(0,i.kt)("inlineCode",{parentName:"p"},"Increment"),": The number of records to return per page.\n-",(0,i.kt)("inlineCode",{parentName:"p"},"Limit"),": The maximum number of records to return per request. The default is 250.\n-",(0,i.kt)("inlineCode",{parentName:"p"},"Offset"),": The number of the first record to return with the request. The default is 0. "),(0,i.kt)("p",null,"To find out whether an endpoint supports pagination, refer to its documentation. Any API supporting pagination lists the optional query parameters detailed in ",(0,i.kt)("a",{parentName:"p",href:"/idn/api/standard-collection-parameters/#paginating-results"},"Paginating Results"),"."),(0,i.kt)("h3",{id:"search"},"Search"),(0,i.kt)("p",null,"To start using the SDK to search IDN, you can copy this example into your PowerShell instance: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-PowerShell"},'$Json = @"\n{\n    "indices": [\n        "identities"\n    ],\n    "query": {\n        "query": "\\"john.doe\\"",\n        "fields": [\n        "name"\n        ]\n    }\n    }\n"@\n\n$Search = ConvertFrom-JsonToSearch -Json $Json\n\ntry {\n    Search-Post -Search $Search\n} catch {\n    Write-Host ("Exception occurred when calling Search-Post: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))\n    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))\n}\n')),(0,i.kt)("p",null,"This example request uses the ",(0,i.kt)("a",{parentName:"p",href:"/idn/api/v3/search-post"},"Post Search V3 API endpoint"),' to search your tenant for identities with the name "john.doe". '),(0,i.kt)("h4",{id:"paginate-search-results"},"Paginate search results"),(0,i.kt)("p",null,"To paginate search results, use the syntax shown in this example: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-PowerShell"},'$JSON = @"\n{\n    "indices": [\n        "identities"\n    ],\n    "query": {\n        "query": "*",\n        "fields": [\n        "name"\n        ]\n    },\n    "sort": [\n        "-displayName"\n    ]\n    }\n"@\n\n$Search = ConvertFrom-JsonToSearch -Json $JSON\n\ntry {\n\n    Invoke-PaginateSearch -Increment 50 -Limit 10000 -Search $Search\n\n} catch {\n    Write-Host $_\n    Write-Host ("Exception occurred when calling {1}: {0}" -f ($_.ErrorDetails | ConvertFrom-Json), "Paginate-Search")\n    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))\n}\n')),(0,i.kt)("p",null,"This example searches your IDN tenant for all identities and sorts them by their ",(0,i.kt)("inlineCode",{parentName:"p"},"displayName")," in descending order. The search returns a maximum of 1000 records, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Limit"),", and 50 records per page, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Increment"),".  "),(0,i.kt)("p",null,"To paginate the search results, you can specify these parameters:\n-",(0,i.kt)("inlineCode",{parentName:"p"},"Increment"),": The number of records to return per page.\n-",(0,i.kt)("inlineCode",{parentName:"p"},"Limit"),": The maximum number of records to return per request. The default is 250.\n-",(0,i.kt)("inlineCode",{parentName:"p"},"Offset"),": The number of the first record to return with the request. The default is 0. "),(0,i.kt)("h3",{id:"transform"},"Transform"),(0,i.kt)("p",null,"To start using the SDK to create, manage, and delete transforms, you can copy this example into your PowerShell instance: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-PowerShell"},'# Create transform\n$JSON = @"\n{\n    "name": "New Transform",\n    "type": "lookup",\n    "attributes" : {\n        "table" : {\n            "USA": "Americas",\n            "FRA": "EMEA",\n            "AUS": "APAC",\n            "default": "Unknown Region"\n        }\n    }\n}\n"@\n\n$Transform = ConvertFrom-JsonToTransform -Json $JSON\n\n try {\n    New-Transform -Transform $Transform\n} catch {\n    Write-Host ("Exception occurred when calling New-Transform: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))\n    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))\n}\n')),(0,i.kt)("p",null,"This example creates a new ",(0,i.kt)("a",{parentName:"p",href:"/idn/docs/transforms/operations/lookup"},"Lookup"),' transform named "New Transform" in your IDN tenant. The transform takes input 3-letter country codes and transforms them into their regions. '),(0,i.kt)("h2",{id:"get-started"},"Get started"),(0,i.kt)("p",null,"You can use this SDK to build new tools that extend your IDN platform and improve experiences across your organization. Use this guide to get started, and if you have questions, don't hesitate to reach out on the SailPoint Developer Community forum at ",(0,i.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/discuss"},"https://developer.sailpoint.com/discuss"),"!"))}d.isMDXComponent=!0}}]);