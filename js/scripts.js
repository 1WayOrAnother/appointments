$(document).ready(function() {
	$("#formOne").submit(function(event) {
	var nameInput = $("input#name").val();
	var descriptionInput = $("input#description").val();
  var dateInput = $("input#date").val();
  var startInput = $("input#start").val();
  var endInput = $("input#end").val();
  var info = "Your appointment details: " + nameInput + ", " + descriptionInput + ", " + dateInput + ", " + startInput + ", " + endInput;

  $(".name").text(nameInput);
  $(".description").text(descriptionInput);
  $(".date").text(dateInput);
  $(".start").text(startInput);
  $(".end").text(endInput);

  event.preventDefault();

  alert(info);
	//$("#addoutput").text(addresult);
 	});
});
