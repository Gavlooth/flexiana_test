goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__47286 = arguments.length;
switch (G__47286) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47296 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47296 = (function (f,blockable,meta47297){
this.f = f;
this.blockable = blockable;
this.meta47297 = meta47297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47298,meta47297__$1){
var self__ = this;
var _47298__$1 = this;
return (new cljs.core.async.t_cljs$core$async47296(self__.f,self__.blockable,meta47297__$1));
}));

(cljs.core.async.t_cljs$core$async47296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47298){
var self__ = this;
var _47298__$1 = this;
return self__.meta47297;
}));

(cljs.core.async.t_cljs$core$async47296.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47296.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47296.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async47296.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async47296.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta47297","meta47297",-1961766147,null)], null);
}));

(cljs.core.async.t_cljs$core$async47296.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47296.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47296");

(cljs.core.async.t_cljs$core$async47296.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47296");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47296.
 */
cljs.core.async.__GT_t_cljs$core$async47296 = (function cljs$core$async$__GT_t_cljs$core$async47296(f__$1,blockable__$1,meta47297){
return (new cljs.core.async.t_cljs$core$async47296(f__$1,blockable__$1,meta47297));
});

}

return (new cljs.core.async.t_cljs$core$async47296(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__47408 = arguments.length;
switch (G__47408) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__47415 = arguments.length;
switch (G__47415) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__47434 = arguments.length;
switch (G__47434) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_51092 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_51092) : fn1.call(null,val_51092));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_51092) : fn1.call(null,val_51092));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__47454 = arguments.length;
switch (G__47454) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___51131 = n;
var x_51132 = (0);
while(true){
if((x_51132 < n__4741__auto___51131)){
(a[x_51132] = x_51132);

var G__51136 = (x_51132 + (1));
x_51132 = G__51136;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47481 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47481 = (function (flag,meta47482){
this.flag = flag;
this.meta47482 = meta47482;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47483,meta47482__$1){
var self__ = this;
var _47483__$1 = this;
return (new cljs.core.async.t_cljs$core$async47481(self__.flag,meta47482__$1));
}));

(cljs.core.async.t_cljs$core$async47481.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47483){
var self__ = this;
var _47483__$1 = this;
return self__.meta47482;
}));

(cljs.core.async.t_cljs$core$async47481.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47481.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async47481.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47481.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async47481.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta47482","meta47482",648148949,null)], null);
}));

(cljs.core.async.t_cljs$core$async47481.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47481.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47481");

(cljs.core.async.t_cljs$core$async47481.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47481");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47481.
 */
cljs.core.async.__GT_t_cljs$core$async47481 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async47481(flag__$1,meta47482){
return (new cljs.core.async.t_cljs$core$async47481(flag__$1,meta47482));
});

}

return (new cljs.core.async.t_cljs$core$async47481(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47501 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47501 = (function (flag,cb,meta47502){
this.flag = flag;
this.cb = cb;
this.meta47502 = meta47502;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47503,meta47502__$1){
var self__ = this;
var _47503__$1 = this;
return (new cljs.core.async.t_cljs$core$async47501(self__.flag,self__.cb,meta47502__$1));
}));

(cljs.core.async.t_cljs$core$async47501.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47503){
var self__ = this;
var _47503__$1 = this;
return self__.meta47502;
}));

(cljs.core.async.t_cljs$core$async47501.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47501.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async47501.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47501.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async47501.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta47502","meta47502",1590713588,null)], null);
}));

(cljs.core.async.t_cljs$core$async47501.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47501.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47501");

(cljs.core.async.t_cljs$core$async47501.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47501");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47501.
 */
cljs.core.async.__GT_t_cljs$core$async47501 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async47501(flag__$1,cb__$1,meta47502){
return (new cljs.core.async.t_cljs$core$async47501(flag__$1,cb__$1,meta47502));
});

}

return (new cljs.core.async.t_cljs$core$async47501(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47517_SHARP_){
var G__47527 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47517_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47527) : fret.call(null,G__47527));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47518_SHARP_){
var G__47531 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47518_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47531) : fret.call(null,G__47531));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__51188 = (i + (1));
i = G__51188;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___51189 = arguments.length;
var i__4865__auto___51190 = (0);
while(true){
if((i__4865__auto___51190 < len__4864__auto___51189)){
args__4870__auto__.push((arguments[i__4865__auto___51190]));

var G__51191 = (i__4865__auto___51190 + (1));
i__4865__auto___51190 = G__51191;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__47540){
var map__47541 = p__47540;
var map__47541__$1 = cljs.core.__destructure_map(map__47541);
var opts = map__47541__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq47537){
var G__47538 = cljs.core.first(seq47537);
var seq47537__$1 = cljs.core.next(seq47537);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47538,seq47537__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__47556 = arguments.length;
switch (G__47556) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__44084__auto___51208 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44085__auto__ = (function (){var switch__43720__auto__ = (function (state_47613){
var state_val_47614 = (state_47613[(1)]);
if((state_val_47614 === (7))){
var inst_47607 = (state_47613[(2)]);
var state_47613__$1 = state_47613;
var statearr_47629_51210 = state_47613__$1;
(statearr_47629_51210[(2)] = inst_47607);

(statearr_47629_51210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47614 === (1))){
var state_47613__$1 = state_47613;
var statearr_47634_51211 = state_47613__$1;
(statearr_47634_51211[(2)] = null);

(statearr_47634_51211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47614 === (4))){
var inst_47581 = (state_47613[(7)]);
var inst_47581__$1 = (state_47613[(2)]);
var inst_47589 = (inst_47581__$1 == null);
var state_47613__$1 = (function (){var statearr_47637 = state_47613;
(statearr_47637[(7)] = inst_47581__$1);

return statearr_47637;
})();
if(cljs.core.truth_(inst_47589)){
var statearr_47638_51223 = state_47613__$1;
(statearr_47638_51223[(1)] = (5));

} else {
var statearr_47639_51224 = state_47613__$1;
(statearr_47639_51224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47614 === (13))){
var state_47613__$1 = state_47613;
var statearr_47641_51225 = state_47613__$1;
(statearr_47641_51225[(2)] = null);

(statearr_47641_51225[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47614 === (6))){
var inst_47581 = (state_47613[(7)]);
var state_47613__$1 = state_47613;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47613__$1,(11),to,inst_47581);
} else {
if((state_val_47614 === (3))){
var inst_47610 = (state_47613[(2)]);
var state_47613__$1 = state_47613;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47613__$1,inst_47610);
} else {
if((state_val_47614 === (12))){
var state_47613__$1 = state_47613;
var statearr_47643_51235 = state_47613__$1;
(statearr_47643_51235[(2)] = null);

(statearr_47643_51235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47614 === (2))){
var state_47613__$1 = state_47613;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47613__$1,(4),from);
} else {
if((state_val_47614 === (11))){
var inst_47599 = (state_47613[(2)]);
var state_47613__$1 = state_47613;
if(cljs.core.truth_(inst_47599)){
var statearr_47644_51240 = state_47613__$1;
(statearr_47644_51240[(1)] = (12));

} else {
var statearr_47645_51242 = state_47613__$1;
(statearr_47645_51242[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47614 === (9))){
var state_47613__$1 = state_47613;
var statearr_47646_51244 = state_47613__$1;
(statearr_47646_51244[(2)] = null);

(statearr_47646_51244[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47614 === (5))){
var state_47613__$1 = state_47613;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47649_51245 = state_47613__$1;
(statearr_47649_51245[(1)] = (8));

} else {
var statearr_47650_51246 = state_47613__$1;
(statearr_47650_51246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47614 === (14))){
var inst_47605 = (state_47613[(2)]);
var state_47613__$1 = state_47613;
var statearr_47652_51248 = state_47613__$1;
(statearr_47652_51248[(2)] = inst_47605);

(statearr_47652_51248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47614 === (10))){
var inst_47596 = (state_47613[(2)]);
var state_47613__$1 = state_47613;
var statearr_47656_51255 = state_47613__$1;
(statearr_47656_51255[(2)] = inst_47596);

(statearr_47656_51255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47614 === (8))){
var inst_47593 = cljs.core.async.close_BANG_(to);
var state_47613__$1 = state_47613;
var statearr_47657_51265 = state_47613__$1;
(statearr_47657_51265[(2)] = inst_47593);

(statearr_47657_51265[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__43721__auto__ = null;
var cljs$core$async$state_machine__43721__auto____0 = (function (){
var statearr_47658 = [null,null,null,null,null,null,null,null];
(statearr_47658[(0)] = cljs$core$async$state_machine__43721__auto__);

(statearr_47658[(1)] = (1));

return statearr_47658;
});
var cljs$core$async$state_machine__43721__auto____1 = (function (state_47613){
while(true){
var ret_value__43722__auto__ = (function (){try{while(true){
var result__43723__auto__ = switch__43720__auto__(state_47613);
if(cljs.core.keyword_identical_QMARK_(result__43723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43723__auto__;
}
break;
}
}catch (e47659){var ex__43724__auto__ = e47659;
var statearr_47660_51266 = state_47613;
(statearr_47660_51266[(2)] = ex__43724__auto__);


if(cljs.core.seq((state_47613[(4)]))){
var statearr_47661_51267 = state_47613;
(statearr_47661_51267[(1)] = cljs.core.first((state_47613[(4)])));

} else {
throw ex__43724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51272 = state_47613;
state_47613 = G__51272;
continue;
} else {
return ret_value__43722__auto__;
}
break;
}
});
cljs$core$async$state_machine__43721__auto__ = function(state_47613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43721__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43721__auto____1.call(this,state_47613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43721__auto____0;
cljs$core$async$state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43721__auto____1;
return cljs$core$async$state_machine__43721__auto__;
})()
})();
var state__44086__auto__ = (function (){var statearr_47665 = f__44085__auto__();
(statearr_47665[(6)] = c__44084__auto___51208);

return statearr_47665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44086__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__47690){
var vec__47692 = p__47690;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47692,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47692,(1),null);
var job = vec__47692;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__44084__auto___51280 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44085__auto__ = (function (){var switch__43720__auto__ = (function (state_47702){
var state_val_47703 = (state_47702[(1)]);
if((state_val_47703 === (1))){
var state_47702__$1 = state_47702;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47702__$1,(2),res,v);
} else {
if((state_val_47703 === (2))){
var inst_47698 = (state_47702[(2)]);
var inst_47700 = cljs.core.async.close_BANG_(res);
var state_47702__$1 = (function (){var statearr_47718 = state_47702;
(statearr_47718[(7)] = inst_47698);

return statearr_47718;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47702__$1,inst_47700);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43721__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43721__auto____0 = (function (){
var statearr_47723 = [null,null,null,null,null,null,null,null];
(statearr_47723[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43721__auto__);

(statearr_47723[(1)] = (1));

return statearr_47723;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43721__auto____1 = (function (state_47702){
while(true){
var ret_value__43722__auto__ = (function (){try{while(true){
var result__43723__auto__ = switch__43720__auto__(state_47702);
if(cljs.core.keyword_identical_QMARK_(result__43723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43723__auto__;
}
break;
}
}catch (e47725){var ex__43724__auto__ = e47725;
var statearr_47727_51298 = state_47702;
(statearr_47727_51298[(2)] = ex__43724__auto__);


if(cljs.core.seq((state_47702[(4)]))){
var statearr_47728_51303 = state_47702;
(statearr_47728_51303[(1)] = cljs.core.first((state_47702[(4)])));

} else {
throw ex__43724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51305 = state_47702;
state_47702 = G__51305;
continue;
} else {
return ret_value__43722__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43721__auto__ = function(state_47702){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43721__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43721__auto____1.call(this,state_47702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43721__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43721__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43721__auto__;
})()
})();
var state__44086__auto__ = (function (){var statearr_47736 = f__44085__auto__();
(statearr_47736[(6)] = c__44084__auto___51280);

return statearr_47736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44086__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__47745){
var vec__47746 = p__47745;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47746,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47746,(1),null);
var job = vec__47746;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___51314 = n;
var __51315 = (0);
while(true){
if((__51315 < n__4741__auto___51314)){
var G__47756_51316 = type;
var G__47756_51317__$1 = (((G__47756_51316 instanceof cljs.core.Keyword))?G__47756_51316.fqn:null);
switch (G__47756_51317__$1) {
case "compute":
var c__44084__auto___51323 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__51315,c__44084__auto___51323,G__47756_51316,G__47756_51317__$1,n__4741__auto___51314,jobs,results,process,async){
return (function (){
var f__44085__auto__ = (function (){var switch__43720__auto__ = ((function (__51315,c__44084__auto___51323,G__47756_51316,G__47756_51317__$1,n__4741__auto___51314,jobs,results,process,async){
return (function (state_47774){
var state_val_47775 = (state_47774[(1)]);
if((state_val_47775 === (1))){
var state_47774__$1 = state_47774;
var statearr_47788_51330 = state_47774__$1;
(statearr_47788_51330[(2)] = null);

(statearr_47788_51330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47775 === (2))){
var state_47774__$1 = state_47774;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47774__$1,(4),jobs);
} else {
if((state_val_47775 === (3))){
var inst_47772 = (state_47774[(2)]);
var state_47774__$1 = state_47774;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47774__$1,inst_47772);
} else {
if((state_val_47775 === (4))){
var inst_47764 = (state_47774[(2)]);
var inst_47765 = process(inst_47764);
var state_47774__$1 = state_47774;
if(cljs.core.truth_(inst_47765)){
var statearr_47794_51346 = state_47774__$1;
(statearr_47794_51346[(1)] = (5));

} else {
var statearr_47797_51353 = state_47774__$1;
(statearr_47797_51353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47775 === (5))){
var state_47774__$1 = state_47774;
var statearr_47801_51356 = state_47774__$1;
(statearr_47801_51356[(2)] = null);

(statearr_47801_51356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47775 === (6))){
var state_47774__$1 = state_47774;
var statearr_47805_51357 = state_47774__$1;
(statearr_47805_51357[(2)] = null);

(statearr_47805_51357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47775 === (7))){
var inst_47770 = (state_47774[(2)]);
var state_47774__$1 = state_47774;
var statearr_47813_51362 = state_47774__$1;
(statearr_47813_51362[(2)] = inst_47770);

(statearr_47813_51362[(1)] = (3));


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
});})(__51315,c__44084__auto___51323,G__47756_51316,G__47756_51317__$1,n__4741__auto___51314,jobs,results,process,async))
;
return ((function (__51315,switch__43720__auto__,c__44084__auto___51323,G__47756_51316,G__47756_51317__$1,n__4741__auto___51314,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43721__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43721__auto____0 = (function (){
var statearr_47818 = [null,null,null,null,null,null,null];
(statearr_47818[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43721__auto__);

(statearr_47818[(1)] = (1));

return statearr_47818;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43721__auto____1 = (function (state_47774){
while(true){
var ret_value__43722__auto__ = (function (){try{while(true){
var result__43723__auto__ = switch__43720__auto__(state_47774);
if(cljs.core.keyword_identical_QMARK_(result__43723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43723__auto__;
}
break;
}
}catch (e47820){var ex__43724__auto__ = e47820;
var statearr_47822_51365 = state_47774;
(statearr_47822_51365[(2)] = ex__43724__auto__);


if(cljs.core.seq((state_47774[(4)]))){
var statearr_47823_51370 = state_47774;
(statearr_47823_51370[(1)] = cljs.core.first((state_47774[(4)])));

} else {
throw ex__43724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51375 = state_47774;
state_47774 = G__51375;
continue;
} else {
return ret_value__43722__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43721__auto__ = function(state_47774){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43721__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43721__auto____1.call(this,state_47774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43721__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43721__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43721__auto__;
})()
;})(__51315,switch__43720__auto__,c__44084__auto___51323,G__47756_51316,G__47756_51317__$1,n__4741__auto___51314,jobs,results,process,async))
})();
var state__44086__auto__ = (function (){var statearr_47829 = f__44085__auto__();
(statearr_47829[(6)] = c__44084__auto___51323);

return statearr_47829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44086__auto__);
});})(__51315,c__44084__auto___51323,G__47756_51316,G__47756_51317__$1,n__4741__auto___51314,jobs,results,process,async))
);


break;
case "async":
var c__44084__auto___51378 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__51315,c__44084__auto___51378,G__47756_51316,G__47756_51317__$1,n__4741__auto___51314,jobs,results,process,async){
return (function (){
var f__44085__auto__ = (function (){var switch__43720__auto__ = ((function (__51315,c__44084__auto___51378,G__47756_51316,G__47756_51317__$1,n__4741__auto___51314,jobs,results,process,async){
return (function (state_47850){
var state_val_47851 = (state_47850[(1)]);
if((state_val_47851 === (1))){
var state_47850__$1 = state_47850;
var statearr_47856_51384 = state_47850__$1;
(statearr_47856_51384[(2)] = null);

(statearr_47856_51384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (2))){
var state_47850__$1 = state_47850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47850__$1,(4),jobs);
} else {
if((state_val_47851 === (3))){
var inst_47847 = (state_47850[(2)]);
var state_47850__$1 = state_47850;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47850__$1,inst_47847);
} else {
if((state_val_47851 === (4))){
var inst_47839 = (state_47850[(2)]);
var inst_47840 = async(inst_47839);
var state_47850__$1 = state_47850;
if(cljs.core.truth_(inst_47840)){
var statearr_47860_51386 = state_47850__$1;
(statearr_47860_51386[(1)] = (5));

} else {
var statearr_47863_51389 = state_47850__$1;
(statearr_47863_51389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (5))){
var state_47850__$1 = state_47850;
var statearr_47867_51390 = state_47850__$1;
(statearr_47867_51390[(2)] = null);

(statearr_47867_51390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (6))){
var state_47850__$1 = state_47850;
var statearr_47870_51391 = state_47850__$1;
(statearr_47870_51391[(2)] = null);

(statearr_47870_51391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47851 === (7))){
var inst_47845 = (state_47850[(2)]);
var state_47850__$1 = state_47850;
var statearr_47872_51392 = state_47850__$1;
(statearr_47872_51392[(2)] = inst_47845);

(statearr_47872_51392[(1)] = (3));


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
});})(__51315,c__44084__auto___51378,G__47756_51316,G__47756_51317__$1,n__4741__auto___51314,jobs,results,process,async))
;
return ((function (__51315,switch__43720__auto__,c__44084__auto___51378,G__47756_51316,G__47756_51317__$1,n__4741__auto___51314,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43721__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43721__auto____0 = (function (){
var statearr_47875 = [null,null,null,null,null,null,null];
(statearr_47875[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43721__auto__);

(statearr_47875[(1)] = (1));

return statearr_47875;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43721__auto____1 = (function (state_47850){
while(true){
var ret_value__43722__auto__ = (function (){try{while(true){
var result__43723__auto__ = switch__43720__auto__(state_47850);
if(cljs.core.keyword_identical_QMARK_(result__43723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43723__auto__;
}
break;
}
}catch (e47878){var ex__43724__auto__ = e47878;
var statearr_47883_51393 = state_47850;
(statearr_47883_51393[(2)] = ex__43724__auto__);


if(cljs.core.seq((state_47850[(4)]))){
var statearr_47884_51394 = state_47850;
(statearr_47884_51394[(1)] = cljs.core.first((state_47850[(4)])));

} else {
throw ex__43724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51395 = state_47850;
state_47850 = G__51395;
continue;
} else {
return ret_value__43722__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43721__auto__ = function(state_47850){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43721__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43721__auto____1.call(this,state_47850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43721__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43721__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43721__auto__;
})()
;})(__51315,switch__43720__auto__,c__44084__auto___51378,G__47756_51316,G__47756_51317__$1,n__4741__auto___51314,jobs,results,process,async))
})();
var state__44086__auto__ = (function (){var statearr_47887 = f__44085__auto__();
(statearr_47887[(6)] = c__44084__auto___51378);

return statearr_47887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44086__auto__);
});})(__51315,c__44084__auto___51378,G__47756_51316,G__47756_51317__$1,n__4741__auto___51314,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47756_51317__$1)].join('')));

}

var G__51405 = (__51315 + (1));
__51315 = G__51405;
continue;
} else {
}
break;
}

var c__44084__auto___51406 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44085__auto__ = (function (){var switch__43720__auto__ = (function (state_47919){
var state_val_47920 = (state_47919[(1)]);
if((state_val_47920 === (7))){
var inst_47914 = (state_47919[(2)]);
var state_47919__$1 = state_47919;
var statearr_47933_51412 = state_47919__$1;
(statearr_47933_51412[(2)] = inst_47914);

(statearr_47933_51412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47920 === (1))){
var state_47919__$1 = state_47919;
var statearr_47936_51416 = state_47919__$1;
(statearr_47936_51416[(2)] = null);

(statearr_47936_51416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47920 === (4))){
var inst_47894 = (state_47919[(7)]);
var inst_47894__$1 = (state_47919[(2)]);
var inst_47895 = (inst_47894__$1 == null);
var state_47919__$1 = (function (){var statearr_47941 = state_47919;
(statearr_47941[(7)] = inst_47894__$1);

return statearr_47941;
})();
if(cljs.core.truth_(inst_47895)){
var statearr_47942_51421 = state_47919__$1;
(statearr_47942_51421[(1)] = (5));

} else {
var statearr_47945_51422 = state_47919__$1;
(statearr_47945_51422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47920 === (6))){
var inst_47900 = (state_47919[(8)]);
var inst_47894 = (state_47919[(7)]);
var inst_47900__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_47902 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47904 = [inst_47894,inst_47900__$1];
var inst_47907 = (new cljs.core.PersistentVector(null,2,(5),inst_47902,inst_47904,null));
var state_47919__$1 = (function (){var statearr_47953 = state_47919;
(statearr_47953[(8)] = inst_47900__$1);

return statearr_47953;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47919__$1,(8),jobs,inst_47907);
} else {
if((state_val_47920 === (3))){
var inst_47916 = (state_47919[(2)]);
var state_47919__$1 = state_47919;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47919__$1,inst_47916);
} else {
if((state_val_47920 === (2))){
var state_47919__$1 = state_47919;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47919__$1,(4),from);
} else {
if((state_val_47920 === (9))){
var inst_47911 = (state_47919[(2)]);
var state_47919__$1 = (function (){var statearr_47956 = state_47919;
(statearr_47956[(9)] = inst_47911);

return statearr_47956;
})();
var statearr_47957_51428 = state_47919__$1;
(statearr_47957_51428[(2)] = null);

(statearr_47957_51428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47920 === (5))){
var inst_47897 = cljs.core.async.close_BANG_(jobs);
var state_47919__$1 = state_47919;
var statearr_47961_51432 = state_47919__$1;
(statearr_47961_51432[(2)] = inst_47897);

(statearr_47961_51432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47920 === (8))){
var inst_47900 = (state_47919[(8)]);
var inst_47909 = (state_47919[(2)]);
var state_47919__$1 = (function (){var statearr_47963 = state_47919;
(statearr_47963[(10)] = inst_47909);

return statearr_47963;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47919__$1,(9),results,inst_47900);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43721__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43721__auto____0 = (function (){
var statearr_47967 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47967[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43721__auto__);

(statearr_47967[(1)] = (1));

return statearr_47967;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43721__auto____1 = (function (state_47919){
while(true){
var ret_value__43722__auto__ = (function (){try{while(true){
var result__43723__auto__ = switch__43720__auto__(state_47919);
if(cljs.core.keyword_identical_QMARK_(result__43723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43723__auto__;
}
break;
}
}catch (e47968){var ex__43724__auto__ = e47968;
var statearr_47969_51436 = state_47919;
(statearr_47969_51436[(2)] = ex__43724__auto__);


if(cljs.core.seq((state_47919[(4)]))){
var statearr_47971_51437 = state_47919;
(statearr_47971_51437[(1)] = cljs.core.first((state_47919[(4)])));

} else {
throw ex__43724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51438 = state_47919;
state_47919 = G__51438;
continue;
} else {
return ret_value__43722__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43721__auto__ = function(state_47919){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43721__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43721__auto____1.call(this,state_47919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43721__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43721__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43721__auto__;
})()
})();
var state__44086__auto__ = (function (){var statearr_47976 = f__44085__auto__();
(statearr_47976[(6)] = c__44084__auto___51406);

return statearr_47976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44086__auto__);
}));


var c__44084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44085__auto__ = (function (){var switch__43720__auto__ = (function (state_48028){
var state_val_48029 = (state_48028[(1)]);
if((state_val_48029 === (7))){
var inst_48023 = (state_48028[(2)]);
var state_48028__$1 = state_48028;
var statearr_48037_51443 = state_48028__$1;
(statearr_48037_51443[(2)] = inst_48023);

(statearr_48037_51443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (20))){
var state_48028__$1 = state_48028;
var statearr_48044_51447 = state_48028__$1;
(statearr_48044_51447[(2)] = null);

(statearr_48044_51447[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (1))){
var state_48028__$1 = state_48028;
var statearr_48048_51452 = state_48028__$1;
(statearr_48048_51452[(2)] = null);

(statearr_48048_51452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (4))){
var inst_47984 = (state_48028[(7)]);
var inst_47984__$1 = (state_48028[(2)]);
var inst_47986 = (inst_47984__$1 == null);
var state_48028__$1 = (function (){var statearr_48050 = state_48028;
(statearr_48050[(7)] = inst_47984__$1);

return statearr_48050;
})();
if(cljs.core.truth_(inst_47986)){
var statearr_48052_51455 = state_48028__$1;
(statearr_48052_51455[(1)] = (5));

} else {
var statearr_48053_51460 = state_48028__$1;
(statearr_48053_51460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (15))){
var inst_48001 = (state_48028[(8)]);
var state_48028__$1 = state_48028;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48028__$1,(18),to,inst_48001);
} else {
if((state_val_48029 === (21))){
var inst_48017 = (state_48028[(2)]);
var state_48028__$1 = state_48028;
var statearr_48062_51465 = state_48028__$1;
(statearr_48062_51465[(2)] = inst_48017);

(statearr_48062_51465[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (13))){
var inst_48020 = (state_48028[(2)]);
var state_48028__$1 = (function (){var statearr_48068 = state_48028;
(statearr_48068[(9)] = inst_48020);

return statearr_48068;
})();
var statearr_48070_51467 = state_48028__$1;
(statearr_48070_51467[(2)] = null);

(statearr_48070_51467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (6))){
var inst_47984 = (state_48028[(7)]);
var state_48028__$1 = state_48028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48028__$1,(11),inst_47984);
} else {
if((state_val_48029 === (17))){
var inst_48012 = (state_48028[(2)]);
var state_48028__$1 = state_48028;
if(cljs.core.truth_(inst_48012)){
var statearr_48075_51471 = state_48028__$1;
(statearr_48075_51471[(1)] = (19));

} else {
var statearr_48076_51472 = state_48028__$1;
(statearr_48076_51472[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (3))){
var inst_48025 = (state_48028[(2)]);
var state_48028__$1 = state_48028;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48028__$1,inst_48025);
} else {
if((state_val_48029 === (12))){
var inst_47997 = (state_48028[(10)]);
var state_48028__$1 = state_48028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48028__$1,(14),inst_47997);
} else {
if((state_val_48029 === (2))){
var state_48028__$1 = state_48028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48028__$1,(4),results);
} else {
if((state_val_48029 === (19))){
var state_48028__$1 = state_48028;
var statearr_48084_51478 = state_48028__$1;
(statearr_48084_51478[(2)] = null);

(statearr_48084_51478[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (11))){
var inst_47997 = (state_48028[(2)]);
var state_48028__$1 = (function (){var statearr_48087 = state_48028;
(statearr_48087[(10)] = inst_47997);

return statearr_48087;
})();
var statearr_48088_51479 = state_48028__$1;
(statearr_48088_51479[(2)] = null);

(statearr_48088_51479[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (9))){
var state_48028__$1 = state_48028;
var statearr_48093_51483 = state_48028__$1;
(statearr_48093_51483[(2)] = null);

(statearr_48093_51483[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (5))){
var state_48028__$1 = state_48028;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48095_51484 = state_48028__$1;
(statearr_48095_51484[(1)] = (8));

} else {
var statearr_48096_51485 = state_48028__$1;
(statearr_48096_51485[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (14))){
var inst_48001 = (state_48028[(8)]);
var inst_48003 = (state_48028[(11)]);
var inst_48001__$1 = (state_48028[(2)]);
var inst_48002 = (inst_48001__$1 == null);
var inst_48003__$1 = cljs.core.not(inst_48002);
var state_48028__$1 = (function (){var statearr_48103 = state_48028;
(statearr_48103[(8)] = inst_48001__$1);

(statearr_48103[(11)] = inst_48003__$1);

return statearr_48103;
})();
if(inst_48003__$1){
var statearr_48104_51490 = state_48028__$1;
(statearr_48104_51490[(1)] = (15));

} else {
var statearr_48106_51491 = state_48028__$1;
(statearr_48106_51491[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (16))){
var inst_48003 = (state_48028[(11)]);
var state_48028__$1 = state_48028;
var statearr_48107_51492 = state_48028__$1;
(statearr_48107_51492[(2)] = inst_48003);

(statearr_48107_51492[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (10))){
var inst_47992 = (state_48028[(2)]);
var state_48028__$1 = state_48028;
var statearr_48117_51494 = state_48028__$1;
(statearr_48117_51494[(2)] = inst_47992);

(statearr_48117_51494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (18))){
var inst_48009 = (state_48028[(2)]);
var state_48028__$1 = state_48028;
var statearr_48119_51496 = state_48028__$1;
(statearr_48119_51496[(2)] = inst_48009);

(statearr_48119_51496[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (8))){
var inst_47989 = cljs.core.async.close_BANG_(to);
var state_48028__$1 = state_48028;
var statearr_48124_51501 = state_48028__$1;
(statearr_48124_51501[(2)] = inst_47989);

(statearr_48124_51501[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43721__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43721__auto____0 = (function (){
var statearr_48134 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48134[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43721__auto__);

(statearr_48134[(1)] = (1));

return statearr_48134;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43721__auto____1 = (function (state_48028){
while(true){
var ret_value__43722__auto__ = (function (){try{while(true){
var result__43723__auto__ = switch__43720__auto__(state_48028);
if(cljs.core.keyword_identical_QMARK_(result__43723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43723__auto__;
}
break;
}
}catch (e48136){var ex__43724__auto__ = e48136;
var statearr_48138_51503 = state_48028;
(statearr_48138_51503[(2)] = ex__43724__auto__);


if(cljs.core.seq((state_48028[(4)]))){
var statearr_48145_51504 = state_48028;
(statearr_48145_51504[(1)] = cljs.core.first((state_48028[(4)])));

} else {
throw ex__43724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51505 = state_48028;
state_48028 = G__51505;
continue;
} else {
return ret_value__43722__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43721__auto__ = function(state_48028){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43721__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43721__auto____1.call(this,state_48028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43721__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43721__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43721__auto__;
})()
})();
var state__44086__auto__ = (function (){var statearr_48152 = f__44085__auto__();
(statearr_48152[(6)] = c__44084__auto__);

return statearr_48152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44086__auto__);
}));

return c__44084__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__48168 = arguments.length;
switch (G__48168) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__48190 = arguments.length;
switch (G__48190) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__48215 = arguments.length;
switch (G__48215) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__44084__auto___51519 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44085__auto__ = (function (){var switch__43720__auto__ = (function (state_48261){
var state_val_48262 = (state_48261[(1)]);
if((state_val_48262 === (7))){
var inst_48257 = (state_48261[(2)]);
var state_48261__$1 = state_48261;
var statearr_48270_51520 = state_48261__$1;
(statearr_48270_51520[(2)] = inst_48257);

(statearr_48270_51520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48262 === (1))){
var state_48261__$1 = state_48261;
var statearr_48275_51521 = state_48261__$1;
(statearr_48275_51521[(2)] = null);

(statearr_48275_51521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48262 === (4))){
var inst_48232 = (state_48261[(7)]);
var inst_48232__$1 = (state_48261[(2)]);
var inst_48233 = (inst_48232__$1 == null);
var state_48261__$1 = (function (){var statearr_48279 = state_48261;
(statearr_48279[(7)] = inst_48232__$1);

return statearr_48279;
})();
if(cljs.core.truth_(inst_48233)){
var statearr_48281_51522 = state_48261__$1;
(statearr_48281_51522[(1)] = (5));

} else {
var statearr_48282_51523 = state_48261__$1;
(statearr_48282_51523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48262 === (13))){
var state_48261__$1 = state_48261;
var statearr_48283_51524 = state_48261__$1;
(statearr_48283_51524[(2)] = null);

(statearr_48283_51524[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48262 === (6))){
var inst_48232 = (state_48261[(7)]);
var inst_48238 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_48232) : p.call(null,inst_48232));
var state_48261__$1 = state_48261;
if(cljs.core.truth_(inst_48238)){
var statearr_48287_51525 = state_48261__$1;
(statearr_48287_51525[(1)] = (9));

} else {
var statearr_48288_51526 = state_48261__$1;
(statearr_48288_51526[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48262 === (3))){
var inst_48259 = (state_48261[(2)]);
var state_48261__$1 = state_48261;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48261__$1,inst_48259);
} else {
if((state_val_48262 === (12))){
var state_48261__$1 = state_48261;
var statearr_48290_51533 = state_48261__$1;
(statearr_48290_51533[(2)] = null);

(statearr_48290_51533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48262 === (2))){
var state_48261__$1 = state_48261;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48261__$1,(4),ch);
} else {
if((state_val_48262 === (11))){
var inst_48232 = (state_48261[(7)]);
var inst_48242 = (state_48261[(2)]);
var state_48261__$1 = state_48261;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48261__$1,(8),inst_48242,inst_48232);
} else {
if((state_val_48262 === (9))){
var state_48261__$1 = state_48261;
var statearr_48296_51537 = state_48261__$1;
(statearr_48296_51537[(2)] = tc);

(statearr_48296_51537[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48262 === (5))){
var inst_48235 = cljs.core.async.close_BANG_(tc);
var inst_48236 = cljs.core.async.close_BANG_(fc);
var state_48261__$1 = (function (){var statearr_48297 = state_48261;
(statearr_48297[(8)] = inst_48235);

return statearr_48297;
})();
var statearr_48301_51544 = state_48261__$1;
(statearr_48301_51544[(2)] = inst_48236);

(statearr_48301_51544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48262 === (14))){
var inst_48255 = (state_48261[(2)]);
var state_48261__$1 = state_48261;
var statearr_48303_51550 = state_48261__$1;
(statearr_48303_51550[(2)] = inst_48255);

(statearr_48303_51550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48262 === (10))){
var state_48261__$1 = state_48261;
var statearr_48306_51553 = state_48261__$1;
(statearr_48306_51553[(2)] = fc);

(statearr_48306_51553[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48262 === (8))){
var inst_48244 = (state_48261[(2)]);
var state_48261__$1 = state_48261;
if(cljs.core.truth_(inst_48244)){
var statearr_48308_51555 = state_48261__$1;
(statearr_48308_51555[(1)] = (12));

} else {
var statearr_48309_51557 = state_48261__$1;
(statearr_48309_51557[(1)] = (13));

}

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
});
return (function() {
var cljs$core$async$state_machine__43721__auto__ = null;
var cljs$core$async$state_machine__43721__auto____0 = (function (){
var statearr_48310 = [null,null,null,null,null,null,null,null,null];
(statearr_48310[(0)] = cljs$core$async$state_machine__43721__auto__);

(statearr_48310[(1)] = (1));

return statearr_48310;
});
var cljs$core$async$state_machine__43721__auto____1 = (function (state_48261){
while(true){
var ret_value__43722__auto__ = (function (){try{while(true){
var result__43723__auto__ = switch__43720__auto__(state_48261);
if(cljs.core.keyword_identical_QMARK_(result__43723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43723__auto__;
}
break;
}
}catch (e48313){var ex__43724__auto__ = e48313;
var statearr_48314_51561 = state_48261;
(statearr_48314_51561[(2)] = ex__43724__auto__);


if(cljs.core.seq((state_48261[(4)]))){
var statearr_48319_51562 = state_48261;
(statearr_48319_51562[(1)] = cljs.core.first((state_48261[(4)])));

} else {
throw ex__43724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51563 = state_48261;
state_48261 = G__51563;
continue;
} else {
return ret_value__43722__auto__;
}
break;
}
});
cljs$core$async$state_machine__43721__auto__ = function(state_48261){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43721__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43721__auto____1.call(this,state_48261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43721__auto____0;
cljs$core$async$state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43721__auto____1;
return cljs$core$async$state_machine__43721__auto__;
})()
})();
var state__44086__auto__ = (function (){var statearr_48324 = f__44085__auto__();
(statearr_48324[(6)] = c__44084__auto___51519);

return statearr_48324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44086__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__44084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44085__auto__ = (function (){var switch__43720__auto__ = (function (state_48365){
var state_val_48366 = (state_48365[(1)]);
if((state_val_48366 === (7))){
var inst_48358 = (state_48365[(2)]);
var state_48365__$1 = state_48365;
var statearr_48375_51564 = state_48365__$1;
(statearr_48375_51564[(2)] = inst_48358);

(statearr_48375_51564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48366 === (1))){
var inst_48334 = init;
var inst_48336 = inst_48334;
var state_48365__$1 = (function (){var statearr_48376 = state_48365;
(statearr_48376[(7)] = inst_48336);

return statearr_48376;
})();
var statearr_48381_51567 = state_48365__$1;
(statearr_48381_51567[(2)] = null);

(statearr_48381_51567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48366 === (4))){
var inst_48344 = (state_48365[(8)]);
var inst_48344__$1 = (state_48365[(2)]);
var inst_48346 = (inst_48344__$1 == null);
var state_48365__$1 = (function (){var statearr_48382 = state_48365;
(statearr_48382[(8)] = inst_48344__$1);

return statearr_48382;
})();
if(cljs.core.truth_(inst_48346)){
var statearr_48383_51570 = state_48365__$1;
(statearr_48383_51570[(1)] = (5));

} else {
var statearr_48384_51571 = state_48365__$1;
(statearr_48384_51571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48366 === (6))){
var inst_48344 = (state_48365[(8)]);
var inst_48349 = (state_48365[(9)]);
var inst_48336 = (state_48365[(7)]);
var inst_48349__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_48336,inst_48344) : f.call(null,inst_48336,inst_48344));
var inst_48350 = cljs.core.reduced_QMARK_(inst_48349__$1);
var state_48365__$1 = (function (){var statearr_48385 = state_48365;
(statearr_48385[(9)] = inst_48349__$1);

return statearr_48385;
})();
if(inst_48350){
var statearr_48386_51578 = state_48365__$1;
(statearr_48386_51578[(1)] = (8));

} else {
var statearr_48392_51580 = state_48365__$1;
(statearr_48392_51580[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48366 === (3))){
var inst_48360 = (state_48365[(2)]);
var state_48365__$1 = state_48365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48365__$1,inst_48360);
} else {
if((state_val_48366 === (2))){
var state_48365__$1 = state_48365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48365__$1,(4),ch);
} else {
if((state_val_48366 === (9))){
var inst_48349 = (state_48365[(9)]);
var inst_48336 = inst_48349;
var state_48365__$1 = (function (){var statearr_48397 = state_48365;
(statearr_48397[(7)] = inst_48336);

return statearr_48397;
})();
var statearr_48398_51581 = state_48365__$1;
(statearr_48398_51581[(2)] = null);

(statearr_48398_51581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48366 === (5))){
var inst_48336 = (state_48365[(7)]);
var state_48365__$1 = state_48365;
var statearr_48402_51584 = state_48365__$1;
(statearr_48402_51584[(2)] = inst_48336);

(statearr_48402_51584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48366 === (10))){
var inst_48356 = (state_48365[(2)]);
var state_48365__$1 = state_48365;
var statearr_48405_51587 = state_48365__$1;
(statearr_48405_51587[(2)] = inst_48356);

(statearr_48405_51587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48366 === (8))){
var inst_48349 = (state_48365[(9)]);
var inst_48352 = cljs.core.deref(inst_48349);
var state_48365__$1 = state_48365;
var statearr_48406_51588 = state_48365__$1;
(statearr_48406_51588[(2)] = inst_48352);

(statearr_48406_51588[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__43721__auto__ = null;
var cljs$core$async$reduce_$_state_machine__43721__auto____0 = (function (){
var statearr_48412 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48412[(0)] = cljs$core$async$reduce_$_state_machine__43721__auto__);

(statearr_48412[(1)] = (1));

return statearr_48412;
});
var cljs$core$async$reduce_$_state_machine__43721__auto____1 = (function (state_48365){
while(true){
var ret_value__43722__auto__ = (function (){try{while(true){
var result__43723__auto__ = switch__43720__auto__(state_48365);
if(cljs.core.keyword_identical_QMARK_(result__43723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43723__auto__;
}
break;
}
}catch (e48414){var ex__43724__auto__ = e48414;
var statearr_48417_51597 = state_48365;
(statearr_48417_51597[(2)] = ex__43724__auto__);


if(cljs.core.seq((state_48365[(4)]))){
var statearr_48419_51602 = state_48365;
(statearr_48419_51602[(1)] = cljs.core.first((state_48365[(4)])));

} else {
throw ex__43724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51604 = state_48365;
state_48365 = G__51604;
continue;
} else {
return ret_value__43722__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43721__auto__ = function(state_48365){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43721__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43721__auto____1.call(this,state_48365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43721__auto____0;
cljs$core$async$reduce_$_state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43721__auto____1;
return cljs$core$async$reduce_$_state_machine__43721__auto__;
})()
})();
var state__44086__auto__ = (function (){var statearr_48424 = f__44085__auto__();
(statearr_48424[(6)] = c__44084__auto__);

return statearr_48424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44086__auto__);
}));

return c__44084__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__44084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44085__auto__ = (function (){var switch__43720__auto__ = (function (state_48438){
var state_val_48439 = (state_48438[(1)]);
if((state_val_48439 === (1))){
var inst_48433 = cljs.core.async.reduce(f__$1,init,ch);
var state_48438__$1 = state_48438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48438__$1,(2),inst_48433);
} else {
if((state_val_48439 === (2))){
var inst_48435 = (state_48438[(2)]);
var inst_48436 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_48435) : f__$1.call(null,inst_48435));
var state_48438__$1 = state_48438;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48438__$1,inst_48436);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__43721__auto__ = null;
var cljs$core$async$transduce_$_state_machine__43721__auto____0 = (function (){
var statearr_48468 = [null,null,null,null,null,null,null];
(statearr_48468[(0)] = cljs$core$async$transduce_$_state_machine__43721__auto__);

(statearr_48468[(1)] = (1));

return statearr_48468;
});
var cljs$core$async$transduce_$_state_machine__43721__auto____1 = (function (state_48438){
while(true){
var ret_value__43722__auto__ = (function (){try{while(true){
var result__43723__auto__ = switch__43720__auto__(state_48438);
if(cljs.core.keyword_identical_QMARK_(result__43723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43723__auto__;
}
break;
}
}catch (e48469){var ex__43724__auto__ = e48469;
var statearr_48470_51612 = state_48438;
(statearr_48470_51612[(2)] = ex__43724__auto__);


if(cljs.core.seq((state_48438[(4)]))){
var statearr_48471_51617 = state_48438;
(statearr_48471_51617[(1)] = cljs.core.first((state_48438[(4)])));

} else {
throw ex__43724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51618 = state_48438;
state_48438 = G__51618;
continue;
} else {
return ret_value__43722__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__43721__auto__ = function(state_48438){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__43721__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__43721__auto____1.call(this,state_48438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__43721__auto____0;
cljs$core$async$transduce_$_state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__43721__auto____1;
return cljs$core$async$transduce_$_state_machine__43721__auto__;
})()
})();
var state__44086__auto__ = (function (){var statearr_48473 = f__44085__auto__();
(statearr_48473[(6)] = c__44084__auto__);

return statearr_48473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44086__auto__);
}));

return c__44084__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__48475 = arguments.length;
switch (G__48475) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__44084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44085__auto__ = (function (){var switch__43720__auto__ = (function (state_48512){
var state_val_48513 = (state_48512[(1)]);
if((state_val_48513 === (7))){
var inst_48494 = (state_48512[(2)]);
var state_48512__$1 = state_48512;
var statearr_48518_51620 = state_48512__$1;
(statearr_48518_51620[(2)] = inst_48494);

(statearr_48518_51620[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48513 === (1))){
var inst_48484 = cljs.core.seq(coll);
var inst_48486 = inst_48484;
var state_48512__$1 = (function (){var statearr_48521 = state_48512;
(statearr_48521[(7)] = inst_48486);

return statearr_48521;
})();
var statearr_48523_51621 = state_48512__$1;
(statearr_48523_51621[(2)] = null);

(statearr_48523_51621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48513 === (4))){
var inst_48486 = (state_48512[(7)]);
var inst_48492 = cljs.core.first(inst_48486);
var state_48512__$1 = state_48512;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48512__$1,(7),ch,inst_48492);
} else {
if((state_val_48513 === (13))){
var inst_48506 = (state_48512[(2)]);
var state_48512__$1 = state_48512;
var statearr_48532_51622 = state_48512__$1;
(statearr_48532_51622[(2)] = inst_48506);

(statearr_48532_51622[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48513 === (6))){
var inst_48497 = (state_48512[(2)]);
var state_48512__$1 = state_48512;
if(cljs.core.truth_(inst_48497)){
var statearr_48534_51624 = state_48512__$1;
(statearr_48534_51624[(1)] = (8));

} else {
var statearr_48535_51631 = state_48512__$1;
(statearr_48535_51631[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48513 === (3))){
var inst_48510 = (state_48512[(2)]);
var state_48512__$1 = state_48512;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48512__$1,inst_48510);
} else {
if((state_val_48513 === (12))){
var state_48512__$1 = state_48512;
var statearr_48537_51632 = state_48512__$1;
(statearr_48537_51632[(2)] = null);

(statearr_48537_51632[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48513 === (2))){
var inst_48486 = (state_48512[(7)]);
var state_48512__$1 = state_48512;
if(cljs.core.truth_(inst_48486)){
var statearr_48539_51636 = state_48512__$1;
(statearr_48539_51636[(1)] = (4));

} else {
var statearr_48541_51637 = state_48512__$1;
(statearr_48541_51637[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48513 === (11))){
var inst_48503 = cljs.core.async.close_BANG_(ch);
var state_48512__$1 = state_48512;
var statearr_48542_51641 = state_48512__$1;
(statearr_48542_51641[(2)] = inst_48503);

(statearr_48542_51641[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48513 === (9))){
var state_48512__$1 = state_48512;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48545_51642 = state_48512__$1;
(statearr_48545_51642[(1)] = (11));

} else {
var statearr_48546_51643 = state_48512__$1;
(statearr_48546_51643[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48513 === (5))){
var inst_48486 = (state_48512[(7)]);
var state_48512__$1 = state_48512;
var statearr_48548_51644 = state_48512__$1;
(statearr_48548_51644[(2)] = inst_48486);

(statearr_48548_51644[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48513 === (10))){
var inst_48508 = (state_48512[(2)]);
var state_48512__$1 = state_48512;
var statearr_48553_51645 = state_48512__$1;
(statearr_48553_51645[(2)] = inst_48508);

(statearr_48553_51645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48513 === (8))){
var inst_48486 = (state_48512[(7)]);
var inst_48499 = cljs.core.next(inst_48486);
var inst_48486__$1 = inst_48499;
var state_48512__$1 = (function (){var statearr_48557 = state_48512;
(statearr_48557[(7)] = inst_48486__$1);

return statearr_48557;
})();
var statearr_48561_51647 = state_48512__$1;
(statearr_48561_51647[(2)] = null);

(statearr_48561_51647[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__43721__auto__ = null;
var cljs$core$async$state_machine__43721__auto____0 = (function (){
var statearr_48562 = [null,null,null,null,null,null,null,null];
(statearr_48562[(0)] = cljs$core$async$state_machine__43721__auto__);

(statearr_48562[(1)] = (1));

return statearr_48562;
});
var cljs$core$async$state_machine__43721__auto____1 = (function (state_48512){
while(true){
var ret_value__43722__auto__ = (function (){try{while(true){
var result__43723__auto__ = switch__43720__auto__(state_48512);
if(cljs.core.keyword_identical_QMARK_(result__43723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43723__auto__;
}
break;
}
}catch (e48563){var ex__43724__auto__ = e48563;
var statearr_48567_51652 = state_48512;
(statearr_48567_51652[(2)] = ex__43724__auto__);


if(cljs.core.seq((state_48512[(4)]))){
var statearr_48569_51655 = state_48512;
(statearr_48569_51655[(1)] = cljs.core.first((state_48512[(4)])));

} else {
throw ex__43724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51656 = state_48512;
state_48512 = G__51656;
continue;
} else {
return ret_value__43722__auto__;
}
break;
}
});
cljs$core$async$state_machine__43721__auto__ = function(state_48512){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43721__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43721__auto____1.call(this,state_48512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43721__auto____0;
cljs$core$async$state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43721__auto____1;
return cljs$core$async$state_machine__43721__auto__;
})()
})();
var state__44086__auto__ = (function (){var statearr_48580 = f__44085__auto__();
(statearr_48580[(6)] = c__44084__auto__);

return statearr_48580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44086__auto__);
}));

return c__44084__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__48598 = arguments.length;
switch (G__48598) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_51669 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_51669(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_51673 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_51673(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_51676 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_51676(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_51677 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_51677(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48667 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48667 = (function (ch,cs,meta48668){
this.ch = ch;
this.cs = cs;
this.meta48668 = meta48668;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48669,meta48668__$1){
var self__ = this;
var _48669__$1 = this;
return (new cljs.core.async.t_cljs$core$async48667(self__.ch,self__.cs,meta48668__$1));
}));

(cljs.core.async.t_cljs$core$async48667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48669){
var self__ = this;
var _48669__$1 = this;
return self__.meta48668;
}));

(cljs.core.async.t_cljs$core$async48667.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48667.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async48667.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48667.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async48667.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async48667.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async48667.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta48668","meta48668",367187200,null)], null);
}));

(cljs.core.async.t_cljs$core$async48667.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48667.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48667");

(cljs.core.async.t_cljs$core$async48667.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async48667");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48667.
 */
cljs.core.async.__GT_t_cljs$core$async48667 = (function cljs$core$async$mult_$___GT_t_cljs$core$async48667(ch__$1,cs__$1,meta48668){
return (new cljs.core.async.t_cljs$core$async48667(ch__$1,cs__$1,meta48668));
});

}

return (new cljs.core.async.t_cljs$core$async48667(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__44084__auto___51689 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44085__auto__ = (function (){var switch__43720__auto__ = (function (state_48879){
var state_val_48880 = (state_48879[(1)]);
if((state_val_48880 === (7))){
var inst_48873 = (state_48879[(2)]);
var state_48879__$1 = state_48879;
var statearr_48885_51691 = state_48879__$1;
(statearr_48885_51691[(2)] = inst_48873);

(statearr_48885_51691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (20))){
var inst_48759 = (state_48879[(7)]);
var inst_48774 = cljs.core.first(inst_48759);
var inst_48775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48774,(0),null);
var inst_48776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48774,(1),null);
var state_48879__$1 = (function (){var statearr_48889 = state_48879;
(statearr_48889[(8)] = inst_48775);

return statearr_48889;
})();
if(cljs.core.truth_(inst_48776)){
var statearr_48891_51692 = state_48879__$1;
(statearr_48891_51692[(1)] = (22));

} else {
var statearr_48892_51693 = state_48879__$1;
(statearr_48892_51693[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (27))){
var inst_48819 = (state_48879[(9)]);
var inst_48812 = (state_48879[(10)]);
var inst_48809 = (state_48879[(11)]);
var inst_48708 = (state_48879[(12)]);
var inst_48819__$1 = cljs.core._nth(inst_48809,inst_48812);
var inst_48820 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_48819__$1,inst_48708,done);
var state_48879__$1 = (function (){var statearr_48893 = state_48879;
(statearr_48893[(9)] = inst_48819__$1);

return statearr_48893;
})();
if(cljs.core.truth_(inst_48820)){
var statearr_48894_51694 = state_48879__$1;
(statearr_48894_51694[(1)] = (30));

} else {
var statearr_48895_51695 = state_48879__$1;
(statearr_48895_51695[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (1))){
var state_48879__$1 = state_48879;
var statearr_48898_51700 = state_48879__$1;
(statearr_48898_51700[(2)] = null);

(statearr_48898_51700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (24))){
var inst_48759 = (state_48879[(7)]);
var inst_48784 = (state_48879[(2)]);
var inst_48785 = cljs.core.next(inst_48759);
var inst_48721 = inst_48785;
var inst_48722 = null;
var inst_48723 = (0);
var inst_48724 = (0);
var state_48879__$1 = (function (){var statearr_48902 = state_48879;
(statearr_48902[(13)] = inst_48784);

(statearr_48902[(14)] = inst_48722);

(statearr_48902[(15)] = inst_48723);

(statearr_48902[(16)] = inst_48724);

(statearr_48902[(17)] = inst_48721);

return statearr_48902;
})();
var statearr_48906_51703 = state_48879__$1;
(statearr_48906_51703[(2)] = null);

(statearr_48906_51703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (39))){
var state_48879__$1 = state_48879;
var statearr_48916_51704 = state_48879__$1;
(statearr_48916_51704[(2)] = null);

(statearr_48916_51704[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (4))){
var inst_48708 = (state_48879[(12)]);
var inst_48708__$1 = (state_48879[(2)]);
var inst_48709 = (inst_48708__$1 == null);
var state_48879__$1 = (function (){var statearr_48918 = state_48879;
(statearr_48918[(12)] = inst_48708__$1);

return statearr_48918;
})();
if(cljs.core.truth_(inst_48709)){
var statearr_48920_51708 = state_48879__$1;
(statearr_48920_51708[(1)] = (5));

} else {
var statearr_48922_51709 = state_48879__$1;
(statearr_48922_51709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (15))){
var inst_48722 = (state_48879[(14)]);
var inst_48723 = (state_48879[(15)]);
var inst_48724 = (state_48879[(16)]);
var inst_48721 = (state_48879[(17)]);
var inst_48747 = (state_48879[(2)]);
var inst_48751 = (inst_48724 + (1));
var tmp48908 = inst_48722;
var tmp48909 = inst_48723;
var tmp48910 = inst_48721;
var inst_48721__$1 = tmp48910;
var inst_48722__$1 = tmp48908;
var inst_48723__$1 = tmp48909;
var inst_48724__$1 = inst_48751;
var state_48879__$1 = (function (){var statearr_48928 = state_48879;
(statearr_48928[(18)] = inst_48747);

(statearr_48928[(14)] = inst_48722__$1);

(statearr_48928[(15)] = inst_48723__$1);

(statearr_48928[(16)] = inst_48724__$1);

(statearr_48928[(17)] = inst_48721__$1);

return statearr_48928;
})();
var statearr_48929_51713 = state_48879__$1;
(statearr_48929_51713[(2)] = null);

(statearr_48929_51713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (21))){
var inst_48788 = (state_48879[(2)]);
var state_48879__$1 = state_48879;
var statearr_48933_51714 = state_48879__$1;
(statearr_48933_51714[(2)] = inst_48788);

(statearr_48933_51714[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (31))){
var inst_48819 = (state_48879[(9)]);
var inst_48823 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_48819);
var state_48879__$1 = state_48879;
var statearr_48935_51720 = state_48879__$1;
(statearr_48935_51720[(2)] = inst_48823);

(statearr_48935_51720[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (32))){
var inst_48810 = (state_48879[(19)]);
var inst_48812 = (state_48879[(10)]);
var inst_48809 = (state_48879[(11)]);
var inst_48808 = (state_48879[(20)]);
var inst_48825 = (state_48879[(2)]);
var inst_48826 = (inst_48812 + (1));
var tmp48930 = inst_48810;
var tmp48931 = inst_48809;
var tmp48932 = inst_48808;
var inst_48808__$1 = tmp48932;
var inst_48809__$1 = tmp48931;
var inst_48810__$1 = tmp48930;
var inst_48812__$1 = inst_48826;
var state_48879__$1 = (function (){var statearr_48942 = state_48879;
(statearr_48942[(19)] = inst_48810__$1);

(statearr_48942[(21)] = inst_48825);

(statearr_48942[(10)] = inst_48812__$1);

(statearr_48942[(11)] = inst_48809__$1);

(statearr_48942[(20)] = inst_48808__$1);

return statearr_48942;
})();
var statearr_48943_51726 = state_48879__$1;
(statearr_48943_51726[(2)] = null);

(statearr_48943_51726[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (40))){
var inst_48842 = (state_48879[(22)]);
var inst_48846 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_48842);
var state_48879__$1 = state_48879;
var statearr_48950_51730 = state_48879__$1;
(statearr_48950_51730[(2)] = inst_48846);

(statearr_48950_51730[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (33))){
var inst_48829 = (state_48879[(23)]);
var inst_48831 = cljs.core.chunked_seq_QMARK_(inst_48829);
var state_48879__$1 = state_48879;
if(inst_48831){
var statearr_48953_51731 = state_48879__$1;
(statearr_48953_51731[(1)] = (36));

} else {
var statearr_48954_51732 = state_48879__$1;
(statearr_48954_51732[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (13))){
var inst_48741 = (state_48879[(24)]);
var inst_48744 = cljs.core.async.close_BANG_(inst_48741);
var state_48879__$1 = state_48879;
var statearr_48961_51736 = state_48879__$1;
(statearr_48961_51736[(2)] = inst_48744);

(statearr_48961_51736[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (22))){
var inst_48775 = (state_48879[(8)]);
var inst_48781 = cljs.core.async.close_BANG_(inst_48775);
var state_48879__$1 = state_48879;
var statearr_48963_51737 = state_48879__$1;
(statearr_48963_51737[(2)] = inst_48781);

(statearr_48963_51737[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (36))){
var inst_48829 = (state_48879[(23)]);
var inst_48834 = cljs.core.chunk_first(inst_48829);
var inst_48835 = cljs.core.chunk_rest(inst_48829);
var inst_48839 = cljs.core.count(inst_48834);
var inst_48808 = inst_48835;
var inst_48809 = inst_48834;
var inst_48810 = inst_48839;
var inst_48812 = (0);
var state_48879__$1 = (function (){var statearr_48973 = state_48879;
(statearr_48973[(19)] = inst_48810);

(statearr_48973[(10)] = inst_48812);

(statearr_48973[(11)] = inst_48809);

(statearr_48973[(20)] = inst_48808);

return statearr_48973;
})();
var statearr_48977_51738 = state_48879__$1;
(statearr_48977_51738[(2)] = null);

(statearr_48977_51738[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (41))){
var inst_48829 = (state_48879[(23)]);
var inst_48848 = (state_48879[(2)]);
var inst_48850 = cljs.core.next(inst_48829);
var inst_48808 = inst_48850;
var inst_48809 = null;
var inst_48810 = (0);
var inst_48812 = (0);
var state_48879__$1 = (function (){var statearr_48985 = state_48879;
(statearr_48985[(19)] = inst_48810);

(statearr_48985[(10)] = inst_48812);

(statearr_48985[(25)] = inst_48848);

(statearr_48985[(11)] = inst_48809);

(statearr_48985[(20)] = inst_48808);

return statearr_48985;
})();
var statearr_48986_51743 = state_48879__$1;
(statearr_48986_51743[(2)] = null);

(statearr_48986_51743[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (43))){
var state_48879__$1 = state_48879;
var statearr_48987_51744 = state_48879__$1;
(statearr_48987_51744[(2)] = null);

(statearr_48987_51744[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (29))){
var inst_48859 = (state_48879[(2)]);
var state_48879__$1 = state_48879;
var statearr_48991_51745 = state_48879__$1;
(statearr_48991_51745[(2)] = inst_48859);

(statearr_48991_51745[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (44))){
var inst_48870 = (state_48879[(2)]);
var state_48879__$1 = (function (){var statearr_48993 = state_48879;
(statearr_48993[(26)] = inst_48870);

return statearr_48993;
})();
var statearr_48994_51747 = state_48879__$1;
(statearr_48994_51747[(2)] = null);

(statearr_48994_51747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (6))){
var inst_48799 = (state_48879[(27)]);
var inst_48798 = cljs.core.deref(cs);
var inst_48799__$1 = cljs.core.keys(inst_48798);
var inst_48800 = cljs.core.count(inst_48799__$1);
var inst_48801 = cljs.core.reset_BANG_(dctr,inst_48800);
var inst_48806 = cljs.core.seq(inst_48799__$1);
var inst_48808 = inst_48806;
var inst_48809 = null;
var inst_48810 = (0);
var inst_48812 = (0);
var state_48879__$1 = (function (){var statearr_48999 = state_48879;
(statearr_48999[(19)] = inst_48810);

(statearr_48999[(28)] = inst_48801);

(statearr_48999[(10)] = inst_48812);

(statearr_48999[(11)] = inst_48809);

(statearr_48999[(20)] = inst_48808);

(statearr_48999[(27)] = inst_48799__$1);

return statearr_48999;
})();
var statearr_49003_51757 = state_48879__$1;
(statearr_49003_51757[(2)] = null);

(statearr_49003_51757[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (28))){
var inst_48829 = (state_48879[(23)]);
var inst_48808 = (state_48879[(20)]);
var inst_48829__$1 = cljs.core.seq(inst_48808);
var state_48879__$1 = (function (){var statearr_49004 = state_48879;
(statearr_49004[(23)] = inst_48829__$1);

return statearr_49004;
})();
if(inst_48829__$1){
var statearr_49005_51762 = state_48879__$1;
(statearr_49005_51762[(1)] = (33));

} else {
var statearr_49006_51763 = state_48879__$1;
(statearr_49006_51763[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (25))){
var inst_48810 = (state_48879[(19)]);
var inst_48812 = (state_48879[(10)]);
var inst_48815 = (inst_48812 < inst_48810);
var inst_48816 = inst_48815;
var state_48879__$1 = state_48879;
if(cljs.core.truth_(inst_48816)){
var statearr_49010_51766 = state_48879__$1;
(statearr_49010_51766[(1)] = (27));

} else {
var statearr_49016_51767 = state_48879__$1;
(statearr_49016_51767[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (34))){
var state_48879__$1 = state_48879;
var statearr_49018_51771 = state_48879__$1;
(statearr_49018_51771[(2)] = null);

(statearr_49018_51771[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (17))){
var state_48879__$1 = state_48879;
var statearr_49021_51774 = state_48879__$1;
(statearr_49021_51774[(2)] = null);

(statearr_49021_51774[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (3))){
var inst_48876 = (state_48879[(2)]);
var state_48879__$1 = state_48879;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48879__$1,inst_48876);
} else {
if((state_val_48880 === (12))){
var inst_48793 = (state_48879[(2)]);
var state_48879__$1 = state_48879;
var statearr_49023_51776 = state_48879__$1;
(statearr_49023_51776[(2)] = inst_48793);

(statearr_49023_51776[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (2))){
var state_48879__$1 = state_48879;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48879__$1,(4),ch);
} else {
if((state_val_48880 === (23))){
var state_48879__$1 = state_48879;
var statearr_49024_51777 = state_48879__$1;
(statearr_49024_51777[(2)] = null);

(statearr_49024_51777[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (35))){
var inst_48857 = (state_48879[(2)]);
var state_48879__$1 = state_48879;
var statearr_49030_51778 = state_48879__$1;
(statearr_49030_51778[(2)] = inst_48857);

(statearr_49030_51778[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (19))){
var inst_48759 = (state_48879[(7)]);
var inst_48764 = cljs.core.chunk_first(inst_48759);
var inst_48765 = cljs.core.chunk_rest(inst_48759);
var inst_48766 = cljs.core.count(inst_48764);
var inst_48721 = inst_48765;
var inst_48722 = inst_48764;
var inst_48723 = inst_48766;
var inst_48724 = (0);
var state_48879__$1 = (function (){var statearr_49039 = state_48879;
(statearr_49039[(14)] = inst_48722);

(statearr_49039[(15)] = inst_48723);

(statearr_49039[(16)] = inst_48724);

(statearr_49039[(17)] = inst_48721);

return statearr_49039;
})();
var statearr_49040_51782 = state_48879__$1;
(statearr_49040_51782[(2)] = null);

(statearr_49040_51782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (11))){
var inst_48759 = (state_48879[(7)]);
var inst_48721 = (state_48879[(17)]);
var inst_48759__$1 = cljs.core.seq(inst_48721);
var state_48879__$1 = (function (){var statearr_49046 = state_48879;
(statearr_49046[(7)] = inst_48759__$1);

return statearr_49046;
})();
if(inst_48759__$1){
var statearr_49052_51787 = state_48879__$1;
(statearr_49052_51787[(1)] = (16));

} else {
var statearr_49059_51788 = state_48879__$1;
(statearr_49059_51788[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (9))){
var inst_48795 = (state_48879[(2)]);
var state_48879__$1 = state_48879;
var statearr_49063_51794 = state_48879__$1;
(statearr_49063_51794[(2)] = inst_48795);

(statearr_49063_51794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (5))){
var inst_48715 = cljs.core.deref(cs);
var inst_48716 = cljs.core.seq(inst_48715);
var inst_48721 = inst_48716;
var inst_48722 = null;
var inst_48723 = (0);
var inst_48724 = (0);
var state_48879__$1 = (function (){var statearr_49072 = state_48879;
(statearr_49072[(14)] = inst_48722);

(statearr_49072[(15)] = inst_48723);

(statearr_49072[(16)] = inst_48724);

(statearr_49072[(17)] = inst_48721);

return statearr_49072;
})();
var statearr_49080_51798 = state_48879__$1;
(statearr_49080_51798[(2)] = null);

(statearr_49080_51798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (14))){
var state_48879__$1 = state_48879;
var statearr_49088_51799 = state_48879__$1;
(statearr_49088_51799[(2)] = null);

(statearr_49088_51799[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (45))){
var inst_48867 = (state_48879[(2)]);
var state_48879__$1 = state_48879;
var statearr_49090_51802 = state_48879__$1;
(statearr_49090_51802[(2)] = inst_48867);

(statearr_49090_51802[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (26))){
var inst_48799 = (state_48879[(27)]);
var inst_48861 = (state_48879[(2)]);
var inst_48862 = cljs.core.seq(inst_48799);
var state_48879__$1 = (function (){var statearr_49095 = state_48879;
(statearr_49095[(29)] = inst_48861);

return statearr_49095;
})();
if(inst_48862){
var statearr_49098_51806 = state_48879__$1;
(statearr_49098_51806[(1)] = (42));

} else {
var statearr_49099_51807 = state_48879__$1;
(statearr_49099_51807[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (16))){
var inst_48759 = (state_48879[(7)]);
var inst_48762 = cljs.core.chunked_seq_QMARK_(inst_48759);
var state_48879__$1 = state_48879;
if(inst_48762){
var statearr_49100_51810 = state_48879__$1;
(statearr_49100_51810[(1)] = (19));

} else {
var statearr_49101_51811 = state_48879__$1;
(statearr_49101_51811[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (38))){
var inst_48854 = (state_48879[(2)]);
var state_48879__$1 = state_48879;
var statearr_49105_51812 = state_48879__$1;
(statearr_49105_51812[(2)] = inst_48854);

(statearr_49105_51812[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (30))){
var state_48879__$1 = state_48879;
var statearr_49106_51817 = state_48879__$1;
(statearr_49106_51817[(2)] = null);

(statearr_49106_51817[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (10))){
var inst_48722 = (state_48879[(14)]);
var inst_48724 = (state_48879[(16)]);
var inst_48739 = cljs.core._nth(inst_48722,inst_48724);
var inst_48741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48739,(0),null);
var inst_48742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48739,(1),null);
var state_48879__$1 = (function (){var statearr_49107 = state_48879;
(statearr_49107[(24)] = inst_48741);

return statearr_49107;
})();
if(cljs.core.truth_(inst_48742)){
var statearr_49108_51828 = state_48879__$1;
(statearr_49108_51828[(1)] = (13));

} else {
var statearr_49109_51829 = state_48879__$1;
(statearr_49109_51829[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (18))){
var inst_48791 = (state_48879[(2)]);
var state_48879__$1 = state_48879;
var statearr_49110_51836 = state_48879__$1;
(statearr_49110_51836[(2)] = inst_48791);

(statearr_49110_51836[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (42))){
var state_48879__$1 = state_48879;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48879__$1,(45),dchan);
} else {
if((state_val_48880 === (37))){
var inst_48842 = (state_48879[(22)]);
var inst_48829 = (state_48879[(23)]);
var inst_48708 = (state_48879[(12)]);
var inst_48842__$1 = cljs.core.first(inst_48829);
var inst_48843 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_48842__$1,inst_48708,done);
var state_48879__$1 = (function (){var statearr_49111 = state_48879;
(statearr_49111[(22)] = inst_48842__$1);

return statearr_49111;
})();
if(cljs.core.truth_(inst_48843)){
var statearr_49112_51852 = state_48879__$1;
(statearr_49112_51852[(1)] = (39));

} else {
var statearr_49113_51855 = state_48879__$1;
(statearr_49113_51855[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48880 === (8))){
var inst_48723 = (state_48879[(15)]);
var inst_48724 = (state_48879[(16)]);
var inst_48729 = (inst_48724 < inst_48723);
var inst_48730 = inst_48729;
var state_48879__$1 = state_48879;
if(cljs.core.truth_(inst_48730)){
var statearr_49120_51857 = state_48879__$1;
(statearr_49120_51857[(1)] = (10));

} else {
var statearr_49121_51858 = state_48879__$1;
(statearr_49121_51858[(1)] = (11));

}

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__43721__auto__ = null;
var cljs$core$async$mult_$_state_machine__43721__auto____0 = (function (){
var statearr_49122 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49122[(0)] = cljs$core$async$mult_$_state_machine__43721__auto__);

(statearr_49122[(1)] = (1));

return statearr_49122;
});
var cljs$core$async$mult_$_state_machine__43721__auto____1 = (function (state_48879){
while(true){
var ret_value__43722__auto__ = (function (){try{while(true){
var result__43723__auto__ = switch__43720__auto__(state_48879);
if(cljs.core.keyword_identical_QMARK_(result__43723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43723__auto__;
}
break;
}
}catch (e49127){var ex__43724__auto__ = e49127;
var statearr_49128_51867 = state_48879;
(statearr_49128_51867[(2)] = ex__43724__auto__);


if(cljs.core.seq((state_48879[(4)]))){
var statearr_49129_51868 = state_48879;
(statearr_49129_51868[(1)] = cljs.core.first((state_48879[(4)])));

} else {
throw ex__43724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51869 = state_48879;
state_48879 = G__51869;
continue;
} else {
return ret_value__43722__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43721__auto__ = function(state_48879){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43721__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43721__auto____1.call(this,state_48879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43721__auto____0;
cljs$core$async$mult_$_state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43721__auto____1;
return cljs$core$async$mult_$_state_machine__43721__auto__;
})()
})();
var state__44086__auto__ = (function (){var statearr_49130 = f__44085__auto__();
(statearr_49130[(6)] = c__44084__auto___51689);

return statearr_49130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44086__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__49132 = arguments.length;
switch (G__49132) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_51881 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_51881(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_51890 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_51890(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_51898 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_51898(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_51908 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_51908(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_51920 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_51920(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___51933 = arguments.length;
var i__4865__auto___51934 = (0);
while(true){
if((i__4865__auto___51934 < len__4864__auto___51933)){
args__4870__auto__.push((arguments[i__4865__auto___51934]));

var G__51937 = (i__4865__auto___51934 + (1));
i__4865__auto___51934 = G__51937;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__49165){
var map__49166 = p__49165;
var map__49166__$1 = cljs.core.__destructure_map(map__49166);
var opts = map__49166__$1;
var statearr_49167_51939 = state;
(statearr_49167_51939[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_49168_51941 = state;
(statearr_49168_51941[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_49169_51942 = state;
(statearr_49169_51942[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq49156){
var G__49157 = cljs.core.first(seq49156);
var seq49156__$1 = cljs.core.next(seq49156);
var G__49158 = cljs.core.first(seq49156__$1);
var seq49156__$2 = cljs.core.next(seq49156__$1);
var G__49159 = cljs.core.first(seq49156__$2);
var seq49156__$3 = cljs.core.next(seq49156__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49157,G__49158,G__49159,seq49156__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49177 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49177 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta49178){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta49178 = meta49178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49179,meta49178__$1){
var self__ = this;
var _49179__$1 = this;
return (new cljs.core.async.t_cljs$core$async49177(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta49178__$1));
}));

(cljs.core.async.t_cljs$core$async49177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49179){
var self__ = this;
var _49179__$1 = this;
return self__.meta49178;
}));

(cljs.core.async.t_cljs$core$async49177.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49177.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async49177.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49177.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49177.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49177.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49177.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49177.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49177.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta49178","meta49178",-2098691040,null)], null);
}));

(cljs.core.async.t_cljs$core$async49177.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49177");

(cljs.core.async.t_cljs$core$async49177.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async49177");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49177.
 */
cljs.core.async.__GT_t_cljs$core$async49177 = (function cljs$core$async$mix_$___GT_t_cljs$core$async49177(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta49178){
return (new cljs.core.async.t_cljs$core$async49177(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta49178));
});

}

return (new cljs.core.async.t_cljs$core$async49177(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44084__auto___51974 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44085__auto__ = (function (){var switch__43720__auto__ = (function (state_49262){
var state_val_49263 = (state_49262[(1)]);
if((state_val_49263 === (7))){
var inst_49222 = (state_49262[(2)]);
var state_49262__$1 = state_49262;
if(cljs.core.truth_(inst_49222)){
var statearr_49268_51976 = state_49262__$1;
(statearr_49268_51976[(1)] = (8));

} else {
var statearr_49269_51977 = state_49262__$1;
(statearr_49269_51977[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (20))){
var inst_49215 = (state_49262[(7)]);
var state_49262__$1 = state_49262;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49262__$1,(23),out,inst_49215);
} else {
if((state_val_49263 === (1))){
var inst_49198 = calc_state();
var inst_49199 = cljs.core.__destructure_map(inst_49198);
var inst_49200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49199,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49201 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49199,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49202 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49199,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_49203 = inst_49198;
var state_49262__$1 = (function (){var statearr_49273 = state_49262;
(statearr_49273[(8)] = inst_49202);

(statearr_49273[(9)] = inst_49200);

(statearr_49273[(10)] = inst_49203);

(statearr_49273[(11)] = inst_49201);

return statearr_49273;
})();
var statearr_49277_51984 = state_49262__$1;
(statearr_49277_51984[(2)] = null);

(statearr_49277_51984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (24))){
var inst_49206 = (state_49262[(12)]);
var inst_49203 = inst_49206;
var state_49262__$1 = (function (){var statearr_49299 = state_49262;
(statearr_49299[(10)] = inst_49203);

return statearr_49299;
})();
var statearr_49302_51988 = state_49262__$1;
(statearr_49302_51988[(2)] = null);

(statearr_49302_51988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (4))){
var inst_49215 = (state_49262[(7)]);
var inst_49217 = (state_49262[(13)]);
var inst_49214 = (state_49262[(2)]);
var inst_49215__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49214,(0),null);
var inst_49216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49214,(1),null);
var inst_49217__$1 = (inst_49215__$1 == null);
var state_49262__$1 = (function (){var statearr_49317 = state_49262;
(statearr_49317[(7)] = inst_49215__$1);

(statearr_49317[(13)] = inst_49217__$1);

(statearr_49317[(14)] = inst_49216);

return statearr_49317;
})();
if(cljs.core.truth_(inst_49217__$1)){
var statearr_49319_51990 = state_49262__$1;
(statearr_49319_51990[(1)] = (5));

} else {
var statearr_49320_51991 = state_49262__$1;
(statearr_49320_51991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (15))){
var inst_49236 = (state_49262[(15)]);
var inst_49207 = (state_49262[(16)]);
var inst_49236__$1 = cljs.core.empty_QMARK_(inst_49207);
var state_49262__$1 = (function (){var statearr_49325 = state_49262;
(statearr_49325[(15)] = inst_49236__$1);

return statearr_49325;
})();
if(inst_49236__$1){
var statearr_49329_51998 = state_49262__$1;
(statearr_49329_51998[(1)] = (17));

} else {
var statearr_49331_51999 = state_49262__$1;
(statearr_49331_51999[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (21))){
var inst_49206 = (state_49262[(12)]);
var inst_49203 = inst_49206;
var state_49262__$1 = (function (){var statearr_49342 = state_49262;
(statearr_49342[(10)] = inst_49203);

return statearr_49342;
})();
var statearr_49349_52004 = state_49262__$1;
(statearr_49349_52004[(2)] = null);

(statearr_49349_52004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (13))){
var inst_49229 = (state_49262[(2)]);
var inst_49230 = calc_state();
var inst_49203 = inst_49230;
var state_49262__$1 = (function (){var statearr_49350 = state_49262;
(statearr_49350[(17)] = inst_49229);

(statearr_49350[(10)] = inst_49203);

return statearr_49350;
})();
var statearr_49360_52012 = state_49262__$1;
(statearr_49360_52012[(2)] = null);

(statearr_49360_52012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (22))){
var inst_49256 = (state_49262[(2)]);
var state_49262__$1 = state_49262;
var statearr_49364_52015 = state_49262__$1;
(statearr_49364_52015[(2)] = inst_49256);

(statearr_49364_52015[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (6))){
var inst_49216 = (state_49262[(14)]);
var inst_49220 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49216,change);
var state_49262__$1 = state_49262;
var statearr_49371_52016 = state_49262__$1;
(statearr_49371_52016[(2)] = inst_49220);

(statearr_49371_52016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (25))){
var state_49262__$1 = state_49262;
var statearr_49374_52018 = state_49262__$1;
(statearr_49374_52018[(2)] = null);

(statearr_49374_52018[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (17))){
var inst_49216 = (state_49262[(14)]);
var inst_49208 = (state_49262[(18)]);
var inst_49238 = (inst_49208.cljs$core$IFn$_invoke$arity$1 ? inst_49208.cljs$core$IFn$_invoke$arity$1(inst_49216) : inst_49208.call(null,inst_49216));
var inst_49239 = cljs.core.not(inst_49238);
var state_49262__$1 = state_49262;
var statearr_49380_52019 = state_49262__$1;
(statearr_49380_52019[(2)] = inst_49239);

(statearr_49380_52019[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (3))){
var inst_49260 = (state_49262[(2)]);
var state_49262__$1 = state_49262;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49262__$1,inst_49260);
} else {
if((state_val_49263 === (12))){
var state_49262__$1 = state_49262;
var statearr_49384_52021 = state_49262__$1;
(statearr_49384_52021[(2)] = null);

(statearr_49384_52021[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (2))){
var inst_49203 = (state_49262[(10)]);
var inst_49206 = (state_49262[(12)]);
var inst_49206__$1 = cljs.core.__destructure_map(inst_49203);
var inst_49207 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49206__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49208 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49206__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49209 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49206__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_49262__$1 = (function (){var statearr_49389 = state_49262;
(statearr_49389[(12)] = inst_49206__$1);

(statearr_49389[(16)] = inst_49207);

(statearr_49389[(18)] = inst_49208);

return statearr_49389;
})();
return cljs.core.async.ioc_alts_BANG_(state_49262__$1,(4),inst_49209);
} else {
if((state_val_49263 === (23))){
var inst_49247 = (state_49262[(2)]);
var state_49262__$1 = state_49262;
if(cljs.core.truth_(inst_49247)){
var statearr_49390_52035 = state_49262__$1;
(statearr_49390_52035[(1)] = (24));

} else {
var statearr_49391_52036 = state_49262__$1;
(statearr_49391_52036[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (19))){
var inst_49242 = (state_49262[(2)]);
var state_49262__$1 = state_49262;
var statearr_49392_52037 = state_49262__$1;
(statearr_49392_52037[(2)] = inst_49242);

(statearr_49392_52037[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (11))){
var inst_49216 = (state_49262[(14)]);
var inst_49226 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_49216);
var state_49262__$1 = state_49262;
var statearr_49399_52039 = state_49262__$1;
(statearr_49399_52039[(2)] = inst_49226);

(statearr_49399_52039[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (9))){
var inst_49233 = (state_49262[(19)]);
var inst_49207 = (state_49262[(16)]);
var inst_49216 = (state_49262[(14)]);
var inst_49233__$1 = (inst_49207.cljs$core$IFn$_invoke$arity$1 ? inst_49207.cljs$core$IFn$_invoke$arity$1(inst_49216) : inst_49207.call(null,inst_49216));
var state_49262__$1 = (function (){var statearr_49401 = state_49262;
(statearr_49401[(19)] = inst_49233__$1);

return statearr_49401;
})();
if(cljs.core.truth_(inst_49233__$1)){
var statearr_49402_52045 = state_49262__$1;
(statearr_49402_52045[(1)] = (14));

} else {
var statearr_49404_52047 = state_49262__$1;
(statearr_49404_52047[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (5))){
var inst_49217 = (state_49262[(13)]);
var state_49262__$1 = state_49262;
var statearr_49407_52051 = state_49262__$1;
(statearr_49407_52051[(2)] = inst_49217);

(statearr_49407_52051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (14))){
var inst_49233 = (state_49262[(19)]);
var state_49262__$1 = state_49262;
var statearr_49408_52056 = state_49262__$1;
(statearr_49408_52056[(2)] = inst_49233);

(statearr_49408_52056[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (26))){
var inst_49252 = (state_49262[(2)]);
var state_49262__$1 = state_49262;
var statearr_49409_52057 = state_49262__$1;
(statearr_49409_52057[(2)] = inst_49252);

(statearr_49409_52057[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (16))){
var inst_49244 = (state_49262[(2)]);
var state_49262__$1 = state_49262;
if(cljs.core.truth_(inst_49244)){
var statearr_49410_52058 = state_49262__$1;
(statearr_49410_52058[(1)] = (20));

} else {
var statearr_49411_52060 = state_49262__$1;
(statearr_49411_52060[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (10))){
var inst_49258 = (state_49262[(2)]);
var state_49262__$1 = state_49262;
var statearr_49413_52061 = state_49262__$1;
(statearr_49413_52061[(2)] = inst_49258);

(statearr_49413_52061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (18))){
var inst_49236 = (state_49262[(15)]);
var state_49262__$1 = state_49262;
var statearr_49417_52062 = state_49262__$1;
(statearr_49417_52062[(2)] = inst_49236);

(statearr_49417_52062[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49263 === (8))){
var inst_49215 = (state_49262[(7)]);
var inst_49224 = (inst_49215 == null);
var state_49262__$1 = state_49262;
if(cljs.core.truth_(inst_49224)){
var statearr_49418_52063 = state_49262__$1;
(statearr_49418_52063[(1)] = (11));

} else {
var statearr_49419_52064 = state_49262__$1;
(statearr_49419_52064[(1)] = (12));

}

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__43721__auto__ = null;
var cljs$core$async$mix_$_state_machine__43721__auto____0 = (function (){
var statearr_49427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49427[(0)] = cljs$core$async$mix_$_state_machine__43721__auto__);

(statearr_49427[(1)] = (1));

return statearr_49427;
});
var cljs$core$async$mix_$_state_machine__43721__auto____1 = (function (state_49262){
while(true){
var ret_value__43722__auto__ = (function (){try{while(true){
var result__43723__auto__ = switch__43720__auto__(state_49262);
if(cljs.core.keyword_identical_QMARK_(result__43723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43723__auto__;
}
break;
}
}catch (e49431){var ex__43724__auto__ = e49431;
var statearr_49432_52065 = state_49262;
(statearr_49432_52065[(2)] = ex__43724__auto__);


if(cljs.core.seq((state_49262[(4)]))){
var statearr_49433_52066 = state_49262;
(statearr_49433_52066[(1)] = cljs.core.first((state_49262[(4)])));

} else {
throw ex__43724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52067 = state_49262;
state_49262 = G__52067;
continue;
} else {
return ret_value__43722__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43721__auto__ = function(state_49262){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43721__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43721__auto____1.call(this,state_49262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43721__auto____0;
cljs$core$async$mix_$_state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43721__auto____1;
return cljs$core$async$mix_$_state_machine__43721__auto__;
})()
})();
var state__44086__auto__ = (function (){var statearr_49438 = f__44085__auto__();
(statearr_49438[(6)] = c__44084__auto___51974);

return statearr_49438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44086__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_52072 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_52072(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_52077 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_52077(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_52096 = (function() {
var G__52097 = null;
var G__52097__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__52097__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__52097 = function(p,v){
switch(arguments.length){
case 1:
return G__52097__1.call(this,p);
case 2:
return G__52097__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52097.cljs$core$IFn$_invoke$arity$1 = G__52097__1;
G__52097.cljs$core$IFn$_invoke$arity$2 = G__52097__2;
return G__52097;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__49480 = arguments.length;
switch (G__49480) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_52096(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_52096(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__49483 = arguments.length;
switch (G__49483) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__49481_SHARP_){
if(cljs.core.truth_((p1__49481_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__49481_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__49481_SHARP_.call(null,topic)))){
return p1__49481_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__49481_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49485 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49485 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta49486){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta49486 = meta49486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49487,meta49486__$1){
var self__ = this;
var _49487__$1 = this;
return (new cljs.core.async.t_cljs$core$async49485(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta49486__$1));
}));

(cljs.core.async.t_cljs$core$async49485.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49487){
var self__ = this;
var _49487__$1 = this;
return self__.meta49486;
}));

(cljs.core.async.t_cljs$core$async49485.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49485.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async49485.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49485.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async49485.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async49485.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async49485.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async49485.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta49486","meta49486",1055703296,null)], null);
}));

(cljs.core.async.t_cljs$core$async49485.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49485.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49485");

(cljs.core.async.t_cljs$core$async49485.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async49485");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49485.
 */
cljs.core.async.__GT_t_cljs$core$async49485 = (function cljs$core$async$__GT_t_cljs$core$async49485(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49486){
return (new cljs.core.async.t_cljs$core$async49485(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49486));
});

}

return (new cljs.core.async.t_cljs$core$async49485(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44084__auto___52154 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44085__auto__ = (function (){var switch__43720__auto__ = (function (state_49583){
var state_val_49584 = (state_49583[(1)]);
if((state_val_49584 === (7))){
var inst_49579 = (state_49583[(2)]);
var state_49583__$1 = state_49583;
var statearr_49585_52155 = state_49583__$1;
(statearr_49585_52155[(2)] = inst_49579);

(statearr_49585_52155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49584 === (20))){
var state_49583__$1 = state_49583;
var statearr_49588_52156 = state_49583__$1;
(statearr_49588_52156[(2)] = null);

(statearr_49588_52156[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49584 === (1))){
var state_49583__$1 = state_49583;
var statearr_49590_52157 = state_49583__$1;
(statearr_49590_52157[(2)] = null);

(statearr_49590_52157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49584 === (24))){
var inst_49562 = (state_49583[(7)]);
var inst_49571 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_49562);
var state_49583__$1 = state_49583;
var statearr_49594_52162 = state_49583__$1;
(statearr_49594_52162[(2)] = inst_49571);

(statearr_49594_52162[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49584 === (4))){
var inst_49514 = (state_49583[(8)]);
var inst_49514__$1 = (state_49583[(2)]);
var inst_49515 = (inst_49514__$1 == null);
var state_49583__$1 = (function (){var statearr_49595 = state_49583;
(statearr_49595[(8)] = inst_49514__$1);

return statearr_49595;
})();
if(cljs.core.truth_(inst_49515)){
var statearr_49605_52165 = state_49583__$1;
(statearr_49605_52165[(1)] = (5));

} else {
var statearr_49606_52166 = state_49583__$1;
(statearr_49606_52166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49584 === (15))){
var inst_49556 = (state_49583[(2)]);
var state_49583__$1 = state_49583;
var statearr_49607_52169 = state_49583__$1;
(statearr_49607_52169[(2)] = inst_49556);

(statearr_49607_52169[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49584 === (21))){
var inst_49576 = (state_49583[(2)]);
var state_49583__$1 = (function (){var statearr_49608 = state_49583;
(statearr_49608[(9)] = inst_49576);

return statearr_49608;
})();
var statearr_49609_52173 = state_49583__$1;
(statearr_49609_52173[(2)] = null);

(statearr_49609_52173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49584 === (13))){
var inst_49538 = (state_49583[(10)]);
var inst_49540 = cljs.core.chunked_seq_QMARK_(inst_49538);
var state_49583__$1 = state_49583;
if(inst_49540){
var statearr_49610_52177 = state_49583__$1;
(statearr_49610_52177[(1)] = (16));

} else {
var statearr_49611_52178 = state_49583__$1;
(statearr_49611_52178[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49584 === (22))){
var inst_49568 = (state_49583[(2)]);
var state_49583__$1 = state_49583;
if(cljs.core.truth_(inst_49568)){
var statearr_49612_52180 = state_49583__$1;
(statearr_49612_52180[(1)] = (23));

} else {
var statearr_49613_52181 = state_49583__$1;
(statearr_49613_52181[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49584 === (6))){
var inst_49564 = (state_49583[(11)]);
var inst_49562 = (state_49583[(7)]);
var inst_49514 = (state_49583[(8)]);
var inst_49562__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_49514) : topic_fn.call(null,inst_49514));
var inst_49563 = cljs.core.deref(mults);
var inst_49564__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49563,inst_49562__$1);
var state_49583__$1 = (function (){var statearr_49621 = state_49583;
(statearr_49621[(11)] = inst_49564__$1);

(statearr_49621[(7)] = inst_49562__$1);

return statearr_49621;
})();
if(cljs.core.truth_(inst_49564__$1)){
var statearr_49625_52184 = state_49583__$1;
(statearr_49625_52184[(1)] = (19));

} else {
var statearr_49635_52185 = state_49583__$1;
(statearr_49635_52185[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49584 === (25))){
var inst_49573 = (state_49583[(2)]);
var state_49583__$1 = state_49583;
var statearr_49640_52186 = state_49583__$1;
(statearr_49640_52186[(2)] = inst_49573);

(statearr_49640_52186[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49584 === (17))){
var inst_49538 = (state_49583[(10)]);
var inst_49547 = cljs.core.first(inst_49538);
var inst_49548 = cljs.core.async.muxch_STAR_(inst_49547);
var inst_49549 = cljs.core.async.close_BANG_(inst_49548);
var inst_49550 = cljs.core.next(inst_49538);
var inst_49524 = inst_49550;
var inst_49525 = null;
var inst_49526 = (0);
var inst_49527 = (0);
var state_49583__$1 = (function (){var statearr_49644 = state_49583;
(statearr_49644[(12)] = inst_49526);

(statearr_49644[(13)] = inst_49549);

(statearr_49644[(14)] = inst_49524);

(statearr_49644[(15)] = inst_49527);

(statearr_49644[(16)] = inst_49525);

return statearr_49644;
})();
var statearr_49645_52202 = state_49583__$1;
(statearr_49645_52202[(2)] = null);

(statearr_49645_52202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49584 === (3))){
var inst_49581 = (state_49583[(2)]);
var state_49583__$1 = state_49583;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49583__$1,inst_49581);
} else {
if((state_val_49584 === (12))){
var inst_49558 = (state_49583[(2)]);
var state_49583__$1 = state_49583;
var statearr_49653_52207 = state_49583__$1;
(statearr_49653_52207[(2)] = inst_49558);

(statearr_49653_52207[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49584 === (2))){
var state_49583__$1 = state_49583;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49583__$1,(4),ch);
} else {
if((state_val_49584 === (23))){
var state_49583__$1 = state_49583;
var statearr_49657_52212 = state_49583__$1;
(statearr_49657_52212[(2)] = null);

(statearr_49657_52212[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49584 === (19))){
var inst_49564 = (state_49583[(11)]);
var inst_49514 = (state_49583[(8)]);
var inst_49566 = cljs.core.async.muxch_STAR_(inst_49564);
var state_49583__$1 = state_49583;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49583__$1,(22),inst_49566,inst_49514);
} else {
if((state_val_49584 === (11))){
var inst_49524 = (state_49583[(14)]);
var inst_49538 = (state_49583[(10)]);
var inst_49538__$1 = cljs.core.seq(inst_49524);
var state_49583__$1 = (function (){var statearr_49661 = state_49583;
(statearr_49661[(10)] = inst_49538__$1);

return statearr_49661;
})();
if(inst_49538__$1){
var statearr_49662_52214 = state_49583__$1;
(statearr_49662_52214[(1)] = (13));

} else {
var statearr_49667_52215 = state_49583__$1;
(statearr_49667_52215[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49584 === (9))){
var inst_49560 = (state_49583[(2)]);
var state_49583__$1 = state_49583;
var statearr_49674_52216 = state_49583__$1;
(statearr_49674_52216[(2)] = inst_49560);

(statearr_49674_52216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49584 === (5))){
var inst_49521 = cljs.core.deref(mults);
var inst_49522 = cljs.core.vals(inst_49521);
var inst_49523 = cljs.core.seq(inst_49522);
var inst_49524 = inst_49523;
var inst_49525 = null;
var inst_49526 = (0);
var inst_49527 = (0);
var state_49583__$1 = (function (){var statearr_49682 = state_49583;
(statearr_49682[(12)] = inst_49526);

(statearr_49682[(14)] = inst_49524);

(statearr_49682[(15)] = inst_49527);

(statearr_49682[(16)] = inst_49525);

return statearr_49682;
})();
var statearr_49687_52217 = state_49583__$1;
(statearr_49687_52217[(2)] = null);

(statearr_49687_52217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49584 === (14))){
var state_49583__$1 = state_49583;
var statearr_49691_52219 = state_49583__$1;
(statearr_49691_52219[(2)] = null);

(statearr_49691_52219[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49584 === (16))){
var inst_49538 = (state_49583[(10)]);
var inst_49542 = cljs.core.chunk_first(inst_49538);
var inst_49543 = cljs.core.chunk_rest(inst_49538);
var inst_49544 = cljs.core.count(inst_49542);
var inst_49524 = inst_49543;
var inst_49525 = inst_49542;
var inst_49526 = inst_49544;
var inst_49527 = (0);
var state_49583__$1 = (function (){var statearr_49697 = state_49583;
(statearr_49697[(12)] = inst_49526);

(statearr_49697[(14)] = inst_49524);

(statearr_49697[(15)] = inst_49527);

(statearr_49697[(16)] = inst_49525);

return statearr_49697;
})();
var statearr_49698_52221 = state_49583__$1;
(statearr_49698_52221[(2)] = null);

(statearr_49698_52221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49584 === (10))){
var inst_49526 = (state_49583[(12)]);
var inst_49524 = (state_49583[(14)]);
var inst_49527 = (state_49583[(15)]);
var inst_49525 = (state_49583[(16)]);
var inst_49532 = cljs.core._nth(inst_49525,inst_49527);
var inst_49533 = cljs.core.async.muxch_STAR_(inst_49532);
var inst_49534 = cljs.core.async.close_BANG_(inst_49533);
var inst_49535 = (inst_49527 + (1));
var tmp49688 = inst_49526;
var tmp49689 = inst_49524;
var tmp49690 = inst_49525;
var inst_49524__$1 = tmp49689;
var inst_49525__$1 = tmp49690;
var inst_49526__$1 = tmp49688;
var inst_49527__$1 = inst_49535;
var state_49583__$1 = (function (){var statearr_49702 = state_49583;
(statearr_49702[(17)] = inst_49534);

(statearr_49702[(12)] = inst_49526__$1);

(statearr_49702[(14)] = inst_49524__$1);

(statearr_49702[(15)] = inst_49527__$1);

(statearr_49702[(16)] = inst_49525__$1);

return statearr_49702;
})();
var statearr_49703_52226 = state_49583__$1;
(statearr_49703_52226[(2)] = null);

(statearr_49703_52226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49584 === (18))){
var inst_49553 = (state_49583[(2)]);
var state_49583__$1 = state_49583;
var statearr_49704_52227 = state_49583__$1;
(statearr_49704_52227[(2)] = inst_49553);

(statearr_49704_52227[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49584 === (8))){
var inst_49526 = (state_49583[(12)]);
var inst_49527 = (state_49583[(15)]);
var inst_49529 = (inst_49527 < inst_49526);
var inst_49530 = inst_49529;
var state_49583__$1 = state_49583;
if(cljs.core.truth_(inst_49530)){
var statearr_49705_52228 = state_49583__$1;
(statearr_49705_52228[(1)] = (10));

} else {
var statearr_49712_52229 = state_49583__$1;
(statearr_49712_52229[(1)] = (11));

}

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
});
return (function() {
var cljs$core$async$state_machine__43721__auto__ = null;
var cljs$core$async$state_machine__43721__auto____0 = (function (){
var statearr_49713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49713[(0)] = cljs$core$async$state_machine__43721__auto__);

(statearr_49713[(1)] = (1));

return statearr_49713;
});
var cljs$core$async$state_machine__43721__auto____1 = (function (state_49583){
while(true){
var ret_value__43722__auto__ = (function (){try{while(true){
var result__43723__auto__ = switch__43720__auto__(state_49583);
if(cljs.core.keyword_identical_QMARK_(result__43723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43723__auto__;
}
break;
}
}catch (e49714){var ex__43724__auto__ = e49714;
var statearr_49715_52232 = state_49583;
(statearr_49715_52232[(2)] = ex__43724__auto__);


if(cljs.core.seq((state_49583[(4)]))){
var statearr_49716_52235 = state_49583;
(statearr_49716_52235[(1)] = cljs.core.first((state_49583[(4)])));

} else {
throw ex__43724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52237 = state_49583;
state_49583 = G__52237;
continue;
} else {
return ret_value__43722__auto__;
}
break;
}
});
cljs$core$async$state_machine__43721__auto__ = function(state_49583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43721__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43721__auto____1.call(this,state_49583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43721__auto____0;
cljs$core$async$state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43721__auto____1;
return cljs$core$async$state_machine__43721__auto__;
})()
})();
var state__44086__auto__ = (function (){var statearr_49717 = f__44085__auto__();
(statearr_49717[(6)] = c__44084__auto___52154);

return statearr_49717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44086__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__49719 = arguments.length;
switch (G__49719) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__49727 = arguments.length;
switch (G__49727) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__49736 = arguments.length;
switch (G__49736) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__44084__auto___52252 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44085__auto__ = (function (){var switch__43720__auto__ = (function (state_49802){
var state_val_49803 = (state_49802[(1)]);
if((state_val_49803 === (7))){
var state_49802__$1 = state_49802;
var statearr_49806_52253 = state_49802__$1;
(statearr_49806_52253[(2)] = null);

(statearr_49806_52253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49803 === (1))){
var state_49802__$1 = state_49802;
var statearr_49808_52254 = state_49802__$1;
(statearr_49808_52254[(2)] = null);

(statearr_49808_52254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49803 === (4))){
var inst_49755 = (state_49802[(7)]);
var inst_49754 = (state_49802[(8)]);
var inst_49757 = (inst_49755 < inst_49754);
var state_49802__$1 = state_49802;
if(cljs.core.truth_(inst_49757)){
var statearr_49815_52255 = state_49802__$1;
(statearr_49815_52255[(1)] = (6));

} else {
var statearr_49817_52256 = state_49802__$1;
(statearr_49817_52256[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49803 === (15))){
var inst_49786 = (state_49802[(9)]);
var inst_49791 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_49786);
var state_49802__$1 = state_49802;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49802__$1,(17),out,inst_49791);
} else {
if((state_val_49803 === (13))){
var inst_49786 = (state_49802[(9)]);
var inst_49786__$1 = (state_49802[(2)]);
var inst_49787 = cljs.core.some(cljs.core.nil_QMARK_,inst_49786__$1);
var state_49802__$1 = (function (){var statearr_49822 = state_49802;
(statearr_49822[(9)] = inst_49786__$1);

return statearr_49822;
})();
if(cljs.core.truth_(inst_49787)){
var statearr_49827_52264 = state_49802__$1;
(statearr_49827_52264[(1)] = (14));

} else {
var statearr_49828_52265 = state_49802__$1;
(statearr_49828_52265[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49803 === (6))){
var state_49802__$1 = state_49802;
var statearr_49832_52268 = state_49802__$1;
(statearr_49832_52268[(2)] = null);

(statearr_49832_52268[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49803 === (17))){
var inst_49795 = (state_49802[(2)]);
var state_49802__$1 = (function (){var statearr_49843 = state_49802;
(statearr_49843[(10)] = inst_49795);

return statearr_49843;
})();
var statearr_49846_52271 = state_49802__$1;
(statearr_49846_52271[(2)] = null);

(statearr_49846_52271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49803 === (3))){
var inst_49800 = (state_49802[(2)]);
var state_49802__$1 = state_49802;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49802__$1,inst_49800);
} else {
if((state_val_49803 === (12))){
var _ = (function (){var statearr_49848 = state_49802;
(statearr_49848[(4)] = cljs.core.rest((state_49802[(4)])));

return statearr_49848;
})();
var state_49802__$1 = state_49802;
var ex49838 = (state_49802__$1[(2)]);
var statearr_49850_52275 = state_49802__$1;
(statearr_49850_52275[(5)] = ex49838);


if((ex49838 instanceof Object)){
var statearr_49852_52279 = state_49802__$1;
(statearr_49852_52279[(1)] = (11));

(statearr_49852_52279[(5)] = null);

} else {
throw ex49838;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49803 === (2))){
var inst_49753 = cljs.core.reset_BANG_(dctr,cnt);
var inst_49754 = cnt;
var inst_49755 = (0);
var state_49802__$1 = (function (){var statearr_49865 = state_49802;
(statearr_49865[(7)] = inst_49755);

(statearr_49865[(11)] = inst_49753);

(statearr_49865[(8)] = inst_49754);

return statearr_49865;
})();
var statearr_49868_52282 = state_49802__$1;
(statearr_49868_52282[(2)] = null);

(statearr_49868_52282[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49803 === (11))){
var inst_49765 = (state_49802[(2)]);
var inst_49766 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_49802__$1 = (function (){var statearr_49883 = state_49802;
(statearr_49883[(12)] = inst_49765);

return statearr_49883;
})();
var statearr_49885_52287 = state_49802__$1;
(statearr_49885_52287[(2)] = inst_49766);

(statearr_49885_52287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49803 === (9))){
var inst_49755 = (state_49802[(7)]);
var _ = (function (){var statearr_49888 = state_49802;
(statearr_49888[(4)] = cljs.core.cons((12),(state_49802[(4)])));

return statearr_49888;
})();
var inst_49772 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_49755) : chs__$1.call(null,inst_49755));
var inst_49773 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_49755) : done.call(null,inst_49755));
var inst_49774 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_49772,inst_49773);
var ___$1 = (function (){var statearr_49890 = state_49802;
(statearr_49890[(4)] = cljs.core.rest((state_49802[(4)])));

return statearr_49890;
})();
var state_49802__$1 = state_49802;
var statearr_49893_52289 = state_49802__$1;
(statearr_49893_52289[(2)] = inst_49774);

(statearr_49893_52289[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49803 === (5))){
var inst_49784 = (state_49802[(2)]);
var state_49802__$1 = (function (){var statearr_49894 = state_49802;
(statearr_49894[(13)] = inst_49784);

return statearr_49894;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49802__$1,(13),dchan);
} else {
if((state_val_49803 === (14))){
var inst_49789 = cljs.core.async.close_BANG_(out);
var state_49802__$1 = state_49802;
var statearr_49898_52300 = state_49802__$1;
(statearr_49898_52300[(2)] = inst_49789);

(statearr_49898_52300[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49803 === (16))){
var inst_49798 = (state_49802[(2)]);
var state_49802__$1 = state_49802;
var statearr_49902_52302 = state_49802__$1;
(statearr_49902_52302[(2)] = inst_49798);

(statearr_49902_52302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49803 === (10))){
var inst_49755 = (state_49802[(7)]);
var inst_49777 = (state_49802[(2)]);
var inst_49778 = (inst_49755 + (1));
var inst_49755__$1 = inst_49778;
var state_49802__$1 = (function (){var statearr_49915 = state_49802;
(statearr_49915[(7)] = inst_49755__$1);

(statearr_49915[(14)] = inst_49777);

return statearr_49915;
})();
var statearr_49917_52309 = state_49802__$1;
(statearr_49917_52309[(2)] = null);

(statearr_49917_52309[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49803 === (8))){
var inst_49782 = (state_49802[(2)]);
var state_49802__$1 = state_49802;
var statearr_49920_52311 = state_49802__$1;
(statearr_49920_52311[(2)] = inst_49782);

(statearr_49920_52311[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__43721__auto__ = null;
var cljs$core$async$state_machine__43721__auto____0 = (function (){
var statearr_49924 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49924[(0)] = cljs$core$async$state_machine__43721__auto__);

(statearr_49924[(1)] = (1));

return statearr_49924;
});
var cljs$core$async$state_machine__43721__auto____1 = (function (state_49802){
while(true){
var ret_value__43722__auto__ = (function (){try{while(true){
var result__43723__auto__ = switch__43720__auto__(state_49802);
if(cljs.core.keyword_identical_QMARK_(result__43723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43723__auto__;
}
break;
}
}catch (e49925){var ex__43724__auto__ = e49925;
var statearr_49927_52314 = state_49802;
(statearr_49927_52314[(2)] = ex__43724__auto__);


if(cljs.core.seq((state_49802[(4)]))){
var statearr_49929_52317 = state_49802;
(statearr_49929_52317[(1)] = cljs.core.first((state_49802[(4)])));

} else {
throw ex__43724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52318 = state_49802;
state_49802 = G__52318;
continue;
} else {
return ret_value__43722__auto__;
}
break;
}
});
cljs$core$async$state_machine__43721__auto__ = function(state_49802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43721__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43721__auto____1.call(this,state_49802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43721__auto____0;
cljs$core$async$state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43721__auto____1;
return cljs$core$async$state_machine__43721__auto__;
})()
})();
var state__44086__auto__ = (function (){var statearr_49934 = f__44085__auto__();
(statearr_49934[(6)] = c__44084__auto___52252);

return statearr_49934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44086__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__49942 = arguments.length;
switch (G__49942) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44084__auto___52323 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44085__auto__ = (function (){var switch__43720__auto__ = (function (state_49984){
var state_val_49985 = (state_49984[(1)]);
if((state_val_49985 === (7))){
var inst_49959 = (state_49984[(7)]);
var inst_49962 = (state_49984[(8)]);
var inst_49959__$1 = (state_49984[(2)]);
var inst_49962__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49959__$1,(0),null);
var inst_49963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49959__$1,(1),null);
var inst_49965 = (inst_49962__$1 == null);
var state_49984__$1 = (function (){var statearr_49991 = state_49984;
(statearr_49991[(7)] = inst_49959__$1);

(statearr_49991[(8)] = inst_49962__$1);

(statearr_49991[(9)] = inst_49963);

return statearr_49991;
})();
if(cljs.core.truth_(inst_49965)){
var statearr_50000_52325 = state_49984__$1;
(statearr_50000_52325[(1)] = (8));

} else {
var statearr_50001_52326 = state_49984__$1;
(statearr_50001_52326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49985 === (1))){
var inst_49947 = cljs.core.vec(chs);
var inst_49949 = inst_49947;
var state_49984__$1 = (function (){var statearr_50004 = state_49984;
(statearr_50004[(10)] = inst_49949);

return statearr_50004;
})();
var statearr_50011_52329 = state_49984__$1;
(statearr_50011_52329[(2)] = null);

(statearr_50011_52329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49985 === (4))){
var inst_49949 = (state_49984[(10)]);
var state_49984__$1 = state_49984;
return cljs.core.async.ioc_alts_BANG_(state_49984__$1,(7),inst_49949);
} else {
if((state_val_49985 === (6))){
var inst_49979 = (state_49984[(2)]);
var state_49984__$1 = state_49984;
var statearr_50014_52332 = state_49984__$1;
(statearr_50014_52332[(2)] = inst_49979);

(statearr_50014_52332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49985 === (3))){
var inst_49981 = (state_49984[(2)]);
var state_49984__$1 = state_49984;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49984__$1,inst_49981);
} else {
if((state_val_49985 === (2))){
var inst_49949 = (state_49984[(10)]);
var inst_49952 = cljs.core.count(inst_49949);
var inst_49953 = (inst_49952 > (0));
var state_49984__$1 = state_49984;
if(cljs.core.truth_(inst_49953)){
var statearr_50025_52340 = state_49984__$1;
(statearr_50025_52340[(1)] = (4));

} else {
var statearr_50029_52342 = state_49984__$1;
(statearr_50029_52342[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49985 === (11))){
var inst_49949 = (state_49984[(10)]);
var inst_49972 = (state_49984[(2)]);
var tmp50015 = inst_49949;
var inst_49949__$1 = tmp50015;
var state_49984__$1 = (function (){var statearr_50036 = state_49984;
(statearr_50036[(10)] = inst_49949__$1);

(statearr_50036[(11)] = inst_49972);

return statearr_50036;
})();
var statearr_50038_52344 = state_49984__$1;
(statearr_50038_52344[(2)] = null);

(statearr_50038_52344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49985 === (9))){
var inst_49962 = (state_49984[(8)]);
var state_49984__$1 = state_49984;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49984__$1,(11),out,inst_49962);
} else {
if((state_val_49985 === (5))){
var inst_49977 = cljs.core.async.close_BANG_(out);
var state_49984__$1 = state_49984;
var statearr_50048_52349 = state_49984__$1;
(statearr_50048_52349[(2)] = inst_49977);

(statearr_50048_52349[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49985 === (10))){
var inst_49975 = (state_49984[(2)]);
var state_49984__$1 = state_49984;
var statearr_50050_52354 = state_49984__$1;
(statearr_50050_52354[(2)] = inst_49975);

(statearr_50050_52354[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49985 === (8))){
var inst_49959 = (state_49984[(7)]);
var inst_49962 = (state_49984[(8)]);
var inst_49949 = (state_49984[(10)]);
var inst_49963 = (state_49984[(9)]);
var inst_49967 = (function (){var cs = inst_49949;
var vec__49955 = inst_49959;
var v = inst_49962;
var c = inst_49963;
return (function (p1__49939_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__49939_SHARP_);
});
})();
var inst_49968 = cljs.core.filterv(inst_49967,inst_49949);
var inst_49949__$1 = inst_49968;
var state_49984__$1 = (function (){var statearr_50058 = state_49984;
(statearr_50058[(10)] = inst_49949__$1);

return statearr_50058;
})();
var statearr_50059_52360 = state_49984__$1;
(statearr_50059_52360[(2)] = null);

(statearr_50059_52360[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__43721__auto__ = null;
var cljs$core$async$state_machine__43721__auto____0 = (function (){
var statearr_50062 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50062[(0)] = cljs$core$async$state_machine__43721__auto__);

(statearr_50062[(1)] = (1));

return statearr_50062;
});
var cljs$core$async$state_machine__43721__auto____1 = (function (state_49984){
while(true){
var ret_value__43722__auto__ = (function (){try{while(true){
var result__43723__auto__ = switch__43720__auto__(state_49984);
if(cljs.core.keyword_identical_QMARK_(result__43723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43723__auto__;
}
break;
}
}catch (e50069){var ex__43724__auto__ = e50069;
var statearr_50072_52364 = state_49984;
(statearr_50072_52364[(2)] = ex__43724__auto__);


if(cljs.core.seq((state_49984[(4)]))){
var statearr_50073_52366 = state_49984;
(statearr_50073_52366[(1)] = cljs.core.first((state_49984[(4)])));

} else {
throw ex__43724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52367 = state_49984;
state_49984 = G__52367;
continue;
} else {
return ret_value__43722__auto__;
}
break;
}
});
cljs$core$async$state_machine__43721__auto__ = function(state_49984){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43721__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43721__auto____1.call(this,state_49984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43721__auto____0;
cljs$core$async$state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43721__auto____1;
return cljs$core$async$state_machine__43721__auto__;
})()
})();
var state__44086__auto__ = (function (){var statearr_50082 = f__44085__auto__();
(statearr_50082[(6)] = c__44084__auto___52323);

return statearr_50082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44086__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__50093 = arguments.length;
switch (G__50093) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44084__auto___52372 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44085__auto__ = (function (){var switch__43720__auto__ = (function (state_50121){
var state_val_50122 = (state_50121[(1)]);
if((state_val_50122 === (7))){
var inst_50103 = (state_50121[(7)]);
var inst_50103__$1 = (state_50121[(2)]);
var inst_50104 = (inst_50103__$1 == null);
var inst_50105 = cljs.core.not(inst_50104);
var state_50121__$1 = (function (){var statearr_50132 = state_50121;
(statearr_50132[(7)] = inst_50103__$1);

return statearr_50132;
})();
if(inst_50105){
var statearr_50136_52380 = state_50121__$1;
(statearr_50136_52380[(1)] = (8));

} else {
var statearr_50139_52381 = state_50121__$1;
(statearr_50139_52381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50122 === (1))){
var inst_50098 = (0);
var state_50121__$1 = (function (){var statearr_50141 = state_50121;
(statearr_50141[(8)] = inst_50098);

return statearr_50141;
})();
var statearr_50142_52386 = state_50121__$1;
(statearr_50142_52386[(2)] = null);

(statearr_50142_52386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50122 === (4))){
var state_50121__$1 = state_50121;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50121__$1,(7),ch);
} else {
if((state_val_50122 === (6))){
var inst_50116 = (state_50121[(2)]);
var state_50121__$1 = state_50121;
var statearr_50144_52390 = state_50121__$1;
(statearr_50144_52390[(2)] = inst_50116);

(statearr_50144_52390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50122 === (3))){
var inst_50118 = (state_50121[(2)]);
var inst_50119 = cljs.core.async.close_BANG_(out);
var state_50121__$1 = (function (){var statearr_50148 = state_50121;
(statearr_50148[(9)] = inst_50118);

return statearr_50148;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50121__$1,inst_50119);
} else {
if((state_val_50122 === (2))){
var inst_50098 = (state_50121[(8)]);
var inst_50100 = (inst_50098 < n);
var state_50121__$1 = state_50121;
if(cljs.core.truth_(inst_50100)){
var statearr_50149_52393 = state_50121__$1;
(statearr_50149_52393[(1)] = (4));

} else {
var statearr_50150_52394 = state_50121__$1;
(statearr_50150_52394[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50122 === (11))){
var inst_50098 = (state_50121[(8)]);
var inst_50108 = (state_50121[(2)]);
var inst_50109 = (inst_50098 + (1));
var inst_50098__$1 = inst_50109;
var state_50121__$1 = (function (){var statearr_50154 = state_50121;
(statearr_50154[(8)] = inst_50098__$1);

(statearr_50154[(10)] = inst_50108);

return statearr_50154;
})();
var statearr_50155_52397 = state_50121__$1;
(statearr_50155_52397[(2)] = null);

(statearr_50155_52397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50122 === (9))){
var state_50121__$1 = state_50121;
var statearr_50161_52401 = state_50121__$1;
(statearr_50161_52401[(2)] = null);

(statearr_50161_52401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50122 === (5))){
var state_50121__$1 = state_50121;
var statearr_50162_52403 = state_50121__$1;
(statearr_50162_52403[(2)] = null);

(statearr_50162_52403[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50122 === (10))){
var inst_50113 = (state_50121[(2)]);
var state_50121__$1 = state_50121;
var statearr_50163_52408 = state_50121__$1;
(statearr_50163_52408[(2)] = inst_50113);

(statearr_50163_52408[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50122 === (8))){
var inst_50103 = (state_50121[(7)]);
var state_50121__$1 = state_50121;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50121__$1,(11),out,inst_50103);
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
});
return (function() {
var cljs$core$async$state_machine__43721__auto__ = null;
var cljs$core$async$state_machine__43721__auto____0 = (function (){
var statearr_50165 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50165[(0)] = cljs$core$async$state_machine__43721__auto__);

(statearr_50165[(1)] = (1));

return statearr_50165;
});
var cljs$core$async$state_machine__43721__auto____1 = (function (state_50121){
while(true){
var ret_value__43722__auto__ = (function (){try{while(true){
var result__43723__auto__ = switch__43720__auto__(state_50121);
if(cljs.core.keyword_identical_QMARK_(result__43723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43723__auto__;
}
break;
}
}catch (e50166){var ex__43724__auto__ = e50166;
var statearr_50170_52417 = state_50121;
(statearr_50170_52417[(2)] = ex__43724__auto__);


if(cljs.core.seq((state_50121[(4)]))){
var statearr_50172_52418 = state_50121;
(statearr_50172_52418[(1)] = cljs.core.first((state_50121[(4)])));

} else {
throw ex__43724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52424 = state_50121;
state_50121 = G__52424;
continue;
} else {
return ret_value__43722__auto__;
}
break;
}
});
cljs$core$async$state_machine__43721__auto__ = function(state_50121){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43721__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43721__auto____1.call(this,state_50121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43721__auto____0;
cljs$core$async$state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43721__auto____1;
return cljs$core$async$state_machine__43721__auto__;
})()
})();
var state__44086__auto__ = (function (){var statearr_50173 = f__44085__auto__();
(statearr_50173[(6)] = c__44084__auto___52372);

return statearr_50173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44086__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50179 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50179 = (function (f,ch,meta50180){
this.f = f;
this.ch = ch;
this.meta50180 = meta50180;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50181,meta50180__$1){
var self__ = this;
var _50181__$1 = this;
return (new cljs.core.async.t_cljs$core$async50179(self__.f,self__.ch,meta50180__$1));
}));

(cljs.core.async.t_cljs$core$async50179.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50181){
var self__ = this;
var _50181__$1 = this;
return self__.meta50180;
}));

(cljs.core.async.t_cljs$core$async50179.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50179.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async50179.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async50179.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50179.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50191 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50191 = (function (f,ch,meta50180,_,fn1,meta50192){
this.f = f;
this.ch = ch;
this.meta50180 = meta50180;
this._ = _;
this.fn1 = fn1;
this.meta50192 = meta50192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50193,meta50192__$1){
var self__ = this;
var _50193__$1 = this;
return (new cljs.core.async.t_cljs$core$async50191(self__.f,self__.ch,self__.meta50180,self__._,self__.fn1,meta50192__$1));
}));

(cljs.core.async.t_cljs$core$async50191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50193){
var self__ = this;
var _50193__$1 = this;
return self__.meta50192;
}));

(cljs.core.async.t_cljs$core$async50191.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50191.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async50191.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50191.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__50174_SHARP_){
var G__50208 = (((p1__50174_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__50174_SHARP_) : self__.f.call(null,p1__50174_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__50208) : f1.call(null,G__50208));
});
}));

(cljs.core.async.t_cljs$core$async50191.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50180","meta50180",1108416493,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async50179","cljs.core.async/t_cljs$core$async50179",1932216049,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta50192","meta50192",301776996,null)], null);
}));

(cljs.core.async.t_cljs$core$async50191.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50191");

(cljs.core.async.t_cljs$core$async50191.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async50191");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50191.
 */
cljs.core.async.__GT_t_cljs$core$async50191 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async50191(f__$1,ch__$1,meta50180__$1,___$2,fn1__$1,meta50192){
return (new cljs.core.async.t_cljs$core$async50191(f__$1,ch__$1,meta50180__$1,___$2,fn1__$1,meta50192));
});

}

return (new cljs.core.async.t_cljs$core$async50191(self__.f,self__.ch,self__.meta50180,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__50221 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__50221) : self__.f.call(null,G__50221));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async50179.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50179.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async50179.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50180","meta50180",1108416493,null)], null);
}));

(cljs.core.async.t_cljs$core$async50179.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50179.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50179");

(cljs.core.async.t_cljs$core$async50179.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async50179");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50179.
 */
cljs.core.async.__GT_t_cljs$core$async50179 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async50179(f__$1,ch__$1,meta50180){
return (new cljs.core.async.t_cljs$core$async50179(f__$1,ch__$1,meta50180));
});

}

return (new cljs.core.async.t_cljs$core$async50179(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50233 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50233 = (function (f,ch,meta50234){
this.f = f;
this.ch = ch;
this.meta50234 = meta50234;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50235,meta50234__$1){
var self__ = this;
var _50235__$1 = this;
return (new cljs.core.async.t_cljs$core$async50233(self__.f,self__.ch,meta50234__$1));
}));

(cljs.core.async.t_cljs$core$async50233.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50235){
var self__ = this;
var _50235__$1 = this;
return self__.meta50234;
}));

(cljs.core.async.t_cljs$core$async50233.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50233.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async50233.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50233.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async50233.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50233.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async50233.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50234","meta50234",-956294473,null)], null);
}));

(cljs.core.async.t_cljs$core$async50233.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50233.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50233");

(cljs.core.async.t_cljs$core$async50233.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async50233");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50233.
 */
cljs.core.async.__GT_t_cljs$core$async50233 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async50233(f__$1,ch__$1,meta50234){
return (new cljs.core.async.t_cljs$core$async50233(f__$1,ch__$1,meta50234));
});

}

return (new cljs.core.async.t_cljs$core$async50233(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50259 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50259 = (function (p,ch,meta50260){
this.p = p;
this.ch = ch;
this.meta50260 = meta50260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50261,meta50260__$1){
var self__ = this;
var _50261__$1 = this;
return (new cljs.core.async.t_cljs$core$async50259(self__.p,self__.ch,meta50260__$1));
}));

(cljs.core.async.t_cljs$core$async50259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50261){
var self__ = this;
var _50261__$1 = this;
return self__.meta50260;
}));

(cljs.core.async.t_cljs$core$async50259.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50259.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async50259.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async50259.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50259.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async50259.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50259.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async50259.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50260","meta50260",-1558936439,null)], null);
}));

(cljs.core.async.t_cljs$core$async50259.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50259");

(cljs.core.async.t_cljs$core$async50259.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async50259");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50259.
 */
cljs.core.async.__GT_t_cljs$core$async50259 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async50259(p__$1,ch__$1,meta50260){
return (new cljs.core.async.t_cljs$core$async50259(p__$1,ch__$1,meta50260));
});

}

return (new cljs.core.async.t_cljs$core$async50259(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__50336 = arguments.length;
switch (G__50336) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44084__auto___52478 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44085__auto__ = (function (){var switch__43720__auto__ = (function (state_50359){
var state_val_50360 = (state_50359[(1)]);
if((state_val_50360 === (7))){
var inst_50355 = (state_50359[(2)]);
var state_50359__$1 = state_50359;
var statearr_50366_52480 = state_50359__$1;
(statearr_50366_52480[(2)] = inst_50355);

(statearr_50366_52480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50360 === (1))){
var state_50359__$1 = state_50359;
var statearr_50367_52481 = state_50359__$1;
(statearr_50367_52481[(2)] = null);

(statearr_50367_52481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50360 === (4))){
var inst_50341 = (state_50359[(7)]);
var inst_50341__$1 = (state_50359[(2)]);
var inst_50342 = (inst_50341__$1 == null);
var state_50359__$1 = (function (){var statearr_50370 = state_50359;
(statearr_50370[(7)] = inst_50341__$1);

return statearr_50370;
})();
if(cljs.core.truth_(inst_50342)){
var statearr_50373_52484 = state_50359__$1;
(statearr_50373_52484[(1)] = (5));

} else {
var statearr_50374_52485 = state_50359__$1;
(statearr_50374_52485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50360 === (6))){
var inst_50341 = (state_50359[(7)]);
var inst_50346 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_50341) : p.call(null,inst_50341));
var state_50359__$1 = state_50359;
if(cljs.core.truth_(inst_50346)){
var statearr_50379_52493 = state_50359__$1;
(statearr_50379_52493[(1)] = (8));

} else {
var statearr_50383_52494 = state_50359__$1;
(statearr_50383_52494[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50360 === (3))){
var inst_50357 = (state_50359[(2)]);
var state_50359__$1 = state_50359;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50359__$1,inst_50357);
} else {
if((state_val_50360 === (2))){
var state_50359__$1 = state_50359;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50359__$1,(4),ch);
} else {
if((state_val_50360 === (11))){
var inst_50349 = (state_50359[(2)]);
var state_50359__$1 = state_50359;
var statearr_50389_52503 = state_50359__$1;
(statearr_50389_52503[(2)] = inst_50349);

(statearr_50389_52503[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50360 === (9))){
var state_50359__$1 = state_50359;
var statearr_50393_52506 = state_50359__$1;
(statearr_50393_52506[(2)] = null);

(statearr_50393_52506[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50360 === (5))){
var inst_50344 = cljs.core.async.close_BANG_(out);
var state_50359__$1 = state_50359;
var statearr_50394_52510 = state_50359__$1;
(statearr_50394_52510[(2)] = inst_50344);

(statearr_50394_52510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50360 === (10))){
var inst_50352 = (state_50359[(2)]);
var state_50359__$1 = (function (){var statearr_50396 = state_50359;
(statearr_50396[(8)] = inst_50352);

return statearr_50396;
})();
var statearr_50397_52511 = state_50359__$1;
(statearr_50397_52511[(2)] = null);

(statearr_50397_52511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50360 === (8))){
var inst_50341 = (state_50359[(7)]);
var state_50359__$1 = state_50359;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50359__$1,(11),out,inst_50341);
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
});
return (function() {
var cljs$core$async$state_machine__43721__auto__ = null;
var cljs$core$async$state_machine__43721__auto____0 = (function (){
var statearr_50405 = [null,null,null,null,null,null,null,null,null];
(statearr_50405[(0)] = cljs$core$async$state_machine__43721__auto__);

(statearr_50405[(1)] = (1));

return statearr_50405;
});
var cljs$core$async$state_machine__43721__auto____1 = (function (state_50359){
while(true){
var ret_value__43722__auto__ = (function (){try{while(true){
var result__43723__auto__ = switch__43720__auto__(state_50359);
if(cljs.core.keyword_identical_QMARK_(result__43723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43723__auto__;
}
break;
}
}catch (e50409){var ex__43724__auto__ = e50409;
var statearr_50411_52518 = state_50359;
(statearr_50411_52518[(2)] = ex__43724__auto__);


if(cljs.core.seq((state_50359[(4)]))){
var statearr_50413_52519 = state_50359;
(statearr_50413_52519[(1)] = cljs.core.first((state_50359[(4)])));

} else {
throw ex__43724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52522 = state_50359;
state_50359 = G__52522;
continue;
} else {
return ret_value__43722__auto__;
}
break;
}
});
cljs$core$async$state_machine__43721__auto__ = function(state_50359){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43721__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43721__auto____1.call(this,state_50359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43721__auto____0;
cljs$core$async$state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43721__auto____1;
return cljs$core$async$state_machine__43721__auto__;
})()
})();
var state__44086__auto__ = (function (){var statearr_50417 = f__44085__auto__();
(statearr_50417[(6)] = c__44084__auto___52478);

return statearr_50417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44086__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__50422 = arguments.length;
switch (G__50422) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__44084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44085__auto__ = (function (){var switch__43720__auto__ = (function (state_50486){
var state_val_50487 = (state_50486[(1)]);
if((state_val_50487 === (7))){
var inst_50482 = (state_50486[(2)]);
var state_50486__$1 = state_50486;
var statearr_50490_52526 = state_50486__$1;
(statearr_50490_52526[(2)] = inst_50482);

(statearr_50490_52526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50487 === (20))){
var inst_50451 = (state_50486[(7)]);
var inst_50463 = (state_50486[(2)]);
var inst_50464 = cljs.core.next(inst_50451);
var inst_50436 = inst_50464;
var inst_50437 = null;
var inst_50438 = (0);
var inst_50439 = (0);
var state_50486__$1 = (function (){var statearr_50491 = state_50486;
(statearr_50491[(8)] = inst_50439);

(statearr_50491[(9)] = inst_50437);

(statearr_50491[(10)] = inst_50436);

(statearr_50491[(11)] = inst_50463);

(statearr_50491[(12)] = inst_50438);

return statearr_50491;
})();
var statearr_50494_52535 = state_50486__$1;
(statearr_50494_52535[(2)] = null);

(statearr_50494_52535[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50487 === (1))){
var state_50486__$1 = state_50486;
var statearr_50496_52536 = state_50486__$1;
(statearr_50496_52536[(2)] = null);

(statearr_50496_52536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50487 === (4))){
var inst_50425 = (state_50486[(13)]);
var inst_50425__$1 = (state_50486[(2)]);
var inst_50426 = (inst_50425__$1 == null);
var state_50486__$1 = (function (){var statearr_50497 = state_50486;
(statearr_50497[(13)] = inst_50425__$1);

return statearr_50497;
})();
if(cljs.core.truth_(inst_50426)){
var statearr_50501_52537 = state_50486__$1;
(statearr_50501_52537[(1)] = (5));

} else {
var statearr_50502_52538 = state_50486__$1;
(statearr_50502_52538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50487 === (15))){
var state_50486__$1 = state_50486;
var statearr_50515_52539 = state_50486__$1;
(statearr_50515_52539[(2)] = null);

(statearr_50515_52539[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50487 === (21))){
var state_50486__$1 = state_50486;
var statearr_50518_52545 = state_50486__$1;
(statearr_50518_52545[(2)] = null);

(statearr_50518_52545[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50487 === (13))){
var inst_50439 = (state_50486[(8)]);
var inst_50437 = (state_50486[(9)]);
var inst_50436 = (state_50486[(10)]);
var inst_50438 = (state_50486[(12)]);
var inst_50446 = (state_50486[(2)]);
var inst_50448 = (inst_50439 + (1));
var tmp50505 = inst_50437;
var tmp50506 = inst_50436;
var tmp50507 = inst_50438;
var inst_50436__$1 = tmp50506;
var inst_50437__$1 = tmp50505;
var inst_50438__$1 = tmp50507;
var inst_50439__$1 = inst_50448;
var state_50486__$1 = (function (){var statearr_50519 = state_50486;
(statearr_50519[(8)] = inst_50439__$1);

(statearr_50519[(9)] = inst_50437__$1);

(statearr_50519[(10)] = inst_50436__$1);

(statearr_50519[(14)] = inst_50446);

(statearr_50519[(12)] = inst_50438__$1);

return statearr_50519;
})();
var statearr_50525_52550 = state_50486__$1;
(statearr_50525_52550[(2)] = null);

(statearr_50525_52550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50487 === (22))){
var state_50486__$1 = state_50486;
var statearr_50527_52551 = state_50486__$1;
(statearr_50527_52551[(2)] = null);

(statearr_50527_52551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50487 === (6))){
var inst_50425 = (state_50486[(13)]);
var inst_50434 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_50425) : f.call(null,inst_50425));
var inst_50435 = cljs.core.seq(inst_50434);
var inst_50436 = inst_50435;
var inst_50437 = null;
var inst_50438 = (0);
var inst_50439 = (0);
var state_50486__$1 = (function (){var statearr_50529 = state_50486;
(statearr_50529[(8)] = inst_50439);

(statearr_50529[(9)] = inst_50437);

(statearr_50529[(10)] = inst_50436);

(statearr_50529[(12)] = inst_50438);

return statearr_50529;
})();
var statearr_50530_52552 = state_50486__$1;
(statearr_50530_52552[(2)] = null);

(statearr_50530_52552[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50487 === (17))){
var inst_50451 = (state_50486[(7)]);
var inst_50456 = cljs.core.chunk_first(inst_50451);
var inst_50457 = cljs.core.chunk_rest(inst_50451);
var inst_50458 = cljs.core.count(inst_50456);
var inst_50436 = inst_50457;
var inst_50437 = inst_50456;
var inst_50438 = inst_50458;
var inst_50439 = (0);
var state_50486__$1 = (function (){var statearr_50536 = state_50486;
(statearr_50536[(8)] = inst_50439);

(statearr_50536[(9)] = inst_50437);

(statearr_50536[(10)] = inst_50436);

(statearr_50536[(12)] = inst_50438);

return statearr_50536;
})();
var statearr_50539_52557 = state_50486__$1;
(statearr_50539_52557[(2)] = null);

(statearr_50539_52557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50487 === (3))){
var inst_50484 = (state_50486[(2)]);
var state_50486__$1 = state_50486;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50486__$1,inst_50484);
} else {
if((state_val_50487 === (12))){
var inst_50472 = (state_50486[(2)]);
var state_50486__$1 = state_50486;
var statearr_50540_52558 = state_50486__$1;
(statearr_50540_52558[(2)] = inst_50472);

(statearr_50540_52558[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50487 === (2))){
var state_50486__$1 = state_50486;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50486__$1,(4),in$);
} else {
if((state_val_50487 === (23))){
var inst_50480 = (state_50486[(2)]);
var state_50486__$1 = state_50486;
var statearr_50541_52560 = state_50486__$1;
(statearr_50541_52560[(2)] = inst_50480);

(statearr_50541_52560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50487 === (19))){
var inst_50467 = (state_50486[(2)]);
var state_50486__$1 = state_50486;
var statearr_50542_52562 = state_50486__$1;
(statearr_50542_52562[(2)] = inst_50467);

(statearr_50542_52562[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50487 === (11))){
var inst_50451 = (state_50486[(7)]);
var inst_50436 = (state_50486[(10)]);
var inst_50451__$1 = cljs.core.seq(inst_50436);
var state_50486__$1 = (function (){var statearr_50544 = state_50486;
(statearr_50544[(7)] = inst_50451__$1);

return statearr_50544;
})();
if(inst_50451__$1){
var statearr_50545_52566 = state_50486__$1;
(statearr_50545_52566[(1)] = (14));

} else {
var statearr_50547_52569 = state_50486__$1;
(statearr_50547_52569[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50487 === (9))){
var inst_50474 = (state_50486[(2)]);
var inst_50475 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_50486__$1 = (function (){var statearr_50548 = state_50486;
(statearr_50548[(15)] = inst_50474);

return statearr_50548;
})();
if(cljs.core.truth_(inst_50475)){
var statearr_50549_52570 = state_50486__$1;
(statearr_50549_52570[(1)] = (21));

} else {
var statearr_50550_52571 = state_50486__$1;
(statearr_50550_52571[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50487 === (5))){
var inst_50428 = cljs.core.async.close_BANG_(out);
var state_50486__$1 = state_50486;
var statearr_50555_52573 = state_50486__$1;
(statearr_50555_52573[(2)] = inst_50428);

(statearr_50555_52573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50487 === (14))){
var inst_50451 = (state_50486[(7)]);
var inst_50453 = cljs.core.chunked_seq_QMARK_(inst_50451);
var state_50486__$1 = state_50486;
if(inst_50453){
var statearr_50559_52576 = state_50486__$1;
(statearr_50559_52576[(1)] = (17));

} else {
var statearr_50561_52577 = state_50486__$1;
(statearr_50561_52577[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50487 === (16))){
var inst_50470 = (state_50486[(2)]);
var state_50486__$1 = state_50486;
var statearr_50564_52578 = state_50486__$1;
(statearr_50564_52578[(2)] = inst_50470);

(statearr_50564_52578[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50487 === (10))){
var inst_50439 = (state_50486[(8)]);
var inst_50437 = (state_50486[(9)]);
var inst_50444 = cljs.core._nth(inst_50437,inst_50439);
var state_50486__$1 = state_50486;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50486__$1,(13),out,inst_50444);
} else {
if((state_val_50487 === (18))){
var inst_50451 = (state_50486[(7)]);
var inst_50461 = cljs.core.first(inst_50451);
var state_50486__$1 = state_50486;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50486__$1,(20),out,inst_50461);
} else {
if((state_val_50487 === (8))){
var inst_50439 = (state_50486[(8)]);
var inst_50438 = (state_50486[(12)]);
var inst_50441 = (inst_50439 < inst_50438);
var inst_50442 = inst_50441;
var state_50486__$1 = state_50486;
if(cljs.core.truth_(inst_50442)){
var statearr_50572_52592 = state_50486__$1;
(statearr_50572_52592[(1)] = (10));

} else {
var statearr_50573_52594 = state_50486__$1;
(statearr_50573_52594[(1)] = (11));

}

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__43721__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__43721__auto____0 = (function (){
var statearr_50579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50579[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43721__auto__);

(statearr_50579[(1)] = (1));

return statearr_50579;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43721__auto____1 = (function (state_50486){
while(true){
var ret_value__43722__auto__ = (function (){try{while(true){
var result__43723__auto__ = switch__43720__auto__(state_50486);
if(cljs.core.keyword_identical_QMARK_(result__43723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43723__auto__;
}
break;
}
}catch (e50583){var ex__43724__auto__ = e50583;
var statearr_50584_52606 = state_50486;
(statearr_50584_52606[(2)] = ex__43724__auto__);


if(cljs.core.seq((state_50486[(4)]))){
var statearr_50586_52608 = state_50486;
(statearr_50586_52608[(1)] = cljs.core.first((state_50486[(4)])));

} else {
throw ex__43724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52613 = state_50486;
state_50486 = G__52613;
continue;
} else {
return ret_value__43722__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43721__auto__ = function(state_50486){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43721__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43721__auto____1.call(this,state_50486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43721__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43721__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43721__auto__;
})()
})();
var state__44086__auto__ = (function (){var statearr_50587 = f__44085__auto__();
(statearr_50587[(6)] = c__44084__auto__);

return statearr_50587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44086__auto__);
}));

return c__44084__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__50590 = arguments.length;
switch (G__50590) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__50602 = arguments.length;
switch (G__50602) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__50610 = arguments.length;
switch (G__50610) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44084__auto___52624 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44085__auto__ = (function (){var switch__43720__auto__ = (function (state_50636){
var state_val_50637 = (state_50636[(1)]);
if((state_val_50637 === (7))){
var inst_50631 = (state_50636[(2)]);
var state_50636__$1 = state_50636;
var statearr_50641_52627 = state_50636__$1;
(statearr_50641_52627[(2)] = inst_50631);

(statearr_50641_52627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50637 === (1))){
var inst_50613 = null;
var state_50636__$1 = (function (){var statearr_50645 = state_50636;
(statearr_50645[(7)] = inst_50613);

return statearr_50645;
})();
var statearr_50646_52634 = state_50636__$1;
(statearr_50646_52634[(2)] = null);

(statearr_50646_52634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50637 === (4))){
var inst_50616 = (state_50636[(8)]);
var inst_50616__$1 = (state_50636[(2)]);
var inst_50617 = (inst_50616__$1 == null);
var inst_50618 = cljs.core.not(inst_50617);
var state_50636__$1 = (function (){var statearr_50652 = state_50636;
(statearr_50652[(8)] = inst_50616__$1);

return statearr_50652;
})();
if(inst_50618){
var statearr_50653_52635 = state_50636__$1;
(statearr_50653_52635[(1)] = (5));

} else {
var statearr_50655_52636 = state_50636__$1;
(statearr_50655_52636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50637 === (6))){
var state_50636__$1 = state_50636;
var statearr_50659_52637 = state_50636__$1;
(statearr_50659_52637[(2)] = null);

(statearr_50659_52637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50637 === (3))){
var inst_50633 = (state_50636[(2)]);
var inst_50634 = cljs.core.async.close_BANG_(out);
var state_50636__$1 = (function (){var statearr_50663 = state_50636;
(statearr_50663[(9)] = inst_50633);

return statearr_50663;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50636__$1,inst_50634);
} else {
if((state_val_50637 === (2))){
var state_50636__$1 = state_50636;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50636__$1,(4),ch);
} else {
if((state_val_50637 === (11))){
var inst_50616 = (state_50636[(8)]);
var inst_50625 = (state_50636[(2)]);
var inst_50613 = inst_50616;
var state_50636__$1 = (function (){var statearr_50666 = state_50636;
(statearr_50666[(10)] = inst_50625);

(statearr_50666[(7)] = inst_50613);

return statearr_50666;
})();
var statearr_50667_52642 = state_50636__$1;
(statearr_50667_52642[(2)] = null);

(statearr_50667_52642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50637 === (9))){
var inst_50616 = (state_50636[(8)]);
var state_50636__$1 = state_50636;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50636__$1,(11),out,inst_50616);
} else {
if((state_val_50637 === (5))){
var inst_50613 = (state_50636[(7)]);
var inst_50616 = (state_50636[(8)]);
var inst_50620 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50616,inst_50613);
var state_50636__$1 = state_50636;
if(inst_50620){
var statearr_50675_52648 = state_50636__$1;
(statearr_50675_52648[(1)] = (8));

} else {
var statearr_50676_52649 = state_50636__$1;
(statearr_50676_52649[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50637 === (10))){
var inst_50628 = (state_50636[(2)]);
var state_50636__$1 = state_50636;
var statearr_50678_52651 = state_50636__$1;
(statearr_50678_52651[(2)] = inst_50628);

(statearr_50678_52651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50637 === (8))){
var inst_50613 = (state_50636[(7)]);
var tmp50668 = inst_50613;
var inst_50613__$1 = tmp50668;
var state_50636__$1 = (function (){var statearr_50679 = state_50636;
(statearr_50679[(7)] = inst_50613__$1);

return statearr_50679;
})();
var statearr_50687_52654 = state_50636__$1;
(statearr_50687_52654[(2)] = null);

(statearr_50687_52654[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__43721__auto__ = null;
var cljs$core$async$state_machine__43721__auto____0 = (function (){
var statearr_50688 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50688[(0)] = cljs$core$async$state_machine__43721__auto__);

(statearr_50688[(1)] = (1));

return statearr_50688;
});
var cljs$core$async$state_machine__43721__auto____1 = (function (state_50636){
while(true){
var ret_value__43722__auto__ = (function (){try{while(true){
var result__43723__auto__ = switch__43720__auto__(state_50636);
if(cljs.core.keyword_identical_QMARK_(result__43723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43723__auto__;
}
break;
}
}catch (e50695){var ex__43724__auto__ = e50695;
var statearr_50697_52655 = state_50636;
(statearr_50697_52655[(2)] = ex__43724__auto__);


if(cljs.core.seq((state_50636[(4)]))){
var statearr_50698_52656 = state_50636;
(statearr_50698_52656[(1)] = cljs.core.first((state_50636[(4)])));

} else {
throw ex__43724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52657 = state_50636;
state_50636 = G__52657;
continue;
} else {
return ret_value__43722__auto__;
}
break;
}
});
cljs$core$async$state_machine__43721__auto__ = function(state_50636){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43721__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43721__auto____1.call(this,state_50636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43721__auto____0;
cljs$core$async$state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43721__auto____1;
return cljs$core$async$state_machine__43721__auto__;
})()
})();
var state__44086__auto__ = (function (){var statearr_50700 = f__44085__auto__();
(statearr_50700[(6)] = c__44084__auto___52624);

return statearr_50700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44086__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__50712 = arguments.length;
switch (G__50712) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44084__auto___52668 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44085__auto__ = (function (){var switch__43720__auto__ = (function (state_50760){
var state_val_50761 = (state_50760[(1)]);
if((state_val_50761 === (7))){
var inst_50756 = (state_50760[(2)]);
var state_50760__$1 = state_50760;
var statearr_50763_52670 = state_50760__$1;
(statearr_50763_52670[(2)] = inst_50756);

(statearr_50763_52670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50761 === (1))){
var inst_50723 = (new Array(n));
var inst_50724 = inst_50723;
var inst_50725 = (0);
var state_50760__$1 = (function (){var statearr_50764 = state_50760;
(statearr_50764[(7)] = inst_50725);

(statearr_50764[(8)] = inst_50724);

return statearr_50764;
})();
var statearr_50765_52674 = state_50760__$1;
(statearr_50765_52674[(2)] = null);

(statearr_50765_52674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50761 === (4))){
var inst_50728 = (state_50760[(9)]);
var inst_50728__$1 = (state_50760[(2)]);
var inst_50729 = (inst_50728__$1 == null);
var inst_50730 = cljs.core.not(inst_50729);
var state_50760__$1 = (function (){var statearr_50766 = state_50760;
(statearr_50766[(9)] = inst_50728__$1);

return statearr_50766;
})();
if(inst_50730){
var statearr_50767_52681 = state_50760__$1;
(statearr_50767_52681[(1)] = (5));

} else {
var statearr_50769_52683 = state_50760__$1;
(statearr_50769_52683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50761 === (15))){
var inst_50750 = (state_50760[(2)]);
var state_50760__$1 = state_50760;
var statearr_50770_52684 = state_50760__$1;
(statearr_50770_52684[(2)] = inst_50750);

(statearr_50770_52684[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50761 === (13))){
var state_50760__$1 = state_50760;
var statearr_50771_52686 = state_50760__$1;
(statearr_50771_52686[(2)] = null);

(statearr_50771_52686[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50761 === (6))){
var inst_50725 = (state_50760[(7)]);
var inst_50746 = (inst_50725 > (0));
var state_50760__$1 = state_50760;
if(cljs.core.truth_(inst_50746)){
var statearr_50778_52691 = state_50760__$1;
(statearr_50778_52691[(1)] = (12));

} else {
var statearr_50779_52694 = state_50760__$1;
(statearr_50779_52694[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50761 === (3))){
var inst_50758 = (state_50760[(2)]);
var state_50760__$1 = state_50760;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50760__$1,inst_50758);
} else {
if((state_val_50761 === (12))){
var inst_50724 = (state_50760[(8)]);
var inst_50748 = cljs.core.vec(inst_50724);
var state_50760__$1 = state_50760;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50760__$1,(15),out,inst_50748);
} else {
if((state_val_50761 === (2))){
var state_50760__$1 = state_50760;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50760__$1,(4),ch);
} else {
if((state_val_50761 === (11))){
var inst_50740 = (state_50760[(2)]);
var inst_50741 = (new Array(n));
var inst_50724 = inst_50741;
var inst_50725 = (0);
var state_50760__$1 = (function (){var statearr_50784 = state_50760;
(statearr_50784[(10)] = inst_50740);

(statearr_50784[(7)] = inst_50725);

(statearr_50784[(8)] = inst_50724);

return statearr_50784;
})();
var statearr_50785_52698 = state_50760__$1;
(statearr_50785_52698[(2)] = null);

(statearr_50785_52698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50761 === (9))){
var inst_50724 = (state_50760[(8)]);
var inst_50738 = cljs.core.vec(inst_50724);
var state_50760__$1 = state_50760;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50760__$1,(11),out,inst_50738);
} else {
if((state_val_50761 === (5))){
var inst_50728 = (state_50760[(9)]);
var inst_50725 = (state_50760[(7)]);
var inst_50724 = (state_50760[(8)]);
var inst_50733 = (state_50760[(11)]);
var inst_50732 = (inst_50724[inst_50725] = inst_50728);
var inst_50733__$1 = (inst_50725 + (1));
var inst_50734 = (inst_50733__$1 < n);
var state_50760__$1 = (function (){var statearr_50787 = state_50760;
(statearr_50787[(12)] = inst_50732);

(statearr_50787[(11)] = inst_50733__$1);

return statearr_50787;
})();
if(cljs.core.truth_(inst_50734)){
var statearr_50788_52710 = state_50760__$1;
(statearr_50788_52710[(1)] = (8));

} else {
var statearr_50790_52711 = state_50760__$1;
(statearr_50790_52711[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50761 === (14))){
var inst_50753 = (state_50760[(2)]);
var inst_50754 = cljs.core.async.close_BANG_(out);
var state_50760__$1 = (function (){var statearr_50793 = state_50760;
(statearr_50793[(13)] = inst_50753);

return statearr_50793;
})();
var statearr_50794_52713 = state_50760__$1;
(statearr_50794_52713[(2)] = inst_50754);

(statearr_50794_52713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50761 === (10))){
var inst_50744 = (state_50760[(2)]);
var state_50760__$1 = state_50760;
var statearr_50799_52714 = state_50760__$1;
(statearr_50799_52714[(2)] = inst_50744);

(statearr_50799_52714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50761 === (8))){
var inst_50724 = (state_50760[(8)]);
var inst_50733 = (state_50760[(11)]);
var tmp50792 = inst_50724;
var inst_50724__$1 = tmp50792;
var inst_50725 = inst_50733;
var state_50760__$1 = (function (){var statearr_50806 = state_50760;
(statearr_50806[(7)] = inst_50725);

(statearr_50806[(8)] = inst_50724__$1);

return statearr_50806;
})();
var statearr_50807_52720 = state_50760__$1;
(statearr_50807_52720[(2)] = null);

(statearr_50807_52720[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__43721__auto__ = null;
var cljs$core$async$state_machine__43721__auto____0 = (function (){
var statearr_50808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50808[(0)] = cljs$core$async$state_machine__43721__auto__);

(statearr_50808[(1)] = (1));

return statearr_50808;
});
var cljs$core$async$state_machine__43721__auto____1 = (function (state_50760){
while(true){
var ret_value__43722__auto__ = (function (){try{while(true){
var result__43723__auto__ = switch__43720__auto__(state_50760);
if(cljs.core.keyword_identical_QMARK_(result__43723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43723__auto__;
}
break;
}
}catch (e50809){var ex__43724__auto__ = e50809;
var statearr_50810_52725 = state_50760;
(statearr_50810_52725[(2)] = ex__43724__auto__);


if(cljs.core.seq((state_50760[(4)]))){
var statearr_50811_52730 = state_50760;
(statearr_50811_52730[(1)] = cljs.core.first((state_50760[(4)])));

} else {
throw ex__43724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52732 = state_50760;
state_50760 = G__52732;
continue;
} else {
return ret_value__43722__auto__;
}
break;
}
});
cljs$core$async$state_machine__43721__auto__ = function(state_50760){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43721__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43721__auto____1.call(this,state_50760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43721__auto____0;
cljs$core$async$state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43721__auto____1;
return cljs$core$async$state_machine__43721__auto__;
})()
})();
var state__44086__auto__ = (function (){var statearr_50813 = f__44085__auto__();
(statearr_50813[(6)] = c__44084__auto___52668);

return statearr_50813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44086__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__50818 = arguments.length;
switch (G__50818) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44084__auto___52747 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44085__auto__ = (function (){var switch__43720__auto__ = (function (state_50873){
var state_val_50874 = (state_50873[(1)]);
if((state_val_50874 === (7))){
var inst_50865 = (state_50873[(2)]);
var state_50873__$1 = state_50873;
var statearr_50879_52750 = state_50873__$1;
(statearr_50879_52750[(2)] = inst_50865);

(statearr_50879_52750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50874 === (1))){
var inst_50822 = [];
var inst_50823 = inst_50822;
var inst_50824 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_50873__$1 = (function (){var statearr_50882 = state_50873;
(statearr_50882[(7)] = inst_50824);

(statearr_50882[(8)] = inst_50823);

return statearr_50882;
})();
var statearr_50883_52752 = state_50873__$1;
(statearr_50883_52752[(2)] = null);

(statearr_50883_52752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50874 === (4))){
var inst_50830 = (state_50873[(9)]);
var inst_50830__$1 = (state_50873[(2)]);
var inst_50831 = (inst_50830__$1 == null);
var inst_50832 = cljs.core.not(inst_50831);
var state_50873__$1 = (function (){var statearr_50884 = state_50873;
(statearr_50884[(9)] = inst_50830__$1);

return statearr_50884;
})();
if(inst_50832){
var statearr_50885_52759 = state_50873__$1;
(statearr_50885_52759[(1)] = (5));

} else {
var statearr_50886_52760 = state_50873__$1;
(statearr_50886_52760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50874 === (15))){
var inst_50823 = (state_50873[(8)]);
var inst_50857 = cljs.core.vec(inst_50823);
var state_50873__$1 = state_50873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50873__$1,(18),out,inst_50857);
} else {
if((state_val_50874 === (13))){
var inst_50852 = (state_50873[(2)]);
var state_50873__$1 = state_50873;
var statearr_50893_52767 = state_50873__$1;
(statearr_50893_52767[(2)] = inst_50852);

(statearr_50893_52767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50874 === (6))){
var inst_50823 = (state_50873[(8)]);
var inst_50854 = inst_50823.length;
var inst_50855 = (inst_50854 > (0));
var state_50873__$1 = state_50873;
if(cljs.core.truth_(inst_50855)){
var statearr_50894_52772 = state_50873__$1;
(statearr_50894_52772[(1)] = (15));

} else {
var statearr_50895_52773 = state_50873__$1;
(statearr_50895_52773[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50874 === (17))){
var inst_50862 = (state_50873[(2)]);
var inst_50863 = cljs.core.async.close_BANG_(out);
var state_50873__$1 = (function (){var statearr_50896 = state_50873;
(statearr_50896[(10)] = inst_50862);

return statearr_50896;
})();
var statearr_50897_52780 = state_50873__$1;
(statearr_50897_52780[(2)] = inst_50863);

(statearr_50897_52780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50874 === (3))){
var inst_50867 = (state_50873[(2)]);
var state_50873__$1 = state_50873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50873__$1,inst_50867);
} else {
if((state_val_50874 === (12))){
var inst_50823 = (state_50873[(8)]);
var inst_50845 = cljs.core.vec(inst_50823);
var state_50873__$1 = state_50873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50873__$1,(14),out,inst_50845);
} else {
if((state_val_50874 === (2))){
var state_50873__$1 = state_50873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50873__$1,(4),ch);
} else {
if((state_val_50874 === (11))){
var inst_50830 = (state_50873[(9)]);
var inst_50823 = (state_50873[(8)]);
var inst_50834 = (state_50873[(11)]);
var inst_50842 = inst_50823.push(inst_50830);
var tmp50902 = inst_50823;
var inst_50823__$1 = tmp50902;
var inst_50824 = inst_50834;
var state_50873__$1 = (function (){var statearr_50903 = state_50873;
(statearr_50903[(12)] = inst_50842);

(statearr_50903[(7)] = inst_50824);

(statearr_50903[(8)] = inst_50823__$1);

return statearr_50903;
})();
var statearr_50914_52791 = state_50873__$1;
(statearr_50914_52791[(2)] = null);

(statearr_50914_52791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50874 === (9))){
var inst_50824 = (state_50873[(7)]);
var inst_50838 = cljs.core.keyword_identical_QMARK_(inst_50824,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_50873__$1 = state_50873;
var statearr_50915_52799 = state_50873__$1;
(statearr_50915_52799[(2)] = inst_50838);

(statearr_50915_52799[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50874 === (5))){
var inst_50824 = (state_50873[(7)]);
var inst_50830 = (state_50873[(9)]);
var inst_50834 = (state_50873[(11)]);
var inst_50835 = (state_50873[(13)]);
var inst_50834__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_50830) : f.call(null,inst_50830));
var inst_50835__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50834__$1,inst_50824);
var state_50873__$1 = (function (){var statearr_50917 = state_50873;
(statearr_50917[(11)] = inst_50834__$1);

(statearr_50917[(13)] = inst_50835__$1);

return statearr_50917;
})();
if(inst_50835__$1){
var statearr_50918_52805 = state_50873__$1;
(statearr_50918_52805[(1)] = (8));

} else {
var statearr_50919_52806 = state_50873__$1;
(statearr_50919_52806[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50874 === (14))){
var inst_50830 = (state_50873[(9)]);
var inst_50834 = (state_50873[(11)]);
var inst_50847 = (state_50873[(2)]);
var inst_50848 = [];
var inst_50849 = inst_50848.push(inst_50830);
var inst_50823 = inst_50848;
var inst_50824 = inst_50834;
var state_50873__$1 = (function (){var statearr_50924 = state_50873;
(statearr_50924[(14)] = inst_50849);

(statearr_50924[(7)] = inst_50824);

(statearr_50924[(15)] = inst_50847);

(statearr_50924[(8)] = inst_50823);

return statearr_50924;
})();
var statearr_50927_52812 = state_50873__$1;
(statearr_50927_52812[(2)] = null);

(statearr_50927_52812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50874 === (16))){
var state_50873__$1 = state_50873;
var statearr_50929_52818 = state_50873__$1;
(statearr_50929_52818[(2)] = null);

(statearr_50929_52818[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50874 === (10))){
var inst_50840 = (state_50873[(2)]);
var state_50873__$1 = state_50873;
if(cljs.core.truth_(inst_50840)){
var statearr_50936_52829 = state_50873__$1;
(statearr_50936_52829[(1)] = (11));

} else {
var statearr_50942_52830 = state_50873__$1;
(statearr_50942_52830[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50874 === (18))){
var inst_50859 = (state_50873[(2)]);
var state_50873__$1 = state_50873;
var statearr_50948_52835 = state_50873__$1;
(statearr_50948_52835[(2)] = inst_50859);

(statearr_50948_52835[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50874 === (8))){
var inst_50835 = (state_50873[(13)]);
var state_50873__$1 = state_50873;
var statearr_50954_52844 = state_50873__$1;
(statearr_50954_52844[(2)] = inst_50835);

(statearr_50954_52844[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__43721__auto__ = null;
var cljs$core$async$state_machine__43721__auto____0 = (function (){
var statearr_50960 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50960[(0)] = cljs$core$async$state_machine__43721__auto__);

(statearr_50960[(1)] = (1));

return statearr_50960;
});
var cljs$core$async$state_machine__43721__auto____1 = (function (state_50873){
while(true){
var ret_value__43722__auto__ = (function (){try{while(true){
var result__43723__auto__ = switch__43720__auto__(state_50873);
if(cljs.core.keyword_identical_QMARK_(result__43723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43723__auto__;
}
break;
}
}catch (e50970){var ex__43724__auto__ = e50970;
var statearr_50971_52858 = state_50873;
(statearr_50971_52858[(2)] = ex__43724__auto__);


if(cljs.core.seq((state_50873[(4)]))){
var statearr_50973_52860 = state_50873;
(statearr_50973_52860[(1)] = cljs.core.first((state_50873[(4)])));

} else {
throw ex__43724__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43722__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52865 = state_50873;
state_50873 = G__52865;
continue;
} else {
return ret_value__43722__auto__;
}
break;
}
});
cljs$core$async$state_machine__43721__auto__ = function(state_50873){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43721__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43721__auto____1.call(this,state_50873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43721__auto____0;
cljs$core$async$state_machine__43721__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43721__auto____1;
return cljs$core$async$state_machine__43721__auto__;
})()
})();
var state__44086__auto__ = (function (){var statearr_50978 = f__44085__auto__();
(statearr_50978[(6)] = c__44084__auto___52747);

return statearr_50978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44086__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
