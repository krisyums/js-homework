function Vector(x,y) {
    this.x = x;
    this.y = y;
    Object.defineProperty(this, "length", {
        get: function() { 
           return Math.sqrt(this.x * this.x + this.y * this.y);
        }
    }); 
}

Vector.prototype.minus = function(newvector) {
    return new Vector((this.x - newvector.x), (this.y - newvector.y));
}

Vector.prototype.plus = function(newvector) {
    return new Vector((this.x + newvector.x), (this.y + newvector.y));
}

/* TESTS */
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);
//own tests
var v1 = new Vector(4,2);
var v2 = new Vector(3,1);
var v3 = v1.plus(v2);
var v4 = v1.minus(v2);
console.log(v3);
console.log(v4);
console.log(new Vector(3,7).length);