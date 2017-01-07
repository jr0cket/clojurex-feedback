// Compiled by ClojureScript 1.9.229 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__33575__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__33572 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__33573 = cljs.core.seq.call(null,vec__33572);
var first__33574 = cljs.core.first.call(null,seq__33573);
var seq__33573__$1 = cljs.core.next.call(null,seq__33573);
var tag = first__33574;
var body = seq__33573__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__33575 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33576__i = 0, G__33576__a = new Array(arguments.length -  0);
while (G__33576__i < G__33576__a.length) {G__33576__a[G__33576__i] = arguments[G__33576__i + 0]; ++G__33576__i;}
  args = new cljs.core.IndexedSeq(G__33576__a,0);
} 
return G__33575__delegate.call(this,args);};
G__33575.cljs$lang$maxFixedArity = 0;
G__33575.cljs$lang$applyTo = (function (arglist__33577){
var args = cljs.core.seq(arglist__33577);
return G__33575__delegate(args);
});
G__33575.cljs$core$IFn$_invoke$arity$variadic = G__33575__delegate;
return G__33575;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25578__auto__ = (function sablono$core$update_arglists_$_iter__33582(s__33583){
return (new cljs.core.LazySeq(null,(function (){
var s__33583__$1 = s__33583;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33583__$1);
if(temp__4657__auto__){
var s__33583__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33583__$2)){
var c__25576__auto__ = cljs.core.chunk_first.call(null,s__33583__$2);
var size__25577__auto__ = cljs.core.count.call(null,c__25576__auto__);
var b__33585 = cljs.core.chunk_buffer.call(null,size__25577__auto__);
if((function (){var i__33584 = (0);
while(true){
if((i__33584 < size__25577__auto__)){
var args = cljs.core._nth.call(null,c__25576__auto__,i__33584);
cljs.core.chunk_append.call(null,b__33585,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__33586 = (i__33584 + (1));
i__33584 = G__33586;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33585),sablono$core$update_arglists_$_iter__33582.call(null,cljs.core.chunk_rest.call(null,s__33583__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33585),null);
}
} else {
var args = cljs.core.first.call(null,s__33583__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__33582.call(null,cljs.core.rest.call(null,s__33583__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25578__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__25880__auto__ = [];
var len__25873__auto___33592 = arguments.length;
var i__25874__auto___33593 = (0);
while(true){
if((i__25874__auto___33593 < len__25873__auto___33592)){
args__25880__auto__.push((arguments[i__25874__auto___33593]));

var G__33594 = (i__25874__auto___33593 + (1));
i__25874__auto___33593 = G__33594;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25578__auto__ = (function sablono$core$iter__33588(s__33589){
return (new cljs.core.LazySeq(null,(function (){
var s__33589__$1 = s__33589;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33589__$1);
if(temp__4657__auto__){
var s__33589__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33589__$2)){
var c__25576__auto__ = cljs.core.chunk_first.call(null,s__33589__$2);
var size__25577__auto__ = cljs.core.count.call(null,c__25576__auto__);
var b__33591 = cljs.core.chunk_buffer.call(null,size__25577__auto__);
if((function (){var i__33590 = (0);
while(true){
if((i__33590 < size__25577__auto__)){
var style = cljs.core._nth.call(null,c__25576__auto__,i__33590);
cljs.core.chunk_append.call(null,b__33591,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__33595 = (i__33590 + (1));
i__33590 = G__33595;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33591),sablono$core$iter__33588.call(null,cljs.core.chunk_rest.call(null,s__33589__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33591),null);
}
} else {
var style = cljs.core.first.call(null,s__33589__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__33588.call(null,cljs.core.rest.call(null,s__33589__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25578__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq33587){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33587));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to33596 = (function sablono$core$link_to33596(var_args){
var args__25880__auto__ = [];
var len__25873__auto___33599 = arguments.length;
var i__25874__auto___33600 = (0);
while(true){
if((i__25874__auto___33600 < len__25873__auto___33599)){
args__25880__auto__.push((arguments[i__25874__auto___33600]));

var G__33601 = (i__25874__auto___33600 + (1));
i__25874__auto___33600 = G__33601;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((1) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to33596.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25881__auto__);
});

sablono.core.link_to33596.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to33596.cljs$lang$maxFixedArity = (1);

sablono.core.link_to33596.cljs$lang$applyTo = (function (seq33597){
var G__33598 = cljs.core.first.call(null,seq33597);
var seq33597__$1 = cljs.core.next.call(null,seq33597);
return sablono.core.link_to33596.cljs$core$IFn$_invoke$arity$variadic(G__33598,seq33597__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to33596);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to33602 = (function sablono$core$mail_to33602(var_args){
var args__25880__auto__ = [];
var len__25873__auto___33609 = arguments.length;
var i__25874__auto___33610 = (0);
while(true){
if((i__25874__auto___33610 < len__25873__auto___33609)){
args__25880__auto__.push((arguments[i__25874__auto___33610]));

var G__33611 = (i__25874__auto___33610 + (1));
i__25874__auto___33610 = G__33611;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((1) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to33602.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25881__auto__);
});

sablono.core.mail_to33602.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__33605){
var vec__33606 = p__33605;
var content = cljs.core.nth.call(null,vec__33606,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__24798__auto__ = content;
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to33602.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to33602.cljs$lang$applyTo = (function (seq33603){
var G__33604 = cljs.core.first.call(null,seq33603);
var seq33603__$1 = cljs.core.next.call(null,seq33603);
return sablono.core.mail_to33602.cljs$core$IFn$_invoke$arity$variadic(G__33604,seq33603__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to33602);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list33612 = (function sablono$core$unordered_list33612(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25578__auto__ = (function sablono$core$unordered_list33612_$_iter__33617(s__33618){
return (new cljs.core.LazySeq(null,(function (){
var s__33618__$1 = s__33618;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33618__$1);
if(temp__4657__auto__){
var s__33618__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33618__$2)){
var c__25576__auto__ = cljs.core.chunk_first.call(null,s__33618__$2);
var size__25577__auto__ = cljs.core.count.call(null,c__25576__auto__);
var b__33620 = cljs.core.chunk_buffer.call(null,size__25577__auto__);
if((function (){var i__33619 = (0);
while(true){
if((i__33619 < size__25577__auto__)){
var x = cljs.core._nth.call(null,c__25576__auto__,i__33619);
cljs.core.chunk_append.call(null,b__33620,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__33621 = (i__33619 + (1));
i__33619 = G__33621;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33620),sablono$core$unordered_list33612_$_iter__33617.call(null,cljs.core.chunk_rest.call(null,s__33618__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33620),null);
}
} else {
var x = cljs.core.first.call(null,s__33618__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list33612_$_iter__33617.call(null,cljs.core.rest.call(null,s__33618__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25578__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list33612);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list33622 = (function sablono$core$ordered_list33622(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25578__auto__ = (function sablono$core$ordered_list33622_$_iter__33627(s__33628){
return (new cljs.core.LazySeq(null,(function (){
var s__33628__$1 = s__33628;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33628__$1);
if(temp__4657__auto__){
var s__33628__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33628__$2)){
var c__25576__auto__ = cljs.core.chunk_first.call(null,s__33628__$2);
var size__25577__auto__ = cljs.core.count.call(null,c__25576__auto__);
var b__33630 = cljs.core.chunk_buffer.call(null,size__25577__auto__);
if((function (){var i__33629 = (0);
while(true){
if((i__33629 < size__25577__auto__)){
var x = cljs.core._nth.call(null,c__25576__auto__,i__33629);
cljs.core.chunk_append.call(null,b__33630,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__33631 = (i__33629 + (1));
i__33629 = G__33631;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33630),sablono$core$ordered_list33622_$_iter__33627.call(null,cljs.core.chunk_rest.call(null,s__33628__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33630),null);
}
} else {
var x = cljs.core.first.call(null,s__33628__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list33622_$_iter__33627.call(null,cljs.core.rest.call(null,s__33628__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25578__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list33622);
/**
 * Create an image element.
 */
sablono.core.image33632 = (function sablono$core$image33632(var_args){
var args33633 = [];
var len__25873__auto___33636 = arguments.length;
var i__25874__auto___33637 = (0);
while(true){
if((i__25874__auto___33637 < len__25873__auto___33636)){
args33633.push((arguments[i__25874__auto___33637]));

var G__33638 = (i__25874__auto___33637 + (1));
i__25874__auto___33637 = G__33638;
continue;
} else {
}
break;
}

var G__33635 = args33633.length;
switch (G__33635) {
case 1:
return sablono.core.image33632.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image33632.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33633.length)].join('')));

}
});

sablono.core.image33632.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image33632.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image33632.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image33632);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__33640_SHARP_,p2__33641_SHARP_){
return [cljs.core.str(p1__33640_SHARP_),cljs.core.str("["),cljs.core.str(p2__33641_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__33642_SHARP_,p2__33643_SHARP_){
return [cljs.core.str(p1__33642_SHARP_),cljs.core.str("-"),cljs.core.str(p2__33643_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24798__auto__ = value;
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field33644 = (function sablono$core$color_field33644(var_args){
var args33645 = [];
var len__25873__auto___33712 = arguments.length;
var i__25874__auto___33713 = (0);
while(true){
if((i__25874__auto___33713 < len__25873__auto___33712)){
args33645.push((arguments[i__25874__auto___33713]));

var G__33714 = (i__25874__auto___33713 + (1));
i__25874__auto___33713 = G__33714;
continue;
} else {
}
break;
}

var G__33647 = args33645.length;
switch (G__33647) {
case 1:
return sablono.core.color_field33644.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field33644.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33645.length)].join('')));

}
});

sablono.core.color_field33644.cljs$core$IFn$_invoke$arity$1 = (function (name__33559__auto__){
return sablono.core.color_field33644.call(null,name__33559__auto__,null);
});

sablono.core.color_field33644.cljs$core$IFn$_invoke$arity$2 = (function (name__33559__auto__,value__33560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__33559__auto__,value__33560__auto__);
});

sablono.core.color_field33644.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field33644);

/**
 * Creates a date input field.
 */
sablono.core.date_field33648 = (function sablono$core$date_field33648(var_args){
var args33649 = [];
var len__25873__auto___33716 = arguments.length;
var i__25874__auto___33717 = (0);
while(true){
if((i__25874__auto___33717 < len__25873__auto___33716)){
args33649.push((arguments[i__25874__auto___33717]));

var G__33718 = (i__25874__auto___33717 + (1));
i__25874__auto___33717 = G__33718;
continue;
} else {
}
break;
}

var G__33651 = args33649.length;
switch (G__33651) {
case 1:
return sablono.core.date_field33648.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field33648.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33649.length)].join('')));

}
});

sablono.core.date_field33648.cljs$core$IFn$_invoke$arity$1 = (function (name__33559__auto__){
return sablono.core.date_field33648.call(null,name__33559__auto__,null);
});

sablono.core.date_field33648.cljs$core$IFn$_invoke$arity$2 = (function (name__33559__auto__,value__33560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__33559__auto__,value__33560__auto__);
});

sablono.core.date_field33648.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field33648);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field33652 = (function sablono$core$datetime_field33652(var_args){
var args33653 = [];
var len__25873__auto___33720 = arguments.length;
var i__25874__auto___33721 = (0);
while(true){
if((i__25874__auto___33721 < len__25873__auto___33720)){
args33653.push((arguments[i__25874__auto___33721]));

var G__33722 = (i__25874__auto___33721 + (1));
i__25874__auto___33721 = G__33722;
continue;
} else {
}
break;
}

var G__33655 = args33653.length;
switch (G__33655) {
case 1:
return sablono.core.datetime_field33652.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field33652.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33653.length)].join('')));

}
});

sablono.core.datetime_field33652.cljs$core$IFn$_invoke$arity$1 = (function (name__33559__auto__){
return sablono.core.datetime_field33652.call(null,name__33559__auto__,null);
});

sablono.core.datetime_field33652.cljs$core$IFn$_invoke$arity$2 = (function (name__33559__auto__,value__33560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__33559__auto__,value__33560__auto__);
});

sablono.core.datetime_field33652.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field33652);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field33656 = (function sablono$core$datetime_local_field33656(var_args){
var args33657 = [];
var len__25873__auto___33724 = arguments.length;
var i__25874__auto___33725 = (0);
while(true){
if((i__25874__auto___33725 < len__25873__auto___33724)){
args33657.push((arguments[i__25874__auto___33725]));

var G__33726 = (i__25874__auto___33725 + (1));
i__25874__auto___33725 = G__33726;
continue;
} else {
}
break;
}

var G__33659 = args33657.length;
switch (G__33659) {
case 1:
return sablono.core.datetime_local_field33656.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field33656.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33657.length)].join('')));

}
});

sablono.core.datetime_local_field33656.cljs$core$IFn$_invoke$arity$1 = (function (name__33559__auto__){
return sablono.core.datetime_local_field33656.call(null,name__33559__auto__,null);
});

sablono.core.datetime_local_field33656.cljs$core$IFn$_invoke$arity$2 = (function (name__33559__auto__,value__33560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__33559__auto__,value__33560__auto__);
});

sablono.core.datetime_local_field33656.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field33656);

/**
 * Creates a email input field.
 */
sablono.core.email_field33660 = (function sablono$core$email_field33660(var_args){
var args33661 = [];
var len__25873__auto___33728 = arguments.length;
var i__25874__auto___33729 = (0);
while(true){
if((i__25874__auto___33729 < len__25873__auto___33728)){
args33661.push((arguments[i__25874__auto___33729]));

var G__33730 = (i__25874__auto___33729 + (1));
i__25874__auto___33729 = G__33730;
continue;
} else {
}
break;
}

var G__33663 = args33661.length;
switch (G__33663) {
case 1:
return sablono.core.email_field33660.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field33660.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33661.length)].join('')));

}
});

sablono.core.email_field33660.cljs$core$IFn$_invoke$arity$1 = (function (name__33559__auto__){
return sablono.core.email_field33660.call(null,name__33559__auto__,null);
});

sablono.core.email_field33660.cljs$core$IFn$_invoke$arity$2 = (function (name__33559__auto__,value__33560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__33559__auto__,value__33560__auto__);
});

sablono.core.email_field33660.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field33660);

/**
 * Creates a file input field.
 */
sablono.core.file_field33664 = (function sablono$core$file_field33664(var_args){
var args33665 = [];
var len__25873__auto___33732 = arguments.length;
var i__25874__auto___33733 = (0);
while(true){
if((i__25874__auto___33733 < len__25873__auto___33732)){
args33665.push((arguments[i__25874__auto___33733]));

var G__33734 = (i__25874__auto___33733 + (1));
i__25874__auto___33733 = G__33734;
continue;
} else {
}
break;
}

var G__33667 = args33665.length;
switch (G__33667) {
case 1:
return sablono.core.file_field33664.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field33664.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33665.length)].join('')));

}
});

sablono.core.file_field33664.cljs$core$IFn$_invoke$arity$1 = (function (name__33559__auto__){
return sablono.core.file_field33664.call(null,name__33559__auto__,null);
});

sablono.core.file_field33664.cljs$core$IFn$_invoke$arity$2 = (function (name__33559__auto__,value__33560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__33559__auto__,value__33560__auto__);
});

sablono.core.file_field33664.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field33664);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field33668 = (function sablono$core$hidden_field33668(var_args){
var args33669 = [];
var len__25873__auto___33736 = arguments.length;
var i__25874__auto___33737 = (0);
while(true){
if((i__25874__auto___33737 < len__25873__auto___33736)){
args33669.push((arguments[i__25874__auto___33737]));

var G__33738 = (i__25874__auto___33737 + (1));
i__25874__auto___33737 = G__33738;
continue;
} else {
}
break;
}

var G__33671 = args33669.length;
switch (G__33671) {
case 1:
return sablono.core.hidden_field33668.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field33668.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33669.length)].join('')));

}
});

sablono.core.hidden_field33668.cljs$core$IFn$_invoke$arity$1 = (function (name__33559__auto__){
return sablono.core.hidden_field33668.call(null,name__33559__auto__,null);
});

sablono.core.hidden_field33668.cljs$core$IFn$_invoke$arity$2 = (function (name__33559__auto__,value__33560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__33559__auto__,value__33560__auto__);
});

sablono.core.hidden_field33668.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field33668);

/**
 * Creates a month input field.
 */
sablono.core.month_field33672 = (function sablono$core$month_field33672(var_args){
var args33673 = [];
var len__25873__auto___33740 = arguments.length;
var i__25874__auto___33741 = (0);
while(true){
if((i__25874__auto___33741 < len__25873__auto___33740)){
args33673.push((arguments[i__25874__auto___33741]));

var G__33742 = (i__25874__auto___33741 + (1));
i__25874__auto___33741 = G__33742;
continue;
} else {
}
break;
}

var G__33675 = args33673.length;
switch (G__33675) {
case 1:
return sablono.core.month_field33672.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field33672.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33673.length)].join('')));

}
});

sablono.core.month_field33672.cljs$core$IFn$_invoke$arity$1 = (function (name__33559__auto__){
return sablono.core.month_field33672.call(null,name__33559__auto__,null);
});

sablono.core.month_field33672.cljs$core$IFn$_invoke$arity$2 = (function (name__33559__auto__,value__33560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__33559__auto__,value__33560__auto__);
});

sablono.core.month_field33672.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field33672);

/**
 * Creates a number input field.
 */
sablono.core.number_field33676 = (function sablono$core$number_field33676(var_args){
var args33677 = [];
var len__25873__auto___33744 = arguments.length;
var i__25874__auto___33745 = (0);
while(true){
if((i__25874__auto___33745 < len__25873__auto___33744)){
args33677.push((arguments[i__25874__auto___33745]));

var G__33746 = (i__25874__auto___33745 + (1));
i__25874__auto___33745 = G__33746;
continue;
} else {
}
break;
}

var G__33679 = args33677.length;
switch (G__33679) {
case 1:
return sablono.core.number_field33676.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field33676.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33677.length)].join('')));

}
});

sablono.core.number_field33676.cljs$core$IFn$_invoke$arity$1 = (function (name__33559__auto__){
return sablono.core.number_field33676.call(null,name__33559__auto__,null);
});

sablono.core.number_field33676.cljs$core$IFn$_invoke$arity$2 = (function (name__33559__auto__,value__33560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__33559__auto__,value__33560__auto__);
});

sablono.core.number_field33676.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field33676);

/**
 * Creates a password input field.
 */
sablono.core.password_field33680 = (function sablono$core$password_field33680(var_args){
var args33681 = [];
var len__25873__auto___33748 = arguments.length;
var i__25874__auto___33749 = (0);
while(true){
if((i__25874__auto___33749 < len__25873__auto___33748)){
args33681.push((arguments[i__25874__auto___33749]));

var G__33750 = (i__25874__auto___33749 + (1));
i__25874__auto___33749 = G__33750;
continue;
} else {
}
break;
}

var G__33683 = args33681.length;
switch (G__33683) {
case 1:
return sablono.core.password_field33680.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field33680.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33681.length)].join('')));

}
});

sablono.core.password_field33680.cljs$core$IFn$_invoke$arity$1 = (function (name__33559__auto__){
return sablono.core.password_field33680.call(null,name__33559__auto__,null);
});

sablono.core.password_field33680.cljs$core$IFn$_invoke$arity$2 = (function (name__33559__auto__,value__33560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__33559__auto__,value__33560__auto__);
});

sablono.core.password_field33680.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field33680);

/**
 * Creates a range input field.
 */
sablono.core.range_field33684 = (function sablono$core$range_field33684(var_args){
var args33685 = [];
var len__25873__auto___33752 = arguments.length;
var i__25874__auto___33753 = (0);
while(true){
if((i__25874__auto___33753 < len__25873__auto___33752)){
args33685.push((arguments[i__25874__auto___33753]));

var G__33754 = (i__25874__auto___33753 + (1));
i__25874__auto___33753 = G__33754;
continue;
} else {
}
break;
}

var G__33687 = args33685.length;
switch (G__33687) {
case 1:
return sablono.core.range_field33684.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field33684.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33685.length)].join('')));

}
});

sablono.core.range_field33684.cljs$core$IFn$_invoke$arity$1 = (function (name__33559__auto__){
return sablono.core.range_field33684.call(null,name__33559__auto__,null);
});

sablono.core.range_field33684.cljs$core$IFn$_invoke$arity$2 = (function (name__33559__auto__,value__33560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__33559__auto__,value__33560__auto__);
});

sablono.core.range_field33684.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field33684);

/**
 * Creates a search input field.
 */
sablono.core.search_field33688 = (function sablono$core$search_field33688(var_args){
var args33689 = [];
var len__25873__auto___33756 = arguments.length;
var i__25874__auto___33757 = (0);
while(true){
if((i__25874__auto___33757 < len__25873__auto___33756)){
args33689.push((arguments[i__25874__auto___33757]));

var G__33758 = (i__25874__auto___33757 + (1));
i__25874__auto___33757 = G__33758;
continue;
} else {
}
break;
}

var G__33691 = args33689.length;
switch (G__33691) {
case 1:
return sablono.core.search_field33688.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field33688.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33689.length)].join('')));

}
});

sablono.core.search_field33688.cljs$core$IFn$_invoke$arity$1 = (function (name__33559__auto__){
return sablono.core.search_field33688.call(null,name__33559__auto__,null);
});

sablono.core.search_field33688.cljs$core$IFn$_invoke$arity$2 = (function (name__33559__auto__,value__33560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__33559__auto__,value__33560__auto__);
});

sablono.core.search_field33688.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field33688);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field33692 = (function sablono$core$tel_field33692(var_args){
var args33693 = [];
var len__25873__auto___33760 = arguments.length;
var i__25874__auto___33761 = (0);
while(true){
if((i__25874__auto___33761 < len__25873__auto___33760)){
args33693.push((arguments[i__25874__auto___33761]));

var G__33762 = (i__25874__auto___33761 + (1));
i__25874__auto___33761 = G__33762;
continue;
} else {
}
break;
}

var G__33695 = args33693.length;
switch (G__33695) {
case 1:
return sablono.core.tel_field33692.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field33692.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33693.length)].join('')));

}
});

sablono.core.tel_field33692.cljs$core$IFn$_invoke$arity$1 = (function (name__33559__auto__){
return sablono.core.tel_field33692.call(null,name__33559__auto__,null);
});

sablono.core.tel_field33692.cljs$core$IFn$_invoke$arity$2 = (function (name__33559__auto__,value__33560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__33559__auto__,value__33560__auto__);
});

sablono.core.tel_field33692.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field33692);

/**
 * Creates a text input field.
 */
sablono.core.text_field33696 = (function sablono$core$text_field33696(var_args){
var args33697 = [];
var len__25873__auto___33764 = arguments.length;
var i__25874__auto___33765 = (0);
while(true){
if((i__25874__auto___33765 < len__25873__auto___33764)){
args33697.push((arguments[i__25874__auto___33765]));

var G__33766 = (i__25874__auto___33765 + (1));
i__25874__auto___33765 = G__33766;
continue;
} else {
}
break;
}

var G__33699 = args33697.length;
switch (G__33699) {
case 1:
return sablono.core.text_field33696.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field33696.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33697.length)].join('')));

}
});

sablono.core.text_field33696.cljs$core$IFn$_invoke$arity$1 = (function (name__33559__auto__){
return sablono.core.text_field33696.call(null,name__33559__auto__,null);
});

sablono.core.text_field33696.cljs$core$IFn$_invoke$arity$2 = (function (name__33559__auto__,value__33560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__33559__auto__,value__33560__auto__);
});

sablono.core.text_field33696.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field33696);

/**
 * Creates a time input field.
 */
sablono.core.time_field33700 = (function sablono$core$time_field33700(var_args){
var args33701 = [];
var len__25873__auto___33768 = arguments.length;
var i__25874__auto___33769 = (0);
while(true){
if((i__25874__auto___33769 < len__25873__auto___33768)){
args33701.push((arguments[i__25874__auto___33769]));

var G__33770 = (i__25874__auto___33769 + (1));
i__25874__auto___33769 = G__33770;
continue;
} else {
}
break;
}

var G__33703 = args33701.length;
switch (G__33703) {
case 1:
return sablono.core.time_field33700.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field33700.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33701.length)].join('')));

}
});

sablono.core.time_field33700.cljs$core$IFn$_invoke$arity$1 = (function (name__33559__auto__){
return sablono.core.time_field33700.call(null,name__33559__auto__,null);
});

sablono.core.time_field33700.cljs$core$IFn$_invoke$arity$2 = (function (name__33559__auto__,value__33560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__33559__auto__,value__33560__auto__);
});

sablono.core.time_field33700.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field33700);

/**
 * Creates a url input field.
 */
sablono.core.url_field33704 = (function sablono$core$url_field33704(var_args){
var args33705 = [];
var len__25873__auto___33772 = arguments.length;
var i__25874__auto___33773 = (0);
while(true){
if((i__25874__auto___33773 < len__25873__auto___33772)){
args33705.push((arguments[i__25874__auto___33773]));

var G__33774 = (i__25874__auto___33773 + (1));
i__25874__auto___33773 = G__33774;
continue;
} else {
}
break;
}

var G__33707 = args33705.length;
switch (G__33707) {
case 1:
return sablono.core.url_field33704.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field33704.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33705.length)].join('')));

}
});

sablono.core.url_field33704.cljs$core$IFn$_invoke$arity$1 = (function (name__33559__auto__){
return sablono.core.url_field33704.call(null,name__33559__auto__,null);
});

sablono.core.url_field33704.cljs$core$IFn$_invoke$arity$2 = (function (name__33559__auto__,value__33560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__33559__auto__,value__33560__auto__);
});

sablono.core.url_field33704.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field33704);

/**
 * Creates a week input field.
 */
sablono.core.week_field33708 = (function sablono$core$week_field33708(var_args){
var args33709 = [];
var len__25873__auto___33776 = arguments.length;
var i__25874__auto___33777 = (0);
while(true){
if((i__25874__auto___33777 < len__25873__auto___33776)){
args33709.push((arguments[i__25874__auto___33777]));

var G__33778 = (i__25874__auto___33777 + (1));
i__25874__auto___33777 = G__33778;
continue;
} else {
}
break;
}

var G__33711 = args33709.length;
switch (G__33711) {
case 1:
return sablono.core.week_field33708.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field33708.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33709.length)].join('')));

}
});

sablono.core.week_field33708.cljs$core$IFn$_invoke$arity$1 = (function (name__33559__auto__){
return sablono.core.week_field33708.call(null,name__33559__auto__,null);
});

sablono.core.week_field33708.cljs$core$IFn$_invoke$arity$2 = (function (name__33559__auto__,value__33560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__33559__auto__,value__33560__auto__);
});

sablono.core.week_field33708.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field33708);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box33780 = (function sablono$core$check_box33780(var_args){
var args33781 = [];
var len__25873__auto___33784 = arguments.length;
var i__25874__auto___33785 = (0);
while(true){
if((i__25874__auto___33785 < len__25873__auto___33784)){
args33781.push((arguments[i__25874__auto___33785]));

var G__33786 = (i__25874__auto___33785 + (1));
i__25874__auto___33785 = G__33786;
continue;
} else {
}
break;
}

var G__33783 = args33781.length;
switch (G__33783) {
case 1:
return sablono.core.check_box33780.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box33780.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box33780.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33781.length)].join('')));

}
});

sablono.core.check_box33780.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box33780.call(null,name,null);
});

sablono.core.check_box33780.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box33780.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box33780.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24798__auto__ = value;
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box33780.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box33780);
/**
 * Creates a radio button.
 */
sablono.core.radio_button33788 = (function sablono$core$radio_button33788(var_args){
var args33789 = [];
var len__25873__auto___33792 = arguments.length;
var i__25874__auto___33793 = (0);
while(true){
if((i__25874__auto___33793 < len__25873__auto___33792)){
args33789.push((arguments[i__25874__auto___33793]));

var G__33794 = (i__25874__auto___33793 + (1));
i__25874__auto___33793 = G__33794;
continue;
} else {
}
break;
}

var G__33791 = args33789.length;
switch (G__33791) {
case 1:
return sablono.core.radio_button33788.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button33788.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button33788.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33789.length)].join('')));

}
});

sablono.core.radio_button33788.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button33788.call(null,group,null);
});

sablono.core.radio_button33788.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button33788.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button33788.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24798__auto__ = value;
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button33788.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button33788);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options33796 = (function sablono$core$select_options33796(coll){
var iter__25578__auto__ = (function sablono$core$select_options33796_$_iter__33813(s__33814){
return (new cljs.core.LazySeq(null,(function (){
var s__33814__$1 = s__33814;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33814__$1);
if(temp__4657__auto__){
var s__33814__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33814__$2)){
var c__25576__auto__ = cljs.core.chunk_first.call(null,s__33814__$2);
var size__25577__auto__ = cljs.core.count.call(null,c__25576__auto__);
var b__33816 = cljs.core.chunk_buffer.call(null,size__25577__auto__);
if((function (){var i__33815 = (0);
while(true){
if((i__33815 < size__25577__auto__)){
var x = cljs.core._nth.call(null,c__25576__auto__,i__33815);
cljs.core.chunk_append.call(null,b__33816,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__33823 = x;
var text = cljs.core.nth.call(null,vec__33823,(0),null);
var val = cljs.core.nth.call(null,vec__33823,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__33823,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options33796.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__33829 = (i__33815 + (1));
i__33815 = G__33829;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33816),sablono$core$select_options33796_$_iter__33813.call(null,cljs.core.chunk_rest.call(null,s__33814__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33816),null);
}
} else {
var x = cljs.core.first.call(null,s__33814__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__33826 = x;
var text = cljs.core.nth.call(null,vec__33826,(0),null);
var val = cljs.core.nth.call(null,vec__33826,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__33826,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options33796.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options33796_$_iter__33813.call(null,cljs.core.rest.call(null,s__33814__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25578__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options33796);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down33830 = (function sablono$core$drop_down33830(var_args){
var args33831 = [];
var len__25873__auto___33834 = arguments.length;
var i__25874__auto___33835 = (0);
while(true){
if((i__25874__auto___33835 < len__25873__auto___33834)){
args33831.push((arguments[i__25874__auto___33835]));

var G__33836 = (i__25874__auto___33835 + (1));
i__25874__auto___33835 = G__33836;
continue;
} else {
}
break;
}

var G__33833 = args33831.length;
switch (G__33833) {
case 2:
return sablono.core.drop_down33830.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down33830.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33831.length)].join('')));

}
});

sablono.core.drop_down33830.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down33830.call(null,name,options,null);
});

sablono.core.drop_down33830.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down33830.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down33830);
/**
 * Creates a text area element.
 */
sablono.core.text_area33838 = (function sablono$core$text_area33838(var_args){
var args33839 = [];
var len__25873__auto___33842 = arguments.length;
var i__25874__auto___33843 = (0);
while(true){
if((i__25874__auto___33843 < len__25873__auto___33842)){
args33839.push((arguments[i__25874__auto___33843]));

var G__33844 = (i__25874__auto___33843 + (1));
i__25874__auto___33843 = G__33844;
continue;
} else {
}
break;
}

var G__33841 = args33839.length;
switch (G__33841) {
case 1:
return sablono.core.text_area33838.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area33838.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33839.length)].join('')));

}
});

sablono.core.text_area33838.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area33838.call(null,name,null);
});

sablono.core.text_area33838.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24798__auto__ = value;
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area33838.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area33838);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label33846 = (function sablono$core$label33846(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label33846);
/**
 * Creates a submit button.
 */
sablono.core.submit_button33847 = (function sablono$core$submit_button33847(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button33847);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button33848 = (function sablono$core$reset_button33848(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button33848);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to33849 = (function sablono$core$form_to33849(var_args){
var args__25880__auto__ = [];
var len__25873__auto___33856 = arguments.length;
var i__25874__auto___33857 = (0);
while(true){
if((i__25874__auto___33857 < len__25873__auto___33856)){
args__25880__auto__.push((arguments[i__25874__auto___33857]));

var G__33858 = (i__25874__auto___33857 + (1));
i__25874__auto___33857 = G__33858;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((1) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to33849.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25881__auto__);
});

sablono.core.form_to33849.cljs$core$IFn$_invoke$arity$variadic = (function (p__33852,body){
var vec__33853 = p__33852;
var method = cljs.core.nth.call(null,vec__33853,(0),null);
var action = cljs.core.nth.call(null,vec__33853,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to33849.cljs$lang$maxFixedArity = (1);

sablono.core.form_to33849.cljs$lang$applyTo = (function (seq33850){
var G__33851 = cljs.core.first.call(null,seq33850);
var seq33850__$1 = cljs.core.next.call(null,seq33850);
return sablono.core.form_to33849.cljs$core$IFn$_invoke$arity$variadic(G__33851,seq33850__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to33849);

//# sourceMappingURL=core.js.map?rel=1481381471153