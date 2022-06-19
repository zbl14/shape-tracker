function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

Triangle.prototype.checkType = function() {
  return "I can't answer that yet!";

    // if (number1 + number2 > number3 && number2 + number3 > number1 && number1 + number3 > number2) {
    //   if (number1 === number2 && number1 === number3) {   
    //     $("#response").show();   
    //     $("#result").text("This is a equilateral.");
    //   } else if (number1 === number2 && number1 !== number3) {
    //     $("#conclusion").show();   
    //     $("#result").text("This is a isosceles."); 
    //   } else if (number1 !== number2 && number1 !==number3 && number2 !== number3) {
    //     $("#conclusion").show();   
    //     $("#result").text("This is a scalene");
    //   } 
    // } else {
    //   $("#conclusion").show();   
    //   $("#result").text("It is not a triangle.");
    // }
}