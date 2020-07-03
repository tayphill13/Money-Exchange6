export class CurrencyService {
  async getCurrencyConversion() {
    try {
      let response = await fetch("https://v6.exchangerate-api.com/v6/API_KEY/pair/USD/OTHERCURRENCY/AMOUNT");
      let jsonResponse;
      if (response.ok && response.status == 200) {
        jsonResponse = await response.json();
      } else {
        jsonResponse = false;
      }
      return jsonResponse;
    } catch (error) {
      return false;
    }
  }
}