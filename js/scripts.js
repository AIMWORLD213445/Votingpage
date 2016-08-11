$(document).ready(function(){
  $("#ageSubmit").click(function() {
  		var dob = $("#born").val();
  		dob = parseInt(dob);

  		if (dob < 1998){
  			$("#ofAge").hide();
  			$("#underAge").show();
  		} else {
  			alert("Get older!");
  		}
  	});
});
