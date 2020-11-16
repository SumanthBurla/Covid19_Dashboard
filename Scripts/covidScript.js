const countVlaues = document.querySelectorAll(".countSize");
const form = document.querySelector(".form");
const outputHead = document.querySelector(".name");
const outputvalues = document.querySelectorAll(".outputvalues");
const covidFetch = new CovidFetch();

covidFetch.getCovidData();

//console.log(covidFetch);
var countryData;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //console.log(form.countryName.value);
  let countryObject = JSON.parse(localStorage.getItem("countries"));
  //console.log(countryObject);
  const countryName = form.countryName.value.trim().toLowerCase();
  const countrydata = Object.values(getCountryData(countryName, countryObject));
  //console.log(countrydata);
  const filtered = countrydata.filter((data, index) => {
    if (data >= 0) {
      return data;
    }
  });
  document.querySelector(".output").classList.remove("d-none");
  outputHead.textContent = countryName.toUpperCase();
  outputvalues.forEach((output, index) => {
    output.textContent = filtered[index];
  });
  //console.log(countrydata);
  //console.log(filtered);

  form.countryName.value = "";
});

function getCountryData(countryName, countryObject) {
  //console.log(countryName, countryObject);
  countryObject.forEach((country) => {
    //console.log(country.Country.toLowerCase() == countryName);
    if (country.Country.toLowerCase() == countryName) {
      //console.log(country);
      countryData = country;
    }
  });
  //console.log(countryObject[76]);
  //const countryData = Object.values(countryObject[76]);

  return countryData;
}
