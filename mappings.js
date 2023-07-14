(function(){var mappingMethods={"Array":{methods:{"indexOf":indexOf,"lastIndexOf":lastIndexOf,"forEach":forEach,"map":map,"filter":filter,"every":every,"some":some,"each":Array.prototype.forEach,"findItem":findItem,"extend":arrayExtend,"contains":contains,"clone":arrayClone,"toNodeList":toNodeList}},"Object":{methods:{"hasOwnProperty":window.hasOwnProperty||Object.prototype.hasOwnProperty}},"Event":{methods:{"stopDefaultEvent":stopDefaultEvent}},"String":{methods:{"trim":trim,"endsWith":endsWith,"startsWith":startsWith,"repeat":repeat,"reverse":reverse,"leftStrip":leftStrip,"rightStrip":rightStrip,"strip":strip,"contains":contains,"forEach":Array.prototype.forEach,"isStringEmpty":stringIsEmpty}},"Function":{methods:{"bind":bind,"throttle":throttle}},"NodeList":{methods:{"each":Array.prototype.forEach}},"HTMLOptionElement":{methods:{"parent":parent,"attr":attr,"html":html,"get":get}},"StaticNodeList":{methods:{"each":forEach}},"HTMLElement":{methods:{"each":Array.prototype.forEach}},"HTMLCollection":{methods:{"each":Array.prototype.forEach}}};function addMethod(objectName,methodName,method){var objectToExtend=window[objectName];if(objectToExtend){if(!objectToExtend.prototype[methodName]){objectToExtend.prototype[methodName]=method}}}function loopMethods(){for(var objectName in mappingMethods){for(var methodName in mappingMethods[objectName].methods){addMethod(objectName,methodName,mappingMethods[objectName].methods[methodName])}}}function indexOf(find,i){if(i===undefined){i=0}if(i<0){i+=this.length}if(i<0){i=0}for(var n=this.length;i<n;i++){if(i in this&&this[i]===find){return i}}return -1}function lastIndexOf(find,i){if(i===undefined){i=this.length-1}if(i<0){i+=this.length}if(i>this.length-1){i=this.length-1}for(i++;i-->0;){if(i in this&&this[i]===find){return i}}return -1}function returnLength(){return this.length}function forEach(action,that){for(var i=0,n=this.length;i<n;i++){if(i in this){action.call(that,this[i],i,this)}}}function closest(selector){var elem=this;var matchesSelector=this.matches||this.webkitMatchesSelector||this.mozMatchesSelector||this.msMatchesSelector;while(elem){if(matchesSelector.bind(elem)(selector)){return elem}else{elem=elem.parentNode}}return false}function map(mapper,that){var other=new Array(this.length);for(var i=0,n=this.length;i<n;i++){if(i in this){other[i]=mapper.call(that,this[i],i,this)}}return other}function filter(filter,that){var other=[],v;for(var i=0,n=this.length;i<n;i++){if(i in this&&filter.call(that,v=this[i],i,this)){other.push(v)}}return other}function every(tester,that){for(var i=0,n=this.length;i<n;i++){if(i in this&&!tester.call(that,this[i],i,this)){return false}}return true}function some(tester,that){for(var i=0,n=this.length;i<n;i++){if(i in this&&tester.call(that,this[i],i,this)){return true}}return false}function findItem(func){var lastIndex;var found=this.some(function(item,index){lastIndex=index;return func(item)});if(found){return this[lastIndex]}else{return null}}function toNodeList(){var fragment=document.createDocumentFragment();this.forEach(function(item){fragment.appendChild(item)});return fragment.childNodes}function contains(item){return(this.indexOf(item)!==-1)}function trim(){return this.replace(/^\s+/,"").replace(/\s+$/,"")}function endsWith(suffix){return this.indexOf(suffix,this.length-suffix.length)!==-1}function startsWith(prefix){return this.slice(0,prefix.length)===prefix}function repeat(times){if(times<1){return""}if(times%2){return this["repeat"](times-1)+this}var half=this["repeat"](times/2);return half+half}function reverse(){return this.split("").reverse().join("")}function leftStrip(stripChars){var result=this;while(true){if(!stripChars["contains"](result.charAt(0))||!result){return result}else{result=result.slice(1)}}}function rightStrip(stripChars){return this["reverse"]()["leftStrip"](stripChars)["reverse"]()}function strip(stripChars){return this["leftStrip"](stripChars)["rightStrip"](stripChars)}function bind(owner){var that=this;if(arguments.length<=1){return function(){return that.apply(owner,arguments)}}else{var args=Array.prototype.slice.call(arguments,1);return function(){return that.apply(owner,arguments.length===0?args:args.concat(Array.prototype.slice.call(arguments)))}}}function throttle(wait,immediate){var timeoutID;var originalFunction=this;return function(){var context=this;var delayedFunction=function(){timeoutID=null;if(!immediate){originalFunction.apply(context,arguments)}};var callNow=immediate&&!timeoutID;clearTimeout(timeoutID);timeoutID=setTimeout(delayedFunction,wait);if(callNow){originalFunction.apply(context,arguments)}}}function getKeys(){return Object.keys(this)}function getSize(){return Object.keys(this).length}function getPath(pathItems){var obj=this;var delim="/";var result;var still_checking=true;if(typeof(pathItems)==="string"){pathItems=pathItems["strip"](delim).split(delim)}pathItems.forEach(function(pathItem){if(still_checking){if(!obj.hasOwnProperty(pathItem)){result=undefined;still_checking=false}else{result=obj[pathItem]}obj=obj[pathItem]}});return result}function clone(){var newObj={};for(var key in this){if(this.hasOwnProperty(key)){newObj[key]=this[key]}}return newObj}function parent(){return this.parentNode}function attr(name,value){if(value||value==""){this.setAttribute(name,value);return this}else{return this.getAttribute(name)}}function html(html){if(html){this.innerHTML=html}else{return this.innerHTML}}function get(number){if(typeof number==="number"){return this[number]}else{return this}}function stringIsEmpty(){return(this===undefined||this==null||this.length<=0)?true:false}function arrayExtend(newArray){Array.prototype.push.apply(this,newArray);return this}function arrayClone(){return this.slice()}function objectForEach(callback){for(var key in this){callback(key,this[key])}}function objectExtend(newObject){for(var key in newObject){this[key]=newObject[key]}return this}function stopDefaultEvent(bubble){bubble=bubble||false;if(this.preventDefault){this.preventDefault();if(bubble){this.stopPropagation()}return this}this.returnValue=false;this.cancelBubble=!bubble;return this}function mappings(){this.init()}mappings.prototype={init:function(){loopMethods()}};fnb.namespace("mappings",mappings,true)})();