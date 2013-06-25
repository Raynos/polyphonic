var test = require("tape")

var polyphonic = require("../index")

test("polyphonic is a function", function (assert) {
    assert.equal(typeof polyphonic, "function")
    assert.end()
})
