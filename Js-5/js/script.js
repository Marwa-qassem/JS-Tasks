
async function search(locat) {
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=fad3d0eaebb0492b886143118221810&q=${locat}&days=3`)

    if (response.status == 200) {
        let locat = await response.json();
        displayCurrent(locat.location, locat.current),
        displayNext(locat.forecast.forecastday)
    }
}
document.getElementById("search").addEventListener("keyup", a =>{search(a.target.value)})

let days = [ 'Monday','Tuesday','Wednesday','Thursday','Friday'];
let months = ['January', 'February','March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December']

function displayCurrent( locat, response) {
    if ( null != response) {

        let e = new Date(response.last_updated) 
        let temp = ` <div class="today-header d-flex p-3 pb-0 ">
                        <p class="day ">${days[e.getDay()]}</p>
                        <p class="date ms-auto">${e.getDate() + months[e.getMonth()]}</p>
                    </div>
                    <div class="today-weather p-3 px-0">
                        <p class="m-3"> ${locat.name} </p>
                       <div class="weather-degree d-flex m-3 ">
                           <h1 class="">${response.temp_c}<sup>o</sup>C</h1>
                           <img src="${response.condition.icon}" alt="" class="ms-auto w-25">
                        </div> 
                        <p class="text-info m-3">${response.condition.text}</p>
                        <div class="wind m-3">
                            <img src="imgs/icon-umberella.png" alt="">
                            <span class="pe-3">20%</span>
                            <img src="imgs/icon-wind.png" alt="" srcset="">
                            <span class=" pe-3">18km/h</span>
                            <img src="imgs/icon-compass.png" alt="" srcset="">
                            <span class="pe-3">East</span>
                        </div>
                    </div>` 
        document.getElementById("forecast").innerHTML = temp;
    }
}


weatherList = []

function displayNext(weatherList) {
    let temp = '';
    for (let i = 1; i < weatherList.length; i++) {
        temp += ` <div class="col-md-4 p-0">
        <div class="table-header-md  d-flex justify-content-center  p-3 pb-0 ">
            <p class="day">${days[new Date(weatherList[i]).getDay()]}</p>
        </div>
        <div class="table-weather-md pt-4 px-0 d-flex flex-column align-items-center ">
           <div class="weather-degree m-3 d-flex flex-column align-items-center">
               <img src="${weatherList[i].day.condition.icon}" alt="" class="w-50 pb-2">
               <h3 class="my-3 text-white">${weatherList[i].day.maxtemp_c}<sup>o</sup>C</h3>
               <p>${weatherList[i].day.mintemp_c}<sup>o</sup>C</p>
            </div> 
            <div class="w-100">
                <p class="text-info mb-3 pt-0 text-center">${weatherList[i].day.condition.text}</p>
            </div>
        </div>
    </div>`
    };
    document.getElementById("nextForecast").innerHTML = temp
}
search("Cairo")
