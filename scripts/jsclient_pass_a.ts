// of course you can use .d.ts for requirejs but that is beside the point
declare var require:any;


var useme = require("jsmodule");
useme.say();

var x = 123;
var foo = require("tsmodule");
foo.say();