const findBtn = document.querySelector(".btn-find");

const inputLocation = document.querySelector(".city-input");

async function getWeather(city) {
  try {
    const KEY = "1233205df5324f55b51193458240701";
    const res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${city}&days=3`
    );
    const data = await res.json();
    console.log("Weather Data:", data);

    const dayOne = data.forecast.forecastday[0];
    const dayTwo = data.forecast.forecastday[1];
    const dayThree = data.forecast.forecastday[2];

    console.log(data);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let d1 = new Date(dayOne.date);
    let d2 = new Date(dayOne.date);
    let d3 = new Date(dayOne.date);

    let firstDay = days[d1.getDay()];
    let secondDay = days[d2.getDay() + 1];
    let thirdDay = days[d3.getDay() + 2];
    const options = { day: "numeric", month: "long" };
    const formattedDate = d1.toLocaleDateString("en-US", options);

    console.log(`The formatted date is: ${formattedDate}`);
    let content = `<div class="col-md-12 col-lg-4">
         <div class="card border-0 bg-transparent">
          <div
            class="card-header d-flex justify-content-between px-3  "
          >
            <p class="">${firstDay}</p>
            <p>${formattedDate.split(" ").reverse().join(" ")}</p>
          </div>
          <div class="card-body p-4">
            <h5 class="card-title location">${data.location.name}</h5>
            <p
              class="card-text d-flex justify-content-around align-items-center"
            >
              <span class="text-white fw-bolder temp">
                ${Math.floor(dayOne.day.avgtemp_c)} <sup>o</sup>c
              </span>
              <i><img src="${dayOne.day.condition.icon}"/></i>
            </p>
    
            <p class="custom mb-4">${dayOne.day.condition.text}</p>
            <ul class="d-flex list-unstyled gap-4">
              <li>
                <i class="fa-solid fa-umbrella"> ${
                  dayOne.day.daily_chance_of_rain
                } %</i>
              </li>
              <li><i class="fa-solid fa-wind"></i> ${
                dayOne.day.maxwind_kph
              } km/h</li>
              <li><i class="fa-solid fa-compass"></i> East</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="col-md-12 col-lg-4">
      <div class="card border-0 h-100 bg-transparent">
        <div
          class="card-header second-header d-flex justify-content-center px-3 rounded-top-0 rounded-end-0"
        >
          <p class="">${secondDay}</p>
        </div>
        <div
          class="card-body second-body text-center p-4 rounded-bottom-0 d-flex flex-column align-items-center justify-content-center"
        >
        <i><img src="${dayTwo.day.condition.icon}"/></i>
          <p
            class="card-text d-flex flex-column justify-content-around align-items-center"
          >
            <span class="text-white fw-bolder temp fs-3 m-3 ">
            ${Math.floor(dayTwo.day.maxtemp_c)}  <sup>o</sup>c
            </span>
            <span class=" fw-light temp fs-4 ">
            ${Math.floor(dayTwo.day.avgtemp_c)}  <sup>o</sup>c
            </span>
          </p>

          <p class="custom mb-4">${dayTwo.day.condition.text}</p>
        </div>
      </div>
    </div>

    <div class="col-md-12 col-lg-4">
              <div class="card border-0 h-100 bg-transparent">
                <div
                  class="card-header third-header d-flex justify-content-center px-3 rounded-end-4 rounded-bottom-0"
                >
                  <p class="">${thirdDay}</p>
                </div>
                <div
                  class="card-body third-body text-center p-4 rounded-bottom-4 rounded-start-0 d-flex flex-column align-items-center justify-content-center"
                >
                <i><img src="${dayThree.day.condition.icon}"/></i>
                  <p
                    class="card-text d-flex flex-column justify-content-around align-items-center"
                  >
                    <span class="text-white fw-bolder temp fs-3 m-3 ">
                    ${Math.floor(dayThree.day.maxtemp_c)} <sup>o</sup>c
                    </span>
                    <span class="fw-light fw-light temp fs-4">
                    ${Math.floor(dayThree.day.avgtemp_c)} <sup>o</sup>c
                    </span>
                  </p>

                  <p class="custom mb-4">${dayThree.day.condition.text}</p>
                </div>
              </div>
            </div>
    
      `;
    document.querySelector(".forecast").innerHTML = content;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

function getCity(callback) {
  inputLocation.addEventListener("input", function (e) {
    const city = e.target.value;
    callback(city);
  });
}
if (!getCity) getWeather(alex);
getCity(function (city) {
  getWeather(city);
});

getWeather("alexandria");
// async function getWeather(city) {
//   try {
//     const KEY = "1233205df5324f55b51193458240701";
//     const res = await fetch(
//       `http://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${city}&days=3`
//     );
//     const data = await res.json();

//     const dayOne = data.forecast.forecastday[0];
//     console.log(dayOne);
//     console.log(data);
//     const days = [
//       "Sunday",
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday",
//     ];
//     let d = new Date(dayOne.date);

//     let firstDay = days[d.getDay()];
//     const options = { day: "numeric", month: "long" };
//     const formattedDate = specificDate.toLocaleDateString("en-US", options);

//     console.log(`The formatted date is: ${formattedDate}`);

//     let content = `<div class="col-md-12 col-lg-4">
//     <div class="card border-0 bg-transparent">
//       <div
//         class="card-header d-flex justify-content-between px-3  rounded-top-4 rounded-end-0"
//       >
//         <p class="">${firstDay}</p>
//         <p>${formattedDate.split(" ").reverse().join(" ")}</p>
//       </div>
//       <div class="card-body p-4">
//         <h5 class="card-title location">${data.location.name}</h5>
//         <p
//           class="card-text d-flex justify-content-around align-items-center"
//         >
//           <span class="text-white fw-bolder temp">
//             ${Math.floor(dayOne.day.avgtemp_c)} <sup>o</sup>c
//           </span>
//           <i><img src="${dayOne.day.condition.icon}"/></i>
//         </p>

//         <p class="custom mb-4">${dayOne.day.condition.text}</p>
//         <ul class="d-flex list-unstyled gap-4">
//           <li>
//             <i class="fa-solid fa-umbrella"> ${
//               dayOne.day.daily_chance_of_rain
//             } %</i>
//           </li>
//           <li><i class="fa-solid fa-wind"></i> 18km/h</li>
//           <li><i class="fa-solid fa-compass"></i> East</li>
//         </ul>
//       </div>
//     </div>
//   </div>`;
//     document.querySelector(".forecast").innerHTML = content;
//   } catch (error) {
//     console.error(error);
//   }
// }
