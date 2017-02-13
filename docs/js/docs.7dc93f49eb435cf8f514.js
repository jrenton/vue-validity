!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.docs=t():e.docs=t()}(this,function(){return webpackJsonp_name_([1,2],{100:function(e,t){},102:function(e,t,n){n(100);var r=n(16)(n(57),n(106),"data-v-4c68cce8",null);e.exports=r.exports},103:function(e,t,n){var r=n(16)(n(58),n(107),null,null);e.exports=r.exports},104:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app",attrs:{id:"app"}},[e._m(0),e._v(" "),n("div",{staticClass:"navigation"},[n("h3",[e._v("Navigation")]),e._v(" "),e._m(1),e._v(" "),n("div",[n("div",{attrs:{id:"installation"}},[n("h2",[e._v("Installation")]),e._v(" "),n("prism-code",[e._v("npm install --save vue-validity")]),e._v(" "),n("prism-code",{attrs:{id:"install"}},[e._v("\nimport Vue from 'vue'\nimport Validity from 'vue-validity'\n\n// Optionally pass in configuration options.\nVue.use(Validity, {})\n      ")])],1),e._v(" "),n("div",{attrs:{id:"basic-usage"}},[n("h2",[e._v("Basic usage")]),e._v(" "),n("p",[e._v("For each value you want to validate, you have to create a key inside validations options.")]),e._v(" "),n("prism-code",[e._v("\nnew Vue({\n  data () {\n    return {\n      name: ''\n    }\n  },\n  validations: {\n    name: ['required', 'minlength:4']\n  }\n})\n      ")]),e._v(" "),n("p",[e._v("This will result in the following validation object:")]),e._v(" "),n("prism-code",[e._v('\n$v: {\n  "name": {\n    "required": {\n      "$value": false,\n      "$message": "name is required."\n    },\n    "minlength": {\n      "$value": true,\n      "$message": "name should be at least 4 chars."\n    },\n    "$valid": false,\n    "$dirty": false,\n    "$error": false,\n    "$errors": []\n  },\n  "$valid": false,\n  "$dirty": false,\n  "$error": false,\n  "$errors": []\n}\n      ')])],1),e._v(" "),n("div",{attrs:{id:"display-error-messages"}},[n("h2",[e._v("Display error messages")]),e._v(" "),e._m(2),e._v(" "),n("prism-code",{attrs:{language:"html"}},[e._v(e._s(e.errorHtml))]),e._v(" "),n("p",[e._v("We can display errors in this manner on individual properties, or all validation errors that exist, for use in an error summary, for example.")])],1),e._v(" "),n("div",{attrs:{id:"custom-error-messages"}},[n("h2",[e._v("Custom error messages")]),e._v(" "),n("p",[e._v("vue-validity comes with error messages already, however, they are able to be customized. This is helpful when you have translations.")]),e._v(" "),n("p",[e._v("When installing vue-validity you can add these custom error messages in the the options object under errorMessages.")]),e._v(" "),n("prism-code",[e._v("\nconst options = {\n  errorMessages: {\n    required: '{field} is required'\n  }\n}\n\nVue.use(Validity, options)\n      ")]),e._v(" "),n("p",[e._v('{field} is just a placeholder for the field that this will be used on. If the field name is "firstName" then you error message will read: "firstName is required".')]),e._v(" "),e._m(3)],1),e._v(" "),n("div",{attrs:{id:"custom-validators"}},[n("h2",[e._v("Custom validators")]),e._v(" "),n("p",[e._v("The installed validators are great, but you can also easily add your own!")]),e._v(" "),n("prism-code",{attrs:{language:"javascript"}},[e._v("\nimport Validity from 'vue-validity'\n\nValidity.extend('range', {\n  // The order of options is important when you\n  // are referencing a validator via a string.\n  // Eg. name: ['range:2,3'] is going to depend\n  // on this options array matching that first\n  // and second value.\n  options: [\n    {\n      name: 'minlength',\n      value: 0\n    },\n    {\n      name: 'maxlenth',\n      value: 10\n    }\n  ],\n\n  // Method to return whether the current\n  // field is valid based on the given constraints.\n  validate (value, options) {\n    // You have access to the current value and any\n    // options from the options array by their name.\n    // Eg. minlength == 0 and maxlength == 10\n    return value.length >= options.minlength\n            && value.length <= options.maxlength\n  }\n})\n      ")]),e._v(" "),n("p",[e._v("Validators can also be defined directly inline in the validations object.")]),e._v(" "),n("prism-code",[e._v("\nvalidations: {\n  name: {\n    required: {\n      validate (value) {\n        return !!(value)\n      },\n\n      message (field) {\n        return `${field} is required!`\n      }\n    }\n  }\n}\n      ")])],1),e._v(" "),n("div",{attrs:{id:"validate-custom-components"}},[n("h2",[e._v("Validate custom components")]),e._v(" "),e._m(4),e._v(" "),n("prism-code",{attrs:{language:"html"}},[e._v(e._s(e.parentCustomComponent))]),e._v(" "),n("prism-code",[e._v("\nnew Vue({\n  data() {\n    return {\n      form: {\n        username: '',\n        password: ''\n      }\n    }\n  },\n\n  validations: {\n    form: {\n      username: ['required'],\n      password: ['required']\n    }\n  }\n})\n      ")]),e._v(" "),n("prism-code",{attrs:{language:"html"}},[e._v(e._s(e.childCustomComponent))]),e._v(" "),n("prism-code",[e._v("\nnew Vue({\n  props: ['value'],\n  methods: {\n    onInput (value) {\n      this.$emit('input', value)\n    }\n  }\n})\n      ")]),e._v(" "),e._m(5)],1),e._v(" "),n("div",{attrs:{id:"manually-add-errors"}},[n("h2",[e._v("Manually add errors")]),e._v(" "),e._m(6),e._v(" "),n("prism-code",[e._v("\nthis.$v.$setErrors([\n  {\n    field: 'name',\n    message: 'You cannot do that!'\n  }\n])\n      ")])],1),e._v(" "),n("div",{attrs:{id:"input-classes"}},[n("h2",[e._v("Input classes")]),e._v(" "),e._m(7),e._v(" "),n("prism-code",{attrs:{language:"html"}},[e._v(e._s(e.inputClasses))]),e._v(" "),n("p",[e._v("This automatically enables 'valid', 'invalid', 'pristine', 'dirty', 'touched', and 'untouched' classes depending on the state of your input.")]),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),n("prism-code",[e._v("\nconst options = {\n  inputClasses: {\n    valid: 'my-valid',\n    invalid: 'my-invalid'\n  }\n}\n\nVue.use(Validity, options)\n      ")])],1),e._v(" "),n("div",{attrs:{id:"playground"}},[n("h2",[e._v("Playground")]),e._v(" "),e._m(10),e._v(" "),n("form",{on:{submit:function(t){t.preventDefault(),e.submitForm(t)}}},[n("h3",[e._v("Example form")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.match.firstName,expression:"match.firstName"},{name:"validity",rawName:"v-validity"}],attrs:{type:"text",placeholder:"First name"},domProps:{value:e._s(e.match.firstName)},on:{input:function(t){t.target.composing||(e.match.firstName=t.target.value)}}}),e._v(" "),n("error-messages",{attrs:{model:e.$v.match.firstName}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.match.lastName,expression:"match.lastName"},{name:"validity",rawName:"v-validity"}],attrs:{type:"text",placeholder:"Last name"},domProps:{value:e._s(e.match.lastName)},on:{input:function(t){t.target.composing||(e.match.lastName=t.target.value)}}}),e._v(" "),n("error-messages",{attrs:{model:e.$v.match.lastName}}),e._v(" "),n("hello",{directives:[{name:"model",rawName:"v-model",value:e.match.message,expression:"match.message"}],domProps:{value:e.match.message},on:{input:function(t){e.match.message=t}}}),e._v(" "),n("button",{attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),n("h5",[e._v("Validation state:")]),e._v(" "),n("pre",{staticClass:"text-left"},[e._v("$v: "+e._s(e.$v)),e._v("\n      ")])],1)])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"intro",attrs:{id:"intro"}},[n("h1",[e._v("vue-validity")]),e._v(" "),n("h4",[e._v("A simple, powerful and flexible Vue.js validation library.")]),e._v(" "),n("h3",[e._v("Features")]),e._v(" "),n("ul",{staticClass:"text-left"},[n("li",[e._v("Model-based validation")]),e._v(" "),n("li",[e._v("Automatically adds classes based on input state")]),e._v(" "),n("li",[e._v("Programmatically add errors (eg. server-side errors)")]),e._v(" "),n("li",[e._v("Validate custom components")]),e._v(" "),n("li",[e._v("Add your own translations")]),e._v(" "),n("li",[e._v("Create your own custom validations")]),e._v(" "),n("li",[e._v("Extend existing validations")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"#intro"}},[e._v("Introduction")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#installation"}},[e._v("Installation")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#basic-usage"}},[e._v("Basic usage")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#display-error-messages"}},[e._v("Display error messages")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#custom-error-messages"}},[e._v("Custom error messages")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#custom-validators"}},[e._v("Custom validators")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#validate-custom-components"}},[e._v("Validate custom components")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#manually-add-errors"}},[e._v("Manually add errors")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#input-classes"}},[e._v("Input classes")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#playground"}},[e._v("Playground")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("A validation library is not all that useful without being able to provide us with error messages that relate to a given field. Luckily, "),n("code",[e._v("vue-validity")]),e._v(" makes this very easy! As you can see in the validations object above, we have access to "),n("code",[e._v("$errors")]),e._v(" on each property.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Other validators can have their own options as well. For example, a range validator should have two values that we want to use to customize the message. See the "),n("a",{attrs:{href:"#custom-validators"}},[e._v("Custom validators")]),e._v(" section to read more about this.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Often you find yourself in situations where you want to abstract a certain input field into its own component, either to be shared, or because it has its own set of complex logic that would serve a better purpose in its own component. "),n("code",[e._v("vue-validity")]),e._v(" makes this easy, so long as you are using the "),n("a",{attrs:{href:"https://vuejs.org/v2/guide/components.html#Form-Input-Components-using-Custom-Events"}},[n("code",[e._v("v-model")]),e._v(" pattern")]),e._v(" for the custom component.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Notice how, in the child component, we didn't have to declare a validations object nor did we have to access the nested property of "),n("code",[e._v("$v.form.password")]),e._v(". In a child component that uses "),n("code",[e._v("v-model")]),e._v(", "),n("code",[e._v("$v")]),e._v(" is basically an alias to "),n("code",[e._v("$v.form.password")]),e._v(", or whatever it is based on the context you are in.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("There may be times where you would like to manually set your own errors. This is especially helpful when you have server-side errors that come back. Much like each nested property has "),n("code",[e._v("$reset")]),e._v(" and "),n("code",[e._v("$validate")]),e._v(", you also have access to "),n("code",[e._v("$setErrors")]),e._v(", which accepts an array of errors:")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("It is common to apply classes to your input fields based on your input's state (whether it is valid, if it has been touched, etc). In order to add this functionality, all you need to do is add the "),n("code",[e._v("v-validity")]),e._v(" directive on the input.\n      ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("dl",[n("dt",[e._v("\n          touched\n        ")]),e._v(" "),n("dd",[e._v("\n          The control has been blurred.\n        ")]),e._v(" "),n("dt",[e._v("\n          untouched\n        ")]),e._v(" "),n("dd",[e._v("\n          The control has not been blurred.\n        ")]),e._v(" "),n("dt",[e._v("\n          valid\n        ")]),e._v(" "),n("dd",[e._v("\n          The input is valid.\n        ")]),e._v(" "),n("dt",[e._v("\n          invalid\n        ")]),e._v(" "),n("dd",[e._v("\n          The input is invalid.\n        ")]),e._v(" "),n("dt",[e._v("\n          dirty\n        ")]),e._v(" "),n("dd",[e._v("\n          The input has been interacted with.\n        ")]),e._v(" "),n("dt",[e._v("\n          pristine\n        ")]),e._v(" "),n("dd",[e._v("\n          The input has not been interacted with.\n        ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("You can customize the names of these classes via the "),n("code",[e._v("inputClasses")]),e._v(" property of the options when you are initializing "),n("code",[e._v("vue-validity")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Experiment with "),n("code",[e._v("vue-validity")]),e._v(" here!")])}]}},105:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.model.$errors,function(t){return n("div",{staticClass:"error"},[e._v("\n    "+e._s(t.message)+"\n  ")])}))},staticRenderFns:[]}},106:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h4",[e._v("Child component in form"),e._v(" "),n("div",[n("input",{directives:[{name:"validity",rawName:"v-validity"}],attrs:{type:"text",placeholder:"Message"},domProps:{value:e.value},on:{input:function(t){e.onInput(t.target.value)}}})]),e._v(" "),n("error-messages",{attrs:{model:e.$v}})],1)])},staticRenderFns:[]}},107:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{ref:"prism",staticClass:"prism"},[e._t("default")],2)},staticRenderFns:[]}},109:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(49),i=n.n(r),a=n(48),s=n.n(a),o=n(47);const l={directiveName:"validity",inputClasses:{touched:"touched",untouched:"untouched",valid:"valid",invalid:"invalid"},errorMessages:{required:"{field} is required????"}};i.a.use(o.a,l),new i.a({el:"#app",render:e=>e(s.a)})},17:function(e,t,n){"use strict";function r(e,t){var n=".";t=t.replace(/\[(\w+)\]/g,n+"$1"),t="."+t;var r=new RegExp("^\\"+n);t=t.replace(r,"");for(var i=t.split(n),a=0;a<i.length;++a){var s=i[a];if(!(s in e))return;e=e[s]}return e}function i(e,t){return e.classList?e.classList.contains(t):!!e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)"))}function a(e,t){e.classList?e.classList.add(t):i(e,t)||(e.className+="  "+t)}function s(e,t){if(e.classList)e.classList.remove(t);else if(i(e,t)){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ")}}function o(e){return l(e)&&"function"==typeof e.message&&"function"==typeof e.validate}function l(e){return null!==e&&"object"===("undefined"==typeof e?"undefined":d()(e))}function u(e){return l(e)&&("undefined"==typeof e.$message||"undefined"==typeof e.$value)}var v=n(63),d=n.n(v);t.a=r,t.h=a,t.i=s,n.d(t,"g",function(){return c}),n.d(t,"d",function(){return m}),t.e=o,t.f=l,t.b=u,n.d(t,"c",function(){return f});var c=function(e){return function(){return e}},m=function(e,t,n){return e.reduce(function(e,r){return e[n?n(r):r]=t(r),e},{})},f=function e(t){return t.reduce(function(t,n){return t.concat(Array.isArray(n)?e(n):n)},[])}},18:function(e,t,n){"use strict";t.a={required:"{field} is required.",minlength:"{field} should be at least {minlength} chars.",init:function(e){if(e)for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t])},getErrorMessage:function(e,t,n){var r=this[e];if(!r)return null;if(r=r.replace(new RegExp(/{field}/,"g"),t),n&&n.length)for(var i=0;i<n.length;i++){var a=n[i];r=r.replace(new RegExp("{"+a.name+"}","g"),a.value)}return r}}},33:function(e,t,n){"use strict";var r=n(54),i=n(53);t.a={required:r.a,minlength:i.a,add:function(e,t){this[e]||(this[e]=t)}}},45:function(e,t,n){n(99);var r=n(16)(n(56),n(105),null,null);e.exports=r.exports},47:function(e,t,n){"use strict";var r=n(34),i=n.n(r),a=n(50),s=n(51),o=n(18),l=n(33),u=function e(t,r){e.isInstalled||(r||(r={}),o.a.init(r.errorMessages),t.directive(r.directiveName||"validity",n.i(a.a)(r.inputClasses)),t.mixin(s.a),e.isInstalled=!0)};"undefined"!=typeof window&&(window.VueValidity=u),u.extend=function(e,t){l.a.add(e,t)},i()(l.a).forEach(function(e){u.extend(e,l.a[e])}),t.a=u},48:function(e,t,n){n(98);var r=n(16)(n(55),n(104),null,null);e.exports=r.exports},50:function(e,t,n){"use strict";function r(e,t){t=l()({},v,t),n.i(u.h)(e,t.dirty),n.i(u.i)(e,t.pristine)}function i(e,t){t=l()({},v,t),n.i(u.h)(e,t.pristine),n.i(u.i)(e,t.dirty)}function a(e,t){if(t.context.$v){if(t.context.$vChild)return t.context.$v;var r=e.value;if(!r){var i=t.data.directives.filter(function(e){return"model"===e.name});if(i.length)r=i[0].expression;else{var a=t.context.$options._parentVnode.data||[],s=a.directives.filter(function(e){return"model"===e.name});a.directives.length||(r=""),r=s[0].expression}}return r?n.i(u.a)(t.context.$v,r):t.context.$v}}function s(e,t,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;i=l()(v,i);var s=a(t,r);if(s){var o=s.$dirty,d=s.$valid;o?(n.i(u.h)(e,i.touched),n.i(u.i)(e,i.untouched)):(n.i(u.h)(e,i.untouched),n.i(u.i)(e,i.touched)),d?(n.i(u.h)(e,i.valid),n.i(u.i)(e,i.invalid)):(n.i(u.h)(e,i.invalid),n.i(u.i)(e,i.valid))}}var o=n(19),l=n.n(o),u=n(17),v={touched:"touched",untouched:"untouched",valid:"valid",invalid:"invalid",pristine:"pristine",dirty:"dirty"};t.a=function(e){return{bind:function(t,n,o){i(t,e),t.onfocus=function(){r(t,e)},s(t,n,o,e),t.onblur=function(){var e=a(n,o);e&&e.$validate()}},inserted:function(t,n,r){s(t,n,r,e)},update:function(t,n,r){s(t,n,r,e)}}}},51:function(e,t,n){"use strict";var r=n(19),i=n.n(r),a=n(52),s=n(17);t.a={beforeCreate:function(){var e=this,t=i()({},this),r=t.$options.render;"function"==typeof r&&console.log(t);var o=this.$options,l=!!o.validations,u=o.validations;if("undefined"==typeof o.computed&&(o.computed={}),l)o.computed.$v=function(){return n.i(a.a)(e,u)};else if(o.parent&&o.parent.$v){var v=o._parentVnode.data.directives||[],d=v.filter(function(e){return"model"===e.name});if(d.length){var c=n.i(s.a)(o.parent.$v,d[0].expression);this.$v=c,this.$vChild=!0}}}}},52:function(e,t,n){"use strict";function r(e,t){return e[t]}function i(e){if($)return $;for(var t=e.constructor;t.super;)t=t.super;return $=t,t}function a(e){this.dirty=e;for(var t=e?"$validate":"$reset",r=this.dynamicKeys,i=0;i<r.length;i++){var a=r[i],s=this[a];n.i(g.b)(s)&&s[t]()}}function s(e){this.setErrors=[];for(var t=0;t<e.length;t++){var r=e[t];this.name===r.field&&(this.dirty=!0,this.setErrors.push(r))}for(var i=this.dynamicKeys,a=0;a<i.length;a++){var s=i[a],o=this[s];n.i(g.b)(o)&&o.$setErrors(e)}}function o(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,s=_()(e).filter(function(t){return!!e[t]}),o=s.map(N),v=n.i(g.d)(s,function(n){var i=e[n];return l(r,i,n,t,a)},N),d=i(r),c=new d({data:{dirty:!1,dynamicKeys:o,name:a,setErrors:[]},methods:b,computed:h()({},v,w)});return u(c,s)}function l(e,t,r,i,a){return n.i(g.e)(t)?v(e,t,r,i,a):d(e,t,r,i,a)}function u(e,t){var i=h()({},n.i(g.d)(t,function(t){var n=N(t);return{enumerable:!0,get:function(){return r(e,n)}}}),n.i(g.d)(E,function(t){return{enumerable:!0,get:function(){return e[t]}}}),n.i(g.d)(x,function(t){return{value:e[t].bind(e)}}),{__isValidity:{configurable:!1,enumerable:!1,value:!0}});return m()({},i)}function v(e,t,r,i,a){return function(){var r={};t.options&&(r=t.options.reduce(function(e,t){return e[t.name]=t.value,e},{}));var s=t.validate.call(e,i[a],r);if(n.i(g.f)(s)&&s.__isValidity)return s;var o=t.message.call(e,a,t.options);return{$value:!!s,$message:o}}}function d(e,t,r,i,a){if(Array.isArray(t)){for(var s={},l=0;l<t.length;l++){var u=t[l],v=[],d=u.indexOf(":"),c=d!==-1;c&&(v=u.substr(d+1).split(","),u=u.substr(0,d));for(var m=y.a[u],f=0;f<v.length;f++){var h=v[f],p=m.options[f];p.value=h}s[u]=m}t=s}var _="string"==typeof a?i[a]:i,$=o(t,_,e,r);return n.i(g.g)($)}var c=n(59),m=n.n(c),f=n(62),h=n.n(f),p=n(34),_=n.n(p),g=n(17),y=n(33);n.d(t,"a",function(){return V});var $=null,b={$validate:function(e){this.setErrors=[],a.call(this,!0),"function"==typeof e&&e()},$reset:function(){this.setErrors=[],a.call(this,!1)},$setErrors:function(e){s.call(this,e)}},w={$valid:function(){var e=this;return!this.setErrors.length&&!this.dynamicKeys.some(function(t){var i=r(e,t);return n.i(g.b)(i)?!i.$valid:!i.$value})},$dirty:function(){if(this.dirty)return!0;for(var e=this.dynamicKeys,t=!1,r=0;r<e.length;r++){var i=e[r],a=this[i],s=n.i(g.b)(a);if(t=t||s,s&&a.$dirty)return!0}return t},$error:function(){return!(!this.$dirty||this.$valid)},$errors:function(){var e=this;if(!this.$error)return[];if(this.setErrors.length)return this.setErrors;var t=this.$data.name,r=this.dynamicKeys.map(function(r){var i=e[r];return n.i(g.b)(i)?i.$errors:i.$value?null:{field:t,message:i.$message}}).filter(function(e){return null!==e});return n.i(g.c)(r)}},x=_()(b),E=_()(w),C="v$$",N=function(e){return C+e},V=function(e,t){return o(t,e)}},53:function(e,t,n){"use strict";var r=n(18);t.a={options:[{name:"minlength",value:0}],validate:function(e,t){var n=parseInt(t.minlength,10);return Array.isArray(e)?0===e.length||e.length>=n:void 0===e||null===e||(""===e||String(e).length>=n)},message:function(e,t){return r.a.getErrorMessage("minlength",e,t)}}},54:function(e,t,n){"use strict";var r=n(18);t.a={validate:function(e){return Array.isArray(e)?!!e.length:void 0!==e&&null!==e&&!!String(e).length},message:function(e,t){return r.a.getErrorMessage("required",e,t)}}},55:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(102),i=n.n(r),a=n(45),s=n.n(a),o=n(103),l=n.n(o);t.default={name:"app",data:function(){return{match:{firstName:null,lastName:null,message:""},errorHtml:'<form>\n  <input type="text" v-model="name">\n  <ul>\n    <li v-for="error in $v.name.$errors">\n      {{ error.message }}\n    </li>\n  </ul>\n</form>',inputClasses:'<input type="text" v-model="name" v-validity>',parentCustomComponent:'<!-- Parent component. -->\n<input type="text" v-model="form.username">\n<custom-password v-model="form.password"></custom-password>',childCustomComponent:'<!-- custom-password child component -->\n<input type="text" placeholder="Password" :value="value" @input="onInput($event.target.value)" v-validity>\n<ul>\n  <li v-for="error in $v.$errors">\n    {{ error.message }}\n  </li>\n</ul>'}},computed:{something:function(){return""}},methods:{submitForm:function(){var e=this;this.$v.$validate().then(function(){e.$v.$valid?console.log("valid!"):console.log("not valid!")})}},mounted:function(){this.$v.$setErrors([{field:"lastName",message:"fail"}])},validations:{match:{firstName:["required","minlength:4"],lastName:{required:{validate:function(e,t){return!!e},message:function(e,t){return"last name is required!!!"}}},message:["required"]}},components:{ErrorMessages:s.a,Hello:i.a,PrismCode:l.a}}},56:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["model"]}},57:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(45),i=n.n(r);t.default={name:"hello",props:["value"],methods:{onInput:function(e){this.$emit("input",e)}},components:{ErrorMessages:i.a}}},58:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(101),i=n.n(r);t.default={props:{language:{type:String,default:"javascript"}},mounted:function(){var e=this.$refs.prism.innerText.trim();this.$refs.prism.innerHTML=i.a.highlight(e,i.a.languages[this.language])}}},98:function(e,t){},99:function(e,t){}},[109])});