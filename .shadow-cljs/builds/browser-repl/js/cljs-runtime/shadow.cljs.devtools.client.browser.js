goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___54864 = arguments.length;
var i__4865__auto___54865 = (0);
while(true){
if((i__4865__auto___54865 < len__4864__auto___54864)){
args__4870__auto__.push((arguments[i__4865__auto___54865]));

var G__54866 = (i__4865__auto___54865 + (1));
i__4865__auto___54865 = G__54866;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq54573){
var G__54574 = cljs.core.first(seq54573);
var seq54573__$1 = cljs.core.next(seq54573);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54574,seq54573__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__54579 = cljs.core.seq(sources);
var chunk__54580 = null;
var count__54581 = (0);
var i__54582 = (0);
while(true){
if((i__54582 < count__54581)){
var map__54590 = chunk__54580.cljs$core$IIndexed$_nth$arity$2(null,i__54582);
var map__54590__$1 = cljs.core.__destructure_map(map__54590);
var src = map__54590__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54590__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54590__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54590__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54590__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e54592){var e_54867 = e54592;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_54867);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_54867.message)].join('')));
}

var G__54868 = seq__54579;
var G__54869 = chunk__54580;
var G__54870 = count__54581;
var G__54871 = (i__54582 + (1));
seq__54579 = G__54868;
chunk__54580 = G__54869;
count__54581 = G__54870;
i__54582 = G__54871;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54579);
if(temp__5804__auto__){
var seq__54579__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54579__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__54579__$1);
var G__54872 = cljs.core.chunk_rest(seq__54579__$1);
var G__54873 = c__4679__auto__;
var G__54874 = cljs.core.count(c__4679__auto__);
var G__54875 = (0);
seq__54579 = G__54872;
chunk__54580 = G__54873;
count__54581 = G__54874;
i__54582 = G__54875;
continue;
} else {
var map__54594 = cljs.core.first(seq__54579__$1);
var map__54594__$1 = cljs.core.__destructure_map(map__54594);
var src = map__54594__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54594__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54594__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54594__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54594__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e54595){var e_54876 = e54595;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_54876);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_54876.message)].join('')));
}

var G__54877 = cljs.core.next(seq__54579__$1);
var G__54878 = null;
var G__54879 = (0);
var G__54880 = (0);
seq__54579 = G__54877;
chunk__54580 = G__54878;
count__54581 = G__54879;
i__54582 = G__54880;
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
var seq__54596 = cljs.core.seq(js_requires);
var chunk__54597 = null;
var count__54598 = (0);
var i__54599 = (0);
while(true){
if((i__54599 < count__54598)){
var js_ns = chunk__54597.cljs$core$IIndexed$_nth$arity$2(null,i__54599);
var require_str_54881 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_54881);


var G__54882 = seq__54596;
var G__54883 = chunk__54597;
var G__54884 = count__54598;
var G__54885 = (i__54599 + (1));
seq__54596 = G__54882;
chunk__54597 = G__54883;
count__54598 = G__54884;
i__54599 = G__54885;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54596);
if(temp__5804__auto__){
var seq__54596__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54596__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__54596__$1);
var G__54886 = cljs.core.chunk_rest(seq__54596__$1);
var G__54887 = c__4679__auto__;
var G__54888 = cljs.core.count(c__4679__auto__);
var G__54889 = (0);
seq__54596 = G__54886;
chunk__54597 = G__54887;
count__54598 = G__54888;
i__54599 = G__54889;
continue;
} else {
var js_ns = cljs.core.first(seq__54596__$1);
var require_str_54890 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_54890);


var G__54891 = cljs.core.next(seq__54596__$1);
var G__54892 = null;
var G__54893 = (0);
var G__54894 = (0);
seq__54596 = G__54891;
chunk__54597 = G__54892;
count__54598 = G__54893;
i__54599 = G__54894;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__54603){
var map__54604 = p__54603;
var map__54604__$1 = cljs.core.__destructure_map(map__54604);
var msg = map__54604__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54604__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54604__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54605(s__54606){
return (new cljs.core.LazySeq(null,(function (){
var s__54606__$1 = s__54606;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__54606__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__54611 = cljs.core.first(xs__6360__auto__);
var map__54611__$1 = cljs.core.__destructure_map(map__54611);
var src = map__54611__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54611__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54611__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__54606__$1,map__54611,map__54611__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__54604,map__54604__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54605_$_iter__54607(s__54608){
return (new cljs.core.LazySeq(null,((function (s__54606__$1,map__54611,map__54611__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__54604,map__54604__$1,msg,info,reload_info){
return (function (){
var s__54608__$1 = s__54608;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__54608__$1);
if(temp__5804__auto____$1){
var s__54608__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__54608__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__54608__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__54610 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__54609 = (0);
while(true){
if((i__54609 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__54609);
cljs.core.chunk_append(b__54610,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__54895 = (i__54609 + (1));
i__54609 = G__54895;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54610),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54605_$_iter__54607(cljs.core.chunk_rest(s__54608__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54610),null);
}
} else {
var warning = cljs.core.first(s__54608__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54605_$_iter__54607(cljs.core.rest(s__54608__$2)));
}
} else {
return null;
}
break;
}
});})(s__54606__$1,map__54611,map__54611__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__54604,map__54604__$1,msg,info,reload_info))
,null,null));
});})(s__54606__$1,map__54611,map__54611__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__54604,map__54604__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__54605(cljs.core.rest(s__54606__$1)));
} else {
var G__54896 = cljs.core.rest(s__54606__$1);
s__54606__$1 = G__54896;
continue;
}
} else {
var G__54897 = cljs.core.rest(s__54606__$1);
s__54606__$1 = G__54897;
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
var seq__54612_54898 = cljs.core.seq(warnings);
var chunk__54613_54899 = null;
var count__54614_54900 = (0);
var i__54615_54901 = (0);
while(true){
if((i__54615_54901 < count__54614_54900)){
var map__54618_54902 = chunk__54613_54899.cljs$core$IIndexed$_nth$arity$2(null,i__54615_54901);
var map__54618_54903__$1 = cljs.core.__destructure_map(map__54618_54902);
var w_54904 = map__54618_54903__$1;
var msg_54905__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54618_54903__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_54906 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54618_54903__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_54907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54618_54903__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_54908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54618_54903__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_54908)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_54906),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_54907),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_54905__$1)].join(''));


var G__54909 = seq__54612_54898;
var G__54910 = chunk__54613_54899;
var G__54911 = count__54614_54900;
var G__54912 = (i__54615_54901 + (1));
seq__54612_54898 = G__54909;
chunk__54613_54899 = G__54910;
count__54614_54900 = G__54911;
i__54615_54901 = G__54912;
continue;
} else {
var temp__5804__auto___54913 = cljs.core.seq(seq__54612_54898);
if(temp__5804__auto___54913){
var seq__54612_54914__$1 = temp__5804__auto___54913;
if(cljs.core.chunked_seq_QMARK_(seq__54612_54914__$1)){
var c__4679__auto___54915 = cljs.core.chunk_first(seq__54612_54914__$1);
var G__54916 = cljs.core.chunk_rest(seq__54612_54914__$1);
var G__54917 = c__4679__auto___54915;
var G__54918 = cljs.core.count(c__4679__auto___54915);
var G__54919 = (0);
seq__54612_54898 = G__54916;
chunk__54613_54899 = G__54917;
count__54614_54900 = G__54918;
i__54615_54901 = G__54919;
continue;
} else {
var map__54619_54920 = cljs.core.first(seq__54612_54914__$1);
var map__54619_54921__$1 = cljs.core.__destructure_map(map__54619_54920);
var w_54922 = map__54619_54921__$1;
var msg_54923__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54619_54921__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_54924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54619_54921__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_54925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54619_54921__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_54926 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54619_54921__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_54926)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_54924),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_54925),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_54923__$1)].join(''));


var G__54927 = cljs.core.next(seq__54612_54914__$1);
var G__54928 = null;
var G__54929 = (0);
var G__54930 = (0);
seq__54612_54898 = G__54927;
chunk__54613_54899 = G__54928;
count__54614_54900 = G__54929;
i__54615_54901 = G__54930;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__54602_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__54602_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__54620){
var map__54621 = p__54620;
var map__54621__$1 = cljs.core.__destructure_map(map__54621);
var msg = map__54621__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54621__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54621__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__54622 = cljs.core.seq(updates);
var chunk__54624 = null;
var count__54625 = (0);
var i__54626 = (0);
while(true){
if((i__54626 < count__54625)){
var path = chunk__54624.cljs$core$IIndexed$_nth$arity$2(null,i__54626);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__54736_54931 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__54740_54932 = null;
var count__54741_54933 = (0);
var i__54742_54934 = (0);
while(true){
if((i__54742_54934 < count__54741_54933)){
var node_54935 = chunk__54740_54932.cljs$core$IIndexed$_nth$arity$2(null,i__54742_54934);
if(cljs.core.not(node_54935.shadow$old)){
var path_match_54936 = shadow.cljs.devtools.client.browser.match_paths(node_54935.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54936)){
var new_link_54937 = (function (){var G__54768 = node_54935.cloneNode(true);
G__54768.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54936),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54768;
})();
(node_54935.shadow$old = true);

(new_link_54937.onload = ((function (seq__54736_54931,chunk__54740_54932,count__54741_54933,i__54742_54934,seq__54622,chunk__54624,count__54625,i__54626,new_link_54937,path_match_54936,node_54935,path,map__54621,map__54621__$1,msg,updates,reload_info){
return (function (e){
var seq__54769_54938 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__54771_54939 = null;
var count__54772_54940 = (0);
var i__54773_54941 = (0);
while(true){
if((i__54773_54941 < count__54772_54940)){
var map__54777_54942 = chunk__54771_54939.cljs$core$IIndexed$_nth$arity$2(null,i__54773_54941);
var map__54777_54943__$1 = cljs.core.__destructure_map(map__54777_54942);
var task_54944 = map__54777_54943__$1;
var fn_str_54945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54777_54943__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54946 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54777_54943__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54947 = goog.getObjectByName(fn_str_54945,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54946)].join(''));

(fn_obj_54947.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54947.cljs$core$IFn$_invoke$arity$2(path,new_link_54937) : fn_obj_54947.call(null,path,new_link_54937));


var G__54948 = seq__54769_54938;
var G__54949 = chunk__54771_54939;
var G__54950 = count__54772_54940;
var G__54951 = (i__54773_54941 + (1));
seq__54769_54938 = G__54948;
chunk__54771_54939 = G__54949;
count__54772_54940 = G__54950;
i__54773_54941 = G__54951;
continue;
} else {
var temp__5804__auto___54952 = cljs.core.seq(seq__54769_54938);
if(temp__5804__auto___54952){
var seq__54769_54953__$1 = temp__5804__auto___54952;
if(cljs.core.chunked_seq_QMARK_(seq__54769_54953__$1)){
var c__4679__auto___54954 = cljs.core.chunk_first(seq__54769_54953__$1);
var G__54955 = cljs.core.chunk_rest(seq__54769_54953__$1);
var G__54956 = c__4679__auto___54954;
var G__54957 = cljs.core.count(c__4679__auto___54954);
var G__54958 = (0);
seq__54769_54938 = G__54955;
chunk__54771_54939 = G__54956;
count__54772_54940 = G__54957;
i__54773_54941 = G__54958;
continue;
} else {
var map__54778_54959 = cljs.core.first(seq__54769_54953__$1);
var map__54778_54960__$1 = cljs.core.__destructure_map(map__54778_54959);
var task_54961 = map__54778_54960__$1;
var fn_str_54962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54778_54960__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54778_54960__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54964 = goog.getObjectByName(fn_str_54962,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54963)].join(''));

(fn_obj_54964.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54964.cljs$core$IFn$_invoke$arity$2(path,new_link_54937) : fn_obj_54964.call(null,path,new_link_54937));


var G__54965 = cljs.core.next(seq__54769_54953__$1);
var G__54966 = null;
var G__54967 = (0);
var G__54968 = (0);
seq__54769_54938 = G__54965;
chunk__54771_54939 = G__54966;
count__54772_54940 = G__54967;
i__54773_54941 = G__54968;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_54935);
});})(seq__54736_54931,chunk__54740_54932,count__54741_54933,i__54742_54934,seq__54622,chunk__54624,count__54625,i__54626,new_link_54937,path_match_54936,node_54935,path,map__54621,map__54621__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54936], 0));

goog.dom.insertSiblingAfter(new_link_54937,node_54935);


var G__54969 = seq__54736_54931;
var G__54970 = chunk__54740_54932;
var G__54971 = count__54741_54933;
var G__54972 = (i__54742_54934 + (1));
seq__54736_54931 = G__54969;
chunk__54740_54932 = G__54970;
count__54741_54933 = G__54971;
i__54742_54934 = G__54972;
continue;
} else {
var G__54973 = seq__54736_54931;
var G__54974 = chunk__54740_54932;
var G__54975 = count__54741_54933;
var G__54976 = (i__54742_54934 + (1));
seq__54736_54931 = G__54973;
chunk__54740_54932 = G__54974;
count__54741_54933 = G__54975;
i__54742_54934 = G__54976;
continue;
}
} else {
var G__54977 = seq__54736_54931;
var G__54978 = chunk__54740_54932;
var G__54979 = count__54741_54933;
var G__54980 = (i__54742_54934 + (1));
seq__54736_54931 = G__54977;
chunk__54740_54932 = G__54978;
count__54741_54933 = G__54979;
i__54742_54934 = G__54980;
continue;
}
} else {
var temp__5804__auto___54981 = cljs.core.seq(seq__54736_54931);
if(temp__5804__auto___54981){
var seq__54736_54982__$1 = temp__5804__auto___54981;
if(cljs.core.chunked_seq_QMARK_(seq__54736_54982__$1)){
var c__4679__auto___54983 = cljs.core.chunk_first(seq__54736_54982__$1);
var G__54984 = cljs.core.chunk_rest(seq__54736_54982__$1);
var G__54985 = c__4679__auto___54983;
var G__54986 = cljs.core.count(c__4679__auto___54983);
var G__54987 = (0);
seq__54736_54931 = G__54984;
chunk__54740_54932 = G__54985;
count__54741_54933 = G__54986;
i__54742_54934 = G__54987;
continue;
} else {
var node_54988 = cljs.core.first(seq__54736_54982__$1);
if(cljs.core.not(node_54988.shadow$old)){
var path_match_54989 = shadow.cljs.devtools.client.browser.match_paths(node_54988.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54989)){
var new_link_54990 = (function (){var G__54779 = node_54988.cloneNode(true);
G__54779.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54989),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54779;
})();
(node_54988.shadow$old = true);

(new_link_54990.onload = ((function (seq__54736_54931,chunk__54740_54932,count__54741_54933,i__54742_54934,seq__54622,chunk__54624,count__54625,i__54626,new_link_54990,path_match_54989,node_54988,seq__54736_54982__$1,temp__5804__auto___54981,path,map__54621,map__54621__$1,msg,updates,reload_info){
return (function (e){
var seq__54780_54991 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__54782_54992 = null;
var count__54783_54993 = (0);
var i__54784_54994 = (0);
while(true){
if((i__54784_54994 < count__54783_54993)){
var map__54788_54995 = chunk__54782_54992.cljs$core$IIndexed$_nth$arity$2(null,i__54784_54994);
var map__54788_54996__$1 = cljs.core.__destructure_map(map__54788_54995);
var task_54997 = map__54788_54996__$1;
var fn_str_54998 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54788_54996__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54999 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54788_54996__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_55000 = goog.getObjectByName(fn_str_54998,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54999)].join(''));

(fn_obj_55000.cljs$core$IFn$_invoke$arity$2 ? fn_obj_55000.cljs$core$IFn$_invoke$arity$2(path,new_link_54990) : fn_obj_55000.call(null,path,new_link_54990));


var G__55001 = seq__54780_54991;
var G__55002 = chunk__54782_54992;
var G__55003 = count__54783_54993;
var G__55004 = (i__54784_54994 + (1));
seq__54780_54991 = G__55001;
chunk__54782_54992 = G__55002;
count__54783_54993 = G__55003;
i__54784_54994 = G__55004;
continue;
} else {
var temp__5804__auto___55005__$1 = cljs.core.seq(seq__54780_54991);
if(temp__5804__auto___55005__$1){
var seq__54780_55006__$1 = temp__5804__auto___55005__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54780_55006__$1)){
var c__4679__auto___55007 = cljs.core.chunk_first(seq__54780_55006__$1);
var G__55008 = cljs.core.chunk_rest(seq__54780_55006__$1);
var G__55009 = c__4679__auto___55007;
var G__55010 = cljs.core.count(c__4679__auto___55007);
var G__55011 = (0);
seq__54780_54991 = G__55008;
chunk__54782_54992 = G__55009;
count__54783_54993 = G__55010;
i__54784_54994 = G__55011;
continue;
} else {
var map__54789_55012 = cljs.core.first(seq__54780_55006__$1);
var map__54789_55013__$1 = cljs.core.__destructure_map(map__54789_55012);
var task_55014 = map__54789_55013__$1;
var fn_str_55015 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54789_55013__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_55016 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54789_55013__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_55017 = goog.getObjectByName(fn_str_55015,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_55016)].join(''));

(fn_obj_55017.cljs$core$IFn$_invoke$arity$2 ? fn_obj_55017.cljs$core$IFn$_invoke$arity$2(path,new_link_54990) : fn_obj_55017.call(null,path,new_link_54990));


var G__55018 = cljs.core.next(seq__54780_55006__$1);
var G__55019 = null;
var G__55020 = (0);
var G__55021 = (0);
seq__54780_54991 = G__55018;
chunk__54782_54992 = G__55019;
count__54783_54993 = G__55020;
i__54784_54994 = G__55021;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_54988);
});})(seq__54736_54931,chunk__54740_54932,count__54741_54933,i__54742_54934,seq__54622,chunk__54624,count__54625,i__54626,new_link_54990,path_match_54989,node_54988,seq__54736_54982__$1,temp__5804__auto___54981,path,map__54621,map__54621__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54989], 0));

goog.dom.insertSiblingAfter(new_link_54990,node_54988);


var G__55022 = cljs.core.next(seq__54736_54982__$1);
var G__55023 = null;
var G__55024 = (0);
var G__55025 = (0);
seq__54736_54931 = G__55022;
chunk__54740_54932 = G__55023;
count__54741_54933 = G__55024;
i__54742_54934 = G__55025;
continue;
} else {
var G__55026 = cljs.core.next(seq__54736_54982__$1);
var G__55027 = null;
var G__55028 = (0);
var G__55029 = (0);
seq__54736_54931 = G__55026;
chunk__54740_54932 = G__55027;
count__54741_54933 = G__55028;
i__54742_54934 = G__55029;
continue;
}
} else {
var G__55030 = cljs.core.next(seq__54736_54982__$1);
var G__55031 = null;
var G__55032 = (0);
var G__55033 = (0);
seq__54736_54931 = G__55030;
chunk__54740_54932 = G__55031;
count__54741_54933 = G__55032;
i__54742_54934 = G__55033;
continue;
}
}
} else {
}
}
break;
}


var G__55034 = seq__54622;
var G__55035 = chunk__54624;
var G__55036 = count__54625;
var G__55037 = (i__54626 + (1));
seq__54622 = G__55034;
chunk__54624 = G__55035;
count__54625 = G__55036;
i__54626 = G__55037;
continue;
} else {
var G__55038 = seq__54622;
var G__55039 = chunk__54624;
var G__55040 = count__54625;
var G__55041 = (i__54626 + (1));
seq__54622 = G__55038;
chunk__54624 = G__55039;
count__54625 = G__55040;
i__54626 = G__55041;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__54622);
if(temp__5804__auto__){
var seq__54622__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54622__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__54622__$1);
var G__55042 = cljs.core.chunk_rest(seq__54622__$1);
var G__55043 = c__4679__auto__;
var G__55044 = cljs.core.count(c__4679__auto__);
var G__55045 = (0);
seq__54622 = G__55042;
chunk__54624 = G__55043;
count__54625 = G__55044;
i__54626 = G__55045;
continue;
} else {
var path = cljs.core.first(seq__54622__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__54790_55046 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__54794_55047 = null;
var count__54795_55048 = (0);
var i__54796_55049 = (0);
while(true){
if((i__54796_55049 < count__54795_55048)){
var node_55050 = chunk__54794_55047.cljs$core$IIndexed$_nth$arity$2(null,i__54796_55049);
if(cljs.core.not(node_55050.shadow$old)){
var path_match_55051 = shadow.cljs.devtools.client.browser.match_paths(node_55050.getAttribute("href"),path);
if(cljs.core.truth_(path_match_55051)){
var new_link_55052 = (function (){var G__54822 = node_55050.cloneNode(true);
G__54822.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_55051),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54822;
})();
(node_55050.shadow$old = true);

(new_link_55052.onload = ((function (seq__54790_55046,chunk__54794_55047,count__54795_55048,i__54796_55049,seq__54622,chunk__54624,count__54625,i__54626,new_link_55052,path_match_55051,node_55050,path,seq__54622__$1,temp__5804__auto__,map__54621,map__54621__$1,msg,updates,reload_info){
return (function (e){
var seq__54823_55053 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__54825_55054 = null;
var count__54826_55055 = (0);
var i__54827_55056 = (0);
while(true){
if((i__54827_55056 < count__54826_55055)){
var map__54831_55057 = chunk__54825_55054.cljs$core$IIndexed$_nth$arity$2(null,i__54827_55056);
var map__54831_55058__$1 = cljs.core.__destructure_map(map__54831_55057);
var task_55059 = map__54831_55058__$1;
var fn_str_55060 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54831_55058__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_55061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54831_55058__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_55062 = goog.getObjectByName(fn_str_55060,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_55061)].join(''));

(fn_obj_55062.cljs$core$IFn$_invoke$arity$2 ? fn_obj_55062.cljs$core$IFn$_invoke$arity$2(path,new_link_55052) : fn_obj_55062.call(null,path,new_link_55052));


var G__55063 = seq__54823_55053;
var G__55064 = chunk__54825_55054;
var G__55065 = count__54826_55055;
var G__55066 = (i__54827_55056 + (1));
seq__54823_55053 = G__55063;
chunk__54825_55054 = G__55064;
count__54826_55055 = G__55065;
i__54827_55056 = G__55066;
continue;
} else {
var temp__5804__auto___55067__$1 = cljs.core.seq(seq__54823_55053);
if(temp__5804__auto___55067__$1){
var seq__54823_55068__$1 = temp__5804__auto___55067__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54823_55068__$1)){
var c__4679__auto___55069 = cljs.core.chunk_first(seq__54823_55068__$1);
var G__55070 = cljs.core.chunk_rest(seq__54823_55068__$1);
var G__55071 = c__4679__auto___55069;
var G__55072 = cljs.core.count(c__4679__auto___55069);
var G__55073 = (0);
seq__54823_55053 = G__55070;
chunk__54825_55054 = G__55071;
count__54826_55055 = G__55072;
i__54827_55056 = G__55073;
continue;
} else {
var map__54832_55074 = cljs.core.first(seq__54823_55068__$1);
var map__54832_55075__$1 = cljs.core.__destructure_map(map__54832_55074);
var task_55076 = map__54832_55075__$1;
var fn_str_55077 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54832_55075__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_55078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54832_55075__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_55079 = goog.getObjectByName(fn_str_55077,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_55078)].join(''));

(fn_obj_55079.cljs$core$IFn$_invoke$arity$2 ? fn_obj_55079.cljs$core$IFn$_invoke$arity$2(path,new_link_55052) : fn_obj_55079.call(null,path,new_link_55052));


var G__55080 = cljs.core.next(seq__54823_55068__$1);
var G__55081 = null;
var G__55082 = (0);
var G__55083 = (0);
seq__54823_55053 = G__55080;
chunk__54825_55054 = G__55081;
count__54826_55055 = G__55082;
i__54827_55056 = G__55083;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_55050);
});})(seq__54790_55046,chunk__54794_55047,count__54795_55048,i__54796_55049,seq__54622,chunk__54624,count__54625,i__54626,new_link_55052,path_match_55051,node_55050,path,seq__54622__$1,temp__5804__auto__,map__54621,map__54621__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_55051], 0));

goog.dom.insertSiblingAfter(new_link_55052,node_55050);


var G__55084 = seq__54790_55046;
var G__55085 = chunk__54794_55047;
var G__55086 = count__54795_55048;
var G__55087 = (i__54796_55049 + (1));
seq__54790_55046 = G__55084;
chunk__54794_55047 = G__55085;
count__54795_55048 = G__55086;
i__54796_55049 = G__55087;
continue;
} else {
var G__55088 = seq__54790_55046;
var G__55089 = chunk__54794_55047;
var G__55090 = count__54795_55048;
var G__55091 = (i__54796_55049 + (1));
seq__54790_55046 = G__55088;
chunk__54794_55047 = G__55089;
count__54795_55048 = G__55090;
i__54796_55049 = G__55091;
continue;
}
} else {
var G__55092 = seq__54790_55046;
var G__55093 = chunk__54794_55047;
var G__55094 = count__54795_55048;
var G__55095 = (i__54796_55049 + (1));
seq__54790_55046 = G__55092;
chunk__54794_55047 = G__55093;
count__54795_55048 = G__55094;
i__54796_55049 = G__55095;
continue;
}
} else {
var temp__5804__auto___55096__$1 = cljs.core.seq(seq__54790_55046);
if(temp__5804__auto___55096__$1){
var seq__54790_55097__$1 = temp__5804__auto___55096__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54790_55097__$1)){
var c__4679__auto___55098 = cljs.core.chunk_first(seq__54790_55097__$1);
var G__55099 = cljs.core.chunk_rest(seq__54790_55097__$1);
var G__55100 = c__4679__auto___55098;
var G__55101 = cljs.core.count(c__4679__auto___55098);
var G__55102 = (0);
seq__54790_55046 = G__55099;
chunk__54794_55047 = G__55100;
count__54795_55048 = G__55101;
i__54796_55049 = G__55102;
continue;
} else {
var node_55103 = cljs.core.first(seq__54790_55097__$1);
if(cljs.core.not(node_55103.shadow$old)){
var path_match_55104 = shadow.cljs.devtools.client.browser.match_paths(node_55103.getAttribute("href"),path);
if(cljs.core.truth_(path_match_55104)){
var new_link_55105 = (function (){var G__54833 = node_55103.cloneNode(true);
G__54833.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_55104),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54833;
})();
(node_55103.shadow$old = true);

(new_link_55105.onload = ((function (seq__54790_55046,chunk__54794_55047,count__54795_55048,i__54796_55049,seq__54622,chunk__54624,count__54625,i__54626,new_link_55105,path_match_55104,node_55103,seq__54790_55097__$1,temp__5804__auto___55096__$1,path,seq__54622__$1,temp__5804__auto__,map__54621,map__54621__$1,msg,updates,reload_info){
return (function (e){
var seq__54834_55106 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__54836_55107 = null;
var count__54837_55108 = (0);
var i__54838_55109 = (0);
while(true){
if((i__54838_55109 < count__54837_55108)){
var map__54842_55110 = chunk__54836_55107.cljs$core$IIndexed$_nth$arity$2(null,i__54838_55109);
var map__54842_55111__$1 = cljs.core.__destructure_map(map__54842_55110);
var task_55112 = map__54842_55111__$1;
var fn_str_55113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54842_55111__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_55114 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54842_55111__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_55115 = goog.getObjectByName(fn_str_55113,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_55114)].join(''));

(fn_obj_55115.cljs$core$IFn$_invoke$arity$2 ? fn_obj_55115.cljs$core$IFn$_invoke$arity$2(path,new_link_55105) : fn_obj_55115.call(null,path,new_link_55105));


var G__55116 = seq__54834_55106;
var G__55117 = chunk__54836_55107;
var G__55118 = count__54837_55108;
var G__55119 = (i__54838_55109 + (1));
seq__54834_55106 = G__55116;
chunk__54836_55107 = G__55117;
count__54837_55108 = G__55118;
i__54838_55109 = G__55119;
continue;
} else {
var temp__5804__auto___55120__$2 = cljs.core.seq(seq__54834_55106);
if(temp__5804__auto___55120__$2){
var seq__54834_55121__$1 = temp__5804__auto___55120__$2;
if(cljs.core.chunked_seq_QMARK_(seq__54834_55121__$1)){
var c__4679__auto___55122 = cljs.core.chunk_first(seq__54834_55121__$1);
var G__55123 = cljs.core.chunk_rest(seq__54834_55121__$1);
var G__55124 = c__4679__auto___55122;
var G__55125 = cljs.core.count(c__4679__auto___55122);
var G__55126 = (0);
seq__54834_55106 = G__55123;
chunk__54836_55107 = G__55124;
count__54837_55108 = G__55125;
i__54838_55109 = G__55126;
continue;
} else {
var map__54843_55127 = cljs.core.first(seq__54834_55121__$1);
var map__54843_55128__$1 = cljs.core.__destructure_map(map__54843_55127);
var task_55129 = map__54843_55128__$1;
var fn_str_55130 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54843_55128__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_55131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54843_55128__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_55132 = goog.getObjectByName(fn_str_55130,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_55131)].join(''));

(fn_obj_55132.cljs$core$IFn$_invoke$arity$2 ? fn_obj_55132.cljs$core$IFn$_invoke$arity$2(path,new_link_55105) : fn_obj_55132.call(null,path,new_link_55105));


var G__55133 = cljs.core.next(seq__54834_55121__$1);
var G__55134 = null;
var G__55135 = (0);
var G__55136 = (0);
seq__54834_55106 = G__55133;
chunk__54836_55107 = G__55134;
count__54837_55108 = G__55135;
i__54838_55109 = G__55136;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_55103);
});})(seq__54790_55046,chunk__54794_55047,count__54795_55048,i__54796_55049,seq__54622,chunk__54624,count__54625,i__54626,new_link_55105,path_match_55104,node_55103,seq__54790_55097__$1,temp__5804__auto___55096__$1,path,seq__54622__$1,temp__5804__auto__,map__54621,map__54621__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_55104], 0));

goog.dom.insertSiblingAfter(new_link_55105,node_55103);


var G__55137 = cljs.core.next(seq__54790_55097__$1);
var G__55138 = null;
var G__55139 = (0);
var G__55140 = (0);
seq__54790_55046 = G__55137;
chunk__54794_55047 = G__55138;
count__54795_55048 = G__55139;
i__54796_55049 = G__55140;
continue;
} else {
var G__55141 = cljs.core.next(seq__54790_55097__$1);
var G__55142 = null;
var G__55143 = (0);
var G__55144 = (0);
seq__54790_55046 = G__55141;
chunk__54794_55047 = G__55142;
count__54795_55048 = G__55143;
i__54796_55049 = G__55144;
continue;
}
} else {
var G__55145 = cljs.core.next(seq__54790_55097__$1);
var G__55146 = null;
var G__55147 = (0);
var G__55148 = (0);
seq__54790_55046 = G__55145;
chunk__54794_55047 = G__55146;
count__54795_55048 = G__55147;
i__54796_55049 = G__55148;
continue;
}
}
} else {
}
}
break;
}


var G__55149 = cljs.core.next(seq__54622__$1);
var G__55150 = null;
var G__55151 = (0);
var G__55152 = (0);
seq__54622 = G__55149;
chunk__54624 = G__55150;
count__54625 = G__55151;
i__54626 = G__55152;
continue;
} else {
var G__55153 = cljs.core.next(seq__54622__$1);
var G__55154 = null;
var G__55155 = (0);
var G__55156 = (0);
seq__54622 = G__55153;
chunk__54624 = G__55154;
count__54625 = G__55155;
i__54626 = G__55156;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__54844){
var map__54845 = p__54844;
var map__54845__$1 = cljs.core.__destructure_map(map__54845);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54845__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__54846){
var map__54847 = p__54846;
var map__54847__$1 = cljs.core.__destructure_map(map__54847);
var _ = map__54847__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54847__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__54848,done,error){
var map__54849 = p__54848;
var map__54849__$1 = cljs.core.__destructure_map(map__54849);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54849__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__54850,done,error){
var map__54851 = p__54850;
var map__54851__$1 = cljs.core.__destructure_map(map__54851);
var msg = map__54851__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54851__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54851__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54851__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__54852){
var map__54853 = p__54852;
var map__54853__$1 = cljs.core.__destructure_map(map__54853);
var src = map__54853__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54853__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__54854 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__54854) : done.call(null,G__54854));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__54855){
var map__54856 = p__54855;
var map__54856__$1 = cljs.core.__destructure_map(map__54856);
var msg__$1 = map__54856__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54856__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e54857){var ex = e54857;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__54858){
var map__54859 = p__54858;
var map__54859__$1 = cljs.core.__destructure_map(map__54859);
var env = map__54859__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54859__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__54860){
var map__54861 = p__54860;
var map__54861__$1 = cljs.core.__destructure_map(map__54861);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54861__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54861__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__54862){
var map__54863 = p__54862;
var map__54863__$1 = cljs.core.__destructure_map(map__54863);
var svc = map__54863__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54863__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
