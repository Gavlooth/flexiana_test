(namespace  flexiana.utils  )

(def read-config
  (memoize
    (fn read-config*
      ([] (read-config* {}))
      ([ {:keys [enviroment]}]
       (info "Reading config")
       (merge
        (let [config-file(io/file "config/config.edn")]
          (when (.exists config-file)
            (read-string (slurp config-file))))
        (try
          (some-> (or enviroment "EMTEC_CONFIG")
                  System/getenv (str/replace #"\s" "")
                  decode64 read-string)
          (catch Exception ex (log/info "Error reading enviromental string:" (.getMessage ex)))))))))
