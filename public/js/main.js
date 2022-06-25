const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const submitBtn=document.getElementById('submitBtn');
const temp_real_val=document.getElementById('temp_real_val');
const temp_status=document.getElementById('temp_status');
const datahide=document.querySelector('.middle_layer');

const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    if(cityVal===""){
        city_name.innerText=`Please write the city name before search`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=c5b627022c7c4e0a59b1f5fdd02e200b`;
            const response=await fetch(url);
            const data=await response.json();
            // console.log(data);
            const arrData=[data];
            
            datahide.classList.remove('data_hide');
            city_name.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText=arrData[0].main.temp;
            // temp_status.innerText=arrData[0].weather[0].main;
            const temp_mood=arrData[0].weather[0].main;

            // condition to check sunny or cloudy
            if(temp_mood=="Clear"){
            temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }   else if(temp_mood="Clouds") {
                temp_status.innerHTML="<i class='fas fa-clouds' style='color:#f1f2f6;'></i>";
            } else if(temp_mood="Rain"){
                temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
            }   else{
                temp_status.innerHTML="<i class='fas fa-cloud' style='color:#a4b0be;'></i>";
            } 

        }catch{
            city_name.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`;
        city_name.innerText=`Please write the city name properly`;
        datahide.classList.remove('data_hide');
        }
        
       
    }
}


submitBtn.addEventListener('click',getInfo);