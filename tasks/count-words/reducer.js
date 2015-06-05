'use strict';
var streamingUtils = require('hadoop-streaming-utils');

streamingUtils.iterateKeysWithGroupedJsonValues(function(word, counters) {
    var sum = 0;

    counters.forEach(function(count) {
        sum += count;
    });

    streamingUtils.emitJson(word, sum);
});