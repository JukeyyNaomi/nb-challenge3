// javascript challenge 3

//api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}



//----------- WEATHER ---------------

// function getAPIdata(){
// //     var url = 'https://api.openweathermap.org/data/2.5/forecast';
// //     var city = "The Hague";
//         var apiKey = '525315b9d1dbd332f330f9301775cec';
//         var city = 'the%20Hague';
//         
//     var request = 'https://api.openweathermap.org/data/2.5/weather?lat={' + + '}&lon={' + + '}&appid=' + apiKey + '4&q=' + city;
//     
//     fetch(request)
//     
//     .then(function(response){
//         return response.json();
//     })
//     
//     .then(function(response){
//         console.log(response);
//         var weatherBox = document.getElementById('weather');
//         var degC = Math.round(response.main.temp - 273.15);
//         weatherBox.innerHTML = degC + '&#176;C ' + response.weather[0].description;
//     });
//     
// 
// }
// 
// getAPIdata();








//------------ MAPBOX -----------------

// Set api token
mapboxgl.accessToken = 'pk.eyJ1IjoianVrZXl5bmFvbWkiLCJhIjoiY2tta2w3bWZuMTI2cDJ3cTRreHpieTYyMSJ9.fWpZmqQ2X-KJF0km8eKM3A';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
        // long lat
  center: [4.322840, 52.067101],
  zoom: 15,
});
 
 
 
 
// Add the control to the map.
var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    types: 'country,region,place,postcode,locality,neighborhood'
});



geocoder.addTo('#geocoder');
    
geocoder.on('result', function(response){

  map.flyTo({
    center: [response.result.center[0], response.result.center[1]],
    essential: true,
    speed: 2,
    zoom: 12    
    }); 
        
    var request = 'https://api.openweathermap.org/data/2.5/weather?lat=' + response.result.center[1] + '&lon=' + response.result.center[0] + '&appid=525315b9d1dbd332f330f9301775cec4';
    
    fetch(request)
    
    .then(function(responseWeather){
        return responseWeather.json();
    })
    
    .then(function(responseWeather){
        console.log(responseWeather);
        var weatherBox = document.getElementById('weather');
        var degC = Math.round(responseWeather.main.temp - 273.15);
        weatherBox.innerHTML = degC + '&#176;C ' + responseWeather.weather[0].description + '<br> <img src="http://openweathermap.org/img/wn/'+ responseWeather.weather[0].icon +'@2x.png" alt=""/> <br>' + responseWeather.name;
        
        var windStrength = document.getElementById('wind');
        var landing = document.getElementById('landing');
        windStrength.innerHTML = 'The current wind speed is: <br><br>' + Math.round(responseWeather.wind.speed);
        
//         var popup = new mapboxgl.Popup().setHTML('<h3>' + responseWeather.name + '</h3>');
        
//         var marker = new mapboxgl.Marker({color: 'orange'})
//             .setLngLat([response.result.center[0], response.result.center[1]])
//             .setPopup(popup)
//             .addTo(map);
        
        if (Math.round(responseWeather.wind.speed) < 4){
            landing.innerHTML = 'Landing permission status: <br><br>' + 'approved.';
            
            var popup = new mapboxgl.Popup().setHTML('<h3>' + responseWeather.name + '</h3><h4>This location is currently safe enough to land.</h4>');
            
            var marker = new mapboxgl.Marker({color: 'green'})
            .setLngLat([response.result.center[0], response.result.center[1]])
            .setPopup(popup)
            .addTo(map);
            
        }
        else {
            landing.innerHTML = 'Landing permission status: <br><br>' + ' denied.';
            
            var popup = new mapboxgl.Popup().setHTML('<h3>' + responseWeather.name + '</h3><h4>This location is currently unsafe due to the high wind speed. Try again some other time or find another location.</h4>');
            
            var marker = new mapboxgl.Marker({color: 'red'})
            .setLngLat([response.result.center[0], response.result.center[1]])
            .setPopup(popup)
            .addTo(map);
        }
        
        
       
// 	"x-rapidapi-key": "a795613167msh9676ea5e4128fe1p1d7191jsna37aac9c7f76",


//         fetch("https://wikimedia-image-search.p.rapidapi.com/wiki/?query=Elon%20Musk&results=12&page=1", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "a795613167msh9676ea5e4128fe1p1d7191jsna37aac9c7f76",
// 		"x-rapidapi-host": "wikimedia-image-search.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

    });
         console.log(response.result.center);
 }); 
 






//------------ INVULLING MAP --------------

// var popup = new mapboxgl.Popup().setHTML('<h3>De Haagse Hogeschool</h3><p>Is momenteel dicht.</p>');
// 
// var marker = new mapboxgl.Marker()
//   .setLngLat([4.324439, 52.067200])
//   .setPopup(popup)
//   .addTo(map);
  
  
//   var popup = new mapboxgl.Popup().setHTML('<h3>De Haagse Hogeschool</h3><p>Is momenteel dicht.</p>');
// 
// var marker = new mapboxgl.Marker()
//     .setLngLat([4.324439, 52.067200])
//     .setPopup(popup)
//     .addTo(map);

// var marker1 = new mapboxgl.Marker({color: "red"})
//     .setLngLat([4.866883848739579, 52.310576770207135])
//     .addTo(map);
// 
// var marker2 = new mapboxgl.Marker({color: "red"})
//     .setLngLat([85.30993453506457, 27.688210579644643])
//     .addTo(map);
// 
// var marker3 = new mapboxgl.Marker({color: "red"})
//     .setLngLat([23.479962884083793, 41.83851201722553])
//     .addTo(map);
// 
// var marker4 = new mapboxgl.Marker({color: "red"})
//     .setLngLat([116.08559222581098, -8.355898595070398])
//     .addTo(map);
// 
// var marker5 = new mapboxgl.Marker({color: "red"})
//     .setLngLat([-12.417207159328822, 8.414146368871183])
//     .addTo(map);
// 
// var marker6 = new mapboxgl.Marker({color: "red"})
//     .setLngLat([-15.429146323682794, 28.14823798460778])
//     .addTo(map);
  
  
// map.flyTo({
//     center: [0,0
//         //coordinates
//     ],
//     essential: true,
//     speed: 0.2,
//     zoom: 2
// 
// }); 


