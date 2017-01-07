// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24798__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24798__auto__){
return or__24798__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24798__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__41717_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__41717_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__41722 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__41723 = null;
var count__41724 = (0);
var i__41725 = (0);
while(true){
if((i__41725 < count__41724)){
var n = cljs.core._nth.call(null,chunk__41723,i__41725);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__41726 = seq__41722;
var G__41727 = chunk__41723;
var G__41728 = count__41724;
var G__41729 = (i__41725 + (1));
seq__41722 = G__41726;
chunk__41723 = G__41727;
count__41724 = G__41728;
i__41725 = G__41729;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41722);
if(temp__4657__auto__){
var seq__41722__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41722__$1)){
var c__25609__auto__ = cljs.core.chunk_first.call(null,seq__41722__$1);
var G__41730 = cljs.core.chunk_rest.call(null,seq__41722__$1);
var G__41731 = c__25609__auto__;
var G__41732 = cljs.core.count.call(null,c__25609__auto__);
var G__41733 = (0);
seq__41722 = G__41730;
chunk__41723 = G__41731;
count__41724 = G__41732;
i__41725 = G__41733;
continue;
} else {
var n = cljs.core.first.call(null,seq__41722__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__41734 = cljs.core.next.call(null,seq__41722__$1);
var G__41735 = null;
var G__41736 = (0);
var G__41737 = (0);
seq__41722 = G__41734;
chunk__41723 = G__41735;
count__41724 = G__41736;
i__41725 = G__41737;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__41788_41799 = cljs.core.seq.call(null,deps);
var chunk__41789_41800 = null;
var count__41790_41801 = (0);
var i__41791_41802 = (0);
while(true){
if((i__41791_41802 < count__41790_41801)){
var dep_41803 = cljs.core._nth.call(null,chunk__41789_41800,i__41791_41802);
topo_sort_helper_STAR_.call(null,dep_41803,(depth + (1)),state);

var G__41804 = seq__41788_41799;
var G__41805 = chunk__41789_41800;
var G__41806 = count__41790_41801;
var G__41807 = (i__41791_41802 + (1));
seq__41788_41799 = G__41804;
chunk__41789_41800 = G__41805;
count__41790_41801 = G__41806;
i__41791_41802 = G__41807;
continue;
} else {
var temp__4657__auto___41808 = cljs.core.seq.call(null,seq__41788_41799);
if(temp__4657__auto___41808){
var seq__41788_41809__$1 = temp__4657__auto___41808;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41788_41809__$1)){
var c__25609__auto___41810 = cljs.core.chunk_first.call(null,seq__41788_41809__$1);
var G__41811 = cljs.core.chunk_rest.call(null,seq__41788_41809__$1);
var G__41812 = c__25609__auto___41810;
var G__41813 = cljs.core.count.call(null,c__25609__auto___41810);
var G__41814 = (0);
seq__41788_41799 = G__41811;
chunk__41789_41800 = G__41812;
count__41790_41801 = G__41813;
i__41791_41802 = G__41814;
continue;
} else {
var dep_41815 = cljs.core.first.call(null,seq__41788_41809__$1);
topo_sort_helper_STAR_.call(null,dep_41815,(depth + (1)),state);

var G__41816 = cljs.core.next.call(null,seq__41788_41809__$1);
var G__41817 = null;
var G__41818 = (0);
var G__41819 = (0);
seq__41788_41799 = G__41816;
chunk__41789_41800 = G__41817;
count__41790_41801 = G__41818;
i__41791_41802 = G__41819;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__41792){
var vec__41796 = p__41792;
var seq__41797 = cljs.core.seq.call(null,vec__41796);
var first__41798 = cljs.core.first.call(null,seq__41797);
var seq__41797__$1 = cljs.core.next.call(null,seq__41797);
var x = first__41798;
var xs = seq__41797__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__41796,seq__41797,first__41798,seq__41797__$1,x,xs,get_deps__$1){
return (function (p1__41738_SHARP_){
return clojure.set.difference.call(null,p1__41738_SHARP_,x);
});})(vec__41796,seq__41797,first__41798,seq__41797__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__41832 = cljs.core.seq.call(null,provides);
var chunk__41833 = null;
var count__41834 = (0);
var i__41835 = (0);
while(true){
if((i__41835 < count__41834)){
var prov = cljs.core._nth.call(null,chunk__41833,i__41835);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41836_41844 = cljs.core.seq.call(null,requires);
var chunk__41837_41845 = null;
var count__41838_41846 = (0);
var i__41839_41847 = (0);
while(true){
if((i__41839_41847 < count__41838_41846)){
var req_41848 = cljs.core._nth.call(null,chunk__41837_41845,i__41839_41847);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41848,prov);

var G__41849 = seq__41836_41844;
var G__41850 = chunk__41837_41845;
var G__41851 = count__41838_41846;
var G__41852 = (i__41839_41847 + (1));
seq__41836_41844 = G__41849;
chunk__41837_41845 = G__41850;
count__41838_41846 = G__41851;
i__41839_41847 = G__41852;
continue;
} else {
var temp__4657__auto___41853 = cljs.core.seq.call(null,seq__41836_41844);
if(temp__4657__auto___41853){
var seq__41836_41854__$1 = temp__4657__auto___41853;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41836_41854__$1)){
var c__25609__auto___41855 = cljs.core.chunk_first.call(null,seq__41836_41854__$1);
var G__41856 = cljs.core.chunk_rest.call(null,seq__41836_41854__$1);
var G__41857 = c__25609__auto___41855;
var G__41858 = cljs.core.count.call(null,c__25609__auto___41855);
var G__41859 = (0);
seq__41836_41844 = G__41856;
chunk__41837_41845 = G__41857;
count__41838_41846 = G__41858;
i__41839_41847 = G__41859;
continue;
} else {
var req_41860 = cljs.core.first.call(null,seq__41836_41854__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41860,prov);

var G__41861 = cljs.core.next.call(null,seq__41836_41854__$1);
var G__41862 = null;
var G__41863 = (0);
var G__41864 = (0);
seq__41836_41844 = G__41861;
chunk__41837_41845 = G__41862;
count__41838_41846 = G__41863;
i__41839_41847 = G__41864;
continue;
}
} else {
}
}
break;
}

var G__41865 = seq__41832;
var G__41866 = chunk__41833;
var G__41867 = count__41834;
var G__41868 = (i__41835 + (1));
seq__41832 = G__41865;
chunk__41833 = G__41866;
count__41834 = G__41867;
i__41835 = G__41868;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41832);
if(temp__4657__auto__){
var seq__41832__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41832__$1)){
var c__25609__auto__ = cljs.core.chunk_first.call(null,seq__41832__$1);
var G__41869 = cljs.core.chunk_rest.call(null,seq__41832__$1);
var G__41870 = c__25609__auto__;
var G__41871 = cljs.core.count.call(null,c__25609__auto__);
var G__41872 = (0);
seq__41832 = G__41869;
chunk__41833 = G__41870;
count__41834 = G__41871;
i__41835 = G__41872;
continue;
} else {
var prov = cljs.core.first.call(null,seq__41832__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41840_41873 = cljs.core.seq.call(null,requires);
var chunk__41841_41874 = null;
var count__41842_41875 = (0);
var i__41843_41876 = (0);
while(true){
if((i__41843_41876 < count__41842_41875)){
var req_41877 = cljs.core._nth.call(null,chunk__41841_41874,i__41843_41876);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41877,prov);

var G__41878 = seq__41840_41873;
var G__41879 = chunk__41841_41874;
var G__41880 = count__41842_41875;
var G__41881 = (i__41843_41876 + (1));
seq__41840_41873 = G__41878;
chunk__41841_41874 = G__41879;
count__41842_41875 = G__41880;
i__41843_41876 = G__41881;
continue;
} else {
var temp__4657__auto___41882__$1 = cljs.core.seq.call(null,seq__41840_41873);
if(temp__4657__auto___41882__$1){
var seq__41840_41883__$1 = temp__4657__auto___41882__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41840_41883__$1)){
var c__25609__auto___41884 = cljs.core.chunk_first.call(null,seq__41840_41883__$1);
var G__41885 = cljs.core.chunk_rest.call(null,seq__41840_41883__$1);
var G__41886 = c__25609__auto___41884;
var G__41887 = cljs.core.count.call(null,c__25609__auto___41884);
var G__41888 = (0);
seq__41840_41873 = G__41885;
chunk__41841_41874 = G__41886;
count__41842_41875 = G__41887;
i__41843_41876 = G__41888;
continue;
} else {
var req_41889 = cljs.core.first.call(null,seq__41840_41883__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41889,prov);

var G__41890 = cljs.core.next.call(null,seq__41840_41883__$1);
var G__41891 = null;
var G__41892 = (0);
var G__41893 = (0);
seq__41840_41873 = G__41890;
chunk__41841_41874 = G__41891;
count__41842_41875 = G__41892;
i__41843_41876 = G__41893;
continue;
}
} else {
}
}
break;
}

var G__41894 = cljs.core.next.call(null,seq__41832__$1);
var G__41895 = null;
var G__41896 = (0);
var G__41897 = (0);
seq__41832 = G__41894;
chunk__41833 = G__41895;
count__41834 = G__41896;
i__41835 = G__41897;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__41902_41906 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__41903_41907 = null;
var count__41904_41908 = (0);
var i__41905_41909 = (0);
while(true){
if((i__41905_41909 < count__41904_41908)){
var ns_41910 = cljs.core._nth.call(null,chunk__41903_41907,i__41905_41909);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41910);

var G__41911 = seq__41902_41906;
var G__41912 = chunk__41903_41907;
var G__41913 = count__41904_41908;
var G__41914 = (i__41905_41909 + (1));
seq__41902_41906 = G__41911;
chunk__41903_41907 = G__41912;
count__41904_41908 = G__41913;
i__41905_41909 = G__41914;
continue;
} else {
var temp__4657__auto___41915 = cljs.core.seq.call(null,seq__41902_41906);
if(temp__4657__auto___41915){
var seq__41902_41916__$1 = temp__4657__auto___41915;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41902_41916__$1)){
var c__25609__auto___41917 = cljs.core.chunk_first.call(null,seq__41902_41916__$1);
var G__41918 = cljs.core.chunk_rest.call(null,seq__41902_41916__$1);
var G__41919 = c__25609__auto___41917;
var G__41920 = cljs.core.count.call(null,c__25609__auto___41917);
var G__41921 = (0);
seq__41902_41906 = G__41918;
chunk__41903_41907 = G__41919;
count__41904_41908 = G__41920;
i__41905_41909 = G__41921;
continue;
} else {
var ns_41922 = cljs.core.first.call(null,seq__41902_41916__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41922);

var G__41923 = cljs.core.next.call(null,seq__41902_41916__$1);
var G__41924 = null;
var G__41925 = (0);
var G__41926 = (0);
seq__41902_41906 = G__41923;
chunk__41903_41907 = G__41924;
count__41904_41908 = G__41925;
i__41905_41909 = G__41926;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24798__auto__ = goog.require__;
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__41927__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__41927 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41928__i = 0, G__41928__a = new Array(arguments.length -  0);
while (G__41928__i < G__41928__a.length) {G__41928__a[G__41928__i] = arguments[G__41928__i + 0]; ++G__41928__i;}
  args = new cljs.core.IndexedSeq(G__41928__a,0);
} 
return G__41927__delegate.call(this,args);};
G__41927.cljs$lang$maxFixedArity = 0;
G__41927.cljs$lang$applyTo = (function (arglist__41929){
var args = cljs.core.seq(arglist__41929);
return G__41927__delegate(args);
});
G__41927.cljs$core$IFn$_invoke$arity$variadic = G__41927__delegate;
return G__41927;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__41931 = cljs.core._EQ_;
var expr__41932 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__41931.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__41932))){
var path_parts = ((function (pred__41931,expr__41932){
return (function (p1__41930_SHARP_){
return clojure.string.split.call(null,p1__41930_SHARP_,/[\/\\]/);
});})(pred__41931,expr__41932))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__41931,expr__41932){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e41934){if((e41934 instanceof Error)){
var e = e41934;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e41934;

}
}})());
});
;})(path_parts,sep,root,pred__41931,expr__41932))
} else {
if(cljs.core.truth_(pred__41931.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__41932))){
return ((function (pred__41931,expr__41932){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__41931,expr__41932){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__41931,expr__41932))
);

return deferred.addErrback(((function (deferred,pred__41931,expr__41932){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__41931,expr__41932))
);
});
;})(pred__41931,expr__41932))
} else {
return ((function (pred__41931,expr__41932){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__41931,expr__41932))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__41935,callback){
var map__41938 = p__41935;
var map__41938__$1 = ((((!((map__41938 == null)))?((((map__41938.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41938.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41938):map__41938);
var file_msg = map__41938__$1;
var request_url = cljs.core.get.call(null,map__41938__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__41938,map__41938__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__41938,map__41938__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__30167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30167__auto__){
return (function (){
var f__30168__auto__ = (function (){var switch__30055__auto__ = ((function (c__30167__auto__){
return (function (state_41962){
var state_val_41963 = (state_41962[(1)]);
if((state_val_41963 === (7))){
var inst_41958 = (state_41962[(2)]);
var state_41962__$1 = state_41962;
var statearr_41964_41984 = state_41962__$1;
(statearr_41964_41984[(2)] = inst_41958);

(statearr_41964_41984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41963 === (1))){
var state_41962__$1 = state_41962;
var statearr_41965_41985 = state_41962__$1;
(statearr_41965_41985[(2)] = null);

(statearr_41965_41985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41963 === (4))){
var inst_41942 = (state_41962[(7)]);
var inst_41942__$1 = (state_41962[(2)]);
var state_41962__$1 = (function (){var statearr_41966 = state_41962;
(statearr_41966[(7)] = inst_41942__$1);

return statearr_41966;
})();
if(cljs.core.truth_(inst_41942__$1)){
var statearr_41967_41986 = state_41962__$1;
(statearr_41967_41986[(1)] = (5));

} else {
var statearr_41968_41987 = state_41962__$1;
(statearr_41968_41987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41963 === (6))){
var state_41962__$1 = state_41962;
var statearr_41969_41988 = state_41962__$1;
(statearr_41969_41988[(2)] = null);

(statearr_41969_41988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41963 === (3))){
var inst_41960 = (state_41962[(2)]);
var state_41962__$1 = state_41962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41962__$1,inst_41960);
} else {
if((state_val_41963 === (2))){
var state_41962__$1 = state_41962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41962__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_41963 === (11))){
var inst_41954 = (state_41962[(2)]);
var state_41962__$1 = (function (){var statearr_41970 = state_41962;
(statearr_41970[(8)] = inst_41954);

return statearr_41970;
})();
var statearr_41971_41989 = state_41962__$1;
(statearr_41971_41989[(2)] = null);

(statearr_41971_41989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41963 === (9))){
var inst_41948 = (state_41962[(9)]);
var inst_41946 = (state_41962[(10)]);
var inst_41950 = inst_41948.call(null,inst_41946);
var state_41962__$1 = state_41962;
var statearr_41972_41990 = state_41962__$1;
(statearr_41972_41990[(2)] = inst_41950);

(statearr_41972_41990[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41963 === (5))){
var inst_41942 = (state_41962[(7)]);
var inst_41944 = figwheel.client.file_reloading.blocking_load.call(null,inst_41942);
var state_41962__$1 = state_41962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41962__$1,(8),inst_41944);
} else {
if((state_val_41963 === (10))){
var inst_41946 = (state_41962[(10)]);
var inst_41952 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_41946);
var state_41962__$1 = state_41962;
var statearr_41973_41991 = state_41962__$1;
(statearr_41973_41991[(2)] = inst_41952);

(statearr_41973_41991[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41963 === (8))){
var inst_41948 = (state_41962[(9)]);
var inst_41942 = (state_41962[(7)]);
var inst_41946 = (state_41962[(2)]);
var inst_41947 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_41948__$1 = cljs.core.get.call(null,inst_41947,inst_41942);
var state_41962__$1 = (function (){var statearr_41974 = state_41962;
(statearr_41974[(9)] = inst_41948__$1);

(statearr_41974[(10)] = inst_41946);

return statearr_41974;
})();
if(cljs.core.truth_(inst_41948__$1)){
var statearr_41975_41992 = state_41962__$1;
(statearr_41975_41992[(1)] = (9));

} else {
var statearr_41976_41993 = state_41962__$1;
(statearr_41976_41993[(1)] = (10));

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
});})(c__30167__auto__))
;
return ((function (switch__30055__auto__,c__30167__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30056__auto__ = null;
var figwheel$client$file_reloading$state_machine__30056__auto____0 = (function (){
var statearr_41980 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41980[(0)] = figwheel$client$file_reloading$state_machine__30056__auto__);

(statearr_41980[(1)] = (1));

return statearr_41980;
});
var figwheel$client$file_reloading$state_machine__30056__auto____1 = (function (state_41962){
while(true){
var ret_value__30057__auto__ = (function (){try{while(true){
var result__30058__auto__ = switch__30055__auto__.call(null,state_41962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30058__auto__;
}
break;
}
}catch (e41981){if((e41981 instanceof Object)){
var ex__30059__auto__ = e41981;
var statearr_41982_41994 = state_41962;
(statearr_41982_41994[(5)] = ex__30059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41995 = state_41962;
state_41962 = G__41995;
continue;
} else {
return ret_value__30057__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30056__auto__ = function(state_41962){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30056__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30056__auto____1.call(this,state_41962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30056__auto____0;
figwheel$client$file_reloading$state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30056__auto____1;
return figwheel$client$file_reloading$state_machine__30056__auto__;
})()
;})(switch__30055__auto__,c__30167__auto__))
})();
var state__30169__auto__ = (function (){var statearr_41983 = f__30168__auto__.call(null);
(statearr_41983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30167__auto__);

return statearr_41983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30169__auto__);
});})(c__30167__auto__))
);

return c__30167__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__41996,callback){
var map__41999 = p__41996;
var map__41999__$1 = ((((!((map__41999 == null)))?((((map__41999.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41999.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41999):map__41999);
var file_msg = map__41999__$1;
var namespace = cljs.core.get.call(null,map__41999__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__41999,map__41999__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__41999,map__41999__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__42001){
var map__42004 = p__42001;
var map__42004__$1 = ((((!((map__42004 == null)))?((((map__42004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42004):map__42004);
var file_msg = map__42004__$1;
var namespace = cljs.core.get.call(null,map__42004__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24786__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24786__auto__){
var or__24798__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
var or__24798__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24798__auto____$1)){
return or__24798__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24786__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__42006,callback){
var map__42009 = p__42006;
var map__42009__$1 = ((((!((map__42009 == null)))?((((map__42009.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42009.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42009):map__42009);
var file_msg = map__42009__$1;
var request_url = cljs.core.get.call(null,map__42009__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__42009__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__30167__auto___42113 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30167__auto___42113,out){
return (function (){
var f__30168__auto__ = (function (){var switch__30055__auto__ = ((function (c__30167__auto___42113,out){
return (function (state_42095){
var state_val_42096 = (state_42095[(1)]);
if((state_val_42096 === (1))){
var inst_42069 = cljs.core.seq.call(null,files);
var inst_42070 = cljs.core.first.call(null,inst_42069);
var inst_42071 = cljs.core.next.call(null,inst_42069);
var inst_42072 = files;
var state_42095__$1 = (function (){var statearr_42097 = state_42095;
(statearr_42097[(7)] = inst_42072);

(statearr_42097[(8)] = inst_42071);

(statearr_42097[(9)] = inst_42070);

return statearr_42097;
})();
var statearr_42098_42114 = state_42095__$1;
(statearr_42098_42114[(2)] = null);

(statearr_42098_42114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42096 === (2))){
var inst_42078 = (state_42095[(10)]);
var inst_42072 = (state_42095[(7)]);
var inst_42077 = cljs.core.seq.call(null,inst_42072);
var inst_42078__$1 = cljs.core.first.call(null,inst_42077);
var inst_42079 = cljs.core.next.call(null,inst_42077);
var inst_42080 = (inst_42078__$1 == null);
var inst_42081 = cljs.core.not.call(null,inst_42080);
var state_42095__$1 = (function (){var statearr_42099 = state_42095;
(statearr_42099[(10)] = inst_42078__$1);

(statearr_42099[(11)] = inst_42079);

return statearr_42099;
})();
if(inst_42081){
var statearr_42100_42115 = state_42095__$1;
(statearr_42100_42115[(1)] = (4));

} else {
var statearr_42101_42116 = state_42095__$1;
(statearr_42101_42116[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42096 === (3))){
var inst_42093 = (state_42095[(2)]);
var state_42095__$1 = state_42095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42095__$1,inst_42093);
} else {
if((state_val_42096 === (4))){
var inst_42078 = (state_42095[(10)]);
var inst_42083 = figwheel.client.file_reloading.reload_js_file.call(null,inst_42078);
var state_42095__$1 = state_42095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42095__$1,(7),inst_42083);
} else {
if((state_val_42096 === (5))){
var inst_42089 = cljs.core.async.close_BANG_.call(null,out);
var state_42095__$1 = state_42095;
var statearr_42102_42117 = state_42095__$1;
(statearr_42102_42117[(2)] = inst_42089);

(statearr_42102_42117[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42096 === (6))){
var inst_42091 = (state_42095[(2)]);
var state_42095__$1 = state_42095;
var statearr_42103_42118 = state_42095__$1;
(statearr_42103_42118[(2)] = inst_42091);

(statearr_42103_42118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42096 === (7))){
var inst_42079 = (state_42095[(11)]);
var inst_42085 = (state_42095[(2)]);
var inst_42086 = cljs.core.async.put_BANG_.call(null,out,inst_42085);
var inst_42072 = inst_42079;
var state_42095__$1 = (function (){var statearr_42104 = state_42095;
(statearr_42104[(7)] = inst_42072);

(statearr_42104[(12)] = inst_42086);

return statearr_42104;
})();
var statearr_42105_42119 = state_42095__$1;
(statearr_42105_42119[(2)] = null);

(statearr_42105_42119[(1)] = (2));


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
});})(c__30167__auto___42113,out))
;
return ((function (switch__30055__auto__,c__30167__auto___42113,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30056__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30056__auto____0 = (function (){
var statearr_42109 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42109[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30056__auto__);

(statearr_42109[(1)] = (1));

return statearr_42109;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30056__auto____1 = (function (state_42095){
while(true){
var ret_value__30057__auto__ = (function (){try{while(true){
var result__30058__auto__ = switch__30055__auto__.call(null,state_42095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30058__auto__;
}
break;
}
}catch (e42110){if((e42110 instanceof Object)){
var ex__30059__auto__ = e42110;
var statearr_42111_42120 = state_42095;
(statearr_42111_42120[(5)] = ex__30059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42121 = state_42095;
state_42095 = G__42121;
continue;
} else {
return ret_value__30057__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30056__auto__ = function(state_42095){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30056__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30056__auto____1.call(this,state_42095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30056__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30056__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30056__auto__;
})()
;})(switch__30055__auto__,c__30167__auto___42113,out))
})();
var state__30169__auto__ = (function (){var statearr_42112 = f__30168__auto__.call(null);
(statearr_42112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30167__auto___42113);

return statearr_42112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30169__auto__);
});})(c__30167__auto___42113,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__42122,opts){
var map__42126 = p__42122;
var map__42126__$1 = ((((!((map__42126 == null)))?((((map__42126.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42126.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42126):map__42126);
var eval_body__$1 = cljs.core.get.call(null,map__42126__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__42126__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24786__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24786__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24786__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e42128){var e = e42128;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__42129_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42129_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__42138){
var vec__42139 = p__42138;
var k = cljs.core.nth.call(null,vec__42139,(0),null);
var v = cljs.core.nth.call(null,vec__42139,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__42142){
var vec__42143 = p__42142;
var k = cljs.core.nth.call(null,vec__42143,(0),null);
var v = cljs.core.nth.call(null,vec__42143,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__42149,p__42150){
var map__42397 = p__42149;
var map__42397__$1 = ((((!((map__42397 == null)))?((((map__42397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42397):map__42397);
var opts = map__42397__$1;
var before_jsload = cljs.core.get.call(null,map__42397__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__42397__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__42397__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__42398 = p__42150;
var map__42398__$1 = ((((!((map__42398 == null)))?((((map__42398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42398):map__42398);
var msg = map__42398__$1;
var files = cljs.core.get.call(null,map__42398__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__42398__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__42398__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30167__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30168__auto__ = (function (){var switch__30055__auto__ = ((function (c__30167__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_42551){
var state_val_42552 = (state_42551[(1)]);
if((state_val_42552 === (7))){
var inst_42412 = (state_42551[(7)]);
var inst_42413 = (state_42551[(8)]);
var inst_42415 = (state_42551[(9)]);
var inst_42414 = (state_42551[(10)]);
var inst_42420 = cljs.core._nth.call(null,inst_42413,inst_42415);
var inst_42421 = figwheel.client.file_reloading.eval_body.call(null,inst_42420,opts);
var inst_42422 = (inst_42415 + (1));
var tmp42553 = inst_42412;
var tmp42554 = inst_42413;
var tmp42555 = inst_42414;
var inst_42412__$1 = tmp42553;
var inst_42413__$1 = tmp42554;
var inst_42414__$1 = tmp42555;
var inst_42415__$1 = inst_42422;
var state_42551__$1 = (function (){var statearr_42556 = state_42551;
(statearr_42556[(11)] = inst_42421);

(statearr_42556[(7)] = inst_42412__$1);

(statearr_42556[(8)] = inst_42413__$1);

(statearr_42556[(9)] = inst_42415__$1);

(statearr_42556[(10)] = inst_42414__$1);

return statearr_42556;
})();
var statearr_42557_42643 = state_42551__$1;
(statearr_42557_42643[(2)] = null);

(statearr_42557_42643[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (20))){
var inst_42455 = (state_42551[(12)]);
var inst_42463 = figwheel.client.file_reloading.sort_files.call(null,inst_42455);
var state_42551__$1 = state_42551;
var statearr_42558_42644 = state_42551__$1;
(statearr_42558_42644[(2)] = inst_42463);

(statearr_42558_42644[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (27))){
var state_42551__$1 = state_42551;
var statearr_42559_42645 = state_42551__$1;
(statearr_42559_42645[(2)] = null);

(statearr_42559_42645[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (1))){
var inst_42404 = (state_42551[(13)]);
var inst_42401 = before_jsload.call(null,files);
var inst_42402 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_42403 = (function (){return ((function (inst_42404,inst_42401,inst_42402,state_val_42552,c__30167__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42146_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42146_SHARP_);
});
;})(inst_42404,inst_42401,inst_42402,state_val_42552,c__30167__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42404__$1 = cljs.core.filter.call(null,inst_42403,files);
var inst_42405 = cljs.core.not_empty.call(null,inst_42404__$1);
var state_42551__$1 = (function (){var statearr_42560 = state_42551;
(statearr_42560[(14)] = inst_42402);

(statearr_42560[(13)] = inst_42404__$1);

(statearr_42560[(15)] = inst_42401);

return statearr_42560;
})();
if(cljs.core.truth_(inst_42405)){
var statearr_42561_42646 = state_42551__$1;
(statearr_42561_42646[(1)] = (2));

} else {
var statearr_42562_42647 = state_42551__$1;
(statearr_42562_42647[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (24))){
var state_42551__$1 = state_42551;
var statearr_42563_42648 = state_42551__$1;
(statearr_42563_42648[(2)] = null);

(statearr_42563_42648[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (39))){
var inst_42505 = (state_42551[(16)]);
var state_42551__$1 = state_42551;
var statearr_42564_42649 = state_42551__$1;
(statearr_42564_42649[(2)] = inst_42505);

(statearr_42564_42649[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (46))){
var inst_42546 = (state_42551[(2)]);
var state_42551__$1 = state_42551;
var statearr_42565_42650 = state_42551__$1;
(statearr_42565_42650[(2)] = inst_42546);

(statearr_42565_42650[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (4))){
var inst_42449 = (state_42551[(2)]);
var inst_42450 = cljs.core.List.EMPTY;
var inst_42451 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_42450);
var inst_42452 = (function (){return ((function (inst_42449,inst_42450,inst_42451,state_val_42552,c__30167__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42147_SHARP_){
var and__24786__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42147_SHARP_);
if(cljs.core.truth_(and__24786__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42147_SHARP_));
} else {
return and__24786__auto__;
}
});
;})(inst_42449,inst_42450,inst_42451,state_val_42552,c__30167__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42453 = cljs.core.filter.call(null,inst_42452,files);
var inst_42454 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_42455 = cljs.core.concat.call(null,inst_42453,inst_42454);
var state_42551__$1 = (function (){var statearr_42566 = state_42551;
(statearr_42566[(12)] = inst_42455);

(statearr_42566[(17)] = inst_42449);

(statearr_42566[(18)] = inst_42451);

return statearr_42566;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_42567_42651 = state_42551__$1;
(statearr_42567_42651[(1)] = (16));

} else {
var statearr_42568_42652 = state_42551__$1;
(statearr_42568_42652[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (15))){
var inst_42439 = (state_42551[(2)]);
var state_42551__$1 = state_42551;
var statearr_42569_42653 = state_42551__$1;
(statearr_42569_42653[(2)] = inst_42439);

(statearr_42569_42653[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (21))){
var inst_42465 = (state_42551[(19)]);
var inst_42465__$1 = (state_42551[(2)]);
var inst_42466 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_42465__$1);
var state_42551__$1 = (function (){var statearr_42570 = state_42551;
(statearr_42570[(19)] = inst_42465__$1);

return statearr_42570;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42551__$1,(22),inst_42466);
} else {
if((state_val_42552 === (31))){
var inst_42549 = (state_42551[(2)]);
var state_42551__$1 = state_42551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42551__$1,inst_42549);
} else {
if((state_val_42552 === (32))){
var inst_42505 = (state_42551[(16)]);
var inst_42510 = inst_42505.cljs$lang$protocol_mask$partition0$;
var inst_42511 = (inst_42510 & (64));
var inst_42512 = inst_42505.cljs$core$ISeq$;
var inst_42513 = (inst_42511) || (inst_42512);
var state_42551__$1 = state_42551;
if(cljs.core.truth_(inst_42513)){
var statearr_42571_42654 = state_42551__$1;
(statearr_42571_42654[(1)] = (35));

} else {
var statearr_42572_42655 = state_42551__$1;
(statearr_42572_42655[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (40))){
var inst_42526 = (state_42551[(20)]);
var inst_42525 = (state_42551[(2)]);
var inst_42526__$1 = cljs.core.get.call(null,inst_42525,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_42527 = cljs.core.get.call(null,inst_42525,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_42528 = cljs.core.not_empty.call(null,inst_42526__$1);
var state_42551__$1 = (function (){var statearr_42573 = state_42551;
(statearr_42573[(21)] = inst_42527);

(statearr_42573[(20)] = inst_42526__$1);

return statearr_42573;
})();
if(cljs.core.truth_(inst_42528)){
var statearr_42574_42656 = state_42551__$1;
(statearr_42574_42656[(1)] = (41));

} else {
var statearr_42575_42657 = state_42551__$1;
(statearr_42575_42657[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (33))){
var state_42551__$1 = state_42551;
var statearr_42576_42658 = state_42551__$1;
(statearr_42576_42658[(2)] = false);

(statearr_42576_42658[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (13))){
var inst_42425 = (state_42551[(22)]);
var inst_42429 = cljs.core.chunk_first.call(null,inst_42425);
var inst_42430 = cljs.core.chunk_rest.call(null,inst_42425);
var inst_42431 = cljs.core.count.call(null,inst_42429);
var inst_42412 = inst_42430;
var inst_42413 = inst_42429;
var inst_42414 = inst_42431;
var inst_42415 = (0);
var state_42551__$1 = (function (){var statearr_42577 = state_42551;
(statearr_42577[(7)] = inst_42412);

(statearr_42577[(8)] = inst_42413);

(statearr_42577[(9)] = inst_42415);

(statearr_42577[(10)] = inst_42414);

return statearr_42577;
})();
var statearr_42578_42659 = state_42551__$1;
(statearr_42578_42659[(2)] = null);

(statearr_42578_42659[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (22))){
var inst_42468 = (state_42551[(23)]);
var inst_42465 = (state_42551[(19)]);
var inst_42469 = (state_42551[(24)]);
var inst_42473 = (state_42551[(25)]);
var inst_42468__$1 = (state_42551[(2)]);
var inst_42469__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_42468__$1);
var inst_42470 = (function (){var all_files = inst_42465;
var res_SINGLEQUOTE_ = inst_42468__$1;
var res = inst_42469__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_42468,inst_42465,inst_42469,inst_42473,inst_42468__$1,inst_42469__$1,state_val_42552,c__30167__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42148_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__42148_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_42468,inst_42465,inst_42469,inst_42473,inst_42468__$1,inst_42469__$1,state_val_42552,c__30167__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42471 = cljs.core.filter.call(null,inst_42470,inst_42468__$1);
var inst_42472 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_42473__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_42472);
var inst_42474 = cljs.core.not_empty.call(null,inst_42473__$1);
var state_42551__$1 = (function (){var statearr_42579 = state_42551;
(statearr_42579[(26)] = inst_42471);

(statearr_42579[(23)] = inst_42468__$1);

(statearr_42579[(24)] = inst_42469__$1);

(statearr_42579[(25)] = inst_42473__$1);

return statearr_42579;
})();
if(cljs.core.truth_(inst_42474)){
var statearr_42580_42660 = state_42551__$1;
(statearr_42580_42660[(1)] = (23));

} else {
var statearr_42581_42661 = state_42551__$1;
(statearr_42581_42661[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (36))){
var state_42551__$1 = state_42551;
var statearr_42582_42662 = state_42551__$1;
(statearr_42582_42662[(2)] = false);

(statearr_42582_42662[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (41))){
var inst_42526 = (state_42551[(20)]);
var inst_42530 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_42531 = cljs.core.map.call(null,inst_42530,inst_42526);
var inst_42532 = cljs.core.pr_str.call(null,inst_42531);
var inst_42533 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_42532)].join('');
var inst_42534 = figwheel.client.utils.log.call(null,inst_42533);
var state_42551__$1 = state_42551;
var statearr_42583_42663 = state_42551__$1;
(statearr_42583_42663[(2)] = inst_42534);

(statearr_42583_42663[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (43))){
var inst_42527 = (state_42551[(21)]);
var inst_42537 = (state_42551[(2)]);
var inst_42538 = cljs.core.not_empty.call(null,inst_42527);
var state_42551__$1 = (function (){var statearr_42584 = state_42551;
(statearr_42584[(27)] = inst_42537);

return statearr_42584;
})();
if(cljs.core.truth_(inst_42538)){
var statearr_42585_42664 = state_42551__$1;
(statearr_42585_42664[(1)] = (44));

} else {
var statearr_42586_42665 = state_42551__$1;
(statearr_42586_42665[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (29))){
var inst_42471 = (state_42551[(26)]);
var inst_42468 = (state_42551[(23)]);
var inst_42465 = (state_42551[(19)]);
var inst_42469 = (state_42551[(24)]);
var inst_42473 = (state_42551[(25)]);
var inst_42505 = (state_42551[(16)]);
var inst_42501 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_42504 = (function (){var all_files = inst_42465;
var res_SINGLEQUOTE_ = inst_42468;
var res = inst_42469;
var files_not_loaded = inst_42471;
var dependencies_that_loaded = inst_42473;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42471,inst_42468,inst_42465,inst_42469,inst_42473,inst_42505,inst_42501,state_val_42552,c__30167__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42503){
var map__42587 = p__42503;
var map__42587__$1 = ((((!((map__42587 == null)))?((((map__42587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42587):map__42587);
var namespace = cljs.core.get.call(null,map__42587__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42471,inst_42468,inst_42465,inst_42469,inst_42473,inst_42505,inst_42501,state_val_42552,c__30167__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42505__$1 = cljs.core.group_by.call(null,inst_42504,inst_42471);
var inst_42507 = (inst_42505__$1 == null);
var inst_42508 = cljs.core.not.call(null,inst_42507);
var state_42551__$1 = (function (){var statearr_42589 = state_42551;
(statearr_42589[(16)] = inst_42505__$1);

(statearr_42589[(28)] = inst_42501);

return statearr_42589;
})();
if(inst_42508){
var statearr_42590_42666 = state_42551__$1;
(statearr_42590_42666[(1)] = (32));

} else {
var statearr_42591_42667 = state_42551__$1;
(statearr_42591_42667[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (44))){
var inst_42527 = (state_42551[(21)]);
var inst_42540 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42527);
var inst_42541 = cljs.core.pr_str.call(null,inst_42540);
var inst_42542 = [cljs.core.str("not required: "),cljs.core.str(inst_42541)].join('');
var inst_42543 = figwheel.client.utils.log.call(null,inst_42542);
var state_42551__$1 = state_42551;
var statearr_42592_42668 = state_42551__$1;
(statearr_42592_42668[(2)] = inst_42543);

(statearr_42592_42668[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (6))){
var inst_42446 = (state_42551[(2)]);
var state_42551__$1 = state_42551;
var statearr_42593_42669 = state_42551__$1;
(statearr_42593_42669[(2)] = inst_42446);

(statearr_42593_42669[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (28))){
var inst_42471 = (state_42551[(26)]);
var inst_42498 = (state_42551[(2)]);
var inst_42499 = cljs.core.not_empty.call(null,inst_42471);
var state_42551__$1 = (function (){var statearr_42594 = state_42551;
(statearr_42594[(29)] = inst_42498);

return statearr_42594;
})();
if(cljs.core.truth_(inst_42499)){
var statearr_42595_42670 = state_42551__$1;
(statearr_42595_42670[(1)] = (29));

} else {
var statearr_42596_42671 = state_42551__$1;
(statearr_42596_42671[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (25))){
var inst_42469 = (state_42551[(24)]);
var inst_42485 = (state_42551[(2)]);
var inst_42486 = cljs.core.not_empty.call(null,inst_42469);
var state_42551__$1 = (function (){var statearr_42597 = state_42551;
(statearr_42597[(30)] = inst_42485);

return statearr_42597;
})();
if(cljs.core.truth_(inst_42486)){
var statearr_42598_42672 = state_42551__$1;
(statearr_42598_42672[(1)] = (26));

} else {
var statearr_42599_42673 = state_42551__$1;
(statearr_42599_42673[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (34))){
var inst_42520 = (state_42551[(2)]);
var state_42551__$1 = state_42551;
if(cljs.core.truth_(inst_42520)){
var statearr_42600_42674 = state_42551__$1;
(statearr_42600_42674[(1)] = (38));

} else {
var statearr_42601_42675 = state_42551__$1;
(statearr_42601_42675[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (17))){
var state_42551__$1 = state_42551;
var statearr_42602_42676 = state_42551__$1;
(statearr_42602_42676[(2)] = recompile_dependents);

(statearr_42602_42676[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (3))){
var state_42551__$1 = state_42551;
var statearr_42603_42677 = state_42551__$1;
(statearr_42603_42677[(2)] = null);

(statearr_42603_42677[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (12))){
var inst_42442 = (state_42551[(2)]);
var state_42551__$1 = state_42551;
var statearr_42604_42678 = state_42551__$1;
(statearr_42604_42678[(2)] = inst_42442);

(statearr_42604_42678[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (2))){
var inst_42404 = (state_42551[(13)]);
var inst_42411 = cljs.core.seq.call(null,inst_42404);
var inst_42412 = inst_42411;
var inst_42413 = null;
var inst_42414 = (0);
var inst_42415 = (0);
var state_42551__$1 = (function (){var statearr_42605 = state_42551;
(statearr_42605[(7)] = inst_42412);

(statearr_42605[(8)] = inst_42413);

(statearr_42605[(9)] = inst_42415);

(statearr_42605[(10)] = inst_42414);

return statearr_42605;
})();
var statearr_42606_42679 = state_42551__$1;
(statearr_42606_42679[(2)] = null);

(statearr_42606_42679[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (23))){
var inst_42471 = (state_42551[(26)]);
var inst_42468 = (state_42551[(23)]);
var inst_42465 = (state_42551[(19)]);
var inst_42469 = (state_42551[(24)]);
var inst_42473 = (state_42551[(25)]);
var inst_42476 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_42478 = (function (){var all_files = inst_42465;
var res_SINGLEQUOTE_ = inst_42468;
var res = inst_42469;
var files_not_loaded = inst_42471;
var dependencies_that_loaded = inst_42473;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42471,inst_42468,inst_42465,inst_42469,inst_42473,inst_42476,state_val_42552,c__30167__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42477){
var map__42607 = p__42477;
var map__42607__$1 = ((((!((map__42607 == null)))?((((map__42607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42607):map__42607);
var request_url = cljs.core.get.call(null,map__42607__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42471,inst_42468,inst_42465,inst_42469,inst_42473,inst_42476,state_val_42552,c__30167__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42479 = cljs.core.reverse.call(null,inst_42473);
var inst_42480 = cljs.core.map.call(null,inst_42478,inst_42479);
var inst_42481 = cljs.core.pr_str.call(null,inst_42480);
var inst_42482 = figwheel.client.utils.log.call(null,inst_42481);
var state_42551__$1 = (function (){var statearr_42609 = state_42551;
(statearr_42609[(31)] = inst_42476);

return statearr_42609;
})();
var statearr_42610_42680 = state_42551__$1;
(statearr_42610_42680[(2)] = inst_42482);

(statearr_42610_42680[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (35))){
var state_42551__$1 = state_42551;
var statearr_42611_42681 = state_42551__$1;
(statearr_42611_42681[(2)] = true);

(statearr_42611_42681[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (19))){
var inst_42455 = (state_42551[(12)]);
var inst_42461 = figwheel.client.file_reloading.expand_files.call(null,inst_42455);
var state_42551__$1 = state_42551;
var statearr_42612_42682 = state_42551__$1;
(statearr_42612_42682[(2)] = inst_42461);

(statearr_42612_42682[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (11))){
var state_42551__$1 = state_42551;
var statearr_42613_42683 = state_42551__$1;
(statearr_42613_42683[(2)] = null);

(statearr_42613_42683[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (9))){
var inst_42444 = (state_42551[(2)]);
var state_42551__$1 = state_42551;
var statearr_42614_42684 = state_42551__$1;
(statearr_42614_42684[(2)] = inst_42444);

(statearr_42614_42684[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (5))){
var inst_42415 = (state_42551[(9)]);
var inst_42414 = (state_42551[(10)]);
var inst_42417 = (inst_42415 < inst_42414);
var inst_42418 = inst_42417;
var state_42551__$1 = state_42551;
if(cljs.core.truth_(inst_42418)){
var statearr_42615_42685 = state_42551__$1;
(statearr_42615_42685[(1)] = (7));

} else {
var statearr_42616_42686 = state_42551__$1;
(statearr_42616_42686[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (14))){
var inst_42425 = (state_42551[(22)]);
var inst_42434 = cljs.core.first.call(null,inst_42425);
var inst_42435 = figwheel.client.file_reloading.eval_body.call(null,inst_42434,opts);
var inst_42436 = cljs.core.next.call(null,inst_42425);
var inst_42412 = inst_42436;
var inst_42413 = null;
var inst_42414 = (0);
var inst_42415 = (0);
var state_42551__$1 = (function (){var statearr_42617 = state_42551;
(statearr_42617[(7)] = inst_42412);

(statearr_42617[(8)] = inst_42413);

(statearr_42617[(32)] = inst_42435);

(statearr_42617[(9)] = inst_42415);

(statearr_42617[(10)] = inst_42414);

return statearr_42617;
})();
var statearr_42618_42687 = state_42551__$1;
(statearr_42618_42687[(2)] = null);

(statearr_42618_42687[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (45))){
var state_42551__$1 = state_42551;
var statearr_42619_42688 = state_42551__$1;
(statearr_42619_42688[(2)] = null);

(statearr_42619_42688[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (26))){
var inst_42471 = (state_42551[(26)]);
var inst_42468 = (state_42551[(23)]);
var inst_42465 = (state_42551[(19)]);
var inst_42469 = (state_42551[(24)]);
var inst_42473 = (state_42551[(25)]);
var inst_42488 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_42490 = (function (){var all_files = inst_42465;
var res_SINGLEQUOTE_ = inst_42468;
var res = inst_42469;
var files_not_loaded = inst_42471;
var dependencies_that_loaded = inst_42473;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42471,inst_42468,inst_42465,inst_42469,inst_42473,inst_42488,state_val_42552,c__30167__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42489){
var map__42620 = p__42489;
var map__42620__$1 = ((((!((map__42620 == null)))?((((map__42620.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42620.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42620):map__42620);
var namespace = cljs.core.get.call(null,map__42620__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__42620__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42471,inst_42468,inst_42465,inst_42469,inst_42473,inst_42488,state_val_42552,c__30167__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42491 = cljs.core.map.call(null,inst_42490,inst_42469);
var inst_42492 = cljs.core.pr_str.call(null,inst_42491);
var inst_42493 = figwheel.client.utils.log.call(null,inst_42492);
var inst_42494 = (function (){var all_files = inst_42465;
var res_SINGLEQUOTE_ = inst_42468;
var res = inst_42469;
var files_not_loaded = inst_42471;
var dependencies_that_loaded = inst_42473;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42471,inst_42468,inst_42465,inst_42469,inst_42473,inst_42488,inst_42490,inst_42491,inst_42492,inst_42493,state_val_42552,c__30167__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42471,inst_42468,inst_42465,inst_42469,inst_42473,inst_42488,inst_42490,inst_42491,inst_42492,inst_42493,state_val_42552,c__30167__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42495 = setTimeout(inst_42494,(10));
var state_42551__$1 = (function (){var statearr_42622 = state_42551;
(statearr_42622[(33)] = inst_42493);

(statearr_42622[(34)] = inst_42488);

return statearr_42622;
})();
var statearr_42623_42689 = state_42551__$1;
(statearr_42623_42689[(2)] = inst_42495);

(statearr_42623_42689[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (16))){
var state_42551__$1 = state_42551;
var statearr_42624_42690 = state_42551__$1;
(statearr_42624_42690[(2)] = reload_dependents);

(statearr_42624_42690[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (38))){
var inst_42505 = (state_42551[(16)]);
var inst_42522 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42505);
var state_42551__$1 = state_42551;
var statearr_42625_42691 = state_42551__$1;
(statearr_42625_42691[(2)] = inst_42522);

(statearr_42625_42691[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (30))){
var state_42551__$1 = state_42551;
var statearr_42626_42692 = state_42551__$1;
(statearr_42626_42692[(2)] = null);

(statearr_42626_42692[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (10))){
var inst_42425 = (state_42551[(22)]);
var inst_42427 = cljs.core.chunked_seq_QMARK_.call(null,inst_42425);
var state_42551__$1 = state_42551;
if(inst_42427){
var statearr_42627_42693 = state_42551__$1;
(statearr_42627_42693[(1)] = (13));

} else {
var statearr_42628_42694 = state_42551__$1;
(statearr_42628_42694[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (18))){
var inst_42459 = (state_42551[(2)]);
var state_42551__$1 = state_42551;
if(cljs.core.truth_(inst_42459)){
var statearr_42629_42695 = state_42551__$1;
(statearr_42629_42695[(1)] = (19));

} else {
var statearr_42630_42696 = state_42551__$1;
(statearr_42630_42696[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (42))){
var state_42551__$1 = state_42551;
var statearr_42631_42697 = state_42551__$1;
(statearr_42631_42697[(2)] = null);

(statearr_42631_42697[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (37))){
var inst_42517 = (state_42551[(2)]);
var state_42551__$1 = state_42551;
var statearr_42632_42698 = state_42551__$1;
(statearr_42632_42698[(2)] = inst_42517);

(statearr_42632_42698[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42552 === (8))){
var inst_42412 = (state_42551[(7)]);
var inst_42425 = (state_42551[(22)]);
var inst_42425__$1 = cljs.core.seq.call(null,inst_42412);
var state_42551__$1 = (function (){var statearr_42633 = state_42551;
(statearr_42633[(22)] = inst_42425__$1);

return statearr_42633;
})();
if(inst_42425__$1){
var statearr_42634_42699 = state_42551__$1;
(statearr_42634_42699[(1)] = (10));

} else {
var statearr_42635_42700 = state_42551__$1;
(statearr_42635_42700[(1)] = (11));

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
}
});})(c__30167__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30055__auto__,c__30167__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30056__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30056__auto____0 = (function (){
var statearr_42639 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42639[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30056__auto__);

(statearr_42639[(1)] = (1));

return statearr_42639;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30056__auto____1 = (function (state_42551){
while(true){
var ret_value__30057__auto__ = (function (){try{while(true){
var result__30058__auto__ = switch__30055__auto__.call(null,state_42551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30058__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30058__auto__;
}
break;
}
}catch (e42640){if((e42640 instanceof Object)){
var ex__30059__auto__ = e42640;
var statearr_42641_42701 = state_42551;
(statearr_42641_42701[(5)] = ex__30059__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42702 = state_42551;
state_42551 = G__42702;
continue;
} else {
return ret_value__30057__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30056__auto__ = function(state_42551){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30056__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30056__auto____1.call(this,state_42551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30056__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30056__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30056__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30056__auto__;
})()
;})(switch__30055__auto__,c__30167__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30169__auto__ = (function (){var statearr_42642 = f__30168__auto__.call(null);
(statearr_42642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30167__auto__);

return statearr_42642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30169__auto__);
});})(c__30167__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30167__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__42705,link){
var map__42708 = p__42705;
var map__42708__$1 = ((((!((map__42708 == null)))?((((map__42708.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42708.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42708):map__42708);
var file = cljs.core.get.call(null,map__42708__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__42708,map__42708__$1,file){
return (function (p1__42703_SHARP_,p2__42704_SHARP_){
if(cljs.core._EQ_.call(null,p1__42703_SHARP_,p2__42704_SHARP_)){
return p1__42703_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__42708,map__42708__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__42714){
var map__42715 = p__42714;
var map__42715__$1 = ((((!((map__42715 == null)))?((((map__42715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42715):map__42715);
var match_length = cljs.core.get.call(null,map__42715__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__42715__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__42710_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__42710_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args42717 = [];
var len__25873__auto___42720 = arguments.length;
var i__25874__auto___42721 = (0);
while(true){
if((i__25874__auto___42721 < len__25873__auto___42720)){
args42717.push((arguments[i__25874__auto___42721]));

var G__42722 = (i__25874__auto___42721 + (1));
i__25874__auto___42721 = G__42722;
continue;
} else {
}
break;
}

var G__42719 = args42717.length;
switch (G__42719) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42717.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__42724_SHARP_,p2__42725_SHARP_){
return cljs.core.assoc.call(null,p1__42724_SHARP_,cljs.core.get.call(null,p2__42725_SHARP_,key),p2__42725_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__42726){
var map__42729 = p__42726;
var map__42729__$1 = ((((!((map__42729 == null)))?((((map__42729.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42729.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42729):map__42729);
var f_data = map__42729__$1;
var file = cljs.core.get.call(null,map__42729__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__42731,p__42732){
var map__42741 = p__42731;
var map__42741__$1 = ((((!((map__42741 == null)))?((((map__42741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42741):map__42741);
var opts = map__42741__$1;
var on_cssload = cljs.core.get.call(null,map__42741__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__42742 = p__42732;
var map__42742__$1 = ((((!((map__42742 == null)))?((((map__42742.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42742.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42742):map__42742);
var files_msg = map__42742__$1;
var files = cljs.core.get.call(null,map__42742__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__42745_42749 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__42746_42750 = null;
var count__42747_42751 = (0);
var i__42748_42752 = (0);
while(true){
if((i__42748_42752 < count__42747_42751)){
var f_42753 = cljs.core._nth.call(null,chunk__42746_42750,i__42748_42752);
figwheel.client.file_reloading.reload_css_file.call(null,f_42753);

var G__42754 = seq__42745_42749;
var G__42755 = chunk__42746_42750;
var G__42756 = count__42747_42751;
var G__42757 = (i__42748_42752 + (1));
seq__42745_42749 = G__42754;
chunk__42746_42750 = G__42755;
count__42747_42751 = G__42756;
i__42748_42752 = G__42757;
continue;
} else {
var temp__4657__auto___42758 = cljs.core.seq.call(null,seq__42745_42749);
if(temp__4657__auto___42758){
var seq__42745_42759__$1 = temp__4657__auto___42758;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42745_42759__$1)){
var c__25609__auto___42760 = cljs.core.chunk_first.call(null,seq__42745_42759__$1);
var G__42761 = cljs.core.chunk_rest.call(null,seq__42745_42759__$1);
var G__42762 = c__25609__auto___42760;
var G__42763 = cljs.core.count.call(null,c__25609__auto___42760);
var G__42764 = (0);
seq__42745_42749 = G__42761;
chunk__42746_42750 = G__42762;
count__42747_42751 = G__42763;
i__42748_42752 = G__42764;
continue;
} else {
var f_42765 = cljs.core.first.call(null,seq__42745_42759__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_42765);

var G__42766 = cljs.core.next.call(null,seq__42745_42759__$1);
var G__42767 = null;
var G__42768 = (0);
var G__42769 = (0);
seq__42745_42749 = G__42766;
chunk__42746_42750 = G__42767;
count__42747_42751 = G__42768;
i__42748_42752 = G__42769;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__42741,map__42741__$1,opts,on_cssload,map__42742,map__42742__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__42741,map__42741__$1,opts,on_cssload,map__42742,map__42742__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1481381489656