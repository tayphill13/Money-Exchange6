import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {CurrencyService} from './exchange-service.js';

$(document).ready(function () {
  $("#currency-exchange").submit(function(event)  {
    event.preventDefault();
    let exchangeAmount = parseInt($("money-amount").val());
    let countryConvertTo = $("conversion-select").val();

  });

  // $('#submit-button').submit(function (event) {
  //     event.preventDefault();

  // });
});