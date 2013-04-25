typescript-requirejs
====================

A project to demonstrate a weakness of handling requirejs with current version of typescript

All typescript files are compiled with --module amd option.

The js_client_fail fails because when you have any of
- an export statement in the typescript file
- an import statement in the typescript file
the whole file is wrapped in a define call.

This define call is not aware of the require statement you placed (unlike module statement as seen as tsclient)

A solution is not to use any exports/imports when using require("javascriptfile") calls.
This is demonstrated in jsclient_pass_a.ts

If you must use imports/exports the alternative is what is demonstrated in jsclient_pass_b.
The issue which this is that your exports / imports must go *outside* the require function call.
Here you are basically mimicking an internal define call, by a require(any:[]) call.

Word of caution: These export will only work if they are completely sufficient outside the require call below.
If you need export something "After" the require call then it cannot be done to my knowledge,
since the call to load modules for require([]:any) is async and the module export (define()) function
will return and not wait for this call to finish.