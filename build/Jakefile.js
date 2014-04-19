(function (jake, task, require, console) {
    'use strict';

    task("default", ["Build Started", "lint", "Build Finished"], function () {

    });

    task("lint", [], function () {
        var lint = require('./lint/lint_runner.js');
        var files = getFileList();
        lint.validateFileList(files.toArray(), getOptions(), {});
    });

    task("Build Started", function () {
        console.log("Build Started");
        console.log("==============");
        console.log("");
    });

    task("Build Finished", function () {
        console.log("");
        console.log("Build Finished");
        console.log("==============");
    });

    function getFileList() {
        var files = new jake.FileList();        
        files.include('**/*.js');
        files.exclude('node_modules');
        return files;
    }

    function getOptions() {
        return {
            node: true
        };
    }
}(jake, task, require, console));