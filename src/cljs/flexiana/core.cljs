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
  (let [[{:keys [string-1 string-2  is-scrambled]:as state} set-state] (hooks/use-state {:string-1 ""  :string-2 "" :is-scrambled ""})]
    #h/e [:div {:class "central-container"}
          [:div "is scrambled?"]
          [:div {:class "display-container"} [:span is-scrambled]]
          [:form {:on-submit #(.preventDefault %)
                  :class "pure-form search-form"}

            [:label {:for "string-1"} "input first string"]
            [:input {:name "string-1" :type "text", :class "pure-input-rounded"
                     :on-change #(set-state assoc :string-1 (.. % -target -value))}]

            [:label {:for "string-2"} "input second string"]
            [:input {:name "string-2" :type "text", :class "pure-input-rounded"
                     :on-change #(set-state assoc :string-2 (.. % -target -value))}]]
          [:input {:class "button-f pure-button submit-button"
                   :type "button"
                   :value "Send strings"
                   :on-click
                   (let [{{:keys [host port]} :remote-host } config
                         uri (m/spy (cl-format nil "http://~a:~a/flexiana" host port))]
                    (fn [_]
                      (when-not (or (str/blank? string-2) (str/blank? string-1))
                       (async/take! (u/js-fetch uri (u/format-request (dissoc  state :is-scrambled) :content-type "application/json"))
                                    (fn [x]  (set-state assoc :is-scrambled (m/spy (:body x))))))))}]]))




(defn ^:export app [& _] nil
   (rdom/render  ($ Flexiana-component) (u/query-selector  "div#flexiana-webapp")))
