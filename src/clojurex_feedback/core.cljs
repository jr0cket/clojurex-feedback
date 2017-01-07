(ns clojurex-feedback.core
  (:require
   #_[om.core :as om :include-macros true]
   [sablono.core :as sab :include-macros true]
   [cljsjs.bootstrap]
   #_[cljsjs.react]
   #_[cljsjs.react.dom]
   [om.next :as om :refer-macros [defui]]
   [om.dom :as dom])
  (:require-macros
   [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)

(def talks [{:title "Introduction to DevCards"
             :abstract "A very gentle introduction to devcards for building simple single pages apps with Clojurescript"
             :speaker "Bruce Hauman"
             :twitter "bhauman"
             :github  "bhauman"
             :slides  "slides"
             :current true}
            {:title "Waiting for Scala"
             :abstract "A very dull demo watching Scala compile"
             :speaker "Andy Pandy"
             :twitter "apandy"
             :github  "apandy"
             :slides  "slides"
             :current false}
            {:title "Waiting for Scala"
             :abstract "A very dull demo watching Scala compile"
             :speaker "Andy Pandy"
             :twitter "apandy"
             :github  "apandy"
             :slides  "slides"
             :current false}])

#_(filter :current talks)

#_(def current-talk (first (filter :current talks)))

(def session-number (atom 0))

(def current-talk (atom (nth talks @session-number)) )

(def update-live-talk
  (reset! current-talk [:title] #(nth talks @session-number) ))

(defn update-talk-number []
  (if (= @session-number (- (count talks) 1))
    (do
      (reset! session-number 0)
      (update-live-talk))
    (do
      (swap! session-number inc)
      (update-live-talk))))

(defcard interactive-talk
  (fn [state-atom owner]                    ;wrapper function that can accept a state atom
    (dom/div nil
             (dom/span nil (:title @state-atom))
             (dom/br nil)
             (dom/span nil (str "Session number: " @session-number))
             (dom/button #js {:onClick update-talk-number} "Next Slide")
             (dom/br nil)
             ))
    ; The initial state as a map which devcards creates an atom from
  current-talk
  {:inspect-data true}              ; shows the current value of data, ie. state-atom
  )

;; rough code
;; (assoc current-talk [:current] false)
;; [:p "Index of current talk: " (.indexOf talks current-talk)]

(defcard next-talk
  (fn [session-number owner]                    ;wrapper function that can accept a state atom
    (dom/div nil
             (dom/button #js {:onClick update-talk-number} "Next Slide")
             ))
  session-number
  {:inspect-data true})


#_(defcard talk-slides
  (fn [state-atom owner]                    ;wrapper function that can accept a state atom
    (dom/div nil
             (dom/span nil (get @state-atom :title))
             (dom/br nil)
             (dom/button #js {:onClick #(swap! state-atom update-in [:sleepy] inc)} "Sleep")
             ))
  )

(defcard interactive-card
  (fn [state-atom owner]                    ;wrapper function that can accept a state atom
    (dom/div nil "A single top-level element."
             (dom/br nil)
             (dom/br nil)
             (dom/span nil (str "Level of awesomeness: " (:awesome @state-atom)))
             (dom/br nil)
             (dom/span nil (str "Level of goodness: " (:good @state-atom)))
             (dom/br nil)
             (dom/span nil (str "Level of sleepyness: " (:sleepy @state-atom)))
             (dom/br nil)
             (dom/button #js {:onClick #(swap! state-atom update-in [:awesome] inc)} "Awesome")
             (dom/button #js {:onClick #(swap! state-atom update-in [:good] inc)} "Good")
             (dom/button #js {:onClick #(swap! state-atom update-in [:sleepy] inc)} "Sleep")
             ))
  {:awesome 0 :good 0 :sleepy 0}  ; The initial state as a map which devcards creates an atom from
  {:inspect-data true}              ; shows the current value of data, ie. state-atom
  )


#_(interactive-card {:awesome 10 :good 10 :sleepy 10} nil)

(defcard feedback
  (sab/html [:div
             [:h1 "Please give your feedback for this session"]
             [:button "Awesome"]
             [:button "Good"]
             [:button "Made me sleepy"]]))


(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (.render js/ReactDOM (sab/html [:div "This is working"]) node)))


;; (interactive-card {:awesome 10 :good 10 :sleepy 10} nil)

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; experimentations



#_(defcard static-session
    (sab/html [:div
               [:h1 (:title current-talk)]
               [:p (:abstract current-talk)]
               [:p (:speaker current-talk)]
               ]))


#_(defui Widget
  Object
  (render [this]
          (dom/div nil
                   (dom/span nil (str "Debug: Session number: " @session-number)))))

#_(def widget (om/factory Widget))

#_(defcard widget-card (widget {}))



#_(defui WidgetWithProperties
  Object
  (render [this]
          (let [{:keys [name]} (om/props this)]
            (dom/div nil (str "Hello " name)))))

#_(def prop-widget (om/factory WidgetWithProperties))

#_(defcard props-card (prop-widget {:name "Sam"}))




;; react stuff - from soblono page


#_(defn on-change [arg]
  #_(str "On Change: " arg))

#_(defn on-key-down [arg]
  #_(str "On Key Down: " arg))


#_(defcard input-box
    (sab/html [:input
               {:auto-complete "off"
                :class "autocomplete"
                :on-change #(on-change %1)
                :on-key-down #(on-key-down %1)
                :type "text"}]))


#_(defcard first-card
    (sab/html [:div
               [:h1 "This is your first devcard!"]]))

#_(defcard talk
    (sab/html [:div
               [:h1 "Introduction to DevCards"]
               [:p "A very gentle introduction to devcards for building simple single pages apps with Clojurescript"]]))


#_(defui Root-computed
    Object
    (render [this]
            (let [session-number (om/props this)]
              (dom/div nil
                       (dom/button #js {:onClick update-talk-number} "Toggle Luck")
                       (dom/span nil
                                 (str "Session is clojure "
                                      (if (= @session-number 0) "" ", unless its scala")))))))


#_(def root-computed (om/factory Root-computed))

#_(defcard computer-says-no (root-computed))
