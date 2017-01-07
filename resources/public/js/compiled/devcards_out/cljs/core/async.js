// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args30212 = [];
var len__25873__auto___30218 = arguments.length;
var i__25874__auto___30219 = (0);
while(true){
if((i__25874__auto___30219 < len__25873__auto___30218)){
args30212.push((arguments[i__25874__auto___30219]));

var G__30220 = (i__25874__auto___30219 + (1));
i__25874__auto___30219 = G__30220;
continue;
} else {
}
break;
}

var G__30214 = args30212.length;
switch (G__30214) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30212.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async30215 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30215 = (function (f,blockable,meta30216){
this.f = f;
this.blockable = blockable;
this.meta30216 = meta30216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30217,meta30216__$1){
var self__ = this;
var _30217__$1 = this;
return (new cljs.core.async.t_cljs$core$async30215(self__.f,self__.blockable,meta30216__$1));
});

cljs.core.async.t_cljs$core$async30215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30217){
var self__ = this;
var _30217__$1 = this;
return self__.meta30216;
});

cljs.core.async.t_cljs$core$async30215.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30215.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30215.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30215.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30215.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30216","meta30216",1355755488,null)], null);
});

cljs.core.async.t_cljs$core$async30215.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30215.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30215";

cljs.core.async.t_cljs$core$async30215.cljs$lang$ctorPrWriter = (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"cljs.core.async/t_cljs$core$async30215");
});

cljs.core.async.__GT_t_cljs$core$async30215 = (function cljs$core$async$__GT_t_cljs$core$async30215(f__$1,blockable__$1,meta30216){
return (new cljs.core.async.t_cljs$core$async30215(f__$1,blockable__$1,meta30216));
});

}

return (new cljs.core.async.t_cljs$core$async30215(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args30224 = [];
var len__25873__auto___30227 = arguments.length;
var i__25874__auto___30228 = (0);
while(true){
if((i__25874__auto___30228 < len__25873__auto___30227)){
args30224.push((arguments[i__25874__auto___30228]));

var G__30229 = (i__25874__auto___30228 + (1));
i__25874__auto___30228 = G__30229;
continue;
} else {
}
break;
}

var G__30226 = args30224.length;
switch (G__30226) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30224.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args30231 = [];
var len__25873__auto___30234 = arguments.length;
var i__25874__auto___30235 = (0);
while(true){
if((i__25874__auto___30235 < len__25873__auto___30234)){
args30231.push((arguments[i__25874__auto___30235]));

var G__30236 = (i__25874__auto___30235 + (1));
i__25874__auto___30235 = G__30236;
continue;
} else {
}
break;
}

var G__30233 = args30231.length;
switch (G__30233) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30231.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args30238 = [];
var len__25873__auto___30241 = arguments.length;
var i__25874__auto___30242 = (0);
while(true){
if((i__25874__auto___30242 < len__25873__auto___30241)){
args30238.push((arguments[i__25874__auto___30242]));

var G__30243 = (i__25874__auto___30242 + (1));
i__25874__auto___30242 = G__30243;
continue;
} else {
}
break;
}

var G__30240 = args30238.length;
switch (G__30240) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30238.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30245 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30245);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30245,ret){
return (function (){
return fn1.call(null,val_30245);
});})(val_30245,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args30246 = [];
var len__25873__auto___30249 = arguments.length;
var i__25874__auto___30250 = (0);
while(true){
if((i__25874__auto___30250 < len__25873__auto___30249)){
args30246.push((arguments[i__25874__auto___30250]));

var G__30251 = (i__25874__auto___30250 + (1));
i__25874__auto___30250 = G__30251;
continue;
} else {
}
break;
}

var G__30248 = args30246.length;
switch (G__30248) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30246.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25713__auto___30253 = n;
var x_30254 = (0);
while(true){
if((x_30254 < n__25713__auto___30253)){
(a[x_30254] = (0));

var G__30255 = (x_30254 + (1));
x_30254 = G__30255;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__30256 = (i + (1));
i = G__30256;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30260 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30260 = (function (alt_flag,flag,meta30261){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta30261 = meta30261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30262,meta30261__$1){
var self__ = this;
var _30262__$1 = this;
return (new cljs.core.async.t_cljs$core$async30260(self__.alt_flag,self__.flag,meta30261__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30260.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30262){
var self__ = this;
var _30262__$1 = this;
return self__.meta30261;
});})(flag))
;

cljs.core.async.t_cljs$core$async30260.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30260.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30260.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30260.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30260.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30261","meta30261",-1148272021,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30260.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30260.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30260";

cljs.core.async.t_cljs$core$async30260.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"cljs.core.async/t_cljs$core$async30260");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30260 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30260(alt_flag__$1,flag__$1,meta30261){
return (new cljs.core.async.t_cljs$core$async30260(alt_flag__$1,flag__$1,meta30261));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30260(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30266 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30266 = (function (alt_handler,flag,cb,meta30267){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta30267 = meta30267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30268,meta30267__$1){
var self__ = this;
var _30268__$1 = this;
return (new cljs.core.async.t_cljs$core$async30266(self__.alt_handler,self__.flag,self__.cb,meta30267__$1));
});

cljs.core.async.t_cljs$core$async30266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30268){
var self__ = this;
var _30268__$1 = this;
return self__.meta30267;
});

cljs.core.async.t_cljs$core$async30266.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30266.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30266.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30266.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30266.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30267","meta30267",1969819142,null)], null);
});

cljs.core.async.t_cljs$core$async30266.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30266.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30266";

cljs.core.async.t_cljs$core$async30266.cljs$lang$ctorPrWriter = (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"cljs.core.async/t_cljs$core$async30266");
});

cljs.core.async.__GT_t_cljs$core$async30266 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30266(alt_handler__$1,flag__$1,cb__$1,meta30267){
return (new cljs.core.async.t_cljs$core$async30266(alt_handler__$1,flag__$1,cb__$1,meta30267));
});

}

return (new cljs.core.async.t_cljs$core$async30266(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30269_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30269_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30270_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30270_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24798__auto__ = wport;
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30271 = (i + (1));
i = G__30271;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24798__auto__ = ret;
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24786__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24786__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24786__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__25880__auto__ = [];
var len__25873__auto___30277 = arguments.length;
var i__25874__auto___30278 = (0);
while(true){
if((i__25874__auto___30278 < len__25873__auto___30277)){
args__25880__auto__.push((arguments[i__25874__auto___30278]));

var G__30279 = (i__25874__auto___30278 + (1));
i__25874__auto___30278 = G__30279;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((1) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25881__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30274){
var map__30275 = p__30274;
var map__30275__$1 = ((((!((map__30275 == null)))?((((map__30275.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30275.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30275):map__30275);
var opts = map__30275__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30272){
var G__30273 = cljs.core.first.call(null,seq30272);
var seq30272__$1 = cljs.core.next.call(null,seq30272);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30273,seq30272__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var args30280 = [];
var len__25873__auto___30330 = arguments.length;
var i__25874__auto___30331 = (0);
while(true){
if((i__25874__auto___30331 < len__25873__auto___30330)){
args30280.push((arguments[i__25874__auto___30331]));

var G__30332 = (i__25874__auto___30331 + (1));
i__25874__auto___30331 = G__30332;
continue;
} else {
}
break;
}

var G__30282 = args30280.length;
switch (G__30282) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30280.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30167__auto___30334 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30167__auto___30334){
return (function (){
var f__30168__auto__ = (function (){var switch__30055__auto__ = ((function (c__30167__auto___30334){
return (function (state_30306){
var state_val_30307 = (state_30306[(1)]);
if((state_val_30307 === (7))){
var inst_30302 = (state_30306[(2)]);
var state_30306__$1 = state_30306;
var statearr_30308_30335 = state_30306__$1;
(statearr_30308_30335[(2)] = inst_30302);

(statearr_30308_30335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30307 === (1))){
var state_30306__$1 = state_30306;
var statearr_30309_30336 = state_30306__$1;
(statearr_30309_30336[(2)] = null);

(statearr_30309_30336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30307 === (4))){
var inst_30285 = (state_30306[(7)]);
var inst_30285__$1 = (state_30306[(2)]);
var inst_30286 = (inst_30285__$1 == null);
var state_30306__$1 = (function (){var statearr_30310 = state_30306;
(statearr_30310[(7)] = inst_30285__$1);

return statearr_30310;
})();
if(cljs.core.truth_(inst_30286)){
var statearr_30311_30337 = state_30306__$1;
(statearr_30311_30337[(1)] = (5));

} else {
var statearr_30312_30338 = state_30306__$1;
(statearr_30312_30338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30307 === (13))){
var state_30306__$1 = state_30306;
var statearr_30313_30339 = state_30306__$1;
(statearr_30313_30339[(2)] = null);

(statearr_30313_30339[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30307 === (6))){
var inst_30285 = (state_30306[(7)]);
var state_30306__$1 = state_30306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30306__$1,(11),to,inst_30285);
} else {
if((state_val_30307 === (3))){
var inst_30304 = (state_30306[(2)]);
var state_30306__$1 = state_30306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30306__$1,inst_30304);
} else {
if((state_val_30307 === (12))){
var state_30306__$1 = state_30306;
var statearr_30314_30340 = state_30306__$1;
(statearr_30314_30340[(2)] = null);

(statearr_30314_30340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30307 === (2))){
var state_30306__$1 = state_30306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30306__$1,(4),from);
} else {
if((state_val_30307 === (11))){
var inst_30295 = (state_30306[(2)]);
var state_30306__$1 = state_30306;
if(cljs.core.truth_(inst_30295)){
var statearr_30315_30341 = state_30306__$1;
(statearr_30315_30341[(1)] = (12));

} else {
var statearr_30316_30342 = state_30306__$1;
(statearr_30316_30342[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30307 === (9))){
var state_30306__$1 = state_30306;
var statearr_30317_30343 = state_30306__$1;
(statearr_30317_30343[(2)] = null);

(statearr_30317_30343[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30307 === (5))){
var state_30306__$1 = state_30306;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30318_30344 = state_30306__$1;
(statearr_30318_30344[(1)] = (8));

} else {
var statearr_30319_30345 = state_30306__$1;
(statearr_30319_30345[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30307 === (14))){
var inst_30300 = (state_30306[(2)]);
var state_30306__$1 = state_30306;
var statearr_30320_30346 = state_30306__$1;
(statearr_30320_30346[(2)] = inst_30300);

(statearr_30320_30346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30307 === (10))){
var inst_30292 = (state_30306[(2)]);
var state_30306__$1 = state_30306;
var statearr_30321_30347 = state_30306__$1;
(statearr_30321_30347[(2)] = inst_30292);

(statearr_30321_30347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30307 === (8))){
var inst_30289 = cljs.core.async.close_BANG_.call(null,to);
var state_30306__$1 = state_30306;
var statearr_30322_30348 = state_30306__$1;
(statearr_30322_30348[(2)] = inst_30289);

(statearr_30322_30348[(1)] = (10));


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
});})(c__30167__auto___30334))
;
return ((function (switch__30055__auto__,c__30167__auto___30334){
return (function() {
var cljs$core$async$state_machine__30056__auto__ = null;
var cljs$core$async$state_machine__30056__auto____0 = (function (){
var statearr_30326 = [null,null,null,null,null,null,null,null];
(statearr_30326[(0)] = cljs$core$async$state_machine__30056__auto__);

(statearr_30326[(1)] = (1));

return statearr_30326;
});
var cljs$core$async$state_machine__30056__auto____1 = (function (state_30306){
while(true){
var ret_value__30057__auto__ = (function (){try{while(true){
var result__30058__auto__ = switch__30055__auto__.call(null,state_30306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30058__auto__;
}
break;
}
}catch (e30327){if((e30327 instanceof Object)){
var ex__30059__auto__ = e30327;
var statearr_30328_30349 = state_30306;
(statearr_30328_30349[(5)] = ex__30059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30350 = state_30306;
state_30306 = G__30350;
continue;
} else {
return ret_value__30057__auto__;
}
break;
}
});
cljs$core$async$state_machine__30056__auto__ = function(state_30306){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30056__auto____1.call(this,state_30306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30056__auto____0;
cljs$core$async$state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30056__auto____1;
return cljs$core$async$state_machine__30056__auto__;
})()
;})(switch__30055__auto__,c__30167__auto___30334))
})();
var state__30169__auto__ = (function (){var statearr_30329 = f__30168__auto__.call(null);
(statearr_30329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30167__auto___30334);

return statearr_30329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30169__auto__);
});})(c__30167__auto___30334))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30538){
var vec__30539 = p__30538;
var v = cljs.core.nth.call(null,vec__30539,(0),null);
var p = cljs.core.nth.call(null,vec__30539,(1),null);
var job = vec__30539;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30167__auto___30725 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30167__auto___30725,res,vec__30539,v,p,job,jobs,results){
return (function (){
var f__30168__auto__ = (function (){var switch__30055__auto__ = ((function (c__30167__auto___30725,res,vec__30539,v,p,job,jobs,results){
return (function (state_30546){
var state_val_30547 = (state_30546[(1)]);
if((state_val_30547 === (1))){
var state_30546__$1 = state_30546;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30546__$1,(2),res,v);
} else {
if((state_val_30547 === (2))){
var inst_30543 = (state_30546[(2)]);
var inst_30544 = cljs.core.async.close_BANG_.call(null,res);
var state_30546__$1 = (function (){var statearr_30548 = state_30546;
(statearr_30548[(7)] = inst_30543);

return statearr_30548;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30546__$1,inst_30544);
} else {
return null;
}
}
});})(c__30167__auto___30725,res,vec__30539,v,p,job,jobs,results))
;
return ((function (switch__30055__auto__,c__30167__auto___30725,res,vec__30539,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30056__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30056__auto____0 = (function (){
var statearr_30552 = [null,null,null,null,null,null,null,null];
(statearr_30552[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30056__auto__);

(statearr_30552[(1)] = (1));

return statearr_30552;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30056__auto____1 = (function (state_30546){
while(true){
var ret_value__30057__auto__ = (function (){try{while(true){
var result__30058__auto__ = switch__30055__auto__.call(null,state_30546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30058__auto__;
}
break;
}
}catch (e30553){if((e30553 instanceof Object)){
var ex__30059__auto__ = e30553;
var statearr_30554_30726 = state_30546;
(statearr_30554_30726[(5)] = ex__30059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30727 = state_30546;
state_30546 = G__30727;
continue;
} else {
return ret_value__30057__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30056__auto__ = function(state_30546){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30056__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30056__auto____1.call(this,state_30546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30056__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30056__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30056__auto__;
})()
;})(switch__30055__auto__,c__30167__auto___30725,res,vec__30539,v,p,job,jobs,results))
})();
var state__30169__auto__ = (function (){var statearr_30555 = f__30168__auto__.call(null);
(statearr_30555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30167__auto___30725);

return statearr_30555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30169__auto__);
});})(c__30167__auto___30725,res,vec__30539,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30556){
var vec__30557 = p__30556;
var v = cljs.core.nth.call(null,vec__30557,(0),null);
var p = cljs.core.nth.call(null,vec__30557,(1),null);
var job = vec__30557;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25713__auto___30728 = n;
var __30729 = (0);
while(true){
if((__30729 < n__25713__auto___30728)){
var G__30560_30730 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30560_30730) {
case "compute":
var c__30167__auto___30732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30729,c__30167__auto___30732,G__30560_30730,n__25713__auto___30728,jobs,results,process,async){
return (function (){
var f__30168__auto__ = (function (){var switch__30055__auto__ = ((function (__30729,c__30167__auto___30732,G__30560_30730,n__25713__auto___30728,jobs,results,process,async){
return (function (state_30573){
var state_val_30574 = (state_30573[(1)]);
if((state_val_30574 === (1))){
var state_30573__$1 = state_30573;
var statearr_30575_30733 = state_30573__$1;
(statearr_30575_30733[(2)] = null);

(statearr_30575_30733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (2))){
var state_30573__$1 = state_30573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30573__$1,(4),jobs);
} else {
if((state_val_30574 === (3))){
var inst_30571 = (state_30573[(2)]);
var state_30573__$1 = state_30573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30573__$1,inst_30571);
} else {
if((state_val_30574 === (4))){
var inst_30563 = (state_30573[(2)]);
var inst_30564 = process.call(null,inst_30563);
var state_30573__$1 = state_30573;
if(cljs.core.truth_(inst_30564)){
var statearr_30576_30734 = state_30573__$1;
(statearr_30576_30734[(1)] = (5));

} else {
var statearr_30577_30735 = state_30573__$1;
(statearr_30577_30735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (5))){
var state_30573__$1 = state_30573;
var statearr_30578_30736 = state_30573__$1;
(statearr_30578_30736[(2)] = null);

(statearr_30578_30736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (6))){
var state_30573__$1 = state_30573;
var statearr_30579_30737 = state_30573__$1;
(statearr_30579_30737[(2)] = null);

(statearr_30579_30737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30574 === (7))){
var inst_30569 = (state_30573[(2)]);
var state_30573__$1 = state_30573;
var statearr_30580_30738 = state_30573__$1;
(statearr_30580_30738[(2)] = inst_30569);

(statearr_30580_30738[(1)] = (3));


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
});})(__30729,c__30167__auto___30732,G__30560_30730,n__25713__auto___30728,jobs,results,process,async))
;
return ((function (__30729,switch__30055__auto__,c__30167__auto___30732,G__30560_30730,n__25713__auto___30728,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30056__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30056__auto____0 = (function (){
var statearr_30584 = [null,null,null,null,null,null,null];
(statearr_30584[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30056__auto__);

(statearr_30584[(1)] = (1));

return statearr_30584;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30056__auto____1 = (function (state_30573){
while(true){
var ret_value__30057__auto__ = (function (){try{while(true){
var result__30058__auto__ = switch__30055__auto__.call(null,state_30573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30058__auto__;
}
break;
}
}catch (e30585){if((e30585 instanceof Object)){
var ex__30059__auto__ = e30585;
var statearr_30586_30739 = state_30573;
(statearr_30586_30739[(5)] = ex__30059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30740 = state_30573;
state_30573 = G__30740;
continue;
} else {
return ret_value__30057__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30056__auto__ = function(state_30573){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30056__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30056__auto____1.call(this,state_30573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30056__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30056__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30056__auto__;
})()
;})(__30729,switch__30055__auto__,c__30167__auto___30732,G__30560_30730,n__25713__auto___30728,jobs,results,process,async))
})();
var state__30169__auto__ = (function (){var statearr_30587 = f__30168__auto__.call(null);
(statearr_30587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30167__auto___30732);

return statearr_30587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30169__auto__);
});})(__30729,c__30167__auto___30732,G__30560_30730,n__25713__auto___30728,jobs,results,process,async))
);


break;
case "async":
var c__30167__auto___30741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30729,c__30167__auto___30741,G__30560_30730,n__25713__auto___30728,jobs,results,process,async){
return (function (){
var f__30168__auto__ = (function (){var switch__30055__auto__ = ((function (__30729,c__30167__auto___30741,G__30560_30730,n__25713__auto___30728,jobs,results,process,async){
return (function (state_30600){
var state_val_30601 = (state_30600[(1)]);
if((state_val_30601 === (1))){
var state_30600__$1 = state_30600;
var statearr_30602_30742 = state_30600__$1;
(statearr_30602_30742[(2)] = null);

(statearr_30602_30742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30601 === (2))){
var state_30600__$1 = state_30600;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30600__$1,(4),jobs);
} else {
if((state_val_30601 === (3))){
var inst_30598 = (state_30600[(2)]);
var state_30600__$1 = state_30600;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30600__$1,inst_30598);
} else {
if((state_val_30601 === (4))){
var inst_30590 = (state_30600[(2)]);
var inst_30591 = async.call(null,inst_30590);
var state_30600__$1 = state_30600;
if(cljs.core.truth_(inst_30591)){
var statearr_30603_30743 = state_30600__$1;
(statearr_30603_30743[(1)] = (5));

} else {
var statearr_30604_30744 = state_30600__$1;
(statearr_30604_30744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30601 === (5))){
var state_30600__$1 = state_30600;
var statearr_30605_30745 = state_30600__$1;
(statearr_30605_30745[(2)] = null);

(statearr_30605_30745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30601 === (6))){
var state_30600__$1 = state_30600;
var statearr_30606_30746 = state_30600__$1;
(statearr_30606_30746[(2)] = null);

(statearr_30606_30746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30601 === (7))){
var inst_30596 = (state_30600[(2)]);
var state_30600__$1 = state_30600;
var statearr_30607_30747 = state_30600__$1;
(statearr_30607_30747[(2)] = inst_30596);

(statearr_30607_30747[(1)] = (3));


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
});})(__30729,c__30167__auto___30741,G__30560_30730,n__25713__auto___30728,jobs,results,process,async))
;
return ((function (__30729,switch__30055__auto__,c__30167__auto___30741,G__30560_30730,n__25713__auto___30728,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30056__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30056__auto____0 = (function (){
var statearr_30611 = [null,null,null,null,null,null,null];
(statearr_30611[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30056__auto__);

(statearr_30611[(1)] = (1));

return statearr_30611;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30056__auto____1 = (function (state_30600){
while(true){
var ret_value__30057__auto__ = (function (){try{while(true){
var result__30058__auto__ = switch__30055__auto__.call(null,state_30600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30058__auto__;
}
break;
}
}catch (e30612){if((e30612 instanceof Object)){
var ex__30059__auto__ = e30612;
var statearr_30613_30748 = state_30600;
(statearr_30613_30748[(5)] = ex__30059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30749 = state_30600;
state_30600 = G__30749;
continue;
} else {
return ret_value__30057__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30056__auto__ = function(state_30600){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30056__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30056__auto____1.call(this,state_30600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30056__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30056__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30056__auto__;
})()
;})(__30729,switch__30055__auto__,c__30167__auto___30741,G__30560_30730,n__25713__auto___30728,jobs,results,process,async))
})();
var state__30169__auto__ = (function (){var statearr_30614 = f__30168__auto__.call(null);
(statearr_30614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30167__auto___30741);

return statearr_30614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30169__auto__);
});})(__30729,c__30167__auto___30741,G__30560_30730,n__25713__auto___30728,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30750 = (__30729 + (1));
__30729 = G__30750;
continue;
} else {
}
break;
}

var c__30167__auto___30751 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30167__auto___30751,jobs,results,process,async){
return (function (){
var f__30168__auto__ = (function (){var switch__30055__auto__ = ((function (c__30167__auto___30751,jobs,results,process,async){
return (function (state_30636){
var state_val_30637 = (state_30636[(1)]);
if((state_val_30637 === (1))){
var state_30636__$1 = state_30636;
var statearr_30638_30752 = state_30636__$1;
(statearr_30638_30752[(2)] = null);

(statearr_30638_30752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30637 === (2))){
var state_30636__$1 = state_30636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30636__$1,(4),from);
} else {
if((state_val_30637 === (3))){
var inst_30634 = (state_30636[(2)]);
var state_30636__$1 = state_30636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30636__$1,inst_30634);
} else {
if((state_val_30637 === (4))){
var inst_30617 = (state_30636[(7)]);
var inst_30617__$1 = (state_30636[(2)]);
var inst_30618 = (inst_30617__$1 == null);
var state_30636__$1 = (function (){var statearr_30639 = state_30636;
(statearr_30639[(7)] = inst_30617__$1);

return statearr_30639;
})();
if(cljs.core.truth_(inst_30618)){
var statearr_30640_30753 = state_30636__$1;
(statearr_30640_30753[(1)] = (5));

} else {
var statearr_30641_30754 = state_30636__$1;
(statearr_30641_30754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30637 === (5))){
var inst_30620 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30636__$1 = state_30636;
var statearr_30642_30755 = state_30636__$1;
(statearr_30642_30755[(2)] = inst_30620);

(statearr_30642_30755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30637 === (6))){
var inst_30622 = (state_30636[(8)]);
var inst_30617 = (state_30636[(7)]);
var inst_30622__$1 = cljs.core.async.chan.call(null,(1));
var inst_30623 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30624 = [inst_30617,inst_30622__$1];
var inst_30625 = (new cljs.core.PersistentVector(null,2,(5),inst_30623,inst_30624,null));
var state_30636__$1 = (function (){var statearr_30643 = state_30636;
(statearr_30643[(8)] = inst_30622__$1);

return statearr_30643;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30636__$1,(8),jobs,inst_30625);
} else {
if((state_val_30637 === (7))){
var inst_30632 = (state_30636[(2)]);
var state_30636__$1 = state_30636;
var statearr_30644_30756 = state_30636__$1;
(statearr_30644_30756[(2)] = inst_30632);

(statearr_30644_30756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30637 === (8))){
var inst_30622 = (state_30636[(8)]);
var inst_30627 = (state_30636[(2)]);
var state_30636__$1 = (function (){var statearr_30645 = state_30636;
(statearr_30645[(9)] = inst_30627);

return statearr_30645;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30636__$1,(9),results,inst_30622);
} else {
if((state_val_30637 === (9))){
var inst_30629 = (state_30636[(2)]);
var state_30636__$1 = (function (){var statearr_30646 = state_30636;
(statearr_30646[(10)] = inst_30629);

return statearr_30646;
})();
var statearr_30647_30757 = state_30636__$1;
(statearr_30647_30757[(2)] = null);

(statearr_30647_30757[(1)] = (2));


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
});})(c__30167__auto___30751,jobs,results,process,async))
;
return ((function (switch__30055__auto__,c__30167__auto___30751,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30056__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30056__auto____0 = (function (){
var statearr_30651 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30651[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30056__auto__);

(statearr_30651[(1)] = (1));

return statearr_30651;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30056__auto____1 = (function (state_30636){
while(true){
var ret_value__30057__auto__ = (function (){try{while(true){
var result__30058__auto__ = switch__30055__auto__.call(null,state_30636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30058__auto__;
}
break;
}
}catch (e30652){if((e30652 instanceof Object)){
var ex__30059__auto__ = e30652;
var statearr_30653_30758 = state_30636;
(statearr_30653_30758[(5)] = ex__30059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30759 = state_30636;
state_30636 = G__30759;
continue;
} else {
return ret_value__30057__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30056__auto__ = function(state_30636){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30056__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30056__auto____1.call(this,state_30636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30056__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30056__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30056__auto__;
})()
;})(switch__30055__auto__,c__30167__auto___30751,jobs,results,process,async))
})();
var state__30169__auto__ = (function (){var statearr_30654 = f__30168__auto__.call(null);
(statearr_30654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30167__auto___30751);

return statearr_30654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30169__auto__);
});})(c__30167__auto___30751,jobs,results,process,async))
);


var c__30167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30167__auto__,jobs,results,process,async){
return (function (){
var f__30168__auto__ = (function (){var switch__30055__auto__ = ((function (c__30167__auto__,jobs,results,process,async){
return (function (state_30692){
var state_val_30693 = (state_30692[(1)]);
if((state_val_30693 === (7))){
var inst_30688 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30694_30760 = state_30692__$1;
(statearr_30694_30760[(2)] = inst_30688);

(statearr_30694_30760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (20))){
var state_30692__$1 = state_30692;
var statearr_30695_30761 = state_30692__$1;
(statearr_30695_30761[(2)] = null);

(statearr_30695_30761[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (1))){
var state_30692__$1 = state_30692;
var statearr_30696_30762 = state_30692__$1;
(statearr_30696_30762[(2)] = null);

(statearr_30696_30762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (4))){
var inst_30657 = (state_30692[(7)]);
var inst_30657__$1 = (state_30692[(2)]);
var inst_30658 = (inst_30657__$1 == null);
var state_30692__$1 = (function (){var statearr_30697 = state_30692;
(statearr_30697[(7)] = inst_30657__$1);

return statearr_30697;
})();
if(cljs.core.truth_(inst_30658)){
var statearr_30698_30763 = state_30692__$1;
(statearr_30698_30763[(1)] = (5));

} else {
var statearr_30699_30764 = state_30692__$1;
(statearr_30699_30764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (15))){
var inst_30670 = (state_30692[(8)]);
var state_30692__$1 = state_30692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30692__$1,(18),to,inst_30670);
} else {
if((state_val_30693 === (21))){
var inst_30683 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30700_30765 = state_30692__$1;
(statearr_30700_30765[(2)] = inst_30683);

(statearr_30700_30765[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (13))){
var inst_30685 = (state_30692[(2)]);
var state_30692__$1 = (function (){var statearr_30701 = state_30692;
(statearr_30701[(9)] = inst_30685);

return statearr_30701;
})();
var statearr_30702_30766 = state_30692__$1;
(statearr_30702_30766[(2)] = null);

(statearr_30702_30766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (6))){
var inst_30657 = (state_30692[(7)]);
var state_30692__$1 = state_30692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30692__$1,(11),inst_30657);
} else {
if((state_val_30693 === (17))){
var inst_30678 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
if(cljs.core.truth_(inst_30678)){
var statearr_30703_30767 = state_30692__$1;
(statearr_30703_30767[(1)] = (19));

} else {
var statearr_30704_30768 = state_30692__$1;
(statearr_30704_30768[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (3))){
var inst_30690 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30692__$1,inst_30690);
} else {
if((state_val_30693 === (12))){
var inst_30667 = (state_30692[(10)]);
var state_30692__$1 = state_30692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30692__$1,(14),inst_30667);
} else {
if((state_val_30693 === (2))){
var state_30692__$1 = state_30692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30692__$1,(4),results);
} else {
if((state_val_30693 === (19))){
var state_30692__$1 = state_30692;
var statearr_30705_30769 = state_30692__$1;
(statearr_30705_30769[(2)] = null);

(statearr_30705_30769[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (11))){
var inst_30667 = (state_30692[(2)]);
var state_30692__$1 = (function (){var statearr_30706 = state_30692;
(statearr_30706[(10)] = inst_30667);

return statearr_30706;
})();
var statearr_30707_30770 = state_30692__$1;
(statearr_30707_30770[(2)] = null);

(statearr_30707_30770[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (9))){
var state_30692__$1 = state_30692;
var statearr_30708_30771 = state_30692__$1;
(statearr_30708_30771[(2)] = null);

(statearr_30708_30771[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (5))){
var state_30692__$1 = state_30692;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30709_30772 = state_30692__$1;
(statearr_30709_30772[(1)] = (8));

} else {
var statearr_30710_30773 = state_30692__$1;
(statearr_30710_30773[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (14))){
var inst_30670 = (state_30692[(8)]);
var inst_30672 = (state_30692[(11)]);
var inst_30670__$1 = (state_30692[(2)]);
var inst_30671 = (inst_30670__$1 == null);
var inst_30672__$1 = cljs.core.not.call(null,inst_30671);
var state_30692__$1 = (function (){var statearr_30711 = state_30692;
(statearr_30711[(8)] = inst_30670__$1);

(statearr_30711[(11)] = inst_30672__$1);

return statearr_30711;
})();
if(inst_30672__$1){
var statearr_30712_30774 = state_30692__$1;
(statearr_30712_30774[(1)] = (15));

} else {
var statearr_30713_30775 = state_30692__$1;
(statearr_30713_30775[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (16))){
var inst_30672 = (state_30692[(11)]);
var state_30692__$1 = state_30692;
var statearr_30714_30776 = state_30692__$1;
(statearr_30714_30776[(2)] = inst_30672);

(statearr_30714_30776[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (10))){
var inst_30664 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30715_30777 = state_30692__$1;
(statearr_30715_30777[(2)] = inst_30664);

(statearr_30715_30777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (18))){
var inst_30675 = (state_30692[(2)]);
var state_30692__$1 = state_30692;
var statearr_30716_30778 = state_30692__$1;
(statearr_30716_30778[(2)] = inst_30675);

(statearr_30716_30778[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30693 === (8))){
var inst_30661 = cljs.core.async.close_BANG_.call(null,to);
var state_30692__$1 = state_30692;
var statearr_30717_30779 = state_30692__$1;
(statearr_30717_30779[(2)] = inst_30661);

(statearr_30717_30779[(1)] = (10));


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
});})(c__30167__auto__,jobs,results,process,async))
;
return ((function (switch__30055__auto__,c__30167__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30056__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30056__auto____0 = (function (){
var statearr_30721 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30721[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30056__auto__);

(statearr_30721[(1)] = (1));

return statearr_30721;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30056__auto____1 = (function (state_30692){
while(true){
var ret_value__30057__auto__ = (function (){try{while(true){
var result__30058__auto__ = switch__30055__auto__.call(null,state_30692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30058__auto__;
}
break;
}
}catch (e30722){if((e30722 instanceof Object)){
var ex__30059__auto__ = e30722;
var statearr_30723_30780 = state_30692;
(statearr_30723_30780[(5)] = ex__30059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30781 = state_30692;
state_30692 = G__30781;
continue;
} else {
return ret_value__30057__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30056__auto__ = function(state_30692){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30056__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30056__auto____1.call(this,state_30692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30056__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30056__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30056__auto__;
})()
;})(switch__30055__auto__,c__30167__auto__,jobs,results,process,async))
})();
var state__30169__auto__ = (function (){var statearr_30724 = f__30168__auto__.call(null);
(statearr_30724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30167__auto__);

return statearr_30724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30169__auto__);
});})(c__30167__auto__,jobs,results,process,async))
);

return c__30167__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args30782 = [];
var len__25873__auto___30785 = arguments.length;
var i__25874__auto___30786 = (0);
while(true){
if((i__25874__auto___30786 < len__25873__auto___30785)){
args30782.push((arguments[i__25874__auto___30786]));

var G__30787 = (i__25874__auto___30786 + (1));
i__25874__auto___30786 = G__30787;
continue;
} else {
}
break;
}

var G__30784 = args30782.length;
switch (G__30784) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30782.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var args30789 = [];
var len__25873__auto___30792 = arguments.length;
var i__25874__auto___30793 = (0);
while(true){
if((i__25874__auto___30793 < len__25873__auto___30792)){
args30789.push((arguments[i__25874__auto___30793]));

var G__30794 = (i__25874__auto___30793 + (1));
i__25874__auto___30793 = G__30794;
continue;
} else {
}
break;
}

var G__30791 = args30789.length;
switch (G__30791) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30789.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var args30796 = [];
var len__25873__auto___30849 = arguments.length;
var i__25874__auto___30850 = (0);
while(true){
if((i__25874__auto___30850 < len__25873__auto___30849)){
args30796.push((arguments[i__25874__auto___30850]));

var G__30851 = (i__25874__auto___30850 + (1));
i__25874__auto___30850 = G__30851;
continue;
} else {
}
break;
}

var G__30798 = args30796.length;
switch (G__30798) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30796.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__30167__auto___30853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30167__auto___30853,tc,fc){
return (function (){
var f__30168__auto__ = (function (){var switch__30055__auto__ = ((function (c__30167__auto___30853,tc,fc){
return (function (state_30824){
var state_val_30825 = (state_30824[(1)]);
if((state_val_30825 === (7))){
var inst_30820 = (state_30824[(2)]);
var state_30824__$1 = state_30824;
var statearr_30826_30854 = state_30824__$1;
(statearr_30826_30854[(2)] = inst_30820);

(statearr_30826_30854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30825 === (1))){
var state_30824__$1 = state_30824;
var statearr_30827_30855 = state_30824__$1;
(statearr_30827_30855[(2)] = null);

(statearr_30827_30855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30825 === (4))){
var inst_30801 = (state_30824[(7)]);
var inst_30801__$1 = (state_30824[(2)]);
var inst_30802 = (inst_30801__$1 == null);
var state_30824__$1 = (function (){var statearr_30828 = state_30824;
(statearr_30828[(7)] = inst_30801__$1);

return statearr_30828;
})();
if(cljs.core.truth_(inst_30802)){
var statearr_30829_30856 = state_30824__$1;
(statearr_30829_30856[(1)] = (5));

} else {
var statearr_30830_30857 = state_30824__$1;
(statearr_30830_30857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30825 === (13))){
var state_30824__$1 = state_30824;
var statearr_30831_30858 = state_30824__$1;
(statearr_30831_30858[(2)] = null);

(statearr_30831_30858[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30825 === (6))){
var inst_30801 = (state_30824[(7)]);
var inst_30807 = p.call(null,inst_30801);
var state_30824__$1 = state_30824;
if(cljs.core.truth_(inst_30807)){
var statearr_30832_30859 = state_30824__$1;
(statearr_30832_30859[(1)] = (9));

} else {
var statearr_30833_30860 = state_30824__$1;
(statearr_30833_30860[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30825 === (3))){
var inst_30822 = (state_30824[(2)]);
var state_30824__$1 = state_30824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30824__$1,inst_30822);
} else {
if((state_val_30825 === (12))){
var state_30824__$1 = state_30824;
var statearr_30834_30861 = state_30824__$1;
(statearr_30834_30861[(2)] = null);

(statearr_30834_30861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30825 === (2))){
var state_30824__$1 = state_30824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30824__$1,(4),ch);
} else {
if((state_val_30825 === (11))){
var inst_30801 = (state_30824[(7)]);
var inst_30811 = (state_30824[(2)]);
var state_30824__$1 = state_30824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30824__$1,(8),inst_30811,inst_30801);
} else {
if((state_val_30825 === (9))){
var state_30824__$1 = state_30824;
var statearr_30835_30862 = state_30824__$1;
(statearr_30835_30862[(2)] = tc);

(statearr_30835_30862[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30825 === (5))){
var inst_30804 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30805 = cljs.core.async.close_BANG_.call(null,fc);
var state_30824__$1 = (function (){var statearr_30836 = state_30824;
(statearr_30836[(8)] = inst_30804);

return statearr_30836;
})();
var statearr_30837_30863 = state_30824__$1;
(statearr_30837_30863[(2)] = inst_30805);

(statearr_30837_30863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30825 === (14))){
var inst_30818 = (state_30824[(2)]);
var state_30824__$1 = state_30824;
var statearr_30838_30864 = state_30824__$1;
(statearr_30838_30864[(2)] = inst_30818);

(statearr_30838_30864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30825 === (10))){
var state_30824__$1 = state_30824;
var statearr_30839_30865 = state_30824__$1;
(statearr_30839_30865[(2)] = fc);

(statearr_30839_30865[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30825 === (8))){
var inst_30813 = (state_30824[(2)]);
var state_30824__$1 = state_30824;
if(cljs.core.truth_(inst_30813)){
var statearr_30840_30866 = state_30824__$1;
(statearr_30840_30866[(1)] = (12));

} else {
var statearr_30841_30867 = state_30824__$1;
(statearr_30841_30867[(1)] = (13));

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
});})(c__30167__auto___30853,tc,fc))
;
return ((function (switch__30055__auto__,c__30167__auto___30853,tc,fc){
return (function() {
var cljs$core$async$state_machine__30056__auto__ = null;
var cljs$core$async$state_machine__30056__auto____0 = (function (){
var statearr_30845 = [null,null,null,null,null,null,null,null,null];
(statearr_30845[(0)] = cljs$core$async$state_machine__30056__auto__);

(statearr_30845[(1)] = (1));

return statearr_30845;
});
var cljs$core$async$state_machine__30056__auto____1 = (function (state_30824){
while(true){
var ret_value__30057__auto__ = (function (){try{while(true){
var result__30058__auto__ = switch__30055__auto__.call(null,state_30824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30058__auto__;
}
break;
}
}catch (e30846){if((e30846 instanceof Object)){
var ex__30059__auto__ = e30846;
var statearr_30847_30868 = state_30824;
(statearr_30847_30868[(5)] = ex__30059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30869 = state_30824;
state_30824 = G__30869;
continue;
} else {
return ret_value__30057__auto__;
}
break;
}
});
cljs$core$async$state_machine__30056__auto__ = function(state_30824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30056__auto____1.call(this,state_30824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30056__auto____0;
cljs$core$async$state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30056__auto____1;
return cljs$core$async$state_machine__30056__auto__;
})()
;})(switch__30055__auto__,c__30167__auto___30853,tc,fc))
})();
var state__30169__auto__ = (function (){var statearr_30848 = f__30168__auto__.call(null);
(statearr_30848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30167__auto___30853);

return statearr_30848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30169__auto__);
});})(c__30167__auto___30853,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30167__auto__){
return (function (){
var f__30168__auto__ = (function (){var switch__30055__auto__ = ((function (c__30167__auto__){
return (function (state_30933){
var state_val_30934 = (state_30933[(1)]);
if((state_val_30934 === (7))){
var inst_30929 = (state_30933[(2)]);
var state_30933__$1 = state_30933;
var statearr_30935_30956 = state_30933__$1;
(statearr_30935_30956[(2)] = inst_30929);

(statearr_30935_30956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30934 === (1))){
var inst_30913 = init;
var state_30933__$1 = (function (){var statearr_30936 = state_30933;
(statearr_30936[(7)] = inst_30913);

return statearr_30936;
})();
var statearr_30937_30957 = state_30933__$1;
(statearr_30937_30957[(2)] = null);

(statearr_30937_30957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30934 === (4))){
var inst_30916 = (state_30933[(8)]);
var inst_30916__$1 = (state_30933[(2)]);
var inst_30917 = (inst_30916__$1 == null);
var state_30933__$1 = (function (){var statearr_30938 = state_30933;
(statearr_30938[(8)] = inst_30916__$1);

return statearr_30938;
})();
if(cljs.core.truth_(inst_30917)){
var statearr_30939_30958 = state_30933__$1;
(statearr_30939_30958[(1)] = (5));

} else {
var statearr_30940_30959 = state_30933__$1;
(statearr_30940_30959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30934 === (6))){
var inst_30920 = (state_30933[(9)]);
var inst_30913 = (state_30933[(7)]);
var inst_30916 = (state_30933[(8)]);
var inst_30920__$1 = f.call(null,inst_30913,inst_30916);
var inst_30921 = cljs.core.reduced_QMARK_.call(null,inst_30920__$1);
var state_30933__$1 = (function (){var statearr_30941 = state_30933;
(statearr_30941[(9)] = inst_30920__$1);

return statearr_30941;
})();
if(inst_30921){
var statearr_30942_30960 = state_30933__$1;
(statearr_30942_30960[(1)] = (8));

} else {
var statearr_30943_30961 = state_30933__$1;
(statearr_30943_30961[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30934 === (3))){
var inst_30931 = (state_30933[(2)]);
var state_30933__$1 = state_30933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30933__$1,inst_30931);
} else {
if((state_val_30934 === (2))){
var state_30933__$1 = state_30933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30933__$1,(4),ch);
} else {
if((state_val_30934 === (9))){
var inst_30920 = (state_30933[(9)]);
var inst_30913 = inst_30920;
var state_30933__$1 = (function (){var statearr_30944 = state_30933;
(statearr_30944[(7)] = inst_30913);

return statearr_30944;
})();
var statearr_30945_30962 = state_30933__$1;
(statearr_30945_30962[(2)] = null);

(statearr_30945_30962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30934 === (5))){
var inst_30913 = (state_30933[(7)]);
var state_30933__$1 = state_30933;
var statearr_30946_30963 = state_30933__$1;
(statearr_30946_30963[(2)] = inst_30913);

(statearr_30946_30963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30934 === (10))){
var inst_30927 = (state_30933[(2)]);
var state_30933__$1 = state_30933;
var statearr_30947_30964 = state_30933__$1;
(statearr_30947_30964[(2)] = inst_30927);

(statearr_30947_30964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30934 === (8))){
var inst_30920 = (state_30933[(9)]);
var inst_30923 = cljs.core.deref.call(null,inst_30920);
var state_30933__$1 = state_30933;
var statearr_30948_30965 = state_30933__$1;
(statearr_30948_30965[(2)] = inst_30923);

(statearr_30948_30965[(1)] = (10));


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
});})(c__30167__auto__))
;
return ((function (switch__30055__auto__,c__30167__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30056__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30056__auto____0 = (function (){
var statearr_30952 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30952[(0)] = cljs$core$async$reduce_$_state_machine__30056__auto__);

(statearr_30952[(1)] = (1));

return statearr_30952;
});
var cljs$core$async$reduce_$_state_machine__30056__auto____1 = (function (state_30933){
while(true){
var ret_value__30057__auto__ = (function (){try{while(true){
var result__30058__auto__ = switch__30055__auto__.call(null,state_30933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30058__auto__;
}
break;
}
}catch (e30953){if((e30953 instanceof Object)){
var ex__30059__auto__ = e30953;
var statearr_30954_30966 = state_30933;
(statearr_30954_30966[(5)] = ex__30059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30967 = state_30933;
state_30933 = G__30967;
continue;
} else {
return ret_value__30057__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30056__auto__ = function(state_30933){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30056__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30056__auto____1.call(this,state_30933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30056__auto____0;
cljs$core$async$reduce_$_state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30056__auto____1;
return cljs$core$async$reduce_$_state_machine__30056__auto__;
})()
;})(switch__30055__auto__,c__30167__auto__))
})();
var state__30169__auto__ = (function (){var statearr_30955 = f__30168__auto__.call(null);
(statearr_30955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30167__auto__);

return statearr_30955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30169__auto__);
});})(c__30167__auto__))
);

return c__30167__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args30968 = [];
var len__25873__auto___31020 = arguments.length;
var i__25874__auto___31021 = (0);
while(true){
if((i__25874__auto___31021 < len__25873__auto___31020)){
args30968.push((arguments[i__25874__auto___31021]));

var G__31022 = (i__25874__auto___31021 + (1));
i__25874__auto___31021 = G__31022;
continue;
} else {
}
break;
}

var G__30970 = args30968.length;
switch (G__30970) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30968.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30167__auto__){
return (function (){
var f__30168__auto__ = (function (){var switch__30055__auto__ = ((function (c__30167__auto__){
return (function (state_30995){
var state_val_30996 = (state_30995[(1)]);
if((state_val_30996 === (7))){
var inst_30977 = (state_30995[(2)]);
var state_30995__$1 = state_30995;
var statearr_30997_31024 = state_30995__$1;
(statearr_30997_31024[(2)] = inst_30977);

(statearr_30997_31024[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (1))){
var inst_30971 = cljs.core.seq.call(null,coll);
var inst_30972 = inst_30971;
var state_30995__$1 = (function (){var statearr_30998 = state_30995;
(statearr_30998[(7)] = inst_30972);

return statearr_30998;
})();
var statearr_30999_31025 = state_30995__$1;
(statearr_30999_31025[(2)] = null);

(statearr_30999_31025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (4))){
var inst_30972 = (state_30995[(7)]);
var inst_30975 = cljs.core.first.call(null,inst_30972);
var state_30995__$1 = state_30995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30995__$1,(7),ch,inst_30975);
} else {
if((state_val_30996 === (13))){
var inst_30989 = (state_30995[(2)]);
var state_30995__$1 = state_30995;
var statearr_31000_31026 = state_30995__$1;
(statearr_31000_31026[(2)] = inst_30989);

(statearr_31000_31026[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (6))){
var inst_30980 = (state_30995[(2)]);
var state_30995__$1 = state_30995;
if(cljs.core.truth_(inst_30980)){
var statearr_31001_31027 = state_30995__$1;
(statearr_31001_31027[(1)] = (8));

} else {
var statearr_31002_31028 = state_30995__$1;
(statearr_31002_31028[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (3))){
var inst_30993 = (state_30995[(2)]);
var state_30995__$1 = state_30995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30995__$1,inst_30993);
} else {
if((state_val_30996 === (12))){
var state_30995__$1 = state_30995;
var statearr_31003_31029 = state_30995__$1;
(statearr_31003_31029[(2)] = null);

(statearr_31003_31029[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (2))){
var inst_30972 = (state_30995[(7)]);
var state_30995__$1 = state_30995;
if(cljs.core.truth_(inst_30972)){
var statearr_31004_31030 = state_30995__$1;
(statearr_31004_31030[(1)] = (4));

} else {
var statearr_31005_31031 = state_30995__$1;
(statearr_31005_31031[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (11))){
var inst_30986 = cljs.core.async.close_BANG_.call(null,ch);
var state_30995__$1 = state_30995;
var statearr_31006_31032 = state_30995__$1;
(statearr_31006_31032[(2)] = inst_30986);

(statearr_31006_31032[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (9))){
var state_30995__$1 = state_30995;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31007_31033 = state_30995__$1;
(statearr_31007_31033[(1)] = (11));

} else {
var statearr_31008_31034 = state_30995__$1;
(statearr_31008_31034[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (5))){
var inst_30972 = (state_30995[(7)]);
var state_30995__$1 = state_30995;
var statearr_31009_31035 = state_30995__$1;
(statearr_31009_31035[(2)] = inst_30972);

(statearr_31009_31035[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (10))){
var inst_30991 = (state_30995[(2)]);
var state_30995__$1 = state_30995;
var statearr_31010_31036 = state_30995__$1;
(statearr_31010_31036[(2)] = inst_30991);

(statearr_31010_31036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (8))){
var inst_30972 = (state_30995[(7)]);
var inst_30982 = cljs.core.next.call(null,inst_30972);
var inst_30972__$1 = inst_30982;
var state_30995__$1 = (function (){var statearr_31011 = state_30995;
(statearr_31011[(7)] = inst_30972__$1);

return statearr_31011;
})();
var statearr_31012_31037 = state_30995__$1;
(statearr_31012_31037[(2)] = null);

(statearr_31012_31037[(1)] = (2));


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
});})(c__30167__auto__))
;
return ((function (switch__30055__auto__,c__30167__auto__){
return (function() {
var cljs$core$async$state_machine__30056__auto__ = null;
var cljs$core$async$state_machine__30056__auto____0 = (function (){
var statearr_31016 = [null,null,null,null,null,null,null,null];
(statearr_31016[(0)] = cljs$core$async$state_machine__30056__auto__);

(statearr_31016[(1)] = (1));

return statearr_31016;
});
var cljs$core$async$state_machine__30056__auto____1 = (function (state_30995){
while(true){
var ret_value__30057__auto__ = (function (){try{while(true){
var result__30058__auto__ = switch__30055__auto__.call(null,state_30995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30058__auto__;
}
break;
}
}catch (e31017){if((e31017 instanceof Object)){
var ex__30059__auto__ = e31017;
var statearr_31018_31038 = state_30995;
(statearr_31018_31038[(5)] = ex__30059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31039 = state_30995;
state_30995 = G__31039;
continue;
} else {
return ret_value__30057__auto__;
}
break;
}
});
cljs$core$async$state_machine__30056__auto__ = function(state_30995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30056__auto____1.call(this,state_30995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30056__auto____0;
cljs$core$async$state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30056__auto____1;
return cljs$core$async$state_machine__30056__auto__;
})()
;})(switch__30055__auto__,c__30167__auto__))
})();
var state__30169__auto__ = (function (){var statearr_31019 = f__30168__auto__.call(null);
(statearr_31019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30167__auto__);

return statearr_31019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30169__auto__);
});})(c__30167__auto__))
);

return c__30167__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25461__auto__ = (((_ == null))?null:_);
var m__25462__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,_);
} else {
var m__25462__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25461__auto__ = (((m == null))?null:m);
var m__25462__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25462__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25461__auto__ = (((m == null))?null:m);
var m__25462__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,m,ch);
} else {
var m__25462__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25461__auto__ = (((m == null))?null:m);
var m__25462__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,m);
} else {
var m__25462__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31265 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31265 = (function (mult,ch,cs,meta31266){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta31266 = meta31266;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31267,meta31266__$1){
var self__ = this;
var _31267__$1 = this;
return (new cljs.core.async.t_cljs$core$async31265(self__.mult,self__.ch,self__.cs,meta31266__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31265.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31267){
var self__ = this;
var _31267__$1 = this;
return self__.meta31266;
});})(cs))
;

cljs.core.async.t_cljs$core$async31265.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31265.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31265.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async31265.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31265.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31265.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31265.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31266","meta31266",-175609914,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31265.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31265.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31265";

cljs.core.async.t_cljs$core$async31265.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"cljs.core.async/t_cljs$core$async31265");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31265 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31265(mult__$1,ch__$1,cs__$1,meta31266){
return (new cljs.core.async.t_cljs$core$async31265(mult__$1,ch__$1,cs__$1,meta31266));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31265(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30167__auto___31490 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30167__auto___31490,cs,m,dchan,dctr,done){
return (function (){
var f__30168__auto__ = (function (){var switch__30055__auto__ = ((function (c__30167__auto___31490,cs,m,dchan,dctr,done){
return (function (state_31402){
var state_val_31403 = (state_31402[(1)]);
if((state_val_31403 === (7))){
var inst_31398 = (state_31402[(2)]);
var state_31402__$1 = state_31402;
var statearr_31404_31491 = state_31402__$1;
(statearr_31404_31491[(2)] = inst_31398);

(statearr_31404_31491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (20))){
var inst_31301 = (state_31402[(7)]);
var inst_31313 = cljs.core.first.call(null,inst_31301);
var inst_31314 = cljs.core.nth.call(null,inst_31313,(0),null);
var inst_31315 = cljs.core.nth.call(null,inst_31313,(1),null);
var state_31402__$1 = (function (){var statearr_31405 = state_31402;
(statearr_31405[(8)] = inst_31314);

return statearr_31405;
})();
if(cljs.core.truth_(inst_31315)){
var statearr_31406_31492 = state_31402__$1;
(statearr_31406_31492[(1)] = (22));

} else {
var statearr_31407_31493 = state_31402__$1;
(statearr_31407_31493[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (27))){
var inst_31345 = (state_31402[(9)]);
var inst_31270 = (state_31402[(10)]);
var inst_31350 = (state_31402[(11)]);
var inst_31343 = (state_31402[(12)]);
var inst_31350__$1 = cljs.core._nth.call(null,inst_31343,inst_31345);
var inst_31351 = cljs.core.async.put_BANG_.call(null,inst_31350__$1,inst_31270,done);
var state_31402__$1 = (function (){var statearr_31408 = state_31402;
(statearr_31408[(11)] = inst_31350__$1);

return statearr_31408;
})();
if(cljs.core.truth_(inst_31351)){
var statearr_31409_31494 = state_31402__$1;
(statearr_31409_31494[(1)] = (30));

} else {
var statearr_31410_31495 = state_31402__$1;
(statearr_31410_31495[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (1))){
var state_31402__$1 = state_31402;
var statearr_31411_31496 = state_31402__$1;
(statearr_31411_31496[(2)] = null);

(statearr_31411_31496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (24))){
var inst_31301 = (state_31402[(7)]);
var inst_31320 = (state_31402[(2)]);
var inst_31321 = cljs.core.next.call(null,inst_31301);
var inst_31279 = inst_31321;
var inst_31280 = null;
var inst_31281 = (0);
var inst_31282 = (0);
var state_31402__$1 = (function (){var statearr_31412 = state_31402;
(statearr_31412[(13)] = inst_31279);

(statearr_31412[(14)] = inst_31281);

(statearr_31412[(15)] = inst_31320);

(statearr_31412[(16)] = inst_31280);

(statearr_31412[(17)] = inst_31282);

return statearr_31412;
})();
var statearr_31413_31497 = state_31402__$1;
(statearr_31413_31497[(2)] = null);

(statearr_31413_31497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (39))){
var state_31402__$1 = state_31402;
var statearr_31417_31498 = state_31402__$1;
(statearr_31417_31498[(2)] = null);

(statearr_31417_31498[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (4))){
var inst_31270 = (state_31402[(10)]);
var inst_31270__$1 = (state_31402[(2)]);
var inst_31271 = (inst_31270__$1 == null);
var state_31402__$1 = (function (){var statearr_31418 = state_31402;
(statearr_31418[(10)] = inst_31270__$1);

return statearr_31418;
})();
if(cljs.core.truth_(inst_31271)){
var statearr_31419_31499 = state_31402__$1;
(statearr_31419_31499[(1)] = (5));

} else {
var statearr_31420_31500 = state_31402__$1;
(statearr_31420_31500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (15))){
var inst_31279 = (state_31402[(13)]);
var inst_31281 = (state_31402[(14)]);
var inst_31280 = (state_31402[(16)]);
var inst_31282 = (state_31402[(17)]);
var inst_31297 = (state_31402[(2)]);
var inst_31298 = (inst_31282 + (1));
var tmp31414 = inst_31279;
var tmp31415 = inst_31281;
var tmp31416 = inst_31280;
var inst_31279__$1 = tmp31414;
var inst_31280__$1 = tmp31416;
var inst_31281__$1 = tmp31415;
var inst_31282__$1 = inst_31298;
var state_31402__$1 = (function (){var statearr_31421 = state_31402;
(statearr_31421[(13)] = inst_31279__$1);

(statearr_31421[(14)] = inst_31281__$1);

(statearr_31421[(16)] = inst_31280__$1);

(statearr_31421[(18)] = inst_31297);

(statearr_31421[(17)] = inst_31282__$1);

return statearr_31421;
})();
var statearr_31422_31501 = state_31402__$1;
(statearr_31422_31501[(2)] = null);

(statearr_31422_31501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (21))){
var inst_31324 = (state_31402[(2)]);
var state_31402__$1 = state_31402;
var statearr_31426_31502 = state_31402__$1;
(statearr_31426_31502[(2)] = inst_31324);

(statearr_31426_31502[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (31))){
var inst_31350 = (state_31402[(11)]);
var inst_31354 = done.call(null,null);
var inst_31355 = cljs.core.async.untap_STAR_.call(null,m,inst_31350);
var state_31402__$1 = (function (){var statearr_31427 = state_31402;
(statearr_31427[(19)] = inst_31354);

return statearr_31427;
})();
var statearr_31428_31503 = state_31402__$1;
(statearr_31428_31503[(2)] = inst_31355);

(statearr_31428_31503[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (32))){
var inst_31345 = (state_31402[(9)]);
var inst_31342 = (state_31402[(20)]);
var inst_31343 = (state_31402[(12)]);
var inst_31344 = (state_31402[(21)]);
var inst_31357 = (state_31402[(2)]);
var inst_31358 = (inst_31345 + (1));
var tmp31423 = inst_31342;
var tmp31424 = inst_31343;
var tmp31425 = inst_31344;
var inst_31342__$1 = tmp31423;
var inst_31343__$1 = tmp31424;
var inst_31344__$1 = tmp31425;
var inst_31345__$1 = inst_31358;
var state_31402__$1 = (function (){var statearr_31429 = state_31402;
(statearr_31429[(9)] = inst_31345__$1);

(statearr_31429[(20)] = inst_31342__$1);

(statearr_31429[(12)] = inst_31343__$1);

(statearr_31429[(21)] = inst_31344__$1);

(statearr_31429[(22)] = inst_31357);

return statearr_31429;
})();
var statearr_31430_31504 = state_31402__$1;
(statearr_31430_31504[(2)] = null);

(statearr_31430_31504[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (40))){
var inst_31370 = (state_31402[(23)]);
var inst_31374 = done.call(null,null);
var inst_31375 = cljs.core.async.untap_STAR_.call(null,m,inst_31370);
var state_31402__$1 = (function (){var statearr_31431 = state_31402;
(statearr_31431[(24)] = inst_31374);

return statearr_31431;
})();
var statearr_31432_31505 = state_31402__$1;
(statearr_31432_31505[(2)] = inst_31375);

(statearr_31432_31505[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (33))){
var inst_31361 = (state_31402[(25)]);
var inst_31363 = cljs.core.chunked_seq_QMARK_.call(null,inst_31361);
var state_31402__$1 = state_31402;
if(inst_31363){
var statearr_31433_31506 = state_31402__$1;
(statearr_31433_31506[(1)] = (36));

} else {
var statearr_31434_31507 = state_31402__$1;
(statearr_31434_31507[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (13))){
var inst_31291 = (state_31402[(26)]);
var inst_31294 = cljs.core.async.close_BANG_.call(null,inst_31291);
var state_31402__$1 = state_31402;
var statearr_31435_31508 = state_31402__$1;
(statearr_31435_31508[(2)] = inst_31294);

(statearr_31435_31508[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (22))){
var inst_31314 = (state_31402[(8)]);
var inst_31317 = cljs.core.async.close_BANG_.call(null,inst_31314);
var state_31402__$1 = state_31402;
var statearr_31436_31509 = state_31402__$1;
(statearr_31436_31509[(2)] = inst_31317);

(statearr_31436_31509[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (36))){
var inst_31361 = (state_31402[(25)]);
var inst_31365 = cljs.core.chunk_first.call(null,inst_31361);
var inst_31366 = cljs.core.chunk_rest.call(null,inst_31361);
var inst_31367 = cljs.core.count.call(null,inst_31365);
var inst_31342 = inst_31366;
var inst_31343 = inst_31365;
var inst_31344 = inst_31367;
var inst_31345 = (0);
var state_31402__$1 = (function (){var statearr_31437 = state_31402;
(statearr_31437[(9)] = inst_31345);

(statearr_31437[(20)] = inst_31342);

(statearr_31437[(12)] = inst_31343);

(statearr_31437[(21)] = inst_31344);

return statearr_31437;
})();
var statearr_31438_31510 = state_31402__$1;
(statearr_31438_31510[(2)] = null);

(statearr_31438_31510[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (41))){
var inst_31361 = (state_31402[(25)]);
var inst_31377 = (state_31402[(2)]);
var inst_31378 = cljs.core.next.call(null,inst_31361);
var inst_31342 = inst_31378;
var inst_31343 = null;
var inst_31344 = (0);
var inst_31345 = (0);
var state_31402__$1 = (function (){var statearr_31439 = state_31402;
(statearr_31439[(9)] = inst_31345);

(statearr_31439[(20)] = inst_31342);

(statearr_31439[(12)] = inst_31343);

(statearr_31439[(21)] = inst_31344);

(statearr_31439[(27)] = inst_31377);

return statearr_31439;
})();
var statearr_31440_31511 = state_31402__$1;
(statearr_31440_31511[(2)] = null);

(statearr_31440_31511[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (43))){
var state_31402__$1 = state_31402;
var statearr_31441_31512 = state_31402__$1;
(statearr_31441_31512[(2)] = null);

(statearr_31441_31512[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (29))){
var inst_31386 = (state_31402[(2)]);
var state_31402__$1 = state_31402;
var statearr_31442_31513 = state_31402__$1;
(statearr_31442_31513[(2)] = inst_31386);

(statearr_31442_31513[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (44))){
var inst_31395 = (state_31402[(2)]);
var state_31402__$1 = (function (){var statearr_31443 = state_31402;
(statearr_31443[(28)] = inst_31395);

return statearr_31443;
})();
var statearr_31444_31514 = state_31402__$1;
(statearr_31444_31514[(2)] = null);

(statearr_31444_31514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (6))){
var inst_31334 = (state_31402[(29)]);
var inst_31333 = cljs.core.deref.call(null,cs);
var inst_31334__$1 = cljs.core.keys.call(null,inst_31333);
var inst_31335 = cljs.core.count.call(null,inst_31334__$1);
var inst_31336 = cljs.core.reset_BANG_.call(null,dctr,inst_31335);
var inst_31341 = cljs.core.seq.call(null,inst_31334__$1);
var inst_31342 = inst_31341;
var inst_31343 = null;
var inst_31344 = (0);
var inst_31345 = (0);
var state_31402__$1 = (function (){var statearr_31445 = state_31402;
(statearr_31445[(9)] = inst_31345);

(statearr_31445[(29)] = inst_31334__$1);

(statearr_31445[(20)] = inst_31342);

(statearr_31445[(12)] = inst_31343);

(statearr_31445[(21)] = inst_31344);

(statearr_31445[(30)] = inst_31336);

return statearr_31445;
})();
var statearr_31446_31515 = state_31402__$1;
(statearr_31446_31515[(2)] = null);

(statearr_31446_31515[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (28))){
var inst_31342 = (state_31402[(20)]);
var inst_31361 = (state_31402[(25)]);
var inst_31361__$1 = cljs.core.seq.call(null,inst_31342);
var state_31402__$1 = (function (){var statearr_31447 = state_31402;
(statearr_31447[(25)] = inst_31361__$1);

return statearr_31447;
})();
if(inst_31361__$1){
var statearr_31448_31516 = state_31402__$1;
(statearr_31448_31516[(1)] = (33));

} else {
var statearr_31449_31517 = state_31402__$1;
(statearr_31449_31517[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (25))){
var inst_31345 = (state_31402[(9)]);
var inst_31344 = (state_31402[(21)]);
var inst_31347 = (inst_31345 < inst_31344);
var inst_31348 = inst_31347;
var state_31402__$1 = state_31402;
if(cljs.core.truth_(inst_31348)){
var statearr_31450_31518 = state_31402__$1;
(statearr_31450_31518[(1)] = (27));

} else {
var statearr_31451_31519 = state_31402__$1;
(statearr_31451_31519[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (34))){
var state_31402__$1 = state_31402;
var statearr_31452_31520 = state_31402__$1;
(statearr_31452_31520[(2)] = null);

(statearr_31452_31520[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (17))){
var state_31402__$1 = state_31402;
var statearr_31453_31521 = state_31402__$1;
(statearr_31453_31521[(2)] = null);

(statearr_31453_31521[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (3))){
var inst_31400 = (state_31402[(2)]);
var state_31402__$1 = state_31402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31402__$1,inst_31400);
} else {
if((state_val_31403 === (12))){
var inst_31329 = (state_31402[(2)]);
var state_31402__$1 = state_31402;
var statearr_31454_31522 = state_31402__$1;
(statearr_31454_31522[(2)] = inst_31329);

(statearr_31454_31522[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (2))){
var state_31402__$1 = state_31402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31402__$1,(4),ch);
} else {
if((state_val_31403 === (23))){
var state_31402__$1 = state_31402;
var statearr_31455_31523 = state_31402__$1;
(statearr_31455_31523[(2)] = null);

(statearr_31455_31523[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (35))){
var inst_31384 = (state_31402[(2)]);
var state_31402__$1 = state_31402;
var statearr_31456_31524 = state_31402__$1;
(statearr_31456_31524[(2)] = inst_31384);

(statearr_31456_31524[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (19))){
var inst_31301 = (state_31402[(7)]);
var inst_31305 = cljs.core.chunk_first.call(null,inst_31301);
var inst_31306 = cljs.core.chunk_rest.call(null,inst_31301);
var inst_31307 = cljs.core.count.call(null,inst_31305);
var inst_31279 = inst_31306;
var inst_31280 = inst_31305;
var inst_31281 = inst_31307;
var inst_31282 = (0);
var state_31402__$1 = (function (){var statearr_31457 = state_31402;
(statearr_31457[(13)] = inst_31279);

(statearr_31457[(14)] = inst_31281);

(statearr_31457[(16)] = inst_31280);

(statearr_31457[(17)] = inst_31282);

return statearr_31457;
})();
var statearr_31458_31525 = state_31402__$1;
(statearr_31458_31525[(2)] = null);

(statearr_31458_31525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (11))){
var inst_31301 = (state_31402[(7)]);
var inst_31279 = (state_31402[(13)]);
var inst_31301__$1 = cljs.core.seq.call(null,inst_31279);
var state_31402__$1 = (function (){var statearr_31459 = state_31402;
(statearr_31459[(7)] = inst_31301__$1);

return statearr_31459;
})();
if(inst_31301__$1){
var statearr_31460_31526 = state_31402__$1;
(statearr_31460_31526[(1)] = (16));

} else {
var statearr_31461_31527 = state_31402__$1;
(statearr_31461_31527[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (9))){
var inst_31331 = (state_31402[(2)]);
var state_31402__$1 = state_31402;
var statearr_31462_31528 = state_31402__$1;
(statearr_31462_31528[(2)] = inst_31331);

(statearr_31462_31528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (5))){
var inst_31277 = cljs.core.deref.call(null,cs);
var inst_31278 = cljs.core.seq.call(null,inst_31277);
var inst_31279 = inst_31278;
var inst_31280 = null;
var inst_31281 = (0);
var inst_31282 = (0);
var state_31402__$1 = (function (){var statearr_31463 = state_31402;
(statearr_31463[(13)] = inst_31279);

(statearr_31463[(14)] = inst_31281);

(statearr_31463[(16)] = inst_31280);

(statearr_31463[(17)] = inst_31282);

return statearr_31463;
})();
var statearr_31464_31529 = state_31402__$1;
(statearr_31464_31529[(2)] = null);

(statearr_31464_31529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (14))){
var state_31402__$1 = state_31402;
var statearr_31465_31530 = state_31402__$1;
(statearr_31465_31530[(2)] = null);

(statearr_31465_31530[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (45))){
var inst_31392 = (state_31402[(2)]);
var state_31402__$1 = state_31402;
var statearr_31466_31531 = state_31402__$1;
(statearr_31466_31531[(2)] = inst_31392);

(statearr_31466_31531[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (26))){
var inst_31334 = (state_31402[(29)]);
var inst_31388 = (state_31402[(2)]);
var inst_31389 = cljs.core.seq.call(null,inst_31334);
var state_31402__$1 = (function (){var statearr_31467 = state_31402;
(statearr_31467[(31)] = inst_31388);

return statearr_31467;
})();
if(inst_31389){
var statearr_31468_31532 = state_31402__$1;
(statearr_31468_31532[(1)] = (42));

} else {
var statearr_31469_31533 = state_31402__$1;
(statearr_31469_31533[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (16))){
var inst_31301 = (state_31402[(7)]);
var inst_31303 = cljs.core.chunked_seq_QMARK_.call(null,inst_31301);
var state_31402__$1 = state_31402;
if(inst_31303){
var statearr_31470_31534 = state_31402__$1;
(statearr_31470_31534[(1)] = (19));

} else {
var statearr_31471_31535 = state_31402__$1;
(statearr_31471_31535[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (38))){
var inst_31381 = (state_31402[(2)]);
var state_31402__$1 = state_31402;
var statearr_31472_31536 = state_31402__$1;
(statearr_31472_31536[(2)] = inst_31381);

(statearr_31472_31536[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (30))){
var state_31402__$1 = state_31402;
var statearr_31473_31537 = state_31402__$1;
(statearr_31473_31537[(2)] = null);

(statearr_31473_31537[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (10))){
var inst_31280 = (state_31402[(16)]);
var inst_31282 = (state_31402[(17)]);
var inst_31290 = cljs.core._nth.call(null,inst_31280,inst_31282);
var inst_31291 = cljs.core.nth.call(null,inst_31290,(0),null);
var inst_31292 = cljs.core.nth.call(null,inst_31290,(1),null);
var state_31402__$1 = (function (){var statearr_31474 = state_31402;
(statearr_31474[(26)] = inst_31291);

return statearr_31474;
})();
if(cljs.core.truth_(inst_31292)){
var statearr_31475_31538 = state_31402__$1;
(statearr_31475_31538[(1)] = (13));

} else {
var statearr_31476_31539 = state_31402__$1;
(statearr_31476_31539[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (18))){
var inst_31327 = (state_31402[(2)]);
var state_31402__$1 = state_31402;
var statearr_31477_31540 = state_31402__$1;
(statearr_31477_31540[(2)] = inst_31327);

(statearr_31477_31540[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (42))){
var state_31402__$1 = state_31402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31402__$1,(45),dchan);
} else {
if((state_val_31403 === (37))){
var inst_31370 = (state_31402[(23)]);
var inst_31270 = (state_31402[(10)]);
var inst_31361 = (state_31402[(25)]);
var inst_31370__$1 = cljs.core.first.call(null,inst_31361);
var inst_31371 = cljs.core.async.put_BANG_.call(null,inst_31370__$1,inst_31270,done);
var state_31402__$1 = (function (){var statearr_31478 = state_31402;
(statearr_31478[(23)] = inst_31370__$1);

return statearr_31478;
})();
if(cljs.core.truth_(inst_31371)){
var statearr_31479_31541 = state_31402__$1;
(statearr_31479_31541[(1)] = (39));

} else {
var statearr_31480_31542 = state_31402__$1;
(statearr_31480_31542[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31403 === (8))){
var inst_31281 = (state_31402[(14)]);
var inst_31282 = (state_31402[(17)]);
var inst_31284 = (inst_31282 < inst_31281);
var inst_31285 = inst_31284;
var state_31402__$1 = state_31402;
if(cljs.core.truth_(inst_31285)){
var statearr_31481_31543 = state_31402__$1;
(statearr_31481_31543[(1)] = (10));

} else {
var statearr_31482_31544 = state_31402__$1;
(statearr_31482_31544[(1)] = (11));

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
});})(c__30167__auto___31490,cs,m,dchan,dctr,done))
;
return ((function (switch__30055__auto__,c__30167__auto___31490,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30056__auto__ = null;
var cljs$core$async$mult_$_state_machine__30056__auto____0 = (function (){
var statearr_31486 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31486[(0)] = cljs$core$async$mult_$_state_machine__30056__auto__);

(statearr_31486[(1)] = (1));

return statearr_31486;
});
var cljs$core$async$mult_$_state_machine__30056__auto____1 = (function (state_31402){
while(true){
var ret_value__30057__auto__ = (function (){try{while(true){
var result__30058__auto__ = switch__30055__auto__.call(null,state_31402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30058__auto__;
}
break;
}
}catch (e31487){if((e31487 instanceof Object)){
var ex__30059__auto__ = e31487;
var statearr_31488_31545 = state_31402;
(statearr_31488_31545[(5)] = ex__30059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31546 = state_31402;
state_31402 = G__31546;
continue;
} else {
return ret_value__30057__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30056__auto__ = function(state_31402){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30056__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30056__auto____1.call(this,state_31402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30056__auto____0;
cljs$core$async$mult_$_state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30056__auto____1;
return cljs$core$async$mult_$_state_machine__30056__auto__;
})()
;})(switch__30055__auto__,c__30167__auto___31490,cs,m,dchan,dctr,done))
})();
var state__30169__auto__ = (function (){var statearr_31489 = f__30168__auto__.call(null);
(statearr_31489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30167__auto___31490);

return statearr_31489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30169__auto__);
});})(c__30167__auto___31490,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args31547 = [];
var len__25873__auto___31550 = arguments.length;
var i__25874__auto___31551 = (0);
while(true){
if((i__25874__auto___31551 < len__25873__auto___31550)){
args31547.push((arguments[i__25874__auto___31551]));

var G__31552 = (i__25874__auto___31551 + (1));
i__25874__auto___31551 = G__31552;
continue;
} else {
}
break;
}

var G__31549 = args31547.length;
switch (G__31549) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31547.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25461__auto__ = (((m == null))?null:m);
var m__25462__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,m,ch);
} else {
var m__25462__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25461__auto__ = (((m == null))?null:m);
var m__25462__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,m,ch);
} else {
var m__25462__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25461__auto__ = (((m == null))?null:m);
var m__25462__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,m);
} else {
var m__25462__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25461__auto__ = (((m == null))?null:m);
var m__25462__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,m,state_map);
} else {
var m__25462__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25461__auto__ = (((m == null))?null:m);
var m__25462__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,m,mode);
} else {
var m__25462__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25880__auto__ = [];
var len__25873__auto___31564 = arguments.length;
var i__25874__auto___31565 = (0);
while(true){
if((i__25874__auto___31565 < len__25873__auto___31564)){
args__25880__auto__.push((arguments[i__25874__auto___31565]));

var G__31566 = (i__25874__auto___31565 + (1));
i__25874__auto___31565 = G__31566;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((3) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25881__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31558){
var map__31559 = p__31558;
var map__31559__$1 = ((((!((map__31559 == null)))?((((map__31559.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31559.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31559):map__31559);
var opts = map__31559__$1;
var statearr_31561_31567 = state;
(statearr_31561_31567[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__31559,map__31559__$1,opts){
return (function (val){
var statearr_31562_31568 = state;
(statearr_31562_31568[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31559,map__31559__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_31563_31569 = state;
(statearr_31563_31569[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31554){
var G__31555 = cljs.core.first.call(null,seq31554);
var seq31554__$1 = cljs.core.next.call(null,seq31554);
var G__31556 = cljs.core.first.call(null,seq31554__$1);
var seq31554__$2 = cljs.core.next.call(null,seq31554__$1);
var G__31557 = cljs.core.first.call(null,seq31554__$2);
var seq31554__$3 = cljs.core.next.call(null,seq31554__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31555,G__31556,G__31557,seq31554__$3);
});

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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31735 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31735 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31736){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31736 = meta31736;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31737,meta31736__$1){
var self__ = this;
var _31737__$1 = this;
return (new cljs.core.async.t_cljs$core$async31735(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31736__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31735.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31737){
var self__ = this;
var _31737__$1 = this;
return self__.meta31736;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31735.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31735.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31735.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async31735.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31735.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31735.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31735.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31735.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31735.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31736","meta31736",59397799,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31735.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31735.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31735";

cljs.core.async.t_cljs$core$async31735.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"cljs.core.async/t_cljs$core$async31735");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31735 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31735(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31736){
return (new cljs.core.async.t_cljs$core$async31735(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31736));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31735(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30167__auto___31900 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30167__auto___31900,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30168__auto__ = (function (){var switch__30055__auto__ = ((function (c__30167__auto___31900,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31837){
var state_val_31838 = (state_31837[(1)]);
if((state_val_31838 === (7))){
var inst_31753 = (state_31837[(2)]);
var state_31837__$1 = state_31837;
var statearr_31839_31901 = state_31837__$1;
(statearr_31839_31901[(2)] = inst_31753);

(statearr_31839_31901[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (20))){
var inst_31765 = (state_31837[(7)]);
var state_31837__$1 = state_31837;
var statearr_31840_31902 = state_31837__$1;
(statearr_31840_31902[(2)] = inst_31765);

(statearr_31840_31902[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (27))){
var state_31837__$1 = state_31837;
var statearr_31841_31903 = state_31837__$1;
(statearr_31841_31903[(2)] = null);

(statearr_31841_31903[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (1))){
var inst_31741 = (state_31837[(8)]);
var inst_31741__$1 = calc_state.call(null);
var inst_31743 = (inst_31741__$1 == null);
var inst_31744 = cljs.core.not.call(null,inst_31743);
var state_31837__$1 = (function (){var statearr_31842 = state_31837;
(statearr_31842[(8)] = inst_31741__$1);

return statearr_31842;
})();
if(inst_31744){
var statearr_31843_31904 = state_31837__$1;
(statearr_31843_31904[(1)] = (2));

} else {
var statearr_31844_31905 = state_31837__$1;
(statearr_31844_31905[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (24))){
var inst_31797 = (state_31837[(9)]);
var inst_31811 = (state_31837[(10)]);
var inst_31788 = (state_31837[(11)]);
var inst_31811__$1 = inst_31788.call(null,inst_31797);
var state_31837__$1 = (function (){var statearr_31845 = state_31837;
(statearr_31845[(10)] = inst_31811__$1);

return statearr_31845;
})();
if(cljs.core.truth_(inst_31811__$1)){
var statearr_31846_31906 = state_31837__$1;
(statearr_31846_31906[(1)] = (29));

} else {
var statearr_31847_31907 = state_31837__$1;
(statearr_31847_31907[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (4))){
var inst_31756 = (state_31837[(2)]);
var state_31837__$1 = state_31837;
if(cljs.core.truth_(inst_31756)){
var statearr_31848_31908 = state_31837__$1;
(statearr_31848_31908[(1)] = (8));

} else {
var statearr_31849_31909 = state_31837__$1;
(statearr_31849_31909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (15))){
var inst_31782 = (state_31837[(2)]);
var state_31837__$1 = state_31837;
if(cljs.core.truth_(inst_31782)){
var statearr_31850_31910 = state_31837__$1;
(statearr_31850_31910[(1)] = (19));

} else {
var statearr_31851_31911 = state_31837__$1;
(statearr_31851_31911[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (21))){
var inst_31787 = (state_31837[(12)]);
var inst_31787__$1 = (state_31837[(2)]);
var inst_31788 = cljs.core.get.call(null,inst_31787__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31789 = cljs.core.get.call(null,inst_31787__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31790 = cljs.core.get.call(null,inst_31787__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31837__$1 = (function (){var statearr_31852 = state_31837;
(statearr_31852[(13)] = inst_31789);

(statearr_31852[(11)] = inst_31788);

(statearr_31852[(12)] = inst_31787__$1);

return statearr_31852;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31837__$1,(22),inst_31790);
} else {
if((state_val_31838 === (31))){
var inst_31819 = (state_31837[(2)]);
var state_31837__$1 = state_31837;
if(cljs.core.truth_(inst_31819)){
var statearr_31853_31912 = state_31837__$1;
(statearr_31853_31912[(1)] = (32));

} else {
var statearr_31854_31913 = state_31837__$1;
(statearr_31854_31913[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (32))){
var inst_31796 = (state_31837[(14)]);
var state_31837__$1 = state_31837;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31837__$1,(35),out,inst_31796);
} else {
if((state_val_31838 === (33))){
var inst_31787 = (state_31837[(12)]);
var inst_31765 = inst_31787;
var state_31837__$1 = (function (){var statearr_31855 = state_31837;
(statearr_31855[(7)] = inst_31765);

return statearr_31855;
})();
var statearr_31856_31914 = state_31837__$1;
(statearr_31856_31914[(2)] = null);

(statearr_31856_31914[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (13))){
var inst_31765 = (state_31837[(7)]);
var inst_31772 = inst_31765.cljs$lang$protocol_mask$partition0$;
var inst_31773 = (inst_31772 & (64));
var inst_31774 = inst_31765.cljs$core$ISeq$;
var inst_31775 = (inst_31773) || (inst_31774);
var state_31837__$1 = state_31837;
if(cljs.core.truth_(inst_31775)){
var statearr_31857_31915 = state_31837__$1;
(statearr_31857_31915[(1)] = (16));

} else {
var statearr_31858_31916 = state_31837__$1;
(statearr_31858_31916[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (22))){
var inst_31797 = (state_31837[(9)]);
var inst_31796 = (state_31837[(14)]);
var inst_31795 = (state_31837[(2)]);
var inst_31796__$1 = cljs.core.nth.call(null,inst_31795,(0),null);
var inst_31797__$1 = cljs.core.nth.call(null,inst_31795,(1),null);
var inst_31798 = (inst_31796__$1 == null);
var inst_31799 = cljs.core._EQ_.call(null,inst_31797__$1,change);
var inst_31800 = (inst_31798) || (inst_31799);
var state_31837__$1 = (function (){var statearr_31859 = state_31837;
(statearr_31859[(9)] = inst_31797__$1);

(statearr_31859[(14)] = inst_31796__$1);

return statearr_31859;
})();
if(cljs.core.truth_(inst_31800)){
var statearr_31860_31917 = state_31837__$1;
(statearr_31860_31917[(1)] = (23));

} else {
var statearr_31861_31918 = state_31837__$1;
(statearr_31861_31918[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (36))){
var inst_31787 = (state_31837[(12)]);
var inst_31765 = inst_31787;
var state_31837__$1 = (function (){var statearr_31862 = state_31837;
(statearr_31862[(7)] = inst_31765);

return statearr_31862;
})();
var statearr_31863_31919 = state_31837__$1;
(statearr_31863_31919[(2)] = null);

(statearr_31863_31919[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (29))){
var inst_31811 = (state_31837[(10)]);
var state_31837__$1 = state_31837;
var statearr_31864_31920 = state_31837__$1;
(statearr_31864_31920[(2)] = inst_31811);

(statearr_31864_31920[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (6))){
var state_31837__$1 = state_31837;
var statearr_31865_31921 = state_31837__$1;
(statearr_31865_31921[(2)] = false);

(statearr_31865_31921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (28))){
var inst_31807 = (state_31837[(2)]);
var inst_31808 = calc_state.call(null);
var inst_31765 = inst_31808;
var state_31837__$1 = (function (){var statearr_31866 = state_31837;
(statearr_31866[(15)] = inst_31807);

(statearr_31866[(7)] = inst_31765);

return statearr_31866;
})();
var statearr_31867_31922 = state_31837__$1;
(statearr_31867_31922[(2)] = null);

(statearr_31867_31922[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (25))){
var inst_31833 = (state_31837[(2)]);
var state_31837__$1 = state_31837;
var statearr_31868_31923 = state_31837__$1;
(statearr_31868_31923[(2)] = inst_31833);

(statearr_31868_31923[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (34))){
var inst_31831 = (state_31837[(2)]);
var state_31837__$1 = state_31837;
var statearr_31869_31924 = state_31837__$1;
(statearr_31869_31924[(2)] = inst_31831);

(statearr_31869_31924[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (17))){
var state_31837__$1 = state_31837;
var statearr_31870_31925 = state_31837__$1;
(statearr_31870_31925[(2)] = false);

(statearr_31870_31925[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (3))){
var state_31837__$1 = state_31837;
var statearr_31871_31926 = state_31837__$1;
(statearr_31871_31926[(2)] = false);

(statearr_31871_31926[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (12))){
var inst_31835 = (state_31837[(2)]);
var state_31837__$1 = state_31837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31837__$1,inst_31835);
} else {
if((state_val_31838 === (2))){
var inst_31741 = (state_31837[(8)]);
var inst_31746 = inst_31741.cljs$lang$protocol_mask$partition0$;
var inst_31747 = (inst_31746 & (64));
var inst_31748 = inst_31741.cljs$core$ISeq$;
var inst_31749 = (inst_31747) || (inst_31748);
var state_31837__$1 = state_31837;
if(cljs.core.truth_(inst_31749)){
var statearr_31872_31927 = state_31837__$1;
(statearr_31872_31927[(1)] = (5));

} else {
var statearr_31873_31928 = state_31837__$1;
(statearr_31873_31928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (23))){
var inst_31796 = (state_31837[(14)]);
var inst_31802 = (inst_31796 == null);
var state_31837__$1 = state_31837;
if(cljs.core.truth_(inst_31802)){
var statearr_31874_31929 = state_31837__$1;
(statearr_31874_31929[(1)] = (26));

} else {
var statearr_31875_31930 = state_31837__$1;
(statearr_31875_31930[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (35))){
var inst_31822 = (state_31837[(2)]);
var state_31837__$1 = state_31837;
if(cljs.core.truth_(inst_31822)){
var statearr_31876_31931 = state_31837__$1;
(statearr_31876_31931[(1)] = (36));

} else {
var statearr_31877_31932 = state_31837__$1;
(statearr_31877_31932[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (19))){
var inst_31765 = (state_31837[(7)]);
var inst_31784 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31765);
var state_31837__$1 = state_31837;
var statearr_31878_31933 = state_31837__$1;
(statearr_31878_31933[(2)] = inst_31784);

(statearr_31878_31933[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (11))){
var inst_31765 = (state_31837[(7)]);
var inst_31769 = (inst_31765 == null);
var inst_31770 = cljs.core.not.call(null,inst_31769);
var state_31837__$1 = state_31837;
if(inst_31770){
var statearr_31879_31934 = state_31837__$1;
(statearr_31879_31934[(1)] = (13));

} else {
var statearr_31880_31935 = state_31837__$1;
(statearr_31880_31935[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (9))){
var inst_31741 = (state_31837[(8)]);
var state_31837__$1 = state_31837;
var statearr_31881_31936 = state_31837__$1;
(statearr_31881_31936[(2)] = inst_31741);

(statearr_31881_31936[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (5))){
var state_31837__$1 = state_31837;
var statearr_31882_31937 = state_31837__$1;
(statearr_31882_31937[(2)] = true);

(statearr_31882_31937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (14))){
var state_31837__$1 = state_31837;
var statearr_31883_31938 = state_31837__$1;
(statearr_31883_31938[(2)] = false);

(statearr_31883_31938[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (26))){
var inst_31797 = (state_31837[(9)]);
var inst_31804 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31797);
var state_31837__$1 = state_31837;
var statearr_31884_31939 = state_31837__$1;
(statearr_31884_31939[(2)] = inst_31804);

(statearr_31884_31939[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (16))){
var state_31837__$1 = state_31837;
var statearr_31885_31940 = state_31837__$1;
(statearr_31885_31940[(2)] = true);

(statearr_31885_31940[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (38))){
var inst_31827 = (state_31837[(2)]);
var state_31837__$1 = state_31837;
var statearr_31886_31941 = state_31837__$1;
(statearr_31886_31941[(2)] = inst_31827);

(statearr_31886_31941[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (30))){
var inst_31797 = (state_31837[(9)]);
var inst_31789 = (state_31837[(13)]);
var inst_31788 = (state_31837[(11)]);
var inst_31814 = cljs.core.empty_QMARK_.call(null,inst_31788);
var inst_31815 = inst_31789.call(null,inst_31797);
var inst_31816 = cljs.core.not.call(null,inst_31815);
var inst_31817 = (inst_31814) && (inst_31816);
var state_31837__$1 = state_31837;
var statearr_31887_31942 = state_31837__$1;
(statearr_31887_31942[(2)] = inst_31817);

(statearr_31887_31942[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (10))){
var inst_31741 = (state_31837[(8)]);
var inst_31761 = (state_31837[(2)]);
var inst_31762 = cljs.core.get.call(null,inst_31761,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31763 = cljs.core.get.call(null,inst_31761,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31764 = cljs.core.get.call(null,inst_31761,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31765 = inst_31741;
var state_31837__$1 = (function (){var statearr_31888 = state_31837;
(statearr_31888[(16)] = inst_31764);

(statearr_31888[(17)] = inst_31763);

(statearr_31888[(18)] = inst_31762);

(statearr_31888[(7)] = inst_31765);

return statearr_31888;
})();
var statearr_31889_31943 = state_31837__$1;
(statearr_31889_31943[(2)] = null);

(statearr_31889_31943[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (18))){
var inst_31779 = (state_31837[(2)]);
var state_31837__$1 = state_31837;
var statearr_31890_31944 = state_31837__$1;
(statearr_31890_31944[(2)] = inst_31779);

(statearr_31890_31944[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (37))){
var state_31837__$1 = state_31837;
var statearr_31891_31945 = state_31837__$1;
(statearr_31891_31945[(2)] = null);

(statearr_31891_31945[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31838 === (8))){
var inst_31741 = (state_31837[(8)]);
var inst_31758 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31741);
var state_31837__$1 = state_31837;
var statearr_31892_31946 = state_31837__$1;
(statearr_31892_31946[(2)] = inst_31758);

(statearr_31892_31946[(1)] = (10));


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
});})(c__30167__auto___31900,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30055__auto__,c__30167__auto___31900,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30056__auto__ = null;
var cljs$core$async$mix_$_state_machine__30056__auto____0 = (function (){
var statearr_31896 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31896[(0)] = cljs$core$async$mix_$_state_machine__30056__auto__);

(statearr_31896[(1)] = (1));

return statearr_31896;
});
var cljs$core$async$mix_$_state_machine__30056__auto____1 = (function (state_31837){
while(true){
var ret_value__30057__auto__ = (function (){try{while(true){
var result__30058__auto__ = switch__30055__auto__.call(null,state_31837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30058__auto__;
}
break;
}
}catch (e31897){if((e31897 instanceof Object)){
var ex__30059__auto__ = e31897;
var statearr_31898_31947 = state_31837;
(statearr_31898_31947[(5)] = ex__30059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31948 = state_31837;
state_31837 = G__31948;
continue;
} else {
return ret_value__30057__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30056__auto__ = function(state_31837){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30056__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30056__auto____1.call(this,state_31837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30056__auto____0;
cljs$core$async$mix_$_state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30056__auto____1;
return cljs$core$async$mix_$_state_machine__30056__auto__;
})()
;})(switch__30055__auto__,c__30167__auto___31900,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30169__auto__ = (function (){var statearr_31899 = f__30168__auto__.call(null);
(statearr_31899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30167__auto___31900);

return statearr_31899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30169__auto__);
});})(c__30167__auto___31900,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25461__auto__ = (((p == null))?null:p);
var m__25462__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25462__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25461__auto__ = (((p == null))?null:p);
var m__25462__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,p,v,ch);
} else {
var m__25462__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args31949 = [];
var len__25873__auto___31952 = arguments.length;
var i__25874__auto___31953 = (0);
while(true){
if((i__25874__auto___31953 < len__25873__auto___31952)){
args31949.push((arguments[i__25874__auto___31953]));

var G__31954 = (i__25874__auto___31953 + (1));
i__25874__auto___31953 = G__31954;
continue;
} else {
}
break;
}

var G__31951 = args31949.length;
switch (G__31951) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31949.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25461__auto__ = (((p == null))?null:p);
var m__25462__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,p);
} else {
var m__25462__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25461__auto__ = (((p == null))?null:p);
var m__25462__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,p,v);
} else {
var m__25462__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var args31957 = [];
var len__25873__auto___32082 = arguments.length;
var i__25874__auto___32083 = (0);
while(true){
if((i__25874__auto___32083 < len__25873__auto___32082)){
args31957.push((arguments[i__25874__auto___32083]));

var G__32084 = (i__25874__auto___32083 + (1));
i__25874__auto___32083 = G__32084;
continue;
} else {
}
break;
}

var G__31959 = args31957.length;
switch (G__31959) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31957.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24798__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24798__auto__,mults){
return (function (p1__31956_SHARP_){
if(cljs.core.truth_(p1__31956_SHARP_.call(null,topic))){
return p1__31956_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31956_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24798__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31960 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31960 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31961){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31961 = meta31961;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31962,meta31961__$1){
var self__ = this;
var _31962__$1 = this;
return (new cljs.core.async.t_cljs$core$async31960(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31961__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31960.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31962){
var self__ = this;
var _31962__$1 = this;
return self__.meta31961;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31960.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31960.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31960.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async31960.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31960.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31960.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31960.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31960.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31961","meta31961",72935162,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31960.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31960.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31960";

cljs.core.async.t_cljs$core$async31960.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"cljs.core.async/t_cljs$core$async31960");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31960 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31960(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31961){
return (new cljs.core.async.t_cljs$core$async31960(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31961));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31960(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30167__auto___32086 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30167__auto___32086,mults,ensure_mult,p){
return (function (){
var f__30168__auto__ = (function (){var switch__30055__auto__ = ((function (c__30167__auto___32086,mults,ensure_mult,p){
return (function (state_32034){
var state_val_32035 = (state_32034[(1)]);
if((state_val_32035 === (7))){
var inst_32030 = (state_32034[(2)]);
var state_32034__$1 = state_32034;
var statearr_32036_32087 = state_32034__$1;
(statearr_32036_32087[(2)] = inst_32030);

(statearr_32036_32087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (20))){
var state_32034__$1 = state_32034;
var statearr_32037_32088 = state_32034__$1;
(statearr_32037_32088[(2)] = null);

(statearr_32037_32088[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (1))){
var state_32034__$1 = state_32034;
var statearr_32038_32089 = state_32034__$1;
(statearr_32038_32089[(2)] = null);

(statearr_32038_32089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (24))){
var inst_32013 = (state_32034[(7)]);
var inst_32022 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32013);
var state_32034__$1 = state_32034;
var statearr_32039_32090 = state_32034__$1;
(statearr_32039_32090[(2)] = inst_32022);

(statearr_32039_32090[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (4))){
var inst_31965 = (state_32034[(8)]);
var inst_31965__$1 = (state_32034[(2)]);
var inst_31966 = (inst_31965__$1 == null);
var state_32034__$1 = (function (){var statearr_32040 = state_32034;
(statearr_32040[(8)] = inst_31965__$1);

return statearr_32040;
})();
if(cljs.core.truth_(inst_31966)){
var statearr_32041_32091 = state_32034__$1;
(statearr_32041_32091[(1)] = (5));

} else {
var statearr_32042_32092 = state_32034__$1;
(statearr_32042_32092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (15))){
var inst_32007 = (state_32034[(2)]);
var state_32034__$1 = state_32034;
var statearr_32043_32093 = state_32034__$1;
(statearr_32043_32093[(2)] = inst_32007);

(statearr_32043_32093[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (21))){
var inst_32027 = (state_32034[(2)]);
var state_32034__$1 = (function (){var statearr_32044 = state_32034;
(statearr_32044[(9)] = inst_32027);

return statearr_32044;
})();
var statearr_32045_32094 = state_32034__$1;
(statearr_32045_32094[(2)] = null);

(statearr_32045_32094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (13))){
var inst_31989 = (state_32034[(10)]);
var inst_31991 = cljs.core.chunked_seq_QMARK_.call(null,inst_31989);
var state_32034__$1 = state_32034;
if(inst_31991){
var statearr_32046_32095 = state_32034__$1;
(statearr_32046_32095[(1)] = (16));

} else {
var statearr_32047_32096 = state_32034__$1;
(statearr_32047_32096[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (22))){
var inst_32019 = (state_32034[(2)]);
var state_32034__$1 = state_32034;
if(cljs.core.truth_(inst_32019)){
var statearr_32048_32097 = state_32034__$1;
(statearr_32048_32097[(1)] = (23));

} else {
var statearr_32049_32098 = state_32034__$1;
(statearr_32049_32098[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (6))){
var inst_32015 = (state_32034[(11)]);
var inst_31965 = (state_32034[(8)]);
var inst_32013 = (state_32034[(7)]);
var inst_32013__$1 = topic_fn.call(null,inst_31965);
var inst_32014 = cljs.core.deref.call(null,mults);
var inst_32015__$1 = cljs.core.get.call(null,inst_32014,inst_32013__$1);
var state_32034__$1 = (function (){var statearr_32050 = state_32034;
(statearr_32050[(11)] = inst_32015__$1);

(statearr_32050[(7)] = inst_32013__$1);

return statearr_32050;
})();
if(cljs.core.truth_(inst_32015__$1)){
var statearr_32051_32099 = state_32034__$1;
(statearr_32051_32099[(1)] = (19));

} else {
var statearr_32052_32100 = state_32034__$1;
(statearr_32052_32100[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (25))){
var inst_32024 = (state_32034[(2)]);
var state_32034__$1 = state_32034;
var statearr_32053_32101 = state_32034__$1;
(statearr_32053_32101[(2)] = inst_32024);

(statearr_32053_32101[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (17))){
var inst_31989 = (state_32034[(10)]);
var inst_31998 = cljs.core.first.call(null,inst_31989);
var inst_31999 = cljs.core.async.muxch_STAR_.call(null,inst_31998);
var inst_32000 = cljs.core.async.close_BANG_.call(null,inst_31999);
var inst_32001 = cljs.core.next.call(null,inst_31989);
var inst_31975 = inst_32001;
var inst_31976 = null;
var inst_31977 = (0);
var inst_31978 = (0);
var state_32034__$1 = (function (){var statearr_32054 = state_32034;
(statearr_32054[(12)] = inst_31975);

(statearr_32054[(13)] = inst_32000);

(statearr_32054[(14)] = inst_31976);

(statearr_32054[(15)] = inst_31977);

(statearr_32054[(16)] = inst_31978);

return statearr_32054;
})();
var statearr_32055_32102 = state_32034__$1;
(statearr_32055_32102[(2)] = null);

(statearr_32055_32102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (3))){
var inst_32032 = (state_32034[(2)]);
var state_32034__$1 = state_32034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32034__$1,inst_32032);
} else {
if((state_val_32035 === (12))){
var inst_32009 = (state_32034[(2)]);
var state_32034__$1 = state_32034;
var statearr_32056_32103 = state_32034__$1;
(statearr_32056_32103[(2)] = inst_32009);

(statearr_32056_32103[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (2))){
var state_32034__$1 = state_32034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32034__$1,(4),ch);
} else {
if((state_val_32035 === (23))){
var state_32034__$1 = state_32034;
var statearr_32057_32104 = state_32034__$1;
(statearr_32057_32104[(2)] = null);

(statearr_32057_32104[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (19))){
var inst_32015 = (state_32034[(11)]);
var inst_31965 = (state_32034[(8)]);
var inst_32017 = cljs.core.async.muxch_STAR_.call(null,inst_32015);
var state_32034__$1 = state_32034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32034__$1,(22),inst_32017,inst_31965);
} else {
if((state_val_32035 === (11))){
var inst_31975 = (state_32034[(12)]);
var inst_31989 = (state_32034[(10)]);
var inst_31989__$1 = cljs.core.seq.call(null,inst_31975);
var state_32034__$1 = (function (){var statearr_32058 = state_32034;
(statearr_32058[(10)] = inst_31989__$1);

return statearr_32058;
})();
if(inst_31989__$1){
var statearr_32059_32105 = state_32034__$1;
(statearr_32059_32105[(1)] = (13));

} else {
var statearr_32060_32106 = state_32034__$1;
(statearr_32060_32106[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (9))){
var inst_32011 = (state_32034[(2)]);
var state_32034__$1 = state_32034;
var statearr_32061_32107 = state_32034__$1;
(statearr_32061_32107[(2)] = inst_32011);

(statearr_32061_32107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (5))){
var inst_31972 = cljs.core.deref.call(null,mults);
var inst_31973 = cljs.core.vals.call(null,inst_31972);
var inst_31974 = cljs.core.seq.call(null,inst_31973);
var inst_31975 = inst_31974;
var inst_31976 = null;
var inst_31977 = (0);
var inst_31978 = (0);
var state_32034__$1 = (function (){var statearr_32062 = state_32034;
(statearr_32062[(12)] = inst_31975);

(statearr_32062[(14)] = inst_31976);

(statearr_32062[(15)] = inst_31977);

(statearr_32062[(16)] = inst_31978);

return statearr_32062;
})();
var statearr_32063_32108 = state_32034__$1;
(statearr_32063_32108[(2)] = null);

(statearr_32063_32108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (14))){
var state_32034__$1 = state_32034;
var statearr_32067_32109 = state_32034__$1;
(statearr_32067_32109[(2)] = null);

(statearr_32067_32109[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (16))){
var inst_31989 = (state_32034[(10)]);
var inst_31993 = cljs.core.chunk_first.call(null,inst_31989);
var inst_31994 = cljs.core.chunk_rest.call(null,inst_31989);
var inst_31995 = cljs.core.count.call(null,inst_31993);
var inst_31975 = inst_31994;
var inst_31976 = inst_31993;
var inst_31977 = inst_31995;
var inst_31978 = (0);
var state_32034__$1 = (function (){var statearr_32068 = state_32034;
(statearr_32068[(12)] = inst_31975);

(statearr_32068[(14)] = inst_31976);

(statearr_32068[(15)] = inst_31977);

(statearr_32068[(16)] = inst_31978);

return statearr_32068;
})();
var statearr_32069_32110 = state_32034__$1;
(statearr_32069_32110[(2)] = null);

(statearr_32069_32110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (10))){
var inst_31975 = (state_32034[(12)]);
var inst_31976 = (state_32034[(14)]);
var inst_31977 = (state_32034[(15)]);
var inst_31978 = (state_32034[(16)]);
var inst_31983 = cljs.core._nth.call(null,inst_31976,inst_31978);
var inst_31984 = cljs.core.async.muxch_STAR_.call(null,inst_31983);
var inst_31985 = cljs.core.async.close_BANG_.call(null,inst_31984);
var inst_31986 = (inst_31978 + (1));
var tmp32064 = inst_31975;
var tmp32065 = inst_31976;
var tmp32066 = inst_31977;
var inst_31975__$1 = tmp32064;
var inst_31976__$1 = tmp32065;
var inst_31977__$1 = tmp32066;
var inst_31978__$1 = inst_31986;
var state_32034__$1 = (function (){var statearr_32070 = state_32034;
(statearr_32070[(12)] = inst_31975__$1);

(statearr_32070[(14)] = inst_31976__$1);

(statearr_32070[(15)] = inst_31977__$1);

(statearr_32070[(16)] = inst_31978__$1);

(statearr_32070[(17)] = inst_31985);

return statearr_32070;
})();
var statearr_32071_32111 = state_32034__$1;
(statearr_32071_32111[(2)] = null);

(statearr_32071_32111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (18))){
var inst_32004 = (state_32034[(2)]);
var state_32034__$1 = state_32034;
var statearr_32072_32112 = state_32034__$1;
(statearr_32072_32112[(2)] = inst_32004);

(statearr_32072_32112[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32035 === (8))){
var inst_31977 = (state_32034[(15)]);
var inst_31978 = (state_32034[(16)]);
var inst_31980 = (inst_31978 < inst_31977);
var inst_31981 = inst_31980;
var state_32034__$1 = state_32034;
if(cljs.core.truth_(inst_31981)){
var statearr_32073_32113 = state_32034__$1;
(statearr_32073_32113[(1)] = (10));

} else {
var statearr_32074_32114 = state_32034__$1;
(statearr_32074_32114[(1)] = (11));

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
});})(c__30167__auto___32086,mults,ensure_mult,p))
;
return ((function (switch__30055__auto__,c__30167__auto___32086,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30056__auto__ = null;
var cljs$core$async$state_machine__30056__auto____0 = (function (){
var statearr_32078 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32078[(0)] = cljs$core$async$state_machine__30056__auto__);

(statearr_32078[(1)] = (1));

return statearr_32078;
});
var cljs$core$async$state_machine__30056__auto____1 = (function (state_32034){
while(true){
var ret_value__30057__auto__ = (function (){try{while(true){
var result__30058__auto__ = switch__30055__auto__.call(null,state_32034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30058__auto__;
}
break;
}
}catch (e32079){if((e32079 instanceof Object)){
var ex__30059__auto__ = e32079;
var statearr_32080_32115 = state_32034;
(statearr_32080_32115[(5)] = ex__30059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32116 = state_32034;
state_32034 = G__32116;
continue;
} else {
return ret_value__30057__auto__;
}
break;
}
});
cljs$core$async$state_machine__30056__auto__ = function(state_32034){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30056__auto____1.call(this,state_32034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30056__auto____0;
cljs$core$async$state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30056__auto____1;
return cljs$core$async$state_machine__30056__auto__;
})()
;})(switch__30055__auto__,c__30167__auto___32086,mults,ensure_mult,p))
})();
var state__30169__auto__ = (function (){var statearr_32081 = f__30168__auto__.call(null);
(statearr_32081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30167__auto___32086);

return statearr_32081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30169__auto__);
});})(c__30167__auto___32086,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args32117 = [];
var len__25873__auto___32120 = arguments.length;
var i__25874__auto___32121 = (0);
while(true){
if((i__25874__auto___32121 < len__25873__auto___32120)){
args32117.push((arguments[i__25874__auto___32121]));

var G__32122 = (i__25874__auto___32121 + (1));
i__25874__auto___32121 = G__32122;
continue;
} else {
}
break;
}

var G__32119 = args32117.length;
switch (G__32119) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32117.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args32124 = [];
var len__25873__auto___32127 = arguments.length;
var i__25874__auto___32128 = (0);
while(true){
if((i__25874__auto___32128 < len__25873__auto___32127)){
args32124.push((arguments[i__25874__auto___32128]));

var G__32129 = (i__25874__auto___32128 + (1));
i__25874__auto___32128 = G__32129;
continue;
} else {
}
break;
}

var G__32126 = args32124.length;
switch (G__32126) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32124.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var args32131 = [];
var len__25873__auto___32202 = arguments.length;
var i__25874__auto___32203 = (0);
while(true){
if((i__25874__auto___32203 < len__25873__auto___32202)){
args32131.push((arguments[i__25874__auto___32203]));

var G__32204 = (i__25874__auto___32203 + (1));
i__25874__auto___32203 = G__32204;
continue;
} else {
}
break;
}

var G__32133 = args32131.length;
switch (G__32133) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32131.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__30167__auto___32206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30167__auto___32206,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30168__auto__ = (function (){var switch__30055__auto__ = ((function (c__30167__auto___32206,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32172){
var state_val_32173 = (state_32172[(1)]);
if((state_val_32173 === (7))){
var state_32172__$1 = state_32172;
var statearr_32174_32207 = state_32172__$1;
(statearr_32174_32207[(2)] = null);

(statearr_32174_32207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (1))){
var state_32172__$1 = state_32172;
var statearr_32175_32208 = state_32172__$1;
(statearr_32175_32208[(2)] = null);

(statearr_32175_32208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (4))){
var inst_32136 = (state_32172[(7)]);
var inst_32138 = (inst_32136 < cnt);
var state_32172__$1 = state_32172;
if(cljs.core.truth_(inst_32138)){
var statearr_32176_32209 = state_32172__$1;
(statearr_32176_32209[(1)] = (6));

} else {
var statearr_32177_32210 = state_32172__$1;
(statearr_32177_32210[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (15))){
var inst_32168 = (state_32172[(2)]);
var state_32172__$1 = state_32172;
var statearr_32178_32211 = state_32172__$1;
(statearr_32178_32211[(2)] = inst_32168);

(statearr_32178_32211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (13))){
var inst_32161 = cljs.core.async.close_BANG_.call(null,out);
var state_32172__$1 = state_32172;
var statearr_32179_32212 = state_32172__$1;
(statearr_32179_32212[(2)] = inst_32161);

(statearr_32179_32212[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (6))){
var state_32172__$1 = state_32172;
var statearr_32180_32213 = state_32172__$1;
(statearr_32180_32213[(2)] = null);

(statearr_32180_32213[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (3))){
var inst_32170 = (state_32172[(2)]);
var state_32172__$1 = state_32172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32172__$1,inst_32170);
} else {
if((state_val_32173 === (12))){
var inst_32158 = (state_32172[(8)]);
var inst_32158__$1 = (state_32172[(2)]);
var inst_32159 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32158__$1);
var state_32172__$1 = (function (){var statearr_32181 = state_32172;
(statearr_32181[(8)] = inst_32158__$1);

return statearr_32181;
})();
if(cljs.core.truth_(inst_32159)){
var statearr_32182_32214 = state_32172__$1;
(statearr_32182_32214[(1)] = (13));

} else {
var statearr_32183_32215 = state_32172__$1;
(statearr_32183_32215[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (2))){
var inst_32135 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32136 = (0);
var state_32172__$1 = (function (){var statearr_32184 = state_32172;
(statearr_32184[(9)] = inst_32135);

(statearr_32184[(7)] = inst_32136);

return statearr_32184;
})();
var statearr_32185_32216 = state_32172__$1;
(statearr_32185_32216[(2)] = null);

(statearr_32185_32216[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (11))){
var inst_32136 = (state_32172[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32172,(10),Object,null,(9));
var inst_32145 = chs__$1.call(null,inst_32136);
var inst_32146 = done.call(null,inst_32136);
var inst_32147 = cljs.core.async.take_BANG_.call(null,inst_32145,inst_32146);
var state_32172__$1 = state_32172;
var statearr_32186_32217 = state_32172__$1;
(statearr_32186_32217[(2)] = inst_32147);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32172__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (9))){
var inst_32136 = (state_32172[(7)]);
var inst_32149 = (state_32172[(2)]);
var inst_32150 = (inst_32136 + (1));
var inst_32136__$1 = inst_32150;
var state_32172__$1 = (function (){var statearr_32187 = state_32172;
(statearr_32187[(10)] = inst_32149);

(statearr_32187[(7)] = inst_32136__$1);

return statearr_32187;
})();
var statearr_32188_32218 = state_32172__$1;
(statearr_32188_32218[(2)] = null);

(statearr_32188_32218[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (5))){
var inst_32156 = (state_32172[(2)]);
var state_32172__$1 = (function (){var statearr_32189 = state_32172;
(statearr_32189[(11)] = inst_32156);

return statearr_32189;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32172__$1,(12),dchan);
} else {
if((state_val_32173 === (14))){
var inst_32158 = (state_32172[(8)]);
var inst_32163 = cljs.core.apply.call(null,f,inst_32158);
var state_32172__$1 = state_32172;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32172__$1,(16),out,inst_32163);
} else {
if((state_val_32173 === (16))){
var inst_32165 = (state_32172[(2)]);
var state_32172__$1 = (function (){var statearr_32190 = state_32172;
(statearr_32190[(12)] = inst_32165);

return statearr_32190;
})();
var statearr_32191_32219 = state_32172__$1;
(statearr_32191_32219[(2)] = null);

(statearr_32191_32219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (10))){
var inst_32140 = (state_32172[(2)]);
var inst_32141 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32172__$1 = (function (){var statearr_32192 = state_32172;
(statearr_32192[(13)] = inst_32140);

return statearr_32192;
})();
var statearr_32193_32220 = state_32172__$1;
(statearr_32193_32220[(2)] = inst_32141);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32172__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (8))){
var inst_32154 = (state_32172[(2)]);
var state_32172__$1 = state_32172;
var statearr_32194_32221 = state_32172__$1;
(statearr_32194_32221[(2)] = inst_32154);

(statearr_32194_32221[(1)] = (5));


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
});})(c__30167__auto___32206,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30055__auto__,c__30167__auto___32206,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30056__auto__ = null;
var cljs$core$async$state_machine__30056__auto____0 = (function (){
var statearr_32198 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32198[(0)] = cljs$core$async$state_machine__30056__auto__);

(statearr_32198[(1)] = (1));

return statearr_32198;
});
var cljs$core$async$state_machine__30056__auto____1 = (function (state_32172){
while(true){
var ret_value__30057__auto__ = (function (){try{while(true){
var result__30058__auto__ = switch__30055__auto__.call(null,state_32172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30058__auto__;
}
break;
}
}catch (e32199){if((e32199 instanceof Object)){
var ex__30059__auto__ = e32199;
var statearr_32200_32222 = state_32172;
(statearr_32200_32222[(5)] = ex__30059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32223 = state_32172;
state_32172 = G__32223;
continue;
} else {
return ret_value__30057__auto__;
}
break;
}
});
cljs$core$async$state_machine__30056__auto__ = function(state_32172){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30056__auto____1.call(this,state_32172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30056__auto____0;
cljs$core$async$state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30056__auto____1;
return cljs$core$async$state_machine__30056__auto__;
})()
;})(switch__30055__auto__,c__30167__auto___32206,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30169__auto__ = (function (){var statearr_32201 = f__30168__auto__.call(null);
(statearr_32201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30167__auto___32206);

return statearr_32201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30169__auto__);
});})(c__30167__auto___32206,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args32225 = [];
var len__25873__auto___32283 = arguments.length;
var i__25874__auto___32284 = (0);
while(true){
if((i__25874__auto___32284 < len__25873__auto___32283)){
args32225.push((arguments[i__25874__auto___32284]));

var G__32285 = (i__25874__auto___32284 + (1));
i__25874__auto___32284 = G__32285;
continue;
} else {
}
break;
}

var G__32227 = args32225.length;
switch (G__32227) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32225.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30167__auto___32287 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30167__auto___32287,out){
return (function (){
var f__30168__auto__ = (function (){var switch__30055__auto__ = ((function (c__30167__auto___32287,out){
return (function (state_32259){
var state_val_32260 = (state_32259[(1)]);
if((state_val_32260 === (7))){
var inst_32238 = (state_32259[(7)]);
var inst_32239 = (state_32259[(8)]);
var inst_32238__$1 = (state_32259[(2)]);
var inst_32239__$1 = cljs.core.nth.call(null,inst_32238__$1,(0),null);
var inst_32240 = cljs.core.nth.call(null,inst_32238__$1,(1),null);
var inst_32241 = (inst_32239__$1 == null);
var state_32259__$1 = (function (){var statearr_32261 = state_32259;
(statearr_32261[(9)] = inst_32240);

(statearr_32261[(7)] = inst_32238__$1);

(statearr_32261[(8)] = inst_32239__$1);

return statearr_32261;
})();
if(cljs.core.truth_(inst_32241)){
var statearr_32262_32288 = state_32259__$1;
(statearr_32262_32288[(1)] = (8));

} else {
var statearr_32263_32289 = state_32259__$1;
(statearr_32263_32289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32260 === (1))){
var inst_32228 = cljs.core.vec.call(null,chs);
var inst_32229 = inst_32228;
var state_32259__$1 = (function (){var statearr_32264 = state_32259;
(statearr_32264[(10)] = inst_32229);

return statearr_32264;
})();
var statearr_32265_32290 = state_32259__$1;
(statearr_32265_32290[(2)] = null);

(statearr_32265_32290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32260 === (4))){
var inst_32229 = (state_32259[(10)]);
var state_32259__$1 = state_32259;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32259__$1,(7),inst_32229);
} else {
if((state_val_32260 === (6))){
var inst_32255 = (state_32259[(2)]);
var state_32259__$1 = state_32259;
var statearr_32266_32291 = state_32259__$1;
(statearr_32266_32291[(2)] = inst_32255);

(statearr_32266_32291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32260 === (3))){
var inst_32257 = (state_32259[(2)]);
var state_32259__$1 = state_32259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32259__$1,inst_32257);
} else {
if((state_val_32260 === (2))){
var inst_32229 = (state_32259[(10)]);
var inst_32231 = cljs.core.count.call(null,inst_32229);
var inst_32232 = (inst_32231 > (0));
var state_32259__$1 = state_32259;
if(cljs.core.truth_(inst_32232)){
var statearr_32268_32292 = state_32259__$1;
(statearr_32268_32292[(1)] = (4));

} else {
var statearr_32269_32293 = state_32259__$1;
(statearr_32269_32293[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32260 === (11))){
var inst_32229 = (state_32259[(10)]);
var inst_32248 = (state_32259[(2)]);
var tmp32267 = inst_32229;
var inst_32229__$1 = tmp32267;
var state_32259__$1 = (function (){var statearr_32270 = state_32259;
(statearr_32270[(10)] = inst_32229__$1);

(statearr_32270[(11)] = inst_32248);

return statearr_32270;
})();
var statearr_32271_32294 = state_32259__$1;
(statearr_32271_32294[(2)] = null);

(statearr_32271_32294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32260 === (9))){
var inst_32239 = (state_32259[(8)]);
var state_32259__$1 = state_32259;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32259__$1,(11),out,inst_32239);
} else {
if((state_val_32260 === (5))){
var inst_32253 = cljs.core.async.close_BANG_.call(null,out);
var state_32259__$1 = state_32259;
var statearr_32272_32295 = state_32259__$1;
(statearr_32272_32295[(2)] = inst_32253);

(statearr_32272_32295[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32260 === (10))){
var inst_32251 = (state_32259[(2)]);
var state_32259__$1 = state_32259;
var statearr_32273_32296 = state_32259__$1;
(statearr_32273_32296[(2)] = inst_32251);

(statearr_32273_32296[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32260 === (8))){
var inst_32229 = (state_32259[(10)]);
var inst_32240 = (state_32259[(9)]);
var inst_32238 = (state_32259[(7)]);
var inst_32239 = (state_32259[(8)]);
var inst_32243 = (function (){var cs = inst_32229;
var vec__32234 = inst_32238;
var v = inst_32239;
var c = inst_32240;
return ((function (cs,vec__32234,v,c,inst_32229,inst_32240,inst_32238,inst_32239,state_val_32260,c__30167__auto___32287,out){
return (function (p1__32224_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32224_SHARP_);
});
;})(cs,vec__32234,v,c,inst_32229,inst_32240,inst_32238,inst_32239,state_val_32260,c__30167__auto___32287,out))
})();
var inst_32244 = cljs.core.filterv.call(null,inst_32243,inst_32229);
var inst_32229__$1 = inst_32244;
var state_32259__$1 = (function (){var statearr_32274 = state_32259;
(statearr_32274[(10)] = inst_32229__$1);

return statearr_32274;
})();
var statearr_32275_32297 = state_32259__$1;
(statearr_32275_32297[(2)] = null);

(statearr_32275_32297[(1)] = (2));


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
});})(c__30167__auto___32287,out))
;
return ((function (switch__30055__auto__,c__30167__auto___32287,out){
return (function() {
var cljs$core$async$state_machine__30056__auto__ = null;
var cljs$core$async$state_machine__30056__auto____0 = (function (){
var statearr_32279 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32279[(0)] = cljs$core$async$state_machine__30056__auto__);

(statearr_32279[(1)] = (1));

return statearr_32279;
});
var cljs$core$async$state_machine__30056__auto____1 = (function (state_32259){
while(true){
var ret_value__30057__auto__ = (function (){try{while(true){
var result__30058__auto__ = switch__30055__auto__.call(null,state_32259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30058__auto__;
}
break;
}
}catch (e32280){if((e32280 instanceof Object)){
var ex__30059__auto__ = e32280;
var statearr_32281_32298 = state_32259;
(statearr_32281_32298[(5)] = ex__30059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32299 = state_32259;
state_32259 = G__32299;
continue;
} else {
return ret_value__30057__auto__;
}
break;
}
});
cljs$core$async$state_machine__30056__auto__ = function(state_32259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30056__auto____1.call(this,state_32259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30056__auto____0;
cljs$core$async$state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30056__auto____1;
return cljs$core$async$state_machine__30056__auto__;
})()
;})(switch__30055__auto__,c__30167__auto___32287,out))
})();
var state__30169__auto__ = (function (){var statearr_32282 = f__30168__auto__.call(null);
(statearr_32282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30167__auto___32287);

return statearr_32282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30169__auto__);
});})(c__30167__auto___32287,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args32300 = [];
var len__25873__auto___32349 = arguments.length;
var i__25874__auto___32350 = (0);
while(true){
if((i__25874__auto___32350 < len__25873__auto___32349)){
args32300.push((arguments[i__25874__auto___32350]));

var G__32351 = (i__25874__auto___32350 + (1));
i__25874__auto___32350 = G__32351;
continue;
} else {
}
break;
}

var G__32302 = args32300.length;
switch (G__32302) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32300.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30167__auto___32353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30167__auto___32353,out){
return (function (){
var f__30168__auto__ = (function (){var switch__30055__auto__ = ((function (c__30167__auto___32353,out){
return (function (state_32326){
var state_val_32327 = (state_32326[(1)]);
if((state_val_32327 === (7))){
var inst_32308 = (state_32326[(7)]);
var inst_32308__$1 = (state_32326[(2)]);
var inst_32309 = (inst_32308__$1 == null);
var inst_32310 = cljs.core.not.call(null,inst_32309);
var state_32326__$1 = (function (){var statearr_32328 = state_32326;
(statearr_32328[(7)] = inst_32308__$1);

return statearr_32328;
})();
if(inst_32310){
var statearr_32329_32354 = state_32326__$1;
(statearr_32329_32354[(1)] = (8));

} else {
var statearr_32330_32355 = state_32326__$1;
(statearr_32330_32355[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (1))){
var inst_32303 = (0);
var state_32326__$1 = (function (){var statearr_32331 = state_32326;
(statearr_32331[(8)] = inst_32303);

return statearr_32331;
})();
var statearr_32332_32356 = state_32326__$1;
(statearr_32332_32356[(2)] = null);

(statearr_32332_32356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (4))){
var state_32326__$1 = state_32326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32326__$1,(7),ch);
} else {
if((state_val_32327 === (6))){
var inst_32321 = (state_32326[(2)]);
var state_32326__$1 = state_32326;
var statearr_32333_32357 = state_32326__$1;
(statearr_32333_32357[(2)] = inst_32321);

(statearr_32333_32357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (3))){
var inst_32323 = (state_32326[(2)]);
var inst_32324 = cljs.core.async.close_BANG_.call(null,out);
var state_32326__$1 = (function (){var statearr_32334 = state_32326;
(statearr_32334[(9)] = inst_32323);

return statearr_32334;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32326__$1,inst_32324);
} else {
if((state_val_32327 === (2))){
var inst_32303 = (state_32326[(8)]);
var inst_32305 = (inst_32303 < n);
var state_32326__$1 = state_32326;
if(cljs.core.truth_(inst_32305)){
var statearr_32335_32358 = state_32326__$1;
(statearr_32335_32358[(1)] = (4));

} else {
var statearr_32336_32359 = state_32326__$1;
(statearr_32336_32359[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (11))){
var inst_32303 = (state_32326[(8)]);
var inst_32313 = (state_32326[(2)]);
var inst_32314 = (inst_32303 + (1));
var inst_32303__$1 = inst_32314;
var state_32326__$1 = (function (){var statearr_32337 = state_32326;
(statearr_32337[(10)] = inst_32313);

(statearr_32337[(8)] = inst_32303__$1);

return statearr_32337;
})();
var statearr_32338_32360 = state_32326__$1;
(statearr_32338_32360[(2)] = null);

(statearr_32338_32360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (9))){
var state_32326__$1 = state_32326;
var statearr_32339_32361 = state_32326__$1;
(statearr_32339_32361[(2)] = null);

(statearr_32339_32361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (5))){
var state_32326__$1 = state_32326;
var statearr_32340_32362 = state_32326__$1;
(statearr_32340_32362[(2)] = null);

(statearr_32340_32362[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (10))){
var inst_32318 = (state_32326[(2)]);
var state_32326__$1 = state_32326;
var statearr_32341_32363 = state_32326__$1;
(statearr_32341_32363[(2)] = inst_32318);

(statearr_32341_32363[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32327 === (8))){
var inst_32308 = (state_32326[(7)]);
var state_32326__$1 = state_32326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32326__$1,(11),out,inst_32308);
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
});})(c__30167__auto___32353,out))
;
return ((function (switch__30055__auto__,c__30167__auto___32353,out){
return (function() {
var cljs$core$async$state_machine__30056__auto__ = null;
var cljs$core$async$state_machine__30056__auto____0 = (function (){
var statearr_32345 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32345[(0)] = cljs$core$async$state_machine__30056__auto__);

(statearr_32345[(1)] = (1));

return statearr_32345;
});
var cljs$core$async$state_machine__30056__auto____1 = (function (state_32326){
while(true){
var ret_value__30057__auto__ = (function (){try{while(true){
var result__30058__auto__ = switch__30055__auto__.call(null,state_32326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30058__auto__;
}
break;
}
}catch (e32346){if((e32346 instanceof Object)){
var ex__30059__auto__ = e32346;
var statearr_32347_32364 = state_32326;
(statearr_32347_32364[(5)] = ex__30059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32365 = state_32326;
state_32326 = G__32365;
continue;
} else {
return ret_value__30057__auto__;
}
break;
}
});
cljs$core$async$state_machine__30056__auto__ = function(state_32326){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30056__auto____1.call(this,state_32326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30056__auto____0;
cljs$core$async$state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30056__auto____1;
return cljs$core$async$state_machine__30056__auto__;
})()
;})(switch__30055__auto__,c__30167__auto___32353,out))
})();
var state__30169__auto__ = (function (){var statearr_32348 = f__30168__auto__.call(null);
(statearr_32348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30167__auto___32353);

return statearr_32348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30169__auto__);
});})(c__30167__auto___32353,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32373 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32373 = (function (map_LT_,f,ch,meta32374){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32374 = meta32374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32375,meta32374__$1){
var self__ = this;
var _32375__$1 = this;
return (new cljs.core.async.t_cljs$core$async32373(self__.map_LT_,self__.f,self__.ch,meta32374__$1));
});

cljs.core.async.t_cljs$core$async32373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32375){
var self__ = this;
var _32375__$1 = this;
return self__.meta32374;
});

cljs.core.async.t_cljs$core$async32373.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32373.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32373.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32373.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32373.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32376 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32376 = (function (map_LT_,f,ch,meta32374,_,fn1,meta32377){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32374 = meta32374;
this._ = _;
this.fn1 = fn1;
this.meta32377 = meta32377;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32378,meta32377__$1){
var self__ = this;
var _32378__$1 = this;
return (new cljs.core.async.t_cljs$core$async32376(self__.map_LT_,self__.f,self__.ch,self__.meta32374,self__._,self__.fn1,meta32377__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32376.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32378){
var self__ = this;
var _32378__$1 = this;
return self__.meta32377;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32376.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32376.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32376.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32376.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32366_SHARP_){
return f1.call(null,(((p1__32366_SHARP_ == null))?null:self__.f.call(null,p1__32366_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32376.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32374","meta32374",-1932036164,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32373","cljs.core.async/t_cljs$core$async32373",1148174233,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32377","meta32377",167321428,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32376.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32376.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32376";

cljs.core.async.t_cljs$core$async32376.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"cljs.core.async/t_cljs$core$async32376");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32376 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32376(map_LT___$1,f__$1,ch__$1,meta32374__$1,___$2,fn1__$1,meta32377){
return (new cljs.core.async.t_cljs$core$async32376(map_LT___$1,f__$1,ch__$1,meta32374__$1,___$2,fn1__$1,meta32377));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32376(self__.map_LT_,self__.f,self__.ch,self__.meta32374,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24786__auto__ = ret;
if(cljs.core.truth_(and__24786__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24786__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32373.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32373.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32373.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32374","meta32374",-1932036164,null)], null);
});

cljs.core.async.t_cljs$core$async32373.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32373.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32373";

cljs.core.async.t_cljs$core$async32373.cljs$lang$ctorPrWriter = (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"cljs.core.async/t_cljs$core$async32373");
});

cljs.core.async.__GT_t_cljs$core$async32373 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32373(map_LT___$1,f__$1,ch__$1,meta32374){
return (new cljs.core.async.t_cljs$core$async32373(map_LT___$1,f__$1,ch__$1,meta32374));
});

}

return (new cljs.core.async.t_cljs$core$async32373(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32382 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32382 = (function (map_GT_,f,ch,meta32383){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta32383 = meta32383;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32384,meta32383__$1){
var self__ = this;
var _32384__$1 = this;
return (new cljs.core.async.t_cljs$core$async32382(self__.map_GT_,self__.f,self__.ch,meta32383__$1));
});

cljs.core.async.t_cljs$core$async32382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32384){
var self__ = this;
var _32384__$1 = this;
return self__.meta32383;
});

cljs.core.async.t_cljs$core$async32382.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32382.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32382.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32382.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32382.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32382.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32382.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32383","meta32383",169438892,null)], null);
});

cljs.core.async.t_cljs$core$async32382.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32382.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32382";

cljs.core.async.t_cljs$core$async32382.cljs$lang$ctorPrWriter = (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"cljs.core.async/t_cljs$core$async32382");
});

cljs.core.async.__GT_t_cljs$core$async32382 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32382(map_GT___$1,f__$1,ch__$1,meta32383){
return (new cljs.core.async.t_cljs$core$async32382(map_GT___$1,f__$1,ch__$1,meta32383));
});

}

return (new cljs.core.async.t_cljs$core$async32382(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32388 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32388 = (function (filter_GT_,p,ch,meta32389){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta32389 = meta32389;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32390,meta32389__$1){
var self__ = this;
var _32390__$1 = this;
return (new cljs.core.async.t_cljs$core$async32388(self__.filter_GT_,self__.p,self__.ch,meta32389__$1));
});

cljs.core.async.t_cljs$core$async32388.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32390){
var self__ = this;
var _32390__$1 = this;
return self__.meta32389;
});

cljs.core.async.t_cljs$core$async32388.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32388.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32388.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32388.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32388.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32388.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32388.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32388.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32389","meta32389",1685556105,null)], null);
});

cljs.core.async.t_cljs$core$async32388.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32388.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32388";

cljs.core.async.t_cljs$core$async32388.cljs$lang$ctorPrWriter = (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"cljs.core.async/t_cljs$core$async32388");
});

cljs.core.async.__GT_t_cljs$core$async32388 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32388(filter_GT___$1,p__$1,ch__$1,meta32389){
return (new cljs.core.async.t_cljs$core$async32388(filter_GT___$1,p__$1,ch__$1,meta32389));
});

}

return (new cljs.core.async.t_cljs$core$async32388(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args32391 = [];
var len__25873__auto___32435 = arguments.length;
var i__25874__auto___32436 = (0);
while(true){
if((i__25874__auto___32436 < len__25873__auto___32435)){
args32391.push((arguments[i__25874__auto___32436]));

var G__32437 = (i__25874__auto___32436 + (1));
i__25874__auto___32436 = G__32437;
continue;
} else {
}
break;
}

var G__32393 = args32391.length;
switch (G__32393) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32391.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30167__auto___32439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30167__auto___32439,out){
return (function (){
var f__30168__auto__ = (function (){var switch__30055__auto__ = ((function (c__30167__auto___32439,out){
return (function (state_32414){
var state_val_32415 = (state_32414[(1)]);
if((state_val_32415 === (7))){
var inst_32410 = (state_32414[(2)]);
var state_32414__$1 = state_32414;
var statearr_32416_32440 = state_32414__$1;
(statearr_32416_32440[(2)] = inst_32410);

(statearr_32416_32440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (1))){
var state_32414__$1 = state_32414;
var statearr_32417_32441 = state_32414__$1;
(statearr_32417_32441[(2)] = null);

(statearr_32417_32441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (4))){
var inst_32396 = (state_32414[(7)]);
var inst_32396__$1 = (state_32414[(2)]);
var inst_32397 = (inst_32396__$1 == null);
var state_32414__$1 = (function (){var statearr_32418 = state_32414;
(statearr_32418[(7)] = inst_32396__$1);

return statearr_32418;
})();
if(cljs.core.truth_(inst_32397)){
var statearr_32419_32442 = state_32414__$1;
(statearr_32419_32442[(1)] = (5));

} else {
var statearr_32420_32443 = state_32414__$1;
(statearr_32420_32443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (6))){
var inst_32396 = (state_32414[(7)]);
var inst_32401 = p.call(null,inst_32396);
var state_32414__$1 = state_32414;
if(cljs.core.truth_(inst_32401)){
var statearr_32421_32444 = state_32414__$1;
(statearr_32421_32444[(1)] = (8));

} else {
var statearr_32422_32445 = state_32414__$1;
(statearr_32422_32445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (3))){
var inst_32412 = (state_32414[(2)]);
var state_32414__$1 = state_32414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32414__$1,inst_32412);
} else {
if((state_val_32415 === (2))){
var state_32414__$1 = state_32414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32414__$1,(4),ch);
} else {
if((state_val_32415 === (11))){
var inst_32404 = (state_32414[(2)]);
var state_32414__$1 = state_32414;
var statearr_32423_32446 = state_32414__$1;
(statearr_32423_32446[(2)] = inst_32404);

(statearr_32423_32446[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (9))){
var state_32414__$1 = state_32414;
var statearr_32424_32447 = state_32414__$1;
(statearr_32424_32447[(2)] = null);

(statearr_32424_32447[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (5))){
var inst_32399 = cljs.core.async.close_BANG_.call(null,out);
var state_32414__$1 = state_32414;
var statearr_32425_32448 = state_32414__$1;
(statearr_32425_32448[(2)] = inst_32399);

(statearr_32425_32448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (10))){
var inst_32407 = (state_32414[(2)]);
var state_32414__$1 = (function (){var statearr_32426 = state_32414;
(statearr_32426[(8)] = inst_32407);

return statearr_32426;
})();
var statearr_32427_32449 = state_32414__$1;
(statearr_32427_32449[(2)] = null);

(statearr_32427_32449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32415 === (8))){
var inst_32396 = (state_32414[(7)]);
var state_32414__$1 = state_32414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32414__$1,(11),out,inst_32396);
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
});})(c__30167__auto___32439,out))
;
return ((function (switch__30055__auto__,c__30167__auto___32439,out){
return (function() {
var cljs$core$async$state_machine__30056__auto__ = null;
var cljs$core$async$state_machine__30056__auto____0 = (function (){
var statearr_32431 = [null,null,null,null,null,null,null,null,null];
(statearr_32431[(0)] = cljs$core$async$state_machine__30056__auto__);

(statearr_32431[(1)] = (1));

return statearr_32431;
});
var cljs$core$async$state_machine__30056__auto____1 = (function (state_32414){
while(true){
var ret_value__30057__auto__ = (function (){try{while(true){
var result__30058__auto__ = switch__30055__auto__.call(null,state_32414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30058__auto__;
}
break;
}
}catch (e32432){if((e32432 instanceof Object)){
var ex__30059__auto__ = e32432;
var statearr_32433_32450 = state_32414;
(statearr_32433_32450[(5)] = ex__30059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32451 = state_32414;
state_32414 = G__32451;
continue;
} else {
return ret_value__30057__auto__;
}
break;
}
});
cljs$core$async$state_machine__30056__auto__ = function(state_32414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30056__auto____1.call(this,state_32414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30056__auto____0;
cljs$core$async$state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30056__auto____1;
return cljs$core$async$state_machine__30056__auto__;
})()
;})(switch__30055__auto__,c__30167__auto___32439,out))
})();
var state__30169__auto__ = (function (){var statearr_32434 = f__30168__auto__.call(null);
(statearr_32434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30167__auto___32439);

return statearr_32434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30169__auto__);
});})(c__30167__auto___32439,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32452 = [];
var len__25873__auto___32455 = arguments.length;
var i__25874__auto___32456 = (0);
while(true){
if((i__25874__auto___32456 < len__25873__auto___32455)){
args32452.push((arguments[i__25874__auto___32456]));

var G__32457 = (i__25874__auto___32456 + (1));
i__25874__auto___32456 = G__32457;
continue;
} else {
}
break;
}

var G__32454 = args32452.length;
switch (G__32454) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32452.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30167__auto__){
return (function (){
var f__30168__auto__ = (function (){var switch__30055__auto__ = ((function (c__30167__auto__){
return (function (state_32624){
var state_val_32625 = (state_32624[(1)]);
if((state_val_32625 === (7))){
var inst_32620 = (state_32624[(2)]);
var state_32624__$1 = state_32624;
var statearr_32626_32667 = state_32624__$1;
(statearr_32626_32667[(2)] = inst_32620);

(statearr_32626_32667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (20))){
var inst_32590 = (state_32624[(7)]);
var inst_32601 = (state_32624[(2)]);
var inst_32602 = cljs.core.next.call(null,inst_32590);
var inst_32576 = inst_32602;
var inst_32577 = null;
var inst_32578 = (0);
var inst_32579 = (0);
var state_32624__$1 = (function (){var statearr_32627 = state_32624;
(statearr_32627[(8)] = inst_32579);

(statearr_32627[(9)] = inst_32578);

(statearr_32627[(10)] = inst_32601);

(statearr_32627[(11)] = inst_32577);

(statearr_32627[(12)] = inst_32576);

return statearr_32627;
})();
var statearr_32628_32668 = state_32624__$1;
(statearr_32628_32668[(2)] = null);

(statearr_32628_32668[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (1))){
var state_32624__$1 = state_32624;
var statearr_32629_32669 = state_32624__$1;
(statearr_32629_32669[(2)] = null);

(statearr_32629_32669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (4))){
var inst_32565 = (state_32624[(13)]);
var inst_32565__$1 = (state_32624[(2)]);
var inst_32566 = (inst_32565__$1 == null);
var state_32624__$1 = (function (){var statearr_32630 = state_32624;
(statearr_32630[(13)] = inst_32565__$1);

return statearr_32630;
})();
if(cljs.core.truth_(inst_32566)){
var statearr_32631_32670 = state_32624__$1;
(statearr_32631_32670[(1)] = (5));

} else {
var statearr_32632_32671 = state_32624__$1;
(statearr_32632_32671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (15))){
var state_32624__$1 = state_32624;
var statearr_32636_32672 = state_32624__$1;
(statearr_32636_32672[(2)] = null);

(statearr_32636_32672[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (21))){
var state_32624__$1 = state_32624;
var statearr_32637_32673 = state_32624__$1;
(statearr_32637_32673[(2)] = null);

(statearr_32637_32673[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (13))){
var inst_32579 = (state_32624[(8)]);
var inst_32578 = (state_32624[(9)]);
var inst_32577 = (state_32624[(11)]);
var inst_32576 = (state_32624[(12)]);
var inst_32586 = (state_32624[(2)]);
var inst_32587 = (inst_32579 + (1));
var tmp32633 = inst_32578;
var tmp32634 = inst_32577;
var tmp32635 = inst_32576;
var inst_32576__$1 = tmp32635;
var inst_32577__$1 = tmp32634;
var inst_32578__$1 = tmp32633;
var inst_32579__$1 = inst_32587;
var state_32624__$1 = (function (){var statearr_32638 = state_32624;
(statearr_32638[(8)] = inst_32579__$1);

(statearr_32638[(14)] = inst_32586);

(statearr_32638[(9)] = inst_32578__$1);

(statearr_32638[(11)] = inst_32577__$1);

(statearr_32638[(12)] = inst_32576__$1);

return statearr_32638;
})();
var statearr_32639_32674 = state_32624__$1;
(statearr_32639_32674[(2)] = null);

(statearr_32639_32674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (22))){
var state_32624__$1 = state_32624;
var statearr_32640_32675 = state_32624__$1;
(statearr_32640_32675[(2)] = null);

(statearr_32640_32675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (6))){
var inst_32565 = (state_32624[(13)]);
var inst_32574 = f.call(null,inst_32565);
var inst_32575 = cljs.core.seq.call(null,inst_32574);
var inst_32576 = inst_32575;
var inst_32577 = null;
var inst_32578 = (0);
var inst_32579 = (0);
var state_32624__$1 = (function (){var statearr_32641 = state_32624;
(statearr_32641[(8)] = inst_32579);

(statearr_32641[(9)] = inst_32578);

(statearr_32641[(11)] = inst_32577);

(statearr_32641[(12)] = inst_32576);

return statearr_32641;
})();
var statearr_32642_32676 = state_32624__$1;
(statearr_32642_32676[(2)] = null);

(statearr_32642_32676[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (17))){
var inst_32590 = (state_32624[(7)]);
var inst_32594 = cljs.core.chunk_first.call(null,inst_32590);
var inst_32595 = cljs.core.chunk_rest.call(null,inst_32590);
var inst_32596 = cljs.core.count.call(null,inst_32594);
var inst_32576 = inst_32595;
var inst_32577 = inst_32594;
var inst_32578 = inst_32596;
var inst_32579 = (0);
var state_32624__$1 = (function (){var statearr_32643 = state_32624;
(statearr_32643[(8)] = inst_32579);

(statearr_32643[(9)] = inst_32578);

(statearr_32643[(11)] = inst_32577);

(statearr_32643[(12)] = inst_32576);

return statearr_32643;
})();
var statearr_32644_32677 = state_32624__$1;
(statearr_32644_32677[(2)] = null);

(statearr_32644_32677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (3))){
var inst_32622 = (state_32624[(2)]);
var state_32624__$1 = state_32624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32624__$1,inst_32622);
} else {
if((state_val_32625 === (12))){
var inst_32610 = (state_32624[(2)]);
var state_32624__$1 = state_32624;
var statearr_32645_32678 = state_32624__$1;
(statearr_32645_32678[(2)] = inst_32610);

(statearr_32645_32678[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (2))){
var state_32624__$1 = state_32624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32624__$1,(4),in$);
} else {
if((state_val_32625 === (23))){
var inst_32618 = (state_32624[(2)]);
var state_32624__$1 = state_32624;
var statearr_32646_32679 = state_32624__$1;
(statearr_32646_32679[(2)] = inst_32618);

(statearr_32646_32679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (19))){
var inst_32605 = (state_32624[(2)]);
var state_32624__$1 = state_32624;
var statearr_32647_32680 = state_32624__$1;
(statearr_32647_32680[(2)] = inst_32605);

(statearr_32647_32680[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (11))){
var inst_32576 = (state_32624[(12)]);
var inst_32590 = (state_32624[(7)]);
var inst_32590__$1 = cljs.core.seq.call(null,inst_32576);
var state_32624__$1 = (function (){var statearr_32648 = state_32624;
(statearr_32648[(7)] = inst_32590__$1);

return statearr_32648;
})();
if(inst_32590__$1){
var statearr_32649_32681 = state_32624__$1;
(statearr_32649_32681[(1)] = (14));

} else {
var statearr_32650_32682 = state_32624__$1;
(statearr_32650_32682[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (9))){
var inst_32612 = (state_32624[(2)]);
var inst_32613 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32624__$1 = (function (){var statearr_32651 = state_32624;
(statearr_32651[(15)] = inst_32612);

return statearr_32651;
})();
if(cljs.core.truth_(inst_32613)){
var statearr_32652_32683 = state_32624__$1;
(statearr_32652_32683[(1)] = (21));

} else {
var statearr_32653_32684 = state_32624__$1;
(statearr_32653_32684[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (5))){
var inst_32568 = cljs.core.async.close_BANG_.call(null,out);
var state_32624__$1 = state_32624;
var statearr_32654_32685 = state_32624__$1;
(statearr_32654_32685[(2)] = inst_32568);

(statearr_32654_32685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (14))){
var inst_32590 = (state_32624[(7)]);
var inst_32592 = cljs.core.chunked_seq_QMARK_.call(null,inst_32590);
var state_32624__$1 = state_32624;
if(inst_32592){
var statearr_32655_32686 = state_32624__$1;
(statearr_32655_32686[(1)] = (17));

} else {
var statearr_32656_32687 = state_32624__$1;
(statearr_32656_32687[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (16))){
var inst_32608 = (state_32624[(2)]);
var state_32624__$1 = state_32624;
var statearr_32657_32688 = state_32624__$1;
(statearr_32657_32688[(2)] = inst_32608);

(statearr_32657_32688[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (10))){
var inst_32579 = (state_32624[(8)]);
var inst_32577 = (state_32624[(11)]);
var inst_32584 = cljs.core._nth.call(null,inst_32577,inst_32579);
var state_32624__$1 = state_32624;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32624__$1,(13),out,inst_32584);
} else {
if((state_val_32625 === (18))){
var inst_32590 = (state_32624[(7)]);
var inst_32599 = cljs.core.first.call(null,inst_32590);
var state_32624__$1 = state_32624;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32624__$1,(20),out,inst_32599);
} else {
if((state_val_32625 === (8))){
var inst_32579 = (state_32624[(8)]);
var inst_32578 = (state_32624[(9)]);
var inst_32581 = (inst_32579 < inst_32578);
var inst_32582 = inst_32581;
var state_32624__$1 = state_32624;
if(cljs.core.truth_(inst_32582)){
var statearr_32658_32689 = state_32624__$1;
(statearr_32658_32689[(1)] = (10));

} else {
var statearr_32659_32690 = state_32624__$1;
(statearr_32659_32690[(1)] = (11));

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
});})(c__30167__auto__))
;
return ((function (switch__30055__auto__,c__30167__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30056__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30056__auto____0 = (function (){
var statearr_32663 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32663[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30056__auto__);

(statearr_32663[(1)] = (1));

return statearr_32663;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30056__auto____1 = (function (state_32624){
while(true){
var ret_value__30057__auto__ = (function (){try{while(true){
var result__30058__auto__ = switch__30055__auto__.call(null,state_32624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30058__auto__;
}
break;
}
}catch (e32664){if((e32664 instanceof Object)){
var ex__30059__auto__ = e32664;
var statearr_32665_32691 = state_32624;
(statearr_32665_32691[(5)] = ex__30059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32692 = state_32624;
state_32624 = G__32692;
continue;
} else {
return ret_value__30057__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30056__auto__ = function(state_32624){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30056__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30056__auto____1.call(this,state_32624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30056__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30056__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30056__auto__;
})()
;})(switch__30055__auto__,c__30167__auto__))
})();
var state__30169__auto__ = (function (){var statearr_32666 = f__30168__auto__.call(null);
(statearr_32666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30167__auto__);

return statearr_32666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30169__auto__);
});})(c__30167__auto__))
);

return c__30167__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32693 = [];
var len__25873__auto___32696 = arguments.length;
var i__25874__auto___32697 = (0);
while(true){
if((i__25874__auto___32697 < len__25873__auto___32696)){
args32693.push((arguments[i__25874__auto___32697]));

var G__32698 = (i__25874__auto___32697 + (1));
i__25874__auto___32697 = G__32698;
continue;
} else {
}
break;
}

var G__32695 = args32693.length;
switch (G__32695) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32693.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args32700 = [];
var len__25873__auto___32703 = arguments.length;
var i__25874__auto___32704 = (0);
while(true){
if((i__25874__auto___32704 < len__25873__auto___32703)){
args32700.push((arguments[i__25874__auto___32704]));

var G__32705 = (i__25874__auto___32704 + (1));
i__25874__auto___32704 = G__32705;
continue;
} else {
}
break;
}

var G__32702 = args32700.length;
switch (G__32702) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32700.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args32707 = [];
var len__25873__auto___32758 = arguments.length;
var i__25874__auto___32759 = (0);
while(true){
if((i__25874__auto___32759 < len__25873__auto___32758)){
args32707.push((arguments[i__25874__auto___32759]));

var G__32760 = (i__25874__auto___32759 + (1));
i__25874__auto___32759 = G__32760;
continue;
} else {
}
break;
}

var G__32709 = args32707.length;
switch (G__32709) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32707.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30167__auto___32762 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30167__auto___32762,out){
return (function (){
var f__30168__auto__ = (function (){var switch__30055__auto__ = ((function (c__30167__auto___32762,out){
return (function (state_32733){
var state_val_32734 = (state_32733[(1)]);
if((state_val_32734 === (7))){
var inst_32728 = (state_32733[(2)]);
var state_32733__$1 = state_32733;
var statearr_32735_32763 = state_32733__$1;
(statearr_32735_32763[(2)] = inst_32728);

(statearr_32735_32763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (1))){
var inst_32710 = null;
var state_32733__$1 = (function (){var statearr_32736 = state_32733;
(statearr_32736[(7)] = inst_32710);

return statearr_32736;
})();
var statearr_32737_32764 = state_32733__$1;
(statearr_32737_32764[(2)] = null);

(statearr_32737_32764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (4))){
var inst_32713 = (state_32733[(8)]);
var inst_32713__$1 = (state_32733[(2)]);
var inst_32714 = (inst_32713__$1 == null);
var inst_32715 = cljs.core.not.call(null,inst_32714);
var state_32733__$1 = (function (){var statearr_32738 = state_32733;
(statearr_32738[(8)] = inst_32713__$1);

return statearr_32738;
})();
if(inst_32715){
var statearr_32739_32765 = state_32733__$1;
(statearr_32739_32765[(1)] = (5));

} else {
var statearr_32740_32766 = state_32733__$1;
(statearr_32740_32766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (6))){
var state_32733__$1 = state_32733;
var statearr_32741_32767 = state_32733__$1;
(statearr_32741_32767[(2)] = null);

(statearr_32741_32767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (3))){
var inst_32730 = (state_32733[(2)]);
var inst_32731 = cljs.core.async.close_BANG_.call(null,out);
var state_32733__$1 = (function (){var statearr_32742 = state_32733;
(statearr_32742[(9)] = inst_32730);

return statearr_32742;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32733__$1,inst_32731);
} else {
if((state_val_32734 === (2))){
var state_32733__$1 = state_32733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32733__$1,(4),ch);
} else {
if((state_val_32734 === (11))){
var inst_32713 = (state_32733[(8)]);
var inst_32722 = (state_32733[(2)]);
var inst_32710 = inst_32713;
var state_32733__$1 = (function (){var statearr_32743 = state_32733;
(statearr_32743[(10)] = inst_32722);

(statearr_32743[(7)] = inst_32710);

return statearr_32743;
})();
var statearr_32744_32768 = state_32733__$1;
(statearr_32744_32768[(2)] = null);

(statearr_32744_32768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (9))){
var inst_32713 = (state_32733[(8)]);
var state_32733__$1 = state_32733;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32733__$1,(11),out,inst_32713);
} else {
if((state_val_32734 === (5))){
var inst_32713 = (state_32733[(8)]);
var inst_32710 = (state_32733[(7)]);
var inst_32717 = cljs.core._EQ_.call(null,inst_32713,inst_32710);
var state_32733__$1 = state_32733;
if(inst_32717){
var statearr_32746_32769 = state_32733__$1;
(statearr_32746_32769[(1)] = (8));

} else {
var statearr_32747_32770 = state_32733__$1;
(statearr_32747_32770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (10))){
var inst_32725 = (state_32733[(2)]);
var state_32733__$1 = state_32733;
var statearr_32748_32771 = state_32733__$1;
(statearr_32748_32771[(2)] = inst_32725);

(statearr_32748_32771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32734 === (8))){
var inst_32710 = (state_32733[(7)]);
var tmp32745 = inst_32710;
var inst_32710__$1 = tmp32745;
var state_32733__$1 = (function (){var statearr_32749 = state_32733;
(statearr_32749[(7)] = inst_32710__$1);

return statearr_32749;
})();
var statearr_32750_32772 = state_32733__$1;
(statearr_32750_32772[(2)] = null);

(statearr_32750_32772[(1)] = (2));


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
});})(c__30167__auto___32762,out))
;
return ((function (switch__30055__auto__,c__30167__auto___32762,out){
return (function() {
var cljs$core$async$state_machine__30056__auto__ = null;
var cljs$core$async$state_machine__30056__auto____0 = (function (){
var statearr_32754 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32754[(0)] = cljs$core$async$state_machine__30056__auto__);

(statearr_32754[(1)] = (1));

return statearr_32754;
});
var cljs$core$async$state_machine__30056__auto____1 = (function (state_32733){
while(true){
var ret_value__30057__auto__ = (function (){try{while(true){
var result__30058__auto__ = switch__30055__auto__.call(null,state_32733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30058__auto__;
}
break;
}
}catch (e32755){if((e32755 instanceof Object)){
var ex__30059__auto__ = e32755;
var statearr_32756_32773 = state_32733;
(statearr_32756_32773[(5)] = ex__30059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32774 = state_32733;
state_32733 = G__32774;
continue;
} else {
return ret_value__30057__auto__;
}
break;
}
});
cljs$core$async$state_machine__30056__auto__ = function(state_32733){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30056__auto____1.call(this,state_32733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30056__auto____0;
cljs$core$async$state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30056__auto____1;
return cljs$core$async$state_machine__30056__auto__;
})()
;})(switch__30055__auto__,c__30167__auto___32762,out))
})();
var state__30169__auto__ = (function (){var statearr_32757 = f__30168__auto__.call(null);
(statearr_32757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30167__auto___32762);

return statearr_32757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30169__auto__);
});})(c__30167__auto___32762,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32775 = [];
var len__25873__auto___32845 = arguments.length;
var i__25874__auto___32846 = (0);
while(true){
if((i__25874__auto___32846 < len__25873__auto___32845)){
args32775.push((arguments[i__25874__auto___32846]));

var G__32847 = (i__25874__auto___32846 + (1));
i__25874__auto___32846 = G__32847;
continue;
} else {
}
break;
}

var G__32777 = args32775.length;
switch (G__32777) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32775.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30167__auto___32849 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30167__auto___32849,out){
return (function (){
var f__30168__auto__ = (function (){var switch__30055__auto__ = ((function (c__30167__auto___32849,out){
return (function (state_32815){
var state_val_32816 = (state_32815[(1)]);
if((state_val_32816 === (7))){
var inst_32811 = (state_32815[(2)]);
var state_32815__$1 = state_32815;
var statearr_32817_32850 = state_32815__$1;
(statearr_32817_32850[(2)] = inst_32811);

(statearr_32817_32850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (1))){
var inst_32778 = (new Array(n));
var inst_32779 = inst_32778;
var inst_32780 = (0);
var state_32815__$1 = (function (){var statearr_32818 = state_32815;
(statearr_32818[(7)] = inst_32780);

(statearr_32818[(8)] = inst_32779);

return statearr_32818;
})();
var statearr_32819_32851 = state_32815__$1;
(statearr_32819_32851[(2)] = null);

(statearr_32819_32851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (4))){
var inst_32783 = (state_32815[(9)]);
var inst_32783__$1 = (state_32815[(2)]);
var inst_32784 = (inst_32783__$1 == null);
var inst_32785 = cljs.core.not.call(null,inst_32784);
var state_32815__$1 = (function (){var statearr_32820 = state_32815;
(statearr_32820[(9)] = inst_32783__$1);

return statearr_32820;
})();
if(inst_32785){
var statearr_32821_32852 = state_32815__$1;
(statearr_32821_32852[(1)] = (5));

} else {
var statearr_32822_32853 = state_32815__$1;
(statearr_32822_32853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (15))){
var inst_32805 = (state_32815[(2)]);
var state_32815__$1 = state_32815;
var statearr_32823_32854 = state_32815__$1;
(statearr_32823_32854[(2)] = inst_32805);

(statearr_32823_32854[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (13))){
var state_32815__$1 = state_32815;
var statearr_32824_32855 = state_32815__$1;
(statearr_32824_32855[(2)] = null);

(statearr_32824_32855[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (6))){
var inst_32780 = (state_32815[(7)]);
var inst_32801 = (inst_32780 > (0));
var state_32815__$1 = state_32815;
if(cljs.core.truth_(inst_32801)){
var statearr_32825_32856 = state_32815__$1;
(statearr_32825_32856[(1)] = (12));

} else {
var statearr_32826_32857 = state_32815__$1;
(statearr_32826_32857[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (3))){
var inst_32813 = (state_32815[(2)]);
var state_32815__$1 = state_32815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32815__$1,inst_32813);
} else {
if((state_val_32816 === (12))){
var inst_32779 = (state_32815[(8)]);
var inst_32803 = cljs.core.vec.call(null,inst_32779);
var state_32815__$1 = state_32815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32815__$1,(15),out,inst_32803);
} else {
if((state_val_32816 === (2))){
var state_32815__$1 = state_32815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32815__$1,(4),ch);
} else {
if((state_val_32816 === (11))){
var inst_32795 = (state_32815[(2)]);
var inst_32796 = (new Array(n));
var inst_32779 = inst_32796;
var inst_32780 = (0);
var state_32815__$1 = (function (){var statearr_32827 = state_32815;
(statearr_32827[(7)] = inst_32780);

(statearr_32827[(8)] = inst_32779);

(statearr_32827[(10)] = inst_32795);

return statearr_32827;
})();
var statearr_32828_32858 = state_32815__$1;
(statearr_32828_32858[(2)] = null);

(statearr_32828_32858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (9))){
var inst_32779 = (state_32815[(8)]);
var inst_32793 = cljs.core.vec.call(null,inst_32779);
var state_32815__$1 = state_32815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32815__$1,(11),out,inst_32793);
} else {
if((state_val_32816 === (5))){
var inst_32783 = (state_32815[(9)]);
var inst_32780 = (state_32815[(7)]);
var inst_32779 = (state_32815[(8)]);
var inst_32788 = (state_32815[(11)]);
var inst_32787 = (inst_32779[inst_32780] = inst_32783);
var inst_32788__$1 = (inst_32780 + (1));
var inst_32789 = (inst_32788__$1 < n);
var state_32815__$1 = (function (){var statearr_32829 = state_32815;
(statearr_32829[(12)] = inst_32787);

(statearr_32829[(11)] = inst_32788__$1);

return statearr_32829;
})();
if(cljs.core.truth_(inst_32789)){
var statearr_32830_32859 = state_32815__$1;
(statearr_32830_32859[(1)] = (8));

} else {
var statearr_32831_32860 = state_32815__$1;
(statearr_32831_32860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (14))){
var inst_32808 = (state_32815[(2)]);
var inst_32809 = cljs.core.async.close_BANG_.call(null,out);
var state_32815__$1 = (function (){var statearr_32833 = state_32815;
(statearr_32833[(13)] = inst_32808);

return statearr_32833;
})();
var statearr_32834_32861 = state_32815__$1;
(statearr_32834_32861[(2)] = inst_32809);

(statearr_32834_32861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (10))){
var inst_32799 = (state_32815[(2)]);
var state_32815__$1 = state_32815;
var statearr_32835_32862 = state_32815__$1;
(statearr_32835_32862[(2)] = inst_32799);

(statearr_32835_32862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32816 === (8))){
var inst_32779 = (state_32815[(8)]);
var inst_32788 = (state_32815[(11)]);
var tmp32832 = inst_32779;
var inst_32779__$1 = tmp32832;
var inst_32780 = inst_32788;
var state_32815__$1 = (function (){var statearr_32836 = state_32815;
(statearr_32836[(7)] = inst_32780);

(statearr_32836[(8)] = inst_32779__$1);

return statearr_32836;
})();
var statearr_32837_32863 = state_32815__$1;
(statearr_32837_32863[(2)] = null);

(statearr_32837_32863[(1)] = (2));


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
});})(c__30167__auto___32849,out))
;
return ((function (switch__30055__auto__,c__30167__auto___32849,out){
return (function() {
var cljs$core$async$state_machine__30056__auto__ = null;
var cljs$core$async$state_machine__30056__auto____0 = (function (){
var statearr_32841 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32841[(0)] = cljs$core$async$state_machine__30056__auto__);

(statearr_32841[(1)] = (1));

return statearr_32841;
});
var cljs$core$async$state_machine__30056__auto____1 = (function (state_32815){
while(true){
var ret_value__30057__auto__ = (function (){try{while(true){
var result__30058__auto__ = switch__30055__auto__.call(null,state_32815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30058__auto__;
}
break;
}
}catch (e32842){if((e32842 instanceof Object)){
var ex__30059__auto__ = e32842;
var statearr_32843_32864 = state_32815;
(statearr_32843_32864[(5)] = ex__30059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32865 = state_32815;
state_32815 = G__32865;
continue;
} else {
return ret_value__30057__auto__;
}
break;
}
});
cljs$core$async$state_machine__30056__auto__ = function(state_32815){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30056__auto____1.call(this,state_32815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30056__auto____0;
cljs$core$async$state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30056__auto____1;
return cljs$core$async$state_machine__30056__auto__;
})()
;})(switch__30055__auto__,c__30167__auto___32849,out))
})();
var state__30169__auto__ = (function (){var statearr_32844 = f__30168__auto__.call(null);
(statearr_32844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30167__auto___32849);

return statearr_32844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30169__auto__);
});})(c__30167__auto___32849,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32866 = [];
var len__25873__auto___32940 = arguments.length;
var i__25874__auto___32941 = (0);
while(true){
if((i__25874__auto___32941 < len__25873__auto___32940)){
args32866.push((arguments[i__25874__auto___32941]));

var G__32942 = (i__25874__auto___32941 + (1));
i__25874__auto___32941 = G__32942;
continue;
} else {
}
break;
}

var G__32868 = args32866.length;
switch (G__32868) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32866.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30167__auto___32944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30167__auto___32944,out){
return (function (){
var f__30168__auto__ = (function (){var switch__30055__auto__ = ((function (c__30167__auto___32944,out){
return (function (state_32910){
var state_val_32911 = (state_32910[(1)]);
if((state_val_32911 === (7))){
var inst_32906 = (state_32910[(2)]);
var state_32910__$1 = state_32910;
var statearr_32912_32945 = state_32910__$1;
(statearr_32912_32945[(2)] = inst_32906);

(statearr_32912_32945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (1))){
var inst_32869 = [];
var inst_32870 = inst_32869;
var inst_32871 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32910__$1 = (function (){var statearr_32913 = state_32910;
(statearr_32913[(7)] = inst_32870);

(statearr_32913[(8)] = inst_32871);

return statearr_32913;
})();
var statearr_32914_32946 = state_32910__$1;
(statearr_32914_32946[(2)] = null);

(statearr_32914_32946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (4))){
var inst_32874 = (state_32910[(9)]);
var inst_32874__$1 = (state_32910[(2)]);
var inst_32875 = (inst_32874__$1 == null);
var inst_32876 = cljs.core.not.call(null,inst_32875);
var state_32910__$1 = (function (){var statearr_32915 = state_32910;
(statearr_32915[(9)] = inst_32874__$1);

return statearr_32915;
})();
if(inst_32876){
var statearr_32916_32947 = state_32910__$1;
(statearr_32916_32947[(1)] = (5));

} else {
var statearr_32917_32948 = state_32910__$1;
(statearr_32917_32948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (15))){
var inst_32900 = (state_32910[(2)]);
var state_32910__$1 = state_32910;
var statearr_32918_32949 = state_32910__$1;
(statearr_32918_32949[(2)] = inst_32900);

(statearr_32918_32949[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (13))){
var state_32910__$1 = state_32910;
var statearr_32919_32950 = state_32910__$1;
(statearr_32919_32950[(2)] = null);

(statearr_32919_32950[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (6))){
var inst_32870 = (state_32910[(7)]);
var inst_32895 = inst_32870.length;
var inst_32896 = (inst_32895 > (0));
var state_32910__$1 = state_32910;
if(cljs.core.truth_(inst_32896)){
var statearr_32920_32951 = state_32910__$1;
(statearr_32920_32951[(1)] = (12));

} else {
var statearr_32921_32952 = state_32910__$1;
(statearr_32921_32952[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (3))){
var inst_32908 = (state_32910[(2)]);
var state_32910__$1 = state_32910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32910__$1,inst_32908);
} else {
if((state_val_32911 === (12))){
var inst_32870 = (state_32910[(7)]);
var inst_32898 = cljs.core.vec.call(null,inst_32870);
var state_32910__$1 = state_32910;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32910__$1,(15),out,inst_32898);
} else {
if((state_val_32911 === (2))){
var state_32910__$1 = state_32910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32910__$1,(4),ch);
} else {
if((state_val_32911 === (11))){
var inst_32878 = (state_32910[(10)]);
var inst_32874 = (state_32910[(9)]);
var inst_32888 = (state_32910[(2)]);
var inst_32889 = [];
var inst_32890 = inst_32889.push(inst_32874);
var inst_32870 = inst_32889;
var inst_32871 = inst_32878;
var state_32910__$1 = (function (){var statearr_32922 = state_32910;
(statearr_32922[(11)] = inst_32890);

(statearr_32922[(12)] = inst_32888);

(statearr_32922[(7)] = inst_32870);

(statearr_32922[(8)] = inst_32871);

return statearr_32922;
})();
var statearr_32923_32953 = state_32910__$1;
(statearr_32923_32953[(2)] = null);

(statearr_32923_32953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (9))){
var inst_32870 = (state_32910[(7)]);
var inst_32886 = cljs.core.vec.call(null,inst_32870);
var state_32910__$1 = state_32910;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32910__$1,(11),out,inst_32886);
} else {
if((state_val_32911 === (5))){
var inst_32878 = (state_32910[(10)]);
var inst_32874 = (state_32910[(9)]);
var inst_32871 = (state_32910[(8)]);
var inst_32878__$1 = f.call(null,inst_32874);
var inst_32879 = cljs.core._EQ_.call(null,inst_32878__$1,inst_32871);
var inst_32880 = cljs.core.keyword_identical_QMARK_.call(null,inst_32871,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32881 = (inst_32879) || (inst_32880);
var state_32910__$1 = (function (){var statearr_32924 = state_32910;
(statearr_32924[(10)] = inst_32878__$1);

return statearr_32924;
})();
if(cljs.core.truth_(inst_32881)){
var statearr_32925_32954 = state_32910__$1;
(statearr_32925_32954[(1)] = (8));

} else {
var statearr_32926_32955 = state_32910__$1;
(statearr_32926_32955[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (14))){
var inst_32903 = (state_32910[(2)]);
var inst_32904 = cljs.core.async.close_BANG_.call(null,out);
var state_32910__$1 = (function (){var statearr_32928 = state_32910;
(statearr_32928[(13)] = inst_32903);

return statearr_32928;
})();
var statearr_32929_32956 = state_32910__$1;
(statearr_32929_32956[(2)] = inst_32904);

(statearr_32929_32956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (10))){
var inst_32893 = (state_32910[(2)]);
var state_32910__$1 = state_32910;
var statearr_32930_32957 = state_32910__$1;
(statearr_32930_32957[(2)] = inst_32893);

(statearr_32930_32957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (8))){
var inst_32878 = (state_32910[(10)]);
var inst_32870 = (state_32910[(7)]);
var inst_32874 = (state_32910[(9)]);
var inst_32883 = inst_32870.push(inst_32874);
var tmp32927 = inst_32870;
var inst_32870__$1 = tmp32927;
var inst_32871 = inst_32878;
var state_32910__$1 = (function (){var statearr_32931 = state_32910;
(statearr_32931[(7)] = inst_32870__$1);

(statearr_32931[(14)] = inst_32883);

(statearr_32931[(8)] = inst_32871);

return statearr_32931;
})();
var statearr_32932_32958 = state_32910__$1;
(statearr_32932_32958[(2)] = null);

(statearr_32932_32958[(1)] = (2));


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
});})(c__30167__auto___32944,out))
;
return ((function (switch__30055__auto__,c__30167__auto___32944,out){
return (function() {
var cljs$core$async$state_machine__30056__auto__ = null;
var cljs$core$async$state_machine__30056__auto____0 = (function (){
var statearr_32936 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32936[(0)] = cljs$core$async$state_machine__30056__auto__);

(statearr_32936[(1)] = (1));

return statearr_32936;
});
var cljs$core$async$state_machine__30056__auto____1 = (function (state_32910){
while(true){
var ret_value__30057__auto__ = (function (){try{while(true){
var result__30058__auto__ = switch__30055__auto__.call(null,state_32910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30058__auto__;
}
break;
}
}catch (e32937){if((e32937 instanceof Object)){
var ex__30059__auto__ = e32937;
var statearr_32938_32959 = state_32910;
(statearr_32938_32959[(5)] = ex__30059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32960 = state_32910;
state_32910 = G__32960;
continue;
} else {
return ret_value__30057__auto__;
}
break;
}
});
cljs$core$async$state_machine__30056__auto__ = function(state_32910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30056__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30056__auto____1.call(this,state_32910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30056__auto____0;
cljs$core$async$state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30056__auto____1;
return cljs$core$async$state_machine__30056__auto__;
})()
;})(switch__30055__auto__,c__30167__auto___32944,out))
})();
var state__30169__auto__ = (function (){var statearr_32939 = f__30168__auto__.call(null);
(statearr_32939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30167__auto___32944);

return statearr_32939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30169__auto__);
});})(c__30167__auto___32944,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1481381470352