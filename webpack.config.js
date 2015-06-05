var webpack = require('webpack');
var fs = require('fs');

var entries = {};
fs.readdirSync('tasks').forEach(function(taskName) {
    if (taskName.match(/^\./)) return;

    entries[taskName + '/mapper'] = './tasks/' + taskName + '/mapper.js';
    entries[taskName + '/reducer'] = './tasks/' + taskName + '/reducer.js';
});

module.exports = {
    entry: entries,

    output: {
        path: __dirname + '/build/',
        filename: "[name].js"
    },

    module: {
        loaders: [
             { test: /\.json$/, loaders: ["json-loader"] },
        ]
    },

    target: "node"
};