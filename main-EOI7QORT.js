import{$ as Bi,$a as ra,A as Zo,Aa as qt,B as li,Ba as tf,C as tu,Ca as xs,D as Ud,Da as nf,E as Bd,Ea as du,F as kd,Fa as Dt,G as An,Ga as ta,H as zd,Ha as Mr,I as Rt,Ia as xn,J as ht,Ja as fu,K as it,Ka as pu,L as Jo,La as na,M as Vd,Ma as Ms,N as dt,Na as It,O as nu,Oa as ui,P as ot,Pa as Le,Q as Ie,Qa as De,R as Fi,Ra as yt,S as Hd,Sa as rf,T as Ko,Ta as Gn,U as Cn,Ua as ia,V as iu,Va as sf,W as Ni,Wa as Ss,X as Ui,Xa as bs,Y as Qo,Ya as ws,Z as ru,Za as Ke,_ as su,_a as Tt,a as Re,aa as ou,ab as Sr,b as Nt,ba as Gd,bb as of,c as Id,ca as au,cb as af,d as mr,da as yr,db as Es,e as Pd,ea as fn,eb as cf,f as Ld,fa as cu,fb as lf,g as Zl,ga as Wd,gb as uf,h as Jl,ha as Xd,hb as hf,i as Tn,ia as $d,j as un,ja as lu,k as Vn,ka as qd,l as hn,la as Hn,m as Ve,ma as jd,n as gs,na as uu,o as Od,oa as Yd,p as Fd,pa as Zd,q as pt,qa as _s,r as Kl,ra as ys,s as dn,sa as Jd,t as Nd,ta as Kd,u as Ql,ua as Qd,v as gr,va as He,w as vr,wa as xr,x as vs,xa as hu,y as eu,ya as ea,z as _r,za as ef}from"./chunk-263WWOMR.js";var Pt=new dt("");var pf=null;function Wn(){return pf}function mu(i){pf??=i}var Ts=class{},gu=(()=>{class i{historyGo(t){throw new Error("")}static \u0275fac=function(n){return new(n||i)};static \u0275prov=it({token:i,factory:()=>Ie(mf),providedIn:"platform"})}return i})();var mf=(()=>{class i extends gu{_location;_history;_doc=Ie(Pt);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Wn().getBaseHref(this._doc)}onPopState(t){let n=Wn().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",t,!1),()=>n.removeEventListener("popstate",t)}onHashChange(t){let n=Wn().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",t,!1),()=>n.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,n,r){this._history.pushState(t,n,r)}replaceState(t,n,r){this._history.replaceState(t,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||i)};static \u0275prov=it({token:i,factory:()=>new i,providedIn:"platform"})}return i})();function gf(i,e){return i?e?i.endsWith("/")?e.startsWith("/")?i+e.slice(1):i+e:e.startsWith("/")?i+e:`${i}/${e}`:i:e}function df(i){let e=i.search(/#|\?|$/);return i[e-1]==="/"?i.slice(0,e-1)+i.slice(e):i}function hi(i){return i&&i[0]!=="?"?`?${i}`:i}var sa=(()=>{class i{historyGo(t){throw new Error("")}static \u0275fac=function(n){return new(n||i)};static \u0275prov=it({token:i,factory:()=>Ie(_f),providedIn:"root"})}return i})(),vf=new dt(""),_f=(()=>{class i extends sa{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,n){super(),this._platformLocation=t,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??Ie(Pt).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return gf(this._baseHref,t)}path(t=!1){let n=this._platformLocation.pathname+hi(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${n}${r}`:n}pushState(t,n,r,s){let o=this.prepareExternalUrl(r+hi(s));this._platformLocation.pushState(t,n,o)}replaceState(t,n,r,s){let o=this.prepareExternalUrl(r+hi(s));this._platformLocation.replaceState(t,n,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(n){return new(n||i)(ot(gu),ot(vf,8))};static \u0275prov=it({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),br=(()=>{class i{_subject=new Tn;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let n=this._locationStrategy.getBaseHref();this._basePath=Fg(df(ff(n))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,n=""){return this.path()==this.normalize(t+hi(n))}normalize(t){return i.stripTrailingSlash(Og(this._basePath,ff(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,n="",r=null){this._locationStrategy.pushState(r,"",t,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+hi(n)),r)}replaceState(t,n="",r=null){this._locationStrategy.replaceState(r,"",t,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+hi(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",n){this._urlChangeListeners.forEach(r=>r(t,n))}subscribe(t,n,r){return this._subject.subscribe({next:t,error:n??void 0,complete:r??void 0})}static normalizeQueryParams=hi;static joinWithSlash=gf;static stripTrailingSlash=df;static \u0275fac=function(n){return new(n||i)(ot(sa))};static \u0275prov=it({token:i,factory:()=>Lg(),providedIn:"root"})}return i})();function Lg(){return new br(ot(sa))}function Og(i,e){if(!i||!e.startsWith(i))return e;let t=e.substring(i.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function ff(i){return i.replace(/\/index.html$/,"")}function Fg(i){if(new RegExp("^(https?:)?//").test(i)){let[,t]=i.split(/\/\/[^\/]+/);return t}return i}var vu=/\s+/,yf=[],_u=(()=>{class i{_ngEl;_renderer;initialClasses=yf;rawClass;stateMap=new Map;constructor(t,n){this._ngEl=t,this._renderer=n}set klass(t){this.initialClasses=t!=null?t.trim().split(vu):yf}set ngClass(t){this.rawClass=typeof t=="string"?t.trim().split(vu):t}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let t=this.rawClass;if(Array.isArray(t)||t instanceof Set)for(let n of t)this._updateState(n,!0);else if(t!=null)for(let n of Object.keys(t))this._updateState(n,!!t[n]);this._applyStateDiff()}_updateState(t,n){let r=this.stateMap.get(t);r!==void 0?(r.enabled!==n&&(r.changed=!0,r.enabled=n),r.touched=!0):this.stateMap.set(t,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let t of this.stateMap){let n=t[0],r=t[1];r.changed?(this._toggleClass(n,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),r.touched=!1}}_toggleClass(t,n){t=t.trim(),t.length>0&&t.split(vu).forEach(r=>{n?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static \u0275fac=function(n){return new(n||i)(qt(Xd),qt(ef))};static \u0275dir=Mr({type:i,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return i})();var oa=class{$implicit;ngForOf;index;count;constructor(e,t,n,r){this.$implicit=e,this.ngForOf=t,this.index=n,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},di=(()=>{class i{_viewContainer;_template;_differs;set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(t,n,r){this._viewContainer=t,this._template=n,this._differs=r}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let t=this._ngForOf;!this._differ&&t&&(this._differ=this._differs.find(t).create(this.ngForTrackBy))}if(this._differ){let t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){let n=this._viewContainer;t.forEachOperation((r,s,o)=>{if(r.previousIndex==null)n.createEmbeddedView(this._template,new oa(r.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)n.remove(s===null?void 0:s);else if(s!==null){let a=n.get(s);n.move(a,o),xf(a,r)}});for(let r=0,s=n.length;r<s;r++){let a=n.get(r).context;a.index=r,a.count=s,a.ngForOf=this._ngForOf}t.forEachIdentityChange(r=>{let s=n.get(r.currentIndex);xf(s,r)})}static ngTemplateContextGuard(t,n){return!0}static \u0275fac=function(n){return new(n||i)(qt(xs),qt(hu),qt(cf))};static \u0275dir=Mr({type:i,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return i})();function xf(i,e){i.context.$implicit=e.item}var yu=(()=>{class i{_viewContainer;_context=new aa;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(t,n){this._viewContainer=t,this._thenTemplateRef=n}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){Mf(t,!1),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){Mf(t,!1),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(t,n){return!0}static \u0275fac=function(n){return new(n||i)(qt(xs),qt(hu))};static \u0275dir=Mr({type:i,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return i})(),aa=class{$implicit=null;ngIf=null};function Mf(i,e){if(i&&!i.createEmbeddedView)throw new ht(2020,!1)}var Rn=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=ta({type:i});static \u0275inj=Jo({})}return i})();function xu(i,e){e=encodeURIComponent(e);for(let t of i.split(";")){let n=t.indexOf("="),[r,s]=n==-1?[t,""]:[t.slice(0,n),t.slice(n+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var ca="browser",Sf="server";function Cs(i){return i===ca}function la(i){return i===Sf}var As=class{};var fa=new dt(""),wu=(()=>{class i{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,n){this._zone=n,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,n,r,s){return this._findPluginFor(n).addEventListener(t,n,r,s)}getZone(){return this._zone}_findPluginFor(t){let n=this._eventNameToPlugin.get(t);if(n)return n;if(n=this._plugins.find(s=>s.supports(t)),!n)throw new ht(5101,!1);return this._eventNameToPlugin.set(t,n),n}static \u0275fac=function(n){return new(n||i)(ot(fa),ot(fn))};static \u0275prov=it({token:i,factory:i.\u0275fac})}return i})(),Rs=class{_doc;constructor(e){this._doc=e}manager},ha="ng-app-id";function bf(i){for(let e of i)e.remove()}function wf(i,e){let t=e.createElement("style");return t.textContent=i,t}function Ng(i,e,t,n){let r=i.head?.querySelectorAll(`style[${ha}="${e}"],link[${ha}="${e}"]`);if(r)for(let s of r)s.removeAttribute(ha),s instanceof HTMLLinkElement?n.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&t.set(s.textContent,{usage:0,elements:[s]})}function Su(i,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",i),t}var Eu=(()=>{class i{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,n,r,s={}){this.doc=t,this.appId=n,this.nonce=r,this.isServer=la(s),Ng(t,n,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,n){for(let r of t)this.addUsage(r,this.inline,wf);n?.forEach(r=>this.addUsage(r,this.external,Su))}removeStyles(t,n){for(let r of t)this.removeUsage(r,this.inline);n?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,n,r){let s=n.get(t);s?s.usage++:n.set(t,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,r(t,this.doc)))})}removeUsage(t,n){let r=n.get(t);r&&(r.usage--,r.usage<=0&&(bf(r.elements),n.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])bf(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[n,{elements:r}]of this.inline)r.push(this.addElement(t,wf(n,this.doc)));for(let[n,{elements:r}]of this.external)r.push(this.addElement(t,Su(n,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,n){return this.nonce&&n.setAttribute("nonce",this.nonce),this.isServer&&n.setAttribute(ha,this.appId),t.appendChild(n)}static \u0275fac=function(n){return new(n||i)(ot(Pt),ot(lu),ot(uu,8),ot(Hn))};static \u0275prov=it({token:i,factory:i.\u0275fac})}return i})(),Mu={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Tu=/%COMP%/g;var Tf="%COMP%",Ug=`_nghost-${Tf}`,Bg=`_ngcontent-${Tf}`,kg=!0,zg=new dt("",{providedIn:"root",factory:()=>kg});function Vg(i){return Bg.replace(Tu,i)}function Hg(i){return Ug.replace(Tu,i)}function Af(i,e){return e.map(t=>t.replace(Tu,i))}var Ps=(()=>{class i{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,n,r,s,o,a,c,l=null,u=null){this.eventManager=t,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=a,this.ngZone=c,this.nonce=l,this.tracingService=u,this.platformIsServer=la(a),this.defaultRenderer=new Ds(t,o,c,this.platformIsServer,this.tracingService)}createRenderer(t,n){if(!t||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===ys.ShadowDom&&(n=Nt(Re({},n),{encapsulation:ys.Emulated}));let r=this.getOrCreateRenderer(t,n);return r instanceof da?r.applyToHost(t):r instanceof Is&&r.applyStyles(),r}getOrCreateRenderer(t,n){let r=this.rendererByCompId,s=r.get(n.id);if(!s){let o=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,h=this.platformIsServer,d=this.tracingService;switch(n.encapsulation){case ys.Emulated:s=new da(c,l,n,this.appId,u,o,a,h,d);break;case ys.ShadowDom:return new bu(c,l,t,n,o,a,this.nonce,h,d);default:s=new Is(c,l,n,u,o,a,h,d);break}r.set(n.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(n){return new(n||i)(ot(wu),ot(Eu),ot(lu),ot(zg),ot(Pt),ot(Hn),ot(fn),ot(uu),ot(Zd,8))};static \u0275prov=it({token:i,factory:i.\u0275fac})}return i})(),Ds=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,n,r,s){this.eventManager=e,this.doc=t,this.ngZone=n,this.platformIsServer=r,this.tracingService=s}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(Mu[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(Ef(e)?e.content:e).appendChild(t)}insertBefore(e,t,n){e&&(Ef(e)?e.content:e).insertBefore(t,n)}removeChild(e,t){t.remove()}selectRootElement(e,t){let n=typeof e=="string"?this.doc.querySelector(e):e;if(!n)throw new ht(-5104,!1);return t||(n.textContent=""),n}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,n,r){if(r){t=r+":"+t;let s=Mu[r];s?e.setAttributeNS(s,t,n):e.setAttribute(t,n)}else e.setAttribute(t,n)}removeAttribute(e,t,n){if(n){let r=Mu[n];r?e.removeAttributeNS(r,t):e.removeAttribute(`${n}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,n,r){r&(xr.DashCase|xr.Important)?e.style.setProperty(t,n,r&xr.Important?"important":""):e.style[t]=n}removeStyle(e,t,n){n&xr.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,n){e!=null&&(e[t]=n)}setValue(e,t){e.nodeValue=t}listen(e,t,n,r){if(typeof e=="string"&&(e=Wn().getGlobalEventTarget(this.doc,e),!e))throw new ht(5102,!1);let s=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(s=this.tracingService.wrapEventListener(e,t,s)),this.eventManager.addEventListener(e,t,s,r)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function Ef(i){return i.tagName==="TEMPLATE"&&i.content!==void 0}var bu=class extends Ds{sharedStylesHost;hostEl;shadowRoot;constructor(e,t,n,r,s,o,a,c,l){super(e,s,o,c,l),this.sharedStylesHost=t,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=r.styles;u=Af(r.id,u);for(let d of u){let p=document.createElement("style");a&&p.setAttribute("nonce",a),p.textContent=d,this.shadowRoot.appendChild(p)}let h=r.getExternalStyles?.();if(h)for(let d of h){let p=Su(d,s);a&&p.setAttribute("nonce",a),this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,n){return super.insertBefore(this.nodeOrShadowRoot(e),t,n)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Is=class extends Ds{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,n,r,s,o,a,c,l){super(e,s,o,a,c),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r;let u=n.styles;this.styles=l?Af(l,u):u,this.styleUrls=n.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},da=class extends Is{contentAttr;hostAttr;constructor(e,t,n,r,s,o,a,c,l){let u=r+"-"+n.id;super(e,t,n,s,o,a,c,l,u),this.contentAttr=Vg(u),this.hostAttr=Hg(u)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let n=super.createElement(e,t);return super.setAttribute(n,this.contentAttr,""),n}};var pa=class i extends Ts{supportsDOMEvents=!0;static makeCurrent(){mu(new i)}onAndCancel(e,t,n,r){return e.addEventListener(t,n,r),()=>{e.removeEventListener(t,n,r)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=Wg();return t==null?null:Xg(t)}resetBaseElement(){Ls=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return xu(document.cookie,e)}},Ls=null;function Wg(){return Ls=Ls||document.head.querySelector("base"),Ls?Ls.getAttribute("href"):null}function Xg(i){return new URL(i,document.baseURI).pathname}var $g=(()=>{class i{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||i)};static \u0275prov=it({token:i,factory:i.\u0275fac})}return i})(),Rf=(()=>{class i extends Rs{constructor(t){super(t)}supports(t){return!0}addEventListener(t,n,r,s){return t.addEventListener(n,r,s),()=>this.removeEventListener(t,n,r,s)}removeEventListener(t,n,r,s){return t.removeEventListener(n,r,s)}static \u0275fac=function(n){return new(n||i)(ot(Pt))};static \u0275prov=it({token:i,factory:i.\u0275fac})}return i})(),Cf=["alt","control","meta","shift"],qg={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},jg={alt:i=>i.altKey,control:i=>i.ctrlKey,meta:i=>i.metaKey,shift:i=>i.shiftKey},Df=(()=>{class i extends Rs{constructor(t){super(t)}supports(t){return i.parseEventName(t)!=null}addEventListener(t,n,r,s){let o=i.parseEventName(n),a=i.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Wn().onAndCancel(t,o.domEventName,a,s))}static parseEventName(t){let n=t.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let s=i._normalizeKey(n.pop()),o="",a=n.indexOf("code");if(a>-1&&(n.splice(a,1),o="code."),Cf.forEach(l=>{let u=n.indexOf(l);u>-1&&(n.splice(u,1),o+=l+".")}),o+=s,n.length!=0||s.length===0)return null;let c={};return c.domEventName=r,c.fullKey=o,c}static matchEventFullKeyCode(t,n){let r=qg[t.key]||t.key,s="";return n.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Cf.forEach(o=>{if(o!==r){let a=jg[o];a(t)&&(s+=o+".")}}),s+=r,s===n)}static eventCallback(t,n,r){return s=>{i.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>n(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(n){return new(n||i)(ot(Pt))};static \u0275prov=it({token:i,factory:i.\u0275fac})}return i})();function Au(i,e){return lf(Re({rootComponent:i},Yg(e)))}function Yg(i){return{appProviders:[...e0,...i?.providers??[]],platformProviders:Qg}}function Zg(){pa.makeCurrent()}function Jg(){return new cu}function Kg(){return $d(document),document}var Qg=[{provide:Hn,useValue:ca},{provide:qd,useValue:Zg,multi:!0},{provide:Pt,useFactory:Kg}];var e0=[{provide:Hd,useValue:"root"},{provide:cu,useFactory:Jg},{provide:fa,useClass:Rf,multi:!0,deps:[Pt]},{provide:fa,useClass:Df,multi:!0,deps:[Pt]},Ps,Eu,wu,{provide:ea,useExisting:Ps},{provide:As,useClass:$g},[]];var Os=class i{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(e){e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(t=>{let n=t.indexOf(":");if(n>0){let r=t.slice(0,n),s=t.slice(n+1).trim();this.addHeaderEntry(r,s)}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((t,n)=>{this.addHeaderEntry(n,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([t,n])=>{this.setHeaderEntries(t,n)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof i?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){let t=new i;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof i?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){let t=e.name.toLowerCase();switch(e.op){case"a":case"s":let n=e.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(e.name,t);let r=(e.op==="a"?this.headers.get(t):void 0)||[];r.push(...n),this.headers.set(t,r);break;case"d":let s=e.value;if(!s)this.headers.delete(t),this.normalizedNames.delete(t);else{let o=this.headers.get(t);if(!o)return;o=o.filter(a=>s.indexOf(a)===-1),o.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,o)}break}}addHeaderEntry(e,t){let n=e.toLowerCase();this.maybeSetNormalizedName(e,n),this.headers.has(n)?this.headers.get(n).push(t):this.headers.set(n,[t])}setHeaderEntries(e,t){let n=(Array.isArray(t)?t:[t]).map(s=>s.toString()),r=e.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(e,r)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}};var t0="X-Request-URL",n0="text/plain",i0="application/json",gT=`${i0}, ${n0}, */*`;var Ru=function(i){return i[i.Sent=0]="Sent",i[i.UploadProgress=1]="UploadProgress",i[i.ResponseHeader=2]="ResponseHeader",i[i.DownloadProgress=3]="DownloadProgress",i[i.Response=4]="Response",i[i.User=5]="User",i}(Ru||{}),Cu=class{headers;status;statusText;url;ok;type;constructor(e,t=200,n="OK"){this.headers=e.headers||new Os,this.status=e.status!==void 0?e.status:t,this.statusText=e.statusText||n,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}};var Fs=class i extends Cu{body;constructor(e={}){super(e),this.body=e.body!==void 0?e.body:null}type=Ru.Response;clone(e={}){return new i({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}};var If=new dt("");var vT=RegExp(`^${t0}:`,"m");var s0=new dt(""),o0="b",a0="h",c0="s",l0="st",u0="u",h0="rt",Du=new dt(""),d0=["GET","HEAD"];function f0(i,e){let d=Ie(Du),{isCacheActive:t}=d,n=Id(d,["isCacheActive"]),{transferCache:r,method:s}=i;if(!t||r===!1||s==="POST"&&!n.includePostRequests&&!r||s!=="POST"&&!d0.includes(s)||!n.includeRequestsWithAuthHeaders&&p0(i)||n.filter?.(i)===!1)return e(i);let o=Ie(Yd);if(Ie(s0,{optional:!0}))throw new ht(2803,!1);let c=i.url,l=m0(i,c),u=o.get(l,null),h=n.includeHeaders;if(typeof r=="object"&&r.includeHeaders&&(h=r.includeHeaders),u){let{[o0]:p,[h0]:g,[a0]:_,[c0]:m,[l0]:f,[u0]:T}=u,S=p;switch(g){case"arraybuffer":S=new TextEncoder().encode(p).buffer;break;case"blob":S=new Blob([p]);break}let x=new Os(_);return Ve(new Fs({body:S,headers:x,status:m,statusText:f,url:T}))}return e(i).pipe(Rt(p=>{p instanceof Fs}))}function p0(i){return i.headers.has("authorization")||i.headers.has("proxy-authorization")}function Pf(i){return[...i.keys()].sort().map(e=>`${e}=${i.getAll(e)}`).join("&")}function m0(i,e){let{params:t,method:n,responseType:r}=i,s=Pf(t),o=i.serializeBody();o instanceof URLSearchParams?o=Pf(o):typeof o!="string"&&(o="");let a=[n,r,e,o,s].join("|"),c=g0(a);return c}function g0(i){let e=0;for(let t of i)e=Math.imul(31,e)+t.charCodeAt(0)<<0;return e+=2147483648,e.toString()}function Lf(i){return[{provide:Du,useFactory:()=>(_s("NgHttpTransferCache"),Re({isCacheActive:!0},i))},{provide:If,useValue:f0,multi:!0},{provide:na,multi:!0,useFactory:()=>{let e=Ie(Ms),t=Ie(Du);return()=>{e.whenStable().then(()=>{t.isCacheActive=!1})}}}]}var Of=(()=>{class i{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(n){return new(n||i)(ot(Pt))};static \u0275prov=it({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ma=function(i){return i[i.NoHttpTransferCache=0]="NoHttpTransferCache",i[i.HttpTransferCacheOptions=1]="HttpTransferCacheOptions",i[i.I18nSupport=2]="I18nSupport",i[i.EventReplay=3]="EventReplay",i[i.IncrementalHydration=4]="IncrementalHydration",i}(ma||{});function _0(i,e=[],t={}){return{\u0275kind:i,\u0275providers:e}}function Ff(){return _0(ma.EventReplay,uf())}function Nf(...i){let e=[],t=new Set;for(let{\u0275providers:r,\u0275kind:s}of i)t.add(s),r.length&&e.push(r);let n=t.has(ma.HttpTransferCacheOptions);return Fi([[],hf(),t.has(ma.NoHttpTransferCache)||n?[]:Lf({}),e])}var $e="primary",Ys=Symbol("RouteTitle"),Fu=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Vi(i){return new Fu(i)}function Wf(i,e,t){let n=t.path.split("/");if(n.length>i.length||t.pathMatch==="full"&&(e.hasChildren()||n.length<i.length))return null;let r={};for(let s=0;s<n.length;s++){let o=n[s],a=i[s];if(o[0]===":")r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:i.slice(0,n.length),posParams:r}}function x0(i,e){if(i.length!==e.length)return!1;for(let t=0;t<i.length;++t)if(!Dn(i[t],e[t]))return!1;return!0}function Dn(i,e){let t=i?Nu(i):void 0,n=e?Nu(e):void 0;if(!t||!n||t.length!=n.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!Xf(i[r],e[r]))return!1;return!0}function Nu(i){return[...Object.keys(i),...Object.getOwnPropertySymbols(i)]}function Xf(i,e){if(Array.isArray(i)&&Array.isArray(e)){if(i.length!==e.length)return!1;let t=[...i].sort(),n=[...e].sort();return t.every((r,s)=>n[s]===r)}else return i===e}function $f(i){return i.length>0?i[i.length-1]:null}function mi(i){return Od(i)?i:pu(i)?hn(Promise.resolve(i)):Ve(i)}var M0={exact:jf,subset:Yf},qf={exact:S0,subset:b0,ignored:()=>!0};function Uf(i,e,t){return M0[t.paths](i.root,e.root,t.matrixParams)&&qf[t.queryParams](i.queryParams,e.queryParams)&&!(t.fragment==="exact"&&i.fragment!==e.fragment)}function S0(i,e){return Dn(i,e)}function jf(i,e,t){if(!ki(i.segments,e.segments)||!_a(i.segments,e.segments,t)||i.numberOfChildren!==e.numberOfChildren)return!1;for(let n in e.children)if(!i.children[n]||!jf(i.children[n],e.children[n],t))return!1;return!0}function b0(i,e){return Object.keys(e).length<=Object.keys(i).length&&Object.keys(e).every(t=>Xf(i[t],e[t]))}function Yf(i,e,t){return Zf(i,e,e.segments,t)}function Zf(i,e,t,n){if(i.segments.length>t.length){let r=i.segments.slice(0,t.length);return!(!ki(r,t)||e.hasChildren()||!_a(r,t,n))}else if(i.segments.length===t.length){if(!ki(i.segments,t)||!_a(i.segments,t,n))return!1;for(let r in e.children)if(!i.children[r]||!Yf(i.children[r],e.children[r],n))return!1;return!0}else{let r=t.slice(0,i.segments.length),s=t.slice(i.segments.length);return!ki(i.segments,r)||!_a(i.segments,r,n)||!i.children[$e]?!1:Zf(i.children[$e],e,s,n)}}function _a(i,e,t){return e.every((n,r)=>qf[t](i[r].parameters,n.parameters))}var Pn=class{root;queryParams;fragment;_queryParamMap;constructor(e=new at([],{}),t={},n=null){this.root=e,this.queryParams=t,this.fragment=n}get queryParamMap(){return this._queryParamMap??=Vi(this.queryParams),this._queryParamMap}toString(){return T0.serialize(this)}},at=class{segments;children;parent=null;constructor(e,t){this.segments=e,this.children=t,Object.values(t).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return ya(this)}},fi=class{path;parameters;_parameterMap;constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=Vi(this.parameters),this._parameterMap}toString(){return Kf(this)}};function w0(i,e){return ki(i,e)&&i.every((t,n)=>Dn(t.parameters,e[n].parameters))}function ki(i,e){return i.length!==e.length?!1:i.every((t,n)=>t.path===e[n].path)}function E0(i,e){let t=[];return Object.entries(i.children).forEach(([n,r])=>{n===$e&&(t=t.concat(e(r,n)))}),Object.entries(i.children).forEach(([n,r])=>{n!==$e&&(t=t.concat(e(r,n)))}),t}var Zs=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275prov=it({token:i,factory:()=>new Hi,providedIn:"root"})}return i})(),Hi=class{parse(e){let t=new Bu(e);return new Pn(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${Ns(e.root,!0)}`,n=R0(e.queryParams),r=typeof e.fragment=="string"?`#${A0(e.fragment)}`:"";return`${t}${n}${r}`}},T0=new Hi;function ya(i){return i.segments.map(e=>Kf(e)).join("/")}function Ns(i,e){if(!i.hasChildren())return ya(i);if(e){let t=i.children[$e]?Ns(i.children[$e],!1):"",n=[];return Object.entries(i.children).forEach(([r,s])=>{r!==$e&&n.push(`${r}:${Ns(s,!1)}`)}),n.length>0?`${t}(${n.join("//")})`:t}else{let t=E0(i,(n,r)=>r===$e?[Ns(i.children[$e],!1)]:[`${r}:${Ns(n,!1)}`]);return Object.keys(i.children).length===1&&i.children[$e]!=null?`${ya(i)}/${t[0]}`:`${ya(i)}/(${t.join("//")})`}}function Jf(i){return encodeURIComponent(i).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function ga(i){return Jf(i).replace(/%3B/gi,";")}function A0(i){return encodeURI(i)}function Uu(i){return Jf(i).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function xa(i){return decodeURIComponent(i)}function Bf(i){return xa(i.replace(/\+/g,"%20"))}function Kf(i){return`${Uu(i.path)}${C0(i.parameters)}`}function C0(i){return Object.entries(i).map(([e,t])=>`;${Uu(e)}=${Uu(t)}`).join("")}function R0(i){let e=Object.entries(i).map(([t,n])=>Array.isArray(n)?n.map(r=>`${ga(t)}=${ga(r)}`).join("&"):`${ga(t)}=${ga(n)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var D0=/^[^\/()?;#]+/;function Iu(i){let e=i.match(D0);return e?e[0]:""}var I0=/^[^\/()?;=#]+/;function P0(i){let e=i.match(I0);return e?e[0]:""}var L0=/^[^=?&#]+/;function O0(i){let e=i.match(L0);return e?e[0]:""}var F0=/^[^&#]+/;function N0(i){let e=i.match(F0);return e?e[0]:""}var Bu=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new at([],{}):new at([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(n[$e]=new at(e,t)),n}parseSegment(){let e=Iu(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new ht(4009,!1);return this.capture(e),new fi(xa(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=P0(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){let r=Iu(this.remaining);r&&(n=r,this.capture(n))}e[xa(t)]=xa(n)}parseQueryParam(e){let t=O0(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){let o=N0(this.remaining);o&&(n=o,this.capture(n))}let r=Bf(t),s=Bf(n);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let n=Iu(this.remaining),r=this.remaining[n.length];if(r!=="/"&&r!==")"&&r!==";")throw new ht(4010,!1);let s;n.indexOf(":")>-1?(s=n.slice(0,n.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=$e);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[$e]:new at([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new ht(4011,!1)}};function Qf(i){return i.segments.length>0?new at([],{[$e]:i}):i}function ep(i){let e={};for(let[n,r]of Object.entries(i.children)){let s=ep(r);if(n===$e&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[n]=s)}let t=new at(i.segments,e);return U0(t)}function U0(i){if(i.numberOfChildren===1&&i.children[$e]){let e=i.children[$e];return new at(i.segments.concat(e.segments),e.children)}return i}function Cr(i){return i instanceof Pn}function tp(i,e,t=null,n=null){let r=np(i);return ip(r,e,t,n)}function np(i){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new at(s.url,o);return s===i&&(e=a),a}let n=t(i.root),r=Qf(n);return e??r}function ip(i,e,t,n){let r=i;for(;r.parent;)r=r.parent;if(e.length===0)return Pu(r,r,r,t,n);let s=B0(e);if(s.toRoot())return Pu(r,r,new at([],{}),t,n);let o=k0(s,r,i),a=o.processChildren?Bs(o.segmentGroup,o.index,s.commands):sp(o.segmentGroup,o.index,s.commands);return Pu(r,o.segmentGroup,a,t,n)}function Sa(i){return typeof i=="object"&&i!=null&&!i.outlets&&!i.segmentPath}function zs(i){return typeof i=="object"&&i!=null&&i.outlets}function Pu(i,e,t,n,r){let s={};n&&Object.entries(n).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;i===e?o=t:o=rp(i,e,t);let a=Qf(ep(o));return new Pn(a,s,r)}function rp(i,e,t){let n={};return Object.entries(i.children).forEach(([r,s])=>{s===e?n[r]=t:n[r]=rp(s,e,t)}),new at(i.segments,n)}var ba=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,t,n){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=n,e&&n.length>0&&Sa(n[0]))throw new ht(4003,!1);let r=n.find(zs);if(r&&r!==$f(n))throw new ht(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function B0(i){if(typeof i[0]=="string"&&i.length===1&&i[0]==="/")return new ba(!0,0,i);let e=0,t=!1,n=i.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new ba(t,e,n)}var Tr=class{segmentGroup;processChildren;index;constructor(e,t,n){this.segmentGroup=e,this.processChildren=t,this.index=n}};function k0(i,e,t){if(i.isAbsolute)return new Tr(e,!0,0);if(!t)return new Tr(e,!1,NaN);if(t.parent===null)return new Tr(t,!0,0);let n=Sa(i.commands[0])?0:1,r=t.segments.length-1+n;return z0(t,r,i.numberOfDoubleDots)}function z0(i,e,t){let n=i,r=e,s=t;for(;s>r;){if(s-=r,n=n.parent,!n)throw new ht(4005,!1);r=n.segments.length}return new Tr(n,!1,r-s)}function V0(i){return zs(i[0])?i[0].outlets:{[$e]:i}}function sp(i,e,t){if(i??=new at([],{}),i.segments.length===0&&i.hasChildren())return Bs(i,e,t);let n=H0(i,e,t),r=t.slice(n.commandIndex);if(n.match&&n.pathIndex<i.segments.length){let s=new at(i.segments.slice(0,n.pathIndex),{});return s.children[$e]=new at(i.segments.slice(n.pathIndex),i.children),Bs(s,0,r)}else return n.match&&r.length===0?new at(i.segments,{}):n.match&&!i.hasChildren()?ku(i,e,t):n.match?Bs(i,0,r):ku(i,e,t)}function Bs(i,e,t){if(t.length===0)return new at(i.segments,{});{let n=V0(t),r={};if(Object.keys(n).some(s=>s!==$e)&&i.children[$e]&&i.numberOfChildren===1&&i.children[$e].segments.length===0){let s=Bs(i.children[$e],e,t);return new at(i.segments,s.children)}return Object.entries(n).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=sp(i.children[s],e,o))}),Object.entries(i.children).forEach(([s,o])=>{n[s]===void 0&&(r[s]=o)}),new at(i.segments,r)}}function H0(i,e,t){let n=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<i.segments.length;){if(n>=t.length)return s;let o=i.segments[r],a=t[n];if(zs(a))break;let c=`${a}`,l=n<t.length-1?t[n+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!zf(c,l,o))return s;n+=2}else{if(!zf(c,{},o))return s;n++}r++}return{match:!0,pathIndex:r,commandIndex:n}}function ku(i,e,t){let n=i.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(zs(s)){let c=G0(s.outlets);return new at(n,c)}if(r===0&&Sa(t[0])){let c=i.segments[e];n.push(new fi(c.path,kf(t[0]))),r++;continue}let o=zs(s)?s.outlets[$e]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&Sa(a)?(n.push(new fi(o,kf(a))),r+=2):(n.push(new fi(o,{})),r++)}return new at(n,{})}function G0(i){let e={};return Object.entries(i).forEach(([t,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(e[t]=ku(new at([],{}),0,n))}),e}function kf(i){let e={};return Object.entries(i).forEach(([t,n])=>e[t]=`${n}`),e}function zf(i,e,t){return i==t.path&&Dn(e,t.parameters)}var Ma="imperative",Lt=function(i){return i[i.NavigationStart=0]="NavigationStart",i[i.NavigationEnd=1]="NavigationEnd",i[i.NavigationCancel=2]="NavigationCancel",i[i.NavigationError=3]="NavigationError",i[i.RoutesRecognized=4]="RoutesRecognized",i[i.ResolveStart=5]="ResolveStart",i[i.ResolveEnd=6]="ResolveEnd",i[i.GuardsCheckStart=7]="GuardsCheckStart",i[i.GuardsCheckEnd=8]="GuardsCheckEnd",i[i.RouteConfigLoadStart=9]="RouteConfigLoadStart",i[i.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",i[i.ChildActivationStart=11]="ChildActivationStart",i[i.ChildActivationEnd=12]="ChildActivationEnd",i[i.ActivationStart=13]="ActivationStart",i[i.ActivationEnd=14]="ActivationEnd",i[i.Scroll=15]="Scroll",i[i.NavigationSkipped=16]="NavigationSkipped",i}(Lt||{}),Qt=class{id;url;constructor(e,t){this.id=e,this.url=t}},Gi=class extends Qt{type=Lt.NavigationStart;navigationTrigger;restoredState;constructor(e,t,n="imperative",r=null){super(e,t),this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Xn=class extends Qt{urlAfterRedirects;type=Lt.NavigationEnd;constructor(e,t,n){super(e,t),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Yt=function(i){return i[i.Redirect=0]="Redirect",i[i.SupersededByNewNavigation=1]="SupersededByNewNavigation",i[i.NoDataFromResolver=2]="NoDataFromResolver",i[i.GuardRejected=3]="GuardRejected",i}(Yt||{}),Vs=function(i){return i[i.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",i[i.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",i}(Vs||{}),In=class extends Qt{reason;code;type=Lt.NavigationCancel;constructor(e,t,n,r){super(e,t),this.reason=n,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},$n=class extends Qt{reason;code;type=Lt.NavigationSkipped;constructor(e,t,n,r){super(e,t),this.reason=n,this.code=r}},Rr=class extends Qt{error;target;type=Lt.NavigationError;constructor(e,t,n,r){super(e,t),this.error=n,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Hs=class extends Qt{urlAfterRedirects;state;type=Lt.RoutesRecognized;constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},wa=class extends Qt{urlAfterRedirects;state;type=Lt.GuardsCheckStart;constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ea=class extends Qt{urlAfterRedirects;state;shouldActivate;type=Lt.GuardsCheckEnd;constructor(e,t,n,r,s){super(e,t),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=s}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Ta=class extends Qt{urlAfterRedirects;state;type=Lt.ResolveStart;constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Aa=class extends Qt{urlAfterRedirects;state;type=Lt.ResolveEnd;constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Ca=class{route;type=Lt.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Ra=class{route;type=Lt.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Da=class{snapshot;type=Lt.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ia=class{snapshot;type=Lt.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Pa=class{snapshot;type=Lt.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},La=class{snapshot;type=Lt.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Gs=class{},Dr=class{url;navigationBehaviorOptions;constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function W0(i,e){return i.providers&&!i._injector&&(i._injector=du(i.providers,e,`Route: ${i.path}`)),i._injector??e}function Mn(i){return i.outlet||$e}function X0(i,e){let t=i.filter(n=>Mn(n)===e);return t.push(...i.filter(n=>Mn(n)!==e)),t}function Js(i){if(!i)return null;if(i.routeConfig?._injector)return i.routeConfig._injector;for(let e=i.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var Oa=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return Js(this.route?.snapshot)??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new Lr(this.rootInjector)}},Lr=(()=>{class i{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,n){let r=this.getOrCreateContext(t);r.outlet=n,this.contexts.set(t,r)}onChildOutletDestroyed(t){let n=this.getContext(t);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let n=this.getContext(t);return n||(n=new Oa(this.rootInjector),this.contexts.set(t,n)),n}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(n){return new(n||i)(ot(Ko))};static \u0275prov=it({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Fa=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=zu(e,this._root);return t?t.children.map(n=>n.value):[]}firstChild(e){let t=zu(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=Vu(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return Vu(e,this._root).map(t=>t.value)}};function zu(i,e){if(i===e.value)return e;for(let t of e.children){let n=zu(i,t);if(n)return n}return null}function Vu(i,e){if(i===e.value)return[e];for(let t of e.children){let n=Vu(i,t);if(n.length)return n.unshift(e),n}return[]}var Kt=class{value;children;constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function Er(i){let e={};return i&&i.children.forEach(t=>e[t.value.outlet]=t),e}var Ws=class extends Fa{snapshot;constructor(e,t){super(e),this.snapshot=t,Yu(this,e)}toString(){return this.snapshot.toString()}};function op(i){let e=$0(i),t=new un([new fi("",{})]),n=new un({}),r=new un({}),s=new un({}),o=new un(""),a=new pi(t,n,s,o,r,$e,i,e.root);return a.snapshot=e.root,new Ws(new Kt(a,[]),e)}function $0(i){let e={},t={},n={},r="",s=new zi([],e,n,r,t,$e,i,null,{});return new Xs("",new Kt(s,[]))}var pi=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(e,t,n,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=n,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(pt(l=>l[Ys]))??Ve(void 0),this.url=e,this.params=t,this.queryParams=n,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(pt(e=>Vi(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(pt(e=>Vi(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Na(i,e,t="emptyOnly"){let n,{routeConfig:r}=i;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?n={params:Re(Re({},e.params),i.params),data:Re(Re({},e.data),i.data),resolve:Re(Re(Re(Re({},i.data),e.data),r?.data),i._resolvedData)}:n={params:Re({},i.params),data:Re({},i.data),resolve:Re(Re({},i.data),i._resolvedData??{})},r&&cp(r)&&(n.resolve[Ys]=r.title),n}var zi=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[Ys]}constructor(e,t,n,r,s,o,a,c,l){this.url=e,this.params=t,this.queryParams=n,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Vi(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Vi(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(n=>n.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},Xs=class extends Fa{url;constructor(e,t){super(t),this.url=e,Yu(this,t)}toString(){return ap(this._root)}};function Yu(i,e){e.value._routerState=i,e.children.forEach(t=>Yu(i,t))}function ap(i){let e=i.children.length>0?` { ${i.children.map(ap).join(", ")} } `:"";return`${i.value}${e}`}function Lu(i){if(i.snapshot){let e=i.snapshot,t=i._futureSnapshot;i.snapshot=t,Dn(e.queryParams,t.queryParams)||i.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&i.fragmentSubject.next(t.fragment),Dn(e.params,t.params)||i.paramsSubject.next(t.params),x0(e.url,t.url)||i.urlSubject.next(t.url),Dn(e.data,t.data)||i.dataSubject.next(t.data)}else i.snapshot=i._futureSnapshot,i.dataSubject.next(i._futureSnapshot.data)}function Hu(i,e){let t=Dn(i.params,e.params)&&w0(i.url,e.url),n=!i.parent!=!e.parent;return t&&!n&&(!i.parent||Hu(i.parent,e.parent))}function cp(i){return typeof i.title=="string"||i.title===null}var lp=new dt(""),Ks=(()=>{class i{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=$e;activateEvents=new yr;deactivateEvents=new yr;attachEvents=new yr;detachEvents=new yr;routerOutletData=Wd(void 0);parentContexts=Ie(Lr);location=Ie(xs);changeDetector=Ie(Es);inputBinder=Ie(za,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:n,previousValue:r}=t.name;if(n)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new ht(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new ht(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new ht(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,n){this.activated=t,this._activatedRoute=n,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,n){if(this.isActivated)throw new ht(4013,!1);this._activatedRoute=t;let r=this.location,o=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new Gu(t,a,r.injector,this.routerOutletData);this.activated=r.createComponent(o,{index:r.length,injector:c,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||i)};static \u0275dir=Mr({type:i,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[iu]})}return i})(),Gu=class{route;childContexts;parent;outletData;constructor(e,t,n,r){this.route=e,this.childContexts=t,this.parent=n,this.outletData=r}get(e,t){return e===pi?this.route:e===Lr?this.childContexts:e===lp?this.outletData:this.parent.get(e,t)}},za=new dt("");var Zu=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=Dt({type:i,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,r){n&1&&yt(0,"router-outlet")},dependencies:[Ks],encapsulation:2})}return i})();function Ju(i){let e=i.children&&i.children.map(Ju),t=e?Nt(Re({},i),{children:e}):Re({},i);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==$e&&(t.component=Zu),t}function q0(i,e,t){let n=$s(i,e._root,t?t._root:void 0);return new Ws(n,e)}function $s(i,e,t){if(t&&i.shouldReuseRoute(e.value,t.value.snapshot)){let n=t.value;n._futureSnapshot=e.value;let r=j0(i,e,t);return new Kt(n,r)}else{if(i.shouldAttach(e.value)){let s=i.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>$s(i,a)),o}}let n=Y0(e.value),r=e.children.map(s=>$s(i,s));return new Kt(n,r)}}function j0(i,e,t){return e.children.map(n=>{for(let r of t.children)if(i.shouldReuseRoute(n.value,r.value.snapshot))return $s(i,n,r);return $s(i,n)})}function Y0(i){return new pi(new un(i.url),new un(i.params),new un(i.queryParams),new un(i.fragment),new un(i.data),i.outlet,i.component,i)}var Ir=class{redirectTo;navigationBehaviorOptions;constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},up="ngNavigationCancelingError";function Ua(i,e){let{redirectTo:t,navigationBehaviorOptions:n}=Cr(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=hp(!1,Yt.Redirect);return r.url=t,r.navigationBehaviorOptions=n,r}function hp(i,e){let t=new Error(`NavigationCancelingError: ${i||""}`);return t[up]=!0,t.cancellationCode=e,t}function Z0(i){return dp(i)&&Cr(i.url)}function dp(i){return!!i&&i[up]}var J0=(i,e,t,n)=>pt(r=>(new Wu(e,r.targetRouterState,r.currentRouterState,t,n).activate(i),r)),Wu=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,t,n,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=n,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,n,e),Lu(this.futureState.root),this.activateChildRoutes(t,n,e)}deactivateChildRoutes(e,t,n){let r=Er(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],n),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,n)})}deactivateRoutes(e,t,n){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=n.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,n);else s&&this.deactivateRouteAndItsChildren(t,n)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let n=t.getContext(e.value.outlet),r=n&&e.value.component?n.children:t,s=Er(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(n&&n.outlet){let o=n.outlet.detach(),a=n.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let n=t.getContext(e.value.outlet),r=n&&e.value.component?n.children:t,s=Er(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(e,t,n){let r=Er(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],n),this.forwardEvent(new La(s.value.snapshot))}),e.children.length&&this.forwardEvent(new Ia(e.value.snapshot))}activateRoutes(e,t,n){let r=e.value,s=t?t.value:null;if(Lu(r),r===s)if(r.component){let o=n.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,n);else if(r.component){let o=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),Lu(a.route.value),this.activateChildRoutes(e,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}else this.activateChildRoutes(e,null,n)}},Ba=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},Ar=class{component;route;constructor(e,t){this.component=e,this.route=t}};function K0(i,e,t){let n=i._root,r=e?e._root:null;return Us(n,r,t,[n.value])}function Q0(i){let e=i.routeConfig?i.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:i,guards:e}}function Or(i,e){let t=Symbol(),n=e.get(i,t);return n===t?typeof i=="function"&&!Vd(i)?i:e.get(i):n}function Us(i,e,t,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=Er(e);return i.children.forEach(o=>{ev(o,s[o.value.outlet],t,n.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>ks(a,t.getContext(o),r)),r}function ev(i,e,t,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=i.value,o=e?e.value:null,a=t?t.getContext(i.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=tv(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Ba(n)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?Us(i,e,a?a.children:null,n,r):Us(i,e,t,n,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new Ar(a.outlet.component,o))}else o&&ks(e,a,r),r.canActivateChecks.push(new Ba(n)),s.component?Us(i,null,a?a.children:null,n,r):Us(i,null,t,n,r);return r}function tv(i,e,t){if(typeof t=="function")return t(i,e);switch(t){case"pathParamsChange":return!ki(i.url,e.url);case"pathParamsOrQueryParamsChange":return!ki(i.url,e.url)||!Dn(i.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Hu(i,e)||!Dn(i.queryParams,e.queryParams);case"paramsChange":default:return!Hu(i,e)}}function ks(i,e,t){let n=Er(i),r=i.value;Object.entries(n).forEach(([s,o])=>{r.component?e?ks(o,e.children.getContext(s),t):ks(o,null,t):ks(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new Ar(e.outlet.component,r)):t.canDeactivateChecks.push(new Ar(null,r)):t.canDeactivateChecks.push(new Ar(null,r))}function Qs(i){return typeof i=="function"}function nv(i){return typeof i=="boolean"}function iv(i){return i&&Qs(i.canLoad)}function rv(i){return i&&Qs(i.canActivate)}function sv(i){return i&&Qs(i.canActivateChild)}function ov(i){return i&&Qs(i.canDeactivate)}function av(i){return i&&Qs(i.canMatch)}function fp(i){return i instanceof Fd||i?.name==="EmptyError"}var va=Symbol("INITIAL_VALUE");function Pr(){return An(i=>Kl(i.map(e=>e.pipe(_r(1),kd(va)))).pipe(pt(e=>{for(let t of e)if(t!==!0){if(t===va)return va;if(t===!1||cv(t))return t}return!0}),gr(e=>e!==va),_r(1)))}function cv(i){return Cr(i)||i instanceof Ir}function lv(i,e){return dn(t=>{let{targetSnapshot:n,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?Ve(Nt(Re({},t),{guardsResult:!0})):uv(o,n,r,i).pipe(dn(a=>a&&nv(a)?hv(n,s,i,e):Ve(a)),pt(a=>Nt(Re({},t),{guardsResult:a})))})}function uv(i,e,t,n){return hn(i).pipe(dn(r=>gv(r.component,r.route,t,e,n)),li(r=>r!==!0,!0))}function hv(i,e,t,n){return hn(e).pipe(vs(r=>Nd(fv(r.route.parent,n),dv(r.route,n),mv(i,r.path,t),pv(i,r.route,t))),li(r=>r!==!0,!0))}function dv(i,e){return i!==null&&e&&e(new Pa(i)),Ve(!0)}function fv(i,e){return i!==null&&e&&e(new Da(i)),Ve(!0)}function pv(i,e,t){let n=e.routeConfig?e.routeConfig.canActivate:null;if(!n||n.length===0)return Ve(!0);let r=n.map(s=>Ql(()=>{let o=Js(e)??t,a=Or(s,o),c=rv(a)?a.canActivate(e,i):Cn(o,()=>a(e,i));return mi(c).pipe(li())}));return Ve(r).pipe(Pr())}function mv(i,e,t){let n=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>Q0(o)).filter(o=>o!==null).map(o=>Ql(()=>{let a=o.guards.map(c=>{let l=Js(o.node)??t,u=Or(c,l),h=sv(u)?u.canActivateChild(n,i):Cn(l,()=>u(n,i));return mi(h).pipe(li())});return Ve(a).pipe(Pr())}));return Ve(s).pipe(Pr())}function gv(i,e,t,n,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return Ve(!0);let o=s.map(a=>{let c=Js(e)??r,l=Or(a,c),u=ov(l)?l.canDeactivate(i,e,t,n):Cn(c,()=>l(i,e,t,n));return mi(u).pipe(li())});return Ve(o).pipe(Pr())}function vv(i,e,t,n){let r=e.canLoad;if(r===void 0||r.length===0)return Ve(!0);let s=r.map(o=>{let a=Or(o,i),c=iv(a)?a.canLoad(e,t):Cn(i,()=>a(e,t));return mi(c)});return Ve(s).pipe(Pr(),pp(n))}function pp(i){return Ld(Rt(e=>{if(typeof e!="boolean")throw Ua(i,e)}),pt(e=>e===!0))}function _v(i,e,t,n){let r=e.canMatch;if(!r||r.length===0)return Ve(!0);let s=r.map(o=>{let a=Or(o,i),c=av(a)?a.canMatch(e,t):Cn(i,()=>a(e,t));return mi(c)});return Ve(s).pipe(Pr(),pp(n))}var qs=class{segmentGroup;constructor(e){this.segmentGroup=e||null}},js=class extends Error{urlTree;constructor(e){super(),this.urlTree=e}};function wr(i){return gs(new qs(i))}function yv(i){return gs(new ht(4e3,!1))}function xv(i){return gs(hp(!1,Yt.GuardRejected))}var Xu=class{urlSerializer;urlTree;constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let n=[],r=t.root;for(;;){if(n=n.concat(r.segments),r.numberOfChildren===0)return Ve(n);if(r.numberOfChildren>1||!r.children[$e])return yv(`${e.redirectTo}`);r=r.children[$e]}}applyRedirectCommands(e,t,n,r,s){if(typeof t!="string"){let a=t,{queryParams:c,fragment:l,routeConfig:u,url:h,outlet:d,params:p,data:g,title:_}=r,m=Cn(s,()=>a({params:p,data:g,queryParams:c,fragment:l,routeConfig:u,url:h,outlet:d,title:_}));if(m instanceof Pn)throw new js(m);t=m}let o=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,n);if(t[0]==="/")throw new js(o);return o}applyRedirectCreateUrlTree(e,t,n,r){let s=this.createSegmentGroup(e,t.root,n,r);return new Pn(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let n={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s[0]===":"){let a=s.substring(1);n[r]=t[a]}else n[r]=s}),n}createSegmentGroup(e,t,n,r){let s=this.createSegments(e,t.segments,n,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,n,r)}),new at(s,o)}createSegments(e,t,n,r){return t.map(s=>s.path[0]===":"?this.findPosParam(e,s,r):this.findOrReturn(s,n))}findPosParam(e,t,n){let r=n[t.path.substring(1)];if(!r)throw new ht(4001,!1);return r}findOrReturn(e,t){let n=0;for(let r of t){if(r.path===e.path)return t.splice(n),r;n++}return e}},$u={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Mv(i,e,t,n,r){let s=mp(i,e,t);return s.matched?(n=W0(e,n),_v(n,e,t,r).pipe(pt(o=>o===!0?s:Re({},$u)))):Ve(s)}function mp(i,e,t){if(e.path==="**")return Sv(t);if(e.path==="")return e.pathMatch==="full"&&(i.hasChildren()||t.length>0)?Re({},$u):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||Wf)(t,i,e);if(!r)return Re({},$u);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?Re(Re({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function Sv(i){return{matched:!0,parameters:i.length>0?$f(i).parameters:{},consumedSegments:i,remainingSegments:[],positionalParamSegments:{}}}function Vf(i,e,t,n){return t.length>0&&Ev(i,t,n)?{segmentGroup:new at(e,wv(n,new at(t,i.children))),slicedSegments:[]}:t.length===0&&Tv(i,t,n)?{segmentGroup:new at(i.segments,bv(i,t,n,i.children)),slicedSegments:t}:{segmentGroup:new at(i.segments,i.children),slicedSegments:t}}function bv(i,e,t,n){let r={};for(let s of t)if(Va(i,e,s)&&!n[Mn(s)]){let o=new at([],{});r[Mn(s)]=o}return Re(Re({},n),r)}function wv(i,e){let t={};t[$e]=e;for(let n of i)if(n.path===""&&Mn(n)!==$e){let r=new at([],{});t[Mn(n)]=r}return t}function Ev(i,e,t){return t.some(n=>Va(i,e,n)&&Mn(n)!==$e)}function Tv(i,e,t){return t.some(n=>Va(i,e,n))}function Va(i,e,t){return(i.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function Av(i,e,t){return e.length===0&&!i.children[t]}var qu=class{};function Cv(i,e,t,n,r,s,o="emptyOnly"){return new ju(i,e,t,n,r,o,s).recognize()}var Rv=31,ju=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,t,n,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=n,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new Xu(this.urlSerializer,this.urlTree)}noMatchError(e){return new ht(4002,`'${e.segmentGroup}'`)}recognize(){let e=Vf(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(pt(({children:t,rootSnapshot:n})=>{let r=new Kt(n,t),s=new Xs("",r),o=tp(n,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),{state:s,tree:o}}))}match(e){let t=new zi([],Object.freeze({}),Object.freeze(Re({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),$e,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,e,$e,t).pipe(pt(n=>({children:n,rootSnapshot:t})),vr(n=>{if(n instanceof js)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof qs?this.noMatchError(n):n}))}processSegmentGroup(e,t,n,r,s){return n.segments.length===0&&n.hasChildren()?this.processChildren(e,t,n,s):this.processSegment(e,t,n,n.segments,r,!0,s).pipe(pt(o=>o instanceof Kt?[o]:[]))}processChildren(e,t,n,r){let s=[];for(let o of Object.keys(n.children))o==="primary"?s.unshift(o):s.push(o);return hn(s).pipe(vs(o=>{let a=n.children[o],c=X0(t,o);return this.processSegmentGroup(e,c,a,o,r)}),Bd((o,a)=>(o.push(...a),o)),eu(null),Ud(),dn(o=>{if(o===null)return wr(n);let a=gp(o);return Dv(a),Ve(a)}))}processSegment(e,t,n,r,s,o,a){return hn(t).pipe(vs(c=>this.processSegmentAgainstRoute(c._injector??e,t,c,n,r,s,o,a).pipe(vr(l=>{if(l instanceof qs)return Ve(null);throw l}))),li(c=>!!c),vr(c=>{if(fp(c))return Av(n,r,s)?Ve(new qu):wr(n);throw c}))}processSegmentAgainstRoute(e,t,n,r,s,o,a,c){return Mn(n)!==o&&(o===$e||!Va(r,s,n))?wr(r):n.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,n,s,o,c):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,n,s,o,c):wr(r)}expandSegmentAgainstRouteUsingRedirect(e,t,n,r,s,o,a){let{matched:c,parameters:l,consumedSegments:u,positionalParamSegments:h,remainingSegments:d}=mp(t,r,s);if(!c)return wr(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Rv&&(this.allowRedirects=!1));let p=new zi(s,l,Object.freeze(Re({},this.urlTree.queryParams)),this.urlTree.fragment,Hf(r),Mn(r),r.component??r._loadedComponent??null,r,Gf(r)),g=Na(p,a,this.paramsInheritanceStrategy);p.params=Object.freeze(g.params),p.data=Object.freeze(g.data);let _=this.applyRedirects.applyRedirectCommands(u,r.redirectTo,h,p,e);return this.applyRedirects.lineralizeSegments(r,_).pipe(dn(m=>this.processSegment(e,n,t,m.concat(d),o,!1,a)))}matchSegmentAgainstRoute(e,t,n,r,s,o){let a=Mv(t,n,r,e,this.urlSerializer);return n.path==="**"&&(t.children={}),a.pipe(An(c=>c.matched?(e=n._injector??e,this.getChildConfig(e,n,r).pipe(An(({routes:l})=>{let u=n._loadedInjector??e,{parameters:h,consumedSegments:d,remainingSegments:p}=c,g=new zi(d,h,Object.freeze(Re({},this.urlTree.queryParams)),this.urlTree.fragment,Hf(n),Mn(n),n.component??n._loadedComponent??null,n,Gf(n)),_=Na(g,o,this.paramsInheritanceStrategy);g.params=Object.freeze(_.params),g.data=Object.freeze(_.data);let{segmentGroup:m,slicedSegments:f}=Vf(t,d,p,l);if(f.length===0&&m.hasChildren())return this.processChildren(u,l,m,g).pipe(pt(S=>new Kt(g,S)));if(l.length===0&&f.length===0)return Ve(new Kt(g,[]));let T=Mn(n)===s;return this.processSegment(u,l,m,f,T?$e:s,!0,g).pipe(pt(S=>new Kt(g,S instanceof Kt?[S]:[])))}))):wr(t)))}getChildConfig(e,t,n){return t.children?Ve({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Ve({routes:t._loadedRoutes,injector:t._loadedInjector}):vv(e,t,n,this.urlSerializer).pipe(dn(r=>r?this.configLoader.loadChildren(e,t).pipe(Rt(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):xv(t))):Ve({routes:[],injector:e})}};function Dv(i){i.sort((e,t)=>e.value.outlet===$e?-1:t.value.outlet===$e?1:e.value.outlet.localeCompare(t.value.outlet))}function Iv(i){let e=i.value.routeConfig;return e&&e.path===""}function gp(i){let e=[],t=new Set;for(let n of i){if(!Iv(n)){e.push(n);continue}let r=e.find(s=>n.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...n.children),t.add(r)):e.push(n)}for(let n of t){let r=gp(n.children);e.push(new Kt(n.value,r))}return e.filter(n=>!t.has(n))}function Hf(i){return i.data||{}}function Gf(i){return i.resolve||{}}function Pv(i,e,t,n,r,s){return dn(o=>Cv(i,e,t,n,o.extractedUrl,r,s).pipe(pt(({state:a,tree:c})=>Nt(Re({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function Lv(i,e){return dn(t=>{let{targetSnapshot:n,guards:{canActivateChecks:r}}=t;if(!r.length)return Ve(t);let s=new Set(r.map(c=>c.route)),o=new Set;for(let c of s)if(!o.has(c))for(let l of vp(c))o.add(l);let a=0;return hn(o).pipe(vs(c=>s.has(c)?Ov(c,n,i,e):(c.data=Na(c,c.parent,i).resolve,Ve(void 0))),Rt(()=>a++),tu(1),dn(c=>a===o.size?Ve(t):Vn))})}function vp(i){let e=i.children.map(t=>vp(t)).flat();return[i,...e]}function Ov(i,e,t,n){let r=i.routeConfig,s=i._resolve;return r?.title!==void 0&&!cp(r)&&(s[Ys]=r.title),Fv(s,i,e,n).pipe(pt(o=>(i._resolvedData=o,i.data=Na(i,i.parent,t).resolve,null)))}function Fv(i,e,t,n){let r=Nu(i);if(r.length===0)return Ve({});let s={};return hn(r).pipe(dn(o=>Nv(i[o],e,t,n).pipe(li(),Rt(a=>{if(a instanceof Ir)throw Ua(new Hi,a);s[o]=a}))),tu(1),pt(()=>s),vr(o=>fp(o)?Vn:gs(o)))}function Nv(i,e,t,n){let r=Js(e)??n,s=Or(i,r),o=s.resolve?s.resolve(e,t):Cn(r,()=>s(e,t));return mi(o)}function Ou(i){return An(e=>{let t=i(e);return t?hn(t).pipe(pt(()=>e)):Ve(e)})}var Ku=(()=>{class i{buildTitle(t){let n,r=t.root;for(;r!==void 0;)n=this.getResolvedTitleForRoute(r)??n,r=r.children.find(s=>s.outlet===$e);return n}getResolvedTitleForRoute(t){return t.data[Ys]}static \u0275fac=function(n){return new(n||i)};static \u0275prov=it({token:i,factory:()=>Ie(_p),providedIn:"root"})}return i})(),_p=(()=>{class i extends Ku{title;constructor(t){super(),this.title=t}updateTitle(t){let n=this.buildTitle(t);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||i)(ot(Of))};static \u0275prov=it({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),eo=new dt("",{providedIn:"root",factory:()=>({})}),to=new dt(""),yp=(()=>{class i{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=Ie(of);loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Ve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let n=mi(t.loadComponent()).pipe(pt(Mp),Rt(s=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=s}),Zo(()=>{this.componentLoaders.delete(t)})),r=new Jl(n,()=>new Tn).pipe(Zl());return this.componentLoaders.set(t,r),r}loadChildren(t,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return Ve({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let s=xp(n,this.compiler,t,this.onLoadEndListener).pipe(Zo(()=>{this.childrenLoaders.delete(n)})),o=new Jl(s,()=>new Tn).pipe(Zl());return this.childrenLoaders.set(n,o),o}static \u0275fac=function(n){return new(n||i)};static \u0275prov=it({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function xp(i,e,t,n){return mi(i.loadChildren()).pipe(pt(Mp),dn(r=>r instanceof nf||Array.isArray(r)?Ve(r):hn(e.compileModuleAsync(r))),pt(r=>{n&&n(i);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(to,[],{optional:!0,self:!0}).flat()),{routes:o.map(Ju),injector:s}}))}function Uv(i){return i&&typeof i=="object"&&"default"in i}function Mp(i){return Uv(i)?i.default:i}var Ha=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275prov=it({token:i,factory:()=>Ie(Bv),providedIn:"root"})}return i})(),Bv=(()=>{class i{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,n){return t}static \u0275fac=function(n){return new(n||i)};static \u0275prov=it({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Sp=new dt("");var bp=new dt(""),wp=(()=>{class i{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new Tn;transitionAbortSubject=new Tn;configLoader=Ie(yp);environmentInjector=Ie(Ko);destroyRef=Ie(ou);urlSerializer=Ie(Zs);rootContexts=Ie(Lr);location=Ie(br);inputBindingEnabled=Ie(za,{optional:!0})!==null;titleStrategy=Ie(Ku);options=Ie(eo,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=Ie(Ha);createViewTransition=Ie(Sp,{optional:!0});navigationErrorHandler=Ie(bp,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Ve(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=r=>this.events.next(new Ca(r)),n=r=>this.events.next(new Ra(r));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let n=++this.navigationId;this.transitions?.next(Nt(Re({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:n}))}setupNavigations(t){return this.transitions=new un(null),this.transitions.pipe(gr(n=>n!==null),An(n=>{let r=!1,s=!1;return Ve(n).pipe(An(o=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,"",Yt.SupersededByNewNavigation),Vn;this.currentTransition=n,this.currentNavigation={id:o.id,initialUrl:o.rawUrl,extractedUrl:o.extractedUrl,targetBrowserUrl:typeof o.extras.browserUrl=="string"?this.urlSerializer.parse(o.extras.browserUrl):o.extras.browserUrl,trigger:o.source,extras:o.extras,previousNavigation:this.lastSuccessfulNavigation?Nt(Re({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let a=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),c=o.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!a&&c!=="reload"){let l="";return this.events.next(new $n(o.id,this.urlSerializer.serialize(o.rawUrl),l,Vs.IgnoredSameUrlNavigation)),o.resolve(!1),Vn}if(this.urlHandlingStrategy.shouldProcessUrl(o.rawUrl))return Ve(o).pipe(An(l=>(this.events.next(new Gi(l.id,this.urlSerializer.serialize(l.extractedUrl),l.source,l.restoredState)),l.id!==this.navigationId?Vn:Promise.resolve(l))),Pv(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),Rt(l=>{n.targetSnapshot=l.targetSnapshot,n.urlAfterRedirects=l.urlAfterRedirects,this.currentNavigation=Nt(Re({},this.currentNavigation),{finalUrl:l.urlAfterRedirects});let u=new Hs(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}));if(a&&this.urlHandlingStrategy.shouldProcessUrl(o.currentRawUrl)){let{id:l,extractedUrl:u,source:h,restoredState:d,extras:p}=o,g=new Gi(l,this.urlSerializer.serialize(u),h,d);this.events.next(g);let _=op(this.rootComponentType).snapshot;return this.currentTransition=n=Nt(Re({},o),{targetSnapshot:_,urlAfterRedirects:u,extras:Nt(Re({},p),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=u,Ve(n)}else{let l="";return this.events.next(new $n(o.id,this.urlSerializer.serialize(o.extractedUrl),l,Vs.IgnoredByUrlHandlingStrategy)),o.resolve(!1),Vn}}),Rt(o=>{let a=new wa(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot);this.events.next(a)}),pt(o=>(this.currentTransition=n=Nt(Re({},o),{guards:K0(o.targetSnapshot,o.currentSnapshot,this.rootContexts)}),n)),lv(this.environmentInjector,o=>this.events.next(o)),Rt(o=>{if(n.guardsResult=o.guardsResult,o.guardsResult&&typeof o.guardsResult!="boolean")throw Ua(this.urlSerializer,o.guardsResult);let a=new Ea(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot,!!o.guardsResult);this.events.next(a)}),gr(o=>o.guardsResult?!0:(this.cancelNavigationTransition(o,"",Yt.GuardRejected),!1)),Ou(o=>{if(o.guards.canActivateChecks.length!==0)return Ve(o).pipe(Rt(a=>{let c=new Ta(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(c)}),An(a=>{let c=!1;return Ve(a).pipe(Lv(this.paramsInheritanceStrategy,this.environmentInjector),Rt({next:()=>c=!0,complete:()=>{c||this.cancelNavigationTransition(a,"",Yt.NoDataFromResolver)}}))}),Rt(a=>{let c=new Aa(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(c)}))}),Ou(o=>{let a=c=>{let l=[];c.routeConfig?.loadComponent&&!c.routeConfig._loadedComponent&&l.push(this.configLoader.loadComponent(c.routeConfig).pipe(Rt(u=>{c.component=u}),pt(()=>{})));for(let u of c.children)l.push(...a(u));return l};return Kl(a(o.targetSnapshot.root)).pipe(eu(null),_r(1))}),Ou(()=>this.afterPreactivation()),An(()=>{let{currentSnapshot:o,targetSnapshot:a}=n,c=this.createViewTransition?.(this.environmentInjector,o.root,a.root);return c?hn(c).pipe(pt(()=>n)):Ve(n)}),pt(o=>{let a=q0(t.routeReuseStrategy,o.targetSnapshot,o.currentRouterState);return this.currentTransition=n=Nt(Re({},o),{targetRouterState:a}),this.currentNavigation.targetRouterState=a,n}),Rt(()=>{this.events.next(new Gs)}),J0(this.rootContexts,t.routeReuseStrategy,o=>this.events.next(o),this.inputBindingEnabled),_r(1),Rt({next:o=>{r=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new Xn(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects))),this.titleStrategy?.updateTitle(o.targetRouterState.snapshot),o.resolve(!0)},complete:()=>{r=!0}}),zd(this.transitionAbortSubject.pipe(Rt(o=>{throw o}))),Zo(()=>{!r&&!s&&this.cancelNavigationTransition(n,"",Yt.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation=null,this.currentTransition=null)}),vr(o=>{if(this.destroyed)return n.resolve(!1),Vn;if(s=!0,dp(o))this.events.next(new In(n.id,this.urlSerializer.serialize(n.extractedUrl),o.message,o.cancellationCode)),Z0(o)?this.events.next(new Dr(o.url,o.navigationBehaviorOptions)):n.resolve(!1);else{let a=new Rr(n.id,this.urlSerializer.serialize(n.extractedUrl),o,n.targetSnapshot??void 0);try{let c=Cn(this.environmentInjector,()=>this.navigationErrorHandler?.(a));if(c instanceof Ir){let{message:l,cancellationCode:u}=Ua(this.urlSerializer,c);this.events.next(new In(n.id,this.urlSerializer.serialize(n.extractedUrl),l,u)),this.events.next(new Dr(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(a),o}catch(c){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(c)}}return Vn}))}))}cancelNavigationTransition(t,n,r){let s=new In(t.id,this.urlSerializer.serialize(t.extractedUrl),n,r);this.events.next(s),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return t.toString()!==n?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||i)};static \u0275prov=it({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function kv(i){return i!==Ma}var Ep=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275prov=it({token:i,factory:()=>Ie(zv),providedIn:"root"})}return i})(),ka=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},zv=(()=>{class i extends ka{static \u0275fac=(()=>{let t;return function(r){return(t||(t=su(i)))(r||i)}})();static \u0275prov=it({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Tp=(()=>{class i{urlSerializer=Ie(Zs);options=Ie(eo,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=Ie(br);urlHandlingStrategy=Ie(Ha);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Pn;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:n,targetBrowserUrl:r}){let s=t!==void 0?this.urlHandlingStrategy.merge(t,n):n,o=r??s;return o instanceof Pn?this.urlSerializer.serialize(o):o}commitTransition({targetRouterState:t,finalUrl:n,initialUrl:r}){n&&t?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,r),this.routerState=t):this.rawUrlTree=r}routerState=op(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();updateStateMemento(){this.stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=it({token:i,factory:()=>Ie(Vv),providedIn:"root"})}return i})(),Vv=(()=>{class i extends Tp{currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(n=>{n.type==="popstate"&&setTimeout(()=>{t(n.url,n.state,"popstate")})})}handleRouterEvent(t,n){t instanceof Gi?this.updateStateMemento():t instanceof $n?this.commitTransition(n):t instanceof Hs?this.urlUpdateStrategy==="eager"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):t instanceof Gs?(this.commitTransition(n),this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):t instanceof In&&(t.code===Yt.GuardRejected||t.code===Yt.NoDataFromResolver)?this.restoreHistory(n):t instanceof Rr?this.restoreHistory(n,!0):t instanceof Xn&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,{extras:n,id:r}){let{replaceUrl:s,state:o}=n;if(this.location.isCurrentPathEqualTo(t)||s){let a=this.browserPageId,c=Re(Re({},o),this.generateNgRouterState(r,a));this.location.replaceState(t,"",c)}else{let a=Re(Re({},o),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(t,"",a)}}restoreHistory(t,n=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,s=this.currentPageId-r;s!==0?this.location.historyGo(s):this.getCurrentUrlTree()===t.finalUrl&&s===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,n){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:n}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=su(i)))(r||i)}})();static \u0275prov=it({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Qu(i,e){i.events.pipe(gr(t=>t instanceof Xn||t instanceof In||t instanceof Rr||t instanceof $n),pt(t=>t instanceof Xn||t instanceof $n?0:(t instanceof In?t.code===Yt.Redirect||t.code===Yt.SupersededByNewNavigation:!1)?2:1),gr(t=>t!==2),_r(1)).subscribe(()=>{e()})}var Hv={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Gv={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Ga=(()=>{class i{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=Ie(fu);stateManager=Ie(Tp);options=Ie(eo,{optional:!0})||{};pendingTasks=Ie(au);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=Ie(wp);urlSerializer=Ie(Zs);location=Ie(br);urlHandlingStrategy=Ie(Ha);_events=new Tn;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=Ie(Ep);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=Ie(to,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!Ie(za,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Pd;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(n=>{try{let r=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(r!==null&&s!==null){if(this.stateManager.handleRouterEvent(n,s),n instanceof In&&n.code!==Yt.Redirect&&n.code!==Yt.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof Xn)this.navigated=!0;else if(n instanceof Dr){let o=n.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(n.url,r.currentRawUrl),c=Re({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||kv(r.source)},o);this.scheduleNavigation(a,Ma,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}Xv(n)&&this._events.next(n)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Ma,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,n,r)=>{this.navigateToSyncWithBrowser(t,r,n)})}navigateToSyncWithBrowser(t,n,r){let s={replaceUrl:!0},o=r?.navigationId?r:null;if(r){let c=Re({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(s.state=c)}let a=this.parseUrl(t);this.scheduleNavigation(a,n,o,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Ju),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,n={}){let{relativeTo:r,queryParams:s,fragment:o,queryParamsHandling:a,preserveFragment:c}=n,l=c?this.currentUrlTree.fragment:o,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=Re(Re({},this.currentUrlTree.queryParams),s);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=s||null}u!==null&&(u=this.removeEmptyProps(u));let h;try{let d=r?r.snapshot:this.routerState.snapshot.root;h=np(d)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),h=this.currentUrlTree.root}return ip(h,t,u,l??null)}navigateByUrl(t,n={skipLocationChange:!1}){let r=Cr(t)?t:this.parseUrl(t),s=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(s,Ma,null,n)}navigate(t,n={skipLocationChange:!1}){return Wv(t),this.navigateByUrl(this.createUrlTree(t,n),n)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,n){let r;if(n===!0?r=Re({},Hv):n===!1?r=Re({},Gv):r=n,Cr(t))return Uf(this.currentUrlTree,t,r);let s=this.parseUrl(t);return Uf(this.currentUrlTree,s,r)}removeEmptyProps(t){return Object.entries(t).reduce((n,[r,s])=>(s!=null&&(n[r]=s),n),{})}scheduleNavigation(t,n,r,s,o){if(this.disposed)return Promise.resolve(!1);let a,c,l;o?(a=o.resolve,c=o.reject,l=o.promise):l=new Promise((h,d)=>{a=h,c=d});let u=this.pendingTasks.add();return Qu(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:s,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(h=>Promise.reject(h))}static \u0275fac=function(n){return new(n||i)};static \u0275prov=it({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Wv(i){for(let e=0;e<i.length;e++)if(i[e]==null)throw new ht(4008,!1)}function Xv(i){return!(i instanceof Gs)&&!(i instanceof Dr)}var qv=new dt("");function eh(i,...e){return Fi([{provide:to,multi:!0,useValue:i},[],{provide:pi,useFactory:jv,deps:[Ga]},{provide:na,multi:!0,useFactory:Yv},e.map(t=>t.\u0275providers)])}function jv(i){return i.routerState.root}function Yv(){let i=Ie(Bi);return e=>{let t=i.get(Ms);if(e!==t.components[0])return;let n=i.get(Ga),r=i.get(Zv);i.get(Jv)===1&&n.initialNavigation(),i.get(Kv,null,nu.Optional)?.setUpPreloading(),i.get(qv,null,nu.Optional)?.init(),n.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Zv=new dt("",{factory:()=>new Tn}),Jv=new dt("",{providedIn:"root",factory:()=>1});var Kv=new dt("");var Wc="177";var Jp=0,zh=1,Kp=2;var Vh=1,Qp=2,Nn=3,ti=0,Bt=1,gn=2,si=0,Zi=1,sr=2,Hh=3,Gh=4,em=5,Ei=100,tm=101,nm=102,im=103,rm=104,sm=200,om=201,am=202,cm=203,pc=204,mc=205,lm=206,um=207,hm=208,dm=209,fm=210,pm=211,mm=212,gm=213,vm=214,Xc=0,$c=1,qc=2,Ji=3,jc=4,Yc=5,Zc=6,Jc=7,Wh=0,_m=1,ym=2,oi=0,xm=1,Mm=2,Sm=3,bm=4,wm=5,Em=6,Tm=7;var Ah=300,or=301,ar=302,Kc=303,Qc=304,ko=306,gc=1e3,bi=1001,vc=1002,mn=1003,Am=1004;var zo=1005;var En=1006,el=1007;var Di=1008;var Un=1009,Xh=1010,$h=1011,rs=1012,tl=1013,Ii=1014,Bn=1015,ss=1016,nl=1017,il=1018,os=1020,qh=35902,jh=1021,Yh=1022,vn=1023,jr=1026,as=1027,Zh=1028,rl=1029,Jh=1030,sl=1031;var ol=1033,Vo=33776,Ho=33777,Go=33778,Wo=33779,al=35840,cl=35841,ll=35842,ul=35843,hl=36196,dl=37492,fl=37496,pl=37808,ml=37809,gl=37810,vl=37811,_l=37812,yl=37813,xl=37814,Ml=37815,Sl=37816,bl=37817,wl=37818,El=37819,Tl=37820,Al=37821,Xo=36492,Cl=36494,Rl=36495,Kh=36283,Dl=36284,Il=36285,Pl=36286;var uo=2300,_c=2301,fc=2302,Ch=2400,Rh=2401,Dh=2402;var Cm=3200,Rm=3201;var Dm=0,Im=1,ai="",nn="srgb",Ki="srgb-linear",ho="linear",ft="srgb";var ji=7680;var Ih=519,Pm=512,Lm=513,Om=514,Qh=515,Fm=516,Nm=517,Um=518,Bm=519,Ph=35044;var ed="300 es",On=2e3,fo=2001;var ni=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var th=Math.PI/180,yc=180/Math.PI;function cs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function Qe(i,e,t){return Math.max(e,Math.min(t,i))}function e_(i,e){return(i%e+e)%e}function nh(i,e,t){return(1-t)*i+t*e}function no(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var he=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ii=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3],d=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==p||u!==g){let m=1-a,f=c*d+l*p+u*g+h*_,T=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){let I=Math.sqrt(S),C=Math.atan2(I,f*T);m=Math.sin(m*C)/I,a=Math.sin(a*C)/I}let x=a*T;if(c=c*m+d*x,l=l*m+p*x,u=u*m+g*x,h=h*m+_*x,m===1-a){let I=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=I,l*=I,u*=I,h*=I}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*h+c*p-l*d,e[t+1]=c*g+u*d+l*h-a*p,e[t+2]=l*g+u*p+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),h=a(s/2),d=c(n/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"YZX":this._x=d*u*h+l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h-d*p*g;break;case"XZY":this._x=d*u*h-l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(n>a&&n>h){let p=2*Math.sqrt(1+n-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>h){let p=2*Math.sqrt(1+a-n-h);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+h-n-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ap.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ap.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ih.copy(this).projectOnVector(e),this.sub(ih)}reflect(e){return this.sub(ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ih=new F,Ap=new ii,qe=class i{constructor(e,t,n,r,s,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],_=r[0],m=r[3],f=r[6],T=r[1],S=r[4],x=r[7],I=r[2],C=r[5],A=r[8];return s[0]=o*_+a*T+c*I,s[3]=o*m+a*S+c*C,s[6]=o*f+a*x+c*A,s[1]=l*_+u*T+h*I,s[4]=l*m+u*S+h*C,s[7]=l*f+u*x+h*A,s[2]=d*_+p*T+g*I,s[5]=d*m+p*S+g*C,s[8]=d*f+p*x+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*s,p=l*s-o*c,g=t*h+n*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=h*_,e[1]=(r*l-u*n)*_,e[2]=(a*n-r*o)*_,e[3]=d*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(rh.makeScale(e,t)),this}rotate(e){return this.premultiply(rh.makeRotation(-e)),this}translate(e,t){return this.premultiply(rh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},rh=new qe;function td(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function km(){let i=Yr("canvas");return i.style.display="block",i}var Cp={};function Qi(i){i in Cp||(Cp[i]=!0,console.warn(i))}function zm(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Vm(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Hm(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Rp=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dp=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function t_(){let i={enabled:!0,workingColorSpace:Ki,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ft&&(r.r=ei(r.r),r.g=ei(r.g),r.b=ei(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ft&&(r.r=qr(r.r),r.g=qr(r.g),r.b=qr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ai?ho:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Qi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Qi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ki]:{primaries:e,whitePoint:n,transfer:ho,toXYZ:Rp,fromXYZ:Dp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:Rp,fromXYZ:Dp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),i}var rt=t_();function ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Fr,xc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fr===void 0&&(Fr=Yr("canvas")),Fr.width=e.width,Fr.height=e.height;let r=Fr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Fr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Yr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ei(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ei(t[n]/255)*255):t[n]=ei(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},n_=0,Zr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=cs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(sh(r[o].image)):s.push(sh(r[o]))}else s=sh(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function sh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var i_=0,oh=new F,ci=(()=>{class i extends ni{constructor(t=i.DEFAULT_IMAGE,n=i.DEFAULT_MAPPING,r=bi,s=bi,o=En,a=Di,c=vn,l=Un,u=i.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=cs(),this.name="",this.source=new Zr(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(oh).x}get height(){return this.source.getSize(oh).y}get depth(){return this.source.getSize(oh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let r=t[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[n]=r}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ah)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gc:t.x=t.x-Math.floor(t.x);break;case bi:t.x=t.x<0?0:1;break;case vc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gc:t.y=t.y-Math.floor(t.y);break;case bi:t.y=t.y<0?0:1;break;case vc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return i.DEFAULT_IMAGE=null,i.DEFAULT_MAPPING=Ah,i.DEFAULT_ANISOTROPY=1,i})(),wt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,x=(p+1)/2,I=(f+1)/2,C=(u+d)/4,A=(h+_)/4,P=(g+m)/4;return S>x&&S>I?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=C/n,s=A/n):x>I?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=C/r,s=P/r):I<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),n=A/s,r=P/s),this.set(n,r,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-_)/T,this.z=(d-u)/T,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Mc=class extends ni{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);let r={width:e,height:t,depth:n.depth},s=new ci(r);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Zr(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fn=class extends Mc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},po=class extends ci{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=mn,this.minFilter=mn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Sc=class extends ci{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=mn,this.minFilter=mn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ti=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Sn):Sn.fromBufferAttribute(s,o),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wa.copy(n.boundingBox)),Wa.applyMatrix4(e.matrixWorld),this.union(Wa)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(io),Xa.subVectors(this.max,io),Nr.subVectors(e.a,io),Ur.subVectors(e.b,io),Br.subVectors(e.c,io),gi.subVectors(Ur,Nr),vi.subVectors(Br,Ur),Wi.subVectors(Nr,Br);let t=[0,-gi.z,gi.y,0,-vi.z,vi.y,0,-Wi.z,Wi.y,gi.z,0,-gi.x,vi.z,0,-vi.x,Wi.z,0,-Wi.x,-gi.y,gi.x,0,-vi.y,vi.x,0,-Wi.y,Wi.x,0];return!ah(t,Nr,Ur,Br,Xa)||(t=[1,0,0,0,1,0,0,0,1],!ah(t,Nr,Ur,Br,Xa))?!1:($a.crossVectors(gi,vi),t=[$a.x,$a.y,$a.z],ah(t,Nr,Ur,Br,Xa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},qn=[new F,new F,new F,new F,new F,new F,new F,new F],Sn=new F,Wa=new Ti,Nr=new F,Ur=new F,Br=new F,gi=new F,vi=new F,Wi=new F,io=new F,Xa=new F,$a=new F,Xi=new F;function ah(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Xi.fromArray(i,s);let a=r.x*Math.abs(Xi.x)+r.y*Math.abs(Xi.y)+r.z*Math.abs(Xi.z),c=e.dot(Xi),l=t.dot(Xi),u=n.dot(Xi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var r_=new Ti,ro=new F,ch=new F,er=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):r_.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ro.subVectors(e,this.center);let t=ro.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ro,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ch.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ro.copy(e.center).add(ch)),this.expandByPoint(ro.copy(e.center).sub(ch))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},jn=new F,lh=new F,qa=new F,_i=new F,uh=new F,ja=new F,hh=new F,mo=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){lh.copy(e).add(t).multiplyScalar(.5),qa.copy(t).sub(e).normalize(),_i.copy(this.origin).sub(lh);let s=e.distanceTo(t)*.5,o=-this.direction.dot(qa),a=_i.dot(this.direction),c=-_i.dot(qa),l=_i.lengthSq(),u=Math.abs(1-o*o),h,d,p,g;if(u>0)if(h=o*c-a,d=o*a-c,g=s*u,h>=0)if(d>=-g)if(d<=g){let _=1/u;h*=_,d*=_,p=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(lh).addScaledVector(qa,d),p}intersectSphere(e,t){jn.subVectors(e.center,this.origin);let n=jn.dot(this.direction),r=jn.dot(jn)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,n,r,s){uh.subVectors(t,e),ja.subVectors(n,e),hh.crossVectors(uh,ja);let o=this.direction.dot(hh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_i.subVectors(this.origin,e);let c=a*this.direction.dot(ja.crossVectors(_i,ja));if(c<0)return null;let l=a*this.direction.dot(uh.cross(_i));if(l<0||c+l>o)return null;let u=-a*_i.dot(hh);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bt=class i{constructor(e,t,n,r,s,o,a,c,l,u,h,d,p,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,u,h,d,p,g,_,m)}set(e,t,n,r,s,o,a,c,l,u,h,d,p,g,_,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/kr.setFromMatrixColumn(e,0).length(),s=1/kr.setFromMatrixColumn(e,1).length(),o=1/kr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let d=o*u,p=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*u,p=c*h,g=l*u,_=l*h;t[0]=d+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*u,p=c*h,g=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*u,p=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-p,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*h+g,t[10]=d-_*h}else if(e.order==="XZY"){let d=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(s_,e,o_)}lookAt(e,t,n){let r=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),yi.crossVectors(n,en),yi.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),yi.crossVectors(n,en)),yi.normalize(),Ya.crossVectors(en,yi),r[0]=yi.x,r[4]=Ya.x,r[8]=en.x,r[1]=yi.y,r[5]=Ya.y,r[9]=en.y,r[2]=yi.z,r[6]=Ya.z,r[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],T=n[3],S=n[7],x=n[11],I=n[15],C=r[0],A=r[4],P=r[8],w=r[12],M=r[1],R=r[5],$=r[9],k=r[13],Z=r[2],q=r[6],W=r[10],Y=r[14],z=r[3],ae=r[7],me=r[11],Me=r[15];return s[0]=o*C+a*M+c*Z+l*z,s[4]=o*A+a*R+c*q+l*ae,s[8]=o*P+a*$+c*W+l*me,s[12]=o*w+a*k+c*Y+l*Me,s[1]=u*C+h*M+d*Z+p*z,s[5]=u*A+h*R+d*q+p*ae,s[9]=u*P+h*$+d*W+p*me,s[13]=u*w+h*k+d*Y+p*Me,s[2]=g*C+_*M+m*Z+f*z,s[6]=g*A+_*R+m*q+f*ae,s[10]=g*P+_*$+m*W+f*me,s[14]=g*w+_*k+m*Y+f*Me,s[3]=T*C+S*M+x*Z+I*z,s[7]=T*A+S*R+x*q+I*ae,s[11]=T*P+S*$+x*W+I*me,s[15]=T*w+S*k+x*Y+I*Me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+s*c*h-r*l*h-s*a*d+n*l*d+r*a*p-n*c*p)+_*(+t*c*p-t*l*d+s*o*d-r*o*p+r*l*u-s*c*u)+m*(+t*l*h-t*a*p-s*o*h+n*o*p+s*a*u-n*l*u)+f*(-r*a*u-t*c*h+t*a*d+r*o*h-n*o*d+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],T=h*m*l-_*d*l+_*c*p-a*m*p-h*c*f+a*d*f,S=g*d*l-u*m*l-g*c*p+o*m*p+u*c*f-o*d*f,x=u*_*l-g*h*l+g*a*p-o*_*p-u*a*f+o*h*f,I=g*h*c-u*_*c-g*a*d+o*_*d+u*a*m-o*h*m,C=t*T+n*S+r*x+s*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/C;return e[0]=T*A,e[1]=(_*d*s-h*m*s-_*r*p+n*m*p+h*r*f-n*d*f)*A,e[2]=(a*m*s-_*c*s+_*r*l-n*m*l-a*r*f+n*c*f)*A,e[3]=(h*c*s-a*d*s-h*r*l+n*d*l+a*r*p-n*c*p)*A,e[4]=S*A,e[5]=(u*m*s-g*d*s+g*r*p-t*m*p-u*r*f+t*d*f)*A,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*f-t*c*f)*A,e[7]=(o*d*s-u*c*s+u*r*l-t*d*l-o*r*p+t*c*p)*A,e[8]=x*A,e[9]=(g*h*s-u*_*s-g*n*p+t*_*p+u*n*f-t*h*f)*A,e[10]=(o*_*s-g*a*s+g*n*l-t*_*l-o*n*f+t*a*f)*A,e[11]=(u*a*s-o*h*s-u*n*l+t*h*l+o*n*p-t*a*p)*A,e[12]=I*A,e[13]=(u*_*r-g*h*r+g*n*d-t*_*d-u*n*m+t*h*m)*A,e[14]=(g*a*r-o*_*r-g*n*c+t*_*c+o*n*m-t*a*m)*A,e[15]=(o*h*r-u*a*r+u*n*c-t*h*c-o*n*d+t*a*d)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,d=s*l,p=s*u,g=s*h,_=o*u,m=o*h,f=a*h,T=c*l,S=c*u,x=c*h,I=n.x,C=n.y,A=n.z;return r[0]=(1-(_+f))*I,r[1]=(p+x)*I,r[2]=(g-S)*I,r[3]=0,r[4]=(p-x)*C,r[5]=(1-(d+f))*C,r[6]=(m+T)*C,r[7]=0,r[8]=(g+S)*A,r[9]=(m-T)*A,r[10]=(1-(d+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=kr.set(r[0],r[1],r[2]).length(),o=kr.set(r[4],r[5],r[6]).length(),a=kr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],bn.copy(this);let l=1/s,u=1/o,h=1/a;return bn.elements[0]*=l,bn.elements[1]*=l,bn.elements[2]*=l,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=h,bn.elements[9]*=h,bn.elements[10]*=h,t.setFromRotationMatrix(bn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=On){let c=this.elements,l=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r),p,g;if(a===On)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===fo)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=On){let c=this.elements,l=1/(t-e),u=1/(n-r),h=1/(o-s),d=(t+e)*l,p=(n+r)*u,g,_;if(a===On)g=(o+s)*h,_=-2*h;else if(a===fo)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},kr=new F,bn=new bt,s_=new F(0,0,0),o_=new F(1,1,1),yi=new F,Ya=new F,en=new F,Ip=new bt,Pp=new ii,tr=(()=>{class i{constructor(t=0,n=0,r=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,s=this._order){return this._x=t,this._y=n,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],h=s[9],d=s[2],p=s[6],g=s[10];switch(n){case"XYZ":this._y=Math.asin(Qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return Ip.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ip,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Pp.setFromEuler(this),this.setFromQuaternion(Pp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return i.DEFAULT_ORDER="XYZ",i})(),go=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},a_=0,Lp=new F,zr=new ii,Yn=new bt,Za=new F,so=new F,c_=new F,l_=new ii,Op=new F(1,0,0),Fp=new F(0,1,0),Np=new F(0,0,1),Up={type:"added"},u_={type:"removed"},Vr={type:"childadded",child:null},dh={type:"childremoved",child:null},Pi=(()=>{class i extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,n=new tr,r=new ii,s=new F(1,1,1);function o(){r.setFromEuler(n,!1)}function a(){n.setFromQuaternion(r,void 0,!1)}n._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new qe}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return zr.setFromAxisAngle(t,n),this.quaternion.multiply(zr),this}rotateOnWorldAxis(t,n){return zr.setFromAxisAngle(t,n),this.quaternion.premultiply(zr),this}rotateX(t){return this.rotateOnAxis(Op,t)}rotateY(t){return this.rotateOnAxis(Fp,t)}rotateZ(t){return this.rotateOnAxis(Np,t)}translateOnAxis(t,n){return Lp.copy(t).applyQuaternion(this.quaternion),this.position.add(Lp.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Op,t)}translateY(t){return this.translateOnAxis(Fp,t)}translateZ(t){return this.translateOnAxis(Np,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?Za.copy(t):Za.set(t,n,r);let s=this.parent;this.updateWorldMatrix(!0,!1),so.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(so,Za,this.up):Yn.lookAt(Za,so,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),zr.setFromRotationMatrix(Yn),this.quaternion.premultiply(zr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Up),Vr.child=t,this.dispatchEvent(Vr),Vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(u_),dh.child=t,this.dispatchEvent(dh),dh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Up),Vr.child=t,this.dispatchEvent(Vr),Vr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,t,c_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,l_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>Nt(Re({},c),{boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>Re({},c)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){let d=l[u];o(t.shapes,d)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(n){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),h=a(t.images),d=a(t.shapes),p=a(t.skeletons),g=a(t.animations),_=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),h.length>0&&(r.images=h),d.length>0&&(r.shapes=d),p.length>0&&(r.skeletons=p),g.length>0&&(r.animations=g),_.length>0&&(r.nodes=_)}return r.object=s,r;function a(c){let l=[];for(let u in c){let h=c[u];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return i.DEFAULT_UP=new F(0,1,0),i.DEFAULT_MATRIX_AUTO_UPDATE=!0,i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,i})(),wn=new F,Zn=new F,fh=new F,Jn=new F,Hr=new F,Gr=new F,Bp=new F,ph=new F,mh=new F,gh=new F,vh=new wt,_h=new wt,yh=new wt,Si=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),wn.subVectors(e,t),r.cross(wn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){wn.subVectors(r,t),Zn.subVectors(n,t),fh.subVectors(e,t);let o=wn.dot(wn),a=wn.dot(Zn),c=wn.dot(fh),l=Zn.dot(Zn),u=Zn.dot(fh),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;let d=1/h,p=(l*c-a*u)*d,g=(o*u-a*c)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,Jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Jn.x),c.addScaledVector(o,Jn.y),c.addScaledVector(a,Jn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return vh.setScalar(0),_h.setScalar(0),yh.setScalar(0),vh.fromBufferAttribute(e,t),_h.fromBufferAttribute(e,n),yh.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(vh,s.x),o.addScaledVector(_h,s.y),o.addScaledVector(yh,s.z),o}static isFrontFacing(e,t,n,r){return wn.subVectors(n,t),Zn.subVectors(e,t),wn.cross(Zn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),wn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;Hr.subVectors(r,n),Gr.subVectors(s,n),ph.subVectors(e,n);let c=Hr.dot(ph),l=Gr.dot(ph);if(c<=0&&l<=0)return t.copy(n);mh.subVectors(e,r);let u=Hr.dot(mh),h=Gr.dot(mh);if(u>=0&&h<=u)return t.copy(r);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Hr,o);gh.subVectors(e,s);let p=Hr.dot(gh),g=Gr.dot(gh);if(g>=0&&p<=g)return t.copy(s);let _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Gr,a);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Bp.subVectors(s,r),a=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(Bp,a);let f=1/(m+_+d);return o=_*f,a=d*f,t.copy(n).addScaledVector(Hr,o).addScaledVector(Gr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Gm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},Ja={h:0,s:0,l:0};function xh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=rt.workingColorSpace){if(e=e_(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=xh(o,s,e+1/3),this.g=xh(o,s,e),this.b=xh(o,s,e-1/3)}return rt.colorSpaceToWorking(this,r),this}setStyle(e,t=nn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){let n=Gm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return rt.workingToColorSpace(zt.copy(this),e),Math.round(Qe(zt.r*255,0,255))*65536+Math.round(Qe(zt.g*255,0,255))*256+Math.round(Qe(zt.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(zt.copy(this),t);let n=zt.r,r=zt.g,s=zt.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=nn){rt.workingToColorSpace(zt.copy(this),e);let t=zt.r,n=zt.g,r=zt.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(Ja);let n=nh(xi.h,Ja.h,t),r=nh(xi.s,Ja.s,t),s=nh(xi.l,Ja.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zt=new Ze;Ze.NAMES=Gm;var h_=0,Ai=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=cs(),this.name="",this.type="Material",this.blending=Zi,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pc,this.blendDst=mc,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ih,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pc&&(n.blendSrc=this.blendSrc),this.blendDst!==mc&&(n.blendDst=this.blendDst),this.blendEquation!==Ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ih&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ri=class extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tr,this.combine=Wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Et=new F,Ka=new he,d_=0,Ht=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:d_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ph,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ka.fromBufferAttribute(this,t),Ka.applyMatrix3(e),this.setXY(t,Ka.x,Ka.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=no(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=no(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=no(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=no(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=no(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ph&&(e.usage=this.usage),e}};var vo=class extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var _o=class extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Xt=class extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}},f_=0,pn=new bt,Mh=new Pi,Wr=new F,tn=new Ti,oo=new Ti,Ot=new F,rn=class i extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(td(e)?_o:vo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return Mh.lookAt(e),Mh.updateMatrix(),this.applyMatrix4(Mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xt(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new er);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];oo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(tn.min,oo.min),tn.expandByPoint(Ot),Ot.addVectors(tn.max,oo.max),tn.expandByPoint(Ot)):(tn.expandByPoint(oo.min),tn.expandByPoint(oo.max))}tn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ot));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ot.fromBufferAttribute(a,l),c&&(Wr.fromBufferAttribute(e,l),Ot.add(Wr)),r=Math.max(r,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new F,c[P]=new F;let l=new F,u=new F,h=new F,d=new he,p=new he,g=new he,_=new F,m=new F;function f(P,w,M){l.fromBufferAttribute(n,P),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,M),d.fromBufferAttribute(s,P),p.fromBufferAttribute(s,w),g.fromBufferAttribute(s,M),u.sub(l),h.sub(l),p.sub(d),g.sub(d);let R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(R),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(R),a[P].add(_),a[w].add(_),a[M].add(_),c[P].add(m),c[w].add(m),c[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let P=0,w=T.length;P<w;++P){let M=T[P],R=M.start,$=M.count;for(let k=R,Z=R+$;k<Z;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let S=new F,x=new F,I=new F,C=new F;function A(P){I.fromBufferAttribute(r,P),C.copy(I);let w=a[P];S.copy(w),S.sub(I.multiplyScalar(I.dot(w))).normalize(),x.crossVectors(C,w);let R=x.dot(c[P])<0?-1:1;o.setXYZW(P,S.x,S.y,S.z,R)}for(let P=0,w=T.length;P<w;++P){let M=T[P],R=M.start,$=M.count;for(let k=R,Z=R+$;k<Z;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let r=new F,s=new F,o=new F,a=new F,c=new F,l=new F,u=new F,h=new F;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u),p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*u;for(let f=0;f<u;f++)d[g++]=l[p++]}return new Ht(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){let d=l[u],p=e(d,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],h=s[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},kp=new bt,$i=new mo,Qa=new er,zp=new F,ec=new F,tc=new F,nc=new F,Sh=new F,ic=new F,Vp=new F,rc=new F,Ut=class extends Pi{constructor(e=new rn,t=new ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){ic.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],h=s[c];u!==0&&(Sh.fromBufferAttribute(h,e),o?ic.addScaledVector(Sh,u):ic.addScaledVector(Sh.sub(t),u))}t.add(ic)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere),Qa.applyMatrix4(s),$i.copy(e.ray).recast(e.near),!(Qa.containsPoint($i.origin)===!1&&($i.intersectSphere(Qa,zp)===null||$i.origin.distanceToSquared(zp)>(e.far-e.near)**2))&&(kp.copy(s).invert(),$i.copy(e.ray).applyMatrix4(kp),!(n.boundingBox!==null&&$i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$i)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=o[m.materialIndex],T=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=T,I=S;x<I;x+=3){let C=a.getX(x),A=a.getX(x+1),P=a.getX(x+2);r=sc(this,f,e,n,l,u,h,C,A,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let T=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);r=sc(this,o,e,n,l,u,h,T,S,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=o[m.materialIndex],T=Math.max(m.start,p.start),S=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let x=T,I=S;x<I;x+=3){let C=x,A=x+1,P=x+2;r=sc(this,f,e,n,l,u,h,C,A,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let T=m,S=m+1,x=m+2;r=sc(this,o,e,n,l,u,h,T,S,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function p_(i,e,t,n,r,s,o,a){let c;if(e.side===Bt?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===ti,a),c===null)return null;rc.copy(a),rc.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(rc);return l<t.near||l>t.far?null:{distance:l,point:rc.clone(),object:i}}function sc(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,ec),i.getVertexPosition(c,tc),i.getVertexPosition(l,nc);let u=p_(i,e,t,n,ec,tc,nc,Vp);if(u){let h=new F;Si.getBarycoord(Vp,ec,tc,nc,h),r&&(u.uv=Si.getInterpolatedAttribute(r,a,c,l,h,new he)),s&&(u.uv1=Si.getInterpolatedAttribute(s,a,c,l,h,new he)),o&&(u.normal=Si.getInterpolatedAttribute(o,a,c,l,h,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new F,materialIndex:0};Si.getNormal(ec,tc,nc,d.normal),u.face=d,u.barycoord=h}return u}var Jr=class i extends rn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],h=[],d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(h,2));function g(_,m,f,T,S,x,I,C,A,P,w){let M=x/A,R=I/P,$=x/2,k=I/2,Z=C/2,q=A+1,W=P+1,Y=0,z=0,ae=new F;for(let me=0;me<W;me++){let Me=me*R-k;for(let Xe=0;Xe<q;Xe++){let et=Xe*M-$;ae[_]=et*T,ae[m]=Me*S,ae[f]=Z,l.push(ae.x,ae.y,ae.z),ae[_]=0,ae[m]=0,ae[f]=C>0?1:-1,u.push(ae.x,ae.y,ae.z),h.push(Xe/A),h.push(1-me/P),Y+=1}}for(let me=0;me<P;me++)for(let Me=0;Me<A;Me++){let Xe=d+Me+q*me,et=d+Me+q*(me+1),G=d+(Me+1)+q*(me+1),re=d+(Me+1)+q*me;c.push(Xe,et,re),c.push(et,G,re),z+=6}a.addGroup(p,z,w),p+=z,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function cr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Gt(i){let e={};for(let t=0;t<i.length;t++){let n=cr(i[t]);for(let r in n)e[r]=n[r]}return e}function m_(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function nd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}var Wm={clone:cr,merge:Gt},g_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,v_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends Ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g_,this.fragmentShader=v_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=m_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},yo=class extends Pi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=On}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Mi=new F,Hp=new he,Gp=new he,Vt=class extends yo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=yc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(th*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yc*2*Math.atan(Math.tan(th*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,t){return this.getViewBounds(e,Hp,Gp),t.subVectors(Gp,Hp)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(th*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Xr=-90,$r=1,bc=class extends Pi{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Vt(Xr,$r,e,t);r.layers=this.layers,this.add(r);let s=new Vt(Xr,$r,e,t);s.layers=this.layers,this.add(s);let o=new Vt(Xr,$r,e,t);o.layers=this.layers,this.add(o);let a=new Vt(Xr,$r,e,t);a.layers=this.layers,this.add(a);let c=new Vt(Xr,$r,e,t);c.layers=this.layers,this.add(c);let l=new Vt(Xr,$r,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===On)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===fo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},xo=class extends ci{constructor(e=[],t=or,n,r,s,o,a,c,l,u){super(e,t,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},wc=class extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new xo(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Jr(5,5,5),s=new sn({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:si});s.uniforms.tEquirect.value=t;let o=new Ut(r,s),a=t.minFilter;return t.minFilter===Di&&(t.minFilter=En),new bc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},Qn=class extends Pi{constructor(){super(),this.isGroup=!0,this.type="Group"}},__={type:"move"},Kr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(__)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Qn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Mo=class extends Pi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tr,this.environmentIntensity=1,this.environmentRotation=new tr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var bh=new F,y_=new F,x_=new qe,Ln=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=bh.subVectors(n,t).cross(y_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(bh),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||x_.getNormalMatrix(e),r=this.coplanarPoint(bh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},qi=new er,oc=new F,So=class{constructor(e=new Ln,t=new Ln,n=new Ln,r=new Ln,s=new Ln,o=new Ln){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=On){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],h=r[6],d=r[7],p=r[8],g=r[9],_=r[10],m=r[11],f=r[12],T=r[13],S=r[14],x=r[15];if(n[0].setComponents(c-s,d-l,m-p,x-f).normalize(),n[1].setComponents(c+s,d+l,m+p,x+f).normalize(),n[2].setComponents(c+o,d+u,m+g,x+T).normalize(),n[3].setComponents(c-o,d-u,m-g,x-T).normalize(),n[4].setComponents(c-a,d-h,m-_,x-S).normalize(),t===On)n[5].setComponents(c+a,d+h,m+_,x+S).normalize();else if(t===fo)n[5].setComponents(a,h,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){return qi.center.set(0,0,0),qi.radius=.7071067811865476,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(oc.x=r.normal.x>0?e.max.x:e.min.x,oc.y=r.normal.y>0?e.max.y:e.min.y,oc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(oc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Qr=class extends Ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Wp=new bt,Lh=new mo,ac=new er,cc=new F,bo=class extends Pi{constructor(e=new rn,t=new Qr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ac.copy(n.boundingSphere),ac.applyMatrix4(r),ac.radius+=s,e.ray.intersectsSphere(ac)===!1)return;Wp.copy(r).invert(),Lh.copy(e.ray).applyMatrix4(Wp);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=d,_=p;g<_;g++){let m=l.getX(g);cc.fromBufferAttribute(h,m),Xp(cc,m,c,r,e,t,this)}}else{let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,_=p;g<_;g++)cc.fromBufferAttribute(h,g),Xp(cc,g,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Xp(i,e,t,n,r,s,o){let a=Lh.distanceSqToPoint(i);if(a<t){let c=new F;Lh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var wo=class extends ci{constructor(e,t,n=Ii,r,s,o,a=mn,c=mn,l,u=jr,h=1){if(u!==jr&&u!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var on=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);let u=n[r],d=n[r+1]-u,p=(o-u)/d;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new he:new F);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new F,r=[],s=[],o=[],a=new F,c=new bt;for(let p=0;p<=e;p++){let g=p/e;r[p]=this.getTangentAt(g,new F)}s[0]=new F,o[0]=new F;let l=Number.MAX_VALUE,u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Qe(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Qe(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},es=class extends on{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new he){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*u-p*h+this.aX,l=d*h+p*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ec=class extends es{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function id(){let i=0,e=0,t=0,n=0;function r(s,o,a,c){i=s,e=a,t=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let d=(o-s)/l-(a-s)/(l+u)+(a-o)/u,p=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,p*=u,r(o,a,d,p)},calc:function(s){let o=s*s,a=o*s;return i+e*s+t*o+n*a}}}var lc=new F,wh=new id,Eh=new id,Th=new id,Tc=class extends on{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new F){let n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(lc.subVectors(r[0],r[1]).add(r[0]),l=lc);let h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(lc.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=lc),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(h),p),_=Math.pow(h.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),wh.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,_,m),Eh.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,_,m),Th.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(wh.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Eh.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Th.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(wh.calc(c),Eh.calc(c),Th.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new F().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function $p(i,e,t,n,r){let s=(n-e)*.5,o=(r-t)*.5,a=i*i,c=i*a;return(2*t-2*n+s+o)*c+(-3*t+3*n-2*s-o)*a+s*i+t}function M_(i,e){let t=1-i;return t*t*e}function S_(i,e){return 2*(1-i)*i*e}function b_(i,e){return i*i*e}function co(i,e,t,n){return M_(i,e)+S_(i,t)+b_(i,n)}function w_(i,e){let t=1-i;return t*t*t*e}function E_(i,e){let t=1-i;return 3*t*t*i*e}function T_(i,e){return 3*(1-i)*i*i*e}function A_(i,e){return i*i*i*e}function lo(i,e,t,n,r){return w_(i,e)+E_(i,t)+T_(i,n)+A_(i,r)}var Eo=class extends on{constructor(e=new he,t=new he,n=new he,r=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new he){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(lo(e,r.x,s.x,o.x,a.x),lo(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ac=class extends on{constructor(e=new F,t=new F,n=new F,r=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new F){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(lo(e,r.x,s.x,o.x,a.x),lo(e,r.y,s.y,o.y,a.y),lo(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},To=class extends on{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Cc=class extends on{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ao=class extends on{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(co(e,r.x,s.x,o.x),co(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rc=class extends on{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(co(e,r.x,s.x,o.x),co(e,r.y,s.y,o.y),co(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Co=class extends on{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set($p(a,c.x,l.x,u.x,h.x),$p(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new he().fromArray(r))}return this}},Oh=Object.freeze({__proto__:null,ArcCurve:Ec,CatmullRomCurve3:Tc,CubicBezierCurve:Eo,CubicBezierCurve3:Ac,EllipseCurve:es,LineCurve:To,LineCurve3:Cc,QuadraticBezierCurve:Ao,QuadraticBezierCurve3:Rc,SplineCurve:Co}),Dc=class extends on{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Oh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new Oh[r.type]().fromJSON(r))}return this}},ts=class extends Dc{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new To(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new Ao(this.currentPoint.clone(),new he(e,t),new he(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){let a=new Eo(this.currentPoint.clone(),new he(e,t),new he(n,r),new he(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Co(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,r,s,o,a,c),this}absellipse(e,t,n,r,s,o,a,c){let l=new es(e,t,n,r,s,o,a,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Yi=class extends ts{constructor(e){super(e),this.uuid=cs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new ts().fromJSON(r))}return this}};function C_(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=Xm(i,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(n&&(s=L_(i,e,s,t)),i.length>80*t){a=1/0,c=1/0;let u=-1/0,h=-1/0;for(let d=t;d<r;d+=t){let p=i[d],g=i[d+1];p<a&&(a=p),g<c&&(c=g),p>u&&(u=p),g>h&&(h=g)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return Ro(s,o,t,a,c,l,0),o}function Xm(i,e,t,n,r){let s;if(r===W_(i,e,t,n)>0)for(let o=e;o<t;o+=n)s=qp(o/n|0,i[o],i[o+1],s);else for(let o=t-n;o>=e;o-=n)s=qp(o/n|0,i[o],i[o+1],s);return s&&ns(s,s.next)&&(Io(s),s=s.next),s}function nr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ns(t,t.next)||xt(t.prev,t,t.next)===0)){if(Io(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ro(i,e,t,n,r,s,o){if(!i)return;!o&&s&&B_(i,n,r,s);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(s?D_(i,n,r,s):R_(i)){e.push(c.i,i.i,l.i),Io(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=I_(nr(i),e),Ro(i,e,t,n,r,s,2)):o===2&&P_(i,e,t,n,r,s):Ro(nr(i),e,t,n,r,s,1);break}}}function R_(i){let e=i.prev,t=i,n=i.next;if(xt(e,t,n)>=0)return!1;let r=e.x,s=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=Math.min(r,s,o),h=Math.min(a,c,l),d=Math.max(r,s,o),p=Math.max(a,c,l),g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=p&&ao(r,a,s,c,o,l,g.x,g.y)&&xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function D_(i,e,t,n){let r=i.prev,s=i,o=i.next;if(xt(r,s,o)>=0)return!1;let a=r.x,c=s.x,l=o.x,u=r.y,h=s.y,d=o.y,p=Math.min(a,c,l),g=Math.min(u,h,d),_=Math.max(a,c,l),m=Math.max(u,h,d),f=Fh(p,g,e,t,n),T=Fh(_,m,e,t,n),S=i.prevZ,x=i.nextZ;for(;S&&S.z>=f&&x&&x.z<=T;){if(S.x>=p&&S.x<=_&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&ao(a,u,c,h,l,d,S.x,S.y)&&xt(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&ao(a,u,c,h,l,d,x.x,x.y)&&xt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=f;){if(S.x>=p&&S.x<=_&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&ao(a,u,c,h,l,d,S.x,S.y)&&xt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=T;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&ao(a,u,c,h,l,d,x.x,x.y)&&xt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function I_(i,e){let t=i;do{let n=t.prev,r=t.next.next;!ns(n,r)&&qm(n,t,t.next,r)&&Do(n,r)&&Do(r,n)&&(e.push(n.i,t.i,r.i),Io(t),Io(t.next),t=i=r),t=t.next}while(t!==i);return nr(t)}function P_(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&V_(o,a)){let c=jm(o,a);o=nr(o,o.next),c=nr(c,c.next),Ro(o,e,t,n,r,s,0),Ro(c,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function L_(i,e,t,n){let r=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*n,c=s<o-1?e[s+1]*n:i.length,l=Xm(i,a,c,n,!1);l===l.next&&(l.steiner=!0),r.push(z_(l))}r.sort(O_);for(let s=0;s<r.length;s++)t=F_(r[s],t);return t}function O_(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function F_(i,e){let t=N_(i,e);if(!t)return e;let n=jm(t,i);return nr(n,n.next),nr(t,t.next)}function N_(i,e){let t=e,n=i.x,r=i.y,s=-1/0,o;if(ns(i,t))return t;do{if(ns(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>s&&(s=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&$m(r<l?n:s,r,c,l,r<l?s:n,r,t.x,t.y)){let h=Math.abs(r-t.y)/(n-t.x);Do(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&U_(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function U_(i,e){return xt(i.prev,i,e.prev)<0&&xt(e.next,i,i.next)<0}function B_(i,e,t,n){let r=i;do r.z===0&&(r.z=Fh(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,k_(r)}function k_(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,t*=2}while(e>1);return i}function Fh(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function z_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function $m(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function ao(i,e,t,n,r,s,o,a){return!(i===o&&e===a)&&$m(i,e,t,n,r,s,o,a)}function V_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!H_(i,e)&&(Do(i,e)&&Do(e,i)&&G_(i,e)&&(xt(i.prev,i,e.prev)||xt(i,e.prev,e))||ns(i,e)&&xt(i.prev,i,i.next)>0&&xt(e.prev,e,e.next)>0)}function xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ns(i,e){return i.x===e.x&&i.y===e.y}function qm(i,e,t,n){let r=hc(xt(i,e,t)),s=hc(xt(i,e,n)),o=hc(xt(t,n,i)),a=hc(xt(t,n,e));return!!(r!==s&&o!==a||r===0&&uc(i,t,e)||s===0&&uc(i,n,e)||o===0&&uc(t,i,n)||a===0&&uc(t,e,n))}function uc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function hc(i){return i>0?1:i<0?-1:0}function H_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&qm(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Do(i,e){return xt(i.prev,i,i.next)<0?xt(i,e,i.next)>=0&&xt(i,i.prev,e)>=0:xt(i,e,i.prev)<0||xt(i,i.next,e)<0}function G_(i,e){let t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function jm(i,e){let t=Nh(i.i,i.x,i.y),n=Nh(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function qp(i,e,t,n){let r=Nh(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Io(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Nh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function W_(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var Uh=class{static triangulate(e,t,n=2){return C_(e,t,n)}},wi=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];jp(e),Yp(n,e);let o=e.length;t.forEach(jp);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,Yp(n,t[c]);let a=Uh.triangulate(n,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}};function jp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Yp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Po=class i extends rn{constructor(e=new Yi([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new Xt(r,3)),this.setAttribute("uv",new Xt(s,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:X_,S,x=!1,I,C,A,P;f&&(S=f.getSpacedPoints(u),x=!0,d=!1,I=f.computeFrenetFrames(u,!1),C=new F,A=new F,P=new F),d||(m=0,p=0,g=0,_=0);let w=a.extractPoints(l),M=w.shape,R=w.holes;if(!wi.isClockWise(M)){M=M.reverse();for(let b=0,se=R.length;b<se;b++){let Q=R[b];wi.isClockWise(Q)&&(R[b]=Q.reverse())}}function k(b){let Q=10000000000000001e-36,oe=b[0];for(let X=1;X<=b.length;X++){let ge=X%b.length,te=b[ge],ve=te.x-oe.x,Ge=te.y-oe.y,E=ve*ve+Ge*Ge,v=Math.max(Math.abs(te.x),Math.abs(te.y),Math.abs(oe.x),Math.abs(oe.y)),N=Q*v*v;if(E<=N){b.splice(ge,1),X--;continue}oe=te}}k(M),R.forEach(k);let Z=R.length,q=M;for(let b=0;b<Z;b++){let se=R[b];M=M.concat(se)}function W(b,se,Q){return se||console.error("THREE.ExtrudeGeometry: vec does not exist"),b.clone().addScaledVector(se,Q)}let Y=M.length;function z(b,se,Q){let oe,X,ge,te=b.x-se.x,ve=b.y-se.y,Ge=Q.x-b.x,E=Q.y-b.y,v=te*te+ve*ve,N=te*E-ve*Ge;if(Math.abs(N)>Number.EPSILON){let V=Math.sqrt(v),J=Math.sqrt(Ge*Ge+E*E),H=se.x-ve/V,Ee=se.y+te/V,ce=Q.x-E/J,Se=Q.y+Ge/J,Te=((ce-H)*E-(Se-Ee)*Ge)/(te*E-ve*Ge);oe=H+te*Te-b.x,X=Ee+ve*Te-b.y;let K=oe*oe+X*X;if(K<=2)return new he(oe,X);ge=Math.sqrt(K/2)}else{let V=!1;te>Number.EPSILON?Ge>Number.EPSILON&&(V=!0):te<-Number.EPSILON?Ge<-Number.EPSILON&&(V=!0):Math.sign(ve)===Math.sign(E)&&(V=!0),V?(oe=-ve,X=te,ge=Math.sqrt(v)):(oe=te,X=ve,ge=Math.sqrt(v/2))}return new he(oe/ge,X/ge)}let ae=[];for(let b=0,se=q.length,Q=se-1,oe=b+1;b<se;b++,Q++,oe++)Q===se&&(Q=0),oe===se&&(oe=0),ae[b]=z(q[b],q[Q],q[oe]);let me=[],Me,Xe=ae.concat();for(let b=0,se=Z;b<se;b++){let Q=R[b];Me=[];for(let oe=0,X=Q.length,ge=X-1,te=oe+1;oe<X;oe++,ge++,te++)ge===X&&(ge=0),te===X&&(te=0),Me[oe]=z(Q[oe],Q[ge],Q[te]);me.push(Me),Xe=Xe.concat(Me)}let et;if(m===0)et=wi.triangulateShape(q,R);else{let b=[],se=[];for(let Q=0;Q<m;Q++){let oe=Q/m,X=p*Math.cos(oe*Math.PI/2),ge=g*Math.sin(oe*Math.PI/2)+_;for(let te=0,ve=q.length;te<ve;te++){let Ge=W(q[te],ae[te],ge);je(Ge.x,Ge.y,-X),oe===0&&b.push(Ge)}for(let te=0,ve=Z;te<ve;te++){let Ge=R[te];Me=me[te];let E=[];for(let v=0,N=Ge.length;v<N;v++){let V=W(Ge[v],Me[v],ge);je(V.x,V.y,-X),oe===0&&E.push(V)}oe===0&&se.push(E)}}et=wi.triangulateShape(b,se)}let G=et.length,re=g+_;for(let b=0;b<Y;b++){let se=d?W(M[b],Xe[b],re):M[b];x?(A.copy(I.normals[0]).multiplyScalar(se.x),C.copy(I.binormals[0]).multiplyScalar(se.y),P.copy(S[0]).add(A).add(C),je(P.x,P.y,P.z)):je(se.x,se.y,0)}for(let b=1;b<=u;b++)for(let se=0;se<Y;se++){let Q=d?W(M[se],Xe[se],re):M[se];x?(A.copy(I.normals[b]).multiplyScalar(Q.x),C.copy(I.binormals[b]).multiplyScalar(Q.y),P.copy(S[b]).add(A).add(C),je(P.x,P.y,P.z)):je(Q.x,Q.y,h/u*b)}for(let b=m-1;b>=0;b--){let se=b/m,Q=p*Math.cos(se*Math.PI/2),oe=g*Math.sin(se*Math.PI/2)+_;for(let X=0,ge=q.length;X<ge;X++){let te=W(q[X],ae[X],oe);je(te.x,te.y,h+Q)}for(let X=0,ge=R.length;X<ge;X++){let te=R[X];Me=me[X];for(let ve=0,Ge=te.length;ve<Ge;ve++){let E=W(te[ve],Me[ve],oe);x?je(E.x,E.y+S[u-1].y,S[u-1].x+Q):je(E.x,E.y,h+Q)}}}Ae(),pe();function Ae(){let b=r.length/3;if(d){let se=0,Q=Y*se;for(let oe=0;oe<G;oe++){let X=et[oe];Oe(X[2]+Q,X[1]+Q,X[0]+Q)}se=u+m*2,Q=Y*se;for(let oe=0;oe<G;oe++){let X=et[oe];Oe(X[0]+Q,X[1]+Q,X[2]+Q)}}else{for(let se=0;se<G;se++){let Q=et[se];Oe(Q[2],Q[1],Q[0])}for(let se=0;se<G;se++){let Q=et[se];Oe(Q[0]+Y*u,Q[1]+Y*u,Q[2]+Y*u)}}n.addGroup(b,r.length/3-b,0)}function pe(){let b=r.length/3,se=0;Ce(q,se),se+=q.length;for(let Q=0,oe=R.length;Q<oe;Q++){let X=R[Q];Ce(X,se),se+=X.length}n.addGroup(b,r.length/3-b,1)}function Ce(b,se){let Q=b.length;for(;--Q>=0;){let oe=Q,X=Q-1;X<0&&(X=b.length-1);for(let ge=0,te=u+m*2;ge<te;ge++){let ve=Y*ge,Ge=Y*(ge+1),E=se+oe+ve,v=se+X+ve,N=se+X+Ge,V=se+oe+Ge;mt(E,v,N,V)}}}function je(b,se,Q){c.push(b),c.push(se),c.push(Q)}function Oe(b,se,Q){nt(b),nt(se),nt(Q);let oe=r.length/3,X=T.generateTopUV(n,r,oe-3,oe-2,oe-1);Ye(X[0]),Ye(X[1]),Ye(X[2])}function mt(b,se,Q,oe){nt(b),nt(se),nt(oe),nt(se),nt(Q),nt(oe);let X=r.length/3,ge=T.generateSideWallUV(n,r,X-6,X-3,X-2,X-1);Ye(ge[0]),Ye(ge[1]),Ye(ge[3]),Ye(ge[1]),Ye(ge[2]),Ye(ge[3])}function nt(b){r.push(c[b*3+0]),r.push(c[b*3+1]),r.push(c[b*3+2])}function Ye(b){s.push(b.x),s.push(b.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return $_(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];n.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Oh[r.type]().fromJSON(r)),new i(n,e.options)}},X_={generateTopUV:function(i,e,t,n,r){let s=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[r*3],u=e[r*3+1];return[new he(s,o),new he(a,c),new he(l,u)]},generateSideWallUV:function(i,e,t,n,r,s){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[r*3],p=e[r*3+1],g=e[r*3+2],_=e[s*3],m=e[s*3+1],f=e[s*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new he(o,1-c),new he(l,1-h),new he(d,1-g),new he(_,1-f)]:[new he(a,1-c),new he(u,1-h),new he(p,1-g),new he(m,1-f)]}};function $_(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ir=class i extends rn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,h=e/a,d=t/c,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){let T=f*d-o;for(let S=0;S<l;S++){let x=S*h-s;g.push(x,-T,0),_.push(0,0,1),m.push(S/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let T=0;T<a;T++){let S=T+l*f,x=T+l*(f+1),I=T+1+l*(f+1),C=T+1+l*f;p.push(S,x,C),p.push(x,I,C)}this.setIndex(p),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(_,3)),this.setAttribute("uv",new Xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var is=class i extends rn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new F,d=new F,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){let T=[],S=f/n,x=0;f===0&&o===0?x=.5/t:f===n&&c===Math.PI&&(x=-.5/t);for(let I=0;I<=t;I++){let C=I/t;h.x=-e*Math.cos(r+C*s)*Math.sin(o+S*a),h.y=e*Math.cos(o+S*a),h.z=e*Math.sin(r+C*s)*Math.sin(o+S*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(C+x,1-S),T.push(l++)}u.push(T)}for(let f=0;f<n;f++)for(let T=0;T<t;T++){let S=u[f][T+1],x=u[f][T],I=u[f+1][T],C=u[f+1][T+1];(f!==0||o>0)&&p.push(S,x,C),(f!==n-1||c<Math.PI)&&p.push(x,I,C)}this.setIndex(p),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(_,3)),this.setAttribute("uv",new Xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ic=class extends Ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Pc=class extends Ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function dc(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function q_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var rr=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Lc=class extends rr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ch,endingEnd:Ch}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Rh:s=e,a=2*t-n;break;case Dh:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Rh:o=e,c=2*n-t;break;case Dh:o=1,c=n+r[1]-r[0];break;default:o=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,T=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,S=(-1-p)*m+(1.5+p)*_+.5*g,x=p*m-p*_;for(let I=0;I!==a;++I)s[I]=f*o[u+I]+T*o[l+I]+S*o[c+I]+x*o[h+I];return s}},Oc=class extends rr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(r-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[l+d]*h+o[c+d]*u;return s}},Fc=class extends rr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},an=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=dc(t,this.TimeBufferType),this.values=dc(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:dc(e.times,Array),values:dc(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Lc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case uo:t=this.InterpolantFactoryMethodDiscrete;break;case _c:t=this.InterpolantFactoryMethodLinear;break;case fc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return uo;case this.InterpolantFactoryMethodLinear:return _c;case this.InterpolantFactoryMethodSmooth:return fc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&q_(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===fc,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let h=a*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){let _=t[h+g];if(_!==t[d+g]||_!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};an.prototype.ValueTypeName="";an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=_c;var Ci=class extends an{constructor(e,t,n){super(e,t,n)}};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=uo;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Nc=class extends an{constructor(e,t,n,r){super(e,t,n,r)}};Nc.prototype.ValueTypeName="color";var Uc=class extends an{constructor(e,t,n,r){super(e,t,n,r)}};Uc.prototype.ValueTypeName="number";var Bc=class extends rr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)ii.slerpFlat(s,0,o,l-a,o,l,c);return s}},Lo=class extends an{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Bc(this.times,this.values,this.getValueSize(),e)}};Lo.prototype.ValueTypeName="quaternion";Lo.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends an{constructor(e,t,n){super(e,t,n)}};Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=uo;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var kc=class extends an{constructor(e,t,n,r){super(e,t,n,r)}};kc.prototype.ValueTypeName="vector";var Oo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},zc=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},Ym=new zc,ls=(()=>{class i{constructor(t){this.manager=t!==void 0?t:Ym,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let r=this;return new Promise(function(s,o){r.load(t,s,n,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}return i.DEFAULT_MATERIAL_NAME="__DEFAULT",i})(),Kn={},Bh=class extends Error{constructor(e,t){super(e),this.response=t}},Fo=class extends ls{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Oo.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Kn[e]!==void 0){Kn[e].push({onLoad:t,onProgress:n,onError:r});return}Kn[e]=[],Kn[e].push({onLoad:t,onProgress:n,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=Kn[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0,_=0,m=new ReadableStream({start(f){T();function T(){h.read().then(({done:S,value:x})=>{if(S)f.close();else{_+=x.byteLength;let I=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let C=0,A=u.length;C<A;C++){let P=u[C];P.onProgress&&P.onProgress(I)}f.enqueue(x),T()}},S=>{f.error(S)})}}});return new Response(m)}else throw new Bh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{Oo.add(e,l);let u=Kn[e];delete Kn[e];for(let h=0,d=u.length;h<d;h++){let p=u[h];p.onLoad&&p.onLoad(l)}}).catch(l=>{let u=Kn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Kn[e];for(let h=0,d=u.length;h<d;h++){let p=u[h];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Vc=class extends ls{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Oo.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=Yr("img");function c(){u(),Oo.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}};var No=class extends ls{constructor(e){super(e)}load(e,t,n,r){let s=new ci,o=new Vc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}};var Hc=class extends yo{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Gc=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Uo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Zp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Zp(){return performance.now()}var rd="\\[\\]\\.:\\/",j_=new RegExp("["+rd+"]","g"),sd="[^"+rd+"]",Y_="[^"+rd.replace("\\.","")+"]",Z_=/((?:WC+[\/:])*)/.source.replace("WC",sd),J_=/(WCOD+)?/.source.replace("WCOD",Y_),K_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sd),Q_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sd),ey=new RegExp("^"+Z_+J_+K_+Q_+"$"),ty=["material","materials","bones","map"],kh=class{constructor(e,t,n){let r=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},St=(()=>{class i{constructor(t,n,r){this.path=n,this.parsedPath=r||i.parseTrackName(n),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new i.Composite(t,n,r):new i(t,n,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(j_,"")}static parseTrackName(t){let n=ey.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);ty.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(n);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===n||c.uuid===n)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[n++]=r[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,s=n.propertyName,o=n.propertyIndex;if(t||(t=i.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=n.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===u){u=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return i.Composite=kh,i})();St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yC=new Float32Array(1);var Bo=class{constructor(){this.type="ShapePath",this.color=new Ze,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new ts,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,s,o){return this.currentPath.bezierCurveTo(e,t,n,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(f){let T=[];for(let S=0,x=f.length;S<x;S++){let I=f[S],C=new Yi;C.curves=I.curves,T.push(C)}return T}function n(f,T){let S=T.length,x=!1;for(let I=S-1,C=0;C<S;I=C++){let A=T[I],P=T[C],w=P.x-A.x,M=P.y-A.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(A=T[C],w=-w,P=T[I],M=-M),f.y<A.y||f.y>P.y)continue;if(f.y===A.y){if(f.x===A.x)return!0}else{let R=M*(f.x-A.x)-w*(f.y-A.y);if(R===0)return!0;if(R<0)continue;x=!x}}else{if(f.y!==A.y)continue;if(P.x<=f.x&&f.x<=A.x||A.x<=f.x&&f.x<=P.x)return!0}}return x}let r=wi.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,c,l=[];if(s.length===1)return a=s[0],c=new Yi,c.curves=a.curves,l.push(c),l;let u=!r(s[0].getPoints());u=e?!u:u;let h=[],d=[],p=[],g=0,_;d[g]=void 0,p[g]=[];for(let f=0,T=s.length;f<T;f++)a=s[f],_=a.getPoints(),o=r(_),o=e?!o:o,o?(!u&&d[g]&&g++,d[g]={s:new Yi,p:_},d[g].s.curves=a.curves,u&&g++,p[g]=[]):p[g].push({h:a,p:_[0]});if(!d[0])return t(s);if(d.length>1){let f=!1,T=0;for(let S=0,x=d.length;S<x;S++)h[S]=[];for(let S=0,x=d.length;S<x;S++){let I=p[S];for(let C=0;C<I.length;C++){let A=I[C],P=!0;for(let w=0;w<d.length;w++)n(A.p,d[w].p)&&(S!==w&&T++,P?(P=!1,h[w].push(A)):f=!0);P&&h[S].push(A)}}T>0&&f===!1&&(p=h)}let m;for(let f=0,T=d.length;f<T;f++){c=d[f].s,l.push(c),m=p[f];for(let S=0,x=m.length;S<x;S++)c.holes.push(m[S].h)}return l}};function od(i,e,t,n){let r=ny(n);switch(t){case jh:return i*e;case Zh:return i*e/r.components*r.byteLength;case rl:return i*e/r.components*r.byteLength;case Jh:return i*e*2/r.components*r.byteLength;case sl:return i*e*2/r.components*r.byteLength;case Yh:return i*e*3/r.components*r.byteLength;case vn:return i*e*4/r.components*r.byteLength;case ol:return i*e*4/r.components*r.byteLength;case Vo:case Ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Go:case Wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cl:case ul:return Math.max(i,16)*Math.max(e,8)/4;case al:case ll:return Math.max(i,8)*Math.max(e,8)/2;case hl:case dl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ml:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case gl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case vl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case _l:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case yl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case xl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case bl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case wl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case El:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Tl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Al:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Xo:case Cl:case Rl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Kh:case Dl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Il:case Pl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ny(i){switch(i){case Un:case Xh:return{byteLength:1,components:1};case rs:case $h:case ss:return{byteLength:2,components:1};case nl:case il:return{byteLength:2,components:4};case Ii:case tl:case Bn:return{byteLength:4,components:1};case qh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wc);function yg(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function iy(i){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){let g=h[d],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){let _=h[p];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var ry=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,oy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ay=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ly=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,py=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,my=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_y=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,by=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ey=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ty=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ay=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ry=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Dy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Iy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Py=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ly=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Oy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ny=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Uy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,By=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ky=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$y=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Zy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Jy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ky=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ex=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ix=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ox=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ax=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ux=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,px=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_x=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ax=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ix=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Px=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Lx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ox=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ux=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$x=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Kx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,iM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_M=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,SM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,EM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,CM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,PM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,FM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:ry,alphahash_pars_fragment:sy,alphamap_fragment:oy,alphamap_pars_fragment:ay,alphatest_fragment:cy,alphatest_pars_fragment:ly,aomap_fragment:uy,aomap_pars_fragment:hy,batching_pars_vertex:dy,batching_vertex:fy,begin_vertex:py,beginnormal_vertex:my,bsdfs:gy,iridescence_fragment:vy,bumpmap_pars_fragment:_y,clipping_planes_fragment:yy,clipping_planes_pars_fragment:xy,clipping_planes_pars_vertex:My,clipping_planes_vertex:Sy,color_fragment:by,color_pars_fragment:wy,color_pars_vertex:Ey,color_vertex:Ty,common:Ay,cube_uv_reflection_fragment:Cy,defaultnormal_vertex:Ry,displacementmap_pars_vertex:Dy,displacementmap_vertex:Iy,emissivemap_fragment:Py,emissivemap_pars_fragment:Ly,colorspace_fragment:Oy,colorspace_pars_fragment:Fy,envmap_fragment:Ny,envmap_common_pars_fragment:Uy,envmap_pars_fragment:By,envmap_pars_vertex:ky,envmap_physical_pars_fragment:Zy,envmap_vertex:zy,fog_vertex:Vy,fog_pars_vertex:Hy,fog_fragment:Gy,fog_pars_fragment:Wy,gradientmap_pars_fragment:Xy,lightmap_pars_fragment:$y,lights_lambert_fragment:qy,lights_lambert_pars_fragment:jy,lights_pars_begin:Yy,lights_toon_fragment:Jy,lights_toon_pars_fragment:Ky,lights_phong_fragment:Qy,lights_phong_pars_fragment:ex,lights_physical_fragment:tx,lights_physical_pars_fragment:nx,lights_fragment_begin:ix,lights_fragment_maps:rx,lights_fragment_end:sx,logdepthbuf_fragment:ox,logdepthbuf_pars_fragment:ax,logdepthbuf_pars_vertex:cx,logdepthbuf_vertex:lx,map_fragment:ux,map_pars_fragment:hx,map_particle_fragment:dx,map_particle_pars_fragment:fx,metalnessmap_fragment:px,metalnessmap_pars_fragment:mx,morphinstance_vertex:gx,morphcolor_vertex:vx,morphnormal_vertex:_x,morphtarget_pars_vertex:yx,morphtarget_vertex:xx,normal_fragment_begin:Mx,normal_fragment_maps:Sx,normal_pars_fragment:bx,normal_pars_vertex:wx,normal_vertex:Ex,normalmap_pars_fragment:Tx,clearcoat_normal_fragment_begin:Ax,clearcoat_normal_fragment_maps:Cx,clearcoat_pars_fragment:Rx,iridescence_pars_fragment:Dx,opaque_fragment:Ix,packing:Px,premultiplied_alpha_fragment:Lx,project_vertex:Ox,dithering_fragment:Fx,dithering_pars_fragment:Nx,roughnessmap_fragment:Ux,roughnessmap_pars_fragment:Bx,shadowmap_pars_fragment:kx,shadowmap_pars_vertex:zx,shadowmap_vertex:Vx,shadowmask_pars_fragment:Hx,skinbase_vertex:Gx,skinning_pars_vertex:Wx,skinning_vertex:Xx,skinnormal_vertex:$x,specularmap_fragment:qx,specularmap_pars_fragment:jx,tonemapping_fragment:Yx,tonemapping_pars_fragment:Zx,transmission_fragment:Jx,transmission_pars_fragment:Kx,uv_pars_fragment:Qx,uv_pars_vertex:eM,uv_vertex:tM,worldpos_vertex:nM,background_vert:iM,background_frag:rM,backgroundCube_vert:sM,backgroundCube_frag:oM,cube_vert:aM,cube_frag:cM,depth_vert:lM,depth_frag:uM,distanceRGBA_vert:hM,distanceRGBA_frag:dM,equirect_vert:fM,equirect_frag:pM,linedashed_vert:mM,linedashed_frag:gM,meshbasic_vert:vM,meshbasic_frag:_M,meshlambert_vert:yM,meshlambert_frag:xM,meshmatcap_vert:MM,meshmatcap_frag:SM,meshnormal_vert:bM,meshnormal_frag:wM,meshphong_vert:EM,meshphong_frag:TM,meshphysical_vert:AM,meshphysical_frag:CM,meshtoon_vert:RM,meshtoon_frag:DM,points_vert:IM,points_frag:PM,shadow_vert:LM,shadow_frag:OM,sprite_vert:FM,sprite_frag:NM},ue={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},kn={basic:{uniforms:Gt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Gt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Gt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Gt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Gt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Gt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Gt([ue.points,ue.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Gt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Gt([ue.common,ue.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Gt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Gt([ue.sprite,ue.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Gt([ue.common,ue.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Gt([ue.lights,ue.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};kn.physical={uniforms:Gt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var Ll={r:0,b:0,g:0},lr=new tr,UM=new bt;function BM(i,e,t,n,r,s,o){let a=new Ze(0),c=s===!0?0:1,l,u,h=null,d=0,p=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?t:e).get(x)),x}function _(S){let x=!1,I=g(S);I===null?f(a,c):I&&I.isColor&&(f(I,1),x=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,x){let I=g(x);I&&(I.isCubeTexture||I.mapping===ko)?(u===void 0&&(u=new Ut(new Jr(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:cr(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),lr.copy(x.backgroundRotation),lr.x*=-1,lr.y*=-1,lr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(UM.makeRotationFromEuler(lr)),u.material.toneMapped=rt.getTransfer(I.colorSpace)!==ft,(h!==I||d!==I.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=I,d=I.version,p=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(l===void 0&&(l=new Ut(new ir(2,2),new sn({name:"BackgroundMaterial",uniforms:cr(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=I,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=rt.getTransfer(I.colorSpace)!==ft,I.matrixAutoUpdate===!0&&I.updateMatrix(),l.material.uniforms.uvTransform.value.copy(I.matrix),(h!==I||d!==I.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=I,d=I.version,p=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function f(S,x){S.getRGB(Ll,nd(i)),n.buffers.color.setClear(Ll.r,Ll.g,Ll.b,x,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),c=x,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,f(a,c)},render:_,addToRenderList:m,dispose:T}}function kM(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null),s=r,o=!1;function a(M,R,$,k,Z){let q=!1,W=h(k,$,R);s!==W&&(s=W,l(s.object)),q=p(M,k,$,Z),q&&g(M,k,$,Z),Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,x(M,R,$,k),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,R,$){let k=$.wireframe===!0,Z=n[M.id];Z===void 0&&(Z={},n[M.id]=Z);let q=Z[R.id];q===void 0&&(q={},Z[R.id]=q);let W=q[k];return W===void 0&&(W=d(c()),q[k]=W),W}function d(M){let R=[],$=[],k=[];for(let Z=0;Z<t;Z++)R[Z]=0,$[Z]=0,k[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:$,attributeDivisors:k,object:M,attributes:{},index:null}}function p(M,R,$,k){let Z=s.attributes,q=R.attributes,W=0,Y=$.getAttributes();for(let z in Y)if(Y[z].location>=0){let me=Z[z],Me=q[z];if(Me===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(Me=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(Me=M.instanceColor)),me===void 0||me.attribute!==Me||Me&&me.data!==Me.data)return!0;W++}return s.attributesNum!==W||s.index!==k}function g(M,R,$,k){let Z={},q=R.attributes,W=0,Y=$.getAttributes();for(let z in Y)if(Y[z].location>=0){let me=q[z];me===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(me=M.instanceColor));let Me={};Me.attribute=me,me&&me.data&&(Me.data=me.data),Z[z]=Me,W++}s.attributes=Z,s.attributesNum=W,s.index=k}function _(){let M=s.newAttributes;for(let R=0,$=M.length;R<$;R++)M[R]=0}function m(M){f(M,0)}function f(M,R){let $=s.newAttributes,k=s.enabledAttributes,Z=s.attributeDivisors;$[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),Z[M]!==R&&(i.vertexAttribDivisor(M,R),Z[M]=R)}function T(){let M=s.newAttributes,R=s.enabledAttributes;for(let $=0,k=R.length;$<k;$++)R[$]!==M[$]&&(i.disableVertexAttribArray($),R[$]=0)}function S(M,R,$,k,Z,q,W){W===!0?i.vertexAttribIPointer(M,R,$,Z,q):i.vertexAttribPointer(M,R,$,k,Z,q)}function x(M,R,$,k){_();let Z=k.attributes,q=$.getAttributes(),W=R.defaultAttributeValues;for(let Y in q){let z=q[Y];if(z.location>=0){let ae=Z[Y];if(ae===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor)),ae!==void 0){let me=ae.normalized,Me=ae.itemSize,Xe=e.get(ae);if(Xe===void 0)continue;let et=Xe.buffer,G=Xe.type,re=Xe.bytesPerElement,Ae=G===i.INT||G===i.UNSIGNED_INT||ae.gpuType===tl;if(ae.isInterleavedBufferAttribute){let pe=ae.data,Ce=pe.stride,je=ae.offset;if(pe.isInstancedInterleavedBuffer){for(let Oe=0;Oe<z.locationSize;Oe++)f(z.location+Oe,pe.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Oe=0;Oe<z.locationSize;Oe++)m(z.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,et);for(let Oe=0;Oe<z.locationSize;Oe++)S(z.location+Oe,Me/z.locationSize,G,me,Ce*re,(je+Me/z.locationSize*Oe)*re,Ae)}else{if(ae.isInstancedBufferAttribute){for(let pe=0;pe<z.locationSize;pe++)f(z.location+pe,ae.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let pe=0;pe<z.locationSize;pe++)m(z.location+pe);i.bindBuffer(i.ARRAY_BUFFER,et);for(let pe=0;pe<z.locationSize;pe++)S(z.location+pe,Me/z.locationSize,G,me,Me*re,Me/z.locationSize*pe*re,Ae)}}else if(W!==void 0){let me=W[Y];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(z.location,me);break;case 3:i.vertexAttrib3fv(z.location,me);break;case 4:i.vertexAttrib4fv(z.location,me);break;default:i.vertexAttrib1fv(z.location,me)}}}}T()}function I(){P();for(let M in n){let R=n[M];for(let $ in R){let k=R[$];for(let Z in k)u(k[Z].object),delete k[Z];delete R[$]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;let R=n[M.id];for(let $ in R){let k=R[$];for(let Z in k)u(k[Z].object),delete k[Z];delete R[$]}delete n[M.id]}function A(M){for(let R in n){let $=n[R];if($[M.id]===void 0)continue;let k=$[M.id];for(let Z in k)u(k[Z].object),delete k[Z];delete $[M.id]}}function P(){w(),o=!0,s!==r&&(s=r,l(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function zM(i,e,t){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function c(l,u,h,d){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function VM(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==vn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let P=A===ss&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Un&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Bn&&!P)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:I,maxSamples:C}}function HM(i){let e=this,t=null,n=0,r=!1,s=!1,o=new Ln,a=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let p=h.length!==0||d||n!==0||r;return r=d,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){let g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let T=s?0:n,S=T*4,x=f.clippingState||null;c.value=x,x=u(g,d,S,p);for(let I=0;I!==S;++I)x[I]=t[I];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let f=p+_*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,x=p;S!==_;++S,x+=4)o.copy(h[S]).applyMatrix4(T,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function GM(i){let e=new WeakMap;function t(o,a){return a===Kc?o.mapping=or:a===Qc&&(o.mapping=ar),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Kc||a===Qc)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new wc(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var hs=4,Zm=[.125,.215,.35,.446,.526,.582],dr=20,ad=new Hc,Jm=new Ze,cd=null,ld=0,ud=0,hd=!1,hr=(1+Math.sqrt(5))/2,us=1/hr,Km=[new F(-hr,us,0),new F(hr,us,0),new F(-us,0,hr),new F(us,0,hr),new F(0,hr,-us),new F(0,hr,us),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],WM=new F,Nl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:a=WM}=s;cd=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),ud=this._renderer.getActiveMipmapLevel(),hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cd,ld,ud),this._renderer.xr.enabled=hd,e.scissorTest=!1,Ol(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===or||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cd=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),ud=this._renderer.getActiveMipmapLevel(),hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:ss,format:vn,colorSpace:Ki,depthBuffer:!1},r=Qm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qm(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=XM(s)),this._blurMaterial=$M(s,e,t)}return r}_compileMaterial(e){let t=new Ut(this._lodPlanes[0],e);this._renderer.compile(t,ad)}_sceneToCubeUV(e,t,n,r,s){let c=new Vt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Jm),h.toneMapping=oi,h.autoClear=!1;let g=new ri({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),_=new Ut(new Jr,g),m=!1,f=e.background;f?f.isColor&&(g.color.copy(f),e.background=null,m=!0):(g.color.copy(Jm),m=!0);for(let T=0;T<6;T++){let S=T%3;S===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[T],s.y,s.z)):S===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[T]));let x=this._cubeSize;Ol(r,S*x,T>2?x:0,x,x),h.setRenderTarget(r),m&&h.render(_,c),h.render(e,c)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=p,h.autoClear=d,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===or||e.mapping===ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eg());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ut(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;Ol(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ad)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Km[(r-s-1)%Km.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Ut(this._lodPlanes[r],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*dr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):dr;m>dr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${dr}`);let f=[],T=0;for(let A=0;A<dr;++A){let P=A/_,w=Math.exp(-P*P/2);f.push(w),A===0?T+=w:A<m&&(T+=2*w)}for(let A=0;A<f.length;A++)f[A]=f[A]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;let x=this._sizeLods[r],I=3*x*(r>S-hs?r-S+hs:0),C=4*(this._cubeSize-x);Ol(t,I,C,3*x,2*x),c.setRenderTarget(t),c.render(h,ad)}};function XM(i){let e=[],t=[],n=[],r=i,s=i-hs+1+Zm.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>i-hs?c=Zm[o-i+hs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,f=1,T=new Float32Array(_*g*p),S=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let C=0;C<p;C++){let A=C%3*2/3-1,P=C>2?0:-1,w=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];T.set(w,_*g*C),S.set(d,m*g*C);let M=[C,C,C,C,C,C];x.set(M,f*g*C)}let I=new rn;I.setAttribute("position",new Ht(T,_)),I.setAttribute("uv",new Ht(S,m)),I.setAttribute("faceIndex",new Ht(x,f)),e.push(I),r>hs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Qm(i,e,t){let n=new Fn(i,e,t);return n.texture.mapping=ko,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ol(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function $M(i,e,t){let n=new Float32Array(dr),r=new F(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function eg(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function tg(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Md(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qM(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Kc||c===Qc,u=c===or||c===ar;if(l||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Nl(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return l&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Nl(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function jM(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Qi("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function YM(i,e,t,n){let r={},s=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];let p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let p in d)e.update(d[p],i.ARRAY_BUFFER)}function l(h){let d=[],p=h.index,g=h.attributes.position,_=0;if(p!==null){let T=p.array;_=p.version;for(let S=0,x=T.length;S<x;S+=3){let I=T[S+0],C=T[S+1],A=T[S+2];d.push(I,C,C,A,A,I)}}else if(g!==void 0){let T=g.array;_=g.version;for(let S=0,x=T.length/3-1;S<x;S+=3){let I=S+0,C=S+1,A=S+2;d.push(I,C,C,A,A,I)}}else return;let m=new(td(d)?_o:vo)(d,1);m.version=_;let f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){let d=s.get(h);if(d){let p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function ZM(i,e,t){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,p){i.drawElements(n,p,s,d*o),t.update(p,n,1)}function l(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,d*o,g),t.update(p,n,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function h(d,p,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,_,0,g);let f=0;for(let T=0;T<g;T++)f+=p[T]*_[T];t.update(f,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function JM(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function KM(i,e,t){let n=new WeakMap,r=new wt;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let M=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();let g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let I=a.attributes.position.count*x,C=1;I>e.maxTextureSize&&(C=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);let A=new Float32Array(I*C*4*h),P=new po(A,I,C,h);P.type=Bn,P.needsUpdate=!0;let w=x*4;for(let R=0;R<h;R++){let $=f[R],k=T[R],Z=S[R],q=I*C*4*R;for(let W=0;W<$.count;W++){let Y=W*w;g===!0&&(r.fromBufferAttribute($,W),A[q+Y+0]=r.x,A[q+Y+1]=r.y,A[q+Y+2]=r.z,A[q+Y+3]=0),_===!0&&(r.fromBufferAttribute(k,W),A[q+Y+4]=r.x,A[q+Y+5]=r.y,A[q+Y+6]=r.z,A[q+Y+7]=0),m===!0&&(r.fromBufferAttribute(Z,W),A[q+Y+8]=r.x,A[q+Y+9]=r.y,A[q+Y+10]=r.z,A[q+Y+11]=Z.itemSize===4?r.w:1)}}d={count:h,texture:P,size:new he(I,C)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];let _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function QM(i,e,t,n){let r=new WeakMap;function s(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var xg=new ci,ng=new wo(1,1),Mg=new po,Sg=new Sc,bg=new xo,ig=[],rg=[],sg=new Float32Array(16),og=new Float32Array(9),ag=new Float32Array(4);function fs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=ig[r];if(s===void 0&&(s=new Float32Array(r),ig[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function At(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Bl(i,e){let t=rg[e];t===void 0&&(t=new Int32Array(e),rg[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function eS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function tS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2fv(this.addr,e),Ct(t,e)}}function nS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;i.uniform3fv(this.addr,e),Ct(t,e)}}function iS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4fv(this.addr,e),Ct(t,e)}}function rS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;ag.set(n),i.uniformMatrix2fv(this.addr,!1,ag),Ct(t,n)}}function sS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;og.set(n),i.uniformMatrix3fv(this.addr,!1,og),Ct(t,n)}}function oS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;sg.set(n),i.uniformMatrix4fv(this.addr,!1,sg),Ct(t,n)}}function aS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function cS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2iv(this.addr,e),Ct(t,e)}}function lS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3iv(this.addr,e),Ct(t,e)}}function uS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4iv(this.addr,e),Ct(t,e)}}function hS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function dS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2uiv(this.addr,e),Ct(t,e)}}function fS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3uiv(this.addr,e),Ct(t,e)}}function pS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4uiv(this.addr,e),Ct(t,e)}}function mS(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ng.compareFunction=Qh,s=ng):s=xg,t.setTexture2D(e||s,r)}function gS(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Sg,r)}function vS(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||bg,r)}function _S(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Mg,r)}function yS(i){switch(i){case 5126:return eS;case 35664:return tS;case 35665:return nS;case 35666:return iS;case 35674:return rS;case 35675:return sS;case 35676:return oS;case 5124:case 35670:return aS;case 35667:case 35671:return cS;case 35668:case 35672:return lS;case 35669:case 35673:return uS;case 5125:return hS;case 36294:return dS;case 36295:return fS;case 36296:return pS;case 35678:case 36198:case 36298:case 36306:case 35682:return mS;case 35679:case 36299:case 36307:return gS;case 35680:case 36300:case 36308:case 36293:return vS;case 36289:case 36303:case 36311:case 36292:return _S}}function xS(i,e){i.uniform1fv(this.addr,e)}function MS(i,e){let t=fs(e,this.size,2);i.uniform2fv(this.addr,t)}function SS(i,e){let t=fs(e,this.size,3);i.uniform3fv(this.addr,t)}function bS(i,e){let t=fs(e,this.size,4);i.uniform4fv(this.addr,t)}function wS(i,e){let t=fs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ES(i,e){let t=fs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function TS(i,e){let t=fs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function AS(i,e){i.uniform1iv(this.addr,e)}function CS(i,e){i.uniform2iv(this.addr,e)}function RS(i,e){i.uniform3iv(this.addr,e)}function DS(i,e){i.uniform4iv(this.addr,e)}function IS(i,e){i.uniform1uiv(this.addr,e)}function PS(i,e){i.uniform2uiv(this.addr,e)}function LS(i,e){i.uniform3uiv(this.addr,e)}function OS(i,e){i.uniform4uiv(this.addr,e)}function FS(i,e,t){let n=this.cache,r=e.length,s=Bl(t,r);At(n,s)||(i.uniform1iv(this.addr,s),Ct(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||xg,s[o])}function NS(i,e,t){let n=this.cache,r=e.length,s=Bl(t,r);At(n,s)||(i.uniform1iv(this.addr,s),Ct(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Sg,s[o])}function US(i,e,t){let n=this.cache,r=e.length,s=Bl(t,r);At(n,s)||(i.uniform1iv(this.addr,s),Ct(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||bg,s[o])}function BS(i,e,t){let n=this.cache,r=e.length,s=Bl(t,r);At(n,s)||(i.uniform1iv(this.addr,s),Ct(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Mg,s[o])}function kS(i){switch(i){case 5126:return xS;case 35664:return MS;case 35665:return SS;case 35666:return bS;case 35674:return wS;case 35675:return ES;case 35676:return TS;case 5124:case 35670:return AS;case 35667:case 35671:return CS;case 35668:case 35672:return RS;case 35669:case 35673:return DS;case 5125:return IS;case 36294:return PS;case 36295:return LS;case 36296:return OS;case 35678:case 36198:case 36298:case 36306:case 35682:return FS;case 35679:case 36299:case 36307:return NS;case 35680:case 36300:case 36308:case 36293:return US;case 36289:case 36303:case 36311:case 36292:return BS}}var fd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=yS(t.type)}},pd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kS(t.type)}},md=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},dd=/(\w+)(\])?(\[|\.)?/g;function cg(i,e){i.seq.push(e),i.map[e.id]=e}function zS(i,e,t){let n=i.name,r=n.length;for(dd.lastIndex=0;;){let s=dd.exec(n),o=dd.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){cg(t,l===void 0?new fd(a,i,e):new pd(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new md(a),cg(t,h)),t=h}}}var ds=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);zS(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function lg(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var VS=37297,HS=0;function GS(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var ug=new qe;function WS(i){rt._getMatrix(ug,rt.workingColorSpace,i);let e=`mat3( ${ug.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(i)){case ho:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function hg(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+GS(i.getShaderSource(e),o)}else return r}function XS(i,e){let t=WS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function $S(i,e){let t;switch(e){case xm:t="Linear";break;case Mm:t="Reinhard";break;case Sm:t="Cineon";break;case bm:t="ACESFilmic";break;case Em:t="AgX";break;case Tm:t="Neutral";break;case wm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Fl=new F;function qS(){rt.getLuminanceCoefficients(Fl);let i=Fl.x.toFixed(4),e=Fl.y.toFixed(4),t=Fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function YS(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ZS(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function $o(i){return i!==""}function dg(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var JS=/^[ \t]*#include +<([\w\d./]+)>/gm;function gd(i){return i.replace(JS,QS)}var KS=new Map;function QS(i,e){let t=Je[e];if(t===void 0){let n=KS.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return gd(t)}var eb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pg(i){return i.replace(eb,tb)}function tb(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function mg(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nb(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Vh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Qp?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Nn&&(e="SHADOWMAP_TYPE_VSM"),e}function ib(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case or:case ar:e="ENVMAP_TYPE_CUBE";break;case ko:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rb(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ar:e="ENVMAP_MODE_REFRACTION";break}return e}function sb(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Wh:e="ENVMAP_BLENDING_MULTIPLY";break;case _m:e="ENVMAP_BLENDING_MIX";break;case ym:e="ENVMAP_BLENDING_ADD";break}return e}function ob(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ab(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=nb(t),l=ib(t),u=rb(t),h=sb(t),d=ob(t),p=jS(t),g=YS(s),_=r.createProgram(),m,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($o).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($o).join(`
`),f.length>0&&(f+=`
`)):(m=[mg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),f=[mg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?Je.tonemapping_pars_fragment:"",t.toneMapping!==oi?$S("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,XS("linearToOutputTexel",t.outputColorSpace),qS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($o).join(`
`)),o=gd(o),o=dg(o,t),o=fg(o,t),a=gd(a),a=dg(a,t),a=fg(a,t),o=pg(o),a=pg(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===ed?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ed?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let S=T+m+o,x=T+f+a,I=lg(r,r.VERTEX_SHADER,S),C=lg(r,r.FRAGMENT_SHADER,x);r.attachShader(_,I),r.attachShader(_,C),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(R){if(i.debug.checkShaderErrors){let $=r.getProgramInfoLog(_).trim(),k=r.getShaderInfoLog(I).trim(),Z=r.getShaderInfoLog(C).trim(),q=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,I,C);else{let Y=hg(r,I,"vertex"),z=hg(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+$+`
`+Y+`
`+z)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(k===""||Z==="")&&(W=!1);W&&(R.diagnostics={runnable:q,programLog:$,vertexShader:{log:k,prefix:m},fragmentShader:{log:Z,prefix:f}})}r.deleteShader(I),r.deleteShader(C),P=new ds(r,_),w=ZS(r,_)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,VS)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=HS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=C,this}var cb=0,vd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new _d(e),t.set(e,n)),n}},_d=class{constructor(e){this.id=cb++,this.code=e,this.usedTimes=0}};function lb(i,e,t,n,r,s,o){let a=new go,c=new vd,l=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures,p=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,M,R,$,k){let Z=$.fog,q=k.geometry,W=w.isMeshStandardMaterial?$.environment:null,Y=(w.isMeshStandardMaterial?t:e).get(w.envMap||W),z=Y&&Y.mapping===ko?Y.image.height:null,ae=g[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));let me=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Me=me!==void 0?me.length:0,Xe=0;q.morphAttributes.position!==void 0&&(Xe=1),q.morphAttributes.normal!==void 0&&(Xe=2),q.morphAttributes.color!==void 0&&(Xe=3);let et,G,re,Ae;if(ae){let lt=kn[ae];et=lt.vertexShader,G=lt.fragmentShader}else et=w.vertexShader,G=w.fragmentShader,c.update(w),re=c.getVertexShaderID(w),Ae=c.getFragmentShaderID(w);let pe=i.getRenderTarget(),Ce=i.state.buffers.depth.getReversed(),je=k.isInstancedMesh===!0,Oe=k.isBatchedMesh===!0,mt=!!w.map,nt=!!w.matcap,Ye=!!Y,b=!!w.aoMap,se=!!w.lightMap,Q=!!w.bumpMap,oe=!!w.normalMap,X=!!w.displacementMap,ge=!!w.emissiveMap,te=!!w.metalnessMap,ve=!!w.roughnessMap,Ge=w.anisotropy>0,E=w.clearcoat>0,v=w.dispersion>0,N=w.iridescence>0,V=w.sheen>0,J=w.transmission>0,H=Ge&&!!w.anisotropyMap,Ee=E&&!!w.clearcoatMap,ce=E&&!!w.clearcoatNormalMap,Se=E&&!!w.clearcoatRoughnessMap,Te=N&&!!w.iridescenceMap,K=N&&!!w.iridescenceThicknessMap,_e=V&&!!w.sheenColorMap,Ue=V&&!!w.sheenRoughnessMap,Ne=!!w.specularMap,le=!!w.specularColorMap,ze=!!w.specularIntensityMap,D=J&&!!w.transmissionMap,de=J&&!!w.thicknessMap,ee=!!w.gradientMap,xe=!!w.alphaMap,ne=w.alphaTest>0,j=!!w.alphaHash,be=!!w.extensions,We=oi;w.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(We=i.toneMapping);let gt={shaderID:ae,shaderType:w.type,shaderName:w.name,vertexShader:et,fragmentShader:G,defines:w.defines,customVertexShaderID:re,customFragmentShaderID:Ae,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&k._colorsTexture!==null,instancing:je,instancingColor:je&&k.instanceColor!==null,instancingMorph:je&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Ki,alphaToCoverage:!!w.alphaToCoverage,map:mt,matcap:nt,envMap:Ye,envMapMode:Ye&&Y.mapping,envMapCubeUVHeight:z,aoMap:b,lightMap:se,bumpMap:Q,normalMap:oe,displacementMap:d&&X,emissiveMap:ge,normalMapObjectSpace:oe&&w.normalMapType===Im,normalMapTangentSpace:oe&&w.normalMapType===Dm,metalnessMap:te,roughnessMap:ve,anisotropy:Ge,anisotropyMap:H,clearcoat:E,clearcoatMap:Ee,clearcoatNormalMap:ce,clearcoatRoughnessMap:Se,dispersion:v,iridescence:N,iridescenceMap:Te,iridescenceThicknessMap:K,sheen:V,sheenColorMap:_e,sheenRoughnessMap:Ue,specularMap:Ne,specularColorMap:le,specularIntensityMap:ze,transmission:J,transmissionMap:D,thicknessMap:de,gradientMap:ee,opaque:w.transparent===!1&&w.blending===Zi&&w.alphaToCoverage===!1,alphaMap:xe,alphaTest:ne,alphaHash:j,combine:w.combine,mapUv:mt&&_(w.map.channel),aoMapUv:b&&_(w.aoMap.channel),lightMapUv:se&&_(w.lightMap.channel),bumpMapUv:Q&&_(w.bumpMap.channel),normalMapUv:oe&&_(w.normalMap.channel),displacementMapUv:X&&_(w.displacementMap.channel),emissiveMapUv:ge&&_(w.emissiveMap.channel),metalnessMapUv:te&&_(w.metalnessMap.channel),roughnessMapUv:ve&&_(w.roughnessMap.channel),anisotropyMapUv:H&&_(w.anisotropyMap.channel),clearcoatMapUv:Ee&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:ce&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:K&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&_(w.sheenRoughnessMap.channel),specularMapUv:Ne&&_(w.specularMap.channel),specularColorMapUv:le&&_(w.specularColorMap.channel),specularIntensityMapUv:ze&&_(w.specularIntensityMap.channel),transmissionMapUv:D&&_(w.transmissionMap.channel),thicknessMapUv:de&&_(w.thicknessMap.channel),alphaMapUv:xe&&_(w.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(oe||Ge),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&(mt||xe),fog:!!Z,useFog:w.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ce,skinning:k.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Xe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:We,decodeVideoTexture:mt&&w.map.isVideoTexture===!0&&rt.getTransfer(w.map.colorSpace)===ft,decodeVideoTextureEmissive:ge&&w.emissiveMap.isVideoTexture===!0&&rt.getTransfer(w.emissiveMap.colorSpace)===ft,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===gn,flipSided:w.side===Bt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:be&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&w.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return gt.vertexUv1s=l.has(1),gt.vertexUv2s=l.has(2),gt.vertexUv3s=l.has(3),l.clear(),gt}function f(w){let M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(let R in w.defines)M.push(R),M.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(T(M,w),S(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function T(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function S(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){let M=g[w.type],R;if(M){let $=kn[M];R=Wm.clone($.uniforms)}else R=w.uniforms;return R}function I(w,M){let R;for(let $=0,k=u.length;$<k;$++){let Z=u[$];if(Z.cacheKey===M){R=Z,++R.usedTimes;break}}return R===void 0&&(R=new ab(i,M,w,s),u.push(R)),R}function C(w){if(--w.usedTimes===0){let M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function A(w){c.remove(w)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:I,releaseProgram:C,releaseShaderCache:A,programs:u,dispose:P}}function ub(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function hb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function gg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function vg(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,d,p,g,_,m){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=m),e++,f}function a(h,d,p,g,_,m){let f=o(h,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?r.push(f):t.push(f)}function c(h,d,p,g,_,m){let f=o(h,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||hb),n.length>1&&n.sort(d||gg),r.length>1&&r.sort(d||gg)}function u(){for(let h=e,d=i.length;h<d;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function db(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new vg,i.set(n,[o])):r>=s.length?(o=new vg,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function fb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ze};break;case"SpotLight":t={position:new F,direction:new F,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function pb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var mb=0;function gb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function vb(i){let e=new fb,t=pb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);let r=new F,s=new bt,o=new bt;function a(l){let u=0,h=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,T=0,S=0,x=0,I=0,C=0,A=0;l.sort(gb);for(let w=0,M=l.length;w<M;w++){let R=l[w],$=R.color,k=R.intensity,Z=R.distance,q=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=$.r*k,h+=$.g*k,d+=$.b*k;else if(R.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(R.sh.coefficients[W],k);A++}else if(R.isDirectionalLight){let W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Y=R.shadow,z=t.get(R);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,n.directionalShadow[p]=z,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=R.shadow.matrix,T++}n.directional[p]=W,p++}else if(R.isSpotLight){let W=e.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy($).multiplyScalar(k),W.distance=Z,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,n.spot[_]=W;let Y=R.shadow;if(R.map&&(n.spotLightMap[I]=R.map,I++,Y.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[_]=Y.matrix,R.castShadow){let z=t.get(R);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=q,x++}_++}else if(R.isRectAreaLight){let W=e.get(R);W.color.copy($).multiplyScalar(k),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=W,m++}else if(R.isPointLight){let W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){let Y=R.shadow,z=t.get(R);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,z.shadowCameraNear=Y.camera.near,z.shadowCameraFar=Y.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=R.shadow.matrix,S++}n.point[g]=W,g++}else if(R.isHemisphereLight){let W=e.get(R);W.skyColor.copy(R.color).multiplyScalar(k),W.groundColor.copy(R.groundColor).multiplyScalar(k),n.hemi[f]=W,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==T||P.numPointShadows!==S||P.numSpotShadows!==x||P.numSpotMaps!==I||P.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+I-C,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=T,P.numPointShadows=S,P.numSpotShadows=x,P.numSpotMaps=I,P.numLightProbes=A,n.version=mb++)}function c(l,u){let h=0,d=0,p=0,g=0,_=0,m=u.matrixWorldInverse;for(let f=0,T=l.length;f<T;f++){let S=l[f];if(S.isDirectionalLight){let x=n.directional[h];x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(S.isSpotLight){let x=n.spot[p];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(S.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function _g(i){let e=new vb(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function _b(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new _g(i),e.set(r,[a])):s>=o.length?(a=new _g(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var yb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Mb(i,e,t){let n=new So,r=new he,s=new he,o=new wt,a=new Ic({depthPacking:Rm}),c=new Pc,l={},u=t.maxTextureSize,h={[ti]:Bt,[Bt]:ti,[gn]:gn},d=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:yb,fragmentShader:xb}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new rn;g.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ut(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vh;let f=this.type;this.render=function(C,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let w=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),$=i.state;$.setBlending(si),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);let k=f!==Nn&&this.type===Nn,Z=f===Nn&&this.type!==Nn;for(let q=0,W=C.length;q<W;q++){let Y=C[q],z=Y.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);let ae=z.getFrameExtents();if(r.multiply(ae),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ae.x),r.x=s.x*ae.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ae.y),r.y=s.y*ae.y,z.mapSize.y=s.y)),z.map===null||k===!0||Z===!0){let Me=this.type!==Nn?{minFilter:mn,magFilter:mn}:{};z.map!==null&&z.map.dispose(),z.map=new Fn(r.x,r.y,Me),z.map.texture.name=Y.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();let me=z.getViewportCount();for(let Me=0;Me<me;Me++){let Xe=z.getViewport(Me);o.set(s.x*Xe.x,s.y*Xe.y,s.x*Xe.z,s.y*Xe.w),$.viewport(o),z.updateMatrices(Y,Me),n=z.getFrustum(),x(A,P,z.camera,Y,this.type)}z.isPointLightShadow!==!0&&this.type===Nn&&T(z,P),z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(w,M,R)};function T(C,A){let P=e.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Fn(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(A,null,P,d,_,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(A,null,P,p,_,null)}function S(C,A,P,w){let M=null,R=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)M=R;else if(M=P.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let $=M.uuid,k=A.uuid,Z=l[$];Z===void 0&&(Z={},l[$]=Z);let q=Z[k];q===void 0&&(q=M.clone(),Z[k]=q,A.addEventListener("dispose",I)),M=q}if(M.visible=A.visible,M.wireframe=A.wireframe,w===Nn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let $=i.properties.get(M);$.light=P}return M}function x(C,A,P,w,M){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Nn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);let k=e.update(C),Z=C.material;if(Array.isArray(Z)){let q=k.groups;for(let W=0,Y=q.length;W<Y;W++){let z=q[W],ae=Z[z.materialIndex];if(ae&&ae.visible){let me=S(C,ae,w,M);C.onBeforeShadow(i,C,A,P,k,me,z),i.renderBufferDirect(P,null,k,me,C,z),C.onAfterShadow(i,C,A,P,k,me,z)}}}else if(Z.visible){let q=S(C,Z,w,M);C.onBeforeShadow(i,C,A,P,k,q,null),i.renderBufferDirect(P,null,k,q,C,null),C.onAfterShadow(i,C,A,P,k,q,null)}}let $=C.children;for(let k=0,Z=$.length;k<Z;k++)x($[k],A,P,w,M)}function I(C){C.target.removeEventListener("dispose",I);for(let P in l){let w=l[P],M=C.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}var Sb={[Xc]:$c,[qc]:Zc,[jc]:Jc,[Ji]:Yc,[$c]:Xc,[Zc]:qc,[Jc]:jc,[Yc]:Ji};function bb(i,e){function t(){let D=!1,de=new wt,ee=null,xe=new wt(0,0,0,0);return{setMask:function(ne){ee!==ne&&!D&&(i.colorMask(ne,ne,ne,ne),ee=ne)},setLocked:function(ne){D=ne},setClear:function(ne,j,be,We,gt){gt===!0&&(ne*=We,j*=We,be*=We),de.set(ne,j,be,We),xe.equals(de)===!1&&(i.clearColor(ne,j,be,We),xe.copy(de))},reset:function(){D=!1,ee=null,xe.set(-1,0,0,0)}}}function n(){let D=!1,de=!1,ee=null,xe=null,ne=null;return{setReversed:function(j){if(de!==j){let be=e.get("EXT_clip_control");j?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),de=j;let We=ne;ne=null,this.setClear(We)}},getReversed:function(){return de},setTest:function(j){j?pe(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(j){ee!==j&&!D&&(i.depthMask(j),ee=j)},setFunc:function(j){if(de&&(j=Sb[j]),xe!==j){switch(j){case Xc:i.depthFunc(i.NEVER);break;case $c:i.depthFunc(i.ALWAYS);break;case qc:i.depthFunc(i.LESS);break;case Ji:i.depthFunc(i.LEQUAL);break;case jc:i.depthFunc(i.EQUAL);break;case Yc:i.depthFunc(i.GEQUAL);break;case Zc:i.depthFunc(i.GREATER);break;case Jc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=j}},setLocked:function(j){D=j},setClear:function(j){ne!==j&&(de&&(j=1-j),i.clearDepth(j),ne=j)},reset:function(){D=!1,ee=null,xe=null,ne=null,de=!1}}}function r(){let D=!1,de=null,ee=null,xe=null,ne=null,j=null,be=null,We=null,gt=null;return{setTest:function(lt){D||(lt?pe(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(lt){de!==lt&&!D&&(i.stencilMask(lt),de=lt)},setFunc:function(lt,_n,zn){(ee!==lt||xe!==_n||ne!==zn)&&(i.stencilFunc(lt,_n,zn),ee=lt,xe=_n,ne=zn)},setOp:function(lt,_n,zn){(j!==lt||be!==_n||We!==zn)&&(i.stencilOp(lt,_n,zn),j=lt,be=_n,We=zn)},setLocked:function(lt){D=lt},setClear:function(lt){gt!==lt&&(i.clearStencil(lt),gt=lt)},reset:function(){D=!1,de=null,ee=null,xe=null,ne=null,j=null,be=null,We=null,gt=null}}}let s=new t,o=new n,a=new r,c=new WeakMap,l=new WeakMap,u={},h={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,T=null,S=null,x=null,I=null,C=null,A=new Ze(0,0,0),P=0,w=!1,M=null,R=null,$=null,k=null,Z=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,Y=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(z)[1]),W=Y>=1):z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),W=Y>=2);let ae=null,me={},Me=i.getParameter(i.SCISSOR_BOX),Xe=i.getParameter(i.VIEWPORT),et=new wt().fromArray(Me),G=new wt().fromArray(Xe);function re(D,de,ee,xe){let ne=new Uint8Array(4),j=i.createTexture();i.bindTexture(D,j),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let be=0;be<ee;be++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,ne):i.texImage2D(de+be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ne);return j}let Ae={};Ae[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),Ae[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ae[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(i.DEPTH_TEST),o.setFunc(Ji),Q(!1),oe(zh),pe(i.CULL_FACE),b(si);function pe(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function Ce(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function je(D,de){return h[D]!==de?(i.bindFramebuffer(D,de),h[D]=de,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=de),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=de),!0):!1}function Oe(D,de){let ee=p,xe=!1;if(D){ee=d.get(de),ee===void 0&&(ee=[],d.set(de,ee));let ne=D.textures;if(ee.length!==ne.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let j=0,be=ne.length;j<be;j++)ee[j]=i.COLOR_ATTACHMENT0+j;ee.length=ne.length,xe=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,xe=!0);xe&&i.drawBuffers(ee)}function mt(D){return g!==D?(i.useProgram(D),g=D,!0):!1}let nt={[Ei]:i.FUNC_ADD,[tm]:i.FUNC_SUBTRACT,[nm]:i.FUNC_REVERSE_SUBTRACT};nt[im]=i.MIN,nt[rm]=i.MAX;let Ye={[sm]:i.ZERO,[om]:i.ONE,[am]:i.SRC_COLOR,[pc]:i.SRC_ALPHA,[fm]:i.SRC_ALPHA_SATURATE,[hm]:i.DST_COLOR,[lm]:i.DST_ALPHA,[cm]:i.ONE_MINUS_SRC_COLOR,[mc]:i.ONE_MINUS_SRC_ALPHA,[dm]:i.ONE_MINUS_DST_COLOR,[um]:i.ONE_MINUS_DST_ALPHA,[pm]:i.CONSTANT_COLOR,[mm]:i.ONE_MINUS_CONSTANT_COLOR,[gm]:i.CONSTANT_ALPHA,[vm]:i.ONE_MINUS_CONSTANT_ALPHA};function b(D,de,ee,xe,ne,j,be,We,gt,lt){if(D===si){_===!0&&(Ce(i.BLEND),_=!1);return}if(_===!1&&(pe(i.BLEND),_=!0),D!==em){if(D!==m||lt!==w){if((f!==Ei||x!==Ei)&&(i.blendEquation(i.FUNC_ADD),f=Ei,x=Ei),lt)switch(D){case Zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sr:i.blendFunc(i.ONE,i.ONE);break;case Hh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Hh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,S=null,I=null,C=null,A.set(0,0,0),P=0,m=D,w=lt}return}ne=ne||de,j=j||ee,be=be||xe,(de!==f||ne!==x)&&(i.blendEquationSeparate(nt[de],nt[ne]),f=de,x=ne),(ee!==T||xe!==S||j!==I||be!==C)&&(i.blendFuncSeparate(Ye[ee],Ye[xe],Ye[j],Ye[be]),T=ee,S=xe,I=j,C=be),(We.equals(A)===!1||gt!==P)&&(i.blendColor(We.r,We.g,We.b,gt),A.copy(We),P=gt),m=D,w=!1}function se(D,de){D.side===gn?Ce(i.CULL_FACE):pe(i.CULL_FACE);let ee=D.side===Bt;de&&(ee=!ee),Q(ee),D.blending===Zi&&D.transparent===!1?b(si):b(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);let xe=D.stencilWrite;a.setTest(xe),xe&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ge(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function Q(D){M!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),M=D)}function oe(D){D!==Jp?(pe(i.CULL_FACE),D!==R&&(D===zh?i.cullFace(i.BACK):D===Kp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),R=D}function X(D){D!==$&&(W&&i.lineWidth(D),$=D)}function ge(D,de,ee){D?(pe(i.POLYGON_OFFSET_FILL),(k!==de||Z!==ee)&&(i.polygonOffset(de,ee),k=de,Z=ee)):Ce(i.POLYGON_OFFSET_FILL)}function te(D){D?pe(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function ve(D){D===void 0&&(D=i.TEXTURE0+q-1),ae!==D&&(i.activeTexture(D),ae=D)}function Ge(D,de,ee){ee===void 0&&(ae===null?ee=i.TEXTURE0+q-1:ee=ae);let xe=me[ee];xe===void 0&&(xe={type:void 0,texture:void 0},me[ee]=xe),(xe.type!==D||xe.texture!==de)&&(ae!==ee&&(i.activeTexture(ee),ae=ee),i.bindTexture(D,de||Ae[D]),xe.type=D,xe.texture=de)}function E(){let D=me[ae];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function V(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(D){et.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),et.copy(D))}function Ue(D){G.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),G.copy(D))}function Ne(D,de){let ee=l.get(de);ee===void 0&&(ee=new WeakMap,l.set(de,ee));let xe=ee.get(D);xe===void 0&&(xe=i.getUniformBlockIndex(de,D.name),ee.set(D,xe))}function le(D,de){let xe=l.get(de).get(D);c.get(de)!==xe&&(i.uniformBlockBinding(de,xe,D.__bindingPointIndex),c.set(de,xe))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ae=null,me={},h={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,T=null,S=null,x=null,I=null,C=null,A=new Ze(0,0,0),P=0,w=!1,M=null,R=null,$=null,k=null,Z=null,et.set(0,0,i.canvas.width,i.canvas.height),G.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:pe,disable:Ce,bindFramebuffer:je,drawBuffers:Oe,useProgram:mt,setBlending:b,setMaterial:se,setFlipSided:Q,setCullFace:oe,setLineWidth:X,setPolygonOffset:ge,setScissorTest:te,activeTexture:ve,bindTexture:Ge,unbindTexture:E,compressedTexImage2D:v,compressedTexImage3D:N,texImage2D:Te,texImage3D:K,updateUBOMapping:Ne,uniformBlockBinding:le,texStorage2D:ce,texStorage3D:Se,texSubImage2D:V,texSubImage3D:J,compressedTexSubImage2D:H,compressedTexSubImage3D:Ee,scissor:_e,viewport:Ue,reset:ze}}function wb(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new he,u=new WeakMap,h,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return p?new OffscreenCanvas(E,v):Yr("canvas")}function _(E,v,N){let V=1,J=Ge(E);if((J.width>N||J.height>N)&&(V=N/Math.max(J.width,J.height)),V<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let H=Math.floor(V*J.width),Ee=Math.floor(V*J.height);h===void 0&&(h=g(H,Ee));let ce=v?g(H,Ee):h;return ce.width=H,ce.height=Ee,ce.getContext("2d").drawImage(E,0,0,H,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+H+"x"+Ee+")."),ce}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function m(E){return E.generateMipmaps}function f(E){i.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(E,v,N,V,J=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let H=v;if(v===i.RED&&(N===i.FLOAT&&(H=i.R32F),N===i.HALF_FLOAT&&(H=i.R16F),N===i.UNSIGNED_BYTE&&(H=i.R8)),v===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(H=i.R8UI),N===i.UNSIGNED_SHORT&&(H=i.R16UI),N===i.UNSIGNED_INT&&(H=i.R32UI),N===i.BYTE&&(H=i.R8I),N===i.SHORT&&(H=i.R16I),N===i.INT&&(H=i.R32I)),v===i.RG&&(N===i.FLOAT&&(H=i.RG32F),N===i.HALF_FLOAT&&(H=i.RG16F),N===i.UNSIGNED_BYTE&&(H=i.RG8)),v===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(H=i.RG8UI),N===i.UNSIGNED_SHORT&&(H=i.RG16UI),N===i.UNSIGNED_INT&&(H=i.RG32UI),N===i.BYTE&&(H=i.RG8I),N===i.SHORT&&(H=i.RG16I),N===i.INT&&(H=i.RG32I)),v===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(H=i.RGB8UI),N===i.UNSIGNED_SHORT&&(H=i.RGB16UI),N===i.UNSIGNED_INT&&(H=i.RGB32UI),N===i.BYTE&&(H=i.RGB8I),N===i.SHORT&&(H=i.RGB16I),N===i.INT&&(H=i.RGB32I)),v===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(H=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(H=i.RGBA16UI),N===i.UNSIGNED_INT&&(H=i.RGBA32UI),N===i.BYTE&&(H=i.RGBA8I),N===i.SHORT&&(H=i.RGBA16I),N===i.INT&&(H=i.RGBA32I)),v===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(H=i.RGB9_E5),v===i.RGBA){let Ee=J?ho:rt.getTransfer(V);N===i.FLOAT&&(H=i.RGBA32F),N===i.HALF_FLOAT&&(H=i.RGBA16F),N===i.UNSIGNED_BYTE&&(H=Ee===ft?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(H=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(H=i.RGB5_A1)}return(H===i.R16F||H===i.R32F||H===i.RG16F||H===i.RG32F||H===i.RGBA16F||H===i.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function x(E,v){let N;return E?v===null||v===Ii||v===os?N=i.DEPTH24_STENCIL8:v===Bn?N=i.DEPTH32F_STENCIL8:v===rs&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ii||v===os?N=i.DEPTH_COMPONENT24:v===Bn?N=i.DEPTH_COMPONENT32F:v===rs&&(N=i.DEPTH_COMPONENT16),N}function I(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==mn&&E.minFilter!==En?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function C(E){let v=E.target;v.removeEventListener("dispose",C),P(v),v.isVideoTexture&&u.delete(v)}function A(E){let v=E.target;v.removeEventListener("dispose",A),M(v)}function P(E){let v=n.get(E);if(v.__webglInit===void 0)return;let N=E.source,V=d.get(N);if(V){let J=V[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(E),Object.keys(V).length===0&&d.delete(N)}n.remove(E)}function w(E){let v=n.get(E);i.deleteTexture(v.__webglTexture);let N=E.source,V=d.get(N);delete V[v.__cacheKey],o.memory.textures--}function M(E){let v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(v.__webglFramebuffer[V]))for(let J=0;J<v.__webglFramebuffer[V].length;J++)i.deleteFramebuffer(v.__webglFramebuffer[V][J]);else i.deleteFramebuffer(v.__webglFramebuffer[V]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[V])}else{if(Array.isArray(v.__webglFramebuffer))for(let V=0;V<v.__webglFramebuffer.length;V++)i.deleteFramebuffer(v.__webglFramebuffer[V]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let V=0;V<v.__webglColorRenderbuffer.length;V++)v.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[V]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let N=E.textures;for(let V=0,J=N.length;V<J;V++){let H=n.get(N[V]);H.__webglTexture&&(i.deleteTexture(H.__webglTexture),o.memory.textures--),n.remove(N[V])}n.remove(E)}let R=0;function $(){R=0}function k(){let E=R;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),R+=1,E}function Z(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function q(E,v){let N=n.get(E);if(E.isVideoTexture&&te(E),E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){let V=E.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(N,E,v);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+v)}function W(E,v){let N=n.get(E);if(E.version>0&&N.__version!==E.version){Ae(N,E,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+v)}function Y(E,v){let N=n.get(E);if(E.version>0&&N.__version!==E.version){Ae(N,E,v);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+v)}function z(E,v){let N=n.get(E);if(E.version>0&&N.__version!==E.version){pe(N,E,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+v)}let ae={[gc]:i.REPEAT,[bi]:i.CLAMP_TO_EDGE,[vc]:i.MIRRORED_REPEAT},me={[mn]:i.NEAREST,[Am]:i.NEAREST_MIPMAP_NEAREST,[zo]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[el]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR},Me={[Pm]:i.NEVER,[Bm]:i.ALWAYS,[Lm]:i.LESS,[Qh]:i.LEQUAL,[Om]:i.EQUAL,[Um]:i.GEQUAL,[Fm]:i.GREATER,[Nm]:i.NOTEQUAL};function Xe(E,v){if(v.type===Bn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===En||v.magFilter===el||v.magFilter===zo||v.magFilter===Di||v.minFilter===En||v.minFilter===el||v.minFilter===zo||v.minFilter===Di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ae[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ae[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ae[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,me[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,me[v.minFilter]),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Me[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===mn||v.minFilter!==zo&&v.minFilter!==Di||v.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function et(E,v){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",C));let V=v.source,J=d.get(V);J===void 0&&(J={},d.set(V,J));let H=Z(v);if(H!==E.__cacheKey){J[H]===void 0&&(J[H]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),J[H].usedTimes++;let Ee=J[E.__cacheKey];Ee!==void 0&&(J[E.__cacheKey].usedTimes--,Ee.usedTimes===0&&w(v)),E.__cacheKey=H,E.__webglTexture=J[H].texture}return N}function G(E,v,N){return Math.floor(Math.floor(E/N)/v)}function re(E,v,N,V){let H=E.updateRanges;if(H.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,N,V,v.data);else{H.sort((K,_e)=>K.start-_e.start);let Ee=0;for(let K=1;K<H.length;K++){let _e=H[Ee],Ue=H[K],Ne=_e.start+_e.count,le=G(Ue.start,v.width,4),ze=G(_e.start,v.width,4);Ue.start<=Ne+1&&le===ze&&G(Ue.start+Ue.count-1,v.width,4)===le?_e.count=Math.max(_e.count,Ue.start+Ue.count-_e.start):(++Ee,H[Ee]=Ue)}H.length=Ee+1;let ce=i.getParameter(i.UNPACK_ROW_LENGTH),Se=i.getParameter(i.UNPACK_SKIP_PIXELS),Te=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let K=0,_e=H.length;K<_e;K++){let Ue=H[K],Ne=Math.floor(Ue.start/4),le=Math.ceil(Ue.count/4),ze=Ne%v.width,D=Math.floor(Ne/v.width),de=le,ee=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,ze,D,de,ee,N,V,v.data)}E.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ce),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Se),i.pixelStorei(i.UNPACK_SKIP_ROWS,Te)}}function Ae(E,v,N){let V=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(V=i.TEXTURE_3D);let J=et(E,v),H=v.source;t.bindTexture(V,E.__webglTexture,i.TEXTURE0+N);let Ee=n.get(H);if(H.version!==Ee.__version||J===!0){t.activeTexture(i.TEXTURE0+N);let ce=rt.getPrimaries(rt.workingColorSpace),Se=v.colorSpace===ai?null:rt.getPrimaries(v.colorSpace),Te=v.colorSpace===ai||ce===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let K=_(v.image,!1,r.maxTextureSize);K=ve(v,K);let _e=s.convert(v.format,v.colorSpace),Ue=s.convert(v.type),Ne=S(v.internalFormat,_e,Ue,v.colorSpace,v.isVideoTexture);Xe(V,v);let le,ze=v.mipmaps,D=v.isVideoTexture!==!0,de=Ee.__version===void 0||J===!0,ee=H.dataReady,xe=I(v,K);if(v.isDepthTexture)Ne=x(v.format===as,v.type),de&&(D?t.texStorage2D(i.TEXTURE_2D,1,Ne,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,Ne,K.width,K.height,0,_e,Ue,null));else if(v.isDataTexture)if(ze.length>0){D&&de&&t.texStorage2D(i.TEXTURE_2D,xe,Ne,ze[0].width,ze[0].height);for(let ne=0,j=ze.length;ne<j;ne++)le=ze[ne],D?ee&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,le.width,le.height,_e,Ue,le.data):t.texImage2D(i.TEXTURE_2D,ne,Ne,le.width,le.height,0,_e,Ue,le.data);v.generateMipmaps=!1}else D?(de&&t.texStorage2D(i.TEXTURE_2D,xe,Ne,K.width,K.height),ee&&re(v,K,_e,Ue)):t.texImage2D(i.TEXTURE_2D,0,Ne,K.width,K.height,0,_e,Ue,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){D&&de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Ne,ze[0].width,ze[0].height,K.depth);for(let ne=0,j=ze.length;ne<j;ne++)if(le=ze[ne],v.format!==vn)if(_e!==null)if(D){if(ee)if(v.layerUpdates.size>0){let be=od(le.width,le.height,v.format,v.type);for(let We of v.layerUpdates){let gt=le.data.subarray(We*be/le.data.BYTES_PER_ELEMENT,(We+1)*be/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,We,le.width,le.height,1,_e,gt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,le.width,le.height,K.depth,_e,le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Ne,le.width,le.height,K.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ee&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,le.width,le.height,K.depth,_e,Ue,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Ne,le.width,le.height,K.depth,0,_e,Ue,le.data)}else{D&&de&&t.texStorage2D(i.TEXTURE_2D,xe,Ne,ze[0].width,ze[0].height);for(let ne=0,j=ze.length;ne<j;ne++)le=ze[ne],v.format!==vn?_e!==null?D?ee&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,le.width,le.height,_e,le.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Ne,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ee&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,le.width,le.height,_e,Ue,le.data):t.texImage2D(i.TEXTURE_2D,ne,Ne,le.width,le.height,0,_e,Ue,le.data)}else if(v.isDataArrayTexture)if(D){if(de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Ne,K.width,K.height,K.depth),ee)if(v.layerUpdates.size>0){let ne=od(K.width,K.height,v.format,v.type);for(let j of v.layerUpdates){let be=K.data.subarray(j*ne/K.data.BYTES_PER_ELEMENT,(j+1)*ne/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,K.width,K.height,1,_e,Ue,be)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,_e,Ue,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ne,K.width,K.height,K.depth,0,_e,Ue,K.data);else if(v.isData3DTexture)D?(de&&t.texStorage3D(i.TEXTURE_3D,xe,Ne,K.width,K.height,K.depth),ee&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,_e,Ue,K.data)):t.texImage3D(i.TEXTURE_3D,0,Ne,K.width,K.height,K.depth,0,_e,Ue,K.data);else if(v.isFramebufferTexture){if(de)if(D)t.texStorage2D(i.TEXTURE_2D,xe,Ne,K.width,K.height);else{let ne=K.width,j=K.height;for(let be=0;be<xe;be++)t.texImage2D(i.TEXTURE_2D,be,Ne,ne,j,0,_e,Ue,null),ne>>=1,j>>=1}}else if(ze.length>0){if(D&&de){let ne=Ge(ze[0]);t.texStorage2D(i.TEXTURE_2D,xe,Ne,ne.width,ne.height)}for(let ne=0,j=ze.length;ne<j;ne++)le=ze[ne],D?ee&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,_e,Ue,le):t.texImage2D(i.TEXTURE_2D,ne,Ne,_e,Ue,le);v.generateMipmaps=!1}else if(D){if(de){let ne=Ge(K);t.texStorage2D(i.TEXTURE_2D,xe,Ne,ne.width,ne.height)}ee&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,Ue,K)}else t.texImage2D(i.TEXTURE_2D,0,Ne,_e,Ue,K);m(v)&&f(V),Ee.__version=H.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function pe(E,v,N){if(v.image.length!==6)return;let V=et(E,v),J=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+N);let H=n.get(J);if(J.version!==H.__version||V===!0){t.activeTexture(i.TEXTURE0+N);let Ee=rt.getPrimaries(rt.workingColorSpace),ce=v.colorSpace===ai?null:rt.getPrimaries(v.colorSpace),Se=v.colorSpace===ai||Ee===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let Te=v.isCompressedTexture||v.image[0].isCompressedTexture,K=v.image[0]&&v.image[0].isDataTexture,_e=[];for(let j=0;j<6;j++)!Te&&!K?_e[j]=_(v.image[j],!0,r.maxCubemapSize):_e[j]=K?v.image[j].image:v.image[j],_e[j]=ve(v,_e[j]);let Ue=_e[0],Ne=s.convert(v.format,v.colorSpace),le=s.convert(v.type),ze=S(v.internalFormat,Ne,le,v.colorSpace),D=v.isVideoTexture!==!0,de=H.__version===void 0||V===!0,ee=J.dataReady,xe=I(v,Ue);Xe(i.TEXTURE_CUBE_MAP,v);let ne;if(Te){D&&de&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,ze,Ue.width,Ue.height);for(let j=0;j<6;j++){ne=_e[j].mipmaps;for(let be=0;be<ne.length;be++){let We=ne[be];v.format!==vn?Ne!==null?D?ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,be,0,0,We.width,We.height,Ne,We.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,be,ze,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,be,0,0,We.width,We.height,Ne,le,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,be,ze,We.width,We.height,0,Ne,le,We.data)}}}else{if(ne=v.mipmaps,D&&de){ne.length>0&&xe++;let j=Ge(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,ze,j.width,j.height)}for(let j=0;j<6;j++)if(K){D?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,_e[j].width,_e[j].height,Ne,le,_e[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ze,_e[j].width,_e[j].height,0,Ne,le,_e[j].data);for(let be=0;be<ne.length;be++){let gt=ne[be].image[j].image;D?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,be+1,0,0,gt.width,gt.height,Ne,le,gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,be+1,ze,gt.width,gt.height,0,Ne,le,gt.data)}}else{D?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ne,le,_e[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ze,Ne,le,_e[j]);for(let be=0;be<ne.length;be++){let We=ne[be];D?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,be+1,0,0,Ne,le,We.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,be+1,ze,Ne,le,We.image[j])}}}m(v)&&f(i.TEXTURE_CUBE_MAP),H.__version=J.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Ce(E,v,N,V,J,H){let Ee=s.convert(N.format,N.colorSpace),ce=s.convert(N.type),Se=S(N.internalFormat,Ee,ce,N.colorSpace),Te=n.get(v),K=n.get(N);if(K.__renderTarget=v,!Te.__hasExternalTextures){let _e=Math.max(1,v.width>>H),Ue=Math.max(1,v.height>>H);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,H,Se,_e,Ue,v.depth,0,Ee,ce,null):t.texImage2D(J,H,Se,_e,Ue,0,Ee,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),ge(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,J,K.__webglTexture,0,X(v)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,J,K.__webglTexture,H),t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(E,v,N){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer){let V=v.depthTexture,J=V&&V.isDepthTexture?V.type:null,H=x(v.stencilBuffer,J),Ee=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=X(v);ge(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,H,v.width,v.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,H,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,H,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,E)}else{let V=v.textures;for(let J=0;J<V.length;J++){let H=V[J],Ee=s.convert(H.format,H.colorSpace),ce=s.convert(H.type),Se=S(H.internalFormat,Ee,ce,H.colorSpace),Te=X(v);N&&ge(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,Se,v.width,v.height):ge(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,Se,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Se,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Oe(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let V=n.get(v.depthTexture);V.__renderTarget=v,(!V.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q(v.depthTexture,0);let J=V.__webglTexture,H=X(v);if(v.depthTexture.format===jr)ge(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,H):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(v.depthTexture.format===as)ge(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,H):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function mt(E){let v=n.get(E),N=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){let V=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),V){let J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,V.removeEventListener("dispose",J)};V.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=V}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");let V=E.texture.mipmaps;V&&V.length>0?Oe(v.__webglFramebuffer[0],E):Oe(v.__webglFramebuffer,E)}else if(N){v.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[V]),v.__webglDepthbuffer[V]===void 0)v.__webglDepthbuffer[V]=i.createRenderbuffer(),je(v.__webglDepthbuffer[V],E,!1);else{let J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=v.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,H)}}else{let V=E.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),je(v.__webglDepthbuffer,E,!1);else{let J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,H)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(E,v,N){let V=n.get(E);v!==void 0&&Ce(V.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&mt(E)}function Ye(E){let v=E.texture,N=n.get(E),V=n.get(v);E.addEventListener("dispose",A);let J=E.textures,H=E.isWebGLCubeRenderTarget===!0,Ee=J.length>1;if(Ee||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=v.version,o.memory.textures++),H){N.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[ce]=[];for(let Se=0;Se<v.mipmaps.length;Se++)N.__webglFramebuffer[ce][Se]=i.createFramebuffer()}else N.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let ce=0;ce<v.mipmaps.length;ce++)N.__webglFramebuffer[ce]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let ce=0,Se=J.length;ce<Se;ce++){let Te=n.get(J[ce]);Te.__webglTexture===void 0&&(Te.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&ge(E)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ce=0;ce<J.length;ce++){let Se=J[ce];N.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ce]);let Te=s.convert(Se.format,Se.colorSpace),K=s.convert(Se.type),_e=S(Se.internalFormat,Te,K,Se.colorSpace,E.isXRRenderTarget===!0),Ue=X(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,_e,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,N.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),je(N.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(H){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,v);for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0)for(let Se=0;Se<v.mipmaps.length;Se++)Ce(N.__webglFramebuffer[ce][Se],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Se);else Ce(N.__webglFramebuffer[ce],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(v)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ce=0,Se=J.length;ce<Se;ce++){let Te=J[ce],K=n.get(Te);t.bindTexture(i.TEXTURE_2D,K.__webglTexture),Xe(i.TEXTURE_2D,Te),Ce(N.__webglFramebuffer,E,Te,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,0),m(Te)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ce=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,V.__webglTexture),Xe(ce,v),v.mipmaps&&v.mipmaps.length>0)for(let Se=0;Se<v.mipmaps.length;Se++)Ce(N.__webglFramebuffer[Se],E,v,i.COLOR_ATTACHMENT0,ce,Se);else Ce(N.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,ce,0);m(v)&&f(ce),t.unbindTexture()}E.depthBuffer&&mt(E)}function b(E){let v=E.textures;for(let N=0,V=v.length;N<V;N++){let J=v[N];if(m(J)){let H=T(E),Ee=n.get(J).__webglTexture;t.bindTexture(H,Ee),f(H),t.unbindTexture()}}}let se=[],Q=[];function oe(E){if(E.samples>0){if(ge(E)===!1){let v=E.textures,N=E.width,V=E.height,J=i.COLOR_BUFFER_BIT,H=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(E),ce=v.length>1;if(ce)for(let Te=0;Te<v.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);let Se=E.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Te=0;Te<v.length;Te++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Te]);let K=n.get(v[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,K,0)}i.blitFramebuffer(0,0,N,V,0,0,N,V,J,i.NEAREST),c===!0&&(se.length=0,Q.length=0,se.push(i.COLOR_ATTACHMENT0+Te),E.depthBuffer&&E.resolveDepthBuffer===!1&&(se.push(H),Q.push(H),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Q)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let Te=0;Te<v.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Te]);let K=n.get(v[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,K,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){let v=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function X(E){return Math.min(r.maxSamples,E.samples)}function ge(E){let v=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function te(E){let v=o.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function ve(E,v){let N=E.colorSpace,V=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||N!==Ki&&N!==ai&&(rt.getTransfer(N)===ft?(V!==vn||J!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}function Ge(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=$,this.setTexture2D=q,this.setTexture2DArray=W,this.setTexture3D=Y,this.setTextureCube=z,this.rebindTextures=nt,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=b,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=ge}function Eb(i,e){function t(n,r=ai){let s,o=rt.getTransfer(r);if(n===Un)return i.UNSIGNED_BYTE;if(n===nl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===il)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xh)return i.BYTE;if(n===$h)return i.SHORT;if(n===rs)return i.UNSIGNED_SHORT;if(n===tl)return i.INT;if(n===Ii)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===ss)return i.HALF_FLOAT;if(n===jh)return i.ALPHA;if(n===Yh)return i.RGB;if(n===vn)return i.RGBA;if(n===jr)return i.DEPTH_COMPONENT;if(n===as)return i.DEPTH_STENCIL;if(n===Zh)return i.RED;if(n===rl)return i.RED_INTEGER;if(n===Jh)return i.RG;if(n===sl)return i.RG_INTEGER;if(n===ol)return i.RGBA_INTEGER;if(n===Vo||n===Ho||n===Go||n===Wo)if(o===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Vo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Vo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ho)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Go)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===al||n===cl||n===ll||n===ul)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===al)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ll)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ul)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===hl||n===dl||n===fl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===hl||n===dl)return o===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===fl)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===pl||n===ml||n===gl||n===vl||n===_l||n===yl||n===xl||n===Ml||n===Sl||n===bl||n===wl||n===El||n===Tl||n===Al)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===pl)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ml)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gl)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vl)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_l)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yl)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xl)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ml)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sl)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bl)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wl)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===El)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tl)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Al)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xo||n===Cl||n===Rl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Xo)return o===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kh||n===Dl||n===Il||n===Pl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Xo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Dl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Il)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Tb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ab=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,yd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new ci,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new sn({vertexShader:Tb,fragmentShader:Ab,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new ir(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xd=class extends ni{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,g=null,_=new yd,m=t.getContextAttributes(),f=null,T=null,S=[],x=[],I=new he,C=null,A=new Vt;A.viewport=new wt;let P=new Vt;P.viewport=new wt;let w=[A,P],M=new Gc,R=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let re=S[G];return re===void 0&&(re=new Kr,S[G]=re),re.getTargetRaySpace()},this.getControllerGrip=function(G){let re=S[G];return re===void 0&&(re=new Kr,S[G]=re),re.getGripSpace()},this.getHand=function(G){let re=S[G];return re===void 0&&(re=new Kr,S[G]=re),re.getHandSpace()};function k(G){let re=x.indexOf(G.inputSource);if(re===-1)return;let Ae=S[re];Ae!==void 0&&(Ae.update(G.inputSource,G.frame,l||o),Ae.dispatchEvent({type:G.type,data:G.inputSource}))}function Z(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",q);for(let G=0;G<S.length;G++){let re=x[G];re!==null&&(x[G]=null,S[G].disconnect(re))}R=null,$=null,_.reset(),e.setRenderTarget(f),p=null,d=null,h=null,r=null,T=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(G){return mr(this,null,function*(){if(r=G,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&(yield t.makeXRCompatible()),C=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,pe=null,Ce=null;m.depth&&(Ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=m.stencil?as:jr,pe=m.stencil?os:Ii);let je={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(je),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new Fn(d.textureWidth,d.textureHeight,{format:vn,type:Un,depthTexture:new wo(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Ae),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new Fn(p.framebufferWidth,p.framebufferHeight,{format:vn,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),et.setContext(r),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(G){for(let re=0;re<G.removed.length;re++){let Ae=G.removed[re],pe=x.indexOf(Ae);pe>=0&&(x[pe]=null,S[pe].disconnect(Ae))}for(let re=0;re<G.added.length;re++){let Ae=G.added[re],pe=x.indexOf(Ae);if(pe===-1){for(let je=0;je<S.length;je++)if(je>=x.length){x.push(Ae),pe=je;break}else if(x[je]===null){x[je]=Ae,pe=je;break}if(pe===-1)break}let Ce=S[pe];Ce&&Ce.connect(Ae)}}let W=new F,Y=new F;function z(G,re,Ae){W.setFromMatrixPosition(re.matrixWorld),Y.setFromMatrixPosition(Ae.matrixWorld);let pe=W.distanceTo(Y),Ce=re.projectionMatrix.elements,je=Ae.projectionMatrix.elements,Oe=Ce[14]/(Ce[10]-1),mt=Ce[14]/(Ce[10]+1),nt=(Ce[9]+1)/Ce[5],Ye=(Ce[9]-1)/Ce[5],b=(Ce[8]-1)/Ce[0],se=(je[8]+1)/je[0],Q=Oe*b,oe=Oe*se,X=pe/(-b+se),ge=X*-b;if(re.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ge),G.translateZ(X),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Ce[10]===-1)G.projectionMatrix.copy(re.projectionMatrix),G.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let te=Oe+X,ve=mt+X,Ge=Q-ge,E=oe+(pe-ge),v=nt*mt/ve*te,N=Ye*mt/ve*te;G.projectionMatrix.makePerspective(Ge,E,v,N,te,ve),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function ae(G,re){re===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(re.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let re=G.near,Ae=G.far;_.texture!==null&&(_.depthNear>0&&(re=_.depthNear),_.depthFar>0&&(Ae=_.depthFar)),M.near=P.near=A.near=re,M.far=P.far=A.far=Ae,(R!==M.near||$!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,$=M.far),A.layers.mask=G.layers.mask|2,P.layers.mask=G.layers.mask|4,M.layers.mask=A.layers.mask|P.layers.mask;let pe=G.parent,Ce=M.cameras;ae(M,pe);for(let je=0;je<Ce.length;je++)ae(Ce[je],pe);Ce.length===2?z(M,A,P):M.projectionMatrix.copy(A.projectionMatrix),me(G,M,pe)};function me(G,re,Ae){Ae===null?G.matrix.copy(re.matrixWorld):(G.matrix.copy(Ae.matrixWorld),G.matrix.invert(),G.matrix.multiply(re.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(re.projectionMatrix),G.projectionMatrixInverse.copy(re.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=yc*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let Me=null;function Xe(G,re){if(u=re.getViewerPose(l||o),g=re,u!==null){let Ae=u.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let pe=!1;Ae.length!==M.cameras.length&&(M.cameras.length=0,pe=!0);for(let Oe=0;Oe<Ae.length;Oe++){let mt=Ae[Oe],nt=null;if(p!==null)nt=p.getViewport(mt);else{let b=h.getViewSubImage(d,mt);nt=b.viewport,Oe===0&&(e.setRenderTargetTextures(T,b.colorTexture,b.depthStencilTexture),e.setRenderTarget(T))}let Ye=w[Oe];Ye===void 0&&(Ye=new Vt,Ye.layers.enable(Oe),Ye.viewport=new wt,w[Oe]=Ye),Ye.matrix.fromArray(mt.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(mt.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(nt.x,nt.y,nt.width,nt.height),Oe===0&&(M.matrix.copy(Ye.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),pe===!0&&M.cameras.push(Ye)}let Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&h){let Oe=h.getDepthInformation(Ae[0]);Oe&&Oe.isValid&&Oe.texture&&_.init(e,Oe,r.renderState)}}for(let Ae=0;Ae<S.length;Ae++){let pe=x[Ae],Ce=S[Ae];pe!==null&&Ce!==void 0&&Ce.update(pe,re,l||o)}Me&&Me(G,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),g=null}let et=new yg;et.setAnimationLoop(Xe),this.setAnimationLoop=function(G){Me=G},this.dispose=function(){}}},ur=new tr,Cb=new bt;function Rb(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,nd(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,T,S,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,T,S):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Bt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Bt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let T=e.get(f),S=T.envMap,x=T.envMapRotation;S&&(m.envMap.value=S,ur.copy(x),ur.x*=-1,ur.y*=-1,ur.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),m.envMapRotation.value.setFromMatrix4(Cb.makeRotationFromEuler(ur)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,T,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=S*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Bt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let T=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Db(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,S){let x=S.program;n.uniformBlockBinding(T,x)}function l(T,S){let x=r[T.id];x===void 0&&(g(T),x=u(T),r[T.id]=x,T.addEventListener("dispose",m));let I=S.program;n.updateUBOMapping(T,I);let C=e.render.frame;s[T.id]!==C&&(d(T),s[T.id]=C)}function u(T){let S=h();T.__bindingPointIndex=S;let x=i.createBuffer(),I=T.__size,C=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,I,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,x),x}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){let S=r[T.id],x=T.uniforms,I=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let C=0,A=x.length;C<A;C++){let P=Array.isArray(x[C])?x[C]:[x[C]];for(let w=0,M=P.length;w<M;w++){let R=P[w];if(p(R,C,w,I)===!0){let $=R.__offset,k=Array.isArray(R.value)?R.value:[R.value],Z=0;for(let q=0;q<k.length;q++){let W=k[q],Y=_(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,$+Z,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,Z),Z+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,S,x,I){let C=T.value,A=S+"_"+x;if(I[A]===void 0)return typeof C=="number"||typeof C=="boolean"?I[A]=C:I[A]=C.clone(),!0;{let P=I[A];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return I[A]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function g(T){let S=T.uniforms,x=0,I=16;for(let A=0,P=S.length;A<P;A++){let w=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,R=w.length;M<R;M++){let $=w[M],k=Array.isArray($.value)?$.value:[$.value];for(let Z=0,q=k.length;Z<q;Z++){let W=k[Z],Y=_(W),z=x%I,ae=z%Y.boundary,me=z+ae;x+=ae,me!==0&&I-me<Y.storage&&(x+=I-me),$.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=x,x+=Y.storage}}}let C=x%I;return C>0&&(x+=I-C),T.__size=x,T.__cache={},this}function _(T){let S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function m(T){let S=T.target;S.removeEventListener("dispose",m);let x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function f(){for(let T in r)i.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}var Ul=class{constructor(e={}){let{canvas:t=km(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,f=null,T=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,I=!1;this._outputColorSpace=nn;let C=0,A=0,P=null,w=-1,M=null,R=new wt,$=new wt,k=null,Z=new Ze(0),q=0,W=t.width,Y=t.height,z=1,ae=null,me=null,Me=new wt(0,0,W,Y),Xe=new wt(0,0,W,Y),et=!1,G=new So,re=!1,Ae=!1,pe=new bt,Ce=new bt,je=new F,Oe=new wt,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nt=!1;function Ye(){return P===null?z:1}let b=n;function se(y,L){return t.getContext(y,L)}try{let y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wc}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",ne,!1),t.addEventListener("webglcontextcreationerror",j,!1),b===null){let L="webgl2";if(b=se(L,y),b===null)throw se(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Q,oe,X,ge,te,ve,Ge,E,v,N,V,J,H,Ee,ce,Se,Te,K,_e,Ue,Ne,le,ze,D;function de(){Q=new jM(b),Q.init(),le=new Eb(b,Q),oe=new VM(b,Q,e,le),X=new bb(b,Q),oe.reverseDepthBuffer&&d&&X.buffers.depth.setReversed(!0),ge=new JM(b),te=new ub,ve=new wb(b,Q,X,te,oe,le,ge),Ge=new GM(x),E=new qM(x),v=new iy(b),ze=new kM(b,v),N=new YM(b,v,ge,ze),V=new QM(b,N,v,ge),_e=new KM(b,oe,ve),Se=new HM(te),J=new lb(x,Ge,E,Q,oe,ze,Se),H=new Rb(x,te),Ee=new db,ce=new _b(Q),K=new BM(x,Ge,E,X,V,p,c),Te=new Mb(x,V,oe),D=new Db(b,ge,oe,X),Ue=new zM(b,Q,ge),Ne=new ZM(b,Q,ge),ge.programs=J.programs,x.capabilities=oe,x.extensions=Q,x.properties=te,x.renderLists=Ee,x.shadowMap=Te,x.state=X,x.info=ge}de();let ee=new xd(x,b);this.xr=ee,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){let y=Q.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Q.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(y){y!==void 0&&(z=y,this.setSize(W,Y,!1))},this.getSize=function(y){return y.set(W,Y)},this.setSize=function(y,L,U=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=y,Y=L,t.width=Math.floor(y*z),t.height=Math.floor(L*z),U===!0&&(t.style.width=y+"px",t.style.height=L+"px"),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(W*z,Y*z).floor()},this.setDrawingBufferSize=function(y,L,U){W=y,Y=L,z=U,t.width=Math.floor(y*U),t.height=Math.floor(L*U),this.setViewport(0,0,y,L)},this.getCurrentViewport=function(y){return y.copy(R)},this.getViewport=function(y){return y.copy(Me)},this.setViewport=function(y,L,U,B){y.isVector4?Me.set(y.x,y.y,y.z,y.w):Me.set(y,L,U,B),X.viewport(R.copy(Me).multiplyScalar(z).round())},this.getScissor=function(y){return y.copy(Xe)},this.setScissor=function(y,L,U,B){y.isVector4?Xe.set(y.x,y.y,y.z,y.w):Xe.set(y,L,U,B),X.scissor($.copy(Xe).multiplyScalar(z).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(y){X.setScissorTest(et=y)},this.setOpaqueSort=function(y){ae=y},this.setTransparentSort=function(y){me=y},this.getClearColor=function(y){return y.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor(...arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha(...arguments)},this.clear=function(y=!0,L=!0,U=!0){let B=0;if(y){let O=!1;if(P!==null){let ie=P.texture.format;O=ie===ol||ie===sl||ie===rl}if(O){let ie=P.texture.type,fe=ie===Un||ie===Ii||ie===rs||ie===os||ie===nl||ie===il,we=K.getClearColor(),ye=K.getClearAlpha(),Be=we.r,ke=we.g,Pe=we.b;fe?(g[0]=Be,g[1]=ke,g[2]=Pe,g[3]=ye,b.clearBufferuiv(b.COLOR,0,g)):(_[0]=Be,_[1]=ke,_[2]=Pe,_[3]=ye,b.clearBufferiv(b.COLOR,0,_))}else B|=b.COLOR_BUFFER_BIT}L&&(B|=b.DEPTH_BUFFER_BIT),U&&(B|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",ne,!1),t.removeEventListener("webglcontextcreationerror",j,!1),K.dispose(),Ee.dispose(),ce.dispose(),te.dispose(),Ge.dispose(),E.dispose(),V.dispose(),ze.dispose(),D.dispose(),J.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",wd),ee.removeEventListener("sessionend",Ed),Li.stop()};function xe(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ne(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let y=ge.autoReset,L=Te.enabled,U=Te.autoUpdate,B=Te.needsUpdate,O=Te.type;de(),ge.autoReset=y,Te.enabled=L,Te.autoUpdate=U,Te.needsUpdate=B,Te.type=O}function j(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function be(y){let L=y.target;L.removeEventListener("dispose",be),We(L)}function We(y){gt(y),te.remove(y)}function gt(y){let L=te.get(y).programs;L!==void 0&&(L.forEach(function(U){J.releaseProgram(U)}),y.isShaderMaterial&&J.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,U,B,O,ie){L===null&&(L=mt);let fe=O.isMesh&&O.matrixWorld.determinant()<0,we=Ag(y,L,U,B,O);X.setMaterial(B,fe);let ye=U.index,Be=1;if(B.wireframe===!0){if(ye=N.getWireframeAttribute(U),ye===void 0)return;Be=2}let ke=U.drawRange,Pe=U.attributes.position,tt=ke.start*Be,ut=(ke.start+ke.count)*Be;ie!==null&&(tt=Math.max(tt,ie.start*Be),ut=Math.min(ut,(ie.start+ie.count)*Be)),ye!==null?(tt=Math.max(tt,0),ut=Math.min(ut,ye.count)):Pe!=null&&(tt=Math.max(tt,0),ut=Math.min(ut,Pe.count));let _t=ut-tt;if(_t<0||_t===1/0)return;ze.setup(O,B,we,U,ye);let Mt,st=Ue;if(ye!==null&&(Mt=v.get(ye),st=Ne,st.setIndex(Mt)),O.isMesh)B.wireframe===!0?(X.setLineWidth(B.wireframeLinewidth*Ye()),st.setMode(b.LINES)):st.setMode(b.TRIANGLES);else if(O.isLine){let Fe=B.linewidth;Fe===void 0&&(Fe=1),X.setLineWidth(Fe*Ye()),O.isLineSegments?st.setMode(b.LINES):O.isLineLoop?st.setMode(b.LINE_LOOP):st.setMode(b.LINE_STRIP)}else O.isPoints?st.setMode(b.POINTS):O.isSprite&&st.setMode(b.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Qi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))st.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Fe=O._multiDrawStarts,Ft=O._multiDrawCounts,ct=O._multiDrawCount,yn=ye?v.get(ye).bytesPerElement:1,pr=te.get(B).currentProgram.getUniforms();for(let Jt=0;Jt<ct;Jt++)pr.setValue(b,"_gl_DrawID",Jt),st.render(Fe[Jt]/yn,Ft[Jt])}else if(O.isInstancedMesh)st.renderInstances(tt,_t,O.count);else if(U.isInstancedBufferGeometry){let Fe=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,Ft=Math.min(U.instanceCount,Fe);st.renderInstances(tt,_t,Ft)}else st.render(tt,_t)};function lt(y,L,U){y.transparent===!0&&y.side===gn&&y.forceSinglePass===!1?(y.side=Bt,y.needsUpdate=!0,Yo(y,L,U),y.side=ti,y.needsUpdate=!0,Yo(y,L,U),y.side=gn):Yo(y,L,U)}this.compile=function(y,L,U=null){U===null&&(U=y),f=ce.get(U),f.init(L),S.push(f),U.traverseVisible(function(O){O.isLight&&O.layers.test(L.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),y!==U&&y.traverseVisible(function(O){O.isLight&&O.layers.test(L.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();let B=new Set;return y.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let ie=O.material;if(ie)if(Array.isArray(ie))for(let fe=0;fe<ie.length;fe++){let we=ie[fe];lt(we,U,O),B.add(we)}else lt(ie,U,O),B.add(ie)}),f=S.pop(),B},this.compileAsync=function(y,L,U=null){let B=this.compile(y,L,U);return new Promise(O=>{function ie(){if(B.forEach(function(fe){te.get(fe).currentProgram.isReady()&&B.delete(fe)}),B.size===0){O(y);return}setTimeout(ie,10)}Q.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let _n=null;function zn(y){_n&&_n(y)}function wd(){Li.stop()}function Ed(){Li.start()}let Li=new yg;Li.setAnimationLoop(zn),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(y){_n=y,ee.setAnimationLoop(y),y===null?Li.stop():Li.start()},ee.addEventListener("sessionstart",wd),ee.addEventListener("sessionend",Ed),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(L),L=ee.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,L,P),f=ce.get(y,S.length),f.init(L),S.push(f),Ce.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),G.setFromProjectionMatrix(Ce),Ae=this.localClippingEnabled,re=Se.init(this.clippingPlanes,Ae),m=Ee.get(y,T.length),m.init(),T.push(m),ee.enabled===!0&&ee.isPresenting===!0){let ie=x.xr.getDepthSensingMesh();ie!==null&&jl(ie,L,-1/0,x.sortObjects)}jl(y,L,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ae,me),nt=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,nt&&K.addToRenderList(m,y),this.info.render.frame++,re===!0&&Se.beginShadows();let U=f.state.shadowsArray;Te.render(U,y,L),re===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=m.opaque,O=m.transmissive;if(f.setupLights(),L.isArrayCamera){let ie=L.cameras;if(O.length>0)for(let fe=0,we=ie.length;fe<we;fe++){let ye=ie[fe];Ad(B,O,y,ye)}nt&&K.render(y);for(let fe=0,we=ie.length;fe<we;fe++){let ye=ie[fe];Td(m,y,ye,ye.viewport)}}else O.length>0&&Ad(B,O,y,L),nt&&K.render(y),Td(m,y,L);P!==null&&A===0&&(ve.updateMultisampleRenderTarget(P),ve.updateRenderTargetMipmap(P)),y.isScene===!0&&y.onAfterRender(x,y,L),ze.resetDefaultState(),w=-1,M=null,S.pop(),S.length>0?(f=S[S.length-1],re===!0&&Se.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function jl(y,L,U,B){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)U=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||G.intersectsSprite(y)){B&&Oe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ce);let fe=V.update(y),we=y.material;we.visible&&m.push(y,fe,we,U,Oe.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||G.intersectsObject(y))){let fe=V.update(y),we=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Oe.copy(y.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Oe.copy(fe.boundingSphere.center)),Oe.applyMatrix4(y.matrixWorld).applyMatrix4(Ce)),Array.isArray(we)){let ye=fe.groups;for(let Be=0,ke=ye.length;Be<ke;Be++){let Pe=ye[Be],tt=we[Pe.materialIndex];tt&&tt.visible&&m.push(y,fe,tt,U,Oe.z,Pe)}}else we.visible&&m.push(y,fe,we,U,Oe.z,null)}}let ie=y.children;for(let fe=0,we=ie.length;fe<we;fe++)jl(ie[fe],L,U,B)}function Td(y,L,U,B){let O=y.opaque,ie=y.transmissive,fe=y.transparent;f.setupLightsView(U),re===!0&&Se.setGlobalState(x.clippingPlanes,U),B&&X.viewport(R.copy(B)),O.length>0&&jo(O,L,U),ie.length>0&&jo(ie,L,U),fe.length>0&&jo(fe,L,U),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function Ad(y,L,U,B){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[B.id]===void 0&&(f.state.transmissionRenderTarget[B.id]=new Fn(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?ss:Un,minFilter:Di,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));let ie=f.state.transmissionRenderTarget[B.id],fe=B.viewport||R;ie.setSize(fe.z*x.transmissionResolutionScale,fe.w*x.transmissionResolutionScale);let we=x.getRenderTarget();x.setRenderTarget(ie),x.getClearColor(Z),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),nt&&K.render(U);let ye=x.toneMapping;x.toneMapping=oi;let Be=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),f.setupLightsView(B),re===!0&&Se.setGlobalState(x.clippingPlanes,B),jo(y,U,B),ve.updateMultisampleRenderTarget(ie),ve.updateRenderTargetMipmap(ie),Q.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Pe=0,tt=L.length;Pe<tt;Pe++){let ut=L[Pe],_t=ut.object,Mt=ut.geometry,st=ut.material,Fe=ut.group;if(st.side===gn&&_t.layers.test(B.layers)){let Ft=st.side;st.side=Bt,st.needsUpdate=!0,Cd(_t,U,B,Mt,st,Fe),st.side=Ft,st.needsUpdate=!0,ke=!0}}ke===!0&&(ve.updateMultisampleRenderTarget(ie),ve.updateRenderTargetMipmap(ie))}x.setRenderTarget(we),x.setClearColor(Z,q),Be!==void 0&&(B.viewport=Be),x.toneMapping=ye}function jo(y,L,U){let B=L.isScene===!0?L.overrideMaterial:null;for(let O=0,ie=y.length;O<ie;O++){let fe=y[O],we=fe.object,ye=fe.geometry,Be=fe.group,ke=fe.material;ke.allowOverride===!0&&B!==null&&(ke=B),we.layers.test(U.layers)&&Cd(we,L,U,ye,ke,Be)}}function Cd(y,L,U,B,O,ie){y.onBeforeRender(x,L,U,B,O,ie),y.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),O.onBeforeRender(x,L,U,B,y,ie),O.transparent===!0&&O.side===gn&&O.forceSinglePass===!1?(O.side=Bt,O.needsUpdate=!0,x.renderBufferDirect(U,L,B,O,y,ie),O.side=ti,O.needsUpdate=!0,x.renderBufferDirect(U,L,B,O,y,ie),O.side=gn):x.renderBufferDirect(U,L,B,O,y,ie),y.onAfterRender(x,L,U,B,O,ie)}function Yo(y,L,U){L.isScene!==!0&&(L=mt);let B=te.get(y),O=f.state.lights,ie=f.state.shadowsArray,fe=O.state.version,we=J.getParameters(y,O.state,ie,L,U),ye=J.getProgramCacheKey(we),Be=B.programs;B.environment=y.isMeshStandardMaterial?L.environment:null,B.fog=L.fog,B.envMap=(y.isMeshStandardMaterial?E:Ge).get(y.envMap||B.environment),B.envMapRotation=B.environment!==null&&y.envMap===null?L.environmentRotation:y.envMapRotation,Be===void 0&&(y.addEventListener("dispose",be),Be=new Map,B.programs=Be);let ke=Be.get(ye);if(ke!==void 0){if(B.currentProgram===ke&&B.lightsStateVersion===fe)return Dd(y,we),ke}else we.uniforms=J.getUniforms(y),y.onBeforeCompile(we,x),ke=J.acquireProgram(we,ye),Be.set(ye,ke),B.uniforms=we.uniforms;let Pe=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Pe.clippingPlanes=Se.uniform),Dd(y,we),B.needsLights=Rg(y),B.lightsStateVersion=fe,B.needsLights&&(Pe.ambientLightColor.value=O.state.ambient,Pe.lightProbe.value=O.state.probe,Pe.directionalLights.value=O.state.directional,Pe.directionalLightShadows.value=O.state.directionalShadow,Pe.spotLights.value=O.state.spot,Pe.spotLightShadows.value=O.state.spotShadow,Pe.rectAreaLights.value=O.state.rectArea,Pe.ltc_1.value=O.state.rectAreaLTC1,Pe.ltc_2.value=O.state.rectAreaLTC2,Pe.pointLights.value=O.state.point,Pe.pointLightShadows.value=O.state.pointShadow,Pe.hemisphereLights.value=O.state.hemi,Pe.directionalShadowMap.value=O.state.directionalShadowMap,Pe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Pe.spotShadowMap.value=O.state.spotShadowMap,Pe.spotLightMatrix.value=O.state.spotLightMatrix,Pe.spotLightMap.value=O.state.spotLightMap,Pe.pointShadowMap.value=O.state.pointShadowMap,Pe.pointShadowMatrix.value=O.state.pointShadowMatrix),B.currentProgram=ke,B.uniformsList=null,ke}function Rd(y){if(y.uniformsList===null){let L=y.currentProgram.getUniforms();y.uniformsList=ds.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}function Dd(y,L){let U=te.get(y);U.outputColorSpace=L.outputColorSpace,U.batching=L.batching,U.batchingColor=L.batchingColor,U.instancing=L.instancing,U.instancingColor=L.instancingColor,U.instancingMorph=L.instancingMorph,U.skinning=L.skinning,U.morphTargets=L.morphTargets,U.morphNormals=L.morphNormals,U.morphColors=L.morphColors,U.morphTargetsCount=L.morphTargetsCount,U.numClippingPlanes=L.numClippingPlanes,U.numIntersection=L.numClipIntersection,U.vertexAlphas=L.vertexAlphas,U.vertexTangents=L.vertexTangents,U.toneMapping=L.toneMapping}function Ag(y,L,U,B,O){L.isScene!==!0&&(L=mt),ve.resetTextureUnits();let ie=L.fog,fe=B.isMeshStandardMaterial?L.environment:null,we=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ki,ye=(B.isMeshStandardMaterial?E:Ge).get(B.envMap||fe),Be=B.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,ke=!!U.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Pe=!!U.morphAttributes.position,tt=!!U.morphAttributes.normal,ut=!!U.morphAttributes.color,_t=oi;B.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(_t=x.toneMapping);let Mt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,st=Mt!==void 0?Mt.length:0,Fe=te.get(B),Ft=f.state.lights;if(re===!0&&(Ae===!0||y!==M)){let Wt=y===M&&B.id===w;Se.setState(B,y,Wt)}let ct=!1;B.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Ft.state.version||Fe.outputColorSpace!==we||O.isBatchedMesh&&Fe.batching===!1||!O.isBatchedMesh&&Fe.batching===!0||O.isBatchedMesh&&Fe.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Fe.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Fe.instancing===!1||!O.isInstancedMesh&&Fe.instancing===!0||O.isSkinnedMesh&&Fe.skinning===!1||!O.isSkinnedMesh&&Fe.skinning===!0||O.isInstancedMesh&&Fe.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Fe.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Fe.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Fe.instancingMorph===!1&&O.morphTexture!==null||Fe.envMap!==ye||B.fog===!0&&Fe.fog!==ie||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Se.numPlanes||Fe.numIntersection!==Se.numIntersection)||Fe.vertexAlphas!==Be||Fe.vertexTangents!==ke||Fe.morphTargets!==Pe||Fe.morphNormals!==tt||Fe.morphColors!==ut||Fe.toneMapping!==_t||Fe.morphTargetsCount!==st)&&(ct=!0):(ct=!0,Fe.__version=B.version);let yn=Fe.currentProgram;ct===!0&&(yn=Yo(B,L,O));let pr=!1,Jt=!1,ms=!1,vt=yn.getUniforms(),cn=Fe.uniforms;if(X.useProgram(yn.program)&&(pr=!0,Jt=!0,ms=!0),B.id!==w&&(w=B.id,Jt=!0),pr||M!==y){X.buffers.depth.getReversed()?(pe.copy(y.projectionMatrix),Vm(pe),Hm(pe),vt.setValue(b,"projectionMatrix",pe)):vt.setValue(b,"projectionMatrix",y.projectionMatrix),vt.setValue(b,"viewMatrix",y.matrixWorldInverse);let $t=vt.map.cameraPosition;$t!==void 0&&$t.setValue(b,je.setFromMatrixPosition(y.matrixWorld)),oe.logarithmicDepthBuffer&&vt.setValue(b,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&vt.setValue(b,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,Jt=!0,ms=!0)}if(O.isSkinnedMesh){vt.setOptional(b,O,"bindMatrix"),vt.setOptional(b,O,"bindMatrixInverse");let Wt=O.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),vt.setValue(b,"boneTexture",Wt.boneTexture,ve))}O.isBatchedMesh&&(vt.setOptional(b,O,"batchingTexture"),vt.setValue(b,"batchingTexture",O._matricesTexture,ve),vt.setOptional(b,O,"batchingIdTexture"),vt.setValue(b,"batchingIdTexture",O._indirectTexture,ve),vt.setOptional(b,O,"batchingColorTexture"),O._colorsTexture!==null&&vt.setValue(b,"batchingColorTexture",O._colorsTexture,ve));let ln=U.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&_e.update(O,U,yn),(Jt||Fe.receiveShadow!==O.receiveShadow)&&(Fe.receiveShadow=O.receiveShadow,vt.setValue(b,"receiveShadow",O.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(cn.envMap.value=ye,cn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&L.environment!==null&&(cn.envMapIntensity.value=L.environmentIntensity),Jt&&(vt.setValue(b,"toneMappingExposure",x.toneMappingExposure),Fe.needsLights&&Cg(cn,ms),ie&&B.fog===!0&&H.refreshFogUniforms(cn,ie),H.refreshMaterialUniforms(cn,B,z,Y,f.state.transmissionRenderTarget[y.id]),ds.upload(b,Rd(Fe),cn,ve)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ds.upload(b,Rd(Fe),cn,ve),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&vt.setValue(b,"center",O.center),vt.setValue(b,"modelViewMatrix",O.modelViewMatrix),vt.setValue(b,"normalMatrix",O.normalMatrix),vt.setValue(b,"modelMatrix",O.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let Wt=B.uniformsGroups;for(let $t=0,Yl=Wt.length;$t<Yl;$t++){let Oi=Wt[$t];D.update(Oi,yn),D.bind(Oi,yn)}}return yn}function Cg(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function Rg(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(y,L,U){let B=te.get(y);B.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),te.get(y.texture).__webglTexture=L,te.get(y.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:U,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,L){let U=te.get(y);U.__webglFramebuffer=L,U.__useDefaultFramebuffer=L===void 0};let Dg=b.createFramebuffer();this.setRenderTarget=function(y,L=0,U=0){P=y,C=L,A=U;let B=!0,O=null,ie=!1,fe=!1;if(y){let ye=te.get(y);if(ye.__useDefaultFramebuffer!==void 0)X.bindFramebuffer(b.FRAMEBUFFER,null),B=!1;else if(ye.__webglFramebuffer===void 0)ve.setupRenderTarget(y);else if(ye.__hasExternalTextures)ve.rebindTextures(y,te.get(y.texture).__webglTexture,te.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Pe=y.depthTexture;if(ye.__boundDepthTexture!==Pe){if(Pe!==null&&te.has(Pe)&&(y.width!==Pe.image.width||y.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ve.setupDepthRenderbuffer(y)}}let Be=y.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(fe=!0);let ke=te.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(ke[L])?O=ke[L][U]:O=ke[L],ie=!0):y.samples>0&&ve.useMultisampledRTT(y)===!1?O=te.get(y).__webglMultisampledFramebuffer:Array.isArray(ke)?O=ke[U]:O=ke,R.copy(y.viewport),$.copy(y.scissor),k=y.scissorTest}else R.copy(Me).multiplyScalar(z).floor(),$.copy(Xe).multiplyScalar(z).floor(),k=et;if(U!==0&&(O=Dg),X.bindFramebuffer(b.FRAMEBUFFER,O)&&B&&X.drawBuffers(y,O),X.viewport(R),X.scissor($),X.setScissorTest(k),ie){let ye=te.get(y.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+L,ye.__webglTexture,U)}else if(fe){let ye=te.get(y.texture),Be=L;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,ye.__webglTexture,U,Be)}else if(y!==null&&U!==0){let ye=te.get(y.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,ye.__webglTexture,U)}w=-1},this.readRenderTargetPixels=function(y,L,U,B,O,ie,fe,we=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=te.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&fe!==void 0&&(ye=ye[fe]),ye){X.bindFramebuffer(b.FRAMEBUFFER,ye);try{let Be=y.textures[we],ke=Be.format,Pe=Be.type;if(!oe.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-B&&U>=0&&U<=y.height-O&&(y.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+we),b.readPixels(L,U,B,O,le.convert(ke),le.convert(Pe),ie))}finally{let Be=P!==null?te.get(P).__webglFramebuffer:null;X.bindFramebuffer(b.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=function(y,L,U,B,O,ie,fe,we=0){return mr(this,null,function*(){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=te.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&fe!==void 0&&(ye=ye[fe]),ye)if(L>=0&&L<=y.width-B&&U>=0&&U<=y.height-O){X.bindFramebuffer(b.FRAMEBUFFER,ye);let Be=y.textures[we],ke=Be.format,Pe=Be.type;if(!oe.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let tt=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,tt),b.bufferData(b.PIXEL_PACK_BUFFER,ie.byteLength,b.STREAM_READ),y.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+we),b.readPixels(L,U,B,O,le.convert(ke),le.convert(Pe),0);let ut=P!==null?te.get(P).__webglFramebuffer:null;X.bindFramebuffer(b.FRAMEBUFFER,ut);let _t=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),yield zm(b,_t,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,tt),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,ie),b.deleteBuffer(tt),b.deleteSync(_t),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(y,L=null,U=0){let B=Math.pow(2,-U),O=Math.floor(y.image.width*B),ie=Math.floor(y.image.height*B),fe=L!==null?L.x:0,we=L!==null?L.y:0;ve.setTexture2D(y,0),b.copyTexSubImage2D(b.TEXTURE_2D,U,0,0,fe,we,O,ie),X.unbindTexture()};let Ig=b.createFramebuffer(),Pg=b.createFramebuffer();this.copyTextureToTexture=function(y,L,U=null,B=null,O=0,ie=null){ie===null&&(O!==0?(Qi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=O,O=0):ie=0);let fe,we,ye,Be,ke,Pe,tt,ut,_t,Mt=y.isCompressedTexture?y.mipmaps[ie]:y.image;if(U!==null)fe=U.max.x-U.min.x,we=U.max.y-U.min.y,ye=U.isBox3?U.max.z-U.min.z:1,Be=U.min.x,ke=U.min.y,Pe=U.isBox3?U.min.z:0;else{let ln=Math.pow(2,-O);fe=Math.floor(Mt.width*ln),we=Math.floor(Mt.height*ln),y.isDataArrayTexture?ye=Mt.depth:y.isData3DTexture?ye=Math.floor(Mt.depth*ln):ye=1,Be=0,ke=0,Pe=0}B!==null?(tt=B.x,ut=B.y,_t=B.z):(tt=0,ut=0,_t=0);let st=le.convert(L.format),Fe=le.convert(L.type),Ft;L.isData3DTexture?(ve.setTexture3D(L,0),Ft=b.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(ve.setTexture2DArray(L,0),Ft=b.TEXTURE_2D_ARRAY):(ve.setTexture2D(L,0),Ft=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,L.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,L.unpackAlignment);let ct=b.getParameter(b.UNPACK_ROW_LENGTH),yn=b.getParameter(b.UNPACK_IMAGE_HEIGHT),pr=b.getParameter(b.UNPACK_SKIP_PIXELS),Jt=b.getParameter(b.UNPACK_SKIP_ROWS),ms=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,Mt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Mt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Be),b.pixelStorei(b.UNPACK_SKIP_ROWS,ke),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Pe);let vt=y.isDataArrayTexture||y.isData3DTexture,cn=L.isDataArrayTexture||L.isData3DTexture;if(y.isDepthTexture){let ln=te.get(y),Wt=te.get(L),$t=te.get(ln.__renderTarget),Yl=te.get(Wt.__renderTarget);X.bindFramebuffer(b.READ_FRAMEBUFFER,$t.__webglFramebuffer),X.bindFramebuffer(b.DRAW_FRAMEBUFFER,Yl.__webglFramebuffer);for(let Oi=0;Oi<ye;Oi++)vt&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,te.get(y).__webglTexture,O,Pe+Oi),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,te.get(L).__webglTexture,ie,_t+Oi)),b.blitFramebuffer(Be,ke,fe,we,tt,ut,fe,we,b.DEPTH_BUFFER_BIT,b.NEAREST);X.bindFramebuffer(b.READ_FRAMEBUFFER,null),X.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(O!==0||y.isRenderTargetTexture||te.has(y)){let ln=te.get(y),Wt=te.get(L);X.bindFramebuffer(b.READ_FRAMEBUFFER,Ig),X.bindFramebuffer(b.DRAW_FRAMEBUFFER,Pg);for(let $t=0;$t<ye;$t++)vt?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,ln.__webglTexture,O,Pe+$t):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,ln.__webglTexture,O),cn?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Wt.__webglTexture,ie,_t+$t):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Wt.__webglTexture,ie),O!==0?b.blitFramebuffer(Be,ke,fe,we,tt,ut,fe,we,b.COLOR_BUFFER_BIT,b.NEAREST):cn?b.copyTexSubImage3D(Ft,ie,tt,ut,_t+$t,Be,ke,fe,we):b.copyTexSubImage2D(Ft,ie,tt,ut,Be,ke,fe,we);X.bindFramebuffer(b.READ_FRAMEBUFFER,null),X.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else cn?y.isDataTexture||y.isData3DTexture?b.texSubImage3D(Ft,ie,tt,ut,_t,fe,we,ye,st,Fe,Mt.data):L.isCompressedArrayTexture?b.compressedTexSubImage3D(Ft,ie,tt,ut,_t,fe,we,ye,st,Mt.data):b.texSubImage3D(Ft,ie,tt,ut,_t,fe,we,ye,st,Fe,Mt):y.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,ie,tt,ut,fe,we,st,Fe,Mt.data):y.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,ie,tt,ut,Mt.width,Mt.height,st,Mt.data):b.texSubImage2D(b.TEXTURE_2D,ie,tt,ut,fe,we,st,Fe,Mt);b.pixelStorei(b.UNPACK_ROW_LENGTH,ct),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,yn),b.pixelStorei(b.UNPACK_SKIP_PIXELS,pr),b.pixelStorei(b.UNPACK_SKIP_ROWS,Jt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,ms),ie===0&&L.generateMipmaps&&b.generateMipmap(Ft),X.unbindTexture()},this.copyTextureToTexture3D=function(y,L,U=null,B=null,O=0){return Qi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,L,U,B,O)},this.initRenderTarget=function(y){te.get(y).__webglFramebuffer===void 0&&ve.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?ve.setTextureCube(y,0):y.isData3DTexture?ve.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?ve.setTexture2DArray(y,0):ve.setTexture2D(y,0),X.unbindTexture()},this.resetState=function(){C=0,A=0,P=null,X.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}};var kl=class extends Po{constructor(e,t={}){let n=t.font;if(n===void 0)super();else{let r=n.generateShapes(e,t.size);t.depth===void 0&&(t.depth=50),t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}};var zl=class extends ls{constructor(e){super(e)}load(e,t,n,r){let s=this,o=new Fo(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){let c=s.parse(JSON.parse(a));t&&t(c)},n,r)}parse(e){return new Sd(e)}},Sd=class{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){let n=[],r=Pb(e,t,this.data);for(let s=0,o=r.length;s<o;s++)n.push(...r[s].toShapes());return n}};function Pb(i,e,t){let n=Array.from(i),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[],a=0,c=0;for(let l=0;l<n.length;l++){let u=n[l];if(u===`
`)a=0,c-=s;else{let h=Lb(u,r,a,c,t);a+=h.offsetX,o.push(h.path)}}return o}function Lb(i,e,t,n,r){let s=r.glyphs[i]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+i+'" does not exists in font family '+r.familyName+".");return}let o=new Bo,a,c,l,u,h,d,p,g;if(s.o){let _=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,f=_.length;m<f;)switch(_[m++]){case"m":a=_[m++]*e+t,c=_[m++]*e+n,o.moveTo(a,c);break;case"l":a=_[m++]*e+t,c=_[m++]*e+n,o.lineTo(a,c);break;case"q":l=_[m++]*e+t,u=_[m++]*e+n,h=_[m++]*e+t,d=_[m++]*e+n,o.quadraticCurveTo(h,d,l,u);break;case"b":l=_[m++]*e+t,u=_[m++]*e+n,h=_[m++]*e+t,d=_[m++]*e+n,p=_[m++]*e+t,g=_[m++]*e+n,o.bezierCurveTo(h,d,p,g,l,u);break}}return{offsetX:s.ha*e,path:o}}function Ob(i,e){if(i&1&&(Le(0,"div",5)(1,"h3"),Ke(2),De(),Le(3,"p",6),Ke(4),De(),Le(5,"p",7),Ke(6),De()()),i&2){let t=e.$implicit;He(2),Tt(t.title),He(2),Tt(t.subtitle),He(2),Tt(t.years)}}function Fb(i,e){if(i&1&&(Le(0,"div",5)(1,"h3"),Ke(2),De(),Le(3,"p",6),Ke(4),De(),Le(5,"p",7),Ke(6),De()()),i&2){let t=e.$implicit;He(2),Tt(t.title),He(2),Tt(t.subtitle),He(2),Tt(t.years)}}function Nb(i,e){if(i&1&&(Le(0,"div",5)(1,"h3"),Ke(2),De(),Le(3,"p",6),Ke(4),De(),Le(5,"p",7),Ke(6),De()()),i&2){let t=e.$implicit;He(2),Tt(t.title),He(2),Tt(t.subtitle),He(2),Tt(t.years)}}function Ub(i,e){if(i&1&&(Le(0,"p",9),Ke(1),De()),i&2){let t=ia().$implicit;He(),Tt(t.description)}}function Bb(i,e){if(i&1&&(Le(0,"div",5)(1,"h3"),Ke(2),De(),Le(3,"p",6),Ke(4),De(),Le(5,"p",7),Ke(6),De(),xn(7,Ub,2,1,"p",8),De()),i&2){let t=e.$implicit;He(2),Tt(t.title),He(2),Tt(t.subtitle),He(2),Tt(t.years),He(),It("ngIf",t.description)}}var Vl=class i{certificates=[{title:"AZ-400: DevOps Engineer Expert",subtitle:"Microsoft"},{title:"AZ-204: Azure Developer Associate",subtitle:"Microsoft"},{title:"AZ-900: Microsoft Azure Fundamentals",subtitle:"Microsoft"},{title:"Google Cloud Associate Cloud Engineer",subtitle:"Google"}];education=[{title:"Bachelor of Engineering in Electrical and Electronics Engineering",subtitle:"SVCE",years:"2017 - 2021"}];achievements=[{title:"Star Award",subtitle:"Cognizant",years:"2024"},{title:"Rising Star Award ",subtitle:"Cognizant",years:"2023"}];workExperience=[{title:"Software Engineer",subtitle:"Cognizant Technology Solutions.",years:"2022 - Present",description:"Deployed and administered each Dev, QA, and prod environment in AWS Cloud (EC2, S3, Route 53, Load Balancers, Credential Manager, and Secrets Manager) to secure and scale for nearly 10,000 users.Transitioned the application to an open-source application while ensuring compliance with regulatory standards, fostering transparency and community collaboration."},{title:"Junior Software Engineer",subtitle:"Cognizant Technology Solutions",years:"2021 - 2022",description:"Designed and developed a fully integrated customer experience dashboard with Angular, Node.js, SpringBoot, and cloud services, allowing for seamless test suite execution and visualization.Implemented sentiment analysis for Android and iOS app reviews, delivering valuable insights to enhance user experience and application quality."},{title:"Junior Developer Intern",subtitle:"Cognizant Technology Solutions",years:"2021",description:"As a Application Engineer maintained around 20 legacy application. Organized, maintain and perform of necessary development with zero delivery defects.Developed Full web application like health care application and various POCs"}];constructor(){}ngOnInit(){}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Dt({type:i,selectors:[["app-about"]],decls:19,vars:4,consts:[[1,"resume-container"],[1,"column","left-column"],[1,"section"],["class","item",4,"ngFor","ngForOf"],[1,"column","right-column"],[1,"item"],[1,"subtitle"],[1,"years"],["class","description",4,"ngIf"],[1,"description"]],template:function(t,n){t&1&&(Le(0,"div",0)(1,"div",1)(2,"section",2)(3,"h2"),Ke(4,"Education"),De(),xn(5,Ob,7,3,"div",3),De(),Le(6,"section",2)(7,"h2"),Ke(8,"Certificates"),De(),xn(9,Fb,7,3,"div",3),De(),Le(10,"section",2)(11,"h2"),Ke(12,"Achievements"),De(),xn(13,Nb,7,3,"div",3),De()(),Le(14,"div",4)(15,"section",2)(16,"h2"),Ke(17,"Work Experience"),De(),xn(18,Bb,8,4,"div",3),De()()()),t&2&&(He(5),It("ngForOf",n.education),He(4),It("ngForOf",n.certificates),He(4),It("ngForOf",n.achievements),He(5),It("ngForOf",n.workExperience))},dependencies:[Rn,di,yu],styles:[".resume-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:20px;padding:20px;max-width:1200px;margin:0 auto;box-sizing:border-box;flex-grow:1;text-align:left}.column[_ngcontent-%COMP%]{flex:1;min-width:300px;padding:15px;border-radius:8px;box-sizing:border-box;display:flex;flex-direction:column}.section[_ngcontent-%COMP%], .combined-section-container[_ngcontent-%COMP%]{flex-shrink:0;display:flex;flex-direction:column;flex-grow:1}.section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .combined-section-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#fff;margin-bottom:15px;background-color:#61dafb33;border-bottom:2px solid rgb(97,218,251);padding:5px;font-size:1.5em}.sub-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#007bff;margin-top:15px;margin-bottom:10px;font-size:1.2em}.sub-section[_ngcontent-%COMP%]:first-child   h3[_ngcontent-%COMP%]{margin-top:0}.scrollable-content[_ngcontent-%COMP%]{max-height:350px;overflow-y:auto;padding-right:5px;flex-grow:1}.scrollable-content[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}.scrollable-content[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#f1f1f1;border-radius:4px}.scrollable-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#888;border-radius:4px}.scrollable-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#555}.item[_ngcontent-%COMP%]{margin-bottom:15px}.item[_ngcontent-%COMP%]:last-child{margin-bottom:0}.item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#007bff;margin-bottom:5px;font-size:1.1em}.item[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-style:italic;font-family:Roboto;font-weight:400;color:#f1f1f1;margin-bottom:3px}.item[_ngcontent-%COMP%]   .years[_ngcontent-%COMP%]{font-size:.9em;color:#61dafb;margin-bottom:5px}.item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);font-size:.95em;color:#fff;line-height:1.5}@media (max-width: 768px){.resume-container[_ngcontent-%COMP%]{display:block;padding:10px;gap:15px;max-height:75vh;overflow-y:auto;scrollbar-width:0px;scroll-snap-type:y mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none;-ms-overflow-style:none}.column[_ngcontent-%COMP%]{min-width:unset;width:100%;padding:10px;height:calc((100% - 15px)/2)}.section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .combined-section-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.2em;margin-bottom:10px}.sub-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.1em;margin-top:10px;margin-bottom:8px}.item[_ngcontent-%COMP%]{margin-bottom:10px}.item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1em;margin-bottom:3px}.item[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:.85em}.item[_ngcontent-%COMP%]   .years[_ngcontent-%COMP%]{font-size:.8em;margin-bottom:3px}.item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:.85em;line-height:1.4}}@media (max-width: 480px){.resume-container[_ngcontent-%COMP%]{padding:5px;gap:10px;max-height:75vh;overflow-y:scroll;scroll-margin:10px;display:block}.column[_ngcontent-%COMP%]{padding:8px;height:calc((100% - 10px)/2)}.section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .combined-section-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.1em;margin-bottom:8px}.sub-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1em;margin-top:8px;margin-bottom:5px}.combined-section-container[_ngcontent-%COMP%] > .scrollable-content[_ngcontent-%COMP%]{max-height:calc(100% - 90px)}.section[_ngcontent-%COMP%] > .scrollable-content[_ngcontent-%COMP%]{max-height:calc(100% - 60px)}.item[_ngcontent-%COMP%]{margin-bottom:8px}.item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:.95em;margin-bottom:2px}.item[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:.8em}.item[_ngcontent-%COMP%]   .years[_ngcontent-%COMP%]{font-size:.75em;margin-bottom:2px}.item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:.8em;line-height:1.3}}"]})};function kb(i,e){if(i&1&&(Le(0,"div",3)(1,"h3"),Ke(2),De(),Le(3,"div",4)(4,"p",5),Ke(5),De()()()),i&2){let t=e.$implicit;He(2),Tt(t.heading),He(3),Tt(t.desciption)}}var Hl=class i{cards=[{heading:"OpenSource Project",desciption:"Cognizant Customer Experience Assurance Viewer is used to leverage the CXA insights from a website and showcase the same on a single dashboard"},{heading:"GenAi Enabled Chat Bot",desciption:"A RAG based chat bot which able to analsyis the user questions and give detailed answer using GenAi"},{heading:"Sentiment Analysis Bot",desciption:"A bot which use reviews from playstore and app store using NLP model to analysis the sentetiment and other categories"},{heading:"CI/CD PipeLine",desciption:"Developed end to end pipeline from development to deployment with continous testing"},{heading:"Visual Studio Code Extension",desciption:"Music player Extension from visual studio code Play,Pause,Control your tracks from IDE itself increase productivity"},{heading:"Mini Games",desciption:"Developed many small mini games like catching the alphabets,etc which can we played in browser and also some in windows"}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Dt({type:i,selectors:[["app-projects"]],decls:3,vars:1,consts:[[1,"cards-container"],[1,"cards-desktop-layout"],["class","card",4,"ngFor","ngForOf"],[1,"card"],[1,"card-logos-container"],[1,"card-desciption"]],template:function(t,n){t&1&&(Le(0,"div",0)(1,"div",1),xn(2,kb,6,2,"div",2),De()()),t&2&&(He(2),It("ngForOf",n.cards))},dependencies:[Rn,di],styles:[".cards-container[_ngcontent-%COMP%]{padding:15px;max-height:75vh;overflow-y:auto;scrollbar-width:0px;scroll-snap-type:y mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none;-ms-overflow-style:none}.card[_ngcontent-%COMP%]{border-radius:8px;padding:20px;margin:10px;color:#61dafb;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);text-align:center;min-height:150px;display:flex;flex-direction:column;align-items:center;justify-content:center;border-bottom:2px solid #61DAFB;animation:_ngcontent-%COMP%_active-nav-glow 1.5s ease-in-out infinite alternate}@keyframes _ngcontent-%COMP%_active-nav-glow{0%{box-shadow:0 0 5px #61dafb66,0 0 10px #61dafb33}to{box-shadow:0 0 15px #61dafbcc,0 0 25px #61dafb66}}.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:15px}.card-desciption[_ngcontent-%COMP%]{color:#fff;font-weight:700}.card-logos-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:10px;margin-top:10px}.card-logo[_ngcontent-%COMP%]{max-width:50px;height:auto;min-width:30px;max-height:50px;object-fit:contain}.cards-desktop-layout[_ngcontent-%COMP%]{display:flex;justify-content:space-around;flex-wrap:wrap;gap:20px}.cards-desktop-layout[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{flex:1 1 22%;min-width:200px;max-width:280px}.cards-mobile-slider[_ngcontent-%COMP%]{display:none}"]})};var Gl=class i{title="I'm Full Stack Engineer";subtitle="SIVA S A";description=`4+ years of experience in developing scalable applications using Angular, React,
Spring Boot, and Node.js. Experienced in software architecture, end-to-end development, and optimizing application
performance. Passionate about delivering high-quality solutions and solving complex technical challenges within agile
environments.`;static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Dt({type:i,selectors:[["app-home"]],decls:10,vars:3,consts:[[1,"content-wrapper"],[1,"image-column"],["src","stars\\avatar.png","alt","Placeholder Image",1,"content-image"],[1,"text-column"],[1,"title-text"],[1,"subtitle-text"],[1,"description-text"]],template:function(t,n){t&1&&(Le(0,"div",0)(1,"div",1),yt(2,"img",2),De(),Le(3,"div",3)(4,"h1",4),Ke(5),De(),Le(6,"h2",5),Ke(7),De(),Le(8,"p",6),Ke(9),De()()()),t&2&&(He(5),ra(" ",n.title," "),He(2),ra(" ",n.subtitle," "),He(2),ra(" ",n.description," "))},styles:[".content-wrapper[_ngcontent-%COMP%]{padding:1.5rem;max-width:72rem;width:100%;display:flex;flex-direction:column;align-items:center;gap:2rem}.image-column[_ngcontent-%COMP%]{flex-shrink:0;width:100%}.content-image[_ngcontent-%COMP%]{border-radius:.5rem;width:80%;height:auto;object-fit:cover}.text-column[_ngcontent-%COMP%]{flex-grow:1;width:100%;text-align:center;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.title-text[_ngcontent-%COMP%]{font-size:1.875rem;font-weight:800;color:#fff;margin-bottom:1rem}.subtitle-text[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:600;color:#2563eb;margin-bottom:1rem}.description-text[_ngcontent-%COMP%]{color:#fff;font-size:1rem;line-height:1.625;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}@media (min-width: 640px){.content-wrapper[_ngcontent-%COMP%]{padding:2rem;gap:2.5rem}.title-text[_ngcontent-%COMP%]{font-size:2.25rem}.subtitle-text[_ngcontent-%COMP%]{font-size:1.5rem}.description-text[_ngcontent-%COMP%]{font-size:1.125rem}}@media (min-width: 768px){.content-wrapper[_ngcontent-%COMP%]{padding:2.5rem;flex-direction:row;gap:3rem}.image-column[_ngcontent-%COMP%], .text-column[_ngcontent-%COMP%]{width:50%}.text-column[_ngcontent-%COMP%]{text-align:left}.title-text[_ngcontent-%COMP%]{font-size:3rem}.subtitle-text[_ngcontent-%COMP%]{font-size:1.875rem}}"]})};function zb(i,e){if(i&1&&yt(0,"img",6),i&2){let t=e.$implicit,n=ia().$implicit;sf("alt","Logo for ",n.heading,""),It("src",t,Jd)}}function Vb(i,e){if(i&1&&(Le(0,"div",3)(1,"h3"),Ke(2),De(),Le(3,"div",4),xn(4,zb,1,3,"img",5),De()()),i&2){let t=e.$implicit;He(2),Tt(t.heading),He(2),It("ngForOf",t.logos)}}var Wl=class i{cards=[{heading:" Development & Frameworks",logos:["stars/java.svg","stars/springboot.svg","stars/angular.png","stars/python.svg","stars/node.svg","stars/react.svg"]},{heading:"Data & Messaging",logos:["stars/mysql.svg","stars/mongodb.svg","stars/elasticsearch.svg","stars/kafka.svg"]},{heading:" Infrastructure & Operations",logos:["stars/aws.svg","stars/azuredevops.png","stars/git.svg","stars/linux.png","stars/docker.svg","stars/automate.svg","stars/nginx.svg"]},{heading:"Quality Assurance & Emerging Tech",logos:["stars/selenium.svg","stars/junit.png"]}];static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Dt({type:i,selectors:[["app-skills"]],decls:3,vars:1,consts:[[1,"cards-container"],[1,"cards-desktop-layout"],["class","card",4,"ngFor","ngForOf"],[1,"card"],[1,"card-logos-container"],["class","card-logo",3,"src","alt",4,"ngFor","ngForOf"],[1,"card-logo",3,"src","alt"]],template:function(t,n){t&1&&(Le(0,"div",0)(1,"div",1),xn(2,Vb,5,2,"div",2),De()()),t&2&&(He(2),It("ngForOf",n.cards))},dependencies:[Rn,di],styles:[".cards-container[_ngcontent-%COMP%]{padding:15px;max-height:75vh;overflow-y:auto;scrollbar-width:0px;scroll-snap-type:y mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none;-ms-overflow-style:none}.card[_ngcontent-%COMP%]{border-radius:8px;padding:20px;margin:10px;color:#61dafb;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);text-align:center;min-height:150px;display:flex;flex-direction:column;align-items:center;justify-content:center;border-bottom:2px solid #61DAFB;animation:_ngcontent-%COMP%_active-nav-glow 1.5s ease-in-out infinite alternate}@keyframes _ngcontent-%COMP%_active-nav-glow{0%{box-shadow:0 0 5px #61dafb66,0 0 10px #61dafb33}to{box-shadow:0 0 15px #61dafbcc,0 0 25px #61dafb66}}.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:15px}.card-logos-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:10px;margin-top:10px}.card-logo[_ngcontent-%COMP%]{max-width:50px;height:auto;min-width:30px;max-height:50px;object-fit:contain}.cards-desktop-layout[_ngcontent-%COMP%]{display:flex;justify-content:space-around;flex-wrap:wrap;gap:20px}.cards-desktop-layout[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{flex:1 1 22%;min-width:200px;max-width:280px}.cards-mobile-slider[_ngcontent-%COMP%]{display:none}.mobile-scroll-wrapper[_ngcontent-%COMP%]{scroll-snap-type:x mandatory}"]})};var Xl=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Dt({type:i,selectors:[["app-contact"]],decls:16,vars:0,consts:[[1,"social-footer"],[1,"footer-content"],[1,"social-icons"],["href","https://github.com/sivasa02","target","_blank","rel","noopener noreferrer",1,"social-link","github"],["width","24","height","24","viewBox","0 0 24 24","fill","currentColor"],["d","M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"],["href","https://www.linkedin.com/in/sivasa/","target","_blank","rel","noopener noreferrer",1,"social-link","linkedin"],["d","M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"],["href","mailto:sivaappu20@gmail.com",1,"social-link","email"],["d","M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.96L12 10.548l9.404-6.727h.96c.904 0 1.636.732 1.636 1.636z"]],template:function(t,n){t&1&&(Le(0,"footer",0)(1,"div",1)(2,"h2"),Ke(3,"Get In Touch"),De(),Le(4,"p"),Ke(5,"Have a question or want to work together? Send me a message!"),De(),Le(6,"div",2)(7,"a",3),Qo(),Le(8,"svg",4),yt(9,"path",5),De()(),ru(),Le(10,"a",6),Qo(),Le(11,"svg",4),yt(12,"path",7),De()(),ru(),Le(13,"a",8),Qo(),Le(14,"svg",4),yt(15,"path",9),De()()()()())},styles:[".footer-content[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:0 2rem;display:flex;justify-content:center;align-items:center;flex-direction:column;margin-top:2rem;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.footer-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:xx-large;color:#61dafb}.footer-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;font-weight:700;font-size:medium;margin-bottom:50px}.social-icons[_ngcontent-%COMP%]{display:flex;gap:2rem;align-items:center}.social-link[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:60px;height:60px;border-radius:12px;text-decoration:none;transition:all .3s ease;color:#fff;border:2px solid #61DAFB;animation:_ngcontent-%COMP%_active-nav-glow 1.5s ease-in-out infinite alternate}@keyframes _ngcontent-%COMP%_active-nav-glow{0%{box-shadow:0 0 5px #61dafb66,0 0 10px #61dafb33}to{box-shadow:0 0 15px #61dafbcc,0 0 25px #61dafb66}}.social-link[_ngcontent-%COMP%]:hover{transform:translateY(-2px);border-color:#ffffff1a}.social-link.github[_ngcontent-%COMP%]:hover, .social-link.linkedin[_ngcontent-%COMP%]:hover, .social-link.email[_ngcontent-%COMP%]:hover{background-color:#61dafbcc;color:#fff;border:none;animation:none;transform:translateY(-10px)}.social-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:24px;height:24px}"]})};var Hb=["universeCanvas"],Gb=["universeContainer"],qo=i=>({"section-content":!0,"active-section":i}),ps=class i{constructor(e,t,n){this.platformId=e;this.cdr=t;this.zone=n;this.isBrowser=Cs(this.platformId)}canvasRef;containerRef;isBrowser;animationFrameId;font=null;isMenuOpen=!1;scene;camera;renderer;clock=new Uo;isAnimating=!0;mouse=new he;targetRotation=new he;currentRotation=new he;nebulaMaterial;techLogos=[];floatingTechItems=[];techParticles;glowingElements=[];selectedSection="home";techStacks=[{name:"React",color:"#61DAFB",category:"frontend",logo:"stars/react.svg"},{name:"Angular",color:"#61DAFB",category:"frontend",logo:"stars/angular.png"},{name:"Spring",color:"#4FC08D",category:"frontend",logo:"stars/springboot.svg"},{name:"Node.js",color:"#339933",category:"backend",logo:"stars/node.svg"},{name:"Python",color:"#3776AB",category:"backend",logo:"stars/python.svg"},{name:"Java",color:"#007396",category:"backend",logo:"stars/java.svg"},{name:"Kafka",color:"#3178C6",category:"language",logo:"stars/kafka.svg"},{name:"MongoDB",color:"#47A248",category:"database",logo:"stars/mongodb.svg"},{name:"Elasticsearch",color:"#336791",category:"database",logo:"stars/elasticsearch.svg"},{name:"MySQL",color:"#336791",category:"database",logo:"stars/mysql.svg"},{name:"Docker",color:"#2496ED",category:"devops",logo:"stars/docker.svg"},{name:"AWS",color:"#0078D4",category:"cloud",logo:"stars/aws.svg"},{name:"Azure",color:"#0078D4",category:"cloud",logo:"stars/azuredevops.png"},{name:"Git",color:"#61DAFB",category:"tool",logo:"stars/git.svg"}];ngOnInit(){this.isBrowser&&(document.body.style.overflow="hidden")}getType(e){return typeof e}ngAfterViewInit(){this.isBrowser&&(this.initThreeJS(),this.loadFont("stars/helvetiker_regular.typeface.json").then(()=>{console.log("Font successfully loaded! Creating Tech Universe."),this.createTechUniverse(),this.setupEventListeners(),this.animate()}).catch(e=>{console.error("Failed to load font, cannot create all scene elements:",e)}))}ngOnChange(){console.log(this.selectSection)}ngOnDestroy(){this.isBrowser&&(this.animationFrameId&&cancelAnimationFrame(this.animationFrameId),this.scene&&this.scene.clear(),this.renderer&&this.renderer.dispose(),window.removeEventListener("resize",this.onWindowResize),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("wheel",this.preventScroll),window.removeEventListener("touchmove",this.preventScroll),document.body.style.overflow="auto")}initThreeJS(){let e=this.containerRef.nativeElement,t=e.clientWidth,n=e.clientHeight;this.scene=new Mo,this.camera=new Vt(75,t/n,.1,15e3),this.camera.position.z=1e3,this.renderer=new Ul({canvas:this.canvasRef.nativeElement,antialias:!0,alpha:!0}),this.renderer.setSize(t,n),this.renderer.setClearColor(17,1),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}loadFont(e){let t=new zl;return new Promise((n,r)=>{t.load(e,s=>{this.font=s,n()},void 0,s=>{r(s)})})}createTechUniverse(){this.createTechBackground(),this.createTechNameText(),this.createFloatingTechItems(),this.createTechParticles(),this.createGlowingElements()}createTechBackground(){let e=new is(8e3,64,64),t=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,n=`
      uniform float time;
      uniform vec3 color1;
      uniform vec3 color2;
      uniform vec3 color3;
      varying vec2 vUv;
      
      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }
      
      float noise(vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }
      
      void main() {
        vec2 st = vUv * 2.0 + time * 0.05;
        float n1 = noise(st + time * 0.1);
        float n2 = noise(st * 1.5 - time * 0.08);
        vec3 finalColor = mix(color1, color2, n1);
        finalColor = mix(finalColor, color3, n2 * 0.5);
        float alpha = (n1 + n2) * 0.1 + 0.02;
        gl_FragColor = vec4(finalColor, alpha);
      }
    `;this.nebulaMaterial=new sn({vertexShader:t,fragmentShader:n,uniforms:{time:{value:0},color1:{value:new Ze(.05,.1,.3)},color2:{value:new Ze(.15,.1,.25)},color3:{value:new Ze(.15,.1,.25)}},transparent:!0,side:Bt,blending:sr});let r=new Ut(e,this.nebulaMaterial);this.scene.add(r)}createTechNameText(){if(!this.font){console.error("Attempted to create text without a loaded font.");return}this.techStacks.forEach((e,t)=>{let n=30+Math.random()*50,r=new kl(e.name,{font:this.font,size:n,depth:5,curveSegments:12,bevelEnabled:!0,bevelThickness:1,bevelSize:1,bevelSegments:5});r.computeBoundingBox();let s=r.boundingBox;r.translate(-(s.max.x-s.min.x)/2,-(s.max.y-s.min.y)/2,0);let o=new ri({color:new Ze(e.color),transparent:!0,opacity:.5}),a=new Ut(r,o),c=new Qn;c.add(a);let l=2e3+Math.random()*2e3,u=t/this.techStacks.length*Math.PI*2,h=Math.random()*Math.PI;c.position.set(l*Math.sin(h)*Math.cos(u),l*Math.sin(h)*Math.sin(u),l*Math.cos(h)),c.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),this.techLogos.push(c),this.scene.add(c)})}createFloatingTechItems(){let e=new No;for(let t=0;t<30;t++){let n=this.techStacks[Math.floor(Math.random()*this.techStacks.length)],r=e.load(n.logo),s=new ri({map:r,transparent:!0,opacity:.5,side:gn}),o=new ir(80,80),a=new Ut(o,s);a.position.set((Math.random()-.5)*4e3,(Math.random()-.5)*4e3,(Math.random()-.5)*4e3),a.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),this.floatingTechItems.push(a),this.scene.add(a)}}createTechParticles(){let t=new Float32Array(6e3),n=new Float32Array(2e3*3);for(let o=0;o<2e3;o++){let a=o*3;t[a]=(Math.random()-.5)*6e3,t[a+1]=(Math.random()-.5)*6e3,t[a+2]=(Math.random()-.5)*6e3;let c=this.techStacks[Math.floor(Math.random()*this.techStacks.length)],l=new Ze(c.color);n[a]=l.r,n[a+1]=l.g,n[a+2]=l.b}let r=new rn;r.setAttribute("position",new Ht(t,3)),r.setAttribute("color",new Ht(n,3));let s=new Qr({size:3,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.8,blending:sr});this.techParticles=new bo(r,s),this.scene.add(this.techParticles)}createGlowingElements(){for(let e=0;e<15;e++){let t=new is(30+Math.random()*50,16,16),n=this.techStacks[Math.floor(Math.random()*this.techStacks.length)],r=new ri({color:new Ze(n.color),transparent:!0,opacity:.1,blending:sr}),s=new Ut(t,r);s.position.set((Math.random()-.5)*5e3,(Math.random()-.5)*5e3,(Math.random()-.5)*5e3),this.glowingElements.push(s),this.scene.add(s)}}setupEventListeners(){this.onWindowResize=this.onWindowResize.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.preventScroll=this.preventScroll.bind(this),window.addEventListener("resize",this.onWindowResize),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("wheel",this.preventScroll,{passive:!1}),window.addEventListener("touchmove",this.preventScroll,{passive:!1})}onWindowResize(){let e=this.containerRef.nativeElement,t=e.clientWidth,n=e.clientHeight;this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,n)}onMouseMove(e){let t=this.containerRef.nativeElement.getBoundingClientRect();this.mouse.x=(e.clientX-t.left)/t.width*2-1,this.mouse.y=-((e.clientY-t.top)/t.height)*2+1,this.targetRotation.x=this.mouse.y*.2,this.targetRotation.y=this.mouse.x*.2}onKeyDown(e){e.code==="Space"&&(e.preventDefault(),this.isAnimating=!this.isAnimating)}preventScroll(e){e.preventDefault()}animate(){if(this.animationFrameId=requestAnimationFrame(()=>this.animate()),!this.isAnimating)return;let e=this.clock.getElapsedTime();this.nebulaMaterial.uniforms.time.value=e,this.currentRotation.x+=(this.targetRotation.x-this.currentRotation.x)*.05,this.currentRotation.y+=(this.targetRotation.y-this.currentRotation.y)*.05;let t=1e3;this.camera.position.x=Math.sin(this.currentRotation.y)*t,this.camera.position.y=Math.sin(this.currentRotation.x)*t,this.camera.position.z=Math.cos(this.currentRotation.y)*t,this.camera.lookAt(0,0,0),this.techLogos.forEach((n,r)=>{n.rotation.x=.001,n.rotation.y=.002,n.rotation.z=5e-4,n.position.y+=Math.sin(e+r)*1.5}),this.floatingTechItems.forEach((n,r)=>{n.rotation.x=.001*(r%2===0?1:-1),n.rotation.y=.0015*(r%3===0?1:-1),n.rotation.z=8e-4*(r%4===0?1:-1),n.scale.setScalar(1+Math.sin(e*2+r)*.25)}),this.techParticles&&(this.techParticles.rotation.y+=.003),this.glowingElements.forEach((n,r)=>{n.scale.setScalar(1+Math.sin(e*2+r)*.2)}),this.renderer.render(this.scene,this.camera)}toggleMenu(){this.isMenuOpen=!this.isMenuOpen}onExploreClick(){console.log("Explore clicked")}onLearnMoreClick(){console.log("Learn more clicked")}selectSection(e){event&&event.preventDefault(),console.log("=== DEBUG selectSection (inside NgZone) ==="),console.log("Method called with:",e),this.selectedSection=e,console.log("After change:",this.selectedSection),this.isMenuOpen&&(this.isMenuOpen=!1),this.cdr.detectChanges(),this.cdr.markForCheck()}static \u0275fac=function(t){return new(t||i)(qt(Hn),qt(Es),qt(fn))};static \u0275cmp=Dt({type:i,selectors:[["app-universe-backdrop"]],viewQuery:function(t,n){if(t&1&&(Ss(Hb,7),Ss(Gb,7)),t&2){let r;bs(r=ws())&&(n.canvasRef=r.first),bs(r=ws())&&(n.containerRef=r.first)}},decls:46,vars:29,consts:[["universeContainer",""],["universeCanvas",""],[1,"universe-container"],[1,"navbar"],[1,"nav-brand"],[1,"brand-logo"],["src","stars/avatar.png","alt","Avatar"],[1,"brand-text"],[1,"nav-menu"],[1,"nav-item"],[1,"nav-link",3,"click"],[1,"hamburger",3,"click"],[1,"bar"],[1,"center-description"],[3,"ngClass"],[1,"hero-content"]],template:function(t,n){if(t&1){let r=rf();Le(0,"div",2,0)(2,"nav",3)(3,"div",4)(4,"span",5),yt(5,"img",6),De(),Le(6,"span",7),Ke(7,"SIVA S A"),De()(),Le(8,"ul",8)(9,"li",9)(10,"a",10),Gn("click",function(){return Ni(r),Ui(n.selectSection("home"))}),Ke(11,"Home"),De()(),Le(12,"li",9)(13,"a",10),Gn("click",function(){return Ni(r),Ui(n.selectSection("about"))}),Ke(14,"About"),De()(),Le(15,"li",9)(16,"a",10),Gn("click",function(){return Ni(r),Ui(n.selectSection("skills"))}),Ke(17,"Skills"),De()(),Le(18,"li",9)(19,"a",10),Gn("click",function(){return Ni(r),Ui(n.selectSection("projects"))}),Ke(20,"Projects"),De()(),Le(21,"li",9)(22,"a",10),Gn("click",function(){return Ni(r),Ui(n.selectSection("contact"))}),Ke(23,"Contact"),De()()(),Le(24,"div",11),Gn("click",function(){return Ni(r),Ui(n.toggleMenu())}),yt(25,"span",12)(26,"span",12)(27,"span",12),De()(),yt(28,"canvas",null,1),Le(30,"div",13)(31,"div",14)(32,"div",15),yt(33,"app-home"),De()(),Le(34,"div",14)(35,"div",15),yt(36,"app-about"),De()(),Le(37,"div",14)(38,"div",15),yt(39,"app-skills"),De()(),Le(40,"div",14)(41,"div",15),yt(42,"app-projects"),De()(),Le(43,"div",14)(44,"div",15),yt(45,"app-contact"),De()()()()}t&2&&(He(8),ui("active",n.isMenuOpen),He(2),ui("active",n.selectedSection==="home"),He(3),ui("active",n.selectedSection==="about"),He(3),ui("active",n.selectedSection==="skills"),He(3),ui("active",n.selectedSection==="projects"),He(3),ui("active",n.selectedSection==="contact"),He(2),ui("active",n.isMenuOpen),He(7),It("ngClass",Sr(19,qo,n.selectedSection==="home")),He(3),It("ngClass",Sr(21,qo,n.selectedSection==="about")),He(3),It("ngClass",Sr(23,qo,n.selectedSection==="skills")),He(3),It("ngClass",Sr(25,qo,n.selectedSection==="projects")),He(3),It("ngClass",Sr(27,qo,n.selectedSection==="contact")))},dependencies:[Rn,_u,Gl,Vl,Hl,Wl,Xl],styles:["[_nghost-%COMP%]{display:block;width:100vw;height:100vh;overflow:hidden;position:relative;font-family:doto,sans-serif;color:#fff;background-color:#000}.universe-container[_ngcontent-%COMP%]{width:100%;height:100%;position:relative;z-index:1}canvas[_ngcontent-%COMP%]{display:block;width:100%;height:100%;position:absolute;top:0;left:0;z-index:0}.navbar[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:95%;display:flex;justify-content:space-between;align-items:center;padding:1rem 2rem;z-index:9999;pointer-events:auto}.nav-brand[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.brand-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;box-shadow:0 0 10px #00ffff4d}.brand-text[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;color:#fff}.nav-menu[_ngcontent-%COMP%]{display:flex;list-style:none;margin:0;padding:0;pointer-events:auto}.nav-item[_ngcontent-%COMP%]{margin-left:1.5rem}.nav-link[_ngcontent-%COMP%]{background:none;border:none;color:#fff;font-size:1.1rem;padding:.5rem 1rem;cursor:pointer;transition:all .3s ease;border-radius:8px;text-decoration:none;display:block;pointer-events:auto}.nav-link[_ngcontent-%COMP%]:hover{color:#61dafb;background-color:#61dafb1a}.nav-link.active[_ngcontent-%COMP%]{color:#61dafb;font-weight:700;padding:.4rem .85rem;background-color:#61dafb33;border-bottom:2px solid #61DAFB;animation:_ngcontent-%COMP%_active-nav-glow 1.5s ease-in-out infinite alternate}@keyframes _ngcontent-%COMP%_active-nav-glow{0%{box-shadow:0 0 5px #61dafb66,0 0 10px #61dafb33}to{box-shadow:0 0 15px #61dafbcc,0 0 25px #61dafb66}}.hamburger[_ngcontent-%COMP%]{display:none;cursor:pointer;flex-direction:column;justify-content:space-between;width:30px;margin-right:10px;height:20px;z-index:10000;pointer-events:auto}.hamburger[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{width:100%;height:3px;background-color:#fff;border-radius:5px;transition:all .3s ease}@media (max-width: 768px){[_nghost-%COMP%]{overflow:scroll}.navbar[_ngcontent-%COMP%]{padding:1rem}.nav-menu[_ngcontent-%COMP%]{display:none;flex-direction:column;width:100%;position:absolute;top:60px;left:0;background-color:#00000080;padding:1rem 0;z-index:9998}.nav-menu.active[_ngcontent-%COMP%]{display:flex}.nav-item[_ngcontent-%COMP%]{margin:0;text-align:left;width:100%}.nav-link[_ngcontent-%COMP%]{display:block;padding:1rem;width:100%}.hamburger[_ngcontent-%COMP%]{display:flex}}.center-description[_ngcontent-%COMP%]{position:absolute;top:52%;left:50%;transform:translate(-50%,-50%);z-index:5;text-align:center;color:#fff;padding:2rem 3rem;border-radius:12px;-webkit-backdrop-filter:blur(1.5px);backdrop-filter:blur(1.5px);width:70%;box-sizing:border-box;pointer-events:auto;display:flex;flex-direction:column;align-items:center;justify-content:center;height:75%}.section-content[_ngcontent-%COMP%]{display:none;width:100%;height:100%;opacity:0;visibility:hidden;transform:translate(50px) scale(.95);transition:opacity .5s ease-in-out,transform .5s ease-in-out,visibility 0s linear .5s;position:absolute;top:0;left:0}.section-content.active-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;opacity:1;visibility:visible;transform:translate(0) scale(1);animation:_ngcontent-%COMP%_section-fly-in .7s ease-out forwards;position:relative}@keyframes _ngcontent-%COMP%_section-fly-in{0%{opacity:0;transform:translate(50px) scale(.9)}to{opacity:1;transform:translate(0) scale(1)}}.center-description[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .center-description[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5rem;margin-bottom:1rem;color:#61dafb;text-shadow:0 0 10px rgba(97,218,251,.5)}.center-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;line-height:1.6}.button-container[_ngcontent-%COMP%]{margin-top:2rem;display:flex;justify-content:center;gap:1rem}.btn[_ngcontent-%COMP%]{padding:.8rem 1.5rem;font-size:1rem;font-weight:700;border:2px solid #61DAFB;border-radius:8px;cursor:pointer;transition:all .3s ease;box-shadow:0 4px 8px #0003;pointer-events:auto}.btn-explore[_ngcontent-%COMP%]{background-color:#61dafb;color:#000}.btn-explore[_ngcontent-%COMP%]:hover{background-color:#4fc08d;border-color:#4fc08d;color:#fff;transform:translateY(-2px)}.btn-learn-more[_ngcontent-%COMP%]{background-color:transparent;color:#61dafb}.btn-learn-more[_ngcontent-%COMP%]:hover{background-color:#61dafb33;transform:translateY(-2px)}.info-panel[_ngcontent-%COMP%], .controls-panel[_ngcontent-%COMP%]{position:absolute;background-color:#0009;padding:.8rem 1.2rem;border-radius:8px;color:#fff;font-size:.9rem;box-shadow:0 4px 8px #0003;pointer-events:none;z-index:6}.info-panel[_ngcontent-%COMP%]{top:20%;left:2rem;transform:translateY(-50%);text-align:left}.info-panel[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.3rem;font-weight:700;color:#61dafb;margin-bottom:.3rem}.info-panel[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:1rem;opacity:.8}.controls-panel[_ngcontent-%COMP%]{bottom:2rem;right:2rem;text-align:right;line-height:1.5}@media (max-width: 768px){.info-panel[_ngcontent-%COMP%]{top:100px;left:1rem;right:1rem;text-align:center;transform:none;font-size:.8rem}.info-panel[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:1.1rem}.info-panel[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:.9rem}.controls-panel[_ngcontent-%COMP%]{bottom:1rem;left:1rem;right:1rem;text-align:center;font-size:.8rem}.center-description[_ngcontent-%COMP%]{padding:1.5rem 2rem;width:95%;height:90%}}"],changeDetection:0})};var wg=[{path:"",component:ps,title:"SIVA S A | FULL STACK ENGINEER"}];var Wb="@",Xb=(()=>{class i{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=Ie(Bi);loadingSchedulerFn=Ie($b,{optional:!0});_engine;constructor(t,n,r,s,o){this.doc=t,this.delegate=n,this.zone=r,this.animationType=s,this.moduleImpl=o}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-EIPYW75R.js").then(r=>r),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(t):n=t(),n.catch(r=>{throw new ht(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:s})=>{this._engine=r(this.animationType,this.doc);let o=new s(this.delegate,this._engine,this.zone);return this.delegate=o,o})}createRenderer(t,n){let r=this.delegate.createRenderer(t,n);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let s=new bd(r);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(o=>{let a=o.createRenderer(t,n);s.use(a),this.scheduler??=this.injector.get(Gd,null,{optional:!0}),this.scheduler?.notify(10)}).catch(o=>{s.use(r)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(t){this._engine?.flush(),this.delegate.componentReplaced?.(t)}static \u0275fac=function(n){tf()};static \u0275prov=it({token:i,factory:i.\u0275fac})}return i})(),bd=class{delegate;replay=[];\u0275type=1;constructor(e){this.delegate=e}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,n,r){this.delegate.insertBefore(e,t,n,r)}removeChild(e,t,n){this.delegate.removeChild(e,t,n)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,n,r){this.delegate.setAttribute(e,t,n,r)}removeAttribute(e,t,n){this.delegate.removeAttribute(e,t,n)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,n,r){this.delegate.setStyle(e,t,n,r)}removeStyle(e,t,n){this.delegate.removeStyle(e,t,n)}setProperty(e,t,n){this.shouldReplay(t)&&this.replay.push(r=>r.setProperty(e,t,n)),this.delegate.setProperty(e,t,n)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,n,r){return this.shouldReplay(t)&&this.replay.push(s=>s.listen(e,t,n,r)),this.delegate.listen(e,t,n,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(Wb)}},$b=new dt("");function Eg(i="animations"){return _s("NgAsyncAnimations"),Fi([{provide:ea,useFactory:(e,t,n)=>new Xb(e,t,n,i),deps:[Pt,Ps,fn]},{provide:jd,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Tg={providers:[af({eventCoalescing:!0}),eh(wg),Nf(Ff()),Eg()]};var qb=["cometCanvas"],$l=class i{constructor(e){this.platformId=e;this.isBrowser=Cs(this.platformId)}canvasRef;ctx;animationFrameId;isBrowser;mouse={x:0,y:0};trail=[];maxTrailLength=100;fadeSpeed=.005;initialRadius=8;radiusDecay=.9;ngOnInit(){this.isBrowser&&(this.ctx=this.canvasRef.nativeElement.getContext("2d"),this.setupCanvas(),this.animate())}ngOnDestroy(){this.isBrowser&&this.animationFrameId&&cancelAnimationFrame(this.animationFrameId)}onMouseMove(e){this.isBrowser&&(this.mouse.x=e.clientX,this.mouse.y=e.clientY,this.trail.push({x:this.mouse.x,y:this.mouse.y,alpha:1,radius:this.initialRadius}),this.trail.length>this.maxTrailLength&&this.trail.shift())}setupCanvas(){let e=this.canvasRef.nativeElement;e.width=window.innerWidth,e.height=window.innerHeight,document.body.style.cursor="none"}animate(){this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height);for(let e=0;e<this.trail.length;e++){let t=this.trail[e];if(t.alpha-=this.fadeSpeed,t.radius*=this.radiusDecay,t.alpha<=0||t.radius<=.001){this.trail.splice(e,1),e--;continue}this.ctx.beginPath(),this.ctx.fillStyle=`rgba(255, 255, 200, ${t.alpha})`,this.ctx.arc(t.x,t.y,t.radius,0,Math.PI*2),this.ctx.fill()}this.ctx.beginPath(),this.ctx.fillStyle="white",this.ctx.arc(this.mouse.x,this.mouse.y,this.initialRadius,0,Math.PI*2),this.ctx.fill(),this.animationFrameId=requestAnimationFrame(()=>this.animate())}onResize(e){this.isBrowser&&this.setupCanvas()}static \u0275fac=function(t){return new(t||i)(qt(Hn))};static \u0275cmp=Dt({type:i,selectors:[["app-comet-cursor"]],viewQuery:function(t,n){if(t&1&&Ss(qb,7),t&2){let r;bs(r=ws())&&(n.canvasRef=r.first)}},hostBindings:function(t,n){t&1&&Gn("mousemove",function(s){return n.onMouseMove(s)},!1,Qd)("resize",function(s){return n.onResize(s)},!1,Kd)},decls:2,vars:0,consts:[["cometCanvas",""],[1,"comet-canvas"]],template:function(t,n){t&1&&yt(0,"canvas",1,0)},styles:[".comet-canvas[_ngcontent-%COMP%]{position:fixed;top:0;left:0;z-index:9999;pointer-events:none}"]})};var ql=class i{title="portfolio";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Dt({type:i,selectors:[["app-root"]],decls:3,vars:0,template:function(t,n){t&1&&yt(0,"app-comet-cursor")(1,"app-universe-backdrop")(2,"router-outlet")},dependencies:[Ks,ps,$l],encapsulation:2})};Au(ql,Tg).catch(i=>console.error(i));
