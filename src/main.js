import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {CurrencyExchange} from './exchange-service.js';

$(document).ready(function () {
  $("#currency-exchange").submit(function(event)  {
    event.preventDefault();
    let exchangeAmount = parseInt($("money-amount").val());
    let countryConvertTo = $("conversion-select").val();
    
    (async () => {
      let moneyExchange= new CurrencyExchange();
      let apiResponse = await moneyExchange.getCurrencyConversion();
    });
  });

  // $('#submit-button').submit(function (event) {
  //     event.preventDefault();

  // });
});