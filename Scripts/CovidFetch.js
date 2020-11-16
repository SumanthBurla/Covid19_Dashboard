class CovidFetch {
  constructor() {
    this.covidURI = "https://api.covid19api.com/summary";
  }

  async getGobalCovidData() {
    const response = await fetch(`${this.covidURI}`);
    //console.log(response);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    }
  }

  async getCovidData() {
    const globalData = await this.getGobalCovidData();
    localStorage.setItem("countries", JSON.stringify(globalData.Countries));

    //console.log(countryData);
    // console.log(Object.keys(globalData.Global), Object.values(globalData.Global));
    const evenarr = Object.values(globalData.Global).filter((data, index) => {
      if (index % 2 === 0) {
        return data;
      }
    });
    const oddarr = Object.values(globalData.Global).filter((data, index) => {
      if (index % 2 != 0) {
        return data;
      }
    });

    let i = 0;
    countVlaues.forEach((data, index) => {
      if (index <= 2) {
        let count = evenarr[index] - 50;
        let score = evenarr[index];
        let timer = setInterval(() => {
          count++;
          data.textContent = new Intl.NumberFormat("en-US").format(count);
          if (count == score) {
            clearInterval(timer);
          }
        }, 20);
      } else {
        let count = oddarr[i] - 50;
        let score = oddarr[i];
        let timer = setInterval(() => {
          count++;
          data.textContent = new Intl.NumberFormat("en-US").format(count);
          if (count == score) {
            clearInterval(timer);
          }
        }, 20);
        i++;
      }
    });
  }
}
