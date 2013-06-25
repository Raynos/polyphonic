function parseArgs(chord) {
    var first = chord[0]
    var second = chord[1]
    var fn = chord[2]

    var async = first.substr(0, 5) === "async" ? first : second
    var sync = first === async ? second : first
    var asyncName = async.slice(6)

    return { async: asyncName, sync: sync, fn: fn }
}

module.exports = poly

function poly(chords) {
    var obj = {}
    chords.forEach(function (chord) {
        chord = parseArgs(chord)
        var awaiting = []

        obj[chord.sync] = function (arg) {
            return function (callback) {
                var head = awaiting[0]
                if (awaiting.length === 0 || !("async" in head)) {
                    awaiting.push({ sync: arg, callback: callback })
                    return
                }

                awaiting.shift()
                callback(null, compute(arg, head.async))
            }
        }
        obj[chord.async] = function (arg) {
            var head = awaiting[0]
            if (awaiting.length === 0 || !("sync" in head)) {
                awaiting.push({ async: arg })
                return
            }

            awaiting.shift()
            head.callback(null, compute(head.sync, arg))
        }

        function compute(sync, async) {
            var arg = sync === undefined ? async : sync
            return chord.fn.call(obj, arg)
        }
    })
    return obj
}


var Buffer = poly([
    ["get", "async put", function (s) {
        return s
    }]
])

var OneCell = poly([
    ["async empty", "put", function (o) {
        this.contains(o)
    }],
    ["get", "async contains", function (o) {
        this.empty()
        return o
    }]
])
