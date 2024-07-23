const apikey ="2f6c0265ea440f3f9404b040c7503a3e";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchbtn= document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(City){
	const response = await fetch(apiUrl + City +`&appid=${apikey}`);
	


if(response.status==404){
	document.querySelector(".error").style.display="block";
	document.querySelector(".weather").style.display="none";

} else{
	
	let data = await response.json();

document.querySelector(".City").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";

	if(data.weather[0].main =="Clouds"){
		weatherIcon.src ="image/clouds.png"
	}
	 else if(data.weather[0].main =="Clear"){
		weatherIcon.src ="image/clear.png"
	}
	
	 else if(data.weather[0].main =="Rain"){
		weatherIcon.src ="image/rain.png"
	}
	
	else if(data.weather[0].main =="Drizzle"){
		weatherIcon.src ="images/drizzle.png"
	}
	
	else if(data.weather[0].main =="Mist"){
		weatherIcon.src ="image/mist.png"
	}
	document.querySelector(".weather").style.display="block";
	document.querySelector(".error").style.display="none";
}



}

searchbtn.addEventListener("click",()=>{
	checkWeather(searchBox.value);
})

