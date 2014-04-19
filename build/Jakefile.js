task("default", ["Build Started", "lint", "Build Finished"], function() {

});

task("lint", [], function() {
    var lint = require('./lint/lint_runner.js');
    lint.validateFile('./build/Jakefile.js', {});
});

task("Build Started", function() {
    console.log("Build Started");
    console.log("==============");
    console.log("");
});

task("Build Finished", function() {
    console.log("");
    console.log("Build Finished");
    console.log("==============");
});
