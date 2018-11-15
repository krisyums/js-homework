function range(start, end, step) {
  var array = [];
  if(step == undefined) {
    step = 0;
  }
  if(start > end) {
    step = Math.abs(step) * -1;
  }
  for(var i = start; i <= end; i++) {
    if(i != start && i < end)
        i = i + (step-1);
    array.push(i);
    if(i > end)
        array.pop();
  }
  return array;
};

var sum = function(range) {
   var summe = 0;
  for(var i=range.length; i--;i) {
    summe = summe + range[i];
  }
  return summe;
}

console.log(range(1,15,2));
console.log(range(2,8,3));
console.log(range(6,2,2))