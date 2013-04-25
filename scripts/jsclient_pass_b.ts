// of course you can use .d.ts for requirejs but that is beside the point
declare var require:any;

// All classes / modules / export statements must go here. Outside the require function.
import foo = module("tsmodule");
// These export will only work if they are completely sufficient outside the require call below.
// If you need export something "After" the require call then it cannot be done to my knowledge,
// since that call is async
export var x = 123;


require(['jsmodule'],function(jsmodule){
    var useme = require("jsmodule");
    useme.say();

    foo.say();
})
