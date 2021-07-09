(self.webpackChunkoptimus=self.webpackChunkoptimus||[]).push([[237],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(f,i(i({ref:t},l),{},{components:n})):o.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8821:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i=["components"],p={id:"adding-hook",title:"Adding hook to a Job"},s=void 0,c={unversionedId:"guides/adding-hook",id:"guides/adding-hook",isDocsHomePage:!1,title:"Adding hook to a Job",description:"There might be a certain operations that you might want to run before or after the Job.",source:"@site/docs/guides/adding-hook.md",sourceDirName:"guides",slug:"/guides/adding-hook",permalink:"/optimus/guides/adding-hook",editUrl:"https://github.com/odpf/optimus/edit/master/docs/docs/guides/adding-hook.md",version:"current",lastUpdatedBy:"Kush Sharma",lastUpdatedAt:1625839931,formattedLastUpdatedAt:"7/9/2021",frontMatter:{id:"adding-hook",title:"Adding hook to a Job"},sidebar:"docsSidebar",previous:{title:"Using Optimus to create a Job",permalink:"/optimus/guides/create-job"},next:{title:"Create bigquery dataset",permalink:"/optimus/guides/create-bigquery-dataset"}},l=[],u={toc:l};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There might be a certain operations that you might want to run before or after the Job.\nPlease go through ",(0,a.kt)("a",{parentName:"p",href:"/optimus/concepts/overview"},"concepts")," to know more about it."),(0,a.kt)("p",null,"In order to add a hook to an existing Job, run the following command and answer the\ncorresponding prompts:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ ./optimus create hook\n? Select a Job example_job\n? Which hook to run? transporter\n? Filter expression for extracting transformation rows? event_timestamp >= '{{.DSTART}}' \n  AND event_timestamp < '{{.DEND}}'\n")),(0,a.kt)("p",null,"With the above prompt, we're adding the ",(0,a.kt)("em",{parentName:"p"},"transporter")," hook ",(0,a.kt)("em",{parentName:"p"},"post")," the execution of\nprimary job. Filter expression configuration is specific to a transporter hook,\nand it might be different for other hooks."),(0,a.kt)("p",null,"After this, existing job.yaml file will get updated with the new hook config, and\nthe job specification would look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"version: 1\nname: example_job\nowner: example@example.com\ndescription: example job to demonstrate hook\nschedule:\n  start_date: \"2021-02-18\"\n  interval: 0 3 * * *\nbehavior:\n  depends_on_past: false\n  catch_up: true\ntask:\n  name: bq2bq\n  config:\n    DATASET: data\n    LOAD_METHOD: APPEND\n    PROJECT: example\n    SQL_TYPE: STANDARD\n    TABLE: hello_table\n  window:\n    size: 24h\n    offset: \"0\"\n    truncate_to: d\nlabels:\n  orchestrator: optimus\ndependencies: []\nhooks:\n- name: transporter\n  config:\n    BQ_DATASET: '{{.TASK__DATASET}}' # inherited from task configs\n    BQ_PROJECT: '{{.TASK__PROJECT}}'\n    BQ_TABLE: '{{.TASK__TABLE}}'\n    FILTER_EXPRESSION: 'event_timestamp >= \"{{.DSTART}}\" AND event_timestamp < \"{{.DEND}}\"'\n    KAFKA_TOPIC: optimus_example-data-hello_table\n    PRODUCER_CONFIG_BOOTSTRAP_SERVERS: '{{.GLOBAL__TRANSPORTER_KAFKA_BROKERS}}'\n    PROTO_SCHEMA: example.data.HelloTable\n    STENCIL_URL: '{{.GLOBAL__TRANSPORTER_KAFKA_BROKERS}}' # will be defined as global config\n")),(0,a.kt)("p",null,"Now to finish this, create a commit and push changes to target repository.\nThe gitlab pipeline is idempotent and hence Optimus will handle the new\nspecifications accordingly."))}d.isMDXComponent=!0}}]);