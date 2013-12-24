"use strict";

var fs = require("fs"),
    path = require("path"),
    os = require("os"),

    boganipsum = require("boganipsum"),
    onlyAsync = require("workshopper/verify-calls").verifyOnlyAsync;

module.exports = function () {
    var lines = Math.ceil(Math.random() * 50),
        txt = boganipsum({ paragraphs: lines }),
        file = path.join(os.tmpDir(), "node_js_greenhorn_workshopper" + process.pid + ".tmp"),
        trackFile = path.join(os.tmpDir(), "node_js_greenhorn_workshopper" + process.pid + ".json");

    fs.writeFileSync(file, txt, "utf8");

    return {
        args: [ file ],
        stdin: null,

        modUseTrack: {
            trackFile: trackFile,
            modules: [ "fs" ]
        },

        verify: onlyAsync.bind(null, trackFile)
    };
};