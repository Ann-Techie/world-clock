function updateTime() {
  let nairobiCity = document.querySelector("#nairobi");
  if (nairobiCity) {
    let nairobiDate = nairobiCity.querySelector(".date");
    nairobiDate.innerHTML = moment().format("MMMM Do YYYY");

    let nairobiTime = nairobiCity.querySelector(".time");
    nairobiTime.innerHTML = moment()
      .tz("Africa/Nairobi")
      .format("h:mm:ss [<small>]A[</small>]");
  }

  let djiboutiCity = document.querySelector("#djibouti");
  if (djiboutiCity) {
    let djiboutiDate = djiboutiCity.querySelector(".date");
    djiboutiDate.innerHTML = moment().format("MMMM Do YYYY");

    let djiboutiTime = djiboutiCity.querySelector(".time");
    djiboutiTime.innerHTML = moment()
      .tz("Africa/Djibouti")
      .format("h:mm:ss [<small>]A[</small>]");
  }
}

function updateTimeZone(event) {
  let city = event.target.value;

  if (city === "current") {
    city = moment.tz.guess();
  }
  let cityTimeZone = moment().tz(city);
  let cityName = city.replace("-", " ").split("/")[1];
  let citiesHtml = document.querySelector("#cities");
  citiesHtml.innerHTML = `    <div class="city">
          <div>
  <h2>${cityName}</h2>

            <div class="date">${cityTimeZone.format("dddd MMMM Do, YYYY")}</div>
          </div>
          <div class="time">${cityTimeZone.format(
            "h:mm:ss"
          )} <small>${cityTimeZone.format("A")}</small></div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1);

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateTimeZone);
