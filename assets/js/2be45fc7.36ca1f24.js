"use strict";(self.webpackChunkoptimus=self.webpackChunkoptimus||[]).push([[2743],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2440:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],o={},l=void 0,c={unversionedId:"rfcs/secret_management",id:"rfcs/secret_management",isDocsHomePage:!1,title:"secret_management",description:"- Feature Name: Secret Management",source:"@site/docs/rfcs/20211002_secret_management.md",sourceDirName:"rfcs",slug:"/rfcs/secret_management",permalink:"/optimus/docs/rfcs/secret_management",editUrl:"https://github.com/odpf/optimus/edit/master/docs/docs/rfcs/20211002_secret_management.md",tags:[],version:"current",lastUpdatedBy:"Arinda Arif",lastUpdatedAt:1637143042,formattedLastUpdatedAt:"11/17/2021",sidebarPosition:20211002,frontMatter:{}},p=[{value:"Project Config",id:"project-config",children:[]},{value:"Optimus CLI",id:"optimus-cli",children:[]},{value:"Using secrets without Optimus",id:"using-secrets-without-optimus",children:[]},{value:"Rotating project key",id:"rotating-project-key",children:[]},{value:"Drawbacks",id:"drawbacks",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Feature Name: Secret Management"),(0,i.kt)("li",{parentName:"ul"},"Status: draft"),(0,i.kt)("li",{parentName:"ul"},"Start Date: 2021-10-02"),(0,i.kt)("li",{parentName:"ul"},"Authors: Kush Sharma")),(0,i.kt)("h1",{id:"summary"},"Summary"),(0,i.kt)("p",null,"A lot of transformation operations require credentials to execute, there is a need to have a convenient way to save secrets and then access them in containers during the execution. This secret may also be needed in plugin adapters to compute dependencies/compile assets/etc before the actual transformation even begin. This is currently done using registering a secret to optimus so that it can be accessed by plugins and Kubernetes opaque secret, a single secret per plugin, getting mounted in the container(i.e. not at individual job level)."),(0,i.kt)("p",null,"This can be solved by allowing users to register secret from Optimus CLI as a key value pair, storing them by encrypting using a multi party encryption. There will be two party by default, Optimus server and the Optimus project. All clients will be treated within a project as a single party by default and will be able to access all registered secrets in same project."),(0,i.kt)("h1",{id:"technical-design"},"Technical Design"),(0,i.kt)("p",null,"To keep string literals as secret, it is a requirement Optimus keep them encrypted in database. To decrypt them, there will be two keys, one passed to Optimus server as a config value during startup and the other which clients will use to fetch registered secrets called ",(0,i.kt)("inlineCode",{parentName:"p"},"project key"),". Project key will itself be also a secret stored like any other secret in optimus server encrypted using Optimus server key. Each secret is a key value pair where key is an alpha numeric literal and value is base64 encoded string."),(0,i.kt)("p",null,"Project key will be initialised as part of project registration or project config update if it is not registered already(this is required to make project key creation backward compatible). "),(0,i.kt)("p",null,"The thing that will differentiate an ordinary project secret and this specific key is the prefix. Each of system level secret should be prefixed by ",(0,i.kt)("inlineCode",{parentName:"p"},"_OPTIMUS_<key name>"),". Optimus should also disallow anyone using this prefix to register their secrets. So when the project gets registered and Optimus server generates the project key, it will be encrypted by Optimus key and stored with the name ",(0,i.kt)("inlineCode",{parentName:"p"},"_OPTIMUS_<project_name>_ROOT"),". It will be used to encrypt all future secrets registered by users under this project."),(0,i.kt)("p",null,"Reason to keep project key in db is to allow users to create new secrets without requiring them to specify the project key each time."),(0,i.kt)("h3",{id:"project-config"},"Project Config"),(0,i.kt)("p",null,"Optional prerequisite to registering Secrets is configuring the Kubernetes cluster details where the containers will run. This will allow Optimus to create project key in the cluster namespace so that all the containers can use this key to decrypt, once the secrets are registered, as plain text. Although this is not a hard requirement and can be done by cluster admin manually as well. This is a one time operation per registered project."),(0,i.kt)("p",null,"Sample ",(0,i.kt)("inlineCode",{parentName:"p"},".optimus.yaml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"version: 1\nhost: localhost:9100\njob:\n  path: jobs\nconfig:\n  global:\n    environment: integration\n    kubernetes_host: x.x.x.x\n    kubernetes_namespace: optimus\n\n")),(0,i.kt)("h3",{id:"optimus-cli"},"Optimus CLI"),(0,i.kt)("p",null,"User interaction to manage a secret will start from CLI. Users can create/update/list/delete a secret as follows"),(0,i.kt)("h4",{id:"create"},"Create"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"optimus secret create <name> <value> ")," will take a secret name and a base64 encoded string as a pair. It will return the project key if this secret is the first secret registered within the project."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"One thing yet to be decided is, should we scope the secrets at namespace level or project level? (I think at project level)")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'optimus secret create <somename> --file="path"')," should read the base64 encoded file as value. Additional flag ",(0,i.kt)("inlineCode",{parentName:"p"},"--base64")," should support taking raw value and encode them for user."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Should we do the other way around? Take raw value by default and use a flag to accept base64 encoded value?")),(0,i.kt)("h4",{id:"delete"},"Delete"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"optimus secret delete")," to delete the secret"),(0,i.kt)("h4",{id:"update"},"Update"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"optimus secret update")," to update the secret value"),(0,i.kt)("h4",{id:"list"},"List"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"optimus secret list")," to list all created secrets in a project. List operation will print a digest of the secret and the time at which it was last updated. Digest should be a SHA hash of the encrypted string to simply visualize it as a signature when a secret is changed or the key gets rotated. Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"     NAME     |              DIGEST              |  DATE\n  SECRET_1    | 6c463e806738046ff3c78a08d8bd2b70 | 2021-10-06 02:02:02\n  SECRET_2    | 3aa788a21a76651c349ceeee76f1cb76 | 2021-10-06 06:02:02\n")),(0,i.kt)("h4",{id:"using-secrets"},"Using secrets"),(0,i.kt)("p",null,"Secrets can be used as part of the job spec config using macros with their names. This will work as aliasing the secret to be used in containers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"task: foo\nconfig:\n  do: this\n  dsn: {{ .secret.postgres_dsn }}\n")),(0,i.kt)("p",null,"One thing to note is currently we print all the container environment variables using ",(0,i.kt)("inlineCode",{parentName:"p"},"printenv")," command as debug. This should be removed after this RFC is merged to avoid exposing secrets in container logs. Job specification compilation will happen with all project secrets using the key passed by client when requesting the secret. This will allow everyone to request any secret but they can only get the original plain text string if they pass the correct key in the request."),(0,i.kt)("h4",{id:"accessing-secrets"},"Accessing secrets"),(0,i.kt)("p",null,"Secrets gets stored in db using a multi-party encryption. There will be two keys to get back the original plain text. One key that gets passed as env var when Optimus server gets initialized(currently we don't support rotating it.) Other key will be passed to containers as a PSK(pre shared key) which they will use to fetch the same secret as plain text. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"PSK in case of kubernetes will be created as k8s secret by Optimus if kubernetes cluster details are registered in namespace config.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"PSK in case we deploy these in vms will be manually saved inside the machine(although we don't support deploying optimus for vm transformations)"))),(0,i.kt)("p",null,"During a ",(0,i.kt)("inlineCode",{parentName:"p"},"RegisterInstance")," call, project key needs to be supplied as one of the field which along with job config/assets also compiles the secrets requested. Client container will get this key using a k8s secret mounted inside it as env variable. Key secret in k8s will have a fixed name ",(0,i.kt)("inlineCode",{parentName:"p"},"optimus-<project>-key")," inside the deployment namespace. "),(0,i.kt)("p",null,"If a client tries to extract these secrets as part of job assets/configs without passing a correct party key, job config template will still be compiled but with incorrect key which will generate undefined string as the value."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"All jobs will have access to all the secrets registered for a project.")),(0,i.kt)("p",null,"Because Optimus is deployed in trusted network, we don't need TLS for now to fetch job secrets from the container but once Optimus is deployed as a service on edge network, this communication should only happen over TLS. "),(0,i.kt)("h3",{id:"using-secrets-without-optimus"},"Using secrets without Optimus"),(0,i.kt)("p",null,"If someone wants to pass an exclusive secret without registering it with Optimus first, that should also be possible. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In case of k8s: this can be done using a new field introduced in Job spec as ",(0,i.kt)("inlineCode",{parentName:"li"},"metadata")," which will allow users to mount arbitrary secrets inside the container available in the same k8s namespace.")),(0,i.kt)("h3",{id:"rotating-project-key"},"Rotating project key"),(0,i.kt)("p",null,"It is not very uncommon for users to expose their key, because all secrets share the same private key, it should be possible to rotate it when needed. For now we will support rotating project key only."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"optimus secret rotate <old_key> [<new_key>]")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"old_key")," is the previous project key, it could actually be Optimus key as well(when used by admins) because project secrets can be decrypted via it. It is optional to pass ",(0,i.kt)("inlineCode",{parentName:"p"},"new_key")," and if in case it is omitted, Optimus will generate and return the new key. If k8s config is registered, it should update the k8s deployment namespace opaque secret as well."),(0,i.kt)("p",null,"This step is internally loading all the secrets that belong to a project to memory, decrypting it with the old_key, and if passed, encrypting it with the new key(else generate it by itself). Rotation of secrets should be done in a single db transaction."),(0,i.kt)("h3",{id:"drawbacks"},"Drawbacks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Secrets although can be registered as many as user want, all of them will be encrypted using a single key by default. That means users can access all of them if needed within a project."),(0,i.kt)("li",{parentName:"ul"},"If Optimus key is exposed, all project secrets will be exposed."),(0,i.kt)("li",{parentName:"ul"},"This design will be a breaking change compare to what we support currently and will require all of the secrets to be registered again.")),(0,i.kt)("h1",{id:"unresolved-questions"},"Unresolved questions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Secret should be created at project level or namespace level?"),(0,i.kt)("li",{parentName:"ul"},"Should we use a symmetric key as a project key, keep it in Optimus database or a public/private key and private key is only ever known to containers/users? If we do decide to use a private/public key pair, only additional advantage we will have is we will not be storing project's private key because public key should be enough to encrypt all future secrets.")),(0,i.kt)("h1",{id:"footnotes"},"Footnotes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Multi party encryption via ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/FiloSottile/age"},"age"))))}d.isMDXComponent=!0}}]);