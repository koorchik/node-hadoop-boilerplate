Boilerplate for Hadoop tasks written in JavaScript
--------------------------------------------------

1. Install deps

> npm install

2. Run task locally 

> cat sample_data/twitter.data  | node tasks/count-words/mapper.js | sort -k1,1 | node tasks/count-words/reducer.js

3. Build mapper and reducer for deployment

> npm run build

test locally:

> cat sample_data/twitter.data  | ./build/count-words/mapper.js | sort -k1,1 | ./build/count-words/reducer.js


