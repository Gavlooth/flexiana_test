(ns flexiana.core
  (:require-macros [macros :as m])
  (:require
    [thump.core]
    [thump.react :refer [hiccup-element]]
    [helix.hooks :as hooks]
    [helix.core :refer [<>  defnc $ provider]]
    [helix.dom :as d]
    ["react" :as react]
    ["react-dom" :as rdom]
    [goog.dom.dataset :as gdataset]
    [clojure.string :as str]
    [clojure.core.async :as async]
    [cljs.pprint :refer [cl-format]]
    [utils :as u]
    #_[clojure.core.async :as async]))


(def config (m/read-config))

(println config)


(defnc Flexiana-component []
  (let [[state set-state] (hooks/use-state {:search-results [] :search-term ""})]
    #h/e [:div {:class "central-container"}
          [:form {:on-submit #(.preventDefault %)
                  :class "pure-form search-form"}

            [:label {:for "string-1"} "input first string"]
            [:input {:name "string-1" :type "text", :class "pure-input-rounded"}
                    #_#_ :on-change #(set-state assoc :string-1 (.. % -target -value))]

            [:label {:for "string-2"} "input second string"]
            [:input {:name "string-2" :type "text", :class "pure-input-rounded"}
                    #_#_ :on-change #(set-state assoc :string-2 (.. % -target -value))]]
          [:input {:class "button-f pure-button submit-button"
                   :type "button"
                   :value "Send strings"
                   :on-click
                   (let [{{:keys [host port]} :remote-host } config]
                    (fn [_]
                      (when state
                       (async/take! (u/fetch (m/spy (cl-format nil "~a:~a" host port))
                                             {:method "get"})
                                    (fn [x]  (set-state (assoc x :search-results  (:results (js->clj (.parse js/JSON (:body x)) :keywordize-keys true)))))))))}]]))









(defn ^:export app [& _] nil
   (rdom/render  ($ Flexiana-component) (u/query-selector  "div#flexiana-webapp")))
