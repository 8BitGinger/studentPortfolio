
//This is the weather API section:
const apiKey = "5eb79fc09e1638a0fb6c8df9283a6d51";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&"

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})

async function checkWeather(city) {
    const response = await fetch(apiURL + `&q=${city}` + `&appid=${apiKey}`);

    if (response.status == 404) {
      document.querySelector(".error").style.display = "block";


    } else {
      document.querySelector(".error").style.display = "none";
    var data = await response.json();

    var temp = data.main.temp;
    var newTemp = Math.round(temp);
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = newTemp + `°<span class="degree">f</span>`;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%" + "-";
    document.querySelector(".wind").innerHTML = data.wind.speed + " mph";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "assets/images/cloudy.png";
    } else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "assets/images/sunny.png";
    } else if(data.weather[0].main == "Thunderstorm"){
        weatherIcon.src = "assets/images/storm.png";
    } else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "assets/images/rain.png";
    } else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "assets/images/snow.png";
    } else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "assets/images/rain.png";

       

}}

};

const myLocation = "san antonio";

checkWeather(myLocation);


//This is the Time and Date Section
const dateStamp = dayjs().format('MM - DD - YYYY');
const timeStamp = dayjs().format('hh:mm');
// const dateEl = document.getElementById('date-time');
// dateEl.innerHTML = "<br>" + dateStamp + "<br>" + "at" + "<br>" + timeStamp;



//This is all the Modal JS
const open = document.getElementById('open');
const modal = document.getElementById('modal-container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal.classList.remove('hide');
});

close.addEventListener('click', () => {
  modal.classList.add('hide');
  var obj = document.createElement('audio');
  obj.src = './assets/audio/rockNroll.mp3'; 
  obj.play();
});



//This is all the Sound JS
$('.icon').on('click', function () { 
    var obj = document.createElement('audio');
    obj.src = './assets/audio/clicks-main.mp3'; 
    obj.play(); 
  });


$('.nav-link').on('click', function() {
  var obj = document.createElement('audio');
  obj.src = './assets/audio/clicks-main.mp3'; 
  obj.play(); 
})

//this is for the draggable features
function handle_mousedown(e){

  window.my_dragging = {};
  my_dragging.pageX0 = e.pageX;
  my_dragging.pageY0 = e.pageY;
  my_dragging.elem = this;
  my_dragging.offset0 = $(this).offset();

  function handle_dragging(e){
      var left = my_dragging.offset0.left + (e.pageX - my_dragging.pageX0);
      var top = my_dragging.offset0.top + (e.pageY - my_dragging.pageY0);
      $(my_dragging.elem)
      .offset({top: top, left: left});
  }

  function handle_mouseup(e){
      $('body')
      .off('mousemove', handle_dragging)
      .off('mouseup', handle_mouseup);
  }

  $('body')
  .on('mouseup', handle_mouseup)
  .on('mousemove', handle_dragging);
}

$('#weather-card').mousedown(handle_mousedown);