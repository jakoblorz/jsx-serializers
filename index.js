"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var createDomRenderer = exports.createDomRenderer = require("./dist/render").createDomRenderer;
var loadDomTree = exports.loadDomTree = require("./dist/render").loadDomTree;
var renderJSONDomTree = exports.renderJSONDomTree = require("./dist/json").renderJSONDomTree;
var renderHTMLDomTree = exports.renderHTMLDomTree = require("./dist/html").renderHTMLDomTree;