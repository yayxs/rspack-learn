"use strict";

console.log("babel");

var foo = function foo() {
  console.log("foo");
};

[1, 2, 3].map(function (n) {
  return n + 1;
});
