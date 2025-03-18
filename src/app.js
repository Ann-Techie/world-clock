let intervalId;

function updateTime() {
  let nairobiCity = document.querySelector("#nairobi");
  if (nairobiCity) {
    let nairobiDate = nairobiCity.querySelector(".date");
    let nairobiTime = nairobiCity.querySelector(".time");

    nairobiDate.innerHTML = moment().format("MMMM Do YYYY");
    nairobiTime.innerHTML = moment()
      .tz("Africa/Nairobi")
      .format("h:mm:ss [<small>]A[</small>]");
  }

  let djiboutiCity = document.querySelector("#djibouti");
  if (djiboutiCity) {
    let djiboutiDate = djiboutiCity.querySelector(".date");
    let djiboutiTime = djiboutiCity.querySelector(".time");

    djiboutiDate.innerHTML = moment().format("MMMM Do YYYY");
    djiboutiTime.innerHTML = moment()
      .tz("Africa/Djibouti")
      .format("h:mm:ss [<small>]A[</small>]");
  }
}

function updateTimeZone(event) {
  clearInterval(intervalId); // Clear previous interval

  let city = event.target.value;
  if (city === "current") {
    city = moment.tz.guess();
  }
  let cityName = city.replace("-", " ").split("/")[1];
  let citiesHtml = document.querySelector("#cities");

  function updateSelectedCity() {
    let cityTimeZone = moment().tz(city);
    citiesHtml.innerHTML = `    
      <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTimeZone.format("dddd MMMM Do, YYYY")}</div>
        </div>
        <div class="time">${cityTimeZone.format("h:mm:ss")} 
          <small>${cityTimeZone.format("A")}</small>
        </div>
      </div>
      <a href="index.html">All Cities</a>
    `;
  }

  updateSelectedCity();
  intervalId = setInterval(updateSelectedCity, 1000); // Update every second
}

updateTime();
setInterval(updateTime, 1000);

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateTimeZone);
