(this.webpackJsonpmysite=this.webpackJsonpmysite||[]).push([[6],{172:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(5),a=n(21),o=n(0),i=function(e){var t=e.data;return Object(o.jsx)("article",{className:"degree-container",children:Object(o.jsxs)("header",{children:[Object(o.jsx)("h4",{className:"degree",children:t.degree}),Object(o.jsxs)("p",{className:"school",children:[Object(o.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},s=function(e){var t=e.data;return Object(o.jsxs)("div",{className:"education",children:[Object(o.jsx)("div",{className:"link-to",id:"education"}),Object(o.jsx)("div",{className:"title",children:Object(o.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(o.jsx)(i,{data:e},e.school)}))]})};s.defaultProps={data:[]};var l=s,u=function(e){var t=e.data;return Object(o.jsxs)("article",{className:"jobs-container",children:[Object(o.jsxs)("header",{children:[Object(o.jsxs)("h4",{children:[Object(o.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(o.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(o.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(o.jsx)("li",{children:e},e)}))})]})},b=function(e){var t=e.data;return Object(o.jsxs)("div",{className:"experience",children:[Object(o.jsx)("div",{className:"link-to",id:"experience"}),Object(o.jsx)("div",{className:"title",children:Object(o.jsx)("h3",{children:"Experience"})}),t.map((function(e){return Object(o.jsx)(u,{data:e},e.company)}))]})};b.defaultProps={data:[]};var m=b;function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e){return(j="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){return!t||"object"!==j(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var c=y(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return h(this,n)}}var g=n(57),v=n(56),O=function(e){var t=e.handleClick,n=e.active,r=e.label;return Object(o.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:function(){return t(r)},children:r})},w=function(e){var t=e.data,n=e.categories,r=t.category,c=t.competency,a=t.title,i={background:n.filter((function(e){return r.includes(e.name)})).map((function(e){return e.color}))[0]},s=Object(v.a)(Object(v.a)({},i),{},{width:"".concat(String(Math.min(100,Math.max(c/5*100,0))),"%")});return Object(o.jsxs)("div",{className:"skillbar clearfix",children:[Object(o.jsx)("div",{className:"skillbar-title",style:i,children:Object(o.jsx)("span",{children:a})}),Object(o.jsx)("div",{className:"skillbar-bar",style:s}),Object(o.jsxs)("div",{className:"skill-bar-percent",children:[c," / 5"]})]})};w.defaultProps={categories:[]};var x=w,k=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(a,e);var t,n,r,c=f(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=c.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return Object(v.a)(Object(v.a)({},n),{},Object(g.a)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(v.a)(Object(v.a)({},e),{},Object(g.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=a,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(o.jsx)(x,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(o.jsx)(O,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(o.jsxs)("div",{className:"skills",children:[Object(o.jsx)("div",{className:"link-to",id:"skills"}),Object(o.jsxs)("div",{className:"title",children:[Object(o.jsx)("h3",{children:"Skills"}),Object(o.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),Object(o.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(o.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&p(t.prototype,n),r&&p(t,r),a}(r.Component);k.defaultProps={skills:[],categories:[]};var S=k,P=function(e){var t=e.data,n=e.last;return Object(o.jsxs)("li",{className:"course-container",children:[Object(o.jsxs)("a",{href:t.link,children:[Object(o.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),Object(o.jsx)("p",{className:"course-name",children:t.title})]}),!n&&Object(o.jsx)("div",{className:"course-dot",children:Object(o.jsx)("p",{className:"course-name",children:" \u2022"})})]})};P.defaultProps={last:!1};var N=P,D=function(e){var t,n=e.data;return Object(o.jsxs)("div",{className:"courses",children:[Object(o.jsx)("div",{className:"link-to",id:"courses"}),Object(o.jsx)("div",{className:"title",children:Object(o.jsx)("h3",{children:"Selected Courses"})}),Object(o.jsx)("ul",{className:"course-list",children:(t=n,t.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(e,n){return Object(o.jsx)(N,{data:e,last:n===t.length-1},e.title)})))})]})};D.defaultProps={data:[]};var C=D,L=function(){return Object(o.jsxs)("div",{className:"references",children:[Object(o.jsx)("div",{className:"link-to",id:"references"}),Object(o.jsx)("div",{className:"title",children:Object(o.jsx)(c.b,{to:"/contact",children:Object(o.jsx)("h3",{children:"References are available upon request"})})})]})},E=[{title:"How to build your website with HTML5 and CSS3",number:"Cs 001",link:"https://www.arabclassroom.com/modules/1",university:""},{title:"Simplify JavaScript programming with jQuery",number:"CS 002",link:"https://www.arabclassroom.com/modules/2",university:""},{title:"Make Bootstrap handy",number:"CS 003",link:"https://www.arabclassroom.com/modules/3",university:"Stanford"},{title:"Developing your website with PHP and MySQL",number:"CS 004",link:"https://www.arabclassroom.com/modules/4",university:""},{title:"Discover the PHP Laravel framework",number:"CS 005",link:"https://www.arabclassroom.com/modules/5",university:""},{title:"how to program with #C",number:"CS 006",link:"https://www.arabclassroom.com/modules/6",university:""},{title:"Learn ASP.NET MVC",number:"CS 007",link:"https://www.arabclassroom.com/modules/7",university:""},{title:"Developing web applications using Angular",number:"EE 008",link:"https://www.arabclassroom.com/modules/8",university:"Stanford"},{title:"programming with Python",number:"CS 009",link:"https://www.arabclassroom.com/modules/9",university:""},{title:"Get started with React",number:"Cs 010",link:"https://www.arabclassroom.com/modules/10",university:""},{title:"Advanced Programming",number:"CS 011",link:"https://www.arabclassroom.com/modules/11",university:""}],A=[{school:"higher institute of data processing",degree:"Master in information system security",link:"#",year:2010},{school:"FSEG Sfax",degree:"master degree in computer science applied to management",link:"http://www.fsegs.rnu.tn/",year:2001}],W=[{company:"Arabclassroom",position:"Co-founder",link:"https://www.arabclassroom.com",daterange:"January 2018 - Present",points:["an online learning platform, containing distance courses, complete courses, with diplomas obtained at the end of projects and passing evaluations, the platform is intended for people who want to learn with the Arabic language"]},{company:"Oumouri",position:"Co-founder",link:"http://www.oumouri.tn",daterange:"April 2017 - Present",points:["an advertisements website."]},{company:"Florakef",position:"Consultant",link:"http://www.florakef.com",daterange:"September 2011 - 2018",points:["a site that sells plants and flowers"]}],R=n(17);var J=n(24);var M,T=[{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:4,category:["Web Development","Javascript"]},{title:"React",competency:3,category:["Web Development","Javascript"]},{title:"Bash",competency:2,category:["Tools","Languages"]},{title:"Amazon Web Services",competency:4,category:["Web Development","Tools"]},{title:"Heroku",competency:2,category:["Web Development","Tools"]},{title:"MongoDB",competency:3,category:["Web Development","Databases"]},{title:"Angular",competency:2,category:["Web Development"]},{title:"PostgreSQL/SQLite3/SQL",competency:4,category:["Web Development","Databases","Languages"]},{title:"Express.JS",competency:3,category:["Web Development","Javascript"]},{title:"Flask",competency:5,category:["Web Development","Python"]},{title:"Git/Mercurial",competency:4,category:["Tools"]},{title:"Kubernetes",competency:3,category:["Tools","Data Engineering"]},{title:"Google Cloud Compute",competency:2,category:["Tools","Web Development"]},{title:"Numpy",competency:4,category:["Data Science","Data Engineering","Python"]},{title:"Jupyter",competency:3,category:["Data Science","Python"]},{title:"Typescript",competency:1,category:["Web Development","Languages","Javascript"]},{title:"HTML + SASS/SCSS/CSS",competency:4,category:["Web Development","Languages"]},{title:"Python",competency:5,category:["Languages","Python"]},{title:"C++",competency:3,category:["Languages"]},{title:"Julia",competency:2,category:["Languages"]},{title:"MATLAB",competency:2,category:["Languages"]},{title:"GraphQL",competency:2,category:["Web Development","Databases"]},{title:"Pandas",competency:5,category:["Data Engineering","Data Science","Python"]},{title:"Matplotlib",competency:3,category:["Data Engineering","Data Science","Python"]},{title:"Scikit-Learn",competency:4,category:["Data Engineering","Data Science","Python"]},{title:"Laravel",competency:4,category:["Web Development"]},{title:"php",competency:4,category:["Web Development","Languages"]},{title:"Pylint",competency:4,category:["Data Engineering","Python"]}].map((function(e){return Object(v.a)(Object(v.a)({},e),{},{category:e.category.sort()})})),_=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],H=(M=new Set(T.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return Object(R.a)(e)}(M)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(M)||Object(J.a)(M)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:_[t]}})),B=["Education","Experience","Skills","Courses","References"];t.default=function(){return Object(o.jsx)(a.a,{title:"Resume",description:"Chokri Samaali's Resume. Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet Labs, and Facebook.",children:Object(o.jsxs)("article",{className:"post",id:"resume",children:[Object(o.jsx)("header",{children:Object(o.jsxs)("div",{className:"title",children:[Object(o.jsx)("h2",{"data-testid":"heading",children:Object(o.jsx)(c.b,{to:"resume",children:"Resume"})}),Object(o.jsx)("div",{className:"link-container",children:B.map((function(e){return Object(o.jsx)("h4",{children:Object(o.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(o.jsx)(l,{data:A}),Object(o.jsx)(m,{data:W}),Object(o.jsx)(S,{skills:T,categories:H}),Object(o.jsx)(C,{data:E}),Object(o.jsx)(L,{})]})})}},56:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(57);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},57:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=6.f3dd6e6d.chunk.js.map