// of course you can use .d.ts for requirejs but that is beside the point
declare var require:any;

// All classes / modules / export statements must go here. Outside the require function.
export var x = 123;
import foo = module("tsmodule");

require(['jsmodule'],function(jsmodule){
    var useme = require("jsmodule");
    useme.say();

    foo.say();
})
