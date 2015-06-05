'use strict';
var streamingUtils = require('hadoop-streaming-utils');

streamingUtils.iterateJsonLines( function(post) {
    if (!post.text) return;

    post.text.split(/\s+/).forEach(function(word) {
        streamingUtils.emitJson(word, 1);
    });
});