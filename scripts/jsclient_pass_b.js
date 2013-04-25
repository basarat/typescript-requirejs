define(["require", "exports", "tsmodule"], function(require, exports, __foo__) {

    var foo = __foo__;
    exports.x = 123;
    require([
        'jsmodule'
    ], function (jsmodule) {
        var useme = require("jsmodule");
        useme.say();
        foo.say();
    });
})
