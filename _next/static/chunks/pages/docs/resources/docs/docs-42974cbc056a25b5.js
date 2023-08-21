(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6474],{5940:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/resources/docs/docs",function(){return n(1281)}])},1281:function(e,s,n){"use strict";n.r(s),n.d(s,{__N_SSG:function(){return p}});var o=n(5893),t=n(1151),a=n(7206),r=n(1575),i=n(6600);function l(e){let s=Object.assign({h1:"h1",code:"code",p:"p",h2:"h2",pre:"pre",hr:"hr",h3:"h3"},(0,t.ah)(),e.components),{Intro:n,Properties:l,Property:p}=s;return n||c("Intro",!0),l||c("Properties",!0),p||c("Property",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.h1,{children:["Docs ",(0,o.jsx)(s.code,{children:"docs"})]}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)(s.p,{children:"The docs resource allows you to embed documentation and guides into your blueprints.\nThe docs are authored in markdown and can be enriched using React components and html."}),(0,o.jsxs)(s.p,{children:["Once the docs resource is created, the content will be available at ",(0,o.jsx)(s.code,{children:"http://<resource-name>.docs.jumppad.dev:3000"}),"."]})]}),"\n",(0,o.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n",(0,o.jsxs)(l,{children:[(0,o.jsx)(p,{name:"network",type:"#network",required:"true",value:"",children:(0,o.jsx)(s.p,{children:"The network to attach the docs to."})}),(0,o.jsx)(p,{name:"port",type:"#port",value:"3000",children:(0,o.jsx)(s.p,{children:"The port to expose the docs on."})}),(0,o.jsx)(p,{name:"image",type:"#image",value:"ghcr.io/jumppad-labs/docs:v0.4.0",children:(0,o.jsx)(s.p,{children:"The Docker image to use for the docs container."})}),(0,o.jsxs)(p,{name:"content",type:"[]book",required:"true",value:"",children:[(0,o.jsx)(s.p,{children:"A list of books to include in the docs."}),(0,o.jsx)(s.pre,{language:"hcl",code:"content = [\n  resource.book.introduction,\n  module.course.output.book\n]\n",children:(0,o.jsx)(s.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-color-text)">content </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">  resource</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">book</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">introduction,</span></span>\n<span><span style="color: var(--shiki-color-text)">  module</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">course</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">output</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">book</span></span>\n<span><span style="color: var(--shiki-color-text)">]</span></span>\n<span></span>'})})]}),(0,o.jsx)(p,{name:"logo",type:"#logo",value:"",children:(0,o.jsx)(s.p,{children:"Override the default logo with a custom one."})}),(0,o.jsx)(p,{name:"assets",type:"string",value:"",children:(0,o.jsx)(s.p,{children:"The path on the host to an assets folder that will be available at the `/assets' path of the docs."})}),(0,o.jsx)(p,{name:"fqdn",type:"string",value:"",readonly:!0,children:(0,o.jsx)(s.p,{children:"The name of the resulting docs container."})})]}),"\n",(0,o.jsx)(a.default,{}),"\n",(0,o.jsx)(r.default,{}),"\n",(0,o.jsx)(i.default,{}),"\n",(0,o.jsx)(s.hr,{}),"\n",(0,o.jsx)(s.h3,{children:"Logo"}),"\n",(0,o.jsx)(s.p,{children:"Logo defines a logo image to use in the docs."}),"\n",(0,o.jsxs)(l,{children:[(0,o.jsx)(p,{name:"url",type:"string",required:"true",value:"",children:(0,o.jsx)(s.p,{children:"The url to the logo image."})}),(0,o.jsx)(p,{name:"width",type:"int",required:"true",value:"",children:(0,o.jsx)(s.p,{children:"The width of the logo image in pixels."})}),(0,o.jsx)(p,{name:"height",type:"int",required:"true",value:"",children:(0,o.jsx)(s.p,{children:"The height of the logo image in pixels."})})]}),"\n",(0,o.jsx)(s.hr,{}),"\n",(0,o.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(s.pre,{language:"hcl",code:'resource "docs" "docs" {\n  network {\n    id = resource.network.main.id\n  }\n\n  image {\n    name = "ghcr.io/jumppad-labs/docs:v0.4.0"\n  }\n\n  logo {\n    url = "https://mycompany.com/logo.png"\n    width = 32\n    height = 32\n  }\n\n  content = [\n    module.course.output.book\n  ]\n\n assets = "${dir()}/assets"\n}\n',children:(0,o.jsx)(s.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-token-keyword)">resource</span><span style="color: var(--shiki-token-string-expression)"> &quot;docs&quot; &quot;docs&quot;</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">network</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    id </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> resource</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">network</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">main</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">id</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">image</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    name </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;ghcr.io/jumppad-labs/docs:v0.4.0&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">logo</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    url </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;https://mycompany.com/logo.png&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">    width </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">32</span></span>\n<span><span style="color: var(--shiki-color-text)">    height </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">32</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">  content </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">    module</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">course</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">output</span><span style="color: var(--shiki-token-constant)">.</span><span style="color: var(--shiki-color-text)">book</span></span>\n<span><span style="color: var(--shiki-color-text)">  ]</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)"> assets </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;</span><span style="color: var(--shiki-token-keyword)">${</span><span style="color: var(--shiki-token-function)">dir</span><span style="color: var(--shiki-color-text)">()</span><span style="color: var(--shiki-token-keyword)">}</span><span style="color: var(--shiki-token-string-expression)">/assets&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'})})]})}var p=!0;function c(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}s.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,o.jsx)(s,Object.assign({},e,{children:(0,o.jsx)(l,e)})):l(e)}},1575:function(e,s,n){"use strict";n.r(s),n.d(s,{__N_SSG:function(){return r}});var o=n(5893),t=n(1151);function a(e){let s=Object.assign({hr:"hr",h2:"h2",p:"p",code:"code",pre:"pre"},(0,t.ah)(),e.components),{Properties:n,Property:a}=s;return n||i("Properties",!0),a||i("Property",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.hr,{}),"\n",(0,o.jsx)(s.h2,{id:"image",children:"image"}),"\n",(0,o.jsx)(s.p,{children:"Image defines a Docker image used when creating this container. An Image can be stored in a public or a private repository."}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)(a,{name:"name",type:"string",required:"true",value:"",children:(0,o.jsxs)(s.p,{children:["Name of the image to use when creating the container, can either be the full canonical name or short name for Docker official images.\ne.g. ",(0,o.jsx)(s.code,{children:"consul:v1.6.1"})," or ",(0,o.jsx)(s.code,{children:"docker.io/consul:v1.6.1"}),"."]})}),(0,o.jsx)(a,{name:"username",type:"string",required:"false",value:"",children:(0,o.jsx)(s.p,{children:"Username to use when connecting to a private image repository"})}),(0,o.jsxs)(a,{name:"password",type:"string",required:"false",value:"",children:[(0,o.jsx)(s.p,{children:"Password to use when connecting to a private image repository, for both username and password interpolated environment variables can be used\nin place of static values."}),(0,o.jsx)(s.pre,{language:"hcl",code:'image {\n  name = "myregistry.io/myimage:latest"\n  username = env("REGISTRY_USERNAME")\n  password = env("REGISTRY_PASSWORD")\n}\n',children:(0,o.jsx)(s.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-token-keyword)">image</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  name </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;myregistry.io/myimage:latest&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">  username </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> env(</span><span style="color: var(--shiki-token-string-expression)">&quot;REGISTRY_USERNAME&quot;</span><span style="color: var(--shiki-color-text)">)</span></span>\n<span><span style="color: var(--shiki-color-text)">  password </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> env(</span><span style="color: var(--shiki-token-string-expression)">&quot;REGISTRY_PASSWORD&quot;</span><span style="color: var(--shiki-color-text)">)</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'})})]})]})]})}var r=!0;function i(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}s.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,o.jsx)(s,Object.assign({},e,{children:(0,o.jsx)(a,e)})):a(e)}},7206:function(e,s,n){"use strict";n.r(s),n.d(s,{__N_SSG:function(){return r}});var o=n(5893),t=n(1151);function a(e){let s=Object.assign({hr:"hr",h2:"h2",p:"p",code:"code",pre:"pre"},(0,t.ah)(),e.components),{Properties:n,Property:a}=s;return n||i("Properties",!0),a||i("Property",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.hr,{}),"\n",(0,o.jsx)(s.h2,{id:"network_attachment",children:"network_attachment"}),"\n",(0,o.jsx)(s.p,{children:"Network attachment defines a network to which the container is attached."}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsxs)(a,{name:"id",type:"string",required:"true",value:"",children:[(0,o.jsxs)(s.p,{children:["ID of the network to attach the container to, specified in reference format. e.g. to attach to a network called ",(0,o.jsx)(s.code,{children:"cloud"})]}),(0,o.jsx)(s.pre,{language:"hcl",code:'network {\n  id = "network.cloud"\n}\n',children:(0,o.jsx)(s.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-token-keyword)">network</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  id </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;network.cloud&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'})})]}),(0,o.jsx)(a,{name:"ip_address",type:"string",required:"false",value:"",children:(0,o.jsx)(s.p,{children:"Static IP address to assign container for the network, the ip address must be within range defined by the network subnet.\nIf this parameter is omitted an IP address will be automatically assigned."})}),(0,o.jsxs)(a,{name:"aliases",type:"[]string",required:"false",value:"",children:[(0,o.jsxs)(s.p,{children:["Aliases allow alternate names to specified for the container. Aliases can be used to reference a container across the network, the container\nwill respond to ping and other network resolution using the primary assigned name ",(0,o.jsx)(s.code,{children:"[name].container.shipyard.run"})," and the aliases."]}),(0,o.jsx)(s.pre,{language:"hcl",code:'network {\n  name    = "network.cloud"\n  aliases = [\n    "alt1.container.jumppad.dev", \n    "alt2.container.jumppad.dev"\n  ]\n}\n',children:(0,o.jsx)(s.code,{className:"language-hcl",children:'<span><span style="color: var(--shiki-token-keyword)">network</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">  name    </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;network.cloud&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">  aliases </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-string-expression)">&quot;alt1.container.jumppad.dev&quot;</span><span style="color: var(--shiki-color-text)">, </span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-string-expression)">&quot;alt2.container.jumppad.dev&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">  ]</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'})})]}),(0,o.jsx)(a,{name:"name",type:"string",required:"false",value:"",readonly:!0,children:(0,o.jsx)(s.p,{children:"Name will equal the name of the network as created by jumppad."})})]})]})}var r=!0;function i(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}s.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,o.jsx)(s,Object.assign({},e,{children:(0,o.jsx)(a,e)})):a(e)}},6600:function(e,s,n){"use strict";n.r(s),n.d(s,{__N_SSG:function(){return r}});var o=n(5893),t=n(1151);function a(e){let s=Object.assign({hr:"hr",h2:"h2",p:"p"},(0,t.ah)(),e.components),{Properties:n,Property:a}=s;return n||i("Properties",!0),a||i("Property",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.hr,{}),"\n",(0,o.jsx)(s.h2,{id:"port",children:"port"}),"\n",(0,o.jsx)(s.p,{children:"A port stanza defines host to container communications"}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)(a,{name:"local",type:"string",required:"true",value:"",children:(0,o.jsx)(s.p,{children:"The local port in the container."})}),(0,o.jsx)(a,{name:"host",type:"string",required:"true",value:"",children:(0,o.jsx)(s.p,{children:"The host port to map the local port to."})}),(0,o.jsx)(a,{name:"protocol",type:"string",required:"false",value:"",children:(0,o.jsx)(s.p,{children:'The protocol to use when exposing the port, can be "tcp", or "udp".'})}),(0,o.jsx)(a,{name:"open_in_browser",type:"string",required:"false",value:"/",children:(0,o.jsx)(s.p,{children:"Should a browser window be automatically opened when this resource is created. Browser windows will open at the path specified by this property."})})]})]})}var r=!0;function i(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}s.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,o.jsx)(s,Object.assign({},e,{children:(0,o.jsx)(a,e)})):a(e)}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=5940)}),_N_E=e.O()}]);