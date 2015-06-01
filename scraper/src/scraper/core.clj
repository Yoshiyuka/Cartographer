(ns scraper.core
  (:gen-class)
  (:require [pl.danieljanus.tagsoup :as tagsoup]))

(def b 214013)
(def n 2147484985)

(defn exp [y]
  (reduce * (repeat b y)))

;we'll have to create a method to walk through the vector tree to extract tags/attributes
(defn -main
  "Entry point to scraper methods. Pulls in data from project1999's wiki to insert into an SQLite DB."
  [& args]
  ;The main wiki page detailing the first 200 factions. This is where we will get a list of faction links to scrape
  (tagsoup/parse "http://wiki.project1999.com/index.php?title=Category:Factions")
      )