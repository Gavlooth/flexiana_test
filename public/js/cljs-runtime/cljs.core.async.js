goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__45675 = arguments.length;
switch (G__45675) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45678 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45678 = (function (f,blockable,meta45679){
this.f = f;
this.blockable = blockable;
this.meta45679 = meta45679;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45680,meta45679__$1){
var self__ = this;
var _45680__$1 = this;
return (new cljs.core.async.t_cljs$core$async45678(self__.f,self__.blockable,meta45679__$1));
}));

(cljs.core.async.t_cljs$core$async45678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45680){
var self__ = this;
var _45680__$1 = this;
return self__.meta45679;
}));

(cljs.core.async.t_cljs$core$async45678.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45678.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45678.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async45678.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async45678.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta45679","meta45679",-1881443642,null)], null);
}));

(cljs.core.async.t_cljs$core$async45678.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45678.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45678");

(cljs.core.async.t_cljs$core$async45678.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async45678");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45678.
 */
cljs.core.async.__GT_t_cljs$core$async45678 = (function cljs$core$async$__GT_t_cljs$core$async45678(f__$1,blockable__$1,meta45679){
return (new cljs.core.async.t_cljs$core$async45678(f__$1,blockable__$1,meta45679));
});

}

return (new cljs.core.async.t_cljs$core$async45678(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__45699 = arguments.length;
switch (G__45699) {
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
var G__45708 = arguments.length;
switch (G__45708) {
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
var G__45719 = arguments.length;
switch (G__45719) {
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
var val_49261 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49261) : fn1.call(null,val_49261));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49261) : fn1.call(null,val_49261));
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
var G__45723 = arguments.length;
switch (G__45723) {
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
var n__4741__auto___49302 = n;
var x_49303 = (0);
while(true){
if((x_49303 < n__4741__auto___49302)){
(a[x_49303] = x_49303);

var G__49304 = (x_49303 + (1));
x_49303 = G__49304;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45734 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45734 = (function (flag,meta45735){
this.flag = flag;
this.meta45735 = meta45735;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45736,meta45735__$1){
var self__ = this;
var _45736__$1 = this;
return (new cljs.core.async.t_cljs$core$async45734(self__.flag,meta45735__$1));
}));

(cljs.core.async.t_cljs$core$async45734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45736){
var self__ = this;
var _45736__$1 = this;
return self__.meta45735;
}));

(cljs.core.async.t_cljs$core$async45734.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45734.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45734.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45734.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async45734.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta45735","meta45735",38595715,null)], null);
}));

(cljs.core.async.t_cljs$core$async45734.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45734.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45734");

(cljs.core.async.t_cljs$core$async45734.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async45734");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45734.
 */
cljs.core.async.__GT_t_cljs$core$async45734 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async45734(flag__$1,meta45735){
return (new cljs.core.async.t_cljs$core$async45734(flag__$1,meta45735));
});

}

return (new cljs.core.async.t_cljs$core$async45734(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45744 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45744 = (function (flag,cb,meta45745){
this.flag = flag;
this.cb = cb;
this.meta45745 = meta45745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45746,meta45745__$1){
var self__ = this;
var _45746__$1 = this;
return (new cljs.core.async.t_cljs$core$async45744(self__.flag,self__.cb,meta45745__$1));
}));

(cljs.core.async.t_cljs$core$async45744.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45746){
var self__ = this;
var _45746__$1 = this;
return self__.meta45745;
}));

(cljs.core.async.t_cljs$core$async45744.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45744.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45744.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45744.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async45744.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta45745","meta45745",-1101915518,null)], null);
}));

(cljs.core.async.t_cljs$core$async45744.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45744.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45744");

(cljs.core.async.t_cljs$core$async45744.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async45744");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45744.
 */
cljs.core.async.__GT_t_cljs$core$async45744 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async45744(flag__$1,cb__$1,meta45745){
return (new cljs.core.async.t_cljs$core$async45744(flag__$1,cb__$1,meta45745));
});

}

return (new cljs.core.async.t_cljs$core$async45744(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__45780_SHARP_){
var G__45799 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45780_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45799) : fret.call(null,G__45799));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45781_SHARP_){
var G__45802 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45781_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45802) : fret.call(null,G__45802));
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
var G__49370 = (i + (1));
i = G__49370;
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
var len__4864__auto___49382 = arguments.length;
var i__4865__auto___49383 = (0);
while(true){
if((i__4865__auto___49383 < len__4864__auto___49382)){
args__4870__auto__.push((arguments[i__4865__auto___49383]));

var G__49390 = (i__4865__auto___49383 + (1));
i__4865__auto___49383 = G__49390;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__45824){
var map__45826 = p__45824;
var map__45826__$1 = cljs.core.__destructure_map(map__45826);
var opts = map__45826__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq45816){
var G__45817 = cljs.core.first(seq45816);
var seq45816__$1 = cljs.core.next(seq45816);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45817,seq45816__$1);
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
var G__45850 = arguments.length;
switch (G__45850) {
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
var c__45575__auto___49412 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45576__auto__ = (function (){var switch__44647__auto__ = (function (state_45961){
var state_val_45963 = (state_45961[(1)]);
if((state_val_45963 === (7))){
var inst_45952 = (state_45961[(2)]);
var state_45961__$1 = state_45961;
var statearr_45979_49419 = state_45961__$1;
(statearr_45979_49419[(2)] = inst_45952);

(statearr_45979_49419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (1))){
var state_45961__$1 = state_45961;
var statearr_45982_49420 = state_45961__$1;
(statearr_45982_49420[(2)] = null);

(statearr_45982_49420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (4))){
var inst_45915 = (state_45961[(7)]);
var inst_45915__$1 = (state_45961[(2)]);
var inst_45924 = (inst_45915__$1 == null);
var state_45961__$1 = (function (){var statearr_45985 = state_45961;
(statearr_45985[(7)] = inst_45915__$1);

return statearr_45985;
})();
if(cljs.core.truth_(inst_45924)){
var statearr_45988_49425 = state_45961__$1;
(statearr_45988_49425[(1)] = (5));

} else {
var statearr_45990_49427 = state_45961__$1;
(statearr_45990_49427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (13))){
var state_45961__$1 = state_45961;
var statearr_45996_49428 = state_45961__$1;
(statearr_45996_49428[(2)] = null);

(statearr_45996_49428[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (6))){
var inst_45915 = (state_45961[(7)]);
var state_45961__$1 = state_45961;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45961__$1,(11),to,inst_45915);
} else {
if((state_val_45963 === (3))){
var inst_45955 = (state_45961[(2)]);
var state_45961__$1 = state_45961;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45961__$1,inst_45955);
} else {
if((state_val_45963 === (12))){
var state_45961__$1 = state_45961;
var statearr_46006_49437 = state_45961__$1;
(statearr_46006_49437[(2)] = null);

(statearr_46006_49437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (2))){
var state_45961__$1 = state_45961;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45961__$1,(4),from);
} else {
if((state_val_45963 === (11))){
var inst_45939 = (state_45961[(2)]);
var state_45961__$1 = state_45961;
if(cljs.core.truth_(inst_45939)){
var statearr_46015_49438 = state_45961__$1;
(statearr_46015_49438[(1)] = (12));

} else {
var statearr_46018_49439 = state_45961__$1;
(statearr_46018_49439[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (9))){
var state_45961__$1 = state_45961;
var statearr_46020_49440 = state_45961__$1;
(statearr_46020_49440[(2)] = null);

(statearr_46020_49440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (5))){
var state_45961__$1 = state_45961;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46025_49441 = state_45961__$1;
(statearr_46025_49441[(1)] = (8));

} else {
var statearr_46028_49442 = state_45961__$1;
(statearr_46028_49442[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (14))){
var inst_45950 = (state_45961[(2)]);
var state_45961__$1 = state_45961;
var statearr_46032_49443 = state_45961__$1;
(statearr_46032_49443[(2)] = inst_45950);

(statearr_46032_49443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (10))){
var inst_45936 = (state_45961[(2)]);
var state_45961__$1 = state_45961;
var statearr_46037_49444 = state_45961__$1;
(statearr_46037_49444[(2)] = inst_45936);

(statearr_46037_49444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45963 === (8))){
var inst_45931 = cljs.core.async.close_BANG_(to);
var state_45961__$1 = state_45961;
var statearr_46041_49445 = state_45961__$1;
(statearr_46041_49445[(2)] = inst_45931);

(statearr_46041_49445[(1)] = (10));


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
var cljs$core$async$state_machine__44648__auto__ = null;
var cljs$core$async$state_machine__44648__auto____0 = (function (){
var statearr_46050 = [null,null,null,null,null,null,null,null];
(statearr_46050[(0)] = cljs$core$async$state_machine__44648__auto__);

(statearr_46050[(1)] = (1));

return statearr_46050;
});
var cljs$core$async$state_machine__44648__auto____1 = (function (state_45961){
while(true){
var ret_value__44649__auto__ = (function (){try{while(true){
var result__44650__auto__ = switch__44647__auto__(state_45961);
if(cljs.core.keyword_identical_QMARK_(result__44650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44650__auto__;
}
break;
}
}catch (e46056){var ex__44651__auto__ = e46056;
var statearr_46057_49449 = state_45961;
(statearr_46057_49449[(2)] = ex__44651__auto__);


if(cljs.core.seq((state_45961[(4)]))){
var statearr_46058_49451 = state_45961;
(statearr_46058_49451[(1)] = cljs.core.first((state_45961[(4)])));

} else {
throw ex__44651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49452 = state_45961;
state_45961 = G__49452;
continue;
} else {
return ret_value__44649__auto__;
}
break;
}
});
cljs$core$async$state_machine__44648__auto__ = function(state_45961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44648__auto____1.call(this,state_45961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44648__auto____0;
cljs$core$async$state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44648__auto____1;
return cljs$core$async$state_machine__44648__auto__;
})()
})();
var state__45577__auto__ = (function (){var statearr_46062 = f__45576__auto__();
(statearr_46062[(6)] = c__45575__auto___49412);

return statearr_46062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45577__auto__);
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
var process = (function (p__46076){
var vec__46077 = p__46076;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46077,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46077,(1),null);
var job = vec__46077;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__45575__auto___49453 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45576__auto__ = (function (){var switch__44647__auto__ = (function (state_46087){
var state_val_46088 = (state_46087[(1)]);
if((state_val_46088 === (1))){
var state_46087__$1 = state_46087;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46087__$1,(2),res,v);
} else {
if((state_val_46088 === (2))){
var inst_46084 = (state_46087[(2)]);
var inst_46085 = cljs.core.async.close_BANG_(res);
var state_46087__$1 = (function (){var statearr_46098 = state_46087;
(statearr_46098[(7)] = inst_46084);

return statearr_46098;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46087__$1,inst_46085);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44648__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44648__auto____0 = (function (){
var statearr_46103 = [null,null,null,null,null,null,null,null];
(statearr_46103[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44648__auto__);

(statearr_46103[(1)] = (1));

return statearr_46103;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44648__auto____1 = (function (state_46087){
while(true){
var ret_value__44649__auto__ = (function (){try{while(true){
var result__44650__auto__ = switch__44647__auto__(state_46087);
if(cljs.core.keyword_identical_QMARK_(result__44650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44650__auto__;
}
break;
}
}catch (e46104){var ex__44651__auto__ = e46104;
var statearr_46107_49456 = state_46087;
(statearr_46107_49456[(2)] = ex__44651__auto__);


if(cljs.core.seq((state_46087[(4)]))){
var statearr_46109_49457 = state_46087;
(statearr_46109_49457[(1)] = cljs.core.first((state_46087[(4)])));

} else {
throw ex__44651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49462 = state_46087;
state_46087 = G__49462;
continue;
} else {
return ret_value__44649__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44648__auto__ = function(state_46087){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44648__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44648__auto____1.call(this,state_46087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44648__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44648__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44648__auto__;
})()
})();
var state__45577__auto__ = (function (){var statearr_46112 = f__45576__auto__();
(statearr_46112[(6)] = c__45575__auto___49453);

return statearr_46112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45577__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__46117){
var vec__46118 = p__46117;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46118,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46118,(1),null);
var job = vec__46118;
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
var n__4741__auto___49471 = n;
var __49472 = (0);
while(true){
if((__49472 < n__4741__auto___49471)){
var G__46124_49473 = type;
var G__46124_49474__$1 = (((G__46124_49473 instanceof cljs.core.Keyword))?G__46124_49473.fqn:null);
switch (G__46124_49474__$1) {
case "compute":
var c__45575__auto___49476 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49472,c__45575__auto___49476,G__46124_49473,G__46124_49474__$1,n__4741__auto___49471,jobs,results,process,async){
return (function (){
var f__45576__auto__ = (function (){var switch__44647__auto__ = ((function (__49472,c__45575__auto___49476,G__46124_49473,G__46124_49474__$1,n__4741__auto___49471,jobs,results,process,async){
return (function (state_46144){
var state_val_46145 = (state_46144[(1)]);
if((state_val_46145 === (1))){
var state_46144__$1 = state_46144;
var statearr_46153_49477 = state_46144__$1;
(statearr_46153_49477[(2)] = null);

(statearr_46153_49477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46145 === (2))){
var state_46144__$1 = state_46144;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46144__$1,(4),jobs);
} else {
if((state_val_46145 === (3))){
var inst_46141 = (state_46144[(2)]);
var state_46144__$1 = state_46144;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46144__$1,inst_46141);
} else {
if((state_val_46145 === (4))){
var inst_46128 = (state_46144[(2)]);
var inst_46131 = process(inst_46128);
var state_46144__$1 = state_46144;
if(cljs.core.truth_(inst_46131)){
var statearr_46161_49489 = state_46144__$1;
(statearr_46161_49489[(1)] = (5));

} else {
var statearr_46162_49491 = state_46144__$1;
(statearr_46162_49491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46145 === (5))){
var state_46144__$1 = state_46144;
var statearr_46164_49493 = state_46144__$1;
(statearr_46164_49493[(2)] = null);

(statearr_46164_49493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46145 === (6))){
var state_46144__$1 = state_46144;
var statearr_46166_49498 = state_46144__$1;
(statearr_46166_49498[(2)] = null);

(statearr_46166_49498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46145 === (7))){
var inst_46139 = (state_46144[(2)]);
var state_46144__$1 = state_46144;
var statearr_46169_49499 = state_46144__$1;
(statearr_46169_49499[(2)] = inst_46139);

(statearr_46169_49499[(1)] = (3));


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
});})(__49472,c__45575__auto___49476,G__46124_49473,G__46124_49474__$1,n__4741__auto___49471,jobs,results,process,async))
;
return ((function (__49472,switch__44647__auto__,c__45575__auto___49476,G__46124_49473,G__46124_49474__$1,n__4741__auto___49471,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44648__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44648__auto____0 = (function (){
var statearr_46171 = [null,null,null,null,null,null,null];
(statearr_46171[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44648__auto__);

(statearr_46171[(1)] = (1));

return statearr_46171;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44648__auto____1 = (function (state_46144){
while(true){
var ret_value__44649__auto__ = (function (){try{while(true){
var result__44650__auto__ = switch__44647__auto__(state_46144);
if(cljs.core.keyword_identical_QMARK_(result__44650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44650__auto__;
}
break;
}
}catch (e46174){var ex__44651__auto__ = e46174;
var statearr_46176_49501 = state_46144;
(statearr_46176_49501[(2)] = ex__44651__auto__);


if(cljs.core.seq((state_46144[(4)]))){
var statearr_46177_49502 = state_46144;
(statearr_46177_49502[(1)] = cljs.core.first((state_46144[(4)])));

} else {
throw ex__44651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49503 = state_46144;
state_46144 = G__49503;
continue;
} else {
return ret_value__44649__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44648__auto__ = function(state_46144){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44648__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44648__auto____1.call(this,state_46144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44648__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44648__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44648__auto__;
})()
;})(__49472,switch__44647__auto__,c__45575__auto___49476,G__46124_49473,G__46124_49474__$1,n__4741__auto___49471,jobs,results,process,async))
})();
var state__45577__auto__ = (function (){var statearr_46179 = f__45576__auto__();
(statearr_46179[(6)] = c__45575__auto___49476);

return statearr_46179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45577__auto__);
});})(__49472,c__45575__auto___49476,G__46124_49473,G__46124_49474__$1,n__4741__auto___49471,jobs,results,process,async))
);


break;
case "async":
var c__45575__auto___49508 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49472,c__45575__auto___49508,G__46124_49473,G__46124_49474__$1,n__4741__auto___49471,jobs,results,process,async){
return (function (){
var f__45576__auto__ = (function (){var switch__44647__auto__ = ((function (__49472,c__45575__auto___49508,G__46124_49473,G__46124_49474__$1,n__4741__auto___49471,jobs,results,process,async){
return (function (state_46196){
var state_val_46197 = (state_46196[(1)]);
if((state_val_46197 === (1))){
var state_46196__$1 = state_46196;
var statearr_46205_49512 = state_46196__$1;
(statearr_46205_49512[(2)] = null);

(statearr_46205_49512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46197 === (2))){
var state_46196__$1 = state_46196;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46196__$1,(4),jobs);
} else {
if((state_val_46197 === (3))){
var inst_46194 = (state_46196[(2)]);
var state_46196__$1 = state_46196;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46196__$1,inst_46194);
} else {
if((state_val_46197 === (4))){
var inst_46185 = (state_46196[(2)]);
var inst_46186 = async(inst_46185);
var state_46196__$1 = state_46196;
if(cljs.core.truth_(inst_46186)){
var statearr_46209_49517 = state_46196__$1;
(statearr_46209_49517[(1)] = (5));

} else {
var statearr_46211_49518 = state_46196__$1;
(statearr_46211_49518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46197 === (5))){
var state_46196__$1 = state_46196;
var statearr_46214_49519 = state_46196__$1;
(statearr_46214_49519[(2)] = null);

(statearr_46214_49519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46197 === (6))){
var state_46196__$1 = state_46196;
var statearr_46216_49520 = state_46196__$1;
(statearr_46216_49520[(2)] = null);

(statearr_46216_49520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46197 === (7))){
var inst_46192 = (state_46196[(2)]);
var state_46196__$1 = state_46196;
var statearr_46220_49524 = state_46196__$1;
(statearr_46220_49524[(2)] = inst_46192);

(statearr_46220_49524[(1)] = (3));


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
});})(__49472,c__45575__auto___49508,G__46124_49473,G__46124_49474__$1,n__4741__auto___49471,jobs,results,process,async))
;
return ((function (__49472,switch__44647__auto__,c__45575__auto___49508,G__46124_49473,G__46124_49474__$1,n__4741__auto___49471,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44648__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44648__auto____0 = (function (){
var statearr_46222 = [null,null,null,null,null,null,null];
(statearr_46222[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44648__auto__);

(statearr_46222[(1)] = (1));

return statearr_46222;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44648__auto____1 = (function (state_46196){
while(true){
var ret_value__44649__auto__ = (function (){try{while(true){
var result__44650__auto__ = switch__44647__auto__(state_46196);
if(cljs.core.keyword_identical_QMARK_(result__44650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44650__auto__;
}
break;
}
}catch (e46227){var ex__44651__auto__ = e46227;
var statearr_46229_49532 = state_46196;
(statearr_46229_49532[(2)] = ex__44651__auto__);


if(cljs.core.seq((state_46196[(4)]))){
var statearr_46232_49533 = state_46196;
(statearr_46232_49533[(1)] = cljs.core.first((state_46196[(4)])));

} else {
throw ex__44651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49536 = state_46196;
state_46196 = G__49536;
continue;
} else {
return ret_value__44649__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44648__auto__ = function(state_46196){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44648__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44648__auto____1.call(this,state_46196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44648__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44648__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44648__auto__;
})()
;})(__49472,switch__44647__auto__,c__45575__auto___49508,G__46124_49473,G__46124_49474__$1,n__4741__auto___49471,jobs,results,process,async))
})();
var state__45577__auto__ = (function (){var statearr_46242 = f__45576__auto__();
(statearr_46242[(6)] = c__45575__auto___49508);

return statearr_46242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45577__auto__);
});})(__49472,c__45575__auto___49508,G__46124_49473,G__46124_49474__$1,n__4741__auto___49471,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46124_49474__$1)].join('')));

}

var G__49538 = (__49472 + (1));
__49472 = G__49538;
continue;
} else {
}
break;
}

var c__45575__auto___49539 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45576__auto__ = (function (){var switch__44647__auto__ = (function (state_46279){
var state_val_46280 = (state_46279[(1)]);
if((state_val_46280 === (7))){
var inst_46272 = (state_46279[(2)]);
var state_46279__$1 = state_46279;
var statearr_46293_49540 = state_46279__$1;
(statearr_46293_49540[(2)] = inst_46272);

(statearr_46293_49540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46280 === (1))){
var state_46279__$1 = state_46279;
var statearr_46295_49541 = state_46279__$1;
(statearr_46295_49541[(2)] = null);

(statearr_46295_49541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46280 === (4))){
var inst_46249 = (state_46279[(7)]);
var inst_46249__$1 = (state_46279[(2)]);
var inst_46250 = (inst_46249__$1 == null);
var state_46279__$1 = (function (){var statearr_46299 = state_46279;
(statearr_46299[(7)] = inst_46249__$1);

return statearr_46299;
})();
if(cljs.core.truth_(inst_46250)){
var statearr_46306_49542 = state_46279__$1;
(statearr_46306_49542[(1)] = (5));

} else {
var statearr_46307_49543 = state_46279__$1;
(statearr_46307_49543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46280 === (6))){
var inst_46249 = (state_46279[(7)]);
var inst_46254 = (state_46279[(8)]);
var inst_46254__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_46256 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46260 = [inst_46249,inst_46254__$1];
var inst_46264 = (new cljs.core.PersistentVector(null,2,(5),inst_46256,inst_46260,null));
var state_46279__$1 = (function (){var statearr_46310 = state_46279;
(statearr_46310[(8)] = inst_46254__$1);

return statearr_46310;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46279__$1,(8),jobs,inst_46264);
} else {
if((state_val_46280 === (3))){
var inst_46274 = (state_46279[(2)]);
var state_46279__$1 = state_46279;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46279__$1,inst_46274);
} else {
if((state_val_46280 === (2))){
var state_46279__$1 = state_46279;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46279__$1,(4),from);
} else {
if((state_val_46280 === (9))){
var inst_46268 = (state_46279[(2)]);
var state_46279__$1 = (function (){var statearr_46325 = state_46279;
(statearr_46325[(9)] = inst_46268);

return statearr_46325;
})();
var statearr_46328_49556 = state_46279__$1;
(statearr_46328_49556[(2)] = null);

(statearr_46328_49556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46280 === (5))){
var inst_46252 = cljs.core.async.close_BANG_(jobs);
var state_46279__$1 = state_46279;
var statearr_46330_49557 = state_46279__$1;
(statearr_46330_49557[(2)] = inst_46252);

(statearr_46330_49557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46280 === (8))){
var inst_46254 = (state_46279[(8)]);
var inst_46266 = (state_46279[(2)]);
var state_46279__$1 = (function (){var statearr_46331 = state_46279;
(statearr_46331[(10)] = inst_46266);

return statearr_46331;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46279__$1,(9),results,inst_46254);
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
var cljs$core$async$pipeline_STAR__$_state_machine__44648__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44648__auto____0 = (function (){
var statearr_46339 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46339[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44648__auto__);

(statearr_46339[(1)] = (1));

return statearr_46339;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44648__auto____1 = (function (state_46279){
while(true){
var ret_value__44649__auto__ = (function (){try{while(true){
var result__44650__auto__ = switch__44647__auto__(state_46279);
if(cljs.core.keyword_identical_QMARK_(result__44650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44650__auto__;
}
break;
}
}catch (e46341){var ex__44651__auto__ = e46341;
var statearr_46342_49562 = state_46279;
(statearr_46342_49562[(2)] = ex__44651__auto__);


if(cljs.core.seq((state_46279[(4)]))){
var statearr_46343_49573 = state_46279;
(statearr_46343_49573[(1)] = cljs.core.first((state_46279[(4)])));

} else {
throw ex__44651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49578 = state_46279;
state_46279 = G__49578;
continue;
} else {
return ret_value__44649__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44648__auto__ = function(state_46279){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44648__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44648__auto____1.call(this,state_46279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44648__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44648__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44648__auto__;
})()
})();
var state__45577__auto__ = (function (){var statearr_46344 = f__45576__auto__();
(statearr_46344[(6)] = c__45575__auto___49539);

return statearr_46344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45577__auto__);
}));


var c__45575__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45576__auto__ = (function (){var switch__44647__auto__ = (function (state_46397){
var state_val_46398 = (state_46397[(1)]);
if((state_val_46398 === (7))){
var inst_46392 = (state_46397[(2)]);
var state_46397__$1 = state_46397;
var statearr_46406_49584 = state_46397__$1;
(statearr_46406_49584[(2)] = inst_46392);

(statearr_46406_49584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46398 === (20))){
var state_46397__$1 = state_46397;
var statearr_46407_49587 = state_46397__$1;
(statearr_46407_49587[(2)] = null);

(statearr_46407_49587[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46398 === (1))){
var state_46397__$1 = state_46397;
var statearr_46412_49591 = state_46397__$1;
(statearr_46412_49591[(2)] = null);

(statearr_46412_49591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46398 === (4))){
var inst_46347 = (state_46397[(7)]);
var inst_46347__$1 = (state_46397[(2)]);
var inst_46348 = (inst_46347__$1 == null);
var state_46397__$1 = (function (){var statearr_46416 = state_46397;
(statearr_46416[(7)] = inst_46347__$1);

return statearr_46416;
})();
if(cljs.core.truth_(inst_46348)){
var statearr_46417_49594 = state_46397__$1;
(statearr_46417_49594[(1)] = (5));

} else {
var statearr_46418_49598 = state_46397__$1;
(statearr_46418_49598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46398 === (15))){
var inst_46373 = (state_46397[(8)]);
var state_46397__$1 = state_46397;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46397__$1,(18),to,inst_46373);
} else {
if((state_val_46398 === (21))){
var inst_46387 = (state_46397[(2)]);
var state_46397__$1 = state_46397;
var statearr_46423_49599 = state_46397__$1;
(statearr_46423_49599[(2)] = inst_46387);

(statearr_46423_49599[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46398 === (13))){
var inst_46389 = (state_46397[(2)]);
var state_46397__$1 = (function (){var statearr_46425 = state_46397;
(statearr_46425[(9)] = inst_46389);

return statearr_46425;
})();
var statearr_46426_49603 = state_46397__$1;
(statearr_46426_49603[(2)] = null);

(statearr_46426_49603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46398 === (6))){
var inst_46347 = (state_46397[(7)]);
var state_46397__$1 = state_46397;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46397__$1,(11),inst_46347);
} else {
if((state_val_46398 === (17))){
var inst_46382 = (state_46397[(2)]);
var state_46397__$1 = state_46397;
if(cljs.core.truth_(inst_46382)){
var statearr_46436_49609 = state_46397__$1;
(statearr_46436_49609[(1)] = (19));

} else {
var statearr_46437_49610 = state_46397__$1;
(statearr_46437_49610[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46398 === (3))){
var inst_46394 = (state_46397[(2)]);
var state_46397__$1 = state_46397;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46397__$1,inst_46394);
} else {
if((state_val_46398 === (12))){
var inst_46361 = (state_46397[(10)]);
var state_46397__$1 = state_46397;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46397__$1,(14),inst_46361);
} else {
if((state_val_46398 === (2))){
var state_46397__$1 = state_46397;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46397__$1,(4),results);
} else {
if((state_val_46398 === (19))){
var state_46397__$1 = state_46397;
var statearr_46442_49617 = state_46397__$1;
(statearr_46442_49617[(2)] = null);

(statearr_46442_49617[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46398 === (11))){
var inst_46361 = (state_46397[(2)]);
var state_46397__$1 = (function (){var statearr_46447 = state_46397;
(statearr_46447[(10)] = inst_46361);

return statearr_46447;
})();
var statearr_46449_49619 = state_46397__$1;
(statearr_46449_49619[(2)] = null);

(statearr_46449_49619[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46398 === (9))){
var state_46397__$1 = state_46397;
var statearr_46456_49620 = state_46397__$1;
(statearr_46456_49620[(2)] = null);

(statearr_46456_49620[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46398 === (5))){
var state_46397__$1 = state_46397;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46457_49626 = state_46397__$1;
(statearr_46457_49626[(1)] = (8));

} else {
var statearr_46458_49627 = state_46397__$1;
(statearr_46458_49627[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46398 === (14))){
var inst_46373 = (state_46397[(8)]);
var inst_46376 = (state_46397[(11)]);
var inst_46373__$1 = (state_46397[(2)]);
var inst_46375 = (inst_46373__$1 == null);
var inst_46376__$1 = cljs.core.not(inst_46375);
var state_46397__$1 = (function (){var statearr_46461 = state_46397;
(statearr_46461[(8)] = inst_46373__$1);

(statearr_46461[(11)] = inst_46376__$1);

return statearr_46461;
})();
if(inst_46376__$1){
var statearr_46465_49634 = state_46397__$1;
(statearr_46465_49634[(1)] = (15));

} else {
var statearr_46466_49637 = state_46397__$1;
(statearr_46466_49637[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46398 === (16))){
var inst_46376 = (state_46397[(11)]);
var state_46397__$1 = state_46397;
var statearr_46472_49638 = state_46397__$1;
(statearr_46472_49638[(2)] = inst_46376);

(statearr_46472_49638[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46398 === (10))){
var inst_46358 = (state_46397[(2)]);
var state_46397__$1 = state_46397;
var statearr_46474_49641 = state_46397__$1;
(statearr_46474_49641[(2)] = inst_46358);

(statearr_46474_49641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46398 === (18))){
var inst_46379 = (state_46397[(2)]);
var state_46397__$1 = state_46397;
var statearr_46476_49642 = state_46397__$1;
(statearr_46476_49642[(2)] = inst_46379);

(statearr_46476_49642[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46398 === (8))){
var inst_46355 = cljs.core.async.close_BANG_(to);
var state_46397__$1 = state_46397;
var statearr_46487_49645 = state_46397__$1;
(statearr_46487_49645[(2)] = inst_46355);

(statearr_46487_49645[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__44648__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44648__auto____0 = (function (){
var statearr_46491 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46491[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44648__auto__);

(statearr_46491[(1)] = (1));

return statearr_46491;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44648__auto____1 = (function (state_46397){
while(true){
var ret_value__44649__auto__ = (function (){try{while(true){
var result__44650__auto__ = switch__44647__auto__(state_46397);
if(cljs.core.keyword_identical_QMARK_(result__44650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44650__auto__;
}
break;
}
}catch (e46498){var ex__44651__auto__ = e46498;
var statearr_46499_49650 = state_46397;
(statearr_46499_49650[(2)] = ex__44651__auto__);


if(cljs.core.seq((state_46397[(4)]))){
var statearr_46502_49652 = state_46397;
(statearr_46502_49652[(1)] = cljs.core.first((state_46397[(4)])));

} else {
throw ex__44651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49653 = state_46397;
state_46397 = G__49653;
continue;
} else {
return ret_value__44649__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44648__auto__ = function(state_46397){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44648__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44648__auto____1.call(this,state_46397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44648__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44648__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44648__auto__;
})()
})();
var state__45577__auto__ = (function (){var statearr_46506 = f__45576__auto__();
(statearr_46506[(6)] = c__45575__auto__);

return statearr_46506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45577__auto__);
}));

return c__45575__auto__;
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
var G__46510 = arguments.length;
switch (G__46510) {
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
var G__46531 = arguments.length;
switch (G__46531) {
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
var G__46560 = arguments.length;
switch (G__46560) {
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
var c__45575__auto___49659 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45576__auto__ = (function (){var switch__44647__auto__ = (function (state_46599){
var state_val_46600 = (state_46599[(1)]);
if((state_val_46600 === (7))){
var inst_46592 = (state_46599[(2)]);
var state_46599__$1 = state_46599;
var statearr_46615_49669 = state_46599__$1;
(statearr_46615_49669[(2)] = inst_46592);

(statearr_46615_49669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46600 === (1))){
var state_46599__$1 = state_46599;
var statearr_46617_49670 = state_46599__$1;
(statearr_46617_49670[(2)] = null);

(statearr_46617_49670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46600 === (4))){
var inst_46573 = (state_46599[(7)]);
var inst_46573__$1 = (state_46599[(2)]);
var inst_46574 = (inst_46573__$1 == null);
var state_46599__$1 = (function (){var statearr_46620 = state_46599;
(statearr_46620[(7)] = inst_46573__$1);

return statearr_46620;
})();
if(cljs.core.truth_(inst_46574)){
var statearr_46622_49671 = state_46599__$1;
(statearr_46622_49671[(1)] = (5));

} else {
var statearr_46624_49672 = state_46599__$1;
(statearr_46624_49672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46600 === (13))){
var state_46599__$1 = state_46599;
var statearr_46627_49678 = state_46599__$1;
(statearr_46627_49678[(2)] = null);

(statearr_46627_49678[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46600 === (6))){
var inst_46573 = (state_46599[(7)]);
var inst_46579 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46573) : p.call(null,inst_46573));
var state_46599__$1 = state_46599;
if(cljs.core.truth_(inst_46579)){
var statearr_46634_49680 = state_46599__$1;
(statearr_46634_49680[(1)] = (9));

} else {
var statearr_46635_49681 = state_46599__$1;
(statearr_46635_49681[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46600 === (3))){
var inst_46594 = (state_46599[(2)]);
var state_46599__$1 = state_46599;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46599__$1,inst_46594);
} else {
if((state_val_46600 === (12))){
var state_46599__$1 = state_46599;
var statearr_46643_49683 = state_46599__$1;
(statearr_46643_49683[(2)] = null);

(statearr_46643_49683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46600 === (2))){
var state_46599__$1 = state_46599;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46599__$1,(4),ch);
} else {
if((state_val_46600 === (11))){
var inst_46573 = (state_46599[(7)]);
var inst_46583 = (state_46599[(2)]);
var state_46599__$1 = state_46599;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46599__$1,(8),inst_46583,inst_46573);
} else {
if((state_val_46600 === (9))){
var state_46599__$1 = state_46599;
var statearr_46645_49684 = state_46599__$1;
(statearr_46645_49684[(2)] = tc);

(statearr_46645_49684[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46600 === (5))){
var inst_46576 = cljs.core.async.close_BANG_(tc);
var inst_46577 = cljs.core.async.close_BANG_(fc);
var state_46599__$1 = (function (){var statearr_46649 = state_46599;
(statearr_46649[(8)] = inst_46576);

return statearr_46649;
})();
var statearr_46651_49685 = state_46599__$1;
(statearr_46651_49685[(2)] = inst_46577);

(statearr_46651_49685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46600 === (14))){
var inst_46590 = (state_46599[(2)]);
var state_46599__$1 = state_46599;
var statearr_46656_49686 = state_46599__$1;
(statearr_46656_49686[(2)] = inst_46590);

(statearr_46656_49686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46600 === (10))){
var state_46599__$1 = state_46599;
var statearr_46658_49687 = state_46599__$1;
(statearr_46658_49687[(2)] = fc);

(statearr_46658_49687[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46600 === (8))){
var inst_46585 = (state_46599[(2)]);
var state_46599__$1 = state_46599;
if(cljs.core.truth_(inst_46585)){
var statearr_46659_49688 = state_46599__$1;
(statearr_46659_49688[(1)] = (12));

} else {
var statearr_46662_49689 = state_46599__$1;
(statearr_46662_49689[(1)] = (13));

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
var cljs$core$async$state_machine__44648__auto__ = null;
var cljs$core$async$state_machine__44648__auto____0 = (function (){
var statearr_46665 = [null,null,null,null,null,null,null,null,null];
(statearr_46665[(0)] = cljs$core$async$state_machine__44648__auto__);

(statearr_46665[(1)] = (1));

return statearr_46665;
});
var cljs$core$async$state_machine__44648__auto____1 = (function (state_46599){
while(true){
var ret_value__44649__auto__ = (function (){try{while(true){
var result__44650__auto__ = switch__44647__auto__(state_46599);
if(cljs.core.keyword_identical_QMARK_(result__44650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44650__auto__;
}
break;
}
}catch (e46669){var ex__44651__auto__ = e46669;
var statearr_46670_49692 = state_46599;
(statearr_46670_49692[(2)] = ex__44651__auto__);


if(cljs.core.seq((state_46599[(4)]))){
var statearr_46671_49693 = state_46599;
(statearr_46671_49693[(1)] = cljs.core.first((state_46599[(4)])));

} else {
throw ex__44651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49697 = state_46599;
state_46599 = G__49697;
continue;
} else {
return ret_value__44649__auto__;
}
break;
}
});
cljs$core$async$state_machine__44648__auto__ = function(state_46599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44648__auto____1.call(this,state_46599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44648__auto____0;
cljs$core$async$state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44648__auto____1;
return cljs$core$async$state_machine__44648__auto__;
})()
})();
var state__45577__auto__ = (function (){var statearr_46673 = f__45576__auto__();
(statearr_46673[(6)] = c__45575__auto___49659);

return statearr_46673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45577__auto__);
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
var c__45575__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45576__auto__ = (function (){var switch__44647__auto__ = (function (state_46701){
var state_val_46702 = (state_46701[(1)]);
if((state_val_46702 === (7))){
var inst_46697 = (state_46701[(2)]);
var state_46701__$1 = state_46701;
var statearr_46706_49708 = state_46701__$1;
(statearr_46706_49708[(2)] = inst_46697);

(statearr_46706_49708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (1))){
var inst_46680 = init;
var inst_46681 = inst_46680;
var state_46701__$1 = (function (){var statearr_46707 = state_46701;
(statearr_46707[(7)] = inst_46681);

return statearr_46707;
})();
var statearr_46708_49709 = state_46701__$1;
(statearr_46708_49709[(2)] = null);

(statearr_46708_49709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (4))){
var inst_46684 = (state_46701[(8)]);
var inst_46684__$1 = (state_46701[(2)]);
var inst_46685 = (inst_46684__$1 == null);
var state_46701__$1 = (function (){var statearr_46711 = state_46701;
(statearr_46711[(8)] = inst_46684__$1);

return statearr_46711;
})();
if(cljs.core.truth_(inst_46685)){
var statearr_46714_49715 = state_46701__$1;
(statearr_46714_49715[(1)] = (5));

} else {
var statearr_46715_49716 = state_46701__$1;
(statearr_46715_49716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (6))){
var inst_46688 = (state_46701[(9)]);
var inst_46684 = (state_46701[(8)]);
var inst_46681 = (state_46701[(7)]);
var inst_46688__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_46681,inst_46684) : f.call(null,inst_46681,inst_46684));
var inst_46689 = cljs.core.reduced_QMARK_(inst_46688__$1);
var state_46701__$1 = (function (){var statearr_46722 = state_46701;
(statearr_46722[(9)] = inst_46688__$1);

return statearr_46722;
})();
if(inst_46689){
var statearr_46724_49717 = state_46701__$1;
(statearr_46724_49717[(1)] = (8));

} else {
var statearr_46726_49718 = state_46701__$1;
(statearr_46726_49718[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (3))){
var inst_46699 = (state_46701[(2)]);
var state_46701__$1 = state_46701;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46701__$1,inst_46699);
} else {
if((state_val_46702 === (2))){
var state_46701__$1 = state_46701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46701__$1,(4),ch);
} else {
if((state_val_46702 === (9))){
var inst_46688 = (state_46701[(9)]);
var inst_46681 = inst_46688;
var state_46701__$1 = (function (){var statearr_46729 = state_46701;
(statearr_46729[(7)] = inst_46681);

return statearr_46729;
})();
var statearr_46736_49722 = state_46701__$1;
(statearr_46736_49722[(2)] = null);

(statearr_46736_49722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (5))){
var inst_46681 = (state_46701[(7)]);
var state_46701__$1 = state_46701;
var statearr_46739_49726 = state_46701__$1;
(statearr_46739_49726[(2)] = inst_46681);

(statearr_46739_49726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (10))){
var inst_46695 = (state_46701[(2)]);
var state_46701__$1 = state_46701;
var statearr_46750_49731 = state_46701__$1;
(statearr_46750_49731[(2)] = inst_46695);

(statearr_46750_49731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46702 === (8))){
var inst_46688 = (state_46701[(9)]);
var inst_46691 = cljs.core.deref(inst_46688);
var state_46701__$1 = state_46701;
var statearr_46755_49732 = state_46701__$1;
(statearr_46755_49732[(2)] = inst_46691);

(statearr_46755_49732[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__44648__auto__ = null;
var cljs$core$async$reduce_$_state_machine__44648__auto____0 = (function (){
var statearr_46760 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46760[(0)] = cljs$core$async$reduce_$_state_machine__44648__auto__);

(statearr_46760[(1)] = (1));

return statearr_46760;
});
var cljs$core$async$reduce_$_state_machine__44648__auto____1 = (function (state_46701){
while(true){
var ret_value__44649__auto__ = (function (){try{while(true){
var result__44650__auto__ = switch__44647__auto__(state_46701);
if(cljs.core.keyword_identical_QMARK_(result__44650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44650__auto__;
}
break;
}
}catch (e46765){var ex__44651__auto__ = e46765;
var statearr_46766_49737 = state_46701;
(statearr_46766_49737[(2)] = ex__44651__auto__);


if(cljs.core.seq((state_46701[(4)]))){
var statearr_46767_49738 = state_46701;
(statearr_46767_49738[(1)] = cljs.core.first((state_46701[(4)])));

} else {
throw ex__44651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49744 = state_46701;
state_46701 = G__49744;
continue;
} else {
return ret_value__44649__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__44648__auto__ = function(state_46701){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__44648__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__44648__auto____1.call(this,state_46701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__44648__auto____0;
cljs$core$async$reduce_$_state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__44648__auto____1;
return cljs$core$async$reduce_$_state_machine__44648__auto__;
})()
})();
var state__45577__auto__ = (function (){var statearr_46769 = f__45576__auto__();
(statearr_46769[(6)] = c__45575__auto__);

return statearr_46769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45577__auto__);
}));

return c__45575__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__45575__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45576__auto__ = (function (){var switch__44647__auto__ = (function (state_46782){
var state_val_46783 = (state_46782[(1)]);
if((state_val_46783 === (1))){
var inst_46777 = cljs.core.async.reduce(f__$1,init,ch);
var state_46782__$1 = state_46782;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46782__$1,(2),inst_46777);
} else {
if((state_val_46783 === (2))){
var inst_46779 = (state_46782[(2)]);
var inst_46780 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_46779) : f__$1.call(null,inst_46779));
var state_46782__$1 = state_46782;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46782__$1,inst_46780);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__44648__auto__ = null;
var cljs$core$async$transduce_$_state_machine__44648__auto____0 = (function (){
var statearr_46786 = [null,null,null,null,null,null,null];
(statearr_46786[(0)] = cljs$core$async$transduce_$_state_machine__44648__auto__);

(statearr_46786[(1)] = (1));

return statearr_46786;
});
var cljs$core$async$transduce_$_state_machine__44648__auto____1 = (function (state_46782){
while(true){
var ret_value__44649__auto__ = (function (){try{while(true){
var result__44650__auto__ = switch__44647__auto__(state_46782);
if(cljs.core.keyword_identical_QMARK_(result__44650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44650__auto__;
}
break;
}
}catch (e46789){var ex__44651__auto__ = e46789;
var statearr_46792_49753 = state_46782;
(statearr_46792_49753[(2)] = ex__44651__auto__);


if(cljs.core.seq((state_46782[(4)]))){
var statearr_46793_49754 = state_46782;
(statearr_46793_49754[(1)] = cljs.core.first((state_46782[(4)])));

} else {
throw ex__44651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49761 = state_46782;
state_46782 = G__49761;
continue;
} else {
return ret_value__44649__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__44648__auto__ = function(state_46782){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__44648__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__44648__auto____1.call(this,state_46782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__44648__auto____0;
cljs$core$async$transduce_$_state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__44648__auto____1;
return cljs$core$async$transduce_$_state_machine__44648__auto__;
})()
})();
var state__45577__auto__ = (function (){var statearr_46797 = f__45576__auto__();
(statearr_46797[(6)] = c__45575__auto__);

return statearr_46797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45577__auto__);
}));

return c__45575__auto__;
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
var G__46801 = arguments.length;
switch (G__46801) {
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
var c__45575__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45576__auto__ = (function (){var switch__44647__auto__ = (function (state_46831){
var state_val_46832 = (state_46831[(1)]);
if((state_val_46832 === (7))){
var inst_46809 = (state_46831[(2)]);
var state_46831__$1 = state_46831;
var statearr_46835_49786 = state_46831__$1;
(statearr_46835_49786[(2)] = inst_46809);

(statearr_46835_49786[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46832 === (1))){
var inst_46802 = cljs.core.seq(coll);
var inst_46803 = inst_46802;
var state_46831__$1 = (function (){var statearr_46837 = state_46831;
(statearr_46837[(7)] = inst_46803);

return statearr_46837;
})();
var statearr_46864_49791 = state_46831__$1;
(statearr_46864_49791[(2)] = null);

(statearr_46864_49791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46832 === (4))){
var inst_46803 = (state_46831[(7)]);
var inst_46807 = cljs.core.first(inst_46803);
var state_46831__$1 = state_46831;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46831__$1,(7),ch,inst_46807);
} else {
if((state_val_46832 === (13))){
var inst_46824 = (state_46831[(2)]);
var state_46831__$1 = state_46831;
var statearr_46871_49792 = state_46831__$1;
(statearr_46871_49792[(2)] = inst_46824);

(statearr_46871_49792[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46832 === (6))){
var inst_46812 = (state_46831[(2)]);
var state_46831__$1 = state_46831;
if(cljs.core.truth_(inst_46812)){
var statearr_46872_49793 = state_46831__$1;
(statearr_46872_49793[(1)] = (8));

} else {
var statearr_46873_49794 = state_46831__$1;
(statearr_46873_49794[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46832 === (3))){
var inst_46829 = (state_46831[(2)]);
var state_46831__$1 = state_46831;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46831__$1,inst_46829);
} else {
if((state_val_46832 === (12))){
var state_46831__$1 = state_46831;
var statearr_46875_49795 = state_46831__$1;
(statearr_46875_49795[(2)] = null);

(statearr_46875_49795[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46832 === (2))){
var inst_46803 = (state_46831[(7)]);
var state_46831__$1 = state_46831;
if(cljs.core.truth_(inst_46803)){
var statearr_46879_49796 = state_46831__$1;
(statearr_46879_49796[(1)] = (4));

} else {
var statearr_46880_49797 = state_46831__$1;
(statearr_46880_49797[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46832 === (11))){
var inst_46821 = cljs.core.async.close_BANG_(ch);
var state_46831__$1 = state_46831;
var statearr_46882_49798 = state_46831__$1;
(statearr_46882_49798[(2)] = inst_46821);

(statearr_46882_49798[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46832 === (9))){
var state_46831__$1 = state_46831;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46887_49799 = state_46831__$1;
(statearr_46887_49799[(1)] = (11));

} else {
var statearr_46888_49800 = state_46831__$1;
(statearr_46888_49800[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46832 === (5))){
var inst_46803 = (state_46831[(7)]);
var state_46831__$1 = state_46831;
var statearr_46891_49801 = state_46831__$1;
(statearr_46891_49801[(2)] = inst_46803);

(statearr_46891_49801[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46832 === (10))){
var inst_46827 = (state_46831[(2)]);
var state_46831__$1 = state_46831;
var statearr_46893_49806 = state_46831__$1;
(statearr_46893_49806[(2)] = inst_46827);

(statearr_46893_49806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46832 === (8))){
var inst_46803 = (state_46831[(7)]);
var inst_46814 = cljs.core.next(inst_46803);
var inst_46803__$1 = inst_46814;
var state_46831__$1 = (function (){var statearr_46897 = state_46831;
(statearr_46897[(7)] = inst_46803__$1);

return statearr_46897;
})();
var statearr_46899_49813 = state_46831__$1;
(statearr_46899_49813[(2)] = null);

(statearr_46899_49813[(1)] = (2));


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
var cljs$core$async$state_machine__44648__auto__ = null;
var cljs$core$async$state_machine__44648__auto____0 = (function (){
var statearr_46905 = [null,null,null,null,null,null,null,null];
(statearr_46905[(0)] = cljs$core$async$state_machine__44648__auto__);

(statearr_46905[(1)] = (1));

return statearr_46905;
});
var cljs$core$async$state_machine__44648__auto____1 = (function (state_46831){
while(true){
var ret_value__44649__auto__ = (function (){try{while(true){
var result__44650__auto__ = switch__44647__auto__(state_46831);
if(cljs.core.keyword_identical_QMARK_(result__44650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44650__auto__;
}
break;
}
}catch (e46906){var ex__44651__auto__ = e46906;
var statearr_46907_49816 = state_46831;
(statearr_46907_49816[(2)] = ex__44651__auto__);


if(cljs.core.seq((state_46831[(4)]))){
var statearr_46909_49821 = state_46831;
(statearr_46909_49821[(1)] = cljs.core.first((state_46831[(4)])));

} else {
throw ex__44651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49822 = state_46831;
state_46831 = G__49822;
continue;
} else {
return ret_value__44649__auto__;
}
break;
}
});
cljs$core$async$state_machine__44648__auto__ = function(state_46831){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44648__auto____1.call(this,state_46831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44648__auto____0;
cljs$core$async$state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44648__auto____1;
return cljs$core$async$state_machine__44648__auto__;
})()
})();
var state__45577__auto__ = (function (){var statearr_46915 = f__45576__auto__();
(statearr_46915[(6)] = c__45575__auto__);

return statearr_46915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45577__auto__);
}));

return c__45575__auto__;
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
var G__46930 = arguments.length;
switch (G__46930) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_49826 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_49826(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_49833 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_49833(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_49846 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_49846(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_49847 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_49847(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46995 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46995 = (function (ch,cs,meta46996){
this.ch = ch;
this.cs = cs;
this.meta46996 = meta46996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46997,meta46996__$1){
var self__ = this;
var _46997__$1 = this;
return (new cljs.core.async.t_cljs$core$async46995(self__.ch,self__.cs,meta46996__$1));
}));

(cljs.core.async.t_cljs$core$async46995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46997){
var self__ = this;
var _46997__$1 = this;
return self__.meta46996;
}));

(cljs.core.async.t_cljs$core$async46995.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46995.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46995.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46995.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async46995.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async46995.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async46995.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46996","meta46996",-119442323,null)], null);
}));

(cljs.core.async.t_cljs$core$async46995.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46995.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46995");

(cljs.core.async.t_cljs$core$async46995.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async46995");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46995.
 */
cljs.core.async.__GT_t_cljs$core$async46995 = (function cljs$core$async$mult_$___GT_t_cljs$core$async46995(ch__$1,cs__$1,meta46996){
return (new cljs.core.async.t_cljs$core$async46995(ch__$1,cs__$1,meta46996));
});

}

return (new cljs.core.async.t_cljs$core$async46995(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__45575__auto___49861 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45576__auto__ = (function (){var switch__44647__auto__ = (function (state_47173){
var state_val_47175 = (state_47173[(1)]);
if((state_val_47175 === (7))){
var inst_47168 = (state_47173[(2)]);
var state_47173__$1 = state_47173;
var statearr_47188_49866 = state_47173__$1;
(statearr_47188_49866[(2)] = inst_47168);

(statearr_47188_49866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (20))){
var inst_47056 = (state_47173[(7)]);
var inst_47068 = cljs.core.first(inst_47056);
var inst_47069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47068,(0),null);
var inst_47070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47068,(1),null);
var state_47173__$1 = (function (){var statearr_47191 = state_47173;
(statearr_47191[(8)] = inst_47069);

return statearr_47191;
})();
if(cljs.core.truth_(inst_47070)){
var statearr_47194_49867 = state_47173__$1;
(statearr_47194_49867[(1)] = (22));

} else {
var statearr_47195_49868 = state_47173__$1;
(statearr_47195_49868[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (27))){
var inst_47108 = (state_47173[(9)]);
var inst_47025 = (state_47173[(10)]);
var inst_47101 = (state_47173[(11)]);
var inst_47103 = (state_47173[(12)]);
var inst_47108__$1 = cljs.core._nth(inst_47101,inst_47103);
var inst_47109 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_47108__$1,inst_47025,done);
var state_47173__$1 = (function (){var statearr_47199 = state_47173;
(statearr_47199[(9)] = inst_47108__$1);

return statearr_47199;
})();
if(cljs.core.truth_(inst_47109)){
var statearr_47200_49869 = state_47173__$1;
(statearr_47200_49869[(1)] = (30));

} else {
var statearr_47203_49870 = state_47173__$1;
(statearr_47203_49870[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (1))){
var state_47173__$1 = state_47173;
var statearr_47207_49871 = state_47173__$1;
(statearr_47207_49871[(2)] = null);

(statearr_47207_49871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (24))){
var inst_47056 = (state_47173[(7)]);
var inst_47077 = (state_47173[(2)]);
var inst_47078 = cljs.core.next(inst_47056);
var inst_47034 = inst_47078;
var inst_47035 = null;
var inst_47036 = (0);
var inst_47037 = (0);
var state_47173__$1 = (function (){var statearr_47210 = state_47173;
(statearr_47210[(13)] = inst_47034);

(statearr_47210[(14)] = inst_47035);

(statearr_47210[(15)] = inst_47037);

(statearr_47210[(16)] = inst_47036);

(statearr_47210[(17)] = inst_47077);

return statearr_47210;
})();
var statearr_47213_49872 = state_47173__$1;
(statearr_47213_49872[(2)] = null);

(statearr_47213_49872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (39))){
var state_47173__$1 = state_47173;
var statearr_47217_49874 = state_47173__$1;
(statearr_47217_49874[(2)] = null);

(statearr_47217_49874[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (4))){
var inst_47025 = (state_47173[(10)]);
var inst_47025__$1 = (state_47173[(2)]);
var inst_47026 = (inst_47025__$1 == null);
var state_47173__$1 = (function (){var statearr_47218 = state_47173;
(statearr_47218[(10)] = inst_47025__$1);

return statearr_47218;
})();
if(cljs.core.truth_(inst_47026)){
var statearr_47219_49875 = state_47173__$1;
(statearr_47219_49875[(1)] = (5));

} else {
var statearr_47220_49876 = state_47173__$1;
(statearr_47220_49876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (15))){
var inst_47034 = (state_47173[(13)]);
var inst_47035 = (state_47173[(14)]);
var inst_47037 = (state_47173[(15)]);
var inst_47036 = (state_47173[(16)]);
var inst_47052 = (state_47173[(2)]);
var inst_47053 = (inst_47037 + (1));
var tmp47214 = inst_47034;
var tmp47215 = inst_47035;
var tmp47216 = inst_47036;
var inst_47034__$1 = tmp47214;
var inst_47035__$1 = tmp47215;
var inst_47036__$1 = tmp47216;
var inst_47037__$1 = inst_47053;
var state_47173__$1 = (function (){var statearr_47225 = state_47173;
(statearr_47225[(13)] = inst_47034__$1);

(statearr_47225[(18)] = inst_47052);

(statearr_47225[(14)] = inst_47035__$1);

(statearr_47225[(15)] = inst_47037__$1);

(statearr_47225[(16)] = inst_47036__$1);

return statearr_47225;
})();
var statearr_47228_49884 = state_47173__$1;
(statearr_47228_49884[(2)] = null);

(statearr_47228_49884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (21))){
var inst_47081 = (state_47173[(2)]);
var state_47173__$1 = state_47173;
var statearr_47239_49885 = state_47173__$1;
(statearr_47239_49885[(2)] = inst_47081);

(statearr_47239_49885[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (31))){
var inst_47108 = (state_47173[(9)]);
var inst_47113 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_47108);
var state_47173__$1 = state_47173;
var statearr_47242_49890 = state_47173__$1;
(statearr_47242_49890[(2)] = inst_47113);

(statearr_47242_49890[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (32))){
var inst_47101 = (state_47173[(11)]);
var inst_47100 = (state_47173[(19)]);
var inst_47102 = (state_47173[(20)]);
var inst_47103 = (state_47173[(12)]);
var inst_47115 = (state_47173[(2)]);
var inst_47117 = (inst_47103 + (1));
var tmp47235 = inst_47101;
var tmp47236 = inst_47100;
var tmp47237 = inst_47102;
var inst_47100__$1 = tmp47236;
var inst_47101__$1 = tmp47235;
var inst_47102__$1 = tmp47237;
var inst_47103__$1 = inst_47117;
var state_47173__$1 = (function (){var statearr_47245 = state_47173;
(statearr_47245[(11)] = inst_47101__$1);

(statearr_47245[(21)] = inst_47115);

(statearr_47245[(19)] = inst_47100__$1);

(statearr_47245[(20)] = inst_47102__$1);

(statearr_47245[(12)] = inst_47103__$1);

return statearr_47245;
})();
var statearr_47250_49898 = state_47173__$1;
(statearr_47250_49898[(2)] = null);

(statearr_47250_49898[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (40))){
var inst_47140 = (state_47173[(22)]);
var inst_47144 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_47140);
var state_47173__$1 = state_47173;
var statearr_47253_49900 = state_47173__$1;
(statearr_47253_49900[(2)] = inst_47144);

(statearr_47253_49900[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (33))){
var inst_47121 = (state_47173[(23)]);
var inst_47126 = cljs.core.chunked_seq_QMARK_(inst_47121);
var state_47173__$1 = state_47173;
if(inst_47126){
var statearr_47255_49901 = state_47173__$1;
(statearr_47255_49901[(1)] = (36));

} else {
var statearr_47257_49902 = state_47173__$1;
(statearr_47257_49902[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (13))){
var inst_47046 = (state_47173[(24)]);
var inst_47049 = cljs.core.async.close_BANG_(inst_47046);
var state_47173__$1 = state_47173;
var statearr_47260_49905 = state_47173__$1;
(statearr_47260_49905[(2)] = inst_47049);

(statearr_47260_49905[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (22))){
var inst_47069 = (state_47173[(8)]);
var inst_47074 = cljs.core.async.close_BANG_(inst_47069);
var state_47173__$1 = state_47173;
var statearr_47267_49907 = state_47173__$1;
(statearr_47267_49907[(2)] = inst_47074);

(statearr_47267_49907[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (36))){
var inst_47121 = (state_47173[(23)]);
var inst_47135 = cljs.core.chunk_first(inst_47121);
var inst_47136 = cljs.core.chunk_rest(inst_47121);
var inst_47137 = cljs.core.count(inst_47135);
var inst_47100 = inst_47136;
var inst_47101 = inst_47135;
var inst_47102 = inst_47137;
var inst_47103 = (0);
var state_47173__$1 = (function (){var statearr_47272 = state_47173;
(statearr_47272[(11)] = inst_47101);

(statearr_47272[(19)] = inst_47100);

(statearr_47272[(20)] = inst_47102);

(statearr_47272[(12)] = inst_47103);

return statearr_47272;
})();
var statearr_47275_49912 = state_47173__$1;
(statearr_47275_49912[(2)] = null);

(statearr_47275_49912[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (41))){
var inst_47121 = (state_47173[(23)]);
var inst_47146 = (state_47173[(2)]);
var inst_47147 = cljs.core.next(inst_47121);
var inst_47100 = inst_47147;
var inst_47101 = null;
var inst_47102 = (0);
var inst_47103 = (0);
var state_47173__$1 = (function (){var statearr_47280 = state_47173;
(statearr_47280[(11)] = inst_47101);

(statearr_47280[(19)] = inst_47100);

(statearr_47280[(20)] = inst_47102);

(statearr_47280[(25)] = inst_47146);

(statearr_47280[(12)] = inst_47103);

return statearr_47280;
})();
var statearr_47281_49917 = state_47173__$1;
(statearr_47281_49917[(2)] = null);

(statearr_47281_49917[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (43))){
var state_47173__$1 = state_47173;
var statearr_47282_49918 = state_47173__$1;
(statearr_47282_49918[(2)] = null);

(statearr_47282_49918[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (29))){
var inst_47155 = (state_47173[(2)]);
var state_47173__$1 = state_47173;
var statearr_47285_49919 = state_47173__$1;
(statearr_47285_49919[(2)] = inst_47155);

(statearr_47285_49919[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (44))){
var inst_47165 = (state_47173[(2)]);
var state_47173__$1 = (function (){var statearr_47289 = state_47173;
(statearr_47289[(26)] = inst_47165);

return statearr_47289;
})();
var statearr_47290_49920 = state_47173__$1;
(statearr_47290_49920[(2)] = null);

(statearr_47290_49920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (6))){
var inst_47091 = (state_47173[(27)]);
var inst_47090 = cljs.core.deref(cs);
var inst_47091__$1 = cljs.core.keys(inst_47090);
var inst_47093 = cljs.core.count(inst_47091__$1);
var inst_47094 = cljs.core.reset_BANG_(dctr,inst_47093);
var inst_47099 = cljs.core.seq(inst_47091__$1);
var inst_47100 = inst_47099;
var inst_47101 = null;
var inst_47102 = (0);
var inst_47103 = (0);
var state_47173__$1 = (function (){var statearr_47291 = state_47173;
(statearr_47291[(27)] = inst_47091__$1);

(statearr_47291[(11)] = inst_47101);

(statearr_47291[(19)] = inst_47100);

(statearr_47291[(20)] = inst_47102);

(statearr_47291[(12)] = inst_47103);

(statearr_47291[(28)] = inst_47094);

return statearr_47291;
})();
var statearr_47294_49921 = state_47173__$1;
(statearr_47294_49921[(2)] = null);

(statearr_47294_49921[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (28))){
var inst_47100 = (state_47173[(19)]);
var inst_47121 = (state_47173[(23)]);
var inst_47121__$1 = cljs.core.seq(inst_47100);
var state_47173__$1 = (function (){var statearr_47301 = state_47173;
(statearr_47301[(23)] = inst_47121__$1);

return statearr_47301;
})();
if(inst_47121__$1){
var statearr_47303_49923 = state_47173__$1;
(statearr_47303_49923[(1)] = (33));

} else {
var statearr_47304_49924 = state_47173__$1;
(statearr_47304_49924[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (25))){
var inst_47102 = (state_47173[(20)]);
var inst_47103 = (state_47173[(12)]);
var inst_47105 = (inst_47103 < inst_47102);
var inst_47106 = inst_47105;
var state_47173__$1 = state_47173;
if(cljs.core.truth_(inst_47106)){
var statearr_47306_49926 = state_47173__$1;
(statearr_47306_49926[(1)] = (27));

} else {
var statearr_47307_49927 = state_47173__$1;
(statearr_47307_49927[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (34))){
var state_47173__$1 = state_47173;
var statearr_47308_49929 = state_47173__$1;
(statearr_47308_49929[(2)] = null);

(statearr_47308_49929[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (17))){
var state_47173__$1 = state_47173;
var statearr_47314_49932 = state_47173__$1;
(statearr_47314_49932[(2)] = null);

(statearr_47314_49932[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (3))){
var inst_47170 = (state_47173[(2)]);
var state_47173__$1 = state_47173;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47173__$1,inst_47170);
} else {
if((state_val_47175 === (12))){
var inst_47086 = (state_47173[(2)]);
var state_47173__$1 = state_47173;
var statearr_47317_49934 = state_47173__$1;
(statearr_47317_49934[(2)] = inst_47086);

(statearr_47317_49934[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (2))){
var state_47173__$1 = state_47173;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47173__$1,(4),ch);
} else {
if((state_val_47175 === (23))){
var state_47173__$1 = state_47173;
var statearr_47323_49938 = state_47173__$1;
(statearr_47323_49938[(2)] = null);

(statearr_47323_49938[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (35))){
var inst_47153 = (state_47173[(2)]);
var state_47173__$1 = state_47173;
var statearr_47326_49940 = state_47173__$1;
(statearr_47326_49940[(2)] = inst_47153);

(statearr_47326_49940[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (19))){
var inst_47056 = (state_47173[(7)]);
var inst_47060 = cljs.core.chunk_first(inst_47056);
var inst_47061 = cljs.core.chunk_rest(inst_47056);
var inst_47062 = cljs.core.count(inst_47060);
var inst_47034 = inst_47061;
var inst_47035 = inst_47060;
var inst_47036 = inst_47062;
var inst_47037 = (0);
var state_47173__$1 = (function (){var statearr_47327 = state_47173;
(statearr_47327[(13)] = inst_47034);

(statearr_47327[(14)] = inst_47035);

(statearr_47327[(15)] = inst_47037);

(statearr_47327[(16)] = inst_47036);

return statearr_47327;
})();
var statearr_47328_49941 = state_47173__$1;
(statearr_47328_49941[(2)] = null);

(statearr_47328_49941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (11))){
var inst_47034 = (state_47173[(13)]);
var inst_47056 = (state_47173[(7)]);
var inst_47056__$1 = cljs.core.seq(inst_47034);
var state_47173__$1 = (function (){var statearr_47329 = state_47173;
(statearr_47329[(7)] = inst_47056__$1);

return statearr_47329;
})();
if(inst_47056__$1){
var statearr_47331_49942 = state_47173__$1;
(statearr_47331_49942[(1)] = (16));

} else {
var statearr_47332_49943 = state_47173__$1;
(statearr_47332_49943[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (9))){
var inst_47088 = (state_47173[(2)]);
var state_47173__$1 = state_47173;
var statearr_47337_49948 = state_47173__$1;
(statearr_47337_49948[(2)] = inst_47088);

(statearr_47337_49948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (5))){
var inst_47032 = cljs.core.deref(cs);
var inst_47033 = cljs.core.seq(inst_47032);
var inst_47034 = inst_47033;
var inst_47035 = null;
var inst_47036 = (0);
var inst_47037 = (0);
var state_47173__$1 = (function (){var statearr_47340 = state_47173;
(statearr_47340[(13)] = inst_47034);

(statearr_47340[(14)] = inst_47035);

(statearr_47340[(15)] = inst_47037);

(statearr_47340[(16)] = inst_47036);

return statearr_47340;
})();
var statearr_47344_49949 = state_47173__$1;
(statearr_47344_49949[(2)] = null);

(statearr_47344_49949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (14))){
var state_47173__$1 = state_47173;
var statearr_47346_49953 = state_47173__$1;
(statearr_47346_49953[(2)] = null);

(statearr_47346_49953[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (45))){
var inst_47162 = (state_47173[(2)]);
var state_47173__$1 = state_47173;
var statearr_47347_49957 = state_47173__$1;
(statearr_47347_49957[(2)] = inst_47162);

(statearr_47347_49957[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (26))){
var inst_47091 = (state_47173[(27)]);
var inst_47157 = (state_47173[(2)]);
var inst_47159 = cljs.core.seq(inst_47091);
var state_47173__$1 = (function (){var statearr_47348 = state_47173;
(statearr_47348[(29)] = inst_47157);

return statearr_47348;
})();
if(inst_47159){
var statearr_47352_49962 = state_47173__$1;
(statearr_47352_49962[(1)] = (42));

} else {
var statearr_47354_49963 = state_47173__$1;
(statearr_47354_49963[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (16))){
var inst_47056 = (state_47173[(7)]);
var inst_47058 = cljs.core.chunked_seq_QMARK_(inst_47056);
var state_47173__$1 = state_47173;
if(inst_47058){
var statearr_47362_49973 = state_47173__$1;
(statearr_47362_49973[(1)] = (19));

} else {
var statearr_47363_49974 = state_47173__$1;
(statearr_47363_49974[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (38))){
var inst_47150 = (state_47173[(2)]);
var state_47173__$1 = state_47173;
var statearr_47368_49976 = state_47173__$1;
(statearr_47368_49976[(2)] = inst_47150);

(statearr_47368_49976[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (30))){
var state_47173__$1 = state_47173;
var statearr_47369_49979 = state_47173__$1;
(statearr_47369_49979[(2)] = null);

(statearr_47369_49979[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (10))){
var inst_47035 = (state_47173[(14)]);
var inst_47037 = (state_47173[(15)]);
var inst_47045 = cljs.core._nth(inst_47035,inst_47037);
var inst_47046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47045,(0),null);
var inst_47047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47045,(1),null);
var state_47173__$1 = (function (){var statearr_47370 = state_47173;
(statearr_47370[(24)] = inst_47046);

return statearr_47370;
})();
if(cljs.core.truth_(inst_47047)){
var statearr_47371_49984 = state_47173__$1;
(statearr_47371_49984[(1)] = (13));

} else {
var statearr_47375_49988 = state_47173__$1;
(statearr_47375_49988[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (18))){
var inst_47084 = (state_47173[(2)]);
var state_47173__$1 = state_47173;
var statearr_47376_49989 = state_47173__$1;
(statearr_47376_49989[(2)] = inst_47084);

(statearr_47376_49989[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (42))){
var state_47173__$1 = state_47173;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47173__$1,(45),dchan);
} else {
if((state_val_47175 === (37))){
var inst_47140 = (state_47173[(22)]);
var inst_47025 = (state_47173[(10)]);
var inst_47121 = (state_47173[(23)]);
var inst_47140__$1 = cljs.core.first(inst_47121);
var inst_47141 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_47140__$1,inst_47025,done);
var state_47173__$1 = (function (){var statearr_47379 = state_47173;
(statearr_47379[(22)] = inst_47140__$1);

return statearr_47379;
})();
if(cljs.core.truth_(inst_47141)){
var statearr_47382_49998 = state_47173__$1;
(statearr_47382_49998[(1)] = (39));

} else {
var statearr_47383_49999 = state_47173__$1;
(statearr_47383_49999[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47175 === (8))){
var inst_47037 = (state_47173[(15)]);
var inst_47036 = (state_47173[(16)]);
var inst_47039 = (inst_47037 < inst_47036);
var inst_47040 = inst_47039;
var state_47173__$1 = state_47173;
if(cljs.core.truth_(inst_47040)){
var statearr_47385_50003 = state_47173__$1;
(statearr_47385_50003[(1)] = (10));

} else {
var statearr_47386_50004 = state_47173__$1;
(statearr_47386_50004[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__44648__auto__ = null;
var cljs$core$async$mult_$_state_machine__44648__auto____0 = (function (){
var statearr_47388 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47388[(0)] = cljs$core$async$mult_$_state_machine__44648__auto__);

(statearr_47388[(1)] = (1));

return statearr_47388;
});
var cljs$core$async$mult_$_state_machine__44648__auto____1 = (function (state_47173){
while(true){
var ret_value__44649__auto__ = (function (){try{while(true){
var result__44650__auto__ = switch__44647__auto__(state_47173);
if(cljs.core.keyword_identical_QMARK_(result__44650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44650__auto__;
}
break;
}
}catch (e47393){var ex__44651__auto__ = e47393;
var statearr_47394_50010 = state_47173;
(statearr_47394_50010[(2)] = ex__44651__auto__);


if(cljs.core.seq((state_47173[(4)]))){
var statearr_47397_50011 = state_47173;
(statearr_47397_50011[(1)] = cljs.core.first((state_47173[(4)])));

} else {
throw ex__44651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50015 = state_47173;
state_47173 = G__50015;
continue;
} else {
return ret_value__44649__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__44648__auto__ = function(state_47173){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__44648__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__44648__auto____1.call(this,state_47173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__44648__auto____0;
cljs$core$async$mult_$_state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__44648__auto____1;
return cljs$core$async$mult_$_state_machine__44648__auto__;
})()
})();
var state__45577__auto__ = (function (){var statearr_47402 = f__45576__auto__();
(statearr_47402[(6)] = c__45575__auto___49861);

return statearr_47402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45577__auto__);
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
var G__47406 = arguments.length;
switch (G__47406) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_50019 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_50019(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_50022 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_50022(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_50034 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_50034(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_50036 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_50036(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_50045 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_50045(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___50050 = arguments.length;
var i__4865__auto___50052 = (0);
while(true){
if((i__4865__auto___50052 < len__4864__auto___50050)){
args__4870__auto__.push((arguments[i__4865__auto___50052]));

var G__50055 = (i__4865__auto___50052 + (1));
i__4865__auto___50052 = G__50055;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47454){
var map__47455 = p__47454;
var map__47455__$1 = cljs.core.__destructure_map(map__47455);
var opts = map__47455__$1;
var statearr_47456_50058 = state;
(statearr_47456_50058[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_47457_50059 = state;
(statearr_47457_50059[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_47459_50060 = state;
(statearr_47459_50060[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47444){
var G__47445 = cljs.core.first(seq47444);
var seq47444__$1 = cljs.core.next(seq47444);
var G__47446 = cljs.core.first(seq47444__$1);
var seq47444__$2 = cljs.core.next(seq47444__$1);
var G__47447 = cljs.core.first(seq47444__$2);
var seq47444__$3 = cljs.core.next(seq47444__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47445,G__47446,G__47447,seq47444__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47482 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47482 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta47483){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta47483 = meta47483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47484,meta47483__$1){
var self__ = this;
var _47484__$1 = this;
return (new cljs.core.async.t_cljs$core$async47482(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta47483__$1));
}));

(cljs.core.async.t_cljs$core$async47482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47484){
var self__ = this;
var _47484__$1 = this;
return self__.meta47483;
}));

(cljs.core.async.t_cljs$core$async47482.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47482.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async47482.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47482.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47482.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47482.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47482.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47482.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47482.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta47483","meta47483",-86546991,null)], null);
}));

(cljs.core.async.t_cljs$core$async47482.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47482");

(cljs.core.async.t_cljs$core$async47482.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47482");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47482.
 */
cljs.core.async.__GT_t_cljs$core$async47482 = (function cljs$core$async$mix_$___GT_t_cljs$core$async47482(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47483){
return (new cljs.core.async.t_cljs$core$async47482(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47483));
});

}

return (new cljs.core.async.t_cljs$core$async47482(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45575__auto___50087 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45576__auto__ = (function (){var switch__44647__auto__ = (function (state_47591){
var state_val_47592 = (state_47591[(1)]);
if((state_val_47592 === (7))){
var inst_47548 = (state_47591[(2)]);
var state_47591__$1 = state_47591;
if(cljs.core.truth_(inst_47548)){
var statearr_47597_50088 = state_47591__$1;
(statearr_47597_50088[(1)] = (8));

} else {
var statearr_47598_50089 = state_47591__$1;
(statearr_47598_50089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (20))){
var inst_47541 = (state_47591[(7)]);
var state_47591__$1 = state_47591;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47591__$1,(23),out,inst_47541);
} else {
if((state_val_47592 === (1))){
var inst_47524 = calc_state();
var inst_47525 = cljs.core.__destructure_map(inst_47524);
var inst_47526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47525,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47525,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47525,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47529 = inst_47524;
var state_47591__$1 = (function (){var statearr_47601 = state_47591;
(statearr_47601[(8)] = inst_47527);

(statearr_47601[(9)] = inst_47529);

(statearr_47601[(10)] = inst_47528);

(statearr_47601[(11)] = inst_47526);

return statearr_47601;
})();
var statearr_47602_50090 = state_47591__$1;
(statearr_47602_50090[(2)] = null);

(statearr_47602_50090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (24))){
var inst_47532 = (state_47591[(12)]);
var inst_47529 = inst_47532;
var state_47591__$1 = (function (){var statearr_47603 = state_47591;
(statearr_47603[(9)] = inst_47529);

return statearr_47603;
})();
var statearr_47604_50095 = state_47591__$1;
(statearr_47604_50095[(2)] = null);

(statearr_47604_50095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (4))){
var inst_47543 = (state_47591[(13)]);
var inst_47541 = (state_47591[(7)]);
var inst_47540 = (state_47591[(2)]);
var inst_47541__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47540,(0),null);
var inst_47542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47540,(1),null);
var inst_47543__$1 = (inst_47541__$1 == null);
var state_47591__$1 = (function (){var statearr_47607 = state_47591;
(statearr_47607[(14)] = inst_47542);

(statearr_47607[(13)] = inst_47543__$1);

(statearr_47607[(7)] = inst_47541__$1);

return statearr_47607;
})();
if(cljs.core.truth_(inst_47543__$1)){
var statearr_47610_50100 = state_47591__$1;
(statearr_47610_50100[(1)] = (5));

} else {
var statearr_47614_50101 = state_47591__$1;
(statearr_47614_50101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (15))){
var inst_47565 = (state_47591[(15)]);
var inst_47533 = (state_47591[(16)]);
var inst_47565__$1 = cljs.core.empty_QMARK_(inst_47533);
var state_47591__$1 = (function (){var statearr_47615 = state_47591;
(statearr_47615[(15)] = inst_47565__$1);

return statearr_47615;
})();
if(inst_47565__$1){
var statearr_47618_50104 = state_47591__$1;
(statearr_47618_50104[(1)] = (17));

} else {
var statearr_47619_50105 = state_47591__$1;
(statearr_47619_50105[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (21))){
var inst_47532 = (state_47591[(12)]);
var inst_47529 = inst_47532;
var state_47591__$1 = (function (){var statearr_47620 = state_47591;
(statearr_47620[(9)] = inst_47529);

return statearr_47620;
})();
var statearr_47621_50106 = state_47591__$1;
(statearr_47621_50106[(2)] = null);

(statearr_47621_50106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (13))){
var inst_47555 = (state_47591[(2)]);
var inst_47556 = calc_state();
var inst_47529 = inst_47556;
var state_47591__$1 = (function (){var statearr_47622 = state_47591;
(statearr_47622[(17)] = inst_47555);

(statearr_47622[(9)] = inst_47529);

return statearr_47622;
})();
var statearr_47623_50111 = state_47591__$1;
(statearr_47623_50111[(2)] = null);

(statearr_47623_50111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (22))){
var inst_47585 = (state_47591[(2)]);
var state_47591__$1 = state_47591;
var statearr_47624_50113 = state_47591__$1;
(statearr_47624_50113[(2)] = inst_47585);

(statearr_47624_50113[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (6))){
var inst_47542 = (state_47591[(14)]);
var inst_47546 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47542,change);
var state_47591__$1 = state_47591;
var statearr_47625_50114 = state_47591__$1;
(statearr_47625_50114[(2)] = inst_47546);

(statearr_47625_50114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (25))){
var state_47591__$1 = state_47591;
var statearr_47626_50115 = state_47591__$1;
(statearr_47626_50115[(2)] = null);

(statearr_47626_50115[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (17))){
var inst_47542 = (state_47591[(14)]);
var inst_47534 = (state_47591[(18)]);
var inst_47567 = (inst_47534.cljs$core$IFn$_invoke$arity$1 ? inst_47534.cljs$core$IFn$_invoke$arity$1(inst_47542) : inst_47534.call(null,inst_47542));
var inst_47568 = cljs.core.not(inst_47567);
var state_47591__$1 = state_47591;
var statearr_47628_50120 = state_47591__$1;
(statearr_47628_50120[(2)] = inst_47568);

(statearr_47628_50120[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (3))){
var inst_47589 = (state_47591[(2)]);
var state_47591__$1 = state_47591;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47591__$1,inst_47589);
} else {
if((state_val_47592 === (12))){
var state_47591__$1 = state_47591;
var statearr_47631_50121 = state_47591__$1;
(statearr_47631_50121[(2)] = null);

(statearr_47631_50121[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (2))){
var inst_47532 = (state_47591[(12)]);
var inst_47529 = (state_47591[(9)]);
var inst_47532__$1 = cljs.core.__destructure_map(inst_47529);
var inst_47533 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47532__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47534 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47532__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47535 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47532__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_47591__$1 = (function (){var statearr_47640 = state_47591;
(statearr_47640[(12)] = inst_47532__$1);

(statearr_47640[(16)] = inst_47533);

(statearr_47640[(18)] = inst_47534);

return statearr_47640;
})();
return cljs.core.async.ioc_alts_BANG_(state_47591__$1,(4),inst_47535);
} else {
if((state_val_47592 === (23))){
var inst_47576 = (state_47591[(2)]);
var state_47591__$1 = state_47591;
if(cljs.core.truth_(inst_47576)){
var statearr_47641_50122 = state_47591__$1;
(statearr_47641_50122[(1)] = (24));

} else {
var statearr_47642_50123 = state_47591__$1;
(statearr_47642_50123[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (19))){
var inst_47571 = (state_47591[(2)]);
var state_47591__$1 = state_47591;
var statearr_47643_50124 = state_47591__$1;
(statearr_47643_50124[(2)] = inst_47571);

(statearr_47643_50124[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (11))){
var inst_47542 = (state_47591[(14)]);
var inst_47552 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_47542);
var state_47591__$1 = state_47591;
var statearr_47646_50126 = state_47591__$1;
(statearr_47646_50126[(2)] = inst_47552);

(statearr_47646_50126[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (9))){
var inst_47542 = (state_47591[(14)]);
var inst_47533 = (state_47591[(16)]);
var inst_47562 = (state_47591[(19)]);
var inst_47562__$1 = (inst_47533.cljs$core$IFn$_invoke$arity$1 ? inst_47533.cljs$core$IFn$_invoke$arity$1(inst_47542) : inst_47533.call(null,inst_47542));
var state_47591__$1 = (function (){var statearr_47655 = state_47591;
(statearr_47655[(19)] = inst_47562__$1);

return statearr_47655;
})();
if(cljs.core.truth_(inst_47562__$1)){
var statearr_47656_50131 = state_47591__$1;
(statearr_47656_50131[(1)] = (14));

} else {
var statearr_47657_50132 = state_47591__$1;
(statearr_47657_50132[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (5))){
var inst_47543 = (state_47591[(13)]);
var state_47591__$1 = state_47591;
var statearr_47661_50138 = state_47591__$1;
(statearr_47661_50138[(2)] = inst_47543);

(statearr_47661_50138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (14))){
var inst_47562 = (state_47591[(19)]);
var state_47591__$1 = state_47591;
var statearr_47666_50141 = state_47591__$1;
(statearr_47666_50141[(2)] = inst_47562);

(statearr_47666_50141[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (26))){
var inst_47581 = (state_47591[(2)]);
var state_47591__$1 = state_47591;
var statearr_47667_50142 = state_47591__$1;
(statearr_47667_50142[(2)] = inst_47581);

(statearr_47667_50142[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (16))){
var inst_47573 = (state_47591[(2)]);
var state_47591__$1 = state_47591;
if(cljs.core.truth_(inst_47573)){
var statearr_47668_50143 = state_47591__$1;
(statearr_47668_50143[(1)] = (20));

} else {
var statearr_47669_50144 = state_47591__$1;
(statearr_47669_50144[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (10))){
var inst_47587 = (state_47591[(2)]);
var state_47591__$1 = state_47591;
var statearr_47673_50148 = state_47591__$1;
(statearr_47673_50148[(2)] = inst_47587);

(statearr_47673_50148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (18))){
var inst_47565 = (state_47591[(15)]);
var state_47591__$1 = state_47591;
var statearr_47674_50149 = state_47591__$1;
(statearr_47674_50149[(2)] = inst_47565);

(statearr_47674_50149[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47592 === (8))){
var inst_47541 = (state_47591[(7)]);
var inst_47550 = (inst_47541 == null);
var state_47591__$1 = state_47591;
if(cljs.core.truth_(inst_47550)){
var statearr_47675_50158 = state_47591__$1;
(statearr_47675_50158[(1)] = (11));

} else {
var statearr_47676_50159 = state_47591__$1;
(statearr_47676_50159[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__44648__auto__ = null;
var cljs$core$async$mix_$_state_machine__44648__auto____0 = (function (){
var statearr_47677 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47677[(0)] = cljs$core$async$mix_$_state_machine__44648__auto__);

(statearr_47677[(1)] = (1));

return statearr_47677;
});
var cljs$core$async$mix_$_state_machine__44648__auto____1 = (function (state_47591){
while(true){
var ret_value__44649__auto__ = (function (){try{while(true){
var result__44650__auto__ = switch__44647__auto__(state_47591);
if(cljs.core.keyword_identical_QMARK_(result__44650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44650__auto__;
}
break;
}
}catch (e47681){var ex__44651__auto__ = e47681;
var statearr_47685_50160 = state_47591;
(statearr_47685_50160[(2)] = ex__44651__auto__);


if(cljs.core.seq((state_47591[(4)]))){
var statearr_47688_50161 = state_47591;
(statearr_47688_50161[(1)] = cljs.core.first((state_47591[(4)])));

} else {
throw ex__44651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50162 = state_47591;
state_47591 = G__50162;
continue;
} else {
return ret_value__44649__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__44648__auto__ = function(state_47591){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__44648__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__44648__auto____1.call(this,state_47591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__44648__auto____0;
cljs$core$async$mix_$_state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__44648__auto____1;
return cljs$core$async$mix_$_state_machine__44648__auto__;
})()
})();
var state__45577__auto__ = (function (){var statearr_47691 = f__45576__auto__();
(statearr_47691[(6)] = c__45575__auto___50087);

return statearr_47691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45577__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_50165 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_50165(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_50182 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_50182(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_50189 = (function() {
var G__50190 = null;
var G__50190__1 = (function (p){
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
var G__50190__2 = (function (p,v){
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
G__50190 = function(p,v){
switch(arguments.length){
case 1:
return G__50190__1.call(this,p);
case 2:
return G__50190__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__50190.cljs$core$IFn$_invoke$arity$1 = G__50190__1;
G__50190.cljs$core$IFn$_invoke$arity$2 = G__50190__2;
return G__50190;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__47729 = arguments.length;
switch (G__47729) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_50189(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_50189(p,v);
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
var G__47740 = arguments.length;
switch (G__47740) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__47734_SHARP_){
if(cljs.core.truth_((p1__47734_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__47734_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__47734_SHARP_.call(null,topic)))){
return p1__47734_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47734_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47744 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47744 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta47745){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta47745 = meta47745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47746,meta47745__$1){
var self__ = this;
var _47746__$1 = this;
return (new cljs.core.async.t_cljs$core$async47744(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta47745__$1));
}));

(cljs.core.async.t_cljs$core$async47744.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47746){
var self__ = this;
var _47746__$1 = this;
return self__.meta47745;
}));

(cljs.core.async.t_cljs$core$async47744.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47744.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async47744.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47744.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async47744.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async47744.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async47744.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async47744.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta47745","meta47745",1357324575,null)], null);
}));

(cljs.core.async.t_cljs$core$async47744.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47744.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47744");

(cljs.core.async.t_cljs$core$async47744.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async47744");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47744.
 */
cljs.core.async.__GT_t_cljs$core$async47744 = (function cljs$core$async$__GT_t_cljs$core$async47744(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47745){
return (new cljs.core.async.t_cljs$core$async47744(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47745));
});

}

return (new cljs.core.async.t_cljs$core$async47744(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45575__auto___50220 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45576__auto__ = (function (){var switch__44647__auto__ = (function (state_47879){
var state_val_47880 = (state_47879[(1)]);
if((state_val_47880 === (7))){
var inst_47875 = (state_47879[(2)]);
var state_47879__$1 = state_47879;
var statearr_47883_50222 = state_47879__$1;
(statearr_47883_50222[(2)] = inst_47875);

(statearr_47883_50222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47880 === (20))){
var state_47879__$1 = state_47879;
var statearr_47884_50226 = state_47879__$1;
(statearr_47884_50226[(2)] = null);

(statearr_47884_50226[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47880 === (1))){
var state_47879__$1 = state_47879;
var statearr_47885_50228 = state_47879__$1;
(statearr_47885_50228[(2)] = null);

(statearr_47885_50228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47880 === (24))){
var inst_47846 = (state_47879[(7)]);
var inst_47861 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_47846);
var state_47879__$1 = state_47879;
var statearr_47886_50229 = state_47879__$1;
(statearr_47886_50229[(2)] = inst_47861);

(statearr_47886_50229[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47880 === (4))){
var inst_47778 = (state_47879[(8)]);
var inst_47778__$1 = (state_47879[(2)]);
var inst_47779 = (inst_47778__$1 == null);
var state_47879__$1 = (function (){var statearr_47887 = state_47879;
(statearr_47887[(8)] = inst_47778__$1);

return statearr_47887;
})();
if(cljs.core.truth_(inst_47779)){
var statearr_47888_50230 = state_47879__$1;
(statearr_47888_50230[(1)] = (5));

} else {
var statearr_47889_50233 = state_47879__$1;
(statearr_47889_50233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47880 === (15))){
var inst_47836 = (state_47879[(2)]);
var state_47879__$1 = state_47879;
var statearr_47890_50236 = state_47879__$1;
(statearr_47890_50236[(2)] = inst_47836);

(statearr_47890_50236[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47880 === (21))){
var inst_47872 = (state_47879[(2)]);
var state_47879__$1 = (function (){var statearr_47891 = state_47879;
(statearr_47891[(9)] = inst_47872);

return statearr_47891;
})();
var statearr_47892_50237 = state_47879__$1;
(statearr_47892_50237[(2)] = null);

(statearr_47892_50237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47880 === (13))){
var inst_47808 = (state_47879[(10)]);
var inst_47814 = cljs.core.chunked_seq_QMARK_(inst_47808);
var state_47879__$1 = state_47879;
if(inst_47814){
var statearr_47893_50239 = state_47879__$1;
(statearr_47893_50239[(1)] = (16));

} else {
var statearr_47894_50240 = state_47879__$1;
(statearr_47894_50240[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47880 === (22))){
var inst_47852 = (state_47879[(2)]);
var state_47879__$1 = state_47879;
if(cljs.core.truth_(inst_47852)){
var statearr_47895_50241 = state_47879__$1;
(statearr_47895_50241[(1)] = (23));

} else {
var statearr_47896_50244 = state_47879__$1;
(statearr_47896_50244[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47880 === (6))){
var inst_47778 = (state_47879[(8)]);
var inst_47846 = (state_47879[(7)]);
var inst_47848 = (state_47879[(11)]);
var inst_47846__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_47778) : topic_fn.call(null,inst_47778));
var inst_47847 = cljs.core.deref(mults);
var inst_47848__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47847,inst_47846__$1);
var state_47879__$1 = (function (){var statearr_47898 = state_47879;
(statearr_47898[(7)] = inst_47846__$1);

(statearr_47898[(11)] = inst_47848__$1);

return statearr_47898;
})();
if(cljs.core.truth_(inst_47848__$1)){
var statearr_47899_50247 = state_47879__$1;
(statearr_47899_50247[(1)] = (19));

} else {
var statearr_47900_50248 = state_47879__$1;
(statearr_47900_50248[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47880 === (25))){
var inst_47869 = (state_47879[(2)]);
var state_47879__$1 = state_47879;
var statearr_47901_50249 = state_47879__$1;
(statearr_47901_50249[(2)] = inst_47869);

(statearr_47901_50249[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47880 === (17))){
var inst_47808 = (state_47879[(10)]);
var inst_47824 = cljs.core.first(inst_47808);
var inst_47828 = cljs.core.async.muxch_STAR_(inst_47824);
var inst_47829 = cljs.core.async.close_BANG_(inst_47828);
var inst_47830 = cljs.core.next(inst_47808);
var inst_47788 = inst_47830;
var inst_47789 = null;
var inst_47790 = (0);
var inst_47791 = (0);
var state_47879__$1 = (function (){var statearr_47917 = state_47879;
(statearr_47917[(12)] = inst_47791);

(statearr_47917[(13)] = inst_47790);

(statearr_47917[(14)] = inst_47789);

(statearr_47917[(15)] = inst_47788);

(statearr_47917[(16)] = inst_47829);

return statearr_47917;
})();
var statearr_47922_50255 = state_47879__$1;
(statearr_47922_50255[(2)] = null);

(statearr_47922_50255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47880 === (3))){
var inst_47877 = (state_47879[(2)]);
var state_47879__$1 = state_47879;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47879__$1,inst_47877);
} else {
if((state_val_47880 === (12))){
var inst_47838 = (state_47879[(2)]);
var state_47879__$1 = state_47879;
var statearr_47926_50257 = state_47879__$1;
(statearr_47926_50257[(2)] = inst_47838);

(statearr_47926_50257[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47880 === (2))){
var state_47879__$1 = state_47879;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47879__$1,(4),ch);
} else {
if((state_val_47880 === (23))){
var state_47879__$1 = state_47879;
var statearr_47927_50264 = state_47879__$1;
(statearr_47927_50264[(2)] = null);

(statearr_47927_50264[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47880 === (19))){
var inst_47778 = (state_47879[(8)]);
var inst_47848 = (state_47879[(11)]);
var inst_47850 = cljs.core.async.muxch_STAR_(inst_47848);
var state_47879__$1 = state_47879;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47879__$1,(22),inst_47850,inst_47778);
} else {
if((state_val_47880 === (11))){
var inst_47808 = (state_47879[(10)]);
var inst_47788 = (state_47879[(15)]);
var inst_47808__$1 = cljs.core.seq(inst_47788);
var state_47879__$1 = (function (){var statearr_47928 = state_47879;
(statearr_47928[(10)] = inst_47808__$1);

return statearr_47928;
})();
if(inst_47808__$1){
var statearr_47929_50282 = state_47879__$1;
(statearr_47929_50282[(1)] = (13));

} else {
var statearr_47930_50284 = state_47879__$1;
(statearr_47930_50284[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47880 === (9))){
var inst_47840 = (state_47879[(2)]);
var state_47879__$1 = state_47879;
var statearr_47933_50291 = state_47879__$1;
(statearr_47933_50291[(2)] = inst_47840);

(statearr_47933_50291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47880 === (5))){
var inst_47785 = cljs.core.deref(mults);
var inst_47786 = cljs.core.vals(inst_47785);
var inst_47787 = cljs.core.seq(inst_47786);
var inst_47788 = inst_47787;
var inst_47789 = null;
var inst_47790 = (0);
var inst_47791 = (0);
var state_47879__$1 = (function (){var statearr_47934 = state_47879;
(statearr_47934[(12)] = inst_47791);

(statearr_47934[(13)] = inst_47790);

(statearr_47934[(14)] = inst_47789);

(statearr_47934[(15)] = inst_47788);

return statearr_47934;
})();
var statearr_47937_50298 = state_47879__$1;
(statearr_47937_50298[(2)] = null);

(statearr_47937_50298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47880 === (14))){
var state_47879__$1 = state_47879;
var statearr_47941_50300 = state_47879__$1;
(statearr_47941_50300[(2)] = null);

(statearr_47941_50300[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47880 === (16))){
var inst_47808 = (state_47879[(10)]);
var inst_47819 = cljs.core.chunk_first(inst_47808);
var inst_47820 = cljs.core.chunk_rest(inst_47808);
var inst_47821 = cljs.core.count(inst_47819);
var inst_47788 = inst_47820;
var inst_47789 = inst_47819;
var inst_47790 = inst_47821;
var inst_47791 = (0);
var state_47879__$1 = (function (){var statearr_47953 = state_47879;
(statearr_47953[(12)] = inst_47791);

(statearr_47953[(13)] = inst_47790);

(statearr_47953[(14)] = inst_47789);

(statearr_47953[(15)] = inst_47788);

return statearr_47953;
})();
var statearr_47954_50307 = state_47879__$1;
(statearr_47954_50307[(2)] = null);

(statearr_47954_50307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47880 === (10))){
var inst_47791 = (state_47879[(12)]);
var inst_47790 = (state_47879[(13)]);
var inst_47789 = (state_47879[(14)]);
var inst_47788 = (state_47879[(15)]);
var inst_47796 = cljs.core._nth(inst_47789,inst_47791);
var inst_47797 = cljs.core.async.muxch_STAR_(inst_47796);
var inst_47798 = cljs.core.async.close_BANG_(inst_47797);
var inst_47802 = (inst_47791 + (1));
var tmp47938 = inst_47790;
var tmp47939 = inst_47789;
var tmp47940 = inst_47788;
var inst_47788__$1 = tmp47940;
var inst_47789__$1 = tmp47939;
var inst_47790__$1 = tmp47938;
var inst_47791__$1 = inst_47802;
var state_47879__$1 = (function (){var statearr_47955 = state_47879;
(statearr_47955[(12)] = inst_47791__$1);

(statearr_47955[(13)] = inst_47790__$1);

(statearr_47955[(14)] = inst_47789__$1);

(statearr_47955[(17)] = inst_47798);

(statearr_47955[(15)] = inst_47788__$1);

return statearr_47955;
})();
var statearr_47957_50314 = state_47879__$1;
(statearr_47957_50314[(2)] = null);

(statearr_47957_50314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47880 === (18))){
var inst_47833 = (state_47879[(2)]);
var state_47879__$1 = state_47879;
var statearr_47958_50315 = state_47879__$1;
(statearr_47958_50315[(2)] = inst_47833);

(statearr_47958_50315[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47880 === (8))){
var inst_47791 = (state_47879[(12)]);
var inst_47790 = (state_47879[(13)]);
var inst_47793 = (inst_47791 < inst_47790);
var inst_47794 = inst_47793;
var state_47879__$1 = state_47879;
if(cljs.core.truth_(inst_47794)){
var statearr_47960_50316 = state_47879__$1;
(statearr_47960_50316[(1)] = (10));

} else {
var statearr_47961_50317 = state_47879__$1;
(statearr_47961_50317[(1)] = (11));

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
var cljs$core$async$state_machine__44648__auto__ = null;
var cljs$core$async$state_machine__44648__auto____0 = (function (){
var statearr_47962 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47962[(0)] = cljs$core$async$state_machine__44648__auto__);

(statearr_47962[(1)] = (1));

return statearr_47962;
});
var cljs$core$async$state_machine__44648__auto____1 = (function (state_47879){
while(true){
var ret_value__44649__auto__ = (function (){try{while(true){
var result__44650__auto__ = switch__44647__auto__(state_47879);
if(cljs.core.keyword_identical_QMARK_(result__44650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44650__auto__;
}
break;
}
}catch (e47963){var ex__44651__auto__ = e47963;
var statearr_47964_50318 = state_47879;
(statearr_47964_50318[(2)] = ex__44651__auto__);


if(cljs.core.seq((state_47879[(4)]))){
var statearr_47971_50319 = state_47879;
(statearr_47971_50319[(1)] = cljs.core.first((state_47879[(4)])));

} else {
throw ex__44651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50321 = state_47879;
state_47879 = G__50321;
continue;
} else {
return ret_value__44649__auto__;
}
break;
}
});
cljs$core$async$state_machine__44648__auto__ = function(state_47879){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44648__auto____1.call(this,state_47879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44648__auto____0;
cljs$core$async$state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44648__auto____1;
return cljs$core$async$state_machine__44648__auto__;
})()
})();
var state__45577__auto__ = (function (){var statearr_47972 = f__45576__auto__();
(statearr_47972[(6)] = c__45575__auto___50220);

return statearr_47972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45577__auto__);
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
var G__47974 = arguments.length;
switch (G__47974) {
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
var G__47986 = arguments.length;
switch (G__47986) {
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
var G__47993 = arguments.length;
switch (G__47993) {
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
var c__45575__auto___50339 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45576__auto__ = (function (){var switch__44647__auto__ = (function (state_48057){
var state_val_48058 = (state_48057[(1)]);
if((state_val_48058 === (7))){
var state_48057__$1 = state_48057;
var statearr_48065_50345 = state_48057__$1;
(statearr_48065_50345[(2)] = null);

(statearr_48065_50345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48058 === (1))){
var state_48057__$1 = state_48057;
var statearr_48066_50347 = state_48057__$1;
(statearr_48066_50347[(2)] = null);

(statearr_48066_50347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48058 === (4))){
var inst_48012 = (state_48057[(7)]);
var inst_48011 = (state_48057[(8)]);
var inst_48015 = (inst_48012 < inst_48011);
var state_48057__$1 = state_48057;
if(cljs.core.truth_(inst_48015)){
var statearr_48067_50355 = state_48057__$1;
(statearr_48067_50355[(1)] = (6));

} else {
var statearr_48068_50360 = state_48057__$1;
(statearr_48068_50360[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48058 === (15))){
var inst_48043 = (state_48057[(9)]);
var inst_48048 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_48043);
var state_48057__$1 = state_48057;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48057__$1,(17),out,inst_48048);
} else {
if((state_val_48058 === (13))){
var inst_48043 = (state_48057[(9)]);
var inst_48043__$1 = (state_48057[(2)]);
var inst_48044 = cljs.core.some(cljs.core.nil_QMARK_,inst_48043__$1);
var state_48057__$1 = (function (){var statearr_48071 = state_48057;
(statearr_48071[(9)] = inst_48043__$1);

return statearr_48071;
})();
if(cljs.core.truth_(inst_48044)){
var statearr_48072_50373 = state_48057__$1;
(statearr_48072_50373[(1)] = (14));

} else {
var statearr_48073_50374 = state_48057__$1;
(statearr_48073_50374[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48058 === (6))){
var state_48057__$1 = state_48057;
var statearr_48074_50375 = state_48057__$1;
(statearr_48074_50375[(2)] = null);

(statearr_48074_50375[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48058 === (17))){
var inst_48050 = (state_48057[(2)]);
var state_48057__$1 = (function (){var statearr_48078 = state_48057;
(statearr_48078[(10)] = inst_48050);

return statearr_48078;
})();
var statearr_48080_50380 = state_48057__$1;
(statearr_48080_50380[(2)] = null);

(statearr_48080_50380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48058 === (3))){
var inst_48055 = (state_48057[(2)]);
var state_48057__$1 = state_48057;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48057__$1,inst_48055);
} else {
if((state_val_48058 === (12))){
var _ = (function (){var statearr_48081 = state_48057;
(statearr_48081[(4)] = cljs.core.rest((state_48057[(4)])));

return statearr_48081;
})();
var state_48057__$1 = state_48057;
var ex48077 = (state_48057__$1[(2)]);
var statearr_48090_50383 = state_48057__$1;
(statearr_48090_50383[(5)] = ex48077);


if((ex48077 instanceof Object)){
var statearr_48093_50385 = state_48057__$1;
(statearr_48093_50385[(1)] = (11));

(statearr_48093_50385[(5)] = null);

} else {
throw ex48077;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48058 === (2))){
var inst_48010 = cljs.core.reset_BANG_(dctr,cnt);
var inst_48011 = cnt;
var inst_48012 = (0);
var state_48057__$1 = (function (){var statearr_48102 = state_48057;
(statearr_48102[(7)] = inst_48012);

(statearr_48102[(11)] = inst_48010);

(statearr_48102[(8)] = inst_48011);

return statearr_48102;
})();
var statearr_48104_50387 = state_48057__$1;
(statearr_48104_50387[(2)] = null);

(statearr_48104_50387[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48058 === (11))){
var inst_48022 = (state_48057[(2)]);
var inst_48023 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_48057__$1 = (function (){var statearr_48105 = state_48057;
(statearr_48105[(12)] = inst_48022);

return statearr_48105;
})();
var statearr_48106_50389 = state_48057__$1;
(statearr_48106_50389[(2)] = inst_48023);

(statearr_48106_50389[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48058 === (9))){
var inst_48012 = (state_48057[(7)]);
var _ = (function (){var statearr_48118 = state_48057;
(statearr_48118[(4)] = cljs.core.cons((12),(state_48057[(4)])));

return statearr_48118;
})();
var inst_48029 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_48012) : chs__$1.call(null,inst_48012));
var inst_48030 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_48012) : done.call(null,inst_48012));
var inst_48031 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_48029,inst_48030);
var ___$1 = (function (){var statearr_48119 = state_48057;
(statearr_48119[(4)] = cljs.core.rest((state_48057[(4)])));

return statearr_48119;
})();
var state_48057__$1 = state_48057;
var statearr_48120_50393 = state_48057__$1;
(statearr_48120_50393[(2)] = inst_48031);

(statearr_48120_50393[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48058 === (5))){
var inst_48041 = (state_48057[(2)]);
var state_48057__$1 = (function (){var statearr_48125 = state_48057;
(statearr_48125[(13)] = inst_48041);

return statearr_48125;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48057__$1,(13),dchan);
} else {
if((state_val_48058 === (14))){
var inst_48046 = cljs.core.async.close_BANG_(out);
var state_48057__$1 = state_48057;
var statearr_48129_50394 = state_48057__$1;
(statearr_48129_50394[(2)] = inst_48046);

(statearr_48129_50394[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48058 === (16))){
var inst_48053 = (state_48057[(2)]);
var state_48057__$1 = state_48057;
var statearr_48130_50399 = state_48057__$1;
(statearr_48130_50399[(2)] = inst_48053);

(statearr_48130_50399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48058 === (10))){
var inst_48012 = (state_48057[(7)]);
var inst_48034 = (state_48057[(2)]);
var inst_48035 = (inst_48012 + (1));
var inst_48012__$1 = inst_48035;
var state_48057__$1 = (function (){var statearr_48138 = state_48057;
(statearr_48138[(7)] = inst_48012__$1);

(statearr_48138[(14)] = inst_48034);

return statearr_48138;
})();
var statearr_48139_50400 = state_48057__$1;
(statearr_48139_50400[(2)] = null);

(statearr_48139_50400[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48058 === (8))){
var inst_48039 = (state_48057[(2)]);
var state_48057__$1 = state_48057;
var statearr_48140_50401 = state_48057__$1;
(statearr_48140_50401[(2)] = inst_48039);

(statearr_48140_50401[(1)] = (5));


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
var cljs$core$async$state_machine__44648__auto__ = null;
var cljs$core$async$state_machine__44648__auto____0 = (function (){
var statearr_48142 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48142[(0)] = cljs$core$async$state_machine__44648__auto__);

(statearr_48142[(1)] = (1));

return statearr_48142;
});
var cljs$core$async$state_machine__44648__auto____1 = (function (state_48057){
while(true){
var ret_value__44649__auto__ = (function (){try{while(true){
var result__44650__auto__ = switch__44647__auto__(state_48057);
if(cljs.core.keyword_identical_QMARK_(result__44650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44650__auto__;
}
break;
}
}catch (e48143){var ex__44651__auto__ = e48143;
var statearr_48144_50404 = state_48057;
(statearr_48144_50404[(2)] = ex__44651__auto__);


if(cljs.core.seq((state_48057[(4)]))){
var statearr_48145_50406 = state_48057;
(statearr_48145_50406[(1)] = cljs.core.first((state_48057[(4)])));

} else {
throw ex__44651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50409 = state_48057;
state_48057 = G__50409;
continue;
} else {
return ret_value__44649__auto__;
}
break;
}
});
cljs$core$async$state_machine__44648__auto__ = function(state_48057){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44648__auto____1.call(this,state_48057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44648__auto____0;
cljs$core$async$state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44648__auto____1;
return cljs$core$async$state_machine__44648__auto__;
})()
})();
var state__45577__auto__ = (function (){var statearr_48149 = f__45576__auto__();
(statearr_48149[(6)] = c__45575__auto___50339);

return statearr_48149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45577__auto__);
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
var G__48160 = arguments.length;
switch (G__48160) {
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
var c__45575__auto___50411 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45576__auto__ = (function (){var switch__44647__auto__ = (function (state_48200){
var state_val_48201 = (state_48200[(1)]);
if((state_val_48201 === (7))){
var inst_48179 = (state_48200[(7)]);
var inst_48178 = (state_48200[(8)]);
var inst_48178__$1 = (state_48200[(2)]);
var inst_48179__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48178__$1,(0),null);
var inst_48181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48178__$1,(1),null);
var inst_48182 = (inst_48179__$1 == null);
var state_48200__$1 = (function (){var statearr_48205 = state_48200;
(statearr_48205[(7)] = inst_48179__$1);

(statearr_48205[(8)] = inst_48178__$1);

(statearr_48205[(9)] = inst_48181);

return statearr_48205;
})();
if(cljs.core.truth_(inst_48182)){
var statearr_48208_50417 = state_48200__$1;
(statearr_48208_50417[(1)] = (8));

} else {
var statearr_48209_50421 = state_48200__$1;
(statearr_48209_50421[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48201 === (1))){
var inst_48163 = cljs.core.vec(chs);
var inst_48166 = inst_48163;
var state_48200__$1 = (function (){var statearr_48211 = state_48200;
(statearr_48211[(10)] = inst_48166);

return statearr_48211;
})();
var statearr_48219_50422 = state_48200__$1;
(statearr_48219_50422[(2)] = null);

(statearr_48219_50422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48201 === (4))){
var inst_48166 = (state_48200[(10)]);
var state_48200__$1 = state_48200;
return cljs.core.async.ioc_alts_BANG_(state_48200__$1,(7),inst_48166);
} else {
if((state_val_48201 === (6))){
var inst_48196 = (state_48200[(2)]);
var state_48200__$1 = state_48200;
var statearr_48222_50424 = state_48200__$1;
(statearr_48222_50424[(2)] = inst_48196);

(statearr_48222_50424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48201 === (3))){
var inst_48198 = (state_48200[(2)]);
var state_48200__$1 = state_48200;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48200__$1,inst_48198);
} else {
if((state_val_48201 === (2))){
var inst_48166 = (state_48200[(10)]);
var inst_48171 = cljs.core.count(inst_48166);
var inst_48172 = (inst_48171 > (0));
var state_48200__$1 = state_48200;
if(cljs.core.truth_(inst_48172)){
var statearr_48231_50429 = state_48200__$1;
(statearr_48231_50429[(1)] = (4));

} else {
var statearr_48232_50430 = state_48200__$1;
(statearr_48232_50430[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48201 === (11))){
var inst_48166 = (state_48200[(10)]);
var inst_48189 = (state_48200[(2)]);
var tmp48227 = inst_48166;
var inst_48166__$1 = tmp48227;
var state_48200__$1 = (function (){var statearr_48235 = state_48200;
(statearr_48235[(10)] = inst_48166__$1);

(statearr_48235[(11)] = inst_48189);

return statearr_48235;
})();
var statearr_48239_50434 = state_48200__$1;
(statearr_48239_50434[(2)] = null);

(statearr_48239_50434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48201 === (9))){
var inst_48179 = (state_48200[(7)]);
var state_48200__$1 = state_48200;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48200__$1,(11),out,inst_48179);
} else {
if((state_val_48201 === (5))){
var inst_48194 = cljs.core.async.close_BANG_(out);
var state_48200__$1 = state_48200;
var statearr_48247_50435 = state_48200__$1;
(statearr_48247_50435[(2)] = inst_48194);

(statearr_48247_50435[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48201 === (10))){
var inst_48192 = (state_48200[(2)]);
var state_48200__$1 = state_48200;
var statearr_48250_50441 = state_48200__$1;
(statearr_48250_50441[(2)] = inst_48192);

(statearr_48250_50441[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48201 === (8))){
var inst_48179 = (state_48200[(7)]);
var inst_48178 = (state_48200[(8)]);
var inst_48166 = (state_48200[(10)]);
var inst_48181 = (state_48200[(9)]);
var inst_48184 = (function (){var cs = inst_48166;
var vec__48174 = inst_48178;
var v = inst_48179;
var c = inst_48181;
return (function (p1__48155_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__48155_SHARP_);
});
})();
var inst_48185 = cljs.core.filterv(inst_48184,inst_48166);
var inst_48166__$1 = inst_48185;
var state_48200__$1 = (function (){var statearr_48251 = state_48200;
(statearr_48251[(10)] = inst_48166__$1);

return statearr_48251;
})();
var statearr_48252_50455 = state_48200__$1;
(statearr_48252_50455[(2)] = null);

(statearr_48252_50455[(1)] = (2));


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
var cljs$core$async$state_machine__44648__auto__ = null;
var cljs$core$async$state_machine__44648__auto____0 = (function (){
var statearr_48266 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48266[(0)] = cljs$core$async$state_machine__44648__auto__);

(statearr_48266[(1)] = (1));

return statearr_48266;
});
var cljs$core$async$state_machine__44648__auto____1 = (function (state_48200){
while(true){
var ret_value__44649__auto__ = (function (){try{while(true){
var result__44650__auto__ = switch__44647__auto__(state_48200);
if(cljs.core.keyword_identical_QMARK_(result__44650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44650__auto__;
}
break;
}
}catch (e48267){var ex__44651__auto__ = e48267;
var statearr_48269_50459 = state_48200;
(statearr_48269_50459[(2)] = ex__44651__auto__);


if(cljs.core.seq((state_48200[(4)]))){
var statearr_48270_50463 = state_48200;
(statearr_48270_50463[(1)] = cljs.core.first((state_48200[(4)])));

} else {
throw ex__44651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50464 = state_48200;
state_48200 = G__50464;
continue;
} else {
return ret_value__44649__auto__;
}
break;
}
});
cljs$core$async$state_machine__44648__auto__ = function(state_48200){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44648__auto____1.call(this,state_48200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44648__auto____0;
cljs$core$async$state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44648__auto____1;
return cljs$core$async$state_machine__44648__auto__;
})()
})();
var state__45577__auto__ = (function (){var statearr_48271 = f__45576__auto__();
(statearr_48271[(6)] = c__45575__auto___50411);

return statearr_48271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45577__auto__);
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
var G__48274 = arguments.length;
switch (G__48274) {
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
var c__45575__auto___50471 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45576__auto__ = (function (){var switch__44647__auto__ = (function (state_48304){
var state_val_48305 = (state_48304[(1)]);
if((state_val_48305 === (7))){
var inst_48285 = (state_48304[(7)]);
var inst_48285__$1 = (state_48304[(2)]);
var inst_48287 = (inst_48285__$1 == null);
var inst_48288 = cljs.core.not(inst_48287);
var state_48304__$1 = (function (){var statearr_48307 = state_48304;
(statearr_48307[(7)] = inst_48285__$1);

return statearr_48307;
})();
if(inst_48288){
var statearr_48308_50477 = state_48304__$1;
(statearr_48308_50477[(1)] = (8));

} else {
var statearr_48309_50478 = state_48304__$1;
(statearr_48309_50478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48305 === (1))){
var inst_48280 = (0);
var state_48304__$1 = (function (){var statearr_48310 = state_48304;
(statearr_48310[(8)] = inst_48280);

return statearr_48310;
})();
var statearr_48311_50479 = state_48304__$1;
(statearr_48311_50479[(2)] = null);

(statearr_48311_50479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48305 === (4))){
var state_48304__$1 = state_48304;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48304__$1,(7),ch);
} else {
if((state_val_48305 === (6))){
var inst_48299 = (state_48304[(2)]);
var state_48304__$1 = state_48304;
var statearr_48318_50482 = state_48304__$1;
(statearr_48318_50482[(2)] = inst_48299);

(statearr_48318_50482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48305 === (3))){
var inst_48301 = (state_48304[(2)]);
var inst_48302 = cljs.core.async.close_BANG_(out);
var state_48304__$1 = (function (){var statearr_48322 = state_48304;
(statearr_48322[(9)] = inst_48301);

return statearr_48322;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48304__$1,inst_48302);
} else {
if((state_val_48305 === (2))){
var inst_48280 = (state_48304[(8)]);
var inst_48282 = (inst_48280 < n);
var state_48304__$1 = state_48304;
if(cljs.core.truth_(inst_48282)){
var statearr_48323_50487 = state_48304__$1;
(statearr_48323_50487[(1)] = (4));

} else {
var statearr_48325_50488 = state_48304__$1;
(statearr_48325_50488[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48305 === (11))){
var inst_48280 = (state_48304[(8)]);
var inst_48291 = (state_48304[(2)]);
var inst_48292 = (inst_48280 + (1));
var inst_48280__$1 = inst_48292;
var state_48304__$1 = (function (){var statearr_48332 = state_48304;
(statearr_48332[(8)] = inst_48280__$1);

(statearr_48332[(10)] = inst_48291);

return statearr_48332;
})();
var statearr_48333_50490 = state_48304__$1;
(statearr_48333_50490[(2)] = null);

(statearr_48333_50490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48305 === (9))){
var state_48304__$1 = state_48304;
var statearr_48334_50491 = state_48304__$1;
(statearr_48334_50491[(2)] = null);

(statearr_48334_50491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48305 === (5))){
var state_48304__$1 = state_48304;
var statearr_48335_50492 = state_48304__$1;
(statearr_48335_50492[(2)] = null);

(statearr_48335_50492[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48305 === (10))){
var inst_48296 = (state_48304[(2)]);
var state_48304__$1 = state_48304;
var statearr_48336_50493 = state_48304__$1;
(statearr_48336_50493[(2)] = inst_48296);

(statearr_48336_50493[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48305 === (8))){
var inst_48285 = (state_48304[(7)]);
var state_48304__$1 = state_48304;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48304__$1,(11),out,inst_48285);
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
var cljs$core$async$state_machine__44648__auto__ = null;
var cljs$core$async$state_machine__44648__auto____0 = (function (){
var statearr_48346 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48346[(0)] = cljs$core$async$state_machine__44648__auto__);

(statearr_48346[(1)] = (1));

return statearr_48346;
});
var cljs$core$async$state_machine__44648__auto____1 = (function (state_48304){
while(true){
var ret_value__44649__auto__ = (function (){try{while(true){
var result__44650__auto__ = switch__44647__auto__(state_48304);
if(cljs.core.keyword_identical_QMARK_(result__44650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44650__auto__;
}
break;
}
}catch (e48347){var ex__44651__auto__ = e48347;
var statearr_48354_50494 = state_48304;
(statearr_48354_50494[(2)] = ex__44651__auto__);


if(cljs.core.seq((state_48304[(4)]))){
var statearr_48359_50495 = state_48304;
(statearr_48359_50495[(1)] = cljs.core.first((state_48304[(4)])));

} else {
throw ex__44651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50497 = state_48304;
state_48304 = G__50497;
continue;
} else {
return ret_value__44649__auto__;
}
break;
}
});
cljs$core$async$state_machine__44648__auto__ = function(state_48304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44648__auto____1.call(this,state_48304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44648__auto____0;
cljs$core$async$state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44648__auto____1;
return cljs$core$async$state_machine__44648__auto__;
})()
})();
var state__45577__auto__ = (function (){var statearr_48364 = f__45576__auto__();
(statearr_48364[(6)] = c__45575__auto___50471);

return statearr_48364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45577__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48374 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48374 = (function (f,ch,meta48375){
this.f = f;
this.ch = ch;
this.meta48375 = meta48375;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48376,meta48375__$1){
var self__ = this;
var _48376__$1 = this;
return (new cljs.core.async.t_cljs$core$async48374(self__.f,self__.ch,meta48375__$1));
}));

(cljs.core.async.t_cljs$core$async48374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48376){
var self__ = this;
var _48376__$1 = this;
return self__.meta48375;
}));

(cljs.core.async.t_cljs$core$async48374.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48374.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48374.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48374.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48374.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48384 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48384 = (function (f,ch,meta48375,_,fn1,meta48385){
this.f = f;
this.ch = ch;
this.meta48375 = meta48375;
this._ = _;
this.fn1 = fn1;
this.meta48385 = meta48385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48386,meta48385__$1){
var self__ = this;
var _48386__$1 = this;
return (new cljs.core.async.t_cljs$core$async48384(self__.f,self__.ch,self__.meta48375,self__._,self__.fn1,meta48385__$1));
}));

(cljs.core.async.t_cljs$core$async48384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48386){
var self__ = this;
var _48386__$1 = this;
return self__.meta48385;
}));

(cljs.core.async.t_cljs$core$async48384.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48384.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async48384.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48384.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__48369_SHARP_){
var G__48401 = (((p1__48369_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__48369_SHARP_) : self__.f.call(null,p1__48369_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__48401) : f1.call(null,G__48401));
});
}));

(cljs.core.async.t_cljs$core$async48384.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48375","meta48375",43503312,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48374","cljs.core.async/t_cljs$core$async48374",1484674022,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48385","meta48385",-1838644706,null)], null);
}));

(cljs.core.async.t_cljs$core$async48384.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48384.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48384");

(cljs.core.async.t_cljs$core$async48384.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async48384");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48384.
 */
cljs.core.async.__GT_t_cljs$core$async48384 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48384(f__$1,ch__$1,meta48375__$1,___$2,fn1__$1,meta48385){
return (new cljs.core.async.t_cljs$core$async48384(f__$1,ch__$1,meta48375__$1,___$2,fn1__$1,meta48385));
});

}

return (new cljs.core.async.t_cljs$core$async48384(self__.f,self__.ch,self__.meta48375,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__48407 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__48407) : self__.f.call(null,G__48407));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async48374.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48374.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async48374.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48375","meta48375",43503312,null)], null);
}));

(cljs.core.async.t_cljs$core$async48374.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48374.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48374");

(cljs.core.async.t_cljs$core$async48374.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async48374");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48374.
 */
cljs.core.async.__GT_t_cljs$core$async48374 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48374(f__$1,ch__$1,meta48375){
return (new cljs.core.async.t_cljs$core$async48374(f__$1,ch__$1,meta48375));
});

}

return (new cljs.core.async.t_cljs$core$async48374(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48425 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48425 = (function (f,ch,meta48426){
this.f = f;
this.ch = ch;
this.meta48426 = meta48426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48427,meta48426__$1){
var self__ = this;
var _48427__$1 = this;
return (new cljs.core.async.t_cljs$core$async48425(self__.f,self__.ch,meta48426__$1));
}));

(cljs.core.async.t_cljs$core$async48425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48427){
var self__ = this;
var _48427__$1 = this;
return self__.meta48426;
}));

(cljs.core.async.t_cljs$core$async48425.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48425.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48425.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48425.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async48425.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48425.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async48425.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48426","meta48426",2007823713,null)], null);
}));

(cljs.core.async.t_cljs$core$async48425.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48425.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48425");

(cljs.core.async.t_cljs$core$async48425.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async48425");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48425.
 */
cljs.core.async.__GT_t_cljs$core$async48425 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48425(f__$1,ch__$1,meta48426){
return (new cljs.core.async.t_cljs$core$async48425(f__$1,ch__$1,meta48426));
});

}

return (new cljs.core.async.t_cljs$core$async48425(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48458 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48458 = (function (p,ch,meta48459){
this.p = p;
this.ch = ch;
this.meta48459 = meta48459;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48460,meta48459__$1){
var self__ = this;
var _48460__$1 = this;
return (new cljs.core.async.t_cljs$core$async48458(self__.p,self__.ch,meta48459__$1));
}));

(cljs.core.async.t_cljs$core$async48458.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48460){
var self__ = this;
var _48460__$1 = this;
return self__.meta48459;
}));

(cljs.core.async.t_cljs$core$async48458.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48458.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48458.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48458.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48458.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async48458.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48458.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async48458.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48459","meta48459",1840351366,null)], null);
}));

(cljs.core.async.t_cljs$core$async48458.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48458.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48458");

(cljs.core.async.t_cljs$core$async48458.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async48458");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48458.
 */
cljs.core.async.__GT_t_cljs$core$async48458 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48458(p__$1,ch__$1,meta48459){
return (new cljs.core.async.t_cljs$core$async48458(p__$1,ch__$1,meta48459));
});

}

return (new cljs.core.async.t_cljs$core$async48458(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__48473 = arguments.length;
switch (G__48473) {
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
var c__45575__auto___50547 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45576__auto__ = (function (){var switch__44647__auto__ = (function (state_48498){
var state_val_48499 = (state_48498[(1)]);
if((state_val_48499 === (7))){
var inst_48494 = (state_48498[(2)]);
var state_48498__$1 = state_48498;
var statearr_48502_50551 = state_48498__$1;
(statearr_48502_50551[(2)] = inst_48494);

(statearr_48502_50551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (1))){
var state_48498__$1 = state_48498;
var statearr_48503_50553 = state_48498__$1;
(statearr_48503_50553[(2)] = null);

(statearr_48503_50553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (4))){
var inst_48479 = (state_48498[(7)]);
var inst_48479__$1 = (state_48498[(2)]);
var inst_48480 = (inst_48479__$1 == null);
var state_48498__$1 = (function (){var statearr_48504 = state_48498;
(statearr_48504[(7)] = inst_48479__$1);

return statearr_48504;
})();
if(cljs.core.truth_(inst_48480)){
var statearr_48505_50557 = state_48498__$1;
(statearr_48505_50557[(1)] = (5));

} else {
var statearr_48506_50558 = state_48498__$1;
(statearr_48506_50558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (6))){
var inst_48479 = (state_48498[(7)]);
var inst_48484 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_48479) : p.call(null,inst_48479));
var state_48498__$1 = state_48498;
if(cljs.core.truth_(inst_48484)){
var statearr_48507_50560 = state_48498__$1;
(statearr_48507_50560[(1)] = (8));

} else {
var statearr_48508_50561 = state_48498__$1;
(statearr_48508_50561[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (3))){
var inst_48496 = (state_48498[(2)]);
var state_48498__$1 = state_48498;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48498__$1,inst_48496);
} else {
if((state_val_48499 === (2))){
var state_48498__$1 = state_48498;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48498__$1,(4),ch);
} else {
if((state_val_48499 === (11))){
var inst_48488 = (state_48498[(2)]);
var state_48498__$1 = state_48498;
var statearr_48509_50571 = state_48498__$1;
(statearr_48509_50571[(2)] = inst_48488);

(statearr_48509_50571[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (9))){
var state_48498__$1 = state_48498;
var statearr_48510_50572 = state_48498__$1;
(statearr_48510_50572[(2)] = null);

(statearr_48510_50572[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (5))){
var inst_48482 = cljs.core.async.close_BANG_(out);
var state_48498__$1 = state_48498;
var statearr_48511_50578 = state_48498__$1;
(statearr_48511_50578[(2)] = inst_48482);

(statearr_48511_50578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (10))){
var inst_48491 = (state_48498[(2)]);
var state_48498__$1 = (function (){var statearr_48512 = state_48498;
(statearr_48512[(8)] = inst_48491);

return statearr_48512;
})();
var statearr_48513_50581 = state_48498__$1;
(statearr_48513_50581[(2)] = null);

(statearr_48513_50581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48499 === (8))){
var inst_48479 = (state_48498[(7)]);
var state_48498__$1 = state_48498;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48498__$1,(11),out,inst_48479);
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
var cljs$core$async$state_machine__44648__auto__ = null;
var cljs$core$async$state_machine__44648__auto____0 = (function (){
var statearr_48518 = [null,null,null,null,null,null,null,null,null];
(statearr_48518[(0)] = cljs$core$async$state_machine__44648__auto__);

(statearr_48518[(1)] = (1));

return statearr_48518;
});
var cljs$core$async$state_machine__44648__auto____1 = (function (state_48498){
while(true){
var ret_value__44649__auto__ = (function (){try{while(true){
var result__44650__auto__ = switch__44647__auto__(state_48498);
if(cljs.core.keyword_identical_QMARK_(result__44650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44650__auto__;
}
break;
}
}catch (e48519){var ex__44651__auto__ = e48519;
var statearr_48520_50584 = state_48498;
(statearr_48520_50584[(2)] = ex__44651__auto__);


if(cljs.core.seq((state_48498[(4)]))){
var statearr_48524_50585 = state_48498;
(statearr_48524_50585[(1)] = cljs.core.first((state_48498[(4)])));

} else {
throw ex__44651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50588 = state_48498;
state_48498 = G__50588;
continue;
} else {
return ret_value__44649__auto__;
}
break;
}
});
cljs$core$async$state_machine__44648__auto__ = function(state_48498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44648__auto____1.call(this,state_48498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44648__auto____0;
cljs$core$async$state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44648__auto____1;
return cljs$core$async$state_machine__44648__auto__;
})()
})();
var state__45577__auto__ = (function (){var statearr_48529 = f__45576__auto__();
(statearr_48529[(6)] = c__45575__auto___50547);

return statearr_48529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45577__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__48531 = arguments.length;
switch (G__48531) {
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
var c__45575__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45576__auto__ = (function (){var switch__44647__auto__ = (function (state_48641){
var state_val_48642 = (state_48641[(1)]);
if((state_val_48642 === (7))){
var inst_48637 = (state_48641[(2)]);
var state_48641__$1 = state_48641;
var statearr_48651_50594 = state_48641__$1;
(statearr_48651_50594[(2)] = inst_48637);

(statearr_48651_50594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48642 === (20))){
var inst_48601 = (state_48641[(7)]);
var inst_48612 = (state_48641[(2)]);
var inst_48616 = cljs.core.next(inst_48601);
var inst_48578 = inst_48616;
var inst_48579 = null;
var inst_48580 = (0);
var inst_48581 = (0);
var state_48641__$1 = (function (){var statearr_48654 = state_48641;
(statearr_48654[(8)] = inst_48578);

(statearr_48654[(9)] = inst_48581);

(statearr_48654[(10)] = inst_48580);

(statearr_48654[(11)] = inst_48579);

(statearr_48654[(12)] = inst_48612);

return statearr_48654;
})();
var statearr_48655_50596 = state_48641__$1;
(statearr_48655_50596[(2)] = null);

(statearr_48655_50596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48642 === (1))){
var state_48641__$1 = state_48641;
var statearr_48656_50600 = state_48641__$1;
(statearr_48656_50600[(2)] = null);

(statearr_48656_50600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48642 === (4))){
var inst_48558 = (state_48641[(13)]);
var inst_48558__$1 = (state_48641[(2)]);
var inst_48562 = (inst_48558__$1 == null);
var state_48641__$1 = (function (){var statearr_48657 = state_48641;
(statearr_48657[(13)] = inst_48558__$1);

return statearr_48657;
})();
if(cljs.core.truth_(inst_48562)){
var statearr_48662_50601 = state_48641__$1;
(statearr_48662_50601[(1)] = (5));

} else {
var statearr_48663_50602 = state_48641__$1;
(statearr_48663_50602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48642 === (15))){
var state_48641__$1 = state_48641;
var statearr_48667_50606 = state_48641__$1;
(statearr_48667_50606[(2)] = null);

(statearr_48667_50606[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48642 === (21))){
var state_48641__$1 = state_48641;
var statearr_48672_50607 = state_48641__$1;
(statearr_48672_50607[(2)] = null);

(statearr_48672_50607[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48642 === (13))){
var inst_48578 = (state_48641[(8)]);
var inst_48581 = (state_48641[(9)]);
var inst_48580 = (state_48641[(10)]);
var inst_48579 = (state_48641[(11)]);
var inst_48597 = (state_48641[(2)]);
var inst_48598 = (inst_48581 + (1));
var tmp48664 = inst_48578;
var tmp48665 = inst_48580;
var tmp48666 = inst_48579;
var inst_48578__$1 = tmp48664;
var inst_48579__$1 = tmp48666;
var inst_48580__$1 = tmp48665;
var inst_48581__$1 = inst_48598;
var state_48641__$1 = (function (){var statearr_48673 = state_48641;
(statearr_48673[(8)] = inst_48578__$1);

(statearr_48673[(9)] = inst_48581__$1);

(statearr_48673[(10)] = inst_48580__$1);

(statearr_48673[(14)] = inst_48597);

(statearr_48673[(11)] = inst_48579__$1);

return statearr_48673;
})();
var statearr_48674_50610 = state_48641__$1;
(statearr_48674_50610[(2)] = null);

(statearr_48674_50610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48642 === (22))){
var state_48641__$1 = state_48641;
var statearr_48675_50612 = state_48641__$1;
(statearr_48675_50612[(2)] = null);

(statearr_48675_50612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48642 === (6))){
var inst_48558 = (state_48641[(13)]);
var inst_48573 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_48558) : f.call(null,inst_48558));
var inst_48574 = cljs.core.seq(inst_48573);
var inst_48578 = inst_48574;
var inst_48579 = null;
var inst_48580 = (0);
var inst_48581 = (0);
var state_48641__$1 = (function (){var statearr_48676 = state_48641;
(statearr_48676[(8)] = inst_48578);

(statearr_48676[(9)] = inst_48581);

(statearr_48676[(10)] = inst_48580);

(statearr_48676[(11)] = inst_48579);

return statearr_48676;
})();
var statearr_48677_50616 = state_48641__$1;
(statearr_48677_50616[(2)] = null);

(statearr_48677_50616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48642 === (17))){
var inst_48601 = (state_48641[(7)]);
var inst_48605 = cljs.core.chunk_first(inst_48601);
var inst_48606 = cljs.core.chunk_rest(inst_48601);
var inst_48607 = cljs.core.count(inst_48605);
var inst_48578 = inst_48606;
var inst_48579 = inst_48605;
var inst_48580 = inst_48607;
var inst_48581 = (0);
var state_48641__$1 = (function (){var statearr_48678 = state_48641;
(statearr_48678[(8)] = inst_48578);

(statearr_48678[(9)] = inst_48581);

(statearr_48678[(10)] = inst_48580);

(statearr_48678[(11)] = inst_48579);

return statearr_48678;
})();
var statearr_48685_50617 = state_48641__$1;
(statearr_48685_50617[(2)] = null);

(statearr_48685_50617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48642 === (3))){
var inst_48639 = (state_48641[(2)]);
var state_48641__$1 = state_48641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48641__$1,inst_48639);
} else {
if((state_val_48642 === (12))){
var inst_48627 = (state_48641[(2)]);
var state_48641__$1 = state_48641;
var statearr_48691_50622 = state_48641__$1;
(statearr_48691_50622[(2)] = inst_48627);

(statearr_48691_50622[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48642 === (2))){
var state_48641__$1 = state_48641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48641__$1,(4),in$);
} else {
if((state_val_48642 === (23))){
var inst_48635 = (state_48641[(2)]);
var state_48641__$1 = state_48641;
var statearr_48692_50631 = state_48641__$1;
(statearr_48692_50631[(2)] = inst_48635);

(statearr_48692_50631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48642 === (19))){
var inst_48622 = (state_48641[(2)]);
var state_48641__$1 = state_48641;
var statearr_48693_50633 = state_48641__$1;
(statearr_48693_50633[(2)] = inst_48622);

(statearr_48693_50633[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48642 === (11))){
var inst_48578 = (state_48641[(8)]);
var inst_48601 = (state_48641[(7)]);
var inst_48601__$1 = cljs.core.seq(inst_48578);
var state_48641__$1 = (function (){var statearr_48694 = state_48641;
(statearr_48694[(7)] = inst_48601__$1);

return statearr_48694;
})();
if(inst_48601__$1){
var statearr_48695_50634 = state_48641__$1;
(statearr_48695_50634[(1)] = (14));

} else {
var statearr_48696_50635 = state_48641__$1;
(statearr_48696_50635[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48642 === (9))){
var inst_48629 = (state_48641[(2)]);
var inst_48630 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_48641__$1 = (function (){var statearr_48699 = state_48641;
(statearr_48699[(15)] = inst_48629);

return statearr_48699;
})();
if(cljs.core.truth_(inst_48630)){
var statearr_48702_50637 = state_48641__$1;
(statearr_48702_50637[(1)] = (21));

} else {
var statearr_48703_50639 = state_48641__$1;
(statearr_48703_50639[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48642 === (5))){
var inst_48564 = cljs.core.async.close_BANG_(out);
var state_48641__$1 = state_48641;
var statearr_48704_50640 = state_48641__$1;
(statearr_48704_50640[(2)] = inst_48564);

(statearr_48704_50640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48642 === (14))){
var inst_48601 = (state_48641[(7)]);
var inst_48603 = cljs.core.chunked_seq_QMARK_(inst_48601);
var state_48641__$1 = state_48641;
if(inst_48603){
var statearr_48705_50641 = state_48641__$1;
(statearr_48705_50641[(1)] = (17));

} else {
var statearr_48706_50643 = state_48641__$1;
(statearr_48706_50643[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48642 === (16))){
var inst_48625 = (state_48641[(2)]);
var state_48641__$1 = state_48641;
var statearr_48707_50646 = state_48641__$1;
(statearr_48707_50646[(2)] = inst_48625);

(statearr_48707_50646[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48642 === (10))){
var inst_48581 = (state_48641[(9)]);
var inst_48579 = (state_48641[(11)]);
var inst_48595 = cljs.core._nth(inst_48579,inst_48581);
var state_48641__$1 = state_48641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48641__$1,(13),out,inst_48595);
} else {
if((state_val_48642 === (18))){
var inst_48601 = (state_48641[(7)]);
var inst_48610 = cljs.core.first(inst_48601);
var state_48641__$1 = state_48641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48641__$1,(20),out,inst_48610);
} else {
if((state_val_48642 === (8))){
var inst_48581 = (state_48641[(9)]);
var inst_48580 = (state_48641[(10)]);
var inst_48589 = (inst_48581 < inst_48580);
var inst_48590 = inst_48589;
var state_48641__$1 = state_48641;
if(cljs.core.truth_(inst_48590)){
var statearr_48712_50650 = state_48641__$1;
(statearr_48712_50650[(1)] = (10));

} else {
var statearr_48713_50651 = state_48641__$1;
(statearr_48713_50651[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__44648__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__44648__auto____0 = (function (){
var statearr_48714 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48714[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__44648__auto__);

(statearr_48714[(1)] = (1));

return statearr_48714;
});
var cljs$core$async$mapcat_STAR__$_state_machine__44648__auto____1 = (function (state_48641){
while(true){
var ret_value__44649__auto__ = (function (){try{while(true){
var result__44650__auto__ = switch__44647__auto__(state_48641);
if(cljs.core.keyword_identical_QMARK_(result__44650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44650__auto__;
}
break;
}
}catch (e48718){var ex__44651__auto__ = e48718;
var statearr_48719_50657 = state_48641;
(statearr_48719_50657[(2)] = ex__44651__auto__);


if(cljs.core.seq((state_48641[(4)]))){
var statearr_48720_50659 = state_48641;
(statearr_48720_50659[(1)] = cljs.core.first((state_48641[(4)])));

} else {
throw ex__44651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50660 = state_48641;
state_48641 = G__50660;
continue;
} else {
return ret_value__44649__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__44648__auto__ = function(state_48641){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__44648__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__44648__auto____1.call(this,state_48641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__44648__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__44648__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__44648__auto__;
})()
})();
var state__45577__auto__ = (function (){var statearr_48722 = f__45576__auto__();
(statearr_48722[(6)] = c__45575__auto__);

return statearr_48722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45577__auto__);
}));

return c__45575__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__48724 = arguments.length;
switch (G__48724) {
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
var G__48735 = arguments.length;
switch (G__48735) {
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
var G__48738 = arguments.length;
switch (G__48738) {
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
var c__45575__auto___50687 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45576__auto__ = (function (){var switch__44647__auto__ = (function (state_48766){
var state_val_48767 = (state_48766[(1)]);
if((state_val_48767 === (7))){
var inst_48760 = (state_48766[(2)]);
var state_48766__$1 = state_48766;
var statearr_48768_50693 = state_48766__$1;
(statearr_48768_50693[(2)] = inst_48760);

(statearr_48768_50693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48767 === (1))){
var inst_48739 = null;
var state_48766__$1 = (function (){var statearr_48769 = state_48766;
(statearr_48769[(7)] = inst_48739);

return statearr_48769;
})();
var statearr_48770_50696 = state_48766__$1;
(statearr_48770_50696[(2)] = null);

(statearr_48770_50696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48767 === (4))){
var inst_48745 = (state_48766[(8)]);
var inst_48745__$1 = (state_48766[(2)]);
var inst_48746 = (inst_48745__$1 == null);
var inst_48747 = cljs.core.not(inst_48746);
var state_48766__$1 = (function (){var statearr_48771 = state_48766;
(statearr_48771[(8)] = inst_48745__$1);

return statearr_48771;
})();
if(inst_48747){
var statearr_48773_50701 = state_48766__$1;
(statearr_48773_50701[(1)] = (5));

} else {
var statearr_48774_50702 = state_48766__$1;
(statearr_48774_50702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48767 === (6))){
var state_48766__$1 = state_48766;
var statearr_48776_50705 = state_48766__$1;
(statearr_48776_50705[(2)] = null);

(statearr_48776_50705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48767 === (3))){
var inst_48762 = (state_48766[(2)]);
var inst_48763 = cljs.core.async.close_BANG_(out);
var state_48766__$1 = (function (){var statearr_48777 = state_48766;
(statearr_48777[(9)] = inst_48762);

return statearr_48777;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48766__$1,inst_48763);
} else {
if((state_val_48767 === (2))){
var state_48766__$1 = state_48766;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48766__$1,(4),ch);
} else {
if((state_val_48767 === (11))){
var inst_48745 = (state_48766[(8)]);
var inst_48754 = (state_48766[(2)]);
var inst_48739 = inst_48745;
var state_48766__$1 = (function (){var statearr_48781 = state_48766;
(statearr_48781[(7)] = inst_48739);

(statearr_48781[(10)] = inst_48754);

return statearr_48781;
})();
var statearr_48782_50707 = state_48766__$1;
(statearr_48782_50707[(2)] = null);

(statearr_48782_50707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48767 === (9))){
var inst_48745 = (state_48766[(8)]);
var state_48766__$1 = state_48766;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48766__$1,(11),out,inst_48745);
} else {
if((state_val_48767 === (5))){
var inst_48739 = (state_48766[(7)]);
var inst_48745 = (state_48766[(8)]);
var inst_48749 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48745,inst_48739);
var state_48766__$1 = state_48766;
if(inst_48749){
var statearr_48787_50711 = state_48766__$1;
(statearr_48787_50711[(1)] = (8));

} else {
var statearr_48788_50712 = state_48766__$1;
(statearr_48788_50712[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48767 === (10))){
var inst_48757 = (state_48766[(2)]);
var state_48766__$1 = state_48766;
var statearr_48789_50713 = state_48766__$1;
(statearr_48789_50713[(2)] = inst_48757);

(statearr_48789_50713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48767 === (8))){
var inst_48739 = (state_48766[(7)]);
var tmp48786 = inst_48739;
var inst_48739__$1 = tmp48786;
var state_48766__$1 = (function (){var statearr_48790 = state_48766;
(statearr_48790[(7)] = inst_48739__$1);

return statearr_48790;
})();
var statearr_48791_50714 = state_48766__$1;
(statearr_48791_50714[(2)] = null);

(statearr_48791_50714[(1)] = (2));


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
var cljs$core$async$state_machine__44648__auto__ = null;
var cljs$core$async$state_machine__44648__auto____0 = (function (){
var statearr_48792 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48792[(0)] = cljs$core$async$state_machine__44648__auto__);

(statearr_48792[(1)] = (1));

return statearr_48792;
});
var cljs$core$async$state_machine__44648__auto____1 = (function (state_48766){
while(true){
var ret_value__44649__auto__ = (function (){try{while(true){
var result__44650__auto__ = switch__44647__auto__(state_48766);
if(cljs.core.keyword_identical_QMARK_(result__44650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44650__auto__;
}
break;
}
}catch (e48793){var ex__44651__auto__ = e48793;
var statearr_48795_50723 = state_48766;
(statearr_48795_50723[(2)] = ex__44651__auto__);


if(cljs.core.seq((state_48766[(4)]))){
var statearr_48800_50724 = state_48766;
(statearr_48800_50724[(1)] = cljs.core.first((state_48766[(4)])));

} else {
throw ex__44651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50734 = state_48766;
state_48766 = G__50734;
continue;
} else {
return ret_value__44649__auto__;
}
break;
}
});
cljs$core$async$state_machine__44648__auto__ = function(state_48766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44648__auto____1.call(this,state_48766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44648__auto____0;
cljs$core$async$state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44648__auto____1;
return cljs$core$async$state_machine__44648__auto__;
})()
})();
var state__45577__auto__ = (function (){var statearr_48804 = f__45576__auto__();
(statearr_48804[(6)] = c__45575__auto___50687);

return statearr_48804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45577__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__48808 = arguments.length;
switch (G__48808) {
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
var c__45575__auto___50739 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45576__auto__ = (function (){var switch__44647__auto__ = (function (state_48852){
var state_val_48853 = (state_48852[(1)]);
if((state_val_48853 === (7))){
var inst_48848 = (state_48852[(2)]);
var state_48852__$1 = state_48852;
var statearr_48854_50740 = state_48852__$1;
(statearr_48854_50740[(2)] = inst_48848);

(statearr_48854_50740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (1))){
var inst_48815 = (new Array(n));
var inst_48816 = inst_48815;
var inst_48817 = (0);
var state_48852__$1 = (function (){var statearr_48855 = state_48852;
(statearr_48855[(7)] = inst_48817);

(statearr_48855[(8)] = inst_48816);

return statearr_48855;
})();
var statearr_48860_50741 = state_48852__$1;
(statearr_48860_50741[(2)] = null);

(statearr_48860_50741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (4))){
var inst_48820 = (state_48852[(9)]);
var inst_48820__$1 = (state_48852[(2)]);
var inst_48821 = (inst_48820__$1 == null);
var inst_48822 = cljs.core.not(inst_48821);
var state_48852__$1 = (function (){var statearr_48862 = state_48852;
(statearr_48862[(9)] = inst_48820__$1);

return statearr_48862;
})();
if(inst_48822){
var statearr_48863_50748 = state_48852__$1;
(statearr_48863_50748[(1)] = (5));

} else {
var statearr_48864_50749 = state_48852__$1;
(statearr_48864_50749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (15))){
var inst_48842 = (state_48852[(2)]);
var state_48852__$1 = state_48852;
var statearr_48865_50753 = state_48852__$1;
(statearr_48865_50753[(2)] = inst_48842);

(statearr_48865_50753[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (13))){
var state_48852__$1 = state_48852;
var statearr_48868_50754 = state_48852__$1;
(statearr_48868_50754[(2)] = null);

(statearr_48868_50754[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (6))){
var inst_48817 = (state_48852[(7)]);
var inst_48838 = (inst_48817 > (0));
var state_48852__$1 = state_48852;
if(cljs.core.truth_(inst_48838)){
var statearr_48869_50755 = state_48852__$1;
(statearr_48869_50755[(1)] = (12));

} else {
var statearr_48870_50756 = state_48852__$1;
(statearr_48870_50756[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (3))){
var inst_48850 = (state_48852[(2)]);
var state_48852__$1 = state_48852;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48852__$1,inst_48850);
} else {
if((state_val_48853 === (12))){
var inst_48816 = (state_48852[(8)]);
var inst_48840 = cljs.core.vec(inst_48816);
var state_48852__$1 = state_48852;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48852__$1,(15),out,inst_48840);
} else {
if((state_val_48853 === (2))){
var state_48852__$1 = state_48852;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48852__$1,(4),ch);
} else {
if((state_val_48853 === (11))){
var inst_48832 = (state_48852[(2)]);
var inst_48833 = (new Array(n));
var inst_48816 = inst_48833;
var inst_48817 = (0);
var state_48852__$1 = (function (){var statearr_48879 = state_48852;
(statearr_48879[(10)] = inst_48832);

(statearr_48879[(7)] = inst_48817);

(statearr_48879[(8)] = inst_48816);

return statearr_48879;
})();
var statearr_48880_50760 = state_48852__$1;
(statearr_48880_50760[(2)] = null);

(statearr_48880_50760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (9))){
var inst_48816 = (state_48852[(8)]);
var inst_48830 = cljs.core.vec(inst_48816);
var state_48852__$1 = state_48852;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48852__$1,(11),out,inst_48830);
} else {
if((state_val_48853 === (5))){
var inst_48825 = (state_48852[(11)]);
var inst_48817 = (state_48852[(7)]);
var inst_48820 = (state_48852[(9)]);
var inst_48816 = (state_48852[(8)]);
var inst_48824 = (inst_48816[inst_48817] = inst_48820);
var inst_48825__$1 = (inst_48817 + (1));
var inst_48826 = (inst_48825__$1 < n);
var state_48852__$1 = (function (){var statearr_48886 = state_48852;
(statearr_48886[(11)] = inst_48825__$1);

(statearr_48886[(12)] = inst_48824);

return statearr_48886;
})();
if(cljs.core.truth_(inst_48826)){
var statearr_48887_50764 = state_48852__$1;
(statearr_48887_50764[(1)] = (8));

} else {
var statearr_48888_50765 = state_48852__$1;
(statearr_48888_50765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (14))){
var inst_48845 = (state_48852[(2)]);
var inst_48846 = cljs.core.async.close_BANG_(out);
var state_48852__$1 = (function (){var statearr_48898 = state_48852;
(statearr_48898[(13)] = inst_48845);

return statearr_48898;
})();
var statearr_48899_50768 = state_48852__$1;
(statearr_48899_50768[(2)] = inst_48846);

(statearr_48899_50768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (10))){
var inst_48836 = (state_48852[(2)]);
var state_48852__$1 = state_48852;
var statearr_48904_50770 = state_48852__$1;
(statearr_48904_50770[(2)] = inst_48836);

(statearr_48904_50770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (8))){
var inst_48825 = (state_48852[(11)]);
var inst_48816 = (state_48852[(8)]);
var tmp48893 = inst_48816;
var inst_48816__$1 = tmp48893;
var inst_48817 = inst_48825;
var state_48852__$1 = (function (){var statearr_48905 = state_48852;
(statearr_48905[(7)] = inst_48817);

(statearr_48905[(8)] = inst_48816__$1);

return statearr_48905;
})();
var statearr_48906_50775 = state_48852__$1;
(statearr_48906_50775[(2)] = null);

(statearr_48906_50775[(1)] = (2));


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
var cljs$core$async$state_machine__44648__auto__ = null;
var cljs$core$async$state_machine__44648__auto____0 = (function (){
var statearr_48911 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48911[(0)] = cljs$core$async$state_machine__44648__auto__);

(statearr_48911[(1)] = (1));

return statearr_48911;
});
var cljs$core$async$state_machine__44648__auto____1 = (function (state_48852){
while(true){
var ret_value__44649__auto__ = (function (){try{while(true){
var result__44650__auto__ = switch__44647__auto__(state_48852);
if(cljs.core.keyword_identical_QMARK_(result__44650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44650__auto__;
}
break;
}
}catch (e48914){var ex__44651__auto__ = e48914;
var statearr_48915_50782 = state_48852;
(statearr_48915_50782[(2)] = ex__44651__auto__);


if(cljs.core.seq((state_48852[(4)]))){
var statearr_48916_50783 = state_48852;
(statearr_48916_50783[(1)] = cljs.core.first((state_48852[(4)])));

} else {
throw ex__44651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50785 = state_48852;
state_48852 = G__50785;
continue;
} else {
return ret_value__44649__auto__;
}
break;
}
});
cljs$core$async$state_machine__44648__auto__ = function(state_48852){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44648__auto____1.call(this,state_48852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44648__auto____0;
cljs$core$async$state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44648__auto____1;
return cljs$core$async$state_machine__44648__auto__;
})()
})();
var state__45577__auto__ = (function (){var statearr_48923 = f__45576__auto__();
(statearr_48923[(6)] = c__45575__auto___50739);

return statearr_48923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45577__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__48935 = arguments.length;
switch (G__48935) {
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
var c__45575__auto___50794 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45576__auto__ = (function (){var switch__44647__auto__ = (function (state_48997){
var state_val_48998 = (state_48997[(1)]);
if((state_val_48998 === (7))){
var inst_48992 = (state_48997[(2)]);
var state_48997__$1 = state_48997;
var statearr_49005_50797 = state_48997__$1;
(statearr_49005_50797[(2)] = inst_48992);

(statearr_49005_50797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48998 === (1))){
var inst_48936 = [];
var inst_48937 = inst_48936;
var inst_48938 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_48997__$1 = (function (){var statearr_49010 = state_48997;
(statearr_49010[(7)] = inst_48938);

(statearr_49010[(8)] = inst_48937);

return statearr_49010;
})();
var statearr_49013_50800 = state_48997__$1;
(statearr_49013_50800[(2)] = null);

(statearr_49013_50800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48998 === (4))){
var inst_48941 = (state_48997[(9)]);
var inst_48941__$1 = (state_48997[(2)]);
var inst_48954 = (inst_48941__$1 == null);
var inst_48955 = cljs.core.not(inst_48954);
var state_48997__$1 = (function (){var statearr_49015 = state_48997;
(statearr_49015[(9)] = inst_48941__$1);

return statearr_49015;
})();
if(inst_48955){
var statearr_49018_50801 = state_48997__$1;
(statearr_49018_50801[(1)] = (5));

} else {
var statearr_49019_50802 = state_48997__$1;
(statearr_49019_50802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48998 === (15))){
var inst_48937 = (state_48997[(8)]);
var inst_48984 = cljs.core.vec(inst_48937);
var state_48997__$1 = state_48997;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48997__$1,(18),out,inst_48984);
} else {
if((state_val_48998 === (13))){
var inst_48979 = (state_48997[(2)]);
var state_48997__$1 = state_48997;
var statearr_49027_50803 = state_48997__$1;
(statearr_49027_50803[(2)] = inst_48979);

(statearr_49027_50803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48998 === (6))){
var inst_48937 = (state_48997[(8)]);
var inst_48981 = inst_48937.length;
var inst_48982 = (inst_48981 > (0));
var state_48997__$1 = state_48997;
if(cljs.core.truth_(inst_48982)){
var statearr_49033_50805 = state_48997__$1;
(statearr_49033_50805[(1)] = (15));

} else {
var statearr_49034_50806 = state_48997__$1;
(statearr_49034_50806[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48998 === (17))){
var inst_48989 = (state_48997[(2)]);
var inst_48990 = cljs.core.async.close_BANG_(out);
var state_48997__$1 = (function (){var statearr_49037 = state_48997;
(statearr_49037[(10)] = inst_48989);

return statearr_49037;
})();
var statearr_49038_50809 = state_48997__$1;
(statearr_49038_50809[(2)] = inst_48990);

(statearr_49038_50809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48998 === (3))){
var inst_48994 = (state_48997[(2)]);
var state_48997__$1 = state_48997;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48997__$1,inst_48994);
} else {
if((state_val_48998 === (12))){
var inst_48937 = (state_48997[(8)]);
var inst_48971 = cljs.core.vec(inst_48937);
var state_48997__$1 = state_48997;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48997__$1,(14),out,inst_48971);
} else {
if((state_val_48998 === (2))){
var state_48997__$1 = state_48997;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48997__$1,(4),ch);
} else {
if((state_val_48998 === (11))){
var inst_48941 = (state_48997[(9)]);
var inst_48958 = (state_48997[(11)]);
var inst_48937 = (state_48997[(8)]);
var inst_48968 = inst_48937.push(inst_48941);
var tmp49040 = inst_48937;
var inst_48937__$1 = tmp49040;
var inst_48938 = inst_48958;
var state_48997__$1 = (function (){var statearr_49048 = state_48997;
(statearr_49048[(7)] = inst_48938);

(statearr_49048[(8)] = inst_48937__$1);

(statearr_49048[(12)] = inst_48968);

return statearr_49048;
})();
var statearr_49049_50812 = state_48997__$1;
(statearr_49049_50812[(2)] = null);

(statearr_49049_50812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48998 === (9))){
var inst_48938 = (state_48997[(7)]);
var inst_48964 = cljs.core.keyword_identical_QMARK_(inst_48938,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_48997__$1 = state_48997;
var statearr_49054_50814 = state_48997__$1;
(statearr_49054_50814[(2)] = inst_48964);

(statearr_49054_50814[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48998 === (5))){
var inst_48938 = (state_48997[(7)]);
var inst_48941 = (state_48997[(9)]);
var inst_48958 = (state_48997[(11)]);
var inst_48959 = (state_48997[(13)]);
var inst_48958__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_48941) : f.call(null,inst_48941));
var inst_48959__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48958__$1,inst_48938);
var state_48997__$1 = (function (){var statearr_49055 = state_48997;
(statearr_49055[(11)] = inst_48958__$1);

(statearr_49055[(13)] = inst_48959__$1);

return statearr_49055;
})();
if(inst_48959__$1){
var statearr_49056_50818 = state_48997__$1;
(statearr_49056_50818[(1)] = (8));

} else {
var statearr_49057_50819 = state_48997__$1;
(statearr_49057_50819[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48998 === (14))){
var inst_48941 = (state_48997[(9)]);
var inst_48958 = (state_48997[(11)]);
var inst_48973 = (state_48997[(2)]);
var inst_48974 = [];
var inst_48975 = inst_48974.push(inst_48941);
var inst_48937 = inst_48974;
var inst_48938 = inst_48958;
var state_48997__$1 = (function (){var statearr_49058 = state_48997;
(statearr_49058[(7)] = inst_48938);

(statearr_49058[(14)] = inst_48975);

(statearr_49058[(8)] = inst_48937);

(statearr_49058[(15)] = inst_48973);

return statearr_49058;
})();
var statearr_49061_50827 = state_48997__$1;
(statearr_49061_50827[(2)] = null);

(statearr_49061_50827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48998 === (16))){
var state_48997__$1 = state_48997;
var statearr_49063_50828 = state_48997__$1;
(statearr_49063_50828[(2)] = null);

(statearr_49063_50828[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48998 === (10))){
var inst_48966 = (state_48997[(2)]);
var state_48997__$1 = state_48997;
if(cljs.core.truth_(inst_48966)){
var statearr_49068_50829 = state_48997__$1;
(statearr_49068_50829[(1)] = (11));

} else {
var statearr_49069_50830 = state_48997__$1;
(statearr_49069_50830[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48998 === (18))){
var inst_48986 = (state_48997[(2)]);
var state_48997__$1 = state_48997;
var statearr_49076_50831 = state_48997__$1;
(statearr_49076_50831[(2)] = inst_48986);

(statearr_49076_50831[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48998 === (8))){
var inst_48959 = (state_48997[(13)]);
var state_48997__$1 = state_48997;
var statearr_49080_50837 = state_48997__$1;
(statearr_49080_50837[(2)] = inst_48959);

(statearr_49080_50837[(1)] = (10));


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
var cljs$core$async$state_machine__44648__auto__ = null;
var cljs$core$async$state_machine__44648__auto____0 = (function (){
var statearr_49082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49082[(0)] = cljs$core$async$state_machine__44648__auto__);

(statearr_49082[(1)] = (1));

return statearr_49082;
});
var cljs$core$async$state_machine__44648__auto____1 = (function (state_48997){
while(true){
var ret_value__44649__auto__ = (function (){try{while(true){
var result__44650__auto__ = switch__44647__auto__(state_48997);
if(cljs.core.keyword_identical_QMARK_(result__44650__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44650__auto__;
}
break;
}
}catch (e49084){var ex__44651__auto__ = e49084;
var statearr_49085_50838 = state_48997;
(statearr_49085_50838[(2)] = ex__44651__auto__);


if(cljs.core.seq((state_48997[(4)]))){
var statearr_49086_50839 = state_48997;
(statearr_49086_50839[(1)] = cljs.core.first((state_48997[(4)])));

} else {
throw ex__44651__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44649__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50842 = state_48997;
state_48997 = G__50842;
continue;
} else {
return ret_value__44649__auto__;
}
break;
}
});
cljs$core$async$state_machine__44648__auto__ = function(state_48997){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44648__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44648__auto____1.call(this,state_48997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44648__auto____0;
cljs$core$async$state_machine__44648__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44648__auto____1;
return cljs$core$async$state_machine__44648__auto__;
})()
})();
var state__45577__auto__ = (function (){var statearr_49087 = f__45576__auto__();
(statearr_49087[(6)] = c__45575__auto___50794);

return statearr_49087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45577__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
