function countBs(s) {
    var counter = 0;
    for (var i = 0; i < s.length; i++)
        if (s.charAt(i) == "B")
            counter++;
    return counter;
}
console.log("Bs:" + countBs("BennyBros"));
console.log("Bs:" + countBs("ABCdEfGGG"));
console.log("Bs:" + countBs("BlaBlaBla"));

console.log("--------------------halvingthecode----------------------");

function countChar(s, c) {
    var counter = 0;
    for (var i = 0; i < s.length; i++)
        if (s.charAt(i) == c)
            counter++;
    return counter;
}
console.log("Duck says:" + countChar("Donald Duck", "D"));
console.log("Duck says:" + countChar("Donald Duck is a duck", "k"));
console.log("Duck says:" + countChar("Donald Duck is a duck without pants", "a"));
console.log("Duck says:" + countChar("Donald Duck is a duck without pants but has a nice hat", "t"));