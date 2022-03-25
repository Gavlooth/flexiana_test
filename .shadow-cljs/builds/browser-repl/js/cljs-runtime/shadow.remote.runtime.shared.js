goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__51795,res){
var map__51796 = p__51795;
var map__51796__$1 = cljs.core.__destructure_map(map__51796);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51796__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51796__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__51797 = res;
var G__51797__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51797,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__51797);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51797__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__51797__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__51801 = arguments.length;
switch (G__51801) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__51808,msg,handlers,timeout_after_ms){
var map__51809 = p__51808;
var map__51809__$1 = cljs.core.__destructure_map(map__51809);
var runtime = map__51809__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51809__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___52080 = arguments.length;
var i__4865__auto___52081 = (0);
while(true){
if((i__4865__auto___52081 < len__4864__auto___52080)){
args__4870__auto__.push((arguments[i__4865__auto___52081]));

var G__52086 = (i__4865__auto___52081 + (1));
i__4865__auto___52081 = G__52086;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__51837,ev,args){
var map__51841 = p__51837;
var map__51841__$1 = cljs.core.__destructure_map(map__51841);
var runtime = map__51841__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51841__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__51843 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__51846 = null;
var count__51847 = (0);
var i__51848 = (0);
while(true){
if((i__51848 < count__51847)){
var ext = chunk__51846.cljs$core$IIndexed$_nth$arity$2(null,i__51848);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__52098 = seq__51843;
var G__52099 = chunk__51846;
var G__52100 = count__51847;
var G__52101 = (i__51848 + (1));
seq__51843 = G__52098;
chunk__51846 = G__52099;
count__51847 = G__52100;
i__51848 = G__52101;
continue;
} else {
var G__52102 = seq__51843;
var G__52103 = chunk__51846;
var G__52104 = count__51847;
var G__52105 = (i__51848 + (1));
seq__51843 = G__52102;
chunk__51846 = G__52103;
count__51847 = G__52104;
i__51848 = G__52105;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__51843);
if(temp__5804__auto__){
var seq__51843__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51843__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51843__$1);
var G__52106 = cljs.core.chunk_rest(seq__51843__$1);
var G__52107 = c__4679__auto__;
var G__52108 = cljs.core.count(c__4679__auto__);
var G__52109 = (0);
seq__51843 = G__52106;
chunk__51846 = G__52107;
count__51847 = G__52108;
i__51848 = G__52109;
continue;
} else {
var ext = cljs.core.first(seq__51843__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__52112 = cljs.core.next(seq__51843__$1);
var G__52113 = null;
var G__52114 = (0);
var G__52115 = (0);
seq__51843 = G__52112;
chunk__51846 = G__52113;
count__51847 = G__52114;
i__51848 = G__52115;
continue;
} else {
var G__52116 = cljs.core.next(seq__51843__$1);
var G__52117 = null;
var G__52118 = (0);
var G__52119 = (0);
seq__51843 = G__52116;
chunk__51846 = G__52117;
count__51847 = G__52118;
i__51848 = G__52119;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq51819){
var G__51820 = cljs.core.first(seq51819);
var seq51819__$1 = cljs.core.next(seq51819);
var G__51821 = cljs.core.first(seq51819__$1);
var seq51819__$2 = cljs.core.next(seq51819__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51820,G__51821,seq51819__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__51891,p__51892){
var map__51893 = p__51891;
var map__51893__$1 = cljs.core.__destructure_map(map__51893);
var runtime = map__51893__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51893__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__51894 = p__51892;
var map__51894__$1 = cljs.core.__destructure_map(map__51894);
var msg = map__51894__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51894__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__51899 = cljs.core.deref(state_ref);
var map__51899__$1 = cljs.core.__destructure_map(map__51899);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51899__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51899__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__51917){
var map__51919 = p__51917;
var map__51919__$1 = cljs.core.__destructure_map(map__51919);
var runtime = map__51919__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51919__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__51932,msg){
var map__51935 = p__51932;
var map__51935__$1 = cljs.core.__destructure_map(map__51935);
var runtime = map__51935__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51935__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__51946,key,p__51947){
var map__51948 = p__51946;
var map__51948__$1 = cljs.core.__destructure_map(map__51948);
var state = map__51948__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51948__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__51949 = p__51947;
var map__51949__$1 = cljs.core.__destructure_map(map__51949);
var spec = map__51949__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51949__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__51953,key,spec){
var map__51954 = p__51953;
var map__51954__$1 = cljs.core.__destructure_map(map__51954);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51954__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__51957_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__51957_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__51958_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__51958_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__51959_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__51959_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__51960_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__51960_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__51961_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__51961_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__51975,key){
var map__51978 = p__51975;
var map__51978__$1 = cljs.core.__destructure_map(map__51978);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51978__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__51986,msg){
var map__51989 = p__51986;
var map__51989__$1 = cljs.core.__destructure_map(map__51989);
var runtime = map__51989__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51989__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__52005,p__52006){
var map__52010 = p__52005;
var map__52010__$1 = cljs.core.__destructure_map(map__52010);
var runtime = map__52010__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52010__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__52011 = p__52006;
var map__52011__$1 = cljs.core.__destructure_map(map__52011);
var msg = map__52011__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52011__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52011__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__52023 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__52026 = null;
var count__52027 = (0);
var i__52028 = (0);
while(true){
if((i__52028 < count__52027)){
var map__52048 = chunk__52026.cljs$core$IIndexed$_nth$arity$2(null,i__52028);
var map__52048__$1 = cljs.core.__destructure_map(map__52048);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52048__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__52187 = seq__52023;
var G__52188 = chunk__52026;
var G__52189 = count__52027;
var G__52190 = (i__52028 + (1));
seq__52023 = G__52187;
chunk__52026 = G__52188;
count__52027 = G__52189;
i__52028 = G__52190;
continue;
} else {
var G__52191 = seq__52023;
var G__52192 = chunk__52026;
var G__52193 = count__52027;
var G__52194 = (i__52028 + (1));
seq__52023 = G__52191;
chunk__52026 = G__52192;
count__52027 = G__52193;
i__52028 = G__52194;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__52023);
if(temp__5804__auto__){
var seq__52023__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52023__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__52023__$1);
var G__52198 = cljs.core.chunk_rest(seq__52023__$1);
var G__52199 = c__4679__auto__;
var G__52200 = cljs.core.count(c__4679__auto__);
var G__52201 = (0);
seq__52023 = G__52198;
chunk__52026 = G__52199;
count__52027 = G__52200;
i__52028 = G__52201;
continue;
} else {
var map__52059 = cljs.core.first(seq__52023__$1);
var map__52059__$1 = cljs.core.__destructure_map(map__52059);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52059__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__52203 = cljs.core.next(seq__52023__$1);
var G__52204 = null;
var G__52205 = (0);
var G__52206 = (0);
seq__52023 = G__52203;
chunk__52026 = G__52204;
count__52027 = G__52205;
i__52028 = G__52206;
continue;
} else {
var G__52208 = cljs.core.next(seq__52023__$1);
var G__52209 = null;
var G__52210 = (0);
var G__52211 = (0);
seq__52023 = G__52208;
chunk__52026 = G__52209;
count__52027 = G__52210;
i__52028 = G__52211;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
