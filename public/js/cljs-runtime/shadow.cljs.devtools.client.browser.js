goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___45696 = arguments.length;
var i__4865__auto___45697 = (0);
while(true){
if((i__4865__auto___45697 < len__4864__auto___45696)){
args__4870__auto__.push((arguments[i__4865__auto___45697]));

var G__45698 = (i__4865__auto___45697 + (1));
i__4865__auto___45697 = G__45698;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq45414){
var G__45415 = cljs.core.first(seq45414);
var seq45414__$1 = cljs.core.next(seq45414);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45415,seq45414__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__45417 = cljs.core.seq(sources);
var chunk__45418 = null;
var count__45419 = (0);
var i__45420 = (0);
while(true){
if((i__45420 < count__45419)){
var map__45426 = chunk__45418.cljs$core$IIndexed$_nth$arity$2(null,i__45420);
var map__45426__$1 = cljs.core.__destructure_map(map__45426);
var src = map__45426__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45426__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45426__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45426__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45426__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e45427){var e_45699 = e45427;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45699);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45699.message)].join('')));
}

var G__45700 = seq__45417;
var G__45701 = chunk__45418;
var G__45702 = count__45419;
var G__45703 = (i__45420 + (1));
seq__45417 = G__45700;
chunk__45418 = G__45701;
count__45419 = G__45702;
i__45420 = G__45703;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__45417);
if(temp__5804__auto__){
var seq__45417__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45417__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__45417__$1);
var G__45704 = cljs.core.chunk_rest(seq__45417__$1);
var G__45705 = c__4679__auto__;
var G__45706 = cljs.core.count(c__4679__auto__);
var G__45707 = (0);
seq__45417 = G__45704;
chunk__45418 = G__45705;
count__45419 = G__45706;
i__45420 = G__45707;
continue;
} else {
var map__45428 = cljs.core.first(seq__45417__$1);
var map__45428__$1 = cljs.core.__destructure_map(map__45428);
var src = map__45428__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45428__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45428__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45428__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45428__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e45429){var e_45708 = e45429;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45708);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45708.message)].join('')));
}

var G__45709 = cljs.core.next(seq__45417__$1);
var G__45710 = null;
var G__45711 = (0);
var G__45712 = (0);
seq__45417 = G__45709;
chunk__45418 = G__45710;
count__45419 = G__45711;
i__45420 = G__45712;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__45430 = cljs.core.seq(js_requires);
var chunk__45431 = null;
var count__45432 = (0);
var i__45433 = (0);
while(true){
if((i__45433 < count__45432)){
var js_ns = chunk__45431.cljs$core$IIndexed$_nth$arity$2(null,i__45433);
var require_str_45713 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45713);


var G__45714 = seq__45430;
var G__45715 = chunk__45431;
var G__45716 = count__45432;
var G__45717 = (i__45433 + (1));
seq__45430 = G__45714;
chunk__45431 = G__45715;
count__45432 = G__45716;
i__45433 = G__45717;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__45430);
if(temp__5804__auto__){
var seq__45430__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45430__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__45430__$1);
var G__45718 = cljs.core.chunk_rest(seq__45430__$1);
var G__45719 = c__4679__auto__;
var G__45720 = cljs.core.count(c__4679__auto__);
var G__45721 = (0);
seq__45430 = G__45718;
chunk__45431 = G__45719;
count__45432 = G__45720;
i__45433 = G__45721;
continue;
} else {
var js_ns = cljs.core.first(seq__45430__$1);
var require_str_45722 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45722);


var G__45723 = cljs.core.next(seq__45430__$1);
var G__45724 = null;
var G__45725 = (0);
var G__45726 = (0);
seq__45430 = G__45723;
chunk__45431 = G__45724;
count__45432 = G__45725;
i__45433 = G__45726;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__45435){
var map__45436 = p__45435;
var map__45436__$1 = cljs.core.__destructure_map(map__45436);
var msg = map__45436__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45436__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45436__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45437(s__45438){
return (new cljs.core.LazySeq(null,(function (){
var s__45438__$1 = s__45438;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__45438__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__45443 = cljs.core.first(xs__6360__auto__);
var map__45443__$1 = cljs.core.__destructure_map(map__45443);
var src = map__45443__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45443__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45443__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__45438__$1,map__45443,map__45443__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__45436,map__45436__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45437_$_iter__45439(s__45440){
return (new cljs.core.LazySeq(null,((function (s__45438__$1,map__45443,map__45443__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__45436,map__45436__$1,msg,info,reload_info){
return (function (){
var s__45440__$1 = s__45440;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__45440__$1);
if(temp__5804__auto____$1){
var s__45440__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45440__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__45440__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__45442 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__45441 = (0);
while(true){
if((i__45441 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__45441);
cljs.core.chunk_append(b__45442,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__45727 = (i__45441 + (1));
i__45441 = G__45727;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45442),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45437_$_iter__45439(cljs.core.chunk_rest(s__45440__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45442),null);
}
} else {
var warning = cljs.core.first(s__45440__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45437_$_iter__45439(cljs.core.rest(s__45440__$2)));
}
} else {
return null;
}
break;
}
});})(s__45438__$1,map__45443,map__45443__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__45436,map__45436__$1,msg,info,reload_info))
,null,null));
});})(s__45438__$1,map__45443,map__45443__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__45436,map__45436__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45437(cljs.core.rest(s__45438__$1)));
} else {
var G__45728 = cljs.core.rest(s__45438__$1);
s__45438__$1 = G__45728;
continue;
}
} else {
var G__45729 = cljs.core.rest(s__45438__$1);
s__45438__$1 = G__45729;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__45444_45730 = cljs.core.seq(warnings);
var chunk__45445_45731 = null;
var count__45446_45732 = (0);
var i__45447_45733 = (0);
while(true){
if((i__45447_45733 < count__45446_45732)){
var map__45450_45734 = chunk__45445_45731.cljs$core$IIndexed$_nth$arity$2(null,i__45447_45733);
var map__45450_45735__$1 = cljs.core.__destructure_map(map__45450_45734);
var w_45736 = map__45450_45735__$1;
var msg_45737__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45450_45735__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45738 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45450_45735__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45450_45735__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45450_45735__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45740)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45738),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45739),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45737__$1)].join(''));


var G__45741 = seq__45444_45730;
var G__45742 = chunk__45445_45731;
var G__45743 = count__45446_45732;
var G__45744 = (i__45447_45733 + (1));
seq__45444_45730 = G__45741;
chunk__45445_45731 = G__45742;
count__45446_45732 = G__45743;
i__45447_45733 = G__45744;
continue;
} else {
var temp__5804__auto___45745 = cljs.core.seq(seq__45444_45730);
if(temp__5804__auto___45745){
var seq__45444_45746__$1 = temp__5804__auto___45745;
if(cljs.core.chunked_seq_QMARK_(seq__45444_45746__$1)){
var c__4679__auto___45747 = cljs.core.chunk_first(seq__45444_45746__$1);
var G__45748 = cljs.core.chunk_rest(seq__45444_45746__$1);
var G__45749 = c__4679__auto___45747;
var G__45750 = cljs.core.count(c__4679__auto___45747);
var G__45751 = (0);
seq__45444_45730 = G__45748;
chunk__45445_45731 = G__45749;
count__45446_45732 = G__45750;
i__45447_45733 = G__45751;
continue;
} else {
var map__45451_45752 = cljs.core.first(seq__45444_45746__$1);
var map__45451_45753__$1 = cljs.core.__destructure_map(map__45451_45752);
var w_45754 = map__45451_45753__$1;
var msg_45755__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45451_45753__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45451_45753__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45757 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45451_45753__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45758 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45451_45753__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45758)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45756),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45757),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45755__$1)].join(''));


var G__45759 = cljs.core.next(seq__45444_45746__$1);
var G__45760 = null;
var G__45761 = (0);
var G__45762 = (0);
seq__45444_45730 = G__45759;
chunk__45445_45731 = G__45760;
count__45446_45732 = G__45761;
i__45447_45733 = G__45762;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__45434_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__45434_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__45452){
var map__45453 = p__45452;
var map__45453__$1 = cljs.core.__destructure_map(map__45453);
var msg = map__45453__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45453__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45453__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__45454 = cljs.core.seq(updates);
var chunk__45456 = null;
var count__45457 = (0);
var i__45458 = (0);
while(true){
if((i__45458 < count__45457)){
var path = chunk__45456.cljs$core$IIndexed$_nth$arity$2(null,i__45458);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__45568_45763 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__45572_45764 = null;
var count__45573_45765 = (0);
var i__45574_45766 = (0);
while(true){
if((i__45574_45766 < count__45573_45765)){
var node_45767 = chunk__45572_45764.cljs$core$IIndexed$_nth$arity$2(null,i__45574_45766);
if(cljs.core.not(node_45767.shadow$old)){
var path_match_45768 = shadow.cljs.devtools.client.browser.match_paths(node_45767.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45768)){
var new_link_45769 = (function (){var G__45600 = node_45767.cloneNode(true);
G__45600.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45768),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45600;
})();
(node_45767.shadow$old = true);

(new_link_45769.onload = ((function (seq__45568_45763,chunk__45572_45764,count__45573_45765,i__45574_45766,seq__45454,chunk__45456,count__45457,i__45458,new_link_45769,path_match_45768,node_45767,path,map__45453,map__45453__$1,msg,updates,reload_info){
return (function (e){
var seq__45601_45770 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__45603_45771 = null;
var count__45604_45772 = (0);
var i__45605_45773 = (0);
while(true){
if((i__45605_45773 < count__45604_45772)){
var map__45609_45774 = chunk__45603_45771.cljs$core$IIndexed$_nth$arity$2(null,i__45605_45773);
var map__45609_45775__$1 = cljs.core.__destructure_map(map__45609_45774);
var task_45776 = map__45609_45775__$1;
var fn_str_45777 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45609_45775__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45778 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45609_45775__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45779 = goog.getObjectByName(fn_str_45777,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45778)].join(''));

(fn_obj_45779.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45779.cljs$core$IFn$_invoke$arity$2(path,new_link_45769) : fn_obj_45779.call(null,path,new_link_45769));


var G__45780 = seq__45601_45770;
var G__45781 = chunk__45603_45771;
var G__45782 = count__45604_45772;
var G__45783 = (i__45605_45773 + (1));
seq__45601_45770 = G__45780;
chunk__45603_45771 = G__45781;
count__45604_45772 = G__45782;
i__45605_45773 = G__45783;
continue;
} else {
var temp__5804__auto___45784 = cljs.core.seq(seq__45601_45770);
if(temp__5804__auto___45784){
var seq__45601_45785__$1 = temp__5804__auto___45784;
if(cljs.core.chunked_seq_QMARK_(seq__45601_45785__$1)){
var c__4679__auto___45786 = cljs.core.chunk_first(seq__45601_45785__$1);
var G__45787 = cljs.core.chunk_rest(seq__45601_45785__$1);
var G__45788 = c__4679__auto___45786;
var G__45789 = cljs.core.count(c__4679__auto___45786);
var G__45790 = (0);
seq__45601_45770 = G__45787;
chunk__45603_45771 = G__45788;
count__45604_45772 = G__45789;
i__45605_45773 = G__45790;
continue;
} else {
var map__45610_45791 = cljs.core.first(seq__45601_45785__$1);
var map__45610_45792__$1 = cljs.core.__destructure_map(map__45610_45791);
var task_45793 = map__45610_45792__$1;
var fn_str_45794 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45610_45792__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45795 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45610_45792__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45796 = goog.getObjectByName(fn_str_45794,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45795)].join(''));

(fn_obj_45796.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45796.cljs$core$IFn$_invoke$arity$2(path,new_link_45769) : fn_obj_45796.call(null,path,new_link_45769));


var G__45797 = cljs.core.next(seq__45601_45785__$1);
var G__45798 = null;
var G__45799 = (0);
var G__45800 = (0);
seq__45601_45770 = G__45797;
chunk__45603_45771 = G__45798;
count__45604_45772 = G__45799;
i__45605_45773 = G__45800;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_45767);
});})(seq__45568_45763,chunk__45572_45764,count__45573_45765,i__45574_45766,seq__45454,chunk__45456,count__45457,i__45458,new_link_45769,path_match_45768,node_45767,path,map__45453,map__45453__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45768], 0));

goog.dom.insertSiblingAfter(new_link_45769,node_45767);


var G__45801 = seq__45568_45763;
var G__45802 = chunk__45572_45764;
var G__45803 = count__45573_45765;
var G__45804 = (i__45574_45766 + (1));
seq__45568_45763 = G__45801;
chunk__45572_45764 = G__45802;
count__45573_45765 = G__45803;
i__45574_45766 = G__45804;
continue;
} else {
var G__45805 = seq__45568_45763;
var G__45806 = chunk__45572_45764;
var G__45807 = count__45573_45765;
var G__45808 = (i__45574_45766 + (1));
seq__45568_45763 = G__45805;
chunk__45572_45764 = G__45806;
count__45573_45765 = G__45807;
i__45574_45766 = G__45808;
continue;
}
} else {
var G__45809 = seq__45568_45763;
var G__45810 = chunk__45572_45764;
var G__45811 = count__45573_45765;
var G__45812 = (i__45574_45766 + (1));
seq__45568_45763 = G__45809;
chunk__45572_45764 = G__45810;
count__45573_45765 = G__45811;
i__45574_45766 = G__45812;
continue;
}
} else {
var temp__5804__auto___45813 = cljs.core.seq(seq__45568_45763);
if(temp__5804__auto___45813){
var seq__45568_45814__$1 = temp__5804__auto___45813;
if(cljs.core.chunked_seq_QMARK_(seq__45568_45814__$1)){
var c__4679__auto___45815 = cljs.core.chunk_first(seq__45568_45814__$1);
var G__45816 = cljs.core.chunk_rest(seq__45568_45814__$1);
var G__45817 = c__4679__auto___45815;
var G__45818 = cljs.core.count(c__4679__auto___45815);
var G__45819 = (0);
seq__45568_45763 = G__45816;
chunk__45572_45764 = G__45817;
count__45573_45765 = G__45818;
i__45574_45766 = G__45819;
continue;
} else {
var node_45820 = cljs.core.first(seq__45568_45814__$1);
if(cljs.core.not(node_45820.shadow$old)){
var path_match_45821 = shadow.cljs.devtools.client.browser.match_paths(node_45820.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45821)){
var new_link_45822 = (function (){var G__45611 = node_45820.cloneNode(true);
G__45611.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45821),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45611;
})();
(node_45820.shadow$old = true);

(new_link_45822.onload = ((function (seq__45568_45763,chunk__45572_45764,count__45573_45765,i__45574_45766,seq__45454,chunk__45456,count__45457,i__45458,new_link_45822,path_match_45821,node_45820,seq__45568_45814__$1,temp__5804__auto___45813,path,map__45453,map__45453__$1,msg,updates,reload_info){
return (function (e){
var seq__45612_45823 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__45614_45824 = null;
var count__45615_45825 = (0);
var i__45616_45826 = (0);
while(true){
if((i__45616_45826 < count__45615_45825)){
var map__45620_45827 = chunk__45614_45824.cljs$core$IIndexed$_nth$arity$2(null,i__45616_45826);
var map__45620_45828__$1 = cljs.core.__destructure_map(map__45620_45827);
var task_45829 = map__45620_45828__$1;
var fn_str_45830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45620_45828__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45620_45828__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45832 = goog.getObjectByName(fn_str_45830,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45831)].join(''));

(fn_obj_45832.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45832.cljs$core$IFn$_invoke$arity$2(path,new_link_45822) : fn_obj_45832.call(null,path,new_link_45822));


var G__45833 = seq__45612_45823;
var G__45834 = chunk__45614_45824;
var G__45835 = count__45615_45825;
var G__45836 = (i__45616_45826 + (1));
seq__45612_45823 = G__45833;
chunk__45614_45824 = G__45834;
count__45615_45825 = G__45835;
i__45616_45826 = G__45836;
continue;
} else {
var temp__5804__auto___45837__$1 = cljs.core.seq(seq__45612_45823);
if(temp__5804__auto___45837__$1){
var seq__45612_45838__$1 = temp__5804__auto___45837__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45612_45838__$1)){
var c__4679__auto___45839 = cljs.core.chunk_first(seq__45612_45838__$1);
var G__45840 = cljs.core.chunk_rest(seq__45612_45838__$1);
var G__45841 = c__4679__auto___45839;
var G__45842 = cljs.core.count(c__4679__auto___45839);
var G__45843 = (0);
seq__45612_45823 = G__45840;
chunk__45614_45824 = G__45841;
count__45615_45825 = G__45842;
i__45616_45826 = G__45843;
continue;
} else {
var map__45621_45844 = cljs.core.first(seq__45612_45838__$1);
var map__45621_45845__$1 = cljs.core.__destructure_map(map__45621_45844);
var task_45846 = map__45621_45845__$1;
var fn_str_45847 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45621_45845__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45848 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45621_45845__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45849 = goog.getObjectByName(fn_str_45847,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45848)].join(''));

(fn_obj_45849.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45849.cljs$core$IFn$_invoke$arity$2(path,new_link_45822) : fn_obj_45849.call(null,path,new_link_45822));


var G__45850 = cljs.core.next(seq__45612_45838__$1);
var G__45851 = null;
var G__45852 = (0);
var G__45853 = (0);
seq__45612_45823 = G__45850;
chunk__45614_45824 = G__45851;
count__45615_45825 = G__45852;
i__45616_45826 = G__45853;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_45820);
});})(seq__45568_45763,chunk__45572_45764,count__45573_45765,i__45574_45766,seq__45454,chunk__45456,count__45457,i__45458,new_link_45822,path_match_45821,node_45820,seq__45568_45814__$1,temp__5804__auto___45813,path,map__45453,map__45453__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45821], 0));

goog.dom.insertSiblingAfter(new_link_45822,node_45820);


var G__45854 = cljs.core.next(seq__45568_45814__$1);
var G__45855 = null;
var G__45856 = (0);
var G__45857 = (0);
seq__45568_45763 = G__45854;
chunk__45572_45764 = G__45855;
count__45573_45765 = G__45856;
i__45574_45766 = G__45857;
continue;
} else {
var G__45858 = cljs.core.next(seq__45568_45814__$1);
var G__45859 = null;
var G__45860 = (0);
var G__45861 = (0);
seq__45568_45763 = G__45858;
chunk__45572_45764 = G__45859;
count__45573_45765 = G__45860;
i__45574_45766 = G__45861;
continue;
}
} else {
var G__45862 = cljs.core.next(seq__45568_45814__$1);
var G__45863 = null;
var G__45864 = (0);
var G__45865 = (0);
seq__45568_45763 = G__45862;
chunk__45572_45764 = G__45863;
count__45573_45765 = G__45864;
i__45574_45766 = G__45865;
continue;
}
}
} else {
}
}
break;
}


var G__45866 = seq__45454;
var G__45867 = chunk__45456;
var G__45868 = count__45457;
var G__45869 = (i__45458 + (1));
seq__45454 = G__45866;
chunk__45456 = G__45867;
count__45457 = G__45868;
i__45458 = G__45869;
continue;
} else {
var G__45870 = seq__45454;
var G__45871 = chunk__45456;
var G__45872 = count__45457;
var G__45873 = (i__45458 + (1));
seq__45454 = G__45870;
chunk__45456 = G__45871;
count__45457 = G__45872;
i__45458 = G__45873;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__45454);
if(temp__5804__auto__){
var seq__45454__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45454__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__45454__$1);
var G__45874 = cljs.core.chunk_rest(seq__45454__$1);
var G__45875 = c__4679__auto__;
var G__45876 = cljs.core.count(c__4679__auto__);
var G__45877 = (0);
seq__45454 = G__45874;
chunk__45456 = G__45875;
count__45457 = G__45876;
i__45458 = G__45877;
continue;
} else {
var path = cljs.core.first(seq__45454__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__45622_45878 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__45626_45879 = null;
var count__45627_45880 = (0);
var i__45628_45881 = (0);
while(true){
if((i__45628_45881 < count__45627_45880)){
var node_45882 = chunk__45626_45879.cljs$core$IIndexed$_nth$arity$2(null,i__45628_45881);
if(cljs.core.not(node_45882.shadow$old)){
var path_match_45883 = shadow.cljs.devtools.client.browser.match_paths(node_45882.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45883)){
var new_link_45884 = (function (){var G__45654 = node_45882.cloneNode(true);
G__45654.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45883),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45654;
})();
(node_45882.shadow$old = true);

(new_link_45884.onload = ((function (seq__45622_45878,chunk__45626_45879,count__45627_45880,i__45628_45881,seq__45454,chunk__45456,count__45457,i__45458,new_link_45884,path_match_45883,node_45882,path,seq__45454__$1,temp__5804__auto__,map__45453,map__45453__$1,msg,updates,reload_info){
return (function (e){
var seq__45655_45885 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__45657_45886 = null;
var count__45658_45887 = (0);
var i__45659_45888 = (0);
while(true){
if((i__45659_45888 < count__45658_45887)){
var map__45663_45889 = chunk__45657_45886.cljs$core$IIndexed$_nth$arity$2(null,i__45659_45888);
var map__45663_45890__$1 = cljs.core.__destructure_map(map__45663_45889);
var task_45891 = map__45663_45890__$1;
var fn_str_45892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45663_45890__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45663_45890__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45894 = goog.getObjectByName(fn_str_45892,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45893)].join(''));

(fn_obj_45894.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45894.cljs$core$IFn$_invoke$arity$2(path,new_link_45884) : fn_obj_45894.call(null,path,new_link_45884));


var G__45895 = seq__45655_45885;
var G__45896 = chunk__45657_45886;
var G__45897 = count__45658_45887;
var G__45898 = (i__45659_45888 + (1));
seq__45655_45885 = G__45895;
chunk__45657_45886 = G__45896;
count__45658_45887 = G__45897;
i__45659_45888 = G__45898;
continue;
} else {
var temp__5804__auto___45899__$1 = cljs.core.seq(seq__45655_45885);
if(temp__5804__auto___45899__$1){
var seq__45655_45900__$1 = temp__5804__auto___45899__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45655_45900__$1)){
var c__4679__auto___45901 = cljs.core.chunk_first(seq__45655_45900__$1);
var G__45902 = cljs.core.chunk_rest(seq__45655_45900__$1);
var G__45903 = c__4679__auto___45901;
var G__45904 = cljs.core.count(c__4679__auto___45901);
var G__45905 = (0);
seq__45655_45885 = G__45902;
chunk__45657_45886 = G__45903;
count__45658_45887 = G__45904;
i__45659_45888 = G__45905;
continue;
} else {
var map__45664_45906 = cljs.core.first(seq__45655_45900__$1);
var map__45664_45907__$1 = cljs.core.__destructure_map(map__45664_45906);
var task_45908 = map__45664_45907__$1;
var fn_str_45909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45664_45907__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45664_45907__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45911 = goog.getObjectByName(fn_str_45909,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45910)].join(''));

(fn_obj_45911.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45911.cljs$core$IFn$_invoke$arity$2(path,new_link_45884) : fn_obj_45911.call(null,path,new_link_45884));


var G__45912 = cljs.core.next(seq__45655_45900__$1);
var G__45913 = null;
var G__45914 = (0);
var G__45915 = (0);
seq__45655_45885 = G__45912;
chunk__45657_45886 = G__45913;
count__45658_45887 = G__45914;
i__45659_45888 = G__45915;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_45882);
});})(seq__45622_45878,chunk__45626_45879,count__45627_45880,i__45628_45881,seq__45454,chunk__45456,count__45457,i__45458,new_link_45884,path_match_45883,node_45882,path,seq__45454__$1,temp__5804__auto__,map__45453,map__45453__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45883], 0));

goog.dom.insertSiblingAfter(new_link_45884,node_45882);


var G__45916 = seq__45622_45878;
var G__45917 = chunk__45626_45879;
var G__45918 = count__45627_45880;
var G__45919 = (i__45628_45881 + (1));
seq__45622_45878 = G__45916;
chunk__45626_45879 = G__45917;
count__45627_45880 = G__45918;
i__45628_45881 = G__45919;
continue;
} else {
var G__45920 = seq__45622_45878;
var G__45921 = chunk__45626_45879;
var G__45922 = count__45627_45880;
var G__45923 = (i__45628_45881 + (1));
seq__45622_45878 = G__45920;
chunk__45626_45879 = G__45921;
count__45627_45880 = G__45922;
i__45628_45881 = G__45923;
continue;
}
} else {
var G__45924 = seq__45622_45878;
var G__45925 = chunk__45626_45879;
var G__45926 = count__45627_45880;
var G__45927 = (i__45628_45881 + (1));
seq__45622_45878 = G__45924;
chunk__45626_45879 = G__45925;
count__45627_45880 = G__45926;
i__45628_45881 = G__45927;
continue;
}
} else {
var temp__5804__auto___45928__$1 = cljs.core.seq(seq__45622_45878);
if(temp__5804__auto___45928__$1){
var seq__45622_45929__$1 = temp__5804__auto___45928__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45622_45929__$1)){
var c__4679__auto___45930 = cljs.core.chunk_first(seq__45622_45929__$1);
var G__45931 = cljs.core.chunk_rest(seq__45622_45929__$1);
var G__45932 = c__4679__auto___45930;
var G__45933 = cljs.core.count(c__4679__auto___45930);
var G__45934 = (0);
seq__45622_45878 = G__45931;
chunk__45626_45879 = G__45932;
count__45627_45880 = G__45933;
i__45628_45881 = G__45934;
continue;
} else {
var node_45935 = cljs.core.first(seq__45622_45929__$1);
if(cljs.core.not(node_45935.shadow$old)){
var path_match_45936 = shadow.cljs.devtools.client.browser.match_paths(node_45935.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45936)){
var new_link_45937 = (function (){var G__45665 = node_45935.cloneNode(true);
G__45665.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45936),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45665;
})();
(node_45935.shadow$old = true);

(new_link_45937.onload = ((function (seq__45622_45878,chunk__45626_45879,count__45627_45880,i__45628_45881,seq__45454,chunk__45456,count__45457,i__45458,new_link_45937,path_match_45936,node_45935,seq__45622_45929__$1,temp__5804__auto___45928__$1,path,seq__45454__$1,temp__5804__auto__,map__45453,map__45453__$1,msg,updates,reload_info){
return (function (e){
var seq__45666_45938 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__45668_45939 = null;
var count__45669_45940 = (0);
var i__45670_45941 = (0);
while(true){
if((i__45670_45941 < count__45669_45940)){
var map__45674_45942 = chunk__45668_45939.cljs$core$IIndexed$_nth$arity$2(null,i__45670_45941);
var map__45674_45943__$1 = cljs.core.__destructure_map(map__45674_45942);
var task_45944 = map__45674_45943__$1;
var fn_str_45945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45674_45943__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45946 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45674_45943__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45947 = goog.getObjectByName(fn_str_45945,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45946)].join(''));

(fn_obj_45947.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45947.cljs$core$IFn$_invoke$arity$2(path,new_link_45937) : fn_obj_45947.call(null,path,new_link_45937));


var G__45948 = seq__45666_45938;
var G__45949 = chunk__45668_45939;
var G__45950 = count__45669_45940;
var G__45951 = (i__45670_45941 + (1));
seq__45666_45938 = G__45948;
chunk__45668_45939 = G__45949;
count__45669_45940 = G__45950;
i__45670_45941 = G__45951;
continue;
} else {
var temp__5804__auto___45952__$2 = cljs.core.seq(seq__45666_45938);
if(temp__5804__auto___45952__$2){
var seq__45666_45953__$1 = temp__5804__auto___45952__$2;
if(cljs.core.chunked_seq_QMARK_(seq__45666_45953__$1)){
var c__4679__auto___45954 = cljs.core.chunk_first(seq__45666_45953__$1);
var G__45955 = cljs.core.chunk_rest(seq__45666_45953__$1);
var G__45956 = c__4679__auto___45954;
var G__45957 = cljs.core.count(c__4679__auto___45954);
var G__45958 = (0);
seq__45666_45938 = G__45955;
chunk__45668_45939 = G__45956;
count__45669_45940 = G__45957;
i__45670_45941 = G__45958;
continue;
} else {
var map__45675_45959 = cljs.core.first(seq__45666_45953__$1);
var map__45675_45960__$1 = cljs.core.__destructure_map(map__45675_45959);
var task_45961 = map__45675_45960__$1;
var fn_str_45962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45675_45960__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_45963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45675_45960__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_45964 = goog.getObjectByName(fn_str_45962,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_45963)].join(''));

(fn_obj_45964.cljs$core$IFn$_invoke$arity$2 ? fn_obj_45964.cljs$core$IFn$_invoke$arity$2(path,new_link_45937) : fn_obj_45964.call(null,path,new_link_45937));


var G__45965 = cljs.core.next(seq__45666_45953__$1);
var G__45966 = null;
var G__45967 = (0);
var G__45968 = (0);
seq__45666_45938 = G__45965;
chunk__45668_45939 = G__45966;
count__45669_45940 = G__45967;
i__45670_45941 = G__45968;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_45935);
});})(seq__45622_45878,chunk__45626_45879,count__45627_45880,i__45628_45881,seq__45454,chunk__45456,count__45457,i__45458,new_link_45937,path_match_45936,node_45935,seq__45622_45929__$1,temp__5804__auto___45928__$1,path,seq__45454__$1,temp__5804__auto__,map__45453,map__45453__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45936], 0));

goog.dom.insertSiblingAfter(new_link_45937,node_45935);


var G__45969 = cljs.core.next(seq__45622_45929__$1);
var G__45970 = null;
var G__45971 = (0);
var G__45972 = (0);
seq__45622_45878 = G__45969;
chunk__45626_45879 = G__45970;
count__45627_45880 = G__45971;
i__45628_45881 = G__45972;
continue;
} else {
var G__45973 = cljs.core.next(seq__45622_45929__$1);
var G__45974 = null;
var G__45975 = (0);
var G__45976 = (0);
seq__45622_45878 = G__45973;
chunk__45626_45879 = G__45974;
count__45627_45880 = G__45975;
i__45628_45881 = G__45976;
continue;
}
} else {
var G__45977 = cljs.core.next(seq__45622_45929__$1);
var G__45978 = null;
var G__45979 = (0);
var G__45980 = (0);
seq__45622_45878 = G__45977;
chunk__45626_45879 = G__45978;
count__45627_45880 = G__45979;
i__45628_45881 = G__45980;
continue;
}
}
} else {
}
}
break;
}


var G__45981 = cljs.core.next(seq__45454__$1);
var G__45982 = null;
var G__45983 = (0);
var G__45984 = (0);
seq__45454 = G__45981;
chunk__45456 = G__45982;
count__45457 = G__45983;
i__45458 = G__45984;
continue;
} else {
var G__45985 = cljs.core.next(seq__45454__$1);
var G__45986 = null;
var G__45987 = (0);
var G__45988 = (0);
seq__45454 = G__45985;
chunk__45456 = G__45986;
count__45457 = G__45987;
i__45458 = G__45988;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__45676){
var map__45677 = p__45676;
var map__45677__$1 = cljs.core.__destructure_map(map__45677);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45677__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__45678){
var map__45679 = p__45678;
var map__45679__$1 = cljs.core.__destructure_map(map__45679);
var _ = map__45679__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45679__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__45680,done,error){
var map__45681 = p__45680;
var map__45681__$1 = cljs.core.__destructure_map(map__45681);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45681__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__45682,done,error){
var map__45683 = p__45682;
var map__45683__$1 = cljs.core.__destructure_map(map__45683);
var msg = map__45683__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45683__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45683__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45683__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__45684){
var map__45685 = p__45684;
var map__45685__$1 = cljs.core.__destructure_map(map__45685);
var src = map__45685__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45685__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__45686 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__45686) : done.call(null,G__45686));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__45687){
var map__45688 = p__45687;
var map__45688__$1 = cljs.core.__destructure_map(map__45688);
var msg__$1 = map__45688__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45688__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e45689){var ex = e45689;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__45690){
var map__45691 = p__45690;
var map__45691__$1 = cljs.core.__destructure_map(map__45691);
var env = map__45691__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45691__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__45692){
var map__45693 = p__45692;
var map__45693__$1 = cljs.core.__destructure_map(map__45693);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45693__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45693__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__45694){
var map__45695 = p__45694;
var map__45695__$1 = cljs.core.__destructure_map(map__45695);
var svc = map__45695__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45695__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
