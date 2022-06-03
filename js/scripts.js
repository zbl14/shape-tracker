$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#input1").val());
    const number2 = parseInt($("#input2").val());
    const number3 = parseInt($("#input3").val());
    console.log(number1, number2, number3)
    if (number1 === number2 && number1 === number3) {
      $("#equilateral").show();
    } else if (number1 === number2 && number1 !== number3 && number1 + number2 > number3) {
      $("#isosceles").show(); 
    } else if (number1 !== number2 && number1 !==number3 && number2 !== number3 && number1 + number2 > number3 || number2 + number3 > number1 || number1 + number3 > number2) {
      $("#scalene").show();
    } else {
      $("#notATriangle").show();
    }
  });
});
