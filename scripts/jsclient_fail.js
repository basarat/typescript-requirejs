define(["require", "exports", "tsmodule"], function(require, exports, __foo__) {

    var useme = require("jsmodule");
    useme.say();
    exports.x = 123;
    var foo = __foo__;
    foo.say();
})
