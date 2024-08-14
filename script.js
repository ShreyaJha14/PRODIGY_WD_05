var temp=document.getElementById('temp');
 var cityName=document.getElementById('city')
 var humidity=document.getElementById('humidity')
 var windspeed=document.getElementById('windspeed')
 var searchinput=document.getElementById('searchinput');
 var serchbox=document.getElementById('serchbox')
 var body_img=document.getElementById('body_img');

 var body_data=document.getElementById('body_data')
 var deatil=document.getElementById('deatil')
 var error=document.getElementById('error')





    async function checkWeather(city) {
        let Upi_key='6879a3bc20be46e79aeb4557b1f6b42a'
        let repsponse= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Upi_key}&units=metric`);
        let data= await repsponse.json();

  
        
    temp.innerHTML=Math.floor(data.main.temp )+'°C';
    cityName.innerHTML=data.name;
    humidity.innerHTML=data.main.humidity +"%";
    windspeed.innerHTML=data.wind.speed+'km/h';
    console.log(data)

  
    

    
    if (data.weather[0].main=="Clouds") {
        body_img.src='images/cloud.png'
    }
     else if (data.weather[0].main=='Clear') {
        body_img.src='images/clear-sky.png'
    }
    else if (data.weather[0].main=='Rain') {
        body_img.src='images/rain.png'
    }
    else if (data.weather[0].main=='Drizzle') {
        body_img.src='images/drizzle.png'
    }
    else if (data.weather[0].main=='Mist') {
        body_img.src='images/mist.png'
    }
    else if (data.weather[0].main=='Haze') {
        body_img.src='images/haze.png'
    }
     body_data.style.display='flex';
     deatil.style.display='flex';
   

     }
     

      serchbox.addEventListener('click',()=>
      {
          let cityIn = searchinput.value;
          checkWeather(cityIn);
         
      })