goog.provide('clojure.core.rrb_vector.nodes');
clojure.core.rrb_vector.nodes.empty_node = cljs.core.PersistentVector.EMPTY_NODE;
clojure.core.rrb_vector.nodes.clone = (function clojure$core$rrb_vector$nodes$clone(shift,node){
return (new cljs.core.VectorNode(node.edit,cljs.core.aclone(node.arr)));
});
clojure.core.rrb_vector.nodes.regular_QMARK_ = (function clojure$core$rrb_vector$nodes$regular_QMARK_(node){
return (!((node.arr.length === (33))));
});
clojure.core.rrb_vector.nodes.node_ranges = (function clojure$core$rrb_vector$nodes$node_ranges(node){
return (node.arr[(32)]);
});
clojure.core.rrb_vector.nodes.last_range = (function clojure$core$rrb_vector$nodes$last_range(node){
var rngs = clojure.core.rrb_vector.nodes.node_ranges(node);
var i = ((rngs[(32)]) - (1));
return (rngs[i]);
});
clojure.core.rrb_vector.nodes.regular_ranges = (function clojure$core$rrb_vector$nodes$regular_ranges(shift,cnt){
var step = ((1) << shift);
var rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var i = (0);
var r = step;
while(true){
if((r < cnt)){
(rngs[i] = r);

var G__44409 = (i + (1));
var G__44410 = (r + step);
i = G__44409;
r = G__44410;
continue;
} else {
(rngs[i] = cnt);

(rngs[(32)] = (i + (1)));

return rngs;
}
break;
}
});
clojure.core.rrb_vector.nodes.overflow_QMARK_ = (function clojure$core$rrb_vector$nodes$overflow_QMARK_(root,shift,cnt){
while(true){
if(clojure.core.rrb_vector.nodes.regular_QMARK_(root)){
return ((cnt >> (5)) > ((1) << shift));
} else {
var rngs = clojure.core.rrb_vector.nodes.node_ranges(root);
var slc = (rngs[(32)]);
var and__4251__auto__ = (slc === (32));
if(and__4251__auto__){
var or__4253__auto__ = (shift === (5));
if(or__4253__auto__){
return or__4253__auto__;
} else {
var G__44415 = (root.arr[(slc - (1))]);
var G__44416 = (shift - (5));
var G__44417 = (((rngs[(31)]) - (rngs[(30)])) + (32));
root = G__44415;
shift = G__44416;
cnt = G__44417;
continue;
}
} else {
return and__4251__auto__;
}
}
break;
}
});
clojure.core.rrb_vector.nodes.index_of_0 = (function clojure$core$rrb_vector$nodes$index_of_0(arr){
var l = (0);
var h = (31);
while(true){
if((l >= (h - (1)))){
if((((arr[l]) | (0)) === (0))){
return l;
} else {
if((((arr[h]) | (0)) === (0))){
return h;
} else {
return (32);
}
}
} else {
var mid = (l + ((h - l) >> (1)));
if((((arr[mid]) | (0)) === (0))){
var G__44421 = l;
var G__44422 = mid;
l = G__44421;
h = G__44422;
continue;
} else {
var G__44423 = (mid + (1));
var G__44424 = h;
l = G__44423;
h = G__44424;
continue;
}
}
break;
}
});
clojure.core.rrb_vector.nodes.index_of_nil = (function clojure$core$rrb_vector$nodes$index_of_nil(arr){
var l = (0);
var h = (31);
while(true){
if((l >= (h - (1)))){
if(((arr[l]) == null)){
return l;
} else {
if(((arr[h]) == null)){
return h;
} else {
return (32);
}
}
} else {
var mid = (l + ((h - l) >> (1)));
if(((arr[mid]) == null)){
var G__44428 = l;
var G__44429 = mid;
l = G__44428;
h = G__44429;
continue;
} else {
var G__44430 = (mid + (1));
var G__44431 = h;
l = G__44430;
h = G__44431;
continue;
}
}
break;
}
});
clojure.core.rrb_vector.nodes.first_child = (function clojure$core$rrb_vector$nodes$first_child(node){
return (node.arr[(0)]);
});
clojure.core.rrb_vector.nodes.last_child = (function clojure$core$rrb_vector$nodes$last_child(node){
var arr = node.arr;
if(clojure.core.rrb_vector.nodes.regular_QMARK_(node)){
return (arr[(clojure.core.rrb_vector.nodes.index_of_nil(arr) - (1))]);
} else {
return (arr[((clojure.core.rrb_vector.nodes.node_ranges(node)[(32)]) - (1))]);
}
});
clojure.core.rrb_vector.nodes.remove_leftmost_child = (function clojure$core$rrb_vector$nodes$remove_leftmost_child(shift,parent){
var arr = parent.arr;
if(((arr[(1)]) == null)){
return null;
} else {
var r_QMARK_ = clojure.core.rrb_vector.nodes.regular_QMARK_(parent);
var new_arr = (new Array(((r_QMARK_)?(32):(33))));
cljs.core.array_copy(arr,(1),new_arr,(0),(31));

if((!(r_QMARK_))){
var rngs_44437 = clojure.core.rrb_vector.nodes.node_ranges(parent);
var rng0_44438 = (rngs_44437[(0)]);
var new_rngs_44439 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var lim_44440 = (rngs_44437[(32)]);
cljs.core.array_copy(rngs_44437,(1),new_rngs_44439,(0),(lim_44440 - (1)));

var i_44445 = (0);
while(true){
if((i_44445 < lim_44440)){
(new_rngs_44439[i_44445] = ((new_rngs_44439[i_44445]) - rng0_44438));

var G__44446 = (i_44445 + (1));
i_44445 = G__44446;
continue;
} else {
}
break;
}

(new_rngs_44439[(32)] = ((rngs_44437[(32)]) - (1)));

(new_rngs_44439[((rngs_44437[(32)]) - (1))] = (0));

(new_arr[(32)] = new_rngs_44439);
} else {
}

return cljs.core.__GT_VectorNode(parent.edit,new_arr);
}
});
clojure.core.rrb_vector.nodes.replace_leftmost_child = (function clojure$core$rrb_vector$nodes$replace_leftmost_child(shift,parent,pcnt,child,d){
if(clojure.core.rrb_vector.nodes.regular_QMARK_(parent)){
var step = ((1) << shift);
var rng0 = (step - d);
var ncnt = (pcnt - d);
var li = ((shift >> (pcnt - (1))) & (31));
var arr = parent.arr;
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(new_arr[(0)] = child);

cljs.core.array_copy(arr,(1),new_arr,(1),li);

(new_arr[(32)] = new_rngs);

(new_rngs[(0)] = rng0);

(new_rngs[li] = ncnt);

(new_rngs[(32)] = (li + (1)));

var i_44455 = (1);
while(true){
if((i_44455 <= li)){
(new_rngs[i_44455] = ((new_rngs[(i_44455 - (1))]) + step));

var G__44458 = (i_44455 + (1));
i_44455 = G__44458;
continue;
} else {
}
break;
}

return cljs.core.__GT_VectorNode(null,new_arr);
} else {
var new_arr = cljs.core.aclone(parent.arr);
var rngs = clojure.core.rrb_vector.nodes.node_ranges(parent);
var new_rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var li = ((rngs[(32)]) - (1));
(new_rngs[(32)] = (rngs[(32)]));

(new_arr[(32)] = new_rngs);

(new_arr[(0)] = child);

var i_44460 = (0);
while(true){
if((i_44460 <= li)){
(new_rngs[i_44460] = ((rngs[i_44460]) - d));

var G__44463 = (i_44460 + (1));
i_44460 = G__44463;
continue;
} else {
}
break;
}

return cljs.core.__GT_VectorNode(null,new_arr);
}
});
clojure.core.rrb_vector.nodes.replace_rightmost_child = (function clojure$core$rrb_vector$nodes$replace_rightmost_child(shift,parent,child,d){
if(clojure.core.rrb_vector.nodes.regular_QMARK_(parent)){
var arr = parent.arr;
var i = (clojure.core.rrb_vector.nodes.index_of_nil(arr) - (1));
if(clojure.core.rrb_vector.nodes.regular_QMARK_(child)){
var new_arr = cljs.core.aclone(arr);
(new_arr[i] = child);

return cljs.core.__GT_VectorNode(null,new_arr);
} else {
var arr__$1 = parent.arr;
var new_arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var step = ((1) << shift);
var rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(rngs[(32)] = (i + (1)));

(new_arr[(32)] = rngs);

cljs.core.array_copy(arr__$1,(0),new_arr,(0),i);

(new_arr[i] = child);

var j_44471 = (0);
var r_44472 = step;
while(true){
if((j_44471 <= i)){
(rngs[j_44471] = r_44472);

var G__44474 = (j_44471 + (1));
var G__44475 = (r_44472 + step);
j_44471 = G__44474;
r_44472 = G__44475;
continue;
} else {
}
break;
}

(rngs[i] = clojure.core.rrb_vector.nodes.last_range(child));

return cljs.core.__GT_VectorNode(null,new_arr);
}
} else {
var rngs = clojure.core.rrb_vector.nodes.node_ranges(parent);
var new_rngs = cljs.core.aclone(rngs);
var i = ((rngs[(32)]) - (1));
var new_arr = cljs.core.aclone(parent.arr);
(new_arr[i] = child);

(new_arr[(32)] = new_rngs);

(new_rngs[i] = ((rngs[i]) + d));

return cljs.core.__GT_VectorNode(null,new_arr);
}
});
clojure.core.rrb_vector.nodes.new_path_STAR_ = (function clojure$core$rrb_vector$nodes$new_path_STAR_(shift,node){
var reg_QMARK_ = ((32) === node.arr.length);
var len = ((reg_QMARK_)?(32):(33));
var arr = (new Array(len));
var rngs = (((!(reg_QMARK_)))?(function (){var G__44366 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(G__44366[(0)] = node.arr.length);

(G__44366[(32)] = (1));

return G__44366;
})():null);
var ret = cljs.core.__GT_VectorNode(null,arr);
var arr_44485__$1 = arr;
var shift_44486__$1 = shift;
while(true){
if((shift_44486__$1 === (5))){
if((!(reg_QMARK_))){
(arr_44485__$1[(32)] = rngs);
} else {
}

(arr_44485__$1[(0)] = node);
} else {
var a_44487 = (new Array(len));
var e_44488 = cljs.core.__GT_VectorNode(null,a_44487);
(arr_44485__$1[(0)] = e_44488);

if((!(reg_QMARK_))){
(arr_44485__$1[(32)] = rngs);
} else {
}

var G__44490 = a_44487;
var G__44491 = (shift_44486__$1 - (5));
arr_44485__$1 = G__44490;
shift_44486__$1 = G__44491;
continue;
}
break;
}

return ret;
});
clojure.core.rrb_vector.nodes.fold_tail = (function clojure$core$rrb_vector$nodes$fold_tail(node,shift,cnt,tail){
var tlen = tail.length;
var reg_QMARK_ = ((clojure.core.rrb_vector.nodes.regular_QMARK_(node)) && ((tlen === (32))));
var arr = node.arr;
var li = clojure.core.rrb_vector.nodes.index_of_nil(arr);
var new_arr = (new Array(((reg_QMARK_)?(32):(33))));
var rngs = (((!(clojure.core.rrb_vector.nodes.regular_QMARK_(node))))?clojure.core.rrb_vector.nodes.node_ranges(node):null);
var cret = (((shift === (5)))?cljs.core.__GT_VectorNode(null,tail):(function (){var G__44379 = (arr[(li - (1))]);
var G__44380 = (shift - (5));
var G__44381 = ((clojure.core.rrb_vector.nodes.regular_QMARK_(node))?cljs.core.mod(cnt,((1) << shift)):(function (){var li__$1 = ((rngs[(32)]) - (1));
if((li__$1 > (0))){
return ((rngs[li__$1]) - (rngs[(li__$1 - (1))]));
} else {
return (rngs[(0)]);
}
})());
var G__44382 = tail;
return (clojure.core.rrb_vector.nodes.fold_tail.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.nodes.fold_tail.cljs$core$IFn$_invoke$arity$4(G__44379,G__44380,G__44381,G__44382) : clojure.core.rrb_vector.nodes.fold_tail.call(null,G__44379,G__44380,G__44381,G__44382));
})());
var new_rngs = (((!(reg_QMARK_)))?(cljs.core.truth_(rngs)?cljs.core.aclone(rngs):clojure.core.rrb_vector.nodes.regular_ranges(shift,cnt)):null);
if((((((cret == null)) || ((shift === (5))))) && ((li === (32))))){
return null;
} else {
cljs.core.array_copy(arr,(0),new_arr,(0),li);

if(reg_QMARK_){
} else {
if((((cret == null)) || ((shift === (5))))){
(new_rngs[li] = ((((li > (0)))?(new_rngs[(li - (1))]):((0) | (0))) + tlen));

(new_rngs[(32)] = (li + (1)));
} else {
if((li > (0))){
(new_rngs[(li - (1))] = ((new_rngs[(li - (1))]) + tlen));
} else {
}

(new_rngs[(32)] = li);
}
}

if((!(reg_QMARK_))){
(new_arr[(32)] = new_rngs);
} else {
}

if((cret == null)){
(new_arr[li] = clojure.core.rrb_vector.nodes.new_path_STAR_((shift - (5)),cljs.core.__GT_VectorNode(null,tail)));
} else {
(new_arr[(((shift === (5)))?li:(li - (1)))] = cret);
}

return cljs.core.__GT_VectorNode(null,new_arr);
}
});

//# sourceMappingURL=clojure.core.rrb_vector.nodes.js.map
