$(document).ready(function(){
	getAppointments();

	$('#datePicker').change(function() {
		 var input = $('#datePicker').val();

		   $("#error").empty();

		   if (isPastDate(input)) {
		      $('#datePicker').css("background-color", "red");
		      $("#error").append("<p>Please select a date in the future!</p>");
		      return false;
		   } 
		   else {
		   	  $('#datePicker').css("background-color", "white");
		      return true;
		   }
	});
});

function getAppointments()
{
	$('#result').empty();
	$("#error").empty();
	var searchValue = $('#search').val();
	
    $.ajax({
      type: "GET",
      url: "http://localhost/AT&T/cgi/getAllData.cgi",
      data: {
         "searchValue": searchValue
      },
      async: false,
      contentType: "application/json; charset=utf-8",
      dataType: "json",

      success: function(jsonData) {

         if (Object.keys(jsonData).length == 0) {
            alert("No Result")
         } 
         else {
         	var divTag;
         	divTag = $("#result");

            divTag.append("<table id='resultTable'  class='table table-bordered'> ");

            var tableTag;
            tableTag = $("#resultTable"); 

            tableTag.append("<thead><tr><th> ID </th> <th> Date </th> <th> Time </th><th> Description </tr></th></thead>");
       
            for (var i = 0; i < jsonData.length; i++) {
               tableTag.append("<tr><td>" + jsonData[i].ID + "</td>" + "<td>" + jsonData[i].Date + "</td>" + "<td>" + jsonData[i].Time + "</td>" + "<td>" + jsonData[i].Description + "</td></tr>");
 		    }
         }
	      },
	      error: function(request, status, error) {
	         console.log(error);
	      }
	   });
}

function showAddForm() {

   $('#newButton').text('ADD');
   $('#addForm').css("display", "block");
   $('#cancelButton').css("display", "inline");

   $("#newButton").click(function() {
   	  $("#error").empty();

   	  var isvalidate = $("#addForm")[0].checkValidity();

   	  if(isvalidate)
      	 $("#addForm").submit();
      else
      	$("#error").append("<p>Please input all values!</p>");
   	 
   });
}

function hideAddForm() {
   $('#newButton').text('NEW');
   $("#newButton").unbind("click");
   $('#addForm').css("display", "none");
   $('#cancelButton').css("display", "none");
   $("#error").empty();
}

function dateValidation() {
	   var input = $('#datePicker').val();

	   $("#error").empty();

	   if (isPastDate(input)) {
	      $('#datePicker').css("background-color", "red");
	      $("#error").append("<p>Please select a date in the future!</p>");
	      return false;
	   } 
	   else {
	   	  $('#datePicker').css("background-color", "white");
	      return true;
	   }
}

function isPastDate(value) {
   return new Date() > new Date(value);
}


$('#datePicker').change(function() {
	 var input = $('#datePicker').val();

	   $("#error").empty();

	   if (isPastDate(input)) {
	      $('#datePicker').css("background-color", "red");
	      $("#error").append("<p>Please select a date in the future!</p>");
	      return false;
	   } 
	   else {
	   	  $('#datePicker').css("background-color", "white");
	      return true;
	   }
});

function showAddForm() {

   $('#newButton').text('ADD');
   $('#addForm').css("display", "block");
   $('#cancelButton').css("display", "inline");

   $("#newButton").click(function() {
   	  $("#error").empty();

   	  var isvalidate = $("#addForm")[0].checkValidity();

   	  if(isvalidate)
      	 $("#addForm").submit();
      else
      	$("#error").append("<p>Please input all values!</p>");
   	 
   });
}

function hideAddForm() {
   $('#newButton').text('NEW');
   $("#newButton").unbind("click");
   $('#addForm').css("display", "none");
   $('#cancelButton').css("display", "none");
   $("#error").empty();
}

function dateValidation() {
	   var input = $('#datePicker').val();

	   $("#error").empty();

	   if (isPastDate(input)) {
	      $('#datePicker').css("background-color", "red");
	      $("#error").append("<p>Please select a date in the future!</p>");
	      return false;
	   } 
	   else {
	   	  $('#datePicker').css("background-color", "white");
	      return true;
	   }
}

function isPastDate(value) {
   return new Date() > new Date(value);
}


