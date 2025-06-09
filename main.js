let elbtn = document.querySelector(".header__search-btn");
let elinput = document.querySelector(".header__search-input");
let api = "a465faeababf539d725cd64ed8bbb202";

let daysFull = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let monthsFull = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let monthsShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function rendetnowdata() {
  let now = new Date();
  let dayName = daysFull[now.getDay()];
  let monthName = monthsFull[now.getMonth()];
  let date = now.getDate();
  let year = now.getFullYear();
  return `${dayName}, ${monthName} ${date}, ${year}`;
}

function renderdata(timestamp) {
  let now = new Date(timestamp * 1000);
  let monthName = monthsShort[now.getMonth()];
  let date = now.getDate();
  return `${date} ${monthName}`;
}

function renderdata2(timestamp) {
  let now = new Date(timestamp * 1000);
  return daysShort[now.getDay()];
}

function render(obj) {
  // 1. Joriy sana
  document.querySelector(".sidebar-top__inner-item-text").innerHTML =
    rendetnowdata();
  // 2. Harorat
  document.querySelector(".sidebar-top__inner-content-title").innerHTML =
    obj.main.temp + "°C";
  // 3. Shahar va mamlakat
  document.querySelector(
    ".sidebar-top__inner-item-text1"
  ).innerHTML = `${obj.name}, ${obj.sys.country}`;
  // 4. Ob-havo tavsifi
  document.querySelector(".sidebar-top__inner-main-text").innerHTML =
    obj.weather[0].description;
  // 5. Quyosh chiqishi va botishi
  document.querySelector(".sidebar__inner-right-top-sun-div").innerHTML = `
    <div class="sidebar__inner-right-top-sun">
      <h2 class="sidebar__inner-right-top-sun-heading">Sunrise & Sunset</h2>
      <ul class="sidebar__inner-right-top-sun-list">
        <li class="sidebar__inner-right-top-sun-item">
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="sidebar__inner-right-top-sun-item-img"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17 18a5 5 0 0 0-10 0"></path>
            <line x1="12" y1="2" x2="12" y2="9"></line>
            <line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line>
            <line x1="1" y1="18" x2="3" y2="18"></line>
            <line x1="21" y1="18" x2="23" y2="18"></line>
            <line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line>
            <line x1="23" y1="22" x2="1" y2="22"></line>
            <polyline points="8 6 12 2 16 6"></polyline>
          </svg>
          <div class="sidebar__inner-right-top-sun-item-box">
            <p class="sidebar__inner-right-top-sun-item-sun-box-text">Sunrise</p>
            <h3 class="sidebar__inner-right-top-sun-item-sun-box-heading">
              ${((new Date(obj.sys.sunrise * 1000).getUTCHours() + 5) % 24)
                .toString()
                .padStart(2, "0")}:${new Date(obj.sys.sunrise * 1000)
    .getUTCMinutes()
    .toString()
    .padStart(2, "0")} AM
            </h3>
          </div>
        </li>
        <li class="sidebar__inner-right-top-sun-item">
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="sidebar__inner-right-top-sun-item-img"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17 18a5 5 0 0 0-10 0"></path>
            <line x1="12" y1="9" x2="12" y2="2"></line>
            <line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line>
            <line x1="1" y1="18" x2="3" y2="18"></line>
            <line x1="21" y1="18" x2="23" y2="18"></line>
            <line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line>
            <line x1="23" y1="22" x2="1" y2="22"></line>
            <polyline points="16 5 12 9 8 5"></polyline>
          </svg>
          <div class="sidebar__inner-right-top-sun-item-box">
            <p class="sidebar__inner-right-top-sun-item-sun-box-text">Sunset</p>
            <h3 class="sidebar__inner-right-top-sun-item-sun-box-heading">
              ${((new Date(obj.sys.sunset * 1000).getUTCHours() + 5) % 24)
                .toString()
                .padStart(2, "0")}:${new Date(obj.sys.sunset * 1000)
    .getUTCMinutes()
    .toString()
    .padStart(2, "0")} PM
            </h3>
          </div>
        </li>
      </ul>
    </div>
  `;

  document.querySelector(
    ".sidebar__inner-right-top-main-item-box-title1"
  ).innerHTML = obj.main.humidity + "%";
  document.querySelector(
    ".sidebar__inner-right-top-main-item-box-title2"
  ).innerHTML = obj.main.pressure + "hPA";
  document.querySelector(
    ".sidebar__inner-right-top-main-item-box-title3"
  ).innerHTML = obj.visibility / 1000 + "km";
  document.querySelector(
    ".sidebar__inner-right-top-main-item-box-title4"
  ).innerHTML = obj.wind.speed + "m/s";
  document.querySelector(
    ".sidebar__inner-right-top-main-item-box-title5"
  ).innerHTML = obj.main.feels_like + "°C";
}

function renderlist(obj) {
  document.querySelector(".sidebar-bottom__inner-list").innerHTML = `
    <li class="sidebar-bottom__inner-item">
      <img class="sidebar-bottom__inner-item-img" src="https://openweathermap.org/img/wn/${
        obj.list[0].weather[0].icon
      }@2x.png" />
      <h3 class="sidebar-bottom__inner-item-heading">${
        obj.list[7].main.temp
      }°C</h3>
      <p class="sidebar-bottom__inner-item-text">${renderdata(
        obj.list[7].dt
      )}</p>
      <p class="sidebar-bottom__inner-item-text">${renderdata2(
        obj.list[7].dt
      )}</p>
    </li>
    <li class="sidebar-bottom__inner-item">
      <img class="sidebar-bottom__inner-item-img" src="https://openweathermap.org/img/wn/${
        obj.list[15].weather[0].icon
      }@2x.png" />
      <h3 class="sidebar-bottom__inner-item-heading">${
        obj.list[15].main.temp
      }°C</h3>
      <p class="sidebar-bottom__inner-item-text">${renderdata(
        obj.list[15].dt
      )}</p>
      <p class="sidebar-bottom__inner-item-text">${renderdata2(
        obj.list[15].dt
      )}</p>
    </li>
    <li class="sidebar-bottom__inner-item">
      <img class="sidebar-bottom__inner-item-img" src="https://openweathermap.org/img/wn/${
        obj.list[23].weather[0].icon
      }@2x.png" />
      <h3 class="sidebar-bottom__inner-item-heading">${
        obj.list[23].main.temp
      }°C</h3>
      <p class="sidebar-bottom__inner-item-text">${renderdata(
        obj.list[23].dt
      )}</p>
      <p class="sidebar-bottom__inner-item-text">${renderdata2(
        obj.list[23].dt
      )}</p>
    </li>
    <li class="sidebar-bottom__inner-item">
      <img class="sidebar-bottom__inner-item-img" src="https://openweathermap.org/img/wn/${
        obj.list[31].weather[0].icon
      }@2x.png" />
      <h3 class="sidebar-bottom__inner-item-heading">${
        obj.list[31].main.temp
      }°C</h3>
      <p class="sidebar-bottom__inner-item-text">${renderdata(
        obj.list[31].dt
      )}</p>
      <p class="sidebar-bottom__inner-item-text">${renderdata2(
        obj.list[31].dt
      )}</p>
    </li>
    <li class="sidebar-bottom__inner-item">
      <img class="sidebar-bottom__inner-item-img" src="https://openweathermap.org/img/wn/${
        obj.list[39].weather[0].icon
      }@2x.png" />
      <h3 class="sidebar-bottom__inner-item-heading">${
        obj.list[39].main.temp
      }°C</h3>
      <p class="sidebar-bottom__inner-item-text">${renderdata(
        obj.list[39].dt
      )}</p>
      <p class="sidebar-bottom__inner-item-text">${renderdata2(
        obj.list[39].dt
      )}</p>
    </li>
  `;

  // Soatlik prognoz
  document.querySelector(".sidebar__inner-right-top-weather-list").innerHTML = `
    <li class="sidebar__inner-right-top-weather-item">
      <span class="sidebar__inner-right-top-weather-item-span">${renderdata(
        obj.list[0].dt
      )}</span>
      <h3 class="sidebar__inner-right-top-weather-item-head">2 AM</h3>
      <img src="https://openweathermap.org/img/wn/${
        obj.list[0].weather[0].icon
      }@2x.png" class="sidebar__inner-right-top-weather-item-img" />
      <h3 class="sidebar__inner-right-top-weather-item-title">${
        obj.list[0].main.temp
      }°C</h3>
    </li>
    <li class="sidebar__inner-right-top-weather-item">
      <span class="sidebar__inner-right-top-weather-item-span">${renderdata(
        obj.list[1].dt
      )}</span>
      <h3 class="sidebar__inner-right-top-weather-item-head">5 AM</h3>
      <img src="https://openweathermap.org/img/wn/${
        obj.list[1].weather[0].icon
      }@2x.png" class="sidebar__inner-right-top-weather-item-img" />
      <h3 class="sidebar__inner-right-top-weather-item-title">${
        obj.list[1].main.temp
      }°C</h3>
    </li>
    <li class="sidebar__inner-right-top-weather-item">
      <span class="sidebar__inner-right-top-weather-item-span">${renderdata(
        obj.list[2].dt
      )}</span>
      <h3 class="sidebar__inner-right-top-weather-item-head">8 AM</h3>
      <img src="https://openweathermap.org/img/wn/${
        obj.list[2].weather[0].icon
      }@2x.png" class="sidebar__inner-right-top-weather-item-img" />
      <h3 class="sidebar__inner-right-top-weather-item-title">${
        obj.list[2].main.temp
      }°C</h3>
    </li>
    <li class="sidebar__inner-right-top-weather-item">
      <span class="sidebar__inner-right-top-weather-item-span">${renderdata(
        obj.list[3].dt
      )}</span>
      <h3 class="sidebar__inner-right-top-weather-item-head">11 AM</h3>
      <img src="https://openweathermap.org/img/wn/${
        obj.list[3].weather[0].icon
      }@2x.png" class="sidebar__inner-right-top-weather-item-img" />
      <h3 class="sidebar__inner-right-top-weather-item-title">${
        obj.list[3].main.temp
      }°C</h3>
    </li>
    <li class="sidebar__inner-right-top-weather-item">
      <span class="sidebar__inner-right-top-weather-item-span">${renderdata(
        obj.list[4].dt
      )}</span>
      <h3 class="sidebar__inner-right-top-weather-item-head">2 PM</h3>
      <img src="https://openweathermap.org/img/wn/${
        obj.list[4].weather[0].icon
      }@2x.png" class="sidebar__inner-right-top-weather-item-img" />
      <h3 class="sidebar__inner-right-top-weather-item-title">${
        obj.list[4].main.temp
      }°C</h3>
    </li>
    <li class="sidebar__inner-right-top-weather-item">
      <span class="sidebar__inner-right-top-weather-item-span">${renderdata(
        obj.list[5].dt
      )}</span>
      <h3 class="sidebar__inner-right-top-weather-item-head">5 PM</h3>
      <img src="https://openweathermap.org/img/wn/${
        obj.list[5].weather[0].icon
      }@2x.png" class="sidebar__inner-right-top-weather-item-img" />
      <h3 class="sidebar__inner-right-top-weather-item-title">${
        obj.list[5].main.temp
      }°C</h3>
    </li>
    <li class="sidebar__inner-right-top-weather-item">
      <span class="sidebar__inner-right-top-weather-item-span">${renderdata(
        obj.list[6].dt
      )}</span>
      <h3 class="sidebar__inner-right-top-weather-item-head">8 PM</h3>
      <img src="https://openweathermap.org/img/wn/${
        obj.list[6].weather[0].icon
      }@2x.png" class="sidebar__inner-right-top-weather-item-img" />
      <h3 class="sidebar__inner-right-top-weather-item-title">${
        obj.list[6].main.temp
      }°C</h3>
    </li>
    <li class="sidebar__inner-right-top-weather-item">
      <span class="sidebar__inner-right-top-weather-item-span">${renderdata(
        obj.list[7].dt
      )}</span>
      <h3 class="sidebar__inner-right-top-weather-item-head">11 PM</h3>
      <img src="https://openweathermap.org/img/wn/${
        obj.list[7].weather[0].icon
      }@2x.png" class="sidebar__inner-right-top-weather-item-img" />
      <h3 class="sidebar__inner-right-top-weather-item-title">${
        obj.list[7].main.temp
      }°C</h3>
    </li>
  `;
}

function getstatus(index) {
  let aqi = [
    { name: "Good", class: "good" },
    { name: "Fair", class: "fair" },
    { name: "Moderate", class: "mode" },
    { name: "Poor", class: "poor" },
    { name: "Very Poor", class: "very" },
  ];
  return aqi[index - 1];
}

// Havo sifati ma'lumotlarini olish
async function getAir(lat, lon) {
  let res = await fetch(
    `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${api}`
  );
  let data = await res.json();

  let btn = document.querySelector(".sidebar__inner-right-top-index-btn");

  btn.classList.toggle(`${getstatus(data.list[0].main.aqi).class}`);
  btn.innerHTML = `${getstatus(data.list[0].main.aqi).name}`;

  document.querySelector(".sidebar__inner-right-top-air-list").innerHTML = `
      <li class="sidebar__inner-right-top-air-item">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          class="sidebar__inner-right-top-air-img"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M156.7 256H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h142.2c15.9 0 30.8 10.9 33.4 26.6 3.3 20-12.1 37.4-31.6 37.4-14.1 0-26.1-9.2-30.4-21.9-2.1-6.3-8.6-10.1-15.2-10.1H81.6c-9.8 0-17.7 8.8-15.9 18.4 8.6 44.1 47.6 77.6 94.2 77.6 57.1 0 102.7-50.1 95.2-108.6C249 291 205.4 256 156.7 256zM16 224h336c59.7 0 106.8-54.8 93.8-116.7-7.6-36.2-36.9-65.5-73.1-73.1-55.4-11.6-105.1 24.9-114.9 75.5-1.9 9.6 6.1 18.3 15.8 18.3h32.8c6.7 0 13.1-3.8 15.2-10.1C325.9 105.2 337.9 96 352 96c19.4 0 34.9 17.4 31.6 37.4-2.6 15.7-17.4 26.6-33.4 26.6H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16zm384 32H243.7c19.3 16.6 33.2 38.8 39.8 64H400c26.5 0 48 21.5 48 48s-21.5 48-48 48c-17.9 0-33.3-9.9-41.6-24.4-2.9-5-8.7-7.6-14.5-7.6h-33.8c-10.9 0-19 10.8-15.3 21.1 17.8 50.6 70.5 84.8 129.4 72.3 41.2-8.7 75.1-41.6 84.7-82.7C526 321.5 470.5 256 400 256z"
          ></path>
        </svg>
      </li>
      <li class="sidebar__inner-right-top-air-item">
        <p class="sidebar__inner-right-top-air-item-text">PM2.5</p>
        <h3 class="sidebar__inner-right-top-air-item-heading">${data.list[0].components.pm2_5}</h3>
      </li>
      <li class="sidebar__inner-right-top-air-item">
        <p class="sidebar__inner-right-top-air-item-text">PM10</p>
        <h3 class="sidebar__inner-right-top-air-item-heading">${data.list[0].components.pm10}</h3>
      </li>
      <li class="sidebar__inner-right-top-air-item">
        <p class="sidebar__inner-right-top-air-item-text">SO2</p>
        <h3 class="sidebar__inner-right-top-air-item-heading">${data.list[0].components.so2}</h3>
      </li>
      <li class="sidebar__inner-right-top-air-item">
        <p class="sidebar__inner-right-top-air-item-text">CO</p>
        <h3 class="sidebar__inner-right-top-air-item-heading">${data.list[0].components.co}</h3>
      </li>
      <li class="sidebar__inner-right-top-air-item">
        <p class="sidebar__inner-right-top-air-item-text">NO</p>
        <h3 class="sidebar__inner-right-top-air-item-heading">${data.list[0].components.no}</h3>
      </li>
      <li class="sidebar__inner-right-top-air-item">
        <p class="sidebar__inner-right-top-air-item-text">NO2</p>
        <h3 class="sidebar__inner-right-top-air-item-heading">${data.list[0].components.no2}</h3>
      </li>
      <li class="sidebar__inner-right-top-air-item">
        <p class="sidebar__inner-right-top-air-item-text">NH3</p>
        <h3 class="sidebar__inner-right-top-air-item-heading">${data.list[0].components.nh3}</h3>
      </li>
      <li class="sidebar__inner-right-top-air-item">
        <p class="sidebar__inner-right-top-air-item-text">O3</p>
        <h3 class="sidebar__inner-right-top-air-item-heading">${data.list[0].components.o3}</h3>
      </li>
    `;
  return data;
}

async function getweather() {
  let res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=tashkent&appid=${api}&units=metric`
  );

  let data = await res.json();
  render(data);
  await getAir(data.coord.lat, data.coord.lon);
}

getweather();

fetch(
  `https://api.openweathermap.org/data/2.5/forecast?q=tashkent&appid=${api}&units=metric`
)
  .then((res) => {
    return res.json();
  })
  .then((data) => renderlist(data))
  .catch((error) => console.error("Prognoz xatosi:", error));

elbtn.onclick = async () => {
  let [weatherRes, forecastRes] = await Promise.all([
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${elinput.value}&appid=${api}&units=metric`
    ),
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${elinput.value}&appid=${api}&units=metric`
    ),
  ]);

  let weatherData = await weatherRes.json();
  let forecastData = await forecastRes.json();

  render(weatherData);
  renderlist(forecastData);
  await getAir(weatherData.coord.lat, weatherData.coord.lon);

  elinput.value = "";
};
