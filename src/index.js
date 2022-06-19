import { Triangle } from './triangle.js';

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();
    const length1 = parseInt($("#length1").val());
    const length2 = parseInt($("#length2").val());
    const length3 = parseInt($("#length3").val());
    const triangle = new Triangle(length1, length2, length3)
    const response = triangle.checkType();
    $('#response').append("<p>" + response + "</p>");
  });
});