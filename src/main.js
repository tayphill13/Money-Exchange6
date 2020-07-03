import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {CurrencyExchange} from './exchange-service.js';

$(document).ready(function () {
  $("#currency-exchange").submit(function(event)  {
    event.preventDefault();
    let exchangeAmount = parseInt($("money-amount").val());  // Use in the makeConversion function to multiply by the conversion rate
    let countryConvertTo = $("conversion-select").val();
    
    (async () => {
      let moneyExchange= new CurrencyExchange();
      let response = await moneyExchange.getCurrencyConversion();
      makeConversion(response, countryConvertTo);
    })();

    function makeConversion(response, countryConvertTo)  {  // apiResponse is the conversion rate from API call and countryConvert is the selected country for conversion
      if (!response && countryConvertTo === null)  {
        $("#result").text("There was an error, it's possible that country is not supported by this application");
      } else if (response && countryConvertTo === "swiss")  {
        $("#result").text(`${response.conversion_rates.CHF}`*exchangeAmount);
      } else if (response && countryConvertTo === "mexican")  {
        $("#result").text(`${response.conversion_rates.MXN}`*exchangeAmount);
      }
    }
  });


});