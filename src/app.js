function updateTime() {
  let nairobiCity = document.querySelector("#nairobi");

  let nairobiDate = nairobiCity.querySelector(".date");
  nairobiDate.innerHTML = moment().format("MMMM Do YYYY");

  let nairobiTime = nairobiCity.querySelector(".time");
  nairobiTime.innerHTML = moment()
    .tz("Africa/Nairobi")
    .format("h:mm:ss [<small>]A[</small>]");

  let tanzaniaCity = document.querySelector("#tanzania");

  let tzDate = tanzaniaCity.querySelector(".date");
  tzDate.innerHTML = moment().format("MMMM Do YYYY");

  let tzTime = tanzaniaCity.querySelector(".time");
  tzTime.innerHTML = moment()
    .tz("Africa/Tanzania")
    .format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1);
