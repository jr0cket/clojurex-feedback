// Compiled by ClojureScript 1.9.229 {}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.util.utils');
goog.require('devcards.system');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('devcards.util.markdown');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.call(null);
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__24798__auto__ = (function (){var and__24786__auto__ = typeof Symbol !== 'undefined';
if(and__24786__auto__){
var and__24786__auto____$1 = cljs.core.fn_QMARK_.call(null,Symbol);
if(and__24786__auto____$1){
var and__24786__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__24786__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__24786__auto____$2;
}
} else {
return and__24786__auto____$1;
}
} else {
return and__24786__auto__;
}
})();
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if(typeof devcards.core.register_listeners_fig !== 'undefined'){
return null;
} else {
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__34697_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__34697_SHARP_.detail], null));
}));

return true;
})()
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_.call(null,m)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var args34698 = [];
var len__25873__auto___34701 = arguments.length;
var i__25874__auto___34702 = (0);
while(true){
if((i__25874__auto___34702 < len__25873__auto___34701)){
args34698.push((arguments[i__25874__auto___34702]));

var G__34703 = (i__25874__auto___34702 + (1));
i__25874__auto___34702 = G__34703;
continue;
} else {
}
break;
}

var G__34700 = args34698.length;
switch (G__34700) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34698.length)].join('')));

}
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards.core.start_devcard_ui_BANG__STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if((cljs.core.map_QMARK_.call(null,options)) && (cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),(function (opts){
return cljs.core.merge.call(null,opts,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options));
}));
} else {
}

devcards.system.start_ui.call(null,devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_.call(null);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = 1;

devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__24786__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__24786__auto__){
var map__34711 = c;
var map__34711__$1 = ((((!((map__34711 == null)))?((((map__34711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34711):map__34711);
var path = cljs.core.get.call(null,map__34711__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__34711__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_.call(null,path);

cljs.core.not_empty.call(null,path);

cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_.call(null,func);
} else {
return and__24786__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (card? c)"));
}


return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-card","register-card",-1375971588),c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.hash.call(null,raw_html_str))].join(''),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),raw_html_str], null)], null)));
});

devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,"code-ref");
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_hljs.call(null);
if(cljs.core.truth_(temp__4657__auto____$1)){
var hljs = temp__4657__auto____$1;
var temp__4657__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__4657__auto____$2)){
var highlight_block = temp__4657__auto____$2;
return highlight_block.call(null,node);
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
var base__33905__auto___34717 = ({"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "render": (function (){
var this$ = this;
return React.createElement("pre",({"className": (cljs.core.truth_(devcards.core.get_hljs.call(null))?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))}),React.createElement("code",({"className": (function (){var or__24798__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104));
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return "";
}
})(), "ref": "code-ref"}),sablono.interpreter.interpret.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))));
})});
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__33905__auto___34717);
}

var seq__34713_34718 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__34714_34719 = null;
var count__34715_34720 = (0);
var i__34716_34721 = (0);
while(true){
if((i__34716_34721 < count__34715_34720)){
var property__33906__auto___34722 = cljs.core._nth.call(null,chunk__34714_34719,i__34716_34721);
if(cljs.core.truth_((base__33905__auto___34717[property__33906__auto___34722]))){
(devcards.core.CodeHighlight.prototype[property__33906__auto___34722] = (base__33905__auto___34717[property__33906__auto___34722]));
} else {
}

var G__34723 = seq__34713_34718;
var G__34724 = chunk__34714_34719;
var G__34725 = count__34715_34720;
var G__34726 = (i__34716_34721 + (1));
seq__34713_34718 = G__34723;
chunk__34714_34719 = G__34724;
count__34715_34720 = G__34725;
i__34716_34721 = G__34726;
continue;
} else {
var temp__4657__auto___34727 = cljs.core.seq.call(null,seq__34713_34718);
if(temp__4657__auto___34727){
var seq__34713_34728__$1 = temp__4657__auto___34727;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34713_34728__$1)){
var c__25609__auto___34729 = cljs.core.chunk_first.call(null,seq__34713_34728__$1);
var G__34730 = cljs.core.chunk_rest.call(null,seq__34713_34728__$1);
var G__34731 = c__25609__auto___34729;
var G__34732 = cljs.core.count.call(null,c__25609__auto___34729);
var G__34733 = (0);
seq__34713_34718 = G__34730;
chunk__34714_34719 = G__34731;
count__34715_34720 = G__34732;
i__34716_34721 = G__34733;
continue;
} else {
var property__33906__auto___34734 = cljs.core.first.call(null,seq__34713_34728__$1);
if(cljs.core.truth_((base__33905__auto___34717[property__33906__auto___34734]))){
(devcards.core.CodeHighlight.prototype[property__33906__auto___34734] = (base__33905__auto___34717[property__33906__auto___34734]));
} else {
}

var G__34735 = cljs.core.next.call(null,seq__34713_34728__$1);
var G__34736 = null;
var G__34737 = (0);
var G__34738 = (0);
seq__34713_34718 = G__34735;
chunk__34714_34719 = G__34736;
count__34715_34720 = G__34737;
i__34716_34721 = G__34738;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
return React.createElement(devcards.core.CodeHighlight,({"code": code_str, "lang": lang}));
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__25723__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25724__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25725__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25726__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25727__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25727__auto__,method_table__25723__auto__,prefer_table__25724__auto__,method_cache__25725__auto__,cached_hierarchy__25726__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__34739){
var map__34740 = p__34739;
var map__34740__$1 = ((((!((map__34740 == null)))?((((map__34740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34740):map__34740);
var content = cljs.core.get.call(null,map__34740__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__34742){
var map__34743 = p__34742;
var map__34743__$1 = ((((!((map__34743 == null)))?((((map__34743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34743):map__34743);
var block = map__34743__$1;
var content = cljs.core.get.call(null,map__34743__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,({"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)}));
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__25880__auto__ = [];
var len__25873__auto___34746 = arguments.length;
var i__25874__auto___34747 = (0);
while(true){
if((i__25874__auto___34747 < len__25873__auto___34746)){
args__25880__auto__.push((arguments[i__25874__auto___34747]));

var G__34748 = (i__25874__auto___34747 + (1));
i__25874__auto___34747 = G__34748;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.call(null,(function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_(devcards.core.react_element_QMARK_.call(null,x))){
return null;
} else {
return [cljs.core.str("```clojure\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,x)),cljs.core.str("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.call(null,devcards.util.markdown.parse_out_blocks,strs__$1);
return React.createElement("div",({"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"}),sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,((function (blocks,strs__$1){
return (function (i,data){
return React.createElement("div",({"key": i}),sablono.interpreter.interpret.call(null,devcards.core.markdown_block__GT_react.call(null,data)));
});})(blocks,strs__$1))
,blocks)));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

return React.createElement("div",({"style": ({"color": "#a94442"}), "key": "devcards-markdown-error"}),sablono.interpreter.interpret.call(null,message));
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq34745){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34745));
});

devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",({"key": "devcards_naked-card", "className": (function (){var G__34750 = devcards.system.devcards_rendered_card_class;
var G__34750__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__34750),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__34750);
if(cljs.core.truth_(cljs.core.not_empty.call(null,classname))){
return [cljs.core.str(G__34750__$1),cljs.core.str(" "),cljs.core.str(classname)].join('');
} else {
return G__34750__$1;
}
})()}),sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args34751 = [];
var len__25873__auto___34759 = arguments.length;
var i__25874__auto___34760 = (0);
while(true){
if((i__25874__auto___34760 < len__25873__auto___34759)){
args34751.push((arguments[i__25874__auto___34760]));

var G__34761 = (i__25874__auto___34760 + (1));
i__25874__auto___34760 = G__34761;
continue;
} else {
}
break;
}

var G__34753 = args34751.length;
switch (G__34753) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34751.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__34754 = card;
var map__34754__$1 = ((((!((map__34754 == null)))?((((map__34754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34754):map__34754);
var path = cljs.core.get.call(null,map__34754__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__34754__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], null))}),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"}),React.createElement("div",({"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"}),(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__34754,map__34754__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__34754,map__34754__$1,path,options))
)}),sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," ")):sablono.interpreter.interpret.call(null,(function (){var attrs34756 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs34756))?sablono.interpreter.attributes.call(null,attrs34756):null),((cljs.core.map_QMARK_.call(null,attrs34756))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34756)], null)));
})()))),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__25461__auto__ = (((this$ == null))?null:this$);
var m__25462__auto__ = (devcards.core._devcard_options[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,this$,devcard_opts);
} else {
var m__25462__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__25461__auto__ = (((this$ == null))?null:this$);
var m__25462__auto__ = (devcards.core._devcard[goog.typeOf(x__25461__auto__)]);
if(!((m__25462__auto__ == null))){
return m__25462__auto__.call(null,this$,devcard_opts);
} else {
var m__25462__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__25462__auto____$1 == null))){
return m__25462__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcard.-devcard",this$);
}
}
}
});

devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__4657__auto__ = (this$.refs[ref]);
if(cljs.core.truth_(temp__4657__auto__)){
var comp = temp__4657__auto__;
return ReactDOM.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return (this$.props[cljs.core.name.call(null,k)]);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return (this$.state[cljs.core.name.call(null,k)]);
} else {
return null;
}
});
var base__33905__auto___34768 = ({"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.call(null,(next_props["change_count"]),devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"change_count","change_count",-533812109)));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs34763 = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"children_thunk","children_thunk",-1161306645));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34763))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs34763)):({"className": "com-rigsomelight-dont-update"})),((cljs.core.map_QMARK_.call(null,attrs34763))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34763)], null)));
})});
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__33905__auto___34768);
}

var seq__34764_34769 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__34765_34770 = null;
var count__34766_34771 = (0);
var i__34767_34772 = (0);
while(true){
if((i__34767_34772 < count__34766_34771)){
var property__33906__auto___34773 = cljs.core._nth.call(null,chunk__34765_34770,i__34767_34772);
if(cljs.core.truth_((base__33905__auto___34768[property__33906__auto___34773]))){
(devcards.core.DontUpdate.prototype[property__33906__auto___34773] = (base__33905__auto___34768[property__33906__auto___34773]));
} else {
}

var G__34774 = seq__34764_34769;
var G__34775 = chunk__34765_34770;
var G__34776 = count__34766_34771;
var G__34777 = (i__34767_34772 + (1));
seq__34764_34769 = G__34774;
chunk__34765_34770 = G__34775;
count__34766_34771 = G__34776;
i__34767_34772 = G__34777;
continue;
} else {
var temp__4657__auto___34778 = cljs.core.seq.call(null,seq__34764_34769);
if(temp__4657__auto___34778){
var seq__34764_34779__$1 = temp__4657__auto___34778;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34764_34779__$1)){
var c__25609__auto___34780 = cljs.core.chunk_first.call(null,seq__34764_34779__$1);
var G__34781 = cljs.core.chunk_rest.call(null,seq__34764_34779__$1);
var G__34782 = c__25609__auto___34780;
var G__34783 = cljs.core.count.call(null,c__25609__auto___34780);
var G__34784 = (0);
seq__34764_34769 = G__34781;
chunk__34765_34770 = G__34782;
count__34766_34771 = G__34783;
i__34767_34772 = G__34784;
continue;
} else {
var property__33906__auto___34785 = cljs.core.first.call(null,seq__34764_34779__$1);
if(cljs.core.truth_((base__33905__auto___34768[property__33906__auto___34785]))){
(devcards.core.DontUpdate.prototype[property__33906__auto___34785] = (base__33905__auto___34768[property__33906__auto___34785]));
} else {
}

var G__34786 = cljs.core.next.call(null,seq__34764_34779__$1);
var G__34787 = null;
var G__34788 = (0);
var G__34789 = (0);
seq__34764_34769 = G__34786;
chunk__34765_34770 = G__34787;
count__34766_34771 = G__34788;
i__34767_34772 = G__34789;
continue;
}
} else {
}
}
break;
}
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
return React.createElement(devcards.core.DontUpdate,({"change_count": change_count, "children_thunk": children_thunk}));
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__24798__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || (data.cljs$core$IAtom$))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data))){
return data;
} else {
return cljs.core.atom.call(null,data);
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
return devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
}):(function (this$){
return devcards.core.wrangle_inital_data.call(null,this$);
}));
devcards.core.default_derive_main = (function devcards$core$default_derive_main(parent_elem,card,data_atom,change_count){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_.call(null,m)){
return m.call(null,data_atom,parent_elem);
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not.call(null,devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_))))?devcards.core.code_highlight.call(null,devcards.util.utils.pprint_code.call(null,main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
if(new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308).cljs$core$IFn$_invoke$arity$1(options) === false){
return devcards.core.dont_update.call(null,change_count,main_obj);
} else {
return main_obj;
}
});
devcards.core.render_all_card_elements = (function devcards$core$render_all_card_elements(main,data_atom,card){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var hist_ctl = (cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(options))?devcards.core.hist_recorder_STAR_.call(null,data_atom):null);
var document = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__4657__auto__)){
var docu = temp__4657__auto__;
return devcards.core.markdown__GT_react.call(null,docu);
} else {
return null;
}
})();
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom)):null);
var card__$1 = (((typeof main === 'string') || ((main == null)))?cljs.core.assoc_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"hide-border","hide-border",1463657151)], null),true):card);
var main__$1 = React.createElement("div",({"key": "devcards-main-section"}),sablono.interpreter.interpret.call(null,main));
var children = cljs.core.keep.call(null,cljs.core.identity,(function (){var x__25632__auto__ = document;
return cljs.core._conj.call(null,(function (){var x__25632__auto____$1 = main__$1;
return cljs.core._conj.call(null,(function (){var x__25632__auto____$2 = hist_ctl;
return cljs.core._conj.call(null,(function (){var x__25632__auto____$3 = edn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto____$3);
})(),x__25632__auto____$2);
})(),x__25632__auto____$1);
})(),x__25632__auto__);
})());
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.call(null,children,card__$1);
} else {
return React.createElement("div",({"className": "com-rigsomelight-devcards-frameless"}),sablono.interpreter.interpret.call(null,children));
}
});
var base__33905__auto___34796 = ({"getInitialState": (function (){
return ({"unique_id": cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-base-","devcards-base-",-1457268595,null)), "state_change_count": (0)});
}), "componentDidUpdate": (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(new cljs.core.Keyword(null,"static-state","static-state",-1049492012).cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,initial_data))?cljs.core.deref.call(null,initial_data):initial_data);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,atom),data)){
return cljs.core.reset_BANG_.call(null,atom,data);
} else {
return null;
}
} else {
return null;
}
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return this$.setState((function (){var or__24798__auto__ = (function (){var and__24786__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__24786__auto__)){
return this$.state;
} else {
return and__24786__auto__;
}
})();
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return ({"data_atom": devcards.core.wrangle_inital_data.call(null,this$)});
}
})());
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_((function (){var and__24786__auto__ = data_atom;
if(cljs.core.truth_(and__24786__auto__)){
return id;
} else {
return and__24786__auto__;
}
})())){
return cljs.core.remove_watch.call(null,data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(temp__4657__auto__)){
var data_atom = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_(temp__4657__auto____$1)){
var id = temp__4657__auto____$1;
return cljs.core.add_watch.call(null,data_atom,id,((function (id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.setState(({"state_change_count": (devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)) + (1))}));
});})(id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$))
);
} else {
return null;
}
} else {
return null;
}
}):(function (){
return null;
})), "render": (function (){
var this$ = this;
var data_atom = devcards.core.get_data_atom.call(null,this$);
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var change_count = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612));
var main = devcards.core.default_derive_main.call(null,this$,card,data_atom,change_count);
return devcards.core.render_all_card_elements.call(null,main,data_atom,card);
})});
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__33905__auto___34796);
}

var seq__34792_34797 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__34793_34798 = null;
var count__34794_34799 = (0);
var i__34795_34800 = (0);
while(true){
if((i__34795_34800 < count__34794_34799)){
var property__33906__auto___34801 = cljs.core._nth.call(null,chunk__34793_34798,i__34795_34800);
if(cljs.core.truth_((base__33905__auto___34796[property__33906__auto___34801]))){
(devcards.core.DevcardBase.prototype[property__33906__auto___34801] = (base__33905__auto___34796[property__33906__auto___34801]));
} else {
}

var G__34802 = seq__34792_34797;
var G__34803 = chunk__34793_34798;
var G__34804 = count__34794_34799;
var G__34805 = (i__34795_34800 + (1));
seq__34792_34797 = G__34802;
chunk__34793_34798 = G__34803;
count__34794_34799 = G__34804;
i__34795_34800 = G__34805;
continue;
} else {
var temp__4657__auto___34806 = cljs.core.seq.call(null,seq__34792_34797);
if(temp__4657__auto___34806){
var seq__34792_34807__$1 = temp__4657__auto___34806;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34792_34807__$1)){
var c__25609__auto___34808 = cljs.core.chunk_first.call(null,seq__34792_34807__$1);
var G__34809 = cljs.core.chunk_rest.call(null,seq__34792_34807__$1);
var G__34810 = c__25609__auto___34808;
var G__34811 = cljs.core.count.call(null,c__25609__auto___34808);
var G__34812 = (0);
seq__34792_34797 = G__34809;
chunk__34793_34798 = G__34810;
count__34794_34799 = G__34811;
i__34795_34800 = G__34812;
continue;
} else {
var property__33906__auto___34813 = cljs.core.first.call(null,seq__34792_34807__$1);
if(cljs.core.truth_((base__33905__auto___34796[property__33906__auto___34813]))){
(devcards.core.DevcardBase.prototype[property__33906__auto___34813] = (base__33905__auto___34796[property__33906__auto___34813]));
} else {
}

var G__34814 = cljs.core.next.call(null,seq__34792_34807__$1);
var G__34815 = null;
var G__34816 = (0);
var G__34817 = (0);
seq__34792_34797 = G__34814;
chunk__34793_34798 = G__34815;
count__34794_34799 = G__34816;
i__34795_34800 = G__34817;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(temp__4657__auto__)){
var node_fn = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto____$1)){
var node = temp__4657__auto____$1;
return node_fn.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),node);
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__33905__auto___34822 = ({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))].join('')});
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__24786__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__24786__auto__)){
return cljs.core.not_EQ_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),(prevP["node_fn"]));
} else {
return and__24786__auto__;
}
})())){
return devcards.core.render_into_dom.call(null,this$);
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return ReactDOM.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return devcards.core.render_into_dom.call(null,this$);
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return React.DOM.div(({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329))}),"Card has not mounted DOM node.");
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))});
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__33905__auto___34822);
}

var seq__34818_34823 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__34819_34824 = null;
var count__34820_34825 = (0);
var i__34821_34826 = (0);
while(true){
if((i__34821_34826 < count__34820_34825)){
var property__33906__auto___34827 = cljs.core._nth.call(null,chunk__34819_34824,i__34821_34826);
if(cljs.core.truth_((base__33905__auto___34822[property__33906__auto___34827]))){
(devcards.core.DomComponent.prototype[property__33906__auto___34827] = (base__33905__auto___34822[property__33906__auto___34827]));
} else {
}

var G__34828 = seq__34818_34823;
var G__34829 = chunk__34819_34824;
var G__34830 = count__34820_34825;
var G__34831 = (i__34821_34826 + (1));
seq__34818_34823 = G__34828;
chunk__34819_34824 = G__34829;
count__34820_34825 = G__34830;
i__34821_34826 = G__34831;
continue;
} else {
var temp__4657__auto___34832 = cljs.core.seq.call(null,seq__34818_34823);
if(temp__4657__auto___34832){
var seq__34818_34833__$1 = temp__4657__auto___34832;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34818_34833__$1)){
var c__25609__auto___34834 = cljs.core.chunk_first.call(null,seq__34818_34833__$1);
var G__34835 = cljs.core.chunk_rest.call(null,seq__34818_34833__$1);
var G__34836 = c__25609__auto___34834;
var G__34837 = cljs.core.count.call(null,c__25609__auto___34834);
var G__34838 = (0);
seq__34818_34823 = G__34835;
chunk__34819_34824 = G__34836;
count__34820_34825 = G__34837;
i__34821_34826 = G__34838;
continue;
} else {
var property__33906__auto___34839 = cljs.core.first.call(null,seq__34818_34833__$1);
if(cljs.core.truth_((base__33905__auto___34822[property__33906__auto___34839]))){
(devcards.core.DomComponent.prototype[property__33906__auto___34839] = (base__33905__auto___34822[property__33906__auto___34839]));
} else {
}

var G__34840 = cljs.core.next.call(null,seq__34818_34833__$1);
var G__34841 = null;
var G__34842 = (0);
var G__34843 = (0);
seq__34818_34823 = G__34840;
chunk__34819_34824 = G__34841;
count__34820_34825 = G__34842;
i__34821_34826 = G__34843;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__24798__auto__ = x === true;
if(or__24798__auto__){
return or__24798__auto__;
} else {
var or__24798__auto____$1 = x === false;
if(or__24798__auto____$1){
return or__24798__auto____$1;
} else {
var or__24798__auto____$2 = (x == null);
if(or__24798__auto____$2){
return or__24798__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__24798__auto__ = typeof x === 'string';
if(or__24798__auto__){
return or__24798__auto__;
} else {
var or__24798__auto____$1 = (x == null);
if(or__24798__auto____$1){
return or__24798__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__24798__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
var propagated_errors = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.call(null,((function (propagated_errors){
return (function (p1__34844_SHARP_){
return !(p1__34844_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__34853 = opts;
var map__34853__$1 = ((((!((map__34853 == null)))?((((map__34853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34853):map__34853);
var name = cljs.core.get.call(null,map__34853__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__34853__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__34853__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__34853__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.call(null,propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__24798__auto__ = cljs.core.map_QMARK_.call(null,options);
if(or__24798__auto__){
return or__24798__auto__;
} else {
var or__24798__auto____$1 = (options == null);
if(or__24798__auto____$1){
return or__24798__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__24798__auto__ = (initial_data == null);
if(or__24798__auto__){
return or__24798__auto__;
} else {
var or__24798__auto____$1 = cljs.core.vector_QMARK_.call(null,initial_data);
if(or__24798__auto____$1){
return or__24798__auto____$1;
} else {
var or__24798__auto____$2 = cljs.core.map_QMARK_.call(null,initial_data);
if(or__24798__auto____$2){
return or__24798__auto____$2;
} else {
var or__24798__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data));
if(or__24798__auto____$3){
return or__24798__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.mapv.call(null,((function (map__34853,map__34853__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__34845_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__34845_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__34853,map__34853__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",({"style": ({"color": "#a94442", "display": "flex", "margin": "0.5em 0px"})}),sablono.interpreter.interpret.call(null,React.createElement("code",({"style": ({"flex": "1 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e)):null)))),React.createElement("span",({"style": ({"flex": "3 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",({"style": ({"flex": "1 100px"})})," Received: ",(function (){var attrs34861 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs34861))?sablono.interpreter.attributes.call(null,attrs34861):null),((cljs.core.map_QMARK_.call(null,attrs34861))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34861)], null)));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",({"className": "com-rigsomelight-devcards-card-base-no-pad"}),(function (){var attrs34865 = [cljs.core.str((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34865))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs34865)):({"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"})),((cljs.core.map_QMARK_.call(null,attrs34865))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34865)], null)));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs34866 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34866))?sablono.interpreter.attributes.call(null,attrs34866):null),((cljs.core.map_QMARK_.call(null,attrs34866))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34866)], null)));
})(),sablono.interpreter.interpret.call(null,((cljs.core.map_QMARK_.call(null,opts))?(function (){var attrs34867 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34867))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs34867)):({"className": "com-rigsomelight-devcards-padding-top-border"})),((cljs.core.map_QMARK_.call(null,attrs34867))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34867)], null)));
})():null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__34868_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__34868_SHARP_);
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options.call(null,card_options);
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return devcards.core.render_errors.call(null,card_options,errors);
} else {
return React.createElement(devcards.core.DevcardBase,({"card": devcards.core.add_environment_defaults.call(null,card_options)}));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentiyOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25420__auto__,k__25421__auto__){
var self__ = this;
var this__25420__auto____$1 = this;
return cljs.core._lookup.call(null,this__25420__auto____$1,k__25421__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25422__auto__,k34870,else__25423__auto__){
var self__ = this;
var this__25422__auto____$1 = this;
var G__34872 = (((k34870 instanceof cljs.core.Keyword))?k34870.fqn:null);
switch (G__34872) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34870,else__25423__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25434__auto__,writer__25435__auto__,opts__25436__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
var pr_pair__25437__auto__ = ((function (this__25434__auto____$1){
return (function (keyval__25438__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25435__auto__,cljs.core.pr_writer,""," ","",opts__25436__auto__,keyval__25438__auto__);
});})(this__25434__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25435__auto__,pr_pair__25437__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__25436__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34869){
var self__ = this;
var G__34869__$1 = this;
return (new cljs.core.RecordIter((0),G__34869__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25418__auto__){
var self__ = this;
var this__25418__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25414__auto__){
var self__ = this;
var this__25414__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25424__auto__){
var self__ = this;
var this__25424__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25415__auto__){
var self__ = this;
var this__25415__auto____$1 = this;
var h__25233__auto__ = self__.__hash;
if(!((h__25233__auto__ == null))){
return h__25233__auto__;
} else {
var h__25233__auto____$1 = cljs.core.hash_imap.call(null,this__25415__auto____$1);
self__.__hash = h__25233__auto____$1;

return h__25233__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25416__auto__,other__25417__auto__){
var self__ = this;
var this__25416__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24786__auto__ = other__25417__auto__;
if(cljs.core.truth_(and__24786__auto__)){
var and__24786__auto____$1 = (this__25416__auto____$1.constructor === other__25417__auto__.constructor);
if(and__24786__auto____$1){
return cljs.core.equiv_map.call(null,this__25416__auto____$1,other__25417__auto__);
} else {
return and__24786__auto____$1;
}
} else {
return and__24786__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25429__auto__,k__25430__auto__){
var self__ = this;
var this__25429__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__25430__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25429__auto____$1),self__.__meta),k__25430__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25430__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25427__auto__,k__25428__auto__,G__34869){
var self__ = this;
var this__25427__auto____$1 = this;
var pred__34873 = cljs.core.keyword_identical_QMARK_;
var expr__34874 = k__25428__auto__;
if(cljs.core.truth_(pred__34873.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__34874))){
return (new devcards.core.IdentiyOptions(G__34869,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25428__auto__,G__34869),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25432__auto__){
var self__ = this;
var this__25432__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25419__auto__,G__34869){
var self__ = this;
var this__25419__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__34869,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25425__auto__,entry__25426__auto__){
var self__ = this;
var this__25425__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25426__auto__)){
return cljs.core._assoc.call(null,this__25425__auto____$1,cljs.core._nth.call(null,entry__25426__auto__,(0)),cljs.core._nth.call(null,entry__25426__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25425__auto____$1,entry__25426__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__25454__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__34871){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__34871),null,cljs.core.dissoc.call(null,G__34871,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__34877){
var map__34880 = p__34877;
var map__34880__$1 = ((((!((map__34880 == null)))?((((map__34880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34880):map__34880);
var devcard_opts = map__34880__$1;
var options = cljs.core.get.call(null,map__34880__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__34880,map__34880__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__34880,map__34880__$1,devcard_opts,options))
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),main_obj,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),true], null),devcards.core.assert_options_map.call(null,options)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25420__auto__,k__25421__auto__){
var self__ = this;
var this__25420__auto____$1 = this;
return cljs.core._lookup.call(null,this__25420__auto____$1,k__25421__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25422__auto__,k34883,else__25423__auto__){
var self__ = this;
var this__25422__auto____$1 = this;
var G__34885 = (((k34883 instanceof cljs.core.Keyword))?k34883.fqn:null);
switch (G__34885) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34883,else__25423__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25434__auto__,writer__25435__auto__,opts__25436__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
var pr_pair__25437__auto__ = ((function (this__25434__auto____$1){
return (function (keyval__25438__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25435__auto__,cljs.core.pr_writer,""," ","",opts__25436__auto__,keyval__25438__auto__);
});})(this__25434__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25435__auto__,pr_pair__25437__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__25436__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34882){
var self__ = this;
var G__34882__$1 = this;
return (new cljs.core.RecordIter((0),G__34882__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25418__auto__){
var self__ = this;
var this__25418__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25414__auto__){
var self__ = this;
var this__25414__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25424__auto__){
var self__ = this;
var this__25424__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25415__auto__){
var self__ = this;
var this__25415__auto____$1 = this;
var h__25233__auto__ = self__.__hash;
if(!((h__25233__auto__ == null))){
return h__25233__auto__;
} else {
var h__25233__auto____$1 = cljs.core.hash_imap.call(null,this__25415__auto____$1);
self__.__hash = h__25233__auto____$1;

return h__25233__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25416__auto__,other__25417__auto__){
var self__ = this;
var this__25416__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24786__auto__ = other__25417__auto__;
if(cljs.core.truth_(and__24786__auto__)){
var and__24786__auto____$1 = (this__25416__auto____$1.constructor === other__25417__auto__.constructor);
if(and__24786__auto____$1){
return cljs.core.equiv_map.call(null,this__25416__auto____$1,other__25417__auto__);
} else {
return and__24786__auto____$1;
}
} else {
return and__24786__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25429__auto__,k__25430__auto__){
var self__ = this;
var this__25429__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__25430__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25429__auto____$1),self__.__meta),k__25430__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25430__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25427__auto__,k__25428__auto__,G__34882){
var self__ = this;
var this__25427__auto____$1 = this;
var pred__34886 = cljs.core.keyword_identical_QMARK_;
var expr__34887 = k__25428__auto__;
if(cljs.core.truth_(pred__34886.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__34887))){
return (new devcards.core.AtomLikeOptions(G__34882,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25428__auto__,G__34882),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25432__auto__){
var self__ = this;
var this__25432__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25419__auto__,G__34882){
var self__ = this;
var this__25419__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__34882,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25425__auto__,entry__25426__auto__){
var self__ = this;
var this__25425__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25426__auto__)){
return cljs.core._assoc.call(null,this__25425__auto____$1,cljs.core._nth.call(null,entry__25426__auto__,(0)),cljs.core._nth.call(null,entry__25426__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25425__auto____$1,entry__25426__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__25454__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__34884){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__34884),null,cljs.core.dissoc.call(null,G__34884,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.util.edn_renderer.html_edn.call(null,((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (main_obj.cljs$core$IDeref$))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj)))?cljs.core.deref.call(null,main_obj):main_obj)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25420__auto__,k__25421__auto__){
var self__ = this;
var this__25420__auto____$1 = this;
return cljs.core._lookup.call(null,this__25420__auto____$1,k__25421__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25422__auto__,k34893,else__25423__auto__){
var self__ = this;
var this__25422__auto____$1 = this;
var G__34895 = (((k34893 instanceof cljs.core.Keyword))?k34893.fqn:null);
switch (G__34895) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34893,else__25423__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25434__auto__,writer__25435__auto__,opts__25436__auto__){
var self__ = this;
var this__25434__auto____$1 = this;
var pr_pair__25437__auto__ = ((function (this__25434__auto____$1){
return (function (keyval__25438__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25435__auto__,cljs.core.pr_writer,""," ","",opts__25436__auto__,keyval__25438__auto__);
});})(this__25434__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25435__auto__,pr_pair__25437__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__25436__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34892){
var self__ = this;
var G__34892__$1 = this;
return (new cljs.core.RecordIter((0),G__34892__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25418__auto__){
var self__ = this;
var this__25418__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25414__auto__){
var self__ = this;
var this__25414__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25424__auto__){
var self__ = this;
var this__25424__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25415__auto__){
var self__ = this;
var this__25415__auto____$1 = this;
var h__25233__auto__ = self__.__hash;
if(!((h__25233__auto__ == null))){
return h__25233__auto__;
} else {
var h__25233__auto____$1 = cljs.core.hash_imap.call(null,this__25415__auto____$1);
self__.__hash = h__25233__auto____$1;

return h__25233__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25416__auto__,other__25417__auto__){
var self__ = this;
var this__25416__auto____$1 = this;
if(cljs.core.truth_((function (){var and__24786__auto__ = other__25417__auto__;
if(cljs.core.truth_(and__24786__auto__)){
var and__24786__auto____$1 = (this__25416__auto____$1.constructor === other__25417__auto__.constructor);
if(and__24786__auto____$1){
return cljs.core.equiv_map.call(null,this__25416__auto____$1,other__25417__auto__);
} else {
return and__24786__auto____$1;
}
} else {
return and__24786__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25429__auto__,k__25430__auto__){
var self__ = this;
var this__25429__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__25430__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25429__auto____$1),self__.__meta),k__25430__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25430__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25427__auto__,k__25428__auto__,G__34892){
var self__ = this;
var this__25427__auto____$1 = this;
var pred__34896 = cljs.core.keyword_identical_QMARK_;
var expr__34897 = k__25428__auto__;
if(cljs.core.truth_(pred__34896.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__34897))){
return (new devcards.core.EdnLikeOptions(G__34892,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25428__auto__,G__34892),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25432__auto__){
var self__ = this;
var this__25432__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25419__auto__,G__34892){
var self__ = this;
var this__25419__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__34892,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25425__auto__,entry__25426__auto__){
var self__ = this;
var this__25425__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25426__auto__)){
return cljs.core._assoc.call(null,this__25425__auto____$1,cljs.core._nth.call(null,entry__25426__auto__,(0)),cljs.core._nth.call(null,entry__25426__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25425__auto____$1,entry__25426__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__25454__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__25454__auto__,writer__25455__auto__){
return cljs.core._write.call(null,writer__25455__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__34894){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__34894),null,cljs.core.dissoc.call(null,G__34894,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__24786__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x));
if(and__24786__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
} else {
return and__24786__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || (main_obj.devcards$core$IDevcardOptions$))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_.call(null,main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__34911 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__34911 == null))){
if((false) || (G__34911.devcards$core$IDevcard$)){
return true;
} else {
if((!G__34911.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__34911);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__34911);
}
})()){
return devcards.core._devcard.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors.call(null,devcards.core._devcard_options.call(null,devcards.core.coerce_to_devcards_options.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
return React.createElement(devcards.core.DomComponent,({"node_fn": node_fn, "data_atom": data_atom}));
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.call(null,devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742)], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__34914 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__34914__$1 = ((((!((map__34914 == null)))?((((map__34914.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34914.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34914):map__34914);
var history = cljs.core.get.call(null,map__34914__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__34914__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return ((pointer + (1)) < cljs.core.count.call(null,history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__34918 = cljs.core.deref.call(null,history_atom);
var map__34918__$1 = ((((!((map__34918 == null)))?((((map__34918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34918):map__34918);
var history = cljs.core.get.call(null,map__34918__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__34918__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_back.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer + (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer + (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__34922 = cljs.core.deref.call(null,history_atom);
var map__34922__$1 = ((((!((map__34922 == null)))?((((map__34922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34922):map__34922);
var history = cljs.core.get.call(null,map__34922__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__34922__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer - (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer - (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__34926 = cljs.core.deref.call(null,history_atom);
var map__34926__$1 = ((((!((map__34926 == null)))?((((map__34926.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34926.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34926):map__34926);
var history = cljs.core.get.call(null,map__34926__$1,new cljs.core.Keyword(null,"history","history",-247395220));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.first.call(null,history));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = React.createClass(({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-history-runner-","devcards-history-runner-",-1709703043,null)))].join(''), "history_atom": cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], null))});
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(function (){var x__25632__auto__ = cljs.core.deref.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto__);
})());
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
if(cljs.core.truth_((function (){var and__24786__auto__ = data_atom;
if(cljs.core.truth_(and__24786__auto__)){
return id;
} else {
return and__24786__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_.call(null,this$))){
return cljs.core.swap_BANG_.call(null,history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__34928){
var map__34929 = p__34928;
var map__34929__$1 = ((((!((map__34929 == null)))?((((map__34929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34929):map__34929);
var ha = map__34929__$1;
var pointer = cljs.core.get.call(null,map__34929__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__34929__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__34929__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
} else {
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var abridged_hist = cljs.core.drop.call(null,pointer,history);
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,abridged_hist))){
return cljs.core.cons.call(null,n,abridged_hist);
} else {
return abridged_hist;
}
})(),new cljs.core.Keyword(null,"pointer","pointer",85071187),(0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var hist = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,history_atom));
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,hist))){
return cljs.core.cons.call(null,n,hist);
} else {
return hist;
}
})(),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__24798__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())){
return React.createElement("div",({"style": ({"display": (cljs.core.truth_((function (){var or__24798__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())?"block":"none")}), "className": "com-rigsomelight-devcards-history-control-bar"}),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_back.call(null,this$))?"visible":"hidden")}), "href": "#", "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-left"}),"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
return cljs.core.reset_BANG_.call(null,data_atom,cljs.core.deref.call(null,data_atom));
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-stop"}),"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-right"}),"")));
})(),(function (){var listener = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": listener, "onTouchEnd": listener}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-small-arrow"})),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-small-arrow"})),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-block"}))));
})());
} else {
return null;
}
})}));
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
return React.createElement(devcards.core.HistoryComponent,({"data_atom": data_atom, "key": "devcards-history-control-bar"}));
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206)], null),cljs.core.conj,cljs.core.merge.call(null,cljs.core.select_keys.call(null,cljs.test.get_current_env.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)),m));
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463)], null),(function (m){
devcards.core.collect_test.call(null,m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_34944 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_34944;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__25723__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25724__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25725__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25726__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25727__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25727__auto__,method_table__25723__auto__,prefer_table__25724__auto__,method_cache__25725__auto__,cached_hierarchy__25726__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs34945 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34945))?sablono.interpreter.attributes.call(null,attrs34945):null),((cljs.core.map_QMARK_.call(null,attrs34945))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34945)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__34946,body){
var map__34950 = p__34946;
var map__34950__$1 = ((((!((map__34950 == null)))?((((map__34950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34950):map__34950);
var message = cljs.core.get.call(null,map__34950__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs34952 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs34952))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs34952)):({"className": "com-rigsomelight-devcards-test-message"})),((cljs.core.map_QMARK_.call(null,attrs34952))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34952)], null)));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__34953){
var map__34961 = p__34953;
var map__34961__$1 = ((((!((map__34961 == null)))?((((map__34961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34961):map__34961);
var m = map__34961__$1;
var expected = cljs.core.get.call(null,map__34961__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__34961__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var type = cljs.core.get.call(null,map__34961__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return devcards.core.display_message.call(null,m,(function (){var attrs34963 = React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"}));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34963))?sablono.interpreter.attributes.call(null,attrs34963):null),((cljs.core.map_QMARK_.call(null,attrs34963))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34963),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null))], null)));
})());
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs34970 = [cljs.core.str(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs34970))?sablono.interpreter.attributes.call(null,attrs34970):null),((cljs.core.map_QMARK_.call(null,attrs34970))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34970)], null)));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs34971 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34971))?sablono.interpreter.attributes.call(null,attrs34971):null),((cljs.core.map_QMARK_.call(null,attrs34971))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34971)], null)));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__34972){
var map__34973 = p__34972;
var map__34973__$1 = ((((!((map__34973 == null)))?((((map__34973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34973):map__34973);
var testing_contexts = cljs.core.get.call(null,map__34973__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs34975 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map_indexed.call(null,((function (map__34973,map__34973__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__34973,map__34973__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),(function (){var x__25632__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(-1)], null),cljs.core.first.call(null,testing_contexts)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto__);
})()));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34975))?sablono.interpreter.attributes.call(null,attrs34975):null),((cljs.core.map_QMARK_.call(null,attrs34975))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34975)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.call(null,t,i),new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs34984 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__34985,p__34986){
var map__34987 = p__34985;
var map__34987__$1 = ((((!((map__34987 == null)))?((((map__34987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34987):map__34987);
var last_context = cljs.core.get.call(null,map__34987__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__34987__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
var vec__34988 = p__34986;
var i = cljs.core.nth.call(null,vec__34988,(0),null);
var t = cljs.core.nth.call(null,vec__34988,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = (function (){var x__25632__auto__ = devcards.core.test_renderer.call(null,t,i);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25632__auto__);
})();
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null))),i),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.reverse.call(null,tests))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs34984))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs34984)):({"className": "com-rigsomelight-devcards-test-card"})),((cljs.core.map_QMARK_.call(null,attrs34984))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs34984)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__35004){
var map__35005 = p__35004;
var map__35005__$1 = ((((!((map__35005 == null)))?((((map__35005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35005):map__35005);
var type = cljs.core.get.call(null,map__35005__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__35003 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__35003__$1 = ((((!((map__35003 == null)))?((((map__35003.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35003.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35003):map__35003);
var fail = cljs.core.get.call(null,map__35003__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__35003__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__35003__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"}),React.createElement("div",({"className": "com-rigsomelight-devcards-panel-heading"}),React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__35003,map__35003__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__35003,map__35003__$1,fail,pass,error,error__$1))
)}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(path)?[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join(''):null))),React.createElement("button",({"style": ({"float": "right", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__35003,map__35003__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": cljs.core.identity}));
});})(error_QMARK_,tests,some_tests,total_tests,map__35003,map__35003__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,total_tests)),sablono.interpreter.interpret.call(null,((((fail + error__$1) === (0)))?null:React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__35003,map__35003__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__35003,map__35003__$1,fail,pass,error,error__$1){
return (function (p__35008){
var map__35009 = p__35008;
var map__35009__$1 = ((((!((map__35009 == null)))?((((map__35009.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35009.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35009):map__35009);
var type = cljs.core.get.call(null,map__35009__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__35003,map__35003__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__35003,map__35003__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,[cljs.core.str((fail + error__$1))].join(''))))),sablono.interpreter.interpret.call(null,((((pass == null)) || ((pass === (0))))?null:React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__35003,map__35003__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__35003,map__35003__$1,fail,pass,error,error__$1){
return (function (p__35011){
var map__35012 = p__35011;
var map__35012__$1 = ((((!((map__35012 == null)))?((((map__35012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35012):map__35012);
var type = cljs.core.get.call(null,map__35012__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__35003,map__35003__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__35003,map__35003__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,pass))))),React.createElement("div",({"className": devcards.system.devcards_rendered_card_class}),sablono.interpreter.interpret.call(null,devcards.core.layout_tests.call(null,cljs.core.filter.call(null,(function (){var or__24798__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return cljs.core.identity;
}
})(),tests)))));
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.call(null);
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.call(null);
var test_env = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
cljs.test.set_env_BANG_.call(null,test_env);

var tests = cljs.core.concat.call(null,test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.call(null,out,cljs.test.get_current_env.call(null));

return cljs.core.async.close_BANG_.call(null,out);
});})(out,test_env))
], null));
cljs.core.prn.call(null,"Running tests!!");

cljs.test.run_block.call(null,tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__30167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30167__auto__){
return (function (){
var f__30168__auto__ = (function (){var switch__30055__auto__ = ((function (c__30167__auto__){
return (function (state_35102){
var state_val_35103 = (state_35102[(1)]);
if((state_val_35103 === (7))){
var state_35102__$1 = state_35102;
var statearr_35104_35153 = state_35102__$1;
(statearr_35104_35153[(2)] = false);

(statearr_35104_35153[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (20))){
var inst_35041 = (state_35102[(7)]);
var inst_35060 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35041);
var state_35102__$1 = state_35102;
var statearr_35105_35154 = state_35102__$1;
(statearr_35105_35154[(2)] = inst_35060);

(statearr_35105_35154[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (27))){
var inst_35077 = (state_35102[(8)]);
var inst_35065 = (state_35102[(9)]);
var inst_35081 = inst_35065.call(null,inst_35077);
var state_35102__$1 = state_35102;
var statearr_35106_35155 = state_35102__$1;
(statearr_35106_35155[(2)] = inst_35081);

(statearr_35106_35155[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (1))){
var state_35102__$1 = state_35102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35102__$1,(2),devcards.core.test_channel);
} else {
if((state_val_35103 === (24))){
var state_35102__$1 = state_35102;
var statearr_35107_35156 = state_35102__$1;
(statearr_35107_35156[(2)] = null);

(statearr_35107_35156[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (4))){
var state_35102__$1 = state_35102;
var statearr_35108_35157 = state_35102__$1;
(statearr_35108_35157[(2)] = false);

(statearr_35108_35157[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (15))){
var state_35102__$1 = state_35102;
var statearr_35109_35158 = state_35102__$1;
(statearr_35109_35158[(2)] = false);

(statearr_35109_35158[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (21))){
var inst_35041 = (state_35102[(7)]);
var state_35102__$1 = state_35102;
var statearr_35110_35159 = state_35102__$1;
(statearr_35110_35159[(2)] = inst_35041);

(statearr_35110_35159[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (13))){
var inst_35100 = (state_35102[(2)]);
var state_35102__$1 = state_35102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35102__$1,inst_35100);
} else {
if((state_val_35103 === (22))){
var inst_35064 = (state_35102[(10)]);
var inst_35063 = (state_35102[(2)]);
var inst_35064__$1 = cljs.core.get.call(null,inst_35063,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_35065 = cljs.core.get.call(null,inst_35063,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_35102__$1 = (function (){var statearr_35111 = state_35102;
(statearr_35111[(10)] = inst_35064__$1);

(statearr_35111[(9)] = inst_35065);

return statearr_35111;
})();
if(cljs.core.truth_(inst_35064__$1)){
var statearr_35112_35160 = state_35102__$1;
(statearr_35112_35160[(1)] = (23));

} else {
var statearr_35113_35161 = state_35102__$1;
(statearr_35113_35161[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (29))){
var inst_35091 = (state_35102[(2)]);
var inst_35092 = cljs.test.clear_env_BANG_.call(null);
var state_35102__$1 = (function (){var statearr_35114 = state_35102;
(statearr_35114[(11)] = inst_35092);

(statearr_35114[(12)] = inst_35091);

return statearr_35114;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35102__$1,(30),devcards.core.test_channel);
} else {
if((state_val_35103 === (6))){
var state_35102__$1 = state_35102;
var statearr_35115_35162 = state_35102__$1;
(statearr_35115_35162[(2)] = true);

(statearr_35115_35162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (28))){
var inst_35065 = (state_35102[(9)]);
var inst_35083 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_35084 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_35085 = cljs.core.PersistentHashMap.fromArrays(inst_35083,inst_35084);
var inst_35086 = devcards.core.collect_test.call(null,inst_35085);
var inst_35087 = cljs.test.get_current_env.call(null);
var inst_35088 = cljs.core.assoc.call(null,inst_35087,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_35089 = inst_35065.call(null,inst_35088);
var state_35102__$1 = (function (){var statearr_35116 = state_35102;
(statearr_35116[(13)] = inst_35086);

return statearr_35116;
})();
var statearr_35117_35163 = state_35102__$1;
(statearr_35117_35163[(2)] = inst_35089);

(statearr_35117_35163[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (25))){
var inst_35098 = (state_35102[(2)]);
var state_35102__$1 = state_35102;
var statearr_35118_35164 = state_35102__$1;
(statearr_35118_35164[(2)] = inst_35098);

(statearr_35118_35164[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (17))){
var state_35102__$1 = state_35102;
var statearr_35119_35165 = state_35102__$1;
(statearr_35119_35165[(2)] = true);

(statearr_35119_35165[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (3))){
var inst_35018 = (state_35102[(14)]);
var inst_35023 = inst_35018.cljs$lang$protocol_mask$partition0$;
var inst_35024 = (inst_35023 & (64));
var inst_35025 = inst_35018.cljs$core$ISeq$;
var inst_35026 = (inst_35024) || (inst_35025);
var state_35102__$1 = state_35102;
if(cljs.core.truth_(inst_35026)){
var statearr_35120_35166 = state_35102__$1;
(statearr_35120_35166[(1)] = (6));

} else {
var statearr_35121_35167 = state_35102__$1;
(statearr_35121_35167[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (12))){
var inst_35041 = (state_35102[(7)]);
var inst_35045 = (inst_35041 == null);
var inst_35046 = cljs.core.not.call(null,inst_35045);
var state_35102__$1 = state_35102;
if(inst_35046){
var statearr_35122_35168 = state_35102__$1;
(statearr_35122_35168[(1)] = (14));

} else {
var statearr_35123_35169 = state_35102__$1;
(statearr_35123_35169[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (2))){
var inst_35018 = (state_35102[(14)]);
var inst_35018__$1 = (state_35102[(2)]);
var inst_35020 = (inst_35018__$1 == null);
var inst_35021 = cljs.core.not.call(null,inst_35020);
var state_35102__$1 = (function (){var statearr_35124 = state_35102;
(statearr_35124[(14)] = inst_35018__$1);

return statearr_35124;
})();
if(inst_35021){
var statearr_35125_35170 = state_35102__$1;
(statearr_35125_35170[(1)] = (3));

} else {
var statearr_35126_35171 = state_35102__$1;
(statearr_35126_35171[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (23))){
var inst_35070 = (state_35102[(15)]);
var inst_35064 = (state_35102[(10)]);
var inst_35070__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_35071 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35072 = devcards.core.run_card_tests.call(null,inst_35064);
var inst_35073 = [inst_35072,inst_35070__$1];
var inst_35074 = (new cljs.core.PersistentVector(null,2,(5),inst_35071,inst_35073,null));
var state_35102__$1 = (function (){var statearr_35127 = state_35102;
(statearr_35127[(15)] = inst_35070__$1);

return statearr_35127;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35102__$1,(26),inst_35074);
} else {
if((state_val_35103 === (19))){
var inst_35055 = (state_35102[(2)]);
var state_35102__$1 = state_35102;
var statearr_35128_35172 = state_35102__$1;
(statearr_35128_35172[(2)] = inst_35055);

(statearr_35128_35172[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (11))){
var inst_35018 = (state_35102[(14)]);
var inst_35038 = (state_35102[(2)]);
var inst_35039 = cljs.core.get.call(null,inst_35038,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_35040 = cljs.core.get.call(null,inst_35038,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_35041 = inst_35018;
var state_35102__$1 = (function (){var statearr_35129 = state_35102;
(statearr_35129[(16)] = inst_35039);

(statearr_35129[(17)] = inst_35040);

(statearr_35129[(7)] = inst_35041);

return statearr_35129;
})();
var statearr_35130_35173 = state_35102__$1;
(statearr_35130_35173[(2)] = null);

(statearr_35130_35173[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (9))){
var inst_35018 = (state_35102[(14)]);
var inst_35035 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35018);
var state_35102__$1 = state_35102;
var statearr_35131_35174 = state_35102__$1;
(statearr_35131_35174[(2)] = inst_35035);

(statearr_35131_35174[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (5))){
var inst_35033 = (state_35102[(2)]);
var state_35102__$1 = state_35102;
if(cljs.core.truth_(inst_35033)){
var statearr_35132_35175 = state_35102__$1;
(statearr_35132_35175[(1)] = (9));

} else {
var statearr_35133_35176 = state_35102__$1;
(statearr_35133_35176[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (14))){
var inst_35041 = (state_35102[(7)]);
var inst_35048 = inst_35041.cljs$lang$protocol_mask$partition0$;
var inst_35049 = (inst_35048 & (64));
var inst_35050 = inst_35041.cljs$core$ISeq$;
var inst_35051 = (inst_35049) || (inst_35050);
var state_35102__$1 = state_35102;
if(cljs.core.truth_(inst_35051)){
var statearr_35134_35177 = state_35102__$1;
(statearr_35134_35177[(1)] = (17));

} else {
var statearr_35135_35178 = state_35102__$1;
(statearr_35135_35178[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (26))){
var inst_35070 = (state_35102[(15)]);
var inst_35076 = (state_35102[(2)]);
var inst_35077 = cljs.core.nth.call(null,inst_35076,(0),null);
var inst_35078 = cljs.core.nth.call(null,inst_35076,(1),null);
var inst_35079 = cljs.core.not_EQ_.call(null,inst_35078,inst_35070);
var state_35102__$1 = (function (){var statearr_35136 = state_35102;
(statearr_35136[(8)] = inst_35077);

return statearr_35136;
})();
if(inst_35079){
var statearr_35137_35179 = state_35102__$1;
(statearr_35137_35179[(1)] = (27));

} else {
var statearr_35138_35180 = state_35102__$1;
(statearr_35138_35180[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (16))){
var inst_35058 = (state_35102[(2)]);
var state_35102__$1 = state_35102;
if(cljs.core.truth_(inst_35058)){
var statearr_35139_35181 = state_35102__$1;
(statearr_35139_35181[(1)] = (20));

} else {
var statearr_35140_35182 = state_35102__$1;
(statearr_35140_35182[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (30))){
var inst_35094 = (state_35102[(2)]);
var inst_35041 = inst_35094;
var state_35102__$1 = (function (){var statearr_35141 = state_35102;
(statearr_35141[(7)] = inst_35041);

return statearr_35141;
})();
var statearr_35142_35183 = state_35102__$1;
(statearr_35142_35183[(2)] = null);

(statearr_35142_35183[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (10))){
var inst_35018 = (state_35102[(14)]);
var state_35102__$1 = state_35102;
var statearr_35143_35184 = state_35102__$1;
(statearr_35143_35184[(2)] = inst_35018);

(statearr_35143_35184[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (18))){
var state_35102__$1 = state_35102;
var statearr_35144_35185 = state_35102__$1;
(statearr_35144_35185[(2)] = false);

(statearr_35144_35185[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35103 === (8))){
var inst_35030 = (state_35102[(2)]);
var state_35102__$1 = state_35102;
var statearr_35145_35186 = state_35102__$1;
(statearr_35145_35186[(2)] = inst_35030);

(statearr_35145_35186[(1)] = (5));


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
});})(c__30167__auto__))
;
return ((function (switch__30055__auto__,c__30167__auto__){
return (function() {
var devcards$core$state_machine__30056__auto__ = null;
var devcards$core$state_machine__30056__auto____0 = (function (){
var statearr_35149 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35149[(0)] = devcards$core$state_machine__30056__auto__);

(statearr_35149[(1)] = (1));

return statearr_35149;
});
var devcards$core$state_machine__30056__auto____1 = (function (state_35102){
while(true){
var ret_value__30057__auto__ = (function (){try{while(true){
var result__30058__auto__ = switch__30055__auto__.call(null,state_35102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30058__auto__;
}
break;
}
}catch (e35150){if((e35150 instanceof Object)){
var ex__30059__auto__ = e35150;
var statearr_35151_35187 = state_35102;
(statearr_35151_35187[(5)] = ex__30059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35188 = state_35102;
state_35102 = G__35188;
continue;
} else {
return ret_value__30057__auto__;
}
break;
}
});
devcards$core$state_machine__30056__auto__ = function(state_35102){
switch(arguments.length){
case 0:
return devcards$core$state_machine__30056__auto____0.call(this);
case 1:
return devcards$core$state_machine__30056__auto____1.call(this,state_35102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__30056__auto____0;
devcards$core$state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__30056__auto____1;
return devcards$core$state_machine__30056__auto__;
})()
;})(switch__30055__auto__,c__30167__auto__))
})();
var state__30169__auto__ = (function (){var statearr_35152 = f__30168__auto__.call(null);
(statearr_35152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30167__auto__);

return statearr_35152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30169__auto__);
});})(c__30167__auto__))
);

return c__30167__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState(({"test_results": results}));
})], null));
});
var base__33905__auto___35193 = ({"componentWillMount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805));
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__4657__auto__ = (next_props[cljs.core.name.call(null,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805))]);
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var test_summary = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"test_results","test_results",1062111317));
var path = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"path","path",-188191168));
return devcards.core.render_tests.call(null,this$,path,test_summary);
})});
if(typeof devcards.core.TestDevcard !== 'undefined'){
} else {
devcards.core.TestDevcard = React.createClass(base__33905__auto___35193);
}

var seq__35189_35194 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__35190_35195 = null;
var count__35191_35196 = (0);
var i__35192_35197 = (0);
while(true){
if((i__35192_35197 < count__35191_35196)){
var property__33906__auto___35198 = cljs.core._nth.call(null,chunk__35190_35195,i__35192_35197);
if(cljs.core.truth_((base__33905__auto___35193[property__33906__auto___35198]))){
(devcards.core.TestDevcard.prototype[property__33906__auto___35198] = (base__33905__auto___35193[property__33906__auto___35198]));
} else {
}

var G__35199 = seq__35189_35194;
var G__35200 = chunk__35190_35195;
var G__35201 = count__35191_35196;
var G__35202 = (i__35192_35197 + (1));
seq__35189_35194 = G__35199;
chunk__35190_35195 = G__35200;
count__35191_35196 = G__35201;
i__35192_35197 = G__35202;
continue;
} else {
var temp__4657__auto___35203 = cljs.core.seq.call(null,seq__35189_35194);
if(temp__4657__auto___35203){
var seq__35189_35204__$1 = temp__4657__auto___35203;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35189_35204__$1)){
var c__25609__auto___35205 = cljs.core.chunk_first.call(null,seq__35189_35204__$1);
var G__35206 = cljs.core.chunk_rest.call(null,seq__35189_35204__$1);
var G__35207 = c__25609__auto___35205;
var G__35208 = cljs.core.count.call(null,c__25609__auto___35205);
var G__35209 = (0);
seq__35189_35194 = G__35206;
chunk__35190_35195 = G__35207;
count__35191_35196 = G__35208;
i__35192_35197 = G__35209;
continue;
} else {
var property__33906__auto___35210 = cljs.core.first.call(null,seq__35189_35204__$1);
if(cljs.core.truth_((base__33905__auto___35193[property__33906__auto___35210]))){
(devcards.core.TestDevcard.prototype[property__33906__auto___35210] = (base__33905__auto___35193[property__33906__auto___35210]));
} else {
}

var G__35211 = cljs.core.next.call(null,seq__35189_35204__$1);
var G__35212 = null;
var G__35213 = (0);
var G__35214 = (0);
seq__35189_35194 = G__35211;
chunk__35190_35195 = G__35212;
count__35191_35196 = G__35213;
i__35192_35197 = G__35214;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__25880__auto__ = [];
var len__25873__auto___35219 = arguments.length;
var i__25874__auto___35220 = (0);
while(true){
if((i__25874__auto___35220 < len__25873__auto___35219)){
args__25880__auto__.push((arguments[i__25874__auto___35220]));

var G__35221 = (i__25874__auto___35220 + (1));
i__25874__auto___35220 = G__35221;
continue;
} else {
}
break;
}

var argseq__25881__auto__ = ((((0) < args__25880__auto__.length))?(new cljs.core.IndexedSeq(args__25880__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__25881__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core35216 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core35216 = (function (test_thunks,meta35217){
this.test_thunks = test_thunks;
this.meta35217 = meta35217;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core35216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35218,meta35217__$1){
var self__ = this;
var _35218__$1 = this;
return (new devcards.core.t_devcards$core35216(self__.test_thunks,meta35217__$1));
});

devcards.core.t_devcards$core35216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35218){
var self__ = this;
var _35218__$1 = this;
return self__.meta35217;
});

devcards.core.t_devcards$core35216.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core35216.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,({"test_thunks": self__.test_thunks, "path": path}));
});

devcards.core.t_devcards$core35216.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta35217","meta35217",512332896,null)], null);
});

devcards.core.t_devcards$core35216.cljs$lang$type = true;

devcards.core.t_devcards$core35216.cljs$lang$ctorStr = "devcards.core/t_devcards$core35216";

devcards.core.t_devcards$core35216.cljs$lang$ctorPrWriter = (function (this__25404__auto__,writer__25405__auto__,opt__25406__auto__){
return cljs.core._write.call(null,writer__25405__auto__,"devcards.core/t_devcards$core35216");
});

devcards.core.__GT_t_devcards$core35216 = (function devcards$core$__GT_t_devcards$core35216(test_thunks__$1,meta35217){
return (new devcards.core.t_devcards$core35216(test_thunks__$1,meta35217));
});

}

return (new devcards.core.t_devcards$core35216(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq35215){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35215));
});

devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.call(null,cljs.core.aget,goog.global,cljs.core.concat.call(null,clojure.string.split.call(null,cljs.core.name.call(null,munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state));
if(cljs.core.truth_(temp__4657__auto__)){
var cards = temp__4657__auto__;
var temp__4657__auto____$1 = cljs.core.get_in.call(null,cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,ns_symbol)], null));
if(cljs.core.truth_(temp__4657__auto____$1)){
var card = temp__4657__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_.call(null,devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter.call(null,cljs.core.name.call(null,ns_symbol)));
if(cljs.core.truth_(temp__4657__auto__)){
var base_card_options = temp__4657__auto__;
cljs.core.println.call(null,"Adding base card options!",cljs.core.prn_str.call(null,base_card_options));

return cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),((function (base_card_options,temp__4657__auto__){
return (function (opts){
return cljs.core.merge.call(null,opts,base_card_options);
});})(base_card_options,temp__4657__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str(React.renderToString((function (){var attrs35223 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs35223))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs35223)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_.call(null,attrs35223))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35223)], null)));
})())),cljs.core.str("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
return React.render((function (){var attrs35225 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs35225))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs35225)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_.call(null,attrs35225))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs35225)], null)));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__30167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30167__auto__){
return (function (){
var f__30168__auto__ = (function (){var switch__30055__auto__ = ((function (c__30167__auto__){
return (function (state_35255){
var state_val_35256 = (state_35255[(1)]);
if((state_val_35256 === (1))){
var inst_35246 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_35255__$1 = state_35255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35255__$1,(2),inst_35246);
} else {
if((state_val_35256 === (2))){
var inst_35248 = (state_35255[(2)]);
var inst_35249 = cljs.core.async.timeout.call(null,(100));
var state_35255__$1 = (function (){var statearr_35257 = state_35255;
(statearr_35257[(7)] = inst_35248);

return statearr_35257;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35255__$1,(3),inst_35249);
} else {
if((state_val_35256 === (3))){
var inst_35251 = (state_35255[(2)]);
var inst_35252 = (function (){return ((function (inst_35251,state_val_35256,c__30167__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_35251,state_val_35256,c__30167__auto__))
})();
var inst_35253 = setTimeout(inst_35252,(0));
var state_35255__$1 = (function (){var statearr_35258 = state_35255;
(statearr_35258[(8)] = inst_35251);

return statearr_35258;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35255__$1,inst_35253);
} else {
return null;
}
}
}
});})(c__30167__auto__))
;
return ((function (switch__30055__auto__,c__30167__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__30056__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__30056__auto____0 = (function (){
var statearr_35262 = [null,null,null,null,null,null,null,null,null];
(statearr_35262[(0)] = devcards$core$mount_namespace_$_state_machine__30056__auto__);

(statearr_35262[(1)] = (1));

return statearr_35262;
});
var devcards$core$mount_namespace_$_state_machine__30056__auto____1 = (function (state_35255){
while(true){
var ret_value__30057__auto__ = (function (){try{while(true){
var result__30058__auto__ = switch__30055__auto__.call(null,state_35255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30058__auto__;
}
break;
}
}catch (e35263){if((e35263 instanceof Object)){
var ex__30059__auto__ = e35263;
var statearr_35264_35266 = state_35255;
(statearr_35264_35266[(5)] = ex__30059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35267 = state_35255;
state_35255 = G__35267;
continue;
} else {
return ret_value__30057__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__30056__auto__ = function(state_35255){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__30056__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__30056__auto____1.call(this,state_35255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__30056__auto____0;
devcards$core$mount_namespace_$_state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__30056__auto____1;
return devcards$core$mount_namespace_$_state_machine__30056__auto__;
})()
;})(switch__30055__auto__,c__30167__auto__))
})();
var state__30169__auto__ = (function (){var statearr_35265 = f__30168__auto__.call(null);
(statearr_35265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30167__auto__);

return statearr_35265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30169__auto__);
});})(c__30167__auto__))
);

return c__30167__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=core.js.map?rel=1481381472516