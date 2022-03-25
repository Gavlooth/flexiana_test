goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_52682 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_52682(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_52688 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_52688(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__51014 = coll;
var G__51015 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__51014,G__51015) : shadow.dom.lazy_native_coll_seq.call(null,G__51014,G__51015));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__51118 = arguments.length;
switch (G__51118) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__51149 = arguments.length;
switch (G__51149) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__51169 = arguments.length;
switch (G__51169) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__51183 = arguments.length;
switch (G__51183) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__51207 = arguments.length;
switch (G__51207) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__51243 = arguments.length;
switch (G__51243) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e51278){if((e51278 instanceof Object)){
var e = e51278;
return console.log("didnt support attachEvent",el,e);
} else {
throw e51278;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__51306 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__51307 = null;
var count__51308 = (0);
var i__51309 = (0);
while(true){
if((i__51309 < count__51308)){
var el = chunk__51307.cljs$core$IIndexed$_nth$arity$2(null,i__51309);
var handler_52781__$1 = ((function (seq__51306,chunk__51307,count__51308,i__51309,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__51306,chunk__51307,count__51308,i__51309,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_52781__$1);


var G__52785 = seq__51306;
var G__52786 = chunk__51307;
var G__52787 = count__51308;
var G__52788 = (i__51309 + (1));
seq__51306 = G__52785;
chunk__51307 = G__52786;
count__51308 = G__52787;
i__51309 = G__52788;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51306);
if(temp__5804__auto__){
var seq__51306__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51306__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51306__$1);
var G__52792 = cljs.core.chunk_rest(seq__51306__$1);
var G__52793 = c__4679__auto__;
var G__52794 = cljs.core.count(c__4679__auto__);
var G__52795 = (0);
seq__51306 = G__52792;
chunk__51307 = G__52793;
count__51308 = G__52794;
i__51309 = G__52795;
continue;
} else {
var el = cljs.core.first(seq__51306__$1);
var handler_52798__$1 = ((function (seq__51306,chunk__51307,count__51308,i__51309,el,seq__51306__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__51306,chunk__51307,count__51308,i__51309,el,seq__51306__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_52798__$1);


var G__52800 = cljs.core.next(seq__51306__$1);
var G__52801 = null;
var G__52802 = (0);
var G__52803 = (0);
seq__51306 = G__52800;
chunk__51307 = G__52801;
count__51308 = G__52802;
i__51309 = G__52803;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__51385 = arguments.length;
switch (G__51385) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__51407 = cljs.core.seq(events);
var chunk__51408 = null;
var count__51409 = (0);
var i__51410 = (0);
while(true){
if((i__51410 < count__51409)){
var vec__51429 = chunk__51408.cljs$core$IIndexed$_nth$arity$2(null,i__51410);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51429,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51429,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__52808 = seq__51407;
var G__52809 = chunk__51408;
var G__52810 = count__51409;
var G__52811 = (i__51410 + (1));
seq__51407 = G__52808;
chunk__51408 = G__52809;
count__51409 = G__52810;
i__51410 = G__52811;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51407);
if(temp__5804__auto__){
var seq__51407__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51407__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51407__$1);
var G__52813 = cljs.core.chunk_rest(seq__51407__$1);
var G__52814 = c__4679__auto__;
var G__52815 = cljs.core.count(c__4679__auto__);
var G__52816 = (0);
seq__51407 = G__52813;
chunk__51408 = G__52814;
count__51409 = G__52815;
i__51410 = G__52816;
continue;
} else {
var vec__51433 = cljs.core.first(seq__51407__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51433,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51433,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__52820 = cljs.core.next(seq__51407__$1);
var G__52821 = null;
var G__52822 = (0);
var G__52823 = (0);
seq__51407 = G__52820;
chunk__51408 = G__52821;
count__51409 = G__52822;
i__51410 = G__52823;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__51439 = cljs.core.seq(styles);
var chunk__51440 = null;
var count__51441 = (0);
var i__51442 = (0);
while(true){
if((i__51442 < count__51441)){
var vec__51468 = chunk__51440.cljs$core$IIndexed$_nth$arity$2(null,i__51442);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51468,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51468,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__52836 = seq__51439;
var G__52837 = chunk__51440;
var G__52838 = count__51441;
var G__52839 = (i__51442 + (1));
seq__51439 = G__52836;
chunk__51440 = G__52837;
count__51441 = G__52838;
i__51442 = G__52839;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51439);
if(temp__5804__auto__){
var seq__51439__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51439__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51439__$1);
var G__52845 = cljs.core.chunk_rest(seq__51439__$1);
var G__52846 = c__4679__auto__;
var G__52847 = cljs.core.count(c__4679__auto__);
var G__52848 = (0);
seq__51439 = G__52845;
chunk__51440 = G__52846;
count__51441 = G__52847;
i__51442 = G__52848;
continue;
} else {
var vec__51480 = cljs.core.first(seq__51439__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51480,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51480,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__52849 = cljs.core.next(seq__51439__$1);
var G__52850 = null;
var G__52851 = (0);
var G__52852 = (0);
seq__51439 = G__52849;
chunk__51440 = G__52850;
count__51441 = G__52851;
i__51442 = G__52852;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__51493_52853 = key;
var G__51493_52854__$1 = (((G__51493_52853 instanceof cljs.core.Keyword))?G__51493_52853.fqn:null);
switch (G__51493_52854__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_52866 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_52866,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_52866,"aria-");
}
})())){
el.setAttribute(ks_52866,value);
} else {
(el[ks_52866] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__51534){
var map__51535 = p__51534;
var map__51535__$1 = cljs.core.__destructure_map(map__51535);
var props = map__51535__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51535__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__51538 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51538,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51538,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51538,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__51549 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__51549,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__51549;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__51560 = arguments.length;
switch (G__51560) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__51574){
var vec__51575 = p__51574;
var seq__51576 = cljs.core.seq(vec__51575);
var first__51577 = cljs.core.first(seq__51576);
var seq__51576__$1 = cljs.core.next(seq__51576);
var nn = first__51577;
var first__51577__$1 = cljs.core.first(seq__51576__$1);
var seq__51576__$2 = cljs.core.next(seq__51576__$1);
var np = first__51577__$1;
var nc = seq__51576__$2;
var node = vec__51575;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51582 = nn;
var G__51583 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__51582,G__51583) : create_fn.call(null,G__51582,G__51583));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__51585 = nn;
var G__51586 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__51585,G__51586) : create_fn.call(null,G__51585,G__51586));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__51593 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51593,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51593,(1),null);
var seq__51598_52893 = cljs.core.seq(node_children);
var chunk__51599_52894 = null;
var count__51600_52895 = (0);
var i__51601_52896 = (0);
while(true){
if((i__51601_52896 < count__51600_52895)){
var child_struct_52900 = chunk__51599_52894.cljs$core$IIndexed$_nth$arity$2(null,i__51601_52896);
var children_52901 = shadow.dom.dom_node(child_struct_52900);
if(cljs.core.seq_QMARK_(children_52901)){
var seq__51659_52902 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_52901));
var chunk__51661_52903 = null;
var count__51662_52904 = (0);
var i__51663_52905 = (0);
while(true){
if((i__51663_52905 < count__51662_52904)){
var child_52908 = chunk__51661_52903.cljs$core$IIndexed$_nth$arity$2(null,i__51663_52905);
if(cljs.core.truth_(child_52908)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_52908);


var G__52909 = seq__51659_52902;
var G__52910 = chunk__51661_52903;
var G__52911 = count__51662_52904;
var G__52912 = (i__51663_52905 + (1));
seq__51659_52902 = G__52909;
chunk__51661_52903 = G__52910;
count__51662_52904 = G__52911;
i__51663_52905 = G__52912;
continue;
} else {
var G__52914 = seq__51659_52902;
var G__52915 = chunk__51661_52903;
var G__52916 = count__51662_52904;
var G__52917 = (i__51663_52905 + (1));
seq__51659_52902 = G__52914;
chunk__51661_52903 = G__52915;
count__51662_52904 = G__52916;
i__51663_52905 = G__52917;
continue;
}
} else {
var temp__5804__auto___52920 = cljs.core.seq(seq__51659_52902);
if(temp__5804__auto___52920){
var seq__51659_52922__$1 = temp__5804__auto___52920;
if(cljs.core.chunked_seq_QMARK_(seq__51659_52922__$1)){
var c__4679__auto___52924 = cljs.core.chunk_first(seq__51659_52922__$1);
var G__52925 = cljs.core.chunk_rest(seq__51659_52922__$1);
var G__52926 = c__4679__auto___52924;
var G__52927 = cljs.core.count(c__4679__auto___52924);
var G__52928 = (0);
seq__51659_52902 = G__52925;
chunk__51661_52903 = G__52926;
count__51662_52904 = G__52927;
i__51663_52905 = G__52928;
continue;
} else {
var child_52931 = cljs.core.first(seq__51659_52922__$1);
if(cljs.core.truth_(child_52931)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_52931);


var G__52932 = cljs.core.next(seq__51659_52922__$1);
var G__52933 = null;
var G__52934 = (0);
var G__52935 = (0);
seq__51659_52902 = G__52932;
chunk__51661_52903 = G__52933;
count__51662_52904 = G__52934;
i__51663_52905 = G__52935;
continue;
} else {
var G__52936 = cljs.core.next(seq__51659_52922__$1);
var G__52937 = null;
var G__52938 = (0);
var G__52939 = (0);
seq__51659_52902 = G__52936;
chunk__51661_52903 = G__52937;
count__51662_52904 = G__52938;
i__51663_52905 = G__52939;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_52901);
}


var G__52940 = seq__51598_52893;
var G__52941 = chunk__51599_52894;
var G__52942 = count__51600_52895;
var G__52943 = (i__51601_52896 + (1));
seq__51598_52893 = G__52940;
chunk__51599_52894 = G__52941;
count__51600_52895 = G__52942;
i__51601_52896 = G__52943;
continue;
} else {
var temp__5804__auto___52946 = cljs.core.seq(seq__51598_52893);
if(temp__5804__auto___52946){
var seq__51598_52948__$1 = temp__5804__auto___52946;
if(cljs.core.chunked_seq_QMARK_(seq__51598_52948__$1)){
var c__4679__auto___52949 = cljs.core.chunk_first(seq__51598_52948__$1);
var G__52951 = cljs.core.chunk_rest(seq__51598_52948__$1);
var G__52952 = c__4679__auto___52949;
var G__52953 = cljs.core.count(c__4679__auto___52949);
var G__52954 = (0);
seq__51598_52893 = G__52951;
chunk__51599_52894 = G__52952;
count__51600_52895 = G__52953;
i__51601_52896 = G__52954;
continue;
} else {
var child_struct_52955 = cljs.core.first(seq__51598_52948__$1);
var children_52956 = shadow.dom.dom_node(child_struct_52955);
if(cljs.core.seq_QMARK_(children_52956)){
var seq__51678_52957 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_52956));
var chunk__51680_52958 = null;
var count__51681_52959 = (0);
var i__51682_52960 = (0);
while(true){
if((i__51682_52960 < count__51681_52959)){
var child_52961 = chunk__51680_52958.cljs$core$IIndexed$_nth$arity$2(null,i__51682_52960);
if(cljs.core.truth_(child_52961)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_52961);


var G__52964 = seq__51678_52957;
var G__52965 = chunk__51680_52958;
var G__52966 = count__51681_52959;
var G__52967 = (i__51682_52960 + (1));
seq__51678_52957 = G__52964;
chunk__51680_52958 = G__52965;
count__51681_52959 = G__52966;
i__51682_52960 = G__52967;
continue;
} else {
var G__52968 = seq__51678_52957;
var G__52969 = chunk__51680_52958;
var G__52970 = count__51681_52959;
var G__52971 = (i__51682_52960 + (1));
seq__51678_52957 = G__52968;
chunk__51680_52958 = G__52969;
count__51681_52959 = G__52970;
i__51682_52960 = G__52971;
continue;
}
} else {
var temp__5804__auto___52972__$1 = cljs.core.seq(seq__51678_52957);
if(temp__5804__auto___52972__$1){
var seq__51678_52974__$1 = temp__5804__auto___52972__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51678_52974__$1)){
var c__4679__auto___52975 = cljs.core.chunk_first(seq__51678_52974__$1);
var G__52976 = cljs.core.chunk_rest(seq__51678_52974__$1);
var G__52977 = c__4679__auto___52975;
var G__52978 = cljs.core.count(c__4679__auto___52975);
var G__52980 = (0);
seq__51678_52957 = G__52976;
chunk__51680_52958 = G__52977;
count__51681_52959 = G__52978;
i__51682_52960 = G__52980;
continue;
} else {
var child_52982 = cljs.core.first(seq__51678_52974__$1);
if(cljs.core.truth_(child_52982)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_52982);


var G__52983 = cljs.core.next(seq__51678_52974__$1);
var G__52984 = null;
var G__52985 = (0);
var G__52986 = (0);
seq__51678_52957 = G__52983;
chunk__51680_52958 = G__52984;
count__51681_52959 = G__52985;
i__51682_52960 = G__52986;
continue;
} else {
var G__52988 = cljs.core.next(seq__51678_52974__$1);
var G__52989 = null;
var G__52990 = (0);
var G__52991 = (0);
seq__51678_52957 = G__52988;
chunk__51680_52958 = G__52989;
count__51681_52959 = G__52990;
i__51682_52960 = G__52991;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_52956);
}


var G__52993 = cljs.core.next(seq__51598_52948__$1);
var G__52994 = null;
var G__52995 = (0);
var G__52996 = (0);
seq__51598_52893 = G__52993;
chunk__51599_52894 = G__52994;
count__51600_52895 = G__52995;
i__51601_52896 = G__52996;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__51722 = cljs.core.seq(node);
var chunk__51723 = null;
var count__51724 = (0);
var i__51725 = (0);
while(true){
if((i__51725 < count__51724)){
var n = chunk__51723.cljs$core$IIndexed$_nth$arity$2(null,i__51725);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__53005 = seq__51722;
var G__53006 = chunk__51723;
var G__53007 = count__51724;
var G__53008 = (i__51725 + (1));
seq__51722 = G__53005;
chunk__51723 = G__53006;
count__51724 = G__53007;
i__51725 = G__53008;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51722);
if(temp__5804__auto__){
var seq__51722__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51722__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51722__$1);
var G__53009 = cljs.core.chunk_rest(seq__51722__$1);
var G__53010 = c__4679__auto__;
var G__53011 = cljs.core.count(c__4679__auto__);
var G__53012 = (0);
seq__51722 = G__53009;
chunk__51723 = G__53010;
count__51724 = G__53011;
i__51725 = G__53012;
continue;
} else {
var n = cljs.core.first(seq__51722__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__53014 = cljs.core.next(seq__51722__$1);
var G__53015 = null;
var G__53016 = (0);
var G__53017 = (0);
seq__51722 = G__53014;
chunk__51723 = G__53015;
count__51724 = G__53016;
i__51725 = G__53017;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__51748 = arguments.length;
switch (G__51748) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__51765 = arguments.length;
switch (G__51765) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__51789 = arguments.length;
switch (G__51789) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___53037 = arguments.length;
var i__4865__auto___53038 = (0);
while(true){
if((i__4865__auto___53038 < len__4864__auto___53037)){
args__4870__auto__.push((arguments[i__4865__auto___53038]));

var G__53040 = (i__4865__auto___53038 + (1));
i__4865__auto___53038 = G__53040;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__51832_53041 = cljs.core.seq(nodes);
var chunk__51833_53042 = null;
var count__51834_53043 = (0);
var i__51835_53044 = (0);
while(true){
if((i__51835_53044 < count__51834_53043)){
var node_53045 = chunk__51833_53042.cljs$core$IIndexed$_nth$arity$2(null,i__51835_53044);
fragment.appendChild(shadow.dom._to_dom(node_53045));


var G__53050 = seq__51832_53041;
var G__53051 = chunk__51833_53042;
var G__53052 = count__51834_53043;
var G__53053 = (i__51835_53044 + (1));
seq__51832_53041 = G__53050;
chunk__51833_53042 = G__53051;
count__51834_53043 = G__53052;
i__51835_53044 = G__53053;
continue;
} else {
var temp__5804__auto___53054 = cljs.core.seq(seq__51832_53041);
if(temp__5804__auto___53054){
var seq__51832_53055__$1 = temp__5804__auto___53054;
if(cljs.core.chunked_seq_QMARK_(seq__51832_53055__$1)){
var c__4679__auto___53056 = cljs.core.chunk_first(seq__51832_53055__$1);
var G__53057 = cljs.core.chunk_rest(seq__51832_53055__$1);
var G__53058 = c__4679__auto___53056;
var G__53059 = cljs.core.count(c__4679__auto___53056);
var G__53060 = (0);
seq__51832_53041 = G__53057;
chunk__51833_53042 = G__53058;
count__51834_53043 = G__53059;
i__51835_53044 = G__53060;
continue;
} else {
var node_53061 = cljs.core.first(seq__51832_53055__$1);
fragment.appendChild(shadow.dom._to_dom(node_53061));


var G__53062 = cljs.core.next(seq__51832_53055__$1);
var G__53063 = null;
var G__53064 = (0);
var G__53065 = (0);
seq__51832_53041 = G__53062;
chunk__51833_53042 = G__53063;
count__51834_53043 = G__53064;
i__51835_53044 = G__53065;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq51818){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51818));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__51871_53070 = cljs.core.seq(scripts);
var chunk__51872_53071 = null;
var count__51873_53072 = (0);
var i__51874_53073 = (0);
while(true){
if((i__51874_53073 < count__51873_53072)){
var vec__51895_53076 = chunk__51872_53071.cljs$core$IIndexed$_nth$arity$2(null,i__51874_53073);
var script_tag_53077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51895_53076,(0),null);
var script_body_53078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51895_53076,(1),null);
eval(script_body_53078);


var G__53081 = seq__51871_53070;
var G__53082 = chunk__51872_53071;
var G__53083 = count__51873_53072;
var G__53084 = (i__51874_53073 + (1));
seq__51871_53070 = G__53081;
chunk__51872_53071 = G__53082;
count__51873_53072 = G__53083;
i__51874_53073 = G__53084;
continue;
} else {
var temp__5804__auto___53085 = cljs.core.seq(seq__51871_53070);
if(temp__5804__auto___53085){
var seq__51871_53086__$1 = temp__5804__auto___53085;
if(cljs.core.chunked_seq_QMARK_(seq__51871_53086__$1)){
var c__4679__auto___53090 = cljs.core.chunk_first(seq__51871_53086__$1);
var G__53091 = cljs.core.chunk_rest(seq__51871_53086__$1);
var G__53092 = c__4679__auto___53090;
var G__53093 = cljs.core.count(c__4679__auto___53090);
var G__53094 = (0);
seq__51871_53070 = G__53091;
chunk__51872_53071 = G__53092;
count__51873_53072 = G__53093;
i__51874_53073 = G__53094;
continue;
} else {
var vec__51905_53096 = cljs.core.first(seq__51871_53086__$1);
var script_tag_53097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51905_53096,(0),null);
var script_body_53098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51905_53096,(1),null);
eval(script_body_53098);


var G__53100 = cljs.core.next(seq__51871_53086__$1);
var G__53101 = null;
var G__53102 = (0);
var G__53103 = (0);
seq__51871_53070 = G__53100;
chunk__51872_53071 = G__53101;
count__51873_53072 = G__53102;
i__51874_53073 = G__53103;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__51912){
var vec__51914 = p__51912;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51914,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51914,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__51944 = arguments.length;
switch (G__51944) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__51970 = cljs.core.seq(style_keys);
var chunk__51971 = null;
var count__51972 = (0);
var i__51973 = (0);
while(true){
if((i__51973 < count__51972)){
var it = chunk__51971.cljs$core$IIndexed$_nth$arity$2(null,i__51973);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__53126 = seq__51970;
var G__53127 = chunk__51971;
var G__53128 = count__51972;
var G__53129 = (i__51973 + (1));
seq__51970 = G__53126;
chunk__51971 = G__53127;
count__51972 = G__53128;
i__51973 = G__53129;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51970);
if(temp__5804__auto__){
var seq__51970__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51970__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51970__$1);
var G__53135 = cljs.core.chunk_rest(seq__51970__$1);
var G__53136 = c__4679__auto__;
var G__53137 = cljs.core.count(c__4679__auto__);
var G__53138 = (0);
seq__51970 = G__53135;
chunk__51971 = G__53136;
count__51972 = G__53137;
i__51973 = G__53138;
continue;
} else {
var it = cljs.core.first(seq__51970__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__53144 = cljs.core.next(seq__51970__$1);
var G__53145 = null;
var G__53146 = (0);
var G__53147 = (0);
seq__51970 = G__53144;
chunk__51971 = G__53145;
count__51972 = G__53146;
i__51973 = G__53147;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k51994,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__52017 = k51994;
var G__52017__$1 = (((G__52017 instanceof cljs.core.Keyword))?G__52017.fqn:null);
switch (G__52017__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51994,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__52025){
var vec__52031 = p__52025;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52031,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52031,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51993){
var self__ = this;
var G__51993__$1 = this;
return (new cljs.core.RecordIter((0),G__51993__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51996,other51997){
var self__ = this;
var this51996__$1 = this;
return (((!((other51997 == null)))) && ((((this51996__$1.constructor === other51997.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51996__$1.x,other51997.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51996__$1.y,other51997.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51996__$1.__extmap,other51997.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k51994){
var self__ = this;
var this__4509__auto____$1 = this;
var G__52073 = k51994;
var G__52073__$1 = (((G__52073 instanceof cljs.core.Keyword))?G__52073.fqn:null);
switch (G__52073__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k51994);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__51993){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__52074 = cljs.core.keyword_identical_QMARK_;
var expr__52075 = k__4511__auto__;
if(cljs.core.truth_((pred__52074.cljs$core$IFn$_invoke$arity$2 ? pred__52074.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__52075) : pred__52074.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__52075)))){
return (new shadow.dom.Coordinate(G__51993,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52074.cljs$core$IFn$_invoke$arity$2 ? pred__52074.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__52075) : pred__52074.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__52075)))){
return (new shadow.dom.Coordinate(self__.x,G__51993,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__51993),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__51993){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__51993,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__52000){
var extmap__4542__auto__ = (function (){var G__52129 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52000,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__52000)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52129);
} else {
return G__52129;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__52000),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__52000),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k52150,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__52161 = k52150;
var G__52161__$1 = (((G__52161 instanceof cljs.core.Keyword))?G__52161.fqn:null);
switch (G__52161__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52150,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__52168){
var vec__52170 = p__52168;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52170,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52170,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52149){
var self__ = this;
var G__52149__$1 = this;
return (new cljs.core.RecordIter((0),G__52149__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52151,other52152){
var self__ = this;
var this52151__$1 = this;
return (((!((other52152 == null)))) && ((((this52151__$1.constructor === other52152.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52151__$1.w,other52152.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52151__$1.h,other52152.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52151__$1.__extmap,other52152.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k52150){
var self__ = this;
var this__4509__auto____$1 = this;
var G__52220 = k52150;
var G__52220__$1 = (((G__52220 instanceof cljs.core.Keyword))?G__52220.fqn:null);
switch (G__52220__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k52150);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__52149){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__52223 = cljs.core.keyword_identical_QMARK_;
var expr__52224 = k__4511__auto__;
if(cljs.core.truth_((pred__52223.cljs$core$IFn$_invoke$arity$2 ? pred__52223.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__52224) : pred__52223.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__52224)))){
return (new shadow.dom.Size(G__52149,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52223.cljs$core$IFn$_invoke$arity$2 ? pred__52223.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__52224) : pred__52223.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__52224)))){
return (new shadow.dom.Size(self__.w,G__52149,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__52149),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__52149){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__52149,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__52153){
var extmap__4542__auto__ = (function (){var G__52242 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52153,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__52153)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52242);
} else {
return G__52242;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__52153),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__52153),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__53220 = (i + (1));
var G__53221 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__53220;
ret = G__53221;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52283){
var vec__52284 = p__52283;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52284,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52284,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__52295 = arguments.length;
switch (G__52295) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__53259 = ps;
var G__53260 = (i + (1));
el__$1 = G__53259;
i = G__53260;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__52373 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52373,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52373,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52373,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__52382_53278 = cljs.core.seq(props);
var chunk__52383_53279 = null;
var count__52384_53280 = (0);
var i__52385_53281 = (0);
while(true){
if((i__52385_53281 < count__52384_53280)){
var vec__52414_53283 = chunk__52383_53279.cljs$core$IIndexed$_nth$arity$2(null,i__52385_53281);
var k_53284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52414_53283,(0),null);
var v_53285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52414_53283,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_53284);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_53284),v_53285);


var G__53289 = seq__52382_53278;
var G__53290 = chunk__52383_53279;
var G__53291 = count__52384_53280;
var G__53292 = (i__52385_53281 + (1));
seq__52382_53278 = G__53289;
chunk__52383_53279 = G__53290;
count__52384_53280 = G__53291;
i__52385_53281 = G__53292;
continue;
} else {
var temp__5804__auto___53294 = cljs.core.seq(seq__52382_53278);
if(temp__5804__auto___53294){
var seq__52382_53295__$1 = temp__5804__auto___53294;
if(cljs.core.chunked_seq_QMARK_(seq__52382_53295__$1)){
var c__4679__auto___53298 = cljs.core.chunk_first(seq__52382_53295__$1);
var G__53299 = cljs.core.chunk_rest(seq__52382_53295__$1);
var G__53300 = c__4679__auto___53298;
var G__53301 = cljs.core.count(c__4679__auto___53298);
var G__53302 = (0);
seq__52382_53278 = G__53299;
chunk__52383_53279 = G__53300;
count__52384_53280 = G__53301;
i__52385_53281 = G__53302;
continue;
} else {
var vec__52419_53304 = cljs.core.first(seq__52382_53295__$1);
var k_53305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52419_53304,(0),null);
var v_53306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52419_53304,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_53305);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_53305),v_53306);


var G__53307 = cljs.core.next(seq__52382_53295__$1);
var G__53308 = null;
var G__53309 = (0);
var G__53310 = (0);
seq__52382_53278 = G__53307;
chunk__52383_53279 = G__53308;
count__52384_53280 = G__53309;
i__52385_53281 = G__53310;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__52431 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52431,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52431,(1),null);
var seq__52437_53312 = cljs.core.seq(node_children);
var chunk__52439_53313 = null;
var count__52440_53314 = (0);
var i__52441_53315 = (0);
while(true){
if((i__52441_53315 < count__52440_53314)){
var child_struct_53316 = chunk__52439_53313.cljs$core$IIndexed$_nth$arity$2(null,i__52441_53315);
if((!((child_struct_53316 == null)))){
if(typeof child_struct_53316 === 'string'){
var text_53317 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_53317),child_struct_53316].join(''));
} else {
var children_53319 = shadow.dom.svg_node(child_struct_53316);
if(cljs.core.seq_QMARK_(children_53319)){
var seq__52487_53321 = cljs.core.seq(children_53319);
var chunk__52489_53322 = null;
var count__52490_53323 = (0);
var i__52491_53324 = (0);
while(true){
if((i__52491_53324 < count__52490_53323)){
var child_53325 = chunk__52489_53322.cljs$core$IIndexed$_nth$arity$2(null,i__52491_53324);
if(cljs.core.truth_(child_53325)){
node.appendChild(child_53325);


var G__53327 = seq__52487_53321;
var G__53328 = chunk__52489_53322;
var G__53329 = count__52490_53323;
var G__53330 = (i__52491_53324 + (1));
seq__52487_53321 = G__53327;
chunk__52489_53322 = G__53328;
count__52490_53323 = G__53329;
i__52491_53324 = G__53330;
continue;
} else {
var G__53331 = seq__52487_53321;
var G__53332 = chunk__52489_53322;
var G__53333 = count__52490_53323;
var G__53334 = (i__52491_53324 + (1));
seq__52487_53321 = G__53331;
chunk__52489_53322 = G__53332;
count__52490_53323 = G__53333;
i__52491_53324 = G__53334;
continue;
}
} else {
var temp__5804__auto___53335 = cljs.core.seq(seq__52487_53321);
if(temp__5804__auto___53335){
var seq__52487_53336__$1 = temp__5804__auto___53335;
if(cljs.core.chunked_seq_QMARK_(seq__52487_53336__$1)){
var c__4679__auto___53338 = cljs.core.chunk_first(seq__52487_53336__$1);
var G__53340 = cljs.core.chunk_rest(seq__52487_53336__$1);
var G__53341 = c__4679__auto___53338;
var G__53342 = cljs.core.count(c__4679__auto___53338);
var G__53343 = (0);
seq__52487_53321 = G__53340;
chunk__52489_53322 = G__53341;
count__52490_53323 = G__53342;
i__52491_53324 = G__53343;
continue;
} else {
var child_53344 = cljs.core.first(seq__52487_53336__$1);
if(cljs.core.truth_(child_53344)){
node.appendChild(child_53344);


var G__53348 = cljs.core.next(seq__52487_53336__$1);
var G__53349 = null;
var G__53350 = (0);
var G__53351 = (0);
seq__52487_53321 = G__53348;
chunk__52489_53322 = G__53349;
count__52490_53323 = G__53350;
i__52491_53324 = G__53351;
continue;
} else {
var G__53353 = cljs.core.next(seq__52487_53336__$1);
var G__53354 = null;
var G__53355 = (0);
var G__53356 = (0);
seq__52487_53321 = G__53353;
chunk__52489_53322 = G__53354;
count__52490_53323 = G__53355;
i__52491_53324 = G__53356;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_53319);
}
}


var G__53357 = seq__52437_53312;
var G__53358 = chunk__52439_53313;
var G__53359 = count__52440_53314;
var G__53360 = (i__52441_53315 + (1));
seq__52437_53312 = G__53357;
chunk__52439_53313 = G__53358;
count__52440_53314 = G__53359;
i__52441_53315 = G__53360;
continue;
} else {
var G__53361 = seq__52437_53312;
var G__53362 = chunk__52439_53313;
var G__53363 = count__52440_53314;
var G__53364 = (i__52441_53315 + (1));
seq__52437_53312 = G__53361;
chunk__52439_53313 = G__53362;
count__52440_53314 = G__53363;
i__52441_53315 = G__53364;
continue;
}
} else {
var temp__5804__auto___53365 = cljs.core.seq(seq__52437_53312);
if(temp__5804__auto___53365){
var seq__52437_53366__$1 = temp__5804__auto___53365;
if(cljs.core.chunked_seq_QMARK_(seq__52437_53366__$1)){
var c__4679__auto___53367 = cljs.core.chunk_first(seq__52437_53366__$1);
var G__53368 = cljs.core.chunk_rest(seq__52437_53366__$1);
var G__53369 = c__4679__auto___53367;
var G__53370 = cljs.core.count(c__4679__auto___53367);
var G__53371 = (0);
seq__52437_53312 = G__53368;
chunk__52439_53313 = G__53369;
count__52440_53314 = G__53370;
i__52441_53315 = G__53371;
continue;
} else {
var child_struct_53372 = cljs.core.first(seq__52437_53366__$1);
if((!((child_struct_53372 == null)))){
if(typeof child_struct_53372 === 'string'){
var text_53373 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_53373),child_struct_53372].join(''));
} else {
var children_53374 = shadow.dom.svg_node(child_struct_53372);
if(cljs.core.seq_QMARK_(children_53374)){
var seq__52528_53377 = cljs.core.seq(children_53374);
var chunk__52530_53378 = null;
var count__52531_53379 = (0);
var i__52532_53380 = (0);
while(true){
if((i__52532_53380 < count__52531_53379)){
var child_53381 = chunk__52530_53378.cljs$core$IIndexed$_nth$arity$2(null,i__52532_53380);
if(cljs.core.truth_(child_53381)){
node.appendChild(child_53381);


var G__53382 = seq__52528_53377;
var G__53383 = chunk__52530_53378;
var G__53384 = count__52531_53379;
var G__53385 = (i__52532_53380 + (1));
seq__52528_53377 = G__53382;
chunk__52530_53378 = G__53383;
count__52531_53379 = G__53384;
i__52532_53380 = G__53385;
continue;
} else {
var G__53386 = seq__52528_53377;
var G__53387 = chunk__52530_53378;
var G__53388 = count__52531_53379;
var G__53389 = (i__52532_53380 + (1));
seq__52528_53377 = G__53386;
chunk__52530_53378 = G__53387;
count__52531_53379 = G__53388;
i__52532_53380 = G__53389;
continue;
}
} else {
var temp__5804__auto___53392__$1 = cljs.core.seq(seq__52528_53377);
if(temp__5804__auto___53392__$1){
var seq__52528_53393__$1 = temp__5804__auto___53392__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52528_53393__$1)){
var c__4679__auto___53394 = cljs.core.chunk_first(seq__52528_53393__$1);
var G__53395 = cljs.core.chunk_rest(seq__52528_53393__$1);
var G__53396 = c__4679__auto___53394;
var G__53397 = cljs.core.count(c__4679__auto___53394);
var G__53398 = (0);
seq__52528_53377 = G__53395;
chunk__52530_53378 = G__53396;
count__52531_53379 = G__53397;
i__52532_53380 = G__53398;
continue;
} else {
var child_53399 = cljs.core.first(seq__52528_53393__$1);
if(cljs.core.truth_(child_53399)){
node.appendChild(child_53399);


var G__53400 = cljs.core.next(seq__52528_53393__$1);
var G__53401 = null;
var G__53402 = (0);
var G__53403 = (0);
seq__52528_53377 = G__53400;
chunk__52530_53378 = G__53401;
count__52531_53379 = G__53402;
i__52532_53380 = G__53403;
continue;
} else {
var G__53404 = cljs.core.next(seq__52528_53393__$1);
var G__53405 = null;
var G__53406 = (0);
var G__53407 = (0);
seq__52528_53377 = G__53404;
chunk__52530_53378 = G__53405;
count__52531_53379 = G__53406;
i__52532_53380 = G__53407;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_53374);
}
}


var G__53408 = cljs.core.next(seq__52437_53366__$1);
var G__53409 = null;
var G__53410 = (0);
var G__53411 = (0);
seq__52437_53312 = G__53408;
chunk__52439_53313 = G__53409;
count__52440_53314 = G__53410;
i__52441_53315 = G__53411;
continue;
} else {
var G__53415 = cljs.core.next(seq__52437_53366__$1);
var G__53416 = null;
var G__53417 = (0);
var G__53418 = (0);
seq__52437_53312 = G__53415;
chunk__52439_53313 = G__53416;
count__52440_53314 = G__53417;
i__52441_53315 = G__53418;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___53428 = arguments.length;
var i__4865__auto___53429 = (0);
while(true){
if((i__4865__auto___53429 < len__4864__auto___53428)){
args__4870__auto__.push((arguments[i__4865__auto___53429]));

var G__53430 = (i__4865__auto___53429 + (1));
i__4865__auto___53429 = G__53430;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq52567){
var G__52568 = cljs.core.first(seq52567);
var seq52567__$1 = cljs.core.next(seq52567);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52568,seq52567__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__52607 = arguments.length;
switch (G__52607) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__44084__auto___53442 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44085__auto__ = (function (){var switch__43720__auto__ = (function (state_52632){
var state_val_52633 = (state_52632[(1)]);
if((state_val_52633 === (1))){
var state_52632__$1 = state_52632;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52632__$1,(2),once_or_cleanup);
} else {
if((state_val_52633 === (2))){
var inst_52629 = (state_52632[(2)]);
var inst_52630 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_52632__$1 = (function (){var statearr_52638 = state_52632;
(statearr_52638[(7)] = inst_52629);

return statearr_52638;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52632__$1,inst_52630);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__43721__auto__ = null;
var shadow$dom$state_machine__43721__auto____0 = (function (){
var statearr_52641 = [null,null,null,null,null,null,null,null];
(statearr_52641[(0)] = shadow$dom$state_machine__43721__auto__);

(statearr_52641[(1)] = (1));

return statearr_52641;
});
var shadow$dom$state_machine__43721__auto____1 = (function (state_52632){
while(true){
var ret_value__43722__auto__ = (function (){try{while(true){
var result__43723__auto__ = switch__43720__auto__(state_52632);
if(cljs.core.keyword_identical_QMARK_(result__43723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43723__auto__;
}
break;
}
}catch (e52643){var ex__43724__auto__ = e52643;
var statearr_52644_53449 = state_52632;
(statearr_52644_53449[(2)] = ex__43724__auto__);


if(cljs.core.seq((state_52632[(4)]))){
var statearr_52647_53453 = state_52632;
(statearr_52647_53453[(1)] = cljs.core.first((state_52632[(4)])));

} else {
throw ex__43724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53454 = state_52632;
state_52632 = G__53454;
continue;
} else {
return ret_value__43722__auto__;
}
break;
}
});
shadow$dom$state_machine__43721__auto__ = function(state_52632){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__43721__auto____0.call(this);
case 1:
return shadow$dom$state_machine__43721__auto____1.call(this,state_52632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__43721__auto____0;
shadow$dom$state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__43721__auto____1;
return shadow$dom$state_machine__43721__auto__;
})()
})();
var state__44086__auto__ = (function (){var statearr_52653 = f__44085__auto__();
(statearr_52653[(6)] = c__44084__auto___53442);

return statearr_52653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44086__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
