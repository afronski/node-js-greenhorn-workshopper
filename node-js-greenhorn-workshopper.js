#!/usr/bin/env node

var path = require("path"),

    Workshopper = require("workshopper");

Workshopper({
    name: "node-js-greenhorn-workshopper",
    title: "Node.js FDD Workshop - Future Processing - 2014",

    appDir: __dirname,

    helpFile: path.join(__dirname, "help.txt"),
    creditsFile: path.join(__dirname, "credits.txt"),

    menu: {
        bg: "green"
    }
}).init()
