$(document).ready(function() {



 $(".form").submit(function(e) {

        e.preventDefault();
    // validate and process form here  
       
      var first_name = $("input#first_name").val();

      var last_name = $("input#last_name").val();
 
      var email = $("input#email").val();

      var city = $("input#city").val();

      var state = $("select#state").val();
 
      var date_day = $("select#date_day").val();

      var date_month = $("select#date_month").val();

      var date_year = $("select#date_year").val();

      var message = $("#message").val();
 
      var toc = $("input#toc").val();

      var type_the_word = $("input#type_the_word").val();
 
      var dataString = ' first_name=' + first_name + ' &last_name=' + last_name + ' &email=' + email + ' &city=' + city + ' &state=' + state + ' &date_day=' + date_day + ' &date_month=' + date_month + ' &date_year=' + date_year + ' &message=' + message + ' &toc=' + toc + ' &type_the_word=' + type_the_word;
  
      console.log(dataString);

// ajax form
$.ajax({
  type: "POST",
  url: "sendmail.php",
  data: dataString,
  success: function() {
    $('body').css('background-color', 'rgb(150,120,140)');
    $('.change').html("Contact Form Submitted");
    $('.change2').html("We'll be in touch soon!");
    $("input#last_name").val(clear);
  }
}); //End of AJAX Form 
return false;
  });

});
