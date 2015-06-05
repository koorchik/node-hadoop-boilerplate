Boilerplate for Hadoop tasks written in JavaScript
--------------------------------------------------

Install deps

> npm install

Run task locally 

> cat sample_data/twitter.data  | node tasks/count-words/mapper.js | sort -k1,1 | node tasks/count-words/reducer.js

 Build mapper and reducer for deployment

> npm run build

Test built tasks locally:

> cat sample_data/twitter.data  | ./build/count-words/mapper.js | sort -k1,1 | ./build/count-words/reducer.js


