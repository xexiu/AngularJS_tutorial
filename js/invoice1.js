angular.module('invoice1', []) // Call the name of the app from HTML document line 12
.controller('InvoiceController', function(){
  this.qty = 1;
  this.cost = 2;
  this.inCurr = 'EUR';
  this.currencies = ['USD', 'EUR', 'CNY']; // c in invoice.currencies
  this.usdToForeignRates = {
    USD: 1,
    EUR: 0.79,
    CNY: 6.09
  };
  this.total = function total(outCurr){
    return this.convertCurrency(this.qty * this.cost, this.inCurr, outCurr);
  };
  this.convertCurrency = function convertCurrency(amount, inCurr, outCurr){
    return amount * this.usdToForeignRates[outCurr] / this.usdToForeignRates[inCurr];
  };
  this.pay = function pay(){
    alert('Thanks');
  }
});

