goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50900){
var map__50901 = p__50900;
var map__50901__$1 = cljs.core.__destructure_map(map__50901);
var m = map__50901__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50901__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50901__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50910_51281 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50911_51282 = null;
var count__50912_51283 = (0);
var i__50913_51284 = (0);
while(true){
if((i__50913_51284 < count__50912_51283)){
var f_51285 = chunk__50911_51282.cljs$core$IIndexed$_nth$arity$2(null,i__50913_51284);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_51285], 0));


var G__51286 = seq__50910_51281;
var G__51287 = chunk__50911_51282;
var G__51288 = count__50912_51283;
var G__51289 = (i__50913_51284 + (1));
seq__50910_51281 = G__51286;
chunk__50911_51282 = G__51287;
count__50912_51283 = G__51288;
i__50913_51284 = G__51289;
continue;
} else {
var temp__5804__auto___51290 = cljs.core.seq(seq__50910_51281);
if(temp__5804__auto___51290){
var seq__50910_51291__$1 = temp__5804__auto___51290;
if(cljs.core.chunked_seq_QMARK_(seq__50910_51291__$1)){
var c__4679__auto___51292 = cljs.core.chunk_first(seq__50910_51291__$1);
var G__51293 = cljs.core.chunk_rest(seq__50910_51291__$1);
var G__51294 = c__4679__auto___51292;
var G__51295 = cljs.core.count(c__4679__auto___51292);
var G__51296 = (0);
seq__50910_51281 = G__51293;
chunk__50911_51282 = G__51294;
count__50912_51283 = G__51295;
i__50913_51284 = G__51296;
continue;
} else {
var f_51297 = cljs.core.first(seq__50910_51291__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_51297], 0));


var G__51299 = cljs.core.next(seq__50910_51291__$1);
var G__51300 = null;
var G__51301 = (0);
var G__51302 = (0);
seq__50910_51281 = G__51299;
chunk__50911_51282 = G__51300;
count__50912_51283 = G__51301;
i__50913_51284 = G__51302;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_51304 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_51304], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_51304)))?cljs.core.second(arglists_51304):arglists_51304)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50938_51318 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50939_51319 = null;
var count__50940_51320 = (0);
var i__50941_51321 = (0);
while(true){
if((i__50941_51321 < count__50940_51320)){
var vec__50966_51324 = chunk__50939_51319.cljs$core$IIndexed$_nth$arity$2(null,i__50941_51321);
var name_51325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50966_51324,(0),null);
var map__50969_51326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50966_51324,(1),null);
var map__50969_51327__$1 = cljs.core.__destructure_map(map__50969_51326);
var doc_51328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50969_51327__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50969_51327__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51325], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51329], 0));

if(cljs.core.truth_(doc_51328)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51328], 0));
} else {
}


var G__51331 = seq__50938_51318;
var G__51332 = chunk__50939_51319;
var G__51333 = count__50940_51320;
var G__51334 = (i__50941_51321 + (1));
seq__50938_51318 = G__51331;
chunk__50939_51319 = G__51332;
count__50940_51320 = G__51333;
i__50941_51321 = G__51334;
continue;
} else {
var temp__5804__auto___51335 = cljs.core.seq(seq__50938_51318);
if(temp__5804__auto___51335){
var seq__50938_51336__$1 = temp__5804__auto___51335;
if(cljs.core.chunked_seq_QMARK_(seq__50938_51336__$1)){
var c__4679__auto___51339 = cljs.core.chunk_first(seq__50938_51336__$1);
var G__51340 = cljs.core.chunk_rest(seq__50938_51336__$1);
var G__51341 = c__4679__auto___51339;
var G__51342 = cljs.core.count(c__4679__auto___51339);
var G__51343 = (0);
seq__50938_51318 = G__51340;
chunk__50939_51319 = G__51341;
count__50940_51320 = G__51342;
i__50941_51321 = G__51343;
continue;
} else {
var vec__50974_51347 = cljs.core.first(seq__50938_51336__$1);
var name_51348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50974_51347,(0),null);
var map__50977_51349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50974_51347,(1),null);
var map__50977_51350__$1 = cljs.core.__destructure_map(map__50977_51349);
var doc_51351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50977_51350__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50977_51350__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51348], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51352], 0));

if(cljs.core.truth_(doc_51351)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51351], 0));
} else {
}


var G__51358 = cljs.core.next(seq__50938_51336__$1);
var G__51359 = null;
var G__51360 = (0);
var G__51361 = (0);
seq__50938_51318 = G__51358;
chunk__50939_51319 = G__51359;
count__50940_51320 = G__51360;
i__50941_51321 = G__51361;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__50979 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50980 = null;
var count__50981 = (0);
var i__50982 = (0);
while(true){
if((i__50982 < count__50981)){
var role = chunk__50980.cljs$core$IIndexed$_nth$arity$2(null,i__50982);
var temp__5804__auto___51363__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___51363__$1)){
var spec_51364 = temp__5804__auto___51363__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51364)], 0));
} else {
}


var G__51366 = seq__50979;
var G__51367 = chunk__50980;
var G__51368 = count__50981;
var G__51369 = (i__50982 + (1));
seq__50979 = G__51366;
chunk__50980 = G__51367;
count__50981 = G__51368;
i__50982 = G__51369;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__50979);
if(temp__5804__auto____$1){
var seq__50979__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__50979__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__50979__$1);
var G__51371 = cljs.core.chunk_rest(seq__50979__$1);
var G__51372 = c__4679__auto__;
var G__51373 = cljs.core.count(c__4679__auto__);
var G__51374 = (0);
seq__50979 = G__51371;
chunk__50980 = G__51372;
count__50981 = G__51373;
i__50982 = G__51374;
continue;
} else {
var role = cljs.core.first(seq__50979__$1);
var temp__5804__auto___51376__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___51376__$2)){
var spec_51377 = temp__5804__auto___51376__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51377)], 0));
} else {
}


var G__51379 = cljs.core.next(seq__50979__$1);
var G__51380 = null;
var G__51381 = (0);
var G__51382 = (0);
seq__50979 = G__51379;
chunk__50980 = G__51380;
count__50981 = G__51381;
i__50982 = G__51382;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__51387 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__51388 = cljs.core.ex_cause(t);
via = G__51387;
t = G__51388;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__51044 = datafied_throwable;
var map__51044__$1 = cljs.core.__destructure_map(map__51044);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51044__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51044__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51044__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__51045 = cljs.core.last(via);
var map__51045__$1 = cljs.core.__destructure_map(map__51045);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51045__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51045__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51045__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__51046 = data;
var map__51046__$1 = cljs.core.__destructure_map(map__51046);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51046__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51046__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51046__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__51047 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__51047__$1 = cljs.core.__destructure_map(map__51047);
var top_data = map__51047__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51047__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__51059 = phase;
var G__51059__$1 = (((G__51059 instanceof cljs.core.Keyword))?G__51059.fqn:null);
switch (G__51059__$1) {
case "read-source":
var map__51072 = data;
var map__51072__$1 = cljs.core.__destructure_map(map__51072);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51072__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51072__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__51073 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__51073__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51073,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__51073);
var G__51073__$2 = (cljs.core.truth_((function (){var fexpr__51079 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51079.cljs$core$IFn$_invoke$arity$1 ? fexpr__51079.cljs$core$IFn$_invoke$arity$1(source) : fexpr__51079.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51073__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__51073__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51073__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__51073__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__51091 = top_data;
var G__51091__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51091,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__51091);
var G__51091__$2 = (cljs.core.truth_((function (){var fexpr__51103 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51103.cljs$core$IFn$_invoke$arity$1 ? fexpr__51103.cljs$core$IFn$_invoke$arity$1(source) : fexpr__51103.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51091__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__51091__$1);
var G__51091__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51091__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__51091__$2);
var G__51091__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51091__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__51091__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51091__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__51091__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__51106 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51106,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51106,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51106,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51106,(3),null);
var G__51117 = top_data;
var G__51117__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51117,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__51117);
var G__51117__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51117__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__51117__$1);
var G__51117__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51117__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__51117__$2);
var G__51117__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51117__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__51117__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51117__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__51117__$4;
}

break;
case "execution":
var vec__51137 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51137,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51137,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51137,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51137,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__51040_SHARP_){
var or__4253__auto__ = (p1__51040_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__51150 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51150.cljs$core$IFn$_invoke$arity$1 ? fexpr__51150.cljs$core$IFn$_invoke$arity$1(p1__51040_SHARP_) : fexpr__51150.call(null,p1__51040_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__51151 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__51151__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51151,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__51151);
var G__51151__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51151__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__51151__$1);
var G__51151__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51151__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__51151__$2);
var G__51151__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51151__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__51151__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51151__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__51151__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51059__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__51177){
var map__51178 = p__51177;
var map__51178__$1 = cljs.core.__destructure_map(map__51178);
var triage_data = map__51178__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51178__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51178__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51178__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51178__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51178__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51178__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51178__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51178__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__51195 = phase;
var G__51195__$1 = (((G__51195 instanceof cljs.core.Keyword))?G__51195.fqn:null);
switch (G__51195__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__51197 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__51198 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51199 = loc;
var G__51200 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51202_51474 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51203_51475 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51204_51476 = true;
var _STAR_print_fn_STAR__temp_val__51205_51477 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51204_51476);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51205_51477);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51171_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51171_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51203_51475);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51202_51474);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__51197,G__51198,G__51199,G__51200) : format.call(null,G__51197,G__51198,G__51199,G__51200));

break;
case "macroexpansion":
var G__51212 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__51213 = cause_type;
var G__51214 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51215 = loc;
var G__51216 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51212,G__51213,G__51214,G__51215,G__51216) : format.call(null,G__51212,G__51213,G__51214,G__51215,G__51216));

break;
case "compile-syntax-check":
var G__51218 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__51219 = cause_type;
var G__51220 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51221 = loc;
var G__51222 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51218,G__51219,G__51220,G__51221,G__51222) : format.call(null,G__51218,G__51219,G__51220,G__51221,G__51222));

break;
case "compilation":
var G__51226 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__51227 = cause_type;
var G__51228 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51229 = loc;
var G__51230 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51226,G__51227,G__51228,G__51229,G__51230) : format.call(null,G__51226,G__51227,G__51228,G__51229,G__51230));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__51231 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__51232 = symbol;
var G__51233 = loc;
var G__51234 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51236_51497 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51237_51498 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51238_51499 = true;
var _STAR_print_fn_STAR__temp_val__51239_51500 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51238_51499);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51239_51500);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51172_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51172_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51237_51498);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51236_51497);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__51231,G__51232,G__51233,G__51234) : format.call(null,G__51231,G__51232,G__51233,G__51234));
} else {
var G__51250 = "Execution error%s at %s(%s).\n%s\n";
var G__51251 = cause_type;
var G__51252 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51253 = loc;
var G__51254 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51250,G__51251,G__51252,G__51253,G__51254) : format.call(null,G__51250,G__51251,G__51252,G__51253,G__51254));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51195__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
