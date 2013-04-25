/// <amd-dependency path="jsmodule"/>
declare var require:any;

var useme = require("jsmodule")
useme.say();

export var x = 123;
import foo = module("tsmodule")
foo.say();