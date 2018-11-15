function deepEqual(x,y) {
    if(!(typeof(x) && typeof(y) == "object") || x==null || y==null) {
        return x == y;
    }
    else {
        if(Object.keys(x).length != Object.keys(y).length) {
            return false
        }
        for(var i in x) {
            if(!deepEqual(x[i],y[i])) {
                return false
            }
        }
        return true;
    }
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));