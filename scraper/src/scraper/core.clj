(ns scraper.core
  (:gen-class))

(def b 214013)
(def n 2147484985)

(defn exp [y]
  (reduce * (repeat b y)))

(defn -main
  "Entry point to scraper methods. Pulls in data from project1999's wiki to insert into an SQLite DB."
  [& args]
      )