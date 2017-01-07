// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args43210 = [];
var len__25873__auto___43213 = arguments.length;
var i__25874__auto___43214 = (0);
while(true){
if((i__25874__auto___43214 < len__25873__auto___43213)){
args43210.push((arguments[i__25874__auto___43214]));

var G__43215 = (i__25874__auto___43214 + (1));
i__25874__auto___43214 = G__43215;
continue;
} else {
}
break;
}

var G__43212 = args43210.length;
switch (G__43212) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43210.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25880__auto__ = [];
var len__25873__auto___43218 = arguments.length;
var i__25874__auto___43219 = (0);
while(true){
if((i__25874__auto___43219 < len__25873__auto___43218)){
args__25880__auto__.push((arguments[i__25874__auto___43219]));

var G__43220 = (i__25874__auto___43219 + (1));
i__25874__auto___43219 = G__43220;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq43217){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43217));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25880__auto__ = [];
var len__25873__auto___43222 = arguments.length;
var i__25874__auto___43223 = (0);
while(true){
if((i__25874__auto___43223 < len__25873__auto___43222)){
args__25880__auto__.push((arguments[i__25874__auto___43223]));

var G__43224 = (i__25874__auto___43223 + (1));
i__25874__auto___43223 = G__43224;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq43221){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43221));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__43225 = cljs.core._EQ_;
var expr__43226 = (function (){var or__24798__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e43229){if((e43229 instanceof Error)){
var e = e43229;
return false;
} else {
throw e43229;

}
}})();
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__43225.call(null,"true",expr__43226))){
return true;
} else {
if(cljs.core.truth_(pred__43225.call(null,"false",expr__43226))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__43226)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e43231){if((e43231 instanceof Error)){
var e = e43231;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e43231;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__43232){
var map__43235 = p__43232;
var map__43235__$1 = ((((!((map__43235 == null)))?((((map__43235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43235):map__43235);
var message = cljs.core.get.call(null,map__43235__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__43235__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24798__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24786__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24786__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24786__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__30167__auto___43397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30167__auto___43397,ch){
return (function (){
var f__30168__auto__ = (function (){var switch__30055__auto__ = ((function (c__30167__auto___43397,ch){
return (function (state_43366){
var state_val_43367 = (state_43366[(1)]);
if((state_val_43367 === (7))){
var inst_43362 = (state_43366[(2)]);
var state_43366__$1 = state_43366;
var statearr_43368_43398 = state_43366__$1;
(statearr_43368_43398[(2)] = inst_43362);

(statearr_43368_43398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43367 === (1))){
var state_43366__$1 = state_43366;
var statearr_43369_43399 = state_43366__$1;
(statearr_43369_43399[(2)] = null);

(statearr_43369_43399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43367 === (4))){
var inst_43319 = (state_43366[(7)]);
var inst_43319__$1 = (state_43366[(2)]);
var state_43366__$1 = (function (){var statearr_43370 = state_43366;
(statearr_43370[(7)] = inst_43319__$1);

return statearr_43370;
})();
if(cljs.core.truth_(inst_43319__$1)){
var statearr_43371_43400 = state_43366__$1;
(statearr_43371_43400[(1)] = (5));

} else {
var statearr_43372_43401 = state_43366__$1;
(statearr_43372_43401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43367 === (15))){
var inst_43326 = (state_43366[(8)]);
var inst_43341 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_43326);
var inst_43342 = cljs.core.first.call(null,inst_43341);
var inst_43343 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_43342);
var inst_43344 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_43343)].join('');
var inst_43345 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_43344);
var state_43366__$1 = state_43366;
var statearr_43373_43402 = state_43366__$1;
(statearr_43373_43402[(2)] = inst_43345);

(statearr_43373_43402[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43367 === (13))){
var inst_43350 = (state_43366[(2)]);
var state_43366__$1 = state_43366;
var statearr_43374_43403 = state_43366__$1;
(statearr_43374_43403[(2)] = inst_43350);

(statearr_43374_43403[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43367 === (6))){
var state_43366__$1 = state_43366;
var statearr_43375_43404 = state_43366__$1;
(statearr_43375_43404[(2)] = null);

(statearr_43375_43404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43367 === (17))){
var inst_43348 = (state_43366[(2)]);
var state_43366__$1 = state_43366;
var statearr_43376_43405 = state_43366__$1;
(statearr_43376_43405[(2)] = inst_43348);

(statearr_43376_43405[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43367 === (3))){
var inst_43364 = (state_43366[(2)]);
var state_43366__$1 = state_43366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43366__$1,inst_43364);
} else {
if((state_val_43367 === (12))){
var inst_43325 = (state_43366[(9)]);
var inst_43339 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_43325,opts);
var state_43366__$1 = state_43366;
if(cljs.core.truth_(inst_43339)){
var statearr_43377_43406 = state_43366__$1;
(statearr_43377_43406[(1)] = (15));

} else {
var statearr_43378_43407 = state_43366__$1;
(statearr_43378_43407[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43367 === (2))){
var state_43366__$1 = state_43366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43366__$1,(4),ch);
} else {
if((state_val_43367 === (11))){
var inst_43326 = (state_43366[(8)]);
var inst_43331 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43332 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_43326);
var inst_43333 = cljs.core.async.timeout.call(null,(1000));
var inst_43334 = [inst_43332,inst_43333];
var inst_43335 = (new cljs.core.PersistentVector(null,2,(5),inst_43331,inst_43334,null));
var state_43366__$1 = state_43366;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43366__$1,(14),inst_43335);
} else {
if((state_val_43367 === (9))){
var inst_43326 = (state_43366[(8)]);
var inst_43352 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_43353 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_43326);
var inst_43354 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_43353);
var inst_43355 = [cljs.core.str("Not loading: "),cljs.core.str(inst_43354)].join('');
var inst_43356 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_43355);
var state_43366__$1 = (function (){var statearr_43379 = state_43366;
(statearr_43379[(10)] = inst_43352);

return statearr_43379;
})();
var statearr_43380_43408 = state_43366__$1;
(statearr_43380_43408[(2)] = inst_43356);

(statearr_43380_43408[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43367 === (5))){
var inst_43319 = (state_43366[(7)]);
var inst_43321 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_43322 = (new cljs.core.PersistentArrayMap(null,2,inst_43321,null));
var inst_43323 = (new cljs.core.PersistentHashSet(null,inst_43322,null));
var inst_43324 = figwheel.client.focus_msgs.call(null,inst_43323,inst_43319);
var inst_43325 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_43324);
var inst_43326 = cljs.core.first.call(null,inst_43324);
var inst_43327 = figwheel.client.autoload_QMARK_.call(null);
var state_43366__$1 = (function (){var statearr_43381 = state_43366;
(statearr_43381[(8)] = inst_43326);

(statearr_43381[(9)] = inst_43325);

return statearr_43381;
})();
if(cljs.core.truth_(inst_43327)){
var statearr_43382_43409 = state_43366__$1;
(statearr_43382_43409[(1)] = (8));

} else {
var statearr_43383_43410 = state_43366__$1;
(statearr_43383_43410[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43367 === (14))){
var inst_43337 = (state_43366[(2)]);
var state_43366__$1 = state_43366;
var statearr_43384_43411 = state_43366__$1;
(statearr_43384_43411[(2)] = inst_43337);

(statearr_43384_43411[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43367 === (16))){
var state_43366__$1 = state_43366;
var statearr_43385_43412 = state_43366__$1;
(statearr_43385_43412[(2)] = null);

(statearr_43385_43412[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43367 === (10))){
var inst_43358 = (state_43366[(2)]);
var state_43366__$1 = (function (){var statearr_43386 = state_43366;
(statearr_43386[(11)] = inst_43358);

return statearr_43386;
})();
var statearr_43387_43413 = state_43366__$1;
(statearr_43387_43413[(2)] = null);

(statearr_43387_43413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43367 === (8))){
var inst_43325 = (state_43366[(9)]);
var inst_43329 = figwheel.client.reload_file_state_QMARK_.call(null,inst_43325,opts);
var state_43366__$1 = state_43366;
if(cljs.core.truth_(inst_43329)){
var statearr_43388_43414 = state_43366__$1;
(statearr_43388_43414[(1)] = (11));

} else {
var statearr_43389_43415 = state_43366__$1;
(statearr_43389_43415[(1)] = (12));

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
});})(c__30167__auto___43397,ch))
;
return ((function (switch__30055__auto__,c__30167__auto___43397,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30056__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30056__auto____0 = (function (){
var statearr_43393 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43393[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30056__auto__);

(statearr_43393[(1)] = (1));

return statearr_43393;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30056__auto____1 = (function (state_43366){
while(true){
var ret_value__30057__auto__ = (function (){try{while(true){
var result__30058__auto__ = switch__30055__auto__.call(null,state_43366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30058__auto__;
}
break;
}
}catch (e43394){if((e43394 instanceof Object)){
var ex__30059__auto__ = e43394;
var statearr_43395_43416 = state_43366;
(statearr_43395_43416[(5)] = ex__30059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43417 = state_43366;
state_43366 = G__43417;
continue;
} else {
return ret_value__30057__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30056__auto__ = function(state_43366){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30056__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30056__auto____1.call(this,state_43366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30056__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30056__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30056__auto__;
})()
;})(switch__30055__auto__,c__30167__auto___43397,ch))
})();
var state__30169__auto__ = (function (){var statearr_43396 = f__30168__auto__.call(null);
(statearr_43396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30167__auto___43397);

return statearr_43396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30169__auto__);
});})(c__30167__auto___43397,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__43418_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__43418_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_43421 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_43421){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e43420){if((e43420 instanceof Error)){
var e = e43420;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_43421], null));
} else {
var e = e43420;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_43421))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__43422){
var map__43431 = p__43422;
var map__43431__$1 = ((((!((map__43431 == null)))?((((map__43431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43431):map__43431);
var opts = map__43431__$1;
var build_id = cljs.core.get.call(null,map__43431__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__43431,map__43431__$1,opts,build_id){
return (function (p__43433){
var vec__43434 = p__43433;
var seq__43435 = cljs.core.seq.call(null,vec__43434);
var first__43436 = cljs.core.first.call(null,seq__43435);
var seq__43435__$1 = cljs.core.next.call(null,seq__43435);
var map__43437 = first__43436;
var map__43437__$1 = ((((!((map__43437 == null)))?((((map__43437.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43437.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43437):map__43437);
var msg = map__43437__$1;
var msg_name = cljs.core.get.call(null,map__43437__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43435__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__43434,seq__43435,first__43436,seq__43435__$1,map__43437,map__43437__$1,msg,msg_name,_,map__43431,map__43431__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__43434,seq__43435,first__43436,seq__43435__$1,map__43437,map__43437__$1,msg,msg_name,_,map__43431,map__43431__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__43431,map__43431__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__43445){
var vec__43446 = p__43445;
var seq__43447 = cljs.core.seq.call(null,vec__43446);
var first__43448 = cljs.core.first.call(null,seq__43447);
var seq__43447__$1 = cljs.core.next.call(null,seq__43447);
var map__43449 = first__43448;
var map__43449__$1 = ((((!((map__43449 == null)))?((((map__43449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43449):map__43449);
var msg = map__43449__$1;
var msg_name = cljs.core.get.call(null,map__43449__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43447__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__43451){
var map__43463 = p__43451;
var map__43463__$1 = ((((!((map__43463 == null)))?((((map__43463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43463):map__43463);
var on_compile_warning = cljs.core.get.call(null,map__43463__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__43463__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__43463,map__43463__$1,on_compile_warning,on_compile_fail){
return (function (p__43465){
var vec__43466 = p__43465;
var seq__43467 = cljs.core.seq.call(null,vec__43466);
var first__43468 = cljs.core.first.call(null,seq__43467);
var seq__43467__$1 = cljs.core.next.call(null,seq__43467);
var map__43469 = first__43468;
var map__43469__$1 = ((((!((map__43469 == null)))?((((map__43469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43469):map__43469);
var msg = map__43469__$1;
var msg_name = cljs.core.get.call(null,map__43469__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43467__$1;
var pred__43471 = cljs.core._EQ_;
var expr__43472 = msg_name;
if(cljs.core.truth_(pred__43471.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__43472))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__43471.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__43472))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__43463,map__43463__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__30167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30167__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30168__auto__ = (function (){var switch__30055__auto__ = ((function (c__30167__auto__,msg_hist,msg_names,msg){
return (function (state_43700){
var state_val_43701 = (state_43700[(1)]);
if((state_val_43701 === (7))){
var inst_43620 = (state_43700[(2)]);
var state_43700__$1 = state_43700;
if(cljs.core.truth_(inst_43620)){
var statearr_43702_43752 = state_43700__$1;
(statearr_43702_43752[(1)] = (8));

} else {
var statearr_43703_43753 = state_43700__$1;
(statearr_43703_43753[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (20))){
var inst_43694 = (state_43700[(2)]);
var state_43700__$1 = state_43700;
var statearr_43704_43754 = state_43700__$1;
(statearr_43704_43754[(2)] = inst_43694);

(statearr_43704_43754[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (27))){
var inst_43690 = (state_43700[(2)]);
var state_43700__$1 = state_43700;
var statearr_43705_43755 = state_43700__$1;
(statearr_43705_43755[(2)] = inst_43690);

(statearr_43705_43755[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (1))){
var inst_43613 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_43700__$1 = state_43700;
if(cljs.core.truth_(inst_43613)){
var statearr_43706_43756 = state_43700__$1;
(statearr_43706_43756[(1)] = (2));

} else {
var statearr_43707_43757 = state_43700__$1;
(statearr_43707_43757[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (24))){
var inst_43692 = (state_43700[(2)]);
var state_43700__$1 = state_43700;
var statearr_43708_43758 = state_43700__$1;
(statearr_43708_43758[(2)] = inst_43692);

(statearr_43708_43758[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (4))){
var inst_43698 = (state_43700[(2)]);
var state_43700__$1 = state_43700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43700__$1,inst_43698);
} else {
if((state_val_43701 === (15))){
var inst_43696 = (state_43700[(2)]);
var state_43700__$1 = state_43700;
var statearr_43709_43759 = state_43700__$1;
(statearr_43709_43759[(2)] = inst_43696);

(statearr_43709_43759[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (21))){
var inst_43649 = (state_43700[(2)]);
var inst_43650 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43651 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43650);
var state_43700__$1 = (function (){var statearr_43710 = state_43700;
(statearr_43710[(7)] = inst_43649);

return statearr_43710;
})();
var statearr_43711_43760 = state_43700__$1;
(statearr_43711_43760[(2)] = inst_43651);

(statearr_43711_43760[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (31))){
var inst_43679 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_43700__$1 = state_43700;
if(cljs.core.truth_(inst_43679)){
var statearr_43712_43761 = state_43700__$1;
(statearr_43712_43761[(1)] = (34));

} else {
var statearr_43713_43762 = state_43700__$1;
(statearr_43713_43762[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (32))){
var inst_43688 = (state_43700[(2)]);
var state_43700__$1 = state_43700;
var statearr_43714_43763 = state_43700__$1;
(statearr_43714_43763[(2)] = inst_43688);

(statearr_43714_43763[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (33))){
var inst_43675 = (state_43700[(2)]);
var inst_43676 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43677 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43676);
var state_43700__$1 = (function (){var statearr_43715 = state_43700;
(statearr_43715[(8)] = inst_43675);

return statearr_43715;
})();
var statearr_43716_43764 = state_43700__$1;
(statearr_43716_43764[(2)] = inst_43677);

(statearr_43716_43764[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (13))){
var inst_43634 = figwheel.client.heads_up.clear.call(null);
var state_43700__$1 = state_43700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43700__$1,(16),inst_43634);
} else {
if((state_val_43701 === (22))){
var inst_43655 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43656 = figwheel.client.heads_up.append_warning_message.call(null,inst_43655);
var state_43700__$1 = state_43700;
var statearr_43717_43765 = state_43700__$1;
(statearr_43717_43765[(2)] = inst_43656);

(statearr_43717_43765[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (36))){
var inst_43686 = (state_43700[(2)]);
var state_43700__$1 = state_43700;
var statearr_43718_43766 = state_43700__$1;
(statearr_43718_43766[(2)] = inst_43686);

(statearr_43718_43766[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (29))){
var inst_43666 = (state_43700[(2)]);
var inst_43667 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43668 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43667);
var state_43700__$1 = (function (){var statearr_43719 = state_43700;
(statearr_43719[(9)] = inst_43666);

return statearr_43719;
})();
var statearr_43720_43767 = state_43700__$1;
(statearr_43720_43767[(2)] = inst_43668);

(statearr_43720_43767[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (6))){
var inst_43615 = (state_43700[(10)]);
var state_43700__$1 = state_43700;
var statearr_43721_43768 = state_43700__$1;
(statearr_43721_43768[(2)] = inst_43615);

(statearr_43721_43768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (28))){
var inst_43662 = (state_43700[(2)]);
var inst_43663 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43664 = figwheel.client.heads_up.display_warning.call(null,inst_43663);
var state_43700__$1 = (function (){var statearr_43722 = state_43700;
(statearr_43722[(11)] = inst_43662);

return statearr_43722;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43700__$1,(29),inst_43664);
} else {
if((state_val_43701 === (25))){
var inst_43660 = figwheel.client.heads_up.clear.call(null);
var state_43700__$1 = state_43700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43700__$1,(28),inst_43660);
} else {
if((state_val_43701 === (34))){
var inst_43681 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43700__$1 = state_43700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43700__$1,(37),inst_43681);
} else {
if((state_val_43701 === (17))){
var inst_43640 = (state_43700[(2)]);
var inst_43641 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43642 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43641);
var state_43700__$1 = (function (){var statearr_43723 = state_43700;
(statearr_43723[(12)] = inst_43640);

return statearr_43723;
})();
var statearr_43724_43769 = state_43700__$1;
(statearr_43724_43769[(2)] = inst_43642);

(statearr_43724_43769[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (3))){
var inst_43632 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_43700__$1 = state_43700;
if(cljs.core.truth_(inst_43632)){
var statearr_43725_43770 = state_43700__$1;
(statearr_43725_43770[(1)] = (13));

} else {
var statearr_43726_43771 = state_43700__$1;
(statearr_43726_43771[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (12))){
var inst_43628 = (state_43700[(2)]);
var state_43700__$1 = state_43700;
var statearr_43727_43772 = state_43700__$1;
(statearr_43727_43772[(2)] = inst_43628);

(statearr_43727_43772[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (2))){
var inst_43615 = (state_43700[(10)]);
var inst_43615__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_43700__$1 = (function (){var statearr_43728 = state_43700;
(statearr_43728[(10)] = inst_43615__$1);

return statearr_43728;
})();
if(cljs.core.truth_(inst_43615__$1)){
var statearr_43729_43773 = state_43700__$1;
(statearr_43729_43773[(1)] = (5));

} else {
var statearr_43730_43774 = state_43700__$1;
(statearr_43730_43774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (23))){
var inst_43658 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_43700__$1 = state_43700;
if(cljs.core.truth_(inst_43658)){
var statearr_43731_43775 = state_43700__$1;
(statearr_43731_43775[(1)] = (25));

} else {
var statearr_43732_43776 = state_43700__$1;
(statearr_43732_43776[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (35))){
var state_43700__$1 = state_43700;
var statearr_43733_43777 = state_43700__$1;
(statearr_43733_43777[(2)] = null);

(statearr_43733_43777[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (19))){
var inst_43653 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_43700__$1 = state_43700;
if(cljs.core.truth_(inst_43653)){
var statearr_43734_43778 = state_43700__$1;
(statearr_43734_43778[(1)] = (22));

} else {
var statearr_43735_43779 = state_43700__$1;
(statearr_43735_43779[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (11))){
var inst_43624 = (state_43700[(2)]);
var state_43700__$1 = state_43700;
var statearr_43736_43780 = state_43700__$1;
(statearr_43736_43780[(2)] = inst_43624);

(statearr_43736_43780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (9))){
var inst_43626 = figwheel.client.heads_up.clear.call(null);
var state_43700__$1 = state_43700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43700__$1,(12),inst_43626);
} else {
if((state_val_43701 === (5))){
var inst_43617 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_43700__$1 = state_43700;
var statearr_43737_43781 = state_43700__$1;
(statearr_43737_43781[(2)] = inst_43617);

(statearr_43737_43781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (14))){
var inst_43644 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_43700__$1 = state_43700;
if(cljs.core.truth_(inst_43644)){
var statearr_43738_43782 = state_43700__$1;
(statearr_43738_43782[(1)] = (18));

} else {
var statearr_43739_43783 = state_43700__$1;
(statearr_43739_43783[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (26))){
var inst_43670 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_43700__$1 = state_43700;
if(cljs.core.truth_(inst_43670)){
var statearr_43740_43784 = state_43700__$1;
(statearr_43740_43784[(1)] = (30));

} else {
var statearr_43741_43785 = state_43700__$1;
(statearr_43741_43785[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (16))){
var inst_43636 = (state_43700[(2)]);
var inst_43637 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43638 = figwheel.client.heads_up.display_exception.call(null,inst_43637);
var state_43700__$1 = (function (){var statearr_43742 = state_43700;
(statearr_43742[(13)] = inst_43636);

return statearr_43742;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43700__$1,(17),inst_43638);
} else {
if((state_val_43701 === (30))){
var inst_43672 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43673 = figwheel.client.heads_up.display_warning.call(null,inst_43672);
var state_43700__$1 = state_43700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43700__$1,(33),inst_43673);
} else {
if((state_val_43701 === (10))){
var inst_43630 = (state_43700[(2)]);
var state_43700__$1 = state_43700;
var statearr_43743_43786 = state_43700__$1;
(statearr_43743_43786[(2)] = inst_43630);

(statearr_43743_43786[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (18))){
var inst_43646 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43647 = figwheel.client.heads_up.display_exception.call(null,inst_43646);
var state_43700__$1 = state_43700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43700__$1,(21),inst_43647);
} else {
if((state_val_43701 === (37))){
var inst_43683 = (state_43700[(2)]);
var state_43700__$1 = state_43700;
var statearr_43744_43787 = state_43700__$1;
(statearr_43744_43787[(2)] = inst_43683);

(statearr_43744_43787[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43701 === (8))){
var inst_43622 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43700__$1 = state_43700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43700__$1,(11),inst_43622);
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
});})(c__30167__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30055__auto__,c__30167__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30056__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30056__auto____0 = (function (){
var statearr_43748 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43748[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30056__auto__);

(statearr_43748[(1)] = (1));

return statearr_43748;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30056__auto____1 = (function (state_43700){
while(true){
var ret_value__30057__auto__ = (function (){try{while(true){
var result__30058__auto__ = switch__30055__auto__.call(null,state_43700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30058__auto__;
}
break;
}
}catch (e43749){if((e43749 instanceof Object)){
var ex__30059__auto__ = e43749;
var statearr_43750_43788 = state_43700;
(statearr_43750_43788[(5)] = ex__30059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43789 = state_43700;
state_43700 = G__43789;
continue;
} else {
return ret_value__30057__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30056__auto__ = function(state_43700){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30056__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30056__auto____1.call(this,state_43700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30056__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30056__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30056__auto__;
})()
;})(switch__30055__auto__,c__30167__auto__,msg_hist,msg_names,msg))
})();
var state__30169__auto__ = (function (){var statearr_43751 = f__30168__auto__.call(null);
(statearr_43751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30167__auto__);

return statearr_43751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30169__auto__);
});})(c__30167__auto__,msg_hist,msg_names,msg))
);

return c__30167__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30167__auto___43852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30167__auto___43852,ch){
return (function (){
var f__30168__auto__ = (function (){var switch__30055__auto__ = ((function (c__30167__auto___43852,ch){
return (function (state_43835){
var state_val_43836 = (state_43835[(1)]);
if((state_val_43836 === (1))){
var state_43835__$1 = state_43835;
var statearr_43837_43853 = state_43835__$1;
(statearr_43837_43853[(2)] = null);

(statearr_43837_43853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43836 === (2))){
var state_43835__$1 = state_43835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43835__$1,(4),ch);
} else {
if((state_val_43836 === (3))){
var inst_43833 = (state_43835[(2)]);
var state_43835__$1 = state_43835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43835__$1,inst_43833);
} else {
if((state_val_43836 === (4))){
var inst_43823 = (state_43835[(7)]);
var inst_43823__$1 = (state_43835[(2)]);
var state_43835__$1 = (function (){var statearr_43838 = state_43835;
(statearr_43838[(7)] = inst_43823__$1);

return statearr_43838;
})();
if(cljs.core.truth_(inst_43823__$1)){
var statearr_43839_43854 = state_43835__$1;
(statearr_43839_43854[(1)] = (5));

} else {
var statearr_43840_43855 = state_43835__$1;
(statearr_43840_43855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43836 === (5))){
var inst_43823 = (state_43835[(7)]);
var inst_43825 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_43823);
var state_43835__$1 = state_43835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43835__$1,(8),inst_43825);
} else {
if((state_val_43836 === (6))){
var state_43835__$1 = state_43835;
var statearr_43841_43856 = state_43835__$1;
(statearr_43841_43856[(2)] = null);

(statearr_43841_43856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43836 === (7))){
var inst_43831 = (state_43835[(2)]);
var state_43835__$1 = state_43835;
var statearr_43842_43857 = state_43835__$1;
(statearr_43842_43857[(2)] = inst_43831);

(statearr_43842_43857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43836 === (8))){
var inst_43827 = (state_43835[(2)]);
var state_43835__$1 = (function (){var statearr_43843 = state_43835;
(statearr_43843[(8)] = inst_43827);

return statearr_43843;
})();
var statearr_43844_43858 = state_43835__$1;
(statearr_43844_43858[(2)] = null);

(statearr_43844_43858[(1)] = (2));


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
});})(c__30167__auto___43852,ch))
;
return ((function (switch__30055__auto__,c__30167__auto___43852,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30056__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30056__auto____0 = (function (){
var statearr_43848 = [null,null,null,null,null,null,null,null,null];
(statearr_43848[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30056__auto__);

(statearr_43848[(1)] = (1));

return statearr_43848;
});
var figwheel$client$heads_up_plugin_$_state_machine__30056__auto____1 = (function (state_43835){
while(true){
var ret_value__30057__auto__ = (function (){try{while(true){
var result__30058__auto__ = switch__30055__auto__.call(null,state_43835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30058__auto__;
}
break;
}
}catch (e43849){if((e43849 instanceof Object)){
var ex__30059__auto__ = e43849;
var statearr_43850_43859 = state_43835;
(statearr_43850_43859[(5)] = ex__30059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43860 = state_43835;
state_43835 = G__43860;
continue;
} else {
return ret_value__30057__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30056__auto__ = function(state_43835){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30056__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30056__auto____1.call(this,state_43835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30056__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30056__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30056__auto__;
})()
;})(switch__30055__auto__,c__30167__auto___43852,ch))
})();
var state__30169__auto__ = (function (){var statearr_43851 = f__30168__auto__.call(null);
(statearr_43851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30167__auto___43852);

return statearr_43851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30169__auto__);
});})(c__30167__auto___43852,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30167__auto__){
return (function (){
var f__30168__auto__ = (function (){var switch__30055__auto__ = ((function (c__30167__auto__){
return (function (state_43881){
var state_val_43882 = (state_43881[(1)]);
if((state_val_43882 === (1))){
var inst_43876 = cljs.core.async.timeout.call(null,(3000));
var state_43881__$1 = state_43881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43881__$1,(2),inst_43876);
} else {
if((state_val_43882 === (2))){
var inst_43878 = (state_43881[(2)]);
var inst_43879 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_43881__$1 = (function (){var statearr_43883 = state_43881;
(statearr_43883[(7)] = inst_43878);

return statearr_43883;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43881__$1,inst_43879);
} else {
return null;
}
}
});})(c__30167__auto__))
;
return ((function (switch__30055__auto__,c__30167__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__30056__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__30056__auto____0 = (function (){
var statearr_43887 = [null,null,null,null,null,null,null,null];
(statearr_43887[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30056__auto__);

(statearr_43887[(1)] = (1));

return statearr_43887;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30056__auto____1 = (function (state_43881){
while(true){
var ret_value__30057__auto__ = (function (){try{while(true){
var result__30058__auto__ = switch__30055__auto__.call(null,state_43881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30058__auto__;
}
break;
}
}catch (e43888){if((e43888 instanceof Object)){
var ex__30059__auto__ = e43888;
var statearr_43889_43891 = state_43881;
(statearr_43889_43891[(5)] = ex__30059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43892 = state_43881;
state_43881 = G__43892;
continue;
} else {
return ret_value__30057__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30056__auto__ = function(state_43881){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30056__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30056__auto____1.call(this,state_43881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30056__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30056__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30056__auto__;
})()
;})(switch__30055__auto__,c__30167__auto__))
})();
var state__30169__auto__ = (function (){var statearr_43890 = f__30168__auto__.call(null);
(statearr_43890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30167__auto__);

return statearr_43890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30169__auto__);
});})(c__30167__auto__))
);

return c__30167__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30167__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__30168__auto__ = (function (){var switch__30055__auto__ = ((function (c__30167__auto__,figwheel_version,temp__4657__auto__){
return (function (state_43915){
var state_val_43916 = (state_43915[(1)]);
if((state_val_43916 === (1))){
var inst_43909 = cljs.core.async.timeout.call(null,(2000));
var state_43915__$1 = state_43915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43915__$1,(2),inst_43909);
} else {
if((state_val_43916 === (2))){
var inst_43911 = (state_43915[(2)]);
var inst_43912 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_43913 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_43912);
var state_43915__$1 = (function (){var statearr_43917 = state_43915;
(statearr_43917[(7)] = inst_43911);

return statearr_43917;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43915__$1,inst_43913);
} else {
return null;
}
}
});})(c__30167__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__30055__auto__,c__30167__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30056__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30056__auto____0 = (function (){
var statearr_43921 = [null,null,null,null,null,null,null,null];
(statearr_43921[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30056__auto__);

(statearr_43921[(1)] = (1));

return statearr_43921;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30056__auto____1 = (function (state_43915){
while(true){
var ret_value__30057__auto__ = (function (){try{while(true){
var result__30058__auto__ = switch__30055__auto__.call(null,state_43915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30058__auto__;
}
break;
}
}catch (e43922){if((e43922 instanceof Object)){
var ex__30059__auto__ = e43922;
var statearr_43923_43925 = state_43915;
(statearr_43923_43925[(5)] = ex__30059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43926 = state_43915;
state_43915 = G__43926;
continue;
} else {
return ret_value__30057__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30056__auto__ = function(state_43915){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30056__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30056__auto____1.call(this,state_43915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30056__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30056__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30056__auto__;
})()
;})(switch__30055__auto__,c__30167__auto__,figwheel_version,temp__4657__auto__))
})();
var state__30169__auto__ = (function (){var statearr_43924 = f__30168__auto__.call(null);
(statearr_43924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30167__auto__);

return statearr_43924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30169__auto__);
});})(c__30167__auto__,figwheel_version,temp__4657__auto__))
);

return c__30167__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__43927){
var map__43931 = p__43927;
var map__43931__$1 = ((((!((map__43931 == null)))?((((map__43931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43931):map__43931);
var file = cljs.core.get.call(null,map__43931__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__43931__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__43931__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__43933 = "";
var G__43933__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__43933),cljs.core.str("file "),cljs.core.str(file)].join(''):G__43933);
var G__43933__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__43933__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__43933__$1);
if(cljs.core.truth_((function (){var and__24786__auto__ = line;
if(cljs.core.truth_(and__24786__auto__)){
return column;
} else {
return and__24786__auto__;
}
})())){
return [cljs.core.str(G__43933__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__43933__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__43934){
var map__43941 = p__43934;
var map__43941__$1 = ((((!((map__43941 == null)))?((((map__43941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43941):map__43941);
var ed = map__43941__$1;
var formatted_exception = cljs.core.get.call(null,map__43941__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__43941__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__43941__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__43943_43947 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__43944_43948 = null;
var count__43945_43949 = (0);
var i__43946_43950 = (0);
while(true){
if((i__43946_43950 < count__43945_43949)){
var msg_43951 = cljs.core._nth.call(null,chunk__43944_43948,i__43946_43950);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_43951);

var G__43952 = seq__43943_43947;
var G__43953 = chunk__43944_43948;
var G__43954 = count__43945_43949;
var G__43955 = (i__43946_43950 + (1));
seq__43943_43947 = G__43952;
chunk__43944_43948 = G__43953;
count__43945_43949 = G__43954;
i__43946_43950 = G__43955;
continue;
} else {
var temp__4657__auto___43956 = cljs.core.seq.call(null,seq__43943_43947);
if(temp__4657__auto___43956){
var seq__43943_43957__$1 = temp__4657__auto___43956;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43943_43957__$1)){
var c__25609__auto___43958 = cljs.core.chunk_first.call(null,seq__43943_43957__$1);
var G__43959 = cljs.core.chunk_rest.call(null,seq__43943_43957__$1);
var G__43960 = c__25609__auto___43958;
var G__43961 = cljs.core.count.call(null,c__25609__auto___43958);
var G__43962 = (0);
seq__43943_43947 = G__43959;
chunk__43944_43948 = G__43960;
count__43945_43949 = G__43961;
i__43946_43950 = G__43962;
continue;
} else {
var msg_43963 = cljs.core.first.call(null,seq__43943_43957__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_43963);

var G__43964 = cljs.core.next.call(null,seq__43943_43957__$1);
var G__43965 = null;
var G__43966 = (0);
var G__43967 = (0);
seq__43943_43947 = G__43964;
chunk__43944_43948 = G__43965;
count__43945_43949 = G__43966;
i__43946_43950 = G__43967;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__43968){
var map__43971 = p__43968;
var map__43971__$1 = ((((!((map__43971 == null)))?((((map__43971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43971):map__43971);
var w = map__43971__$1;
var message = cljs.core.get.call(null,map__43971__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24786__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24786__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24786__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__43983 = cljs.core.seq.call(null,plugins);
var chunk__43984 = null;
var count__43985 = (0);
var i__43986 = (0);
while(true){
if((i__43986 < count__43985)){
var vec__43987 = cljs.core._nth.call(null,chunk__43984,i__43986);
var k = cljs.core.nth.call(null,vec__43987,(0),null);
var plugin = cljs.core.nth.call(null,vec__43987,(1),null);
if(cljs.core.truth_(plugin)){
var pl_43993 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__43983,chunk__43984,count__43985,i__43986,pl_43993,vec__43987,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_43993.call(null,msg_hist);
});})(seq__43983,chunk__43984,count__43985,i__43986,pl_43993,vec__43987,k,plugin))
);
} else {
}

var G__43994 = seq__43983;
var G__43995 = chunk__43984;
var G__43996 = count__43985;
var G__43997 = (i__43986 + (1));
seq__43983 = G__43994;
chunk__43984 = G__43995;
count__43985 = G__43996;
i__43986 = G__43997;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43983);
if(temp__4657__auto__){
var seq__43983__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43983__$1)){
var c__25609__auto__ = cljs.core.chunk_first.call(null,seq__43983__$1);
var G__43998 = cljs.core.chunk_rest.call(null,seq__43983__$1);
var G__43999 = c__25609__auto__;
var G__44000 = cljs.core.count.call(null,c__25609__auto__);
var G__44001 = (0);
seq__43983 = G__43998;
chunk__43984 = G__43999;
count__43985 = G__44000;
i__43986 = G__44001;
continue;
} else {
var vec__43990 = cljs.core.first.call(null,seq__43983__$1);
var k = cljs.core.nth.call(null,vec__43990,(0),null);
var plugin = cljs.core.nth.call(null,vec__43990,(1),null);
if(cljs.core.truth_(plugin)){
var pl_44002 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__43983,chunk__43984,count__43985,i__43986,pl_44002,vec__43990,k,plugin,seq__43983__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_44002.call(null,msg_hist);
});})(seq__43983,chunk__43984,count__43985,i__43986,pl_44002,vec__43990,k,plugin,seq__43983__$1,temp__4657__auto__))
);
} else {
}

var G__44003 = cljs.core.next.call(null,seq__43983__$1);
var G__44004 = null;
var G__44005 = (0);
var G__44006 = (0);
seq__43983 = G__44003;
chunk__43984 = G__44004;
count__43985 = G__44005;
i__43986 = G__44006;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args44007 = [];
var len__25873__auto___44014 = arguments.length;
var i__25874__auto___44015 = (0);
while(true){
if((i__25874__auto___44015 < len__25873__auto___44014)){
args44007.push((arguments[i__25874__auto___44015]));

var G__44016 = (i__25874__auto___44015 + (1));
i__25874__auto___44015 = G__44016;
continue;
} else {
}
break;
}

var G__44009 = args44007.length;
switch (G__44009) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44007.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__44010_44018 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__44011_44019 = null;
var count__44012_44020 = (0);
var i__44013_44021 = (0);
while(true){
if((i__44013_44021 < count__44012_44020)){
var msg_44022 = cljs.core._nth.call(null,chunk__44011_44019,i__44013_44021);
figwheel.client.socket.handle_incoming_message.call(null,msg_44022);

var G__44023 = seq__44010_44018;
var G__44024 = chunk__44011_44019;
var G__44025 = count__44012_44020;
var G__44026 = (i__44013_44021 + (1));
seq__44010_44018 = G__44023;
chunk__44011_44019 = G__44024;
count__44012_44020 = G__44025;
i__44013_44021 = G__44026;
continue;
} else {
var temp__4657__auto___44027 = cljs.core.seq.call(null,seq__44010_44018);
if(temp__4657__auto___44027){
var seq__44010_44028__$1 = temp__4657__auto___44027;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44010_44028__$1)){
var c__25609__auto___44029 = cljs.core.chunk_first.call(null,seq__44010_44028__$1);
var G__44030 = cljs.core.chunk_rest.call(null,seq__44010_44028__$1);
var G__44031 = c__25609__auto___44029;
var G__44032 = cljs.core.count.call(null,c__25609__auto___44029);
var G__44033 = (0);
seq__44010_44018 = G__44030;
chunk__44011_44019 = G__44031;
count__44012_44020 = G__44032;
i__44013_44021 = G__44033;
continue;
} else {
var msg_44034 = cljs.core.first.call(null,seq__44010_44028__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_44034);

var G__44035 = cljs.core.next.call(null,seq__44010_44028__$1);
var G__44036 = null;
var G__44037 = (0);
var G__44038 = (0);
seq__44010_44018 = G__44035;
chunk__44011_44019 = G__44036;
count__44012_44020 = G__44037;
i__44013_44021 = G__44038;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25880__auto__ = [];
var len__25873__auto___44043 = arguments.length;
var i__25874__auto___44044 = (0);
while(true){
if((i__25874__auto___44044 < len__25873__auto___44043)){
args__25880__auto__.push((arguments[i__25874__auto___44044]));

var G__44045 = (i__25874__auto___44044 + (1));
i__25874__auto___44044 = G__44045;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__44040){
var map__44041 = p__44040;
var map__44041__$1 = ((((!((map__44041 == null)))?((((map__44041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44041):map__44041);
var opts = map__44041__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq44039){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44039));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e44047){if((e44047 instanceof Error)){
var e = e44047;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e44047;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__44051){
var map__44052 = p__44051;
var map__44052__$1 = ((((!((map__44052 == null)))?((((map__44052.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44052.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44052):map__44052);
var msg_name = cljs.core.get.call(null,map__44052__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1481381490528