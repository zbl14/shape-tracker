export function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

Triangle.prototype.checkType = function() {
  if (this.side1 + this.side2 > this.side3 && this.side2 + this.side3 > this.side1 && this.side1 + this.side3 > this.side2) {
    if (this.side1 === this.side2 && this.side1 === this.side3) {   
      return "This is a equilateral.";
    } else if (this.side1 === this.side2 && this.side1 !== this.side3) {
      return "This is a isosceles."; 
    } else if (this.side1 !== this.side2 && this.side1 !==this.side3 && this.side2 !== this.side3) {
      return "This is a scalene";
    } 
  } else {
    return "It is not a triangle.";
  }
};