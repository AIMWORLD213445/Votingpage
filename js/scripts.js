$(document).ready(function(){
  $("#ageSubmit").click(function() {
  		var dob = parseInt($("#born").val());
  		// dob = parseInt(dob);
      console.log(dob);

  		if (isNaN(dob)) {
        alert("You are a knob");
      } else if (dob < 1998){
        $("#ofAge").show();
  			$("#underAge").hide();
  		} else {
        $("#ofAge").hide();
  			$("#underAge").show();
  		}
  	});
});
