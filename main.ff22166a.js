parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e,n,t){var o=document.createElement("div");o.dataset.qa="notification",o.textContent=n,o.classList.add(e),o.style.top=t,document.body.append(o)}var n=new Promise(function(e,n){document.addEventListener("mousedown",function(){e()}),setTimeout(function(){n(new Error)},3e3)});n.then(function(){e("success","First promise was resolved","50px")}).catch(function(){e("warning","First promise was rejected")});var t=new Promise(function(e){document.addEventListener("mousedown",function(n){1!==n.button&&e()})});t.then(function(){e("success","Second promise was resolved","150px")});var o=new Promise(function(e){var n=!1,t=!1;document.addEventListener("mousedown",function(o){0===o.button&&(n=!0),2===o.button&&(t=!0),n&&t&&e()})});o.then(function(){e("success","Third promise was resolved","250px")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.ff22166a.js.map