(function (jake, task, require, console) {
    'use strict';

    task("default", ["Build Started", "lint build", "lint application", "Build Finished"], function () {

    });

    task("lint build", [], function () {
        var lint = require('./lint/lint_runner.js');
        var files = getBuildFileList();
        lint.validateFileList(files.toArray(), getBuildOptions(), {});
    });
    
    task("lint application", [], function () {
        var lint = require('./lint/lint_runner.js');
        var files = getApplicationFileList();
        lint.validateFileList(files.toArray(), getApplicationOptions(), {});
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

    function getBuildFileList() {
        var files = new jake.FileList();
        files.include('./build/**/*.js');
        files.exclude('node_modules');
        return files;
    }

    function getBuildOptions() {
        return {
            node: true
        };
    }
    
    function getApplicationFileList() {
        var files = new jake.FileList();
        files.include('**/*.js');
        files.exclude('build');
        return files;
    }

    function getApplicationOptions() {
        return {

        };
    }
}(jake, task, require, console));