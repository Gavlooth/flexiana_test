goog.provide('flexiana.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
flexiana.core.config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remote-host","remote-host",1390051238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"host","host",-1558485167),"localhost",new cljs.core.Keyword(null,"port","port",1534937262),(9001)], null),new cljs.core.Keyword(null,"server","server",1499190120),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"port","port",1534937262),(9001)], null)], null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([flexiana.core.config], 0));

flexiana.core.Flexiana_component = (function (){var G__53467 = (function flexiana$core$Flexiana_component_render(props__44237__auto__,maybe_ref__44238__auto__){
var vec__53470 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__44237__auto__),maybe_ref__44238__auto__], null);

var vec__53474 = helix.hooks.use_state(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"string-1","string-1",-1459646149),"",new cljs.core.Keyword(null,"string-2","string-2",-2117180249),"",new cljs.core.Keyword(null,"is-scrambled","is-scrambled",-1927231702),""], null));
var map__53477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53474,(0),null);
var map__53477__$1 = cljs.core.__destructure_map(map__53477);
var state = map__53477__$1;
var string_1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53477__$1,new cljs.core.Keyword(null,"string-1","string-1",-1459646149));
var string_2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53477__$1,new cljs.core.Keyword(null,"string-2","string-2",-2117180249));
var is_scrambled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53477__$1,new cljs.core.Keyword(null,"is-scrambled","is-scrambled",-1927231702));
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53474,(1),null);
var G__53478 = "div";
var G__53479 = (function (){var obj53487 = ({"className":((typeof "central-container" === 'string')?"central-container":clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,"central-container")))});
return obj53487;
})();
var G__53480 = (function (){var G__53488 = "div";
var G__53489 = ({});
var G__53490 = "is scrambled?";
return (thump.react.create_element.cljs$core$IFn$_invoke$arity$3 ? thump.react.create_element.cljs$core$IFn$_invoke$arity$3(G__53488,G__53489,G__53490) : thump.react.create_element.call(null,G__53488,G__53489,G__53490));
})();
var G__53481 = (function (){var G__53493 = "div";
var G__53494 = (function (){var obj53497 = ({"className":((typeof "display-container" === 'string')?"display-container":clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,"display-container")))});
return obj53497;
})();
var G__53495 = (function (){var G__53498 = "span";
var G__53499 = ({});
var G__53500 = is_scrambled;
return (thump.react.create_element.cljs$core$IFn$_invoke$arity$3 ? thump.react.create_element.cljs$core$IFn$_invoke$arity$3(G__53498,G__53499,G__53500) : thump.react.create_element.call(null,G__53498,G__53499,G__53500));
})();
return (thump.react.create_element.cljs$core$IFn$_invoke$arity$3 ? thump.react.create_element.cljs$core$IFn$_invoke$arity$3(G__53493,G__53494,G__53495) : thump.react.create_element.call(null,G__53493,G__53494,G__53495));
})();
var G__53482 = (function (){var G__53503 = "form";
var G__53504 = (function (){var obj53510 = ({"onSubmit":(function (p1__53445_SHARP_){
return p1__53445_SHARP_.preventDefault();
}),"className":((typeof "pure-form search-form" === 'string')?"pure-form search-form":clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,"pure-form search-form")))});
return obj53510;
})();
var G__53505 = (function (){var G__53511 = "label";
var G__53512 = (function (){var obj53515 = ({"htmlFor":"string-1"});
return obj53515;
})();
var G__53513 = "input first string";
return (thump.react.create_element.cljs$core$IFn$_invoke$arity$3 ? thump.react.create_element.cljs$core$IFn$_invoke$arity$3(G__53511,G__53512,G__53513) : thump.react.create_element.call(null,G__53511,G__53512,G__53513));
})();
var G__53506 = (function (){var G__53520 = "input";
var G__53521 = (function (){var obj53523 = ({"name":"string-1","type":"text","className":((typeof "pure-input-rounded" === 'string')?"pure-input-rounded":clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,"pure-input-rounded"))),"onChange":(function (p1__53446_SHARP_){
var G__53524 = cljs.core.assoc;
var G__53525 = new cljs.core.Keyword(null,"string-1","string-1",-1459646149);
var G__53526 = p1__53446_SHARP_.target.value;
return (set_state.cljs$core$IFn$_invoke$arity$3 ? set_state.cljs$core$IFn$_invoke$arity$3(G__53524,G__53525,G__53526) : set_state.call(null,G__53524,G__53525,G__53526));
})});
return obj53523;
})();
return (thump.react.create_element.cljs$core$IFn$_invoke$arity$2 ? thump.react.create_element.cljs$core$IFn$_invoke$arity$2(G__53520,G__53521) : thump.react.create_element.call(null,G__53520,G__53521));
})();
var G__53507 = (function (){var G__53527 = "label";
var G__53528 = (function (){var obj53531 = ({"htmlFor":"string-2"});
return obj53531;
})();
var G__53529 = "input second string";
return (thump.react.create_element.cljs$core$IFn$_invoke$arity$3 ? thump.react.create_element.cljs$core$IFn$_invoke$arity$3(G__53527,G__53528,G__53529) : thump.react.create_element.call(null,G__53527,G__53528,G__53529));
})();
var G__53508 = (function (){var G__53536 = "input";
var G__53537 = (function (){var obj53539 = ({"name":"string-2","type":"text","className":((typeof "pure-input-rounded" === 'string')?"pure-input-rounded":clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,"pure-input-rounded"))),"onChange":(function (p1__53447_SHARP_){
var G__53540 = cljs.core.assoc;
var G__53541 = new cljs.core.Keyword(null,"string-2","string-2",-2117180249);
var G__53542 = p1__53447_SHARP_.target.value;
return (set_state.cljs$core$IFn$_invoke$arity$3 ? set_state.cljs$core$IFn$_invoke$arity$3(G__53540,G__53541,G__53542) : set_state.call(null,G__53540,G__53541,G__53542));
})});
return obj53539;
})();
return (thump.react.create_element.cljs$core$IFn$_invoke$arity$2 ? thump.react.create_element.cljs$core$IFn$_invoke$arity$2(G__53536,G__53537) : thump.react.create_element.call(null,G__53536,G__53537));
})();
return (thump.react.create_element.cljs$core$IFn$_invoke$arity$6 ? thump.react.create_element.cljs$core$IFn$_invoke$arity$6(G__53503,G__53504,G__53505,G__53506,G__53507,G__53508) : thump.react.create_element.call(null,G__53503,G__53504,G__53505,G__53506,G__53507,G__53508));
})();
var G__53483 = (function (){var G__53543 = "input";
var G__53544 = (function (){var obj53546 = ({"className":((typeof "button-f pure-button submit-button" === 'string')?"button-f pure-button submit-button":clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,"button-f pure-button submit-button"))),"type":"button","value":"Send strings","onClick":(function (){var map__53548 = flexiana.core.config;
var map__53548__$1 = cljs.core.__destructure_map(map__53548);
var map__53549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53548__$1,new cljs.core.Keyword(null,"remote-host","remote-host",1390051238));
var map__53549__$1 = cljs.core.__destructure_map(map__53549);
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53549__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53549__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var uri = (function (){var x__53068__auto__ = cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"http://~a:~a/flexiana",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([host,port], 0));
if(cljs.core.truth_(goog.DEBUG)){
console.log(["%cin file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"flexiana/core.cljs",new cljs.core.Keyword(null,"line","line",212345235),44,new cljs.core.Keyword(null,"column","column",2078222095),30,new cljs.core.Keyword(null,"end-line","end-line",1837326455),44,new cljs.core.Keyword(null,"end-column","end-column",1425389514),87], null))),", line:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"flexiana/core.cljs",new cljs.core.Keyword(null,"line","line",212345235),44,new cljs.core.Keyword(null,"column","column",2078222095),30,new cljs.core.Keyword(null,"end-line","end-line",1837326455),44,new cljs.core.Keyword(null,"end-column","end-column",1425389514),87], null)))].join(''),"color:olive;font-size:1.1em;");

console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"cl-format","cl-format",-1229847214,null),null,"http://~a:~a/flexiana",new cljs.core.Symbol(null,"host","host",82046360,null),new cljs.core.Symbol(null,"port","port",-1119498507,null)))," --->"].join(''),"color:purple;font-size:1.2em;");

console.log(["%c",(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53561_53627 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53562_53628 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53563_53629 = true;
var _STAR_print_fn_STAR__temp_val__53564_53630 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53563_53629);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53564_53630);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x__53068__auto__);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53562_53628);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53561_53627);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})()].join(''),"color:green;font-size:1.1em;");
} else {
}

return x__53068__auto__;
})();
return (function (_){
if(((clojure.string.blank_QMARK_(string_2)) || (clojure.string.blank_QMARK_(string_1)))){
return null;
} else {
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(utils.js_fetch(uri,utils.format_request.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"is-scrambled","is-scrambled",-1927231702)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], 0))),(function (x){
var G__53570 = cljs.core.assoc;
var G__53571 = new cljs.core.Keyword(null,"is-scrambled","is-scrambled",-1927231702);
var G__53572 = (function (){var x__53068__auto__ = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(goog.DEBUG)){
console.log(["%cin file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"flexiana/core.cljs",new cljs.core.Keyword(null,"line","line",212345235),48,new cljs.core.Keyword(null,"column","column",2078222095),77,new cljs.core.Keyword(null,"end-line","end-line",1837326455),48,new cljs.core.Keyword(null,"end-column","end-column",1425389514),94], null))),", line:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file","file",-1269645878),"flexiana/core.cljs",new cljs.core.Keyword(null,"line","line",212345235),48,new cljs.core.Keyword(null,"column","column",2078222095),77,new cljs.core.Keyword(null,"end-line","end-line",1837326455),48,new cljs.core.Keyword(null,"end-column","end-column",1425389514),94], null)))].join(''),"color:olive;font-size:1.1em;");

console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Symbol(null,"x","x",-555367584,null)))," --->"].join(''),"color:purple;font-size:1.2em;");

console.log(["%c",(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53585_53637 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53586_53638 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53587_53639 = true;
var _STAR_print_fn_STAR__temp_val__53588_53640 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53587_53639);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53588_53640);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x__53068__auto__);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53586_53638);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53585_53637);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})()].join(''),"color:green;font-size:1.1em;");
} else {
}

return x__53068__auto__;
})();
return (set_state.cljs$core$IFn$_invoke$arity$3 ? set_state.cljs$core$IFn$_invoke$arity$3(G__53570,G__53571,G__53572) : set_state.call(null,G__53570,G__53571,G__53572));
}));
}
});
})()});
return obj53546;
})();
return (thump.react.create_element.cljs$core$IFn$_invoke$arity$2 ? thump.react.create_element.cljs$core$IFn$_invoke$arity$2(G__53543,G__53544) : thump.react.create_element.call(null,G__53543,G__53544));
})();
return (thump.react.create_element.cljs$core$IFn$_invoke$arity$6 ? thump.react.create_element.cljs$core$IFn$_invoke$arity$6(G__53478,G__53479,G__53480,G__53481,G__53482,G__53483) : thump.react.create_element.call(null,G__53478,G__53479,G__53480,G__53481,G__53482,G__53483));
});
if(goog.DEBUG === true){
var G__53596 = G__53467;
(G__53596.displayName = "flexiana.core/Flexiana-component");

return G__53596;
} else {
return G__53467;
}
})();



flexiana.core.app = (function flexiana$core$app(var_args){
var args__4870__auto__ = [];
var len__4864__auto___53645 = arguments.length;
var i__4865__auto___53646 = (0);
while(true){
if((i__4865__auto___53646 < len__4864__auto___53645)){
args__4870__auto__.push((arguments[i__4865__auto___53646]));

var G__53647 = (i__4865__auto___53646 + (1));
i__4865__auto___53646 = G__53647;
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
(flexiana.core.app.cljs$lang$applyTo = (function (seq53600){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53600));
}));


//# sourceMappingURL=flexiana.core.js.map
