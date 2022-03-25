goog.provide('thump.react');
goog.scope(function(){
  thump.react.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
thump.react.keyword__GT_str = (function thump$react$keyword__GT_str(k){
var kw_ns = cljs.core.namespace(k);
var kw_name = cljs.core.name(k);
if((kw_ns == null)){
return kw_name;
} else {
return [kw_ns,"/",kw_name].join('');
}
});
/**
 * Returns camel case version of the string, e.g. "http-equiv" becomes "httpEquiv".
 */
thump.react.camel_case_STAR_ = (function thump$react$camel_case_STAR_(s){
if((((s instanceof cljs.core.Keyword)) || (((typeof s === 'string') || ((s instanceof cljs.core.Symbol)))))){
var vec__45343 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(s),/-/);
var seq__45344 = cljs.core.seq(vec__45343);
var first__45345 = cljs.core.first(seq__45344);
var seq__45344__$1 = cljs.core.next(seq__45344);
var first_word = first__45345;
var words = seq__45344__$1;
if(((cljs.core.empty_QMARK_(words)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("aria",first_word)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("data",first_word)))))){
return cljs.core.name(s);
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,words),first_word));
}
} else {
return s;
}
});
thump.react.map_entry__GT_obj_entry = (function thump$react$map_entry__GT_obj_entry(p__45346){
var vec__45347 = p__45346;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45347,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45347,(1),null);
var G__45350 = k;
var G__45350__$1 = (((G__45350 instanceof cljs.core.Keyword))?G__45350.fqn:null);
switch (G__45350__$1) {
case "style":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["style",cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keyword-fn","keyword-fn",-64566675),thump.react.camel_case_STAR_], 0))], null);

break;
case "class":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["className",((typeof v === 'string')?v:clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,v)))], null);

break;
case "for":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["htmlFor",v], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thump.react.camel_case_STAR_(thump.react.keyword__GT_str(k)),v], null);

}
});
thump.react.merge_obj_PLUS_map = (function thump$react$merge_obj_PLUS_map(obj,m){
var seq__45351_45370 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(thump.react.map_entry__GT_obj_entry,m));
var chunk__45352_45371 = null;
var count__45353_45372 = (0);
var i__45354_45373 = (0);
while(true){
if((i__45354_45373 < count__45353_45372)){
var vec__45361_45374 = chunk__45352_45371.cljs$core$IIndexed$_nth$arity$2(null,i__45354_45373);
var k_45375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45361_45374,(0),null);
var v_45376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45361_45374,(1),null);
if(cljs.core.truth_(thump.react.goog$module$goog$object.containsKey(obj,k_45375))){
} else {
thump.react.goog$module$goog$object.set(obj,k_45375,v_45376);
}


var G__45377 = seq__45351_45370;
var G__45378 = chunk__45352_45371;
var G__45379 = count__45353_45372;
var G__45380 = (i__45354_45373 + (1));
seq__45351_45370 = G__45377;
chunk__45352_45371 = G__45378;
count__45353_45372 = G__45379;
i__45354_45373 = G__45380;
continue;
} else {
var temp__5804__auto___45381 = cljs.core.seq(seq__45351_45370);
if(temp__5804__auto___45381){
var seq__45351_45382__$1 = temp__5804__auto___45381;
if(cljs.core.chunked_seq_QMARK_(seq__45351_45382__$1)){
var c__4679__auto___45383 = cljs.core.chunk_first(seq__45351_45382__$1);
var G__45384 = cljs.core.chunk_rest(seq__45351_45382__$1);
var G__45385 = c__4679__auto___45383;
var G__45386 = cljs.core.count(c__4679__auto___45383);
var G__45387 = (0);
seq__45351_45370 = G__45384;
chunk__45352_45371 = G__45385;
count__45353_45372 = G__45386;
i__45354_45373 = G__45387;
continue;
} else {
var vec__45364_45388 = cljs.core.first(seq__45351_45382__$1);
var k_45389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45364_45388,(0),null);
var v_45390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45364_45388,(1),null);
if(cljs.core.truth_(thump.react.goog$module$goog$object.containsKey(obj,k_45389))){
} else {
thump.react.goog$module$goog$object.set(obj,k_45389,v_45390);
}


var G__45391 = cljs.core.next(seq__45351_45382__$1);
var G__45392 = null;
var G__45393 = (0);
var G__45394 = (0);
seq__45351_45370 = G__45391;
chunk__45352_45371 = G__45392;
count__45353_45372 = G__45393;
i__45354_45373 = G__45394;
continue;
}
} else {
}
}
break;
}

return obj;
});
thump.react.props__GT_obj = (function thump$react$props__GT_obj(m){
if(cljs.core.contains_QMARK_(m,new cljs.core.Symbol(null,"&","&",-2144855648,null))){
return thump.react.merge_obj_PLUS_map(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thump.react.goog$module$goog$object.create,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(thump.react.map_entry__GT_obj_entry,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Symbol(null,"&","&",-2144855648,null))], 0))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Symbol(null,"&","&",-2144855648,null)));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thump.react.goog$module$goog$object.create,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(thump.react.map_entry__GT_obj_entry,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0)));
}
});
thump.react.create_element = module$node_modules$react$index.createElement;
thump.react.Fragment = module$node_modules$react$index.Fragment;
thump.react.custom_els = new cljs.core.PersistentArrayMap(null, 1, ["<>",module$node_modules$react$index.Fragment], null);
thump.react.hiccup_element = (function thump$react$hiccup_element(el,props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,cljs.core.get.cljs$core$IFn$_invoke$arity$3(thump.react.custom_els,el,el),thump.react.props__GT_obj(props),children);
});
thump.react.interpret = (function thump$react$interpret(vec){
var _STAR_hiccup_element_STAR__orig_val__45367 = thump.core._STAR_hiccup_element_STAR_;
var _STAR_hiccup_element_STAR__temp_val__45368 = thump.react.hiccup_element;
(thump.core._STAR_hiccup_element_STAR_ = _STAR_hiccup_element_STAR__temp_val__45368);

try{return thump.core.interpret(vec);
}finally {(thump.core._STAR_hiccup_element_STAR_ = _STAR_hiccup_element_STAR__orig_val__45367);
}});

//# sourceMappingURL=thump.react.js.map
