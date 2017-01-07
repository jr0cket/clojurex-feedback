// Compiled by ClojureScript 1.9.229 {}
goog.provide('clojurex_feedback.core');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('cljsjs.bootstrap');
goog.require('om.next');
goog.require('om.dom');
cljs.core.enable_console_print_BANG_.call(null);
clojurex_feedback.core.talks = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"title","title",636505583),"Introduction to DevCards",new cljs.core.Keyword(null,"abstract","abstract",1319624427),"A very gentle introduction to devcards for building simple single pages apps with Clojurescript",new cljs.core.Keyword(null,"speaker","speaker",-1931331620),"Bruce Hauman",new cljs.core.Keyword(null,"twitter","twitter",-589267671),"bhauman",new cljs.core.Keyword(null,"github","github",567794498),"bhauman",new cljs.core.Keyword(null,"slides","slides",-1933049910),"slides",new cljs.core.Keyword(null,"current","current",-1088038603),true], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"title","title",636505583),"Waiting for Scala",new cljs.core.Keyword(null,"abstract","abstract",1319624427),"A very dull demo watching Scala compile",new cljs.core.Keyword(null,"speaker","speaker",-1931331620),"Andy Pandy",new cljs.core.Keyword(null,"twitter","twitter",-589267671),"apandy",new cljs.core.Keyword(null,"github","github",567794498),"apandy",new cljs.core.Keyword(null,"slides","slides",-1933049910),"slides",new cljs.core.Keyword(null,"current","current",-1088038603),false], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"title","title",636505583),"Waiting for Scala",new cljs.core.Keyword(null,"abstract","abstract",1319624427),"A very dull demo watching Scala compile",new cljs.core.Keyword(null,"speaker","speaker",-1931331620),"Andy Pandy",new cljs.core.Keyword(null,"twitter","twitter",-589267671),"apandy",new cljs.core.Keyword(null,"github","github",567794498),"apandy",new cljs.core.Keyword(null,"slides","slides",-1933049910),"slides",new cljs.core.Keyword(null,"current","current",-1088038603),false], null)], null);
clojurex_feedback.core.session_number = cljs.core.atom.call(null,(0));
clojurex_feedback.core.current_talk = cljs.core.atom.call(null,cljs.core.nth.call(null,clojurex_feedback.core.talks,cljs.core.deref.call(null,clojurex_feedback.core.session_number)));
clojurex_feedback.core.update_live_talk = cljs.core.reset_BANG_.call(null,clojurex_feedback.core.current_talk,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583)], null),(function (){
return cljs.core.nth.call(null,clojurex_feedback.core.talks,cljs.core.deref.call(null,clojurex_feedback.core.session_number));
}));
clojurex_feedback.core.update_talk_number = (function clojurex_feedback$core$update_talk_number(){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,clojurex_feedback.core.session_number),(cljs.core.count.call(null,clojurex_feedback.core.talks) - (1)))){
cljs.core.reset_BANG_.call(null,clojurex_feedback.core.session_number,(0));

return clojurex_feedback.core.update_live_talk.call(null);
} else {
cljs.core.swap_BANG_.call(null,clojurex_feedback.core.session_number,cljs.core.inc);

return clojurex_feedback.core.update_live_talk.call(null);
}
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clojurex_feedback.core","clojurex_feedback.core",278956001),new cljs.core.Keyword(null,"interactive-talk","interactive-talk",907893201)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"interactive-talk",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state_atom,owner){
return om.dom.div.call(null,null,om.dom.span.call(null,null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom))),om.dom.br.call(null,null),om.dom.span.call(null,null,[cljs.core.str("Session number: "),cljs.core.str(cljs.core.deref.call(null,clojurex_feedback.core.session_number))].join('')),om.dom.button.call(null,({"onClick": clojurex_feedback.core.update_talk_number}),"Next Slide"),om.dom.br.call(null,null));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),clojurex_feedback.core.current_talk,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clojurex_feedback.core","clojurex_feedback.core",278956001),new cljs.core.Keyword(null,"next-talk","next-talk",-46327224)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"next-talk",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (session_number,owner){
return om.dom.div.call(null,null,om.dom.button.call(null,({"onClick": clojurex_feedback.core.update_talk_number}),"Next Slide"));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),clojurex_feedback.core.session_number,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clojurex_feedback.core","clojurex_feedback.core",278956001),new cljs.core.Keyword(null,"interactive-card","interactive-card",-470226549)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"interactive-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state_atom,owner){
return om.dom.div.call(null,null,"A single top-level element.",om.dom.br.call(null,null),om.dom.br.call(null,null),om.dom.span.call(null,null,[cljs.core.str("Level of awesomeness: "),cljs.core.str(new cljs.core.Keyword(null,"awesome","awesome",76832369).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom)))].join('')),om.dom.br.call(null,null),om.dom.span.call(null,null,[cljs.core.str("Level of goodness: "),cljs.core.str(new cljs.core.Keyword(null,"good","good",511701169).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom)))].join('')),om.dom.br.call(null,null),om.dom.span.call(null,null,[cljs.core.str("Level of sleepyness: "),cljs.core.str(new cljs.core.Keyword(null,"sleepy","sleepy",1846605622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom)))].join('')),om.dom.br.call(null,null),om.dom.button.call(null,({"onClick": (function (){
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"awesome","awesome",76832369)], null),cljs.core.inc);
})}),"Awesome"),om.dom.button.call(null,({"onClick": (function (){
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"good","good",511701169)], null),cljs.core.inc);
})}),"Good"),om.dom.button.call(null,({"onClick": (function (){
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sleepy","sleepy",1846605622)], null),cljs.core.inc);
})}),"Sleep"));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"awesome","awesome",76832369),(0),new cljs.core.Keyword(null,"good","good",511701169),(0),new cljs.core.Keyword(null,"sleepy","sleepy",1846605622),(0)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clojurex_feedback.core","clojurex_feedback.core",278956001),new cljs.core.Keyword(null,"feedback","feedback",1624587107)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"feedback",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),React.createElement("div",null,React.createElement("h1",null,"Please give your feedback for this session"),React.createElement("button",null,"Awesome"),React.createElement("button",null,"Good"),React.createElement("button",null,"Made me sleepy")),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
clojurex_feedback.core.main = (function clojurex_feedback$core$main(){
var temp__4655__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__4655__auto__)){
var node = temp__4655__auto__;
return ReactDOM.render(React.createElement("div",null,"This is working"),node);
} else {
return null;
}
});
clojurex_feedback.core.main.call(null);

//# sourceMappingURL=core.js.map?rel=1481598057647