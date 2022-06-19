$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();
    const length1 = parseInt($("#length1").val());
    const length2 = parseInt($("#length2").val());
    const length3 = parseInt($("#length3").val());
    const triangle = new Triangle(length1, length2, length3)
    const response = triangle.checkType();
    $('#response').append("<p>" + response + "</p>");

    
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
  });
});