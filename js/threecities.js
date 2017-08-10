$(function() {
	$.ajax({
		type: 'GET',
		URL: 'http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&APPID=dfb0e58097645e3d87933bc75a0e2bcd',
		success: function(data) {

			console.log("sucess ", data.temp);


		}


	});


});
