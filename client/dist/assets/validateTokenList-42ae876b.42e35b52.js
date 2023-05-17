import{bP as J}from"./web3.min.94457b0f.js";var Re=n,v=require("ajv/dist/runtime/ucs2length").default,be=new RegExp("^[\\w ]+$","u"),re=new RegExp("^[\\w]+$","u"),Ie=new RegExp("^[ \\w]+$","u"),Ee=new RegExp("^[ \\w\\.,:]+$","u"),$e=require("ajv-formats/dist/formats").fullFormats["date-time"],xe=require("ajv-formats/dist/formats").fullFormats.uri,je=new RegExp("^0x[a-fA-F0-9]{40}$","u"),Ve=new RegExp("^[ \\w.'+\\-%/\xC0-\xD6\xD8-\xF6\xF8-\xFF:&\\[\\]\\(\\)]+$","u"),Ae=new RegExp("^[a-zA-Z0-9+\\-%/$.]+$","u");function X(t){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},N=c.instancePath,a=N===void 0?"":N;c.parentData,c.parentDataProperty,c.rootData;var i=null,h=0,r=h,e=!1,f=h,P=h,m=!1,g=h;if(h===g)if(typeof t=="string"){if(v(t)>42){var o={instancePath:a,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",keyword:"maxLength",params:{limit:42},message:"must NOT have more than 42 characters"};i===null?i=[o]:i.push(o),h++}else if(v(t)<1){var s={instancePath:a,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"};i===null?i=[s]:i.push(s),h++}}else{var O={instancePath:a,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/type",keyword:"type",params:{type:"string"},message:"must be string"};i===null?i=[O]:i.push(O),h++}var d=g===h;if(m=m||d,!m){var p=h;if(typeof t!="boolean"){var y={instancePath:a,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/1/type",keyword:"type",params:{type:"boolean"},message:"must be boolean"};i===null?i=[y]:i.push(y),h++}var d=p===h;if(m=m||d,!m){var I=h;if(!(typeof t=="number"&&isFinite(t))){var b={instancePath:a,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/2/type",keyword:"type",params:{type:"number"},message:"must be number"};i===null?i=[b]:i.push(b),h++}var d=I===h;if(m=m||d,!m){var $=h;if(t!==null){var T={instancePath:a,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/3/type",keyword:"type",params:{type:"null"},message:"must be null"};i===null?i=[T]:i.push(T),h++}var d=$===h;m=m||d}}}if(m)h=P,i!==null&&(P?i.length=P:i=null);else{var k={instancePath:a,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};i===null?i=[k]:i.push(k),h++}var E=f===h;if(e=e||E,e)h=r,i!==null&&(r?i.length=r:i=null);else{var w={instancePath:a,schemaPath:"#/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};return i===null?i=[w]:i.push(w),h++,X.errors=i,!1}return X.errors=i,h===0}function Y(t){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},N=c.instancePath,a=N===void 0?"":N;c.parentData,c.parentDataProperty;var i=c.rootData,h=i===void 0?t:i,r=null,e=0,f=e,P=!1,m=e,g=e,o=!1,s=e;if(e===s)if(typeof t=="string"){if(v(t)>42){var O={instancePath:a,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",keyword:"maxLength",params:{limit:42},message:"must NOT have more than 42 characters"};r===null?r=[O]:r.push(O),e++}else if(v(t)<1){var d={instancePath:a,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"};r===null?r=[d]:r.push(d),e++}}else{var p={instancePath:a,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/type",keyword:"type",params:{type:"string"},message:"must be string"};r===null?r=[p]:r.push(p),e++}var y=s===e;if(o=o||y,!o){var I=e;if(typeof t!="boolean"){var b={instancePath:a,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/1/type",keyword:"type",params:{type:"boolean"},message:"must be boolean"};r===null?r=[b]:r.push(b),e++}var y=I===e;if(o=o||y,!o){var $=e;if(!(typeof t=="number"&&isFinite(t))){var T={instancePath:a,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/2/type",keyword:"type",params:{type:"number"},message:"must be number"};r===null?r=[T]:r.push(T),e++}var y=$===e;if(o=o||y,!o){var k=e;if(t!==null){var E={instancePath:a,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/3/type",keyword:"type",params:{type:"null"},message:"must be null"};r===null?r=[E]:r.push(E),e++}var y=k===e;o=o||y}}}if(o)e=g,r!==null&&(g?r.length=g:r=null);else{var w={instancePath:a,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};r===null?r=[w]:r.push(w),e++}var x=m===e;if(P=P||x,!P){var A=e;if(e===A)if(t&&J(t)=="object"&&!Array.isArray(t))if(Object.keys(t).length>10){var L={instancePath:a,schemaPath:"#/anyOf/1/maxProperties",keyword:"maxProperties",params:{limit:10},message:"must NOT have more than 10 properties"};r===null?r=[L]:r.push(L),e++}else{for(var l in t){var D=e,C=e;if(e===C)if(typeof l=="string"){if(v(l)>40){var q={instancePath:a,schemaPath:"#/definitions/ExtensionIdentifier/maxLength",keyword:"maxLength",params:{limit:40},message:"must NOT have more than 40 characters",propertyName:l};r===null?r=[q]:r.push(q),e++}else if(v(l)<1){var Z={instancePath:a,schemaPath:"#/definitions/ExtensionIdentifier/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters",propertyName:l};r===null?r=[Z]:r.push(Z),e++}else if(!re.test(l)){var _={instancePath:a,schemaPath:"#/definitions/ExtensionIdentifier/pattern",keyword:"pattern",params:{pattern:"^[\\w]+$"},message:'must match pattern "^[\\w]+$"',propertyName:l};r===null?r=[_]:r.push(_),e++}}else{var K={instancePath:a,schemaPath:"#/definitions/ExtensionIdentifier/type",keyword:"type",params:{type:"string"},message:"must be string",propertyName:l};r===null?r=[K]:r.push(K),e++}var j=D===e;if(!j){var G={instancePath:a,schemaPath:"#/anyOf/1/propertyNames",keyword:"propertyNames",params:{propertyName:l},message:"property name must be valid"};r===null?r=[G]:r.push(G),e++;break}}if(j)for(var R in t){var W=e;X(t[R],{instancePath:a+"/"+R.replace(/~/g,"~0").replace(/\//g,"~1"),parentData:t,parentDataProperty:R,rootData:h})||(r=r===null?X.errors:r.concat(X.errors),e=r.length);var F=W===e;if(!F)break}}else{var U={instancePath:a,schemaPath:"#/anyOf/1/type",keyword:"type",params:{type:"object"},message:"must be object"};r===null?r=[U]:r.push(U),e++}var x=A===e;P=P||x}if(P)e=f,r!==null&&(f?r.length=f:r=null);else{var H={instancePath:a,schemaPath:"#/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};return r===null?r=[H]:r.push(H),e++,Y.errors=r,!1}return Y.errors=r,e===0}function ee(t){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},N=c.instancePath,a=N===void 0?"":N;c.parentData,c.parentDataProperty;var i=c.rootData,h=i===void 0?t:i,r=null,e=0,f=e,P=!1,m=e,g=e,o=!1,s=e;if(e===s)if(typeof t=="string"){if(v(t)>42){var O={instancePath:a,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",keyword:"maxLength",params:{limit:42},message:"must NOT have more than 42 characters"};r===null?r=[O]:r.push(O),e++}else if(v(t)<1){var d={instancePath:a,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"};r===null?r=[d]:r.push(d),e++}}else{var p={instancePath:a,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/type",keyword:"type",params:{type:"string"},message:"must be string"};r===null?r=[p]:r.push(p),e++}var y=s===e;if(o=o||y,!o){var I=e;if(typeof t!="boolean"){var b={instancePath:a,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/1/type",keyword:"type",params:{type:"boolean"},message:"must be boolean"};r===null?r=[b]:r.push(b),e++}var y=I===e;if(o=o||y,!o){var $=e;if(!(typeof t=="number"&&isFinite(t))){var T={instancePath:a,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/2/type",keyword:"type",params:{type:"number"},message:"must be number"};r===null?r=[T]:r.push(T),e++}var y=$===e;if(o=o||y,!o){var k=e;if(t!==null){var E={instancePath:a,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/3/type",keyword:"type",params:{type:"null"},message:"must be null"};r===null?r=[E]:r.push(E),e++}var y=k===e;o=o||y}}}if(o)e=g,r!==null&&(g?r.length=g:r=null);else{var w={instancePath:a,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};r===null?r=[w]:r.push(w),e++}var x=m===e;if(P=P||x,!P){var A=e;if(e===A)if(t&&J(t)=="object"&&!Array.isArray(t))if(Object.keys(t).length>10){var L={instancePath:a,schemaPath:"#/anyOf/1/maxProperties",keyword:"maxProperties",params:{limit:10},message:"must NOT have more than 10 properties"};r===null?r=[L]:r.push(L),e++}else{for(var l in t){var D=e,C=e;if(e===C)if(typeof l=="string"){if(v(l)>40){var q={instancePath:a,schemaPath:"#/definitions/ExtensionIdentifier/maxLength",keyword:"maxLength",params:{limit:40},message:"must NOT have more than 40 characters",propertyName:l};r===null?r=[q]:r.push(q),e++}else if(v(l)<1){var Z={instancePath:a,schemaPath:"#/definitions/ExtensionIdentifier/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters",propertyName:l};r===null?r=[Z]:r.push(Z),e++}else if(!re.test(l)){var _={instancePath:a,schemaPath:"#/definitions/ExtensionIdentifier/pattern",keyword:"pattern",params:{pattern:"^[\\w]+$"},message:'must match pattern "^[\\w]+$"',propertyName:l};r===null?r=[_]:r.push(_),e++}}else{var K={instancePath:a,schemaPath:"#/definitions/ExtensionIdentifier/type",keyword:"type",params:{type:"string"},message:"must be string",propertyName:l};r===null?r=[K]:r.push(K),e++}var j=D===e;if(!j){var G={instancePath:a,schemaPath:"#/anyOf/1/propertyNames",keyword:"propertyNames",params:{propertyName:l},message:"property name must be valid"};r===null?r=[G]:r.push(G),e++;break}}if(j)for(var R in t){var W=e;Y(t[R],{instancePath:a+"/"+R.replace(/~/g,"~0").replace(/\//g,"~1"),parentData:t,parentDataProperty:R,rootData:h})||(r=r===null?Y.errors:r.concat(Y.errors),e=r.length);var F=W===e;if(!F)break}}else{var U={instancePath:a,schemaPath:"#/anyOf/1/type",keyword:"type",params:{type:"object"},message:"must be object"};r===null?r=[U]:r.push(U),e++}var x=A===e;P=P||x}if(P)e=f,r!==null&&(f?r.length=f:r=null);else{var H={instancePath:a,schemaPath:"#/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};return r===null?r=[H]:r.push(H),e++,ee.errors=r,!1}return ee.errors=r,e===0}function Q(t){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},N=c.instancePath,a=N===void 0?"":N;c.parentData,c.parentDataProperty;var i=c.rootData,h=i===void 0?t:i,r=null,e=0;if(e===0)if(t&&J(t)=="object"&&!Array.isArray(t)){if(Object.keys(t).length>10)return Q.errors=[{instancePath:a,schemaPath:"#/maxProperties",keyword:"maxProperties",params:{limit:10},message:"must NOT have more than 10 properties"}],!1;for(var f in t){var P=e,m=e;if(e===m)if(typeof f=="string"){if(v(f)>40){var g={instancePath:a,schemaPath:"#/definitions/ExtensionIdentifier/maxLength",keyword:"maxLength",params:{limit:40},message:"must NOT have more than 40 characters",propertyName:f};r===null?r=[g]:r.push(g),e++}else if(v(f)<1){var o={instancePath:a,schemaPath:"#/definitions/ExtensionIdentifier/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters",propertyName:f};r===null?r=[o]:r.push(o),e++}else if(!re.test(f)){var s={instancePath:a,schemaPath:"#/definitions/ExtensionIdentifier/pattern",keyword:"pattern",params:{pattern:"^[\\w]+$"},message:'must match pattern "^[\\w]+$"',propertyName:f};r===null?r=[s]:r.push(s),e++}}else{var O={instancePath:a,schemaPath:"#/definitions/ExtensionIdentifier/type",keyword:"type",params:{type:"string"},message:"must be string",propertyName:f};r===null?r=[O]:r.push(O),e++}var d=P===e;if(!d){var p={instancePath:a,schemaPath:"#/propertyNames",keyword:"propertyNames",params:{propertyName:f},message:"property name must be valid"};return r===null?r=[p]:r.push(p),e++,Q.errors=r,!1}}if(d)for(var y in t){var I=e;ee(t[y],{instancePath:a+"/"+y.replace(/~/g,"~0").replace(/\//g,"~1"),parentData:t,parentDataProperty:y,rootData:h})||(r=r===null?ee.errors:r.concat(ee.errors),e=r.length);var b=I===e;if(!b)break}}else return Q.errors=[{instancePath:a,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;return Q.errors=r,e===0}function u(t){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},N=c.instancePath,a=N===void 0?"":N;c.parentData,c.parentDataProperty;var i=c.rootData,h=i===void 0?t:i,r=null,e=0;if(e===0)if(t&&J(t)=="object"&&!Array.isArray(t)){var f;if(t.chainId===void 0&&(f="chainId")||t.address===void 0&&(f="address")||t.decimals===void 0&&(f="decimals")||t.name===void 0&&(f="name")||t.symbol===void 0&&(f="symbol"))return u.errors=[{instancePath:a,schemaPath:"#/required",keyword:"required",params:{missingProperty:f},message:"must have required property '"+f+"'"}],!1;var P=e;for(var m in t)if(!(m==="chainId"||m==="address"||m==="decimals"||m==="name"||m==="symbol"||m==="logoURI"||m==="tags"||m==="extensions"))return u.errors=[{instancePath:a,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:m},message:"must NOT have additional properties"}],!1;if(P===e){if(t.chainId!==void 0){var g=t.chainId,o=e;if(!(typeof g=="number"&&!(g%1)&&!isNaN(g)&&isFinite(g)))return u.errors=[{instancePath:a+"/chainId",schemaPath:"#/properties/chainId/type",keyword:"type",params:{type:"integer"},message:"must be integer"}],!1;if(e===o&&typeof g=="number"&&isFinite(g)&&(g<1||isNaN(g)))return u.errors=[{instancePath:a+"/chainId",schemaPath:"#/properties/chainId/minimum",keyword:"minimum",params:{comparison:">=",limit:1},message:"must be >= 1"}],!1;var s=o===e}else var s=!0;if(s){if(t.address!==void 0){var O=t.address,d=e;if(e===d)if(typeof O=="string"){if(!je.test(O))return u.errors=[{instancePath:a+"/address",schemaPath:"#/properties/address/pattern",keyword:"pattern",params:{pattern:"^0x[a-fA-F0-9]{40}$"},message:'must match pattern "^0x[a-fA-F0-9]{40}$"'}],!1}else return u.errors=[{instancePath:a+"/address",schemaPath:"#/properties/address/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;var s=d===e}else var s=!0;if(s){if(t.decimals!==void 0){var p=t.decimals,y=e;if(!(typeof p=="number"&&!(p%1)&&!isNaN(p)&&isFinite(p)))return u.errors=[{instancePath:a+"/decimals",schemaPath:"#/properties/decimals/type",keyword:"type",params:{type:"integer"},message:"must be integer"}],!1;if(e===y&&typeof p=="number"&&isFinite(p)){if(p>255||isNaN(p))return u.errors=[{instancePath:a+"/decimals",schemaPath:"#/properties/decimals/maximum",keyword:"maximum",params:{comparison:"<=",limit:255},message:"must be <= 255"}],!1;if(p<0||isNaN(p))return u.errors=[{instancePath:a+"/decimals",schemaPath:"#/properties/decimals/minimum",keyword:"minimum",params:{comparison:">=",limit:0},message:"must be >= 0"}],!1}var s=y===e}else var s=!0;if(s){if(t.name!==void 0){var I=t.name,b=e;if(e===b)if(typeof I=="string"){if(v(I)>40)return u.errors=[{instancePath:a+"/name",schemaPath:"#/properties/name/maxLength",keyword:"maxLength",params:{limit:40},message:"must NOT have more than 40 characters"}],!1;if(v(I)<1)return u.errors=[{instancePath:a+"/name",schemaPath:"#/properties/name/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!Ve.test(I))return u.errors=[{instancePath:a+"/name",schemaPath:"#/properties/name/pattern",keyword:"pattern",params:{pattern:"^[ \\w.'+\\-%/\xC0-\xD6\xD8-\xF6\xF8-\xFF:&\\[\\]\\(\\)]+$"},message:`must match pattern "^[ \\w.'+\\-%/\xC0-\xD6\xD8-\xF6\xF8-\xFF:&\\[\\]\\(\\)]+$"`}],!1}else return u.errors=[{instancePath:a+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;var s=b===e}else var s=!0;if(s){if(t.symbol!==void 0){var $=t.symbol,T=e;if(e===T)if(typeof $=="string"){if(v($)>20)return u.errors=[{instancePath:a+"/symbol",schemaPath:"#/properties/symbol/maxLength",keyword:"maxLength",params:{limit:20},message:"must NOT have more than 20 characters"}],!1;if(v($)<1)return u.errors=[{instancePath:a+"/symbol",schemaPath:"#/properties/symbol/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!Ae.test($))return u.errors=[{instancePath:a+"/symbol",schemaPath:"#/properties/symbol/pattern",keyword:"pattern",params:{pattern:"^[a-zA-Z0-9+\\-%/$.]+$"},message:'must match pattern "^[a-zA-Z0-9+\\-%/$.]+$"'}],!1}else return u.errors=[{instancePath:a+"/symbol",schemaPath:"#/properties/symbol/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;var s=T===e}else var s=!0;if(s){if(t.logoURI!==void 0){var k=t.logoURI,E=e;if(e===E&&e===E)if(typeof k=="string"){if(!xe(k))return u.errors=[{instancePath:a+"/logoURI",schemaPath:"#/properties/logoURI/format",keyword:"format",params:{format:"uri"},message:'must match format "uri"'}],!1}else return u.errors=[{instancePath:a+"/logoURI",schemaPath:"#/properties/logoURI/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;var s=E===e}else var s=!0;if(s){if(t.tags!==void 0){var w=t.tags,x=e;if(e===x)if(Array.isArray(w)){if(w.length>10)return u.errors=[{instancePath:a+"/tags",schemaPath:"#/properties/tags/maxItems",keyword:"maxItems",params:{limit:10},message:"must NOT have more than 10 items"}],!1;for(var A=!0,L=w.length,l=0;l<L;l++){var D=w[l],C=e,q=e;if(e===q)if(typeof D=="string"){if(v(D)>10)return u.errors=[{instancePath:a+"/tags/"+l,schemaPath:"#/definitions/TagIdentifier/maxLength",keyword:"maxLength",params:{limit:10},message:"must NOT have more than 10 characters"}],!1;if(v(D)<1)return u.errors=[{instancePath:a+"/tags/"+l,schemaPath:"#/definitions/TagIdentifier/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!re.test(D))return u.errors=[{instancePath:a+"/tags/"+l,schemaPath:"#/definitions/TagIdentifier/pattern",keyword:"pattern",params:{pattern:"^[\\w]+$"},message:'must match pattern "^[\\w]+$"'}],!1}else return u.errors=[{instancePath:a+"/tags/"+l,schemaPath:"#/definitions/TagIdentifier/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;var A=C===e;if(!A)break}}else return u.errors=[{instancePath:a+"/tags",schemaPath:"#/properties/tags/type",keyword:"type",params:{type:"array"},message:"must be array"}],!1;var s=x===e}else var s=!0;if(s)if(t.extensions!==void 0){var Z=e;Q(t.extensions,{instancePath:a+"/extensions",parentData:t,parentDataProperty:"extensions",rootData:h})||(r=r===null?Q.errors:r.concat(Q.errors),e=r.length);var s=Z===e}else var s=!0}}}}}}}}else return u.errors=[{instancePath:a,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;return u.errors=r,e===0}function n(t){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},N=c.instancePath,a=N===void 0?"":N;c.parentData,c.parentDataProperty;var i=c.rootData,h=i===void 0?t:i,r=null,e=0;if(e===0)if(t&&J(t)=="object"&&!Array.isArray(t)){var f;if(t.name===void 0&&(f="name")||t.timestamp===void 0&&(f="timestamp")||t.version===void 0&&(f="version")||t.tokens===void 0&&(f="tokens"))return n.errors=[{instancePath:a,schemaPath:"#/required",keyword:"required",params:{missingProperty:f},message:"must have required property '"+f+"'"}],!1;var P=e;for(var m in t)if(!(m==="name"||m==="timestamp"||m==="version"||m==="tokens"||m==="keywords"||m==="tags"||m==="logoURI"))return n.errors=[{instancePath:a,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:m},message:"must NOT have additional properties"}],!1;if(P===e){if(t.name!==void 0){var g=t.name,o=e;if(e===o)if(typeof g=="string"){if(v(g)>30)return n.errors=[{instancePath:a+"/name",schemaPath:"#/properties/name/maxLength",keyword:"maxLength",params:{limit:30},message:"must NOT have more than 30 characters"}],!1;if(v(g)<1)return n.errors=[{instancePath:a+"/name",schemaPath:"#/properties/name/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!be.test(g))return n.errors=[{instancePath:a+"/name",schemaPath:"#/properties/name/pattern",keyword:"pattern",params:{pattern:"^[\\w ]+$"},message:'must match pattern "^[\\w ]+$"'}],!1}else return n.errors=[{instancePath:a+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;var s=o===e}else var s=!0;if(s){if(t.timestamp!==void 0){var O=t.timestamp,d=e;if(e===d&&e===d)if(typeof O=="string"){if(!$e.validate(O))return n.errors=[{instancePath:a+"/timestamp",schemaPath:"#/properties/timestamp/format",keyword:"format",params:{format:"date-time"},message:'must match format "date-time"'}],!1}else return n.errors=[{instancePath:a+"/timestamp",schemaPath:"#/properties/timestamp/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;var s=d===e}else var s=!0;if(s){if(t.version!==void 0){var p=t.version,y=e,I=e;if(e===I)if(p&&J(p)=="object"&&!Array.isArray(p)){var b;if(p.major===void 0&&(b="major")||p.minor===void 0&&(b="minor")||p.patch===void 0&&(b="patch"))return n.errors=[{instancePath:a+"/version",schemaPath:"#/definitions/Version/required",keyword:"required",params:{missingProperty:b},message:"must have required property '"+b+"'"}],!1;var $=e;for(var T in p)if(!(T==="major"||T==="minor"||T==="patch"))return n.errors=[{instancePath:a+"/version",schemaPath:"#/definitions/Version/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:T},message:"must NOT have additional properties"}],!1;if($===e){if(p.major!==void 0){var k=p.major,E=e;if(!(typeof k=="number"&&!(k%1)&&!isNaN(k)&&isFinite(k)))return n.errors=[{instancePath:a+"/version/major",schemaPath:"#/definitions/Version/properties/major/type",keyword:"type",params:{type:"integer"},message:"must be integer"}],!1;if(e===E&&typeof k=="number"&&isFinite(k)&&(k<0||isNaN(k)))return n.errors=[{instancePath:a+"/version/major",schemaPath:"#/definitions/Version/properties/major/minimum",keyword:"minimum",params:{comparison:">=",limit:0},message:"must be >= 0"}],!1;var w=E===e}else var w=!0;if(w){if(p.minor!==void 0){var x=p.minor,A=e;if(!(typeof x=="number"&&!(x%1)&&!isNaN(x)&&isFinite(x)))return n.errors=[{instancePath:a+"/version/minor",schemaPath:"#/definitions/Version/properties/minor/type",keyword:"type",params:{type:"integer"},message:"must be integer"}],!1;if(e===A&&typeof x=="number"&&isFinite(x)&&(x<0||isNaN(x)))return n.errors=[{instancePath:a+"/version/minor",schemaPath:"#/definitions/Version/properties/minor/minimum",keyword:"minimum",params:{comparison:">=",limit:0},message:"must be >= 0"}],!1;var w=A===e}else var w=!0;if(w)if(p.patch!==void 0){var L=p.patch,l=e;if(!(typeof L=="number"&&!(L%1)&&!isNaN(L)&&isFinite(L)))return n.errors=[{instancePath:a+"/version/patch",schemaPath:"#/definitions/Version/properties/patch/type",keyword:"type",params:{type:"integer"},message:"must be integer"}],!1;if(e===l&&typeof L=="number"&&isFinite(L)&&(L<0||isNaN(L)))return n.errors=[{instancePath:a+"/version/patch",schemaPath:"#/definitions/Version/properties/patch/minimum",keyword:"minimum",params:{comparison:">=",limit:0},message:"must be >= 0"}],!1;var w=l===e}else var w=!0}}}else return n.errors=[{instancePath:a+"/version",schemaPath:"#/definitions/Version/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;var s=y===e}else var s=!0;if(s){if(t.tokens!==void 0){var D=t.tokens,C=e;if(e===C)if(Array.isArray(D)){if(D.length>1e4)return n.errors=[{instancePath:a+"/tokens",schemaPath:"#/properties/tokens/maxItems",keyword:"maxItems",params:{limit:1e4},message:"must NOT have more than 10000 items"}],!1;if(D.length<1)return n.errors=[{instancePath:a+"/tokens",schemaPath:"#/properties/tokens/minItems",keyword:"minItems",params:{limit:1},message:"must NOT have fewer than 1 items"}],!1;for(var q=!0,Z=D.length,_=0;_<Z;_++){var K=e;u(D[_],{instancePath:a+"/tokens/"+_,parentData:D,parentDataProperty:_,rootData:h})||(r=r===null?u.errors:r.concat(u.errors),e=r.length);var q=K===e;if(!q)break}}else return n.errors=[{instancePath:a+"/tokens",schemaPath:"#/properties/tokens/type",keyword:"type",params:{type:"array"},message:"must be array"}],!1;var s=C===e}else var s=!0;if(s){if(t.keywords!==void 0){var j=t.keywords,G=e;if(e===G)if(Array.isArray(j)){if(j.length>20)return n.errors=[{instancePath:a+"/keywords",schemaPath:"#/properties/keywords/maxItems",keyword:"maxItems",params:{limit:20},message:"must NOT have more than 20 items"}],!1;for(var R=!0,W=j.length,F=0;F<W;F++){var U=j[F],H=e;if(e===H)if(typeof U=="string"){if(v(U)>20)return n.errors=[{instancePath:a+"/keywords/"+F,schemaPath:"#/properties/keywords/items/maxLength",keyword:"maxLength",params:{limit:20},message:"must NOT have more than 20 characters"}],!1;if(v(U)<1)return n.errors=[{instancePath:a+"/keywords/"+F,schemaPath:"#/properties/keywords/items/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!be.test(U))return n.errors=[{instancePath:a+"/keywords/"+F,schemaPath:"#/properties/keywords/items/pattern",keyword:"pattern",params:{pattern:"^[\\w ]+$"},message:'must match pattern "^[\\w ]+$"'}],!1}else return n.errors=[{instancePath:a+"/keywords/"+F,schemaPath:"#/properties/keywords/items/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;var R=H===e;if(!R)break}if(R){var S=j.length,me;if(S>1)for(var oe={};S--;){var ae=j[S];if(typeof ae=="string"){if(typeof oe[ae]=="number")return me=oe[ae],n.errors=[{instancePath:a+"/keywords",schemaPath:"#/properties/keywords/uniqueItems",keyword:"uniqueItems",params:{i:S,j:me},message:"must NOT have duplicate items (items ## "+me+" and "+S+" are identical)"}],!1;oe[ae]=S}}}}else return n.errors=[{instancePath:a+"/keywords",schemaPath:"#/properties/keywords/type",keyword:"type",params:{type:"array"},message:"must be array"}],!1;var s=G===e}else var s=!0;if(s){if(t.tags!==void 0){var M=t.tags,fe=e;if(e===fe)if(M&&J(M)=="object"&&!Array.isArray(M)){if(Object.keys(M).length>20)return n.errors=[{instancePath:a+"/tags",schemaPath:"#/properties/tags/maxProperties",keyword:"maxProperties",params:{limit:20},message:"must NOT have more than 20 properties"}],!1;for(var B in M){var ke=e,Ne=e;if(e===Ne)if(typeof B=="string"){if(v(B)>10){var le={instancePath:a+"/tags",schemaPath:"#/definitions/TagIdentifier/maxLength",keyword:"maxLength",params:{limit:10},message:"must NOT have more than 10 characters",propertyName:B};r===null?r=[le]:r.push(le),e++}else if(v(B)<1){var ue={instancePath:a+"/tags",schemaPath:"#/definitions/TagIdentifier/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters",propertyName:B};r===null?r=[ue]:r.push(ue),e++}else if(!re.test(B)){var ce={instancePath:a+"/tags",schemaPath:"#/definitions/TagIdentifier/pattern",keyword:"pattern",params:{pattern:"^[\\w]+$"},message:'must match pattern "^[\\w]+$"',propertyName:B};r===null?r=[ce]:r.push(ce),e++}}else{var ve={instancePath:a+"/tags",schemaPath:"#/definitions/TagIdentifier/type",keyword:"type",params:{type:"string"},message:"must be string",propertyName:B};r===null?r=[ve]:r.push(ve),e++}var ge=ke===e;if(!ge){var ye={instancePath:a+"/tags",schemaPath:"#/properties/tags/propertyNames",keyword:"propertyNames",params:{propertyName:B},message:"property name must be valid"};return r===null?r=[ye]:r.push(ye),e++,n.errors=r,!1}}if(ge)for(var V in M){var z=M[V],Oe=e,Te=e;if(e===Te)if(z&&J(z)=="object"&&!Array.isArray(z)){var te=void 0;if(z.name===void 0&&(te="name")||z.description===void 0&&(te="description"))return n.errors=[{instancePath:a+"/tags/"+V.replace(/~/g,"~0").replace(/\//g,"~1"),schemaPath:"#/definitions/TagDefinition/required",keyword:"required",params:{missingProperty:te},message:"must have required property '"+te+"'"}],!1;var Le=e;for(var pe in z)if(!(pe==="name"||pe==="description"))return n.errors=[{instancePath:a+"/tags/"+V.replace(/~/g,"~0").replace(/\//g,"~1"),schemaPath:"#/definitions/TagDefinition/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:pe},message:"must NOT have additional properties"}],!1;if(Le===e){if(z.name!==void 0){var se=z.name,Pe=e;if(e===Pe)if(typeof se=="string"){if(v(se)>20)return n.errors=[{instancePath:a+"/tags/"+V.replace(/~/g,"~0").replace(/\//g,"~1")+"/name",schemaPath:"#/definitions/TagDefinition/properties/name/maxLength",keyword:"maxLength",params:{limit:20},message:"must NOT have more than 20 characters"}],!1;if(v(se)<1)return n.errors=[{instancePath:a+"/tags/"+V.replace(/~/g,"~0").replace(/\//g,"~1")+"/name",schemaPath:"#/definitions/TagDefinition/properties/name/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!Ie.test(se))return n.errors=[{instancePath:a+"/tags/"+V.replace(/~/g,"~0").replace(/\//g,"~1")+"/name",schemaPath:"#/definitions/TagDefinition/properties/name/pattern",keyword:"pattern",params:{pattern:"^[ \\w]+$"},message:'must match pattern "^[ \\w]+$"'}],!1}else return n.errors=[{instancePath:a+"/tags/"+V.replace(/~/g,"~0").replace(/\//g,"~1")+"/name",schemaPath:"#/definitions/TagDefinition/properties/name/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;var ie=Pe===e}else var ie=!0;if(ie)if(z.description!==void 0){var ne=z.description,de=e;if(e===de)if(typeof ne=="string"){if(v(ne)>200)return n.errors=[{instancePath:a+"/tags/"+V.replace(/~/g,"~0").replace(/\//g,"~1")+"/description",schemaPath:"#/definitions/TagDefinition/properties/description/maxLength",keyword:"maxLength",params:{limit:200},message:"must NOT have more than 200 characters"}],!1;if(v(ne)<1)return n.errors=[{instancePath:a+"/tags/"+V.replace(/~/g,"~0").replace(/\//g,"~1")+"/description",schemaPath:"#/definitions/TagDefinition/properties/description/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!Ee.test(ne))return n.errors=[{instancePath:a+"/tags/"+V.replace(/~/g,"~0").replace(/\//g,"~1")+"/description",schemaPath:"#/definitions/TagDefinition/properties/description/pattern",keyword:"pattern",params:{pattern:"^[ \\w\\.,:]+$"},message:'must match pattern "^[ \\w\\.,:]+$"'}],!1}else return n.errors=[{instancePath:a+"/tags/"+V.replace(/~/g,"~0").replace(/\//g,"~1")+"/description",schemaPath:"#/definitions/TagDefinition/properties/description/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;var ie=de===e}else var ie=!0}}else return n.errors=[{instancePath:a+"/tags/"+V.replace(/~/g,"~0").replace(/\//g,"~1"),schemaPath:"#/definitions/TagDefinition/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;var De=Oe===e;if(!De)break}}else return n.errors=[{instancePath:a+"/tags",schemaPath:"#/properties/tags/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;var s=fe===e}else var s=!0;if(s)if(t.logoURI!==void 0){var we=t.logoURI,he=e;if(e===he&&e===he)if(typeof we=="string"){if(!xe(we))return n.errors=[{instancePath:a+"/logoURI",schemaPath:"#/properties/logoURI/format",keyword:"format",params:{format:"uri"},message:'must match format "uri"'}],!1}else return n.errors=[{instancePath:a+"/logoURI",schemaPath:"#/properties/logoURI/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;var s=he===e}else var s=!0}}}}}}}else return n.errors=[{instancePath:a,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;return n.errors=r,e===0}export{n as default,Re as validate};
