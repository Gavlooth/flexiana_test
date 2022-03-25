goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__52662,p__52663){
var map__52664 = p__52662;
var map__52664__$1 = cljs.core.__destructure_map(map__52664);
var svc = map__52664__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52664__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52664__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52664__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__52665 = p__52663;
var map__52665__$1 = cljs.core.__destructure_map(map__52665);
var msg = map__52665__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52665__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52665__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52665__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52665__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__52677,p__52678){
var map__52679 = p__52677;
var map__52679__$1 = cljs.core.__destructure_map(map__52679);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52679__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__52680 = p__52678;
var map__52680__$1 = cljs.core.__destructure_map(map__52680);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52680__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__52689,p__52690){
var map__52693 = p__52689;
var map__52693__$1 = cljs.core.__destructure_map(map__52693);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52693__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52693__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__52695 = p__52690;
var map__52695__$1 = cljs.core.__destructure_map(map__52695);
var msg = map__52695__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52695__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__52699,tid){
var map__52700 = p__52699;
var map__52700__$1 = cljs.core.__destructure_map(map__52700);
var svc = map__52700__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52700__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__52715 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__52716 = null;
var count__52717 = (0);
var i__52718 = (0);
while(true){
if((i__52718 < count__52717)){
var vec__52743 = chunk__52716.cljs$core$IIndexed$_nth$arity$2(null,i__52718);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52743,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52743,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__52825 = seq__52715;
var G__52826 = chunk__52716;
var G__52827 = count__52717;
var G__52828 = (i__52718 + (1));
seq__52715 = G__52825;
chunk__52716 = G__52826;
count__52717 = G__52827;
i__52718 = G__52828;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__52715);
if(temp__5804__auto__){
var seq__52715__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52715__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__52715__$1);
var G__52831 = cljs.core.chunk_rest(seq__52715__$1);
var G__52832 = c__4679__auto__;
var G__52833 = cljs.core.count(c__4679__auto__);
var G__52834 = (0);
seq__52715 = G__52831;
chunk__52716 = G__52832;
count__52717 = G__52833;
i__52718 = G__52834;
continue;
} else {
var vec__52753 = cljs.core.first(seq__52715__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52753,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52753,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__52840 = cljs.core.next(seq__52715__$1);
var G__52841 = null;
var G__52842 = (0);
var G__52843 = (0);
seq__52715 = G__52840;
chunk__52716 = G__52841;
count__52717 = G__52842;
i__52718 = G__52843;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__52705_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__52705_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__52706_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__52706_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__52708_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__52708_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__52709_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__52709_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__52778){
var map__52779 = p__52778;
var map__52779__$1 = cljs.core.__destructure_map(map__52779);
var svc = map__52779__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52779__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52779__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
