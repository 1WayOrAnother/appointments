$(document).ready(function() {
	$("#formOne").submit(function(event) {
  event.preventDefault();
	var nameInput = $("input#add1").val();
	var descriptionInput = $("input#add2").val();
  var dateInput = $("input#add1").val();
  var startInput = $("input#add2").val();
  var endInput = $("input#add2").val();
	$("#addoutput").text(addresult);
 	});
});
