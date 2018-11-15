function isEven(number) {
    while(number < 0 )
        number = number +2;
    
    if(number == 0)
        return true;
    if(number == 1)
        return false;
        
    var n = number-2;
    return isEven(n);
}
console.log(isEven(-82));
console.log(isEven(321));
console.log(isEven(-1));