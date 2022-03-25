goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_50991 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_50991(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_50997 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_50997(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__49258 = coll;
var G__49259 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__49258,G__49259) : shadow.dom.lazy_native_coll_seq.call(null,G__49258,G__49259));
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
var G__49322 = arguments.length;
switch (G__49322) {
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
var G__49341 = arguments.length;
switch (G__49341) {
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
var G__49358 = arguments.length;
switch (G__49358) {
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
var G__49396 = arguments.length;
switch (G__49396) {
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
var G__49431 = arguments.length;
switch (G__49431) {
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
var G__49450 = arguments.length;
switch (G__49450) {
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
}catch (e49455){if((e49455 instanceof Object)){
var e = e49455;
return console.log("didnt support attachEvent",el,e);
} else {
throw e49455;

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
var seq__49479 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__49480 = null;
var count__49481 = (0);
var i__49482 = (0);
while(true){
if((i__49482 < count__49481)){
var el = chunk__49480.cljs$core$IIndexed$_nth$arity$2(null,i__49482);
var handler_51034__$1 = ((function (seq__49479,chunk__49480,count__49481,i__49482,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__49479,chunk__49480,count__49481,i__49482,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_51034__$1);


var G__51038 = seq__49479;
var G__51039 = chunk__49480;
var G__51040 = count__49481;
var G__51041 = (i__49482 + (1));
seq__49479 = G__51038;
chunk__49480 = G__51039;
count__49481 = G__51040;
i__49482 = G__51041;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__49479);
if(temp__5804__auto__){
var seq__49479__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49479__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49479__$1);
var G__51050 = cljs.core.chunk_rest(seq__49479__$1);
var G__51051 = c__4679__auto__;
var G__51052 = cljs.core.count(c__4679__auto__);
var G__51053 = (0);
seq__49479 = G__51050;
chunk__49480 = G__51051;
count__49481 = G__51052;
i__49482 = G__51053;
continue;
} else {
var el = cljs.core.first(seq__49479__$1);
var handler_51054__$1 = ((function (seq__49479,chunk__49480,count__49481,i__49482,el,seq__49479__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__49479,chunk__49480,count__49481,i__49482,el,seq__49479__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_51054__$1);


var G__51061 = cljs.core.next(seq__49479__$1);
var G__51062 = null;
var G__51063 = (0);
var G__51064 = (0);
seq__49479 = G__51061;
chunk__49480 = G__51062;
count__49481 = G__51063;
i__49482 = G__51064;
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
var G__49531 = arguments.length;
switch (G__49531) {
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
var seq__49552 = cljs.core.seq(events);
var chunk__49553 = null;
var count__49554 = (0);
var i__49555 = (0);
while(true){
if((i__49555 < count__49554)){
var vec__49579 = chunk__49553.cljs$core$IIndexed$_nth$arity$2(null,i__49555);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49579,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49579,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51096 = seq__49552;
var G__51097 = chunk__49553;
var G__51098 = count__49554;
var G__51099 = (i__49555 + (1));
seq__49552 = G__51096;
chunk__49553 = G__51097;
count__49554 = G__51098;
i__49555 = G__51099;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__49552);
if(temp__5804__auto__){
var seq__49552__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49552__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49552__$1);
var G__51102 = cljs.core.chunk_rest(seq__49552__$1);
var G__51103 = c__4679__auto__;
var G__51104 = cljs.core.count(c__4679__auto__);
var G__51105 = (0);
seq__49552 = G__51102;
chunk__49553 = G__51103;
count__49554 = G__51104;
i__49555 = G__51105;
continue;
} else {
var vec__49595 = cljs.core.first(seq__49552__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49595,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49595,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51113 = cljs.core.next(seq__49552__$1);
var G__51114 = null;
var G__51115 = (0);
var G__51116 = (0);
seq__49552 = G__51113;
chunk__49553 = G__51114;
count__49554 = G__51115;
i__49555 = G__51116;
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
var seq__49604 = cljs.core.seq(styles);
var chunk__49605 = null;
var count__49606 = (0);
var i__49607 = (0);
while(true){
if((i__49607 < count__49606)){
var vec__49631 = chunk__49605.cljs$core$IIndexed$_nth$arity$2(null,i__49607);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49631,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49631,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__51117 = seq__49604;
var G__51118 = chunk__49605;
var G__51119 = count__49606;
var G__51120 = (i__49607 + (1));
seq__49604 = G__51117;
chunk__49605 = G__51118;
count__49606 = G__51119;
i__49607 = G__51120;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__49604);
if(temp__5804__auto__){
var seq__49604__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49604__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49604__$1);
var G__51121 = cljs.core.chunk_rest(seq__49604__$1);
var G__51122 = c__4679__auto__;
var G__51123 = cljs.core.count(c__4679__auto__);
var G__51124 = (0);
seq__49604 = G__51121;
chunk__49605 = G__51122;
count__49606 = G__51123;
i__49607 = G__51124;
continue;
} else {
var vec__49646 = cljs.core.first(seq__49604__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49646,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49646,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__51125 = cljs.core.next(seq__49604__$1);
var G__51126 = null;
var G__51127 = (0);
var G__51128 = (0);
seq__49604 = G__51125;
chunk__49605 = G__51126;
count__49606 = G__51127;
i__49607 = G__51128;
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
var G__49654_51129 = key;
var G__49654_51130__$1 = (((G__49654_51129 instanceof cljs.core.Keyword))?G__49654_51129.fqn:null);
switch (G__49654_51130__$1) {
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
var ks_51134 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_51134,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_51134,"aria-");
}
})())){
el.setAttribute(ks_51134,value);
} else {
(el[ks_51134] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__49690){
var map__49691 = p__49690;
var map__49691__$1 = cljs.core.__destructure_map(map__49691);
var props = map__49691__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49691__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__49694 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49694,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49694,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49694,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__49702 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__49702,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__49702;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__49714 = arguments.length;
switch (G__49714) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__49733){
var vec__49734 = p__49733;
var seq__49735 = cljs.core.seq(vec__49734);
var first__49736 = cljs.core.first(seq__49735);
var seq__49735__$1 = cljs.core.next(seq__49735);
var nn = first__49736;
var first__49736__$1 = cljs.core.first(seq__49735__$1);
var seq__49735__$2 = cljs.core.next(seq__49735__$1);
var np = first__49736__$1;
var nc = seq__49735__$2;
var node = vec__49734;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49745 = nn;
var G__49746 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__49745,G__49746) : create_fn.call(null,G__49745,G__49746));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49748 = nn;
var G__49749 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__49748,G__49749) : create_fn.call(null,G__49748,G__49749));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__49750 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49750,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49750,(1),null);
var seq__49755_51155 = cljs.core.seq(node_children);
var chunk__49756_51156 = null;
var count__49757_51157 = (0);
var i__49758_51158 = (0);
while(true){
if((i__49758_51158 < count__49757_51157)){
var child_struct_51159 = chunk__49756_51156.cljs$core$IIndexed$_nth$arity$2(null,i__49758_51158);
var children_51160 = shadow.dom.dom_node(child_struct_51159);
if(cljs.core.seq_QMARK_(children_51160)){
var seq__49835_51161 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_51160));
var chunk__49837_51162 = null;
var count__49838_51163 = (0);
var i__49839_51164 = (0);
while(true){
if((i__49839_51164 < count__49838_51163)){
var child_51165 = chunk__49837_51162.cljs$core$IIndexed$_nth$arity$2(null,i__49839_51164);
if(cljs.core.truth_(child_51165)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51165);


var G__51168 = seq__49835_51161;
var G__51169 = chunk__49837_51162;
var G__51170 = count__49838_51163;
var G__51171 = (i__49839_51164 + (1));
seq__49835_51161 = G__51168;
chunk__49837_51162 = G__51169;
count__49838_51163 = G__51170;
i__49839_51164 = G__51171;
continue;
} else {
var G__51172 = seq__49835_51161;
var G__51173 = chunk__49837_51162;
var G__51174 = count__49838_51163;
var G__51175 = (i__49839_51164 + (1));
seq__49835_51161 = G__51172;
chunk__49837_51162 = G__51173;
count__49838_51163 = G__51174;
i__49839_51164 = G__51175;
continue;
}
} else {
var temp__5804__auto___51176 = cljs.core.seq(seq__49835_51161);
if(temp__5804__auto___51176){
var seq__49835_51177__$1 = temp__5804__auto___51176;
if(cljs.core.chunked_seq_QMARK_(seq__49835_51177__$1)){
var c__4679__auto___51180 = cljs.core.chunk_first(seq__49835_51177__$1);
var G__51181 = cljs.core.chunk_rest(seq__49835_51177__$1);
var G__51182 = c__4679__auto___51180;
var G__51183 = cljs.core.count(c__4679__auto___51180);
var G__51184 = (0);
seq__49835_51161 = G__51181;
chunk__49837_51162 = G__51182;
count__49838_51163 = G__51183;
i__49839_51164 = G__51184;
continue;
} else {
var child_51186 = cljs.core.first(seq__49835_51177__$1);
if(cljs.core.truth_(child_51186)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51186);


var G__51187 = cljs.core.next(seq__49835_51177__$1);
var G__51188 = null;
var G__51189 = (0);
var G__51190 = (0);
seq__49835_51161 = G__51187;
chunk__49837_51162 = G__51188;
count__49838_51163 = G__51189;
i__49839_51164 = G__51190;
continue;
} else {
var G__51192 = cljs.core.next(seq__49835_51177__$1);
var G__51193 = null;
var G__51194 = (0);
var G__51195 = (0);
seq__49835_51161 = G__51192;
chunk__49837_51162 = G__51193;
count__49838_51163 = G__51194;
i__49839_51164 = G__51195;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_51160);
}


var G__51196 = seq__49755_51155;
var G__51197 = chunk__49756_51156;
var G__51198 = count__49757_51157;
var G__51199 = (i__49758_51158 + (1));
seq__49755_51155 = G__51196;
chunk__49756_51156 = G__51197;
count__49757_51157 = G__51198;
i__49758_51158 = G__51199;
continue;
} else {
var temp__5804__auto___51200 = cljs.core.seq(seq__49755_51155);
if(temp__5804__auto___51200){
var seq__49755_51202__$1 = temp__5804__auto___51200;
if(cljs.core.chunked_seq_QMARK_(seq__49755_51202__$1)){
var c__4679__auto___51203 = cljs.core.chunk_first(seq__49755_51202__$1);
var G__51204 = cljs.core.chunk_rest(seq__49755_51202__$1);
var G__51205 = c__4679__auto___51203;
var G__51206 = cljs.core.count(c__4679__auto___51203);
var G__51207 = (0);
seq__49755_51155 = G__51204;
chunk__49756_51156 = G__51205;
count__49757_51157 = G__51206;
i__49758_51158 = G__51207;
continue;
} else {
var child_struct_51208 = cljs.core.first(seq__49755_51202__$1);
var children_51209 = shadow.dom.dom_node(child_struct_51208);
if(cljs.core.seq_QMARK_(children_51209)){
var seq__49855_51210 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_51209));
var chunk__49857_51211 = null;
var count__49858_51212 = (0);
var i__49859_51213 = (0);
while(true){
if((i__49859_51213 < count__49858_51212)){
var child_51214 = chunk__49857_51211.cljs$core$IIndexed$_nth$arity$2(null,i__49859_51213);
if(cljs.core.truth_(child_51214)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51214);


var G__51216 = seq__49855_51210;
var G__51217 = chunk__49857_51211;
var G__51218 = count__49858_51212;
var G__51219 = (i__49859_51213 + (1));
seq__49855_51210 = G__51216;
chunk__49857_51211 = G__51217;
count__49858_51212 = G__51218;
i__49859_51213 = G__51219;
continue;
} else {
var G__51220 = seq__49855_51210;
var G__51221 = chunk__49857_51211;
var G__51222 = count__49858_51212;
var G__51223 = (i__49859_51213 + (1));
seq__49855_51210 = G__51220;
chunk__49857_51211 = G__51221;
count__49858_51212 = G__51222;
i__49859_51213 = G__51223;
continue;
}
} else {
var temp__5804__auto___51224__$1 = cljs.core.seq(seq__49855_51210);
if(temp__5804__auto___51224__$1){
var seq__49855_51225__$1 = temp__5804__auto___51224__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49855_51225__$1)){
var c__4679__auto___51226 = cljs.core.chunk_first(seq__49855_51225__$1);
var G__51227 = cljs.core.chunk_rest(seq__49855_51225__$1);
var G__51228 = c__4679__auto___51226;
var G__51229 = cljs.core.count(c__4679__auto___51226);
var G__51230 = (0);
seq__49855_51210 = G__51227;
chunk__49857_51211 = G__51228;
count__49858_51212 = G__51229;
i__49859_51213 = G__51230;
continue;
} else {
var child_51231 = cljs.core.first(seq__49855_51225__$1);
if(cljs.core.truth_(child_51231)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51231);


var G__51233 = cljs.core.next(seq__49855_51225__$1);
var G__51234 = null;
var G__51235 = (0);
var G__51236 = (0);
seq__49855_51210 = G__51233;
chunk__49857_51211 = G__51234;
count__49858_51212 = G__51235;
i__49859_51213 = G__51236;
continue;
} else {
var G__51238 = cljs.core.next(seq__49855_51225__$1);
var G__51239 = null;
var G__51240 = (0);
var G__51241 = (0);
seq__49855_51210 = G__51238;
chunk__49857_51211 = G__51239;
count__49858_51212 = G__51240;
i__49859_51213 = G__51241;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_51209);
}


var G__51242 = cljs.core.next(seq__49755_51202__$1);
var G__51243 = null;
var G__51244 = (0);
var G__51245 = (0);
seq__49755_51155 = G__51242;
chunk__49756_51156 = G__51243;
count__49757_51157 = G__51244;
i__49758_51158 = G__51245;
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
var seq__49908 = cljs.core.seq(node);
var chunk__49909 = null;
var count__49910 = (0);
var i__49911 = (0);
while(true){
if((i__49911 < count__49910)){
var n = chunk__49909.cljs$core$IIndexed$_nth$arity$2(null,i__49911);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__51253 = seq__49908;
var G__51254 = chunk__49909;
var G__51255 = count__49910;
var G__51256 = (i__49911 + (1));
seq__49908 = G__51253;
chunk__49909 = G__51254;
count__49910 = G__51255;
i__49911 = G__51256;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__49908);
if(temp__5804__auto__){
var seq__49908__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49908__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49908__$1);
var G__51257 = cljs.core.chunk_rest(seq__49908__$1);
var G__51258 = c__4679__auto__;
var G__51259 = cljs.core.count(c__4679__auto__);
var G__51260 = (0);
seq__49908 = G__51257;
chunk__49909 = G__51258;
count__49910 = G__51259;
i__49911 = G__51260;
continue;
} else {
var n = cljs.core.first(seq__49908__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__51261 = cljs.core.next(seq__49908__$1);
var G__51262 = null;
var G__51263 = (0);
var G__51264 = (0);
seq__49908 = G__51261;
chunk__49909 = G__51262;
count__49910 = G__51263;
i__49911 = G__51264;
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
var G__49925 = arguments.length;
switch (G__49925) {
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
var G__49939 = arguments.length;
switch (G__49939) {
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
var G__49958 = arguments.length;
switch (G__49958) {
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
var len__4864__auto___51279 = arguments.length;
var i__4865__auto___51280 = (0);
while(true){
if((i__4865__auto___51280 < len__4864__auto___51279)){
args__4870__auto__.push((arguments[i__4865__auto___51280]));

var G__51282 = (i__4865__auto___51280 + (1));
i__4865__auto___51280 = G__51282;
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
var seq__50005_51285 = cljs.core.seq(nodes);
var chunk__50006_51286 = null;
var count__50007_51287 = (0);
var i__50008_51288 = (0);
while(true){
if((i__50008_51288 < count__50007_51287)){
var node_51289 = chunk__50006_51286.cljs$core$IIndexed$_nth$arity$2(null,i__50008_51288);
fragment.appendChild(shadow.dom._to_dom(node_51289));


var G__51290 = seq__50005_51285;
var G__51291 = chunk__50006_51286;
var G__51292 = count__50007_51287;
var G__51293 = (i__50008_51288 + (1));
seq__50005_51285 = G__51290;
chunk__50006_51286 = G__51291;
count__50007_51287 = G__51292;
i__50008_51288 = G__51293;
continue;
} else {
var temp__5804__auto___51294 = cljs.core.seq(seq__50005_51285);
if(temp__5804__auto___51294){
var seq__50005_51295__$1 = temp__5804__auto___51294;
if(cljs.core.chunked_seq_QMARK_(seq__50005_51295__$1)){
var c__4679__auto___51297 = cljs.core.chunk_first(seq__50005_51295__$1);
var G__51298 = cljs.core.chunk_rest(seq__50005_51295__$1);
var G__51299 = c__4679__auto___51297;
var G__51300 = cljs.core.count(c__4679__auto___51297);
var G__51301 = (0);
seq__50005_51285 = G__51298;
chunk__50006_51286 = G__51299;
count__50007_51287 = G__51300;
i__50008_51288 = G__51301;
continue;
} else {
var node_51302 = cljs.core.first(seq__50005_51295__$1);
fragment.appendChild(shadow.dom._to_dom(node_51302));


var G__51304 = cljs.core.next(seq__50005_51295__$1);
var G__51305 = null;
var G__51306 = (0);
var G__51307 = (0);
seq__50005_51285 = G__51304;
chunk__50006_51286 = G__51305;
count__50007_51287 = G__51306;
i__50008_51288 = G__51307;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq49997){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49997));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__50023_51308 = cljs.core.seq(scripts);
var chunk__50024_51309 = null;
var count__50025_51310 = (0);
var i__50026_51311 = (0);
while(true){
if((i__50026_51311 < count__50025_51310)){
var vec__50047_51312 = chunk__50024_51309.cljs$core$IIndexed$_nth$arity$2(null,i__50026_51311);
var script_tag_51313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50047_51312,(0),null);
var script_body_51314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50047_51312,(1),null);
eval(script_body_51314);


var G__51315 = seq__50023_51308;
var G__51316 = chunk__50024_51309;
var G__51317 = count__50025_51310;
var G__51318 = (i__50026_51311 + (1));
seq__50023_51308 = G__51315;
chunk__50024_51309 = G__51316;
count__50025_51310 = G__51317;
i__50026_51311 = G__51318;
continue;
} else {
var temp__5804__auto___51320 = cljs.core.seq(seq__50023_51308);
if(temp__5804__auto___51320){
var seq__50023_51323__$1 = temp__5804__auto___51320;
if(cljs.core.chunked_seq_QMARK_(seq__50023_51323__$1)){
var c__4679__auto___51324 = cljs.core.chunk_first(seq__50023_51323__$1);
var G__51326 = cljs.core.chunk_rest(seq__50023_51323__$1);
var G__51327 = c__4679__auto___51324;
var G__51328 = cljs.core.count(c__4679__auto___51324);
var G__51329 = (0);
seq__50023_51308 = G__51326;
chunk__50024_51309 = G__51327;
count__50025_51310 = G__51328;
i__50026_51311 = G__51329;
continue;
} else {
var vec__50064_51330 = cljs.core.first(seq__50023_51323__$1);
var script_tag_51331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50064_51330,(0),null);
var script_body_51332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50064_51330,(1),null);
eval(script_body_51332);


var G__51334 = cljs.core.next(seq__50023_51323__$1);
var G__51335 = null;
var G__51336 = (0);
var G__51337 = (0);
seq__50023_51308 = G__51334;
chunk__50024_51309 = G__51335;
count__50025_51310 = G__51336;
i__50026_51311 = G__51337;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__50067){
var vec__50068 = p__50067;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50068,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50068,(1),null);
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
var G__50086 = arguments.length;
switch (G__50086) {
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
var seq__50133 = cljs.core.seq(style_keys);
var chunk__50134 = null;
var count__50135 = (0);
var i__50136 = (0);
while(true){
if((i__50136 < count__50135)){
var it = chunk__50134.cljs$core$IIndexed$_nth$arity$2(null,i__50136);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__51346 = seq__50133;
var G__51347 = chunk__50134;
var G__51348 = count__50135;
var G__51349 = (i__50136 + (1));
seq__50133 = G__51346;
chunk__50134 = G__51347;
count__50135 = G__51348;
i__50136 = G__51349;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__50133);
if(temp__5804__auto__){
var seq__50133__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50133__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__50133__$1);
var G__51350 = cljs.core.chunk_rest(seq__50133__$1);
var G__51351 = c__4679__auto__;
var G__51352 = cljs.core.count(c__4679__auto__);
var G__51353 = (0);
seq__50133 = G__51350;
chunk__50134 = G__51351;
count__50135 = G__51352;
i__50136 = G__51353;
continue;
} else {
var it = cljs.core.first(seq__50133__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__51355 = cljs.core.next(seq__50133__$1);
var G__51356 = null;
var G__51357 = (0);
var G__51358 = (0);
seq__50133 = G__51355;
chunk__50134 = G__51356;
count__50135 = G__51357;
i__50136 = G__51358;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k50168,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__50196 = k50168;
var G__50196__$1 = (((G__50196 instanceof cljs.core.Keyword))?G__50196.fqn:null);
switch (G__50196__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50168,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__50202){
var vec__50203 = p__50202;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50203,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50203,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50167){
var self__ = this;
var G__50167__$1 = this;
return (new cljs.core.RecordIter((0),G__50167__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50169,other50170){
var self__ = this;
var this50169__$1 = this;
return (((!((other50170 == null)))) && ((((this50169__$1.constructor === other50170.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50169__$1.x,other50170.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50169__$1.y,other50170.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50169__$1.__extmap,other50170.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k50168){
var self__ = this;
var this__4509__auto____$1 = this;
var G__50286 = k50168;
var G__50286__$1 = (((G__50286 instanceof cljs.core.Keyword))?G__50286.fqn:null);
switch (G__50286__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50168);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__50167){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__50302 = cljs.core.keyword_identical_QMARK_;
var expr__50303 = k__4511__auto__;
if(cljs.core.truth_((pred__50302.cljs$core$IFn$_invoke$arity$2 ? pred__50302.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__50303) : pred__50302.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__50303)))){
return (new shadow.dom.Coordinate(G__50167,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50302.cljs$core$IFn$_invoke$arity$2 ? pred__50302.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__50303) : pred__50302.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__50303)))){
return (new shadow.dom.Coordinate(self__.x,G__50167,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__50167),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__50167){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__50167,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__50181){
var extmap__4542__auto__ = (function (){var G__50327 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50181,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__50181)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50327);
} else {
return G__50327;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__50181),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__50181),null,cljs.core.not_empty(extmap__4542__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k50377,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__50390 = k50377;
var G__50390__$1 = (((G__50390 instanceof cljs.core.Keyword))?G__50390.fqn:null);
switch (G__50390__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50377,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__50395){
var vec__50396 = p__50395;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50396,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50396,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50376){
var self__ = this;
var G__50376__$1 = this;
return (new cljs.core.RecordIter((0),G__50376__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50378,other50379){
var self__ = this;
var this50378__$1 = this;
return (((!((other50379 == null)))) && ((((this50378__$1.constructor === other50379.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50378__$1.w,other50379.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50378__$1.h,other50379.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50378__$1.__extmap,other50379.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k50377){
var self__ = this;
var this__4509__auto____$1 = this;
var G__50465 = k50377;
var G__50465__$1 = (((G__50465 instanceof cljs.core.Keyword))?G__50465.fqn:null);
switch (G__50465__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50377);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__50376){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__50472 = cljs.core.keyword_identical_QMARK_;
var expr__50473 = k__4511__auto__;
if(cljs.core.truth_((pred__50472.cljs$core$IFn$_invoke$arity$2 ? pred__50472.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__50473) : pred__50472.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__50473)))){
return (new shadow.dom.Size(G__50376,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50472.cljs$core$IFn$_invoke$arity$2 ? pred__50472.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__50473) : pred__50472.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__50473)))){
return (new shadow.dom.Size(self__.w,G__50376,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__50376),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__50376){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__50376,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__50382){
var extmap__4542__auto__ = (function (){var G__50501 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50382,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__50382)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50501);
} else {
return G__50501;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__50382),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__50382),null,cljs.core.not_empty(extmap__4542__auto__),null));
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
var G__51405 = (i + (1));
var G__51406 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__51405;
ret = G__51406;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50540){
var vec__50541 = p__50540;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50541,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50541,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__50562 = arguments.length;
switch (G__50562) {
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
var G__51418 = ps;
var G__51419 = (i + (1));
el__$1 = G__51418;
i = G__51419;
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
var vec__50676 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50676,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50676,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50676,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__50688_51421 = cljs.core.seq(props);
var chunk__50689_51422 = null;
var count__50690_51423 = (0);
var i__50691_51424 = (0);
while(true){
if((i__50691_51424 < count__50690_51423)){
var vec__50725_51425 = chunk__50689_51422.cljs$core$IIndexed$_nth$arity$2(null,i__50691_51424);
var k_51426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50725_51425,(0),null);
var v_51427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50725_51425,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_51426);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_51426),v_51427);


var G__51431 = seq__50688_51421;
var G__51432 = chunk__50689_51422;
var G__51433 = count__50690_51423;
var G__51434 = (i__50691_51424 + (1));
seq__50688_51421 = G__51431;
chunk__50689_51422 = G__51432;
count__50690_51423 = G__51433;
i__50691_51424 = G__51434;
continue;
} else {
var temp__5804__auto___51435 = cljs.core.seq(seq__50688_51421);
if(temp__5804__auto___51435){
var seq__50688_51436__$1 = temp__5804__auto___51435;
if(cljs.core.chunked_seq_QMARK_(seq__50688_51436__$1)){
var c__4679__auto___51437 = cljs.core.chunk_first(seq__50688_51436__$1);
var G__51438 = cljs.core.chunk_rest(seq__50688_51436__$1);
var G__51439 = c__4679__auto___51437;
var G__51440 = cljs.core.count(c__4679__auto___51437);
var G__51441 = (0);
seq__50688_51421 = G__51438;
chunk__50689_51422 = G__51439;
count__50690_51423 = G__51440;
i__50691_51424 = G__51441;
continue;
} else {
var vec__50742_51442 = cljs.core.first(seq__50688_51436__$1);
var k_51443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50742_51442,(0),null);
var v_51444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50742_51442,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_51443);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_51443),v_51444);


var G__51446 = cljs.core.next(seq__50688_51436__$1);
var G__51447 = null;
var G__51448 = (0);
var G__51449 = (0);
seq__50688_51421 = G__51446;
chunk__50689_51422 = G__51447;
count__50690_51423 = G__51448;
i__50691_51424 = G__51449;
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
var vec__50772 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50772,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50772,(1),null);
var seq__50776_51456 = cljs.core.seq(node_children);
var chunk__50778_51457 = null;
var count__50779_51458 = (0);
var i__50780_51459 = (0);
while(true){
if((i__50780_51459 < count__50779_51458)){
var child_struct_51460 = chunk__50778_51457.cljs$core$IIndexed$_nth$arity$2(null,i__50780_51459);
if((!((child_struct_51460 == null)))){
if(typeof child_struct_51460 === 'string'){
var text_51461 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_51461),child_struct_51460].join(''));
} else {
var children_51462 = shadow.dom.svg_node(child_struct_51460);
if(cljs.core.seq_QMARK_(children_51462)){
var seq__50843_51463 = cljs.core.seq(children_51462);
var chunk__50845_51464 = null;
var count__50846_51465 = (0);
var i__50847_51466 = (0);
while(true){
if((i__50847_51466 < count__50846_51465)){
var child_51467 = chunk__50845_51464.cljs$core$IIndexed$_nth$arity$2(null,i__50847_51466);
if(cljs.core.truth_(child_51467)){
node.appendChild(child_51467);


var G__51469 = seq__50843_51463;
var G__51470 = chunk__50845_51464;
var G__51471 = count__50846_51465;
var G__51472 = (i__50847_51466 + (1));
seq__50843_51463 = G__51469;
chunk__50845_51464 = G__51470;
count__50846_51465 = G__51471;
i__50847_51466 = G__51472;
continue;
} else {
var G__51476 = seq__50843_51463;
var G__51477 = chunk__50845_51464;
var G__51478 = count__50846_51465;
var G__51479 = (i__50847_51466 + (1));
seq__50843_51463 = G__51476;
chunk__50845_51464 = G__51477;
count__50846_51465 = G__51478;
i__50847_51466 = G__51479;
continue;
}
} else {
var temp__5804__auto___51480 = cljs.core.seq(seq__50843_51463);
if(temp__5804__auto___51480){
var seq__50843_51481__$1 = temp__5804__auto___51480;
if(cljs.core.chunked_seq_QMARK_(seq__50843_51481__$1)){
var c__4679__auto___51482 = cljs.core.chunk_first(seq__50843_51481__$1);
var G__51483 = cljs.core.chunk_rest(seq__50843_51481__$1);
var G__51484 = c__4679__auto___51482;
var G__51485 = cljs.core.count(c__4679__auto___51482);
var G__51486 = (0);
seq__50843_51463 = G__51483;
chunk__50845_51464 = G__51484;
count__50846_51465 = G__51485;
i__50847_51466 = G__51486;
continue;
} else {
var child_51487 = cljs.core.first(seq__50843_51481__$1);
if(cljs.core.truth_(child_51487)){
node.appendChild(child_51487);


var G__51488 = cljs.core.next(seq__50843_51481__$1);
var G__51489 = null;
var G__51490 = (0);
var G__51491 = (0);
seq__50843_51463 = G__51488;
chunk__50845_51464 = G__51489;
count__50846_51465 = G__51490;
i__50847_51466 = G__51491;
continue;
} else {
var G__51492 = cljs.core.next(seq__50843_51481__$1);
var G__51493 = null;
var G__51494 = (0);
var G__51495 = (0);
seq__50843_51463 = G__51492;
chunk__50845_51464 = G__51493;
count__50846_51465 = G__51494;
i__50847_51466 = G__51495;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_51462);
}
}


var G__51497 = seq__50776_51456;
var G__51498 = chunk__50778_51457;
var G__51499 = count__50779_51458;
var G__51500 = (i__50780_51459 + (1));
seq__50776_51456 = G__51497;
chunk__50778_51457 = G__51498;
count__50779_51458 = G__51499;
i__50780_51459 = G__51500;
continue;
} else {
var G__51504 = seq__50776_51456;
var G__51505 = chunk__50778_51457;
var G__51506 = count__50779_51458;
var G__51507 = (i__50780_51459 + (1));
seq__50776_51456 = G__51504;
chunk__50778_51457 = G__51505;
count__50779_51458 = G__51506;
i__50780_51459 = G__51507;
continue;
}
} else {
var temp__5804__auto___51508 = cljs.core.seq(seq__50776_51456);
if(temp__5804__auto___51508){
var seq__50776_51509__$1 = temp__5804__auto___51508;
if(cljs.core.chunked_seq_QMARK_(seq__50776_51509__$1)){
var c__4679__auto___51510 = cljs.core.chunk_first(seq__50776_51509__$1);
var G__51511 = cljs.core.chunk_rest(seq__50776_51509__$1);
var G__51512 = c__4679__auto___51510;
var G__51513 = cljs.core.count(c__4679__auto___51510);
var G__51514 = (0);
seq__50776_51456 = G__51511;
chunk__50778_51457 = G__51512;
count__50779_51458 = G__51513;
i__50780_51459 = G__51514;
continue;
} else {
var child_struct_51515 = cljs.core.first(seq__50776_51509__$1);
if((!((child_struct_51515 == null)))){
if(typeof child_struct_51515 === 'string'){
var text_51516 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_51516),child_struct_51515].join(''));
} else {
var children_51517 = shadow.dom.svg_node(child_struct_51515);
if(cljs.core.seq_QMARK_(children_51517)){
var seq__50861_51518 = cljs.core.seq(children_51517);
var chunk__50863_51519 = null;
var count__50864_51520 = (0);
var i__50865_51521 = (0);
while(true){
if((i__50865_51521 < count__50864_51520)){
var child_51522 = chunk__50863_51519.cljs$core$IIndexed$_nth$arity$2(null,i__50865_51521);
if(cljs.core.truth_(child_51522)){
node.appendChild(child_51522);


var G__51523 = seq__50861_51518;
var G__51524 = chunk__50863_51519;
var G__51525 = count__50864_51520;
var G__51526 = (i__50865_51521 + (1));
seq__50861_51518 = G__51523;
chunk__50863_51519 = G__51524;
count__50864_51520 = G__51525;
i__50865_51521 = G__51526;
continue;
} else {
var G__51527 = seq__50861_51518;
var G__51528 = chunk__50863_51519;
var G__51529 = count__50864_51520;
var G__51530 = (i__50865_51521 + (1));
seq__50861_51518 = G__51527;
chunk__50863_51519 = G__51528;
count__50864_51520 = G__51529;
i__50865_51521 = G__51530;
continue;
}
} else {
var temp__5804__auto___51531__$1 = cljs.core.seq(seq__50861_51518);
if(temp__5804__auto___51531__$1){
var seq__50861_51532__$1 = temp__5804__auto___51531__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50861_51532__$1)){
var c__4679__auto___51533 = cljs.core.chunk_first(seq__50861_51532__$1);
var G__51534 = cljs.core.chunk_rest(seq__50861_51532__$1);
var G__51535 = c__4679__auto___51533;
var G__51536 = cljs.core.count(c__4679__auto___51533);
var G__51537 = (0);
seq__50861_51518 = G__51534;
chunk__50863_51519 = G__51535;
count__50864_51520 = G__51536;
i__50865_51521 = G__51537;
continue;
} else {
var child_51538 = cljs.core.first(seq__50861_51532__$1);
if(cljs.core.truth_(child_51538)){
node.appendChild(child_51538);


var G__51539 = cljs.core.next(seq__50861_51532__$1);
var G__51540 = null;
var G__51541 = (0);
var G__51542 = (0);
seq__50861_51518 = G__51539;
chunk__50863_51519 = G__51540;
count__50864_51520 = G__51541;
i__50865_51521 = G__51542;
continue;
} else {
var G__51543 = cljs.core.next(seq__50861_51532__$1);
var G__51544 = null;
var G__51545 = (0);
var G__51546 = (0);
seq__50861_51518 = G__51543;
chunk__50863_51519 = G__51544;
count__50864_51520 = G__51545;
i__50865_51521 = G__51546;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_51517);
}
}


var G__51547 = cljs.core.next(seq__50776_51509__$1);
var G__51548 = null;
var G__51549 = (0);
var G__51550 = (0);
seq__50776_51456 = G__51547;
chunk__50778_51457 = G__51548;
count__50779_51458 = G__51549;
i__50780_51459 = G__51550;
continue;
} else {
var G__51555 = cljs.core.next(seq__50776_51509__$1);
var G__51556 = null;
var G__51557 = (0);
var G__51558 = (0);
seq__50776_51456 = G__51555;
chunk__50778_51457 = G__51556;
count__50779_51458 = G__51557;
i__50780_51459 = G__51558;
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
var len__4864__auto___51563 = arguments.length;
var i__4865__auto___51564 = (0);
while(true){
if((i__4865__auto___51564 < len__4864__auto___51563)){
args__4870__auto__.push((arguments[i__4865__auto___51564]));

var G__51565 = (i__4865__auto___51564 + (1));
i__4865__auto___51564 = G__51565;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq50884){
var G__50885 = cljs.core.first(seq50884);
var seq50884__$1 = cljs.core.next(seq50884);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50885,seq50884__$1);
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
var G__50907 = arguments.length;
switch (G__50907) {
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
var c__45575__auto___51578 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45576__auto__ = (function (){var switch__44647__auto__ = (function (state_50929){
var state_val_50930 = (state_50929[(1)]);
if((state_val_50930 === (1))){
var state_50929__$1 = state_50929;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50929__$1,(2),once_or_cleanup);
} else {
if((state_val_50930 === (2))){
var inst_50926 = (state_50929[(2)]);
var inst_50927 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_50929__$1 = (function (){var statearr_50944 = state_50929;
(statearr_50944[(7)] = inst_50926);

return statearr_50944;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50929__$1,inst_50927);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__44648__auto__ = null;
var shadow$dom$state_machine__44648__auto____0 = (function (){
var statearr_50947 = [null,null,null,null,null,null,null,null];
(statearr_50947[(0)] = shadow$dom$state_machine__44648__auto__);

(statearr_50947[(1)] = (1));

return statearr_50947;
});
var shadow$dom$state_machine__44648__auto____1 = (function (state_50929){
while(true){
var ret_value__44649__auto__ = (function (){try{while(true){
var result__44650__auto__ = switch__44647__auto__(state_50929);
if(cljs.core.keyword_identical_QMARK_(result__44650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44650__auto__;
}
break;
}
}catch (e50949){var ex__44651__auto__ = e50949;
var statearr_50951_51584 = state_50929;
(statearr_50951_51584[(2)] = ex__44651__auto__);


if(cljs.core.seq((state_50929[(4)]))){
var statearr_50952_51585 = state_50929;
(statearr_50952_51585[(1)] = cljs.core.first((state_50929[(4)])));

} else {
throw ex__44651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51586 = state_50929;
state_50929 = G__51586;
continue;
} else {
return ret_value__44649__auto__;
}
break;
}
});
shadow$dom$state_machine__44648__auto__ = function(state_50929){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__44648__auto____0.call(this);
case 1:
return shadow$dom$state_machine__44648__auto____1.call(this,state_50929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__44648__auto____0;
shadow$dom$state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__44648__auto____1;
return shadow$dom$state_machine__44648__auto__;
})()
})();
var state__45577__auto__ = (function (){var statearr_50957 = f__45576__auto__();
(statearr_50957[(6)] = c__45575__auto___51578);

return statearr_50957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45577__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
