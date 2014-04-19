/*global task, require */

require('./lintBuild.js');
require('./lintApplication.js');
require('./buildLogging.js');

(function (task) {
    'use strict';

    task("default", [
        "Build Started Log",
        "lint build",
        "lint application",
        "Build Finished Log"]);
}(task));