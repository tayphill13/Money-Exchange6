import './main.js';

export class CurrencyService {
  async getCurrencyConversion() {
    try {
      let response = await fetch("https://v6.exchangerate-api.com/v6/API_KEY/latest/USD/");
      let jsonResponse;
      if (response.ok && response.status == 200) {
        jsonResponse = await response.json();
      } else {
        jsonResponse = false;
      }
      return jsonResponse;
    } catch (error) {
      alert("The API call failed.");
    }
  }
}