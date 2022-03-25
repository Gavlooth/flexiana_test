(ns flexiana.core
  (:require
    #_[clojure.pprint :refer [cl-format]]
    [clojure.tools.logging :as log]
    [ring.middleware.params :as params]
    #_[ring.middleware.multipart-params :refer [wrap-multipart-params]]
    #_[ring.util.request :refer [body-string]]
    [reitit.ring.middleware.muuntaja :as muuntaja]
    [muuntaja.core :as m]
    [reitit.ring.coercion :as coercion]
    [reitit.ring :as ring]
    [ring.adapter.jetty :as jetty]
    [utils :as u])
  (:import (org.eclipse.jetty.util.log Log)
           (org.eclipse.jetty.util.log StdErrLog)))


(def system {})

(defn scrambled? [string1 string2]
   (let [ [matching-string string-to-match]  (mapv frequencies [string1 string2])]
     (not
       (some (fn [[k v]]
              (not
               (when-let [v2  (get matching-string k)]
                 (>=  v2 v))))
            (seq string-to-match)))))


(def router
 (ring/ring-handler
  (ring/router
   [["/flexiana"
       {:get {:handler    (fn [{{{:keys [str1 str2]} :query} :parameters}]
                            (scrambled? str1 str2))}}]]
   {:data {:muuntaja m/instance
           :middleware [
                        params/wrap-params
                        muuntaja/format-middleware
                        coercion/coerce-exceptions-middleware
                        coercion/coerce-request-middleware
                        coercion/coerce-response-middleware]}})
  (ring/create-default-handler
    {:not-found (constantly {:status 404, :body "Not found"})
     :method-not-allowed (constantly {:status 405, :body "Method not allowed"})
     :not-acceptable (constantly {:status 406, :body "Not acceptable"})})))


(defn start-server [&  [opts]]
  (let [server  (jetty/run-jetty router (merge {:port 9001, :join? false :async? true} opts))]
      (alter-var-root #'system assoc :web-server server)))


(defn shutdown-system []
 (fn []
    (when-let [ web-server (:web-server system)]
      (try (.stop web-server)
           (catch Exception exp (log/info (.getMessage exp)))))))


(defn -main  [& _]
  (try
    (Log/setLog (new StdErrLog))
    (let [config (u/read-config)]
      (start-server  (merge system config)))
    (catch Exception exp (log/info (.getMessage exp)))))



;; (.addShutdownHook
;;  (Runtime/getRuntime)
;;  (Thread.  (shutdown-system )))
