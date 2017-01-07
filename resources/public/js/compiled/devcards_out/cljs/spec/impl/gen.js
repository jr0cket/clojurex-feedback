// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26112 = arguments.length;
var i__25874__auto___26113 = (0);
while(true){
if((i__25874__auto___26113 < len__25873__auto___26112)){
args__25880__auto__.push((arguments[i__25874__auto___26113]));

var G__26114 = (i__25874__auto___26113 + (1));
i__25874__auto___26113 = G__26114;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq26111){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26111));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26116 = arguments.length;
var i__25874__auto___26117 = (0);
while(true){
if((i__25874__auto___26117 < len__25873__auto___26116)){
args__25880__auto__.push((arguments[i__25874__auto___26117]));

var G__26118 = (i__25874__auto___26117 + (1));
i__25874__auto___26117 = G__26118;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq26115){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26115));
});

var g_QMARK__26119 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_26120 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__26119){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__26119))
,null));
var mkg_26121 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__26119,g_26120){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__26119,g_26120))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__26119,g_26120,mkg_26121){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__26119).call(null,x);
});})(g_QMARK__26119,g_26120,mkg_26121))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__26119,g_26120,mkg_26121){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_26121).call(null,gfn);
});})(g_QMARK__26119,g_26120,mkg_26121))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__26119,g_26120,mkg_26121){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_26120).call(null,generator);
});})(g_QMARK__26119,g_26120,mkg_26121))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__26083__auto___26142 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__26083__auto___26142){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26143 = arguments.length;
var i__25874__auto___26144 = (0);
while(true){
if((i__25874__auto___26144 < len__25873__auto___26143)){
args__25880__auto__.push((arguments[i__25874__auto___26144]));

var G__26145 = (i__25874__auto___26144 + (1));
i__25874__auto___26144 = G__26145;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26083__auto___26142))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26083__auto___26142){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26083__auto___26142),args);
});})(g__26083__auto___26142))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__26083__auto___26142){
return (function (seq26122){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26122));
});})(g__26083__auto___26142))
;


var g__26083__auto___26146 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__26083__auto___26146){
return (function cljs$spec$impl$gen$list(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26147 = arguments.length;
var i__25874__auto___26148 = (0);
while(true){
if((i__25874__auto___26148 < len__25873__auto___26147)){
args__25880__auto__.push((arguments[i__25874__auto___26148]));

var G__26149 = (i__25874__auto___26148 + (1));
i__25874__auto___26148 = G__26149;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26083__auto___26146))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26083__auto___26146){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26083__auto___26146),args);
});})(g__26083__auto___26146))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__26083__auto___26146){
return (function (seq26123){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26123));
});})(g__26083__auto___26146))
;


var g__26083__auto___26150 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__26083__auto___26150){
return (function cljs$spec$impl$gen$map(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26151 = arguments.length;
var i__25874__auto___26152 = (0);
while(true){
if((i__25874__auto___26152 < len__25873__auto___26151)){
args__25880__auto__.push((arguments[i__25874__auto___26152]));

var G__26153 = (i__25874__auto___26152 + (1));
i__25874__auto___26152 = G__26153;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26083__auto___26150))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26083__auto___26150){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26083__auto___26150),args);
});})(g__26083__auto___26150))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__26083__auto___26150){
return (function (seq26124){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26124));
});})(g__26083__auto___26150))
;


var g__26083__auto___26154 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__26083__auto___26154){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26155 = arguments.length;
var i__25874__auto___26156 = (0);
while(true){
if((i__25874__auto___26156 < len__25873__auto___26155)){
args__25880__auto__.push((arguments[i__25874__auto___26156]));

var G__26157 = (i__25874__auto___26156 + (1));
i__25874__auto___26156 = G__26157;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26083__auto___26154))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26083__auto___26154){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26083__auto___26154),args);
});})(g__26083__auto___26154))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__26083__auto___26154){
return (function (seq26125){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26125));
});})(g__26083__auto___26154))
;


var g__26083__auto___26158 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__26083__auto___26158){
return (function cljs$spec$impl$gen$set(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26159 = arguments.length;
var i__25874__auto___26160 = (0);
while(true){
if((i__25874__auto___26160 < len__25873__auto___26159)){
args__25880__auto__.push((arguments[i__25874__auto___26160]));

var G__26161 = (i__25874__auto___26160 + (1));
i__25874__auto___26160 = G__26161;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26083__auto___26158))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26083__auto___26158){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26083__auto___26158),args);
});})(g__26083__auto___26158))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__26083__auto___26158){
return (function (seq26126){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26126));
});})(g__26083__auto___26158))
;


var g__26083__auto___26162 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__26083__auto___26162){
return (function cljs$spec$impl$gen$vector(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26163 = arguments.length;
var i__25874__auto___26164 = (0);
while(true){
if((i__25874__auto___26164 < len__25873__auto___26163)){
args__25880__auto__.push((arguments[i__25874__auto___26164]));

var G__26165 = (i__25874__auto___26164 + (1));
i__25874__auto___26164 = G__26165;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26083__auto___26162))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26083__auto___26162){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26083__auto___26162),args);
});})(g__26083__auto___26162))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__26083__auto___26162){
return (function (seq26127){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26127));
});})(g__26083__auto___26162))
;


var g__26083__auto___26166 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__26083__auto___26166){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26167 = arguments.length;
var i__25874__auto___26168 = (0);
while(true){
if((i__25874__auto___26168 < len__25873__auto___26167)){
args__25880__auto__.push((arguments[i__25874__auto___26168]));

var G__26169 = (i__25874__auto___26168 + (1));
i__25874__auto___26168 = G__26169;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26083__auto___26166))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26083__auto___26166){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26083__auto___26166),args);
});})(g__26083__auto___26166))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__26083__auto___26166){
return (function (seq26128){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26128));
});})(g__26083__auto___26166))
;


var g__26083__auto___26170 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__26083__auto___26170){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26171 = arguments.length;
var i__25874__auto___26172 = (0);
while(true){
if((i__25874__auto___26172 < len__25873__auto___26171)){
args__25880__auto__.push((arguments[i__25874__auto___26172]));

var G__26173 = (i__25874__auto___26172 + (1));
i__25874__auto___26172 = G__26173;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26083__auto___26170))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26083__auto___26170){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26083__auto___26170),args);
});})(g__26083__auto___26170))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__26083__auto___26170){
return (function (seq26129){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26129));
});})(g__26083__auto___26170))
;


var g__26083__auto___26174 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__26083__auto___26174){
return (function cljs$spec$impl$gen$elements(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26175 = arguments.length;
var i__25874__auto___26176 = (0);
while(true){
if((i__25874__auto___26176 < len__25873__auto___26175)){
args__25880__auto__.push((arguments[i__25874__auto___26176]));

var G__26177 = (i__25874__auto___26176 + (1));
i__25874__auto___26176 = G__26177;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26083__auto___26174))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26083__auto___26174){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26083__auto___26174),args);
});})(g__26083__auto___26174))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__26083__auto___26174){
return (function (seq26132){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26132));
});})(g__26083__auto___26174))
;


var g__26083__auto___26178 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__26083__auto___26178){
return (function cljs$spec$impl$gen$bind(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26179 = arguments.length;
var i__25874__auto___26180 = (0);
while(true){
if((i__25874__auto___26180 < len__25873__auto___26179)){
args__25880__auto__.push((arguments[i__25874__auto___26180]));

var G__26181 = (i__25874__auto___26180 + (1));
i__25874__auto___26180 = G__26181;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26083__auto___26178))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26083__auto___26178){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26083__auto___26178),args);
});})(g__26083__auto___26178))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__26083__auto___26178){
return (function (seq26133){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26133));
});})(g__26083__auto___26178))
;


var g__26083__auto___26182 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__26083__auto___26182){
return (function cljs$spec$impl$gen$choose(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26183 = arguments.length;
var i__25874__auto___26184 = (0);
while(true){
if((i__25874__auto___26184 < len__25873__auto___26183)){
args__25880__auto__.push((arguments[i__25874__auto___26184]));

var G__26185 = (i__25874__auto___26184 + (1));
i__25874__auto___26184 = G__26185;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26083__auto___26182))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26083__auto___26182){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26083__auto___26182),args);
});})(g__26083__auto___26182))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__26083__auto___26182){
return (function (seq26134){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26134));
});})(g__26083__auto___26182))
;


var g__26083__auto___26186 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__26083__auto___26186){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26187 = arguments.length;
var i__25874__auto___26188 = (0);
while(true){
if((i__25874__auto___26188 < len__25873__auto___26187)){
args__25880__auto__.push((arguments[i__25874__auto___26188]));

var G__26189 = (i__25874__auto___26188 + (1));
i__25874__auto___26188 = G__26189;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26083__auto___26186))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26083__auto___26186){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26083__auto___26186),args);
});})(g__26083__auto___26186))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__26083__auto___26186){
return (function (seq26135){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26135));
});})(g__26083__auto___26186))
;


var g__26083__auto___26190 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__26083__auto___26190){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26191 = arguments.length;
var i__25874__auto___26192 = (0);
while(true){
if((i__25874__auto___26192 < len__25873__auto___26191)){
args__25880__auto__.push((arguments[i__25874__auto___26192]));

var G__26193 = (i__25874__auto___26192 + (1));
i__25874__auto___26192 = G__26193;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26083__auto___26190))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26083__auto___26190){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26083__auto___26190),args);
});})(g__26083__auto___26190))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__26083__auto___26190){
return (function (seq26136){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26136));
});})(g__26083__auto___26190))
;


var g__26083__auto___26194 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__26083__auto___26194){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26195 = arguments.length;
var i__25874__auto___26196 = (0);
while(true){
if((i__25874__auto___26196 < len__25873__auto___26195)){
args__25880__auto__.push((arguments[i__25874__auto___26196]));

var G__26197 = (i__25874__auto___26196 + (1));
i__25874__auto___26196 = G__26197;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26083__auto___26194))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26083__auto___26194){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26083__auto___26194),args);
});})(g__26083__auto___26194))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__26083__auto___26194){
return (function (seq26137){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26137));
});})(g__26083__auto___26194))
;


var g__26083__auto___26198 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__26083__auto___26198){
return (function cljs$spec$impl$gen$sample(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26199 = arguments.length;
var i__25874__auto___26200 = (0);
while(true){
if((i__25874__auto___26200 < len__25873__auto___26199)){
args__25880__auto__.push((arguments[i__25874__auto___26200]));

var G__26201 = (i__25874__auto___26200 + (1));
i__25874__auto___26200 = G__26201;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26083__auto___26198))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26083__auto___26198){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26083__auto___26198),args);
});})(g__26083__auto___26198))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__26083__auto___26198){
return (function (seq26138){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26138));
});})(g__26083__auto___26198))
;


var g__26083__auto___26202 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__26083__auto___26202){
return (function cljs$spec$impl$gen$return(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26203 = arguments.length;
var i__25874__auto___26204 = (0);
while(true){
if((i__25874__auto___26204 < len__25873__auto___26203)){
args__25880__auto__.push((arguments[i__25874__auto___26204]));

var G__26205 = (i__25874__auto___26204 + (1));
i__25874__auto___26204 = G__26205;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26083__auto___26202))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26083__auto___26202){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26083__auto___26202),args);
});})(g__26083__auto___26202))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__26083__auto___26202){
return (function (seq26139){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26139));
});})(g__26083__auto___26202))
;


var g__26083__auto___26206 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__26083__auto___26206){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26207 = arguments.length;
var i__25874__auto___26208 = (0);
while(true){
if((i__25874__auto___26208 < len__25873__auto___26207)){
args__25880__auto__.push((arguments[i__25874__auto___26208]));

var G__26209 = (i__25874__auto___26208 + (1));
i__25874__auto___26208 = G__26209;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26083__auto___26206))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26083__auto___26206){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26083__auto___26206),args);
});})(g__26083__auto___26206))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__26083__auto___26206){
return (function (seq26140){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26140));
});})(g__26083__auto___26206))
;


var g__26083__auto___26210 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__26083__auto___26210){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26211 = arguments.length;
var i__25874__auto___26212 = (0);
while(true){
if((i__25874__auto___26212 < len__25873__auto___26211)){
args__25880__auto__.push((arguments[i__25874__auto___26212]));

var G__26213 = (i__25874__auto___26212 + (1));
i__25874__auto___26212 = G__26213;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26083__auto___26210))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26083__auto___26210){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26083__auto___26210),args);
});})(g__26083__auto___26210))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__26083__auto___26210){
return (function (seq26141){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26141));
});})(g__26083__auto___26210))
;

var g__26096__auto___26235 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__26096__auto___26235){
return (function cljs$spec$impl$gen$any(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26236 = arguments.length;
var i__25874__auto___26237 = (0);
while(true){
if((i__25874__auto___26237 < len__25873__auto___26236)){
args__25880__auto__.push((arguments[i__25874__auto___26237]));

var G__26238 = (i__25874__auto___26237 + (1));
i__25874__auto___26237 = G__26238;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26096__auto___26235))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26096__auto___26235){
return (function (args){
return cljs.core.deref.call(null,g__26096__auto___26235);
});})(g__26096__auto___26235))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__26096__auto___26235){
return (function (seq26214){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26214));
});})(g__26096__auto___26235))
;


var g__26096__auto___26239 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__26096__auto___26239){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26240 = arguments.length;
var i__25874__auto___26241 = (0);
while(true){
if((i__25874__auto___26241 < len__25873__auto___26240)){
args__25880__auto__.push((arguments[i__25874__auto___26241]));

var G__26242 = (i__25874__auto___26241 + (1));
i__25874__auto___26241 = G__26242;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26096__auto___26239))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26096__auto___26239){
return (function (args){
return cljs.core.deref.call(null,g__26096__auto___26239);
});})(g__26096__auto___26239))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__26096__auto___26239){
return (function (seq26215){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26215));
});})(g__26096__auto___26239))
;


var g__26096__auto___26243 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__26096__auto___26243){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26244 = arguments.length;
var i__25874__auto___26245 = (0);
while(true){
if((i__25874__auto___26245 < len__25873__auto___26244)){
args__25880__auto__.push((arguments[i__25874__auto___26245]));

var G__26246 = (i__25874__auto___26245 + (1));
i__25874__auto___26245 = G__26246;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26096__auto___26243))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26096__auto___26243){
return (function (args){
return cljs.core.deref.call(null,g__26096__auto___26243);
});})(g__26096__auto___26243))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__26096__auto___26243){
return (function (seq26216){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26216));
});})(g__26096__auto___26243))
;


var g__26096__auto___26247 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__26096__auto___26247){
return (function cljs$spec$impl$gen$char(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26248 = arguments.length;
var i__25874__auto___26249 = (0);
while(true){
if((i__25874__auto___26249 < len__25873__auto___26248)){
args__25880__auto__.push((arguments[i__25874__auto___26249]));

var G__26250 = (i__25874__auto___26249 + (1));
i__25874__auto___26249 = G__26250;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26096__auto___26247))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26096__auto___26247){
return (function (args){
return cljs.core.deref.call(null,g__26096__auto___26247);
});})(g__26096__auto___26247))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__26096__auto___26247){
return (function (seq26217){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26217));
});})(g__26096__auto___26247))
;


var g__26096__auto___26251 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__26096__auto___26251){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26252 = arguments.length;
var i__25874__auto___26253 = (0);
while(true){
if((i__25874__auto___26253 < len__25873__auto___26252)){
args__25880__auto__.push((arguments[i__25874__auto___26253]));

var G__26254 = (i__25874__auto___26253 + (1));
i__25874__auto___26253 = G__26254;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26096__auto___26251))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26096__auto___26251){
return (function (args){
return cljs.core.deref.call(null,g__26096__auto___26251);
});})(g__26096__auto___26251))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__26096__auto___26251){
return (function (seq26218){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26218));
});})(g__26096__auto___26251))
;


var g__26096__auto___26255 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__26096__auto___26255){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26256 = arguments.length;
var i__25874__auto___26257 = (0);
while(true){
if((i__25874__auto___26257 < len__25873__auto___26256)){
args__25880__auto__.push((arguments[i__25874__auto___26257]));

var G__26258 = (i__25874__auto___26257 + (1));
i__25874__auto___26257 = G__26258;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26096__auto___26255))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26096__auto___26255){
return (function (args){
return cljs.core.deref.call(null,g__26096__auto___26255);
});})(g__26096__auto___26255))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__26096__auto___26255){
return (function (seq26219){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26219));
});})(g__26096__auto___26255))
;


var g__26096__auto___26259 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__26096__auto___26259){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26260 = arguments.length;
var i__25874__auto___26261 = (0);
while(true){
if((i__25874__auto___26261 < len__25873__auto___26260)){
args__25880__auto__.push((arguments[i__25874__auto___26261]));

var G__26262 = (i__25874__auto___26261 + (1));
i__25874__auto___26261 = G__26262;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26096__auto___26259))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26096__auto___26259){
return (function (args){
return cljs.core.deref.call(null,g__26096__auto___26259);
});})(g__26096__auto___26259))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__26096__auto___26259){
return (function (seq26220){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26220));
});})(g__26096__auto___26259))
;


var g__26096__auto___26263 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__26096__auto___26263){
return (function cljs$spec$impl$gen$double(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26264 = arguments.length;
var i__25874__auto___26265 = (0);
while(true){
if((i__25874__auto___26265 < len__25873__auto___26264)){
args__25880__auto__.push((arguments[i__25874__auto___26265]));

var G__26266 = (i__25874__auto___26265 + (1));
i__25874__auto___26265 = G__26266;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26096__auto___26263))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26096__auto___26263){
return (function (args){
return cljs.core.deref.call(null,g__26096__auto___26263);
});})(g__26096__auto___26263))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__26096__auto___26263){
return (function (seq26221){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26221));
});})(g__26096__auto___26263))
;


var g__26096__auto___26267 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__26096__auto___26267){
return (function cljs$spec$impl$gen$int(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26268 = arguments.length;
var i__25874__auto___26269 = (0);
while(true){
if((i__25874__auto___26269 < len__25873__auto___26268)){
args__25880__auto__.push((arguments[i__25874__auto___26269]));

var G__26270 = (i__25874__auto___26269 + (1));
i__25874__auto___26269 = G__26270;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26096__auto___26267))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26096__auto___26267){
return (function (args){
return cljs.core.deref.call(null,g__26096__auto___26267);
});})(g__26096__auto___26267))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__26096__auto___26267){
return (function (seq26222){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26222));
});})(g__26096__auto___26267))
;


var g__26096__auto___26271 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__26096__auto___26271){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26272 = arguments.length;
var i__25874__auto___26273 = (0);
while(true){
if((i__25874__auto___26273 < len__25873__auto___26272)){
args__25880__auto__.push((arguments[i__25874__auto___26273]));

var G__26274 = (i__25874__auto___26273 + (1));
i__25874__auto___26273 = G__26274;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26096__auto___26271))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26096__auto___26271){
return (function (args){
return cljs.core.deref.call(null,g__26096__auto___26271);
});})(g__26096__auto___26271))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__26096__auto___26271){
return (function (seq26223){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26223));
});})(g__26096__auto___26271))
;


var g__26096__auto___26275 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__26096__auto___26275){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26276 = arguments.length;
var i__25874__auto___26277 = (0);
while(true){
if((i__25874__auto___26277 < len__25873__auto___26276)){
args__25880__auto__.push((arguments[i__25874__auto___26277]));

var G__26278 = (i__25874__auto___26277 + (1));
i__25874__auto___26277 = G__26278;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26096__auto___26275))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26096__auto___26275){
return (function (args){
return cljs.core.deref.call(null,g__26096__auto___26275);
});})(g__26096__auto___26275))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__26096__auto___26275){
return (function (seq26224){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26224));
});})(g__26096__auto___26275))
;


var g__26096__auto___26279 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__26096__auto___26279){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26280 = arguments.length;
var i__25874__auto___26281 = (0);
while(true){
if((i__25874__auto___26281 < len__25873__auto___26280)){
args__25880__auto__.push((arguments[i__25874__auto___26281]));

var G__26282 = (i__25874__auto___26281 + (1));
i__25874__auto___26281 = G__26282;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26096__auto___26279))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26096__auto___26279){
return (function (args){
return cljs.core.deref.call(null,g__26096__auto___26279);
});})(g__26096__auto___26279))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__26096__auto___26279){
return (function (seq26225){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26225));
});})(g__26096__auto___26279))
;


var g__26096__auto___26283 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__26096__auto___26283){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26284 = arguments.length;
var i__25874__auto___26285 = (0);
while(true){
if((i__25874__auto___26285 < len__25873__auto___26284)){
args__25880__auto__.push((arguments[i__25874__auto___26285]));

var G__26286 = (i__25874__auto___26285 + (1));
i__25874__auto___26285 = G__26286;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26096__auto___26283))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26096__auto___26283){
return (function (args){
return cljs.core.deref.call(null,g__26096__auto___26283);
});})(g__26096__auto___26283))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__26096__auto___26283){
return (function (seq26226){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26226));
});})(g__26096__auto___26283))
;


var g__26096__auto___26287 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__26096__auto___26287){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26288 = arguments.length;
var i__25874__auto___26289 = (0);
while(true){
if((i__25874__auto___26289 < len__25873__auto___26288)){
args__25880__auto__.push((arguments[i__25874__auto___26289]));

var G__26290 = (i__25874__auto___26289 + (1));
i__25874__auto___26289 = G__26290;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26096__auto___26287))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26096__auto___26287){
return (function (args){
return cljs.core.deref.call(null,g__26096__auto___26287);
});})(g__26096__auto___26287))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__26096__auto___26287){
return (function (seq26227){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26227));
});})(g__26096__auto___26287))
;


var g__26096__auto___26291 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__26096__auto___26291){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26292 = arguments.length;
var i__25874__auto___26293 = (0);
while(true){
if((i__25874__auto___26293 < len__25873__auto___26292)){
args__25880__auto__.push((arguments[i__25874__auto___26293]));

var G__26294 = (i__25874__auto___26293 + (1));
i__25874__auto___26293 = G__26294;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26096__auto___26291))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26096__auto___26291){
return (function (args){
return cljs.core.deref.call(null,g__26096__auto___26291);
});})(g__26096__auto___26291))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__26096__auto___26291){
return (function (seq26228){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26228));
});})(g__26096__auto___26291))
;


var g__26096__auto___26295 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__26096__auto___26295){
return (function cljs$spec$impl$gen$string(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26296 = arguments.length;
var i__25874__auto___26297 = (0);
while(true){
if((i__25874__auto___26297 < len__25873__auto___26296)){
args__25880__auto__.push((arguments[i__25874__auto___26297]));

var G__26298 = (i__25874__auto___26297 + (1));
i__25874__auto___26297 = G__26298;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26096__auto___26295))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26096__auto___26295){
return (function (args){
return cljs.core.deref.call(null,g__26096__auto___26295);
});})(g__26096__auto___26295))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__26096__auto___26295){
return (function (seq26229){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26229));
});})(g__26096__auto___26295))
;


var g__26096__auto___26299 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__26096__auto___26299){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26300 = arguments.length;
var i__25874__auto___26301 = (0);
while(true){
if((i__25874__auto___26301 < len__25873__auto___26300)){
args__25880__auto__.push((arguments[i__25874__auto___26301]));

var G__26302 = (i__25874__auto___26301 + (1));
i__25874__auto___26301 = G__26302;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26096__auto___26299))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26096__auto___26299){
return (function (args){
return cljs.core.deref.call(null,g__26096__auto___26299);
});})(g__26096__auto___26299))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__26096__auto___26299){
return (function (seq26230){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26230));
});})(g__26096__auto___26299))
;


var g__26096__auto___26303 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__26096__auto___26303){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26304 = arguments.length;
var i__25874__auto___26305 = (0);
while(true){
if((i__25874__auto___26305 < len__25873__auto___26304)){
args__25880__auto__.push((arguments[i__25874__auto___26305]));

var G__26306 = (i__25874__auto___26305 + (1));
i__25874__auto___26305 = G__26306;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26096__auto___26303))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26096__auto___26303){
return (function (args){
return cljs.core.deref.call(null,g__26096__auto___26303);
});})(g__26096__auto___26303))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__26096__auto___26303){
return (function (seq26231){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26231));
});})(g__26096__auto___26303))
;


var g__26096__auto___26307 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__26096__auto___26307){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26308 = arguments.length;
var i__25874__auto___26309 = (0);
while(true){
if((i__25874__auto___26309 < len__25873__auto___26308)){
args__25880__auto__.push((arguments[i__25874__auto___26309]));

var G__26310 = (i__25874__auto___26309 + (1));
i__25874__auto___26309 = G__26310;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26096__auto___26307))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26096__auto___26307){
return (function (args){
return cljs.core.deref.call(null,g__26096__auto___26307);
});})(g__26096__auto___26307))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__26096__auto___26307){
return (function (seq26232){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26232));
});})(g__26096__auto___26307))
;


var g__26096__auto___26311 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__26096__auto___26311){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26312 = arguments.length;
var i__25874__auto___26313 = (0);
while(true){
if((i__25874__auto___26313 < len__25873__auto___26312)){
args__25880__auto__.push((arguments[i__25874__auto___26313]));

var G__26314 = (i__25874__auto___26313 + (1));
i__25874__auto___26313 = G__26314;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26096__auto___26311))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26096__auto___26311){
return (function (args){
return cljs.core.deref.call(null,g__26096__auto___26311);
});})(g__26096__auto___26311))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__26096__auto___26311){
return (function (seq26233){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26233));
});})(g__26096__auto___26311))
;


var g__26096__auto___26315 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__26096__auto___26315){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26316 = arguments.length;
var i__25874__auto___26317 = (0);
while(true){
if((i__25874__auto___26317 < len__25873__auto___26316)){
args__25880__auto__.push((arguments[i__25874__auto___26317]));

var G__26318 = (i__25874__auto___26317 + (1));
i__25874__auto___26317 = G__26318;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});})(g__26096__auto___26315))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26096__auto___26315){
return (function (args){
return cljs.core.deref.call(null,g__26096__auto___26315);
});})(g__26096__auto___26315))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__26096__auto___26315){
return (function (seq26234){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26234));
});})(g__26096__auto___26315))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__25880__auto__ = [];
var len__25873__auto___26321 = arguments.length;
var i__25874__auto___26322 = (0);
while(true){
if((i__25874__auto___26322 < len__25873__auto___26321)){
args__25880__auto__.push((arguments[i__25874__auto___26322]));

var G__26323 = (i__25874__auto___26322 + (1));
i__25874__auto___26322 = G__26323;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__26319_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__26319_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq26320){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26320));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__26324_SHARP_){
return (new Date(p1__26324_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1481381464829