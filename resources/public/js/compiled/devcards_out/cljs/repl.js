// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__42772){
var map__42797 = p__42772;
var map__42797__$1 = ((((!((map__42797 == null)))?((((map__42797.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42797.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42797):map__42797);
var m = map__42797__$1;
var n = cljs.core.get.call(null,map__42797__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__42797__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__42799_42821 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42800_42822 = null;
var count__42801_42823 = (0);
var i__42802_42824 = (0);
while(true){
if((i__42802_42824 < count__42801_42823)){
var f_42825 = cljs.core._nth.call(null,chunk__42800_42822,i__42802_42824);
cljs.core.println.call(null,"  ",f_42825);

var G__42826 = seq__42799_42821;
var G__42827 = chunk__42800_42822;
var G__42828 = count__42801_42823;
var G__42829 = (i__42802_42824 + (1));
seq__42799_42821 = G__42826;
chunk__42800_42822 = G__42827;
count__42801_42823 = G__42828;
i__42802_42824 = G__42829;
continue;
} else {
var temp__4657__auto___42830 = cljs.core.seq.call(null,seq__42799_42821);
if(temp__4657__auto___42830){
var seq__42799_42831__$1 = temp__4657__auto___42830;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42799_42831__$1)){
var c__25609__auto___42832 = cljs.core.chunk_first.call(null,seq__42799_42831__$1);
var G__42833 = cljs.core.chunk_rest.call(null,seq__42799_42831__$1);
var G__42834 = c__25609__auto___42832;
var G__42835 = cljs.core.count.call(null,c__25609__auto___42832);
var G__42836 = (0);
seq__42799_42821 = G__42833;
chunk__42800_42822 = G__42834;
count__42801_42823 = G__42835;
i__42802_42824 = G__42836;
continue;
} else {
var f_42837 = cljs.core.first.call(null,seq__42799_42831__$1);
cljs.core.println.call(null,"  ",f_42837);

var G__42838 = cljs.core.next.call(null,seq__42799_42831__$1);
var G__42839 = null;
var G__42840 = (0);
var G__42841 = (0);
seq__42799_42821 = G__42838;
chunk__42800_42822 = G__42839;
count__42801_42823 = G__42840;
i__42802_42824 = G__42841;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_42842 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24798__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24798__auto__)){
return or__24798__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_42842);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_42842)))?cljs.core.second.call(null,arglists_42842):arglists_42842));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__42803_42843 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42804_42844 = null;
var count__42805_42845 = (0);
var i__42806_42846 = (0);
while(true){
if((i__42806_42846 < count__42805_42845)){
var vec__42807_42847 = cljs.core._nth.call(null,chunk__42804_42844,i__42806_42846);
var name_42848 = cljs.core.nth.call(null,vec__42807_42847,(0),null);
var map__42810_42849 = cljs.core.nth.call(null,vec__42807_42847,(1),null);
var map__42810_42850__$1 = ((((!((map__42810_42849 == null)))?((((map__42810_42849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42810_42849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42810_42849):map__42810_42849);
var doc_42851 = cljs.core.get.call(null,map__42810_42850__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42852 = cljs.core.get.call(null,map__42810_42850__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42848);

cljs.core.println.call(null," ",arglists_42852);

if(cljs.core.truth_(doc_42851)){
cljs.core.println.call(null," ",doc_42851);
} else {
}

var G__42853 = seq__42803_42843;
var G__42854 = chunk__42804_42844;
var G__42855 = count__42805_42845;
var G__42856 = (i__42806_42846 + (1));
seq__42803_42843 = G__42853;
chunk__42804_42844 = G__42854;
count__42805_42845 = G__42855;
i__42806_42846 = G__42856;
continue;
} else {
var temp__4657__auto___42857 = cljs.core.seq.call(null,seq__42803_42843);
if(temp__4657__auto___42857){
var seq__42803_42858__$1 = temp__4657__auto___42857;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42803_42858__$1)){
var c__25609__auto___42859 = cljs.core.chunk_first.call(null,seq__42803_42858__$1);
var G__42860 = cljs.core.chunk_rest.call(null,seq__42803_42858__$1);
var G__42861 = c__25609__auto___42859;
var G__42862 = cljs.core.count.call(null,c__25609__auto___42859);
var G__42863 = (0);
seq__42803_42843 = G__42860;
chunk__42804_42844 = G__42861;
count__42805_42845 = G__42862;
i__42806_42846 = G__42863;
continue;
} else {
var vec__42812_42864 = cljs.core.first.call(null,seq__42803_42858__$1);
var name_42865 = cljs.core.nth.call(null,vec__42812_42864,(0),null);
var map__42815_42866 = cljs.core.nth.call(null,vec__42812_42864,(1),null);
var map__42815_42867__$1 = ((((!((map__42815_42866 == null)))?((((map__42815_42866.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42815_42866.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42815_42866):map__42815_42866);
var doc_42868 = cljs.core.get.call(null,map__42815_42867__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42869 = cljs.core.get.call(null,map__42815_42867__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42865);

cljs.core.println.call(null," ",arglists_42869);

if(cljs.core.truth_(doc_42868)){
cljs.core.println.call(null," ",doc_42868);
} else {
}

var G__42870 = cljs.core.next.call(null,seq__42803_42858__$1);
var G__42871 = null;
var G__42872 = (0);
var G__42873 = (0);
seq__42803_42843 = G__42870;
chunk__42804_42844 = G__42871;
count__42805_42845 = G__42872;
i__42806_42846 = G__42873;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__42817 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__42818 = null;
var count__42819 = (0);
var i__42820 = (0);
while(true){
if((i__42820 < count__42819)){
var role = cljs.core._nth.call(null,chunk__42818,i__42820);
var temp__4657__auto___42874__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___42874__$1)){
var spec_42875 = temp__4657__auto___42874__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_42875));
} else {
}

var G__42876 = seq__42817;
var G__42877 = chunk__42818;
var G__42878 = count__42819;
var G__42879 = (i__42820 + (1));
seq__42817 = G__42876;
chunk__42818 = G__42877;
count__42819 = G__42878;
i__42820 = G__42879;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__42817);
if(temp__4657__auto____$1){
var seq__42817__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42817__$1)){
var c__25609__auto__ = cljs.core.chunk_first.call(null,seq__42817__$1);
var G__42880 = cljs.core.chunk_rest.call(null,seq__42817__$1);
var G__42881 = c__25609__auto__;
var G__42882 = cljs.core.count.call(null,c__25609__auto__);
var G__42883 = (0);
seq__42817 = G__42880;
chunk__42818 = G__42881;
count__42819 = G__42882;
i__42820 = G__42883;
continue;
} else {
var role = cljs.core.first.call(null,seq__42817__$1);
var temp__4657__auto___42884__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___42884__$2)){
var spec_42885 = temp__4657__auto___42884__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_42885));
} else {
}

var G__42886 = cljs.core.next.call(null,seq__42817__$1);
var G__42887 = null;
var G__42888 = (0);
var G__42889 = (0);
seq__42817 = G__42886;
chunk__42818 = G__42887;
count__42819 = G__42888;
i__42820 = G__42889;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1481381489758