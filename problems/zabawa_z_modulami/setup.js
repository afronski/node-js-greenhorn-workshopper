"use strict";

var path = require("path"),
    os = require("os"),

    requires = require("workshopper/fetch-requires"),
    onlyAsync = require("workshopper/verify-calls").verifyOnlyAsync,

    fileForTrackingRequires = path.join(os.tmpDir(), "node_js_greenhorn_workshopper" + process.pid + ".json");

function verify(fileWithRequiredModules, callback) {
    onlyAsync(fileWithRequiredModules, function (err) {
        if (err) {
            callback(err);
            return;
        }

        requires(fileWithRequiredModules, function (err, mainModuleName, required) {
            var requiredModuleName,
                createdModule;

            if (err) {
                callback(err);
                return;
            }

            if (required.length === 1) {
                callback(new Error("Brakuje modulu!"));
                return;
            }

            requiredModuleName = required.filter(function (name) { return name !== mainModuleName })[0];
            createdModule = require(requiredModuleName);

            console.log(createdModule.add(1, 2));
            console.log(createdModule.sub(1, 2));

            callback();
        });
    });
}

module.exports = function () {
    return {
        args: [],
        stdin: null,

        modUseTrack: {
            trackFile: fileForTrackingRequires,
            modules: [ "fs" ]
        },

        verify: verify.bind(null, fileForTrackingRequires)
    };
};