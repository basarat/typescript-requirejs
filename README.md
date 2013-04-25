typescript-requirejs
====================

A project to demonstrate a weakness of handling requirejs with current version of typescript

All typescript files are compiled with --module amd option.

The js_client_fail fails because when you have any of
- an export statement in the typescript file
- an import statement in the typescript file
the whole file is wrapped in a define call.

This define call is not aware of the require statement you placed (unlike module statement as seen as tsclient)

**Alternatives**:

*Solution 1*
A solution is not to use any exports/imports when using require("javascriptfile") calls.
This is demonstrated in jsclient_pass_a.ts

*Solution 2*
If you must use imports/exports the alternative is to use require ([]). This is demonstrated in jsclient_pass_b.ts

Issue here is you still can't export something that depends on the require([]) call to complete as define()) function
will return and not wait for this call to finish. Additional issue is that your exports / imports must go *outside* the require function call.
Here you are basically mimicking an internal define call, by a require(any:[]) call.


**Permanent solution (please vote)**: 
https://typescript.codeplex.com/workitem/948

**Stackoverflow Question**
http://stackoverflow.com/questions/16213406/typescript-amd-implementation-bad-with-javascript-requirejs

