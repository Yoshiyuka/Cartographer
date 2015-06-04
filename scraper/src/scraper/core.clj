(ns scraper.core
  (:gen-class)
  (:require [pl.danieljanus.tagsoup :refer :all]))

(def b 214013)
(def n 2147484985)

(defn exp [y]
  (reduce * (repeat b y)))

(defn- map-contains-map? [m x]
       (= (select-keys m (keys x)) x))

(defn by-fn [html-tree pred?]
      (if-not (vector? html-tree)
              []
              (lazy-cat
                (if (pred? html-tree)
                  [html-tree]
                  [])
                (mapcat #(by-fn %1 pred?) (children html-tree)))))

;(defn by-attribute [html-tree x]
;      (by-fn html-tree #(map-contains-map? (attributes %) x)))
(defmulti by-attribute (fn [_ x] (class x)))
(defmethod by-attribute clojure.lang.IPersistentMap
           [html-tree x]
           (by-fn html-tree #(map-contains-map? (attributes %) x)))
(defmethod by-attribute clojure.lang.Keyword
           [html-tree x]
           (by-fn html-tree #(contains? (attributes %) x)))

(defn by-tag [html-tree x]
      (by-fn html-tree #(= (tag %) x)))

;we'll have to create a method to walk through the vector tree to extract tags/attributes
(defn -main
  "Entry point to scraper methods. Pulls in data from project1999's wiki to insert into an SQLite DB."
  [& args]
  ;The main wiki page detailing the first 200 factions. This is where we will get a list of faction links to scrape
  (dorun (map #(tag %) (next parse "http://wiki.project1999.com/index.php?title=Category:Factions")))
      )