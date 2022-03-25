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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__50027,res){
var map__50028 = p__50027;
var map__50028__$1 = cljs.core.__destructure_map(map__50028);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50028__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50028__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__50035 = res;
var G__50035__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50035,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__50035);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50035__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__50035__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__50038 = arguments.length;
switch (G__50038) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__50051,msg,handlers,timeout_after_ms){
var map__50054 = p__50051;
var map__50054__$1 = cljs.core.__destructure_map(map__50054);
var runtime = map__50054__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50054__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___50253 = arguments.length;
var i__4865__auto___50254 = (0);
while(true){
if((i__4865__auto___50254 < len__4864__auto___50253)){
args__4870__auto__.push((arguments[i__4865__auto___50254]));

var G__50256 = (i__4865__auto___50254 + (1));
i__4865__auto___50254 = G__50256;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__50071,ev,args){
var map__50072 = p__50071;
var map__50072__$1 = cljs.core.__destructure_map(map__50072);
var runtime = map__50072__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50072__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__50073 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__50076 = null;
var count__50077 = (0);
var i__50078 = (0);
while(true){
if((i__50078 < count__50077)){
var ext = chunk__50076.cljs$core$IIndexed$_nth$arity$2(null,i__50078);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__50268 = seq__50073;
var G__50269 = chunk__50076;
var G__50270 = count__50077;
var G__50271 = (i__50078 + (1));
seq__50073 = G__50268;
chunk__50076 = G__50269;
count__50077 = G__50270;
i__50078 = G__50271;
continue;
} else {
var G__50272 = seq__50073;
var G__50273 = chunk__50076;
var G__50274 = count__50077;
var G__50275 = (i__50078 + (1));
seq__50073 = G__50272;
chunk__50076 = G__50273;
count__50077 = G__50274;
i__50078 = G__50275;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__50073);
if(temp__5804__auto__){
var seq__50073__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50073__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__50073__$1);
var G__50278 = cljs.core.chunk_rest(seq__50073__$1);
var G__50279 = c__4679__auto__;
var G__50280 = cljs.core.count(c__4679__auto__);
var G__50281 = (0);
seq__50073 = G__50278;
chunk__50076 = G__50279;
count__50077 = G__50280;
i__50078 = G__50281;
continue;
} else {
var ext = cljs.core.first(seq__50073__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__50287 = cljs.core.next(seq__50073__$1);
var G__50288 = null;
var G__50289 = (0);
var G__50290 = (0);
seq__50073 = G__50287;
chunk__50076 = G__50288;
count__50077 = G__50289;
i__50078 = G__50290;
continue;
} else {
var G__50293 = cljs.core.next(seq__50073__$1);
var G__50294 = null;
var G__50295 = (0);
var G__50296 = (0);
seq__50073 = G__50293;
chunk__50076 = G__50294;
count__50077 = G__50295;
i__50078 = G__50296;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq50061){
var G__50062 = cljs.core.first(seq50061);
var seq50061__$1 = cljs.core.next(seq50061);
var G__50063 = cljs.core.first(seq50061__$1);
var seq50061__$2 = cljs.core.next(seq50061__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50062,G__50063,seq50061__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__50091,p__50092){
var map__50093 = p__50091;
var map__50093__$1 = cljs.core.__destructure_map(map__50093);
var runtime = map__50093__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50093__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__50094 = p__50092;
var map__50094__$1 = cljs.core.__destructure_map(map__50094);
var msg = map__50094__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50094__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__50096 = cljs.core.deref(state_ref);
var map__50096__$1 = cljs.core.__destructure_map(map__50096);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50096__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50096__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__50107){
var map__50108 = p__50107;
var map__50108__$1 = cljs.core.__destructure_map(map__50108);
var runtime = map__50108__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50108__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__50116,msg){
var map__50118 = p__50116;
var map__50118__$1 = cljs.core.__destructure_map(map__50118);
var runtime = map__50118__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50118__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__50127,key,p__50128){
var map__50129 = p__50127;
var map__50129__$1 = cljs.core.__destructure_map(map__50129);
var state = map__50129__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50129__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__50130 = p__50128;
var map__50130__$1 = cljs.core.__destructure_map(map__50130);
var spec = map__50130__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50130__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__50145,key,spec){
var map__50146 = p__50145;
var map__50146__$1 = cljs.core.__destructure_map(map__50146);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50146__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__50152_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__50152_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__50153_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__50153_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__50154_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__50154_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__50155_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__50155_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__50156_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__50156_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__50166,key){
var map__50171 = p__50166;
var map__50171__$1 = cljs.core.__destructure_map(map__50171);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50171__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__50185,msg){
var map__50187 = p__50185;
var map__50187__$1 = cljs.core.__destructure_map(map__50187);
var runtime = map__50187__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50187__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__50194,p__50195){
var map__50197 = p__50194;
var map__50197__$1 = cljs.core.__destructure_map(map__50197);
var runtime = map__50197__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50197__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__50198 = p__50195;
var map__50198__$1 = cljs.core.__destructure_map(map__50198);
var msg = map__50198__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50198__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50198__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__50206 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__50208 = null;
var count__50209 = (0);
var i__50210 = (0);
while(true){
if((i__50210 < count__50209)){
var map__50219 = chunk__50208.cljs$core$IIndexed$_nth$arity$2(null,i__50210);
var map__50219__$1 = cljs.core.__destructure_map(map__50219);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50219__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__50351 = seq__50206;
var G__50352 = chunk__50208;
var G__50353 = count__50209;
var G__50354 = (i__50210 + (1));
seq__50206 = G__50351;
chunk__50208 = G__50352;
count__50209 = G__50353;
i__50210 = G__50354;
continue;
} else {
var G__50356 = seq__50206;
var G__50357 = chunk__50208;
var G__50358 = count__50209;
var G__50359 = (i__50210 + (1));
seq__50206 = G__50356;
chunk__50208 = G__50357;
count__50209 = G__50358;
i__50210 = G__50359;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__50206);
if(temp__5804__auto__){
var seq__50206__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50206__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__50206__$1);
var G__50361 = cljs.core.chunk_rest(seq__50206__$1);
var G__50362 = c__4679__auto__;
var G__50363 = cljs.core.count(c__4679__auto__);
var G__50364 = (0);
seq__50206 = G__50361;
chunk__50208 = G__50362;
count__50209 = G__50363;
i__50210 = G__50364;
continue;
} else {
var map__50227 = cljs.core.first(seq__50206__$1);
var map__50227__$1 = cljs.core.__destructure_map(map__50227);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50227__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__50365 = cljs.core.next(seq__50206__$1);
var G__50366 = null;
var G__50367 = (0);
var G__50368 = (0);
seq__50206 = G__50365;
chunk__50208 = G__50366;
count__50209 = G__50367;
i__50210 = G__50368;
continue;
} else {
var G__50369 = cljs.core.next(seq__50206__$1);
var G__50370 = null;
var G__50371 = (0);
var G__50372 = (0);
seq__50206 = G__50369;
chunk__50208 = G__50370;
count__50209 = G__50371;
i__50210 = G__50372;
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
