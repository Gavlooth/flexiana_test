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
var seq__46739_47086 = cljs.core.seq(cljs.core.seq(x));
var chunk__46740_47088 = null;
var count__46741_47089 = (0);
var i__46742_47090 = (0);
while(true){
if((i__46742_47090 < count__46741_47089)){
var vec__46749_47092 = chunk__46740_47088.cljs$core$IIndexed$_nth$arity$2(null,i__46742_47090);
var k_47093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46749_47092,(0),null);
var v_47094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46749_47092,(1),null);
form.append(cljs.core.name(k_47093),v_47094);


var G__47096 = seq__46739_47086;
var G__47097 = chunk__46740_47088;
var G__47098 = count__46741_47089;
var G__47099 = (i__46742_47090 + (1));
seq__46739_47086 = G__47096;
chunk__46740_47088 = G__47097;
count__46741_47089 = G__47098;
i__46742_47090 = G__47099;
continue;
} else {
var temp__5804__auto___47100 = cljs.core.seq(seq__46739_47086);
if(temp__5804__auto___47100){
var seq__46739_47101__$1 = temp__5804__auto___47100;
if(cljs.core.chunked_seq_QMARK_(seq__46739_47101__$1)){
var c__4679__auto___47102 = cljs.core.chunk_first(seq__46739_47101__$1);
var G__47103 = cljs.core.chunk_rest(seq__46739_47101__$1);
var G__47104 = c__4679__auto___47102;
var G__47105 = cljs.core.count(c__4679__auto___47102);
var G__47106 = (0);
seq__46739_47086 = G__47103;
chunk__46740_47088 = G__47104;
count__46741_47089 = G__47105;
i__46742_47090 = G__47106;
continue;
} else {
var vec__46752_47107 = cljs.core.first(seq__46739_47101__$1);
var k_47108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46752_47107,(0),null);
var v_47109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46752_47107,(1),null);
form.append(cljs.core.name(k_47108),v_47109);


var G__47111 = cljs.core.next(seq__46739_47101__$1);
var G__47112 = null;
var G__47113 = (0);
var G__47114 = (0);
seq__46739_47086 = G__47111;
chunk__46740_47088 = G__47112;
count__46741_47089 = G__47113;
i__46742_47090 = G__47114;
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
var len__4864__auto___47118 = arguments.length;
var i__4865__auto___47119 = (0);
while(true){
if((i__4865__auto___47119 < len__4864__auto___47118)){
args__4870__auto__.push((arguments[i__4865__auto___47119]));

var G__47123 = (i__4865__auto___47119 + (1));
i__4865__auto___47119 = G__47123;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return utils.format_request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(utils.format_request.cljs$core$IFn$_invoke$arity$variadic = (function (token,body,p__46758){
var map__46759 = p__46758;
var map__46759__$1 = cljs.core.__destructure_map(map__46759);
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46759__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json");
var request = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46759__$1,new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"json","json",1279968570));
var response = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46759__$1,new cljs.core.Keyword(null,"response","response",-1068424192),"text");
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46759__$1,new cljs.core.Keyword(null,"method","method",55703592),"post");
var body__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("json",cljs.core.name(request)))?utils.clj__GT_json(body):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("form",cljs.core.name(request)))?(new URLSearchParams(utils.form_data(body))):body
));
var content_type__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("json",cljs.core.name(request)))?"application/json":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("form",cljs.core.name(request)))?"application/x-www-form-urlencoded":content_type
));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"auth-token","auth-token",30990976),token,new cljs.core.Keyword(null,"Content-type","Content-type",354958638),content_type__$1], null),new cljs.core.Keyword(null,"body","body",-2049205669),body__$1,new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.name(response)], null);
}));

(utils.format_request.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(utils.format_request.cljs$lang$applyTo = (function (seq46755){
var G__46756 = cljs.core.first(seq46755);
var seq46755__$1 = cljs.core.next(seq46755);
var G__46757 = cljs.core.first(seq46755__$1);
var seq46755__$2 = cljs.core.next(seq46755__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46756,G__46757,seq46755__$2);
}));

utils.js_fetch = (function utils$js_fetch(url,obj){
var c__44084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44085__auto__ = (function (){var switch__43720__auto__ = (function (state_46930){
var state_val_46931 = (state_46930[(1)]);
if((state_val_46931 === (65))){
var inst_46777 = (state_46930[(7)]);
var inst_46920 = inst_46777.headers;
var inst_46921 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_46920);
var inst_46922 = ["Server responded with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_46921)].join('');
var inst_46923 = (function(){throw inst_46922})();
var state_46930__$1 = state_46930;
var statearr_46932_47148 = state_46930__$1;
(statearr_46932_47148[(2)] = inst_46923);

(statearr_46932_47148[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (62))){
var inst_46894 = (state_46930[(2)]);
var inst_46895 = ["ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_46894)].join('');
var inst_46896 = [new cljs.core.Keyword(null,"pretty-print","pretty-print",-1314067013),new cljs.core.Keyword(null,"color","color",1011675173)];
var inst_46897 = [true,new cljs.core.Keyword(null,"tomato","tomato",1086708254)];
var inst_46898 = cljs.core.PersistentHashMap.fromArrays(inst_46896,inst_46897);
var inst_46899 = (utils.clog.cljs$core$IFn$_invoke$arity$2 ? utils.clog.cljs$core$IFn$_invoke$arity$2(inst_46895,inst_46898) : utils.clog.call(null,inst_46895,inst_46898));
var state_46930__$1 = state_46930;
var statearr_46933_47150 = state_46930__$1;
(statearr_46933_47150[(2)] = inst_46899);

(statearr_46933_47150[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (7))){
var inst_46764 = (state_46930[(8)]);
var state_46930__$1 = state_46930;
var statearr_46934_47151 = state_46930__$1;
(statearr_46934_47151[(2)] = inst_46764);

(statearr_46934_47151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (59))){
var inst_46890 = (state_46930[(2)]);
var state_46930__$1 = state_46930;
var statearr_46935_47152 = state_46930__$1;
(statearr_46935_47152[(2)] = inst_46890);

(statearr_46935_47152[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (20))){
var inst_46799 = (state_46930[(9)]);
var inst_46802 = cljs.core.ex_data(inst_46799);
var inst_46803 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_46802);
var inst_46804 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46803,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_46930__$1 = state_46930;
var statearr_46936_47154 = state_46930__$1;
(statearr_46936_47154[(2)] = inst_46804);

(statearr_46936_47154[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (58))){
var inst_46877 = (state_46930[(10)]);
var state_46930__$1 = state_46930;
var statearr_46937_47155 = state_46930__$1;
(statearr_46937_47155[(2)] = inst_46877);

(statearr_46937_47155[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (60))){
var inst_46777 = (state_46930[(7)]);
var _ = (function (){var statearr_46938 = state_46930;
(statearr_46938[(4)] = cljs.core.cons((63),(state_46930[(4)])));

return statearr_46938;
})();
var inst_46905 = inst_46777.ok;
var state_46930__$1 = state_46930;
if(cljs.core.truth_(inst_46905)){
var statearr_46939_47157 = state_46930__$1;
(statearr_46939_47157[(1)] = (64));

} else {
var statearr_46940_47158 = state_46930__$1;
(statearr_46940_47158[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (27))){
var inst_46818 = (state_46930[(11)]);
var inst_46817 = (state_46930[(12)]);
var inst_46817__$1 = (state_46930[(2)]);
var inst_46818__$1 = (inst_46817__$1 instanceof cljs.core.ExceptionInfo);
var state_46930__$1 = (function (){var statearr_46941 = state_46930;
(statearr_46941[(11)] = inst_46818__$1);

(statearr_46941[(12)] = inst_46817__$1);

return statearr_46941;
})();
if(cljs.core.truth_(inst_46818__$1)){
var statearr_46942_47159 = state_46930__$1;
(statearr_46942_47159[(1)] = (28));

} else {
var statearr_46943_47160 = state_46930__$1;
(statearr_46943_47160[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (1))){
var inst_46760 = (utils.oget.cljs$core$IFn$_invoke$arity$2 ? utils.oget.cljs$core$IFn$_invoke$arity$2(obj,"response") : utils.oget.call(null,obj,"response"));
var inst_46761 = fetch(url,obj);
var inst_46762 = cljs.core.async.interop.p__GT_c(inst_46761);
var state_46930__$1 = (function (){var statearr_46944 = state_46930;
(statearr_46944[(13)] = inst_46760);

return statearr_46944;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46930__$1,(2),inst_46762);
} else {
if((state_val_46931 === (24))){
var inst_46799 = (state_46930[(9)]);
var state_46930__$1 = state_46930;
var statearr_46945_47161 = state_46930__$1;
(statearr_46945_47161[(2)] = inst_46799);

(statearr_46945_47161[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (55))){
var inst_46878 = (state_46930[(14)]);
var state_46930__$1 = state_46930;
var statearr_46946_47162 = state_46930__$1;
(statearr_46946_47162[(2)] = inst_46878);

(statearr_46946_47162[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (39))){
var inst_46840 = (state_46930[(15)]);
var state_46930__$1 = state_46930;
var statearr_46947_47163 = state_46930__$1;
(statearr_46947_47163[(2)] = inst_46840);

(statearr_46947_47163[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (46))){
var inst_46858 = (state_46930[(16)]);
var inst_46861 = cljs.core.ex_data(inst_46858);
var inst_46862 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_46861);
var inst_46863 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46862,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_46930__$1 = state_46930;
var statearr_46948_47164 = state_46930__$1;
(statearr_46948_47164[(2)] = inst_46863);

(statearr_46948_47164[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (4))){
var inst_46765 = (state_46930[(17)]);
var state_46930__$1 = state_46930;
var statearr_46949_47165 = state_46930__$1;
(statearr_46949_47165[(2)] = inst_46765);

(statearr_46949_47165[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (54))){
var inst_46877 = (state_46930[(10)]);
var inst_46880 = cljs.core.ex_data(inst_46877);
var inst_46881 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_46880);
var inst_46882 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46881,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_46930__$1 = state_46930;
var statearr_46950_47166 = state_46930__$1;
(statearr_46950_47166[(2)] = inst_46882);

(statearr_46950_47166[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (15))){
var inst_46781 = (state_46930[(18)]);
var inst_46791 = (function(){throw inst_46781})();
var state_46930__$1 = state_46930;
var statearr_46951_47167 = state_46930__$1;
(statearr_46951_47167[(2)] = inst_46791);

(statearr_46951_47167[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (48))){
var inst_46866 = (state_46930[(2)]);
var state_46930__$1 = state_46930;
if(cljs.core.truth_(inst_46866)){
var statearr_46952_47168 = state_46930__$1;
(statearr_46952_47168[(1)] = (49));

} else {
var statearr_46953_47169 = state_46930__$1;
(statearr_46953_47169[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (50))){
var inst_46858 = (state_46930[(16)]);
var state_46930__$1 = state_46930;
var statearr_46954_47170 = state_46930__$1;
(statearr_46954_47170[(2)] = inst_46858);

(statearr_46954_47170[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (21))){
var inst_46800 = (state_46930[(19)]);
var state_46930__$1 = state_46930;
var statearr_46955_47171 = state_46930__$1;
(statearr_46955_47171[(2)] = inst_46800);

(statearr_46955_47171[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (31))){
var inst_46817 = (state_46930[(12)]);
var inst_46827 = (function(){throw inst_46817})();
var state_46930__$1 = state_46930;
var statearr_46956_47172 = state_46930__$1;
(statearr_46956_47172[(2)] = inst_46827);

(statearr_46956_47172[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (32))){
var inst_46817 = (state_46930[(12)]);
var state_46930__$1 = state_46930;
var statearr_46957_47173 = state_46930__$1;
(statearr_46957_47173[(2)] = inst_46817);

(statearr_46957_47173[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (40))){
var inst_46847 = (state_46930[(2)]);
var state_46930__$1 = state_46930;
if(cljs.core.truth_(inst_46847)){
var statearr_46958_47174 = state_46930__$1;
(statearr_46958_47174[(1)] = (41));

} else {
var statearr_46959_47175 = state_46930__$1;
(statearr_46959_47175[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (56))){
var inst_46885 = (state_46930[(2)]);
var state_46930__$1 = state_46930;
if(cljs.core.truth_(inst_46885)){
var statearr_46960_47176 = state_46930__$1;
(statearr_46960_47176[(1)] = (57));

} else {
var statearr_46961_47177 = state_46930__$1;
(statearr_46961_47177[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (33))){
var inst_46830 = (state_46930[(2)]);
var state_46930__$1 = state_46930;
var statearr_46962_47178 = state_46930__$1;
(statearr_46962_47178[(2)] = inst_46830);

(statearr_46962_47178[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (13))){
var inst_46782 = (state_46930[(20)]);
var state_46930__$1 = state_46930;
var statearr_46963_47182 = state_46930__$1;
(statearr_46963_47182[(2)] = inst_46782);

(statearr_46963_47182[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (22))){
var inst_46807 = (state_46930[(2)]);
var state_46930__$1 = state_46930;
if(cljs.core.truth_(inst_46807)){
var statearr_46964_47183 = state_46930__$1;
(statearr_46964_47183[(1)] = (23));

} else {
var statearr_46965_47184 = state_46930__$1;
(statearr_46965_47184[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (36))){
var inst_46777 = (state_46930[(7)]);
var inst_46836 = inst_46777.json();
var inst_46837 = cljs.core.async.interop.p__GT_c(inst_46836);
var state_46930__$1 = state_46930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46930__$1,(37),inst_46837);
} else {
if((state_val_46931 === (41))){
var inst_46839 = (state_46930[(21)]);
var inst_46849 = (function(){throw inst_46839})();
var state_46930__$1 = state_46930;
var statearr_46966_47185 = state_46930__$1;
(statearr_46966_47185[(2)] = inst_46849);

(statearr_46966_47185[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (43))){
var inst_46852 = (state_46930[(2)]);
var inst_46853 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_46852,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_46930__$1 = state_46930;
var statearr_46967_47186 = state_46930__$1;
(statearr_46967_47186[(2)] = inst_46853);

(statearr_46967_47186[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (61))){
var inst_46928 = (state_46930[(2)]);
var state_46930__$1 = state_46930;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46930__$1,inst_46928);
} else {
if((state_val_46931 === (29))){
var inst_46818 = (state_46930[(11)]);
var state_46930__$1 = state_46930;
var statearr_46968_47187 = state_46930__$1;
(statearr_46968_47187[(2)] = inst_46818);

(statearr_46968_47187[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (44))){
var inst_46777 = (state_46930[(7)]);
var inst_46855 = inst_46777.json();
var inst_46856 = cljs.core.async.interop.p__GT_c(inst_46855);
var state_46930__$1 = state_46930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46930__$1,(45),inst_46856);
} else {
if((state_val_46931 === (6))){
var inst_46764 = (state_46930[(8)]);
var inst_46774 = (function(){throw inst_46764})();
var state_46930__$1 = state_46930;
var statearr_46969_47188 = state_46930__$1;
(statearr_46969_47188[(2)] = inst_46774);

(statearr_46969_47188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (28))){
var inst_46817 = (state_46930[(12)]);
var inst_46820 = cljs.core.ex_data(inst_46817);
var inst_46821 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_46820);
var inst_46822 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46821,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_46930__$1 = state_46930;
var statearr_46970_47189 = state_46930__$1;
(statearr_46970_47189[(2)] = inst_46822);

(statearr_46970_47189[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (64))){
var inst_46777 = (state_46930[(7)]);
var inst_46893 = (state_46930[(22)]);
var inst_46907 = [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"status-text","status-text",-1834235478),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_46908 = cljs.core.PersistentHashMap.EMPTY;
var inst_46909 = inst_46777.headers;
var inst_46910 = inst_46909.entries();
var inst_46911 = cljs.core.es6_iterator_seq(inst_46910);
var inst_46912 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_46911);
var inst_46913 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_46908,inst_46912);
var inst_46914 = clojure.walk.keywordize_keys(inst_46913);
var inst_46915 = inst_46777.status;
var inst_46916 = inst_46777.statusText;
var inst_46917 = [inst_46914,inst_46915,inst_46916,inst_46893];
var inst_46918 = cljs.core.PersistentHashMap.fromArrays(inst_46907,inst_46917);
var state_46930__$1 = state_46930;
var statearr_46971_47190 = state_46930__$1;
(statearr_46971_47190[(2)] = inst_46918);

(statearr_46971_47190[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (51))){
var inst_46871 = (state_46930[(2)]);
var inst_46872 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_46871,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_46930__$1 = state_46930;
var statearr_46972_47191 = state_46930__$1;
(statearr_46972_47191[(2)] = inst_46872);

(statearr_46972_47191[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (25))){
var inst_46812 = (state_46930[(2)]);
var state_46930__$1 = state_46930;
var statearr_46973_47192 = state_46930__$1;
(statearr_46973_47192[(2)] = inst_46812);

(statearr_46973_47192[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (34))){
var inst_46777 = (state_46930[(7)]);
var inst_46832 = inst_46777.formData();
var state_46930__$1 = state_46930;
var statearr_46974_47193 = state_46930__$1;
(statearr_46974_47193[(2)] = inst_46832);

(statearr_46974_47193[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (17))){
var inst_46794 = (state_46930[(2)]);
var state_46930__$1 = state_46930;
var statearr_46975_47194 = state_46930__$1;
(statearr_46975_47194[(2)] = inst_46794);

(statearr_46975_47194[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (3))){
var inst_46764 = (state_46930[(8)]);
var inst_46767 = cljs.core.ex_data(inst_46764);
var inst_46768 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_46767);
var inst_46769 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46768,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_46930__$1 = state_46930;
var statearr_46976_47195 = state_46930__$1;
(statearr_46976_47195[(2)] = inst_46769);

(statearr_46976_47195[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (12))){
var inst_46781 = (state_46930[(18)]);
var inst_46784 = cljs.core.ex_data(inst_46781);
var inst_46785 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_46784);
var inst_46786 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46785,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_46930__$1 = state_46930;
var statearr_46977_47196 = state_46930__$1;
(statearr_46977_47196[(2)] = inst_46786);

(statearr_46977_47196[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (2))){
var inst_46764 = (state_46930[(8)]);
var inst_46765 = (state_46930[(17)]);
var inst_46764__$1 = (state_46930[(2)]);
var inst_46765__$1 = (inst_46764__$1 instanceof cljs.core.ExceptionInfo);
var state_46930__$1 = (function (){var statearr_46978 = state_46930;
(statearr_46978[(8)] = inst_46764__$1);

(statearr_46978[(17)] = inst_46765__$1);

return statearr_46978;
})();
if(cljs.core.truth_(inst_46765__$1)){
var statearr_46979_47197 = state_46930__$1;
(statearr_46979_47197[(1)] = (3));

} else {
var statearr_46980_47198 = state_46930__$1;
(statearr_46980_47198[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (66))){
var inst_46925 = (state_46930[(2)]);
var _ = (function (){var statearr_46981 = state_46930;
(statearr_46981[(4)] = cljs.core.rest((state_46930[(4)])));

return statearr_46981;
})();
var state_46930__$1 = state_46930;
var statearr_46982_47199 = state_46930__$1;
(statearr_46982_47199[(2)] = inst_46925);

(statearr_46982_47199[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (23))){
var inst_46799 = (state_46930[(9)]);
var inst_46809 = (function(){throw inst_46799})();
var state_46930__$1 = state_46930;
var statearr_46983_47200 = state_46930__$1;
(statearr_46983_47200[(2)] = inst_46809);

(statearr_46983_47200[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (47))){
var inst_46859 = (state_46930[(23)]);
var state_46930__$1 = state_46930;
var statearr_46984_47201 = state_46930__$1;
(statearr_46984_47201[(2)] = inst_46859);

(statearr_46984_47201[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (35))){
var inst_46777 = (state_46930[(7)]);
var inst_46834 = inst_46777.arrayBuffer();
var state_46930__$1 = state_46930;
var statearr_46985_47202 = state_46930__$1;
(statearr_46985_47202[(2)] = inst_46834);

(statearr_46985_47202[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (19))){
var inst_46800 = (state_46930[(19)]);
var inst_46799 = (state_46930[(9)]);
var inst_46799__$1 = (state_46930[(2)]);
var inst_46800__$1 = (inst_46799__$1 instanceof cljs.core.ExceptionInfo);
var state_46930__$1 = (function (){var statearr_46986 = state_46930;
(statearr_46986[(19)] = inst_46800__$1);

(statearr_46986[(9)] = inst_46799__$1);

return statearr_46986;
})();
if(cljs.core.truth_(inst_46800__$1)){
var statearr_46987_47203 = state_46930__$1;
(statearr_46987_47203[(1)] = (20));

} else {
var statearr_46988_47204 = state_46930__$1;
(statearr_46988_47204[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (57))){
var inst_46877 = (state_46930[(10)]);
var inst_46887 = (function(){throw inst_46877})();
var state_46930__$1 = state_46930;
var statearr_46989_47205 = state_46930__$1;
(statearr_46989_47205[(2)] = inst_46887);

(statearr_46989_47205[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (11))){
var inst_46782 = (state_46930[(20)]);
var inst_46781 = (state_46930[(18)]);
var inst_46781__$1 = (state_46930[(2)]);
var inst_46782__$1 = (inst_46781__$1 instanceof cljs.core.ExceptionInfo);
var state_46930__$1 = (function (){var statearr_46990 = state_46930;
(statearr_46990[(20)] = inst_46782__$1);

(statearr_46990[(18)] = inst_46781__$1);

return statearr_46990;
})();
if(cljs.core.truth_(inst_46782__$1)){
var statearr_46991_47206 = state_46930__$1;
(statearr_46991_47206[(1)] = (12));

} else {
var statearr_46992_47207 = state_46930__$1;
(statearr_46992_47207[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (9))){
var inst_46893 = (state_46930[(2)]);
var state_46930__$1 = (function (){var statearr_46993 = state_46930;
(statearr_46993[(22)] = inst_46893);

return statearr_46993;
})();
var statearr_46994_47208 = state_46930__$1;
(statearr_46994_47208[(2)] = null);

(statearr_46994_47208[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (5))){
var inst_46772 = (state_46930[(2)]);
var state_46930__$1 = state_46930;
if(cljs.core.truth_(inst_46772)){
var statearr_46995_47209 = state_46930__$1;
(statearr_46995_47209[(1)] = (6));

} else {
var statearr_46996_47210 = state_46930__$1;
(statearr_46996_47210[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (14))){
var inst_46789 = (state_46930[(2)]);
var state_46930__$1 = state_46930;
if(cljs.core.truth_(inst_46789)){
var statearr_46997_47211 = state_46930__$1;
(statearr_46997_47211[(1)] = (15));

} else {
var statearr_46998_47212 = state_46930__$1;
(statearr_46998_47212[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (45))){
var inst_46858 = (state_46930[(16)]);
var inst_46859 = (state_46930[(23)]);
var inst_46858__$1 = (state_46930[(2)]);
var inst_46859__$1 = (inst_46858__$1 instanceof cljs.core.ExceptionInfo);
var state_46930__$1 = (function (){var statearr_46999 = state_46930;
(statearr_46999[(16)] = inst_46858__$1);

(statearr_46999[(23)] = inst_46859__$1);

return statearr_46999;
})();
if(cljs.core.truth_(inst_46859__$1)){
var statearr_47000_47213 = state_46930__$1;
(statearr_47000_47213[(1)] = (46));

} else {
var statearr_47001_47214 = state_46930__$1;
(statearr_47001_47214[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (53))){
var inst_46878 = (state_46930[(14)]);
var inst_46877 = (state_46930[(10)]);
var inst_46877__$1 = (state_46930[(2)]);
var inst_46878__$1 = (inst_46877__$1 instanceof cljs.core.ExceptionInfo);
var state_46930__$1 = (function (){var statearr_47002 = state_46930;
(statearr_47002[(14)] = inst_46878__$1);

(statearr_47002[(10)] = inst_46877__$1);

return statearr_47002;
})();
if(cljs.core.truth_(inst_46878__$1)){
var statearr_47003_47215 = state_46930__$1;
(statearr_47003_47215[(1)] = (54));

} else {
var statearr_47004_47216 = state_46930__$1;
(statearr_47004_47216[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (26))){
var inst_46777 = (state_46930[(7)]);
var inst_46814 = inst_46777.blob();
var inst_46815 = cljs.core.async.interop.p__GT_c(inst_46814);
var state_46930__$1 = state_46930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46930__$1,(27),inst_46815);
} else {
if((state_val_46931 === (16))){
var inst_46781 = (state_46930[(18)]);
var state_46930__$1 = state_46930;
var statearr_47005_47217 = state_46930__$1;
(statearr_47005_47217[(2)] = inst_46781);

(statearr_47005_47217[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (38))){
var inst_46839 = (state_46930[(21)]);
var inst_46842 = cljs.core.ex_data(inst_46839);
var inst_46843 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_46842);
var inst_46844 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46843,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_46930__$1 = state_46930;
var statearr_47006_47218 = state_46930__$1;
(statearr_47006_47218[(2)] = inst_46844);

(statearr_47006_47218[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (30))){
var inst_46825 = (state_46930[(2)]);
var state_46930__$1 = state_46930;
if(cljs.core.truth_(inst_46825)){
var statearr_47007_47219 = state_46930__$1;
(statearr_47007_47219[(1)] = (31));

} else {
var statearr_47008_47220 = state_46930__$1;
(statearr_47008_47220[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (10))){
var inst_46777 = (state_46930[(7)]);
var inst_46778 = inst_46777.text();
var inst_46779 = cljs.core.async.interop.p__GT_c(inst_46778);
var state_46930__$1 = state_46930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46930__$1,(11),inst_46779);
} else {
if((state_val_46931 === (18))){
var inst_46777 = (state_46930[(7)]);
var inst_46796 = inst_46777.json();
var inst_46797 = cljs.core.async.interop.p__GT_c(inst_46796);
var state_46930__$1 = state_46930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46930__$1,(19),inst_46797);
} else {
if((state_val_46931 === (52))){
var inst_46777 = (state_46930[(7)]);
var inst_46874 = inst_46777.body;
var inst_46875 = cljs.core.async.interop.p__GT_c(inst_46874);
var state_46930__$1 = state_46930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46930__$1,(53),inst_46875);
} else {
if((state_val_46931 === (42))){
var inst_46839 = (state_46930[(21)]);
var state_46930__$1 = state_46930;
var statearr_47010_47221 = state_46930__$1;
(statearr_47010_47221[(2)] = inst_46839);

(statearr_47010_47221[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (37))){
var inst_46839 = (state_46930[(21)]);
var inst_46840 = (state_46930[(15)]);
var inst_46839__$1 = (state_46930[(2)]);
var inst_46840__$1 = (inst_46839__$1 instanceof cljs.core.ExceptionInfo);
var state_46930__$1 = (function (){var statearr_47011 = state_46930;
(statearr_47011[(21)] = inst_46839__$1);

(statearr_47011[(15)] = inst_46840__$1);

return statearr_47011;
})();
if(cljs.core.truth_(inst_46840__$1)){
var statearr_47012_47222 = state_46930__$1;
(statearr_47012_47222[(1)] = (38));

} else {
var statearr_47013_47223 = state_46930__$1;
(statearr_47013_47223[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (63))){
var _ = (function (){var statearr_47014 = state_46930;
(statearr_47014[(4)] = cljs.core.rest((state_46930[(4)])));

return statearr_47014;
})();
var state_46930__$1 = state_46930;
var ex47009 = (state_46930__$1[(2)]);
var statearr_47015_47224 = state_46930__$1;
(statearr_47015_47224[(5)] = ex47009);


if((ex47009 instanceof Error)){
var statearr_47016_47225 = state_46930__$1;
(statearr_47016_47225[(1)] = (62));

(statearr_47016_47225[(5)] = null);

} else {
throw ex47009;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (8))){
var inst_46760 = (state_46930[(13)]);
var inst_46777 = (state_46930[(2)]);
var state_46930__$1 = (function (){var statearr_47017 = state_46930;
(statearr_47017[(7)] = inst_46777);

return statearr_47017;
})();
var G__47018_47226 = inst_46760;
switch (G__47018_47226) {
case "text":
var statearr_47019_47228 = state_46930__$1;
(statearr_47019_47228[(1)] = (10));


break;
case "json":
var statearr_47020_47229 = state_46930__$1;
(statearr_47020_47229[(1)] = (18));


break;
case "blob":
var statearr_47021_47230 = state_46930__$1;
(statearr_47021_47230[(1)] = (26));


break;
case "form-data":
var statearr_47022_47231 = state_46930__$1;
(statearr_47022_47231[(1)] = (34));


break;
case "array-buffer":
var statearr_47023_47232 = state_46930__$1;
(statearr_47023_47232[(1)] = (35));


break;
case "cljs":
var statearr_47024_47233 = state_46930__$1;
(statearr_47024_47233[(1)] = (36));


break;
case "clj":
var statearr_47025_47234 = state_46930__$1;
(statearr_47025_47234[(1)] = (44));


break;
default:
var statearr_47026_47235 = state_46930__$1;
(statearr_47026_47235[(1)] = (52));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (49))){
var inst_46858 = (state_46930[(16)]);
var inst_46868 = (function(){throw inst_46858})();
var state_46930__$1 = state_46930;
var statearr_47027_47236 = state_46930__$1;
(statearr_47027_47236[(2)] = inst_46868);

(statearr_47027_47236[(1)] = (51));


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
var utils$js_fetch_$_state_machine__43721__auto__ = null;
var utils$js_fetch_$_state_machine__43721__auto____0 = (function (){
var statearr_47028 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47028[(0)] = utils$js_fetch_$_state_machine__43721__auto__);

(statearr_47028[(1)] = (1));

return statearr_47028;
});
var utils$js_fetch_$_state_machine__43721__auto____1 = (function (state_46930){
while(true){
var ret_value__43722__auto__ = (function (){try{while(true){
var result__43723__auto__ = switch__43720__auto__(state_46930);
if(cljs.core.keyword_identical_QMARK_(result__43723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43723__auto__;
}
break;
}
}catch (e47029){var ex__43724__auto__ = e47029;
var statearr_47030_47237 = state_46930;
(statearr_47030_47237[(2)] = ex__43724__auto__);


if(cljs.core.seq((state_46930[(4)]))){
var statearr_47031_47238 = state_46930;
(statearr_47031_47238[(1)] = cljs.core.first((state_46930[(4)])));

} else {
throw ex__43724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47239 = state_46930;
state_46930 = G__47239;
continue;
} else {
return ret_value__43722__auto__;
}
break;
}
});
utils$js_fetch_$_state_machine__43721__auto__ = function(state_46930){
switch(arguments.length){
case 0:
return utils$js_fetch_$_state_machine__43721__auto____0.call(this);
case 1:
return utils$js_fetch_$_state_machine__43721__auto____1.call(this,state_46930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
utils$js_fetch_$_state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$0 = utils$js_fetch_$_state_machine__43721__auto____0;
utils$js_fetch_$_state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$1 = utils$js_fetch_$_state_machine__43721__auto____1;
return utils$js_fetch_$_state_machine__43721__auto__;
})()
})();
var state__44086__auto__ = (function (){var statearr_47032 = f__44085__auto__();
(statearr_47032[(6)] = c__44084__auto__);

return statearr_47032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44086__auto__);
}));

return c__44084__auto__;
});
utils.make_walk_handler = (function utils$make_walk_handler(p__47033){
var map__47034 = p__47033;
var map__47034__$1 = cljs.core.__destructure_map(map__47034);
var key_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47034__$1,new cljs.core.Keyword(null,"key-handler","key-handler",1081430159));
var value_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47034__$1,new cljs.core.Keyword(null,"value-handler","value-handler",1383382606));
if(cljs.core.truth_((function (){var and__4251__auto__ = key_handler;
if(cljs.core.truth_(and__4251__auto__)){
return value_handler;
} else {
return and__4251__auto__;
}
})())){
return (function (x){
return (new cljs.core.MapEntry((function (){var G__47035 = cljs.core.key(x);
return (key_handler.cljs$core$IFn$_invoke$arity$1 ? key_handler.cljs$core$IFn$_invoke$arity$1(G__47035) : key_handler.call(null,G__47035));
})(),(function (){var G__47036 = cljs.core.val(x);
return (value_handler.cljs$core$IFn$_invoke$arity$1 ? value_handler.cljs$core$IFn$_invoke$arity$1(G__47036) : value_handler.call(null,G__47036));
})(),null));
});
} else {
if(cljs.core.truth_(value_handler)){
return (function (x){
return (new cljs.core.MapEntry((function (){var fexpr__47037 = cljs.core.key(x);
return (fexpr__47037.cljs$core$IFn$_invoke$arity$0 ? fexpr__47037.cljs$core$IFn$_invoke$arity$0() : fexpr__47037.call(null));
})(),(function (){var G__47038 = cljs.core.val(x);
return (value_handler.cljs$core$IFn$_invoke$arity$1 ? value_handler.cljs$core$IFn$_invoke$arity$1(G__47038) : value_handler.call(null,G__47038));
})(),null));
});
} else {
if(cljs.core.truth_(key_handler)){
return (function (x){
return (new cljs.core.MapEntry((function (){var G__47039 = cljs.core.key(x);
return (key_handler.cljs$core$IFn$_invoke$arity$1 ? key_handler.cljs$core$IFn$_invoke$arity$1(G__47039) : key_handler.call(null,G__47039));
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
var len__4864__auto___47240 = arguments.length;
var i__4865__auto___47241 = (0);
while(true){
if((i__4865__auto___47241 < len__4864__auto___47240)){
args__4870__auto__.push((arguments[i__4865__auto___47241]));

var G__47242 = (i__4865__auto___47241 + (1));
i__4865__auto___47241 = G__47242;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return utils.transform_collection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(utils.transform_collection.cljs$core$IFn$_invoke$arity$variadic = (function (m_STAR_,p__47042){
var map__47043 = p__47042;
var map__47043__$1 = cljs.core.__destructure_map(map__47043);
var key_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47043__$1,new cljs.core.Keyword(null,"key-handler","key-handler",1081430159));
var value_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47043__$1,new cljs.core.Keyword(null,"value-handler","value-handler",1383382606));
var collection_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47043__$1,new cljs.core.Keyword(null,"collection-handler","collection-handler",1033381214),cljs.core.identity);
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
(utils.transform_collection.cljs$lang$applyTo = (function (seq47040){
var G__47041 = cljs.core.first(seq47040);
var seq47040__$1 = cljs.core.next(seq47040);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47041,seq47040__$1);
}));

utils.transform_map = (function utils$transform_map(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47243 = arguments.length;
var i__4865__auto___47244 = (0);
while(true){
if((i__4865__auto___47244 < len__4864__auto___47243)){
args__4870__auto__.push((arguments[i__4865__auto___47244]));

var G__47245 = (i__4865__auto___47244 + (1));
i__4865__auto___47244 = G__47245;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return utils.transform_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(utils.transform_map.cljs$core$IFn$_invoke$arity$variadic = (function (m_STAR_,p__47046){
var map__47047 = p__47046;
var map__47047__$1 = cljs.core.__destructure_map(map__47047);
var key_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47047__$1,new cljs.core.Keyword(null,"key-handler","key-handler",1081430159));
var value_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47047__$1,new cljs.core.Keyword(null,"value-handler","value-handler",1383382606));
var collection_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47047__$1,new cljs.core.Keyword(null,"collection-handler","collection-handler",1033381214),cljs.core.identity);
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
(utils.transform_map.cljs$lang$applyTo = (function (seq47044){
var G__47045 = cljs.core.first(seq47044);
var seq47044__$1 = cljs.core.next(seq47044);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47045,seq47044__$1);
}));

utils.fetch = (function utils$fetch(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47246 = arguments.length;
var i__4865__auto___47247 = (0);
while(true){
if((i__4865__auto___47247 < len__4864__auto___47246)){
args__4870__auto__.push((arguments[i__4865__auto___47247]));

var G__47248 = (i__4865__auto___47247 + (1));
i__4865__auto___47247 = G__47248;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return utils.fetch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(utils.fetch.cljs$core$IFn$_invoke$arity$variadic = (function (url,data,p__47052){
var map__47053 = p__47052;
var map__47053__$1 = cljs.core.__destructure_map(map__47053);
var options = map__47053__$1;
var data__$1 = utils.transform_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((utils.WITH_CORS)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),"cors"], null):null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Access-Control-Allow-Origin","Access-Control-Allow-Origin",-93223277),"*",new cljs.core.Keyword(null,"method","method",55703592),"post",new cljs.core.Keyword(null,"response","response",-1068424192),"text"], null),options,data], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"key-handler","key-handler",1081430159),(function (p1__47048_SHARP_){
return clojure.string.lower_case(cljs.core.name(p1__47048_SHARP_));
})], 0));
return utils.js_fetch(url,cljs.core.clj__GT_js(data__$1));
}));

(utils.fetch.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(utils.fetch.cljs$lang$applyTo = (function (seq47049){
var G__47050 = cljs.core.first(seq47049);
var seq47049__$1 = cljs.core.next(seq47049);
var G__47051 = cljs.core.first(seq47049__$1);
var seq47049__$2 = cljs.core.next(seq47049__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47050,G__47051,seq47049__$2);
}));

utils.lower_case = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,"");
utils.js_log = console.log;
utils.name_STAR_ = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.name,"");
utils.is_NaN_QMARK_ = (function utils$is_NaN_QMARK_(p1__47054_SHARP_){
return Number.isNaN(p1__47054_SHARP_);
});
utils.query_selector = (function utils$query_selector(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47249 = arguments.length;
var i__4865__auto___47250 = (0);
while(true){
if((i__4865__auto___47250 < len__4864__auto___47249)){
args__4870__auto__.push((arguments[i__4865__auto___47250]));

var G__47251 = (i__4865__auto___47250 + (1));
i__4865__auto___47250 = G__47251;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return utils.query_selector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(utils.query_selector.cljs$core$IFn$_invoke$arity$variadic = (function (query,p__47057){
var map__47058 = p__47057;
var map__47058__$1 = cljs.core.__destructure_map(map__47058);
var all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47058__$1,new cljs.core.Keyword(null,"all","all",892129742));
if(cljs.core.truth_(all)){
return cljs.core.seq(document.querySelectorAll(query));
} else {
return document.querySelector(query);
}
}));

(utils.query_selector.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(utils.query_selector.cljs$lang$applyTo = (function (seq47055){
var G__47056 = cljs.core.first(seq47055);
var seq47055__$1 = cljs.core.next(seq47055);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47056,seq47055__$1);
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
var G__47252__delegate = function (args){
return dbnc.fire.apply(dbnc,cljs.core.to_array(args));
};
var G__47252 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47253__i = 0, G__47253__a = new Array(arguments.length -  0);
while (G__47253__i < G__47253__a.length) {G__47253__a[G__47253__i] = arguments[G__47253__i + 0]; ++G__47253__i;}
  args = new cljs.core.IndexedSeq(G__47253__a,0,null);
} 
return G__47252__delegate.call(this,args);};
G__47252.cljs$lang$maxFixedArity = 0;
G__47252.cljs$lang$applyTo = (function (arglist__47254){
var args = cljs.core.seq(arglist__47254);
return G__47252__delegate(args);
});
G__47252.cljs$core$IFn$_invoke$arity$variadic = G__47252__delegate;
return G__47252;
})()
;
});
utils.oget_in = (function utils$oget_in(object,the_keys){
var valid_keys = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(utils.name_STAR_,the_keys);
return utils.goog$module$goog$object.getValueByKeys(object,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,valid_keys));
});
utils.oget = (function utils$oget(var_args){
var G__47060 = arguments.length;
switch (G__47060) {
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
var G__47062 = arguments.length;
switch (G__47062) {
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
}catch (e47063){if((e47063 instanceof Object)){
var e = e47063;
return console.log("Error: ",e,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null));
} else {
throw e47063;

}
}});
utils.radians__GT_degrees = (function utils$radians__GT_degrees(p1__47064_SHARP_){
return (57.29578 * p1__47064_SHARP_);
});
utils.degrees__GT_radians = (function utils$degrees__GT_radians(p1__47065_SHARP_){
return (p1__47065_SHARP_ / 57.29578);
});
utils.cos = (function utils$cos(p1__47066_SHARP_){
return Math.cos(utils.degrees__GT_radians(p1__47066_SHARP_));
});
utils.sin = (function utils$sin(p1__47067_SHARP_){
return Math.sin(utils.degrees__GT_radians(p1__47067_SHARP_));
});
utils.atan2 = (function utils$atan2(p1__47068_SHARP_,p2__47069_SHARP_){
return Math.atan2(utils.degrees__GT_radians(p1__47068_SHARP_),utils.degrees__GT_radians(p2__47069_SHARP_));
});
/**
 * Like clog bellow but google compiler will remove whith advance o
 * ptimizations. Excellent for development
 */
utils.dlog = (function utils$dlog(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47257 = arguments.length;
var i__4865__auto___47258 = (0);
while(true){
if((i__4865__auto___47258 < len__4864__auto___47257)){
args__4870__auto__.push((arguments[i__4865__auto___47258]));

var G__47259 = (i__4865__auto___47258 + (1));
i__4865__auto___47258 = G__47259;
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
(utils.dlog.cljs$lang$applyTo = (function (seq47070){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47070));
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
var len__4864__auto___47260 = arguments.length;
var i__4865__auto___47261 = (0);
while(true){
if((i__4865__auto___47261 < len__4864__auto___47260)){
args__4870__auto__.push((arguments[i__4865__auto___47261]));

var G__47262 = (i__4865__auto___47261 + (1));
i__4865__auto___47261 = G__47262;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return utils.clog.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(utils.clog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.truth_((function (){var G__47073 = args;
var G__47073__$1 = (((G__47073 == null))?null:cljs.core.last(G__47073));
if((G__47073__$1 == null)){
return null;
} else {
return cljs.core.map_QMARK_(G__47073__$1);
}
})())){
var butlast_args = cljs.core.butlast(args);
var map__47074 = cljs.core.last(args);
var map__47074__$1 = cljs.core.__destructure_map(map__47074);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47074__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var background_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47074__$1,new cljs.core.Keyword(null,"background-color","background-color",570434026));
var font_weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47074__$1,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583));
var font_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47074__$1,new cljs.core.Keyword(null,"font-size","font-size",-1847940346));
var json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47074__$1,new cljs.core.Keyword(null,"json","json",1279968570));
var pretty_print = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47074__$1,new cljs.core.Keyword(null,"pretty-print","pretty-print",-1314067013));
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
var G__47075 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"%","c",(cljs.core.truth_(pretty_print)?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__47071_SHARP_){
var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__47077_47263 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__47078_47264 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__47079_47265 = true;
var _STAR_print_fn_STAR__temp_val__47080_47266 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__47079_47265);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__47080_47266);

try{fipp.edn.pprint.cljs$core$IFn$_invoke$arity$1(p1__47071_SHARP_);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__47078_47264);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__47077_47263);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
}),butlast_args):butlast_args
));
var G__47076 = css_options;
return (utils.js_log.cljs$core$IFn$_invoke$arity$2 ? utils.js_log.cljs$core$IFn$_invoke$arity$2(G__47075,G__47076) : utils.js_log.call(null,G__47075,G__47076));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(utils.js_log,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(utils.js_log,args);
}
}));

(utils.clog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(utils.clog.cljs$lang$applyTo = (function (seq47072){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47072));
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
var len__4864__auto___47267 = arguments.length;
var i__4865__auto___47268 = (0);
while(true){
if((i__4865__auto___47268 < len__4864__auto___47267)){
args__4870__auto__.push((arguments[i__4865__auto___47268]));

var G__47269 = (i__4865__auto___47268 + (1));
i__4865__auto___47268 = G__47269;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return utils.set_hash_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(utils.set_hash_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__47083){
var map__47084 = p__47083;
var map__47084__$1 = cljs.core.__destructure_map(map__47084);
var trim = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47084__$1,new cljs.core.Keyword(null,"trim","trim",774319767),true);
if(cljs.core.truth_(trim)){
utils.trim_history();
} else {
}

return utils.oset_BANG_(document.location,"hash",s);
}));

(utils.set_hash_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(utils.set_hash_BANG_.cljs$lang$applyTo = (function (seq47081){
var G__47082 = cljs.core.first(seq47081);
var seq47081__$1 = cljs.core.next(seq47081);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47082,seq47081__$1);
}));

utils.attach_event = (function utils$attach_event(t,λ){
return window.addEventListener(cljs.core.name(t),λ);
});
utils.dispatch_event = (function utils$dispatch_event(event){
return window.dispatchEvent((new Event(cljs.core.name(event))));
});
utils.initialize_hash = (function utils$initialize_hash(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47270 = arguments.length;
var i__4865__auto___47271 = (0);
while(true){
if((i__4865__auto___47271 < len__4864__auto___47270)){
args__4870__auto__.push((arguments[i__4865__auto___47271]));

var G__47272 = (i__4865__auto___47271 + (1));
i__4865__auto___47271 = G__47272;
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
(utils.initialize_hash.cljs$lang$applyTo = (function (seq47085){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47085));
}));


//# sourceMappingURL=utils.js.map
