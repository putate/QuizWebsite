$(document).ready(function(){
  $("#A1D").hide();
  $("#A2D").hide();
  $("#A3D").hide();
  $("#A4D").hide();
  $("#A5D").hide();
  //$("#Q2E").hide();
  //$("#Q3E").hide();
  //$("#Q4E").hide();
  //$("#Q5E").hide();
  //var pg=0;
   //if(pg=1)
  //{
  //$("#Q1E").hide();
  //$("#Q2E").show();
  //}
  //if(pg=2)
  //{
  //$("#Q2E").hide();
  //$("#Q3E").show();
  //}
  //if(pg=3)
  //{
  //$("#Q3E").hide();
  //$("#Q4E").show();
  //}
  //if(pg=4)
  //{
  //$("#Q4E").hide();
  //$("#Q5E").show();
  //}
  //if(pg>4)
  //{
  //pg=0;
  //}
	
	

 $("#Q1B").click(function(){
		$("#A1D").fadeToggle();
	});
 $("#Q2B").click(function(){
		$("#A2D").fadeToggle();
	});
 $("#Q3B").click(function(){
		$("#A3D").fadeToggle();
	});
 $("#Q4B").click(function(){
		$("#A4D").fadeToggle();
	});
 $("#Q5B").click(function(){
		$("#A5D").fadeToggle();
	});
 $("#Q6B").click(function(){
		pg++;
	});	


});
