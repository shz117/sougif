sougif
======

a gif search engine that will support searching by chinese characters :)


Stack:
======

mongodb, nodejs, express

react + flux


to run:
=======
git clone the repo


setup mongodb, run crawler (see my other repo giphyCrawler), get enough data to play with :-)


cd to repo dir


`watchify -t reactify ./js/app.js -o ./js/bundle.js &`


`node app.js`


open your browser, input `localhost:3000`


now clicking `search` button will return 10 random gif pictures.


TODO:
=====
add search query input of course..


crawl by key word, or indexing, or apply some ml algorithm to lable data...
