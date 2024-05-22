// Order module definition
var orderModule = (function () {
  var module = {},
    deliveries = myApp.deliveryModule;

  module.createOrder = function (orderData) {
    var orderResult;

    orderResult = // Code to actually create the order
      orderResult.estimatedDeliveryTime = deliveries.getDeliveryTime(orderData);

    return orderResult;
  };

  return module;
})();
