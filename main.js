let elbtn = document.querySelector(".header__search-btn");
let elinput = document.querySelector(".header__search-input");
let api = "a465faeababf539d725cd64ed8bbb202";

//log sidebar
// console.log(
//   fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=tashkent&appid=${api}&units=metric`
//   )
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error("Error fetching data:", error))
// );
//log sidebar list
// console.log(
//   fetch(
//     `https://api.openweathermap.org/data/2.5/forecast?q=tashkent&appid=${api}&units=metric`
//   )
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error("Error fetching data:", error))
// );

// first show
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=tashkent&appid=${api}&units=metric`
)
  .then((res) => res.json())
  .then((data) => render(data))
  .catch((error) => console.error("Error fetching data:", error));

fetch(
  `https://api.openweathermap.org/data/2.5/forecast?q=tashkent&appid=${api}&units=metric`
)
  .then((res) => res.json())
  .then((data) => renderlist(data))
  .catch((error) => console.error("Error fetching data:", error));
//

//search show
elbtn.onclick = () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${elinput.value}&appid=${api}&units=metric`
  )
    .then((res) => res.json())
    .then((data) => render(data))
    .catch((error) => console.error("Error fetching data:", error));

  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${elinput.value}&appid=${api}&units=metric`
  )
    .then((res) => res.json())
    .then((data) => renderlist(data))
    .catch((error) => console.error("Error fetching data:", error));

  elinput.value = "";
};
//

//render main data
function rendetnowdata() {
  let now = new Date();

  let day = now.getDay();
  let dayName = "";
  if (day === 0) dayName = "Sunday";
  else if (day === 1) dayName = "Monday";
  else if (day === 2) dayName = "Tuesday";
  else if (day === 3) dayName = "Wednesday";
  else if (day === 4) dayName = "Thursday";
  else if (day === 5) dayName = "Friday";
  else if (day === 6) dayName = "Saturday";

  let month = now.getMonth();
  let monthName = "";
  if (month === 0) monthName = "January";
  else if (month === 1) monthName = "February";
  else if (month === 2) monthName = "March";
  else if (month === 3) monthName = "April";
  else if (month === 4) monthName = "May";
  else if (month === 5) monthName = "June";
  else if (month === 6) monthName = "July";
  else if (month === 7) monthName = "August";
  else if (month === 8) monthName = "September";
  else if (month === 9) monthName = "October";
  else if (month === 10) monthName = "November";
  else if (month === 11) monthName = "December";

  let date = now.getDate();
  let year = now.getFullYear();

  let result = `${dayName}, ${monthName} ${date}, ${year}`;
  return result;
}
//render data 1
function renderdata(data) {
  let now = new Date(data * 1000);

  let day = now.getDay();
  let dayName = "";
  if (day === 0) dayName = "Sun";
  else if (day === 1) dayName = "Mon";
  else if (day === 2) dayName = "Tue";
  else if (day === 3) dayName = "Wed";
  else if (day === 4) dayName = "Thu";
  else if (day === 5) dayName = "Fri";
  else if (day === 6) dayName = "Sat";

  let month = now.getMonth();
  let monthName = "";
  if (month === 0) monthName = "Jan";
  else if (month === 1) monthName = "Feb";
  else if (month === 2) monthName = "Mar";
  else if (month === 3) monthName = "Apr";
  else if (month === 4) monthName = "May";
  else if (month === 5) monthName = "Jun";
  else if (month === 6) monthName = "Jul";
  else if (month === 7) monthName = "Aug";
  else if (month === 8) monthName = "Sep";
  else if (month === 9) monthName = "Oct";
  else if (month === 10) monthName = "Nov";
  else if (month === 11) monthName = "Dec";

  let date = now.getDate();

  let result = ` ${date} ${monthName}`;
  return result;
}
//render data 2
function renderdata2(data) {
  let now = new Date(data * 1000);

  let day = now.getDay();
  let dayName = "";
  if (day === 0) dayName = "Sund";
  else if (day === 1) dayName = "Mond";
  else if (day === 2) dayName = "Tues";
  else if (day === 3) dayName = "Wed";
  else if (day === 4) dayName = "Thu";
  else if (day === 5) dayName = "Frid";
  else if (day === 6) dayName = "Satu";

  let month = now.getMonth();
  let monthName = "";
  if (month === 0) monthName = "Jan";
  else if (month === 1) monthName = "Feb";
  else if (month === 2) monthName = "Mar";
  else if (month === 3) monthName = "Apr";
  else if (month === 4) monthName = "May";
  else if (month === 5) monthName = "Jun";
  else if (month === 6) monthName = "Jul";
  else if (month === 7) monthName = "Aug";
  else if (month === 8) monthName = "Sep";
  else if (month === 9) monthName = "Oct";
  else if (month === 10) monthName = "Nov";
  else if (month === 11) monthName = "Dec";

  let date = now.getDate();

  let result2 = `${dayName}`;
  return result2;
}

//render main
function render(obj) {
  // 1
  document.querySelector(".sidebar-top__inner-item-text").innerHTML =
    rendetnowdata();
  //2
  document.querySelector(".sidebar-top__inner-content-title").innerHTML =
    obj.main.temp + "°C";
  //3
  (document.querySelector(".sidebar-top__inner-item-text1").innerHTML =
    obj.name),
    obj.sys.country;
  //4
  document.querySelector(".sidebar-top__inner-main-text").innerHTML =
    obj.weather[0].description;
  //5
  document.querySelector(".sidebar__inner-right-top-sun-div").innerHTML = `
      <div class="sidebar__inner-right-top-sun">
                      <h2 class="sidebar__inner-right-top-sun-heading">
                        Sunrise & Sunset
                      </h2>
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
                            <line
                              x1="4.22"
                              y1="10.22"
                              x2="5.64"
                              y2="11.64"
                            ></line>
                            <line x1="1" y1="18" x2="3" y2="18"></line>
                            <line x1="21" y1="18" x2="23" y2="18"></line>
                            <line
                              x1="18.36"
                              y1="11.64"
                              x2="19.78"
                              y2="10.22"
                            ></line>
                            <line x1="23" y1="22" x2="1" y2="22"></line>
                            <polyline points="8 6 12 2 16 6"></polyline>
                          </svg>
                          <div class="sidebar__inner-right-top-sun-item-box">
                            <p class="sidebar__inner-right-top-sun-item-sun-box-text">Sunrise</p>
                            <h3 class="sidebar__inner-right-top-sun-item-sun-box-heading">
                            ${(
                              (new Date(obj.sys.sunrise * 1000).getUTCHours() +
                                5) %
                              24
                            )
                              .toString()
                              .padStart(2, "0")}
                              :
                            ${new Date(obj.sys.sunrise * 1000)
                              .getUTCMinutes()
                              .toString()
                              .padStart(2, "0")}
                              AM
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
                            <line
                              x1="4.22"
                              y1="10.22"
                              x2="5.64"
                              y2="11.64"
                            ></line>
                            <line x1="1" y1="18" x2="3" y2="18"></line>
                            <line x1="21" y1="18" x2="23" y2="18"></line>
                            <line
                              x1="18.36"
                              y1="11.64"
                              x2="19.78"
                              y2="10.22"
                            ></line>
                            <line x1="23" y1="22" x2="1" y2="22"></line>
                            <polyline points="16 5 12 9 8 5"></polyline>
                          </svg>
                          <div class="sidebar__inner-right-top-sun-item-box">
                            <p class="sidebar__inner-right-top-sun-item-sun-box-text">Sunset
                            </p>
                            <h3 class="sidebar__inner-right-top-sun-item-sun-box-heading">
                            ${(
                              (new Date(obj.sys.sunset * 1000).getUTCHours() +
                                5) %
                              24
                            )
                              .toString()
                              .padStart(2, "0")}
                              :
                            ${new Date(obj.sys.sunset * 1000)
                              .getUTCMinutes()
                              .toString()
                              .padStart(2, "0")}
                              PM
                            </h3>
                          </div>
                        </li>
                      </ul>
                    </div>
`;
  //6
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
  //7
  document.querySelector(".sidebar__inner-right-top-weather-list").innerHTML = `
      <li class="sidebar__inner-right-top-weather-item">
                      <span class="sidebar__inner-right-top-weather-item-span"
                        >5 Jun</span
                      >
                      <h3 class="sidebar__inner-right-top-weather-item-head">
                        8 PM
                      </h3>
                      <img
                        src="https://openweathermap.org/img/wn/04n@2x.png"
                        class="sidebar__inner-right-top-weather-item-img"
                      />
                      <h3 class="sidebar__inner-right-top-weather-item-title">
                        34.25°C
                      </h3>
                    </li>
                    <li class="sidebar__inner-right-top-weather-item">
                      <span class="sidebar__inner-right-top-weather-item-span"
                        >5 Jun</span
                      >
                      <h3 class="sidebar__inner-right-top-weather-item-head">
                        11 PM
                      </h3>
                      <img
                        src="https://openweathermap.org/img/wn/04n@2x.png"
                        class="sidebar__inner-right-top-weather-item-img"
                      />
                      <h3 class="sidebar__inner-right-top-weather-item-title">
                        32.95°C
                      </h3>
                    </li>
                    <li class="sidebar__inner-right-top-weather-item">
                      <span class="sidebar__inner-right-top-weather-item-span"
                        >6 Jun</span
                      >
                      <h3 class="sidebar__inner-right-top-weather-item-head">
                        2 AM
                      </h3>
                      <img
                        src="https://openweathermap.org/img/wn/04n@2x.png"
                        class="sidebar__inner-right-top-weather-item-img"
                      />
                      <h3 class="sidebar__inner-right-top-weather-item-title">
                        29.4°C
                      </h3>
                    </li>
                    <li class="sidebar__inner-right-top-weather-item">
                      <span class="sidebar__inner-right-top-weather-item-span"
                        >6 Jun</span
                      >
                      <h3 class="sidebar__inner-right-top-weather-item-head">
                        5 AM
                      </h3>
                      <img
                        src="https://openweathermap.org/img/wn/04d@2x.png"
                        class="sidebar__inner-right-top-weather-item-img"
                      />
                      <h3 class="sidebar__inner-right-top-weather-item-title">
                        25.89°C
                      </h3>
                    </li>
                    <li class="sidebar__inner-right-top-weather-item">
                      <span class="sidebar__inner-right-top-weather-item-span"
                        >6 Jun</span
                      >
                      <h3 class="sidebar__inner-right-top-weather-item-head">
                        8 AM
                      </h3>
                      <img
                        src="https://openweathermap.org/img/wn/04d@2x.png"
                        class="sidebar__inner-right-top-weather-item-img"
                      />
                      <h3 class="sidebar__inner-right-top-weather-item-title">
                        28.47°C
                      </h3>
                    </li>
                    <li class="sidebar__inner-right-top-weather-item">
                      <span class="sidebar__inner-right-top-weather-item-span"
                        >6 Jun</span
                      >
                      <h3 class="sidebar__inner-right-top-weather-item-head">
                        11 AM
                      </h3>
                      <img
                        src="https://openweathermap.org/img/wn/04d@2x.png"
                        class="sidebar__inner-right-top-weather-item-img"
                      />
                      <h3 class="sidebar__inner-right-top-weather-item-title">
                        31.21°C
                      </h3>
                    </li>
                    <li class="sidebar__inner-right-top-weather-item">
                      <span class="sidebar__inner-right-top-weather-item-span"
                        >6 Jun</span
                      >
                      <h3 class="sidebar__inner-right-top-weather-item-head">
                        2 PM
                      </h3>
                      <img
                        src="https://openweathermap.org/img/wn/04d@2x.png"
                        class="sidebar__inner-right-top-weather-item-img"
                      />
                      <h3 class="sidebar__inner-right-top-weather-item-title">
                        31.4°C
                      </h3>
                    </li>
                    <li class="sidebar__inner-right-top-weather-item">
                      <span class="sidebar__inner-right-top-weather-item-span"
                        >6 Jun</span
                      >
                      <h3 class="sidebar__inner-right-top-weather-item-head">
                        5 PM
                      </h3>
                      <img
                        src="https://openweathermap.org/img/wn/04d@2x.png"
                        class="sidebar__inner-right-top-weather-item-img"
                      />
                      <h3 class="sidebar__inner-right-top-weather-item-title">
                        32.44°C
                      </h3>
                    </li>
  `;
}
//render other main
function renderlist(obj) {
  //8
  document.querySelector(".sidebar-bottom__inner-list").innerHTML = `
      <li class="sidebar-bottom__inner-item">
          <img
            class="sidebar-bottom__inner-item-img"
            src="https://openweathermap.org/img/wn/${
              obj.list[0].weather[0].icon
            }@2x.png"
          />
        <h3 class="sidebar-bottom__inner-item-heading">${
          obj.list[7].main.temp + "°C"
        }</h3>
        <p class="sidebar-bottom__inner-item-text">${renderdata(
          obj.list[7].dt
        )}</p>
        <p class="sidebar-bottom__inner-item-text">${renderdata2(
          obj.list[7].dt
        )}</p>
      </li>
      <li class="sidebar-bottom__inner-item">
          <img
            class="sidebar-bottom__inner-item-img"
            src="https://openweathermap.org/img/wn/${
              obj.list[15].weather[0].icon
            }@2x.png"
          />
        <h3 class="sidebar-bottom__inner-item-heading">${
          obj.list[15].main.temp + "°C"
        }</h3>
        <p class="sidebar-bottom__inner-item-text">${renderdata(
          obj.list[15].dt
        )}}</p>
        <p class="sidebar-bottom__inner-item-text">${renderdata2(
          obj.list[15].dt
        )}</p>
      </li>
      <li class="sidebar-bottom__inner-item">
          <img
            class="sidebar-bottom__inner-item-img"
            src="https://openweathermap.org/img/wn/${
              obj.list[23].weather[0].icon
            }@2x.png"
          />
        <h3 class="sidebar-bottom__inner-item-heading">${
          obj.list[23].main.temp + "°C"
        }</h3>
        <p class="sidebar-bottom__inner-item-text">${renderdata(
          obj.list[23].dt
        )}}</p>
        <p class="sidebar-bottom__inner-item-text">${renderdata2(
          obj.list[23].dt
        )}</p>
      </li>
      <li class="sidebar-bottom__inner-item">
          <img
            class="sidebar-bottom__inner-item-img"
            src="https://openweathermap.org/img/wn/${
              obj.list[31].weather[0].icon
            }@2x.png"
          />
        <h3 class="sidebar-bottom__inner-item-heading">${
          obj.list[31].main.temp + "°C"
        }</h3>
        <p class="sidebar-bottom__inner-item-text">${renderdata(
          obj.list[31].dt
        )}}</p>
        <p class="sidebar-bottom__inner-item-text">${renderdata2(
          obj.list[31].dt
        )}</p>
      </li>
      <li class="sidebar-bottom__inner-item">
          <img
            class="sidebar-bottom__inner-item-img"
            src="https://openweathermap.org/img/wn/${
              obj.list[38].weather[0].icon
            }@2x.png"
          />
        <h3 class="sidebar-bottom__inner-item-heading">${
          obj.list[4].main.temp + "°C"
        }</h3>
        <p class="sidebar-bottom__inner-item-text">${renderdata(
          obj.list[38].dt
        )}}</p>
        <p class="sidebar-bottom__inner-item-text">${renderdata2(
          obj.list[38].dt
        )}</p>
      </li>
       
  `;
  //9
  document.querySelector(".sidebar__inner-right-top-weather-list").innerHTML = `
    <li class="sidebar__inner-right-top-weather-item">
      <span class="sidebar__inner-right-top-weather-item-span">${renderdata(
        obj.list[0].dt
      )}</span>
      <h3 class="sidebar__inner-right-top-weather-item-head">2 AM</h3>
        <img
          src="https://openweathermap.org/img/wn/${
            obj.list[0].weather[0].icon
          }@2x.png"
          class="sidebar__inner-right-top-weather-item-img"
        />
          <h3 class="sidebar__inner-right-top-weather-item-title">${
            obj.list[0].main.temp + "°C"
          }</h3>
    </li>      
    <li class="sidebar__inner-right-top-weather-item">
      <span class="sidebar__inner-right-top-weather-item-span">${renderdata(
        obj.list[1].dt
      )}</span>
      <h3 class="sidebar__inner-right-top-weather-item-head">5 AM</h3>
        <img
          src="https://openweathermap.org/img/wn/${
            obj.list[1].weather[0].icon
          }@2x.png"
          class="sidebar__inner-right-top-weather-item-img"
        />
          <h3 class="sidebar__inner-right-top-weather-item-title">${
            obj.list[1].main.temp + "°C"
          }</h3>
    </li>      
    <li class="sidebar__inner-right-top-weather-item">
      <span class="sidebar__inner-right-top-weather-item-span">${renderdata(
        obj.list[2].dt
      )}</span>
      <h3 class="sidebar__inner-right-top-weather-item-head">8 AM</h3>
        <img
          src="https://openweathermap.org/img/wn/${
            obj.list[2].weather[0].icon
          }@2x.png"
          class="sidebar__inner-right-top-weather-item-img"
        />
          <h3 class="sidebar__inner-right-top-weather-item-title">${
            obj.list[2].main.temp + "°C"
          }</h3>
    </li>      
    <li class="sidebar__inner-right-top-weather-item">
      <span class="sidebar__inner-right-top-weather-item-span">${renderdata(
        obj.list[3].dt
      )}</span>
      <h3 class="sidebar__inner-right-top-weather-item-head">11 AM</h3>
        <img
          src="https://openweathermap.org/img/wn/${
            obj.list[3].weather[0].icon
          }@2x.png"
          class="sidebar__inner-right-top-weather-item-img"
        />
          <h3 class="sidebar__inner-right-top-weather-item-title">${
            obj.list[3].main.temp + "°C"
          }</h3>
    </li>      
    <li class="sidebar__inner-right-top-weather-item">
      <span class="sidebar__inner-right-top-weather-item-span">${renderdata(
        obj.list[4].dt
      )}</span>
      <h3 class="sidebar__inner-right-top-weather-item-head">2 PM</h3>
        <img
          src="https://openweathermap.org/img/wn/${
            obj.list[4].weather[0].icon
          }@2x.png"
          class="sidebar__inner-right-top-weather-item-img"
        />
          <h3 class="sidebar__inner-right-top-weather-item-title">${
            obj.list[4].main.temp + "°C"
          }</h3>
    </li>      
    <li class="sidebar__inner-right-top-weather-item">
      <span class="sidebar__inner-right-top-weather-item-span">${renderdata(
        obj.list[5].dt
      )}</span>
      <h3 class="sidebar__inner-right-top-weather-item-head">5 PM</h3>
        <img
          src="https://openweathermap.org/img/wn/${
            obj.list[5].weather[0].icon
          }@2x.png"
          class="sidebar__inner-right-top-weather-item-img"
        />
          <h3 class="sidebar__inner-right-top-weather-item-title">${
            obj.list[5].main.temp + "°C"
          }</h3>
    </li>      
    <li class="sidebar__inner-right-top-weather-item">
      <span class="sidebar__inner-right-top-weather-item-span">${renderdata(
        obj.list[6].dt
      )}</span>
      <h3 class="sidebar__inner-right-top-weather-item-head">8 PM</h3>
        <img
          src="https://openweathermap.org/img/wn/${
            obj.list[6].weather[0].icon
          }@2x.png"
          class="sidebar__inner-right-top-weather-item-img"
        />
          <h3 class="sidebar__inner-right-top-weather-item-title">${
            obj.list[6].main.temp + "°C"
          }</h3>
    </li>      
    <li class="sidebar__inner-right-top-weather-item">
      <span class="sidebar__inner-right-top-weather-item-span">${renderdata(
        obj.list[7].dt
      )}</span>
      <h3 class="sidebar__inner-right-top-weather-item-head">11 PM</h3>
        <img
          src="https://openweathermap.org/img/wn/${
            obj.list[7].weather[0].icon
          }@2x.png"
          class="sidebar__inner-right-top-weather-item-img"
        />
          <h3 class="sidebar__inner-right-top-weather-item-title">${
            obj.list[7].main.temp + "°C"
          }</h3>
    </li>      
  `;
}
