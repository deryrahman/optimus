(self.webpackChunkoptimus=self.webpackChunkoptimus||[]).push([[436],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6154:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],l={id:"configuration",title:"Configurations"},s=void 0,p={unversionedId:"getting-started/configuration",id:"getting-started/configuration",isDocsHomePage:!1,title:"Configurations",description:"Optimus can be configured with .optimus.yaml file. An example of such is:",source:"@site/docs/getting-started/configuration.md",sourceDirName:"getting-started",slug:"/getting-started/configuration",permalink:"/optimus/getting-started/configuration",editUrl:"https://github.com/odpf/optimus/edit/master/docs/docs/getting-started/configuration.md",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1628670938,formattedLastUpdatedAt:"8/11/2021",frontMatter:{id:"configuration",title:"Configurations"},sidebar:"docsSidebar",previous:{title:"Installation",permalink:"/optimus/getting-started/installation"},next:{title:"Using Optimus to create a Job",permalink:"/optimus/guides/create-job"}},c=[],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Optimus can be configured with ",(0,o.kt)("inlineCode",{parentName:"p"},".optimus.yaml")," file. An example of such is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'version: 1\n\n# used to connect optimus service\nhost: localhost:9100 \n\njobs:\n  # folder where job specifications are stored\n  path: "job"\n\ndatastore:\n  # optimus is capable of supporting multiple datastores\n  type: bigquery\n  # path where resource spec for BQ are stored\n  path: "bq"\n\n# project variables usable in specifications\nconfig:\n  global:{}\n  local:{}\n\n# for configuring optimus service locally\nserve:\n  \n  # port to listen on\n  port: 9100\n  \n  # host to listen on\n  host: localhost\n  \n  # this gets injected in compiled dags to reach back out to optimus service\n  # when they run\n  ingress_host: optimus.example.io:80\n  \n  # 32 char hash used for encrypting secrets\n  app_key: Yjo4a0jn1NvYdq79SADC/KaVv9Wu0Ffc\n  \n  # database configurations\n  db:\n    # database connection string\n    dsn: postgres://user:password@localhost:5432/database?sslmode=disable\n    \n    max_idle_connection: 5\n    max_open_connection: 10\n\n# logging configuration\nlog:\n  # debug, info, warning, error, fatal - default \'info\'\n  level: debug  \n\n')),(0,o.kt)("p",null,"This configuration file should not be checked in version control. All the configs can also be passed as environment\nvariables using ",(0,o.kt)("inlineCode",{parentName:"p"},"OPTIMUS_<CONFIGNAME>")," convention, for example to set client host ",(0,o.kt)("inlineCode",{parentName:"p"},"OPTIMUS_HOST=localhost:9100")," to set\ndatabase connection string ",(0,o.kt)("inlineCode",{parentName:"p"},"OPTIMUS_SERVE_DB_DSN=postgres://dbconenctionurl"),"."),(0,o.kt)("p",null,"Assuming the following configuration layout:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"host: localhost:9100\nserve:\n  port: 9100\n  app_key: randomhash\n")),(0,o.kt)("p",null,"Key ",(0,o.kt)("inlineCode",{parentName:"p"},"host")," can be set as an environment variable by upper-casing its path, using ",(0,o.kt)("inlineCode",{parentName:"p"},"_")," as the\npath delimiter and prefixing with ",(0,o.kt)("inlineCode",{parentName:"p"},"OPTIMUS_"),":"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"serve.port")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"OPTIMUS_SERVE_PORT=9100"),"\nor:\n",(0,o.kt)("inlineCode",{parentName:"p"},"host")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"OPTIMUS_HOST=localhost:9100")),(0,o.kt)("p",null,"Environment variables always override values from the configuration file. Here are some more examples:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Configuration key"),(0,o.kt)("th",{parentName:"tr",align:null},"Environment variable"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"host"),(0,o.kt)("td",{parentName:"tr",align:null},"OPTIMUS_HOST")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"serve.app_key"),(0,o.kt)("td",{parentName:"tr",align:null},"OPTIMUS_SERVE_APP_KEY")))),(0,o.kt)("p",null,"App key is used to encrypt credentials and can be randomly generated using"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"head -c 50 /dev/random | base64\n")),(0,o.kt)("p",null,"Just take the first 32 characters of the string."),(0,o.kt)("p",null,"Configuration file can be stored in following locations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./\n<exec>/\n~/.config/\n~/.optimus/\n")))}d.isMDXComponent=!0}}]);