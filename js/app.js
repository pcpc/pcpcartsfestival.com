$(document).foundation();

/* dates below */
$( document ).ready(function() {
  var current = new Date();
  var regstarts  = new Date("March 15, 2014 00:00:00")
  var regends = new Date("March 28, 2014 12:00:00")

  if(current.getTime()<regends.getTime() && current.getTime()>regstarts.getTime()){
    $('#registrationlink').show();
  }
});
