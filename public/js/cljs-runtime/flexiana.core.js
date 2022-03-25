goog.provide('flexiana.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
flexiana.core.config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote-host","remote-host",1390051238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"host","host",-1558485167),"localhost",new cljs.core.Keyword(null,"port","port",1534937262),(9001)], null),new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"port","port",1534937262),(9001)], null)], null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([flexiana.core.config], 0));

flexiana.core.Flexiana_component = (function (){var G__50961 = (function flexiana$core$Flexiana_component_render(props__44199__auto__,maybe_ref__44200__auto__){
var vec__50962 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__44199__auto__),maybe_ref__44200__auto__], null);

var vec__50965 = helix.hooks.use_state(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"search-results","search-results",306464634),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"search-term","search-term",356193544),""], null));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50965,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50965,(1),null);
var G__50968 = "div";
var G__50969 = (function (){var obj50973 = ({"className":((typeof "central-container" === 'string')?"central-container":clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,"central-container")))});
return obj50973;
})();
var G__50970 = (function (){var G__50974 = "form";
var G__50975 = (function (){var obj50981 = ({"onSubmit":(function (p1__50957_SHARP_){
return p1__50957_SHARP_.preventDefault();
}),"className":((typeof "pure-form search-form" === 'string')?"pure-form search-form":clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,"pure-form search-form")))});
return obj50981;
})();
var G__50976 = (function (){var G__50982 = "label";
var G__50983 = (function (){var obj50986 = ({"htmlFor":"string-1"});
return obj50986;
})();
var G__50984 = "input first string";
return (thump.react.create_element.cljs$core$IFn$_invoke$arity$3 ? thump.react.create_element.cljs$core$IFn$_invoke$arity$3(G__50982,G__50983,G__50984) : thump.react.create_element.call(null,G__50982,G__50983,G__50984));
})();
var G__50977 = (function (){var G__50987 = "input";
var G__50988 = (function (){var obj50990 = ({"name":"string-1","type":"text","className":((typeof "pure-input-rounded" === 'string')?"pure-input-rounded":clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,"pure-input-rounded")))});
return obj50990;
})();
return (thump.react.create_element.cljs$core$IFn$_invoke$arity$2 ? thump.react.create_element.cljs$core$IFn$_invoke$arity$2(G__50987,G__50988) : thump.react.create_element.call(null,G__50987,G__50988));
})();
var G__50978 = (function (){var G__50991 = "label";
var G__50992 = (function (){var obj50995 = ({"htmlFor":"string-2"});
return obj50995;
})();
var G__50993 = "input second string";
return (thump.react.create_element.cljs$core$IFn$_invoke$arity$3 ? thump.react.create_element.cljs$core$IFn$_invoke$arity$3(G__50991,G__50992,G__50993) : thump.react.create_element.call(null,G__50991,G__50992,G__50993));
})();
var G__50979 = (function (){var G__50996 = "input";
var G__50997 = (function (){var obj50999 = ({"name":"string-2","type":"text","className":((typeof "pure-input-rounded" === 'string')?"pure-input-rounded":clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,"pure-input-rounded")))});
return obj50999;
})();
return (thump.react.create_element.cljs$core$IFn$_invoke$arity$2 ? thump.react.create_element.cljs$core$IFn$_invoke$arity$2(G__50996,G__50997) : thump.react.create_element.call(null,G__50996,G__50997));
})();
return (thump.react.create_element.cljs$core$IFn$_invoke$arity$6 ? thump.react.create_element.cljs$core$IFn$_invoke$arity$6(G__50974,G__50975,G__50976,G__50977,G__50978,G__50979) : thump.react.create_element.call(null,G__50974,G__50975,G__50976,G__50977,G__50978,G__50979));
})();
var G__50971 = (function (){var G__51000 = "input";
var G__51001 = (function (){var obj51003 = ({"className":((typeof "button-f pure-button submit-button" === 'string')?"button-f pure-button submit-button":clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,"button-f pure-button submit-button"))),"type":"button","value":"Send strings","onClick":(function (){var map__51004 = flexiana.core.config;
var map__51004__$1 = cljs.core.__destructure_map(map__51004);
var map__51005 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51004__$1,new cljs.core.Keyword(null,"remote-host","remote-host",1390051238));
var map__51005__$1 = cljs.core.__destructure_map(map__51005);
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51005__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51005__$1,new cljs.core.Keyword(null,"port","port",1534937262));
return (function (_){
if(cljs.core.truth_(state)){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(utils.fetch((function (){var x__45112__auto__ = cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~a:~a",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([host,port], 0));
if(cljs.core.truth_(goog.DEBUG)){
console.log(["%cin file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"flexiana/core.cljs",new cljs.core.Keyword(null,"line","line",212345235),44,new cljs.core.Keyword(null,"column","column",2078222095),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),44,new cljs.core.Keyword(null,"end-column","end-column",1425389514),87], null))),", line:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"flexiana/core.cljs",new cljs.core.Keyword(null,"line","line",212345235),44,new cljs.core.Keyword(null,"column","column",2078222095),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),44,new cljs.core.Keyword(null,"end-column","end-column",1425389514),87], null)))].join(''),"color:olive;font-size:1.1em;");

console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"cl-format","cl-format",-1229847214,null),null,"~a:~a",new cljs.core.Symbol(null,"host","host",82046360,null),new cljs.core.Symbol(null,"port","port",-1119498507,null)))," --->"].join(''),"color:purple;font-size:1.2em;");

console.log(["%c",(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51010_51017 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51011_51018 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51012_51019 = true;
var _STAR_print_fn_STAR__temp_val__51013_51020 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51012_51019);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51013_51020);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x__45112__auto__);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51011_51018);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51010_51017);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})()].join(''),"color:green;font-size:1.1em;");
} else {
}

return x__45112__auto__;
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"get"], null)),(function (x){
var G__51014 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword(null,"search-results","search-results",306464634),new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(x)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))));
return (set_state.cljs$core$IFn$_invoke$arity$1 ? set_state.cljs$core$IFn$_invoke$arity$1(G__51014) : set_state.call(null,G__51014));
}));
} else {
return null;
}
});
})()});
return obj51003;
})();
return (thump.react.create_element.cljs$core$IFn$_invoke$arity$2 ? thump.react.create_element.cljs$core$IFn$_invoke$arity$2(G__51000,G__51001) : thump.react.create_element.call(null,G__51000,G__51001));
})();
return (thump.react.create_element.cljs$core$IFn$_invoke$arity$4 ? thump.react.create_element.cljs$core$IFn$_invoke$arity$4(G__50968,G__50969,G__50970,G__50971) : thump.react.create_element.call(null,G__50968,G__50969,G__50970,G__50971));
});
if(goog.DEBUG === true){
var G__51015 = G__50961;
(G__51015.displayName = "flexiana.core/Flexiana-component");

return G__51015;
} else {
return G__50961;
}
})();



flexiana.core.app = (function flexiana$core$app(var_args){
var args__4870__auto__ = [];
var len__4864__auto___51021 = arguments.length;
var i__4865__auto___51022 = (0);
while(true){
if((i__4865__auto___51022 < len__4864__auto___51021)){
args__4870__auto__.push((arguments[i__4865__auto___51022]));

var G__51023 = (i__4865__auto___51022 + (1));
i__4865__auto___51022 = G__51023;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return flexiana.core.app.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});
goog.exportSymbol('flexiana.core.app', flexiana.core.app);

(flexiana.core.app.cljs$core$IFn$_invoke$arity$variadic = (function (_){

return module$node_modules$react_dom$index.render(helix.core.get_react().createElement(flexiana.core.Flexiana_component,null),utils.query_selector("div#flexiana-webapp"));
}));

(flexiana.core.app.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(flexiana.core.app.cljs$lang$applyTo = (function (seq51016){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51016));
}));


//# sourceMappingURL=flexiana.core.js.map
