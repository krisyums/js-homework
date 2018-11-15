function Sequence(values) {
    this.values = values;
    var counter = 0;
    var end = false;
    Object.defineProperty(this, "next", {
        get: function() {
            if(counter == (this.values.length - 1)) end = true;
            counter++;
            return this.values[counter-1];
        } 
    });
}

function ArraySequence(array) {
    Sequence.call(this,array);
}

function RangeSequence(start, end) {
    var array = [];
    for(var i = start; i <= end; i++) {
        array.push(i);
    }
    ArraySequence.call(this,array);
}

function logFive(sequence) {
    for(var i = 0 ; i < 5; i++) {
        var next = sequence.next;
        var value = next;
        var done = sequence.end;
        if(next.end) break;
        else console.log((i+1) + ": " + sequence.next);
    }
    console.log("--------------------");
}

/* TESTS */
logFive(new ArraySequence(["a","b","c","d","e","f"]));
logFive(new RangeSequence(20,35));
logFive(new RangeSequence(100, 1000));
logFive(new ArraySequence([1,3,5]));