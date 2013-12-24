#!/usr/bin/env node

var path = require("path"),

    Workshopper = require("workshopper");

Workshopper({
    name: "nodejs-greenhorn",
    title: "FDD Workshop - Future Processing - 2014",

    appDir: __dirname,

    helpFile: path.join(__dirname, "help.txt"),
    creditsFile: path.join(__dirname, "credits.txt")
}).init()
