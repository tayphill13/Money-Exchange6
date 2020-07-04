import './main.js';

export class CurrencyExchange {
  async getConversionRate() {
    try {
      let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      let jsonResponse;
      if (response.ok === true && response.status === 200) {
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