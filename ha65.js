const numbers = [-9, 8, -7, 6, -5, 4, -3, 2, -1, 0, 1, -2, 3, -4, 5, -6, 7, -8, 9];

/** REDUCE **/
console.log("reduce: ");
console.log( numbers.reduce( (acc, cur) => acc + cur ) );
console.log( numbers.reduce( (acc, cur) => acc * cur ) );

/** MAP **/
console.log("map: " + numbers.map( function(x) 
                            { if(x < 0) return "negative"; 
                            else return "positive"; }) )

/** FOREACH **/
numbers.forEach( function(x) { 
                    console.log("value: " + x);} );

/** FILTER **/ 
console.log("filter: " + numbers.filter( x => x%4 == 0 ) );

/** EVERY **/
console.log("every: " + numbers.every( x => x != 0 ) );

/**SOME **/
console.log("some: " + numbers.some( x => x > 3 ) );

/** FIND **/
console.log("find: " + numbers.find( x => x%6 == 0 && x < 0 ) );

/** SORT **/
console.log("sort: " + numbers.sort() );
console.log("sort: " + numbers.sort( function(x,y) { return y-x;}) + " reverse: " + numbers.reverse());
console.log("properly sort: " + numbers.sort( function(x,y) {
                                        if(x<y) return -1; 
                                        if(x>y) return 1; 
                                        else return 0;}) );
