$(function(){
	//need to add local time for each city
	
	
	$.ajax({
		type: 'GET',
		url: 'http://api.openweathermap.org/data/2.5/group?id=5946768,6619347,4699066&units=imperial&APPID=',
		success: function(data){
			
			var city1 = data.list[0].name;
			var country1 = data.list[0].sys.country;
			var temp1 = data.list[0].main.temp;
			var description1 = data.list[0].weather[0].description;
			var humidity1 = data.list[0].main.humidity;
			var wind1 = data.list[0].wind.speed;
			var maxtemp1 = data.list[0].main.temp_max;
			var mintemp1 = data.list[0].main.temp_min;
			var iconCode = data.list[0].weather[0].icon;
			var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";

			//Navi mumbai
			var city2 = data.list[1].name;
			var country2 = data.list[1].sys.country;
			var temp2 = data.list[1].main.temp;
			var description2 = data.list[1].weather[0].description;
			var humidity2 = data.list[1].main.humidity;
			var wind2 = data.list[1].wind.speed;
			var maxtemp2 = data.list[1].main.temp_max;
			var mintemp2 = data.list[1].main.temp_min;
			var iconCode2 = data.list[1].weather[0].icon;
			var iconUrl2 = "http://openweathermap.org/img/w/" + iconCode + ".png";


			//houston
			var city3 = data.list[2].name;
                        var country3 = data.list[2].sys.country;
                        var temp3 = data.list[2].main.temp;
                        var description3 = data.list[2].weather[0].description;
			var humidity3 = data.list[2].main.humidity;                           	
                        var wind3 = data.list[2].wind.speed;
                        var maxtemp3 = data.list[2].main.temp_max;
                        var mintemp3 = data.list[2].main.temp_min;
                        var iconCode3 = data.list[2].weather[0].icon;
                        var iconUrl3 = "http://openweathermap.org/img/w/" + iconCode + ".png";

			//console.log('country1: ', country1);
			//console.log('city1: ', city1);
			//console.log('success: ', data);
			console.log('max  ', data.list[0].main.temp_max);
			console.log('min ', data.list[0].main.temp_min);
		
			//edmonton	
			$('.city1').text(city1 + ',' + country1);
			$('.tempt1').text('Temperature: ' + temp1 + ' °F');
			$(".icon1").html("<img src='" + iconUrl  + "'>");
			$('.descript1').text(description1);
			$('.humi1').text('Humidity: ' + humidity1 + '%');
			$('.win1').text('Wind: '  + wind1 + ' mph');
			$('.mt1').text('Max Temperature: ' +  maxtemp1 + ' °F');
			$('.min1').text('Min Temperature: ' + mintemp1 + ' °F');	
			
			//Navi Mumbai
			$('.city2').text(city2 + ',' + country2);
                        $('.tempt2').text('Temperature: ' + temp2 + ' °F');
                        $(".icon2").html("<img src='" + iconUrl2  + "'>");
                        $('.descript2').text(description2);
                        $('.humi2').text('Humidity: ' + humidity2 + '%');
                        $('.win2').text('Wind: '  + wind2 + ' mph');
                        $('.mt2').text('Max Temperature: ' +  maxtemp2 + ' °F');
                        $('.min2').text('Min Temperature: ' + mintemp2 + ' °F');	
			
			//houston
			$('.city3').text(city3 + ',' + country3);
       		        $('.tempt3').text('Temperature: ' + temp3 + ' °F');
     		        $(".icon3").html("<img src='" + iconUrl3  + "'>");
       		        $('.descript3').text(description3);
			$('.humi3').text('Humidity: ' + humidity3 + '%');
                        $('.win3').text('Wind: '  + wind3 + ' mph');
                        $('.mt3').text('Max Temperature: ' +  maxtemp3 + ' °F');
                        $('.min3').text('Min Temperature: ' + mintemp3 + ' °F');




					
		}




	});

});
