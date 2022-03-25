goog.provide('utils');
goog.scope(function(){
  utils.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * @define {boolean}
 */
utils.WITH_CORS = goog.define("utils.WITH_CORS",false);
utils.clj__GT_json = (function utils$clj__GT_json(s){
return JSON.stringify(cljs.core.clj__GT_js(s));
});
utils.form_data = (function utils$form_data(x){
if(cljs.core.map_QMARK_(x)){
var form = (new FormData());
var seq__53074_53438 = cljs.core.seq(cljs.core.seq(x));
var chunk__53075_53439 = null;
var count__53076_53440 = (0);
var i__53077_53441 = (0);
while(true){
if((i__53077_53441 < count__53076_53440)){
var vec__53084_53442 = chunk__53075_53439.cljs$core$IIndexed$_nth$arity$2(null,i__53077_53441);
var k_53443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53084_53442,(0),null);
var v_53444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53084_53442,(1),null);
form.append(cljs.core.name(k_53443),v_53444);


var G__53448 = seq__53074_53438;
var G__53449 = chunk__53075_53439;
var G__53450 = count__53076_53440;
var G__53451 = (i__53077_53441 + (1));
seq__53074_53438 = G__53448;
chunk__53075_53439 = G__53449;
count__53076_53440 = G__53450;
i__53077_53441 = G__53451;
continue;
} else {
var temp__5804__auto___53452 = cljs.core.seq(seq__53074_53438);
if(temp__5804__auto___53452){
var seq__53074_53453__$1 = temp__5804__auto___53452;
if(cljs.core.chunked_seq_QMARK_(seq__53074_53453__$1)){
var c__4679__auto___53455 = cljs.core.chunk_first(seq__53074_53453__$1);
var G__53456 = cljs.core.chunk_rest(seq__53074_53453__$1);
var G__53457 = c__4679__auto___53455;
var G__53458 = cljs.core.count(c__4679__auto___53455);
var G__53459 = (0);
seq__53074_53438 = G__53456;
chunk__53075_53439 = G__53457;
count__53076_53440 = G__53458;
i__53077_53441 = G__53459;
continue;
} else {
var vec__53087_53460 = cljs.core.first(seq__53074_53453__$1);
var k_53461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53087_53460,(0),null);
var v_53462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53087_53460,(1),null);
form.append(cljs.core.name(k_53461),v_53462);


var G__53463 = cljs.core.next(seq__53074_53453__$1);
var G__53464 = null;
var G__53465 = (0);
var G__53466 = (0);
seq__53074_53438 = G__53463;
chunk__53075_53439 = G__53464;
count__53076_53440 = G__53465;
i__53077_53441 = G__53466;
continue;
}
} else {
}
}
break;
}

return form;
} else {
var form = (new FormData(x));
return form;
}
});
utils.format_request = (function utils$format_request(var_args){
var args__4870__auto__ = [];
var len__4864__auto___53468 = arguments.length;
var i__4865__auto___53469 = (0);
while(true){
if((i__4865__auto___53469 < len__4864__auto___53468)){
args__4870__auto__.push((arguments[i__4865__auto___53469]));

var G__53473 = (i__4865__auto___53469 + (1));
i__4865__auto___53469 = G__53473;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return utils.format_request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(utils.format_request.cljs$core$IFn$_invoke$arity$variadic = (function (body,p__53092){
var map__53093 = p__53092;
var map__53093__$1 = cljs.core.__destructure_map(map__53093);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53093__$1,new cljs.core.Keyword(null,"mode","mode",654403691),"cors");
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53093__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53093__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json");
var request = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53093__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var response = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53093__$1,new cljs.core.Keyword(null,"response","response",-1068424192),"text");
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53093__$1,new cljs.core.Keyword(null,"method","method",55703592),"post");
var G__53094_53484 = content_type;
var G__53095_53485 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"tomato"], null);
(utils.clog.cljs$core$IFn$_invoke$arity$2 ? utils.clog.cljs$core$IFn$_invoke$arity$2(G__53094_53484,G__53095_53485) : utils.clog.call(null,G__53094_53484,G__53095_53485));

var content_type__$1 = ((cljs.core.not(request))?content_type:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("json",cljs.core.name(request)))?"application/json":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("form",cljs.core.name(request)))?"application/x-www-form-urlencoded":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("application/x-www-form-urlencoded",cljs.core.name(request)))?"application/x-www-form-urlencoded":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("text",cljs.core.name(request)))?"application/json":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("text/plain",cljs.core.name(request)))?"application/json":content_type
))))));
var body__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("application/json",content_type__$1))?JSON.stringify(utils.clj__GT_json(body)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("application/x-www-form-urlencoded",content_type__$1))?(new URLSearchParams(utils.form_data(body))):body
));
var x__53068__auto__ = cljs.core.clj__GT_js((function (){var x__53068__auto__ = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(token)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"auth-token","auth-token",30990976),token], null):null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),content_type__$1], null)], 0)),new cljs.core.Keyword(null,"mode","mode",654403691),mode,new cljs.core.Keyword(null,"body","body",-2049205669),body__$1,new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.name(response)], null);
if(cljs.core.truth_(goog.DEBUG)){
console.log(["%cin file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),62,new cljs.core.Keyword(null,"column","column",2078222095),19,new cljs.core.Keyword(null,"end-line","end-line",1837326455),68,new cljs.core.Keyword(null,"end-column","end-column",1425389514),55], null))),", line:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),62,new cljs.core.Keyword(null,"column","column",2078222095),19,new cljs.core.Keyword(null,"end-line","end-line",1837326455),68,new cljs.core.Keyword(null,"end-column","end-column",1425389514),55], null)))].join(''),"color:olive;font-size:1.1em;");

console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"token","token",429068312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"auth-token","auth-token",30990976),new cljs.core.Symbol(null,"token","token",429068312,null)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null)),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Symbol(null,"mode","mode",-2000032078,null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Symbol(null,"method","method",1696235119,null),new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"response","response",572107335,null))], null))," --->"].join(''),"color:purple;font-size:1.2em;");

console.log(["%c",(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53100_53516 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53101_53517 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53102_53518 = true;
var _STAR_print_fn_STAR__temp_val__53103_53519 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53102_53518);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53103_53519);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x__53068__auto__);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53101_53517);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53100_53516);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})()].join(''),"color:green;font-size:1.1em;");
} else {
}

return x__53068__auto__;
})());
if(cljs.core.truth_(goog.DEBUG)){
console.log(["%cin file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),62,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"end-line","end-line",1837326455),68,new cljs.core.Keyword(null,"end-column","end-column",1425389514),57], null))),", line:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"utils.cljs",new cljs.core.Keyword(null,"line","line",212345235),62,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"end-line","end-line",1837326455),68,new cljs.core.Keyword(null,"end-column","end-column",1425389514),57], null)))].join(''),"color:olive;font-size:1.1em;");

console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),cljs.core.list(new cljs.core.Symbol("m","spy","m/spy",-1949716014,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.list(new cljs.core.Symbol(null,"merge","merge",-163787882,null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"token","token",429068312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"auth-token","auth-token",30990976),new cljs.core.Symbol(null,"token","token",429068312,null)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null)),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Symbol(null,"mode","mode",-2000032078,null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Symbol(null,"method","method",1696235119,null),new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"response","response",572107335,null))], null))))," --->"].join(''),"color:purple;font-size:1.2em;");

console.log(["%c",(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53108_53532 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53109_53533 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53110_53534 = true;
var _STAR_print_fn_STAR__temp_val__53111_53535 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53110_53534);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53111_53535);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x__53068__auto__);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53109_53533);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53108_53532);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})()].join(''),"color:green;font-size:1.1em;");
} else {
}

return x__53068__auto__;
}));

(utils.format_request.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(utils.format_request.cljs$lang$applyTo = (function (seq53090){
var G__53091 = cljs.core.first(seq53090);
var seq53090__$1 = cljs.core.next(seq53090);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53091,seq53090__$1);
}));

utils.js_fetch = (function utils$js_fetch(url,obj){
var c__44039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44040__auto__ = (function (){var switch__43814__auto__ = (function (state_53282){
var state_val_53283 = (state_53282[(1)]);
if((state_val_53283 === (65))){
var inst_53129 = (state_53282[(7)]);
var inst_53272 = inst_53129.headers;
var inst_53273 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_53272);
var inst_53274 = ["Server responded with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_53273)].join('');
var inst_53275 = (function(){throw inst_53274})();
var state_53282__$1 = state_53282;
var statearr_53284_53547 = state_53282__$1;
(statearr_53284_53547[(2)] = inst_53275);

(statearr_53284_53547[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (62))){
var inst_53246 = (state_53282[(2)]);
var inst_53247 = ["ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_53246)].join('');
var inst_53248 = [new cljs.core.Keyword(null,"pretty-print","pretty-print",-1314067013),new cljs.core.Keyword(null,"color","color",1011675173)];
var inst_53249 = [true,new cljs.core.Keyword(null,"tomato","tomato",1086708254)];
var inst_53250 = cljs.core.PersistentHashMap.fromArrays(inst_53248,inst_53249);
var inst_53251 = (utils.clog.cljs$core$IFn$_invoke$arity$2 ? utils.clog.cljs$core$IFn$_invoke$arity$2(inst_53247,inst_53250) : utils.clog.call(null,inst_53247,inst_53250));
var state_53282__$1 = state_53282;
var statearr_53285_53550 = state_53282__$1;
(statearr_53285_53550[(2)] = inst_53251);

(statearr_53285_53550[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (7))){
var inst_53116 = (state_53282[(8)]);
var state_53282__$1 = state_53282;
var statearr_53286_53551 = state_53282__$1;
(statearr_53286_53551[(2)] = inst_53116);

(statearr_53286_53551[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (59))){
var inst_53242 = (state_53282[(2)]);
var state_53282__$1 = state_53282;
var statearr_53287_53552 = state_53282__$1;
(statearr_53287_53552[(2)] = inst_53242);

(statearr_53287_53552[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (20))){
var inst_53151 = (state_53282[(9)]);
var inst_53154 = cljs.core.ex_data(inst_53151);
var inst_53155 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_53154);
var inst_53156 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53155,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_53282__$1 = state_53282;
var statearr_53288_53553 = state_53282__$1;
(statearr_53288_53553[(2)] = inst_53156);

(statearr_53288_53553[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (58))){
var inst_53229 = (state_53282[(10)]);
var state_53282__$1 = state_53282;
var statearr_53289_53554 = state_53282__$1;
(statearr_53289_53554[(2)] = inst_53229);

(statearr_53289_53554[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (60))){
var inst_53129 = (state_53282[(7)]);
var _ = (function (){var statearr_53290 = state_53282;
(statearr_53290[(4)] = cljs.core.cons((63),(state_53282[(4)])));

return statearr_53290;
})();
var inst_53257 = inst_53129.ok;
var state_53282__$1 = state_53282;
if(cljs.core.truth_(inst_53257)){
var statearr_53291_53559 = state_53282__$1;
(statearr_53291_53559[(1)] = (64));

} else {
var statearr_53292_53560 = state_53282__$1;
(statearr_53292_53560[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (27))){
var inst_53169 = (state_53282[(11)]);
var inst_53170 = (state_53282[(12)]);
var inst_53169__$1 = (state_53282[(2)]);
var inst_53170__$1 = (inst_53169__$1 instanceof cljs.core.ExceptionInfo);
var state_53282__$1 = (function (){var statearr_53293 = state_53282;
(statearr_53293[(11)] = inst_53169__$1);

(statearr_53293[(12)] = inst_53170__$1);

return statearr_53293;
})();
if(cljs.core.truth_(inst_53170__$1)){
var statearr_53294_53565 = state_53282__$1;
(statearr_53294_53565[(1)] = (28));

} else {
var statearr_53295_53566 = state_53282__$1;
(statearr_53295_53566[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (1))){
var inst_53112 = (utils.oget.cljs$core$IFn$_invoke$arity$2 ? utils.oget.cljs$core$IFn$_invoke$arity$2(obj,"response") : utils.oget.call(null,obj,"response"));
var inst_53113 = fetch(url,obj);
var inst_53114 = cljs.core.async.interop.p__GT_c(inst_53113);
var state_53282__$1 = (function (){var statearr_53296 = state_53282;
(statearr_53296[(13)] = inst_53112);

return statearr_53296;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53282__$1,(2),inst_53114);
} else {
if((state_val_53283 === (24))){
var inst_53151 = (state_53282[(9)]);
var state_53282__$1 = state_53282;
var statearr_53297_53567 = state_53282__$1;
(statearr_53297_53567[(2)] = inst_53151);

(statearr_53297_53567[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (55))){
var inst_53230 = (state_53282[(14)]);
var state_53282__$1 = state_53282;
var statearr_53298_53568 = state_53282__$1;
(statearr_53298_53568[(2)] = inst_53230);

(statearr_53298_53568[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (39))){
var inst_53192 = (state_53282[(15)]);
var state_53282__$1 = state_53282;
var statearr_53299_53569 = state_53282__$1;
(statearr_53299_53569[(2)] = inst_53192);

(statearr_53299_53569[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (46))){
var inst_53210 = (state_53282[(16)]);
var inst_53213 = cljs.core.ex_data(inst_53210);
var inst_53214 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_53213);
var inst_53215 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53214,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_53282__$1 = state_53282;
var statearr_53300_53573 = state_53282__$1;
(statearr_53300_53573[(2)] = inst_53215);

(statearr_53300_53573[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (4))){
var inst_53117 = (state_53282[(17)]);
var state_53282__$1 = state_53282;
var statearr_53301_53574 = state_53282__$1;
(statearr_53301_53574[(2)] = inst_53117);

(statearr_53301_53574[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (54))){
var inst_53229 = (state_53282[(10)]);
var inst_53232 = cljs.core.ex_data(inst_53229);
var inst_53233 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_53232);
var inst_53234 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53233,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_53282__$1 = state_53282;
var statearr_53302_53575 = state_53282__$1;
(statearr_53302_53575[(2)] = inst_53234);

(statearr_53302_53575[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (15))){
var inst_53133 = (state_53282[(18)]);
var inst_53143 = (function(){throw inst_53133})();
var state_53282__$1 = state_53282;
var statearr_53303_53580 = state_53282__$1;
(statearr_53303_53580[(2)] = inst_53143);

(statearr_53303_53580[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (48))){
var inst_53218 = (state_53282[(2)]);
var state_53282__$1 = state_53282;
if(cljs.core.truth_(inst_53218)){
var statearr_53304_53581 = state_53282__$1;
(statearr_53304_53581[(1)] = (49));

} else {
var statearr_53305_53582 = state_53282__$1;
(statearr_53305_53582[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (50))){
var inst_53210 = (state_53282[(16)]);
var state_53282__$1 = state_53282;
var statearr_53306_53583 = state_53282__$1;
(statearr_53306_53583[(2)] = inst_53210);

(statearr_53306_53583[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (21))){
var inst_53152 = (state_53282[(19)]);
var state_53282__$1 = state_53282;
var statearr_53307_53584 = state_53282__$1;
(statearr_53307_53584[(2)] = inst_53152);

(statearr_53307_53584[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (31))){
var inst_53169 = (state_53282[(11)]);
var inst_53179 = (function(){throw inst_53169})();
var state_53282__$1 = state_53282;
var statearr_53308_53589 = state_53282__$1;
(statearr_53308_53589[(2)] = inst_53179);

(statearr_53308_53589[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (32))){
var inst_53169 = (state_53282[(11)]);
var state_53282__$1 = state_53282;
var statearr_53309_53590 = state_53282__$1;
(statearr_53309_53590[(2)] = inst_53169);

(statearr_53309_53590[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (40))){
var inst_53199 = (state_53282[(2)]);
var state_53282__$1 = state_53282;
if(cljs.core.truth_(inst_53199)){
var statearr_53310_53591 = state_53282__$1;
(statearr_53310_53591[(1)] = (41));

} else {
var statearr_53311_53592 = state_53282__$1;
(statearr_53311_53592[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (56))){
var inst_53237 = (state_53282[(2)]);
var state_53282__$1 = state_53282;
if(cljs.core.truth_(inst_53237)){
var statearr_53312_53593 = state_53282__$1;
(statearr_53312_53593[(1)] = (57));

} else {
var statearr_53313_53594 = state_53282__$1;
(statearr_53313_53594[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (33))){
var inst_53182 = (state_53282[(2)]);
var state_53282__$1 = state_53282;
var statearr_53314_53595 = state_53282__$1;
(statearr_53314_53595[(2)] = inst_53182);

(statearr_53314_53595[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (13))){
var inst_53134 = (state_53282[(20)]);
var state_53282__$1 = state_53282;
var statearr_53315_53597 = state_53282__$1;
(statearr_53315_53597[(2)] = inst_53134);

(statearr_53315_53597[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (22))){
var inst_53159 = (state_53282[(2)]);
var state_53282__$1 = state_53282;
if(cljs.core.truth_(inst_53159)){
var statearr_53316_53598 = state_53282__$1;
(statearr_53316_53598[(1)] = (23));

} else {
var statearr_53317_53599 = state_53282__$1;
(statearr_53317_53599[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (36))){
var inst_53129 = (state_53282[(7)]);
var inst_53188 = inst_53129.json();
var inst_53189 = cljs.core.async.interop.p__GT_c(inst_53188);
var state_53282__$1 = state_53282;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53282__$1,(37),inst_53189);
} else {
if((state_val_53283 === (41))){
var inst_53191 = (state_53282[(21)]);
var inst_53201 = (function(){throw inst_53191})();
var state_53282__$1 = state_53282;
var statearr_53318_53601 = state_53282__$1;
(statearr_53318_53601[(2)] = inst_53201);

(statearr_53318_53601[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (43))){
var inst_53204 = (state_53282[(2)]);
var inst_53205 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_53204,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_53282__$1 = state_53282;
var statearr_53319_53602 = state_53282__$1;
(statearr_53319_53602[(2)] = inst_53205);

(statearr_53319_53602[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (61))){
var inst_53280 = (state_53282[(2)]);
var state_53282__$1 = state_53282;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53282__$1,inst_53280);
} else {
if((state_val_53283 === (29))){
var inst_53170 = (state_53282[(12)]);
var state_53282__$1 = state_53282;
var statearr_53320_53603 = state_53282__$1;
(statearr_53320_53603[(2)] = inst_53170);

(statearr_53320_53603[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (44))){
var inst_53129 = (state_53282[(7)]);
var inst_53207 = inst_53129.json();
var inst_53208 = cljs.core.async.interop.p__GT_c(inst_53207);
var state_53282__$1 = state_53282;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53282__$1,(45),inst_53208);
} else {
if((state_val_53283 === (6))){
var inst_53116 = (state_53282[(8)]);
var inst_53126 = (function(){throw inst_53116})();
var state_53282__$1 = state_53282;
var statearr_53321_53604 = state_53282__$1;
(statearr_53321_53604[(2)] = inst_53126);

(statearr_53321_53604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (28))){
var inst_53169 = (state_53282[(11)]);
var inst_53172 = cljs.core.ex_data(inst_53169);
var inst_53173 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_53172);
var inst_53174 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53173,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_53282__$1 = state_53282;
var statearr_53322_53605 = state_53282__$1;
(statearr_53322_53605[(2)] = inst_53174);

(statearr_53322_53605[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (64))){
var inst_53129 = (state_53282[(7)]);
var inst_53245 = (state_53282[(22)]);
var inst_53259 = [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"status-text","status-text",-1834235478),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_53260 = cljs.core.PersistentHashMap.EMPTY;
var inst_53261 = inst_53129.headers;
var inst_53262 = inst_53261.entries();
var inst_53263 = cljs.core.es6_iterator_seq(inst_53262);
var inst_53264 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_53263);
var inst_53265 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_53260,inst_53264);
var inst_53266 = clojure.walk.keywordize_keys(inst_53265);
var inst_53267 = inst_53129.status;
var inst_53268 = inst_53129.statusText;
var inst_53269 = [inst_53266,inst_53267,inst_53268,inst_53245];
var inst_53270 = cljs.core.PersistentHashMap.fromArrays(inst_53259,inst_53269);
var state_53282__$1 = state_53282;
var statearr_53323_53606 = state_53282__$1;
(statearr_53323_53606[(2)] = inst_53270);

(statearr_53323_53606[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (51))){
var inst_53223 = (state_53282[(2)]);
var inst_53224 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_53223,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_53282__$1 = state_53282;
var statearr_53324_53607 = state_53282__$1;
(statearr_53324_53607[(2)] = inst_53224);

(statearr_53324_53607[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (25))){
var inst_53164 = (state_53282[(2)]);
var state_53282__$1 = state_53282;
var statearr_53325_53608 = state_53282__$1;
(statearr_53325_53608[(2)] = inst_53164);

(statearr_53325_53608[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (34))){
var inst_53129 = (state_53282[(7)]);
var inst_53184 = inst_53129.formData();
var state_53282__$1 = state_53282;
var statearr_53326_53609 = state_53282__$1;
(statearr_53326_53609[(2)] = inst_53184);

(statearr_53326_53609[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (17))){
var inst_53146 = (state_53282[(2)]);
var state_53282__$1 = state_53282;
var statearr_53327_53610 = state_53282__$1;
(statearr_53327_53610[(2)] = inst_53146);

(statearr_53327_53610[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (3))){
var inst_53116 = (state_53282[(8)]);
var inst_53119 = cljs.core.ex_data(inst_53116);
var inst_53120 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_53119);
var inst_53121 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53120,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_53282__$1 = state_53282;
var statearr_53328_53611 = state_53282__$1;
(statearr_53328_53611[(2)] = inst_53121);

(statearr_53328_53611[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (12))){
var inst_53133 = (state_53282[(18)]);
var inst_53136 = cljs.core.ex_data(inst_53133);
var inst_53137 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_53136);
var inst_53138 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53137,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_53282__$1 = state_53282;
var statearr_53329_53612 = state_53282__$1;
(statearr_53329_53612[(2)] = inst_53138);

(statearr_53329_53612[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (2))){
var inst_53117 = (state_53282[(17)]);
var inst_53116 = (state_53282[(8)]);
var inst_53116__$1 = (state_53282[(2)]);
var inst_53117__$1 = (inst_53116__$1 instanceof cljs.core.ExceptionInfo);
var state_53282__$1 = (function (){var statearr_53330 = state_53282;
(statearr_53330[(17)] = inst_53117__$1);

(statearr_53330[(8)] = inst_53116__$1);

return statearr_53330;
})();
if(cljs.core.truth_(inst_53117__$1)){
var statearr_53331_53613 = state_53282__$1;
(statearr_53331_53613[(1)] = (3));

} else {
var statearr_53332_53614 = state_53282__$1;
(statearr_53332_53614[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (66))){
var inst_53277 = (state_53282[(2)]);
var _ = (function (){var statearr_53333 = state_53282;
(statearr_53333[(4)] = cljs.core.rest((state_53282[(4)])));

return statearr_53333;
})();
var state_53282__$1 = state_53282;
var statearr_53334_53615 = state_53282__$1;
(statearr_53334_53615[(2)] = inst_53277);

(statearr_53334_53615[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (23))){
var inst_53151 = (state_53282[(9)]);
var inst_53161 = (function(){throw inst_53151})();
var state_53282__$1 = state_53282;
var statearr_53335_53616 = state_53282__$1;
(statearr_53335_53616[(2)] = inst_53161);

(statearr_53335_53616[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (47))){
var inst_53211 = (state_53282[(23)]);
var state_53282__$1 = state_53282;
var statearr_53336_53617 = state_53282__$1;
(statearr_53336_53617[(2)] = inst_53211);

(statearr_53336_53617[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (35))){
var inst_53129 = (state_53282[(7)]);
var inst_53186 = inst_53129.arrayBuffer();
var state_53282__$1 = state_53282;
var statearr_53337_53618 = state_53282__$1;
(statearr_53337_53618[(2)] = inst_53186);

(statearr_53337_53618[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (19))){
var inst_53151 = (state_53282[(9)]);
var inst_53152 = (state_53282[(19)]);
var inst_53151__$1 = (state_53282[(2)]);
var inst_53152__$1 = (inst_53151__$1 instanceof cljs.core.ExceptionInfo);
var state_53282__$1 = (function (){var statearr_53338 = state_53282;
(statearr_53338[(9)] = inst_53151__$1);

(statearr_53338[(19)] = inst_53152__$1);

return statearr_53338;
})();
if(cljs.core.truth_(inst_53152__$1)){
var statearr_53339_53619 = state_53282__$1;
(statearr_53339_53619[(1)] = (20));

} else {
var statearr_53340_53620 = state_53282__$1;
(statearr_53340_53620[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (57))){
var inst_53229 = (state_53282[(10)]);
var inst_53239 = (function(){throw inst_53229})();
var state_53282__$1 = state_53282;
var statearr_53341_53621 = state_53282__$1;
(statearr_53341_53621[(2)] = inst_53239);

(statearr_53341_53621[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (11))){
var inst_53134 = (state_53282[(20)]);
var inst_53133 = (state_53282[(18)]);
var inst_53133__$1 = (state_53282[(2)]);
var inst_53134__$1 = (inst_53133__$1 instanceof cljs.core.ExceptionInfo);
var state_53282__$1 = (function (){var statearr_53342 = state_53282;
(statearr_53342[(20)] = inst_53134__$1);

(statearr_53342[(18)] = inst_53133__$1);

return statearr_53342;
})();
if(cljs.core.truth_(inst_53134__$1)){
var statearr_53343_53622 = state_53282__$1;
(statearr_53343_53622[(1)] = (12));

} else {
var statearr_53344_53623 = state_53282__$1;
(statearr_53344_53623[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (9))){
var inst_53245 = (state_53282[(2)]);
var state_53282__$1 = (function (){var statearr_53345 = state_53282;
(statearr_53345[(22)] = inst_53245);

return statearr_53345;
})();
var statearr_53346_53624 = state_53282__$1;
(statearr_53346_53624[(2)] = null);

(statearr_53346_53624[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (5))){
var inst_53124 = (state_53282[(2)]);
var state_53282__$1 = state_53282;
if(cljs.core.truth_(inst_53124)){
var statearr_53347_53625 = state_53282__$1;
(statearr_53347_53625[(1)] = (6));

} else {
var statearr_53348_53626 = state_53282__$1;
(statearr_53348_53626[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (14))){
var inst_53141 = (state_53282[(2)]);
var state_53282__$1 = state_53282;
if(cljs.core.truth_(inst_53141)){
var statearr_53349_53631 = state_53282__$1;
(statearr_53349_53631[(1)] = (15));

} else {
var statearr_53350_53632 = state_53282__$1;
(statearr_53350_53632[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (45))){
var inst_53210 = (state_53282[(16)]);
var inst_53211 = (state_53282[(23)]);
var inst_53210__$1 = (state_53282[(2)]);
var inst_53211__$1 = (inst_53210__$1 instanceof cljs.core.ExceptionInfo);
var state_53282__$1 = (function (){var statearr_53351 = state_53282;
(statearr_53351[(16)] = inst_53210__$1);

(statearr_53351[(23)] = inst_53211__$1);

return statearr_53351;
})();
if(cljs.core.truth_(inst_53211__$1)){
var statearr_53352_53633 = state_53282__$1;
(statearr_53352_53633[(1)] = (46));

} else {
var statearr_53353_53634 = state_53282__$1;
(statearr_53353_53634[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (53))){
var inst_53229 = (state_53282[(10)]);
var inst_53230 = (state_53282[(14)]);
var inst_53229__$1 = (state_53282[(2)]);
var inst_53230__$1 = (inst_53229__$1 instanceof cljs.core.ExceptionInfo);
var state_53282__$1 = (function (){var statearr_53354 = state_53282;
(statearr_53354[(10)] = inst_53229__$1);

(statearr_53354[(14)] = inst_53230__$1);

return statearr_53354;
})();
if(cljs.core.truth_(inst_53230__$1)){
var statearr_53355_53635 = state_53282__$1;
(statearr_53355_53635[(1)] = (54));

} else {
var statearr_53356_53636 = state_53282__$1;
(statearr_53356_53636[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (26))){
var inst_53129 = (state_53282[(7)]);
var inst_53166 = inst_53129.blob();
var inst_53167 = cljs.core.async.interop.p__GT_c(inst_53166);
var state_53282__$1 = state_53282;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53282__$1,(27),inst_53167);
} else {
if((state_val_53283 === (16))){
var inst_53133 = (state_53282[(18)]);
var state_53282__$1 = state_53282;
var statearr_53357_53641 = state_53282__$1;
(statearr_53357_53641[(2)] = inst_53133);

(statearr_53357_53641[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (38))){
var inst_53191 = (state_53282[(21)]);
var inst_53194 = cljs.core.ex_data(inst_53191);
var inst_53195 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_53194);
var inst_53196 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53195,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_53282__$1 = state_53282;
var statearr_53358_53642 = state_53282__$1;
(statearr_53358_53642[(2)] = inst_53196);

(statearr_53358_53642[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (30))){
var inst_53177 = (state_53282[(2)]);
var state_53282__$1 = state_53282;
if(cljs.core.truth_(inst_53177)){
var statearr_53359_53643 = state_53282__$1;
(statearr_53359_53643[(1)] = (31));

} else {
var statearr_53360_53644 = state_53282__$1;
(statearr_53360_53644[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (10))){
var inst_53129 = (state_53282[(7)]);
var inst_53130 = inst_53129.text();
var inst_53131 = cljs.core.async.interop.p__GT_c(inst_53130);
var state_53282__$1 = state_53282;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53282__$1,(11),inst_53131);
} else {
if((state_val_53283 === (18))){
var inst_53129 = (state_53282[(7)]);
var inst_53148 = inst_53129.json();
var inst_53149 = cljs.core.async.interop.p__GT_c(inst_53148);
var state_53282__$1 = state_53282;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53282__$1,(19),inst_53149);
} else {
if((state_val_53283 === (52))){
var inst_53129 = (state_53282[(7)]);
var inst_53226 = inst_53129.body;
var inst_53227 = cljs.core.async.interop.p__GT_c(inst_53226);
var state_53282__$1 = state_53282;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53282__$1,(53),inst_53227);
} else {
if((state_val_53283 === (42))){
var inst_53191 = (state_53282[(21)]);
var state_53282__$1 = state_53282;
var statearr_53362_53648 = state_53282__$1;
(statearr_53362_53648[(2)] = inst_53191);

(statearr_53362_53648[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (37))){
var inst_53192 = (state_53282[(15)]);
var inst_53191 = (state_53282[(21)]);
var inst_53191__$1 = (state_53282[(2)]);
var inst_53192__$1 = (inst_53191__$1 instanceof cljs.core.ExceptionInfo);
var state_53282__$1 = (function (){var statearr_53363 = state_53282;
(statearr_53363[(15)] = inst_53192__$1);

(statearr_53363[(21)] = inst_53191__$1);

return statearr_53363;
})();
if(cljs.core.truth_(inst_53192__$1)){
var statearr_53364_53649 = state_53282__$1;
(statearr_53364_53649[(1)] = (38));

} else {
var statearr_53365_53650 = state_53282__$1;
(statearr_53365_53650[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (63))){
var _ = (function (){var statearr_53366 = state_53282;
(statearr_53366[(4)] = cljs.core.rest((state_53282[(4)])));

return statearr_53366;
})();
var state_53282__$1 = state_53282;
var ex53361 = (state_53282__$1[(2)]);
var statearr_53367_53651 = state_53282__$1;
(statearr_53367_53651[(5)] = ex53361);


if((ex53361 instanceof Error)){
var statearr_53368_53652 = state_53282__$1;
(statearr_53368_53652[(1)] = (62));

(statearr_53368_53652[(5)] = null);

} else {
throw ex53361;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (8))){
var inst_53112 = (state_53282[(13)]);
var inst_53129 = (state_53282[(2)]);
var state_53282__$1 = (function (){var statearr_53369 = state_53282;
(statearr_53369[(7)] = inst_53129);

return statearr_53369;
})();
var G__53370_53653 = inst_53112;
switch (G__53370_53653) {
case "text":
var statearr_53371_53655 = state_53282__$1;
(statearr_53371_53655[(1)] = (10));


break;
case "json":
var statearr_53372_53656 = state_53282__$1;
(statearr_53372_53656[(1)] = (18));


break;
case "blob":
var statearr_53373_53657 = state_53282__$1;
(statearr_53373_53657[(1)] = (26));


break;
case "form-data":
var statearr_53374_53658 = state_53282__$1;
(statearr_53374_53658[(1)] = (34));


break;
case "array-buffer":
var statearr_53375_53659 = state_53282__$1;
(statearr_53375_53659[(1)] = (35));


break;
case "cljs":
var statearr_53376_53660 = state_53282__$1;
(statearr_53376_53660[(1)] = (36));


break;
case "clj":
var statearr_53377_53661 = state_53282__$1;
(statearr_53377_53661[(1)] = (44));


break;
default:
var statearr_53378_53662 = state_53282__$1;
(statearr_53378_53662[(1)] = (52));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53283 === (49))){
var inst_53210 = (state_53282[(16)]);
var inst_53220 = (function(){throw inst_53210})();
var state_53282__$1 = state_53282;
var statearr_53379_53663 = state_53282__$1;
(statearr_53379_53663[(2)] = inst_53220);

(statearr_53379_53663[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var utils$js_fetch_$_state_machine__43815__auto__ = null;
var utils$js_fetch_$_state_machine__43815__auto____0 = (function (){
var statearr_53380 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53380[(0)] = utils$js_fetch_$_state_machine__43815__auto__);

(statearr_53380[(1)] = (1));

return statearr_53380;
});
var utils$js_fetch_$_state_machine__43815__auto____1 = (function (state_53282){
while(true){
var ret_value__43816__auto__ = (function (){try{while(true){
var result__43817__auto__ = switch__43814__auto__(state_53282);
if(cljs.core.keyword_identical_QMARK_(result__43817__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43817__auto__;
}
break;
}
}catch (e53381){var ex__43818__auto__ = e53381;
var statearr_53382_53664 = state_53282;
(statearr_53382_53664[(2)] = ex__43818__auto__);


if(cljs.core.seq((state_53282[(4)]))){
var statearr_53383_53665 = state_53282;
(statearr_53383_53665[(1)] = cljs.core.first((state_53282[(4)])));

} else {
throw ex__43818__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53666 = state_53282;
state_53282 = G__53666;
continue;
} else {
return ret_value__43816__auto__;
}
break;
}
});
utils$js_fetch_$_state_machine__43815__auto__ = function(state_53282){
switch(arguments.length){
case 0:
return utils$js_fetch_$_state_machine__43815__auto____0.call(this);
case 1:
return utils$js_fetch_$_state_machine__43815__auto____1.call(this,state_53282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
utils$js_fetch_$_state_machine__43815__auto__.cljs$core$IFn$_invoke$arity$0 = utils$js_fetch_$_state_machine__43815__auto____0;
utils$js_fetch_$_state_machine__43815__auto__.cljs$core$IFn$_invoke$arity$1 = utils$js_fetch_$_state_machine__43815__auto____1;
return utils$js_fetch_$_state_machine__43815__auto__;
})()
})();
var state__44041__auto__ = (function (){var statearr_53384 = f__44040__auto__();
(statearr_53384[(6)] = c__44039__auto__);

return statearr_53384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44041__auto__);
}));

return c__44039__auto__;
});
utils.make_walk_handler = (function utils$make_walk_handler(p__53385){
var map__53386 = p__53385;
var map__53386__$1 = cljs.core.__destructure_map(map__53386);
var key_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53386__$1,new cljs.core.Keyword(null,"key-handler","key-handler",1081430159));
var value_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53386__$1,new cljs.core.Keyword(null,"value-handler","value-handler",1383382606));
if(cljs.core.truth_((function (){var and__4251__auto__ = key_handler;
if(cljs.core.truth_(and__4251__auto__)){
return value_handler;
} else {
return and__4251__auto__;
}
})())){
return (function (x){
return (new cljs.core.MapEntry((function (){var G__53387 = cljs.core.key(x);
return (key_handler.cljs$core$IFn$_invoke$arity$1 ? key_handler.cljs$core$IFn$_invoke$arity$1(G__53387) : key_handler.call(null,G__53387));
})(),(function (){var G__53388 = cljs.core.val(x);
return (value_handler.cljs$core$IFn$_invoke$arity$1 ? value_handler.cljs$core$IFn$_invoke$arity$1(G__53388) : value_handler.call(null,G__53388));
})(),null));
});
} else {
if(cljs.core.truth_(value_handler)){
return (function (x){
return (new cljs.core.MapEntry((function (){var fexpr__53389 = cljs.core.key(x);
return (fexpr__53389.cljs$core$IFn$_invoke$arity$0 ? fexpr__53389.cljs$core$IFn$_invoke$arity$0() : fexpr__53389.call(null));
})(),(function (){var G__53390 = cljs.core.val(x);
return (value_handler.cljs$core$IFn$_invoke$arity$1 ? value_handler.cljs$core$IFn$_invoke$arity$1(G__53390) : value_handler.call(null,G__53390));
})(),null));
});
} else {
if(cljs.core.truth_(key_handler)){
return (function (x){
return (new cljs.core.MapEntry((function (){var G__53391 = cljs.core.key(x);
return (key_handler.cljs$core$IFn$_invoke$arity$1 ? key_handler.cljs$core$IFn$_invoke$arity$1(G__53391) : key_handler.call(null,G__53391));
})(),cljs.core.val(x),null));
});
} else {
return (function (x){
return (new cljs.core.MapEntry(cljs.core.key(x),cljs.core.val(x),null));
});

}
}
}
});
utils.transform_collection = (function utils$transform_collection(var_args){
var args__4870__auto__ = [];
var len__4864__auto___53667 = arguments.length;
var i__4865__auto___53668 = (0);
while(true){
if((i__4865__auto___53668 < len__4864__auto___53667)){
args__4870__auto__.push((arguments[i__4865__auto___53668]));

var G__53669 = (i__4865__auto___53668 + (1));
i__4865__auto___53668 = G__53669;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return utils.transform_collection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(utils.transform_collection.cljs$core$IFn$_invoke$arity$variadic = (function (m_STAR_,p__53394){
var map__53395 = p__53394;
var map__53395__$1 = cljs.core.__destructure_map(map__53395);
var key_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53395__$1,new cljs.core.Keyword(null,"key-handler","key-handler",1081430159));
var value_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53395__$1,new cljs.core.Keyword(null,"value-handler","value-handler",1383382606));
var collection_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53395__$1,new cljs.core.Keyword(null,"collection-handler","collection-handler",1033381214),cljs.core.identity);
var map_handler = utils.make_walk_handler(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key-handler","key-handler",1081430159),key_handler,new cljs.core.Keyword(null,"value-handler","value-handler",1383382606),value_handler], null));
return clojure.walk.postwalk((function (x){
if(cljs.core.map_entry_QMARK_(x)){
return map_handler(x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.clj__GT_js(x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,collection_handler,x));
} else {
return x;

}
}
}
}),m_STAR_);
}));

(utils.transform_collection.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(utils.transform_collection.cljs$lang$applyTo = (function (seq53392){
var G__53393 = cljs.core.first(seq53392);
var seq53392__$1 = cljs.core.next(seq53392);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53393,seq53392__$1);
}));

utils.transform_map = (function utils$transform_map(var_args){
var args__4870__auto__ = [];
var len__4864__auto___53670 = arguments.length;
var i__4865__auto___53671 = (0);
while(true){
if((i__4865__auto___53671 < len__4864__auto___53670)){
args__4870__auto__.push((arguments[i__4865__auto___53671]));

var G__53672 = (i__4865__auto___53671 + (1));
i__4865__auto___53671 = G__53672;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return utils.transform_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(utils.transform_map.cljs$core$IFn$_invoke$arity$variadic = (function (m_STAR_,p__53398){
var map__53399 = p__53398;
var map__53399__$1 = cljs.core.__destructure_map(map__53399);
var key_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53399__$1,new cljs.core.Keyword(null,"key-handler","key-handler",1081430159));
var value_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53399__$1,new cljs.core.Keyword(null,"value-handler","value-handler",1383382606));
var collection_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53399__$1,new cljs.core.Keyword(null,"collection-handler","collection-handler",1033381214),cljs.core.identity);
var map_handler = utils.make_walk_handler(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key-handler","key-handler",1081430159),key_handler,new cljs.core.Keyword(null,"value-handler","value-handler",1383382606),value_handler], null));
return clojure.walk.postwalk((function (x){
if(cljs.core.map_entry_QMARK_(x)){
return map_handler(x);
} else {
return x;
}
}),m_STAR_);
}));

(utils.transform_map.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(utils.transform_map.cljs$lang$applyTo = (function (seq53396){
var G__53397 = cljs.core.first(seq53396);
var seq53396__$1 = cljs.core.next(seq53396);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53397,seq53396__$1);
}));

utils.fetch = (function utils$fetch(var_args){
var args__4870__auto__ = [];
var len__4864__auto___53673 = arguments.length;
var i__4865__auto___53674 = (0);
while(true){
if((i__4865__auto___53674 < len__4864__auto___53673)){
args__4870__auto__.push((arguments[i__4865__auto___53674]));

var G__53675 = (i__4865__auto___53674 + (1));
i__4865__auto___53674 = G__53675;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return utils.fetch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(utils.fetch.cljs$core$IFn$_invoke$arity$variadic = (function (url,data,p__53404){
var map__53405 = p__53404;
var map__53405__$1 = cljs.core.__destructure_map(map__53405);
var options = map__53405__$1;
var datum = utils.transform_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((utils.WITH_CORS)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),"cors"], null):null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"post",new cljs.core.Keyword(null,"Access-Control-Allow-Origin","Access-Control-Allow-Origin",-93223277),"*",new cljs.core.Keyword(null,"response","response",-1068424192),"text"], null),data,options], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"key-handler","key-handler",1081430159),(function (p1__53400_SHARP_){
return clojure.string.lower_case(cljs.core.name(p1__53400_SHARP_));
})], 0));
return utils.js_fetch(url,cljs.core.clj__GT_js(datum));
}));

(utils.fetch.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(utils.fetch.cljs$lang$applyTo = (function (seq53401){
var G__53402 = cljs.core.first(seq53401);
var seq53401__$1 = cljs.core.next(seq53401);
var G__53403 = cljs.core.first(seq53401__$1);
var seq53401__$2 = cljs.core.next(seq53401__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53402,G__53403,seq53401__$2);
}));

utils.lower_case = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,"");
utils.js_log = console.log;
utils.name_STAR_ = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.name,"");
utils.is_NaN_QMARK_ = (function utils$is_NaN_QMARK_(p1__53406_SHARP_){
return Number.isNaN(p1__53406_SHARP_);
});
utils.query_selector = (function utils$query_selector(var_args){
var args__4870__auto__ = [];
var len__4864__auto___53676 = arguments.length;
var i__4865__auto___53677 = (0);
while(true){
if((i__4865__auto___53677 < len__4864__auto___53676)){
args__4870__auto__.push((arguments[i__4865__auto___53677]));

var G__53678 = (i__4865__auto___53677 + (1));
i__4865__auto___53677 = G__53678;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return utils.query_selector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(utils.query_selector.cljs$core$IFn$_invoke$arity$variadic = (function (query,p__53409){
var map__53410 = p__53409;
var map__53410__$1 = cljs.core.__destructure_map(map__53410);
var all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53410__$1,new cljs.core.Keyword(null,"all","all",892129742));
if(cljs.core.truth_(all)){
return cljs.core.seq(document.querySelectorAll(query));
} else {
return document.querySelector(query);
}
}));

(utils.query_selector.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(utils.query_selector.cljs$lang$applyTo = (function (seq53407){
var G__53408 = cljs.core.first(seq53407);
var seq53407__$1 = cljs.core.next(seq53407);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53408,seq53407__$1);
}));

utils.form__GT_clj = (function utils$form__GT_clj(element){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(Object.fromEntries((new FormData(utils.query_selector(element))).entries()));
});
utils.any_NaN_QMARK_ = (function utils$any_NaN_QMARK_(col){
return cljs.core.boolean$(cljs.core.some(utils.is_NaN_QMARK_,col));
});
utils.set_timeout = (function utils$set_timeout(f,s){
return setTimeout(f,s);
});
utils.debounce = (function utils$debounce(f,interval){
var dbnc = (new goog.async.Debouncer(f,interval));
return (function() { 
var G__53679__delegate = function (args){
return dbnc.fire.apply(dbnc,cljs.core.to_array(args));
};
var G__53679 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53680__i = 0, G__53680__a = new Array(arguments.length -  0);
while (G__53680__i < G__53680__a.length) {G__53680__a[G__53680__i] = arguments[G__53680__i + 0]; ++G__53680__i;}
  args = new cljs.core.IndexedSeq(G__53680__a,0,null);
} 
return G__53679__delegate.call(this,args);};
G__53679.cljs$lang$maxFixedArity = 0;
G__53679.cljs$lang$applyTo = (function (arglist__53681){
var args = cljs.core.seq(arglist__53681);
return G__53679__delegate(args);
});
G__53679.cljs$core$IFn$_invoke$arity$variadic = G__53679__delegate;
return G__53679;
})()
;
});
utils.oget_in = (function utils$oget_in(object,the_keys){
var valid_keys = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(utils.name_STAR_,the_keys);
return utils.goog$module$goog$object.getValueByKeys(object,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,valid_keys));
});
utils.oget = (function utils$oget(var_args){
var G__53412 = arguments.length;
switch (G__53412) {
case 2:
return utils.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return utils.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(utils.oget.cljs$core$IFn$_invoke$arity$2 = (function (object,the_key){
return utils.goog$module$goog$object.get(object,utils.name_STAR_(the_key));
}));

(utils.oget.cljs$core$IFn$_invoke$arity$3 = (function (object,the_key,not_found){
return utils.goog$module$goog$object.get(object,utils.name_STAR_(the_key),not_found);
}));

(utils.oget.cljs$lang$maxFixedArity = 3);

utils.ovalues = (function utils$ovalues(var_args){
var G__53414 = arguments.length;
switch (G__53414) {
case 1:
return utils.ovalues.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return utils.ovalues.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(utils.ovalues.cljs$core$IFn$_invoke$arity$1 = (function (object){
return utils.goog$module$goog$object.getValues(object);
}));

(utils.ovalues.cljs$core$IFn$_invoke$arity$2 = (function (object,key_seq){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(utils.oget,object),key_seq);
}));

(utils.ovalues.cljs$lang$maxFixedArity = 2);

utils.oset_BANG_ = (function utils$oset_BANG_(object,the_key,the_val){
utils.goog$module$goog$object.set(object,utils.name_STAR_(the_key),the_val);

return object;
});
utils.oset_in_BANG_ = (function utils$oset_in_BANG_(object,the_keys,the_value){
var length_1 = (cljs.core.count(the_keys) - (1));
var butlast_keys = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(the_keys,(0),length_1);
var last_key = utils.name_STAR_(cljs.core.last(the_keys));
try{utils.goog$module$goog$object.set(utils.oget_in(object,butlast_keys),last_key,the_value);

return object;
}catch (e53415){if((e53415 instanceof Object)){
var e = e53415;
return console.log("Error: ",e,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null));
} else {
throw e53415;

}
}});
utils.radians__GT_degrees = (function utils$radians__GT_degrees(p1__53416_SHARP_){
return (57.29578 * p1__53416_SHARP_);
});
utils.degrees__GT_radians = (function utils$degrees__GT_radians(p1__53417_SHARP_){
return (p1__53417_SHARP_ / 57.29578);
});
utils.cos = (function utils$cos(p1__53418_SHARP_){
return Math.cos(utils.degrees__GT_radians(p1__53418_SHARP_));
});
utils.sin = (function utils$sin(p1__53419_SHARP_){
return Math.sin(utils.degrees__GT_radians(p1__53419_SHARP_));
});
utils.atan2 = (function utils$atan2(p1__53420_SHARP_,p2__53421_SHARP_){
return Math.atan2(utils.degrees__GT_radians(p1__53420_SHARP_),utils.degrees__GT_radians(p2__53421_SHARP_));
});
/**
 * Like clog bellow but google compiler will remove whith advance o
 * ptimizations. Excellent for development
 */
utils.dlog = (function utils$dlog(var_args){
var args__4870__auto__ = [];
var len__4864__auto___53684 = arguments.length;
var i__4865__auto___53685 = (0);
while(true){
if((i__4865__auto___53685 < len__4864__auto___53684)){
args__4870__auto__.push((arguments[i__4865__auto___53685]));

var G__53686 = (i__4865__auto___53685 + (1));
i__4865__auto___53685 = G__53686;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return utils.dlog.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(utils.dlog.cljs$core$IFn$_invoke$arity$variadic = (function (more){
if(cljs.core.truth_(goog.DEBUG)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(utils.clog,more);
} else {
return null;
}
}));

(utils.dlog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(utils.dlog.cljs$lang$applyTo = (function (seq53422){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53422));
}));

/**
 * Use it when you want to always emmit a message to
 * console. Pass a map with options :color :font :background-color
 * after whatever the arguments to be printed are. The options can
 * also be symbols or srings aside of keywords. Alternatively pass
 * {:pretty-print true} to use clojure's pretty printer.  
 */
utils.clog = (function utils$clog(var_args){
var args__4870__auto__ = [];
var len__4864__auto___53687 = arguments.length;
var i__4865__auto___53688 = (0);
while(true){
if((i__4865__auto___53688 < len__4864__auto___53687)){
args__4870__auto__.push((arguments[i__4865__auto___53688]));

var G__53689 = (i__4865__auto___53688 + (1));
i__4865__auto___53688 = G__53689;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return utils.clog.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(utils.clog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.truth_((function (){var G__53425 = args;
var G__53425__$1 = (((G__53425 == null))?null:cljs.core.last(G__53425));
if((G__53425__$1 == null)){
return null;
} else {
return cljs.core.map_QMARK_(G__53425__$1);
}
})())){
var butlast_args = cljs.core.butlast(args);
var map__53426 = cljs.core.last(args);
var map__53426__$1 = cljs.core.__destructure_map(map__53426);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53426__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var background_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53426__$1,new cljs.core.Keyword(null,"background-color","background-color",570434026));
var font_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53426__$1,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583));
var font_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53426__$1,new cljs.core.Keyword(null,"font-size","font-size",-1847940346));
var json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53426__$1,new cljs.core.Keyword(null,"json","json",1279968570));
var pretty_print = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53426__$1,new cljs.core.Keyword(null,"pretty-print","pretty-print",-1314067013));
var with_options_QMARK_ = (function (){var or__4253__auto__ = color;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = background_color;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = font_weight;
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
var or__4253__auto____$3 = font_size;
if(cljs.core.truth_(or__4253__auto____$3)){
return or__4253__auto____$3;
} else {
var or__4253__auto____$4 = json;
if(cljs.core.truth_(or__4253__auto____$4)){
return or__4253__auto____$4;
} else {
return pretty_print;
}
}
}
}
}
})();
if(cljs.core.truth_(with_options_QMARK_)){
var css_options = ["color:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(utils.name_STAR_(color)),";","background-color:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(utils.name_STAR_(background_color)),";","font-weight:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(utils.name_STAR_(font_weight)),";","font-size:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(utils.name_STAR_(font_size))].join('');
var G__53427 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"%","c",(cljs.core.truth_(pretty_print)?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__53423_SHARP_){
var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53429_53690 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53430_53691 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53431_53692 = true;
var _STAR_print_fn_STAR__temp_val__53432_53693 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53431_53692);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53432_53693);

try{fipp.edn.pprint.cljs$core$IFn$_invoke$arity$1(p1__53423_SHARP_);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53430_53691);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53429_53690);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
}),butlast_args):butlast_args
));
var G__53428 = css_options;
return (utils.js_log.cljs$core$IFn$_invoke$arity$2 ? utils.js_log.cljs$core$IFn$_invoke$arity$2(G__53427,G__53428) : utils.js_log.call(null,G__53427,G__53428));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(utils.js_log,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(utils.js_log,args);
}
}));

(utils.clog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(utils.clog.cljs$lang$applyTo = (function (seq53424){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53424));
}));

utils.location_BANG_ = (function utils$location_BANG_(href){
utils.oset_in_BANG_(window,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Symbol(null,"href","href",846725829,null)], null),href);

return (
utils.location = (function utils$location_BANG__$_location(){
return utils.oget_in(window,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Symbol(null,"href","href",846725829,null)], null));
}))
;
});
utils.MILIDAY = (86400000);
utils.months = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["January","February","March","April","May","June","July","August","September","October","November","December"], null);
utils.snake__GT_kebab = (function utils$snake__GT_kebab(x){
return clojure.string.replace(utils.name_STAR_(x),/_/,"-");
});
utils.get_month = (function utils$get_month(obj){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(utils.months,(obj.getMonth() - (1)));
});
utils.epoch = (function utils$epoch(x){
return x.getTime();
});
utils.current_epoch = (function utils$current_epoch(){
return utils.epoch((new goog.date.DateTime()));
});
utils.trim_history = (function utils$trim_history(){
return history.pushState(utils.oget.cljs$core$IFn$_invoke$arity$2(history,new cljs.core.Symbol(null,"state","state",-348086572,null)),"","/#");
});
utils.set_hash_BANG_ = (function utils$set_hash_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___53694 = arguments.length;
var i__4865__auto___53695 = (0);
while(true){
if((i__4865__auto___53695 < len__4864__auto___53694)){
args__4870__auto__.push((arguments[i__4865__auto___53695]));

var G__53696 = (i__4865__auto___53695 + (1));
i__4865__auto___53695 = G__53696;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return utils.set_hash_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(utils.set_hash_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__53435){
var map__53436 = p__53435;
var map__53436__$1 = cljs.core.__destructure_map(map__53436);
var trim = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53436__$1,new cljs.core.Keyword(null,"trim","trim",774319767),true);
if(cljs.core.truth_(trim)){
utils.trim_history();
} else {
}

return utils.oset_BANG_(document.location,"hash",s);
}));

(utils.set_hash_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(utils.set_hash_BANG_.cljs$lang$applyTo = (function (seq53433){
var G__53434 = cljs.core.first(seq53433);
var seq53433__$1 = cljs.core.next(seq53433);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53434,seq53433__$1);
}));

utils.attach_event = (function utils$attach_event(t,λ){
return window.addEventListener(cljs.core.name(t),λ);
});
utils.dispatch_event = (function utils$dispatch_event(event){
return window.dispatchEvent((new Event(cljs.core.name(event))));
});
utils.initialize_hash = (function utils$initialize_hash(var_args){
var args__4870__auto__ = [];
var len__4864__auto___53697 = arguments.length;
var i__4865__auto___53698 = (0);
while(true){
if((i__4865__auto___53698 < len__4864__auto___53697)){
args__4870__auto__.push((arguments[i__4865__auto___53698]));

var G__53699 = (i__4865__auto___53698 + (1));
i__4865__auto___53698 = G__53699;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return utils.initialize_hash.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(utils.initialize_hash.cljs$core$IFn$_invoke$arity$variadic = (function (_){
var url_hash = utils.oget_in(document,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Symbol(null,"hash","hash",1626749931,null)], null));
var pathname = utils.oget_in(document,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Symbol(null,"pathname","pathname",220033999,null)], null));
if((!(clojure.string.blank_QMARK_(url_hash)))){
return history.pushState(({}),"",["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url_hash)].join(''));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",pathname)){
history.pushState(({}),"","/#/index");

return utils.dispatch_event(new cljs.core.Keyword(null,"hashchange","hashchange",1795201042));
} else {
history.pushState(({}),"",["/#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pathname)].join(''));

return utils.dispatch_event(new cljs.core.Keyword(null,"hashchange","hashchange",1795201042));

}
}
}));

(utils.initialize_hash.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(utils.initialize_hash.cljs$lang$applyTo = (function (seq53437){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53437));
}));


//# sourceMappingURL=utils.js.map
