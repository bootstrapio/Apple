/*! @author mrdoob / http://mrdoob.com/ */
;var THREE={REVISION:"71"};if(typeof module==="object"){module.exports=THREE
}if(Math.sign===undefined){Math.sign=function(b){return(b<0)?-1:(b>0)?1:+b}}THREE.log=function(){};
THREE.warn=function(){};THREE.error=function(){};THREE.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2};
THREE.CullFaceNone=0;THREE.CullFaceBack=1;THREE.CullFaceFront=2;THREE.CullFaceFrontBack=3;
THREE.FrontFaceDirectionCW=0;THREE.FrontFaceDirectionCCW=1;THREE.BasicShadowMap=0;
THREE.PCFShadowMap=1;THREE.PCFSoftShadowMap=2;THREE.FrontSide=0;THREE.BackSide=1;
THREE.DoubleSide=2;THREE.NoShading=0;THREE.FlatShading=1;THREE.SmoothShading=2;
THREE.NoColors=0;THREE.FaceColors=1;THREE.VertexColors=2;THREE.NoBlending=0;THREE.NormalBlending=1;
THREE.AdditiveBlending=2;THREE.SubtractiveBlending=3;THREE.MultiplyBlending=4;THREE.CustomBlending=5;
THREE.AddEquation=100;THREE.SubtractEquation=101;THREE.ReverseSubtractEquation=102;
THREE.MinEquation=103;THREE.MaxEquation=104;THREE.ZeroFactor=200;THREE.OneFactor=201;
THREE.SrcColorFactor=202;THREE.OneMinusSrcColorFactor=203;THREE.SrcAlphaFactor=204;
THREE.OneMinusSrcAlphaFactor=205;THREE.DstAlphaFactor=206;THREE.OneMinusDstAlphaFactor=207;
THREE.DstColorFactor=208;THREE.OneMinusDstColorFactor=209;THREE.SrcAlphaSaturateFactor=210;
THREE.MultiplyOperation=0;THREE.MixOperation=1;THREE.AddOperation=2;THREE.UVMapping=300;
THREE.CubeReflectionMapping=301;THREE.CubeRefractionMapping=302;THREE.EquirectangularReflectionMapping=303;
THREE.EquirectangularRefractionMapping=304;THREE.SphericalReflectionMapping=305;
THREE.RepeatWrapping=1000;THREE.ClampToEdgeWrapping=1001;THREE.MirroredRepeatWrapping=1002;
THREE.NearestFilter=1003;THREE.NearestMipMapNearestFilter=1004;THREE.NearestMipMapLinearFilter=1005;
THREE.LinearFilter=1006;THREE.LinearMipMapNearestFilter=1007;THREE.LinearMipMapLinearFilter=1008;
THREE.UnsignedByteType=1009;THREE.ByteType=1010;THREE.ShortType=1011;THREE.UnsignedShortType=1012;
THREE.IntType=1013;THREE.UnsignedIntType=1014;THREE.FloatType=1015;THREE.HalfFloatType=1025;
THREE.UnsignedShort4444Type=1016;THREE.UnsignedShort5551Type=1017;THREE.UnsignedShort565Type=1018;
THREE.AlphaFormat=1019;THREE.RGBFormat=1020;THREE.RGBAFormat=1021;THREE.LuminanceFormat=1022;
THREE.LuminanceAlphaFormat=1023;THREE.RGBEFormat=THREE.RGBAFormat;THREE.RGB_S3TC_DXT1_Format=2001;
THREE.RGBA_S3TC_DXT1_Format=2002;THREE.RGBA_S3TC_DXT3_Format=2003;THREE.RGBA_S3TC_DXT5_Format=2004;
THREE.RGB_PVRTC_4BPPV1_Format=2100;THREE.RGB_PVRTC_2BPPV1_Format=2101;THREE.RGBA_PVRTC_4BPPV1_Format=2102;
THREE.RGBA_PVRTC_2BPPV1_Format=2103;THREE.Projector=function(){THREE.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js.");
this.projectVector=function(d,c){THREE.warn("THREE.Projector: .projectVector() is now vector.project().");
d.project(c)};this.unprojectVector=function(d,c){THREE.warn("THREE.Projector: .unprojectVector() is now vector.unproject().");
d.unproject(c)};this.pickingRay=function(d,c){THREE.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
}};THREE.CanvasRenderer=function(){THREE.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js");
this.domElement=document.createElement("canvas");this.clear=function(){};this.render=function(){};
this.setClearColor=function(){};this.setSize=function(){}};THREE.Color=function(b){if(arguments.length===3){return this.setRGB(arguments[0],arguments[1],arguments[2])
}return this.set(b)};THREE.Color.prototype={constructor:THREE.Color,r:1,g:1,b:1,set:function(b){if(b instanceof THREE.Color){this.copy(b)
}else{if(typeof b==="number"){this.setHex(b)}else{if(typeof b==="string"){this.setStyle(b)
}}}return this},setHex:function(b){b=Math.floor(b);this.r=(b>>16&255)/255;this.g=(b>>8&255)/255;
this.b=(b&255)/255;return this},setRGB:function(e,f,b){this.r=e;this.g=f;this.b=b;
return this},setHSL:function(k,l,g){if(l===0){this.r=this.g=this.b=g}else{var h=function(a,b,c){if(c<0){c+=1
}if(c>1){c-=1}if(c<1/6){return a+(b-a)*6*c}if(c<1/2){return b}if(c<2/3){return a+(b-a)*6*(2/3-c)
}return a};var i=g<=0.5?g*(1+l):g+l-(g*l);var j=(2*g)-i;this.r=h(j,i,k+1/3);this.g=h(j,i,k);
this.b=h(j,i,k-1/3)}return this},setStyle:function(c){if(/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.test(c)){var d=/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.exec(c);
this.r=Math.min(255,parseInt(d[1],10))/255;this.g=Math.min(255,parseInt(d[2],10))/255;
this.b=Math.min(255,parseInt(d[3],10))/255;return this}if(/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.test(c)){var d=/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.exec(c);
this.r=Math.min(100,parseInt(d[1],10))/100;this.g=Math.min(100,parseInt(d[2],10))/100;
this.b=Math.min(100,parseInt(d[3],10))/100;return this}if(/^\#([0-9a-f]{6})$/i.test(c)){var d=/^\#([0-9a-f]{6})$/i.exec(c);
this.setHex(parseInt(d[1],16));return this}if(/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(c)){var d=/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(c);
this.setHex(parseInt(d[1]+d[1]+d[2]+d[2]+d[3]+d[3],16));return this}if(/^(\w+)$/i.test(c)){this.setHex(THREE.ColorKeywords[c]);
return this}},copy:function(b){this.r=b.r;this.g=b.g;this.b=b.b;return this},copyGammaToLinear:function(d,c){if(c===undefined){c=2
}this.r=Math.pow(d.r,c);this.g=Math.pow(d.g,c);this.b=Math.pow(d.b,c);return this
},copyLinearToGamma:function(d,f){if(f===undefined){f=2}var e=(f>0)?(1/f):1;this.r=Math.pow(d.r,e);
this.g=Math.pow(d.g,e);this.b=Math.pow(d.b,e);return this},convertGammaToLinear:function(){var e=this.r,f=this.g,b=this.b;
this.r=e*e;this.g=f*f;this.b=b*b;return this},convertLinearToGamma:function(){this.r=Math.sqrt(this.r);
this.g=Math.sqrt(this.g);this.b=Math.sqrt(this.b);return this},getHex:function(){return(this.r*255)<<16^(this.g*255)<<8^(this.b*255)<<0
},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)
},getHSL:function(b){var g=b||{h:0,s:0,l:0};var v=this.r,s=this.g,q=this.b;var p=Math.max(v,s,q);
var u=Math.min(v,s,q);var r,t;var n=(u+p)/2;if(u===p){r=0;t=0}else{var o=p-u;t=n<=0.5?o/(p+u):o/(2-p-u);
switch(p){case v:r=(s-q)/o+(s<q?6:0);break;case s:r=(q-v)/o+2;break;case q:r=(v-s)/o+4;
break}r/=6}g.h=r;g.s=t;g.l=n;return g},getStyle:function(){return"rgb("+((this.r*255)|0)+","+((this.g*255)|0)+","+((this.b*255)|0)+")"
},offsetHSL:function(g,h,f){var e=this.getHSL();e.h+=g;e.s+=h;e.l+=f;this.setHSL(e.h,e.s,e.l);
return this},add:function(b){this.r+=b.r;this.g+=b.g;this.b+=b.b;return this},addColors:function(c,d){this.r=c.r+d.r;
this.g=c.g+d.g;this.b=c.b+d.b;return this},addScalar:function(b){this.r+=b;this.g+=b;
this.b+=b;return this},multiply:function(b){this.r*=b.r;this.g*=b.g;this.b*=b.b;
return this},multiplyScalar:function(b){this.r*=b;this.g*=b;this.b*=b;return this
},lerp:function(d,c){this.r+=(d.r-this.r)*c;this.g+=(d.g-this.g)*c;this.b+=(d.b-this.b)*c;
return this},equals:function(b){return(b.r===this.r)&&(b.g===this.g)&&(b.b===this.b)
},fromArray:function(b){this.r=b[0];this.g=b[1];this.b=b[2];return this},toArray:function(c,d){if(c===undefined){c=[]
}if(d===undefined){d=0}c[d]=this.r;c[d+1]=this.g;c[d+2]=this.b;return c},clone:function(){return new THREE.Color().setRGB(this.r,this.g,this.b)
}};THREE.ColorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};
THREE.Quaternion=function(f,g,h,e){this._x=f||0;this._y=g||0;this._z=h||0;this._w=(e!==undefined)?e:1
};THREE.Quaternion.prototype={constructor:THREE.Quaternion,_x:0,_y:0,_z:0,_w:0,get x(){return this._x
},set x(b){this._x=b;this.onChangeCallback()},get y(){return this._y},set y(b){this._y=b;
this.onChangeCallback()},get z(){return this._z},set z(b){this._z=b;this.onChangeCallback()
},get w(){return this._w},set w(b){this._w=b;this.onChangeCallback()},set:function(f,g,h,e){this._x=f;
this._y=g;this._z=h;this._w=e;this.onChangeCallback();return this},copy:function(b){this._x=b.x;
this._y=b.y;this._z=b.z;this._w=b.w;this.onChangeCallback();return this},setFromEuler:function(l,k){if(l instanceof THREE.Euler===false){throw new Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.")
}var m=Math.cos(l._x/2);var n=Math.cos(l._y/2);var p=Math.cos(l._z/2);var o=Math.sin(l._x/2);
var i=Math.sin(l._y/2);var j=Math.sin(l._z/2);if(l.order==="XYZ"){this._x=o*n*p+m*i*j;
this._y=m*i*p-o*n*j;this._z=m*n*j+o*i*p;this._w=m*n*p-o*i*j}else{if(l.order==="YXZ"){this._x=o*n*p+m*i*j;
this._y=m*i*p-o*n*j;this._z=m*n*j-o*i*p;this._w=m*n*p+o*i*j}else{if(l.order==="ZXY"){this._x=o*n*p-m*i*j;
this._y=m*i*p+o*n*j;this._z=m*n*j+o*i*p;this._w=m*n*p-o*i*j}else{if(l.order==="ZYX"){this._x=o*n*p-m*i*j;
this._y=m*i*p+o*n*j;this._z=m*n*j-o*i*p;this._w=m*n*p+o*i*j}else{if(l.order==="YZX"){this._x=o*n*p+m*i*j;
this._y=m*i*p+o*n*j;this._z=m*n*j-o*i*p;this._w=m*n*p-o*i*j}else{if(l.order==="XZY"){this._x=o*n*p-m*i*j;
this._y=m*i*p-o*n*j;this._z=m*n*j+o*i*p;this._w=m*n*p+o*i*j}}}}}}if(k!==false){this.onChangeCallback()
}return this},setFromAxisAngle:function(h,g){var f=g/2,e=Math.sin(f);this._x=h.x*e;
this._y=h.y*e;this._z=h.z*e;this._w=Math.cos(f);this.onChangeCallback();return this
},setFromRotationMatrix:function(v){var A=v.elements,r=A[0],s=A[4],t=A[8],B=A[1],C=A[5],D=A[9],o=A[2],p=A[6],q=A[10],u=r+C+q,m;
if(u>0){m=0.5/Math.sqrt(u+1);this._w=0.25/m;this._x=(p-D)*m;this._y=(t-o)*m;this._z=(B-s)*m
}else{if(r>C&&r>q){m=2*Math.sqrt(1+r-C-q);this._w=(p-D)/m;this._x=0.25*m;this._y=(s+B)/m;
this._z=(t+o)/m}else{if(C>q){m=2*Math.sqrt(1+C-r-q);this._w=(t-o)/m;this._x=(s+B)/m;
this._y=0.25*m;this._z=(D+p)/m}else{m=2*Math.sqrt(1+q-r-C);this._w=(B-s)/m;this._x=(t+o)/m;
this._y=(D+p)/m;this._z=0.25*m}}}this.onChangeCallback();return this},setFromUnitVectors:function(){var f,e;
var d=0.000001;return function(b,a){if(f===undefined){f=new THREE.Vector3()}e=b.dot(a)+1;
if(e<d){e=0;if(Math.abs(b.x)>Math.abs(b.z)){f.set(-b.y,b.x,0)}else{f.set(0,-b.z,b.y)
}}else{f.crossVectors(b,a)}this._x=f.x;this._y=f.y;this._z=f.z;this._w=e;this.normalize();
return this}}(),inverse:function(){this.conjugate().normalize();return this},conjugate:function(){this._x*=-1;
this._y*=-1;this._z*=-1;this.onChangeCallback();return this},dot:function(b){return this._x*b._x+this._y*b._y+this._z*b._z+this._w*b._w
},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w
},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)
},normalize:function(){var b=this.length();if(b===0){this._x=0;this._y=0;this._z=0;
this._w=1}else{b=1/b;this._x=this._x*b;this._y=this._y*b;this._z=this._z*b;this._w=this._w*b
}this.onChangeCallback();return this},multiply:function(d,c){if(c!==undefined){THREE.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.");
return this.multiplyQuaternions(d,c)}return this.multiplyQuaternions(this,d)},multiplyQuaternions:function(a,b){var n=a._x,o=a._y,p=a._z,m=a._w;
var r=b._x,s=b._y,t=b._z,q=b._w;this._x=n*q+m*r+o*t-p*s;this._y=o*q+m*s+p*r-n*t;
this._z=p*q+m*t+n*s-o*r;this._w=m*q-n*r-o*s-p*t;this.onChangeCallback();return this
},multiplyVector3:function(b){THREE.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");
return b.applyQuaternion(this)},slerp:function(t,l){if(l===0){return this}if(l===1){return this.copy(t)
}var n=this._x,o=this._y,p=this._z,m=this._w;var u=m*t._w+n*t._x+o*t._y+p*t._z;
if(u<0){this._w=-t._w;this._x=-t._x;this._y=-t._y;this._z=-t._z;u=-u}else{this.copy(t)
}if(u>=1){this._w=m;this._x=n;this._y=o;this._z=p;return this}var s=Math.acos(u);
var v=Math.sqrt(1-u*u);if(Math.abs(v)<0.001){this._w=0.5*(m+this._w);this._x=0.5*(n+this._x);
this._y=0.5*(o+this._y);this._z=0.5*(p+this._z);return this}var q=Math.sin((1-l)*s)/v,r=Math.sin(l*s)/v;
this._w=(m*q+this._w*r);this._x=(n*q+this._x*r);this._y=(o*q+this._y*r);this._z=(p*q+this._z*r);
this.onChangeCallback();return this},equals:function(b){return(b._x===this._x)&&(b._y===this._y)&&(b._z===this._z)&&(b._w===this._w)
},fromArray:function(c,d){if(d===undefined){d=0}this._x=c[d];this._y=c[d+1];this._z=c[d+2];
this._w=c[d+3];this.onChangeCallback();return this},toArray:function(c,d){if(c===undefined){c=[]
}if(d===undefined){d=0}c[d]=this._x;c[d+1]=this._y;c[d+2]=this._z;c[d+3]=this._w;
return c},onChange:function(b){this.onChangeCallback=b;return this},onChangeCallback:function(){},clone:function(){return new THREE.Quaternion(this._x,this._y,this._z,this._w)
}};THREE.Quaternion.slerp=function(g,h,e,f){return e.copy(g).slerp(h,f)};THREE.Vector2=function(d,c){this.x=d||0;
this.y=c||0};THREE.Vector2.prototype={constructor:THREE.Vector2,set:function(d,c){this.x=d;
this.y=c;return this},setX:function(b){this.x=b;return this},setY:function(b){this.y=b;
return this},setComponent:function(d,c){switch(d){case 0:this.x=c;break;case 1:this.y=c;
break;default:throw new Error("index is out of range: "+d)}},getComponent:function(b){switch(b){case 0:return this.x;
case 1:return this.y;default:throw new Error("index is out of range: "+b)}},copy:function(b){this.x=b.x;
this.y=b.y;return this},add:function(c,d){if(d!==undefined){THREE.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead.");
return this.addVectors(c,d)}this.x+=c.x;this.y+=c.y;return this},addScalar:function(b){this.x+=b;
this.y+=b;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this
},sub:function(c,d){if(d!==undefined){THREE.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.");
return this.subVectors(c,d)}this.x-=c.x;this.y-=c.y;return this},subScalar:function(b){this.x-=b;
this.y-=b;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this
},multiply:function(b){this.x*=b.x;this.y*=b.y;return this},multiplyScalar:function(b){this.x*=b;
this.y*=b;return this},divide:function(b){this.x/=b.x;this.y/=b.y;return this},divideScalar:function(c){if(c!==0){var d=1/c;
this.x*=d;this.y*=d}else{this.x=0;this.y=0}return this},min:function(b){if(this.x>b.x){this.x=b.x
}if(this.y>b.y){this.y=b.y}return this},max:function(b){if(this.x<b.x){this.x=b.x
}if(this.y<b.y){this.y=b.y}return this},clamp:function(c,d){if(this.x<c.x){this.x=c.x
}else{if(this.x>d.x){this.x=d.x}}if(this.y<c.y){this.y=c.y}else{if(this.y>d.y){this.y=d.y
}}return this},clampScalar:(function(){var c,d;return function(b,a){if(c===undefined){c=new THREE.Vector2();
d=new THREE.Vector2()}c.set(b,b);d.set(a,a);return this.clamp(c,d)}})(),floor:function(){this.x=Math.floor(this.x);
this.y=Math.floor(this.y);return this},ceil:function(){this.x=Math.ceil(this.x);
this.y=Math.ceil(this.y);return this},round:function(){this.x=Math.round(this.x);
this.y=Math.round(this.y);return this},roundToZero:function(){this.x=(this.x<0)?Math.ceil(this.x):Math.floor(this.x);
this.y=(this.y<0)?Math.ceil(this.y):Math.floor(this.y);return this},negate:function(){this.x=-this.x;
this.y=-this.y;return this},dot:function(b){return this.x*b.x+this.y*b.y},lengthSq:function(){return this.x*this.x+this.y*this.y
},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},normalize:function(){return this.divideScalar(this.length())
},distanceTo:function(b){return Math.sqrt(this.distanceToSquared(b))},distanceToSquared:function(f){var d=this.x-f.x,e=this.y-f.y;
return d*d+e*e},setLength:function(d){var c=this.length();if(c!==0&&d!==c){this.multiplyScalar(d/c)
}return this},lerp:function(d,c){this.x+=(d.x-this.x)*c;this.y+=(d.y-this.y)*c;
return this},lerpVectors:function(f,d,e){this.subVectors(d,f).multiplyScalar(e).add(f);
return this},equals:function(b){return((b.x===this.x)&&(b.y===this.y))},fromArray:function(c,d){if(d===undefined){d=0
}this.x=c[d];this.y=c[d+1];return this},toArray:function(c,d){if(c===undefined){c=[]
}if(d===undefined){d=0}c[d]=this.x;c[d+1]=this.y;return c},fromAttribute:function(d,e,f){if(f===undefined){f=0
}e=e*d.itemSize+f;this.x=d.array[e];this.y=d.array[e+1];return this},clone:function(){return new THREE.Vector2(this.x,this.y)
}};THREE.Vector3=function(e,f,d){this.x=e||0;this.y=f||0;this.z=d||0};THREE.Vector3.prototype={constructor:THREE.Vector3,set:function(e,f,d){this.x=e;
this.y=f;this.z=d;return this},setX:function(b){this.x=b;return this},setY:function(b){this.y=b;
return this},setZ:function(b){this.z=b;return this},setComponent:function(d,c){switch(d){case 0:this.x=c;
break;case 1:this.y=c;break;case 2:this.z=c;break;default:throw new Error("index is out of range: "+d)
}},getComponent:function(b){switch(b){case 0:return this.x;case 1:return this.y;
case 2:return this.z;default:throw new Error("index is out of range: "+b)}},copy:function(b){this.x=b.x;
this.y=b.y;this.z=b.z;return this},add:function(c,d){if(d!==undefined){THREE.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.");
return this.addVectors(c,d)}this.x+=c.x;this.y+=c.y;this.z+=c.z;return this},addScalar:function(b){this.x+=b;
this.y+=b;this.z+=b;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;
this.z=a.z+b.z;return this},sub:function(c,d){if(d!==undefined){THREE.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.");
return this.subVectors(c,d)}this.x-=c.x;this.y-=c.y;this.z-=c.z;return this},subScalar:function(b){this.x-=b;
this.y-=b;this.z-=b;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;
this.z=a.z-b.z;return this},multiply:function(c,d){if(d!==undefined){THREE.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.");
return this.multiplyVectors(c,d)}this.x*=c.x;this.y*=c.y;this.z*=c.z;return this
},multiplyScalar:function(b){this.x*=b;this.y*=b;this.z*=b;return this},multiplyVectors:function(a,b){this.x=a.x*b.x;
this.y=a.y*b.y;this.z=a.z*b.z;return this},applyEuler:function(){var b;return function(a){if(a instanceof THREE.Euler===false){THREE.error("THREE.Vector3: .applyEuler() now expects a Euler rotation rather than a Vector3 and order.")
}if(b===undefined){b=new THREE.Quaternion()}this.applyQuaternion(b.setFromEuler(a));
return this}}(),applyAxisAngle:function(){var b;return function(a,d){if(b===undefined){b=new THREE.Quaternion()
}this.applyQuaternion(b.setFromAxisAngle(a,d));return this}}(),applyMatrix3:function(e){var g=this.x;
var h=this.y;var i=this.z;var j=e.elements;this.x=j[0]*g+j[3]*h+j[6]*i;this.y=j[1]*g+j[4]*h+j[7]*i;
this.z=j[2]*g+j[5]*h+j[8]*i;return this},applyMatrix4:function(e){var g=this.x,h=this.y,i=this.z;
var j=e.elements;this.x=j[0]*g+j[4]*h+j[8]*i+j[12];this.y=j[1]*g+j[5]*h+j[9]*i+j[13];
this.z=j[2]*g+j[6]*h+j[10]*i+j[14];return this},applyProjection:function(d){var e=this.x,i=this.y,j=this.z;
var l=d.elements;var k=1/(l[3]*e+l[7]*i+l[11]*j+l[15]);this.x=(l[0]*e+l[4]*i+l[8]*j+l[12])*k;
this.y=(l[1]*e+l[5]*i+l[9]*j+l[13])*k;this.z=(l[2]*e+l[6]*i+l[10]*j+l[14])*k;return this
},applyQuaternion:function(B){var m=this.x;var n=this.y;var o=this.z;var q=B.x;
var r=B.y;var s=B.z;var p=B.w;var u=p*m+r*o-s*n;var v=p*n+s*m-q*o;var A=p*o+q*n-r*m;
var t=-q*m-r*n-s*o;this.x=u*p+t*-q+v*-s-A*-r;this.y=v*p+t*-r+A*-q-u*-s;this.z=A*p+t*-s+u*-r-v*-q;
return this},project:function(){var b;return function(a){if(b===undefined){b=new THREE.Matrix4()
}b.multiplyMatrices(a.projectionMatrix,b.getInverse(a.matrixWorld));return this.applyProjection(b)
}}(),unproject:function(){var b;return function(a){if(b===undefined){b=new THREE.Matrix4()
}b.multiplyMatrices(a.matrixWorld,b.getInverse(a.projectionMatrix));return this.applyProjection(b)
}}(),transformDirection:function(e){var g=this.x,h=this.y,i=this.z;var j=e.elements;
this.x=j[0]*g+j[4]*h+j[8]*i;this.y=j[1]*g+j[5]*h+j[9]*i;this.z=j[2]*g+j[6]*h+j[10]*i;
this.normalize();return this},divide:function(b){this.x/=b.x;this.y/=b.y;this.z/=b.z;
return this},divideScalar:function(c){if(c!==0){var d=1/c;this.x*=d;this.y*=d;this.z*=d
}else{this.x=0;this.y=0;this.z=0}return this},min:function(b){if(this.x>b.x){this.x=b.x
}if(this.y>b.y){this.y=b.y}if(this.z>b.z){this.z=b.z}return this},max:function(b){if(this.x<b.x){this.x=b.x
}if(this.y<b.y){this.y=b.y}if(this.z<b.z){this.z=b.z}return this},clamp:function(c,d){if(this.x<c.x){this.x=c.x
}else{if(this.x>d.x){this.x=d.x}}if(this.y<c.y){this.y=c.y}else{if(this.y>d.y){this.y=d.y
}}if(this.z<c.z){this.z=c.z}else{if(this.z>d.z){this.z=d.z}}return this},clampScalar:(function(){var c,d;
return function(b,a){if(c===undefined){c=new THREE.Vector3();d=new THREE.Vector3()
}c.set(b,b,b);d.set(a,a,a);return this.clamp(c,d)}})(),floor:function(){this.x=Math.floor(this.x);
this.y=Math.floor(this.y);this.z=Math.floor(this.z);return this},ceil:function(){this.x=Math.ceil(this.x);
this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);return this},round:function(){this.x=Math.round(this.x);
this.y=Math.round(this.y);this.z=Math.round(this.z);return this},roundToZero:function(){this.x=(this.x<0)?Math.ceil(this.x):Math.floor(this.x);
this.y=(this.y<0)?Math.ceil(this.y):Math.floor(this.y);this.z=(this.z<0)?Math.ceil(this.z):Math.floor(this.z);
return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;return this
},dot:function(b){return this.x*b.x+this.y*b.y+this.z*b.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z
},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)
},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)
},normalize:function(){return this.divideScalar(this.length())},setLength:function(d){var c=this.length();
if(c!==0&&d!==c){this.multiplyScalar(d/c)}return this},lerp:function(d,c){this.x+=(d.x-this.x)*c;
this.y+=(d.y-this.y)*c;this.z+=(d.z-this.z)*c;return this},lerpVectors:function(f,d,e){this.subVectors(d,f).multiplyScalar(e).add(f);
return this},cross:function(j,f){if(f!==undefined){THREE.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.");
return this.crossVectors(j,f)}var g=this.x,h=this.y,i=this.z;this.x=h*j.z-i*j.y;
this.y=i*j.x-g*j.z;this.z=g*j.y-h*j.x;return this},crossVectors:function(o,p){var k=o.x,m=o.y,n=o.z;
var a=p.x,b=p.y,l=p.z;this.x=m*l-n*b;this.y=n*a-k*l;this.z=k*b-m*a;return this},projectOnVector:function(){var c,d;
return function(a){if(c===undefined){c=new THREE.Vector3()}c.copy(a).normalize();
d=this.dot(c);return this.copy(c).multiplyScalar(d)}}(),projectOnPlane:function(){var b;
return function(a){if(b===undefined){b=new THREE.Vector3()}b.copy(this).projectOnVector(a);
return this.sub(b)}}(),reflect:function(){var b;return function(a){if(b===undefined){b=new THREE.Vector3()
}return this.sub(b.copy(a).multiplyScalar(2*this.dot(a)))}}(),angleTo:function(d){var c=this.dot(d)/(this.length()*d.length());
return Math.acos(THREE.Math.clamp(c,-1,1))},distanceTo:function(b){return Math.sqrt(this.distanceToSquared(b))
},distanceToSquared:function(g){var h=this.x-g.x;var e=this.y-g.y;var f=this.z-g.z;
return h*h+e*e+f*f},setEulerFromRotationMatrix:function(c,d){THREE.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
},setEulerFromQuaternion:function(c,d){THREE.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
},getPositionFromMatrix:function(b){THREE.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");
return this.setFromMatrixPosition(b)},getScaleFromMatrix:function(b){THREE.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");
return this.setFromMatrixScale(b)},getColumnFromMatrix:function(c,d){THREE.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");
return this.setFromMatrixColumn(c,d)},setFromMatrixPosition:function(b){this.x=b.elements[12];
this.y=b.elements[13];this.z=b.elements[14];return this},setFromMatrixScale:function(f){var g=this.set(f.elements[0],f.elements[1],f.elements[2]).length();
var h=this.set(f.elements[4],f.elements[5],f.elements[6]).length();var e=this.set(f.elements[8],f.elements[9],f.elements[10]).length();
this.x=g;this.y=h;this.z=e;return this},setFromMatrixColumn:function(e,f){var g=e*4;
var h=f.elements;this.x=h[g];this.y=h[g+1];this.z=h[g+2];return this},equals:function(b){return((b.x===this.x)&&(b.y===this.y)&&(b.z===this.z))
},fromArray:function(c,d){if(d===undefined){d=0}this.x=c[d];this.y=c[d+1];this.z=c[d+2];
return this},toArray:function(c,d){if(c===undefined){c=[]}if(d===undefined){d=0
}c[d]=this.x;c[d+1]=this.y;c[d+2]=this.z;return c},fromAttribute:function(d,e,f){if(f===undefined){f=0
}e=e*d.itemSize+f;this.x=d.array[e];this.y=d.array[e+1];this.z=d.array[e+2];return this
},clone:function(){return new THREE.Vector3(this.x,this.y,this.z)}};THREE.Vector4=function(f,g,h,e){this.x=f||0;
this.y=g||0;this.z=h||0;this.w=(e!==undefined)?e:1};THREE.Vector4.prototype={constructor:THREE.Vector4,set:function(f,g,h,e){this.x=f;
this.y=g;this.z=h;this.w=e;return this},setX:function(b){this.x=b;return this},setY:function(b){this.y=b;
return this},setZ:function(b){this.z=b;return this},setW:function(b){this.w=b;return this
},setComponent:function(d,c){switch(d){case 0:this.x=c;break;case 1:this.y=c;break;
case 2:this.z=c;break;case 3:this.w=c;break;default:throw new Error("index is out of range: "+d)
}},getComponent:function(b){switch(b){case 0:return this.x;case 1:return this.y;
case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+b)
}},copy:function(b){this.x=b.x;this.y=b.y;this.z=b.z;this.w=(b.w!==undefined)?b.w:1;
return this},add:function(c,d){if(d!==undefined){THREE.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead.");
return this.addVectors(c,d)}this.x+=c.x;this.y+=c.y;this.z+=c.z;this.w+=c.w;return this
},addScalar:function(b){this.x+=b;this.y+=b;this.z+=b;this.w+=b;return this},addVectors:function(a,b){this.x=a.x+b.x;
this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this},sub:function(c,d){if(d!==undefined){THREE.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.");
return this.subVectors(c,d)}this.x-=c.x;this.y-=c.y;this.z-=c.z;this.w-=c.w;return this
},subScalar:function(b){this.x-=b;this.y-=b;this.z-=b;this.w-=b;return this},subVectors:function(a,b){this.x=a.x-b.x;
this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this},multiplyScalar:function(b){this.x*=b;
this.y*=b;this.z*=b;this.w*=b;return this},applyMatrix4:function(e){var h=this.x;
var i=this.y;var j=this.z;var l=this.w;var k=e.elements;this.x=k[0]*h+k[4]*i+k[8]*j+k[12]*l;
this.y=k[1]*h+k[5]*i+k[9]*j+k[13]*l;this.z=k[2]*h+k[6]*i+k[10]*j+k[14]*l;this.w=k[3]*h+k[7]*i+k[11]*j+k[15]*l;
return this},divideScalar:function(c){if(c!==0){var d=1/c;this.x*=d;this.y*=d;this.z*=d;
this.w*=d}else{this.x=0;this.y=0;this.z=0;this.w=1}return this},setAxisAngleFromQuaternion:function(c){this.w=2*Math.acos(c.w);
var d=Math.sqrt(1-c.w*c.w);if(d<0.0001){this.x=1;this.y=0;this.z=0}else{this.x=c.x/d;
this.y=c.y/d;this.z=c.z/d}return this},setAxisAngleFromRotationMatrix:function(E){var s,Q,R,S,F=0.01,P=0.1,T=E.elements,G=T[0],K=T[4],m=T[8],V=T[1],X=T[5],Z=T[9],H=T[2],L=T[6],N=T[10];
if((Math.abs(K-V)<F)&&(Math.abs(m-H)<F)&&(Math.abs(Z-L)<F)){if((Math.abs(K+V)<P)&&(Math.abs(m+H)<P)&&(Math.abs(Z+L)<P)&&(Math.abs(G+X+N-3)<P)){this.set(1,0,0,0);
return this}s=Math.PI;var U=(G+1)/2;var J=(X+1)/2;var I=(N+1)/2;var W=(K+V)/4;var Y=(m+H)/4;
var M=(Z+L)/4;if((U>J)&&(U>I)){if(U<F){Q=0;R=0.707106781;S=0.707106781}else{Q=Math.sqrt(U);
R=W/Q;S=Y/Q}}else{if(J>I){if(J<F){Q=0.707106781;R=0;S=0.707106781}else{R=Math.sqrt(J);
Q=W/R;S=M/R}}else{if(I<F){Q=0.707106781;R=0.707106781;S=0}else{S=Math.sqrt(I);Q=Y/S;
R=M/S}}}this.set(Q,R,S,s);return this}var O=Math.sqrt((L-Z)*(L-Z)+(m-H)*(m-H)+(V-K)*(V-K));
if(Math.abs(O)<0.001){O=1}this.x=(L-Z)/O;this.y=(m-H)/O;this.z=(V-K)/O;this.w=Math.acos((G+X+N-1)/2);
return this},min:function(b){if(this.x>b.x){this.x=b.x}if(this.y>b.y){this.y=b.y
}if(this.z>b.z){this.z=b.z}if(this.w>b.w){this.w=b.w}return this},max:function(b){if(this.x<b.x){this.x=b.x
}if(this.y<b.y){this.y=b.y}if(this.z<b.z){this.z=b.z}if(this.w<b.w){this.w=b.w}return this
},clamp:function(c,d){if(this.x<c.x){this.x=c.x}else{if(this.x>d.x){this.x=d.x}}if(this.y<c.y){this.y=c.y
}else{if(this.y>d.y){this.y=d.y}}if(this.z<c.z){this.z=c.z}else{if(this.z>d.z){this.z=d.z
}}if(this.w<c.w){this.w=c.w}else{if(this.w>d.w){this.w=d.w}}return this},clampScalar:(function(){var c,d;
return function(b,a){if(c===undefined){c=new THREE.Vector4();d=new THREE.Vector4()
}c.set(b,b,b,b);d.set(a,a,a,a);return this.clamp(c,d)}})(),floor:function(){this.x=Math.floor(this.x);
this.y=Math.floor(this.y);this.z=Math.floor(this.z);this.w=Math.floor(this.w);return this
},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);
this.w=Math.ceil(this.w);return this},round:function(){this.x=Math.round(this.x);
this.y=Math.round(this.y);this.z=Math.round(this.z);this.w=Math.round(this.w);return this
},roundToZero:function(){this.x=(this.x<0)?Math.ceil(this.x):Math.floor(this.x);
this.y=(this.y<0)?Math.ceil(this.y):Math.floor(this.y);this.z=(this.z<0)?Math.ceil(this.z):Math.floor(this.z);
this.w=(this.w<0)?Math.ceil(this.w):Math.floor(this.w);return this},negate:function(){this.x=-this.x;
this.y=-this.y;this.z=-this.z;this.w=-this.w;return this},dot:function(b){return this.x*b.x+this.y*b.y+this.z*b.z+this.w*b.w
},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w
},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)
},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)
},normalize:function(){return this.divideScalar(this.length())},setLength:function(d){var c=this.length();
if(c!==0&&d!==c){this.multiplyScalar(d/c)}return this},lerp:function(d,c){this.x+=(d.x-this.x)*c;
this.y+=(d.y-this.y)*c;this.z+=(d.z-this.z)*c;this.w+=(d.w-this.w)*c;return this
},lerpVectors:function(f,d,e){this.subVectors(d,f).multiplyScalar(e).add(f);return this
},equals:function(b){return((b.x===this.x)&&(b.y===this.y)&&(b.z===this.z)&&(b.w===this.w))
},fromArray:function(c,d){if(d===undefined){d=0}this.x=c[d];this.y=c[d+1];this.z=c[d+2];
this.w=c[d+3];return this},toArray:function(c,d){if(c===undefined){c=[]}if(d===undefined){d=0
}c[d]=this.x;c[d+1]=this.y;c[d+2]=this.z;c[d+3]=this.w;return c},fromAttribute:function(d,e,f){if(f===undefined){f=0
}e=e*d.itemSize+f;this.x=d.array[e];this.y=d.array[e+1];this.z=d.array[e+2];this.w=d.array[e+3];
return this},clone:function(){return new THREE.Vector4(this.x,this.y,this.z,this.w)
}};THREE.Euler=function(e,g,h,f){this._x=e||0;this._y=g||0;this._z=h||0;this._order=f||THREE.Euler.DefaultOrder
};THREE.Euler.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];THREE.Euler.DefaultOrder="XYZ";
THREE.Euler.prototype={constructor:THREE.Euler,_x:0,_y:0,_z:0,_order:THREE.Euler.DefaultOrder,get x(){return this._x
},set x(b){this._x=b;this.onChangeCallback()},get y(){return this._y},set y(b){this._y=b;
this.onChangeCallback()},get z(){return this._z},set z(b){this._z=b;this.onChangeCallback()
},get order(){return this._order},set order(b){this._order=b;this.onChangeCallback()
},set:function(e,g,h,f){this._x=e;this._y=g;this._z=h;this._order=f||this._order;
this.onChangeCallback();return this},copy:function(b){this._x=b._x;this._y=b._y;
this._z=b._z;this._order=b._order;this.onChangeCallback();return this},setFromRotationMatrix:function(B,A,v){var s=THREE.Math.clamp;
var C=B.elements;var r=C[0],t=C[4],u=C[8];var D=C[1],E=C[5],F=C[9];var m=C[2],p=C[6],q=C[10];
A=A||this._order;if(A==="XYZ"){this._y=Math.asin(s(u,-1,1));if(Math.abs(u)<0.99999){this._x=Math.atan2(-F,q);
this._z=Math.atan2(-t,r)}else{this._x=Math.atan2(p,E);this._z=0}}else{if(A==="YXZ"){this._x=Math.asin(-s(F,-1,1));
if(Math.abs(F)<0.99999){this._y=Math.atan2(u,q);this._z=Math.atan2(D,E)}else{this._y=Math.atan2(-m,r);
this._z=0}}else{if(A==="ZXY"){this._x=Math.asin(s(p,-1,1));if(Math.abs(p)<0.99999){this._y=Math.atan2(-m,q);
this._z=Math.atan2(-t,E)}else{this._y=0;this._z=Math.atan2(D,r)}}else{if(A==="ZYX"){this._y=Math.asin(-s(m,-1,1));
if(Math.abs(m)<0.99999){this._x=Math.atan2(p,q);this._z=Math.atan2(D,r)}else{this._x=0;
this._z=Math.atan2(-t,E)}}else{if(A==="YZX"){this._z=Math.asin(s(D,-1,1));if(Math.abs(D)<0.99999){this._x=Math.atan2(-F,E);
this._y=Math.atan2(-m,r)}else{this._x=0;this._y=Math.atan2(u,q)}}else{if(A==="XZY"){this._z=Math.asin(-s(t,-1,1));
if(Math.abs(t)<0.99999){this._x=Math.atan2(p,E);this._y=Math.atan2(u,r)}else{this._x=Math.atan2(-F,q);
this._y=0}}else{THREE.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: "+A)
}}}}}}this._order=A;if(v!==false){this.onChangeCallback()}return this},setFromQuaternion:function(){var b;
return function(f,a,e){if(b===undefined){b=new THREE.Matrix4()}b.makeRotationFromQuaternion(f);
this.setFromRotationMatrix(b,a,e);return this}}(),setFromVector3:function(c,d){return this.set(c.x,c.y,c.z,d||this._order)
},reorder:function(){var b=new THREE.Quaternion();return function(a){b.setFromEuler(this);
this.setFromQuaternion(b,a)}}(),equals:function(b){return(b._x===this._x)&&(b._y===this._y)&&(b._z===this._z)&&(b._order===this._order)
},fromArray:function(b){this._x=b[0];this._y=b[1];this._z=b[2];if(b[3]!==undefined){this._order=b[3]
}this.onChangeCallback();return this},toArray:function(c,d){if(c===undefined){c=[]
}if(d===undefined){d=0}c[d]=this._x;c[d+1]=this._y;c[d+2]=this._z;c[d+3]=this._order;
return c},toVector3:function(b){if(b){return b.set(this._x,this._y,this._z)}else{return new THREE.Vector3(this._x,this._y,this._z)
}},onChange:function(b){this.onChangeCallback=b;return this},onChangeCallback:function(){},clone:function(){return new THREE.Euler(this._x,this._y,this._z,this._order)
}};THREE.Line3=function(c,d){this.start=(c!==undefined)?c:new THREE.Vector3();this.end=(d!==undefined)?d:new THREE.Vector3()
};THREE.Line3.prototype={constructor:THREE.Line3,set:function(c,d){this.start.copy(c);
this.end.copy(d);return this},copy:function(b){this.start.copy(b.start);this.end.copy(b.end);
return this},center:function(c){var d=c||new THREE.Vector3();return d.addVectors(this.start,this.end).multiplyScalar(0.5)
},delta:function(c){var d=c||new THREE.Vector3();return d.subVectors(this.end,this.start)
},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)
},at:function(f,d){var e=d||new THREE.Vector3();return this.delta(e).multiplyScalar(f).add(this.start)
},closestPointToPointParameter:function(){var c=new THREE.Vector3();var d=new THREE.Vector3();
return function(j,a){c.subVectors(j,this.start);d.subVectors(this.end,this.start);
var b=d.dot(d);var h=d.dot(c);var i=h/b;if(a){i=THREE.Math.clamp(i,0,1)}return i
}}(),closestPointToPoint:function(f,h,i){var j=this.closestPointToPointParameter(f,h);
var g=i||new THREE.Vector3();return this.delta(g).multiplyScalar(j).add(this.start)
},applyMatrix4:function(b){this.start.applyMatrix4(b);this.end.applyMatrix4(b);
return this},equals:function(b){return b.start.equals(this.start)&&b.end.equals(this.end)
},clone:function(){return new THREE.Line3().copy(this)}};THREE.Box2=function(c,d){this.min=(c!==undefined)?c:new THREE.Vector2(Infinity,Infinity);
this.max=(d!==undefined)?d:new THREE.Vector2(-Infinity,-Infinity)};THREE.Box2.prototype={constructor:THREE.Box2,set:function(c,d){this.min.copy(c);
this.max.copy(d);return this},setFromPoints:function(f){this.makeEmpty();for(var d=0,e=f.length;
d<e;d++){this.expandByPoint(f[d])}return this},setFromCenterAndSize:function(){var b=new THREE.Vector2();
return function(a,e){var f=b.copy(e).multiplyScalar(0.5);this.min.copy(a).sub(f);
this.max.copy(a).add(f);return this}}(),copy:function(b){this.min.copy(b.min);this.max.copy(b.max);
return this},makeEmpty:function(){this.min.x=this.min.y=Infinity;this.max.x=this.max.y=-Infinity;
return this},empty:function(){return(this.max.x<this.min.x)||(this.max.y<this.min.y)
},center:function(c){var d=c||new THREE.Vector2();return d.addVectors(this.min,this.max).multiplyScalar(0.5)
},size:function(c){var d=c||new THREE.Vector2();return d.subVectors(this.max,this.min)
},expandByPoint:function(b){this.min.min(b);this.max.max(b);return this},expandByVector:function(b){this.min.sub(b);
this.max.add(b);return this},expandByScalar:function(b){this.min.addScalar(-b);
this.max.addScalar(b);return this},containsPoint:function(b){if(b.x<this.min.x||b.x>this.max.x||b.y<this.min.y||b.y>this.max.y){return false
}return true},containsBox:function(b){if((this.min.x<=b.min.x)&&(b.max.x<=this.max.x)&&(this.min.y<=b.min.y)&&(b.max.y<=this.max.y)){return true
}return false},getParameter:function(d,f){var e=f||new THREE.Vector2();return e.set((d.x-this.min.x)/(this.max.x-this.min.x),(d.y-this.min.y)/(this.max.y-this.min.y))
},isIntersectionBox:function(b){if(b.max.x<this.min.x||b.min.x>this.max.x||b.max.y<this.min.y||b.min.y>this.max.y){return false
}return true},clampPoint:function(d,f){var e=f||new THREE.Vector2();return e.copy(d).clamp(this.min,this.max)
},distanceToPoint:function(){var b=new THREE.Vector2();return function(a){var d=b.copy(a).clamp(this.min,this.max);
return d.sub(a).length()}}(),intersect:function(b){this.min.max(b.min);this.max.min(b.max);
return this},union:function(b){this.min.min(b.min);this.max.max(b.max);return this
},translate:function(b){this.min.add(b);this.max.add(b);return this},equals:function(b){return b.min.equals(this.min)&&b.max.equals(this.max)
},clone:function(){return new THREE.Box2().copy(this)}};THREE.Box3=function(c,d){this.min=(c!==undefined)?c:new THREE.Vector3(Infinity,Infinity,Infinity);
this.max=(d!==undefined)?d:new THREE.Vector3(-Infinity,-Infinity,-Infinity)};THREE.Box3.prototype={constructor:THREE.Box3,set:function(c,d){this.min.copy(c);
this.max.copy(d);return this},setFromPoints:function(f){this.makeEmpty();for(var d=0,e=f.length;
d<e;d++){this.expandByPoint(f[d])}return this},setFromCenterAndSize:function(){var b=new THREE.Vector3();
return function(a,e){var f=b.copy(e).multiplyScalar(0.5);this.min.copy(a).sub(f);
this.max.copy(a).add(f);return this}}(),setFromObject:function(){var b=new THREE.Vector3();
return function(a){var d=this;a.updateMatrixWorld(true);this.makeEmpty();a.traverse(function(i){var c=i.geometry;
if(c!==undefined){if(c instanceof THREE.Geometry){var l=c.vertices;for(var k=0,m=l.length;
k<m;k++){b.copy(l[k]);b.applyMatrix4(i.matrixWorld);d.expandByPoint(b)}}else{if(c instanceof THREE.BufferGeometry&&c.attributes.position!==undefined){var n=c.attributes.position.array;
for(var k=0,m=n.length;k<m;k+=3){b.set(n[k],n[k+1],n[k+2]);b.applyMatrix4(i.matrixWorld);
d.expandByPoint(b)}}}}});return this}}(),copy:function(b){this.min.copy(b.min);
this.max.copy(b.max);return this},makeEmpty:function(){this.min.x=this.min.y=this.min.z=Infinity;
this.max.x=this.max.y=this.max.z=-Infinity;return this},empty:function(){return(this.max.x<this.min.x)||(this.max.y<this.min.y)||(this.max.z<this.min.z)
},center:function(c){var d=c||new THREE.Vector3();return d.addVectors(this.min,this.max).multiplyScalar(0.5)
},size:function(c){var d=c||new THREE.Vector3();return d.subVectors(this.max,this.min)
},expandByPoint:function(b){this.min.min(b);this.max.max(b);return this},expandByVector:function(b){this.min.sub(b);
this.max.add(b);return this},expandByScalar:function(b){this.min.addScalar(-b);
this.max.addScalar(b);return this},containsPoint:function(b){if(b.x<this.min.x||b.x>this.max.x||b.y<this.min.y||b.y>this.max.y||b.z<this.min.z||b.z>this.max.z){return false
}return true},containsBox:function(b){if((this.min.x<=b.min.x)&&(b.max.x<=this.max.x)&&(this.min.y<=b.min.y)&&(b.max.y<=this.max.y)&&(this.min.z<=b.min.z)&&(b.max.z<=this.max.z)){return true
}return false},getParameter:function(d,f){var e=f||new THREE.Vector3();return e.set((d.x-this.min.x)/(this.max.x-this.min.x),(d.y-this.min.y)/(this.max.y-this.min.y),(d.z-this.min.z)/(this.max.z-this.min.z))
},isIntersectionBox:function(b){if(b.max.x<this.min.x||b.min.x>this.max.x||b.max.y<this.min.y||b.min.y>this.max.y||b.max.z<this.min.z||b.min.z>this.max.z){return false
}return true},clampPoint:function(d,f){var e=f||new THREE.Vector3();return e.copy(d).clamp(this.min,this.max)
},distanceToPoint:function(){var b=new THREE.Vector3();return function(a){var d=b.copy(a).clamp(this.min,this.max);
return d.sub(a).length()}}(),getBoundingSphere:function(){var b=new THREE.Vector3();
return function(d){var a=d||new THREE.Sphere();a.center=this.center();a.radius=this.size(b).length()*0.5;
return a}}(),intersect:function(b){this.min.max(b.min);this.max.min(b.max);return this
},union:function(b){this.min.min(b.min);this.max.max(b.max);return this},applyMatrix4:function(){var b=[new THREE.Vector3(),new THREE.Vector3(),new THREE.Vector3(),new THREE.Vector3(),new THREE.Vector3(),new THREE.Vector3(),new THREE.Vector3(),new THREE.Vector3()];
return function(a){b[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(a);b[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(a);
b[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(a);b[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(a);
b[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(a);b[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(a);
b[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(a);b[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(a);
this.makeEmpty();this.setFromPoints(b);return this}}(),translate:function(b){this.min.add(b);
this.max.add(b);return this},equals:function(b){return b.min.equals(this.min)&&b.max.equals(this.max)
},clone:function(){return new THREE.Box3().copy(this)}};THREE.Matrix3=function(){this.elements=new Float32Array([1,0,0,0,1,0,0,0,1]);
if(arguments.length>0){THREE.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
}};THREE.Matrix3.prototype={constructor:THREE.Matrix3,set:function(m,n,o,p,q,r,t,k,l){var s=this.elements;
s[0]=m;s[3]=n;s[6]=o;s[1]=p;s[4]=q;s[7]=r;s[2]=t;s[5]=k;s[8]=l;return this},identity:function(){this.set(1,0,0,0,1,0,0,0,1);
return this},copy:function(d){var c=d.elements;this.set(c[0],c[3],c[6],c[1],c[4],c[7],c[2],c[5],c[8]);
return this},multiplyVector3:function(b){THREE.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");
return b.applyMatrix3(this)},multiplyVector3Array:function(a){THREE.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");
return this.applyToVector3Array(a)},applyToVector3Array:function(){var b=new THREE.Vector3();
return function(g,h,i){if(h===undefined){h=0}if(i===undefined){i=g.length}for(var j=0,a=h;
j<i;j+=3,a+=3){b.x=g[a];b.y=g[a+1];b.z=g[a+2];b.applyMatrix3(this);g[a]=b.x;g[a+1]=b.y;
g[a+2]=b.z}return g}}(),multiplyScalar:function(d){var c=this.elements;c[0]*=d;
c[3]*=d;c[6]*=d;c[1]*=d;c[4]*=d;c[7]*=d;c[2]*=d;c[5]*=d;c[8]*=d;return this},determinant:function(){var i=this.elements;
var t=i[0],a=i[1],b=i[2],c=i[3],d=i[4],e=i[5],f=i[6],g=i[7],h=i[8];return t*d*h-t*e*g-a*c*h+a*e*f+b*c*g-b*d*f
},getInverse:function(g,h){var k=g.elements;var i=this.elements;i[0]=k[10]*k[5]-k[6]*k[9];
i[1]=-k[10]*k[1]+k[2]*k[9];i[2]=k[6]*k[1]-k[2]*k[5];i[3]=-k[10]*k[4]+k[6]*k[8];
i[4]=k[10]*k[0]-k[2]*k[8];i[5]=-k[6]*k[0]+k[2]*k[4];i[6]=k[9]*k[4]-k[5]*k[8];i[7]=-k[9]*k[0]+k[1]*k[8];
i[8]=k[5]*k[0]-k[1]*k[4];var l=k[0]*i[0]+k[1]*i[3]+k[2]*i[6];if(l===0){var j="Matrix3.getInverse(): can't invert matrix, determinant is 0";
if(h||false){throw new Error(j)}else{THREE.warn(j)}this.identity();return this}this.multiplyScalar(1/l);
return this},transpose:function(){var c,d=this.elements;c=d[1];d[1]=d[3];d[3]=c;
c=d[2];d[2]=d[6];d[6]=c;c=d[5];d[5]=d[7];d[7]=c;return this},flattenToArrayOffset:function(f,d){var e=this.elements;
f[d]=e[0];f[d+1]=e[1];f[d+2]=e[2];f[d+3]=e[3];f[d+4]=e[4];f[d+5]=e[5];f[d+6]=e[6];
f[d+7]=e[7];f[d+8]=e[8];return f},getNormalMatrix:function(b){this.getInverse(b).transpose();
return this},transposeIntoArray:function(c){var d=this.elements;c[0]=d[0];c[1]=d[3];
c[2]=d[6];c[3]=d[1];c[4]=d[4];c[5]=d[7];c[6]=d[2];c[7]=d[5];c[8]=d[8];return this
},fromArray:function(b){this.elements.set(b);return this},toArray:function(){var b=this.elements;
return[b[0],b[1],b[2],b[3],b[4],b[5],b[6],b[7],b[8]]},clone:function(){return new THREE.Matrix3().fromArray(this.elements)
}};THREE.Matrix4=function(){this.elements=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);
if(arguments.length>0){THREE.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
}};THREE.Matrix4.prototype={constructor:THREE.Matrix4,set:function(u,v,B,D,G,H,I,J,L,r,s,t,A,C,E,F){var K=this.elements;
K[0]=u;K[4]=v;K[8]=B;K[12]=D;K[1]=G;K[5]=H;K[9]=I;K[13]=J;K[2]=L;K[6]=r;K[10]=s;
K[14]=t;K[3]=A;K[7]=C;K[11]=E;K[15]=F;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
return this},copy:function(b){this.elements.set(b.elements);return this},extractPosition:function(b){THREE.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");
return this.copyPosition(b)},copyPosition:function(e){var f=this.elements;var d=e.elements;
f[12]=d[12];f[13]=d[13];f[14]=d[14];return this},extractBasis:function(e,f,h){var g=this.elements;
e.set(g[0],g[1],g[2]);f.set(g[4],g[5],g[6]);h.set(g[8],g[9],g[10]);return this},makeBasis:function(d,e,f){this.set(d.x,e.x,f.x,0,d.y,e.y,f.y,0,d.z,e.z,f.z,0,0,0,0,1);
return this},extractRotation:function(){var b=new THREE.Vector3();return function(a){var h=this.elements;
var i=a.elements;var j=1/b.set(i[0],i[1],i[2]).length();var k=1/b.set(i[4],i[5],i[6]).length();
var l=1/b.set(i[8],i[9],i[10]).length();h[0]=i[0]*j;h[1]=i[1]*j;h[2]=i[2]*j;h[4]=i[4]*k;
h[5]=i[5]*k;h[6]=i[6]*k;h[8]=i[8]*l;h[9]=i[9]*l;h[10]=i[10]*l;return this}}(),makeRotationFromEuler:function(P){if(P instanceof THREE.Euler===false){THREE.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.")
}var T=this.elements;var Q=P.x,R=P.y,S=P.z;var a=Math.cos(Q),d=Math.sin(Q);var I=Math.cos(R),N=Math.sin(R);
var f=Math.cos(S),K=Math.sin(S);if(P.order==="XYZ"){var b=a*f,H=a*K,W=d*f,X=d*K;
T[0]=I*f;T[4]=-I*K;T[8]=N;T[1]=H+W*N;T[5]=b-X*N;T[9]=-d*I;T[2]=X-b*N;T[6]=W+H*N;
T[10]=a*I}else{if(P.order==="YXZ"){var M=I*f,O=I*K,J=N*f,c=N*K;T[0]=M+c*d;T[4]=J*d-O;
T[8]=a*N;T[1]=a*K;T[5]=a*f;T[9]=-d;T[2]=O*d-J;T[6]=c+M*d;T[10]=a*I}else{if(P.order==="ZXY"){var M=I*f,O=I*K,J=N*f,c=N*K;
T[0]=M-c*d;T[4]=-a*K;T[8]=J+O*d;T[1]=O+J*d;T[5]=a*f;T[9]=c-M*d;T[2]=-a*N;T[6]=d;
T[10]=a*I}else{if(P.order==="ZYX"){var b=a*f,H=a*K,W=d*f,X=d*K;T[0]=I*f;T[4]=W*N-H;
T[8]=b*N+X;T[1]=I*K;T[5]=X*N+b;T[9]=H*N-W;T[2]=-N;T[6]=d*I;T[10]=a*I}else{if(P.order==="YZX"){var e=a*I,L=a*N,U=d*I,V=d*N;
T[0]=I*f;T[4]=V-e*K;T[8]=U*K+L;T[1]=K;T[5]=a*f;T[9]=-d*f;T[2]=-N*f;T[6]=L*K+U;T[10]=e-V*K
}else{if(P.order==="XZY"){var e=a*I,L=a*N,U=d*I,V=d*N;T[0]=I*f;T[4]=-K;T[8]=N*f;
T[1]=e*K+V;T[5]=a*f;T[9]=L*K-U;T[2]=U*K-L;T[6]=d*f;T[10]=V*K+e}}}}}}T[3]=0;T[7]=0;
T[11]=0;T[12]=0;T[13]=0;T[14]=0;T[15]=1;return this},setRotationFromQuaternion:function(b){THREE.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");
return this.makeRotationFromQuaternion(b)},makeRotationFromQuaternion:function(C){var J=this.elements;
var G=C.x,H=C.y,I=C.z,F=C.w;var A=G+G,N=H+H,E=I+I;var K=G*A,L=G*N,M=G*E;var B=H*N,D=H*E,t=I*E;
var q=F*A,u=F*N,v=F*E;J[0]=1-(B+t);J[4]=L-v;J[8]=M+u;J[1]=L+v;J[5]=1-(K+t);J[9]=D-q;
J[2]=M-u;J[6]=D+q;J[10]=1-(K+B);J[3]=0;J[7]=0;J[11]=0;J[12]=0;J[13]=0;J[14]=0;J[15]=1;
return this},lookAt:function(){var e=new THREE.Vector3();var f=new THREE.Vector3();
var d=new THREE.Vector3();return function(c,b,h){var a=this.elements;d.subVectors(c,b).normalize();
if(d.length()===0){d.z=1}e.crossVectors(h,d).normalize();if(e.length()===0){d.x+=0.0001;
e.crossVectors(h,d).normalize()}f.crossVectors(d,e);a[0]=e.x;a[4]=f.x;a[8]=d.x;
a[1]=e.y;a[5]=f.y;a[9]=d.y;a[2]=e.z;a[6]=f.z;a[10]=d.z;return this}}(),multiply:function(d,c){if(c!==undefined){THREE.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead.");
return this.multiplyMatrices(d,c)}return this.multiplyMatrices(this,d)},multiplyMatrices:function(a,b){var aj=a.elements;
var R=b.elements;var aA=this.elements;var am=aj[0],ao=aj[4],ap=aj[8],aq=aj[12];
var S=aj[1],T=aj[5],U=aj[9],V=aj[13];var aa=aj[2],ab=aj[6],ac=aj[10],ad=aj[14];
var ai=aj[3],ak=aj[7],al=aj[11],an=aj[15];var au=R[0],aw=R[4],ay=R[8],az=R[12];
var W=R[1],X=R[5],Y=R[9],Z=R[13];var ae=R[2],af=R[6],ag=R[10],ah=R[14];var ar=R[3],at=R[7],av=R[11],ax=R[15];
aA[0]=am*au+ao*W+ap*ae+aq*ar;aA[4]=am*aw+ao*X+ap*af+aq*at;aA[8]=am*ay+ao*Y+ap*ag+aq*av;
aA[12]=am*az+ao*Z+ap*ah+aq*ax;aA[1]=S*au+T*W+U*ae+V*ar;aA[5]=S*aw+T*X+U*af+V*at;
aA[9]=S*ay+T*Y+U*ag+V*av;aA[13]=S*az+T*Z+U*ah+V*ax;aA[2]=aa*au+ab*W+ac*ae+ad*ar;
aA[6]=aa*aw+ab*X+ac*af+ad*at;aA[10]=aa*ay+ab*Y+ac*ag+ad*av;aA[14]=aa*az+ab*Z+ac*ah+ad*ax;
aA[3]=ai*au+ak*W+al*ae+an*ar;aA[7]=ai*aw+ak*X+al*af+an*at;aA[11]=ai*ay+ak*Y+al*ag+an*av;
aA[15]=ai*az+ak*Z+al*ah+an*ax;return this},multiplyToArray:function(g,h,b){var a=this.elements;
this.multiplyMatrices(g,h);b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];
b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];
b[14]=a[14];b[15]=a[15];return this},multiplyScalar:function(d){var c=this.elements;
c[0]*=d;c[4]*=d;c[8]*=d;c[12]*=d;c[1]*=d;c[5]*=d;c[9]*=d;c[13]*=d;c[2]*=d;c[6]*=d;
c[10]*=d;c[14]*=d;c[3]*=d;c[7]*=d;c[11]*=d;c[15]*=d;return this},multiplyVector3:function(b){THREE.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead.");
return b.applyProjection(this)},multiplyVector4:function(b){THREE.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");
return b.applyMatrix4(this)},multiplyVector3Array:function(a){THREE.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");
return this.applyToVector3Array(a)},applyToVector3Array:function(){var b=new THREE.Vector3();
return function(g,h,i){if(h===undefined){h=0}if(i===undefined){i=g.length}for(var j=0,a=h;
j<i;j+=3,a+=3){b.x=g[a];b.y=g[a+1];b.z=g[a+2];b.applyMatrix4(this);g[a]=b.x;g[a+1]=b.y;
g[a+2]=b.z}return g}}(),rotateAxis:function(b){THREE.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");
b.transformDirection(this)},crossVector:function(b){THREE.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");
return b.applyMatrix4(this)},determinant:function(){var J=this.elements;var u=J[0],v=J[4],B=J[8],D=J[12];
var G=J[1],H=J[5],I=J[9],K=J[13];var L=J[2],r=J[6],s=J[10],t=J[14];var A=J[3],C=J[7],E=J[11],F=J[15];
return(A*(+D*I*r-B*K*r-D*H*s+v*K*s+B*H*t-v*I*t)+C*(+u*I*t-u*K*s+D*G*s-B*G*t+B*K*L-D*I*L)+E*(+u*K*r-u*H*t-D*G*r+v*G*t+D*H*L-v*K*L)+F*(-B*H*L-u*I*r+u*H*s+B*G*r-v*G*s+v*I*L))
},transpose:function(){var c=this.elements;var d;d=c[1];c[1]=c[4];c[4]=d;d=c[2];
c[2]=c[8];c[8]=d;d=c[6];c[6]=c[9];c[9]=d;d=c[3];c[3]=c[12];c[12]=d;d=c[7];c[7]=c[13];
c[13]=d;d=c[11];c[11]=c[14];c[14]=d;return this},flattenToArrayOffset:function(f,d){var e=this.elements;
f[d]=e[0];f[d+1]=e[1];f[d+2]=e[2];f[d+3]=e[3];f[d+4]=e[4];f[d+5]=e[5];f[d+6]=e[6];
f[d+7]=e[7];f[d+8]=e[8];f[d+9]=e[9];f[d+10]=e[10];f[d+11]=e[11];f[d+12]=e[12];f[d+13]=e[13];
f[d+14]=e[14];f[d+15]=e[15];return f},getPosition:function(){var b=new THREE.Vector3();
return function(){THREE.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");
var a=this.elements;return b.set(a[12],a[13],a[14])}}(),setPosition:function(d){var c=this.elements;
c[12]=d.x;c[13]=d.y;c[14]=d.z;return this},getInverse:function(E,O){var P=this.elements;
var G=E.elements;var H=G[0],J=G[4],L=G[8],N=G[12];var m=G[1],B=G[5],C=G[9],D=G[13];
var S=G[2],T=G[6],U=G[10],V=G[14];var F=G[3],I=G[7],K=G[11],M=G[15];P[0]=C*V*I-D*U*I+D*T*K-B*V*K-C*T*M+B*U*M;
P[4]=N*U*I-L*V*I-N*T*K+J*V*K+L*T*M-J*U*M;P[8]=L*D*I-N*C*I+N*B*K-J*D*K-L*B*M+J*C*M;
P[12]=N*C*T-L*D*T-N*B*U+J*D*U+L*B*V-J*C*V;P[1]=D*U*F-C*V*F-D*S*K+m*V*K+C*S*M-m*U*M;
P[5]=L*V*F-N*U*F+N*S*K-H*V*K-L*S*M+H*U*M;P[9]=N*C*F-L*D*F-N*m*K+H*D*K+L*m*M-H*C*M;
P[13]=L*D*S-N*C*S+N*m*U-H*D*U-L*m*V+H*C*V;P[2]=B*V*F-D*T*F+D*S*I-m*V*I-B*S*M+m*T*M;
P[6]=N*T*F-J*V*F-N*S*I+H*V*I+J*S*M-H*T*M;P[10]=J*D*F-N*B*F+N*m*I-H*D*I-J*m*M+H*B*M;
P[14]=N*B*S-J*D*S-N*m*T+H*D*T+J*m*V-H*B*V;P[3]=C*T*F-B*U*F-C*S*I+m*U*I+B*S*K-m*T*K;
P[7]=J*U*F-L*T*F+L*S*I-H*U*I-J*S*K+H*T*K;P[11]=L*B*F-J*C*F-L*m*I+H*C*I+J*m*K-H*B*K;
P[15]=J*C*S-L*B*S+L*m*T-H*C*T-J*m*U+H*B*U;var R=H*P[0]+m*P[4]+S*P[8]+F*P[12];if(R==0){var Q="THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0";
if(O||false){throw new Error(Q)}else{THREE.warn(Q)}this.identity();return this}this.multiplyScalar(1/R);
return this},translate:function(b){THREE.error("THREE.Matrix4: .translate() has been removed.")
},rotateX:function(b){THREE.error("THREE.Matrix4: .rotateX() has been removed.")
},rotateY:function(b){THREE.error("THREE.Matrix4: .rotateY() has been removed.")
},rotateZ:function(b){THREE.error("THREE.Matrix4: .rotateZ() has been removed.")
},rotateByAxis:function(d,c){THREE.error("THREE.Matrix4: .rotateByAxis() has been removed.")
},scale:function(f){var i=this.elements;var g=f.x,h=f.y,j=f.z;i[0]*=g;i[4]*=h;i[8]*=j;
i[1]*=g;i[5]*=h;i[9]*=j;i[2]*=g;i[6]*=h;i[10]*=j;i[3]*=g;i[7]*=h;i[11]*=j;return this
},getMaxScaleOnAxis:function(){var h=this.elements;var g=h[0]*h[0]+h[1]*h[1]+h[2]*h[2];
var e=h[4]*h[4]+h[5]*h[5]+h[6]*h[6];var f=h[8]*h[8]+h[9]*h[9]+h[10]*h[10];return Math.sqrt(Math.max(g,Math.max(e,f)))
},makeTranslation:function(e,f,d){this.set(1,0,0,e,0,1,0,f,0,0,1,d,0,0,0,1);return this
},makeRotationX:function(e){var f=Math.cos(e),c=Math.sin(e);this.set(1,0,0,0,0,f,-c,0,0,c,f,0,0,0,0,1);
return this},makeRotationY:function(e){var f=Math.cos(e),c=Math.sin(e);this.set(f,0,c,0,0,1,0,0,-c,0,f,0,0,0,0,1);
return this},makeRotationZ:function(e){var f=Math.cos(e),c=Math.sin(e);this.set(f,-c,0,0,c,f,0,0,0,0,1,0,0,0,0,1);
return this},makeRotationAxis:function(t,s){var p=Math.cos(s);var c=Math.sin(s);
var l=1-p;var m=t.x,n=t.y,o=t.z;var q=l*m,r=l*n;this.set(q*m+p,q*n-c*o,q*o+c*n,0,q*n+c*o,r*n+p,r*o-c*m,0,q*o-c*n,r*o+c*m,l*o*o+p,0,0,0,0,1);
return this},makeScale:function(e,f,d){this.set(e,0,0,0,0,f,0,0,0,0,d,0,0,0,0,1);
return this},compose:function(e,d,f){this.makeRotationFromQuaternion(d);this.scale(f);
this.setPosition(e);return this},decompose:function(){var d=new THREE.Vector3();
var c=new THREE.Matrix4();return function(p,q,r){var s=this.elements;var a=d.set(s[0],s[1],s[2]).length();
var b=d.set(s[4],s[5],s[6]).length();var n=d.set(s[8],s[9],s[10]).length();var o=this.determinant();
if(o<0){a=-a}p.x=s[12];p.y=s[13];p.z=s[14];c.elements.set(this.elements);var t=1/a;
var u=1/b;var v=1/n;c.elements[0]*=t;c.elements[1]*=t;c.elements[2]*=t;c.elements[4]*=u;
c.elements[5]*=u;c.elements[6]*=u;c.elements[8]*=v;c.elements[9]*=v;c.elements[10]*=v;
q.setFromRotationMatrix(c);r.x=a;r.y=b;r.z=n;return this}}(),makeFrustum:function(B,a,D,d,v,A){var C=this.elements;
var b=2*v/(a-B);var r=2*v/(d-D);var c=(a+B)/(a-B);var s=(d+D)/(d-D);var t=-(A+v)/(A-v);
var u=-2*A*v/(A-v);C[0]=b;C[4]=0;C[8]=c;C[12]=0;C[1]=0;C[5]=r;C[9]=s;C[13]=0;C[2]=0;
C[6]=0;C[10]=t;C[14]=u;C[3]=0;C[7]=0;C[11]=-1;C[15]=0;return this},makePerspective:function(n,p,l,i){var j=l*Math.tan(THREE.Math.degToRad(n*0.5));
var m=-j;var k=m*p;var o=j*p;return this.makeFrustum(k,o,m,j,l,i)},makeOrthographic:function(A,h,q,D,t,u){var B=this.elements;
var o=h-A;var v=q-D;var C=u-t;var p=(h+A)/o;var r=(q+D)/v;var s=(u+t)/C;B[0]=2/o;
B[4]=0;B[8]=0;B[12]=-p;B[1]=0;B[5]=2/v;B[9]=0;B[13]=-r;B[2]=0;B[6]=0;B[10]=-2/C;
B[14]=-s;B[3]=0;B[7]=0;B[11]=0;B[15]=1;return this},fromArray:function(b){this.elements.set(b);
return this},toArray:function(){var b=this.elements;return[b[0],b[1],b[2],b[3],b[4],b[5],b[6],b[7],b[8],b[9],b[10],b[11],b[12],b[13],b[14],b[15]]
},clone:function(){return new THREE.Matrix4().fromArray(this.elements)}};THREE.Ray=function(d,c){this.origin=(d!==undefined)?d:new THREE.Vector3();
this.direction=(c!==undefined)?c:new THREE.Vector3()};THREE.Ray.prototype={constructor:THREE.Ray,set:function(d,c){this.origin.copy(d);
this.direction.copy(c);return this},copy:function(b){this.origin.copy(b.origin);
this.direction.copy(b.direction);return this},at:function(f,d){var e=d||new THREE.Vector3();
return e.copy(this.direction).multiplyScalar(f).add(this.origin)},recast:function(){var b=new THREE.Vector3();
return function(a){this.origin.copy(this.at(a,b));return this}}(),closestPointToPoint:function(e,h){var f=h||new THREE.Vector3();
f.subVectors(e,this.origin);var g=f.dot(this.direction);if(g<0){return f.copy(this.origin)
}return f.copy(this.direction).multiplyScalar(g).add(this.origin)},distanceToPoint:function(){var b=new THREE.Vector3();
return function(a){var d=b.subVectors(a,this.origin).dot(this.direction);if(d<0){return this.origin.distanceTo(a)
}b.copy(this.direction).multiplyScalar(d).add(this.origin);return b.distanceTo(a)
}}(),distanceSqToSegment:function(){var d=new THREE.Vector3();var e=new THREE.Vector3();
var f=new THREE.Vector3();return function(c,v,u,F){d.copy(c).add(v).multiplyScalar(0.5);
e.copy(v).sub(c).normalize();f.copy(this.origin).sub(d);var D=c.distanceTo(v)*0.5;
var H=-this.direction.dot(e);var t=f.dot(this.direction);var A=-f.dot(e);var B=f.lengthSq();
var C=Math.abs(1-H*H);var a,s,G,b;if(C>0){a=H*A-t;s=H*t-A;b=D*C;if(a>=0){if(s>=-b){if(s<=b){var E=1/C;
a*=E;s*=E;G=a*(a+H*s+2*t)+s*(H*a+s+2*A)+B}else{s=D;a=Math.max(0,-(H*s+t));G=-a*a+s*(s+2*A)+B
}}else{s=-D;a=Math.max(0,-(H*s+t));G=-a*a+s*(s+2*A)+B}}else{if(s<=-b){a=Math.max(0,-(-H*D+t));
s=(a>0)?-D:Math.min(Math.max(-D,-A),D);G=-a*a+s*(s+2*A)+B}else{if(s<=b){a=0;s=Math.min(Math.max(-D,-A),D);
G=s*(s+2*A)+B}else{a=Math.max(0,-(H*D+t));s=(a>0)?D:Math.min(Math.max(-D,-A),D);
G=-a*a+s*(s+2*A)+B}}}}else{s=(H>0)?-D:D;a=Math.max(0,-(H*s+t));G=-a*a+s*(s+2*A)+B
}if(u){u.copy(this.direction).multiplyScalar(a).add(this.origin)}if(F){F.copy(e).multiplyScalar(s).add(d)
}return G}}(),isIntersectionSphere:function(b){return this.distanceToPoint(b.center)<=b.radius
},intersectSphere:function(){var b=new THREE.Vector3();return function(a,o){b.subVectors(a.center,this.origin);
var j=b.dot(this.direction);var m=b.dot(b)-j*j;var p=a.radius*a.radius;if(m>p){return null
}var k=Math.sqrt(p-m);var l=j-k;var n=j+k;if(l<0&&n<0){return null}if(l<0){return this.at(n,o)
}return this.at(l,o)}}(),isIntersectionPlane:function(e){var d=e.distanceToPoint(this.origin);
if(d===0){return true}var f=e.normal.dot(this.direction);if(f*d<0){return true}return false
},distanceToPlane:function(e){var f=e.normal.dot(this.direction);if(f==0){if(e.distanceToPoint(this.origin)==0){return 0
}return null}var d=-(this.origin.dot(e.normal)+e.constant)/f;return d>=0?d:null
},intersectPlane:function(e,f){var d=this.distanceToPlane(e);if(d===null){return null
}return this.at(d,f)},isIntersectionBox:function(){var b=new THREE.Vector3();return function(a){return this.intersectBox(a,b)!==null
}}(),intersectBox:function(s,m){var v,r,p,B,q,n;var t=1/this.direction.x,u=1/this.direction.y,A=1/this.direction.z;
var o=this.origin;if(t>=0){v=(s.min.x-o.x)*t;r=(s.max.x-o.x)*t}else{v=(s.max.x-o.x)*t;
r=(s.min.x-o.x)*t}if(u>=0){p=(s.min.y-o.y)*u;B=(s.max.y-o.y)*u}else{p=(s.max.y-o.y)*u;
B=(s.min.y-o.y)*u}if((v>B)||(p>r)){return null}if(p>v||v!==v){v=p}if(B<r||r!==r){r=B
}if(A>=0){q=(s.min.z-o.z)*A;n=(s.max.z-o.z)*A}else{q=(s.max.z-o.z)*A;n=(s.min.z-o.z)*A
}if((v>n)||(q>r)){return null}if(q>v||v!==v){v=q}if(n<r||r!==r){r=n}if(r<0){return null
}return this.at(v>=0?v:r,m)},intersectTriangle:function(){var g=new THREE.Vector3();
var e=new THREE.Vector3();var f=new THREE.Vector3();var h=new THREE.Vector3();return function(b,d,o,t,a){e.subVectors(d,b);
f.subVectors(o,b);h.crossVectors(e,f);var p=this.direction.dot(h);var s;if(p>0){if(t){return null
}s=1}else{if(p<0){s=-1;p=-p}else{return null}}g.subVectors(this.origin,b);var c=s*this.direction.dot(f.crossVectors(g,f));
if(c<0){return null}var r=s*this.direction.dot(e.cross(g));if(r<0){return null}if(c+r>p){return null
}var q=-s*g.dot(h);if(q<0){return null}return this.at(q/p,a)}}(),applyMatrix4:function(b){this.direction.add(this.origin).applyMatrix4(b);
this.origin.applyMatrix4(b);this.direction.sub(this.origin);this.direction.normalize();
return this},equals:function(b){return b.origin.equals(this.origin)&&b.direction.equals(this.direction)
},clone:function(){return new THREE.Ray().copy(this)}};THREE.Sphere=function(c,d){this.center=(c!==undefined)?c:new THREE.Vector3();
this.radius=(d!==undefined)?d:0};THREE.Sphere.prototype={constructor:THREE.Sphere,set:function(c,d){this.center.copy(c);
this.radius=d;return this},setFromPoints:function(){var b=new THREE.Box3();return function(i,h){var a=this.center;
if(h!==undefined){a.copy(h)}else{b.setFromPoints(i).center(a)}var l=0;for(var j=0,k=i.length;
j<k;j++){l=Math.max(l,a.distanceToSquared(i[j]))}this.radius=Math.sqrt(l);return this
}}(),copy:function(b){this.center.copy(b.center);this.radius=b.radius;return this
},empty:function(){return(this.radius<=0)},containsPoint:function(b){return(b.distanceToSquared(this.center)<=(this.radius*this.radius))
},distanceToPoint:function(b){return(b.distanceTo(this.center)-this.radius)},intersectsSphere:function(d){var c=this.radius+d.radius;
return d.center.distanceToSquared(this.center)<=(c*c)},clampPoint:function(e,g){var h=this.center.distanceToSquared(e);
var f=g||new THREE.Vector3();f.copy(e);if(h>(this.radius*this.radius)){f.sub(this.center).normalize();
f.multiplyScalar(this.radius).add(this.center)}return f},getBoundingBox:function(d){var c=d||new THREE.Box3();
c.set(this.center,this.center);c.expandByScalar(this.radius);return c},applyMatrix4:function(b){this.center.applyMatrix4(b);
this.radius=this.radius*b.getMaxScaleOnAxis();return this},translate:function(b){this.center.add(b);
return this},equals:function(b){return b.center.equals(this.center)&&(b.radius===this.radius)
},clone:function(){return new THREE.Sphere().copy(this)}};THREE.Frustum=function(i,j,k,l,g,h){this.planes=[(i!==undefined)?i:new THREE.Plane(),(j!==undefined)?j:new THREE.Plane(),(k!==undefined)?k:new THREE.Plane(),(l!==undefined)?l:new THREE.Plane(),(g!==undefined)?g:new THREE.Plane(),(h!==undefined)?h:new THREE.Plane()]
};THREE.Frustum.prototype={constructor:THREE.Frustum,set:function(j,k,l,m,n,h){var i=this.planes;
i[0].copy(j);i[1].copy(k);i[2].copy(l);i[3].copy(m);i[4].copy(n);i[5].copy(h);return this
},copy:function(f){var e=this.planes;for(var d=0;d<6;d++){e[d].copy(f.planes[d])
}return this},setFromMatrix:function(C){var I=this.planes;var m=C.elements;var E=m[0],G=m[1],H=m[2],J=m[3];
var K=m[4],L=m[5],M=m[6],N=m[7];var O=m[8],P=m[9],u=m[10],v=m[11];var A=m[12],B=m[13],D=m[14],F=m[15];
I[0].setComponents(J-E,N-K,v-O,F-A).normalize();I[1].setComponents(J+E,N+K,v+O,F+A).normalize();
I[2].setComponents(J+G,N+L,v+P,F+B).normalize();I[3].setComponents(J-G,N-L,v-P,F-B).normalize();
I[4].setComponents(J-H,N-M,v-u,F-D).normalize();I[5].setComponents(J+H,N+M,v+u,F+D).normalize();
return this},intersectsObject:function(){var b=new THREE.Sphere();return function(a){var d=a.geometry;
if(d.boundingSphere===null){d.computeBoundingSphere()}b.copy(d.boundingSphere);
b.applyMatrix4(a.matrixWorld);return this.intersectsSphere(b)}}(),intersectsSphere:function(l){var k=this.planes;
var h=l.center;var g=-l.radius;for(var j=0;j<6;j++){var i=k[j].distanceToPoint(h);
if(i<g){return false}}return true},intersectsBox:function(){var c=new THREE.Vector3(),d=new THREE.Vector3();
return function(b){var k=this.planes;for(var j=0;j<6;j++){var l=k[j];c.x=l.normal.x>0?b.min.x:b.max.x;
d.x=l.normal.x>0?b.max.x:b.min.x;c.y=l.normal.y>0?b.min.y:b.max.y;d.y=l.normal.y>0?b.max.y:b.min.y;
c.z=l.normal.z>0?b.min.z:b.max.z;d.z=l.normal.z>0?b.max.z:b.min.z;var a=l.distanceToPoint(c);
var i=l.distanceToPoint(d);if(a<0&&i<0){return false}}return true}}(),containsPoint:function(e){var d=this.planes;
for(var f=0;f<6;f++){if(d[f].distanceToPoint(e)<0){return false}}return true},clone:function(){return new THREE.Frustum().copy(this)
}};THREE.Plane=function(c,d){this.normal=(c!==undefined)?c:new THREE.Vector3(1,0,0);
this.constant=(d!==undefined)?d:0};THREE.Plane.prototype={constructor:THREE.Plane,set:function(c,d){this.normal.copy(c);
this.constant=d;return this},setComponents:function(f,g,h,e){this.normal.set(f,g,h);
this.constant=e;return this},setFromNormalAndCoplanarPoint:function(c,d){this.normal.copy(c);
this.constant=-d.dot(this.normal);return this},setFromCoplanarPoints:function(){var c=new THREE.Vector3();
var d=new THREE.Vector3();return function(h,i,a){var b=c.subVectors(a,i).cross(d.subVectors(h,i)).normalize();
this.setFromNormalAndCoplanarPoint(b,h);return this}}(),copy:function(b){this.normal.copy(b.normal);
this.constant=b.constant;return this},normalize:function(){var b=1/this.normal.length();
this.normal.multiplyScalar(b);this.constant*=b;return this},negate:function(){this.constant*=-1;
this.normal.negate();return this},distanceToPoint:function(b){return this.normal.dot(b)+this.constant
},distanceToSphere:function(b){return this.distanceToPoint(b.center)-b.radius},projectPoint:function(d,c){return this.orthoPoint(d,c).sub(d).negate()
},orthoPoint:function(e,g){var h=this.distanceToPoint(e);var f=g||new THREE.Vector3();
return f.copy(this.normal).multiplyScalar(h)},isIntersectionLine:function(e){var f=this.distanceToPoint(e.start);
var d=this.distanceToPoint(e.end);return(f<0&&d>0)||(d<0&&f>0)},intersectLine:function(){var b=new THREE.Vector3();
return function(l,j){var a=j||new THREE.Vector3();var i=l.delta(b);var h=this.normal.dot(i);
if(h==0){if(this.distanceToPoint(l.start)==0){return a.copy(l.start)}return undefined
}var k=-(l.start.dot(this.normal)+this.constant)/h;if(k<0||k>1){return undefined
}return a.copy(i).multiplyScalar(k).add(l.start)}}(),coplanarPoint:function(c){var d=c||new THREE.Vector3();
return d.copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(){var f=new THREE.Vector3();
var d=new THREE.Vector3();var e=new THREE.Matrix3();return function(i,c){var a=c||e.getNormalMatrix(i);
var b=f.copy(this.normal).applyMatrix3(a);var j=this.coplanarPoint(d);j.applyMatrix4(i);
this.setFromNormalAndCoplanarPoint(b,j);return this}}(),translate:function(b){this.constant=this.constant-b.dot(this.normal);
return this},equals:function(b){return b.normal.equals(this.normal)&&(b.constant==this.constant)
},clone:function(){return new THREE.Plane().copy(this)}};THREE.Math={generateUUID:function(){var g="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
var e=new Array(36);var f=0,h;return function(){for(var a=0;a<36;a++){if(a==8||a==13||a==18||a==23){e[a]="-"
}else{if(a==14){e[a]="4"}else{if(f<=2){f=33554432+(Math.random()*16777216)|0}h=f&15;
f=f>>4;e[a]=g[(a==19)?(h&3)|8:h]}}}return e.join("")}}(),clamp:function(b,a,f){return(b<a)?a:((b>f)?f:b)
},clampBottom:function(a,d){return a<d?d:a},mapLinear:function(f,j,g,h,i){return h+(f-j)*(i-h)/(g-j)
},smoothstep:function(d,f,e){if(d<=f){return 0}if(d>=e){return 1}d=(d-f)/(e-f);
return d*d*(3-2*d)},smootherstep:function(d,f,e){if(d<=f){return 0}if(d>=e){return 1
}d=(d-f)/(e-f);return d*d*d*(d*(d*6-15)+10)},random16:function(){return(65280*Math.random()+255*Math.random())/65535
},randInt:function(d,c){return Math.floor(this.randFloat(d,c))},randFloat:function(d,c){return d+Math.random()*(c-d)
},randFloatSpread:function(b){return b*(0.5-Math.random())},degToRad:function(){var b=Math.PI/180;
return function(a){return a*b}}(),radToDeg:function(){var b=180/Math.PI;return function(a){return a*b
}}(),isPowerOfTwo:function(b){return(b&(b-1))===0&&b!==0},nextPowerOfTwo:function(b){b--;
b|=b>>1;b|=b>>2;b|=b>>4;b|=b>>8;b|=b>>16;b++;return b}};THREE.Spline=function(c){this.points=c;
var t=[],r={x:0,y:0,z:0},o,D,A,B,C,p,q,s,u;this.initFromArray=function(b){this.points=[];
for(var a=0;a<b.length;a++){this.points[a]={x:b[a][0],y:b[a][1],z:b[a][2]}}};this.getPoint=function(a){o=(this.points.length-1)*a;
D=Math.floor(o);A=o-D;t[0]=D===0?D:D-1;t[1]=D;t[2]=D>this.points.length-2?this.points.length-1:D+1;
t[3]=D>this.points.length-3?this.points.length-1:D+2;p=this.points[t[0]];q=this.points[t[1]];
s=this.points[t[2]];u=this.points[t[3]];B=A*A;C=A*B;r.x=v(p.x,q.x,s.x,u.x,A,B,C);
r.y=v(p.y,q.y,s.y,u.y,A,B,C);r.z=v(p.z,q.z,s.z,u.z,A,B,C);return r};this.getControlPointsArray=function(){var d,a,e=this.points.length,b=[];
for(d=0;d<e;d++){a=this.points[d];b[d]=[a.x,a.y,a.z]}return b};this.getLength=function(f){var a,l,k,m,e=0,i=0,d=0,h=new THREE.Vector3(),g=new THREE.Vector3(),j=[],b=0;
j[0]=0;if(!f){f=100}k=this.points.length*f;h.copy(this.points[0]);for(a=1;a<k;a++){l=a/k;
m=this.getPoint(l);g.copy(m);b+=g.distanceTo(h);h.copy(m);e=(this.points.length-1)*l;
i=Math.floor(e);if(i!=d){j[i]=b;d=i}}j[j.length]=b;return{chunks:j,total:b}};this.reparametrizeByArcLength=function(g){var m,a,j,h,f,e,k,l,d=[],i=new THREE.Vector3(),b=this.getLength();
d.push(i.copy(this.points[0]).clone());for(m=1;m<this.points.length;m++){e=b.chunks[m]-b.chunks[m-1];
k=Math.ceil(g*e/b.total);h=(m-1)/(this.points.length-1);f=m/(this.points.length-1);
for(a=1;a<k-1;a++){j=h+a*(1/k)*(f-h);l=this.getPoint(j);d.push(i.copy(l).clone())
}d.push(i.copy(this.points[m]).clone())}this.points=d};function v(h,i,a,b,f,e,g){var j=(a-h)*0.5,d=(b-i)*0.5;
return(2*(i-a)+j+d)*g+(-3*(i-a)-2*j-d)*e+j*f+i}};THREE.Triangle=function(b,c,a){this.a=(b!==undefined)?b:new THREE.Vector3();
this.b=(c!==undefined)?c:new THREE.Vector3();this.c=(a!==undefined)?a:new THREE.Vector3()
};THREE.Triangle.normal=function(){var b=new THREE.Vector3();return function(j,l,a,c){var m=c||new THREE.Vector3();
m.subVectors(a,l);b.subVectors(j,l);m.cross(b);var k=m.lengthSq();if(k>0){return m.multiplyScalar(1/Math.sqrt(k))
}return m.set(0,0,0)}}();THREE.Triangle.barycoordFromPoint=function(){var e=new THREE.Vector3();
var f=new THREE.Vector3();var d=new THREE.Vector3();return function(t,u,A,D,a){e.subVectors(D,u);
f.subVectors(A,u);d.subVectors(t,u);var v=e.dot(e);var B=e.dot(f);var C=e.dot(d);
var F=f.dot(f);var H=f.dot(d);var E=(v*F-B*B);var b=a||new THREE.Vector3();if(E==0){return b.set(-2,-1,-1)
}var G=1/E;var c=(F*C-B*H)*G;var s=(v*H-B*C)*G;return b.set(1-c-s,s,c)}}();THREE.Triangle.containsPoint=function(){var b=new THREE.Vector3();
return function(i,c,j,a){var k=THREE.Triangle.barycoordFromPoint(i,c,j,a,b);return(k.x>=0)&&(k.y>=0)&&((k.x+k.y)<=1)
}}();THREE.Triangle.prototype={constructor:THREE.Triangle,set:function(b,c,a){this.a.copy(b);
this.b.copy(c);this.c.copy(a);return this},setFromPointsAndIndices:function(e,g,h,f){this.a.copy(e[g]);
this.b.copy(e[h]);this.c.copy(e[f]);return this},copy:function(b){this.a.copy(b.a);
this.b.copy(b.b);this.c.copy(b.c);return this},area:function(){var d=new THREE.Vector3();
var c=new THREE.Vector3();return function(){d.subVectors(this.c,this.b);c.subVectors(this.a,this.b);
return d.cross(c).length()*0.5}}(),midpoint:function(c){var d=c||new THREE.Vector3();
return d.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},normal:function(b){return THREE.Triangle.normal(this.a,this.b,this.c,b)
},plane:function(c){var d=c||new THREE.Plane();return d.setFromCoplanarPoints(this.a,this.b,this.c)
},barycoordFromPoint:function(d,c){return THREE.Triangle.barycoordFromPoint(d,this.a,this.b,this.c,c)
},containsPoint:function(b){return THREE.Triangle.containsPoint(b,this.a,this.b,this.c)
},equals:function(b){return b.a.equals(this.a)&&b.b.equals(this.b)&&b.c.equals(this.c)
},clone:function(){return new THREE.Triangle().copy(this)}};THREE.Clock=function(b){this.autoStart=(b!==undefined)?b:true;
this.startTime=0;this.oldTime=0;this.elapsedTime=0;this.running=false};THREE.Clock.prototype={constructor:THREE.Clock,start:function(){this.startTime=self.performance!==undefined&&self.performance.now!==undefined?self.performance.now():Date.now();
this.oldTime=this.startTime;this.running=true},stop:function(){this.getElapsedTime();
this.running=false},getElapsedTime:function(){this.getDelta();return this.elapsedTime
},getDelta:function(){var c=0;if(this.autoStart&&!this.running){this.start()}if(this.running){var d=self.performance!==undefined&&self.performance.now!==undefined?self.performance.now():Date.now();
c=0.001*(d-this.oldTime);this.oldTime=d;this.elapsedTime+=c}return c}};THREE.EventDispatcher=function(){};
THREE.EventDispatcher.prototype={constructor:THREE.EventDispatcher,apply:function(b){b.addEventListener=THREE.EventDispatcher.prototype.addEventListener;
b.hasEventListener=THREE.EventDispatcher.prototype.hasEventListener;b.removeEventListener=THREE.EventDispatcher.prototype.removeEventListener;
b.dispatchEvent=THREE.EventDispatcher.prototype.dispatchEvent},addEventListener:function(d,f){if(this._listeners===undefined){this._listeners={}
}var e=this._listeners;if(e[d]===undefined){e[d]=[]}if(e[d].indexOf(f)===-1){e[d].push(f)
}},hasEventListener:function(d,f){if(this._listeners===undefined){return false}var e=this._listeners;
if(e[d]!==undefined&&e[d].indexOf(f)!==-1){return true}return false},removeEventListener:function(i,h){if(this._listeners===undefined){return
}var j=this._listeners;var g=j[i];if(g!==undefined){var f=g.indexOf(h);if(f!==-1){g.splice(f,1)
}}},dispatchEvent:function(j){if(this._listeners===undefined){return}var l=this._listeners;
var h=l[j.type];if(h!==undefined){j.target=this;var i=[];var k=h.length;for(var g=0;
g<k;g++){i[g]=h[g]}for(var g=0;g<k;g++){i[g].call(this,j)}}}};(function(f){f.Raycaster=function(c,a,b,h){this.ray=new f.Ray(c,a);
this.near=b||0;this.far=h||Infinity;this.params={Sprite:{},Mesh:{},PointCloud:{threshold:1},LOD:{},Line:{}}
};var d=function(a,b){return a.distance-b.distance};var e=function(i,m,a,l){i.raycast(m,a);
if(l===true){var b=i.children;for(var c=0,n=b.length;c<n;c++){e(b[c],m,a,true)}}};
f.Raycaster.prototype={constructor:f.Raycaster,precision:0.0001,linePrecision:1,set:function(b,a){this.ray.set(b,a)
},setFromCamera:function(a,b){if(b instanceof f.PerspectiveCamera){this.ray.origin.copy(b.position);
this.ray.direction.set(a.x,a.y,0.5).unproject(b).sub(b.position).normalize()}else{if(b instanceof f.OrthographicCamera){this.ray.origin.set(a.x,a.y,-1).unproject(b);
this.ray.direction.set(0,0,-1).transformDirection(b.matrixWorld)}else{f.error("THREE.Raycaster: Unsupported camera type.")
}}},intersectObject:function(b,c){var a=[];e(b,this,a,c);a.sort(d);return a},intersectObjects:function(a,i){var b=[];
if(a instanceof Array===false){f.warn("THREE.Raycaster.intersectObjects: objects is not an Array.");
return b}for(var c=0,j=a.length;c<j;c++){e(a[c],this,b,i)}b.sort(d);return b}}}(THREE));
THREE.Object3D=function(){Object.defineProperty(this,"id",{value:THREE.Object3DIdCount++});
this.uuid=THREE.Math.generateUUID();this.name="";this.type="Object3D";this.parent=undefined;
this.children=[];this.up=THREE.Object3D.DefaultUp.clone();var h=new THREE.Vector3();
var l=new THREE.Euler();var j=new THREE.Quaternion();var i=new THREE.Vector3(1,1,1);
var k=function(){j.setFromEuler(l,false)};var g=function(){l.setFromQuaternion(j,undefined,false)
};l.onChange(k);j.onChange(g);Object.defineProperties(this,{position:{enumerable:true,value:h},rotation:{enumerable:true,value:l},quaternion:{enumerable:true,value:j},scale:{enumerable:true,value:i}});
this.rotationAutoUpdate=true;this.matrix=new THREE.Matrix4();this.matrixWorld=new THREE.Matrix4();
this.matrixAutoUpdate=true;this.matrixWorldNeedsUpdate=false;this.visible=true;
this.castShadow=false;this.receiveShadow=false;this.frustumCulled=true;this.renderOrder=0;
this.userData={}};THREE.Object3D.DefaultUp=new THREE.Vector3(0,1,0);THREE.Object3D.prototype={constructor:THREE.Object3D,get eulerOrder(){THREE.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order.");
return this.rotation.order},set eulerOrder(b){THREE.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order.");
this.rotation.order=b},get useQuaternion(){THREE.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
},set useQuaternion(b){THREE.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
},applyMatrix:function(b){this.matrix.multiplyMatrices(b,this.matrix);this.matrix.decompose(this.position,this.quaternion,this.scale)
},setRotationFromAxisAngle:function(d,c){this.quaternion.setFromAxisAngle(d,c)},setRotationFromEuler:function(b){this.quaternion.setFromEuler(b,true)
},setRotationFromMatrix:function(b){this.quaternion.setFromRotationMatrix(b)},setRotationFromQuaternion:function(b){this.quaternion.copy(b)
},rotateOnAxis:function(){var b=new THREE.Quaternion();return function(a,d){b.setFromAxisAngle(a,d);
this.quaternion.multiply(b);return this}}(),rotateX:function(){var b=new THREE.Vector3(1,0,0);
return function(a){return this.rotateOnAxis(b,a)}}(),rotateY:function(){var b=new THREE.Vector3(0,1,0);
return function(a){return this.rotateOnAxis(b,a)}}(),rotateZ:function(){var b=new THREE.Vector3(0,0,1);
return function(a){return this.rotateOnAxis(b,a)}}(),translateOnAxis:function(){var b=new THREE.Vector3();
return function(a,d){b.copy(a).applyQuaternion(this.quaternion);this.position.add(b.multiplyScalar(d));
return this}}(),translate:function(c,d){THREE.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");
return this.translateOnAxis(d,c)},translateX:function(){var b=new THREE.Vector3(1,0,0);
return function(a){return this.translateOnAxis(b,a)}}(),translateY:function(){var b=new THREE.Vector3(0,1,0);
return function(a){return this.translateOnAxis(b,a)}}(),translateZ:function(){var b=new THREE.Vector3(0,0,1);
return function(a){return this.translateOnAxis(b,a)}}(),localToWorld:function(b){return b.applyMatrix4(this.matrixWorld)
},worldToLocal:function(){var b=new THREE.Matrix4();return function(a){return a.applyMatrix4(b.getInverse(this.matrixWorld))
}}(),lookAt:function(){var b=new THREE.Matrix4();return function(a){b.lookAt(a,this.position,this.up);
this.quaternion.setFromRotationMatrix(b)}}(),add:function(d){if(arguments.length>1){for(var c=0;
c<arguments.length;c++){this.add(arguments[c])}return this}if(d===this){THREE.error("THREE.Object3D.add: object can't be added as a child of itself.",d);
return this}if(d instanceof THREE.Object3D){if(d.parent!==undefined){d.parent.remove(d)
}d.parent=this;d.dispatchEvent({type:"added"});this.children.push(d)}else{THREE.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",d)
}return this},remove:function(d){if(arguments.length>1){for(var f=0;f<arguments.length;
f++){this.remove(arguments[f])}}var e=this.children.indexOf(d);if(e!==-1){d.parent=undefined;
d.dispatchEvent({type:"removed"});this.children.splice(e,1)}},getChildByName:function(b){THREE.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");
return this.getObjectByName(b)},getObjectById:function(b){return this.getObjectByProperty("id",b)
},getObjectByName:function(b){return this.getObjectByProperty("name",b)},getObjectByProperty:function(l,j){if(this[l]===j){return this
}for(var k=0,h=this.children.length;k<h;k++){var i=this.children[k];var g=i.getObjectByProperty(l,j);
if(g!==undefined){return g}}return undefined},getWorldPosition:function(c){var d=c||new THREE.Vector3();
this.updateMatrixWorld(true);return d.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(){var d=new THREE.Vector3();
var c=new THREE.Vector3();return function(a){var b=a||new THREE.Quaternion();this.updateMatrixWorld(true);
this.matrixWorld.decompose(d,b,c);return b}}(),getWorldRotation:function(){var b=new THREE.Quaternion();
return function(d){var a=d||new THREE.Euler();this.getWorldQuaternion(b);return a.setFromQuaternion(b,this.rotation.order,false)
}}(),getWorldScale:function(){var d=new THREE.Vector3();var c=new THREE.Quaternion();
return function(a){var b=a||new THREE.Vector3();this.updateMatrixWorld(true);this.matrixWorld.decompose(d,c,b);
return b}}(),getWorldDirection:function(){var b=new THREE.Quaternion();return function(d){var a=d||new THREE.Vector3();
this.getWorldQuaternion(b);return a.set(0,0,1).applyQuaternion(b)}}(),raycast:function(){},traverse:function(f){f(this);
for(var d=0,e=this.children.length;d<e;d++){this.children[d].traverse(f)}},traverseVisible:function(f){if(this.visible===false){return
}f(this);for(var d=0,e=this.children.length;d<e;d++){this.children[d].traverseVisible(f)
}},traverseAncestors:function(b){if(this.parent){b(this.parent);this.parent.traverseAncestors(b)
}},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale);
this.matrixWorldNeedsUpdate=true},updateMatrixWorld:function(f){if(this.matrixAutoUpdate===true){this.updateMatrix()
}if(this.matrixWorldNeedsUpdate===true||f===true){if(this.parent===undefined){this.matrixWorld.copy(this.matrix)
}else{this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)}this.matrixWorldNeedsUpdate=false;
f=true}for(var d=0,e=this.children.length;d<e;d++){this.children[d].updateMatrixWorld(f)
}},toJSON:function(){var k={metadata:{version:4.3,type:"Object",generator:"ObjectExporter"}};
var j={};var i=function(a){if(k.geometries===undefined){k.geometries=[]}if(j[a.uuid]===undefined){var b=a.toJSON();
delete b.metadata;j[a.uuid]=b;k.geometries.push(b)}return a.uuid};var l={};var h=function(a){if(k.materials===undefined){k.materials=[]
}if(l[a.uuid]===undefined){var b=a.toJSON();delete b.metadata;l[a.uuid]=b;k.materials.push(b)
}return a.uuid};var g=function(c){var a={};a.uuid=c.uuid;a.type=c.type;if(c.name!==""){a.name=c.name
}if(JSON.stringify(c.userData)!=="{}"){a.userData=c.userData}if(c.visible!==true){a.visible=c.visible
}if(c instanceof THREE.PerspectiveCamera){a.fov=c.fov;a.aspect=c.aspect;a.near=c.near;
a.far=c.far}else{if(c instanceof THREE.OrthographicCamera){a.left=c.left;a.right=c.right;
a.top=c.top;a.bottom=c.bottom;a.near=c.near;a.far=c.far}else{if(c instanceof THREE.AmbientLight){a.color=c.color.getHex()
}else{if(c instanceof THREE.DirectionalLight){a.color=c.color.getHex();a.intensity=c.intensity
}else{if(c instanceof THREE.PointLight){a.color=c.color.getHex();a.intensity=c.intensity;
a.distance=c.distance;a.decay=c.decay}else{if(c instanceof THREE.SpotLight){a.color=c.color.getHex();
a.intensity=c.intensity;a.distance=c.distance;a.angle=c.angle;a.exponent=c.exponent;
a.decay=c.decay}else{if(c instanceof THREE.HemisphereLight){a.color=c.color.getHex();
a.groundColor=c.groundColor.getHex()}else{if(c instanceof THREE.Mesh||c instanceof THREE.Line||c instanceof THREE.PointCloud){a.geometry=i(c.geometry);
a.material=h(c.material);if(c instanceof THREE.Line){a.mode=c.mode}}else{if(c instanceof THREE.Sprite){a.material=h(c.material)
}}}}}}}}}a.matrix=c.matrix.toArray();if(c.children.length>0){a.children=[];for(var b=0;
b<c.children.length;b++){a.children.push(g(c.children[b]))}}return a};k.object=g(this);
return k},clone:function(e,f){if(e===undefined){e=new THREE.Object3D()}if(f===undefined){f=true
}e.name=this.name;e.up.copy(this.up);e.position.copy(this.position);e.quaternion.copy(this.quaternion);
e.scale.copy(this.scale);e.rotationAutoUpdate=this.rotationAutoUpdate;e.matrix.copy(this.matrix);
e.matrixWorld.copy(this.matrixWorld);e.matrixAutoUpdate=this.matrixAutoUpdate;e.matrixWorldNeedsUpdate=this.matrixWorldNeedsUpdate;
e.visible=this.visible;e.castShadow=this.castShadow;e.receiveShadow=this.receiveShadow;
e.frustumCulled=this.frustumCulled;e.userData=JSON.parse(JSON.stringify(this.userData));
if(f===true){for(var h=0;h<this.children.length;h++){var g=this.children[h];e.add(g.clone())
}}return e}};THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype);THREE.Object3DIdCount=0;
THREE.Face3=function(j,k,a,b,c,l){this.a=j;this.b=k;this.c=a;this.normal=b instanceof THREE.Vector3?b:new THREE.Vector3();
this.vertexNormals=b instanceof Array?b:[];this.color=c instanceof THREE.Color?c:new THREE.Color();
this.vertexColors=c instanceof Array?c:[];this.vertexTangents=[];this.materialIndex=l!==undefined?l:0
};THREE.Face3.prototype={constructor:THREE.Face3,clone:function(){var f=new THREE.Face3(this.a,this.b,this.c);
f.normal.copy(this.normal);f.color.copy(this.color);f.materialIndex=this.materialIndex;
for(var d=0,e=this.vertexNormals.length;d<e;d++){f.vertexNormals[d]=this.vertexNormals[d].clone()
}for(var d=0,e=this.vertexColors.length;d<e;d++){f.vertexColors[d]=this.vertexColors[d].clone()
}for(var d=0,e=this.vertexTangents.length;d<e;d++){f.vertexTangents[d]=this.vertexTangents[d].clone()
}return f}};THREE.Face4=function(l,m,a,b,c,d,n){THREE.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");
return new THREE.Face3(l,m,a,c,d,n)};THREE.BufferAttribute=function(c,d){this.array=c;
this.itemSize=d;this.needsUpdate=false};THREE.BufferAttribute.prototype={constructor:THREE.BufferAttribute,get length(){return this.array.length
},copyAt:function(h,j,i){h*=this.itemSize;i*=j.itemSize;for(var f=0,g=this.itemSize;
f<g;f++){this.array[h+f]=j.array[i+f]}return this},set:function(d,c){if(c===undefined){c=0
}this.array.set(d,c);return this},setX:function(c,d){this.array[c*this.itemSize]=d;
return this},setY:function(d,c){this.array[d*this.itemSize+1]=c;return this},setZ:function(d,c){this.array[d*this.itemSize+2]=c;
return this},setXY:function(d,e,f){d*=this.itemSize;this.array[d]=e;this.array[d+1]=f;
return this},setXYZ:function(e,f,g,h){e*=this.itemSize;this.array[e]=f;this.array[e+1]=g;
this.array[e+2]=h;return this},setXYZW:function(j,g,h,i,f){j*=this.itemSize;this.array[j]=g;
this.array[j+1]=h;this.array[j+2]=i;this.array[j+3]=f;return this},clone:function(){return new THREE.BufferAttribute(new this.array.constructor(this.array),this.itemSize)
}};THREE.Int8Attribute=function(d,c){THREE.warn("THREE.Int8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");
return new THREE.BufferAttribute(d,c)};THREE.Uint8Attribute=function(d,c){THREE.warn("THREE.Uint8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");
return new THREE.BufferAttribute(d,c)};THREE.Uint8ClampedAttribute=function(d,c){THREE.warn("THREE.Uint8ClampedAttribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");
return new THREE.BufferAttribute(d,c)};THREE.Int16Attribute=function(d,c){THREE.warn("THREE.Int16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");
return new THREE.BufferAttribute(d,c)};THREE.Uint16Attribute=function(d,c){THREE.warn("THREE.Uint16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");
return new THREE.BufferAttribute(d,c)};THREE.Int32Attribute=function(d,c){THREE.warn("THREE.Int32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");
return new THREE.BufferAttribute(d,c)};THREE.Uint32Attribute=function(d,c){THREE.warn("THREE.Uint32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");
return new THREE.BufferAttribute(d,c)};THREE.Float32Attribute=function(d,c){THREE.warn("THREE.Float32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");
return new THREE.BufferAttribute(d,c)};THREE.Float64Attribute=function(d,c){THREE.warn("THREE.Float64Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");
return new THREE.BufferAttribute(d,c)};THREE.DynamicBufferAttribute=function(c,d){THREE.BufferAttribute.call(this,c,d);
this.updateRange={offset:0,count:-1}};THREE.DynamicBufferAttribute.prototype=Object.create(THREE.BufferAttribute.prototype);
THREE.DynamicBufferAttribute.prototype.constructor=THREE.DynamicBufferAttribute;
THREE.DynamicBufferAttribute.prototype.clone=function(){return new THREE.DynamicBufferAttribute(new this.array.constructor(this.array),this.itemSize)
};THREE.BufferGeometry=function(){Object.defineProperty(this,"id",{value:THREE.GeometryIdCount++});
this.uuid=THREE.Math.generateUUID();this.name="";this.type="BufferGeometry";this.attributes={};
this.attributesKeys=[];this.drawcalls=[];this.offsets=this.drawcalls;this.boundingBox=null;
this.boundingSphere=null};THREE.BufferGeometry.prototype={constructor:THREE.BufferGeometry,addAttribute:function(d,c){if(c instanceof THREE.BufferAttribute===false){THREE.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute ).");
this.attributes[d]={array:arguments[1],itemSize:arguments[2]};return}this.attributes[d]=c;
this.attributesKeys=Object.keys(this.attributes)},getAttribute:function(b){return this.attributes[b]
},addDrawCall:function(f,e,d){this.drawcalls.push({start:f,count:e,index:d!==undefined?d:0})
},applyMatrix:function(e){var f=this.attributes.position;if(f!==undefined){e.applyToVector3Array(f.array);
f.needsUpdate=true}var h=this.attributes.normal;if(h!==undefined){var g=new THREE.Matrix3().getNormalMatrix(e);
g.applyToVector3Array(h.array);h.needsUpdate=true}if(this.boundingBox!==null){this.computeBoundingBox()
}if(this.boundingSphere!==null){this.computeBoundingSphere()}},center:function(){this.computeBoundingBox();
var b=this.boundingBox.center().negate();this.applyMatrix(new THREE.Matrix4().setPosition(b));
return b},fromGeometry:function(aj,Q){Q=Q||{vertexColors:THREE.NoColors};var ai=aj.vertices;
var ak=aj.faces;var T=aj.faceVertexUvs;var V=Q.vertexColors;var al=T[0].length>0;
var a=ak[0].vertexNormals.length==3;var af=new Float32Array(ak.length*3*3);this.addAttribute("position",new THREE.BufferAttribute(af,3));
var Z=new Float32Array(ak.length*3*3);this.addAttribute("normal",new THREE.BufferAttribute(Z,3));
if(V!==THREE.NoColors){var ac=new Float32Array(ak.length*3*3);this.addAttribute("color",new THREE.BufferAttribute(ac,3))
}if(al===true){var ab=new Float32Array(ak.length*3*2);this.addAttribute("uv",new THREE.BufferAttribute(ab,2))
}for(var aa=0,P=0,R=0;aa<ak.length;aa++,P+=6,R+=9){var ad=ak[aa];var b=ai[ad.a];
var c=ai[ad.b];var n=ai[ad.c];af[R]=b.x;af[R+1]=b.y;af[R+2]=b.z;af[R+3]=c.x;af[R+4]=c.y;
af[R+5]=c.z;af[R+6]=n.x;af[R+7]=n.y;af[R+8]=n.z;if(a===true){var ae=ad.vertexNormals[0];
var ag=ad.vertexNormals[1];var ah=ad.vertexNormals[2];Z[R]=ae.x;Z[R+1]=ae.y;Z[R+2]=ae.z;
Z[R+3]=ag.x;Z[R+4]=ag.y;Z[R+5]=ag.z;Z[R+6]=ah.x;Z[R+7]=ah.y;Z[R+8]=ah.z}else{var S=ad.normal;
Z[R]=S.x;Z[R+1]=S.y;Z[R+2]=S.z;Z[R+3]=S.x;Z[R+4]=S.y;Z[R+5]=S.z;Z[R+6]=S.x;Z[R+7]=S.y;
Z[R+8]=S.z}if(V===THREE.FaceColors){var X=ad.color;ac[R]=X.r;ac[R+1]=X.g;ac[R+2]=X.b;
ac[R+3]=X.r;ac[R+4]=X.g;ac[R+5]=X.b;ac[R+6]=X.r;ac[R+7]=X.g;ac[R+8]=X.b}else{if(V===THREE.VertexColors){var i=ad.vertexColors[0];
var N=ad.vertexColors[1];var O=ad.vertexColors[2];ac[R]=i.r;ac[R+1]=i.g;ac[R+2]=i.b;
ac[R+3]=N.r;ac[R+4]=N.g;ac[R+5]=N.b;ac[R+6]=O.r;ac[R+7]=O.g;ac[R+8]=O.b}}if(al===true){var U=T[0][aa][0];
var W=T[0][aa][1];var Y=T[0][aa][2];ab[P]=U.x;ab[P+1]=U.y;ab[P+2]=W.x;ab[P+3]=W.y;
ab[P+4]=Y.x;ab[P+5]=Y.y}}this.computeBoundingSphere();return this},computeBoundingBox:function(){var b=new THREE.Vector3();
return function(){if(this.boundingBox===null){this.boundingBox=new THREE.Box3()
}var a=this.attributes.position.array;if(a){var f=this.boundingBox;f.makeEmpty();
for(var g=0,h=a.length;g<h;g+=3){b.set(a[g],a[g+1],a[g+2]);f.expandByPoint(b)}}if(a===undefined||a.length===0){this.boundingBox.min.set(0,0,0);
this.boundingBox.max.set(0,0,0)}if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z)){THREE.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.')
}}}(),computeBoundingSphere:function(){var c=new THREE.Box3();var d=new THREE.Vector3();
return function(){if(this.boundingSphere===null){this.boundingSphere=new THREE.Sphere()
}var h=this.attributes.position.array;if(h){c.makeEmpty();var j=this.boundingSphere.center;
for(var a=0,b=h.length;a<b;a+=3){d.set(h[a],h[a+1],h[a+2]);c.expandByPoint(d)}c.center(j);
var i=0;for(var a=0,b=h.length;a<b;a+=3){d.set(h[a],h[a+1],h[a+2]);i=Math.max(i,j.distanceToSquared(d))
}this.boundingSphere.radius=Math.sqrt(i);if(isNaN(this.boundingSphere.radius)){THREE.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.')
}}}}(),computeFaceNormals:function(){},computeVertexNormals:function(){var L=this.attributes;
if(L.position){var M=L.position.array;if(L.normal===undefined){this.addAttribute("normal",new THREE.BufferAttribute(new Float32Array(M.length),3))
}else{var J=L.normal.array;for(var C=0,K=J.length;C<K;C++){J[C]=0}}var J=L.normal.array;
var j,B,D,E=new THREE.Vector3(),G=new THREE.Vector3(),H=new THREE.Vector3(),I=new THREE.Vector3(),i=new THREE.Vector3();
if(L.index){var Q=L.index.array;var P=(this.offsets.length>0?this.offsets:[{start:0,count:Q.length,index:0}]);
for(var F=0,A=P.length;F<A;++F){var R=P[F].start;var N=P[F].count;var O=P[F].index;
for(var C=R,K=R+N;C<K;C+=3){j=(O+Q[C])*3;B=(O+Q[C+1])*3;D=(O+Q[C+2])*3;E.fromArray(M,j);
G.fromArray(M,B);H.fromArray(M,D);I.subVectors(H,G);i.subVectors(E,G);I.cross(i);
J[j]+=I.x;J[j+1]+=I.y;J[j+2]+=I.z;J[B]+=I.x;J[B+1]+=I.y;J[B+2]+=I.z;J[D]+=I.x;J[D+1]+=I.y;
J[D+2]+=I.z}}}else{for(var C=0,K=M.length;C<K;C+=9){E.fromArray(M,C);G.fromArray(M,C+3);
H.fromArray(M,C+6);I.subVectors(H,G);i.subVectors(E,G);I.cross(i);J[C]=I.x;J[C+1]=I.y;
J[C+2]=I.z;J[C+3]=I.x;J[C+4]=I.y;J[C+5]=I.z;J[C+6]=I.x;J[C+7]=I.y;J[C+8]=I.z}}this.normalizeNormals();
L.normal.needsUpdate=true}},computeTangents:function(){if(this.attributes.index===undefined||this.attributes.position===undefined||this.attributes.normal===undefined||this.attributes.uv===undefined){THREE.warn("THREE.BufferGeometry: Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()");
return}var aT=this.attributes.index.array;var aM=this.attributes.position.array;
var aI=this.attributes.normal.array;var ao=this.attributes.uv.array;var aJ=aM.length/3;
if(this.attributes.tangent===undefined){this.addAttribute("tangent",new THREE.BufferAttribute(new Float32Array(4*aJ),4))
}var aD=this.attributes.tangent.array;var aB=[],aC=[];for(var r=0;r<aJ;r++){aB[r]=new THREE.Vector3();
aC[r]=new THREE.Vector3()}var ah=new THREE.Vector3(),ak=new THREE.Vector3(),al=new THREE.Vector3(),aO=new THREE.Vector2(),aP=new THREE.Vector2(),aQ=new THREE.Vector2(),aK,aL,aw,ay,aq,ar,aG,i,at,au,aj;
var aS=new THREE.Vector3(),az=new THREE.Vector3();function ap(b,c,a){ah.fromArray(aM,b*3);
ak.fromArray(aM,c*3);al.fromArray(aM,a*3);aO.fromArray(ao,b*2);aP.fromArray(ao,c*2);
aQ.fromArray(ao,a*2);aK=ak.x-ah.x;aL=al.x-ah.x;aw=ak.y-ah.y;ay=al.y-ah.y;aq=ak.z-ah.z;
ar=al.z-ah.z;aG=aP.x-aO.x;i=aQ.x-aO.x;at=aP.y-aO.y;au=aQ.y-aO.y;aj=1/(aG*au-i*at);
aS.set((au*aK-at*aL)*aj,(au*aw-at*ay)*aj,(au*aq-at*ar)*aj);az.set((aG*aL-i*aK)*aj,(aG*ay-i*aw)*aj,(aG*ar-i*aq)*aj);
aB[b].add(aS);aB[c].add(aS);aB[a].add(aS);aC[b].add(az);aC[c].add(az);aC[a].add(az)
}var k,ax;var n,aN;var aU,aV,aW;if(this.drawcalls.length===0){this.addDrawCall(0,aT.length,0)
}var aF=this.drawcalls;for(n=0,aN=aF.length;n<aN;++n){var aE=aF[n].start;var ai=aF[n].count;
var av=aF[n].index;for(k=aE,ax=aE+ai;k<ax;k+=3){aU=av+aT[k];aV=av+aT[k+1];aW=av+aT[k+2];
ap(aU,aV,aW)}}var ag=new THREE.Vector3(),j=new THREE.Vector3();var t=new THREE.Vector3(),aA=new THREE.Vector3();
var an,am,aR;function aH(a){t.fromArray(aI,a*3);aA.copy(t);am=aB[a];ag.copy(am);
ag.sub(t.multiplyScalar(t.dot(am))).normalize();j.crossVectors(aA,am);aR=j.dot(aC[a]);
an=(aR<0)?-1:1;aD[a*4]=ag.x;aD[a*4+1]=ag.y;aD[a*4+2]=ag.z;aD[a*4+3]=an}for(n=0,aN=aF.length;
n<aN;++n){var aE=aF[n].start;var ai=aF[n].count;var av=aF[n].index;for(k=aE,ax=aE+ai;
k<ax;k+=3){aU=av+aT[k];aV=av+aT[k+1];aW=av+aT[k+2];aH(aU);aH(aV);aH(aW)}}},computeOffsets:function(J){if(J===undefined){J=65535
}var Q=this.attributes.index.array;var N=this.attributes.position.array;var K=(Q.length/3);
var I=new Uint16Array(Q.length);var V=0;var T=0;var O=[{start:0,count:0,index:0}];
var P=O[0];var U=0;var R=0;var F=new Int32Array(6);var E=new Int32Array(N.length);
var H=new Int32Array(N.length);for(var D=0;D<N.length;D++){E[D]=-1;H[D]=-1}for(var C=0;
C<K;C++){R=0;for(var v=0;v<3;v++){var j=Q[C*3+v];if(E[j]==-1){F[v*2]=j;F[v*2+1]=-1;
R++}else{if(E[j]<P.index){F[v*2]=j;F[v*2+1]=-1;U++}else{F[v*2]=j;F[v*2+1]=E[j]}}}var M=T+R;
if(M>(P.index+J)){var G={start:V,count:0,index:T};O.push(G);P=G;for(var L=0;L<6;
L+=2){var S=F[L+1];if(S>-1&&S<P.index){F[L+1]=-1}}}for(var L=0;L<6;L+=2){var j=F[L];
var S=F[L+1];if(S===-1){S=T++}E[j]=S;H[S]=j;I[V++]=S-P.index;P.count++}}this.reorderBuffers(I,H,T);
this.offsets=O;this.drawcalls=O;return O},merge:function(j,q){if(j instanceof THREE.BufferGeometry===false){THREE.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",j);
return}if(q===undefined){q=0}var p=this.attributes;for(var i in p){if(j.attributes[i]===undefined){continue
}var s=p[i];var u=s.array;var t=j.attributes[i];var v=t.array;var n=t.itemSize;
for(var o=0,r=n*q;o<v.length;o++,r++){u[r]=v[o]}}return this},normalizeNormals:function(){var m=this.attributes.normal.array;
var i,j,l,k;for(var n=0,h=m.length;n<h;n+=3){i=m[n];j=m[n+1];l=m[n+2];k=1/Math.sqrt(i*i+j*j+l*l);
m[n]*=k;m[n+1]*=k;m[n+2]*=k}},reorderBuffers:function(s,o,B){var t={};for(var p in this.attributes){if(p=="index"){continue
}var q=this.attributes[p].array;t[p]=new q.constructor(this.attributes[p].itemSize*B)
}for(var A=0;A<B;A++){var n=o[A];for(var p in this.attributes){if(p=="index"){continue
}var v=this.attributes[p].array;var r=this.attributes[p].itemSize;var k=t[p];for(var u=0;
u<r;u++){k[A*r+u]=v[n*r+u]}}}this.attributes.index.array=s;for(var p in this.attributes){if(p=="index"){continue
}this.attributes[p].array=t[p];this.attributes[p].numItems=this.attributes[p].itemSize*B
}},toJSON:function(){var h={metadata:{version:4,type:"BufferGeometry",generator:"BufferGeometryExporter"},uuid:this.uuid,type:this.type,data:{attributes:{}}};
var i=this.attributes;var k=this.offsets;var m=this.boundingSphere;for(var n in i){var l=i[n];
var j=Array.prototype.slice.call(l.array);h.data.attributes[n]={itemSize:l.itemSize,type:l.array.constructor.name,array:j}
}if(k.length>0){h.data.offsets=JSON.parse(JSON.stringify(k))}if(m!==null){h.data.boundingSphere={center:m.center.toArray(),radius:m.radius}
}return h},clone:function(){var j=new THREE.BufferGeometry();for(var h in this.attributes){var i=this.attributes[h];
j.addAttribute(h,i.clone())}for(var l=0,g=this.offsets.length;l<g;l++){var k=this.offsets[l];
j.offsets.push({start:k.start,index:k.index,count:k.count})}return j},dispose:function(){this.dispatchEvent({type:"dispose"})
}};THREE.EventDispatcher.prototype.apply(THREE.BufferGeometry.prototype);THREE.Geometry=function(){Object.defineProperty(this,"id",{value:THREE.GeometryIdCount++});
this.uuid=THREE.Math.generateUUID();this.name="";this.type="Geometry";this.vertices=[];
this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphColors=[];
this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];
this.boundingBox=null;this.boundingSphere=null;this.hasTangents=false;this.dynamic=true;
this.verticesNeedUpdate=false;this.elementsNeedUpdate=false;this.uvsNeedUpdate=false;
this.normalsNeedUpdate=false;this.tangentsNeedUpdate=false;this.colorsNeedUpdate=false;
this.lineDistancesNeedUpdate=false;this.groupsNeedUpdate=false};THREE.Geometry.prototype={constructor:THREE.Geometry,applyMatrix:function(i){var k=new THREE.Matrix3().getNormalMatrix(i);
for(var n=0,j=this.vertices.length;n<j;n++){var l=this.vertices[n];l.applyMatrix4(i)
}for(var n=0,j=this.faces.length;n<j;n++){var m=this.faces[n];m.normal.applyMatrix3(k).normalize();
for(var p=0,o=m.vertexNormals.length;p<o;p++){m.vertexNormals[p].applyMatrix3(k).normalize()
}}if(this.boundingBox!==null){this.computeBoundingBox()}if(this.boundingSphere!==null){this.computeBoundingSphere()
}this.verticesNeedUpdate=true;this.normalsNeedUpdate=true},fromBufferGeometry:function(M){var O=this;
var G=M.attributes;var K=G.position.array;var L=G.index!==undefined?G.index.array:undefined;
var C=G.normal!==undefined?G.normal.array:undefined;var F=G.color!==undefined?G.color.array:undefined;
var E=G.uv!==undefined?G.uv.array:undefined;var P=[];var B=[];for(var j=0,v=0;j<K.length;
j+=3,v+=2){O.vertices.push(new THREE.Vector3(K[j],K[j+1],K[j+2]));if(C!==undefined){P.push(new THREE.Vector3(C[j],C[j+1],C[j+2]))
}if(F!==undefined){O.colors.push(new THREE.Color(F[j],F[j+1],F[j+2]))}if(E!==undefined){B.push(new THREE.Vector2(E[v],E[v+1]))
}}var J=function(c,d,e){var b=C!==undefined?[P[c].clone(),P[d].clone(),P[e].clone()]:[];
var a=F!==undefined?[O.colors[c].clone(),O.colors[d].clone(),O.colors[e].clone()]:[];
O.faces.push(new THREE.Face3(c,d,e,b,a));if(E!==undefined){O.faceVertexUvs[0].push([B[c].clone(),B[d].clone(),B[e].clone()])
}};if(L!==undefined){var D=M.drawcalls;if(D.length>0){for(var j=0;j<D.length;j++){var A=D[j];
var N=A.start;var H=A.count;var I=A.index;for(var v=N,i=N+H;v<i;v+=3){J(I+L[v],I+L[v+1],I+L[v+2])
}}}else{for(var j=0;j<L.length;j+=3){J(L[j],L[j+1],L[j+2])}}}else{for(var j=0;j<K.length/3;
j+=3){J(j,j+1,j+2)}}this.computeFaceNormals();if(M.boundingBox!==null){this.boundingBox=M.boundingBox.clone()
}if(M.boundingSphere!==null){this.boundingSphere=M.boundingSphere.clone()}return this
},center:function(){this.computeBoundingBox();var b=this.boundingBox.center().negate();
this.applyMatrix(new THREE.Matrix4().setPosition(b));return b},computeFaceNormals:function(){var j=new THREE.Vector3(),k=new THREE.Vector3();
for(var l=0,m=this.faces.length;l<m;l++){var n=this.faces[l];var o=this.vertices[n.a];
var p=this.vertices[n.b];var f=this.vertices[n.c];j.subVectors(f,p);k.subVectors(o,p);
j.cross(k);j.normalize();n.normal.copy(j)}},computeVertexNormals:function(s){var n,u,r,o,p,q;
q=new Array(this.vertices.length);for(n=0,u=this.vertices.length;n<u;n++){q[n]=new THREE.Vector3()
}if(s){var v,A,B;var t=new THREE.Vector3(),f=new THREE.Vector3();for(r=0,o=this.faces.length;
r<o;r++){p=this.faces[r];v=this.vertices[p.a];A=this.vertices[p.b];B=this.vertices[p.c];
t.subVectors(B,A);f.subVectors(v,A);t.cross(f);q[p.a].add(t);q[p.b].add(t);q[p.c].add(t)
}}else{for(r=0,o=this.faces.length;r<o;r++){p=this.faces[r];q[p.a].add(p.normal);
q[p.b].add(p.normal);q[p.c].add(p.normal)}}for(n=0,u=this.vertices.length;n<u;n++){q[n].normalize()
}for(r=0,o=this.faces.length;r<o;r++){p=this.faces[r];p.vertexNormals[0]=q[p.a].clone();
p.vertexNormals[1]=q[p.b].clone();p.vertexNormals[2]=q[p.c].clone()}},computeMorphNormals:function(){var r,i,q,f,p;
for(q=0,f=this.faces.length;q<f;q++){p=this.faces[q];if(!p.__originalFaceNormal){p.__originalFaceNormal=p.normal.clone()
}else{p.__originalFaceNormal.copy(p.normal)}if(!p.__originalVertexNormals){p.__originalVertexNormals=[]
}for(r=0,i=p.vertexNormals.length;r<i;r++){if(!p.__originalVertexNormals[r]){p.__originalVertexNormals[r]=p.vertexNormals[r].clone()
}else{p.__originalVertexNormals[r].copy(p.vertexNormals[r])}}}var t=new THREE.Geometry();
t.faces=this.faces;for(r=0,i=this.morphTargets.length;r<i;r++){if(!this.morphNormals[r]){this.morphNormals[r]={};
this.morphNormals[r].faceNormals=[];this.morphNormals[r].vertexNormals=[];var s=this.morphNormals[r].faceNormals;
var v=this.morphNormals[r].vertexNormals;var n,u;for(q=0,f=this.faces.length;q<f;
q++){n=new THREE.Vector3();u={a:new THREE.Vector3(),b:new THREE.Vector3(),c:new THREE.Vector3()};
s.push(n);v.push(u)}}var o=this.morphNormals[r];t.vertices=this.morphTargets[r].vertices;
t.computeFaceNormals();t.computeVertexNormals();var n,u;for(q=0,f=this.faces.length;
q<f;q++){p=this.faces[q];n=o.faceNormals[q];u=o.vertexNormals[q];n.copy(p.normal);
u.a.copy(p.vertexNormals[0]);u.b.copy(p.vertexNormals[1]);u.c.copy(p.vertexNormals[2])
}}for(q=0,f=this.faces.length;q<f;q++){p=this.faces[q];p.normal=p.__originalFaceNormal;
p.vertexNormals=p.__originalVertexNormals}},computeTangents:function(){var W,ap,ag,ar,X,ai,av,ao,aa,ad,ae,aw,ax,ay,at,au,f,i,ak,al,t,v,am,an,ac,af,az,n=[],r=[],aA=new THREE.Vector3(),aq=new THREE.Vector3(),Z=new THREE.Vector3(),V=new THREE.Vector3(),Y=new THREE.Vector3(),ah;
for(ag=0,ar=this.vertices.length;ag<ar;ag++){n[ag]=new THREE.Vector3();r[ag]=new THREE.Vector3()
}function aj(b,d,g,a,c,e,h){aa=b.vertices[d];ad=b.vertices[g];ae=b.vertices[a];
aw=ao[c];ax=ao[e];ay=ao[h];at=ad.x-aa.x;au=ae.x-aa.x;f=ad.y-aa.y;i=ae.y-aa.y;ak=ad.z-aa.z;
al=ae.z-aa.z;t=ax.x-aw.x;v=ay.x-aw.x;am=ax.y-aw.y;an=ay.y-aw.y;ac=1/(t*an-v*am);
aA.set((an*at-am*au)*ac,(an*f-am*i)*ac,(an*ak-am*al)*ac);aq.set((t*au-v*at)*ac,(t*i-v*f)*ac,(t*al-v*ak)*ac);
n[d].add(aA);n[g].add(aA);n[a].add(aA);r[d].add(aq);r[g].add(aq);r[a].add(aq)}for(W=0,ap=this.faces.length;
W<ap;W++){av=this.faces[W];ao=this.faceVertexUvs[0][W];aj(this,av.a,av.b,av.c,0,1,2)
}var ab=["a","b","c","d"];for(W=0,ap=this.faces.length;W<ap;W++){av=this.faces[W];
for(X=0;X<Math.min(av.vertexNormals.length,3);X++){Y.copy(av.vertexNormals[X]);
ai=av[ab[X]];af=n[ai];Z.copy(af);Z.sub(Y.multiplyScalar(Y.dot(af))).normalize();
V.crossVectors(av.vertexNormals[X],af);az=V.dot(r[ai]);ah=(az<0)?-1:1;av.vertexTangents[X]=new THREE.Vector4(Z.x,Z.y,Z.z,ah)
}}this.hasTangents=true},computeLineDistances:function(){var g=0;var d=this.vertices;
for(var h=0,f=d.length;h<f;h++){if(h>0){g+=d[h].distanceTo(d[h-1])}this.lineDistances[h]=g
}},computeBoundingBox:function(){if(this.boundingBox===null){this.boundingBox=new THREE.Box3()
}this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){if(this.boundingSphere===null){this.boundingSphere=new THREE.Sphere()
}this.boundingSphere.setFromPoints(this.vertices)},merge:function(W,I,F){if(W instanceof THREE.Geometry===false){THREE.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",W);
return}var T,R=this.vertices.length,Y=this.vertices,Z=W.vertices,aa=this.faces,ab=W.faces,M=this.faceVertexUvs[0],N=W.faceVertexUvs[0];
if(F===undefined){F=0}if(I!==undefined){T=new THREE.Matrix3().getNormalMatrix(I)
}for(var G=0,S=Z.length;G<S;G++){var K=Z[G];var O=K.clone();if(I!==undefined){O.applyMatrix4(I)
}Y.push(O)}for(G=0,S=ab.length;G<S;G++){var U=ab[G],P,H,L,Q=U.vertexNormals,i=U.vertexColors;
P=new THREE.Face3(U.a+R,U.b+R,U.c+R);P.normal.copy(U.normal);if(T!==undefined){P.normal.applyMatrix3(T).normalize()
}for(var J=0,j=Q.length;J<j;J++){H=Q[J].clone();if(T!==undefined){H.applyMatrix3(T).normalize()
}P.vertexNormals.push(H)}P.color.copy(U.color);for(var J=0,j=i.length;J<j;J++){L=i[J];
P.vertexColors.push(L.clone())}P.materialIndex=U.materialIndex+F;aa.push(P)}for(G=0,S=N.length;
G<S;G++){var V=N[G],X=[];if(V===undefined){continue}for(var J=0,j=V.length;J<j;
J++){X.push(V[J].clone())}M.push(X)}},mergeMesh:function(b){if(b instanceof THREE.Mesh===false){THREE.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",b);
return}b.matrixAutoUpdate&&b.updateMatrix();this.merge(b.geometry,b.matrix)},mergeVertices:function(){var M={};
var N=[],j=[];var I,i;var H=4;var n=Math.pow(10,H);var A,J,K;var L,B,v;for(A=0,J=this.vertices.length;
A<J;A++){I=this.vertices[A];i=Math.round(I.x*n)+"_"+Math.round(I.y*n)+"_"+Math.round(I.z*n);
if(M[i]===undefined){M[i]=A;N.push(this.vertices[A]);j[A]=N.length-1}else{j[A]=j[M[i]]
}}var E=[];for(A=0,J=this.faces.length;A<J;A++){K=this.faces[A];K.a=j[K.a];K.b=j[K.b];
K.c=j[K.c];L=[K.a,K.b,K.c];var C=-1;for(var D=0;D<3;D++){if(L[D]==L[(D+1)%3]){C=D;
E.push(A);break}}}for(A=E.length-1;A>=0;A--){var F=E[A];this.faces.splice(F,1);
for(B=0,v=this.faceVertexUvs.length;B<v;B++){this.faceVertexUvs[B].splice(F,1)}}var G=this.vertices.length-N.length;
this.vertices=N;return G},toJSON:function(){var ac={metadata:{version:4,type:"BufferGeometry",generator:"BufferGeometryExporter"},uuid:this.uuid,type:this.type};
if(this.name!==""){ac.name=this.name}if(this.parameters!==undefined){var ae=this.parameters;
for(var i in ae){if(ae[i]!==undefined){ac[i]=ae[i]}}return ac}var af=[];for(var J=0;
J<this.vertices.length;J++){var S=this.vertices[J];af.push(S.x,S.y,S.z)}var ai=[];
var T=[];var X={};var ab=[];var N={};var aa=[];var ag={};for(var J=0;J<this.faces.length;
J++){var ad=this.faces[J];var W=false;var P=false;var aj=this.faceVertexUvs[0][J]!==undefined;
var V=ad.normal.length()>0;var L=ad.vertexNormals.length>0;var O=ad.color.r!==1||ad.color.g!==1||ad.color.b!==1;
var U=ad.vertexColors.length>0;var I=0;I=Y(I,0,0);I=Y(I,1,W);I=Y(I,2,P);I=Y(I,3,aj);
I=Y(I,4,V);I=Y(I,5,L);I=Y(I,6,O);I=Y(I,7,U);ai.push(I);ai.push(ad.a,ad.b,ad.c);
if(aj){var R=this.faceVertexUvs[0][J];ai.push(ah(R[0]),ah(R[1]),ah(R[2]))}if(V){ai.push(K(ad.normal))
}if(L){var M=ad.vertexNormals;ai.push(K(M[0]),K(M[1]),K(M[2]))}if(O){ai.push(Z(ad.color))
}if(U){var Q=ad.vertexColors;ai.push(Z(Q[0]),Z(Q[1]),Z(Q[2]))}}function Y(a,c,b){return b?a|(1<<c):a&(~(1<<c))
}function K(a){var b=a.x.toString()+a.y.toString()+a.z.toString();if(X[b]!==undefined){return X[b]
}X[b]=T.length/3;T.push(a.x,a.y,a.z);return X[b]}function Z(b){var a=b.r.toString()+b.g.toString()+b.b.toString();
if(N[a]!==undefined){return N[a]}N[a]=ab.length;ab.push(b.getHex());return N[a]
}function ah(b){var a=b.x.toString()+b.y.toString();if(ag[a]!==undefined){return ag[a]
}ag[a]=aa.length/2;aa.push(b.x,b.y);return ag[a]}ac.data={};ac.data.vertices=af;
ac.data.normals=T;if(ab.length>0){ac.data.colors=ab}if(aa.length>0){ac.data.uvs=[aa]
}ac.data.faces=ai;return ac},clone:function(){var k=new THREE.Geometry();var q=this.vertices;
for(var t=0,j=q.length;t<j;t++){k.vertices.push(q[t].clone())}var B=this.faces;
for(var t=0,j=B.length;t<j;t++){k.faces.push(B[t].clone())}for(var t=0,j=this.faceVertexUvs.length;
t<j;t++){var r=this.faceVertexUvs[t];if(k.faceVertexUvs[t]===undefined){k.faceVertexUvs[t]=[]
}for(var u=0,s=r.length;u<s;u++){var v=r[u],i=[];for(var A=0,D=v.length;A<D;A++){var C=v[A];
i.push(C.clone())}k.faceVertexUvs[t].push(i)}}return k},dispose:function(){this.dispatchEvent({type:"dispose"})
}};THREE.EventDispatcher.prototype.apply(THREE.Geometry.prototype);THREE.GeometryIdCount=0;
THREE.Camera=function(){THREE.Object3D.call(this);this.type="Camera";this.matrixWorldInverse=new THREE.Matrix4();
this.projectionMatrix=new THREE.Matrix4()};THREE.Camera.prototype=Object.create(THREE.Object3D.prototype);
THREE.Camera.prototype.constructor=THREE.Camera;THREE.Camera.prototype.getWorldDirection=function(){var b=new THREE.Quaternion();
return function(d){var a=d||new THREE.Vector3();this.getWorldQuaternion(b);return a.set(0,0,-1).applyQuaternion(b)
}}();THREE.Camera.prototype.lookAt=function(){var b=new THREE.Matrix4();return function(a){b.lookAt(this.position,a,this.up);
this.quaternion.setFromRotationMatrix(b)}}();THREE.Camera.prototype.clone=function(b){if(b===undefined){b=new THREE.Camera()
}THREE.Object3D.prototype.clone.call(this,b);b.matrixWorldInverse.copy(this.matrixWorldInverse);
b.projectionMatrix.copy(this.projectionMatrix);return b};THREE.CubeCamera=function(q,r,p){THREE.Object3D.call(this);
this.type="CubeCamera";var s=90,u=1;var t=new THREE.PerspectiveCamera(s,u,q,r);
t.up.set(0,-1,0);t.lookAt(new THREE.Vector3(1,0,0));this.add(t);var m=new THREE.PerspectiveCamera(s,u,q,r);
m.up.set(0,-1,0);m.lookAt(new THREE.Vector3(-1,0,0));this.add(m);var v=new THREE.PerspectiveCamera(s,u,q,r);
v.up.set(0,0,1);v.lookAt(new THREE.Vector3(0,1,0));this.add(v);var n=new THREE.PerspectiveCamera(s,u,q,r);
n.up.set(0,0,-1);n.lookAt(new THREE.Vector3(0,-1,0));this.add(n);var l=new THREE.PerspectiveCamera(s,u,q,r);
l.up.set(0,-1,0);l.lookAt(new THREE.Vector3(0,0,1));this.add(l);var o=new THREE.PerspectiveCamera(s,u,q,r);
o.up.set(0,-1,0);o.lookAt(new THREE.Vector3(0,0,-1));this.add(o);this.renderTarget=new THREE.WebGLRenderTargetCube(p,p,{format:THREE.RGBFormat,magFilter:THREE.LinearFilter,minFilter:THREE.LinearFilter});
this.updateCubeMap=function(d,c){var a=this.renderTarget;var b=a.generateMipmaps;
a.generateMipmaps=false;a.activeCubeFace=0;d.render(c,t,a);a.activeCubeFace=1;d.render(c,m,a);
a.activeCubeFace=2;d.render(c,v,a);a.activeCubeFace=3;d.render(c,n,a);a.activeCubeFace=4;
d.render(c,l,a);a.generateMipmaps=b;a.activeCubeFace=5;d.render(c,o,a)}};THREE.CubeCamera.prototype=Object.create(THREE.Object3D.prototype);
THREE.CubeCamera.prototype.constructor=THREE.CubeCamera;THREE.OrthographicCamera=function(i,l,j,g,k,h){THREE.Camera.call(this);
this.type="OrthographicCamera";this.zoom=1;this.left=i;this.right=l;this.top=j;
this.bottom=g;this.near=(k!==undefined)?k:0.1;this.far=(h!==undefined)?h:2000;this.updateProjectionMatrix()
};THREE.OrthographicCamera.prototype=Object.create(THREE.Camera.prototype);THREE.OrthographicCamera.prototype.constructor=THREE.OrthographicCamera;
THREE.OrthographicCamera.prototype.updateProjectionMatrix=function(){var h=(this.right-this.left)/(2*this.zoom);
var e=(this.top-this.bottom)/(2*this.zoom);var f=(this.right+this.left)/2;var g=(this.top+this.bottom)/2;
this.projectionMatrix.makeOrthographic(f-h,f+h,g+e,g-e,this.near,this.far)};THREE.OrthographicCamera.prototype.clone=function(){var b=new THREE.OrthographicCamera();
THREE.Camera.prototype.clone.call(this,b);b.zoom=this.zoom;b.left=this.left;b.right=this.right;
b.top=this.top;b.bottom=this.bottom;b.near=this.near;b.far=this.far;b.projectionMatrix.copy(this.projectionMatrix);
return b};THREE.PerspectiveCamera=function(h,e,g,f){THREE.Camera.call(this);this.type="PerspectiveCamera";
this.zoom=1;this.fov=h!==undefined?h:50;this.aspect=e!==undefined?e:1;this.near=g!==undefined?g:0.1;
this.far=f!==undefined?f:2000;this.updateProjectionMatrix()};THREE.PerspectiveCamera.prototype=Object.create(THREE.Camera.prototype);
THREE.PerspectiveCamera.prototype.constructor=THREE.PerspectiveCamera;THREE.PerspectiveCamera.prototype.setLens=function(c,d){if(d===undefined){d=24
}this.fov=2*THREE.Math.radToDeg(Math.atan(d/(c*2)));this.updateProjectionMatrix()
};THREE.PerspectiveCamera.prototype.setViewOffset=function(j,l,g,i,k,h){this.fullWidth=j;
this.fullHeight=l;this.x=g;this.y=i;this.width=k;this.height=h;this.updateProjectionMatrix()
};THREE.PerspectiveCamera.prototype.updateProjectionMatrix=function(){var o=THREE.Math.radToDeg(2*Math.atan(Math.tan(THREE.Math.degToRad(this.fov)*0.5)/this.zoom));
if(this.fullWidth){var p=this.fullWidth/this.fullHeight;var k=Math.tan(THREE.Math.degToRad(o*0.5))*this.near;
var i=-k;var l=p*i;var n=p*k;var m=Math.abs(n-l);var j=Math.abs(k-i);this.projectionMatrix.makeFrustum(l+this.x*m/this.fullWidth,l+(this.x+this.width)*m/this.fullWidth,k-(this.y+this.height)*j/this.fullHeight,k-this.y*j/this.fullHeight,this.near,this.far)
}else{this.projectionMatrix.makePerspective(o,this.aspect,this.near,this.far)}};
THREE.PerspectiveCamera.prototype.clone=function(){var b=new THREE.PerspectiveCamera();
THREE.Camera.prototype.clone.call(this,b);b.zoom=this.zoom;b.fov=this.fov;b.aspect=this.aspect;
b.near=this.near;b.far=this.far;b.projectionMatrix.copy(this.projectionMatrix);
return b};THREE.Light=function(b){THREE.Object3D.call(this);this.type="Light";this.color=new THREE.Color(b)
};THREE.Light.prototype=Object.create(THREE.Object3D.prototype);THREE.Light.prototype.constructor=THREE.Light;
THREE.Light.prototype.clone=function(b){if(b===undefined){b=new THREE.Light()}THREE.Object3D.prototype.clone.call(this,b);
b.color.copy(this.color);return b};THREE.AmbientLight=function(b){THREE.Light.call(this,b);
this.type="AmbientLight"};THREE.AmbientLight.prototype=Object.create(THREE.Light.prototype);
THREE.AmbientLight.prototype.constructor=THREE.AmbientLight;THREE.AmbientLight.prototype.clone=function(){var b=new THREE.AmbientLight();
THREE.Light.prototype.clone.call(this,b);return b};THREE.AreaLight=function(c,d){THREE.Light.call(this,c);
this.type="AreaLight";this.normal=new THREE.Vector3(0,-1,0);this.right=new THREE.Vector3(1,0,0);
this.intensity=(d!==undefined)?d:1;this.width=1;this.height=1;this.constantAttenuation=1.5;
this.linearAttenuation=0.5;this.quadraticAttenuation=0.1};THREE.AreaLight.prototype=Object.create(THREE.Light.prototype);
THREE.AreaLight.prototype.constructor=THREE.AreaLight;THREE.DirectionalLight=function(c,d){THREE.Light.call(this,c);
this.type="DirectionalLight";this.position.set(0,1,0);this.target=new THREE.Object3D();
this.intensity=(d!==undefined)?d:1;this.castShadow=false;this.onlyShadow=false;
this.shadowCameraNear=50;this.shadowCameraFar=5000;this.shadowCameraLeft=-500;this.shadowCameraRight=500;
this.shadowCameraTop=500;this.shadowCameraBottom=-500;this.shadowCameraVisible=false;
this.shadowBias=0;this.shadowDarkness=0.5;this.shadowMapWidth=512;this.shadowMapHeight=512;
this.shadowCascade=false;this.shadowCascadeOffset=new THREE.Vector3(0,0,-1000);
this.shadowCascadeCount=2;this.shadowCascadeBias=[0,0,0];this.shadowCascadeWidth=[512,512,512];
this.shadowCascadeHeight=[512,512,512];this.shadowCascadeNearZ=[-1,0.99,0.998];
this.shadowCascadeFarZ=[0.99,0.998,1];this.shadowCascadeArray=[];this.shadowMap=null;
this.shadowMapSize=null;this.shadowCamera=null;this.shadowMatrix=null};THREE.DirectionalLight.prototype=Object.create(THREE.Light.prototype);
THREE.DirectionalLight.prototype.constructor=THREE.DirectionalLight;THREE.DirectionalLight.prototype.clone=function(){var b=new THREE.DirectionalLight();
THREE.Light.prototype.clone.call(this,b);b.target=this.target.clone();b.intensity=this.intensity;
b.castShadow=this.castShadow;b.onlyShadow=this.onlyShadow;b.shadowCameraNear=this.shadowCameraNear;
b.shadowCameraFar=this.shadowCameraFar;b.shadowCameraLeft=this.shadowCameraLeft;
b.shadowCameraRight=this.shadowCameraRight;b.shadowCameraTop=this.shadowCameraTop;
b.shadowCameraBottom=this.shadowCameraBottom;b.shadowCameraVisible=this.shadowCameraVisible;
b.shadowBias=this.shadowBias;b.shadowDarkness=this.shadowDarkness;b.shadowMapWidth=this.shadowMapWidth;
b.shadowMapHeight=this.shadowMapHeight;b.shadowCascade=this.shadowCascade;b.shadowCascadeOffset.copy(this.shadowCascadeOffset);
b.shadowCascadeCount=this.shadowCascadeCount;b.shadowCascadeBias=this.shadowCascadeBias.slice(0);
b.shadowCascadeWidth=this.shadowCascadeWidth.slice(0);b.shadowCascadeHeight=this.shadowCascadeHeight.slice(0);
b.shadowCascadeNearZ=this.shadowCascadeNearZ.slice(0);b.shadowCascadeFarZ=this.shadowCascadeFarZ.slice(0);
return b};THREE.HemisphereLight=function(d,f,e){THREE.Light.call(this,d);this.type="HemisphereLight";
this.position.set(0,100,0);this.groundColor=new THREE.Color(f);this.intensity=(e!==undefined)?e:1
};THREE.HemisphereLight.prototype=Object.create(THREE.Light.prototype);THREE.HemisphereLight.prototype.constructor=THREE.HemisphereLight;
THREE.HemisphereLight.prototype.clone=function(){var b=new THREE.HemisphereLight();
THREE.Light.prototype.clone.call(this,b);b.groundColor.copy(this.groundColor);b.intensity=this.intensity;
return b};THREE.PointLight=function(e,f,g,h){THREE.Light.call(this,e);this.type="PointLight";
this.intensity=(f!==undefined)?f:1;this.distance=(g!==undefined)?g:0;this.decay=(h!==undefined)?h:1
};THREE.PointLight.prototype=Object.create(THREE.Light.prototype);THREE.PointLight.prototype.constructor=THREE.PointLight;
THREE.PointLight.prototype.clone=function(){var b=new THREE.PointLight();THREE.Light.prototype.clone.call(this,b);
b.intensity=this.intensity;b.distance=this.distance;b.decay=this.decay;return b
};THREE.SpotLight=function(g,h,i,j,k,l){THREE.Light.call(this,g);this.type="SpotLight";
this.position.set(0,1,0);this.target=new THREE.Object3D();this.intensity=(h!==undefined)?h:1;
this.distance=(i!==undefined)?i:0;this.angle=(j!==undefined)?j:Math.PI/3;this.exponent=(k!==undefined)?k:10;
this.decay=(l!==undefined)?l:1;this.castShadow=false;this.onlyShadow=false;this.shadowCameraNear=50;
this.shadowCameraFar=5000;this.shadowCameraFov=50;this.shadowCameraVisible=false;
this.shadowBias=0;this.shadowDarkness=0.5;this.shadowMapWidth=512;this.shadowMapHeight=512;
this.shadowMap=null;this.shadowMapSize=null;this.shadowCamera=null;this.shadowMatrix=null
};THREE.SpotLight.prototype=Object.create(THREE.Light.prototype);THREE.SpotLight.prototype.constructor=THREE.SpotLight;
THREE.SpotLight.prototype.clone=function(){var b=new THREE.SpotLight();THREE.Light.prototype.clone.call(this,b);
b.target=this.target.clone();b.intensity=this.intensity;b.distance=this.distance;
b.angle=this.angle;b.exponent=this.exponent;b.decay=this.decay;b.castShadow=this.castShadow;
b.onlyShadow=this.onlyShadow;b.shadowCameraNear=this.shadowCameraNear;b.shadowCameraFar=this.shadowCameraFar;
b.shadowCameraFov=this.shadowCameraFov;b.shadowCameraVisible=this.shadowCameraVisible;
b.shadowBias=this.shadowBias;b.shadowDarkness=this.shadowDarkness;b.shadowMapWidth=this.shadowMapWidth;
b.shadowMapHeight=this.shadowMapHeight;return b};THREE.Cache={files:{},add:function(c,d){this.files[c]=d
},get:function(b){return this.files[b]},remove:function(b){delete this.files[b]
},clear:function(){this.files={}}};THREE.Loader=function(b){this.showStatus=b;this.statusDomElement=b?THREE.Loader.prototype.addStatusElement():null;
this.imageLoader=new THREE.ImageLoader();this.onLoadStart=function(){};this.onLoadProgress=function(){};
this.onLoadComplete=function(){}};THREE.Loader.prototype={constructor:THREE.Loader,crossOrigin:undefined,addStatusElement:function(){var b=document.createElement("div");
b.style.position="absolute";b.style.right="0px";b.style.top="0px";b.style.fontSize="0.8em";
b.style.textAlign="left";b.style.background="rgba(0,0,0,0.25)";b.style.color="#fff";
b.style.width="120px";b.style.padding="0.5em 0.5em 0.5em 0.5em";b.style.zIndex=1000;
b.innerHTML="Loading ...";return b},updateProgress:function(d){var c="Loaded ";
if(d.total){c+=(100*d.loaded/d.total).toFixed(0)+"%"}else{c+=(d.loaded/1024).toFixed(2)+" KB"
}this.statusDomElement.innerHTML=c},extractUrlBase:function(d){var c=d.split("/");
if(c.length===1){return"./"}c.pop();return c.join("/")+"/"},initMaterials:function(f,h){var g=[];
for(var e=0;e<f.length;++e){g[e]=this.createMaterial(f[e],h)}return g},needsTangents:function(e){for(var g=0,h=e.length;
g<h;g++){var f=e[g];if(f instanceof THREE.ShaderMaterial){return true}}return false
},createMaterial:function(p,r){var k=this;function t(a){var b=Math.log(a)/Math.LN2;
return Math.pow(2,Math.round(b))}function n(a,g,c,f,b,e,h){var d=r+c;var v;var j=THREE.Loader.Handlers.get(d);
if(j!==null){v=j.load(d)}else{v=new THREE.Texture();j=k.imageLoader;j.crossOrigin=k.crossOrigin;
j.load(d,function(F){if(THREE.Math.isPowerOfTwo(F.width)===false||THREE.Math.isPowerOfTwo(F.height)===false){var G=t(F.width);
var E=t(F.height);var u=document.createElement("canvas");u.width=G;u.height=E;var H=u.getContext("2d");
H.drawImage(F,0,0,G,E);v.image=u}else{v.image=F}v.needsUpdate=true})}v.sourceFile=c;
if(f){v.repeat.set(f[0],f[1]);if(f[0]!==1){v.wrapS=THREE.RepeatWrapping}if(f[1]!==1){v.wrapT=THREE.RepeatWrapping
}}if(b){v.offset.set(b[0],b[1])}if(e){var i={repeat:THREE.RepeatWrapping,mirror:THREE.MirroredRepeatWrapping};
if(i[e[0]]!==undefined){v.wrapS=i[e[0]]}if(i[e[1]]!==undefined){v.wrapT=i[e[1]]
}}if(h){v.anisotropy=h}a[g]=v}function s(a){return(a[0]*255<<16)+(a[1]*255<<8)+a[2]*255
}var q="MeshLambertMaterial";var l={color:15658734,opacity:1,map:null,lightMap:null,normalMap:null,bumpMap:null,wireframe:false};
if(p.shading){var m=p.shading.toLowerCase();if(m==="phong"){q="MeshPhongMaterial"
}else{if(m==="basic"){q="MeshBasicMaterial"}}}if(p.blending!==undefined&&THREE[p.blending]!==undefined){l.blending=THREE[p.blending]
}if(p.transparent!==undefined){l.transparent=p.transparent}if(p.opacity!==undefined&&p.opacity<1){l.transparent=true
}if(p.depthTest!==undefined){l.depthTest=p.depthTest}if(p.depthWrite!==undefined){l.depthWrite=p.depthWrite
}if(p.visible!==undefined){l.visible=p.visible}if(p.flipSided!==undefined){l.side=THREE.BackSide
}if(p.doubleSided!==undefined){l.side=THREE.DoubleSide}if(p.wireframe!==undefined){l.wireframe=p.wireframe
}if(p.vertexColors!==undefined){if(p.vertexColors==="face"){l.vertexColors=THREE.FaceColors
}else{if(p.vertexColors){l.vertexColors=THREE.VertexColors}}}if(p.colorDiffuse){l.color=s(p.colorDiffuse)
}else{if(p.DbgColor){l.color=p.DbgColor}}if(p.colorSpecular){l.specular=s(p.colorSpecular)
}if(p.colorEmissive){l.emissive=s(p.colorEmissive)}if(p.transparency!==undefined){console.warn("THREE.Loader: transparency has been renamed to opacity");
p.opacity=p.transparency}if(p.opacity!==undefined){l.opacity=p.opacity}if(p.specularCoef){l.shininess=p.specularCoef
}if(p.mapDiffuse&&r){n(l,"map",p.mapDiffuse,p.mapDiffuseRepeat,p.mapDiffuseOffset,p.mapDiffuseWrap,p.mapDiffuseAnisotropy)
}if(p.mapLight&&r){n(l,"lightMap",p.mapLight,p.mapLightRepeat,p.mapLightOffset,p.mapLightWrap,p.mapLightAnisotropy)
}if(p.mapBump&&r){n(l,"bumpMap",p.mapBump,p.mapBumpRepeat,p.mapBumpOffset,p.mapBumpWrap,p.mapBumpAnisotropy)
}if(p.mapNormal&&r){n(l,"normalMap",p.mapNormal,p.mapNormalRepeat,p.mapNormalOffset,p.mapNormalWrap,p.mapNormalAnisotropy)
}if(p.mapSpecular&&r){n(l,"specularMap",p.mapSpecular,p.mapSpecularRepeat,p.mapSpecularOffset,p.mapSpecularWrap,p.mapSpecularAnisotropy)
}if(p.mapAlpha&&r){n(l,"alphaMap",p.mapAlpha,p.mapAlphaRepeat,p.mapAlphaOffset,p.mapAlphaWrap,p.mapAlphaAnisotropy)
}if(p.mapBumpScale){l.bumpScale=p.mapBumpScale}if(p.mapNormalFactor){l.normalScale=new THREE.Vector2(p.mapNormalFactor,p.mapNormalFactor)
}var o=new THREE[q](l);if(p.DbgName!==undefined){o.name=p.DbgName}return o}};THREE.Loader.Handlers={handlers:[],add:function(c,d){this.handlers.push(c,d)
},get:function(i){for(var j=0,f=this.handlers.length;j<f;j+=2){var h=this.handlers[j];
var g=this.handlers[j+1];if(h.test(i)){return g}}return null}};THREE.XHRLoader=function(b){this.manager=(b!==undefined)?b:THREE.DefaultLoadingManager
};THREE.XHRLoader.prototype={constructor:THREE.XHRLoader,load:function(i,m,j,k){var n=this;
var h=THREE.Cache.get(i);if(h!==undefined){if(m){m(h)}return}var l=new XMLHttpRequest();
l.open("GET",i,true);l.addEventListener("load",function(a){THREE.Cache.add(i,this.response);
if(m){m(this.response)}n.manager.itemEnd(i)},false);if(j!==undefined){l.addEventListener("progress",function(a){j(a)
},false)}if(k!==undefined){l.addEventListener("error",function(a){k(a)},false)}if(this.crossOrigin!==undefined){l.crossOrigin=this.crossOrigin
}if(this.responseType!==undefined){l.responseType=this.responseType}l.send(null);
n.manager.itemStart(i)},setResponseType:function(b){this.responseType=b},setCrossOrigin:function(b){this.crossOrigin=b
}};THREE.ImageLoader=function(b){this.manager=(b!==undefined)?b:THREE.DefaultLoadingManager
};THREE.ImageLoader.prototype={constructor:THREE.ImageLoader,load:function(i,m,j,l){var n=this;
var h=THREE.Cache.get(i);if(h!==undefined){m(h);return}var k=document.createElement("img");
k.addEventListener("load",function(a){THREE.Cache.add(i,this);if(m){m(this)}n.manager.itemEnd(i)
},false);if(j!==undefined){k.addEventListener("progress",function(a){j(a)},false)
}if(l!==undefined){k.addEventListener("error",function(a){l(a)},false)}if(this.crossOrigin!==undefined){k.crossOrigin=this.crossOrigin
}k.src=i;n.manager.itemStart(i);return k},setCrossOrigin:function(b){this.crossOrigin=b
}};THREE.JSONLoader=function(b){THREE.Loader.call(this,b);this.withCredentials=false
};THREE.JSONLoader.prototype=Object.create(THREE.Loader.prototype);THREE.JSONLoader.prototype.constructor=THREE.JSONLoader;
THREE.JSONLoader.prototype.load=function(e,f,d){d=d&&(typeof d==="string")?d:this.extractUrlBase(e);
this.onLoadStart();this.loadAjaxJSON(this,e,f,d)};THREE.JSONLoader.prototype.loadAjaxJSON=function(h,i,j,l,m){var k=new XMLHttpRequest();
var n=0;k.onreadystatechange=function(){if(k.readyState===k.DONE){if(k.status===200||k.status===0){if(k.responseText){var a=JSON.parse(k.responseText);
var b=a.metadata;if(b!==undefined){if(b.type==="object"){THREE.error("THREE.JSONLoader: "+i+" should be loaded with THREE.ObjectLoader instead.");
return}if(b.type==="scene"){THREE.error("THREE.JSONLoader: "+i+" seems to be a Scene. Use THREE.SceneLoader instead.");
return}}var c=h.parse(a,l);j(c.geometry,c.materials)}else{THREE.error("THREE.JSONLoader: "+i+" seems to be unreachable or the file is empty.")
}h.onLoadComplete()}else{THREE.error("THREE.JSONLoader: Couldn't load "+i+" ("+k.status+")")
}}else{if(k.readyState===k.LOADING){if(m){if(n===0){n=k.getResponseHeader("Content-Length")
}m({total:n,loaded:k.responseText.length})}}else{if(k.readyState===k.HEADERS_RECEIVED){if(m!==undefined){n=k.getResponseHeader("Content-Length")
}}}}};k.open("GET",i,true);k.withCredentials=this.withCredentials;k.send(null)};
THREE.JSONLoader.prototype.parse=function(o,n){var k=new THREE.Geometry(),l=(o.scale!==undefined)?1/o.scale:1;
m(l);p();i(l);k.computeFaceNormals();k.computeBoundingSphere();function m(b){function an(q,r){return q&(1<<r)
}var g,h,ae,aj,am,ao,d,ab,ak,ar,ad,aa,aw,e,u,v,Z,f,ai,at,au,al,c,aq,ap,ac,af,av=o.faces,ah=o.vertices,Y=o.normals,ag=o.colors,a=0;
if(o.uvs!==undefined){for(g=0;g<o.uvs.length;g++){if(o.uvs[g].length){a++}}for(g=0;
g<a;g++){k.faceVertexUvs[g]=[]}}aj=0;am=ah.length;while(aj<am){f=new THREE.Vector3();
f.x=ah[aj++]*b;f.y=ah[aj++]*b;f.z=ah[aj++]*b;k.vertices.push(f)}aj=0;am=av.length;
while(aj<am){ar=av[aj++];ad=an(ar,0);aa=an(ar,1);aw=an(ar,3);e=an(ar,4);u=an(ar,5);
v=an(ar,6);Z=an(ar,7);if(ad){at=new THREE.Face3();at.a=av[aj];at.b=av[aj+1];at.c=av[aj+3];
au=new THREE.Face3();au.a=av[aj+1];au.b=av[aj+2];au.c=av[aj+3];aj+=4;if(aa){ak=av[aj++];
at.materialIndex=ak;au.materialIndex=ak}ae=k.faces.length;if(aw){for(g=0;g<a;g++){aq=o.uvs[g];
k.faceVertexUvs[g][ae]=[];k.faceVertexUvs[g][ae+1]=[];for(h=0;h<4;h++){ab=av[aj++];
ac=aq[ab*2];af=aq[ab*2+1];ap=new THREE.Vector2(ac,af);if(h!==2){k.faceVertexUvs[g][ae].push(ap)
}if(h!==0){k.faceVertexUvs[g][ae+1].push(ap)}}}}if(e){d=av[aj++]*3;at.normal.set(Y[d++],Y[d++],Y[d]);
au.normal.copy(at.normal)}if(u){for(g=0;g<4;g++){d=av[aj++]*3;c=new THREE.Vector3(Y[d++],Y[d++],Y[d]);
if(g!==2){at.vertexNormals.push(c)}if(g!==0){au.vertexNormals.push(c)}}}if(v){ao=av[aj++];
al=ag[ao];at.color.setHex(al);au.color.setHex(al)}if(Z){for(g=0;g<4;g++){ao=av[aj++];
al=ag[ao];if(g!==2){at.vertexColors.push(new THREE.Color(al))}if(g!==0){au.vertexColors.push(new THREE.Color(al))
}}}k.faces.push(at);k.faces.push(au)}else{ai=new THREE.Face3();ai.a=av[aj++];ai.b=av[aj++];
ai.c=av[aj++];if(aa){ak=av[aj++];ai.materialIndex=ak}ae=k.faces.length;if(aw){for(g=0;
g<a;g++){aq=o.uvs[g];k.faceVertexUvs[g][ae]=[];for(h=0;h<3;h++){ab=av[aj++];ac=aq[ab*2];
af=aq[ab*2+1];ap=new THREE.Vector2(ac,af);k.faceVertexUvs[g][ae].push(ap)}}}if(e){d=av[aj++]*3;
ai.normal.set(Y[d++],Y[d++],Y[d])}if(u){for(g=0;g<3;g++){d=av[aj++]*3;c=new THREE.Vector3(Y[d++],Y[d++],Y[d]);
ai.vertexNormals.push(c)}}if(v){ao=av[aj++];ai.color.setHex(ag[ao])}if(Z){for(g=0;
g<3;g++){ao=av[aj++];ai.vertexColors.push(new THREE.Color(ag[ao]))}}k.faces.push(ai)
}}}function p(){var h=(o.influencesPerVertex!==undefined)?o.influencesPerVertex:2;
if(o.skinWeights){for(var f=0,g=o.skinWeights.length;f<g;f+=h){var A=o.skinWeights[f];
var a=(h>1)?o.skinWeights[f+1]:0;var c=(h>2)?o.skinWeights[f+2]:0;var v=(h>3)?o.skinWeights[f+3]:0;
k.skinWeights.push(new THREE.Vector4(A,a,c,v))}}if(o.skinIndices){for(var f=0,g=o.skinIndices.length;
f<g;f+=h){var B=o.skinIndices[f];var b=(h>1)?o.skinIndices[f+1]:0;var d=(h>2)?o.skinIndices[f+2]:0;
var e=(h>3)?o.skinIndices[f+3]:0;k.skinIndices.push(new THREE.Vector4(B,b,d,e))
}}k.bones=o.bones;if(k.bones&&k.bones.length>0&&(k.skinWeights.length!==k.skinIndices.length||k.skinIndices.length!==k.vertices.length)){THREE.warn("THREE.JSONLoader: When skinning, number of vertices ("+k.vertices.length+"), skinIndices ("+k.skinIndices.length+"), and skinWeights ("+k.skinWeights.length+") should match.")
}k.animation=o.animation;k.animations=o.animations}function i(h){if(o.morphTargets!==undefined){var d,g,f,v,a,c;
for(d=0,g=o.morphTargets.length;d<g;d++){k.morphTargets[d]={};k.morphTargets[d].name=o.morphTargets[d].name;
k.morphTargets[d].vertices=[];a=k.morphTargets[d].vertices;c=o.morphTargets[d].vertices;
for(f=0,v=c.length;f<v;f+=3){var b=new THREE.Vector3();b.x=c[f]*h;b.y=c[f+1]*h;
b.z=c[f+2]*h;a.push(b)}}}if(o.morphColors!==undefined){var d,g,F,D,E,C,e;for(d=0,g=o.morphColors.length;
d<g;d++){k.morphColors[d]={};k.morphColors[d].name=o.morphColors[d].name;k.morphColors[d].colors=[];
E=k.morphColors[d].colors;C=o.morphColors[d].colors;for(F=0,D=C.length;F<D;F+=3){e=new THREE.Color(16755200);
e.setRGB(C[F],C[F+1],C[F+2]);E.push(e)}}}}if(o.materials===undefined||o.materials.length===0){return{geometry:k}
}else{var j=this.initMaterials(o.materials,n);if(this.needsTangents(j)){k.computeTangents()
}return{geometry:k,materials:j}}};THREE.LoadingManager=function(l,i,j){var g=this;
var h=0,k=0;this.onLoad=l;this.onProgress=i;this.onError=j;this.itemStart=function(a){k++
};this.itemEnd=function(a){h++;if(g.onProgress!==undefined){g.onProgress(a,h,k)
}if(h===k&&g.onLoad!==undefined){g.onLoad()}}};THREE.DefaultLoadingManager=new THREE.LoadingManager();
THREE.BufferGeometryLoader=function(b){this.manager=(b!==undefined)?b:THREE.DefaultLoadingManager
};THREE.BufferGeometryLoader.prototype={constructor:THREE.BufferGeometryLoader,load:function(g,k,i,j){var l=this;
var h=new THREE.XHRLoader(l.manager);h.setCrossOrigin(this.crossOrigin);h.load(g,function(a){k(l.parse(JSON.parse(a)))
},i,j)},setCrossOrigin:function(b){this.crossOrigin=b},parse:function(j){var n=new THREE.BufferGeometry();
var o=j.data.attributes;for(var k in o){var q=o[k];var m=new self[q.type](q.array);
n.addAttribute(k,new THREE.BufferAttribute(m,q.itemSize))}var p=j.data.offsets;
if(p!==undefined){n.offsets=JSON.parse(JSON.stringify(p))}var l=j.data.boundingSphere;
if(l!==undefined){var r=new THREE.Vector3();if(l.center!==undefined){r.fromArray(l.center)
}n.boundingSphere=new THREE.Sphere(r,l.radius)}return n}};THREE.MaterialLoader=function(b){this.manager=(b!==undefined)?b:THREE.DefaultLoadingManager
};THREE.MaterialLoader.prototype={constructor:THREE.MaterialLoader,load:function(g,k,i,j){var l=this;
var h=new THREE.XHRLoader(l.manager);h.setCrossOrigin(this.crossOrigin);h.load(g,function(a){k(l.parse(JSON.parse(a)))
},i,j)},setCrossOrigin:function(b){this.crossOrigin=b},parse:function(h){var g=new THREE[h.type];
if(h.color!==undefined){g.color.setHex(h.color)}if(h.emissive!==undefined){g.emissive.setHex(h.emissive)
}if(h.specular!==undefined){g.specular.setHex(h.specular)}if(h.shininess!==undefined){g.shininess=h.shininess
}if(h.uniforms!==undefined){g.uniforms=h.uniforms}if(h.vertexShader!==undefined){g.vertexShader=h.vertexShader
}if(h.fragmentShader!==undefined){g.fragmentShader=h.fragmentShader}if(h.vertexColors!==undefined){g.vertexColors=h.vertexColors
}if(h.shading!==undefined){g.shading=h.shading}if(h.blending!==undefined){g.blending=h.blending
}if(h.side!==undefined){g.side=h.side}if(h.opacity!==undefined){g.opacity=h.opacity
}if(h.transparent!==undefined){g.transparent=h.transparent}if(h.wireframe!==undefined){g.wireframe=h.wireframe
}if(h.size!==undefined){g.size=h.size}if(h.sizeAttenuation!==undefined){g.sizeAttenuation=h.sizeAttenuation
}if(h.materials!==undefined){for(var e=0,f=h.materials.length;e<f;e++){g.materials.push(this.parse(h.materials[e]))
}}return g}};THREE.ObjectLoader=function(b){this.manager=(b!==undefined)?b:THREE.DefaultLoadingManager;
this.texturePath=""};THREE.ObjectLoader.prototype={constructor:THREE.ObjectLoader,load:function(g,k,i,j){if(this.texturePath===""){this.texturePath=g.substring(0,g.lastIndexOf("/")+1)
}var l=this;var h=new THREE.XHRLoader(l.manager);h.setCrossOrigin(this.crossOrigin);
h.load(g,function(a){l.parse(JSON.parse(a),k)},i,j)},setTexturePath:function(b){this.texturePath=b
},setCrossOrigin:function(b){this.crossOrigin=b},parse:function(l,j){var k=this.parseGeometries(l.geometries);
var h=this.parseImages(l.images,function(){if(j!==undefined){j(m)}});var i=this.parseTextures(l.textures,h);
var n=this.parseMaterials(l.materials,i);var m=this.parseObject(l.object,k,n);if(l.images===undefined||l.images.length===0){if(j!==undefined){j(m)
}}return m},parseGeometries:function(o){var n={};if(o!==undefined){var i=new THREE.JSONLoader();
var l=new THREE.BufferGeometryLoader();for(var p=0,j=o.length;p<j;p++){var k;var m=o[p];
switch(m.type){case"PlaneGeometry":case"PlaneBufferGeometry":k=new THREE[m.type](m.width,m.height,m.widthSegments,m.heightSegments);
break;case"BoxGeometry":case"CubeGeometry":k=new THREE.BoxGeometry(m.width,m.height,m.depth,m.widthSegments,m.heightSegments,m.depthSegments);
break;case"CircleGeometry":k=new THREE.CircleGeometry(m.radius,m.segments);break;
case"CylinderGeometry":k=new THREE.CylinderGeometry(m.radiusTop,m.radiusBottom,m.height,m.radialSegments,m.heightSegments,m.openEnded);
break;case"SphereGeometry":k=new THREE.SphereGeometry(m.radius,m.widthSegments,m.heightSegments,m.phiStart,m.phiLength,m.thetaStart,m.thetaLength);
break;case"IcosahedronGeometry":k=new THREE.IcosahedronGeometry(m.radius,m.detail);
break;case"TorusGeometry":k=new THREE.TorusGeometry(m.radius,m.tube,m.radialSegments,m.tubularSegments,m.arc);
break;case"TorusKnotGeometry":k=new THREE.TorusKnotGeometry(m.radius,m.tube,m.radialSegments,m.tubularSegments,m.p,m.q,m.heightScale);
break;case"BufferGeometry":k=l.parse(m);break;case"Geometry":k=i.parse(m.data).geometry;
break}k.uuid=m.uuid;if(m.name!==undefined){k.name=m.name}n[m.uuid]=k}}return n},parseMaterials:function(i,m){var k={};
if(i!==undefined){var q=function(a){if(m[a]===undefined){THREE.warn("THREE.ObjectLoader: Undefined texture",a)
}return m[a]};var l=new THREE.MaterialLoader();for(var o=0,r=i.length;o<r;o++){var p=i[o];
var n=l.parse(p);n.uuid=p.uuid;if(p.name!==undefined){n.name=p.name}if(p.map!==undefined){n.map=q(p.map)
}if(p.bumpMap!==undefined){n.bumpMap=q(p.bumpMap);if(p.bumpScale){n.bumpScale=new THREE.Vector2(p.bumpScale,p.bumpScale)
}}if(p.alphaMap!==undefined){n.alphaMap=q(p.alphaMap)}if(p.envMap!==undefined){n.envMap=q(p.envMap)
}if(p.normalMap!==undefined){n.normalMap=q(p.normalMap);if(p.normalScale){n.normalScale=new THREE.Vector2(p.normalScale,p.normalScale)
}}if(p.lightMap!==undefined){n.lightMap=q(p.lightMap)}if(p.specularMap!==undefined){n.specularMap=q(p.specularMap)
}k[p.uuid]=n}}return k},parseImages:function(l,q){var n=this;var p={};if(l!==undefined&&l.length>0){var s=new THREE.LoadingManager(q);
var o=new THREE.ImageLoader(s);o.setCrossOrigin(this.crossOrigin);var v=function(a){n.manager.itemStart(a);
return o.load(a,function(){n.manager.itemEnd(a)})};for(var r=0,t=l.length;r<t;r++){var u=l[r];
var i=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(u.url)?u.url:n.texturePath+u.url;p[u.uuid]=v(i)
}}return p},parseTextures:function(l,h){var i={};if(l!==undefined){for(var m=0,n=l.length;
m<n;m++){var j=l[m];if(j.image===undefined){THREE.warn('THREE.ObjectLoader: No "image" speficied for',j.uuid)
}if(h[j.image]===undefined){THREE.warn("THREE.ObjectLoader: Undefined image",j.image)
}var k=new THREE.Texture(h[j.image]);k.needsUpdate=true;k.uuid=j.uuid;if(j.name!==undefined){k.name=j.name
}if(j.repeat!==undefined){k.repeat=new THREE.Vector2(j.repeat[0],j.repeat[1])}if(j.minFilter!==undefined){k.minFilter=THREE[j.minFilter]
}if(j.magFilter!==undefined){k.magFilter=THREE[j.magFilter]}if(j.anisotropy!==undefined){k.anisotropy=j.anisotropy
}if(j.wrap instanceof Array){k.wrapS=THREE[j.wrap[0]];k.wrapT=THREE[j.wrap[1]]}i[j.uuid]=k
}}return i},parseObject:function(){var b=new THREE.Matrix4();return function(j,k,n){var m;
var l=function(c){if(k[c]===undefined){THREE.warn("THREE.ObjectLoader: Undefined geometry",c)
}return k[c]};var a=function(c){if(n[c]===undefined){THREE.warn("THREE.ObjectLoader: Undefined material",c)
}return n[c]};switch(j.type){case"Scene":m=new THREE.Scene();break;case"PerspectiveCamera":m=new THREE.PerspectiveCamera(j.fov,j.aspect,j.near,j.far);
break;case"OrthographicCamera":m=new THREE.OrthographicCamera(j.left,j.right,j.top,j.bottom,j.near,j.far);
break;case"AmbientLight":m=new THREE.AmbientLight(j.color);break;case"DirectionalLight":m=new THREE.DirectionalLight(j.color,j.intensity);
break;case"PointLight":m=new THREE.PointLight(j.color,j.intensity,j.distance,j.decay);
break;case"SpotLight":m=new THREE.SpotLight(j.color,j.intensity,j.distance,j.angle,j.exponent,j.decay);
break;case"HemisphereLight":m=new THREE.HemisphereLight(j.color,j.groundColor,j.intensity);
break;case"Mesh":m=new THREE.Mesh(l(j.geometry),a(j.material));break;case"Line":m=new THREE.Line(l(j.geometry),a(j.material),j.mode);
break;case"PointCloud":m=new THREE.PointCloud(l(j.geometry),a(j.material));break;
case"Sprite":m=new THREE.Sprite(a(j.material));break;case"Group":m=new THREE.Group();
break;default:m=new THREE.Object3D()}m.uuid=j.uuid;if(j.name!==undefined){m.name=j.name
}if(j.matrix!==undefined){b.fromArray(j.matrix);b.decompose(m.position,m.quaternion,m.scale)
}else{if(j.position!==undefined){m.position.fromArray(j.position)}if(j.rotation!==undefined){m.rotation.fromArray(j.rotation)
}if(j.scale!==undefined){m.scale.fromArray(j.scale)}}if(j.visible!==undefined){m.visible=j.visible
}if(j.userData!==undefined){m.userData=j.userData}if(j.children!==undefined){for(var i in j.children){m.add(this.parseObject(j.children[i],k,n))
}}return m}}()};THREE.TextureLoader=function(b){this.manager=(b!==undefined)?b:THREE.DefaultLoadingManager
};THREE.TextureLoader.prototype={constructor:THREE.TextureLoader,load:function(g,k,i,j){var l=this;
var h=new THREE.ImageLoader(l.manager);h.setCrossOrigin(this.crossOrigin);h.load(g,function(a){var b=new THREE.Texture(a);
b.needsUpdate=true;if(k!==undefined){k(b)}},i,j)},setCrossOrigin:function(b){this.crossOrigin=b
}};THREE.DataTextureLoader=THREE.BinaryTextureLoader=function(){this._parser=null
};THREE.BinaryTextureLoader.prototype={constructor:THREE.BinaryTextureLoader,load:function(h,m,j,k){var n=this;
var l=new THREE.DataTexture();var i=new THREE.XHRLoader();i.setResponseType("arraybuffer");
i.load(h,function(b){var a=n._parser(b);if(!a){return}if(undefined!==a.image){l.image=a.image
}else{if(undefined!==a.data){l.image.width=a.width;l.image.height=a.height;l.image.data=a.data
}}l.wrapS=undefined!==a.wrapS?a.wrapS:THREE.ClampToEdgeWrapping;l.wrapT=undefined!==a.wrapT?a.wrapT:THREE.ClampToEdgeWrapping;
l.magFilter=undefined!==a.magFilter?a.magFilter:THREE.LinearFilter;l.minFilter=undefined!==a.minFilter?a.minFilter:THREE.LinearMipMapLinearFilter;
l.anisotropy=undefined!==a.anisotropy?a.anisotropy:1;if(undefined!==a.format){l.format=a.format
}if(undefined!==a.type){l.type=a.type}if(undefined!==a.mipmaps){l.mipmaps=a.mipmaps
}if(1===a.mipmapCount){l.minFilter=THREE.LinearFilter}l.needsUpdate=true;if(m){m(l,a)
}},j,k);return l}};THREE.CompressedTextureLoader=function(){this._parser=null};
THREE.CompressedTextureLoader.prototype={constructor:THREE.CompressedTextureLoader,load:function(v,p,s){var i=this;
var o=[];var r=new THREE.CompressedTexture();r.image=o;var m=new THREE.XHRLoader();
m.setResponseType("arraybuffer");if(v instanceof Array){var t=0;var q=function(a){m.load(v[a],function(b){var c=i._parser(b,true);
o[a]={width:c.width,height:c.height,format:c.format,mipmaps:c.mipmaps};t+=1;if(t===6){if(c.mipmapCount==1){r.minFilter=THREE.LinearFilter
}r.format=c.format;r.needsUpdate=true;if(p){p(r)}}})};for(var u=0,n=v.length;u<n;
++u){q(u)}}else{m.load(v,function(e){var b=i._parser(e,true);if(b.isCubemap){var a=b.mipmaps.length/b.mipmapCount;
for(var c=0;c<a;c++){o[c]={mipmaps:[]};for(var d=0;d<b.mipmapCount;d++){o[c].mipmaps.push(b.mipmaps[c*b.mipmapCount+d]);
o[c].format=b.format;o[c].width=b.width;o[c].height=b.height}}}else{r.image.width=b.width;
r.image.height=b.height;r.mipmaps=b.mipmaps}if(b.mipmapCount===1){r.minFilter=THREE.LinearFilter
}r.format=b.format;r.needsUpdate=true;if(p){p(r)}})}return r}};THREE.Material=function(){Object.defineProperty(this,"id",{value:THREE.MaterialIdCount++});
this.uuid=THREE.Math.generateUUID();this.name="";this.type="Material";this.side=THREE.FrontSide;
this.opacity=1;this.transparent=false;this.blending=THREE.NormalBlending;this.blendSrc=THREE.SrcAlphaFactor;
this.blendDst=THREE.OneMinusSrcAlphaFactor;this.blendEquation=THREE.AddEquation;
this.blendSrcAlpha=null;this.blendDstAlpha=null;this.blendEquationAlpha=null;this.depthTest=true;
this.depthWrite=true;this.colorWrite=true;this.polygonOffset=false;this.polygonOffsetFactor=0;
this.polygonOffsetUnits=0;this.alphaTest=0;this.overdraw=0;this.visible=true;this._needsUpdate=true
};THREE.Material.prototype={constructor:THREE.Material,get needsUpdate(){return this._needsUpdate
},set needsUpdate(b){if(b===true){this.update()}this._needsUpdate=b},setValues:function(f){if(f===undefined){return
}for(var e in f){var g=f[e];if(g===undefined){THREE.warn("THREE.Material: '"+e+"' parameter is undefined.");
continue}if(e in this){var h=this[e];if(h instanceof THREE.Color){h.set(g)}else{if(h instanceof THREE.Vector3&&g instanceof THREE.Vector3){h.copy(g)
}else{if(e=="overdraw"){this[e]=Number(g)}else{this[e]=g}}}}}},toJSON:function(){var b={metadata:{version:4.2,type:"material",generator:"MaterialExporter"},uuid:this.uuid,type:this.type};
if(this.name!==""){b.name=this.name}if(this instanceof THREE.MeshBasicMaterial){b.color=this.color.getHex();
if(this.vertexColors!==THREE.NoColors){b.vertexColors=this.vertexColors}if(this.blending!==THREE.NormalBlending){b.blending=this.blending
}if(this.side!==THREE.FrontSide){b.side=this.side}}else{if(this instanceof THREE.MeshLambertMaterial){b.color=this.color.getHex();
b.emissive=this.emissive.getHex();if(this.vertexColors!==THREE.NoColors){b.vertexColors=this.vertexColors
}if(this.shading!==THREE.SmoothShading){b.shading=this.shading}if(this.blending!==THREE.NormalBlending){b.blending=this.blending
}if(this.side!==THREE.FrontSide){b.side=this.side}}else{if(this instanceof THREE.MeshPhongMaterial){b.color=this.color.getHex();
b.emissive=this.emissive.getHex();b.specular=this.specular.getHex();b.shininess=this.shininess;
if(this.vertexColors!==THREE.NoColors){b.vertexColors=this.vertexColors}if(this.shading!==THREE.SmoothShading){b.shading=this.shading
}if(this.blending!==THREE.NormalBlending){b.blending=this.blending}if(this.side!==THREE.FrontSide){b.side=this.side
}}else{if(this instanceof THREE.MeshNormalMaterial){if(this.blending!==THREE.NormalBlending){b.blending=this.blending
}if(this.side!==THREE.FrontSide){b.side=this.side}}else{if(this instanceof THREE.MeshDepthMaterial){if(this.blending!==THREE.NormalBlending){b.blending=this.blending
}if(this.side!==THREE.FrontSide){b.side=this.side}}else{if(this instanceof THREE.PointCloudMaterial){b.size=this.size;
b.sizeAttenuation=this.sizeAttenuation;b.color=this.color.getHex();if(this.vertexColors!==THREE.NoColors){b.vertexColors=this.vertexColors
}if(this.blending!==THREE.NormalBlending){b.blending=this.blending}}else{if(this instanceof THREE.ShaderMaterial){b.uniforms=this.uniforms;
b.vertexShader=this.vertexShader;b.fragmentShader=this.fragmentShader}else{if(this instanceof THREE.SpriteMaterial){b.color=this.color.getHex()
}}}}}}}}if(this.opacity<1){b.opacity=this.opacity}if(this.transparent!==false){b.transparent=this.transparent
}if(this.wireframe!==false){b.wireframe=this.wireframe}return b},clone:function(b){if(b===undefined){b=new THREE.Material()
}b.name=this.name;b.side=this.side;b.opacity=this.opacity;b.transparent=this.transparent;
b.blending=this.blending;b.blendSrc=this.blendSrc;b.blendDst=this.blendDst;b.blendEquation=this.blendEquation;
b.blendSrcAlpha=this.blendSrcAlpha;b.blendDstAlpha=this.blendDstAlpha;b.blendEquationAlpha=this.blendEquationAlpha;
b.depthTest=this.depthTest;b.depthWrite=this.depthWrite;b.polygonOffset=this.polygonOffset;
b.polygonOffsetFactor=this.polygonOffsetFactor;b.polygonOffsetUnits=this.polygonOffsetUnits;
b.alphaTest=this.alphaTest;b.overdraw=this.overdraw;b.visible=this.visible;return b
},update:function(){this.dispatchEvent({type:"update"})},dispose:function(){this.dispatchEvent({type:"dispose"})
}};THREE.EventDispatcher.prototype.apply(THREE.Material.prototype);THREE.MaterialIdCount=0;
THREE.LineBasicMaterial=function(b){THREE.Material.call(this);this.type="LineBasicMaterial";
this.color=new THREE.Color(16777215);this.linewidth=1;this.linecap="round";this.linejoin="round";
this.vertexColors=THREE.NoColors;this.fog=true;this.setValues(b)};THREE.LineBasicMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.LineBasicMaterial.prototype.constructor=THREE.LineBasicMaterial;THREE.LineBasicMaterial.prototype.clone=function(){var b=new THREE.LineBasicMaterial();
THREE.Material.prototype.clone.call(this,b);b.color.copy(this.color);b.linewidth=this.linewidth;
b.linecap=this.linecap;b.linejoin=this.linejoin;b.vertexColors=this.vertexColors;
b.fog=this.fog;return b};THREE.LineDashedMaterial=function(b){THREE.Material.call(this);
this.type="LineDashedMaterial";this.color=new THREE.Color(16777215);this.linewidth=1;
this.scale=1;this.dashSize=3;this.gapSize=1;this.vertexColors=false;this.fog=true;
this.setValues(b)};THREE.LineDashedMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.LineDashedMaterial.prototype.constructor=THREE.LineDashedMaterial;THREE.LineDashedMaterial.prototype.clone=function(){var b=new THREE.LineDashedMaterial();
THREE.Material.prototype.clone.call(this,b);b.color.copy(this.color);b.linewidth=this.linewidth;
b.scale=this.scale;b.dashSize=this.dashSize;b.gapSize=this.gapSize;b.vertexColors=this.vertexColors;
b.fog=this.fog;return b};THREE.MeshBasicMaterial=function(b){THREE.Material.call(this);
this.type="MeshBasicMaterial";this.color=new THREE.Color(16777215);this.map=null;
this.lightMap=null;this.specularMap=null;this.alphaMap=null;this.envMap=null;this.combine=THREE.MultiplyOperation;
this.reflectivity=1;this.refractionRatio=0.98;this.fog=true;this.shading=THREE.SmoothShading;
this.wireframe=false;this.wireframeLinewidth=1;this.wireframeLinecap="round";this.wireframeLinejoin="round";
this.vertexColors=THREE.NoColors;this.skinning=false;this.morphTargets=false;this.setValues(b)
};THREE.MeshBasicMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshBasicMaterial.prototype.constructor=THREE.MeshBasicMaterial;
THREE.MeshBasicMaterial.prototype.clone=function(){var b=new THREE.MeshBasicMaterial();
THREE.Material.prototype.clone.call(this,b);b.color.copy(this.color);b.map=this.map;
b.lightMap=this.lightMap;b.specularMap=this.specularMap;b.alphaMap=this.alphaMap;
b.envMap=this.envMap;b.combine=this.combine;b.reflectivity=this.reflectivity;b.refractionRatio=this.refractionRatio;
b.fog=this.fog;b.shading=this.shading;b.wireframe=this.wireframe;b.wireframeLinewidth=this.wireframeLinewidth;
b.wireframeLinecap=this.wireframeLinecap;b.wireframeLinejoin=this.wireframeLinejoin;
b.vertexColors=this.vertexColors;b.skinning=this.skinning;b.morphTargets=this.morphTargets;
return b};THREE.MeshLambertMaterial=function(b){THREE.Material.call(this);this.type="MeshLambertMaterial";
this.color=new THREE.Color(16777215);this.emissive=new THREE.Color(0);this.wrapAround=false;
this.wrapRGB=new THREE.Vector3(1,1,1);this.map=null;this.lightMap=null;this.specularMap=null;
this.alphaMap=null;this.envMap=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;
this.refractionRatio=0.98;this.fog=true;this.shading=THREE.SmoothShading;this.wireframe=false;
this.wireframeLinewidth=1;this.wireframeLinecap="round";this.wireframeLinejoin="round";
this.vertexColors=THREE.NoColors;this.skinning=false;this.morphTargets=false;this.morphNormals=false;
this.setValues(b)};THREE.MeshLambertMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshLambertMaterial.prototype.constructor=THREE.MeshLambertMaterial;THREE.MeshLambertMaterial.prototype.clone=function(){var b=new THREE.MeshLambertMaterial();
THREE.Material.prototype.clone.call(this,b);b.color.copy(this.color);b.emissive.copy(this.emissive);
b.wrapAround=this.wrapAround;b.wrapRGB.copy(this.wrapRGB);b.map=this.map;b.lightMap=this.lightMap;
b.specularMap=this.specularMap;b.alphaMap=this.alphaMap;b.envMap=this.envMap;b.combine=this.combine;
b.reflectivity=this.reflectivity;b.refractionRatio=this.refractionRatio;b.fog=this.fog;
b.shading=this.shading;b.wireframe=this.wireframe;b.wireframeLinewidth=this.wireframeLinewidth;
b.wireframeLinecap=this.wireframeLinecap;b.wireframeLinejoin=this.wireframeLinejoin;
b.vertexColors=this.vertexColors;b.skinning=this.skinning;b.morphTargets=this.morphTargets;
b.morphNormals=this.morphNormals;return b};THREE.MeshPhongMaterial=function(b){THREE.Material.call(this);
this.type="MeshPhongMaterial";this.color=new THREE.Color(16777215);this.emissive=new THREE.Color(0);
this.specular=new THREE.Color(1118481);this.shininess=30;this.metal=false;this.wrapAround=false;
this.wrapRGB=new THREE.Vector3(1,1,1);this.map=null;this.lightMap=null;this.bumpMap=null;
this.bumpScale=1;this.normalMap=null;this.normalScale=new THREE.Vector2(1,1);this.specularMap=null;
this.alphaMap=null;this.envMap=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;
this.refractionRatio=0.98;this.fog=true;this.shading=THREE.SmoothShading;this.wireframe=false;
this.wireframeLinewidth=1;this.wireframeLinecap="round";this.wireframeLinejoin="round";
this.vertexColors=THREE.NoColors;this.skinning=false;this.morphTargets=false;this.morphNormals=false;
this.setValues(b)};THREE.MeshPhongMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshPhongMaterial.prototype.constructor=THREE.MeshPhongMaterial;THREE.MeshPhongMaterial.prototype.clone=function(){var b=new THREE.MeshPhongMaterial();
THREE.Material.prototype.clone.call(this,b);b.color.copy(this.color);b.emissive.copy(this.emissive);
b.specular.copy(this.specular);b.shininess=this.shininess;b.metal=this.metal;b.wrapAround=this.wrapAround;
b.wrapRGB.copy(this.wrapRGB);b.map=this.map;b.lightMap=this.lightMap;b.bumpMap=this.bumpMap;
b.bumpScale=this.bumpScale;b.normalMap=this.normalMap;b.normalScale.copy(this.normalScale);
b.specularMap=this.specularMap;b.alphaMap=this.alphaMap;b.envMap=this.envMap;b.combine=this.combine;
b.reflectivity=this.reflectivity;b.refractionRatio=this.refractionRatio;b.fog=this.fog;
b.shading=this.shading;b.wireframe=this.wireframe;b.wireframeLinewidth=this.wireframeLinewidth;
b.wireframeLinecap=this.wireframeLinecap;b.wireframeLinejoin=this.wireframeLinejoin;
b.vertexColors=this.vertexColors;b.skinning=this.skinning;b.morphTargets=this.morphTargets;
b.morphNormals=this.morphNormals;return b};THREE.MeshDepthMaterial=function(b){THREE.Material.call(this);
this.type="MeshDepthMaterial";this.morphTargets=false;this.wireframe=false;this.wireframeLinewidth=1;
this.setValues(b)};THREE.MeshDepthMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshDepthMaterial.prototype.constructor=THREE.MeshDepthMaterial;THREE.MeshDepthMaterial.prototype.clone=function(){var b=new THREE.MeshDepthMaterial();
THREE.Material.prototype.clone.call(this,b);b.wireframe=this.wireframe;b.wireframeLinewidth=this.wireframeLinewidth;
return b};THREE.MeshNormalMaterial=function(b){THREE.Material.call(this,b);this.type="MeshNormalMaterial";
this.wireframe=false;this.wireframeLinewidth=1;this.morphTargets=false;this.setValues(b)
};THREE.MeshNormalMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshNormalMaterial.prototype.constructor=THREE.MeshNormalMaterial;
THREE.MeshNormalMaterial.prototype.clone=function(){var b=new THREE.MeshNormalMaterial();
THREE.Material.prototype.clone.call(this,b);b.wireframe=this.wireframe;b.wireframeLinewidth=this.wireframeLinewidth;
return b};THREE.MeshFaceMaterial=function(b){this.uuid=THREE.Math.generateUUID();
this.type="MeshFaceMaterial";this.materials=b instanceof Array?b:[]};THREE.MeshFaceMaterial.prototype={constructor:THREE.MeshFaceMaterial,toJSON:function(){var d={metadata:{version:4.2,type:"material",generator:"MaterialExporter"},uuid:this.uuid,type:this.type,materials:[]};
for(var f=0,e=this.materials.length;f<e;f++){d.materials.push(this.materials[f].toJSON())
}return d},clone:function(){var c=new THREE.MeshFaceMaterial();for(var d=0;d<this.materials.length;
d++){c.materials.push(this.materials[d].clone())}return c}};THREE.PointCloudMaterial=function(b){THREE.Material.call(this);
this.type="PointCloudMaterial";this.color=new THREE.Color(16777215);this.map=null;
this.size=1;this.sizeAttenuation=true;this.vertexColors=THREE.NoColors;this.fog=true;
this.setValues(b)};THREE.PointCloudMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.PointCloudMaterial.prototype.constructor=THREE.PointCloudMaterial;THREE.PointCloudMaterial.prototype.clone=function(){var b=new THREE.PointCloudMaterial();
THREE.Material.prototype.clone.call(this,b);b.color.copy(this.color);b.map=this.map;
b.size=this.size;b.sizeAttenuation=this.sizeAttenuation;b.vertexColors=this.vertexColors;
b.fog=this.fog;return b};THREE.ParticleBasicMaterial=function(b){THREE.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointCloudMaterial.");
return new THREE.PointCloudMaterial(b)};THREE.ParticleSystemMaterial=function(b){THREE.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointCloudMaterial.");
return new THREE.PointCloudMaterial(b)};THREE.ShaderMaterial=function(b){THREE.Material.call(this);
this.type="ShaderMaterial";this.defines={};this.uniforms={};this.attributes=null;
this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";
this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";
this.shading=THREE.SmoothShading;this.linewidth=1;this.wireframe=false;this.wireframeLinewidth=1;
this.fog=false;this.lights=false;this.vertexColors=THREE.NoColors;this.skinning=false;
this.morphTargets=false;this.morphNormals=false;this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]};
this.index0AttributeName=undefined;this.setValues(b)};THREE.ShaderMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.ShaderMaterial.prototype.constructor=THREE.ShaderMaterial;THREE.ShaderMaterial.prototype.clone=function(){var b=new THREE.ShaderMaterial();
THREE.Material.prototype.clone.call(this,b);b.fragmentShader=this.fragmentShader;
b.vertexShader=this.vertexShader;b.uniforms=THREE.UniformsUtils.clone(this.uniforms);
b.attributes=this.attributes;b.defines=this.defines;b.shading=this.shading;b.wireframe=this.wireframe;
b.wireframeLinewidth=this.wireframeLinewidth;b.fog=this.fog;b.lights=this.lights;
b.vertexColors=this.vertexColors;b.skinning=this.skinning;b.morphTargets=this.morphTargets;
b.morphNormals=this.morphNormals;return b};THREE.RawShaderMaterial=function(b){THREE.ShaderMaterial.call(this,b);
this.type="RawShaderMaterial"};THREE.RawShaderMaterial.prototype=Object.create(THREE.ShaderMaterial.prototype);
THREE.RawShaderMaterial.prototype.constructor=THREE.RawShaderMaterial;THREE.RawShaderMaterial.prototype.clone=function(){var b=new THREE.RawShaderMaterial();
THREE.ShaderMaterial.prototype.clone.call(this,b);return b};THREE.SpriteMaterial=function(b){THREE.Material.call(this);
this.type="SpriteMaterial";this.color=new THREE.Color(16777215);this.map=null;this.rotation=0;
this.fog=false;this.setValues(b)};THREE.SpriteMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.SpriteMaterial.prototype.constructor=THREE.SpriteMaterial;THREE.SpriteMaterial.prototype.clone=function(){var b=new THREE.SpriteMaterial();
THREE.Material.prototype.clone.call(this,b);b.color.copy(this.color);b.map=this.map;
b.rotation=this.rotation;b.fog=this.fog;return b};THREE.Texture=function(o,q,m,n,j,p,k,l,r){Object.defineProperty(this,"id",{value:THREE.TextureIdCount++});
this.uuid=THREE.Math.generateUUID();this.name="";this.sourceFile="";this.image=o!==undefined?o:THREE.Texture.DEFAULT_IMAGE;
this.mipmaps=[];this.mapping=q!==undefined?q:THREE.Texture.DEFAULT_MAPPING;this.wrapS=m!==undefined?m:THREE.ClampToEdgeWrapping;
this.wrapT=n!==undefined?n:THREE.ClampToEdgeWrapping;this.magFilter=j!==undefined?j:THREE.LinearFilter;
this.minFilter=p!==undefined?p:THREE.LinearMipMapLinearFilter;this.anisotropy=r!==undefined?r:1;
this.format=k!==undefined?k:THREE.RGBAFormat;this.type=l!==undefined?l:THREE.UnsignedByteType;
this.offset=new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,1);this.generateMipmaps=true;
this.premultiplyAlpha=false;this.flipY=true;this.unpackAlignment=4;this._needsUpdate=false;
this.onUpdate=null};THREE.Texture.DEFAULT_IMAGE=undefined;THREE.Texture.DEFAULT_MAPPING=THREE.UVMapping;
THREE.Texture.prototype={constructor:THREE.Texture,get needsUpdate(){return this._needsUpdate
},set needsUpdate(b){if(b===true){this.update()}this._needsUpdate=b},clone:function(b){if(b===undefined){b=new THREE.Texture()
}b.image=this.image;b.mipmaps=this.mipmaps.slice(0);b.mapping=this.mapping;b.wrapS=this.wrapS;
b.wrapT=this.wrapT;b.magFilter=this.magFilter;b.minFilter=this.minFilter;b.anisotropy=this.anisotropy;
b.format=this.format;b.type=this.type;b.offset.copy(this.offset);b.repeat.copy(this.repeat);
b.generateMipmaps=this.generateMipmaps;b.premultiplyAlpha=this.premultiplyAlpha;
b.flipY=this.flipY;b.unpackAlignment=this.unpackAlignment;return b},update:function(){this.dispatchEvent({type:"update"})
},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Texture.prototype);
THREE.TextureIdCount=0;THREE.CubeTexture=function(l,q,n,o,j,p,k,m,r){q=q!==undefined?q:THREE.CubeReflectionMapping;
THREE.Texture.call(this,l,q,n,o,j,p,k,m,r);this.images=l};THREE.CubeTexture.prototype=Object.create(THREE.Texture.prototype);
THREE.CubeTexture.prototype.constructor=THREE.CubeTexture;THREE.CubeTexture.clone=function(b){if(b===undefined){b=new THREE.CubeTexture()
}THREE.Texture.prototype.clone.call(this,b);b.images=this.images;return b};THREE.CompressedTexture=function(r,s,l,n,o,u,p,q,m,t,v){THREE.Texture.call(this,null,u,p,q,m,t,n,o,v);
this.image={width:s,height:l};this.mipmaps=r;this.flipY=false;this.generateMipmaps=false
};THREE.CompressedTexture.prototype=Object.create(THREE.Texture.prototype);THREE.CompressedTexture.prototype.constructor=THREE.CompressedTexture;
THREE.CompressedTexture.prototype.clone=function(){var b=new THREE.CompressedTexture();
THREE.Texture.prototype.clone.call(this,b);return b};THREE.DataTexture=function(q,s,l,n,o,u,p,r,m,t,v){THREE.Texture.call(this,null,u,p,r,m,t,n,o,v);
this.image={data:q,width:s,height:l}};THREE.DataTexture.prototype=Object.create(THREE.Texture.prototype);
THREE.DataTexture.prototype.constructor=THREE.DataTexture;THREE.DataTexture.prototype.clone=function(){var b=new THREE.DataTexture();
THREE.Texture.prototype.clone.call(this,b);return b};THREE.VideoTexture=function(t,u,p,q,m,s,n,o,v){THREE.Texture.call(this,t,u,p,q,m,s,n,o,v);
this.generateMipmaps=false;var l=this;var r=function(){requestAnimationFrame(r);
if(t.readyState===t.HAVE_ENOUGH_DATA){l.needsUpdate=true}};r()};THREE.VideoTexture.prototype=Object.create(THREE.Texture.prototype);
THREE.VideoTexture.prototype.constructor=THREE.VideoTexture;THREE.Group=function(){THREE.Object3D.call(this);
this.type="Group"};THREE.Group.prototype=Object.create(THREE.Object3D.prototype);
THREE.Group.prototype.constructor=THREE.Group;THREE.PointCloud=function(c,d){THREE.Object3D.call(this);
this.type="PointCloud";this.geometry=c!==undefined?c:new THREE.Geometry();this.material=d!==undefined?d:new THREE.PointCloudMaterial({color:Math.random()*16777215})
};THREE.PointCloud.prototype=Object.create(THREE.Object3D.prototype);THREE.PointCloud.prototype.constructor=THREE.PointCloud;
THREE.PointCloud.prototype.raycast=(function(){var c=new THREE.Matrix4();var d=new THREE.Ray();
return function(b,X){var F=this;var T=F.geometry;var V=b.params.PointCloud.threshold;
c.getInverse(this.matrixWorld);d.copy(b.ray).applyMatrix4(c);if(T.boundingBox!==null){if(d.isIntersectionBox(T.boundingBox)===false){return
}}var W=V/((this.scale.x+this.scale.y+this.scale.z)/3);var G=new THREE.Vector3();
var E=function(f,h){var e=d.distanceToPoint(f);if(e<W){var j=d.closestPointToPoint(f);
j.applyMatrix4(F.matrixWorld);var g=b.ray.origin.distanceTo(j);X.push({distance:g,distanceToRay:e,point:j.clone(),index:h,face:null,object:F})
}};if(T instanceof THREE.BufferGeometry){var L=T.attributes;var M=L.position.array;
if(L.index!==undefined){var S=L.index.array;var Q=T.offsets;if(Q.length===0){var R={start:0,count:S.length,index:0};
Q=[R]}for(var i=0,H=Q.length;i<H;++i){var U=Q[i].start;var N=Q[i].count;var O=Q[i].index;
for(var a=U,J=U+N;a<J;a++){var I=O+S[a];G.fromArray(M,I*3);E(G,I)}}}else{var K=M.length/3;
for(var a=0;a<K;a++){G.set(M[3*a],M[3*a+1],M[3*a+2]);E(G,a)}}}else{var P=this.geometry.vertices;
for(var a=0;a<P.length;a++){E(P[a],a)}}}}());THREE.PointCloud.prototype.clone=function(b){if(b===undefined){b=new THREE.PointCloud(this.geometry,this.material)
}THREE.Object3D.prototype.clone.call(this,b);return b};THREE.ParticleSystem=function(c,d){THREE.warn("THREE.ParticleSystem has been renamed to THREE.PointCloud.");
return new THREE.PointCloud(c,d)};THREE.Line=function(f,e,d){THREE.Object3D.call(this);
this.type="Line";this.geometry=f!==undefined?f:new THREE.Geometry();this.material=e!==undefined?e:new THREE.LineBasicMaterial({color:Math.random()*16777215});
this.mode=d!==undefined?d:THREE.LineStrip};THREE.LineStrip=0;THREE.LinePieces=1;
THREE.Line.prototype=Object.create(THREE.Object3D.prototype);THREE.Line.prototype.constructor=THREE.Line;
THREE.Line.prototype.raycast=(function(){var f=new THREE.Matrix4();var e=new THREE.Ray();
var d=new THREE.Sphere();return function(i,aa){var N=i.linePrecision;var c=N*N;
var W=this.geometry;if(W.boundingSphere===null){W.computeBoundingSphere()}d.copy(W.boundingSphere);
d.applyMatrix4(this.matrixWorld);if(i.ray.isIntersectionSphere(d)===false){return
}f.getInverse(this.matrixWorld);e.copy(i.ray).applyMatrix4(f);var a=new THREE.Vector3();
var ab=new THREE.Vector3();var V=new THREE.Vector3();var b=new THREE.Vector3();
var R=this.mode===THREE.LineStrip?1:2;if(W instanceof THREE.BufferGeometry){var K=W.attributes;
if(K.index!==undefined){var U=K.index.array;var M=K.position.array;var T=W.offsets;
if(T.length===0){T=[{start:0,count:U.length,index:0}]}for(var I=0;I<T.length;I++){var X=T[I].start;
var O=T[I].count;var Q=T[I].index;for(var P=X;P<X+O-1;P+=R){var J=Q+U[P];var L=Q+U[P+1];
a.fromArray(M,J*3);ab.fromArray(M,L*3);var Z=e.distanceSqToSegment(a,ab,b,V);if(Z>c){continue
}var Y=e.origin.distanceTo(b);if(Y<i.near||Y>i.far){continue}aa.push({distance:Y,point:V.clone().applyMatrix4(this.matrixWorld),index:P,offsetIndex:I,face:null,faceIndex:null,object:this})
}}}else{var M=K.position.array;for(var P=0;P<M.length/3-1;P+=R){a.fromArray(M,3*P);
ab.fromArray(M,3*P+3);var Z=e.distanceSqToSegment(a,ab,b,V);if(Z>c){continue}var Y=e.origin.distanceTo(b);
if(Y<i.near||Y>i.far){continue}aa.push({distance:Y,point:V.clone().applyMatrix4(this.matrixWorld),index:P,face:null,faceIndex:null,object:this})
}}}else{if(W instanceof THREE.Geometry){var S=W.vertices;var H=S.length;for(var P=0;
P<H-1;P+=R){var Z=e.distanceSqToSegment(S[P],S[P+1],b,V);if(Z>c){continue}var Y=e.origin.distanceTo(b);
if(Y<i.near||Y>i.far){continue}aa.push({distance:Y,point:V.clone().applyMatrix4(this.matrixWorld),index:P,face:null,faceIndex:null,object:this})
}}}}}());THREE.Line.prototype.clone=function(b){if(b===undefined){b=new THREE.Line(this.geometry,this.material,this.mode)
}THREE.Object3D.prototype.clone.call(this,b);return b};THREE.Mesh=function(c,d){THREE.Object3D.call(this);
this.type="Mesh";this.geometry=c!==undefined?c:new THREE.Geometry();this.material=d!==undefined?d:new THREE.MeshBasicMaterial({color:Math.random()*16777215});
this.updateMorphTargets()};THREE.Mesh.prototype=Object.create(THREE.Object3D.prototype);
THREE.Mesh.prototype.constructor=THREE.Mesh;THREE.Mesh.prototype.updateMorphTargets=function(){if(this.geometry.morphTargets!==undefined&&this.geometry.morphTargets.length>0){this.morphTargetBase=-1;
this.morphTargetForcedOrder=[];this.morphTargetInfluences=[];this.morphTargetDictionary={};
for(var d=0,c=this.geometry.morphTargets.length;d<c;d++){this.morphTargetInfluences.push(0);
this.morphTargetDictionary[this.geometry.morphTargets[d].name]=d}}};THREE.Mesh.prototype.getMorphTargetIndexByName=function(b){if(this.morphTargetDictionary[b]!==undefined){return this.morphTargetDictionary[b]
}THREE.warn("THREE.Mesh.getMorphTargetIndexByName: morph target "+b+" does not exist. Returning 0.");
return 0};THREE.Mesh.prototype.raycast=(function(){var i=new THREE.Matrix4();var h=new THREE.Ray();
var g=new THREE.Sphere();var j=new THREE.Vector3();var k=new THREE.Vector3();var l=new THREE.Vector3();
return function(Z,aw){var aq=this.geometry;if(aq.boundingSphere===null){aq.computeBoundingSphere()
}g.copy(aq.boundingSphere);g.applyMatrix4(this.matrixWorld);if(Z.ray.isIntersectionSphere(g)===false){return
}i.getInverse(this.matrixWorld);h.copy(Z.ray).applyMatrix4(i);if(aq.boundingBox!==null){if(h.isIntersectionBox(aq.boundingBox)===false){return
}}if(aq instanceof THREE.BufferGeometry){var ae=this.material;if(ae===undefined){return
}var ad=aq.attributes;var a,c,d;var f=Z.precision;if(ad.index!==undefined){var ap=ad.index.array;
var af=ad.position.array;var ao=aq.offsets;if(ao.length===0){ao=[{start:0,count:ap.length,index:0}]
}for(var aa=0,ag=ao.length;aa<ag;++aa){var ar=ao[aa].start;var ak=ao[aa].count;
var ai=ao[aa].index;for(var t=ar,ah=ar+ak;t<ah;t+=3){a=ai+ap[t];c=ai+ap[t+1];d=ai+ap[t+2];
j.fromArray(af,a*3);k.fromArray(af,c*3);l.fromArray(af,d*3);if(ae.side===THREE.BackSide){var V=h.intersectTriangle(l,k,j,true)
}else{var V=h.intersectTriangle(j,k,l,ae.side!==THREE.DoubleSide)}if(V===null){continue
}V.applyMatrix4(this.matrixWorld);var at=Z.ray.origin.distanceTo(V);if(at<f||at<Z.near||at>Z.far){continue
}aw.push({distance:at,point:V,face:new THREE.Face3(a,c,d,THREE.Triangle.normal(j,k,l)),faceIndex:null,object:this})
}}}else{var af=ad.position.array;for(var t=0,W=0,ah=af.length;t<ah;t+=3,W+=9){a=t;
c=t+1;d=t+2;j.fromArray(af,W);k.fromArray(af,W+3);l.fromArray(af,W+6);if(ae.side===THREE.BackSide){var V=h.intersectTriangle(l,k,j,true)
}else{var V=h.intersectTriangle(j,k,l,ae.side!==THREE.DoubleSide)}if(V===null){continue
}V.applyMatrix4(this.matrixWorld);var at=Z.ray.origin.distanceTo(V);if(at<f||at<Z.near||at>Z.far){continue
}aw.push({distance:at,point:V,face:new THREE.Face3(a,c,d,THREE.Triangle.normal(j,k,l)),faceIndex:null,object:this})
}}}else{if(aq instanceof THREE.Geometry){var av=this.material instanceof THREE.MeshFaceMaterial;
var Y=av===true?this.material.materials:null;var a,c,d;var f=Z.precision;var am=aq.vertices;
for(var e=0,al=aq.faces.length;e<al;e++){var an=aq.faces[e];var ae=av===true?Y[an.materialIndex]:this.material;
if(ae===undefined){continue}a=am[an.a];c=am[an.b];d=am[an.c];if(ae.morphTargets===true){var aj=aq.morphTargets;
var ab=this.morphTargetInfluences;j.set(0,0,0);k.set(0,0,0);l.set(0,0,0);for(var ac=0,au=aj.length;
ac<au;ac++){var X=ab[ac];if(X===0){continue}var b=aj[ac].vertices;j.x+=(b[an.a].x-a.x)*X;
j.y+=(b[an.a].y-a.y)*X;j.z+=(b[an.a].z-a.z)*X;k.x+=(b[an.b].x-c.x)*X;k.y+=(b[an.b].y-c.y)*X;
k.z+=(b[an.b].z-c.z)*X;l.x+=(b[an.c].x-d.x)*X;l.y+=(b[an.c].y-d.y)*X;l.z+=(b[an.c].z-d.z)*X
}j.add(a);k.add(c);l.add(d);a=j;c=k;d=l}if(ae.side===THREE.BackSide){var V=h.intersectTriangle(d,c,a,true)
}else{var V=h.intersectTriangle(a,c,d,ae.side!==THREE.DoubleSide)}if(V===null){continue
}V.applyMatrix4(this.matrixWorld);var at=Z.ray.origin.distanceTo(V);if(at<f||at<Z.near||at>Z.far){continue
}aw.push({distance:at,point:V,face:an,faceIndex:e,object:this})}}}}}());THREE.Mesh.prototype.clone=function(c,d){if(c===undefined){c=new THREE.Mesh(this.geometry,this.material)
}THREE.Object3D.prototype.clone.call(this,c,d);return c};THREE.Bone=function(b){THREE.Object3D.call(this);
this.type="Bone";this.skin=b};THREE.Bone.prototype=Object.create(THREE.Object3D.prototype);
THREE.Bone.prototype.constructor=THREE.Bone;THREE.Skeleton=function(l,j,i){this.useVertexTexture=i!==undefined?i:true;
this.identityMatrix=new THREE.Matrix4();l=l||[];this.bones=l.slice(0);if(this.useVertexTexture){var k;
if(this.bones.length>256){k=64}else{if(this.bones.length>64){k=32}else{if(this.bones.length>16){k=16
}else{k=8}}}this.boneTextureWidth=k;this.boneTextureHeight=k;this.boneMatrices=new Float32Array(this.boneTextureWidth*this.boneTextureHeight*4);
this.boneTexture=new THREE.DataTexture(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,THREE.RGBAFormat,THREE.FloatType);
this.boneTexture.minFilter=THREE.NearestFilter;this.boneTexture.magFilter=THREE.NearestFilter;
this.boneTexture.generateMipmaps=false;this.boneTexture.flipY=false}else{this.boneMatrices=new Float32Array(16*this.bones.length)
}if(j===undefined){this.calculateInverses()}else{if(this.bones.length===j.length){this.boneInverses=j.slice(0)
}else{THREE.warn("THREE.Skeleton bonInverses is the wrong length.");this.boneInverses=[];
for(var b=0,h=this.bones.length;b<h;b++){this.boneInverses.push(new THREE.Matrix4())
}}}};THREE.Skeleton.prototype.calculateInverses=function(){this.boneInverses=[];
for(var b=0,e=this.bones.length;b<e;b++){var f=new THREE.Matrix4();if(this.bones[b]){f.getInverse(this.bones[b].matrixWorld)
}this.boneInverses.push(f)}};THREE.Skeleton.prototype.pose=function(){var f;for(var b=0,e=this.bones.length;
b<e;b++){f=this.bones[b];if(f){f.matrixWorld.getInverse(this.boneInverses[b])}}for(var b=0,e=this.bones.length;
b<e;b++){f=this.bones[b];if(f){if(f.parent){f.matrix.getInverse(f.parent.matrixWorld);
f.matrix.multiply(f.matrixWorld)}else{f.matrix.copy(f.matrixWorld)}f.matrix.decompose(f.position,f.quaternion,f.scale)
}}};THREE.Skeleton.prototype.update=(function(){var b=new THREE.Matrix4();return function(){for(var g=0,a=this.bones.length;
g<a;g++){var f=this.bones[g]?this.bones[g].matrixWorld:this.identityMatrix;b.multiplyMatrices(f,this.boneInverses[g]);
b.flattenToArrayOffset(this.boneMatrices,g*16)}if(this.useVertexTexture){this.boneTexture.needsUpdate=true
}}})();THREE.SkinnedMesh=function(o,q,r){THREE.Mesh.call(this,o,q);this.type="SkinnedMesh";
this.bindMode="attached";this.bindMatrix=new THREE.Matrix4();this.bindMatrixInverse=new THREE.Matrix4();
var s=[];if(this.geometry&&this.geometry.bones!==undefined){var n,m,u,v,b;for(var p=0,t=this.geometry.bones.length;
p<t;++p){m=this.geometry.bones[p];u=m.pos;v=m.rotq;b=m.scl;n=new THREE.Bone(this);
s.push(n);n.name=m.name;n.position.set(u[0],u[1],u[2]);n.quaternion.set(v[0],v[1],v[2],v[3]);
if(b!==undefined){n.scale.set(b[0],b[1],b[2])}else{n.scale.set(1,1,1)}}for(var p=0,t=this.geometry.bones.length;
p<t;++p){m=this.geometry.bones[p];if(m.parent!==-1){s[m.parent].add(s[p])}else{this.add(s[p])
}}}this.normalizeSkinWeights();this.updateMatrixWorld(true);this.bind(new THREE.Skeleton(s,undefined,r))
};THREE.SkinnedMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.SkinnedMesh.prototype.constructor=THREE.SkinnedMesh;
THREE.SkinnedMesh.prototype.bind=function(c,d){this.skeleton=c;if(d===undefined){this.updateMatrixWorld(true);
d=this.matrixWorld}this.bindMatrix.copy(d);this.bindMatrixInverse.getInverse(d)
};THREE.SkinnedMesh.prototype.pose=function(){this.skeleton.pose()};THREE.SkinnedMesh.prototype.normalizeSkinWeights=function(){if(this.geometry instanceof THREE.Geometry){for(var d=0;
d<this.geometry.skinIndices.length;d++){var e=this.geometry.skinWeights[d];var f=1/e.lengthManhattan();
if(f!==Infinity){e.multiplyScalar(f)}else{e.set(1)}}}else{}};THREE.SkinnedMesh.prototype.updateMatrixWorld=function(b){THREE.Mesh.prototype.updateMatrixWorld.call(this,true);
if(this.bindMode==="attached"){this.bindMatrixInverse.getInverse(this.matrixWorld)
}else{if(this.bindMode==="detached"){this.bindMatrixInverse.getInverse(this.bindMatrix)
}else{THREE.warn("THREE.SkinnedMesh unreckognized bindMode: "+this.bindMode)}}};
THREE.SkinnedMesh.prototype.clone=function(b){if(b===undefined){b=new THREE.SkinnedMesh(this.geometry,this.material,this.useVertexTexture)
}THREE.Mesh.prototype.clone.call(this,b);return b};THREE.MorphAnimMesh=function(c,d){THREE.Mesh.call(this,c,d);
this.type="MorphAnimMesh";this.duration=1000;this.mirroredLoop=false;this.time=0;
this.lastKeyframe=0;this.currentKeyframe=0;this.direction=1;this.directionBackwards=false;
this.setFrameRange(0,this.geometry.morphTargets.length-1)};THREE.MorphAnimMesh.prototype=Object.create(THREE.Mesh.prototype);
THREE.MorphAnimMesh.prototype.constructor=THREE.MorphAnimMesh;THREE.MorphAnimMesh.prototype.setFrameRange=function(c,d){this.startKeyframe=c;
this.endKeyframe=d;this.length=this.endKeyframe-this.startKeyframe+1};THREE.MorphAnimMesh.prototype.setDirectionForward=function(){this.direction=1;
this.directionBackwards=false};THREE.MorphAnimMesh.prototype.setDirectionBackward=function(){this.direction=-1;
this.directionBackwards=true};THREE.MorphAnimMesh.prototype.parseAnimations=function(){var o=this.geometry;
if(!o.animations){o.animations={}}var t,i=o.animations;var p=/([a-z]+)_?(\d+)/;
for(var q=0,m=o.morphTargets.length;q<m;q++){var l=o.morphTargets[q];var r=l.name.match(p);
if(r&&r.length>1){var n=r[1];if(!i[n]){i[n]={start:Infinity,end:-Infinity}}var s=i[n];
if(q<s.start){s.start=q}if(q>s.end){s.end=q}if(!t){t=n}}}o.firstAnimation=t};THREE.MorphAnimMesh.prototype.setAnimationLabel=function(d,f,e){if(!this.geometry.animations){this.geometry.animations={}
}this.geometry.animations[d]={start:f,end:e}};THREE.MorphAnimMesh.prototype.playAnimation=function(e,f){var d=this.geometry.animations[e];
if(d){this.setFrameRange(d.start,d.end);this.duration=1000*((d.end-d.start)/f);
this.time=0}else{THREE.warn("THREE.MorphAnimMesh: animation["+e+"] undefined in .playAnimation()")
}};THREE.MorphAnimMesh.prototype.updateAnimation=function(g){var h=this.duration/this.length;
this.time+=this.direction*g;if(this.mirroredLoop){if(this.time>this.duration||this.time<0){this.direction*=-1;
if(this.time>this.duration){this.time=this.duration;this.directionBackwards=true
}if(this.time<0){this.time=0;this.directionBackwards=false}}}else{this.time=this.time%this.duration;
if(this.time<0){this.time+=this.duration}}var f=this.startKeyframe+THREE.Math.clamp(Math.floor(this.time/h),0,this.length-1);
if(f!==this.currentKeyframe){this.morphTargetInfluences[this.lastKeyframe]=0;this.morphTargetInfluences[this.currentKeyframe]=1;
this.morphTargetInfluences[f]=0;this.lastKeyframe=this.currentKeyframe;this.currentKeyframe=f
}var e=(this.time%h)/h;if(this.directionBackwards){e=1-e}this.morphTargetInfluences[this.currentKeyframe]=e;
this.morphTargetInfluences[this.lastKeyframe]=1-e};THREE.MorphAnimMesh.prototype.interpolateTargets=function(j,l,b){var a=this.morphTargetInfluences;
for(var i=0,k=a.length;i<k;i++){a[i]=0}if(j>-1){a[j]=1-b}if(l>-1){a[l]=b}};THREE.MorphAnimMesh.prototype.clone=function(b){if(b===undefined){b=new THREE.MorphAnimMesh(this.geometry,this.material)
}b.duration=this.duration;b.mirroredLoop=this.mirroredLoop;b.time=this.time;b.lastKeyframe=this.lastKeyframe;
b.currentKeyframe=this.currentKeyframe;b.direction=this.direction;b.directionBackwards=this.directionBackwards;
THREE.Mesh.prototype.clone.call(this,b);return b};THREE.LOD=function(){THREE.Object3D.call(this);
this.objects=[]};THREE.LOD.prototype=Object.create(THREE.Object3D.prototype);THREE.LOD.prototype.constructor=THREE.LOD;
THREE.LOD.prototype.addLevel=function(d,f){if(f===undefined){f=0}f=Math.abs(f);
for(var e=0;e<this.objects.length;e++){if(f<this.objects[e].distance){break}}this.objects.splice(e,0,{distance:f,object:d});
this.add(d)};THREE.LOD.prototype.getObjectForDistance=function(f){for(var d=1,e=this.objects.length;
d<e;d++){if(f<this.objects[d].distance){break}}return this.objects[d-1].object};
THREE.LOD.prototype.raycast=(function(){var b=new THREE.Vector3();return function(a,f){b.setFromMatrixPosition(this.matrixWorld);
var e=a.ray.origin.distanceTo(b);this.getObjectForDistance(e).raycast(a,f)}}());
THREE.LOD.prototype.update=function(){var c=new THREE.Vector3();var d=new THREE.Vector3();
return function(b){if(this.objects.length>1){c.setFromMatrixPosition(b.matrixWorld);
d.setFromMatrixPosition(this.matrixWorld);var a=c.distanceTo(d);this.objects[0].object.visible=true;
for(var g=1,h=this.objects.length;g<h;g++){if(a>=this.objects[g].distance){this.objects[g-1].object.visible=false;
this.objects[g].object.visible=true}else{break}}for(;g<h;g++){this.objects[g].object.visible=false
}}}}();THREE.LOD.prototype.clone=function(h){if(h===undefined){h=new THREE.LOD()
}THREE.Object3D.prototype.clone.call(this,h);for(var g=0,e=this.objects.length;
g<e;g++){var f=this.objects[g].object.clone();f.visible=g===0;h.addLevel(f,this.objects[g].distance)
}return h};THREE.Sprite=(function(){var g=new Uint16Array([0,1,2,0,2,3]);var f=new Float32Array([-0.5,-0.5,0,0.5,-0.5,0,0.5,0.5,0,-0.5,0.5,0]);
var e=new Float32Array([0,0,1,0,1,1,0,1]);var h=new THREE.BufferGeometry();h.addAttribute("index",new THREE.BufferAttribute(g,1));
h.addAttribute("position",new THREE.BufferAttribute(f,3));h.addAttribute("uv",new THREE.BufferAttribute(e,2));
return function(a){THREE.Object3D.call(this);this.type="Sprite";this.geometry=h;
this.material=(a!==undefined)?a:new THREE.SpriteMaterial()}})();THREE.Sprite.prototype=Object.create(THREE.Object3D.prototype);
THREE.Sprite.prototype.constructor=THREE.Sprite;THREE.Sprite.prototype.raycast=(function(){var b=new THREE.Vector3();
return function(a,f){b.setFromMatrixPosition(this.matrixWorld);var e=a.ray.distanceToPoint(b);
if(e>this.scale.x){return}f.push({distance:e,point:this.position,face:null,object:this})
}}());THREE.Sprite.prototype.clone=function(b){if(b===undefined){b=new THREE.Sprite(this.material)
}THREE.Object3D.prototype.clone.call(this,b);return b};THREE.Particle=THREE.Sprite;
THREE.LensFlare=function(i,f,h,j,g){THREE.Object3D.call(this);this.lensFlares=[];
this.positionScreen=new THREE.Vector3();this.customUpdateCallback=undefined;if(i!==undefined){this.add(i,f,h,j,g)
}};THREE.LensFlare.prototype=Object.create(THREE.Object3D.prototype);THREE.LensFlare.prototype.constructor=THREE.LensFlare;
THREE.LensFlare.prototype.add=function(j,l,i,k,h,g){if(l===undefined){l=-1}if(i===undefined){i=0
}if(g===undefined){g=1}if(h===undefined){h=new THREE.Color(16777215)}if(k===undefined){k=THREE.NormalBlending
}i=Math.min(i,Math.max(0,i));this.lensFlares.push({texture:j,size:l,distance:i,x:0,y:0,z:0,scale:1,rotation:1,opacity:g,color:h,blending:k})
};THREE.LensFlare.prototype.updateLensFlares=function(){var i,j=this.lensFlares.length;
var f;var g=-this.positionScreen.x*2;var h=-this.positionScreen.y*2;for(i=0;i<j;
i++){f=this.lensFlares[i];f.x=this.positionScreen.x+g*f.distance;f.y=this.positionScreen.y+h*f.distance;
f.wantedRotation=f.x*Math.PI*0.25;f.rotation+=(f.wantedRotation-f.rotation)*0.25
}};THREE.Scene=function(){THREE.Object3D.call(this);this.type="Scene";this.fog=null;
this.overrideMaterial=null;this.autoUpdate=true};THREE.Scene.prototype=Object.create(THREE.Object3D.prototype);
THREE.Scene.prototype.constructor=THREE.Scene;THREE.Scene.prototype.clone=function(b){if(b===undefined){b=new THREE.Scene()
}THREE.Object3D.prototype.clone.call(this,b);if(this.fog!==null){b.fog=this.fog.clone()
}if(this.overrideMaterial!==null){b.overrideMaterial=this.overrideMaterial.clone()
}b.autoUpdate=this.autoUpdate;b.matrixAutoUpdate=this.matrixAutoUpdate;return b
};THREE.Fog=function(d,f,e){this.name="";this.color=new THREE.Color(d);this.near=(f!==undefined)?f:1;
this.far=(e!==undefined)?e:1000};THREE.Fog.prototype.clone=function(){return new THREE.Fog(this.color.getHex(),this.near,this.far)
};THREE.FogExp2=function(c,d){this.name="";this.color=new THREE.Color(c);this.density=(d!==undefined)?d:0.00025
};THREE.FogExp2.prototype.clone=function(){return new THREE.FogExp2(this.color.getHex(),this.density)
};THREE.ShaderChunk={};THREE.ShaderChunk.common="#define PI 3.14159\n#define PI2 6.28318\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n\nfloat square( in float a ) { return a*a; }\nvec2  square( in vec2 a )  { return vec2( a.x*a.x, a.y*a.y ); }\nvec3  square( in vec3 a )  { return vec3( a.x*a.x, a.y*a.y, a.z*a.z ); }\nvec4  square( in vec4 a )  { return vec4( a.x*a.x, a.y*a.y, a.z*a.z, a.w*a.w ); }\nfloat saturate( in float a ) { return clamp( a, 0.0, 1.0 ); }\nvec2  saturate( in vec2 a )  { return clamp( a, 0.0, 1.0 ); }\nvec3  saturate( in vec3 a )  { return clamp( a, 0.0, 1.0 ); }\nvec4  saturate( in vec4 a )  { return clamp( a, 0.0, 1.0 ); }\nfloat average( in float a ) { return a; }\nfloat average( in vec2 a )  { return ( a.x + a.y) * 0.5; }\nfloat average( in vec3 a )  { return ( a.x + a.y + a.z) / 3.0; }\nfloat average( in vec4 a )  { return ( a.x + a.y + a.z + a.w) * 0.25; }\nfloat whiteCompliment( in float a ) { return saturate( 1.0 - a ); }\nvec2  whiteCompliment( in vec2 a )  { return saturate( vec2(1.0) - a ); }\nvec3  whiteCompliment( in vec3 a )  { return saturate( vec3(1.0) - a ); }\nvec4  whiteCompliment( in vec4 a )  { return saturate( vec4(1.0) - a ); }\nvec3 transformDirection( in vec3 normal, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( normal, 0.0 ) ).xyz );\n}\n// http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations\nvec3 inverseTransformDirection( in vec3 normal, in mat4 matrix ) {\n	return normalize( ( vec4( normal, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal) {\n	float distance = dot( planeNormal, point-pointOnPlane );\n	return point - distance * planeNormal;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	return sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	return pointOnLine + lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) );\n}\nfloat calcLightAttenuation( float lightDistance, float cutoffDistance, float decayExponent ) {\n	if ( decayExponent > 0.0 ) {\n	  return pow( saturate( 1.0 - lightDistance / cutoffDistance ), decayExponent );\n	}\n	return 1.0;\n}\n\nvec3 inputToLinear( in vec3 a ) {\n#ifdef GAMMA_INPUT\n	return pow( a, vec3( float( GAMMA_FACTOR ) ) );\n#else\n	return a;\n#endif\n}\nvec3 linearToOutput( in vec3 a ) {\n#ifdef GAMMA_OUTPUT\n	return pow( a, vec3( 1.0 / float( GAMMA_FACTOR ) ) );\n#else\n	return a;\n#endif\n}\n";
THREE.ShaderChunk.alphatest_fragment="#ifdef ALPHATEST\n\n	if ( diffuseColor.a < ALPHATEST ) discard;\n\n#endif\n";
THREE.ShaderChunk.lights_lambert_vertex="vLightFront = vec3( 0.0 );\n\n#ifdef DOUBLE_SIDED\n\n	vLightBack = vec3( 0.0 );\n\n#endif\n\ntransformedNormal = normalize( transformedNormal );\n\n#if MAX_DIR_LIGHTS > 0\n\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n	vec3 dirVector = transformDirection( directionalLightDirection[ i ], viewMatrix );\n\n	float dotProduct = dot( transformedNormal, dirVector );\n	vec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n	#ifdef DOUBLE_SIDED\n\n		vec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n		#ifdef WRAP_AROUND\n\n			vec3 directionalLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n		#endif\n\n	#endif\n\n	#ifdef WRAP_AROUND\n\n		vec3 directionalLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n		directionalLightWeighting = mix( directionalLightWeighting, directionalLightWeightingHalf, wrapRGB );\n\n		#ifdef DOUBLE_SIDED\n\n			directionalLightWeightingBack = mix( directionalLightWeightingBack, directionalLightWeightingHalfBack, wrapRGB );\n\n		#endif\n\n	#endif\n\n	vLightFront += directionalLightColor[ i ] * directionalLightWeighting;\n\n	#ifdef DOUBLE_SIDED\n\n		vLightBack += directionalLightColor[ i ] * directionalLightWeightingBack;\n\n	#endif\n\n}\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n	for( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n		vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n		vec3 lVector = lPosition.xyz - mvPosition.xyz;\n\n		float attenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecay[ i ] );\n\n		lVector = normalize( lVector );\n		float dotProduct = dot( transformedNormal, lVector );\n\n		vec3 pointLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n		#ifdef DOUBLE_SIDED\n\n			vec3 pointLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n			#ifdef WRAP_AROUND\n\n				vec3 pointLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n			#endif\n\n		#endif\n\n		#ifdef WRAP_AROUND\n\n			vec3 pointLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n			pointLightWeighting = mix( pointLightWeighting, pointLightWeightingHalf, wrapRGB );\n\n			#ifdef DOUBLE_SIDED\n\n				pointLightWeightingBack = mix( pointLightWeightingBack, pointLightWeightingHalfBack, wrapRGB );\n\n			#endif\n\n		#endif\n\n		vLightFront += pointLightColor[ i ] * pointLightWeighting * attenuation;\n\n		#ifdef DOUBLE_SIDED\n\n			vLightBack += pointLightColor[ i ] * pointLightWeightingBack * attenuation;\n\n		#endif\n\n	}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n	for( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n		vec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n		vec3 lVector = lPosition.xyz - mvPosition.xyz;\n\n		float spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - worldPosition.xyz ) );\n\n		if ( spotEffect > spotLightAngleCos[ i ] ) {\n\n			spotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\n			float attenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecay[ i ] );\n\n			lVector = normalize( lVector );\n\n			float dotProduct = dot( transformedNormal, lVector );\n			vec3 spotLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n			#ifdef DOUBLE_SIDED\n\n				vec3 spotLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n				#ifdef WRAP_AROUND\n\n					vec3 spotLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n				#endif\n\n			#endif\n\n			#ifdef WRAP_AROUND\n\n				vec3 spotLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n				spotLightWeighting = mix( spotLightWeighting, spotLightWeightingHalf, wrapRGB );\n\n				#ifdef DOUBLE_SIDED\n\n					spotLightWeightingBack = mix( spotLightWeightingBack, spotLightWeightingHalfBack, wrapRGB );\n\n				#endif\n\n			#endif\n\n			vLightFront += spotLightColor[ i ] * spotLightWeighting * attenuation * spotEffect;\n\n			#ifdef DOUBLE_SIDED\n\n				vLightBack += spotLightColor[ i ] * spotLightWeightingBack * attenuation * spotEffect;\n\n			#endif\n\n		}\n\n	}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n	for( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n		vec3 lVector = transformDirection( hemisphereLightDirection[ i ], viewMatrix );\n\n		float dotProduct = dot( transformedNormal, lVector );\n\n		float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n		float hemiDiffuseWeightBack = -0.5 * dotProduct + 0.5;\n\n		vLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n		#ifdef DOUBLE_SIDED\n\n			vLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n\n		#endif\n\n	}\n\n#endif\n\nvLightFront += ambientLightColor;\n\n#ifdef DOUBLE_SIDED\n\n	vLightBack += ambientLightColor;\n\n#endif\n";
THREE.ShaderChunk.map_particle_pars_fragment="#ifdef USE_MAP\n\n	uniform vec4 offsetRepeat;\n	uniform sampler2D map;\n\n#endif\n";
THREE.ShaderChunk.default_vertex="#ifdef USE_SKINNING\n\n	vec4 mvPosition = modelViewMatrix * skinned;\n\n#elif defined( USE_MORPHTARGETS )\n\n	vec4 mvPosition = modelViewMatrix * vec4( morphed, 1.0 );\n\n#else\n\n	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\n#endif\n\ngl_Position = projectionMatrix * mvPosition;\n";
THREE.ShaderChunk.map_pars_fragment="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n	varying vec2 vUv;\n\n#endif\n\n#ifdef USE_MAP\n\n	uniform sampler2D map;\n\n#endif";
THREE.ShaderChunk.skinnormal_vertex="#ifdef USE_SKINNING\n\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\n	#ifdef USE_MORPHNORMALS\n\n	vec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );\n\n	#else\n\n	vec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );\n\n	#endif\n\n#endif\n";
THREE.ShaderChunk.logdepthbuf_pars_vertex="#ifdef USE_LOGDEPTHBUF\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		varying float vFragDepth;\n\n	#endif\n\n	uniform float logDepthBufFC;\n\n#endif";
THREE.ShaderChunk.lightmap_pars_vertex="#ifdef USE_LIGHTMAP\n\n	varying vec2 vUv2;\n\n#endif";
THREE.ShaderChunk.lights_phong_fragment="#ifndef FLAT_SHADED\n\n	vec3 normal = normalize( vNormal );\n\n	#ifdef DOUBLE_SIDED\n\n		normal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\n	#endif\n\n#else\n\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n\n#endif\n\nvec3 viewPosition = normalize( vViewPosition );\n\n#ifdef USE_NORMALMAP\n\n	normal = perturbNormal2Arb( -vViewPosition, normal );\n\n#elif defined( USE_BUMPMAP )\n\n	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n\n#endif\n\nvec3 totalDiffuseLight = vec3( 0.0 );\nvec3 totalSpecularLight = vec3( 0.0 );\n\n#if MAX_POINT_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n		vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n		vec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n		float attenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecay[ i ] );\n\n		lVector = normalize( lVector );\n\n		// diffuse\n\n		float dotProduct = dot( normal, lVector );\n\n		#ifdef WRAP_AROUND\n\n			float pointDiffuseWeightFull = max( dotProduct, 0.0 );\n			float pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n			vec3 pointDiffuseWeight = mix( vec3( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n\n		#else\n\n			float pointDiffuseWeight = max( dotProduct, 0.0 );\n\n		#endif\n\n		totalDiffuseLight += pointLightColor[ i ] * pointDiffuseWeight * attenuation;\n\n				// specular\n\n		vec3 pointHalfVector = normalize( lVector + viewPosition );\n		float pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\n		float pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );\n\n		float specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n		vec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, pointHalfVector ), 0.0 ), 5.0 );\n		totalSpecularLight += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * attenuation * specularNormalization;\n\n	}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n		vec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n		vec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n		float attenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecay[ i ] );\n\n		lVector = normalize( lVector );\n\n		float spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\n\n		if ( spotEffect > spotLightAngleCos[ i ] ) {\n\n			spotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\n			// diffuse\n\n			float dotProduct = dot( normal, lVector );\n\n			#ifdef WRAP_AROUND\n\n				float spotDiffuseWeightFull = max( dotProduct, 0.0 );\n				float spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n				vec3 spotDiffuseWeight = mix( vec3( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n\n			#else\n\n				float spotDiffuseWeight = max( dotProduct, 0.0 );\n\n			#endif\n\n			totalDiffuseLight += spotLightColor[ i ] * spotDiffuseWeight * attenuation * spotEffect;\n\n			// specular\n\n			vec3 spotHalfVector = normalize( lVector + viewPosition );\n			float spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\n			float spotSpecularWeight = specularStrength * max( pow( spotDotNormalHalf, shininess ), 0.0 );\n\n			float specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n			vec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, spotHalfVector ), 0.0 ), 5.0 );\n			totalSpecularLight += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * attenuation * specularNormalization * spotEffect;\n\n		}\n\n	}\n\n#endif\n\n#if MAX_DIR_LIGHTS > 0\n\n	for( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n		vec3 dirVector = transformDirection( directionalLightDirection[ i ], viewMatrix );\n\n		// diffuse\n\n		float dotProduct = dot( normal, dirVector );\n\n		#ifdef WRAP_AROUND\n\n			float dirDiffuseWeightFull = max( dotProduct, 0.0 );\n			float dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n			vec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );\n\n		#else\n\n			float dirDiffuseWeight = max( dotProduct, 0.0 );\n\n		#endif\n\n		totalDiffuseLight += directionalLightColor[ i ] * dirDiffuseWeight;\n\n		// specular\n\n		vec3 dirHalfVector = normalize( dirVector + viewPosition );\n		float dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\n		float dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );\n\n		/*\n		// fresnel term from skin shader\n		const float F0 = 0.128;\n\n		float base = 1.0 - dot( viewPosition, dirHalfVector );\n		float exponential = pow( base, 5.0 );\n\n		float fresnel = exponential + F0 * ( 1.0 - exponential );\n		*/\n\n		/*\n		// fresnel term from fresnel shader\n		const float mFresnelBias = 0.08;\n		const float mFresnelScale = 0.3;\n		const float mFresnelPower = 5.0;\n\n		float fresnel = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( -viewPosition ), normal ), mFresnelPower );\n		*/\n\n		float specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n		// 		dirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization * fresnel;\n\n		vec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( dirVector, dirHalfVector ), 0.0 ), 5.0 );\n		totalSpecularLight += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n\n\n	}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n	for( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n		vec3 lVector = transformDirection( hemisphereLightDirection[ i ], viewMatrix );\n\n		// diffuse\n\n		float dotProduct = dot( normal, lVector );\n		float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n		vec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n		totalDiffuseLight += hemiColor;\n\n		// specular (sky light)\n\n		vec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\n		float hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\n		float hemiSpecularWeightSky = specularStrength * max( pow( max( hemiDotNormalHalfSky, 0.0 ), shininess ), 0.0 );\n\n		// specular (ground light)\n\n		vec3 lVectorGround = -lVector;\n\n		vec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\n		float hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\n		float hemiSpecularWeightGround = specularStrength * max( pow( max( hemiDotNormalHalfGround, 0.0 ), shininess ), 0.0 );\n\n		float dotProductGround = dot( normal, lVectorGround );\n\n		float specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n		vec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, hemiHalfVectorSky ), 0.0 ), 5.0 );\n		vec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 0.0 ), 5.0 );\n		totalSpecularLight += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n\n	}\n\n#endif\n\n#ifdef METAL\n\n	outgoingLight += diffuseColor.rgb * ( totalDiffuseLight + ambientLightColor ) * specular + totalSpecularLight + emissive;\n\n#else\n\n	outgoingLight += diffuseColor.rgb * ( totalDiffuseLight + ambientLightColor ) + totalSpecularLight + emissive;\n\n#endif\n";
THREE.ShaderChunk.fog_pars_fragment="#ifdef USE_FOG\n\n	uniform vec3 fogColor;\n\n	#ifdef FOG_EXP2\n\n		uniform float fogDensity;\n\n	#else\n\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n\n#endif";
THREE.ShaderChunk.morphnormal_vertex="#ifdef USE_MORPHNORMALS\n\n	vec3 morphedNormal = vec3( 0.0 );\n\n	morphedNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n	morphedNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n	morphedNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n	morphedNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n\n	morphedNormal += normal;\n\n#endif";
THREE.ShaderChunk.envmap_pars_fragment="#ifdef USE_ENVMAP\n\n	uniform float reflectivity;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	uniform float flipEnvMap;\n\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n		uniform float refractionRatio;\n\n	#else\n\n		varying vec3 vReflect;\n\n	#endif\n\n#endif\n";
THREE.ShaderChunk.logdepthbuf_fragment="#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\n	gl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n\n#endif";
THREE.ShaderChunk.normalmap_pars_fragment="#ifdef USE_NORMALMAP\n\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n\n	// Per-Pixel Tangent Space Normal Mapping\n	// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html\n\n	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( vUv.st );\n		vec2 st1 = dFdy( vUv.st );\n\n		vec3 S = normalize( q0 * st1.t - q1 * st0.t );\n		vec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n		vec3 N = normalize( surf_norm );\n\n		vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n		mapN.xy = normalScale * mapN.xy;\n		mat3 tsn = mat3( S, T, N );\n		return normalize( tsn * mapN );\n\n	}\n\n#endif\n";
THREE.ShaderChunk.lights_phong_pars_vertex="#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n	varying vec3 vWorldPosition;\n\n#endif\n";
THREE.ShaderChunk.lightmap_pars_fragment="#ifdef USE_LIGHTMAP\n\n	varying vec2 vUv2;\n	uniform sampler2D lightMap;\n\n#endif";
THREE.ShaderChunk.shadowmap_vertex="#ifdef USE_SHADOWMAP\n\n	for( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n		vShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n\n	}\n\n#endif";
THREE.ShaderChunk.lights_phong_vertex="#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n	vWorldPosition = worldPosition.xyz;\n\n#endif";
THREE.ShaderChunk.map_fragment="#ifdef USE_MAP\n\n	vec4 texelColor = texture2D( map, vUv );\n\n	texelColor.xyz = inputToLinear( texelColor.xyz );\n\n	diffuseColor *= texelColor;\n\n#endif";
THREE.ShaderChunk.lightmap_vertex="#ifdef USE_LIGHTMAP\n\n	vUv2 = uv2;\n\n#endif";
THREE.ShaderChunk.map_particle_fragment="#ifdef USE_MAP\n\n	diffuseColor *= texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\n#endif\n";
THREE.ShaderChunk.color_pars_fragment="#ifdef USE_COLOR\n\n	varying vec3 vColor;\n\n#endif\n";
THREE.ShaderChunk.color_vertex="#ifdef USE_COLOR\n\n	vColor.xyz = inputToLinear( color.xyz );\n\n#endif";
THREE.ShaderChunk.skinning_vertex="#ifdef USE_SKINNING\n\n	#ifdef USE_MORPHTARGETS\n\n	vec4 skinVertex = bindMatrix * vec4( morphed, 1.0 );\n\n	#else\n\n	vec4 skinVertex = bindMatrix * vec4( position, 1.0 );\n\n	#endif\n\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	skinned  = bindMatrixInverse * skinned;\n\n#endif\n";
THREE.ShaderChunk.envmap_pars_vertex="#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n	varying vec3 vReflect;\n\n	uniform float refractionRatio;\n\n#endif\n";
THREE.ShaderChunk.linear_to_gamma_fragment="\n	outgoingLight = linearToOutput( outgoingLight );\n";
THREE.ShaderChunk.color_pars_vertex="#ifdef USE_COLOR\n\n	varying vec3 vColor;\n\n#endif";
THREE.ShaderChunk.lights_lambert_pars_vertex="uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n	uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n	uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n	uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n	uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n	uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n	uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n	uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n	uniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n	uniform float pointLightDecay[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n	uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n	uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n	uniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightDecay[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#ifdef WRAP_AROUND\n\n	uniform vec3 wrapRGB;\n\n#endif\n";
THREE.ShaderChunk.map_pars_vertex="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n	varying vec2 vUv;\n	uniform vec4 offsetRepeat;\n\n#endif\n";
THREE.ShaderChunk.envmap_fragment="#ifdef USE_ENVMAP\n\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n		vec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\n		// Transforming Normal Vectors with the Inverse Transformation\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n		#ifdef ENVMAP_MODE_REFLECTION\n\n			vec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\n		#else\n\n			vec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\n		#endif\n\n	#else\n\n		vec3 reflectVec = vReflect;\n\n	#endif\n\n	#ifdef DOUBLE_SIDED\n		float flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n	#else\n		float flipNormal = 1.0;\n	#endif\n\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n	#elif defined( ENVMAP_TYPE_EQUIREC )\n		vec2 sampleUV;\n		sampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n		sampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n		vec4 envColor = texture2D( envMap, sampleUV );\n\n	#elif defined( ENVMAP_TYPE_SPHERE )\n		vec3 reflectView = flipNormal * normalize((viewMatrix * vec4( reflectVec, 0.0 )).xyz + vec3(0.0,0.0,1.0));\n		vec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n	#endif\n\n	envColor.xyz = inputToLinear( envColor.xyz );\n\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\n	#elif defined( ENVMAP_BLENDING_MIX )\n\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\n	#elif defined( ENVMAP_BLENDING_ADD )\n\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n\n	#endif\n\n#endif\n";
THREE.ShaderChunk.specularmap_pars_fragment="#ifdef USE_SPECULARMAP\n\n	uniform sampler2D specularMap;\n\n#endif";
THREE.ShaderChunk.logdepthbuf_vertex="#ifdef USE_LOGDEPTHBUF\n\n	gl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		vFragDepth = 1.0 + gl_Position.w;\n\n#else\n\n		gl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\n	#endif\n\n#endif";
THREE.ShaderChunk.morphtarget_pars_vertex="#ifdef USE_MORPHTARGETS\n\n	#ifndef USE_MORPHNORMALS\n\n	uniform float morphTargetInfluences[ 8 ];\n\n	#else\n\n	uniform float morphTargetInfluences[ 4 ];\n\n	#endif\n\n#endif";
THREE.ShaderChunk.specularmap_fragment="float specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n	vec4 texelSpecular = texture2D( specularMap, vUv );\n	specularStrength = texelSpecular.r;\n\n#else\n\n	specularStrength = 1.0;\n\n#endif";
THREE.ShaderChunk.fog_fragment="#ifdef USE_FOG\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		float depth = gl_FragDepthEXT / gl_FragCoord.w;\n\n	#else\n\n		float depth = gl_FragCoord.z / gl_FragCoord.w;\n\n	#endif\n\n	#ifdef FOG_EXP2\n\n		float fogFactor = exp2( - square( fogDensity ) * square( depth ) * LOG2 );\n		fogFactor = whiteCompliment( fogFactor );\n\n	#else\n\n		float fogFactor = smoothstep( fogNear, fogFar, depth );\n\n	#endif\n	\n	outgoingLight = mix( outgoingLight, fogColor, fogFactor );\n\n#endif";
THREE.ShaderChunk.bumpmap_pars_fragment="#ifdef USE_BUMPMAP\n\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n\n	// Derivative maps - bump mapping unparametrized surfaces by Morten Mikkelsen\n	// http://mmikkelsen3d.blogspot.sk/2011/07/derivative-maps.html\n\n	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\n\n	vec2 dHdxy_fwd() {\n\n		vec2 dSTdx = dFdx( vUv );\n		vec2 dSTdy = dFdy( vUv );\n\n		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\n		return vec2( dBx, dBy );\n\n	}\n\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\n		vec3 vSigmaX = dFdx( surf_pos );\n		vec3 vSigmaY = dFdy( surf_pos );\n		vec3 vN = surf_norm;		// normalized\n\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n\n		float fDet = dot( vSigmaX, R1 );\n\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n\n	}\n\n#endif\n";
THREE.ShaderChunk.defaultnormal_vertex="#ifdef USE_SKINNING\n\n	vec3 objectNormal = skinnedNormal.xyz;\n\n#elif defined( USE_MORPHNORMALS )\n\n	vec3 objectNormal = morphedNormal;\n\n#else\n\n	vec3 objectNormal = normal;\n\n#endif\n\n#ifdef FLIP_SIDED\n\n	objectNormal = -objectNormal;\n\n#endif\n\nvec3 transformedNormal = normalMatrix * objectNormal;\n";
THREE.ShaderChunk.lights_phong_pars_fragment="uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n	uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n	uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n	uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n	uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n	uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n	uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\n	uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n	uniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n	uniform float pointLightDecay[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n	uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n	uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n	uniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightDecay[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n	varying vec3 vWorldPosition;\n\n#endif\n\n#ifdef WRAP_AROUND\n\n	uniform vec3 wrapRGB;\n\n#endif\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n	varying vec3 vNormal;\n\n#endif\n";
THREE.ShaderChunk.skinbase_vertex="#ifdef USE_SKINNING\n\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif";
THREE.ShaderChunk.map_vertex="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n	vUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n#endif";
THREE.ShaderChunk.lightmap_fragment="#ifdef USE_LIGHTMAP\n\n	outgoingLight *= diffuseColor.xyz * texture2D( lightMap, vUv2 ).xyz;\n\n#endif";
THREE.ShaderChunk.shadowmap_pars_vertex="#ifdef USE_SHADOWMAP\n\n	varying vec4 vShadowCoord[ MAX_SHADOWS ];\n	uniform mat4 shadowMatrix[ MAX_SHADOWS ];\n\n#endif";
THREE.ShaderChunk.color_fragment="#ifdef USE_COLOR\n\n	diffuseColor.rgb *= vColor;\n\n#endif";
THREE.ShaderChunk.morphtarget_vertex="#ifdef USE_MORPHTARGETS\n\n	vec3 morphed = vec3( 0.0 );\n	morphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n	morphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n	morphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n	morphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\n	#ifndef USE_MORPHNORMALS\n\n	morphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n	morphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n	morphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n	morphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\n	#endif\n\n	morphed += position;\n\n#endif";
THREE.ShaderChunk.envmap_vertex="#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n	vec3 worldNormal = transformDirection( objectNormal, modelMatrix );\n\n	vec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n	#ifdef ENVMAP_MODE_REFLECTION\n\n		vReflect = reflect( cameraToVertex, worldNormal );\n\n	#else\n\n		vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n	#endif\n\n#endif\n";
THREE.ShaderChunk.shadowmap_fragment="#ifdef USE_SHADOWMAP\n\n	#ifdef SHADOWMAP_DEBUG\n\n		vec3 frustumColors[3];\n		frustumColors[0] = vec3( 1.0, 0.5, 0.0 );\n		frustumColors[1] = vec3( 0.0, 1.0, 0.8 );\n		frustumColors[2] = vec3( 0.0, 0.5, 1.0 );\n\n	#endif\n\n	#ifdef SHADOWMAP_CASCADE\n\n		int inFrustumCount = 0;\n\n	#endif\n\n	float fDepth;\n	vec3 shadowColor = vec3( 1.0 );\n\n	for( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n		vec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\n\n				// if ( something && something ) breaks ATI OpenGL shader compiler\n				// if ( all( something, something ) ) using this instead\n\n		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n		bool inFrustum = all( inFrustumVec );\n\n				// don't shadow pixels outside of light frustum\n				// use just first frustum (for cascades)\n				// don't shadow pixels behind far plane of light frustum\n\n		#ifdef SHADOWMAP_CASCADE\n\n			inFrustumCount += int( inFrustum );\n			bvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );\n\n		#else\n\n			bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n		#endif\n\n		bool frustumTest = all( frustumTestVec );\n\n		if ( frustumTest ) {\n\n			shadowCoord.z += shadowBias[ i ];\n\n			#if defined( SHADOWMAP_TYPE_PCF )\n\n						// Percentage-close filtering\n						// (9 pixel kernel)\n						// http://fabiensanglard.net/shadowmappingPCF/\n\n				float shadow = 0.0;\n\n		/*\n						// nested loops breaks shader compiler / validator on some ATI cards when using OpenGL\n						// must enroll loop manually\n\n				for ( float y = -1.25; y <= 1.25; y += 1.25 )\n					for ( float x = -1.25; x <= 1.25; x += 1.25 ) {\n\n						vec4 rgbaDepth = texture2D( shadowMap[ i ], vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy );\n\n								// doesn't seem to produce any noticeable visual difference compared to simple texture2D lookup\n								//vec4 rgbaDepth = texture2DProj( shadowMap[ i ], vec4( vShadowCoord[ i ].w * ( vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy ), 0.05, vShadowCoord[ i ].w ) );\n\n						float fDepth = unpackDepth( rgbaDepth );\n\n						if ( fDepth < shadowCoord.z )\n							shadow += 1.0;\n\n				}\n\n				shadow /= 9.0;\n\n		*/\n\n				const float shadowDelta = 1.0 / 9.0;\n\n				float xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n				float yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n				float dx0 = -1.25 * xPixelOffset;\n				float dy0 = -1.25 * yPixelOffset;\n				float dx1 = 1.25 * xPixelOffset;\n				float dy1 = 1.25 * yPixelOffset;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				shadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n			#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n						// Percentage-close filtering\n						// (9 pixel kernel)\n						// http://fabiensanglard.net/shadowmappingPCF/\n\n				float shadow = 0.0;\n\n				float xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n				float yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n				float dx0 = -1.0 * xPixelOffset;\n				float dy0 = -1.0 * yPixelOffset;\n				float dx1 = 1.0 * xPixelOffset;\n				float dy1 = 1.0 * yPixelOffset;\n\n				mat3 shadowKernel;\n				mat3 depthKernel;\n\n				depthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n				depthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n				depthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n				depthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n				depthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n				depthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n				depthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n				depthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n				depthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\n				vec3 shadowZ = vec3( shadowCoord.z );\n				shadowKernel[0] = vec3(lessThan(depthKernel[0], shadowZ ));\n				shadowKernel[0] *= vec3(0.25);\n\n				shadowKernel[1] = vec3(lessThan(depthKernel[1], shadowZ ));\n				shadowKernel[1] *= vec3(0.25);\n\n				shadowKernel[2] = vec3(lessThan(depthKernel[2], shadowZ ));\n				shadowKernel[2] *= vec3(0.25);\n\n				vec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );\n\n				shadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );\n				shadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );\n\n				vec4 shadowValues;\n				shadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );\n				shadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );\n				shadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );\n				shadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );\n\n				shadow = dot( shadowValues, vec4( 1.0 ) );\n\n				shadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n			#else\n\n				vec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\n				float fDepth = unpackDepth( rgbaDepth );\n\n				if ( fDepth < shadowCoord.z )\n\n		// spot with multiple shadows is darker\n\n					shadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );\n\n		// spot with multiple shadows has the same color as single shadow spot\n\n		// 					shadowColor = min( shadowColor, vec3( shadowDarkness[ i ] ) );\n\n			#endif\n\n		}\n\n\n		#ifdef SHADOWMAP_DEBUG\n\n			#ifdef SHADOWMAP_CASCADE\n\n				if ( inFrustum && inFrustumCount == 1 ) outgoingLight *= frustumColors[ i ];\n\n			#else\n\n				if ( inFrustum ) outgoingLight *= frustumColors[ i ];\n\n			#endif\n\n		#endif\n\n	}\n\n	// NOTE: I am unsure if this is correct in linear space.  -bhouston, Dec 29, 2014\n	shadowColor = inputToLinear( shadowColor );\n\n	outgoingLight = outgoingLight * shadowColor;\n\n#endif\n";
THREE.ShaderChunk.worldpos_vertex="#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\n	#ifdef USE_SKINNING\n\n		vec4 worldPosition = modelMatrix * skinned;\n\n	#elif defined( USE_MORPHTARGETS )\n\n		vec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );\n\n	#else\n\n		vec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\n	#endif\n\n#endif\n";
THREE.ShaderChunk.shadowmap_pars_fragment="#ifdef USE_SHADOWMAP\n\n	uniform sampler2D shadowMap[ MAX_SHADOWS ];\n	uniform vec2 shadowMapSize[ MAX_SHADOWS ];\n\n	uniform float shadowDarkness[ MAX_SHADOWS ];\n	uniform float shadowBias[ MAX_SHADOWS ];\n\n	varying vec4 vShadowCoord[ MAX_SHADOWS ];\n\n	float unpackDepth( const in vec4 rgba_depth ) {\n\n		const vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n		float depth = dot( rgba_depth, bit_shift );\n		return depth;\n\n	}\n\n#endif";
THREE.ShaderChunk.skinning_pars_vertex="#ifdef USE_SKINNING\n\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n\n	#ifdef BONE_TEXTURE\n\n		uniform sampler2D boneTexture;\n		uniform int boneTextureWidth;\n		uniform int boneTextureHeight;\n\n		mat4 getBoneMatrix( const in float i ) {\n\n			float j = i * 4.0;\n			float x = mod( j, float( boneTextureWidth ) );\n			float y = floor( j / float( boneTextureWidth ) );\n\n			float dx = 1.0 / float( boneTextureWidth );\n			float dy = 1.0 / float( boneTextureHeight );\n\n			y = dy * ( y + 0.5 );\n\n			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n			mat4 bone = mat4( v1, v2, v3, v4 );\n\n			return bone;\n\n		}\n\n	#else\n\n		uniform mat4 boneGlobalMatrices[ MAX_BONES ];\n\n		mat4 getBoneMatrix( const in float i ) {\n\n			mat4 bone = boneGlobalMatrices[ int(i) ];\n			return bone;\n\n		}\n\n	#endif\n\n#endif\n";
THREE.ShaderChunk.logdepthbuf_pars_fragment="#ifdef USE_LOGDEPTHBUF\n\n	uniform float logDepthBufFC;\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		#extension GL_EXT_frag_depth : enable\n		varying float vFragDepth;\n\n	#endif\n\n#endif";
THREE.ShaderChunk.alphamap_fragment="#ifdef USE_ALPHAMAP\n\n	diffuseColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n";
THREE.ShaderChunk.alphamap_pars_fragment="#ifdef USE_ALPHAMAP\n\n	uniform sampler2D alphaMap;\n\n#endif\n";
THREE.UniformsUtils={merge:function(f){var g={};for(var j=0;j<f.length;j++){var i=this.clone(f[j]);
for(var h in i){g[h]=i[h]}}return g},clone:function(g){var j={};for(var i in g){j[i]={};
for(var h in g[i]){var f=g[i][h];if(f instanceof THREE.Color||f instanceof THREE.Vector2||f instanceof THREE.Vector3||f instanceof THREE.Vector4||f instanceof THREE.Matrix4||f instanceof THREE.Texture){j[i][h]=f.clone()
}else{if(f instanceof Array){j[i][h]=f.slice()}else{j[i][h]=f}}}}return j}};THREE.UniformsLib={common:{diffuse:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},map:{type:"t",value:null},offsetRepeat:{type:"v4",value:new THREE.Vector4(0,0,1,1)},lightMap:{type:"t",value:null},specularMap:{type:"t",value:null},alphaMap:{type:"t",value:null},envMap:{type:"t",value:null},flipEnvMap:{type:"f",value:-1},reflectivity:{type:"f",value:1},refractionRatio:{type:"f",value:0.98},morphTargetInfluences:{type:"f",value:0}},bump:{bumpMap:{type:"t",value:null},bumpScale:{type:"f",value:1}},normalmap:{normalMap:{type:"t",value:null},normalScale:{type:"v2",value:new THREE.Vector2(1,1)}},fog:{fogDensity:{type:"f",value:0.00025},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2000},fogColor:{type:"c",value:new THREE.Color(16777215)}},lights:{ambientLightColor:{type:"fv",value:[]},directionalLightDirection:{type:"fv",value:[]},directionalLightColor:{type:"fv",value:[]},hemisphereLightDirection:{type:"fv",value:[]},hemisphereLightSkyColor:{type:"fv",value:[]},hemisphereLightGroundColor:{type:"fv",value:[]},pointLightColor:{type:"fv",value:[]},pointLightPosition:{type:"fv",value:[]},pointLightDistance:{type:"fv1",value:[]},pointLightDecay:{type:"fv1",value:[]},spotLightColor:{type:"fv",value:[]},spotLightPosition:{type:"fv",value:[]},spotLightDirection:{type:"fv",value:[]},spotLightDistance:{type:"fv1",value:[]},spotLightAngleCos:{type:"fv1",value:[]},spotLightExponent:{type:"fv1",value:[]},spotLightDecay:{type:"fv1",value:[]}},particle:{psColor:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},size:{type:"f",value:1},scale:{type:"f",value:1},map:{type:"t",value:null},offsetRepeat:{type:"v4",value:new THREE.Vector4(0,0,1,1)},fogDensity:{type:"f",value:0.00025},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2000},fogColor:{type:"c",value:new THREE.Color(16777215)}},shadowmap:{shadowMap:{type:"tv",value:[]},shadowMapSize:{type:"v2v",value:[]},shadowBias:{type:"fv1",value:[]},shadowDarkness:{type:"fv1",value:[]},shadowMatrix:{type:"m4v",value:[]}}};
THREE.ShaderLib={basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,THREE.UniformsLib.shadowmap]),vertexShader:[THREE.ShaderChunk.common,THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.skinbase_vertex,"	#ifdef USE_ENVMAP",THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,"	#endif",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;","uniform float opacity;",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {","	vec3 outgoingLight = vec3( 0.0 );","	vec4 diffuseColor = vec4( diffuse, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,"	outgoingLight = diffuseColor.rgb;",THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"	gl_FragColor = vec4( outgoingLight, diffuseColor.a );","}"].join("\n")},lambert:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{emissive:{type:"c",value:new THREE.Color(0)},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),vertexShader:["#define LAMBERT","varying vec3 vLightFront;","#ifdef DOUBLE_SIDED","	varying vec3 vLightBack;","#endif",THREE.ShaderChunk.common,THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_lambert_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.lights_lambert_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;","uniform vec3 emissive;","uniform float opacity;","varying vec3 vLightFront;","#ifdef DOUBLE_SIDED","	varying vec3 vLightBack;","#endif",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {","	vec3 outgoingLight = vec3( 0.0 );","	vec4 diffuseColor = vec4( diffuse, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,"	#ifdef DOUBLE_SIDED","		if ( gl_FrontFacing )","			outgoingLight += diffuseColor.rgb * vLightFront + emissive;","		else","			outgoingLight += diffuseColor.rgb * vLightBack + emissive;","	#else","		outgoingLight += diffuseColor.rgb * vLightFront + emissive;","	#endif",THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"	gl_FragColor = vec4( outgoingLight, diffuseColor.a );","}"].join("\n")},phong:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.bump,THREE.UniformsLib.normalmap,THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{emissive:{type:"c",value:new THREE.Color(0)},specular:{type:"c",value:new THREE.Color(1118481)},shininess:{type:"f",value:30},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),vertexShader:["#define PHONG","varying vec3 vViewPosition;","#ifndef FLAT_SHADED","	varying vec3 vNormal;","#endif",THREE.ShaderChunk.common,THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_phong_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,"#ifndef FLAT_SHADED","	vNormal = normalize( transformedNormal );","#endif",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"	vViewPosition = -mvPosition.xyz;",THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.lights_phong_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["#define PHONG","uniform vec3 diffuse;","uniform vec3 emissive;","uniform vec3 specular;","uniform float shininess;","uniform float opacity;",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.lights_phong_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.bumpmap_pars_fragment,THREE.ShaderChunk.normalmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {","	vec3 outgoingLight = vec3( 0.0 );","	vec4 diffuseColor = vec4( diffuse, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,THREE.ShaderChunk.lights_phong_fragment,THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"	gl_FragColor = vec4( outgoingLight, diffuseColor.a );","}"].join("\n")},particle_basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.particle,THREE.UniformsLib.shadowmap]),vertexShader:["uniform float size;","uniform float scale;",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );","	#ifdef USE_SIZEATTENUATION","		gl_PointSize = size * ( scale / length( mvPosition.xyz ) );","	#else","		gl_PointSize = size;","	#endif","	gl_Position = projectionMatrix * mvPosition;",THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 psColor;","uniform float opacity;",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_particle_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {","	vec3 outgoingLight = vec3( 0.0 );","	vec4 diffuseColor = vec4( psColor, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_particle_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.alphatest_fragment,"	outgoingLight = diffuseColor.rgb;",THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.fog_fragment,"	gl_FragColor = vec4( outgoingLight, diffuseColor.a );","}"].join("\n")},dashed:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,{scale:{type:"f",value:1},dashSize:{type:"f",value:1},totalSize:{type:"f",value:2}}]),vertexShader:["uniform float scale;","attribute float lineDistance;","varying float vLineDistance;",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"	vLineDistance = scale * lineDistance;","	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );","	gl_Position = projectionMatrix * mvPosition;",THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;","uniform float opacity;","uniform float dashSize;","uniform float totalSize;","varying float vLineDistance;",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {","	if ( mod( vLineDistance, totalSize ) > dashSize ) {","		discard;","	}","	vec3 outgoingLight = vec3( 0.0 );","	vec4 diffuseColor = vec4( diffuse, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.color_fragment,"	outgoingLight = diffuseColor.rgb;",THREE.ShaderChunk.fog_fragment,"	gl_FragColor = vec4( outgoingLight, diffuseColor.a );","}"].join("\n")},depth:{uniforms:{mNear:{type:"f",value:1},mFar:{type:"f",value:2000},opacity:{type:"f",value:1}},vertexShader:[THREE.ShaderChunk.common,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform float mNear;","uniform float mFar;","uniform float opacity;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {",THREE.ShaderChunk.logdepthbuf_fragment,"	#ifdef USE_LOGDEPTHBUF_EXT","		float depth = gl_FragDepthEXT / gl_FragCoord.w;","	#else","		float depth = gl_FragCoord.z / gl_FragCoord.w;","	#endif","	float color = 1.0 - smoothstep( mNear, mFar, depth );","	gl_FragColor = vec4( vec3( color ), opacity );","}"].join("\n")},normal:{uniforms:{opacity:{type:"f",value:1}},vertexShader:["varying vec3 vNormal;",THREE.ShaderChunk.common,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {","	vNormal = normalize( normalMatrix * normal );",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform float opacity;","varying vec3 vNormal;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {","	gl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,"}"].join("\n")},cube:{uniforms:{tCube:{type:"t",value:null},tFlip:{type:"f",value:-1}},vertexShader:["varying vec3 vWorldPosition;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {","	vWorldPosition = transformDirection( position, modelMatrix );","	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform samplerCube tCube;","uniform float tFlip;","varying vec3 vWorldPosition;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {","	gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );",THREE.ShaderChunk.logdepthbuf_fragment,"}"].join("\n")},equirect:{uniforms:{tEquirect:{type:"t",value:null},tFlip:{type:"f",value:-1}},vertexShader:["varying vec3 vWorldPosition;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {","	vWorldPosition = transformDirection( position, modelMatrix );","	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform sampler2D tEquirect;","uniform float tFlip;","varying vec3 vWorldPosition;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {","vec3 direction = normalize( vWorldPosition );","vec2 sampleUV;","sampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );","sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;","gl_FragColor = texture2D( tEquirect, sampleUV );",THREE.ShaderChunk.logdepthbuf_fragment,"}"].join("\n")},depthRGBA:{uniforms:{},vertexShader:[THREE.ShaderChunk.common,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:[THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,"vec4 pack_depth( const in float depth ) {","	const vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );","	const vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );","	vec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );","	res -= res.xxyz * bit_mask;","	return res;","}","void main() {",THREE.ShaderChunk.logdepthbuf_fragment,"	#ifdef USE_LOGDEPTHBUF_EXT","		gl_FragData[ 0 ] = pack_depth( gl_FragDepthEXT );","	#else","		gl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );","	#endif","}"].join("\n")}};
THREE.WebGLRenderer=function(cm){cm=cm||{};var bU=cm.canvas!==undefined?cm.canvas:document.createElement("canvas"),bV=cm.context!==undefined?cm.context:null,cN=1,bG=cm.precision!==undefined?cm.precision:"highp",c3=cm.alpha!==undefined?cm.alpha:false,dX=cm.depth!==undefined?cm.depth:true,de=cm.stencil!==undefined?cm.stencil:true,dF=cm.antialias!==undefined?cm.antialias:false,b0=cm.premultipliedAlpha!==undefined?cm.premultipliedAlpha:true,dA=cm.preserveDrawingBuffer!==undefined?cm.preserveDrawingBuffer:false,c8=cm.logarithmicDepthBuffer!==undefined?cm.logarithmicDepthBuffer:false,dh=new THREE.Color(0),dU=0;
var bO=[];var cX={};var dv=[];var bP=[];var dJ=[];var cL=[];var cg=[];this.domElement=bU;
this.context=null;this.autoClear=true;this.autoClearColor=true;this.autoClearDepth=true;
this.autoClearStencil=true;this.sortObjects=true;this.gammaFactor=2;this.gammaInput=false;
this.gammaOutput=false;this.shadowMapEnabled=false;this.shadowMapType=THREE.PCFShadowMap;
this.shadowMapCullFace=THREE.CullFaceFront;this.shadowMapDebug=false;this.shadowMapCascade=false;
this.maxMorphTargets=8;this.maxMorphNormals=4;this.autoScaleCubemaps=true;this.info={memory:{programs:0,geometries:0,textures:0},render:{calls:0,vertices:0,faces:0,points:0}};
var cy=this,b8=[],cH=null,ce=null,dN=-1,ci="",cu=null,cd=0,b2=0,b5=0,cq=bU.width,cs=bU.height,dc=0,dC=0,dr=new THREE.Frustum(),dI=new THREE.Matrix4(),cV=new THREE.Vector3(),bR=new THREE.Vector3(),dg=true,cT={ambient:[0,0,0],directional:{length:0,colors:[],positions:[]},point:{length:0,colors:[],positions:[],distances:[],decays:[]},spot:{length:0,colors:[],positions:[],distances:[],directions:[],anglesCos:[],exponents:[],decays:[]},hemi:{length:0,skyColors:[],groundColors:[],positions:[]}};
var dT;try{var dQ={alpha:c3,depth:dX,stencil:de,antialias:dF,premultipliedAlpha:b0,preserveDrawingBuffer:dA};
dT=bV||bU.getContext("webgl",dQ)||bU.getContext("experimental-webgl",dQ);if(dT===null){if(bU.getContext("webgl")!==null){throw"Error creating WebGL context with your selected attributes."
}else{throw"Error creating WebGL context."}}bU.addEventListener("webglcontextlost",function(a){a.preventDefault();
dE();cC();cX={}},false)}catch(dR){THREE.error("THREE.WebGLRenderer: "+dR)}var bY=new THREE.WebGLState(dT,dM);
if(dT.getShaderPrecisionFormat===undefined){dT.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}
}}var b4=new THREE.WebGLExtensions(dT);b4.get("OES_texture_float");b4.get("OES_texture_float_linear");
b4.get("OES_texture_half_float");b4.get("OES_texture_half_float_linear");b4.get("OES_standard_derivatives");
if(c8){b4.get("EXT_frag_depth")}var cE=function(a,b,d,c){if(b0===true){a*=c;b*=c;
d*=c}dT.clearColor(a,b,d,c)};var cC=function(){dT.clearColor(0,0,0,1);dT.clearDepth(1);
dT.clearStencil(0);dT.enable(dT.DEPTH_TEST);dT.depthFunc(dT.LEQUAL);dT.frontFace(dT.CCW);
dT.cullFace(dT.BACK);dT.enable(dT.CULL_FACE);dT.enable(dT.BLEND);dT.blendEquation(dT.FUNC_ADD);
dT.blendFunc(dT.SRC_ALPHA,dT.ONE_MINUS_SRC_ALPHA);dT.viewport(b2,b5,cq,cs);cE(dh.r,dh.g,dh.b,dU)
};var dE=function(){cH=null;cu=null;ci="";dN=-1;dg=true;bY.reset()};cC();this.context=dT;
this.state=bY;var cA=dT.getParameter(dT.MAX_TEXTURE_IMAGE_UNITS);var c0=dT.getParameter(dT.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
var c7=dT.getParameter(dT.MAX_TEXTURE_SIZE);var cP=dT.getParameter(dT.MAX_CUBE_MAP_TEXTURE_SIZE);
var dH=c0>0;var dP=dH&&b4.get("OES_texture_float");var cf=dT.getShaderPrecisionFormat(dT.VERTEX_SHADER,dT.HIGH_FLOAT);
var ch=dT.getShaderPrecisionFormat(dT.VERTEX_SHADER,dT.MEDIUM_FLOAT);var b6=dT.getShaderPrecisionFormat(dT.FRAGMENT_SHADER,dT.HIGH_FLOAT);
var dq=dT.getShaderPrecisionFormat(dT.FRAGMENT_SHADER,dT.MEDIUM_FLOAT);var dl=(function(){var a;
return function(){if(a!==undefined){return a}a=[];if(b4.get("WEBGL_compressed_texture_pvrtc")||b4.get("WEBGL_compressed_texture_s3tc")){var c=dT.getParameter(dT.COMPRESSED_TEXTURE_FORMATS);
for(var b=0;b<c.length;b++){a.push(c[b])}}return a}})();var dD=cf.precision>0&&b6.precision>0;
var bQ=ch.precision>0&&dq.precision>0;if(bG==="highp"&&!dD){if(bQ){bG="mediump";
THREE.warn("THREE.WebGLRenderer: highp not supported, using mediump.")}else{bG="lowp";
THREE.warn("THREE.WebGLRenderer: highp and mediump not supported, using lowp.")
}}if(bG==="mediump"&&!bQ){bG="lowp";THREE.warn("THREE.WebGLRenderer: mediump not supported, using lowp.")
}var co=new THREE.ShadowMapPlugin(this,bO,cX,dv);var dt=new THREE.SpritePlugin(this,cL);
var di=new THREE.LensFlarePlugin(this,cg);this.getContext=function(){return dT};
this.forceContextLoss=function(){b4.get("WEBGL_lose_context").loseContext()};this.supportsVertexTextures=function(){return dH
};this.supportsFloatTextures=function(){return b4.get("OES_texture_float")};this.supportsHalfFloatTextures=function(){return b4.get("OES_texture_half_float")
};this.supportsStandardDerivatives=function(){return b4.get("OES_standard_derivatives")
};this.supportsCompressedTextureS3TC=function(){return b4.get("WEBGL_compressed_texture_s3tc")
};this.supportsCompressedTexturePVRTC=function(){return b4.get("WEBGL_compressed_texture_pvrtc")
};this.supportsBlendMinMax=function(){return b4.get("EXT_blend_minmax")};this.getMaxAnisotropy=(function(){var a;
return function(){if(a!==undefined){return a}var b=b4.get("EXT_texture_filter_anisotropic");
a=b!==null?dT.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0;return a}})();this.getPrecision=function(){return bG
};this.getPixelRatio=function(){return cN};this.setPixelRatio=function(a){cN=a};
this.setSize=function(b,c,a){bU.width=b*cN;bU.height=c*cN;if(a!==false){bU.style.width=b+"px";
bU.style.height=c+"px"}this.setViewport(0,0,b,c)};this.setViewport=function(c,a,b,d){b2=c*cN;
b5=a*cN;cq=b*cN;cs=d*cN;dT.viewport(b2,b5,cq,cs)};this.setScissor=function(c,a,b,d){dT.scissor(c*cN,a*cN,b*cN,d*cN)
};this.enableScissorTest=function(a){a?dT.enable(dT.SCISSOR_TEST):dT.disable(dT.SCISSOR_TEST)
};this.getClearColor=function(){return dh};this.setClearColor=function(b,a){dh.set(b);
dU=a!==undefined?a:1;cE(dh.r,dh.g,dh.b,dU)};this.getClearAlpha=function(){return dU
};this.setClearAlpha=function(a){dU=a;cE(dh.r,dh.g,dh.b,dU)};this.clear=function(d,a,c){var b=0;
if(d===undefined||d){b|=dT.COLOR_BUFFER_BIT}if(a===undefined||a){b|=dT.DEPTH_BUFFER_BIT
}if(c===undefined||c){b|=dT.STENCIL_BUFFER_BIT}dT.clear(b)};this.clearColor=function(){dT.clear(dT.COLOR_BUFFER_BIT)
};this.clearDepth=function(){dT.clear(dT.DEPTH_BUFFER_BIT)};this.clearStencil=function(){dT.clear(dT.STENCIL_BUFFER_BIT)
};this.clearTarget=function(b,d,a,c){this.setRenderTarget(b);this.clear(d,a,c)};
this.resetGLState=dE;function db(a){a.__webglVertexBuffer=dT.createBuffer();a.__webglColorBuffer=dT.createBuffer();
cy.info.memory.geometries++}function dk(a){a.__webglVertexBuffer=dT.createBuffer();
a.__webglColorBuffer=dT.createBuffer();a.__webglLineDistanceBuffer=dT.createBuffer();
cy.info.memory.geometries++}function dm(c){c.__webglVertexBuffer=dT.createBuffer();
c.__webglNormalBuffer=dT.createBuffer();c.__webglTangentBuffer=dT.createBuffer();
c.__webglColorBuffer=dT.createBuffer();c.__webglUVBuffer=dT.createBuffer();c.__webglUV2Buffer=dT.createBuffer();
c.__webglSkinIndicesBuffer=dT.createBuffer();c.__webglSkinWeightsBuffer=dT.createBuffer();
c.__webglFaceBuffer=dT.createBuffer();c.__webglLineBuffer=dT.createBuffer();var e=c.numMorphTargets;
if(e){c.__webglMorphTargetsBuffers=[];for(var d=0,a=e;d<a;d++){c.__webglMorphTargetsBuffers.push(dT.createBuffer())
}}var b=c.numMorphNormals;if(b){c.__webglMorphNormalsBuffers=[];for(var d=0,a=b;
d<a;d++){c.__webglMorphNormalsBuffers.push(dT.createBuffer())}}cy.info.memory.geometries++
}var bW=function(a){var b=a.target;b.traverse(function(c){c.removeEventListener("remove",bW);
dw(c)})};var dp=function(b){var a=b.target;a.removeEventListener("dispose",dp);
dV(a)};var da=function(a){var b=a.target;b.removeEventListener("dispose",da);dK(b);
cy.info.memory.textures--};var cb=function(b){var a=b.target;a.removeEventListener("dispose",cb);
dj(a);cy.info.memory.textures--};var b7=function(a){var b=a.target;b.removeEventListener("dispose",b7);
bN(b)};var du=function(e){var c=["__webglVertexBuffer","__webglNormalBuffer","__webglTangentBuffer","__webglColorBuffer","__webglUVBuffer","__webglUV2Buffer","__webglSkinIndicesBuffer","__webglSkinWeightsBuffer","__webglFaceBuffer","__webglLineBuffer","__webglLineDistanceBuffer"];
for(var a=0,d=c.length;a<d;a++){var b=c[a];if(e[b]!==undefined){dT.deleteBuffer(e[b]);
delete e[b]}}if(e.__webglCustomAttributesList!==undefined){for(var b in e.__webglCustomAttributesList){dT.deleteBuffer(e.__webglCustomAttributesList[b].buffer)
}delete e.__webglCustomAttributesList}cy.info.memory.geometries--};var dV=function(a){delete a.__webglInit;
if(a instanceof THREE.BufferGeometry){for(var i in a.attributes){var h=a.attributes[i];
if(h.buffer!==undefined){dT.deleteBuffer(h.buffer);delete h.buffer}}cy.info.memory.geometries--
}else{var b=cM[a.id];if(b!==undefined){for(var c=0,f=b.length;c<f;c++){var e=b[c];
if(e.numMorphTargets!==undefined){for(var g=0,d=e.numMorphTargets;g<d;g++){dT.deleteBuffer(e.__webglMorphTargetsBuffers[g])
}delete e.__webglMorphTargetsBuffers}if(e.numMorphNormals!==undefined){for(var g=0,d=e.numMorphNormals;
g<d;g++){dT.deleteBuffer(e.__webglMorphNormalsBuffers[g])}delete e.__webglMorphNormalsBuffers
}du(e)}delete cM[a.id]}else{du(a)}}ci=""};var dK=function(a){if(a.image&&a.image.__webglTextureCube){dT.deleteTexture(a.image.__webglTextureCube);
delete a.image.__webglTextureCube}else{if(a.__webglInit===undefined){return}dT.deleteTexture(a.__webglTexture);
delete a.__webglTexture;delete a.__webglInit}};var dj=function(a){if(!a||a.__webglTexture===undefined){return
}dT.deleteTexture(a.__webglTexture);delete a.__webglTexture;if(a instanceof THREE.WebGLRenderTargetCube){for(var b=0;
b<6;b++){dT.deleteFramebuffer(a.__webglFramebuffer[b]);dT.deleteRenderbuffer(a.__webglRenderbuffer[b])
}}else{dT.deleteFramebuffer(a.__webglFramebuffer);dT.deleteRenderbuffer(a.__webglRenderbuffer)
}delete a.__webglFramebuffer;delete a.__webglRenderbuffer};var bN=function(e){var b=e.program.program;
if(b===undefined){return}e.program=undefined;var a,c,f;var g=false;for(a=0,c=b8.length;
a<c;a++){f=b8[a];if(f.program===b){f.usedTimes--;if(f.usedTimes===0){g=true}break
}}if(g===true){var d=[];for(a=0,c=b8.length;a<c;a++){f=b8[a];if(f.program!==b){d.push(f)
}}b8=d;dT.deleteProgram(b);cy.info.memory.programs--}};function cp(c){var e=c.geometry;
var g=c.material;var a=e.vertices.length;if(g.attributes){if(e.__webglCustomAttributesList===undefined){e.__webglCustomAttributesList=[]
}for(var d in g.attributes){var f=g.attributes[d];if(!f.__webglInitialized||f.createUniqueBuffers){f.__webglInitialized=true;
var b=1;if(f.type==="v2"){b=2}else{if(f.type==="v3"){b=3}else{if(f.type==="v4"){b=4
}else{if(f.type==="c"){b=3}}}}f.size=b;f.array=new Float32Array(a*b);f.buffer=dT.createBuffer();
f.buffer.belongsToAttribute=d;f.needsUpdate=true}e.__webglCustomAttributesList.push(f)
}}}function ct(a,c){var b=a.vertices.length;a.__vertexArray=new Float32Array(b*3);
a.__colorArray=new Float32Array(b*3);a.__webglParticleCount=b;cp(c)}function cF(a,c){var b=a.vertices.length;
a.__vertexArray=new Float32Array(b*3);a.__colorArray=new Float32Array(b*3);a.__lineDistanceArray=new Float32Array(b*1);
a.__webglLineCount=b;cp(c)}function cI(h,c){var p=c.geometry,b=h.faces3,f=b.length*3,m=b.length*1,k=b.length*3,n=dB(c,h);
h.__vertexArray=new Float32Array(f*3);h.__normalArray=new Float32Array(f*3);h.__colorArray=new Float32Array(f*3);
h.__uvArray=new Float32Array(f*2);if(p.faceVertexUvs.length>1){h.__uv2Array=new Float32Array(f*2)
}if(p.hasTangents){h.__tangentArray=new Float32Array(f*4)}if(c.geometry.skinWeights.length&&c.geometry.skinIndices.length){h.__skinIndexArray=new Float32Array(f*4);
h.__skinWeightArray=new Float32Array(f*4)}var j=b4.get("OES_element_index_uint")!==null&&m>21845?Uint32Array:Uint16Array;
h.__typeArray=j;h.__faceArray=new j(m*3);h.__lineArray=new j(k*2);var r=h.numMorphTargets;
if(r){h.__morphTargetsArrays=[];for(var g=0,d=r;g<d;g++){h.__morphTargetsArrays.push(new Float32Array(f*3))
}}var q=h.numMorphNormals;if(q){h.__morphNormalsArrays=[];for(var g=0,d=q;g<d;g++){h.__morphNormalsArrays.push(new Float32Array(f*3))
}}h.__webglFaceCount=m*3;h.__webglLineCount=k*2;if(n.attributes){if(h.__webglCustomAttributesList===undefined){h.__webglCustomAttributesList=[]
}for(var a in n.attributes){var e=n.attributes[a];var l={};for(var o in e){l[o]=e[o]
}if(!l.__webglInitialized||l.createUniqueBuffers){l.__webglInitialized=true;var i=1;
if(l.type==="v2"){i=2}else{if(l.type==="v3"){i=3}else{if(l.type==="v4"){i=4}else{if(l.type==="c"){i=3
}}}}l.size=i;l.array=new Float32Array(f*i);l.buffer=dT.createBuffer();l.buffer.belongsToAttribute=a;
e.needsUpdate=true;l.__original=e}h.__webglCustomAttributesList.push(l)}}h.__inittedArrays=true
}function dB(a,b){return a.material instanceof THREE.MeshFaceMaterial?a.material.materials[b.materialIndex]:a.material
}function ck(a){return a instanceof THREE.MeshPhongMaterial===false&&a.shading===THREE.FlatShading
}function cn(v,m,a){var o,b,d,u,g,t=v.vertices,c=t.length,r=v.colors,s=r.length,n=v.__vertexArray,A=v.__colorArray,i=v.verticesNeedUpdate,l=v.colorsNeedUpdate,j=v.__webglCustomAttributesList,f,q,k,p,h,e;
if(i){for(o=0;o<c;o++){d=t[o];u=o*3;n[u]=d.x;n[u+1]=d.y;n[u+2]=d.z}dT.bindBuffer(dT.ARRAY_BUFFER,v.__webglVertexBuffer);
dT.bufferData(dT.ARRAY_BUFFER,n,m)}if(l){for(b=0;b<s;b++){g=r[b];u=b*3;A[u]=g.r;
A[u+1]=g.g;A[u+2]=g.b}dT.bindBuffer(dT.ARRAY_BUFFER,v.__webglColorBuffer);dT.bufferData(dT.ARRAY_BUFFER,A,m)
}if(j){for(f=0,q=j.length;f<q;f++){e=j[f];if(e.needsUpdate&&(e.boundTo===undefined||e.boundTo==="vertices")){p=e.value.length;
u=0;if(e.size===1){for(k=0;k<p;k++){e.array[k]=e.value[k]}}else{if(e.size===2){for(k=0;
k<p;k++){h=e.value[k];e.array[u]=h.x;e.array[u+1]=h.y;u+=2}}else{if(e.size===3){if(e.type==="c"){for(k=0;
k<p;k++){h=e.value[k];e.array[u]=h.r;e.array[u+1]=h.g;e.array[u+2]=h.b;u+=3}}else{for(k=0;
k<p;k++){h=e.value[k];e.array[u]=h.x;e.array[u+1]=h.y;e.array[u+2]=h.z;u+=3}}}else{if(e.size===4){for(k=0;
k<p;k++){h=e.value[k];e.array[u]=h.x;e.array[u+1]=h.y;e.array[u+2]=h.z;e.array[u+3]=h.w;
u+=4}}}}}}dT.bindBuffer(dT.ARRAY_BUFFER,e.buffer);dT.bufferData(dT.ARRAY_BUFFER,e.array,m);
e.needsUpdate=false}}}function dn(B,n){var q,a,c,d,A,h,v=B.vertices,t=B.colors,o=B.lineDistances,b=v.length,u=t.length,g=o.length,p=B.__vertexArray,C=B.__colorArray,E=B.__lineDistanceArray,j=B.verticesNeedUpdate,m=B.colorsNeedUpdate,D=B.lineDistancesNeedUpdate,k=B.__webglCustomAttributesList,f,s,l,r,i,e;
if(j){for(q=0;q<b;q++){d=v[q];A=q*3;p[A]=d.x;p[A+1]=d.y;p[A+2]=d.z}dT.bindBuffer(dT.ARRAY_BUFFER,B.__webglVertexBuffer);
dT.bufferData(dT.ARRAY_BUFFER,p,n)}if(m){for(a=0;a<u;a++){h=t[a];A=a*3;C[A]=h.r;
C[A+1]=h.g;C[A+2]=h.b}dT.bindBuffer(dT.ARRAY_BUFFER,B.__webglColorBuffer);dT.bufferData(dT.ARRAY_BUFFER,C,n)
}if(D){for(c=0;c<g;c++){E[c]=o[c]}dT.bindBuffer(dT.ARRAY_BUFFER,B.__webglLineDistanceBuffer);
dT.bufferData(dT.ARRAY_BUFFER,E,n)}if(k){for(f=0,s=k.length;f<s;f++){e=k[f];if(e.needsUpdate&&(e.boundTo===undefined||e.boundTo==="vertices")){A=0;
r=e.value.length;if(e.size===1){for(l=0;l<r;l++){e.array[l]=e.value[l]}}else{if(e.size===2){for(l=0;
l<r;l++){i=e.value[l];e.array[A]=i.x;e.array[A+1]=i.y;A+=2}}else{if(e.size===3){if(e.type==="c"){for(l=0;
l<r;l++){i=e.value[l];e.array[A]=i.r;e.array[A+1]=i.g;e.array[A+2]=i.b;A+=3}}else{for(l=0;
l<r;l++){i=e.value[l];e.array[A]=i.x;e.array[A+1]=i.y;e.array[A+2]=i.z;A+=3}}}else{if(e.size===4){for(l=0;
l<r;l++){i=e.value[l];e.array[A]=i.x;e.array[A+1]=i.y;e.array[A+2]=i.z;e.array[A+3]=i.w;
A+=4}}}}}dT.bindBuffer(dT.ARRAY_BUFFER,e.buffer);dT.bufferData(dT.ARRAY_BUFFER,e.array,n);
e.needsUpdate=false}}}}function bH(ac,Y,b,av,ak){if(!ac.__inittedArrays){return
}var aN=ck(ak);var r,O,I,aG,an,aB,aj,A,aF,B,aq,g,h,i,ao,at,G,L,M,N,ae,af,d,R,S,V,ax,ay,aA,t,C,aP,e,ad,aO,F,v,c,q,f,ag=0,ar=0,aa=0,az=0,u=0,aJ=0,al=0,j=0,ap=0,s=0,aH=0,aw=0,E,aC=ac.__vertexArray,aI=ac.__uvArray,au=ac.__uv2Array,W=ac.__normalArray,T=ac.__tangentArray,m=ac.__colorArray,X=ac.__skinIndexArray,J=ac.__skinWeightArray,K=ac.__morphTargetsArrays,aM=ac.__morphNormalsArrays,aK=ac.__webglCustomAttributesList,aD,H=ac.__faceArray,o=ac.__lineArray,ab=Y.geometry,aQ=ab.verticesNeedUpdate,p=ab.elementsNeedUpdate,l=ab.uvsNeedUpdate,aE=ab.normalsNeedUpdate,am=ab.tangentsNeedUpdate,U=ab.colorsNeedUpdate,a=ab.morphTargetsNeedUpdate,k=ab.vertices,ah=ac.faces3,Q=ab.faces,n=ab.faceVertexUvs[0],aL=ab.faceVertexUvs[1],D=ab.skinIndices,P=ab.skinWeights,ai=ab.morphTargets,Z=ab.morphNormals;
if(aQ){for(r=0,O=ah.length;r<O;r++){aG=Q[ah[r]];g=k[aG.a];h=k[aG.b];i=k[aG.c];aC[ar]=g.x;
aC[ar+1]=g.y;aC[ar+2]=g.z;aC[ar+3]=h.x;aC[ar+4]=h.y;aC[ar+5]=h.z;aC[ar+6]=i.x;aC[ar+7]=i.y;
aC[ar+8]=i.z;ar+=9}dT.bindBuffer(dT.ARRAY_BUFFER,ac.__webglVertexBuffer);dT.bufferData(dT.ARRAY_BUFFER,aC,b)
}if(a){for(aO=0,F=ai.length;aO<F;aO++){aH=0;for(r=0,O=ah.length;r<O;r++){q=ah[r];
aG=Q[q];g=ai[aO].vertices[aG.a];h=ai[aO].vertices[aG.b];i=ai[aO].vertices[aG.c];
v=K[aO];v[aH]=g.x;v[aH+1]=g.y;v[aH+2]=g.z;v[aH+3]=h.x;v[aH+4]=h.y;v[aH+5]=h.z;v[aH+6]=i.x;
v[aH+7]=i.y;v[aH+8]=i.z;if(ak.morphNormals){if(aN){L=Z[aO].faceNormals[q];M=L;N=L
}else{f=Z[aO].vertexNormals[q];L=f.a;M=f.b;N=f.c}c=aM[aO];c[aH]=L.x;c[aH+1]=L.y;
c[aH+2]=L.z;c[aH+3]=M.x;c[aH+4]=M.y;c[aH+5]=M.z;c[aH+6]=N.x;c[aH+7]=N.y;c[aH+8]=N.z
}aH+=9}dT.bindBuffer(dT.ARRAY_BUFFER,ac.__webglMorphTargetsBuffers[aO]);dT.bufferData(dT.ARRAY_BUFFER,K[aO],b);
if(ak.morphNormals){dT.bindBuffer(dT.ARRAY_BUFFER,ac.__webglMorphNormalsBuffers[aO]);
dT.bufferData(dT.ARRAY_BUFFER,aM[aO],b)}}}if(P.length){for(r=0,O=ah.length;r<O;
r++){aG=Q[ah[r]];R=P[aG.a];S=P[aG.b];V=P[aG.c];J[s]=R.x;J[s+1]=R.y;J[s+2]=R.z;J[s+3]=R.w;
J[s+4]=S.x;J[s+5]=S.y;J[s+6]=S.z;J[s+7]=S.w;J[s+8]=V.x;J[s+9]=V.y;J[s+10]=V.z;J[s+11]=V.w;
ax=D[aG.a];ay=D[aG.b];aA=D[aG.c];X[s]=ax.x;X[s+1]=ax.y;X[s+2]=ax.z;X[s+3]=ax.w;
X[s+4]=ay.x;X[s+5]=ay.y;X[s+6]=ay.z;X[s+7]=ay.w;X[s+8]=aA.x;X[s+9]=aA.y;X[s+10]=aA.z;
X[s+11]=aA.w;s+=12}if(s>0){dT.bindBuffer(dT.ARRAY_BUFFER,ac.__webglSkinIndicesBuffer);
dT.bufferData(dT.ARRAY_BUFFER,X,b);dT.bindBuffer(dT.ARRAY_BUFFER,ac.__webglSkinWeightsBuffer);
dT.bufferData(dT.ARRAY_BUFFER,J,b)}}if(U){for(r=0,O=ah.length;r<O;r++){aG=Q[ah[r]];
aj=aG.vertexColors;A=aG.color;if(aj.length===3&&ak.vertexColors===THREE.VertexColors){ae=aj[0];
af=aj[1];d=aj[2]}else{ae=A;af=A;d=A}m[ap]=ae.r;m[ap+1]=ae.g;m[ap+2]=ae.b;m[ap+3]=af.r;
m[ap+4]=af.g;m[ap+5]=af.b;m[ap+6]=d.r;m[ap+7]=d.g;m[ap+8]=d.b;ap+=9}if(ap>0){dT.bindBuffer(dT.ARRAY_BUFFER,ac.__webglColorBuffer);
dT.bufferData(dT.ARRAY_BUFFER,m,b)}}if(am&&ab.hasTangents){for(r=0,O=ah.length;
r<O;r++){aG=Q[ah[r]];aF=aG.vertexTangents;ao=aF[0];at=aF[1];G=aF[2];T[al]=ao.x;
T[al+1]=ao.y;T[al+2]=ao.z;T[al+3]=ao.w;T[al+4]=at.x;T[al+5]=at.y;T[al+6]=at.z;T[al+7]=at.w;
T[al+8]=G.x;T[al+9]=G.y;T[al+10]=G.z;T[al+11]=G.w;al+=12}dT.bindBuffer(dT.ARRAY_BUFFER,ac.__webglTangentBuffer);
dT.bufferData(dT.ARRAY_BUFFER,T,b)}if(aE){for(r=0,O=ah.length;r<O;r++){aG=Q[ah[r]];
an=aG.vertexNormals;aB=aG.normal;if(an.length===3&&aN===false){for(t=0;t<3;t++){aP=an[t];
W[aJ]=aP.x;W[aJ+1]=aP.y;W[aJ+2]=aP.z;aJ+=3}}else{for(t=0;t<3;t++){W[aJ]=aB.x;W[aJ+1]=aB.y;
W[aJ+2]=aB.z;aJ+=3}}}dT.bindBuffer(dT.ARRAY_BUFFER,ac.__webglNormalBuffer);dT.bufferData(dT.ARRAY_BUFFER,W,b)
}if(l&&n){for(r=0,O=ah.length;r<O;r++){I=ah[r];B=n[I];if(B===undefined){continue
}for(t=0;t<3;t++){e=B[t];aI[aa]=e.x;aI[aa+1]=e.y;aa+=2}}if(aa>0){dT.bindBuffer(dT.ARRAY_BUFFER,ac.__webglUVBuffer);
dT.bufferData(dT.ARRAY_BUFFER,aI,b)}}if(l&&aL){for(r=0,O=ah.length;r<O;r++){I=ah[r];
aq=aL[I];if(aq===undefined){continue}for(t=0;t<3;t++){ad=aq[t];au[az]=ad.x;au[az+1]=ad.y;
az+=2}}if(az>0){dT.bindBuffer(dT.ARRAY_BUFFER,ac.__webglUV2Buffer);dT.bufferData(dT.ARRAY_BUFFER,au,b)
}}if(p){for(r=0,O=ah.length;r<O;r++){H[u]=ag;H[u+1]=ag+1;H[u+2]=ag+2;u+=3;o[j]=ag;
o[j+1]=ag+1;o[j+2]=ag;o[j+3]=ag+2;o[j+4]=ag+1;o[j+5]=ag+2;j+=6;ag+=3}dT.bindBuffer(dT.ELEMENT_ARRAY_BUFFER,ac.__webglFaceBuffer);
dT.bufferData(dT.ELEMENT_ARRAY_BUFFER,H,b);dT.bindBuffer(dT.ELEMENT_ARRAY_BUFFER,ac.__webglLineBuffer);
dT.bufferData(dT.ELEMENT_ARRAY_BUFFER,o,b)}if(aK){for(t=0,C=aK.length;t<C;t++){aD=aK[t];
if(!aD.__original.needsUpdate){continue}aw=0;if(aD.size===1){if(aD.boundTo===undefined||aD.boundTo==="vertices"){for(r=0,O=ah.length;
r<O;r++){aG=Q[ah[r]];aD.array[aw]=aD.value[aG.a];aD.array[aw+1]=aD.value[aG.b];
aD.array[aw+2]=aD.value[aG.c];aw+=3}}else{if(aD.boundTo==="faces"){for(r=0,O=ah.length;
r<O;r++){E=aD.value[ah[r]];aD.array[aw]=E;aD.array[aw+1]=E;aD.array[aw+2]=E;aw+=3
}}}}else{if(aD.size===2){if(aD.boundTo===undefined||aD.boundTo==="vertices"){for(r=0,O=ah.length;
r<O;r++){aG=Q[ah[r]];g=aD.value[aG.a];h=aD.value[aG.b];i=aD.value[aG.c];aD.array[aw]=g.x;
aD.array[aw+1]=g.y;aD.array[aw+2]=h.x;aD.array[aw+3]=h.y;aD.array[aw+4]=i.x;aD.array[aw+5]=i.y;
aw+=6}}else{if(aD.boundTo==="faces"){for(r=0,O=ah.length;r<O;r++){E=aD.value[ah[r]];
g=E;h=E;i=E;aD.array[aw]=g.x;aD.array[aw+1]=g.y;aD.array[aw+2]=h.x;aD.array[aw+3]=h.y;
aD.array[aw+4]=i.x;aD.array[aw+5]=i.y;aw+=6}}}}else{if(aD.size===3){var aR;if(aD.type==="c"){aR=["r","g","b"]
}else{aR=["x","y","z"]}if(aD.boundTo===undefined||aD.boundTo==="vertices"){for(r=0,O=ah.length;
r<O;r++){aG=Q[ah[r]];g=aD.value[aG.a];h=aD.value[aG.b];i=aD.value[aG.c];aD.array[aw]=g[aR[0]];
aD.array[aw+1]=g[aR[1]];aD.array[aw+2]=g[aR[2]];aD.array[aw+3]=h[aR[0]];aD.array[aw+4]=h[aR[1]];
aD.array[aw+5]=h[aR[2]];aD.array[aw+6]=i[aR[0]];aD.array[aw+7]=i[aR[1]];aD.array[aw+8]=i[aR[2]];
aw+=9}}else{if(aD.boundTo==="faces"){for(r=0,O=ah.length;r<O;r++){E=aD.value[ah[r]];
g=E;h=E;i=E;aD.array[aw]=g[aR[0]];aD.array[aw+1]=g[aR[1]];aD.array[aw+2]=g[aR[2]];
aD.array[aw+3]=h[aR[0]];aD.array[aw+4]=h[aR[1]];aD.array[aw+5]=h[aR[2]];aD.array[aw+6]=i[aR[0]];
aD.array[aw+7]=i[aR[1]];aD.array[aw+8]=i[aR[2]];aw+=9}}else{if(aD.boundTo==="faceVertices"){for(r=0,O=ah.length;
r<O;r++){E=aD.value[ah[r]];g=E[0];h=E[1];i=E[2];aD.array[aw]=g[aR[0]];aD.array[aw+1]=g[aR[1]];
aD.array[aw+2]=g[aR[2]];aD.array[aw+3]=h[aR[0]];aD.array[aw+4]=h[aR[1]];aD.array[aw+5]=h[aR[2]];
aD.array[aw+6]=i[aR[0]];aD.array[aw+7]=i[aR[1]];aD.array[aw+8]=i[aR[2]];aw+=9}}}}}else{if(aD.size===4){if(aD.boundTo===undefined||aD.boundTo==="vertices"){for(r=0,O=ah.length;
r<O;r++){aG=Q[ah[r]];g=aD.value[aG.a];h=aD.value[aG.b];i=aD.value[aG.c];aD.array[aw]=g.x;
aD.array[aw+1]=g.y;aD.array[aw+2]=g.z;aD.array[aw+3]=g.w;aD.array[aw+4]=h.x;aD.array[aw+5]=h.y;
aD.array[aw+6]=h.z;aD.array[aw+7]=h.w;aD.array[aw+8]=i.x;aD.array[aw+9]=i.y;aD.array[aw+10]=i.z;
aD.array[aw+11]=i.w;aw+=12}}else{if(aD.boundTo==="faces"){for(r=0,O=ah.length;r<O;
r++){E=aD.value[ah[r]];g=E;h=E;i=E;aD.array[aw]=g.x;aD.array[aw+1]=g.y;aD.array[aw+2]=g.z;
aD.array[aw+3]=g.w;aD.array[aw+4]=h.x;aD.array[aw+5]=h.y;aD.array[aw+6]=h.z;aD.array[aw+7]=h.w;
aD.array[aw+8]=i.x;aD.array[aw+9]=i.y;aD.array[aw+10]=i.z;aD.array[aw+11]=i.w;aw+=12
}}else{if(aD.boundTo==="faceVertices"){for(r=0,O=ah.length;r<O;r++){E=aD.value[ah[r]];
g=E[0];h=E[1];i=E[2];aD.array[aw]=g.x;aD.array[aw+1]=g.y;aD.array[aw+2]=g.z;aD.array[aw+3]=g.w;
aD.array[aw+4]=h.x;aD.array[aw+5]=h.y;aD.array[aw+6]=h.z;aD.array[aw+7]=h.w;aD.array[aw+8]=i.x;
aD.array[aw+9]=i.y;aD.array[aw+10]=i.z;aD.array[aw+11]=i.w;aw+=12}}}}}}}}dT.bindBuffer(dT.ARRAY_BUFFER,aD.buffer);
dT.bufferData(dT.ARRAY_BUFFER,aD.array,b)}}if(av){delete ac.__inittedArrays;delete ac.__colorArray;
delete ac.__normalArray;delete ac.__tangentArray;delete ac.__uvArray;delete ac.__uv2Array;
delete ac.__faceArray;delete ac.__vertexArray;delete ac.__lineArray;delete ac.__skinIndexArray;
delete ac.__skinWeightArray}}this.renderBufferImmediate=function(c,o,m){bY.initAttributes();
if(c.hasPositions&&!c.__webglVertexBuffer){c.__webglVertexBuffer=dT.createBuffer()
}if(c.hasNormals&&!c.__webglNormalBuffer){c.__webglNormalBuffer=dT.createBuffer()
}if(c.hasUvs&&!c.__webglUvBuffer){c.__webglUvBuffer=dT.createBuffer()}if(c.hasColors&&!c.__webglColorBuffer){c.__webglColorBuffer=dT.createBuffer()
}if(c.hasPositions){dT.bindBuffer(dT.ARRAY_BUFFER,c.__webglVertexBuffer);dT.bufferData(dT.ARRAY_BUFFER,c.positionArray,dT.DYNAMIC_DRAW);
bY.enableAttribute(o.attributes.position);dT.vertexAttribPointer(o.attributes.position,3,dT.FLOAT,false,0,0)
}if(c.hasNormals){dT.bindBuffer(dT.ARRAY_BUFFER,c.__webglNormalBuffer);if(m instanceof THREE.MeshPhongMaterial===false&&m.shading===THREE.FlatShading){var e,f,h,p,j,a,q,k,b,r,l,d,g,i,n=c.count*3;
for(i=0;i<n;i+=9){g=c.normalArray;p=g[i];q=g[i+1];r=g[i+2];j=g[i+3];k=g[i+4];l=g[i+5];
a=g[i+6];b=g[i+7];d=g[i+8];e=(p+j+a)/3;f=(q+k+b)/3;h=(r+l+d)/3;g[i]=e;g[i+1]=f;
g[i+2]=h;g[i+3]=e;g[i+4]=f;g[i+5]=h;g[i+6]=e;g[i+7]=f;g[i+8]=h}}dT.bufferData(dT.ARRAY_BUFFER,c.normalArray,dT.DYNAMIC_DRAW);
bY.enableAttribute(o.attributes.normal);dT.vertexAttribPointer(o.attributes.normal,3,dT.FLOAT,false,0,0)
}if(c.hasUvs&&m.map){dT.bindBuffer(dT.ARRAY_BUFFER,c.__webglUvBuffer);dT.bufferData(dT.ARRAY_BUFFER,c.uvArray,dT.DYNAMIC_DRAW);
bY.enableAttribute(o.attributes.uv);dT.vertexAttribPointer(o.attributes.uv,2,dT.FLOAT,false,0,0)
}if(c.hasColors&&m.vertexColors!==THREE.NoColors){dT.bindBuffer(dT.ARRAY_BUFFER,c.__webglColorBuffer);
dT.bufferData(dT.ARRAY_BUFFER,c.colorArray,dT.DYNAMIC_DRAW);bY.enableAttribute(o.attributes.color);
dT.vertexAttribPointer(o.attributes.color,3,dT.FLOAT,false,0,0)}bY.disableUnusedAttributes();
dT.drawArrays(dT.TRIANGLES,0,c.count);c.count=0};function bI(g,i,f,c){var h=f.attributes;
var m=i.attributes;var d=i.attributesKeys;for(var j=0,l=d.length;j<l;j++){var e=d[j];
var k=m[e];if(k>=0){var a=h[e];if(a!==undefined){var b=a.itemSize;dT.bindBuffer(dT.ARRAY_BUFFER,a.buffer);
bY.enableAttribute(k);dT.vertexAttribPointer(k,b,dT.FLOAT,false,0,c*b*4)}else{if(g.defaultAttributeValues!==undefined){if(g.defaultAttributeValues[e].length===2){dT.vertexAttrib2fv(k,g.defaultAttributeValues[e])
}else{if(g.defaultAttributeValues[e].length===3){dT.vertexAttrib3fv(k,g.defaultAttributeValues[e])
}}}}}}bY.disableUnusedAttributes()}this.renderBufferDirect=function(d,c,s,k,p,a){if(k.visible===false){return
}c2(a);var m=dz(d,c,s,k,a);var h=false,f=k.wireframe?1:0,g="direct_"+p.id+"_"+m.id+"_"+f;
if(g!==ci){ci=g;h=true}if(h){bY.initAttributes()}if(a instanceof THREE.Mesh){var j=k.wireframe===true?dT.LINES:dT.TRIANGLES;
var n=p.attributes.index;if(n){var r,i;if(n.array instanceof Uint32Array&&b4.get("OES_element_index_uint")){r=dT.UNSIGNED_INT;
i=4}else{r=dT.UNSIGNED_SHORT;i=2}var o=p.offsets;if(o.length===0){if(h){bI(k,m,p,0);
dT.bindBuffer(dT.ELEMENT_ARRAY_BUFFER,n.buffer)}dT.drawElements(j,n.array.length,r,0);
cy.info.render.calls++;cy.info.render.vertices+=n.array.length;cy.info.render.faces+=n.array.length/3
}else{h=true;for(var e=0,l=o.length;e<l;e++){var q=o[e].index;if(h){bI(k,m,p,q);
dT.bindBuffer(dT.ELEMENT_ARRAY_BUFFER,n.buffer)}dT.drawElements(j,o[e].count,r,o[e].start*i);
cy.info.render.calls++;cy.info.render.vertices+=o[e].count;cy.info.render.faces+=o[e].count/3
}}}else{if(h){bI(k,m,p,0)}var b=p.attributes.position;dT.drawArrays(j,0,b.array.length/b.itemSize);
cy.info.render.calls++;cy.info.render.vertices+=b.array.length/b.itemSize;cy.info.render.faces+=b.array.length/(3*b.itemSize)
}}else{if(a instanceof THREE.PointCloud){var j=dT.POINTS;var n=p.attributes.index;
if(n){var r,i;if(n.array instanceof Uint32Array&&b4.get("OES_element_index_uint")){r=dT.UNSIGNED_INT;
i=4}else{r=dT.UNSIGNED_SHORT;i=2}var o=p.offsets;if(o.length===0){if(h){bI(k,m,p,0);
dT.bindBuffer(dT.ELEMENT_ARRAY_BUFFER,n.buffer)}dT.drawElements(j,n.array.length,r,0);
cy.info.render.calls++;cy.info.render.points+=n.array.length}else{if(o.length>1){h=true
}for(var e=0,l=o.length;e<l;e++){var q=o[e].index;if(h){bI(k,m,p,q);dT.bindBuffer(dT.ELEMENT_ARRAY_BUFFER,n.buffer)
}dT.drawElements(j,o[e].count,r,o[e].start*i);cy.info.render.calls++;cy.info.render.points+=o[e].count
}}}else{if(h){bI(k,m,p,0)}var b=p.attributes.position;var o=p.offsets;if(o.length===0){dT.drawArrays(j,0,b.array.length/3);
cy.info.render.calls++;cy.info.render.points+=b.array.length/3}else{for(var e=0,l=o.length;
e<l;e++){dT.drawArrays(j,o[e].index,o[e].count);cy.info.render.calls++;cy.info.render.points+=o[e].count
}}}}else{if(a instanceof THREE.Line){var j=(a.mode===THREE.LineStrip)?dT.LINE_STRIP:dT.LINES;
bY.setLineWidth(k.linewidth*cN);var n=p.attributes.index;if(n){var r,i;if(n.array instanceof Uint32Array){r=dT.UNSIGNED_INT;
i=4}else{r=dT.UNSIGNED_SHORT;i=2}var o=p.offsets;if(o.length===0){if(h){bI(k,m,p,0);
dT.bindBuffer(dT.ELEMENT_ARRAY_BUFFER,n.buffer)}dT.drawElements(j,n.array.length,r,0);
cy.info.render.calls++;cy.info.render.vertices+=n.array.length}else{if(o.length>1){h=true
}for(var e=0,l=o.length;e<l;e++){var q=o[e].index;if(h){bI(k,m,p,q);dT.bindBuffer(dT.ELEMENT_ARRAY_BUFFER,n.buffer)
}dT.drawElements(j,o[e].count,r,o[e].start*i);cy.info.render.calls++;cy.info.render.vertices+=o[e].count
}}}else{if(h){bI(k,m,p,0)}var b=p.attributes.position;var o=p.offsets;if(o.length===0){dT.drawArrays(j,0,b.array.length/3);
cy.info.render.calls++;cy.info.render.vertices+=b.array.length/3}else{for(var e=0,l=o.length;
e<l;e++){dT.drawArrays(j,o[e].index,o[e].count);cy.info.render.calls++;cy.info.render.vertices+=o[e].count
}}}}}}};this.renderBuffer=function(e,j,p,d,k,l){if(d.visible===false){return}c2(l);
var g=dz(e,j,p,d,l);var i=g.attributes;var m=false,b=d.wireframe?1:0,n=k.id+"_"+g.id+"_"+b;
if(n!==ci){ci=n;m=true}if(m){bY.initAttributes()}if(!d.morphTargets&&i.position>=0){if(m){dT.bindBuffer(dT.ARRAY_BUFFER,k.__webglVertexBuffer);
bY.enableAttribute(i.position);dT.vertexAttribPointer(i.position,3,dT.FLOAT,false,0,0)
}}else{if(l.morphTargetBase){c9(d,k,l)}}if(m){if(k.__webglCustomAttributesList){for(var h=0,a=k.__webglCustomAttributesList.length;
h<a;h++){var o=k.__webglCustomAttributesList[h];if(i[o.buffer.belongsToAttribute]>=0){dT.bindBuffer(dT.ARRAY_BUFFER,o.buffer);
bY.enableAttribute(i[o.buffer.belongsToAttribute]);dT.vertexAttribPointer(i[o.buffer.belongsToAttribute],o.size,dT.FLOAT,false,0,0)
}}}if(i.color>=0){if(l.geometry.colors.length>0||l.geometry.faces.length>0){dT.bindBuffer(dT.ARRAY_BUFFER,k.__webglColorBuffer);
bY.enableAttribute(i.color);dT.vertexAttribPointer(i.color,3,dT.FLOAT,false,0,0)
}else{if(d.defaultAttributeValues!==undefined){dT.vertexAttrib3fv(i.color,d.defaultAttributeValues.color)
}}}if(i.normal>=0){dT.bindBuffer(dT.ARRAY_BUFFER,k.__webglNormalBuffer);bY.enableAttribute(i.normal);
dT.vertexAttribPointer(i.normal,3,dT.FLOAT,false,0,0)}if(i.tangent>=0){dT.bindBuffer(dT.ARRAY_BUFFER,k.__webglTangentBuffer);
bY.enableAttribute(i.tangent);dT.vertexAttribPointer(i.tangent,4,dT.FLOAT,false,0,0)
}if(i.uv>=0){if(l.geometry.faceVertexUvs[0]){dT.bindBuffer(dT.ARRAY_BUFFER,k.__webglUVBuffer);
bY.enableAttribute(i.uv);dT.vertexAttribPointer(i.uv,2,dT.FLOAT,false,0,0)}else{if(d.defaultAttributeValues!==undefined){dT.vertexAttrib2fv(i.uv,d.defaultAttributeValues.uv)
}}}if(i.uv2>=0){if(l.geometry.faceVertexUvs[1]){dT.bindBuffer(dT.ARRAY_BUFFER,k.__webglUV2Buffer);
bY.enableAttribute(i.uv2);dT.vertexAttribPointer(i.uv2,2,dT.FLOAT,false,0,0)}else{if(d.defaultAttributeValues!==undefined){dT.vertexAttrib2fv(i.uv2,d.defaultAttributeValues.uv2)
}}}if(d.skinning&&i.skinIndex>=0&&i.skinWeight>=0){dT.bindBuffer(dT.ARRAY_BUFFER,k.__webglSkinIndicesBuffer);
bY.enableAttribute(i.skinIndex);dT.vertexAttribPointer(i.skinIndex,4,dT.FLOAT,false,0,0);
dT.bindBuffer(dT.ARRAY_BUFFER,k.__webglSkinWeightsBuffer);bY.enableAttribute(i.skinWeight);
dT.vertexAttribPointer(i.skinWeight,4,dT.FLOAT,false,0,0)}if(i.lineDistance>=0){dT.bindBuffer(dT.ARRAY_BUFFER,k.__webglLineDistanceBuffer);
bY.enableAttribute(i.lineDistance);dT.vertexAttribPointer(i.lineDistance,1,dT.FLOAT,false,0,0)
}}bY.disableUnusedAttributes();if(l instanceof THREE.Mesh){var c=k.__typeArray===Uint32Array?dT.UNSIGNED_INT:dT.UNSIGNED_SHORT;
if(d.wireframe){bY.setLineWidth(d.wireframeLinewidth*cN);if(m){dT.bindBuffer(dT.ELEMENT_ARRAY_BUFFER,k.__webglLineBuffer)
}dT.drawElements(dT.LINES,k.__webglLineCount,c,0)}else{if(m){dT.bindBuffer(dT.ELEMENT_ARRAY_BUFFER,k.__webglFaceBuffer)
}dT.drawElements(dT.TRIANGLES,k.__webglFaceCount,c,0)}cy.info.render.calls++;cy.info.render.vertices+=k.__webglFaceCount;
cy.info.render.faces+=k.__webglFaceCount/3}else{if(l instanceof THREE.Line){var f=(l.mode===THREE.LineStrip)?dT.LINE_STRIP:dT.LINES;
bY.setLineWidth(d.linewidth*cN);dT.drawArrays(f,0,k.__webglLineCount);cy.info.render.calls++
}else{if(l instanceof THREE.PointCloud){dT.drawArrays(dT.POINTS,0,k.__webglParticleCount);
cy.info.render.calls++;cy.info.render.points+=k.__webglParticleCount}}}};function c9(d,i,j){var f=d.program.attributes;
if(j.morphTargetBase!==-1&&f.position>=0){dT.bindBuffer(dT.ARRAY_BUFFER,i.__webglMorphTargetsBuffers[j.morphTargetBase]);
bY.enableAttribute(f.position);dT.vertexAttribPointer(f.position,3,dT.FLOAT,false,0,0)
}else{if(f.position>=0){dT.bindBuffer(dT.ARRAY_BUFFER,i.__webglVertexBuffer);bY.enableAttribute(f.position);
dT.vertexAttribPointer(f.position,3,dT.FLOAT,false,0,0)}}if(j.morphTargetForcedOrder.length){var m=0;
var l=j.morphTargetForcedOrder;var b=j.morphTargetInfluences;var o;while(m<d.numSupportedMorphTargets&&m<l.length){o=f["morphTarget"+m];
if(o>=0){dT.bindBuffer(dT.ARRAY_BUFFER,i.__webglMorphTargetsBuffers[l[m]]);bY.enableAttribute(o);
dT.vertexAttribPointer(o,3,dT.FLOAT,false,0,0)}o=f["morphNormal"+m];if(o>=0&&d.morphNormals){dT.bindBuffer(dT.ARRAY_BUFFER,i.__webglMorphNormalsBuffers[l[m]]);
bY.enableAttribute(o);dT.vertexAttribPointer(o,3,dT.FLOAT,false,0,0)}j.__webglMorphTargetInfluences[m]=b[l[m]];
m++}}else{var k=[];var b=j.morphTargetInfluences;var n=j.geometry.morphTargets;
if(b.length>n.length){console.warn("THREE.WebGLRenderer: Influences array is bigger than morphTargets array.");
b.length=n.length}for(var e=0,a=b.length;e<a;e++){var c=b[e];k.push([c,e])}if(k.length>d.numSupportedMorphTargets){k.sort(ca);
k.length=d.numSupportedMorphTargets}else{if(k.length>d.numSupportedMorphNormals){k.sort(ca)
}else{if(k.length===0){k.push([0,0])}}}var o;for(var m=0,g=d.numSupportedMorphTargets;
m<g;m++){if(k[m]){var h=k[m][1];o=f["morphTarget"+m];if(o>=0){dT.bindBuffer(dT.ARRAY_BUFFER,i.__webglMorphTargetsBuffers[h]);
bY.enableAttribute(o);dT.vertexAttribPointer(o,3,dT.FLOAT,false,0,0)}o=f["morphNormal"+m];
if(o>=0&&d.morphNormals){dT.bindBuffer(dT.ARRAY_BUFFER,i.__webglMorphNormalsBuffers[h]);
bY.enableAttribute(o);dT.vertexAttribPointer(o,3,dT.FLOAT,false,0,0)}j.__webglMorphTargetInfluences[m]=b[h]
}else{j.__webglMorphTargetInfluences[m]=0}}}if(d.program.uniforms.morphTargetInfluences!==null){dT.uniform1fv(d.program.uniforms.morphTargetInfluences,j.__webglMorphTargetInfluences)
}}function dG(a,b){if(a.object.renderOrder!==b.object.renderOrder){return a.object.renderOrder-b.object.renderOrder
}else{if(a.material.id!==b.material.id){return a.material.id-b.material.id}else{if(a.z!==b.z){return a.z-b.z
}else{return a.id-b.id}}}}function bS(a,b){if(a.object.renderOrder!==b.object.renderOrder){return a.object.renderOrder-b.object.renderOrder
}if(a.z!==b.z){return b.z-a.z}else{return a.id-b.id}}function ca(a,b){return b[0]-a[0]
}this.render=function(f,b,e,d){if(b instanceof THREE.Camera===false){THREE.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
return}var j=f.fog;ci="";dN=-1;cu=null;dg=true;if(f.autoUpdate===true){f.updateMatrixWorld()
}if(b.parent===undefined){b.updateMatrixWorld()}f.traverse(function(k){if(k instanceof THREE.SkinnedMesh){k.skeleton.update()
}});b.matrixWorldInverse.getInverse(b.matrixWorld);dI.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);
dr.setFromMatrix(dI);bO.length=0;bP.length=0;dJ.length=0;cL.length=0;cg.length=0;
bJ(f);if(cy.sortObjects===true){bP.sort(dG);dJ.sort(bS)}co.render(f,b);cy.info.render.calls=0;
cy.info.render.vertices=0;cy.info.render.faces=0;cy.info.render.points=0;this.setRenderTarget(e);
if(this.autoClear||d){this.clear(this.autoClearColor,this.autoClearDepth,this.autoClearStencil)
}for(var h=0,a=dv.length;h<a;h++){var g=dv[h];var i=g.object;if(i.visible){cD(i,b);
df(g)}}if(f.overrideMaterial){var c=f.overrideMaterial;cG(c);dO(bP,b,bO,j,c);dO(dJ,b,bO,j,c);
b1(dv,"",b,bO,j,c)}else{bY.setBlending(THREE.NoBlending);dO(bP,b,bO,j,null);b1(dv,"opaque",b,bO,j,null);
dO(dJ,b,bO,j,null);b1(dv,"transparent",b,bO,j,null)}dt.render(f,b);di.render(f,b,dc,dC);
if(e&&e.generateMipmaps&&e.minFilter!==THREE.NearestFilter&&e.minFilter!==THREE.LinearFilter){bX(e)
}bY.setDepthTest(true);bY.setDepthWrite(true);bY.setColorWrite(true)};function bJ(c){if(c.visible===false){return
}if(c instanceof THREE.Scene||c instanceof THREE.Group){}else{cW(c);if(c instanceof THREE.Light){bO.push(c)
}else{if(c instanceof THREE.Sprite){cL.push(c)}else{if(c instanceof THREE.LensFlare){cg.push(c)
}else{var a=cX[c.id];if(a&&(c.frustumCulled===false||dr.intersectsObject(c)===true)){for(var b=0,d=a.length;
b<d;b++){var e=a[b];bM(e);e.render=true;if(cy.sortObjects===true){cV.setFromMatrixPosition(c.matrixWorld);
cV.applyProjection(dI);e.z=cV.z}}}}}}}for(var b=0,d=c.children.length;b<d;b++){bJ(c.children[b])
}}function dO(k,c,f,j,a){var b;for(var e=0,i=k.length;e<i;e++){var d=k[e];var h=d.object;
var g=d.buffer;cD(h,c);if(a){b=a}else{b=d.material;if(!b){continue}cG(b)}cy.setMaterialFaces(b);
if(g instanceof THREE.BufferGeometry){cy.renderBufferDirect(c,f,j,b,g,h)}else{cy.renderBuffer(c,f,j,b,g,h)
}}}function b1(k,d,c,g,j,a){var b;for(var f=0,i=k.length;f<i;f++){var e=k[f];var h=e.object;
if(h.visible){if(a){b=a}else{b=e[d];if(!b){continue}cG(b)}cy.renderImmediateObject(c,g,j,b,h)
}}}this.renderImmediateObject=function(f,b,e,a,c){var d=dz(f,b,e,a,c);ci="";cy.setMaterialFaces(a);
if(c.immediateRenderCallback){c.immediateRenderCallback(d,dT,dr)}else{c.render(function(g){cy.renderBufferImmediate(g,d,a)
})}};function df(a){var c=a.object,b=c.material;if(b.transparent){a.transparent=b;
a.opaque=null}else{a.opaque=b;a.transparent=null}}function bM(f){var b=f.object;
var c=f.buffer;var e=b.geometry;var a=b.material;if(a instanceof THREE.MeshFaceMaterial){var d=e instanceof THREE.BufferGeometry?0:c.materialIndex;
a=a.materials[d];f.material=a;if(a.transparent){dJ.push(f)}else{bP.push(f)}}else{if(a){f.material=a;
if(a.transparent){dJ.push(f)}else{bP.push(f)}}}}function cW(b){if(b.__webglInit===undefined){b.__webglInit=true;
b._modelViewMatrix=new THREE.Matrix4();b._normalMatrix=new THREE.Matrix3();b.addEventListener("removed",bW)
}var e=b.geometry;if(e===undefined){}else{if(e.__webglInit===undefined){e.__webglInit=true;
e.addEventListener("dispose",dp);if(e instanceof THREE.BufferGeometry){cy.info.memory.geometries++
}else{if(b instanceof THREE.Mesh){b9(b,e)}else{if(b instanceof THREE.Line){if(e.__webglVertexBuffer===undefined){dk(e);
cF(e,b);e.verticesNeedUpdate=true;e.colorsNeedUpdate=true;e.lineDistancesNeedUpdate=true
}}else{if(b instanceof THREE.PointCloud){if(e.__webglVertexBuffer===undefined){db(e);
ct(e,b);e.verticesNeedUpdate=true;e.colorsNeedUpdate=true}}}}}}}if(b.__webglActive===undefined){b.__webglActive=true;
if(b instanceof THREE.Mesh){if(e instanceof THREE.BufferGeometry){bT(cX,e,b)}else{if(e instanceof THREE.Geometry){var d=cM[e.id];
for(var a=0,c=d.length;a<c;a++){bT(cX,d[a],b)}}}}else{if(b instanceof THREE.Line||b instanceof THREE.PointCloud){bT(cX,e,b)
}else{if(b instanceof THREE.ImmediateRenderObject||b.immediateRenderCallback){cw(dv,b)
}}}}}var cM={};var cU=0;function cY(f,a){var i=b4.get("OES_element_index_uint")?4294967296:65535;
var l,h={};var c=f.morphTargets.length;var m=f.morphNormals.length;var b;var n={};
var k=[];for(var j=0,d=f.faces.length;j<d;j++){var g=f.faces[j];var e=a?g.materialIndex:0;
if(!(e in h)){h[e]={hash:e,counter:0}}l=h[e].hash+"_"+h[e].counter;if(!(l in n)){b={id:cU++,faces3:[],materialIndex:e,vertices:0,numMorphTargets:c,numMorphNormals:m};
n[l]=b;k.push(b)}if(n[l].vertices+3>i){h[e].counter+=1;l=h[e].hash+"_"+h[e].counter;
if(!(l in n)){b={id:cU++,faces3:[],materialIndex:e,vertices:0,numMorphTargets:c,numMorphNormals:m};
n[l]=b;k.push(b)}}n[l].faces3.push(j);n[l].vertices+=3}return k}function b9(h,e){var f=h.material,a=false;
if(cM[e.id]===undefined||e.groupsNeedUpdate===true){delete cX[h.id];cM[e.id]=cY(e,f instanceof THREE.MeshFaceMaterial);
e.groupsNeedUpdate=false}var d=cM[e.id];for(var g=0,b=d.length;g<b;g++){var c=d[g];
if(c.__webglVertexBuffer===undefined){dm(c);cI(c,h);e.verticesNeedUpdate=true;e.morphTargetsNeedUpdate=true;
e.elementsNeedUpdate=true;e.uvsNeedUpdate=true;e.normalsNeedUpdate=true;e.tangentsNeedUpdate=true;
e.colorsNeedUpdate=true;a=true}else{a=false}if(a||h.__webglActive===undefined){bT(cX,c,h)
}}h.__webglActive=true}function bT(b,d,c){var a=c.id;b[a]=b[a]||[];b[a].push({id:a,buffer:d,object:c,material:null,z:0})
}function cw(a,b){a.push({id:null,object:b,opaque:null,transparent:null,z:0})}function c2(k){var f=k.geometry;
if(f instanceof THREE.BufferGeometry){var j=f.attributes;var a=f.attributesKeys;
for(var i=0,m=a.length;i<m;i++){var c=a[i];var n=j[c];var b=(c==="index")?dT.ELEMENT_ARRAY_BUFFER:dT.ARRAY_BUFFER;
if(n.buffer===undefined){n.buffer=dT.createBuffer();dT.bindBuffer(b,n.buffer);dT.bufferData(b,n.array,(n instanceof THREE.DynamicBufferAttribute)?dT.DYNAMIC_DRAW:dT.STATIC_DRAW);
n.needsUpdate=false}else{if(n.needsUpdate===true){dT.bindBuffer(b,n.buffer);if(n.updateRange===undefined||n.updateRange.count===-1){dT.bufferSubData(b,0,n.array)
}else{if(n.updateRange.count===0){console.error("THREE.WebGLRenderer.updateObject: using updateRange for THREE.DynamicBufferAttribute and marked as needsUpdate but count is 0, ensure you are using set methods or updating manually.")
}else{dT.bufferSubData(b,n.updateRange.offset*n.array.BYTES_PER_ELEMENT,n.array.subarray(n.updateRange.offset,n.updateRange.offset+n.updateRange.count));
n.updateRange.count=0}}n.needsUpdate=false}}}}else{if(k instanceof THREE.Mesh){if(f.groupsNeedUpdate===true){b9(k,f)
}var g=cM[f.id];for(var i=0,e=g.length;i<e;i++){var l=g[i];var h=dB(k,l);var d=h.attributes&&dx(h);
if(f.verticesNeedUpdate||f.morphTargetsNeedUpdate||f.elementsNeedUpdate||f.uvsNeedUpdate||f.normalsNeedUpdate||f.colorsNeedUpdate||f.tangentsNeedUpdate||d){bH(l,k,dT.DYNAMIC_DRAW,!f.dynamic,h)
}}f.verticesNeedUpdate=false;f.morphTargetsNeedUpdate=false;f.elementsNeedUpdate=false;
f.uvsNeedUpdate=false;f.normalsNeedUpdate=false;f.colorsNeedUpdate=false;f.tangentsNeedUpdate=false;
h.attributes&&c5(h)}else{if(k instanceof THREE.Line){var h=dB(k,f);var d=h.attributes&&dx(h);
if(f.verticesNeedUpdate||f.colorsNeedUpdate||f.lineDistancesNeedUpdate||d){dn(f,dT.DYNAMIC_DRAW)
}f.verticesNeedUpdate=false;f.colorsNeedUpdate=false;f.lineDistancesNeedUpdate=false;
h.attributes&&c5(h)}else{if(k instanceof THREE.PointCloud){var h=dB(k,f);var d=h.attributes&&dx(h);
if(f.verticesNeedUpdate||f.colorsNeedUpdate||d){cn(f,dT.DYNAMIC_DRAW,k)}f.verticesNeedUpdate=false;
f.colorsNeedUpdate=false;h.attributes&&c5(h)}}}}}function dx(a){for(var b in a.attributes){if(a.attributes[b].needsUpdate){return true
}}return false}function c5(a){for(var b in a.attributes){a.attributes[b].needsUpdate=false
}}function dw(a){if(a instanceof THREE.Mesh||a instanceof THREE.PointCloud||a instanceof THREE.Line){delete cX[a.id]
}else{if(a instanceof THREE.ImmediateRenderObject||a.immediateRenderCallback){dy(dv,a)
}}delete a.__webglInit;delete a._modelViewMatrix;delete a._normalMatrix;delete a.__webglActive
}function dy(b,c){for(var a=b.length-1;a>=0;a--){if(b[a].object===c){b.splice(a,1)
}}}var ds={MeshDepthMaterial:"depth",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointCloudMaterial:"particle_basic"};
function c1(k,d,v,b){k.addEventListener("dispose",b7);var p=ds[k.type];if(p){var A=THREE.ShaderLib[p];
k.__webglShader={uniforms:THREE.UniformsUtils.clone(A.uniforms),vertexShader:A.vertexShader,fragmentShader:A.fragmentShader}
}else{k.__webglShader={uniforms:k.uniforms,vertexShader:k.vertexShader,fragmentShader:k.fragmentShader}
}var h=cQ(d);var q=b3(d);var c=bZ(b);var o={precision:bG,supportsVertexTextures:dH,map:!!k.map,envMap:!!k.envMap,envMapMode:k.envMap&&k.envMap.mapping,lightMap:!!k.lightMap,bumpMap:!!k.bumpMap,normalMap:!!k.normalMap,specularMap:!!k.specularMap,alphaMap:!!k.alphaMap,combine:k.combine,vertexColors:k.vertexColors,fog:v,useFog:k.fog,fogExp:v instanceof THREE.FogExp2,flatShading:k.shading===THREE.FlatShading,sizeAttenuation:k.sizeAttenuation,logarithmicDepthBuffer:c8,skinning:k.skinning,maxBones:c,useVertexTexture:dP&&b&&b.skeleton&&b.skeleton.useVertexTexture,morphTargets:k.morphTargets,morphNormals:k.morphNormals,maxMorphTargets:cy.maxMorphTargets,maxMorphNormals:cy.maxMorphNormals,maxDirLights:h.directional,maxPointLights:h.point,maxSpotLights:h.spot,maxHemiLights:h.hemi,maxShadows:q,shadowMapEnabled:cy.shadowMapEnabled&&b.receiveShadow&&q>0,shadowMapType:cy.shadowMapType,shadowMapDebug:cy.shadowMapDebug,shadowMapCascade:cy.shadowMapCascade,alphaTest:k.alphaTest,metal:k.metal,wrapAround:k.wrapAround,doubleSided:k.side===THREE.DoubleSide,flipSided:k.side===THREE.BackSide};
var j=[];if(p){j.push(p)}else{j.push(k.fragmentShader);j.push(k.vertexShader)}if(k.defines!==undefined){for(var a in k.defines){j.push(a);
j.push(k.defines[a])}}for(var a in o){j.push(a);j.push(o[a])}var t=j.join();var m;
for(var g=0,e=b8.length;g<e;g++){var r=b8[g];if(r.code===t){m=r;m.usedTimes++;break
}}if(m===undefined){m=new THREE.WebGLProgram(cy,t,k,o);b8.push(m);cy.info.memory.programs=b8.length
}k.program=m;var n=m.attributes;if(k.morphTargets){k.numSupportedMorphTargets=0;
var i,s="morphTarget";for(var f=0;f<cy.maxMorphTargets;f++){i=s+f;if(n[i]>=0){k.numSupportedMorphTargets++
}}}if(k.morphNormals){k.numSupportedMorphNormals=0;var i,s="morphNormal";for(f=0;
f<cy.maxMorphNormals;f++){i=s+f;if(n[i]>=0){k.numSupportedMorphNormals++}}}k.uniformsList=[];
for(var l in k.__webglShader.uniforms){var u=k.program.uniforms[l];if(u){k.uniformsList.push([k.__webglShader.uniforms[l],u])
}}}function cG(a){if(a.transparent===true){bY.setBlending(a.blending,a.blendEquation,a.blendSrc,a.blendDst,a.blendEquationAlpha,a.blendSrcAlpha,a.blendDstAlpha)
}else{bY.setBlending(THREE.NoBlending)}bY.setDepthTest(a.depthTest);bY.setDepthWrite(a.depthWrite);
bY.setColorWrite(a.colorWrite);bY.setPolygonOffset(a.polygonOffset,a.polygonOffsetFactor,a.polygonOffsetUnits)
}function dz(e,h,l,d,i){cd=0;if(d.needsUpdate){if(d.program){bN(d)}c1(d,h,l,i);
d.needsUpdate=false}if(d.morphTargets){if(!i.__webglMorphTargetInfluences){i.__webglMorphTargetInfluences=new Float32Array(cy.maxMorphTargets)
}}var j=false;var f=false;var k=false;var g=d.program,a=g.uniforms,c=d.__webglShader.uniforms;
if(g.id!==cH){dT.useProgram(g.program);cH=g.id;j=true;f=true;k=true}if(d.id!==dN){if(dN===-1){k=true
}dN=d.id;f=true}if(j||e!==cu){dT.uniformMatrix4fv(a.projectionMatrix,false,e.projectionMatrix.elements);
if(c8){dT.uniform1f(a.logDepthBufFC,2/(Math.log(e.far+1)/Math.LN2))}if(e!==cu){cu=e
}if(d instanceof THREE.ShaderMaterial||d instanceof THREE.MeshPhongMaterial||d.envMap){if(a.cameraPosition!==null){cV.setFromMatrixPosition(e.matrixWorld);
dT.uniform3f(a.cameraPosition,cV.x,cV.y,cV.z)}}if(d instanceof THREE.MeshPhongMaterial||d instanceof THREE.MeshLambertMaterial||d instanceof THREE.MeshBasicMaterial||d instanceof THREE.ShaderMaterial||d.skinning){if(a.viewMatrix!==null){dT.uniformMatrix4fv(a.viewMatrix,false,e.matrixWorldInverse.elements)
}}}if(d.skinning){if(i.bindMatrix&&a.bindMatrix!==null){dT.uniformMatrix4fv(a.bindMatrix,false,i.bindMatrix.elements)
}if(i.bindMatrixInverse&&a.bindMatrixInverse!==null){dT.uniformMatrix4fv(a.bindMatrixInverse,false,i.bindMatrixInverse.elements)
}if(dP&&i.skeleton&&i.skeleton.useVertexTexture){if(a.boneTexture!==null){var b=cz();
dT.uniform1i(a.boneTexture,b);cy.setTexture(i.skeleton.boneTexture,b)}if(a.boneTextureWidth!==null){dT.uniform1i(a.boneTextureWidth,i.skeleton.boneTextureWidth)
}if(a.boneTextureHeight!==null){dT.uniform1i(a.boneTextureHeight,i.skeleton.boneTextureHeight)
}}else{if(i.skeleton&&i.skeleton.boneMatrices){if(a.boneGlobalMatrices!==null){dT.uniformMatrix4fv(a.boneGlobalMatrices,false,i.skeleton.boneMatrices)
}}}}if(f){if(l&&d.fog){dS(c,l)}if(d instanceof THREE.MeshPhongMaterial||d instanceof THREE.MeshLambertMaterial||d.lights){if(dg){k=true;
cl(h);dg=false}if(k){cJ(c,cT);cj(c,true)}else{cj(c,false)}}if(d instanceof THREE.MeshBasicMaterial||d instanceof THREE.MeshLambertMaterial||d instanceof THREE.MeshPhongMaterial){c4(c,d)
}if(d instanceof THREE.LineBasicMaterial){cR(c,d)}else{if(d instanceof THREE.LineDashedMaterial){cR(c,d);
dW(c,d)}else{if(d instanceof THREE.PointCloudMaterial){c6(c,d)}else{if(d instanceof THREE.MeshPhongMaterial){cS(c,d)
}else{if(d instanceof THREE.MeshLambertMaterial){cr(c,d)}else{if(d instanceof THREE.MeshDepthMaterial){c.mNear.value=e.near;
c.mFar.value=e.far;c.opacity.value=d.opacity}else{if(d instanceof THREE.MeshNormalMaterial){c.opacity.value=d.opacity
}}}}}}}if(i.receiveShadow&&!d._shadowPass){cB(c,h)}cv(d.uniformsList)}cK(a,i);if(a.modelMatrix!==null){dT.uniformMatrix4fv(a.modelMatrix,false,i.matrixWorld.elements)
}return g}function c4(c,b){c.opacity.value=b.opacity;c.diffuse.value=b.color;c.map.value=b.map;
c.lightMap.value=b.lightMap;c.specularMap.value=b.specularMap;c.alphaMap.value=b.alphaMap;
if(b.bumpMap){c.bumpMap.value=b.bumpMap;c.bumpScale.value=b.bumpScale}if(b.normalMap){c.normalMap.value=b.normalMap;
c.normalScale.value.copy(b.normalScale)}var d;if(b.map){d=b.map}else{if(b.specularMap){d=b.specularMap
}else{if(b.normalMap){d=b.normalMap}else{if(b.bumpMap){d=b.bumpMap}else{if(b.alphaMap){d=b.alphaMap
}}}}}if(d!==undefined){var e=d.offset;var a=d.repeat;c.offsetRepeat.value.set(e.x,e.y,a.x,a.y)
}c.envMap.value=b.envMap;c.flipEnvMap.value=(b.envMap instanceof THREE.WebGLRenderTargetCube)?1:-1;
c.reflectivity.value=b.reflectivity;c.refractionRatio.value=b.refractionRatio}function cR(b,a){b.diffuse.value=a.color;
b.opacity.value=a.opacity}function dW(b,a){b.dashSize.value=a.dashSize;b.totalSize.value=a.dashSize+a.gapSize;
b.scale.value=a.scale}function c6(d,c){d.psColor.value=c.color;d.opacity.value=c.opacity;
d.size.value=c.size;d.scale.value=bU.height/2;d.map.value=c.map;if(c.map!==null){var a=c.map.offset;
var b=c.map.repeat;d.offsetRepeat.value.set(a.x,a.y,b.x,b.y)}}function dS(b,a){b.fogColor.value=a.color;
if(a instanceof THREE.Fog){b.fogNear.value=a.near;b.fogFar.value=a.far}else{if(a instanceof THREE.FogExp2){b.fogDensity.value=a.density
}}}function cS(b,a){b.shininess.value=a.shininess;b.emissive.value=a.emissive;b.specular.value=a.specular;
if(a.wrapAround){b.wrapRGB.value.copy(a.wrapRGB)}}function cr(b,a){b.emissive.value=a.emissive;
if(a.wrapAround){b.wrapRGB.value.copy(a.wrapRGB)}}function cJ(b,a){b.ambientLightColor.value=a.ambient;
b.directionalLightColor.value=a.directional.colors;b.directionalLightDirection.value=a.directional.positions;
b.pointLightColor.value=a.point.colors;b.pointLightPosition.value=a.point.positions;
b.pointLightDistance.value=a.point.distances;b.pointLightDecay.value=a.point.decays;
b.spotLightColor.value=a.spot.colors;b.spotLightPosition.value=a.spot.positions;
b.spotLightDistance.value=a.spot.distances;b.spotLightDirection.value=a.spot.directions;
b.spotLightAngleCos.value=a.spot.anglesCos;b.spotLightExponent.value=a.spot.exponents;
b.spotLightDecay.value=a.spot.decays;b.hemisphereLightSkyColor.value=a.hemi.skyColors;
b.hemisphereLightGroundColor.value=a.hemi.groundColors;b.hemisphereLightDirection.value=a.hemi.positions
}function cj(b,a){b.ambientLightColor.needsUpdate=a;b.directionalLightColor.needsUpdate=a;
b.directionalLightDirection.needsUpdate=a;b.pointLightColor.needsUpdate=a;b.pointLightPosition.needsUpdate=a;
b.pointLightDistance.needsUpdate=a;b.pointLightDecay.needsUpdate=a;b.spotLightColor.needsUpdate=a;
b.spotLightPosition.needsUpdate=a;b.spotLightDistance.needsUpdate=a;b.spotLightDirection.needsUpdate=a;
b.spotLightAngleCos.needsUpdate=a;b.spotLightExponent.needsUpdate=a;b.spotLightDecay.needsUpdate=a;
b.hemisphereLightSkyColor.needsUpdate=a;b.hemisphereLightGroundColor.needsUpdate=a;
b.hemisphereLightDirection.needsUpdate=a}function cB(d,f){if(d.shadowMatrix){var a=0;
for(var e=0,b=f.length;e<b;e++){var c=f[e];if(!c.castShadow){continue}if(c instanceof THREE.SpotLight||(c instanceof THREE.DirectionalLight&&!c.shadowCascade)){d.shadowMap.value[a]=c.shadowMap;
d.shadowMapSize.value[a]=c.shadowMapSize;d.shadowMatrix.value[a]=c.shadowMatrix;
d.shadowDarkness.value[a]=c.shadowDarkness;d.shadowBias.value[a]=c.shadowBias;a++
}}}}function cK(b,a){dT.uniformMatrix4fv(b.modelViewMatrix,false,a._modelViewMatrix.elements);
if(b.normalMatrix){dT.uniformMatrix3fv(b.normalMatrix,false,a._normalMatrix.elements)
}}function cz(){var a=cd;if(a>=cA){THREE.warn("WebGLRenderer: trying to use "+a+" texture units while this GPU supports only "+cA)
}cd+=1;return a}function cv(b){var g,a,k;for(var j=0,h=b.length;j<h;j++){var l=b[j][0];
if(l.needsUpdate===false){continue}var f=l.type;var c=l.value;var d=b[j][1];switch(f){case"1i":dT.uniform1i(d,c);
break;case"1f":dT.uniform1f(d,c);break;case"2f":dT.uniform2f(d,c[0],c[1]);break;
case"3f":dT.uniform3f(d,c[0],c[1],c[2]);break;case"4f":dT.uniform4f(d,c[0],c[1],c[2],c[3]);
break;case"1iv":dT.uniform1iv(d,c);break;case"3iv":dT.uniform3iv(d,c);break;case"1fv":dT.uniform1fv(d,c);
break;case"2fv":dT.uniform2fv(d,c);break;case"3fv":dT.uniform3fv(d,c);break;case"4fv":dT.uniform4fv(d,c);
break;case"Matrix3fv":dT.uniformMatrix3fv(d,false,c);break;case"Matrix4fv":dT.uniformMatrix4fv(d,false,c);
break;case"i":dT.uniform1i(d,c);break;case"f":dT.uniform1f(d,c);break;case"v2":dT.uniform2f(d,c.x,c.y);
break;case"v3":dT.uniform3f(d,c.x,c.y,c.z);break;case"v4":dT.uniform4f(d,c.x,c.y,c.z,c.w);
break;case"c":dT.uniform3f(d,c.r,c.g,c.b);break;case"iv1":dT.uniform1iv(d,c);break;
case"iv":dT.uniform3iv(d,c);break;case"fv1":dT.uniform1fv(d,c);break;case"fv":dT.uniform3fv(d,c);
break;case"v2v":if(l._array===undefined){l._array=new Float32Array(2*c.length)}for(var i=0,e=c.length;
i<e;i++){k=i*2;l._array[k]=c[i].x;l._array[k+1]=c[i].y}dT.uniform2fv(d,l._array);
break;case"v3v":if(l._array===undefined){l._array=new Float32Array(3*c.length)}for(var i=0,e=c.length;
i<e;i++){k=i*3;l._array[k]=c[i].x;l._array[k+1]=c[i].y;l._array[k+2]=c[i].z}dT.uniform3fv(d,l._array);
break;case"v4v":if(l._array===undefined){l._array=new Float32Array(4*c.length)}for(var i=0,e=c.length;
i<e;i++){k=i*4;l._array[k]=c[i].x;l._array[k+1]=c[i].y;l._array[k+2]=c[i].z;l._array[k+3]=c[i].w
}dT.uniform4fv(d,l._array);break;case"m3":dT.uniformMatrix3fv(d,false,c.elements);
break;case"m3v":if(l._array===undefined){l._array=new Float32Array(9*c.length)}for(var i=0,e=c.length;
i<e;i++){c[i].flattenToArrayOffset(l._array,i*9)}dT.uniformMatrix3fv(d,false,l._array);
break;case"m4":dT.uniformMatrix4fv(d,false,c.elements);break;case"m4v":if(l._array===undefined){l._array=new Float32Array(16*c.length)
}for(var i=0,e=c.length;i<e;i++){c[i].flattenToArrayOffset(l._array,i*16)}dT.uniformMatrix4fv(d,false,l._array);
break;case"t":g=c;a=cz();dT.uniform1i(d,a);if(!g){continue}if(g instanceof THREE.CubeTexture||(g.image instanceof Array&&g.image.length===6)){bK(g,a)
}else{if(g instanceof THREE.WebGLRenderTargetCube){cc(g,a)}else{cy.setTexture(g,a)
}}break;case"tv":if(l._array===undefined){l._array=[]}for(var i=0,e=l.value.length;
i<e;i++){l._array[i]=cz()}dT.uniform1iv(d,l._array);for(var i=0,e=l.value.length;
i<e;i++){g=l.value[i];a=l._array[i];if(!g){continue}cy.setTexture(g,a)}break;default:THREE.warn("THREE.WebGLRenderer: Unknown uniform type: "+f)
}}}function cD(b,a){b._modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,b.matrixWorld);
b._normalMatrix.getNormalMatrix(b._modelViewMatrix)}function cx(a,b,c,d){a[b]=c.r*d;
a[b+1]=c.g*d;a[b+2]=c.b*d}function cl(p){var L,C,d,u=0,K=0,J=0,E,s,m,D,f,H=cT,h=H.directional.colors,r=H.directional.positions,O=H.point.colors,R=H.point.positions,F=H.point.distances,A=H.point.decays,N=H.spot.colors,q=H.spot.positions,Q=H.spot.distances,i=H.spot.directions,o=H.spot.anglesCos,g=H.spot.exponents,v=H.spot.decays,t=H.hemi.skyColors,M=H.hemi.groundColors,j=H.hemi.positions,I=0,b=0,e=0,l=0,G=0,a=0,c=0,n=0,k=0,P=0,S=0,B=0;
for(L=0,C=p.length;L<C;L++){d=p[L];if(d.onlyShadow){continue}E=d.color;D=d.intensity;
f=d.distance;if(d instanceof THREE.AmbientLight){if(!d.visible){continue}u+=E.r;
K+=E.g;J+=E.b}else{if(d instanceof THREE.DirectionalLight){G+=1;if(!d.visible){continue
}bR.setFromMatrixPosition(d.matrixWorld);cV.setFromMatrixPosition(d.target.matrixWorld);
bR.sub(cV);bR.normalize();k=I*3;r[k]=bR.x;r[k+1]=bR.y;r[k+2]=bR.z;cx(h,k,E,D);I+=1
}else{if(d instanceof THREE.PointLight){a+=1;if(!d.visible){continue}P=b*3;cx(O,P,E,D);
cV.setFromMatrixPosition(d.matrixWorld);R[P]=cV.x;R[P+1]=cV.y;R[P+2]=cV.z;F[b]=f;
A[b]=(d.distance===0)?0:d.decay;b+=1}else{if(d instanceof THREE.SpotLight){c+=1;
if(!d.visible){continue}S=e*3;cx(N,S,E,D);bR.setFromMatrixPosition(d.matrixWorld);
q[S]=bR.x;q[S+1]=bR.y;q[S+2]=bR.z;Q[e]=f;cV.setFromMatrixPosition(d.target.matrixWorld);
bR.sub(cV);bR.normalize();i[S]=bR.x;i[S+1]=bR.y;i[S+2]=bR.z;o[e]=Math.cos(d.angle);
g[e]=d.exponent;v[e]=(d.distance===0)?0:d.decay;e+=1}else{if(d instanceof THREE.HemisphereLight){n+=1;
if(!d.visible){continue}bR.setFromMatrixPosition(d.matrixWorld);bR.normalize();
B=l*3;j[B]=bR.x;j[B+1]=bR.y;j[B+2]=bR.z;s=d.color;m=d.groundColor;cx(t,B,s,D);cx(M,B,m,D);
l+=1}}}}}}for(L=I*3,C=Math.max(h.length,G*3);L<C;L++){h[L]=0}for(L=b*3,C=Math.max(O.length,a*3);
L<C;L++){O[L]=0}for(L=e*3,C=Math.max(N.length,c*3);L<C;L++){N[L]=0}for(L=l*3,C=Math.max(t.length,n*3);
L<C;L++){t[L]=0}for(L=l*3,C=Math.max(M.length,n*3);L<C;L++){M[L]=0}H.directional.length=I;
H.point.length=b;H.spot.length=e;H.hemi.length=l;H.ambient[0]=u;H.ambient[1]=K;
H.ambient[2]=J}this.setFaceCulling=function(a,b){if(a===THREE.CullFaceNone){dT.disable(dT.CULL_FACE)
}else{if(b===THREE.FrontFaceDirectionCW){dT.frontFace(dT.CW)}else{dT.frontFace(dT.CCW)
}if(a===THREE.CullFaceBack){dT.cullFace(dT.BACK)}else{if(a===THREE.CullFaceFront){dT.cullFace(dT.FRONT)
}else{dT.cullFace(dT.FRONT_AND_BACK)}}dT.enable(dT.CULL_FACE)}};this.setMaterialFaces=function(a){bY.setDoubleSided(a.side===THREE.DoubleSide);
bY.setFlipSided(a.side===THREE.BackSide)};function dd(d,c,b){var a;if(b){dT.texParameteri(d,dT.TEXTURE_WRAP_S,dM(c.wrapS));
dT.texParameteri(d,dT.TEXTURE_WRAP_T,dM(c.wrapT));dT.texParameteri(d,dT.TEXTURE_MAG_FILTER,dM(c.magFilter));
dT.texParameteri(d,dT.TEXTURE_MIN_FILTER,dM(c.minFilter))}else{dT.texParameteri(d,dT.TEXTURE_WRAP_S,dT.CLAMP_TO_EDGE);
dT.texParameteri(d,dT.TEXTURE_WRAP_T,dT.CLAMP_TO_EDGE);if(c.wrapS!==THREE.ClampToEdgeWrapping||c.wrapT!==THREE.ClampToEdgeWrapping){THREE.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping. ( "+c.sourceFile+" )")
}dT.texParameteri(d,dT.TEXTURE_MAG_FILTER,dL(c.magFilter));dT.texParameteri(d,dT.TEXTURE_MIN_FILTER,dL(c.minFilter));
if(c.minFilter!==THREE.NearestFilter&&c.minFilter!==THREE.LinearFilter){THREE.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter. ( "+c.sourceFile+" )")
}}a=b4.get("EXT_texture_filter_anisotropic");if(a&&c.type!==THREE.FloatType&&c.type!==THREE.HalfFloatType){if(c.anisotropy>1||c.__currentAnisotropy){dT.texParameterf(d,a.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(c.anisotropy,cy.getMaxAnisotropy()));
c.__currentAnisotropy=c.anisotropy}}}this.uploadTexture=function(b){if(b.__webglInit===undefined){b.__webglInit=true;
b.addEventListener("dispose",da);b.__webglTexture=dT.createTexture();cy.info.memory.textures++
}dT.bindTexture(dT.TEXTURE_2D,b.__webglTexture);dT.pixelStorei(dT.UNPACK_FLIP_Y_WEBGL,b.flipY);
dT.pixelStorei(dT.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha);dT.pixelStorei(dT.UNPACK_ALIGNMENT,b.unpackAlignment);
b.image=cO(b.image,c7);var f=b.image,c=THREE.Math.isPowerOfTwo(f.width)&&THREE.Math.isPowerOfTwo(f.height),i=dM(b.format),g=dM(b.type);
dd(dT.TEXTURE_2D,b,c);var h,e=b.mipmaps;if(b instanceof THREE.DataTexture){if(e.length>0&&c){for(var d=0,a=e.length;
d<a;d++){h=e[d];dT.texImage2D(dT.TEXTURE_2D,d,i,h.width,h.height,0,i,g,h.data)}b.generateMipmaps=false
}else{dT.texImage2D(dT.TEXTURE_2D,0,i,f.width,f.height,0,i,g,f.data)}}else{if(b instanceof THREE.CompressedTexture){for(var d=0,a=e.length;
d<a;d++){h=e[d];if(b.format!==THREE.RGBAFormat&&b.format!==THREE.RGBFormat){if(dl().indexOf(i)>-1){dT.compressedTexImage2D(dT.TEXTURE_2D,d,i,h.width,h.height,0,h.data)
}else{THREE.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()")
}}else{dT.texImage2D(dT.TEXTURE_2D,d,i,h.width,h.height,0,i,g,h.data)}}}else{if(e.length>0&&c){for(var d=0,a=e.length;
d<a;d++){h=e[d];dT.texImage2D(dT.TEXTURE_2D,d,i,i,g,h)}b.generateMipmaps=false}else{dT.texImage2D(dT.TEXTURE_2D,0,i,i,g,b.image)
}}}if(b.generateMipmaps&&c){dT.generateMipmap(dT.TEXTURE_2D)}b.needsUpdate=false;
if(b.onUpdate){b.onUpdate()}};this.setTexture=function(b,a){dT.activeTexture(dT.TEXTURE0+a);
if(b.needsUpdate){cy.uploadTexture(b)}else{dT.bindTexture(dT.TEXTURE_2D,b.__webglTexture)
}};function cO(b,e){if(b.width>e||b.height>e){var a=e/Math.max(b.width,b.height);
var d=document.createElement("canvas");d.width=Math.floor(b.width*a);d.height=Math.floor(b.height*a);
var c=d.getContext("2d");c.drawImage(b,0,0,b.width,b.height,0,0,d.width,d.height);
THREE.warn("THREE.WebGLRenderer: image is too big ("+b.width+"x"+b.height+"). Resized to "+d.width+"x"+d.height,b);
return d}return b}function bK(b,a){if(b.image.length===6){if(b.needsUpdate){if(!b.image.__webglTextureCube){b.addEventListener("dispose",da);
b.image.__webglTextureCube=dT.createTexture();cy.info.memory.textures++}dT.activeTexture(dT.TEXTURE0+a);
dT.bindTexture(dT.TEXTURE_CUBE_MAP,b.image.__webglTextureCube);dT.pixelStorei(dT.UNPACK_FLIP_Y_WEBGL,b.flipY);
var j=b instanceof THREE.CompressedTexture;var k=b.image[0] instanceof THREE.DataTexture;
var n=[];for(var d=0;d<6;d++){if(cy.autoScaleCubemaps&&!j&&!k){n[d]=cO(b.image[d],cP)
}else{n[d]=k?b.image[d].image:b.image[d]}}var g=n[0],c=THREE.Math.isPowerOfTwo(g.width)&&THREE.Math.isPowerOfTwo(g.height),m=dM(b.format),i=dM(b.type);
dd(dT.TEXTURE_CUBE_MAP,b,c);for(var d=0;d<6;d++){if(!j){if(k){dT.texImage2D(dT.TEXTURE_CUBE_MAP_POSITIVE_X+d,0,m,n[d].width,n[d].height,0,m,i,n[d].data)
}else{dT.texImage2D(dT.TEXTURE_CUBE_MAP_POSITIVE_X+d,0,m,m,i,n[d])}}else{var l,h=n[d].mipmaps;
for(var f=0,e=h.length;f<e;f++){l=h[f];if(b.format!==THREE.RGBAFormat&&b.format!==THREE.RGBFormat){if(dl().indexOf(m)>-1){dT.compressedTexImage2D(dT.TEXTURE_CUBE_MAP_POSITIVE_X+d,f,m,l.width,l.height,0,l.data)
}else{THREE.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setCubeTexture()")
}}else{dT.texImage2D(dT.TEXTURE_CUBE_MAP_POSITIVE_X+d,f,m,l.width,l.height,0,m,i,l.data)
}}}}if(b.generateMipmaps&&c){dT.generateMipmap(dT.TEXTURE_CUBE_MAP)}b.needsUpdate=false;
if(b.onUpdate){b.onUpdate()}}else{dT.activeTexture(dT.TEXTURE0+a);dT.bindTexture(dT.TEXTURE_CUBE_MAP,b.image.__webglTextureCube)
}}}function cc(b,a){dT.activeTexture(dT.TEXTURE0+a);dT.bindTexture(dT.TEXTURE_CUBE_MAP,b.__webglTexture)
}function bL(a,b,c){dT.bindFramebuffer(dT.FRAMEBUFFER,a);dT.framebufferTexture2D(dT.FRAMEBUFFER,dT.COLOR_ATTACHMENT0,c,b.__webglTexture,0)
}function cZ(b,a){dT.bindRenderbuffer(dT.RENDERBUFFER,b);if(a.depthBuffer&&!a.stencilBuffer){dT.renderbufferStorage(dT.RENDERBUFFER,dT.DEPTH_COMPONENT16,a.width,a.height);
dT.framebufferRenderbuffer(dT.FRAMEBUFFER,dT.DEPTH_ATTACHMENT,dT.RENDERBUFFER,b)
}else{if(a.depthBuffer&&a.stencilBuffer){dT.renderbufferStorage(dT.RENDERBUFFER,dT.DEPTH_STENCIL,a.width,a.height);
dT.framebufferRenderbuffer(dT.FRAMEBUFFER,dT.DEPTH_STENCIL_ATTACHMENT,dT.RENDERBUFFER,b)
}else{dT.renderbufferStorage(dT.RENDERBUFFER,dT.RGBA4,a.width,a.height)}}}this.setRenderTarget=function(g){var e=(g instanceof THREE.WebGLRenderTargetCube);
if(g&&g.__webglFramebuffer===undefined){if(g.depthBuffer===undefined){g.depthBuffer=true
}if(g.stencilBuffer===undefined){g.stencilBuffer=true}g.addEventListener("dispose",cb);
g.__webglTexture=dT.createTexture();cy.info.memory.textures++;var d=THREE.Math.isPowerOfTwo(g.width)&&THREE.Math.isPowerOfTwo(g.height),k=dM(g.format),i=dM(g.type);
if(e){g.__webglFramebuffer=[];g.__webglRenderbuffer=[];dT.bindTexture(dT.TEXTURE_CUBE_MAP,g.__webglTexture);
dd(dT.TEXTURE_CUBE_MAP,g,d);for(var h=0;h<6;h++){g.__webglFramebuffer[h]=dT.createFramebuffer();
g.__webglRenderbuffer[h]=dT.createRenderbuffer();dT.texImage2D(dT.TEXTURE_CUBE_MAP_POSITIVE_X+h,0,k,g.width,g.height,0,k,i,null);
bL(g.__webglFramebuffer[h],g,dT.TEXTURE_CUBE_MAP_POSITIVE_X+h);cZ(g.__webglRenderbuffer[h],g)
}if(d){dT.generateMipmap(dT.TEXTURE_CUBE_MAP)}}else{g.__webglFramebuffer=dT.createFramebuffer();
if(g.shareDepthFrom){g.__webglRenderbuffer=g.shareDepthFrom.__webglRenderbuffer
}else{g.__webglRenderbuffer=dT.createRenderbuffer()}dT.bindTexture(dT.TEXTURE_2D,g.__webglTexture);
dd(dT.TEXTURE_2D,g,d);dT.texImage2D(dT.TEXTURE_2D,0,k,g.width,g.height,0,k,i,null);
bL(g.__webglFramebuffer,g,dT.TEXTURE_2D);if(g.shareDepthFrom){if(g.depthBuffer&&!g.stencilBuffer){dT.framebufferRenderbuffer(dT.FRAMEBUFFER,dT.DEPTH_ATTACHMENT,dT.RENDERBUFFER,g.__webglRenderbuffer)
}else{if(g.depthBuffer&&g.stencilBuffer){dT.framebufferRenderbuffer(dT.FRAMEBUFFER,dT.DEPTH_STENCIL_ATTACHMENT,dT.RENDERBUFFER,g.__webglRenderbuffer)
}}}else{cZ(g.__webglRenderbuffer,g)}if(d){dT.generateMipmap(dT.TEXTURE_2D)}}if(e){dT.bindTexture(dT.TEXTURE_CUBE_MAP,null)
}else{dT.bindTexture(dT.TEXTURE_2D,null)}dT.bindRenderbuffer(dT.RENDERBUFFER,null);
dT.bindFramebuffer(dT.FRAMEBUFFER,null)}var b,j,a,c,f;if(g){if(e){b=g.__webglFramebuffer[g.activeCubeFace]
}else{b=g.__webglFramebuffer}j=g.width;a=g.height;c=0;f=0}else{b=null;j=cq;a=cs;
c=b2;f=b5}if(b!==ce){dT.bindFramebuffer(dT.FRAMEBUFFER,b);dT.viewport(c,f,j,a);
ce=b}dc=j;dC=a};this.readRenderTargetPixels=function(f,c,e,g,d,b){if(!(f instanceof THREE.WebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
return}if(f.__webglFramebuffer){if(f.format!==THREE.RGBAFormat){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA format. readPixels can read only RGBA format.");
return}var a=false;if(f.__webglFramebuffer!==ce){dT.bindFramebuffer(dT.FRAMEBUFFER,f.__webglFramebuffer);
a=true}if(dT.checkFramebufferStatus(dT.FRAMEBUFFER)===dT.FRAMEBUFFER_COMPLETE){dT.readPixels(c,e,g,d,dT.RGBA,dT.UNSIGNED_BYTE,b)
}else{console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
}if(a){dT.bindFramebuffer(dT.FRAMEBUFFER,ce)}}};function bX(a){if(a instanceof THREE.WebGLRenderTargetCube){dT.bindTexture(dT.TEXTURE_CUBE_MAP,a.__webglTexture);
dT.generateMipmap(dT.TEXTURE_CUBE_MAP);dT.bindTexture(dT.TEXTURE_CUBE_MAP,null)
}else{dT.bindTexture(dT.TEXTURE_2D,a.__webglTexture);dT.generateMipmap(dT.TEXTURE_2D);
dT.bindTexture(dT.TEXTURE_2D,null)}}function dL(a){if(a===THREE.NearestFilter||a===THREE.NearestMipMapNearestFilter||a===THREE.NearestMipMapLinearFilter){return dT.NEAREST
}return dT.LINEAR}function dM(b){var a;if(b===THREE.RepeatWrapping){return dT.REPEAT
}if(b===THREE.ClampToEdgeWrapping){return dT.CLAMP_TO_EDGE}if(b===THREE.MirroredRepeatWrapping){return dT.MIRRORED_REPEAT
}if(b===THREE.NearestFilter){return dT.NEAREST}if(b===THREE.NearestMipMapNearestFilter){return dT.NEAREST_MIPMAP_NEAREST
}if(b===THREE.NearestMipMapLinearFilter){return dT.NEAREST_MIPMAP_LINEAR}if(b===THREE.LinearFilter){return dT.LINEAR
}if(b===THREE.LinearMipMapNearestFilter){return dT.LINEAR_MIPMAP_NEAREST}if(b===THREE.LinearMipMapLinearFilter){return dT.LINEAR_MIPMAP_LINEAR
}if(b===THREE.UnsignedByteType){return dT.UNSIGNED_BYTE}if(b===THREE.UnsignedShort4444Type){return dT.UNSIGNED_SHORT_4_4_4_4
}if(b===THREE.UnsignedShort5551Type){return dT.UNSIGNED_SHORT_5_5_5_1}if(b===THREE.UnsignedShort565Type){return dT.UNSIGNED_SHORT_5_6_5
}if(b===THREE.ByteType){return dT.BYTE}if(b===THREE.ShortType){return dT.SHORT}if(b===THREE.UnsignedShortType){return dT.UNSIGNED_SHORT
}if(b===THREE.IntType){return dT.INT}if(b===THREE.UnsignedIntType){return dT.UNSIGNED_INT
}if(b===THREE.FloatType){return dT.FLOAT}a=b4.get("OES_texture_half_float");if(a!==null){if(b===THREE.HalfFloatType){return a.HALF_FLOAT_OES
}}if(b===THREE.AlphaFormat){return dT.ALPHA}if(b===THREE.RGBFormat){return dT.RGB
}if(b===THREE.RGBAFormat){return dT.RGBA}if(b===THREE.LuminanceFormat){return dT.LUMINANCE
}if(b===THREE.LuminanceAlphaFormat){return dT.LUMINANCE_ALPHA}if(b===THREE.AddEquation){return dT.FUNC_ADD
}if(b===THREE.SubtractEquation){return dT.FUNC_SUBTRACT}if(b===THREE.ReverseSubtractEquation){return dT.FUNC_REVERSE_SUBTRACT
}if(b===THREE.ZeroFactor){return dT.ZERO}if(b===THREE.OneFactor){return dT.ONE}if(b===THREE.SrcColorFactor){return dT.SRC_COLOR
}if(b===THREE.OneMinusSrcColorFactor){return dT.ONE_MINUS_SRC_COLOR}if(b===THREE.SrcAlphaFactor){return dT.SRC_ALPHA
}if(b===THREE.OneMinusSrcAlphaFactor){return dT.ONE_MINUS_SRC_ALPHA}if(b===THREE.DstAlphaFactor){return dT.DST_ALPHA
}if(b===THREE.OneMinusDstAlphaFactor){return dT.ONE_MINUS_DST_ALPHA}if(b===THREE.DstColorFactor){return dT.DST_COLOR
}if(b===THREE.OneMinusDstColorFactor){return dT.ONE_MINUS_DST_COLOR}if(b===THREE.SrcAlphaSaturateFactor){return dT.SRC_ALPHA_SATURATE
}a=b4.get("WEBGL_compressed_texture_s3tc");if(a!==null){if(b===THREE.RGB_S3TC_DXT1_Format){return a.COMPRESSED_RGB_S3TC_DXT1_EXT
}if(b===THREE.RGBA_S3TC_DXT1_Format){return a.COMPRESSED_RGBA_S3TC_DXT1_EXT}if(b===THREE.RGBA_S3TC_DXT3_Format){return a.COMPRESSED_RGBA_S3TC_DXT3_EXT
}if(b===THREE.RGBA_S3TC_DXT5_Format){return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}}a=b4.get("WEBGL_compressed_texture_pvrtc");
if(a!==null){if(b===THREE.RGB_PVRTC_4BPPV1_Format){return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG
}if(b===THREE.RGB_PVRTC_2BPPV1_Format){return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG
}if(b===THREE.RGBA_PVRTC_4BPPV1_Format){return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG
}if(b===THREE.RGBA_PVRTC_2BPPV1_Format){return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
}}a=b4.get("EXT_blend_minmax");if(a!==null){if(b===THREE.MinEquation){return a.MIN_EXT
}if(b===THREE.MaxEquation){return a.MAX_EXT}}return 0}function bZ(a){if(dP&&a&&a.skeleton&&a.skeleton.useVertexTexture){return 1024
}else{var c=dT.getParameter(dT.MAX_VERTEX_UNIFORM_VECTORS);var b=Math.floor((c-20)/4);
var d=b;if(a!==undefined&&a instanceof THREE.SkinnedMesh){d=Math.min(a.skeleton.bones.length,d);
if(d<a.skeleton.bones.length){THREE.warn("WebGLRenderer: too many bones - "+a.skeleton.bones.length+", this GPU supports just "+d+" (try OpenGL instead of ANGLE)")
}}return d}}function cQ(b){var a=0;var e=0;var g=0;var f=0;for(var c=0,h=b.length;
c<h;c++){var d=b[c];if(d.onlyShadow||d.visible===false){continue}if(d instanceof THREE.DirectionalLight){a++
}if(d instanceof THREE.PointLight){e++}if(d instanceof THREE.SpotLight){g++}if(d instanceof THREE.HemisphereLight){f++
}}return{directional:a,point:e,spot:g,hemi:f}}function b3(b){var a=0;for(var c=0,e=b.length;
c<e;c++){var d=b[c];if(!d.castShadow){continue}if(d instanceof THREE.SpotLight){a++
}if(d instanceof THREE.DirectionalLight&&!d.shadowCascade){a++}}return a}this.initMaterial=function(){THREE.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
};this.addPrePlugin=function(){THREE.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
};this.addPostPlugin=function(){THREE.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
};this.updateShadowMap=function(){THREE.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
}};THREE.WebGLRenderTarget=function(f,e,d){this.width=f;this.height=e;d=d||{};this.wrapS=d.wrapS!==undefined?d.wrapS:THREE.ClampToEdgeWrapping;
this.wrapT=d.wrapT!==undefined?d.wrapT:THREE.ClampToEdgeWrapping;this.magFilter=d.magFilter!==undefined?d.magFilter:THREE.LinearFilter;
this.minFilter=d.minFilter!==undefined?d.minFilter:THREE.LinearMipMapLinearFilter;
this.anisotropy=d.anisotropy!==undefined?d.anisotropy:1;this.offset=new THREE.Vector2(0,0);
this.repeat=new THREE.Vector2(1,1);this.format=d.format!==undefined?d.format:THREE.RGBAFormat;
this.type=d.type!==undefined?d.type:THREE.UnsignedByteType;this.depthBuffer=d.depthBuffer!==undefined?d.depthBuffer:true;
this.stencilBuffer=d.stencilBuffer!==undefined?d.stencilBuffer:true;this.generateMipmaps=true;
this.shareDepthFrom=d.shareDepthFrom!==undefined?d.shareDepthFrom:null};THREE.WebGLRenderTarget.prototype={constructor:THREE.WebGLRenderTarget,setSize:function(c,d){this.width=c;
this.height=d},clone:function(){var b=new THREE.WebGLRenderTarget(this.width,this.height);
b.wrapS=this.wrapS;b.wrapT=this.wrapT;b.magFilter=this.magFilter;b.minFilter=this.minFilter;
b.anisotropy=this.anisotropy;b.offset.copy(this.offset);b.repeat.copy(this.repeat);
b.format=this.format;b.type=this.type;b.depthBuffer=this.depthBuffer;b.stencilBuffer=this.stencilBuffer;
b.generateMipmaps=this.generateMipmaps;b.shareDepthFrom=this.shareDepthFrom;return b
},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.WebGLRenderTarget.prototype);
THREE.WebGLRenderTargetCube=function(f,e,d){THREE.WebGLRenderTarget.call(this,f,e,d);
this.activeCubeFace=0};THREE.WebGLRenderTargetCube.prototype=Object.create(THREE.WebGLRenderTarget.prototype);
THREE.WebGLRenderTargetCube.prototype.constructor=THREE.WebGLRenderTargetCube;THREE.WebGLExtensions=function(c){var d={};
this.get=function(b){if(d[b]!==undefined){return d[b]}var a;switch(b){case"EXT_texture_filter_anisotropic":a=c.getExtension("EXT_texture_filter_anisotropic")||c.getExtension("MOZ_EXT_texture_filter_anisotropic")||c.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
break;case"WEBGL_compressed_texture_s3tc":a=c.getExtension("WEBGL_compressed_texture_s3tc")||c.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
break;case"WEBGL_compressed_texture_pvrtc":a=c.getExtension("WEBGL_compressed_texture_pvrtc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
break;default:a=c.getExtension(b)}if(a===null){THREE.warn("THREE.WebGLRenderer: "+b+" extension not supported.")
}d[b]=a;return a}};THREE.WebGLProgram=(function(){var e=0;var h=function(d){var c,j,a=[];
for(var b in d){c=d[b];if(c===false){continue}j="#define "+b+" "+c;a.push(j)}return a.join("\n")
};var g=function(b,d,l){var n={};for(var c=0,i=l.length;c<i;c++){var a=l[c];n[a]=b.getUniformLocation(d,a)
}return n};var f=function(b,d,n){var i={};for(var c=0,l=n.length;c<l;c++){var a=n[c];
i[a]=b.getAttribLocation(d,a)}return i};return function(S,ag,U,V){var O=S;var T=O.context;
var i=U.defines;var b=U.__webglShader.uniforms;var P=U.attributes;var ab=U.__webglShader.vertexShader;
var ah=U.__webglShader.fragmentShader;var d=U.index0AttributeName;if(d===undefined&&V.morphTargets===true){d="position"
}var ae="SHADOWMAP_TYPE_BASIC";if(V.shadowMapType===THREE.PCFShadowMap){ae="SHADOWMAP_TYPE_PCF"
}else{if(V.shadowMapType===THREE.PCFSoftShadowMap){ae="SHADOWMAP_TYPE_PCF_SOFT"
}}var c="ENVMAP_TYPE_CUBE";var R="ENVMAP_MODE_REFLECTION";var af="ENVMAP_BLENDING_MULTIPLY";
if(V.envMap){switch(U.envMap.mapping){case THREE.CubeReflectionMapping:case THREE.CubeRefractionMapping:c="ENVMAP_TYPE_CUBE";
break;case THREE.EquirectangularReflectionMapping:case THREE.EquirectangularRefractionMapping:c="ENVMAP_TYPE_EQUIREC";
break;case THREE.SphericalReflectionMapping:c="ENVMAP_TYPE_SPHERE";break}switch(U.envMap.mapping){case THREE.CubeRefractionMapping:case THREE.EquirectangularRefractionMapping:R="ENVMAP_MODE_REFRACTION";
break}switch(U.combine){case THREE.MultiplyOperation:af="ENVMAP_BLENDING_MULTIPLY";
break;case THREE.MixOperation:af="ENVMAP_BLENDING_MIX";break;case THREE.AddOperation:af="ENVMAP_BLENDING_ADD";
break}}var Y=(S.gammaFactor>0)?S.gammaFactor:1;var ac=h(i);var Q=T.createProgram();
var ad,Z;if(U instanceof THREE.RawShaderMaterial){ad="";Z=""}else{ad=["precision "+V.precision+" float;","precision "+V.precision+" int;",ac,V.supportsVertexTextures?"#define VERTEX_TEXTURES":"",O.gammaInput?"#define GAMMA_INPUT":"",O.gammaOutput?"#define GAMMA_OUTPUT":"","#define GAMMA_FACTOR "+Y,"#define MAX_DIR_LIGHTS "+V.maxDirLights,"#define MAX_POINT_LIGHTS "+V.maxPointLights,"#define MAX_SPOT_LIGHTS "+V.maxSpotLights,"#define MAX_HEMI_LIGHTS "+V.maxHemiLights,"#define MAX_SHADOWS "+V.maxShadows,"#define MAX_BONES "+V.maxBones,V.map?"#define USE_MAP":"",V.envMap?"#define USE_ENVMAP":"",V.envMap?"#define "+R:"",V.lightMap?"#define USE_LIGHTMAP":"",V.bumpMap?"#define USE_BUMPMAP":"",V.normalMap?"#define USE_NORMALMAP":"",V.specularMap?"#define USE_SPECULARMAP":"",V.alphaMap?"#define USE_ALPHAMAP":"",V.vertexColors?"#define USE_COLOR":"",V.flatShading?"#define FLAT_SHADED":"",V.skinning?"#define USE_SKINNING":"",V.useVertexTexture?"#define BONE_TEXTURE":"",V.morphTargets?"#define USE_MORPHTARGETS":"",V.morphNormals?"#define USE_MORPHNORMALS":"",V.wrapAround?"#define WRAP_AROUND":"",V.doubleSided?"#define DOUBLE_SIDED":"",V.flipSided?"#define FLIP_SIDED":"",V.shadowMapEnabled?"#define USE_SHADOWMAP":"",V.shadowMapEnabled?"#define "+ae:"",V.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",V.shadowMapCascade?"#define SHADOWMAP_CASCADE":"",V.sizeAttenuation?"#define USE_SIZEATTENUATION":"",V.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","attribute vec2 uv2;","#ifdef USE_COLOR","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",""].join("\n");
Z=["precision "+V.precision+" float;","precision "+V.precision+" int;",(V.bumpMap||V.normalMap||V.flatShading)?"#extension GL_OES_standard_derivatives : enable":"",ac,"#define MAX_DIR_LIGHTS "+V.maxDirLights,"#define MAX_POINT_LIGHTS "+V.maxPointLights,"#define MAX_SPOT_LIGHTS "+V.maxSpotLights,"#define MAX_HEMI_LIGHTS "+V.maxHemiLights,"#define MAX_SHADOWS "+V.maxShadows,V.alphaTest?"#define ALPHATEST "+V.alphaTest:"",O.gammaInput?"#define GAMMA_INPUT":"",O.gammaOutput?"#define GAMMA_OUTPUT":"","#define GAMMA_FACTOR "+Y,(V.useFog&&V.fog)?"#define USE_FOG":"",(V.useFog&&V.fogExp)?"#define FOG_EXP2":"",V.map?"#define USE_MAP":"",V.envMap?"#define USE_ENVMAP":"",V.envMap?"#define "+c:"",V.envMap?"#define "+R:"",V.envMap?"#define "+af:"",V.lightMap?"#define USE_LIGHTMAP":"",V.bumpMap?"#define USE_BUMPMAP":"",V.normalMap?"#define USE_NORMALMAP":"",V.specularMap?"#define USE_SPECULARMAP":"",V.alphaMap?"#define USE_ALPHAMAP":"",V.vertexColors?"#define USE_COLOR":"",V.flatShading?"#define FLAT_SHADED":"",V.metal?"#define METAL":"",V.wrapAround?"#define WRAP_AROUND":"",V.doubleSided?"#define DOUBLE_SIDED":"",V.flipSided?"#define FLIP_SIDED":"",V.shadowMapEnabled?"#define USE_SHADOWMAP":"",V.shadowMapEnabled?"#define "+ae:"",V.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",V.shadowMapCascade?"#define SHADOWMAP_CASCADE":"",V.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;",""].join("\n")
}var aa=new THREE.WebGLShader(T,T.VERTEX_SHADER,ad+ab);var N=new THREE.WebGLShader(T,T.FRAGMENT_SHADER,Z+ah);
T.attachShader(Q,aa);T.attachShader(Q,N);if(d!==undefined){T.bindAttribLocation(Q,0,d)
}T.linkProgram(Q);var M=T.getProgramInfoLog(Q);if(T.getProgramParameter(Q,T.LINK_STATUS)===false){THREE.error("THREE.WebGLProgram: shader error: "+T.getError(),"gl.VALIDATE_STATUS",T.getProgramParameter(Q,T.VALIDATE_STATUS),"gl.getPRogramInfoLog",M)
}if(M!==""){THREE.warn("THREE.WebGLProgram: gl.getProgramInfoLog()"+M)}T.deleteShader(aa);
T.deleteShader(N);var X=["viewMatrix","modelViewMatrix","projectionMatrix","normalMatrix","modelMatrix","cameraPosition","morphTargetInfluences","bindMatrix","bindMatrixInverse"];
if(V.useVertexTexture){X.push("boneTexture");X.push("boneTextureWidth");X.push("boneTextureHeight")
}else{X.push("boneGlobalMatrices")}if(V.logarithmicDepthBuffer){X.push("logDepthBufFC")
}for(var W in b){X.push(W)}this.uniforms=g(T,Q,X);X=["position","normal","uv","uv2","tangent","color","skinIndex","skinWeight","lineDistance"];
for(var u=0;u<V.maxMorphTargets;u++){X.push("morphTarget"+u)}for(var u=0;u<V.maxMorphNormals;
u++){X.push("morphNormal"+u)}for(var a in P){X.push(a)}this.attributes=f(T,Q,X);
this.attributesKeys=Object.keys(this.attributes);this.id=e++;this.code=ag;this.usedTimes=1;
this.program=Q;this.vertexShader=aa;this.fragmentShader=N;return this}})();THREE.WebGLShader=(function(){var b=function(f){var a=f.split("\n");
for(var e=0;e<a.length;e++){a[e]=(e+1)+": "+a[e]}return a.join("\n")};return function(f,h,a){var g=f.createShader(h);
f.shaderSource(g,a);f.compileShader(g);if(f.getShaderParameter(g,f.COMPILE_STATUS)===false){THREE.error("THREE.WebGLShader: Shader couldn't compile.")
}if(f.getShaderInfoLog(g)!==""){THREE.warn("THREE.WebGLShader: gl.getShaderInfoLog()",f.getShaderInfoLog(g),b(a))
}return g}})();THREE.WebGLState=function(J,D){var v=new Uint8Array(16);var F=new Uint8Array(16);
var u=null;var L=null;var O=null;var C=null;var P=null;var G=null;var A=null;var M=null;
var N=null;var H=null;var R=null;var B=null;var K=null;var E=null;var Q=null;var I=null;
this.initAttributes=function(){for(var a=0,b=v.length;a<b;a++){v[a]=0}};this.enableAttribute=function(a){v[a]=1;
if(F[a]===0){J.enableVertexAttribArray(a);F[a]=1}};this.disableUnusedAttributes=function(){for(var a=0,b=F.length;
a<b;a++){if(F[a]!==v[a]){J.disableVertexAttribArray(a);F[a]=0}}};this.setBlending=function(a,b,g,f,d,e,c){if(a!==u){if(a===THREE.NoBlending){J.disable(J.BLEND)
}else{if(a===THREE.AdditiveBlending){J.enable(J.BLEND);J.blendEquation(J.FUNC_ADD);
J.blendFunc(J.SRC_ALPHA,J.ONE)}else{if(a===THREE.SubtractiveBlending){J.enable(J.BLEND);
J.blendEquation(J.FUNC_ADD);J.blendFunc(J.ZERO,J.ONE_MINUS_SRC_COLOR)}else{if(a===THREE.MultiplyBlending){J.enable(J.BLEND);
J.blendEquation(J.FUNC_ADD);J.blendFunc(J.ZERO,J.SRC_COLOR)}else{if(a===THREE.CustomBlending){J.enable(J.BLEND)
}else{J.enable(J.BLEND);J.blendEquationSeparate(J.FUNC_ADD,J.FUNC_ADD);J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA)
}}}}}u=a}if(a===THREE.CustomBlending){d=d||b;e=e||g;c=c||f;if(b!==L||d!==P){J.blendEquationSeparate(D(b),D(d));
L=b;P=d}if(g!==O||f!==C||e!==G||c!==A){J.blendFuncSeparate(D(g),D(f),D(e),D(c));
O=g;C=f;G=e;A=c}}else{L=null;O=null;C=null;P=null;G=null;A=null}};this.setDepthTest=function(a){if(M!==a){if(a){J.enable(J.DEPTH_TEST)
}else{J.disable(J.DEPTH_TEST)}M=a}};this.setDepthWrite=function(a){if(N!==a){J.depthMask(a);
N=a}};this.setColorWrite=function(a){if(H!==a){J.colorMask(a,a,a,a);H=a}};this.setDoubleSided=function(a){if(R!==a){if(a){J.disable(J.CULL_FACE)
}else{J.enable(J.CULL_FACE)}R=a}};this.setFlipSided=function(a){if(B!==a){if(a){J.frontFace(J.CW)
}else{J.frontFace(J.CCW)}B=a}};this.setLineWidth=function(a){if(a!==K){J.lineWidth(a);
K=a}};this.setPolygonOffset=function(a,b,c){if(E!==a){if(a){J.enable(J.POLYGON_OFFSET_FILL)
}else{J.disable(J.POLYGON_OFFSET_FILL)}E=a}if(a&&(Q!==b||I!==c)){J.polygonOffset(b,c);
Q=b;I=c}};this.reset=function(){for(var a=0;a<F.length;a++){F[a]=0}u=null;M=null;
N=null;H=null;R=null;B=null}};THREE.LensFlarePlugin=function(q,B){var r=q.context;
var p,D;var t,u,o;var s;var A,v;var n=function(){var b=new Float32Array([-1,-1,0,0,1,-1,1,0,1,1,1,1,-1,1,0,1]);
var c=new Uint16Array([0,1,2,0,2,3]);p=r.createBuffer();D=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,p);
r.bufferData(r.ARRAY_BUFFER,b,r.STATIC_DRAW);r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,D);
r.bufferData(r.ELEMENT_ARRAY_BUFFER,c,r.STATIC_DRAW);A=r.createTexture();v=r.createTexture();
r.bindTexture(r.TEXTURE_2D,A);r.texImage2D(r.TEXTURE_2D,0,r.RGB,16,16,0,r.RGB,r.UNSIGNED_BYTE,null);
r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE);r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE);
r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST);r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST);
r.bindTexture(r.TEXTURE_2D,v);r.texImage2D(r.TEXTURE_2D,0,r.RGBA,16,16,0,r.RGBA,r.UNSIGNED_BYTE,null);
r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE);r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE);
r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST);r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST);
s=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS)>0;var a;if(s){a={vertexShader:["uniform lowp int renderType;","uniform vec3 screenPosition;","uniform vec2 scale;","uniform float rotation;","uniform sampler2D occlusionMap;","attribute vec2 position;","attribute vec2 uv;","varying vec2 vUV;","varying float vVisibility;","void main() {","vUV = uv;","vec2 pos = position;","if( renderType == 2 ) {","vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );","visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );","visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );","visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );","visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );","visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );","visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );","visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );","visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );","vVisibility =        visibility.r / 9.0;","vVisibility *= 1.0 - visibility.g / 9.0;","vVisibility *=       visibility.b / 9.0;","vVisibility *= 1.0 - visibility.a / 9.0;","pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;","pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;","}","gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );","}"].join("\n"),fragmentShader:["uniform lowp int renderType;","uniform sampler2D map;","uniform float opacity;","uniform vec3 color;","varying vec2 vUV;","varying float vVisibility;","void main() {","if( renderType == 0 ) {","gl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );","} else if( renderType == 1 ) {","gl_FragColor = texture2D( map, vUV );","} else {","vec4 texture = texture2D( map, vUV );","texture.a *= opacity * vVisibility;","gl_FragColor = texture;","gl_FragColor.rgb *= color;","}","}"].join("\n")}
}else{a={vertexShader:["uniform lowp int renderType;","uniform vec3 screenPosition;","uniform vec2 scale;","uniform float rotation;","attribute vec2 position;","attribute vec2 uv;","varying vec2 vUV;","void main() {","vUV = uv;","vec2 pos = position;","if( renderType == 2 ) {","pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;","pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;","}","gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );","}"].join("\n"),fragmentShader:["precision mediump float;","uniform lowp int renderType;","uniform sampler2D map;","uniform sampler2D occlusionMap;","uniform float opacity;","uniform vec3 color;","varying vec2 vUV;","void main() {","if( renderType == 0 ) {","gl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );","} else if( renderType == 1 ) {","gl_FragColor = texture2D( map, vUV );","} else {","float visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;","visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;","visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;","visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;","visibility = ( 1.0 - visibility / 4.0 );","vec4 texture = texture2D( map, vUV );","texture.a *= opacity * visibility;","gl_FragColor = texture;","gl_FragColor.rgb *= color;","}","}"].join("\n")}
}t=C(a);u={vertex:r.getAttribLocation(t,"position"),uv:r.getAttribLocation(t,"uv")};
o={renderType:r.getUniformLocation(t,"renderType"),map:r.getUniformLocation(t,"map"),occlusionMap:r.getUniformLocation(t,"occlusionMap"),opacity:r.getUniformLocation(t,"opacity"),color:r.getUniformLocation(t,"color"),scale:r.getUniformLocation(t,"scale"),rotation:r.getUniformLocation(t,"rotation"),screenPosition:r.getUniformLocation(t,"screenPosition")}
};this.render=function(b,j,K,N){if(B.length===0){return}var e=new THREE.Vector3();
var L=N/K,c=K*0.5,d=N*0.5;var i=16/N,a=new THREE.Vector2(i*L,i);var l=new THREE.Vector3(1,1,0),J=new THREE.Vector2(1,1);
if(t===undefined){n()}r.useProgram(t);r.enableVertexAttribArray(u.vertex);r.enableVertexAttribArray(u.uv);
r.uniform1i(o.occlusionMap,0);r.uniform1i(o.map,1);r.bindBuffer(r.ARRAY_BUFFER,p);
r.vertexAttribPointer(u.vertex,2,r.FLOAT,false,2*8,0);r.vertexAttribPointer(u.uv,2,r.FLOAT,false,2*8,8);
r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,D);r.disable(r.CULL_FACE);r.depthMask(false);
for(var k=0,f=B.length;k<f;k++){i=16/N;a.set(i*L,i);var M=B[k];e.set(M.matrixWorld.elements[12],M.matrixWorld.elements[13],M.matrixWorld.elements[14]);
e.applyMatrix4(j.matrixWorldInverse);e.applyProjection(j.projectionMatrix);l.copy(e);
J.x=l.x*c+c;J.y=l.y*d+d;if(s||(J.x>0&&J.x<K&&J.y>0&&J.y<N)){r.activeTexture(r.TEXTURE1);
r.bindTexture(r.TEXTURE_2D,A);r.copyTexImage2D(r.TEXTURE_2D,0,r.RGB,J.x-8,J.y-8,16,16,0);
r.uniform1i(o.renderType,0);r.uniform2f(o.scale,a.x,a.y);r.uniform3f(o.screenPosition,l.x,l.y,l.z);
r.disable(r.BLEND);r.enable(r.DEPTH_TEST);r.drawElements(r.TRIANGLES,6,r.UNSIGNED_SHORT,0);
r.activeTexture(r.TEXTURE0);r.bindTexture(r.TEXTURE_2D,v);r.copyTexImage2D(r.TEXTURE_2D,0,r.RGBA,J.x-8,J.y-8,16,16,0);
r.uniform1i(o.renderType,1);r.disable(r.DEPTH_TEST);r.activeTexture(r.TEXTURE1);
r.bindTexture(r.TEXTURE_2D,A);r.drawElements(r.TRIANGLES,6,r.UNSIGNED_SHORT,0);
M.positionScreen.copy(l);if(M.customUpdateCallback){M.customUpdateCallback(M)}else{M.updateLensFlares()
}r.uniform1i(o.renderType,2);r.enable(r.BLEND);for(var m=0,h=M.lensFlares.length;
m<h;m++){var g=M.lensFlares[m];if(g.opacity>0.001&&g.scale>0.001){l.x=g.x;l.y=g.y;
l.z=g.z;i=g.size*g.scale/N;a.x=i*L;a.y=i;r.uniform3f(o.screenPosition,l.x,l.y,l.z);
r.uniform2f(o.scale,a.x,a.y);r.uniform1f(o.rotation,g.rotation);r.uniform1f(o.opacity,g.opacity);
r.uniform3f(o.color,g.color.r,g.color.g,g.color.b);q.state.setBlending(g.blending,g.blendEquation,g.blendSrc,g.blendDst);
q.setTexture(g.texture,1);r.drawElements(r.TRIANGLES,6,r.UNSIGNED_SHORT,0)}}}}r.enable(r.CULL_FACE);
r.enable(r.DEPTH_TEST);r.depthMask(true);q.resetGLState()};function C(c){var d=r.createProgram();
var e=r.createShader(r.FRAGMENT_SHADER);var a=r.createShader(r.VERTEX_SHADER);var b="precision "+q.getPrecision()+" float;\n";
r.shaderSource(e,b+c.fragmentShader);r.shaderSource(a,b+c.vertexShader);r.compileShader(e);
r.compileShader(a);r.attachShader(d,e);r.attachShader(d,a);r.linkProgram(d);return d
}};THREE.ShadowMapPlugin=function(F,R,E,O){var Q=F.context;var J,B,V,T,G=new THREE.Frustum(),U=new THREE.Matrix4(),H=new THREE.Vector3(),D=new THREE.Vector3(),P=new THREE.Vector3(),I=[];
var M=THREE.ShaderLib.depthRGBA;var C=THREE.UniformsUtils.clone(M.uniforms);J=new THREE.ShaderMaterial({uniforms:C,vertexShader:M.vertexShader,fragmentShader:M.fragmentShader});
B=new THREE.ShaderMaterial({uniforms:C,vertexShader:M.vertexShader,fragmentShader:M.fragmentShader,morphTargets:true});
V=new THREE.ShaderMaterial({uniforms:C,vertexShader:M.vertexShader,fragmentShader:M.fragmentShader,skinning:true});
T=new THREE.ShaderMaterial({uniforms:C,vertexShader:M.vertexShader,fragmentShader:M.fragmentShader,morphTargets:true,skinning:true});
J._shadowPass=true;B._shadowPass=true;V._shadowPass=true;T._shadowPass=true;this.render=function(d,f){if(F.shadowMapEnabled===false){return
}var g,r,h,e,m,v,c,a,j,p,ad,af,t,b=[],i=0,ae=null;Q.clearColor(1,1,1,1);Q.disable(Q.BLEND);
Q.enable(Q.CULL_FACE);Q.frontFace(Q.CCW);if(F.shadowMapCullFace===THREE.CullFaceFront){Q.cullFace(Q.FRONT)
}else{Q.cullFace(Q.BACK)}F.state.setDepthTest(true);for(g=0,r=R.length;g<r;g++){t=R[g];
if(!t.castShadow){continue}if((t instanceof THREE.DirectionalLight)&&t.shadowCascade){for(m=0;
m<t.shadowCascadeCount;m++){var u;if(!t.shadowCascadeArray[m]){u=K(t,m);u.originalCamera=f;
var k=new THREE.Gyroscope();k.position.copy(t.shadowCascadeOffset);k.add(u);k.add(u.target);
f.add(k);t.shadowCascadeArray[m]=u}else{u=t.shadowCascadeArray[m]}A(t,m);b[i]=u;
i++}}else{b[i]=t;i++}}for(g=0,r=b.length;g<r;g++){t=b[g];if(!t.shadowMap){var n=THREE.LinearFilter;
if(F.shadowMapType===THREE.PCFSoftShadowMap){n=THREE.NearestFilter}var l={minFilter:n,magFilter:n,format:THREE.RGBAFormat};
t.shadowMap=new THREE.WebGLRenderTarget(t.shadowMapWidth,t.shadowMapHeight,l);t.shadowMapSize=new THREE.Vector2(t.shadowMapWidth,t.shadowMapHeight);
t.shadowMatrix=new THREE.Matrix4()}if(!t.shadowCamera){if(t instanceof THREE.SpotLight){t.shadowCamera=new THREE.PerspectiveCamera(t.shadowCameraFov,t.shadowMapWidth/t.shadowMapHeight,t.shadowCameraNear,t.shadowCameraFar)
}else{if(t instanceof THREE.DirectionalLight){t.shadowCamera=new THREE.OrthographicCamera(t.shadowCameraLeft,t.shadowCameraRight,t.shadowCameraTop,t.shadowCameraBottom,t.shadowCameraNear,t.shadowCameraFar)
}else{THREE.error("THREE.ShadowMapPlugin: Unsupported light type for shadow",t);
continue}}d.add(t.shadowCamera);if(d.autoUpdate===true){d.updateMatrixWorld()}}if(t.shadowCameraVisible&&!t.cameraHelper){t.cameraHelper=new THREE.CameraHelper(t.shadowCamera);
d.add(t.cameraHelper)}if(t.isVirtual&&u.originalCamera==f){S(f,t)}v=t.shadowMap;
c=t.shadowMatrix;a=t.shadowCamera;a.position.setFromMatrixPosition(t.matrixWorld);
P.setFromMatrixPosition(t.target.matrixWorld);a.lookAt(P);a.updateMatrixWorld();
a.matrixWorldInverse.getInverse(a.matrixWorld);if(t.cameraHelper){t.cameraHelper.visible=t.shadowCameraVisible
}if(t.shadowCameraVisible){t.cameraHelper.update()}c.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);
c.multiply(a.projectionMatrix);c.multiply(a.matrixWorldInverse);U.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse);
G.setFromMatrix(U);F.setRenderTarget(v);F.clear();I.length=0;N(d,d,a);var ab,s,q;
for(h=0,e=I.length;h<e;h++){ad=I[h];af=ad.object;j=ad.buffer;ab=L(af);s=af.geometry.morphTargets!==undefined&&af.geometry.morphTargets.length>0&&ab.morphTargets;
q=af instanceof THREE.SkinnedMesh&&ab.skinning;if(af.customDepthMaterial){p=af.customDepthMaterial
}else{if(q){p=s?T:V}else{if(s){p=B}else{p=J}}}F.setMaterialFaces(ab);if(j instanceof THREE.BufferGeometry){F.renderBufferDirect(a,R,ae,p,j,af)
}else{F.renderBuffer(a,R,ae,p,j,af)}}for(h=0,e=O.length;h<e;h++){ad=O[h];af=ad.object;
if(af.visible&&af.castShadow){af._modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,af.matrixWorld);
F.renderImmediateObject(a,R,ae,J,af)}}}var ac=F.getClearColor(),o=F.getClearAlpha();
Q.clearColor(ac.r,ac.g,ac.b,o);Q.enable(Q.BLEND);if(F.shadowMapCullFace===THREE.CullFaceFront){Q.cullFace(Q.BACK)
}F.resetGLState()};function N(c,g,d){if(g.visible){var e=E[g.id];if(e&&g.castShadow&&(g.frustumCulled===false||G.intersectsObject(g)===true)){for(var f=0,a=e.length;
f<a;f++){var b=e[f];g._modelViewMatrix.multiplyMatrices(d.matrixWorldInverse,g.matrixWorld);
I.push(b)}}for(var f=0,a=g.children.length;f<a;f++){N(c,g.children[f],d)}}}function K(h,f){var a=new THREE.DirectionalLight();
a.isVirtual=true;a.onlyShadow=true;a.castShadow=true;a.shadowCameraNear=h.shadowCameraNear;
a.shadowCameraFar=h.shadowCameraFar;a.shadowCameraLeft=h.shadowCameraLeft;a.shadowCameraRight=h.shadowCameraRight;
a.shadowCameraBottom=h.shadowCameraBottom;a.shadowCameraTop=h.shadowCameraTop;a.shadowCameraVisible=h.shadowCameraVisible;
a.shadowDarkness=h.shadowDarkness;a.shadowBias=h.shadowCascadeBias[f];a.shadowMapWidth=h.shadowCascadeWidth[f];
a.shadowMapHeight=h.shadowCascadeHeight[f];a.pointsWorld=[];a.pointsFrustum=[];
var c=a.pointsWorld,g=a.pointsFrustum;for(var d=0;d<8;d++){c[d]=new THREE.Vector3();
g[d]=new THREE.Vector3()}var b=h.shadowCascadeNearZ[f];var e=h.shadowCascadeFarZ[f];
g[0].set(-1,-1,b);g[1].set(1,-1,b);g[2].set(-1,1,b);g[3].set(1,1,b);g[4].set(-1,-1,e);
g[5].set(1,-1,e);g[6].set(-1,1,e);g[7].set(1,1,e);return a}function A(f,d){var a=f.shadowCascadeArray[d];
a.position.copy(f.position);a.target.position.copy(f.target.position);a.lookAt(a.target);
a.shadowCameraVisible=f.shadowCameraVisible;a.shadowDarkness=f.shadowDarkness;a.shadowBias=f.shadowCascadeBias[d];
var b=f.shadowCascadeNearZ[d];var c=f.shadowCascadeFarZ[d];var e=a.pointsFrustum;
e[0].z=b;e[1].z=b;e[2].z=b;e[3].z=b;e[4].z=c;e[5].z=c;e[6].z=c;e[7].z=c}function S(e,a){var c=a.shadowCamera,g=a.pointsFrustum,d=a.pointsWorld;
H.set(Infinity,Infinity,Infinity);D.set(-Infinity,-Infinity,-Infinity);for(var f=0;
f<8;f++){var b=d[f];b.copy(g[f]);b.unproject(e);b.applyMatrix4(c.matrixWorldInverse);
if(b.x<H.x){H.x=b.x}if(b.x>D.x){D.x=b.x}if(b.y<H.y){H.y=b.y}if(b.y>D.y){D.y=b.y
}if(b.z<H.z){H.z=b.z}if(b.z>D.z){D.z=b.z}}c.left=H.x;c.right=D.x;c.top=D.y;c.bottom=H.y;
c.updateProjectionMatrix()}function L(a){return a.material instanceof THREE.MeshFaceMaterial?a.material.materials[0]:a.material
}};THREE.SpritePlugin=function(t,u){var B=t.context;var s,H;var D,E,q;var v;var A=new THREE.Vector3();
var F=new THREE.Quaternion();var C=new THREE.Vector3();var p=function(){var b=new Float32Array([-0.5,-0.5,0,0,0.5,-0.5,1,0,0.5,0.5,1,1,-0.5,0.5,0,1]);
var d=new Uint16Array([0,1,2,0,2,3]);s=B.createBuffer();H=B.createBuffer();B.bindBuffer(B.ARRAY_BUFFER,s);
B.bufferData(B.ARRAY_BUFFER,b,B.STATIC_DRAW);B.bindBuffer(B.ELEMENT_ARRAY_BUFFER,H);
B.bufferData(B.ELEMENT_ARRAY_BUFFER,d,B.STATIC_DRAW);D=G();E={position:B.getAttribLocation(D,"position"),uv:B.getAttribLocation(D,"uv")};
q={uvOffset:B.getUniformLocation(D,"uvOffset"),uvScale:B.getUniformLocation(D,"uvScale"),rotation:B.getUniformLocation(D,"rotation"),scale:B.getUniformLocation(D,"scale"),color:B.getUniformLocation(D,"color"),map:B.getUniformLocation(D,"map"),opacity:B.getUniformLocation(D,"opacity"),modelViewMatrix:B.getUniformLocation(D,"modelViewMatrix"),projectionMatrix:B.getUniformLocation(D,"projectionMatrix"),fogType:B.getUniformLocation(D,"fogType"),fogDensity:B.getUniformLocation(D,"fogDensity"),fogNear:B.getUniformLocation(D,"fogNear"),fogFar:B.getUniformLocation(D,"fogFar"),fogColor:B.getUniformLocation(D,"fogColor"),alphaTest:B.getUniformLocation(D,"alphaTest")};
var c=document.createElement("canvas");c.width=8;c.height=8;var a=c.getContext("2d");
a.fillStyle="white";a.fillRect(0,0,8,8);v=new THREE.Texture(c);v.needsUpdate=true
};this.render=function(i,e){if(u.length===0){return}if(D===undefined){p()}B.useProgram(D);
B.enableVertexAttribArray(E.position);B.enableVertexAttribArray(E.uv);B.disable(B.CULL_FACE);
B.enable(B.BLEND);B.bindBuffer(B.ARRAY_BUFFER,s);B.vertexAttribPointer(E.position,2,B.FLOAT,false,2*8,0);
B.vertexAttribPointer(E.uv,2,B.FLOAT,false,2*8,8);B.bindBuffer(B.ELEMENT_ARRAY_BUFFER,H);
B.uniformMatrix4fv(q.projectionMatrix,false,e.projectionMatrix.elements);B.activeTexture(B.TEXTURE0);
B.uniform1i(q.map,0);var h=0;var a=0;var f=i.fog;if(f){B.uniform3f(q.fogColor,f.color.r,f.color.g,f.color.b);
if(f instanceof THREE.Fog){B.uniform1f(q.fogNear,f.near);B.uniform1f(q.fogFar,f.far);
B.uniform1i(q.fogType,1);h=1;a=1}else{if(f instanceof THREE.FogExp2){B.uniform1f(q.fogDensity,f.density);
B.uniform1i(q.fogType,2);h=2;a=2}}}else{B.uniform1i(q.fogType,0);h=0;a=0}for(var j=0,b=u.length;
j<b;j++){var d=u[j];d._modelViewMatrix.multiplyMatrices(e.matrixWorldInverse,d.matrixWorld);
d.z=-d._modelViewMatrix.elements[14]}u.sort(r);var c=[];for(var j=0,b=u.length;
j<b;j++){var d=u[j];var g=d.material;B.uniform1f(q.alphaTest,g.alphaTest);B.uniformMatrix4fv(q.modelViewMatrix,false,d._modelViewMatrix.elements);
d.matrixWorld.decompose(A,F,C);c[0]=C.x;c[1]=C.y;var k=0;if(i.fog&&g.fog){k=a}if(h!==k){B.uniform1i(q.fogType,k);
h=k}if(g.map!==null){B.uniform2f(q.uvOffset,g.map.offset.x,g.map.offset.y);B.uniform2f(q.uvScale,g.map.repeat.x,g.map.repeat.y)
}else{B.uniform2f(q.uvOffset,0,0);B.uniform2f(q.uvScale,1,1)}B.uniform1f(q.opacity,g.opacity);
B.uniform3f(q.color,g.color.r,g.color.g,g.color.b);B.uniform1f(q.rotation,g.rotation);
B.uniform2fv(q.scale,c);t.state.setBlending(g.blending,g.blendEquation,g.blendSrc,g.blendDst);
t.state.setDepthTest(g.depthTest);t.state.setDepthWrite(g.depthWrite);if(g.map&&g.map.image&&g.map.image.width){t.setTexture(g.map,0)
}else{t.setTexture(v,0)}B.drawElements(B.TRIANGLES,6,B.UNSIGNED_SHORT,0)}B.enable(B.CULL_FACE);
t.resetGLState()};function G(){var b=B.createProgram();var a=B.createShader(B.VERTEX_SHADER);
var c=B.createShader(B.FRAGMENT_SHADER);B.shaderSource(a,["precision "+t.getPrecision()+" float;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform float rotation;","uniform vec2 scale;","uniform vec2 uvOffset;","uniform vec2 uvScale;","attribute vec2 position;","attribute vec2 uv;","varying vec2 vUV;","void main() {","vUV = uvOffset + uv * uvScale;","vec2 alignedPosition = position * scale;","vec2 rotatedPosition;","rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;","rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;","vec4 finalPosition;","finalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );","finalPosition.xy += rotatedPosition;","finalPosition = projectionMatrix * finalPosition;","gl_Position = finalPosition;","}"].join("\n"));
B.shaderSource(c,["precision "+t.getPrecision()+" float;","uniform vec3 color;","uniform sampler2D map;","uniform float opacity;","uniform int fogType;","uniform vec3 fogColor;","uniform float fogDensity;","uniform float fogNear;","uniform float fogFar;","uniform float alphaTest;","varying vec2 vUV;","void main() {","vec4 texture = texture2D( map, vUV );","if ( texture.a < alphaTest ) discard;","gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );","if ( fogType > 0 ) {","float depth = gl_FragCoord.z / gl_FragCoord.w;","float fogFactor = 0.0;","if ( fogType == 1 ) {","fogFactor = smoothstep( fogNear, fogFar, depth );","} else {","const float LOG2 = 1.442695;","float fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );","fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );","}","gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );","}","}"].join("\n"));
B.compileShader(a);B.compileShader(c);B.attachShader(b,a);B.attachShader(b,c);B.linkProgram(b);
return b}function r(a,b){if(a.z!==b.z){return b.z-a.z}else{return b.id-a.id}}};
THREE.GeometryUtils={merge:function(h,e,g){THREE.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
var f;if(e instanceof THREE.Mesh){e.matrixAutoUpdate&&e.updateMatrix();f=e.matrix;
e=e.geometry}h.merge(e,f,g)},center:function(b){THREE.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");
return b.center()}};THREE.ImageUtils={crossOrigin:undefined,loadTexture:function(l,g,k,i){var h=new THREE.ImageLoader();
h.crossOrigin=this.crossOrigin;var j=new THREE.Texture(undefined,g);h.load(l,function(a){j.image=a;
j.needsUpdate=true;if(k){k(j)}},undefined,function(a){if(i){i(a)}});j.sourceFile=l;
return j},loadTextureCube:function(r,v,o,s){var n=[];var i=new THREE.ImageLoader();
i.crossOrigin=this.crossOrigin;var q=new THREE.CubeTexture(n,v);q.flipY=false;var t=0;
var p=function(a){i.load(r[a],function(b){q.images[a]=b;t+=1;if(t===6){q.needsUpdate=true;
if(o){o(q)}}},undefined,s)};for(var u=0,m=r.length;u<m;++u){p(u)}return q},loadCompressedTexture:function(){THREE.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
},loadCompressedTextureCube:function(){THREE.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
},getNormalMap:function(P,J){var ac=function(b,a){return[b[1]*a[2]-b[2]*a[1],b[2]*a[0]-b[0]*a[2],b[0]*a[1]-b[1]*a[0]]
};var i=function(b,a){return[b[0]-a[0],b[1]-a[1],b[2]-a[2]]};var L=function(b){var a=Math.sqrt(b[0]*b[0]+b[1]*b[1]+b[2]*b[2]);
return[b[0]/a,b[1]/a,b[2]/a]};J=J|1;var N=P.width;var R=P.height;var ab=document.createElement("canvas");
ab.width=N;ab.height=R;var ad=ab.getContext("2d");ad.drawImage(P,0,0);var H=ad.getImageData(0,0,N,R).data;
var Q=ad.createImageData(N,R);var W=Q.data;for(var U=0;U<N;U++){for(var V=0;V<R;
V++){var aa=V-1<0?0:V-1;var Y=V+1>R-1?R-1:V+1;var Z=U-1<0?0:U-1;var X=U+1>N-1?N-1:U+1;
var G=[];var K=[0,0,H[(V*N+U)*4]/255*J];G.push([-1,0,H[(V*N+Z)*4]/255*J]);G.push([-1,-1,H[(aa*N+Z)*4]/255*J]);
G.push([0,-1,H[(aa*N+U)*4]/255*J]);G.push([1,-1,H[(aa*N+X)*4]/255*J]);G.push([1,0,H[(V*N+X)*4]/255*J]);
G.push([1,1,H[(Y*N+X)*4]/255*J]);G.push([0,1,H[(Y*N+U)*4]/255*J]);G.push([-1,1,H[(Y*N+Z)*4]/255*J]);
var S=[];var O=G.length;for(var I=0;I<O;I++){var ae=G[I];var af=G[(I+1)%O];ae=i(ae,K);
af=i(af,K);S.push(L(ac(ae,af)))}var M=[0,0,0];for(var I=0;I<S.length;I++){M[0]+=S[I][0];
M[1]+=S[I][1];M[2]+=S[I][2]}M[0]/=S.length;M[1]/=S.length;M[2]/=S.length;var T=(V*N+U)*4;
W[T]=((M[0]+1)/2*255)|0;W[T+1]=((M[1]+1)/2*255)|0;W[T+2]=(M[2]*255)|0;W[T+3]=255
}}ad.putImageData(Q,0,0);return ab},generateDataTexture:function(s,g,r){var b=s*g;
var p=new Uint8Array(3*b);var t=Math.floor(r.r*255);var o=Math.floor(r.g*255);var i=Math.floor(r.b*255);
for(var q=0;q<b;q++){p[q*3]=t;p[q*3+1]=o;p[q*3+2]=i}var n=new THREE.DataTexture(p,s,g,THREE.RGBFormat);
n.needsUpdate=true;return n}};THREE.SceneUtils={createMultiMaterialObject:function(h,f){var i=new THREE.Object3D();
for(var j=0,g=f.length;j<g;j++){i.add(new THREE.Mesh(h,f[j]))}return i},detach:function(f,e,d){f.applyMatrix(e.matrixWorld);
e.remove(f);d.add(f)},attach:function(g,h,f){var e=new THREE.Matrix4();e.getInverse(f.matrixWorld);
g.applyMatrix(e);h.remove(g);f.add(g)}};THREE.FontUtils={faces:{},face:"helvetiker",weight:"normal",style:"normal",size:150,divisions:10,getFace:function(){try{return this.faces[this.face][this.weight][this.style]
}catch(b){throw"The font "+this.face+" with "+this.weight+" weight and "+this.style+" style is missing."
}},loadFace:function(f){var e=f.familyName.toLowerCase();var d=this;d.faces[e]=d.faces[e]||{};
d.faces[e][f.cssFontWeight]=d.faces[e][f.cssFontWeight]||{};d.faces[e][f.cssFontWeight][f.cssFontStyle]=f;
d.faces[e][f.cssFontWeight][f.cssFontStyle]=f;return f},drawText:function(m){var q,o=this.getFace(),t=this.size/o.resolution,r=0,n=String(m).split(""),u=n.length;
var s=[];for(q=0;q<u;q++){var i=new THREE.Path();var p=this.extractGlyphPoints(n[q],o,t,r,i);
r+=p.offset;s.push(p.path)}var v=r/2;return{paths:s,offset:v}},extractGlyphPoints:function(K,Y,i,ab,O){var c=[];
var t,L,ad,ac,J,ae,I,M,W,X,Z,aa,Q,N,T,P,U,S,af,V=Y.glyphs[K]||Y.glyphs["?"];if(!V){return
}if(V.o){ac=V._cachedOutline||(V._cachedOutline=V.o.split(" "));ae=ac.length;I=i;
M=i;for(t=0;t<ae;){J=ac[t++];switch(J){case"m":W=ac[t++]*I+ab;X=ac[t++]*M;O.moveTo(W,X);
break;case"l":W=ac[t++]*I+ab;X=ac[t++]*M;O.lineTo(W,X);break;case"q":Z=ac[t++]*I+ab;
aa=ac[t++]*M;T=ac[t++]*I+ab;P=ac[t++]*M;O.quadraticCurveTo(T,P,Z,aa);af=c[c.length-1];
if(af){Q=af.x;N=af.y;for(L=1,ad=this.divisions;L<=ad;L++){var R=L/ad;THREE.Shape.Utils.b2(R,Q,T,Z);
THREE.Shape.Utils.b2(R,N,P,aa)}}break;case"b":Z=ac[t++]*I+ab;aa=ac[t++]*M;T=ac[t++]*I+ab;
P=ac[t++]*M;U=ac[t++]*I+ab;S=ac[t++]*M;O.bezierCurveTo(T,P,U,S,Z,aa);af=c[c.length-1];
if(af){Q=af.x;N=af.y;for(L=1,ad=this.divisions;L<=ad;L++){var R=L/ad;THREE.Shape.Utils.b3(R,Q,T,U,Z);
THREE.Shape.Utils.b3(R,N,P,S,aa)}}break}}}return{offset:V.ha*i,path:O}}};THREE.FontUtils.generateShapes=function(p,o){o=o||{};
var m=o.size!==undefined?o.size:100;var q=o.curveSegments!==undefined?o.curveSegments:4;
var u=o.font!==undefined?o.font:"helvetiker";var r=o.weight!==undefined?o.weight:"normal";
var B=o.style!==undefined?o.style:"normal";THREE.FontUtils.size=m;THREE.FontUtils.divisions=q;
THREE.FontUtils.face=u;THREE.FontUtils.weight=r;THREE.FontUtils.style=B;var s=THREE.FontUtils.drawText(p);
var n=s.paths;var v=[];for(var A=0,t=n.length;A<t;A++){Array.prototype.push.apply(v,n[A].toShapes())
}return v};(function(j){var f=1e-10;var h=function(I,b){var J=I.length;if(J<3){return null
}var a=[],n=[],F=[];var t,d,s;if(i(I)>0){for(d=0;d<J;d++){n[d]=d}}else{for(d=0;
d<J;d++){n[d]=(J-1)-d}}var G=J;var H=2*G;for(d=G-1;G>2;){if((H--)<=0){THREE.warn("THREE.FontUtils: Warning, unable to triangulate polygon! in Triangulate.process()");
if(b){return F}return a}t=d;if(G<=t){t=0}d=t+1;if(G<=d){d=0}s=d+1;if(G<=s){s=0}if(g(I,t,d,s,G,n)){var u,v,E,c,e;
u=n[t];v=n[d];E=n[s];a.push([I[u],I[v],I[E]]);F.push([n[t],n[d],n[s]]);for(c=d,e=d+1;
e<G;c++,e++){n[c]=n[e]}G--;H=2*G}}if(b){return F}return a};var i=function(d){var a=d.length;
var e=0;for(var b=a-1,c=0;c<a;b=c++){e+=d[b].x*d[c].y-d[c].x*d[b].y}return e*0.5
};var g=function(u,X,Y,V,v,a){var R;var ac,Z,c,e;var ai,ak,S,T;ac=u[a[X]].x;Z=u[a[X]].y;
c=u[a[Y]].x;e=u[a[Y]].y;ai=u[a[V]].x;ak=u[a[V]].y;if(f>(((c-ac)*(ak-Z))-((e-Z)*(ai-ac)))){return false
}var aj,al,ab,W,b,d;var af,ag,n,p,ad,ae;var ah,aa,U;aj=ai-c;al=ak-e;ab=ac-ai;W=Z-ak;
b=c-ac;d=e-Z;for(R=0;R<v;R++){S=u[a[R]].x;T=u[a[R]].y;if(((S===ac)&&(T===Z))||((S===c)&&(T===e))||((S===ai)&&(T===ak))){continue
}af=S-ac;ag=T-Z;n=S-c;p=T-e;ad=S-ai;ae=T-ak;U=aj*p-al*n;ah=b*ag-d*af;aa=ab*ae-W*ad;
if((U>=-f)&&(aa>=-f)&&(ah>=-f)){return false}}return true};j.Triangulate=h;j.Triangulate.area=i;
return j})(THREE.FontUtils);self._typeface_js={faces:THREE.FontUtils.faces,loadFace:THREE.FontUtils.loadFace};
THREE.typeface_js=self._typeface_js;THREE.Audio=function(b){THREE.Object3D.call(this);
this.type="Audio";this.context=b.context;this.source=this.context.createBufferSource();
this.source.onended=this.onEnded.bind(this);this.gain=this.context.createGain();
this.gain.connect(this.context.destination);this.panner=this.context.createPanner();
this.panner.connect(this.gain);this.autoplay=false;this.startTime=0;this.isPlaying=false
};THREE.Audio.prototype=Object.create(THREE.Object3D.prototype);THREE.Audio.prototype.constructor=THREE.Audio;
THREE.Audio.prototype.load=function(e){var d=this;var f=new XMLHttpRequest();f.open("GET",e,true);
f.responseType="arraybuffer";f.onload=function(a){d.context.decodeAudioData(this.response,function(b){d.source.buffer=b;
if(d.autoplay){d.play()}})};f.send();return this};THREE.Audio.prototype.play=function(){if(this.isPlaying===true){THREE.warn("THREE.Audio: Audio is already playing.");
return}var b=this.context.createBufferSource();b.buffer=this.source.buffer;b.loop=this.source.loop;
b.onended=this.source.onended;b.connect(this.panner);b.start(0,this.startTime);
this.isPlaying=true;this.source=b};THREE.Audio.prototype.pause=function(){this.source.stop();
this.startTime=this.context.currentTime};THREE.Audio.prototype.stop=function(){this.source.stop();
this.startTime=0};THREE.Audio.prototype.onEnded=function(){this.isPlaying=false
};THREE.Audio.prototype.setLoop=function(b){this.source.loop=b};THREE.Audio.prototype.setRefDistance=function(b){this.panner.refDistance=b
};THREE.Audio.prototype.setRolloffFactor=function(b){this.panner.rolloffFactor=b
};THREE.Audio.prototype.setVolume=function(b){this.gain.gain.value=b};THREE.Audio.prototype.updateMatrixWorld=(function(){var b=new THREE.Vector3();
return function(a){THREE.Object3D.prototype.updateMatrixWorld.call(this,a);b.setFromMatrixPosition(this.matrixWorld);
this.panner.setPosition(b.x,b.y,b.z)}})();THREE.AudioListener=function(){THREE.Object3D.call(this);
this.type="AudioListener";this.context=new (window.AudioContext||window.webkitAudioContext)()
};THREE.AudioListener.prototype=Object.create(THREE.Object3D.prototype);THREE.AudioListener.prototype.constructor=THREE.AudioListener;
THREE.AudioListener.prototype.updateMatrixWorld=(function(){var g=new THREE.Vector3();
var j=new THREE.Quaternion();var i=new THREE.Vector3();var l=new THREE.Vector3();
var k=new THREE.Vector3();var h=new THREE.Vector3();return function(a){THREE.Object3D.prototype.updateMatrixWorld.call(this,a);
var b=this.context.listener;var c=this.up;this.matrixWorld.decompose(g,j,i);l.set(0,0,-1).applyQuaternion(j);
k.subVectors(g,h);b.setPosition(g.x,g.y,g.z);b.setOrientation(l.x,l.y,l.z,c.x,c.y,c.z);
b.setVelocity(k.x,k.y,k.z);h.copy(g)}})();THREE.Curve=function(){};THREE.Curve.prototype.getPoint=function(b){THREE.warn("THREE.Curve: Warning, getPoint() not implemented!");
return null};THREE.Curve.prototype.getPointAt=function(d){var c=this.getUtoTmapping(d);
return this.getPoint(c)};THREE.Curve.prototype.getPoints=function(e){if(!e){e=5
}var f,d=[];for(f=0;f<=e;f++){d.push(this.getPoint(f/e))}return d};THREE.Curve.prototype.getSpacedPoints=function(e){if(!e){e=5
}var f,d=[];for(f=0;f<=e;f++){d.push(this.getPointAt(f/e))}return d};THREE.Curve.prototype.getLength=function(){var b=this.getLengths();
return b[b.length-1]};THREE.Curve.prototype.getLengths=function(g){if(!g){g=(this.__arcLengthDivisions)?(this.__arcLengthDivisions):200
}if(this.cacheArcLengths&&(this.cacheArcLengths.length==g+1)&&!this.needsUpdate){return this.cacheArcLengths
}this.needsUpdate=false;var h=[];var i,k=this.getPoint(0);var j,l=0;h.push(0);for(j=1;
j<=g;j++){i=this.getPoint(j/g);l+=i.distanceTo(k);h.push(l);k=i}this.cacheArcLengths=h;
return h};THREE.Curve.prototype.updateArcLengths=function(){this.needsUpdate=true;
this.getLengths()};THREE.Curve.prototype.getUtoTmapping=function(q,F){var E=this.getLengths();
var B=0,t=E.length;var s;if(F){s=F}else{s=q*E[t-1]}var u=0,C=t-1,r;while(u<=C){B=Math.floor(u+(C-u)/2);
r=E[B]-s;if(r<0){u=B+1}else{if(r>0){C=B-1}else{C=B;break}}}B=C;if(E[B]==s){var i=B/(t-1);
return i}var A=E[B];var p=E[B+1];var D=p-A;var v=(s-A)/D;var i=(B+v)/(t-1);return i
};THREE.Curve.prototype.getTangent=function(h){var j=0.0001;var m=h-j;var n=h+j;
if(m<0){m=0}if(n>1){n=1}var k=this.getPoint(m);var l=this.getPoint(n);var i=l.clone().sub(k);
return i.normalize()};THREE.Curve.prototype.getTangentAt=function(d){var c=this.getUtoTmapping(d);
return this.getTangent(c)};THREE.Curve.Utils={tangentQuadraticBezier:function(f,g,h,e){return 2*(1-f)*(h-g)+2*f*(e-h)
},tangentCubicBezier:function(g,h,i,j,f){return -3*h*(1-g)*(1-g)+3*i*(1-g)*(1-g)-6*g*i*(1-g)+6*g*j*(1-g)-3*g*g*j+3*g*g*f
},tangentSpline:function(j,k,l,m,o){var n=6*j*j-6*j;var q=3*j*j-4*j+1;var p=-6*j*j+6*j;
var r=3*j*j-2*j;return n+q+p+r},interpolate:function(k,l,n,o,j){var m=(n-k)*0.5;
var p=(o-l)*0.5;var q=j*j;var r=j*q;return(2*l-2*n+m+p)*r+(-3*l+3*n-2*m-p)*q+m*j+l
}};THREE.Curve.create=function(d,c){d.prototype=Object.create(THREE.Curve.prototype);
d.prototype.constructor=d;d.prototype.getPoint=c;return d};THREE.CurvePath=function(){this.curves=[];
this.bends=[];this.autoClose=false};THREE.CurvePath.prototype=Object.create(THREE.Curve.prototype);
THREE.CurvePath.prototype.constructor=THREE.CurvePath;THREE.CurvePath.prototype.add=function(b){this.curves.push(b)
};THREE.CurvePath.prototype.checkConnection=function(){};THREE.CurvePath.prototype.closePath=function(){var c=this.curves[0].getPoint(0);
var d=this.curves[this.curves.length-1].getPoint(1);if(!c.equals(d)){this.curves.push(new THREE.LineCurve(d,c))
}};THREE.CurvePath.prototype.getPoint=function(n){var j=n*this.getLength();var k=this.getCurveLengths();
var d=0,m,l;while(d<k.length){if(k[d]>=j){m=k[d]-j;l=this.curves[d];var i=1-m/l.getLength();
return l.getPointAt(i)}d++}return null};THREE.CurvePath.prototype.getLength=function(){var b=this.getCurveLengths();
return b[b.length-1]};THREE.CurvePath.prototype.getCurveLengths=function(){if(this.cacheLengths&&this.cacheLengths.length==this.curves.length){return this.cacheLengths
}var g=[],h=0;var e,f=this.curves.length;for(e=0;e<f;e++){h+=this.curves[e].getLength();
g.push(h)}this.cacheLengths=g;return g};THREE.CurvePath.prototype.getBoundingBox=function(){var o=this.getPoints();
var C,D,i;var u,v,A;C=D=Number.NEGATIVE_INFINITY;u=v=Number.POSITIVE_INFINITY;var B,t,p,s;
var q=o[0] instanceof THREE.Vector3;s=q?new THREE.Vector3():new THREE.Vector2();
for(t=0,p=o.length;t<p;t++){B=o[t];if(B.x>C){C=B.x}else{if(B.x<u){u=B.x}}if(B.y>D){D=B.y
}else{if(B.y<v){v=B.y}}if(q){if(B.z>i){i=B.z}else{if(B.z<A){A=B.z}}}s.add(B)}var r={minX:u,minY:v,maxX:C,maxY:D};
if(q){r.maxZ=i;r.minZ=A}return r};THREE.CurvePath.prototype.createPointsGeometry=function(d){var c=this.getPoints(d,true);
return this.createGeometry(c)};THREE.CurvePath.prototype.createSpacedPointsGeometry=function(d){var c=this.getSpacedPoints(d,true);
return this.createGeometry(c)};THREE.CurvePath.prototype.createGeometry=function(d){var f=new THREE.Geometry();
for(var e=0;e<d.length;e++){f.vertices.push(new THREE.Vector3(d[e].x,d[e].y,d[e].z||0))
}return f};THREE.CurvePath.prototype.addWrapPath=function(b){this.bends.push(b)
};THREE.CurvePath.prototype.getTransformedPoints=function(j,h){var f=this.getPoints(j);
var i,g;if(!h){h=this.bends}for(i=0,g=h.length;i<g;i++){f=this.getWrapPoints(f,h[i])
}return f};THREE.CurvePath.prototype.getTransformedSpacedPoints=function(j,h){var f=this.getSpacedPoints(j);
var i,g;if(!h){h=this.bends}for(i=0,g=h.length;i<g;i++){f=this.getWrapPoints(f,h[i])
}return f};THREE.CurvePath.prototype.getWrapPoints=function(q,i){var v=this.getBoundingBox();
var s,p,u,n,o,m;for(s=0,p=q.length;s<p;s++){u=q[s];n=u.x;o=u.y;m=n/v.maxX;m=i.getUtoTmapping(m,n);
var t=i.getPoint(m);var r=i.getTangent(m);r.set(-r.y,r.x).multiplyScalar(o);u.x=t.x+r.x;
u.y=t.y+r.y}return q};THREE.Gyroscope=function(){THREE.Object3D.call(this)};THREE.Gyroscope.prototype=Object.create(THREE.Object3D.prototype);
THREE.Gyroscope.prototype.constructor=THREE.Gyroscope;THREE.Gyroscope.prototype.updateMatrixWorld=(function(){var k=new THREE.Vector3();
var i=new THREE.Quaternion();var l=new THREE.Vector3();var g=new THREE.Vector3();
var h=new THREE.Quaternion();var j=new THREE.Vector3();return function(a){this.matrixAutoUpdate&&this.updateMatrix();
if(this.matrixWorldNeedsUpdate||a){if(this.parent){this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);
this.matrixWorld.decompose(g,h,j);this.matrix.decompose(k,i,l);this.matrixWorld.compose(g,i,j)
}else{this.matrixWorld.copy(this.matrix)}this.matrixWorldNeedsUpdate=false;a=true
}for(var b=0,c=this.children.length;b<c;b++){this.children[b].updateMatrixWorld(a)
}}}());THREE.Path=function(b){THREE.CurvePath.call(this);this.actions=[];if(b){this.fromPoints(b)
}};THREE.Path.prototype=Object.create(THREE.CurvePath.prototype);THREE.Path.prototype.constructor=THREE.Path;
THREE.PathActions={MOVE_TO:"moveTo",LINE_TO:"lineTo",QUADRATIC_CURVE_TO:"quadraticCurveTo",BEZIER_CURVE_TO:"bezierCurveTo",CSPLINE_THRU:"splineThru",ARC:"arc",ELLIPSE:"ellipse"};
THREE.Path.prototype.fromPoints=function(d){this.moveTo(d[0].x,d[0].y);for(var e=1,f=d.length;
e<f;e++){this.lineTo(d[e].x,d[e].y)}};THREE.Path.prototype.moveTo=function(e,f){var d=Array.prototype.slice.call(arguments);
this.actions.push({action:THREE.PathActions.MOVE_TO,args:d})};THREE.Path.prototype.lineTo=function(i,j){var h=Array.prototype.slice.call(arguments);
var l=this.actions[this.actions.length-1].args;var n=l[l.length-2];var m=l[l.length-1];
var k=new THREE.LineCurve(new THREE.Vector2(n,m),new THREE.Vector2(i,j));this.curves.push(k);
this.actions.push({action:THREE.PathActions.LINE_TO,args:h})};THREE.Path.prototype.quadraticCurveTo=function(n,q,l,m){var k=Array.prototype.slice.call(arguments);
var r=this.actions[this.actions.length-1].args;var p=r[r.length-2];var j=r[r.length-1];
var o=new THREE.QuadraticBezierCurve(new THREE.Vector2(p,j),new THREE.Vector2(n,q),new THREE.Vector2(l,m));
this.curves.push(o);this.actions.push({action:THREE.PathActions.QUADRATIC_CURVE_TO,args:k})
};THREE.Path.prototype.bezierCurveTo=function(r,t,l,m,p,q){var o=Array.prototype.slice.call(arguments);
var v=this.actions[this.actions.length-1].args;var u=v[v.length-2];var n=v[v.length-1];
var s=new THREE.CubicBezierCurve(new THREE.Vector2(u,n),new THREE.Vector2(r,t),new THREE.Vector2(l,m),new THREE.Vector2(p,q));
this.curves.push(s);this.actions.push({action:THREE.PathActions.BEZIER_CURVE_TO,args:o})
};THREE.Path.prototype.splineThru=function(j){var i=Array.prototype.slice.call(arguments);
var m=this.actions[this.actions.length-1].args;var h=m[m.length-2];var n=m[m.length-1];
var k=[new THREE.Vector2(h,n)];Array.prototype.push.apply(k,j);var l=new THREE.SplineCurve(k);
this.curves.push(l);this.actions.push({action:THREE.PathActions.CSPLINE_THRU,args:i})
};THREE.Path.prototype.arc=function(k,m,l,o,r,q){var p=this.actions[this.actions.length-1].args;
var n=p[p.length-2];var j=p[p.length-1];this.absarc(k+n,m+j,l,o,r,q)};THREE.Path.prototype.absarc=function(j,k,i,l,g,h){this.absellipse(j,k,i,i,l,g,h)
};THREE.Path.prototype.ellipse=function(n,o,l,m,q,t,s){var r=this.actions[this.actions.length-1].args;
var p=r[r.length-2];var k=r[r.length-1];this.absellipse(n+p,o+k,l,m,q,t,s)};THREE.Path.prototype.absellipse=function(o,p,k,n,r,t,s){var m=Array.prototype.slice.call(arguments);
var q=new THREE.EllipseCurve(o,p,k,n,r,t,s);this.curves.push(q);var l=q.getPoint(1);
m.push(l.x);m.push(l.y);this.actions.push({action:THREE.PathActions.ELLIPSE,args:m})
};THREE.Path.prototype.getSpacedPoints=function(e,g){if(!e){e=40}var h=[];for(var f=0;
f<e;f++){h.push(this.getPoint(f/e))}return h};THREE.Path.prototype.getPoints=function(j,t){if(this.useSpacedPoints){return this.getSpacedPoints(j,t)
}j=j||12;var af=[];var W,al,an,aA,ab;var ae,ah,n,ak,i,aj,aC,ai,aB,X,ac,Y,Z;for(W=0,al=this.actions.length;
W<al;W++){an=this.actions[W];aA=an.action;ab=an.args;switch(aA){case THREE.PathActions.MOVE_TO:af.push(new THREE.Vector2(ab[0],ab[1]));
break;case THREE.PathActions.LINE_TO:af.push(new THREE.Vector2(ab[0],ab[1]));break;
case THREE.PathActions.QUADRATIC_CURVE_TO:ae=ab[2];ah=ab[3];i=ab[0];aj=ab[1];if(af.length>0){aB=af[af.length-1];
aC=aB.x;ai=aB.y}else{aB=this.actions[W-1].args;aC=aB[aB.length-2];ai=aB[aB.length-1]
}for(X=1;X<=j;X++){ac=X/j;Y=THREE.Shape.Utils.b2(ac,aC,i,ae);Z=THREE.Shape.Utils.b2(ac,ai,aj,ah);
af.push(new THREE.Vector2(Y,Z))}break;case THREE.PathActions.BEZIER_CURVE_TO:ae=ab[4];
ah=ab[5];i=ab[0];aj=ab[1];n=ab[2];ak=ab[3];if(af.length>0){aB=af[af.length-1];aC=aB.x;
ai=aB.y}else{aB=this.actions[W-1].args;aC=aB[aB.length-2];ai=aB[aB.length-1]}for(X=1;
X<=j;X++){ac=X/j;Y=THREE.Shape.Utils.b3(ac,aC,i,n,ae);Z=THREE.Shape.Utils.b3(ac,ai,aj,ak,ah);
af.push(new THREE.Vector2(Y,Z))}break;case THREE.PathActions.CSPLINE_THRU:aB=this.actions[W-1].args;
var au=new THREE.Vector2(aB[aB.length-2],aB[aB.length-1]);var ax=[au];var aa=j*ab[0].length;
ax=ax.concat(ab[0]);var U=new THREE.SplineCurve(ax);for(X=1;X<=aa;X++){af.push(U.getPointAt(X/aa))
}break;case THREE.PathActions.ARC:var aq=ab[0],ar=ab[1],ap=ab[2],V=ab[3],ad=ab[4],av=!!ab[5];
var ag=ad-V;var at;var az=j*2;for(X=1;X<=az;X++){ac=X/az;if(!av){ac=1-ac}at=V+ac*ag;
Y=aq+ap*Math.cos(at);Z=ar+ap*Math.sin(at);af.push(new THREE.Vector2(Y,Z))}break;
case THREE.PathActions.ELLIPSE:var aq=ab[0],ar=ab[1],ao=ab[2],am=ab[3],V=ab[4],ad=ab[5],av=!!ab[6];
var ag=ad-V;var at;var az=j*2;for(X=1;X<=az;X++){ac=X/az;if(!av){ac=1-ac}at=V+ac*ag;
Y=aq+ao*Math.cos(at);Z=ar+am*Math.sin(at);af.push(new THREE.Vector2(Y,Z))}break
}}var ay=af[af.length-1];var aw=1e-10;if(Math.abs(ay.x-af[0].x)<aw&&Math.abs(ay.y-af[0].y)<aw){af.splice(af.length-1,1)
}if(t){af.push(af[0])}return af};THREE.Path.prototype.toShapes=function(j,Q){function ad(h){var a,c,g,f,b;
var d=[],e=new THREE.Path();for(a=0,c=h.length;a<c;a++){g=h[a];b=g.args;f=g.action;
if(f==THREE.PathActions.MOVE_TO){if(e.actions.length!=0){d.push(e);e=new THREE.Path()
}}e[f].apply(e,b)}if(e.actions.length!=0){d.push(e)}return d}function ab(a){var c=[];
for(var f=0,b=a.length;f<b;f++){var e=a[f];var d=new THREE.Shape();d.actions=e.actions;
d.curves=e.curves;c.push(d)}return c}function W(b,m){var l=1e-10;var h=m.length;
var k=false;for(var c=h-1,e=0;e<h;c=e++){var n=m[c];var a=m[e];var d=a.x-n.x;var g=a.y-n.y;
if(Math.abs(g)>l){if(g<0){n=m[e];d=-d;a=m[c];g=-g}if((b.y<n.y)||(b.y>a.y)){continue
}if(b.y==n.y){if(b.x==n.x){return true}}else{var f=g*(b.x-n.x)-d*(b.y-n.y);if(f==0){return true
}if(f<0){continue}k=!k}}else{if(b.y!=n.y){continue}if(((a.x<=b.x)&&(b.x<=n.x))||((n.x<=b.x)&&(b.x<=a.x))){return true
}}}return k}var ah=ad(this.actions);if(ah.length==0){return[]}if(Q===true){return ab(ah)
}var K,N,Z,U=[];if(ah.length==1){N=ah[0];Z=new THREE.Shape();Z.actions=N.actions;
Z.curves=N.curves;U.push(Z);return U}var al=!THREE.Shape.Utils.isClockWise(ah[0].getPoints());
al=j?!al:al;var Y=[];var V=[];var M=[];var ae=0;var O;V[ae]=undefined;M[ae]=[];
var T,aa;for(T=0,aa=ah.length;T<aa;T++){N=ah[T];O=N.getPoints();K=THREE.Shape.Utils.isClockWise(O);
K=j?!K:K;if(K){if((!al)&&(V[ae])){ae++}V[ae]={s:new THREE.Shape(),p:O};V[ae].s.actions=N.actions;
V[ae].s.curves=N.curves;if(al){ae++}M[ae]=[]}else{M[ae].push({h:N,p:O[0]})}}if(!V[0]){return ab(ah)
}if(V.length>1){var aj=false;var L=[];for(var i=0,ai=V.length;i<ai;i++){Y[i]=[]
}for(var i=0,ai=V.length;i<ai;i++){var S=M[i];for(var ac=0;ac<S.length;ac++){var ak=S[ac];
var af=true;for(var ag=0;ag<V.length;ag++){if(W(ak.p,V[ag].p)){if(i!=ag){L.push({froms:i,tos:ag,hole:ac})
}if(af){af=false;Y[ag].push(ak)}else{aj=true}}}if(af){Y[i].push(ak)}}}if(L.length>0){if(!aj){M=Y
}}}var P,X,R;for(T=0,aa=V.length;T<aa;T++){Z=V[T].s;U.push(Z);P=M[T];for(X=0,R=P.length;
X<R;X++){Z.holes.push(P[X].h)}}return U};THREE.Shape=function(){THREE.Path.apply(this,arguments);
this.holes=[]};THREE.Shape.prototype=Object.create(THREE.Path.prototype);THREE.Shape.prototype.constructor=THREE.Shape;
THREE.Shape.prototype.extrude=function(c){var d=new THREE.ExtrudeGeometry(this,c);
return d};THREE.Shape.prototype.makeGeometry=function(d){var c=new THREE.ShapeGeometry(this,d);
return c};THREE.Shape.prototype.getPointsHoles=function(h){var e,f=this.holes.length,g=[];
for(e=0;e<f;e++){g[e]=this.holes[e].getTransformedPoints(h,this.bends)}return g
};THREE.Shape.prototype.getSpacedPointsHoles=function(h){var e,f=this.holes.length,g=[];
for(e=0;e<f;e++){g[e]=this.holes[e].getTransformedSpacedPoints(h,this.bends)}return g
};THREE.Shape.prototype.extractAllPoints=function(b){return{shape:this.getTransformedPoints(b),holes:this.getPointsHoles(b)}
};THREE.Shape.prototype.extractPoints=function(b){if(this.useSpacedPoints){return this.extractAllSpacedPoints(b)
}return this.extractAllPoints(b)};THREE.Shape.prototype.extractAllSpacedPoints=function(b){return{shape:this.getTransformedSpacedPoints(b),holes:this.getSpacedPointsHoles(b)}
};THREE.Shape.Utils={triangulateShape:function(B,H){function J(a,b,c){if(a.x!=b.x){if(a.x<b.x){return((a.x<=c.x)&&(c.x<=b.x))
}else{return((b.x<=c.x)&&(c.x<=a.x))}}else{if(a.y<b.y){return((a.y<=c.y)&&(c.y<=b.y))
}else{return((b.y<=c.y)&&(c.y<=a.y))}}}function E(b,c,t,ab,g){var p=1e-10;var q=c.x-b.x,r=c.y-b.y;
var d=ab.x-t.x,e=ab.y-t.y;var k=b.x-t.x;var l=b.y-t.y;var j=r*d-q*e;var u=r*k-q*l;
if(Math.abs(j)>p){var W;if(j>0){if((u<0)||(u>j)){return[]}W=e*k-d*l;if((W<0)||(W>j)){return[]
}}else{if((u>0)||(u<j)){return[]}W=e*k-d*l;if((W>0)||(W<j)){return[]}}if(W==0){if((g)&&((u==0)||(u==j))){return[]
}return[b]}if(W==j){if((g)&&((u==0)||(u==j))){return[]}return[c]}if(u==0){return[t]
}if(u==j){return[ab]}var ac=W/j;return[{x:b.x+ac*q,y:b.y+ac*r}]}else{if((u!=0)||(e*k!=d*l)){return[]
}var o=((q==0)&&(r==0));var X=((d==0)&&(e==0));if(o&&X){if((b.x!=t.x)||(b.y!=t.y)){return[]
}return[b]}if(o){if(!J(t,ab,b)){return[]}return[b]}if(X){if(!J(b,c,t)){return[]
}return[t]}var a,ad,m,s;var Z,Y,aa,n;if(q!=0){if(b.x<c.x){a=b;m=b.x;ad=c;s=c.x}else{a=c;
m=c.x;ad=b;s=b.x}if(t.x<ab.x){Z=t;aa=t.x;Y=ab;n=ab.x}else{Z=ab;aa=ab.x;Y=t;n=t.x
}}else{if(b.y<c.y){a=b;m=b.y;ad=c;s=c.y}else{a=c;m=c.y;ad=b;s=b.y}if(t.y<ab.y){Z=t;
aa=t.y;Y=ab;n=ab.y}else{Z=ab;aa=ab.y;Y=t;n=t.y}}if(m<=aa){if(s<aa){return[]}if(s==aa){if(g){return[]
}return[Z]}if(s<=n){return[Z,ad]}return[Z,Y]}else{if(m>n){return[]}if(m==n){if(g){return[]
}return[a]}if(s<=n){return[a,ad]}return[a,Y]}}}function i(d,p,e,m){var n=1e-10;
var o=p.x-d.x,q=p.y-d.y;var k=e.x-d.x,l=e.y-d.y;var a=m.x-d.x,b=m.y-d.y;var g=o*l-q*k;
var j=o*b-q*a;if(Math.abs(g)>n){var c=a*l-b*k;if(g>0){return((j>=0)&&(c>=0))}else{return((j>=0)||(c>=0))
}}else{return(j>0)}}function G(m,q){var Z=m.concat();var n;function l(Q,ae){var R=Z.length-1;
var O=Q-1;if(O<0){O=R}var S=Q+1;if(S>R){S=0}var ad=i(Z[Q],Z[O],Z[S],n[ae]);if(!ad){return false
}var P=n.length-1;var T=ae-1;if(T<0){T=P}var U=ae+1;if(U>P){U=0}ad=i(n[ae],n[T],n[U],Z[Q]);
if(!ad){return false}return true}function aa(P,O){var Q,S,R;for(Q=0;Q<Z.length;
Q++){S=Q+1;S%=Z.length;R=E(P,O,Z[Q],Z[S],true);if(R.length>0){return true}}return false
}var W=[];function j(P,O){var U,S,Q,T,R;for(U=0;U<W.length;U++){S=q[W[U]];for(Q=0;
Q<S.length;Q++){T=Q+1;T%=S.length;R=E(P,O,S[Q],S[T],true);if(R.length>0){return true
}}}return false}var p,t,a,d,c,g,X=[],b,e,u,V;for(var k=0,Y=q.length;k<Y;k++){W.push(k)
}var s=0;var o=W.length*2;while(W.length>0){o--;if(o<0){break}for(t=s;t<Z.length;
t++){a=Z[t];p=-1;for(var k=0;k<W.length;k++){c=W[k];g=a.x+":"+a.y+":"+c;if(X[g]!==undefined){continue
}n=q[c];for(var r=0;r<n.length;r++){d=n[r];if(!l(t,r)){continue}if(aa(a,d)){continue
}if(j(a,d)){continue}p=r;W.splice(k,1);b=Z.slice(0,t+1);e=Z.slice(t);u=n.slice(p);
V=n.slice(0,p+1);Z=b.concat(u).concat(V).concat(e);s=t;break}if(p>=0){break}X[g]=true
}if(p>=0){break}}}return Z}var A,D,h,F,f,K,L={};var I=B.concat();for(var v=0,M=H.length;
v<M;v++){Array.prototype.push.apply(I,H[v])}for(A=0,D=I.length;A<D;A++){f=I[A].x+":"+I[A].y;
if(L[f]!==undefined){THREE.warn("THREE.Shape: Duplicate point",f)}L[f]=A}var N=G(B,H);
var C=THREE.FontUtils.Triangulate(N,false);for(A=0,D=C.length;A<D;A++){F=C[A];for(h=0;
h<3;h++){f=F[h].x+":"+F[h].y;K=L[f];if(K!==undefined){F[h]=K}}}return C.concat()
},isClockWise:function(b){return THREE.FontUtils.Triangulate.area(b)<0},b2p0:function(d,f){var e=1-d;
return e*e*f},b2p1:function(d,c){return 2*(1-d)*d*c},b2p2:function(d,c){return d*d*c
},b2:function(f,g,h,e){return this.b2p0(f,g)+this.b2p1(f,h)+this.b2p2(f,e)},b3p0:function(d,f){var e=1-d;
return e*e*e*f},b3p1:function(d,f){var e=1-d;return 3*e*e*d*f},b3p2:function(d,f){var e=1-d;
return 3*e*d*d*f},b3p3:function(d,c){return d*d*d*c},b3:function(g,h,i,j,f){return this.b3p0(g,h)+this.b3p1(g,i)+this.b3p2(g,j)+this.b3p3(g,f)
}};THREE.LineCurve=function(c,d){this.v1=c;this.v2=d};THREE.LineCurve.prototype=Object.create(THREE.Curve.prototype);
THREE.LineCurve.prototype.constructor=THREE.LineCurve;THREE.LineCurve.prototype.getPoint=function(c){var d=this.v2.clone().sub(this.v1);
d.multiplyScalar(c).add(this.v1);return d};THREE.LineCurve.prototype.getPointAt=function(b){return this.getPoint(b)
};THREE.LineCurve.prototype.getTangent=function(d){var c=this.v2.clone().sub(this.v1);
return c.normalize()};THREE.QuadraticBezierCurve=function(e,f,d){this.v0=e;this.v1=f;
this.v2=d};THREE.QuadraticBezierCurve.prototype=Object.create(THREE.Curve.prototype);
THREE.QuadraticBezierCurve.prototype.constructor=THREE.QuadraticBezierCurve;THREE.QuadraticBezierCurve.prototype.getPoint=function(c){var d=new THREE.Vector2();
d.x=THREE.Shape.Utils.b2(c,this.v0.x,this.v1.x,this.v2.x);d.y=THREE.Shape.Utils.b2(c,this.v0.y,this.v1.y,this.v2.y);
return d};THREE.QuadraticBezierCurve.prototype.getTangent=function(c){var d=new THREE.Vector2();
d.x=THREE.Curve.Utils.tangentQuadraticBezier(c,this.v0.x,this.v1.x,this.v2.x);d.y=THREE.Curve.Utils.tangentQuadraticBezier(c,this.v0.y,this.v1.y,this.v2.y);
return d.normalize()};THREE.CubicBezierCurve=function(f,g,h,e){this.v0=f;this.v1=g;
this.v2=h;this.v3=e};THREE.CubicBezierCurve.prototype=Object.create(THREE.Curve.prototype);
THREE.CubicBezierCurve.prototype.constructor=THREE.CubicBezierCurve;THREE.CubicBezierCurve.prototype.getPoint=function(f){var d,e;
d=THREE.Shape.Utils.b3(f,this.v0.x,this.v1.x,this.v2.x,this.v3.x);e=THREE.Shape.Utils.b3(f,this.v0.y,this.v1.y,this.v2.y,this.v3.y);
return new THREE.Vector2(d,e)};THREE.CubicBezierCurve.prototype.getTangent=function(h){var e,f;
e=THREE.Curve.Utils.tangentCubicBezier(h,this.v0.x,this.v1.x,this.v2.x,this.v3.x);
f=THREE.Curve.Utils.tangentCubicBezier(h,this.v0.y,this.v1.y,this.v2.y,this.v3.y);
var g=new THREE.Vector2(e,f);g.normalize();return g};THREE.SplineCurve=function(b){this.points=(b==undefined)?[]:b
};THREE.SplineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.SplineCurve.prototype.constructor=THREE.SplineCurve;
THREE.SplineCurve.prototype.getPoint=function(k){var l=this.points;var m=(l.length-1)*k;
var t=Math.floor(m);var r=m-t;var n=l[t==0?t:t-1];var o=l[t];var p=l[t>l.length-2?l.length-1:t+1];
var q=l[t>l.length-3?l.length-1:t+2];var s=new THREE.Vector2();s.x=THREE.Curve.Utils.interpolate(n.x,o.x,p.x,q.x,r);
s.y=THREE.Curve.Utils.interpolate(n.y,o.y,p.y,q.y,r);return s};THREE.EllipseCurve=function(k,l,j,i,m,n,h){this.aX=k;
this.aY=l;this.xRadius=j;this.yRadius=i;this.aStartAngle=m;this.aEndAngle=n;this.aClockwise=h
};THREE.EllipseCurve.prototype=Object.create(THREE.Curve.prototype);THREE.EllipseCurve.prototype.constructor=THREE.EllipseCurve;
THREE.EllipseCurve.prototype.getPoint=function(e){var g=this.aEndAngle-this.aStartAngle;
if(g<0){g+=Math.PI*2}if(g>Math.PI*2){g-=Math.PI*2}var h;if(this.aClockwise===true){h=this.aEndAngle+(1-e)*(Math.PI*2-g)
}else{h=this.aStartAngle+e*g}var f=new THREE.Vector2();f.x=this.aX+this.xRadius*Math.cos(h);
f.y=this.aY+this.yRadius*Math.sin(h);return f};THREE.ArcCurve=function(j,k,i,l,g,h){THREE.EllipseCurve.call(this,j,k,i,i,l,g,h)
};THREE.ArcCurve.prototype=Object.create(THREE.EllipseCurve.prototype);THREE.ArcCurve.prototype.constructor=THREE.ArcCurve;
THREE.LineCurve3=THREE.Curve.create(function(c,d){this.v1=c;this.v2=d},function(c){var d=new THREE.Vector3();
d.subVectors(this.v2,this.v1);d.multiplyScalar(c);d.add(this.v1);return d});THREE.QuadraticBezierCurve3=THREE.Curve.create(function(e,f,d){this.v0=e;
this.v1=f;this.v2=d},function(c){var d=new THREE.Vector3();d.x=THREE.Shape.Utils.b2(c,this.v0.x,this.v1.x,this.v2.x);
d.y=THREE.Shape.Utils.b2(c,this.v0.y,this.v1.y,this.v2.y);d.z=THREE.Shape.Utils.b2(c,this.v0.z,this.v1.z,this.v2.z);
return d});THREE.CubicBezierCurve3=THREE.Curve.create(function(f,g,h,e){this.v0=f;
this.v1=g;this.v2=h;this.v3=e},function(c){var d=new THREE.Vector3();d.x=THREE.Shape.Utils.b3(c,this.v0.x,this.v1.x,this.v2.x,this.v3.x);
d.y=THREE.Shape.Utils.b3(c,this.v0.y,this.v1.y,this.v2.y,this.v3.y);d.z=THREE.Shape.Utils.b3(c,this.v0.z,this.v1.z,this.v2.z,this.v3.z);
return d});THREE.SplineCurve3=THREE.Curve.create(function(b){this.points=(b==undefined)?[]:b
},function(k){var l=this.points;var m=(l.length-1)*k;var t=Math.floor(m);var r=m-t;
var n=l[t==0?t:t-1];var o=l[t];var p=l[t>l.length-2?l.length-1:t+1];var q=l[t>l.length-3?l.length-1:t+2];
var s=new THREE.Vector3();s.x=THREE.Curve.Utils.interpolate(n.x,o.x,p.x,q.x,r);
s.y=THREE.Curve.Utils.interpolate(n.y,o.y,p.y,q.y,r);s.z=THREE.Curve.Utils.interpolate(n.z,o.z,p.z,q.z,r);
return s});THREE.ClosedSplineCurve3=THREE.Curve.create(function(b){this.points=(b==undefined)?[]:b
},function(k){var l=this.points;var m=(l.length-0)*k;var t=Math.floor(m);var r=m-t;
t+=t>0?0:(Math.floor(Math.abs(t)/l.length)+1)*l.length;var n=l[(t-1)%l.length];
var o=l[(t)%l.length];var p=l[(t+1)%l.length];var q=l[(t+2)%l.length];var s=new THREE.Vector3();
s.x=THREE.Curve.Utils.interpolate(n.x,o.x,p.x,q.x,r);s.y=THREE.Curve.Utils.interpolate(n.y,o.y,p.y,q.y,r);
s.z=THREE.Curve.Utils.interpolate(n.z,o.z,p.z,q.z,r);return s});THREE.AnimationHandler={LINEAR:0,CATMULLROM:1,CATMULLROM_FORWARD:2,add:function(){THREE.warn("THREE.AnimationHandler.add() has been deprecated.")
},get:function(){THREE.warn("THREE.AnimationHandler.get() has been deprecated.")
},remove:function(){THREE.warn("THREE.AnimationHandler.remove() has been deprecated.")
},animations:[],init:function(l){if(l.initialized===true){return l}for(var p=0;
p<l.hierarchy.length;p++){for(var h=0;h<l.hierarchy[p].keys.length;h++){if(l.hierarchy[p].keys[h].time<0){l.hierarchy[p].keys[h].time=0
}if(l.hierarchy[p].keys[h].rot!==undefined&&!(l.hierarchy[p].keys[h].rot instanceof THREE.Quaternion)){var m=l.hierarchy[p].keys[h].rot;
l.hierarchy[p].keys[h].rot=new THREE.Quaternion().fromArray(m)}}if(l.hierarchy[p].keys.length&&l.hierarchy[p].keys[0].morphTargets!==undefined){var n={};
for(var h=0;h<l.hierarchy[p].keys.length;h++){for(var j=0;j<l.hierarchy[p].keys[h].morphTargets.length;
j++){var k=l.hierarchy[p].keys[h].morphTargets[j];n[k]=-1}}l.hierarchy[p].usedMorphTargets=n;
for(var h=0;h<l.hierarchy[p].keys.length;h++){var o={};for(var k in n){for(var j=0;
j<l.hierarchy[p].keys[h].morphTargets.length;j++){if(l.hierarchy[p].keys[h].morphTargets[j]===k){o[k]=l.hierarchy[p].keys[h].morphTargetsInfluences[j];
break}}if(j===l.hierarchy[p].keys[h].morphTargets.length){o[k]=0}}l.hierarchy[p].keys[h].morphTargetsInfluences=o
}}for(var h=1;h<l.hierarchy[p].keys.length;h++){if(l.hierarchy[p].keys[h].time===l.hierarchy[p].keys[h-1].time){l.hierarchy[p].keys.splice(h,1);
h--}}for(var h=0;h<l.hierarchy[p].keys.length;h++){l.hierarchy[p].keys[h].index=h
}}l.initialized=true;return l},parse:function(h){var f=function(a,d){d.push(a);
for(var c=0;c<a.children.length;c++){f(a.children[c],d)}};var g=[];if(h instanceof THREE.SkinnedMesh){for(var b=0;
b<h.skeleton.bones.length;b++){g.push(h.skeleton.bones[b])}}else{f(h,g)}return g
},play:function(b){if(this.animations.indexOf(b)===-1){this.animations.push(b)}},stop:function(c){var d=this.animations.indexOf(c);
if(d!==-1){this.animations.splice(d,1)}},update:function(c){for(var d=0;d<this.animations.length;
d++){this.animations[d].resetBlendWeights()}for(var d=0;d<this.animations.length;
d++){this.animations[d].update(c)}}};THREE.Animation=function(d,c){this.root=d;
this.data=THREE.AnimationHandler.init(c);this.hierarchy=THREE.AnimationHandler.parse(d);
this.currentTime=0;this.timeScale=1;this.isPlaying=false;this.loop=true;this.weight=0;
this.interpolationType=THREE.AnimationHandler.LINEAR};THREE.Animation.prototype={constructor:THREE.Animation,keyTypes:["pos","rot","scl"],play:function(d,c){this.currentTime=d!==undefined?d:0;
this.weight=c!==undefined?c:1;this.isPlaying=true;this.reset();THREE.AnimationHandler.play(this)
},stop:function(){this.isPlaying=false;THREE.AnimationHandler.stop(this)},reset:function(){for(var p=0,r=this.hierarchy.length;
p<r;p++){var q=this.hierarchy[p];if(q.animationCache===undefined){q.animationCache={animations:{},blending:{positionWeight:0,quaternionWeight:0,scaleWeight:0}}
}var t=this.data.name;var m=q.animationCache.animations;var s=m[t];if(s===undefined){s={prevKey:{pos:0,rot:0,scl:0},nextKey:{pos:0,rot:0,scl:0},originalMatrix:q.matrix};
m[t]=s}for(var l=0;l<3;l++){var o=this.keyTypes[l];var h=this.data.hierarchy[p].keys[0];
var n=this.getNextKeyWith(o,p,1);while(n.time<this.currentTime&&n.index>h.index){h=n;
n=this.getNextKeyWith(o,p,n.index+1)}s.prevKey[o]=h;s.nextKey[o]=n}}},resetBlendWeights:function(){for(var h=0,g=this.hierarchy.length;
h<g;h++){var j=this.hierarchy[h];var f=j.animationCache;if(f!==undefined){var i=f.blending;
i.positionWeight=0;i.quaternionWeight=0;i.scaleWeight=0}}},update:(function(){var k=[];
var i=new THREE.Vector3();var h=new THREE.Vector3();var l=new THREE.Quaternion();
var j=function(D,B){var f=[],d=[],a,C,u,v,A,b,c,e,t;a=(D.length-1)*B;C=Math.floor(a);
u=a-C;f[0]=C===0?C:C-1;f[1]=C;f[2]=C>D.length-2?C:C+1;f[3]=C>D.length-3?C:C+2;b=D[f[0]];
c=D[f[1]];e=D[f[2]];t=D[f[3]];v=u*u;A=u*v;d[0]=g(b[0],c[0],e[0],t[0],u,v,A);d[1]=g(b[1],c[1],e[1],t[1],u,v,A);
d[2]=g(b[2],c[2],e[2],t[2],u,v,A);return d};var g=function(b,c,e,f,a,q,r){var d=(e-b)*0.5,p=(f-c)*0.5;
return(2*(c-e)+d+p)*r+(-3*(c-e)-2*d-p)*q+d*a+c};return function(H){if(this.isPlaying===false){return
}this.currentTime+=H*this.timeScale;if(this.weight===0){return}var Q=this.data.length;
if(this.currentTime>Q||this.currentTime<0){if(this.loop){this.currentTime%=Q;if(this.currentTime<0){this.currentTime+=Q
}this.reset()}else{this.stop()}}for(var b=0,O=this.hierarchy.length;b<O;b++){var e=this.hierarchy[b];
var G=e.animationCache.animations[this.data.name];var K=e.animationCache.blending;
for(var I=0;I<3;I++){var M=this.keyTypes[I];var f=G.prevKey[M];var L=G.nextKey[M];
if((this.timeScale>0&&L.time<=this.currentTime)||(this.timeScale<0&&f.time>=this.currentTime)){f=this.data.hierarchy[b].keys[0];
L=this.getNextKeyWith(M,b,1);while(L.time<this.currentTime&&L.index>f.index){f=L;
L=this.getNextKeyWith(M,b,L.index+1)}G.prevKey[M]=f;G.nextKey[M]=L}var c=(this.currentTime-f.time)/(L.time-f.time);
var t=f[M];var N=L[M];if(c<0){c=0}if(c>1){c=1}if(M==="pos"){if(this.interpolationType===THREE.AnimationHandler.LINEAR){h.x=t[0]+(N[0]-t[0])*c;
h.y=t[1]+(N[1]-t[1])*c;h.z=t[2]+(N[2]-t[2])*c;var d=this.weight/(this.weight+K.positionWeight);
e.position.lerp(h,d);K.positionWeight+=this.weight}else{if(this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD){k[0]=this.getPrevKeyWith("pos",b,f.index-1)["pos"];
k[1]=t;k[2]=N;k[3]=this.getNextKeyWith("pos",b,L.index+1)["pos"];c=c*0.33+0.33;
var J=j(k,c);var d=this.weight/(this.weight+K.positionWeight);K.positionWeight+=this.weight;
var P=e.position;P.x=P.x+(J[0]-P.x)*d;P.y=P.y+(J[1]-P.y)*d;P.z=P.z+(J[2]-P.z)*d;
if(this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD){var F=j(k,c*1.01);
i.set(F[0],F[1],F[2]);i.sub(P);i.y=0;i.normalize();var a=Math.atan2(i.x,i.z);e.rotation.set(0,a,0)
}}}}else{if(M==="rot"){THREE.Quaternion.slerp(t,N,l,c);if(K.quaternionWeight===0){e.quaternion.copy(l);
K.quaternionWeight=this.weight}else{var d=this.weight/(this.weight+K.quaternionWeight);
THREE.Quaternion.slerp(e.quaternion,l,e.quaternion,d);K.quaternionWeight+=this.weight
}}else{if(M==="scl"){h.x=t[0]+(N[0]-t[0])*c;h.y=t[1]+(N[1]-t[1])*c;h.z=t[2]+(N[2]-t[2])*c;
var d=this.weight/(this.weight+K.scaleWeight);e.scale.lerp(h,d);K.scaleWeight+=this.weight
}}}}}return true}})(),getNextKeyWith:function(h,e,f){var g=this.data.hierarchy[e].keys;
if(this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD){f=f<g.length-1?f:g.length-1
}else{f=f%g.length}for(;f<g.length;f++){if(g[f][h]!==undefined){return g[f]}}return this.data.hierarchy[e].keys[0]
},getPrevKeyWith:function(h,e,f){var g=this.data.hierarchy[e].keys;if(this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD){f=f>0?f:0
}else{f=f>=0?f:f+g.length}for(;f>=0;f--){if(g[f][h]!==undefined){return g[f]}}return this.data.hierarchy[e].keys[g.length-1]
}};THREE.KeyFrameAnimation=function(n){this.root=n.node;this.data=THREE.AnimationHandler.init(n);
this.hierarchy=THREE.AnimationHandler.parse(this.root);this.currentTime=0;this.timeScale=0.001;
this.isPlaying=false;this.isPaused=true;this.loop=true;for(var l=0,p=this.hierarchy.length;
l<p;l++){var k=this.data.hierarchy[l].keys,r=this.data.hierarchy[l].sids,o=this.hierarchy[l];
if(k.length&&r){for(var h=0;h<r.length;h++){var q=r[h],m=this.getNextKeyWith(q,l,0);
if(m){m.apply(q)}}o.matrixAutoUpdate=false;this.data.hierarchy[l].node.updateMatrix();
o.matrixWorldNeedsUpdate=true}}};THREE.KeyFrameAnimation.prototype={constructor:THREE.KeyFrameAnimation,play:function(k){this.currentTime=k!==undefined?k:0;
if(this.isPlaying===false){this.isPlaying=true;var l,h=this.hierarchy.length,g,i;
for(l=0;l<h;l++){g=this.hierarchy[l];i=this.data.hierarchy[l];if(i.animationCache===undefined){i.animationCache={};
i.animationCache.prevKey=null;i.animationCache.nextKey=null;i.animationCache.originalMatrix=g.matrix
}var j=this.data.hierarchy[l].keys;if(j.length){i.animationCache.prevKey=j[0];i.animationCache.nextKey=j[1];
this.startTime=Math.min(j[0].time,this.startTime);this.endTime=Math.max(j[j.length-1].time,this.endTime)
}}this.update(0)}this.isPaused=false;THREE.AnimationHandler.play(this)},stop:function(){this.isPlaying=false;
this.isPaused=false;THREE.AnimationHandler.stop(this);for(var e=0;e<this.data.hierarchy.length;
e++){var g=this.hierarchy[e];var h=this.data.hierarchy[e];if(h.animationCache!==undefined){var f=h.animationCache.originalMatrix;
f.copy(g.matrix);g.matrix=f;delete h.animationCache}}},update:function(m){if(this.isPlaying===false){return
}this.currentTime+=m*this.timeScale;var q=this.data.length;if(this.loop===true&&this.currentTime>q){this.currentTime%=q
}this.currentTime=Math.min(this.currentTime,q);for(var o=0,s=this.hierarchy.length;
o<s;o++){var p=this.hierarchy[o];var r=this.data.hierarchy[o];var l=r.keys,t=r.animationCache;
if(l.length){var h=t.prevKey;var n=t.nextKey;if(n.time<=this.currentTime){while(n.time<this.currentTime&&n.index>h.index){h=n;
n=l[h.index+1]}t.prevKey=h;t.nextKey=n}if(n.time>=this.currentTime){h.interpolate(n,this.currentTime)
}else{h.interpolate(n,n.time)}this.data.hierarchy[o].node.updateMatrix();p.matrixWorldNeedsUpdate=true
}}},getNextKeyWith:function(f,h,e){var g=this.data.hierarchy[h].keys;e=e%g.length;
for(;e<g.length;e++){if(g[e].hasTarget(f)){return g[e]}}return g[0]},getPrevKeyWith:function(f,h,e){var g=this.data.hierarchy[h].keys;
e=e>=0?e:e+g.length;for(;e>=0;e--){if(g[e].hasTarget(f)){return g[e]}}return g[g.length-1]
}};THREE.MorphAnimation=function(b){this.mesh=b;this.frames=b.morphTargetInfluences.length;
this.currentTime=0;this.duration=1000;this.loop=true;this.lastFrame=0;this.currentFrame=0;
this.isPlaying=false};THREE.MorphAnimation.prototype={constructor:THREE.MorphAnimation,play:function(){this.isPlaying=true
},pause:function(){this.isPlaying=false},update:function(g){if(this.isPlaying===false){return
}this.currentTime+=g;if(this.loop===true&&this.currentTime>this.duration){this.currentTime%=this.duration
}this.currentTime=Math.min(this.currentTime,this.duration);var f=this.duration/this.frames;
var h=Math.floor(this.currentTime/f);var e=this.mesh.morphTargetInfluences;if(h!=this.currentFrame){e[this.lastFrame]=0;
e[this.currentFrame]=1;e[h]=0;this.lastFrame=this.currentFrame;this.currentFrame=h
}e[h]=(this.currentTime%f)/f;e[this.lastFrame]=1-e[h]}};THREE.BoxGeometry=function(v,n,r,u,o,s){THREE.Geometry.call(this);
this.type="BoxGeometry";this.parameters={width:v,height:n,depth:r,widthSegments:u,heightSegments:o,depthSegments:s};
this.widthSegments=u||1;this.heightSegments=o||1;this.depthSegments=s||1;var l=this;
var m=v/2;var p=n/2;var t=r/2;q("z","y",-1,-1,r,n,m,0);q("z","y",1,-1,r,n,-m,1);
q("x","z",1,1,v,r,p,2);q("x","z",1,-1,v,r,-p,3);q("x","y",1,-1,v,n,t,4);q("x","y",-1,-1,v,n,-t,5);
function q(ac,af,ap,ae,aa,ab,a,ak){var ag,aj,al,W=l.widthSegments,Y=l.heightSegments,ah=aa/2,am=ab/2,ad=l.vertices.length;
if((ac==="x"&&af==="y")||(ac==="y"&&af==="x")){ag="z"}else{if((ac==="x"&&af==="z")||(ac==="z"&&af==="x")){ag="y";
Y=l.depthSegments}else{if((ac==="z"&&af==="y")||(ac==="y"&&af==="z")){ag="x";W=l.depthSegments
}}}var j=W+1,an=Y+1,b=aa/W,g=ab/Y,c=new THREE.Vector3();c[ag]=a>0?1:-1;for(al=0;
al<an;al++){for(aj=0;aj<j;aj++){var ao=new THREE.Vector3();ao[ac]=(aj*b-ah)*ap;
ao[af]=(al*g-am)*ae;ao[ag]=a;l.vertices.push(ao)}}for(al=0;al<Y;al++){for(aj=0;
aj<W;aj++){var d=aj+j*al;var e=aj+j*(al+1);var f=(aj+1)+j*(al+1);var h=(aj+1)+j*al;
var i=new THREE.Vector2(aj/W,1-al/Y);var k=new THREE.Vector2(aj/W,1-(al+1)/Y);var X=new THREE.Vector2((aj+1)/W,1-(al+1)/Y);
var Z=new THREE.Vector2((aj+1)/W,1-al/Y);var ai=new THREE.Face3(d+ad,e+ad,h+ad);
ai.normal.copy(c);ai.vertexNormals.push(c.clone(),c.clone(),c.clone());ai.materialIndex=ak;
l.faces.push(ai);l.faceVertexUvs[0].push([i,k,Z]);ai=new THREE.Face3(e+ad,f+ad,h+ad);
ai.normal.copy(c);ai.vertexNormals.push(c.clone(),c.clone(),c.clone());ai.materialIndex=ak;
l.faces.push(ai);l.faceVertexUvs[0].push([k.clone(),X,Z.clone()])}}}this.mergeVertices()
};THREE.BoxGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.BoxGeometry.prototype.constructor=THREE.BoxGeometry;
THREE.CircleGeometry=function(m,p,s,u){THREE.Geometry.call(this);this.type="CircleGeometry";
this.parameters={radius:m,segments:p,thetaStart:s,thetaLength:u};m=m||50;p=p!==undefined?Math.max(3,p):8;
s=s!==undefined?s:0;u=u!==undefined?u:Math.PI*2;var q,r=[],v=new THREE.Vector3(),i=new THREE.Vector2(0.5,0.5);
this.vertices.push(v);r.push(i);for(q=0;q<=p;q++){var n=new THREE.Vector3();var o=s+q/p*u;
n.x=m*Math.cos(o);n.y=m*Math.sin(o);this.vertices.push(n);r.push(new THREE.Vector2((n.x/m+1)/2,(n.y/m+1)/2))
}var t=new THREE.Vector3(0,0,1);for(q=1;q<=p;q++){this.faces.push(new THREE.Face3(q,q+1,0,[t.clone(),t.clone(),t.clone()]));
this.faceVertexUvs[0].push([r[q].clone(),r[q+1].clone(),i.clone()])}this.computeFaceNormals();
this.boundingSphere=new THREE.Sphere(new THREE.Vector3(),m)};THREE.CircleGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.CircleGeometry.prototype.constructor=THREE.CircleGeometry;THREE.CubeGeometry=function(l,h,i,j,k,g){THREE.warn("THREE.CubeGeometry has been renamed to THREE.BoxGeometry.");
return new THREE.BoxGeometry(l,h,i,j,k,g)};THREE.CylinderGeometry=function(ai,u,Z,ap,ad,P,an,Y){THREE.Geometry.call(this);
this.type="CylinderGeometry";this.parameters={radiusTop:ai,radiusBottom:u,height:Z,radialSegments:ap,heightSegments:ad,openEnded:P,thetaStart:an,thetaLength:Y};
ai=ai!==undefined?ai:20;u=u!==undefined?u:20;Z=Z!==undefined?Z:100;ap=ap||8;ad=ad||1;
P=P!==undefined?P:false;an=an!==undefined?an:0;Y=Y!==undefined?Y:2*Math.PI;var W=Z/2;
var ac,ae,am=[],aa=[];for(ae=0;ae<=ad;ae++){var ab=[];var v=[];var X=ae/ad;var ao=X*(u-ai)+ai;
for(ac=0;ac<=ap;ac++){var V=ac/ap;var R=new THREE.Vector3();R.x=ao*Math.sin(V*Y+an);
R.y=-X*Z+W;R.z=ao*Math.cos(V*Y+an);this.vertices.push(R);ab.push(this.vertices.length-1);
v.push(new THREE.Vector2(V,1-X))}am.push(ab);aa.push(v)}var T=(u-ai)/Z;var ag,aj;
for(ac=0;ac<ap;ac++){if(ai!==0){ag=this.vertices[am[0][ac]].clone();aj=this.vertices[am[0][ac+1]].clone()
}else{ag=this.vertices[am[1][ac]].clone();aj=this.vertices[am[1][ac+1]].clone()
}ag.setY(Math.sqrt(ag.x*ag.x+ag.z*ag.z)*T).normalize();aj.setY(Math.sqrt(aj.x*aj.x+aj.z*aj.z)*T).normalize();
for(ae=0;ae<ad;ae++){var aq=am[ae][ac];var ar=am[ae+1][ac];var at=am[ae+1][ac+1];
var au=am[ae][ac+1];var af=ag.clone();var ah=ag.clone();var ak=aj.clone();var al=aj.clone();
var O=aa[ae][ac].clone();var Q=aa[ae+1][ac].clone();var S=aa[ae+1][ac+1].clone();
var U=aa[ae][ac+1].clone();this.faces.push(new THREE.Face3(aq,ar,au,[af,ah,al]));
this.faceVertexUvs[0].push([O,Q,U]);this.faces.push(new THREE.Face3(ar,at,au,[ah.clone(),ak,al.clone()]));
this.faceVertexUvs[0].push([Q.clone(),S,U.clone()])}}if(P===false&&ai>0){this.vertices.push(new THREE.Vector3(0,W,0));
for(ac=0;ac<ap;ac++){var aq=am[0][ac];var ar=am[0][ac+1];var at=this.vertices.length-1;
var af=new THREE.Vector3(0,1,0);var ah=new THREE.Vector3(0,1,0);var ak=new THREE.Vector3(0,1,0);
var O=aa[0][ac].clone();var Q=aa[0][ac+1].clone();var S=new THREE.Vector2(Q.x,0);
this.faces.push(new THREE.Face3(aq,ar,at,[af,ah,ak]));this.faceVertexUvs[0].push([O,Q,S])
}}if(P===false&&u>0){this.vertices.push(new THREE.Vector3(0,-W,0));for(ac=0;ac<ap;
ac++){var aq=am[ad][ac+1];var ar=am[ad][ac];var at=this.vertices.length-1;var af=new THREE.Vector3(0,-1,0);
var ah=new THREE.Vector3(0,-1,0);var ak=new THREE.Vector3(0,-1,0);var O=aa[ad][ac+1].clone();
var Q=aa[ad][ac].clone();var S=new THREE.Vector2(Q.x,1);this.faces.push(new THREE.Face3(aq,ar,at,[af,ah,ak]));
this.faceVertexUvs[0].push([O,Q,S])}}this.computeFaceNormals()};THREE.CylinderGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.CylinderGeometry.prototype.constructor=THREE.CylinderGeometry;THREE.ExtrudeGeometry=function(d,c){if(typeof(d)==="undefined"){d=[];
return}THREE.Geometry.call(this);this.type="ExtrudeGeometry";d=d instanceof Array?d:[d];
this.addShapeList(d,c);this.computeFaceNormals()};THREE.ExtrudeGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.ExtrudeGeometry.prototype.constructor=THREE.ExtrudeGeometry;THREE.ExtrudeGeometry.prototype.addShapeList=function(f,i){var g=f.length;
for(var h=0;h<g;h++){var j=f[h];this.addShape(j,i)}};THREE.ExtrudeGeometry.prototype.addShape=function(aN,aD){var a6=aD.amount!==undefined?aD.amount:100;
var a7=aD.bevelThickness!==undefined?aD.bevelThickness:6;var aB=aD.bevelSize!==undefined?aD.bevelSize:a7-2;
var aT=aD.bevelSegments!==undefined?aD.bevelSegments:3;var ba=aD.bevelEnabled!==undefined?aD.bevelEnabled:true;
var aF=aD.curveSegments!==undefined?aD.curveSegments:12;var aq=aD.steps!==undefined?aD.steps:1;
var aZ=aD.extrudePath;var at,aY=false;var aQ=aD.material;var a2=aD.extrudeMaterial;
var aP=aD.UVGenerator!==undefined?aD.UVGenerator:THREE.ExtrudeGeometry.WorldUVGenerator;
var aV,v,j,aA;if(aZ){at=aZ.getSpacedPoints(aq);aY=true;ba=false;aV=aD.frames!==undefined?aD.frames:new THREE.TubeGeometry.FrenetFrames(aZ,aq,false);
v=new THREE.Vector3();j=new THREE.Vector3();aA=new THREE.Vector3()}if(!ba){aT=0;
a7=0;aB=0}var av,aE,aC;var ap=this;var ar=this.vertices.length;var aR=aN.extractPoints(aF);
var a9=aR.shape;var aJ=aR.holes;var b=!THREE.Shape.Utils.isClockWise(a9);if(b){a9=a9.reverse();
for(aE=0,aC=aJ.length;aE<aC;aE++){av=aJ[aE];if(THREE.Shape.Utils.isClockWise(av)){aJ[aE]=av.reverse()
}}b=false}var a0=THREE.Shape.Utils.triangulateShape(a9,aJ);var aS=a9;for(aE=0,aC=aJ.length;
aE<aC;aE++){av=aJ[aE];a9=a9.concat(av)}function az(c,d,a){if(!d){THREE.error("THREE.ExtrudeGeometry: vec does not exist")
}return d.clone().multiplyScalar(a).add(c)}var ax,aW,i,t,aX,aU=a9.length,a1,a3=a0.length;
function aL(E,r,o){var m=1e-10;var a,d,B=1;var A=E.x-r.x,C=E.y-r.y;var q=o.x-E.x,u=o.y-E.y;
var f=(A*A+C*C);var c=(A*u-C*q);if(Math.abs(c)>m){var g=Math.sqrt(f);var H=Math.sqrt(q*q+u*u);
var l=(r.x-C/g);var n=(r.y+A/g);var F=(o.x-u/H);var G=(o.y+q/H);var p=((F-l)*u-(G-n)*q)/(A*u-C*q);
a=(l+A*p-E.x);d=(n+C*p-E.y);var e=(a*a+d*d);if(e<=2){return new THREE.Vector2(a,d)
}else{B=Math.sqrt(e/2)}}else{var D=false;if(A>m){if(q>m){D=true}}else{if(A<-m){if(q<-m){D=true
}}else{if(Math.sign(C)==Math.sign(u)){D=true}}}if(D){a=-C;d=A;B=Math.sqrt(f)}else{a=A;
d=C;B=Math.sqrt(f/2)}}return new THREE.Vector2(a/B,d/B)}var aK=[];for(var aH=0,au=aS.length,aM=au-1,aO=aH+1;
aH<au;aH++,aM++,aO++){if(aM===au){aM=0}if(aO===au){aO=0}aK[aH]=aL(aS[aH],aS[aM],aS[aO])
}var aw=[],k,a8=aK.concat();for(aE=0,aC=aJ.length;aE<aC;aE++){av=aJ[aE];k=[];for(aH=0,au=av.length,aM=au-1,aO=aH+1;
aH<au;aH++,aM++,aO++){if(aM===au){aM=0}if(aO===au){aO=0}k[aH]=aL(av[aH],av[aM],av[aO])
}aw.push(k);a8=a8.concat(k)}for(ax=0;ax<aT;ax++){i=ax/aT;t=a7*(1-i);aW=aB*(Math.sin(i*Math.PI/2));
for(aH=0,au=aS.length;aH<au;aH++){aX=az(aS[aH],aK[aH],aW);s(aX.x,aX.y,-t)}for(aE=0,aC=aJ.length;
aE<aC;aE++){av=aJ[aE];k=aw[aE];for(aH=0,au=av.length;aH<au;aH++){aX=az(av[aH],k[aH],aW);
s(aX.x,aX.y,-t)}}}aW=aB;for(aH=0;aH<aU;aH++){aX=ba?az(a9[aH],a8[aH],aW):a9[aH];
if(!aY){s(aX.x,aX.y,0)}else{j.copy(aV.normals[0]).multiplyScalar(aX.x);v.copy(aV.binormals[0]).multiplyScalar(aX.y);
aA.copy(at[0]).add(j).add(v);s(aA.x,aA.y,aA.z)}}var h;for(h=1;h<=aq;h++){for(aH=0;
aH<aU;aH++){aX=ba?az(a9[aH],a8[aH],aW):a9[aH];if(!aY){s(aX.x,aX.y,a6/aq*h)}else{j.copy(aV.normals[h]).multiplyScalar(aX.x);
v.copy(aV.binormals[h]).multiplyScalar(aX.y);aA.copy(at[h]).add(j).add(v);s(aA.x,aA.y,aA.z)
}}}for(ax=aT-1;ax>=0;ax--){i=ax/aT;t=a7*(1-i);aW=aB*Math.sin(i*Math.PI/2);for(aH=0,au=aS.length;
aH<au;aH++){aX=az(aS[aH],aK[aH],aW);s(aX.x,aX.y,a6+t)}for(aE=0,aC=aJ.length;aE<aC;
aE++){av=aJ[aE];k=aw[aE];for(aH=0,au=av.length;aH<au;aH++){aX=az(av[aH],k[aH],aW);
if(!aY){s(aX.x,aX.y,a6+t)}else{s(aX.x,aX.y+at[aq-1].y,at[aq-1].x+t)}}}}aG();ay();
function aG(){if(ba){var a=0;var c=aU*a;for(aH=0;aH<a3;aH++){a1=a0[aH];a4(a1[2]+c,a1[1]+c,a1[0]+c)
}a=aq+aT*2;c=aU*a;for(aH=0;aH<a3;aH++){a1=a0[aH];a4(a1[0]+c,a1[1]+c,a1[2]+c)}}else{for(aH=0;
aH<a3;aH++){a1=a0[aH];a4(a1[2],a1[1],a1[0])}for(aH=0;aH<a3;aH++){a1=a0[aH];a4(a1[0]+aU*aq,a1[1]+aU*aq,a1[2]+aU*aq)
}}}function ay(){var a=0;aI(aS,a);a+=aS.length;for(aE=0,aC=aJ.length;aE<aC;aE++){av=aJ[aE];
aI(av,a);a+=av.length}}function aI(g,o){var m,p;aH=g.length;while(--aH>=0){m=aH;
p=aH-1;if(p<0){p=g.length-1}var a=0,n=aq+aT*2;for(a=0;a<n;a++){var l=aU*a;var q=aU*(a+1);
var c=o+m+l,d=o+p+l,e=o+p+q,f=o+m+q;a5(c,d,e,f,g,a,n,m,p)}}}function s(a,c,d){ap.vertices.push(new THREE.Vector3(a,c,d))
}function a4(d,e,a){d+=ar;e+=ar;a+=ar;ap.faces.push(new THREE.Face3(d,e,a,null,null,aQ));
var c=aP.generateTopUV(ap,d,e,a);ap.faceVertexUvs[0].push(c)}function a5(d,e,n,o,l,f,a,m,c){d+=ar;
e+=ar;n+=ar;o+=ar;ap.faces.push(new THREE.Face3(d,e,o,null,null,a2));ap.faces.push(new THREE.Face3(e,n,o,null,null,a2));
var g=aP.generateSideWallUV(ap,d,e,n,o);ap.faceVertexUvs[0].push([g[0],g[1],g[3]]);
ap.faceVertexUvs[0].push([g[1],g[2],g[3]])}};THREE.ExtrudeGeometry.WorldUVGenerator={generateTopUV:function(b,c,l,m){var n=b.vertices;
var o=n[c];var p=n[l];var a=n[m];return[new THREE.Vector2(o.x,o.y),new THREE.Vector2(p.x,p.y),new THREE.Vector2(a.x,a.y)]
},generateSideWallUV:function(q,a,b,c,d){var t=q.vertices;var o=t[a];var p=t[b];
var r=t[c];var s=t[d];if(Math.abs(o.y-p.y)<0.01){return[new THREE.Vector2(o.x,1-o.z),new THREE.Vector2(p.x,1-p.z),new THREE.Vector2(r.x,1-r.z),new THREE.Vector2(s.x,1-s.z)]
}else{return[new THREE.Vector2(o.y,1-o.z),new THREE.Vector2(p.y,1-p.z),new THREE.Vector2(r.y,1-r.z),new THREE.Vector2(s.y,1-s.z)]
}}};THREE.ShapeGeometry=function(d,c){THREE.Geometry.call(this);this.type="ShapeGeometry";
if(d instanceof Array===false){d=[d]}this.addShapeList(d,c);this.computeFaceNormals()
};THREE.ShapeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ShapeGeometry.prototype.constructor=THREE.ShapeGeometry;
THREE.ShapeGeometry.prototype.addShapeList=function(e,h){for(var g=0,f=e.length;
g<f;g++){this.addShape(e[g],h)}return this};THREE.ShapeGeometry.prototype.addShape=function(U,S){if(S===undefined){S={}
}var V=S.curveSegments!==undefined?S.curveSegments:12;var L=S.material;var b=S.UVGenerator===undefined?THREE.ExtrudeGeometry.WorldUVGenerator:S.UVGenerator;
var i,F,J;var M=this.vertices.length;var K=U.extractPoints(V);var R=K.shape;var P=K.holes;
var N=!THREE.Shape.Utils.isClockWise(R);if(N){R=R.reverse();for(i=0,F=P.length;
i<F;i++){J=P[i];if(THREE.Shape.Utils.isClockWise(J)){P[i]=J.reverse()}}N=false}var T=THREE.Shape.Utils.triangulateShape(R,P);
var H=R;for(i=0,F=P.length;i<F;i++){J=P[i];R=R.concat(J)}var a,Q=R.length;var O,c=T.length;
for(i=0;i<Q;i++){a=R[i];this.vertices.push(new THREE.Vector3(a.x,a.y,0))}for(i=0;
i<c;i++){O=T[i];var l=O[0]+M;var G=O[1]+M;var I=O[2]+M;this.faces.push(new THREE.Face3(l,G,I,null,null,L));
this.faceVertexUvs[0].push(b.generateTopUV(this,l,G,I))}};THREE.LatheGeometry=function(J,O,S,Q){THREE.Geometry.call(this);
this.type="LatheGeometry";this.parameters={points:J,segments:O,phiStart:S,phiLength:Q};
O=O||12;S=S||0;Q=Q||2*Math.PI;var s=1/(J.length-1);var K=1/O;for(var j=0,U=O;j<=U;
j++){var X=S+j*K*Q;var d=Math.cos(X),T=Math.sin(X);for(var M=0,P=J.length;M<P;M++){var R=J[M];
var L=new THREE.Vector3();L.x=d*R.x-T*R.y;L.y=T*R.x+d*R.y;L.z=R.z;this.vertices.push(L)
}}var Z=J.length;for(var j=0,U=O;j<U;j++){for(var M=0,P=J.length-1;M<P;M++){var V=M+Z*j;
var a=V;var b=V+Z;var d=V+1+Z;var i=V+1;var N=j*K;var W=M*s;var c=N+K;var Y=W+s;
this.faces.push(new THREE.Face3(a,b,i));this.faceVertexUvs[0].push([new THREE.Vector2(N,W),new THREE.Vector2(c,W),new THREE.Vector2(N,Y)]);
this.faces.push(new THREE.Face3(b,d,i));this.faceVertexUvs[0].push([new THREE.Vector2(c,W),new THREE.Vector2(c,Y),new THREE.Vector2(N,Y)])
}}this.mergeVertices();this.computeFaceNormals();this.computeVertexNormals()};THREE.LatheGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.LatheGeometry.prototype.constructor=THREE.LatheGeometry;THREE.PlaneGeometry=function(e,f,g,h){THREE.Geometry.call(this);
this.type="PlaneGeometry";this.parameters={width:e,height:f,widthSegments:g,heightSegments:h};
this.fromBufferGeometry(new THREE.PlaneBufferGeometry(e,f,g,h))};THREE.PlaneGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.PlaneGeometry.prototype.constructor=THREE.PlaneGeometry;THREE.PlaneBufferGeometry=function(K,O,ac,Q){THREE.BufferGeometry.call(this);
this.type="PlaneBufferGeometry";this.parameters={width:K,height:O,widthSegments:ac,heightSegments:Q};
var Y=K/2;var aa=O/2;var R=ac||1;var c=Q||1;var P=R+1;var ad=c+1;var a=K/R;var M=O/c;
var V=new Float32Array(P*ad*3);var L=new Float32Array(P*ad*3);var S=new Float32Array(P*ad*2);
var W=0;var I=0;for(var ab=0;ab<ad;ab++){var U=ab*M-aa;for(var Z=0;Z<P;Z++){var T=Z*a-Y;
V[W]=T;V[W+1]=-U;L[W+2]=1;S[I]=Z/R;S[I+1]=1-(ab/c);W+=3;I+=2}}W=0;var X=new ((V.length/3)>65535?Uint32Array:Uint16Array)(R*c*6);
for(var ab=0;ab<c;ab++){for(var Z=0;Z<R;Z++){var b=Z+P*ab;var d=Z+P*(ab+1);var J=(Z+1)+P*(ab+1);
var N=(Z+1)+P*ab;X[W]=b;X[W+1]=d;X[W+2]=N;X[W+3]=d;X[W+4]=J;X[W+5]=N;W+=6}}this.addAttribute("index",new THREE.BufferAttribute(X,1));
this.addAttribute("position",new THREE.BufferAttribute(V,3));this.addAttribute("normal",new THREE.BufferAttribute(L,3));
this.addAttribute("uv",new THREE.BufferAttribute(S,2))};THREE.PlaneBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype);
THREE.PlaneBufferGeometry.prototype.constructor=THREE.PlaneBufferGeometry;THREE.RingGeometry=function(E,v,H,o,G,B){THREE.Geometry.call(this);
this.type="RingGeometry";this.parameters={innerRadius:E,outerRadius:v,thetaSegments:H,phiSegments:o,thetaStart:G,thetaLength:B};
E=E||0;v=v||50;G=G!==undefined?G:0;B=B!==undefined?B:Math.PI*2;H=H!==undefined?Math.max(3,H):8;
o=o!==undefined?Math.max(1,o):8;var n,C,D=[],I=E,F=((v-E)/o);for(n=0;n<o+1;n++){for(C=0;
C<H+1;C++){var i=new THREE.Vector3();var L=G+C/H*B;i.x=I*Math.cos(L);i.y=I*Math.sin(L);
this.vertices.push(i);D.push(new THREE.Vector2((i.x/v+1)/2,(i.y/v+1)/2))}I+=F}var A=new THREE.Vector3(0,0,1);
for(n=0;n<o;n++){var N=n*(H+1);for(C=0;C<H;C++){var L=C+N;var J=L;var K=L+H+1;var M=L+H+2;
this.faces.push(new THREE.Face3(J,K,M,[A.clone(),A.clone(),A.clone()]));this.faceVertexUvs[0].push([D[J].clone(),D[K].clone(),D[M].clone()]);
J=L;K=L+H+2;M=L+1;this.faces.push(new THREE.Face3(J,K,M,[A.clone(),A.clone(),A.clone()]));
this.faceVertexUvs[0].push([D[J].clone(),D[K].clone(),D[M].clone()])}}this.computeFaceNormals();
this.boundingSphere=new THREE.Sphere(new THREE.Vector3(),I)};THREE.RingGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.RingGeometry.prototype.constructor=THREE.RingGeometry;THREE.SphereGeometry=function(ac,ad,O,K,P,ab,R){THREE.Geometry.call(this);
this.type="SphereGeometry";this.parameters={radius:ac,widthSegments:ad,heightSegments:O,phiStart:K,phiLength:P,thetaStart:ab,thetaLength:R};
ac=ac||50;ad=Math.max(3,Math.floor(ad)||8);O=Math.max(2,Math.floor(O)||6);K=K!==undefined?K:0;
P=P!==undefined?P:Math.PI*2;ab=ab!==undefined?ab:0;R=R!==undefined?R:Math.PI;var U,V,aa=[],T=[];
for(V=0;V<=O;V++){var M=[];var u=[];for(U=0;U<=ad;U++){var Q=U/ad;var S=V/O;var J=new THREE.Vector3();
J.x=-ac*Math.cos(K+Q*P)*Math.sin(ab+S*R);J.y=ac*Math.cos(ab+S*R);J.z=ac*Math.sin(K+Q*P)*Math.sin(ab+S*R);
this.vertices.push(J);M.push(this.vertices.length-1);u.push(new THREE.Vector2(Q,1-S))
}aa.push(M);T.push(u)}for(V=0;V<O;V++){for(U=0;U<ad;U++){var ae=aa[V][U+1];var af=aa[V][U];
var ag=aa[V+1][U];var ah=aa[V+1][U+1];var W=this.vertices[ae].clone().normalize();
var X=this.vertices[af].clone().normalize();var Y=this.vertices[ag].clone().normalize();
var Z=this.vertices[ah].clone().normalize();var v=T[V][U+1].clone();var I=T[V][U].clone();
var L=T[V+1][U].clone();var N=T[V+1][U+1].clone();if(Math.abs(this.vertices[ae].y)===ac){v.x=(v.x+I.x)/2;
this.faces.push(new THREE.Face3(ae,ag,ah,[W,Y,Z]));this.faceVertexUvs[0].push([v,L,N])
}else{if(Math.abs(this.vertices[ag].y)===ac){L.x=(L.x+N.x)/2;this.faces.push(new THREE.Face3(ae,af,ag,[W,X,Y]));
this.faceVertexUvs[0].push([v,I,L])}else{this.faces.push(new THREE.Face3(ae,af,ah,[W,X,Z]));
this.faceVertexUvs[0].push([v,I,N]);this.faces.push(new THREE.Face3(af,ag,ah,[X.clone(),Y,Z.clone()]));
this.faceVertexUvs[0].push([I.clone(),L,N.clone()])}}}}this.computeFaceNormals();
this.boundingSphere=new THREE.Sphere(new THREE.Vector3(),ac)};THREE.SphereGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.SphereGeometry.prototype.constructor=THREE.SphereGeometry;THREE.TextGeometry=function(d,e){e=e||{};
var f=THREE.FontUtils.generateShapes(d,e);e.amount=e.height!==undefined?e.height:50;
if(e.bevelThickness===undefined){e.bevelThickness=10}if(e.bevelSize===undefined){e.bevelSize=8
}if(e.bevelEnabled===undefined){e.bevelEnabled=false}THREE.ExtrudeGeometry.call(this,f,e);
this.type="TextGeometry"};THREE.TextGeometry.prototype=Object.create(THREE.ExtrudeGeometry.prototype);
THREE.TextGeometry.prototype.constructor=THREE.TextGeometry;THREE.TorusGeometry=function(L,M,N,I,K){THREE.Geometry.call(this);
this.type="TorusGeometry";this.parameters={radius:L,tube:M,radialSegments:N,tubularSegments:I,arc:K};
L=L||100;M=M||40;N=N||8;I=I||6;K=K||Math.PI*2;var d=new THREE.Vector3(),H=[],E=[];
for(var u=0;u<=N;u++){for(var i=0;i<=I;i++){var F=i/I*K;var G=u/N*Math.PI*2;d.x=L*Math.cos(F);
d.y=L*Math.sin(F);var b=new THREE.Vector3();b.x=(L+M*Math.cos(G))*Math.cos(F);b.y=(L+M*Math.cos(G))*Math.sin(F);
b.z=M*Math.sin(G);this.vertices.push(b);H.push(new THREE.Vector2(i/I,u/N));E.push(b.clone().sub(d).normalize())
}}for(var u=1;u<=N;u++){for(var i=1;i<=I;i++){var c=(I+1)*u+i-1;var j=(I+1)*(u-1)+i-1;
var v=(I+1)*(u-1)+i;var a=(I+1)*u+i;var J=new THREE.Face3(c,j,a,[E[c].clone(),E[j].clone(),E[a].clone()]);
this.faces.push(J);this.faceVertexUvs[0].push([H[c].clone(),H[j].clone(),H[a].clone()]);
J=new THREE.Face3(j,v,a,[E[j].clone(),E[v].clone(),E[a].clone()]);this.faces.push(J);
this.faceVertexUvs[0].push([H[j].clone(),H[v].clone(),H[a].clone()])}}this.computeFaceNormals()
};THREE.TorusGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TorusGeometry.prototype.constructor=THREE.TorusGeometry;
THREE.TorusKnotGeometry=function(aa,ad,ah,ae,X,Z,am){THREE.Geometry.call(this);
this.type="TorusKnotGeometry";this.parameters={radius:aa,tube:ad,radialSegments:ah,tubularSegments:ae,p:X,q:Z,heightScale:am};
aa=aa||100;ad=ad||40;ah=ah||64;ae=ae||8;X=X||2;Z=Z||3;am=am||1;var an=new Array(ah);
var ag=new THREE.Vector3();var W=new THREE.Vector3();var a=new THREE.Vector3();
for(var u=0;u<ah;++u){an[u]=new Array(ae);var ab=u/ah*2*X*Math.PI;var ak=q(ab,Z,X,aa,am);
var al=q(ab+0.01,Z,X,aa,am);ag.subVectors(al,ak);W.addVectors(al,ak);a.crossVectors(ag,W);
W.crossVectors(a,ag);a.normalize();W.normalize();for(var U=0;U<ae;++U){var ac=U/ae*2*Math.PI;
var ai=-ad*Math.cos(ac);var aj=ad*Math.sin(ac);var Y=new THREE.Vector3();Y.x=ak.x+ai*W.x+aj*a.x;
Y.y=ak.y+ai*W.y+aj*a.y;Y.z=ak.z+ai*W.z+aj*a.z;an[u][U]=this.vertices.push(Y)-1}}for(var u=0;
u<ah;++u){for(var U=0;U<ae;++U){var af=(u+1)%ah;var V=(U+1)%ae;var b=an[u][U];var c=an[af][U];
var d=an[af][V];var i=an[u][V];var j=new THREE.Vector2(u/ah,U/ae);var n=new THREE.Vector2((u+1)/ah,U/ae);
var p=new THREE.Vector2((u+1)/ah,(U+1)/ae);var v=new THREE.Vector2(u/ah,(U+1)/ae);
this.faces.push(new THREE.Face3(b,c,i));this.faceVertexUvs[0].push([j,n,v]);this.faces.push(new THREE.Face3(c,d,i));
this.faceVertexUvs[0].push([n.clone(),p,v.clone()])}}this.computeFaceNormals();
this.computeVertexNormals();function q(k,f,A,e,t){var l=Math.cos(k);var h=Math.sin(k);
var m=f/A*k;var g=Math.cos(m);var o=e*(2+g)*0.5*l;var r=e*(2+g)*h*0.5;var s=t*e*Math.sin(m)*0.5;
return new THREE.Vector3(o,r,s)}};THREE.TorusKnotGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.TorusKnotGeometry.prototype.constructor=THREE.TorusKnotGeometry;THREE.TubeGeometry=function(aa,av,ab,ag,ac,i){THREE.Geometry.call(this);
this.type="TubeGeometry";this.parameters={path:aa,segments:av,radius:ab,radialSegments:ag,closed:ac};
av=av||64;ab=ab||1;ag=ag||8;ac=ac||false;i=i||THREE.TubeGeometry.NoTaper;var ae=[];
var ak=this,ai,ad,aj,ay=av+1,af,ah,Z,ap,aq,al,ax=new THREE.Vector3(),X,Y,am,aw,a,b,c,d,j,r,u,v;
var ao=new THREE.TubeGeometry.FrenetFrames(aa,av,ac),an=ao.tangents,ar=ao.normals,at=ao.binormals;
this.tangents=an;this.normals=ar;this.binormals=at;function au(f,g,e){return ak.vertices.push(new THREE.Vector3(f,g,e))-1
}for(X=0;X<ay;X++){ae[X]=[];af=X/(ay-1);al=aa.getPointAt(af);ai=an[X];ad=ar[X];
aj=at[X];Z=ab*i(af);for(Y=0;Y<ag;Y++){ah=Y/ag*2*Math.PI;ap=-Z*Math.cos(ah);aq=Z*Math.sin(ah);
ax.copy(al);ax.x+=ap*ad.x+aq*aj.x;ax.y+=ap*ad.y+aq*aj.y;ax.z+=ap*ad.z+aq*aj.z;ae[X][Y]=au(ax.x,ax.y,ax.z)
}}for(X=0;X<av;X++){for(Y=0;Y<ag;Y++){am=(ac)?(X+1)%av:X+1;aw=(Y+1)%ag;a=ae[X][Y];
b=ae[am][Y];c=ae[am][aw];d=ae[X][aw];j=new THREE.Vector2(X/av,Y/ag);r=new THREE.Vector2((X+1)/av,Y/ag);
u=new THREE.Vector2((X+1)/av,(Y+1)/ag);v=new THREE.Vector2(X/av,(Y+1)/ag);this.faces.push(new THREE.Face3(a,b,d));
this.faceVertexUvs[0].push([j,r,v]);this.faces.push(new THREE.Face3(b,c,d));this.faceVertexUvs[0].push([r.clone(),u,v.clone()])
}}this.computeFaceNormals();this.computeVertexNormals()};THREE.TubeGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.TubeGeometry.prototype.constructor=THREE.TubeGeometry;THREE.TubeGeometry.NoTaper=function(b){return 1
};THREE.TubeGeometry.SinusoidalTaper=function(b){return Math.sin(Math.PI*b)};THREE.TubeGeometry.FrenetFrames=function(G,E,N){var u=new THREE.Vector3(),F=[],H=[],M=[],I=new THREE.Vector3(),C=new THREE.Matrix4(),O=E+1,L,i=0.0001,P,v,A,B,D,J;
this.tangents=F;this.normals=H;this.binormals=M;for(D=0;D<O;D++){J=D/(O-1);F[D]=G.getTangentAt(J);
F[D].normalize()}K();function K(){H[0]=new THREE.Vector3();M[0]=new THREE.Vector3();
P=Number.MAX_VALUE;v=Math.abs(F[0].x);A=Math.abs(F[0].y);B=Math.abs(F[0].z);if(v<=P){P=v;
u.set(1,0,0)}if(A<=P){P=A;u.set(0,1,0)}if(B<=P){u.set(0,0,1)}I.crossVectors(F[0],u).normalize();
H[0].crossVectors(F[0],I);M[0].crossVectors(F[0],H[0])}for(D=1;D<O;D++){H[D]=H[D-1].clone();
M[D]=M[D-1].clone();I.crossVectors(F[D-1],F[D]);if(I.length()>i){I.normalize();
L=Math.acos(THREE.Math.clamp(F[D-1].dot(F[D]),-1,1));H[D].applyMatrix4(C.makeRotationAxis(I,L))
}M[D].crossVectors(F[D],H[D])}if(N){L=Math.acos(THREE.Math.clamp(H[0].dot(H[O-1]),-1,1));
L/=(O-1);if(F[0].dot(I.crossVectors(H[0],H[O-1]))>0){L=-L}for(D=1;D<O;D++){H[D].applyMatrix4(C.makeRotationAxis(F[D],L*D));
M[D].crossVectors(F[D],H[D])}}};THREE.PolyhedronGeometry=function(T,U,V,i){THREE.Geometry.call(this);
this.type="PolyhedronGeometry";this.parameters={vertices:T,indices:U,radius:V,detail:i};
V=V||1;i=i||0;var S=this;for(var N=0,l=T.length;N<l;N+=3){Z(new THREE.Vector3(T[N],T[N+1],T[N+2]))
}var K=this.vertices;var ab=[];for(var N=0,R=0,l=U.length;N<l;N+=3,R++){var X=K[U[N]];
var Y=K[U[N+1]];var ac=K[U[N+2]];ab[R]=new THREE.Face3(X.index,Y.index,ac.index,[X.clone(),Y.clone(),ac.clone()])
}var M=new THREE.Vector3();for(var N=0,l=ab.length;N<l;N++){P(ab[N],i)}for(var N=0,l=this.faceVertexUvs[0].length;
N<l;N++){var O=this.faceVertexUvs[0][N];var j=O[0].x;var I=O[1].x;var J=O[2].x;
var Q=Math.max(j,Math.max(I,J));var p=Math.min(j,Math.min(I,J));if(Q>0.9&&p<0.1){if(j<0.2){O[0].x+=1
}if(I<0.2){O[1].x+=1}if(J<0.2){O[2].x+=1}}}for(var N=0,l=this.vertices.length;N<l;
N++){this.vertices[N].multiplyScalar(V)}this.mergeVertices();this.computeFaceNormals();
this.boundingSphere=new THREE.Sphere(new THREE.Vector3(),V);function Z(c){var d=c.normalize().clone();
d.index=S.vertices.push(d)-1;var a=L(c)/2/Math.PI+0.5;var b=aa(c)/Math.PI+0.5;d.uv=new THREE.Vector2(a,1-b);
return d}function W(c,e,a){var b=new THREE.Face3(c.index,e.index,a.index,[c.clone(),e.clone(),a.clone()]);
S.faces.push(b);M.copy(c).add(e).add(a).divideScalar(3);var d=L(M);S.faceVertexUvs[0].push([ad(c.uv,c,d),ad(e.uv,e,d),ad(a.uv,a,d)])
}function P(k,n){var g=Math.pow(2,n);var e=Z(S.vertices[k.a]);var f=Z(S.vertices[k.b]);
var h=Z(S.vertices[k.c]);var d=[];for(var o=0;o<=g;o++){d[o]=[];var m=Z(e.clone().lerp(h,o/g));
var b=Z(f.clone().lerp(h,o/g));var c=g-o;for(var q=0;q<=c;q++){if(q==0&&o==g){d[o][q]=m
}else{d[o][q]=Z(m.clone().lerp(b,q/c))}}}for(var o=0;o<g;o++){for(var q=0;q<2*(g-o)-1;
q++){var a=Math.floor(q/2);if(q%2==0){W(d[o][a+1],d[o+1][a],d[o][a])}else{W(d[o][a+1],d[o+1][a+1],d[o+1][a])
}}}}function L(a){return Math.atan2(a.z,-a.x)}function aa(a){return Math.atan2(-a.y,Math.sqrt((a.x*a.x)+(a.z*a.z)))
}function ad(b,c,a){if((a<0)&&(b.x===1)){b=new THREE.Vector2(b.x-1,b.y)}if((c.x===0)&&(c.z===0)){b=new THREE.Vector2(a/2/Math.PI+0.5,b.y)
}return b.clone()}};THREE.PolyhedronGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.PolyhedronGeometry.prototype.constructor=THREE.PolyhedronGeometry;THREE.DodecahedronGeometry=function(h,k){this.parameters={radius:h,detail:k};
var l=(1+Math.sqrt(5))/2;var j=1/l;var g=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-j,-l,0,-j,l,0,j,-l,0,j,l,-j,-l,0,-j,l,0,j,-l,0,j,l,0,-l,0,-j,l,0,-j,-l,0,j,l,0,j];
var i=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];
THREE.PolyhedronGeometry.call(this,g,i,h,k)};THREE.DodecahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.DodecahedronGeometry.prototype.constructor=THREE.DodecahedronGeometry;THREE.IcosahedronGeometry=function(g,i){var j=(1+Math.sqrt(5))/2;
var f=[-1,j,0,1,j,0,-1,-j,0,1,-j,0,0,-1,j,0,1,j,0,-1,-j,0,1,-j,j,0,-1,j,0,1,-j,0,-1,-j,0,1];
var h=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];
THREE.PolyhedronGeometry.call(this,f,h,g,i);this.type="IcosahedronGeometry";this.parameters={radius:g,detail:i}
};THREE.IcosahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.IcosahedronGeometry.prototype.constructor=THREE.IcosahedronGeometry;
THREE.OctahedronGeometry=function(f,h){this.parameters={radius:f,detail:h};var e=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1];
var g=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];THREE.PolyhedronGeometry.call(this,e,g,f,h);
this.type="OctahedronGeometry";this.parameters={radius:f,detail:h}};THREE.OctahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.OctahedronGeometry.prototype.constructor=THREE.OctahedronGeometry;THREE.TetrahedronGeometry=function(f,h){var e=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1];
var g=[2,1,0,0,3,2,1,3,0,2,3,1];THREE.PolyhedronGeometry.call(this,e,g,f,h);this.type="TetrahedronGeometry";
this.parameters={radius:f,detail:h}};THREE.TetrahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.TetrahedronGeometry.prototype.constructor=THREE.TetrahedronGeometry;THREE.ParametricGeometry=function(P,Q,u){THREE.Geometry.call(this);
this.type="ParametricGeometry";this.parameters={func:P,slices:Q,stacks:u};var a=this.vertices;
var R=this.faces;var O=this.faceVertexUvs[0];var H,K,L;var M,N;var b=Q+1;for(H=0;
H<=u;H++){N=H/u;for(K=0;K<=Q;K++){M=K/Q;L=P(M,N);a.push(L)}}var c,j,v,I;var d,i,p,J;
for(H=0;H<u;H++){for(K=0;K<Q;K++){c=H*b+K;j=H*b+K+1;v=(H+1)*b+K+1;I=(H+1)*b+K;d=new THREE.Vector2(K/Q,H/u);
i=new THREE.Vector2((K+1)/Q,H/u);p=new THREE.Vector2((K+1)/Q,(H+1)/u);J=new THREE.Vector2(K/Q,(H+1)/u);
R.push(new THREE.Face3(c,j,I));O.push([d,i,J]);R.push(new THREE.Face3(j,v,I));O.push([i.clone(),p,J.clone()])
}}this.computeFaceNormals();this.computeVertexNormals()};THREE.ParametricGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.ParametricGeometry.prototype.constructor=THREE.ParametricGeometry;THREE.AxisHelper=function(j){j=j||1;
var f=new Float32Array([0,0,0,j,0,0,0,0,0,0,j,0,0,0,0,0,0,j]);var g=new Float32Array([1,0,0,1,0.6,0,0,1,0,0.6,1,0,0,0,1,0,0.6,1]);
var h=new THREE.BufferGeometry();h.addAttribute("position",new THREE.BufferAttribute(f,3));
h.addAttribute("color",new THREE.BufferAttribute(g,3));var i=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});
THREE.Line.call(this,h,i,THREE.LinePieces)};THREE.AxisHelper.prototype=Object.create(THREE.Line.prototype);
THREE.AxisHelper.prototype.constructor=THREE.AxisHelper;THREE.ArrowHelper=(function(){var d=new THREE.Geometry();
d.vertices.push(new THREE.Vector3(0,0,0),new THREE.Vector3(0,1,0));var c=new THREE.CylinderGeometry(0,0.5,1,5,1);
c.applyMatrix(new THREE.Matrix4().makeTranslation(0,-0.5,0));return function(b,i,a,j,k,l){THREE.Object3D.call(this);
if(j===undefined){j=16776960}if(a===undefined){a=1}if(k===undefined){k=0.2*a}if(l===undefined){l=0.2*k
}this.position.copy(i);this.line=new THREE.Line(d,new THREE.LineBasicMaterial({color:j}));
this.line.matrixAutoUpdate=false;this.add(this.line);this.cone=new THREE.Mesh(c,new THREE.MeshBasicMaterial({color:j}));
this.cone.matrixAutoUpdate=false;this.add(this.cone);this.setDirection(b);this.setLength(a,k,l)
}}());THREE.ArrowHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.ArrowHelper.prototype.constructor=THREE.ArrowHelper;
THREE.ArrowHelper.prototype.setDirection=(function(){var d=new THREE.Vector3();
var c;return function(a){if(a.y>0.99999){this.quaternion.set(0,0,0,1)}else{if(a.y<-0.99999){this.quaternion.set(1,0,0,0)
}else{d.set(a.z,0,-a.x).normalize();c=Math.acos(a.y);this.quaternion.setFromAxisAngle(d,c)
}}}}());THREE.ArrowHelper.prototype.setLength=function(f,d,e){if(d===undefined){d=0.2*f
}if(e===undefined){e=0.2*d}this.line.scale.set(1,f-d,1);this.line.updateMatrix();
this.cone.scale.set(e,d,e);this.cone.position.y=f;this.cone.updateMatrix()};THREE.ArrowHelper.prototype.setColor=function(b){this.line.material.color.set(b);
this.cone.material.color.set(b)};THREE.BoxHelper=function(d){var c=new THREE.BufferGeometry();
c.addAttribute("position",new THREE.BufferAttribute(new Float32Array(72),3));THREE.Line.call(this,c,new THREE.LineBasicMaterial({color:16776960}),THREE.LinePieces);
if(d!==undefined){this.update(d)}};THREE.BoxHelper.prototype=Object.create(THREE.Line.prototype);
THREE.BoxHelper.prototype.constructor=THREE.BoxHelper;THREE.BoxHelper.prototype.update=function(j){var h=j.geometry;
if(h.boundingBox===null){h.computeBoundingBox()}var i=h.boundingBox.min;var g=h.boundingBox.max;
var f=this.geometry.attributes.position.array;f[0]=g.x;f[1]=g.y;f[2]=g.z;f[3]=i.x;
f[4]=g.y;f[5]=g.z;f[6]=i.x;f[7]=g.y;f[8]=g.z;f[9]=i.x;f[10]=i.y;f[11]=g.z;f[12]=i.x;
f[13]=i.y;f[14]=g.z;f[15]=g.x;f[16]=i.y;f[17]=g.z;f[18]=g.x;f[19]=i.y;f[20]=g.z;
f[21]=g.x;f[22]=g.y;f[23]=g.z;f[24]=g.x;f[25]=g.y;f[26]=i.z;f[27]=i.x;f[28]=g.y;
f[29]=i.z;f[30]=i.x;f[31]=g.y;f[32]=i.z;f[33]=i.x;f[34]=i.y;f[35]=i.z;f[36]=i.x;
f[37]=i.y;f[38]=i.z;f[39]=g.x;f[40]=i.y;f[41]=i.z;f[42]=g.x;f[43]=i.y;f[44]=i.z;
f[45]=g.x;f[46]=g.y;f[47]=i.z;f[48]=g.x;f[49]=g.y;f[50]=g.z;f[51]=g.x;f[52]=g.y;
f[53]=i.z;f[54]=i.x;f[55]=g.y;f[56]=g.z;f[57]=i.x;f[58]=g.y;f[59]=i.z;f[60]=i.x;
f[61]=i.y;f[62]=g.z;f[63]=i.x;f[64]=i.y;f[65]=i.z;f[66]=g.x;f[67]=i.y;f[68]=g.z;
f[69]=g.x;f[70]=i.y;f[71]=i.z;this.geometry.attributes.position.needsUpdate=true;
this.geometry.computeBoundingSphere();this.matrix=j.matrixWorld;this.matrixAutoUpdate=false
};THREE.BoundingBoxHelper=function(d,f){var e=(f!==undefined)?f:8947848;this.object=d;
this.box=new THREE.Box3();THREE.Mesh.call(this,new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({color:e,wireframe:true}))
};THREE.BoundingBoxHelper.prototype=Object.create(THREE.Mesh.prototype);THREE.BoundingBoxHelper.prototype.constructor=THREE.BoundingBoxHelper;
THREE.BoundingBoxHelper.prototype.update=function(){this.box.setFromObject(this.object);
this.box.size(this.scale);this.box.center(this.position)};THREE.CameraHelper=function(r){var o=new THREE.Geometry();
var q=new THREE.LineBasicMaterial({color:16777215,vertexColors:THREE.FaceColors});
var p={};var s=16755200;var l=16711680;var u=43775;var n=16777215;var t=3355443;
m("n1","n2",s);m("n2","n4",s);m("n4","n3",s);m("n3","n1",s);m("f1","f2",s);m("f2","f4",s);
m("f4","f3",s);m("f3","f1",s);m("n1","f1",s);m("n2","f2",s);m("n3","f3",s);m("n4","f4",s);
m("p","n1",l);m("p","n2",l);m("p","n3",l);m("p","n4",l);m("u1","u2",u);m("u2","u3",u);
m("u3","u1",u);m("c","t",n);m("p","c",t);m("cn1","cn2",t);m("cn3","cn4",t);m("cf1","cf2",t);
m("cf3","cf4",t);function m(a,b,c){v(a,c);v(b,c)}function v(a,b){o.vertices.push(new THREE.Vector3());
o.colors.push(new THREE.Color(b));if(p[a]===undefined){p[a]=[]}p[a].push(o.vertices.length-1)
}THREE.Line.call(this,o,q,THREE.LinePieces);this.camera=r;this.matrix=r.matrixWorld;
this.matrixAutoUpdate=false;this.pointMap=p;this.update()};THREE.CameraHelper.prototype=Object.create(THREE.Line.prototype);
THREE.CameraHelper.prototype.constructor=THREE.CameraHelper;THREE.CameraHelper.prototype.update=function(){var h,f;
var g=new THREE.Vector3();var i=new THREE.Camera();var j=function(n,o,a,b){g.set(o,a,b).unproject(i);
var c=f[n];if(c!==undefined){for(var d=0,e=c.length;d<e;d++){h.vertices[c[d]].copy(g)
}}};return function(){h=this.geometry;f=this.pointMap;var b=1,a=1;i.projectionMatrix.copy(this.camera.projectionMatrix);
j("c",0,0,-1);j("t",0,0,1);j("n1",-b,-a,-1);j("n2",b,-a,-1);j("n3",-b,a,-1);j("n4",b,a,-1);
j("f1",-b,-a,1);j("f2",b,-a,1);j("f3",-b,a,1);j("f4",b,a,1);j("u1",b*0.7,a*1.1,-1);
j("u2",-b*0.7,a*1.1,-1);j("u3",0,a*2,-1);j("cf1",-b,0,1);j("cf2",b,0,1);j("cf3",0,-a,1);
j("cf4",0,a,1);j("cn1",-b,0,-1);j("cn2",b,0,-1);j("cn3",0,-a,-1);j("cn4",0,a,-1);
h.verticesNeedUpdate=true}}();THREE.DirectionalLightHelper=function(f,e){THREE.Object3D.call(this);
this.light=f;this.light.updateMatrixWorld();this.matrix=f.matrixWorld;this.matrixAutoUpdate=false;
e=e||1;var g=new THREE.Geometry();g.vertices.push(new THREE.Vector3(-e,e,0),new THREE.Vector3(e,e,0),new THREE.Vector3(e,-e,0),new THREE.Vector3(-e,-e,0),new THREE.Vector3(-e,e,0));
var h=new THREE.LineBasicMaterial({fog:false});h.color.copy(this.light.color).multiplyScalar(this.light.intensity);
this.lightPlane=new THREE.Line(g,h);this.add(this.lightPlane);g=new THREE.Geometry();
g.vertices.push(new THREE.Vector3(),new THREE.Vector3());h=new THREE.LineBasicMaterial({fog:false});
h.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.targetLine=new THREE.Line(g,h);
this.add(this.targetLine);this.update()};THREE.DirectionalLightHelper.prototype=Object.create(THREE.Object3D.prototype);
THREE.DirectionalLightHelper.prototype.constructor=THREE.DirectionalLightHelper;
THREE.DirectionalLightHelper.prototype.dispose=function(){this.lightPlane.geometry.dispose();
this.lightPlane.material.dispose();this.targetLine.geometry.dispose();this.targetLine.material.dispose()
};THREE.DirectionalLightHelper.prototype.update=function(){var f=new THREE.Vector3();
var d=new THREE.Vector3();var e=new THREE.Vector3();return function(){f.setFromMatrixPosition(this.light.matrixWorld);
d.setFromMatrixPosition(this.light.target.matrixWorld);e.subVectors(d,f);this.lightPlane.lookAt(e);
this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);
this.targetLine.geometry.vertices[1].copy(e);this.targetLine.geometry.verticesNeedUpdate=true;
this.targetLine.material.color.copy(this.lightPlane.material.color)}}();THREE.EdgesHelper=function(G,Q,N){var F=(Q!==undefined)?Q:16777215;
N=(N!==undefined)?N:1;var H=Math.cos(THREE.Math.degToRad(N));var T=[0,0],X={};var I=function(a,b){return a-b
};var M=["a","b","c"];var U=new THREE.BufferGeometry();var O;if(G.geometry instanceof THREE.BufferGeometry){O=new THREE.Geometry();
O.fromBufferGeometry(G.geometry)}else{O=G.geometry.clone()}O.mergeVertices();O.computeFaceNormals();
var S=O.vertices;var W=O.faces;var V=0;for(var h=0,K=W.length;h<K;h++){var P=W[h];
for(var l=0;l<3;l++){T[0]=P[M[l]];T[1]=P[M[(l+1)%3]];T.sort(I);var j=T.toString();
if(X[j]===undefined){X[j]={vert1:T[0],vert2:T[1],face1:h,face2:undefined};V++}else{X[j].face2=h
}}}var i=new Float32Array(V*2*3);var R=0;for(var j in X){var L=X[j];if(L.face2===undefined||W[L.face1].normal.dot(W[L.face2].normal)<=H){var J=S[L.vert1];
i[R++]=J.x;i[R++]=J.y;i[R++]=J.z;J=S[L.vert2];i[R++]=J.x;i[R++]=J.y;i[R++]=J.z}}U.addAttribute("position",new THREE.BufferAttribute(i,3));
THREE.Line.call(this,U,new THREE.LineBasicMaterial({color:F}),THREE.LinePieces);
this.matrix=G.matrixWorld;this.matrixAutoUpdate=false};THREE.EdgesHelper.prototype=Object.create(THREE.Line.prototype);
THREE.EdgesHelper.prototype.constructor=THREE.EdgesHelper;THREE.FaceNormalsHelper=function(p,i,r,l){this.object=p;
this.size=(i!==undefined)?i:1;var o=(r!==undefined)?r:16776960;var t=(l!==undefined)?l:1;
var m=new THREE.Geometry();var s=this.object.geometry.faces;for(var n=0,q=s.length;
n<q;n++){m.vertices.push(new THREE.Vector3(),new THREE.Vector3())}THREE.Line.call(this,m,new THREE.LineBasicMaterial({color:o,linewidth:t}),THREE.LinePieces);
this.matrixAutoUpdate=false;this.normalMatrix=new THREE.Matrix3();this.update()
};THREE.FaceNormalsHelper.prototype=Object.create(THREE.Line.prototype);THREE.FaceNormalsHelper.prototype.constructor=THREE.FaceNormalsHelper;
THREE.FaceNormalsHelper.prototype.update=function(){var l=this.geometry.vertices;
var n=this.object;var i=n.geometry.vertices;var q=n.geometry.faces;var r=n.matrixWorld;
n.updateMatrixWorld(true);this.normalMatrix.getNormalMatrix(r);for(var m=0,p=0,o=q.length;
m<o;m++,p+=2){var k=q[m];l[p].copy(i[k.a]).add(i[k.b]).add(i[k.c]).divideScalar(3).applyMatrix4(r);
l[p+1].copy(k.normal).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size).add(l[p])
}this.geometry.verticesNeedUpdate=true;return this};THREE.GridHelper=function(l,j){var i=new THREE.Geometry();
var k=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});this.color1=new THREE.Color(4473924);
this.color2=new THREE.Color(8947848);for(var g=-l;g<=l;g+=j){i.vertices.push(new THREE.Vector3(-l,0,g),new THREE.Vector3(l,0,g),new THREE.Vector3(g,0,-l),new THREE.Vector3(g,0,l));
var h=g===0?this.color1:this.color2;i.colors.push(h,h,h,h)}THREE.Line.call(this,i,k,THREE.LinePieces)
};THREE.GridHelper.prototype=Object.create(THREE.Line.prototype);THREE.GridHelper.prototype.constructor=THREE.GridHelper;
THREE.GridHelper.prototype.setColors=function(c,d){this.color1.set(c);this.color2.set(d);
this.geometry.colorsNeedUpdate=true};THREE.HemisphereLightHelper=function(h,i){THREE.Object3D.call(this);
this.light=h;this.light.updateMatrixWorld();this.matrix=h.matrixWorld;this.matrixAutoUpdate=false;
this.colors=[new THREE.Color(),new THREE.Color()];var j=new THREE.SphereGeometry(i,4,2);
j.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));for(var l=0,g=8;l<g;
l++){j.faces[l].color=this.colors[l<4?0:1]}var k=new THREE.MeshBasicMaterial({vertexColors:THREE.FaceColors,wireframe:true});
this.lightSphere=new THREE.Mesh(j,k);this.add(this.lightSphere);this.update()};
THREE.HemisphereLightHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.HemisphereLightHelper.prototype.constructor=THREE.HemisphereLightHelper;
THREE.HemisphereLightHelper.prototype.dispose=function(){this.lightSphere.geometry.dispose();
this.lightSphere.material.dispose()};THREE.HemisphereLightHelper.prototype.update=function(){var b=new THREE.Vector3();
return function(){this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity);
this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity);
this.lightSphere.lookAt(b.setFromMatrixPosition(this.light.matrixWorld).negate());
this.lightSphere.geometry.colorsNeedUpdate=true}}();THREE.PointLightHelper=function(f,g){this.light=f;
this.light.updateMatrixWorld();var h=new THREE.SphereGeometry(g,4,2);var e=new THREE.MeshBasicMaterial({wireframe:true,fog:false});
e.color.copy(this.light.color).multiplyScalar(this.light.intensity);THREE.Mesh.call(this,h,e);
this.matrix=this.light.matrixWorld;this.matrixAutoUpdate=false};THREE.PointLightHelper.prototype=Object.create(THREE.Mesh.prototype);
THREE.PointLightHelper.prototype.constructor=THREE.PointLightHelper;THREE.PointLightHelper.prototype.dispose=function(){this.geometry.dispose();
this.material.dispose()};THREE.PointLightHelper.prototype.update=function(){this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
};THREE.SkeletonHelper=function(g){this.bones=this.getBoneList(g);var h=new THREE.Geometry();
for(var f=0;f<this.bones.length;f++){var i=this.bones[f];if(i.parent instanceof THREE.Bone){h.vertices.push(new THREE.Vector3());
h.vertices.push(new THREE.Vector3());h.colors.push(new THREE.Color(0,0,1));h.colors.push(new THREE.Color(0,1,0))
}}var j=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors,depthTest:false,depthWrite:false,transparent:true});
THREE.Line.call(this,h,j,THREE.LinePieces);this.root=g;this.matrix=g.matrixWorld;
this.matrixAutoUpdate=false;this.update()};THREE.SkeletonHelper.prototype=Object.create(THREE.Line.prototype);
THREE.SkeletonHelper.prototype.constructor=THREE.SkeletonHelper;THREE.SkeletonHelper.prototype.getBoneList=function(e){var f=[];
if(e instanceof THREE.Bone){f.push(e)}for(var d=0;d<e.children.length;d++){f.push.apply(f,this.getBoneList(e.children[d]))
}return f};THREE.SkeletonHelper.prototype.update=function(){var i=this.geometry;
var j=new THREE.Matrix4().getInverse(this.root.matrixWorld);var l=new THREE.Matrix4();
var h=0;for(var g=0;g<this.bones.length;g++){var k=this.bones[g];if(k.parent instanceof THREE.Bone){l.multiplyMatrices(j,k.matrixWorld);
i.vertices[h].setFromMatrixPosition(l);l.multiplyMatrices(j,k.parent.matrixWorld);
i.vertices[h+1].setFromMatrixPosition(l);h+=2}}i.verticesNeedUpdate=true;i.computeBoundingSphere()
};THREE.SpotLightHelper=function(e){THREE.Object3D.call(this);this.light=e;this.light.updateMatrixWorld();
this.matrix=e.matrixWorld;this.matrixAutoUpdate=false;var f=new THREE.CylinderGeometry(0,1,1,8,1,true);
f.applyMatrix(new THREE.Matrix4().makeTranslation(0,-0.5,0));f.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));
var d=new THREE.MeshBasicMaterial({wireframe:true,fog:false});this.cone=new THREE.Mesh(f,d);
this.add(this.cone);this.update()};THREE.SpotLightHelper.prototype=Object.create(THREE.Object3D.prototype);
THREE.SpotLightHelper.prototype.constructor=THREE.SpotLightHelper;THREE.SpotLightHelper.prototype.dispose=function(){this.cone.geometry.dispose();
this.cone.material.dispose()};THREE.SpotLightHelper.prototype.update=function(){var d=new THREE.Vector3();
var c=new THREE.Vector3();return function(){var b=this.light.distance?this.light.distance:10000;
var a=b*Math.tan(this.light.angle);this.cone.scale.set(a,a,b);d.setFromMatrixPosition(this.light.matrixWorld);
c.setFromMatrixPosition(this.light.target.matrixWorld);this.cone.lookAt(c.sub(d));
this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
}}();THREE.VertexNormalsHelper=function(v,i,B,j){this.object=v;this.size=(i!==undefined)?i:1;
var u=(B!==undefined)?B:16711680;var D=(j!==undefined)?j:1;var l=new THREE.Geometry();
var C=v.geometry.faces;for(var r=0,A=C.length;r<A;r++){var q=C[r];for(var t=0,s=q.vertexNormals.length;
t<s;t++){l.vertices.push(new THREE.Vector3(),new THREE.Vector3())}}THREE.Line.call(this,l,new THREE.LineBasicMaterial({color:u,linewidth:D}),THREE.LinePieces);
this.matrixAutoUpdate=false;this.normalMatrix=new THREE.Matrix3();this.update()
};THREE.VertexNormalsHelper.prototype=Object.create(THREE.Line.prototype);THREE.VertexNormalsHelper.prototype.constructor=THREE.VertexNormalsHelper;
THREE.VertexNormalsHelper.prototype.update=(function(d){var c=new THREE.Vector3();
return function(D){var G=["a","b","c","d"];this.object.updateMatrixWorld(true);
this.normalMatrix.getNormalMatrix(this.object.matrixWorld);var j=this.geometry.vertices;
var a=this.object.geometry.vertices;var F=this.object.geometry.faces;var i=this.object.matrixWorld;
var H=0;for(var A=0,E=F.length;A<E;A++){var b=F[A];for(var C=0,B=b.vertexNormals.length;
C<B;C++){var l=b[G[C]];var v=a[l];var u=b.vertexNormals[C];j[H].copy(v).applyMatrix4(i);
c.copy(u).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size);
c.add(j[H]);H=H+1;j[H].copy(c);H=H+1}}this.geometry.verticesNeedUpdate=true;return this
}}());THREE.VertexTangentsHelper=function(v,i,B,j){this.object=v;this.size=(i!==undefined)?i:1;
var u=(B!==undefined)?B:255;var D=(j!==undefined)?j:1;var l=new THREE.Geometry();
var C=v.geometry.faces;for(var r=0,A=C.length;r<A;r++){var q=C[r];for(var t=0,s=q.vertexTangents.length;
t<s;t++){l.vertices.push(new THREE.Vector3());l.vertices.push(new THREE.Vector3())
}}THREE.Line.call(this,l,new THREE.LineBasicMaterial({color:u,linewidth:D}),THREE.LinePieces);
this.matrixAutoUpdate=false;this.update()};THREE.VertexTangentsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.VertexTangentsHelper.prototype.constructor=THREE.VertexTangentsHelper;THREE.VertexTangentsHelper.prototype.update=(function(d){var c=new THREE.Vector3();
return function(D){var G=["a","b","c","d"];this.object.updateMatrixWorld(true);
var l=this.geometry.vertices;var b=this.object.geometry.vertices;var F=this.object.geometry.faces;
var j=this.object.matrixWorld;var a=0;for(var A=0,E=F.length;A<E;A++){var i=F[A];
for(var C=0,B=i.vertexTangents.length;C<B;C++){var u=i[G[C]];var v=b[u];var H=i.vertexTangents[C];
l[a].copy(v).applyMatrix4(j);c.copy(H).transformDirection(j).multiplyScalar(this.size);
c.add(l[a]);a=a+1;l[a].copy(c);a=a+1}}this.geometry.verticesNeedUpdate=true;return this
}}());THREE.WireframeHelper=function(j,W){var Q=(W!==undefined)?W:16777215;var ad=[0,0],al={};
var R=function(a,b){return a-b};var Y=["a","b","c"];var ag=new THREE.BufferGeometry();
if(j.geometry instanceof THREE.Geometry){var ab=j.geometry.vertices;var ak=j.geometry.faces;
var aj=0;var ai=new Uint32Array(6*ak.length);for(var o=0,U=ak.length;o<U;o++){var S=ak[o];
for(var O=0;O<3;O++){ad[0]=S[Y[O]];ad[1]=S[Y[(O+1)%3]];ad.sort(R);var i=ad.toString();
if(al[i]===undefined){ai[2*aj]=ad[0];ai[2*aj+1]=ad[1];al[i]=true;aj++}}}var M=new Float32Array(aj*2*3);
for(var o=0,U=aj;o<U;o++){for(var O=0;O<2;O++){var l=ab[ai[2*o+O]];var X=6*o+3*O;
M[X+0]=l.x;M[X+1]=l.y;M[X+2]=l.z}}ag.addAttribute("position",new THREE.BufferAttribute(M,3))
}else{if(j.geometry instanceof THREE.BufferGeometry){if(j.geometry.attributes.index!==undefined){var ab=j.geometry.attributes.position.array;
var ae=j.geometry.attributes.index.array;var N=j.geometry.drawcalls;var aj=0;if(N.length===0){N=[{count:ae.length,index:0,start:0}]
}var ai=new Uint32Array(2*ae.length);for(var V=0,aa=N.length;V<aa;++V){var ah=N[V].start;
var Z=N[V].count;var X=N[V].index;for(var o=ah,P=ah+Z;o<P;o+=3){for(var O=0;O<3;
O++){ad[0]=X+ae[o+O];ad[1]=X+ae[o+(O+1)%3];ad.sort(R);var i=ad.toString();if(al[i]===undefined){ai[2*aj]=ad[0];
ai[2*aj+1]=ad[1];al[i]=true;aj++}}}}var M=new Float32Array(aj*2*3);for(var o=0,U=aj;
o<U;o++){for(var O=0;O<2;O++){var X=6*o+3*O;var af=3*ai[2*o+O];M[X+0]=ab[af];M[X+1]=ab[af+1];
M[X+2]=ab[af+2]}}ag.addAttribute("position",new THREE.BufferAttribute(M,3))}else{var ab=j.geometry.attributes.position.array;
var aj=ab.length/3;var T=aj/3;var M=new Float32Array(aj*2*3);for(var o=0,U=T;o<U;
o++){for(var O=0;O<3;O++){var X=18*o+6*O;var ac=9*o+3*O;M[X+0]=ab[ac];M[X+1]=ab[ac+1];
M[X+2]=ab[ac+2];var af=9*o+3*((O+1)%3);M[X+3]=ab[af];M[X+4]=ab[af+1];M[X+5]=ab[af+2]
}}ag.addAttribute("position",new THREE.BufferAttribute(M,3))}}}THREE.Line.call(this,ag,new THREE.LineBasicMaterial({color:Q}),THREE.LinePieces);
this.matrix=j.matrixWorld;this.matrixAutoUpdate=false};THREE.WireframeHelper.prototype=Object.create(THREE.Line.prototype);
THREE.WireframeHelper.prototype.constructor=THREE.WireframeHelper;THREE.ImmediateRenderObject=function(){THREE.Object3D.call(this);
this.render=function(b){}};THREE.ImmediateRenderObject.prototype=Object.create(THREE.Object3D.prototype);
THREE.ImmediateRenderObject.prototype.constructor=THREE.ImmediateRenderObject;THREE.MorphBlendMesh=function(j,m){THREE.Mesh.call(this,j,m);
this.animationsMap={};this.animationsList=[];var k=this.geometry.morphTargets.length;
var h="__default";var n=0;var i=k-1;var l=k/1;this.createAnimation(h,n,i,l);this.setAnimationWeight(h,1)
};THREE.MorphBlendMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.MorphBlendMesh.prototype.constructor=THREE.MorphBlendMesh;
THREE.MorphBlendMesh.prototype.createAnimation=function(f,h,g,i){var j={startFrame:h,endFrame:g,length:g-h+1,fps:i,duration:(g-h)/i,lastFrame:0,currentFrame:0,active:false,time:0,direction:1,weight:1,directionBackwards:false,mirroredLoop:false};
this.animationsMap[f]=j;this.animationsList.push(j)};THREE.MorphBlendMesh.prototype.autoCreateAnimations=function(t){var o=/([a-z]+)_?(\d+)/;
var u,q={};var n=this.geometry;for(var s=0,m=n.morphTargets.length;s<m;s++){var i=n.morphTargets[s];
var p=i.name.match(o);if(p&&p.length>1){var v=p[1];if(!q[v]){q[v]={start:Infinity,end:-Infinity}
}var r=q[v];if(s<r.start){r.start=s}if(s>r.end){r.end=s}if(!u){u=v}}}for(var v in q){var r=q[v];
this.createAnimation(v,r.start,r.end,t)}this.firstAnimation=u};THREE.MorphBlendMesh.prototype.setAnimationDirectionForward=function(d){var c=this.animationsMap[d];
if(c){c.direction=1;c.directionBackwards=false}};THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward=function(d){var c=this.animationsMap[d];
if(c){c.direction=-1;c.directionBackwards=true}};THREE.MorphBlendMesh.prototype.setAnimationFPS=function(e,f){var d=this.animationsMap[e];
if(d){d.fps=f;d.duration=(d.end-d.start)/d.fps}};THREE.MorphBlendMesh.prototype.setAnimationDuration=function(e,f){var d=this.animationsMap[e];
if(d){d.duration=f;d.fps=(d.end-d.start)/d.duration}};THREE.MorphBlendMesh.prototype.setAnimationWeight=function(e,f){var d=this.animationsMap[e];
if(d){d.weight=f}};THREE.MorphBlendMesh.prototype.setAnimationTime=function(e,f){var d=this.animationsMap[e];
if(d){d.time=f}};THREE.MorphBlendMesh.prototype.getAnimationTime=function(e){var f=0;
var d=this.animationsMap[e];if(d){f=d.time}return f};THREE.MorphBlendMesh.prototype.getAnimationDuration=function(e){var f=-1;
var d=this.animationsMap[e];if(d){f=d.duration}return f};THREE.MorphBlendMesh.prototype.playAnimation=function(d){var c=this.animationsMap[d];
if(c){c.time=0;c.active=true}else{THREE.warn("THREE.MorphBlendMesh: animation["+d+"] undefined in .playAnimation()")
}};THREE.MorphBlendMesh.prototype.stopAnimation=function(d){var c=this.animationsMap[d];
if(c){c.active=false}};THREE.MorphBlendMesh.prototype.update=function(k){for(var p=0,j=this.animationsList.length;
p<j;p++){var l=this.animationsList[p];if(!l.active){continue}var n=l.duration/l.length;
l.time+=l.direction*k;if(l.mirroredLoop){if(l.time>l.duration||l.time<0){l.direction*=-1;
if(l.time>l.duration){l.time=l.duration;l.directionBackwards=true}if(l.time<0){l.time=0;
l.directionBackwards=false}}}else{l.time=l.time%l.duration;if(l.time<0){l.time+=l.duration
}}var i=l.startFrame+THREE.Math.clamp(Math.floor(l.time/n),0,l.length-1);var m=l.weight;
if(i!==l.currentFrame){this.morphTargetInfluences[l.lastFrame]=0;this.morphTargetInfluences[l.currentFrame]=1*m;
this.morphTargetInfluences[i]=0;l.lastFrame=l.currentFrame;l.currentFrame=i}var o=(l.time%n)/n;
if(l.directionBackwards){o=1-o}this.morphTargetInfluences[l.currentFrame]=o*m;this.morphTargetInfluences[l.lastFrame]=(1-o)*m
}};