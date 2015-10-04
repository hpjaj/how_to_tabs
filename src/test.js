(function() {
  "use strict";

  var assert = require("chai").assert;

  describe("Addition", function() {

    it("adds positve numbers", function() {
      assertEqual(add(3, 4), 7);
    });

    it("uses IEEE 754 floating point", function() {
      assertEqual(add(0.1, 0.2), 0.30000000000000004);
    });

    function assertEqual(actual, expected) {
      if (actual !== expected) throw new Error("expected");
    }

  });



  function add(a, b){
    return a + b;
  }

}());
