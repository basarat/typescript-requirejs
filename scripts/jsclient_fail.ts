// of course you can use .d.ts for requirejs but that is beside the point
declare var require:any;

// will fail with error module has not been loaded yet for context
// http://requirejs.org/docs/errors.html#notloaded
var useme = require("jsmodule")
useme.say();

export var x = 123;
import foo = module("tsmodule")
foo.say();