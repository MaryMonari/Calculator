//Business (Back-End) logic:
var add = function(number1, number2){
  return number1 + number2;
};

var subtract = function(number1, number2){
  return number1 - number2;
};

var multiply = function(number1, number2){
  return number1 * number2;
};

var divide = function(number1, number2){
  return number1 / number2;
};

//User interface (Front-end) logic:
$(document).ready(function() {
  $("form#math").submit(function(event) {
       event.preventDefault();
       var number1 = parseInt($("#nu1").val());
       var number2 = parseInt($("#nu2").val());
       var result = add(number1, number2);
       $("#output1").text(result);
     });
  });

$(document).ready(function() {
  $("form#math").submit(function(event) {
         event.preventDefault();
         var number1 = parseInt($("#nu1").val());
         var number2 = parseInt($("#nu2").val());
         var result = subtract(number1, number2);
         $("#output2").text(result);
       });
    });

$(document).ready(function() {
   $("form#math").submit(function(event) {
           event.preventDefault();
           var number1 = parseInt($("#nu1").val());
           var number2 = parseInt($("#nu2").val());
           var result = multiply(number1, number2);
           $("#output3").text(result);
         });
      });

$(document).ready(function() {
  $("form#math").submit(function(event) {
        event.preventDefault();
        var number1 = parseInt($("#nu1").val());
        var number2 = parseInt($("#nu2").val());
        var result = divide(number1, number2);
        $("#output4").text(result);
           });
        });
