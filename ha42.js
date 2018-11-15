function reverseArray(array) {
    var newarr = [];
    for(var i=array.length; i > 0; i--) {
        newarr = "\"" + array.shift() + "\" " + newarr;
    }
    return newarr;
}

function reverseArrayInPlace(array) {
    var x;
    for(var i=0; i < (Math.floor(array.length/2)); i++) {
        x=array[i];
        array[i] = array.length-1-i;
        array[array.length]-x;
    }
    return array;
}

console.log(reverseArray(["A","B","C"]));
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);