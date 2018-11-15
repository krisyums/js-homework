function arrayToList(array) {
    var temp = {};
    for(var i = array.length; i >0 ; i--) {
        temp = prepend(temp, array[i]) 
    }
    return temp;
}
function listToArray(list) {
    var array = [];
    for(var node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function prepend(list, element) {
    list = { 
        value : element,
        rest : list
    };
    return list;
}
function nth(list, index) {
    if( index == 0 ) return list.value;
    else return (list.rest, index-1);
}

/* TESTS */ 
var test1 = [1,2,3,4,5,6,7,8,9,10];
var test2 = [4,15,20,9999];
console.log("Tests for: arrayToList & nth");
console.log("array: "+test1+", in list on index 0: "+nth(arrayToList(test1),0)+", in list on index 5: "+nth(arrayToList(test1),5));
console.log("array: "+test2+", in list on index 1: "+nth(arrayToList(test2),1)+", in list on index 2: "+nth(arrayToList(test2),2));
console.log("Tests for: listToArray & arrayToList");
console.log("array -> list -> array: "+listToArray(arrayToList(test1)));
console.log("array -> list -> array: "+listToArray(arrayToList(test2)));