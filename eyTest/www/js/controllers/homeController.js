'use strict';
eyTest.controller('HomeCtrl' ,function (util, $scope, $location, AppService, AppConst,  $localStorage, $timeout, $ionicLoading) {

   $timeout(function(){
       $scope.getLocation();
   }, 0);
  /*
   * @Impl for page load stuff
   */ 
	if($location.path()==AppConst.PAGE_HOME){

    // Initalizing input values
    $scope.valCurr1=0;
    $scope.valCurr2=0;

    $scope.form = {};
    // Initialzing the localStorage variable
    $localStorage.listValueArr=[];

    // Currency dropdown array
    $scope.allCurrencies=[
      {
        "curId": "INR",
        "curTitle": "Indian Rupee"
      },
      {
        "curId": "USD",
        "curTitle": "United States Dollar"
      },
      {
        "curId": "EUR",
        "curTitle": "Euro"
      },
      {
        "curId": "GBP",
        "curTitle": "British Pound Sterling"
      },
      {
        "curId": "AUD",
        "curTitle": "Australian Dollar"
      }
    ];
  
    // Initalizing the dropdown values at the load of page
    $scope.currency1 = $scope.allCurrencies[1];
    $scope.currency2 = $scope.allCurrencies[0];   
  }


  $scope.getLocation = function(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
          var lat = position.coords.latitude;
          var long = position.coords.longitude;
          console.log("Lat:"+lat + " Long:"+long);

         // Callback method for getLocation service method
         var onResponse = function (response) {
                if(typeof response == 'undefined' || response == null) {
                    console.log("onResponse error");               
                } else {         
                   console.log("onResponse success");
                   $ionicLoading.hide();
                   $scope.locationDetails = {"city":response.results[0].address_components[5].long_name, "country": response.results[0].address_components[8].long_name}
                   console.log($scope.locationDetails);
                }
          }
          AppService.getLocation(lat, long, onResponse, onResponse);
            $ionicLoading.show({
              template: '<p>Fetching locationDetails...</p><ion-spinner></ion-spinner>'
            });
      });
    } 
      
  }
  

  /*
   * @method to check if an object is empty
   * @param obj: obj to be checked
   */
  $scope.isEmptyObj = function(obj){
     for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }
  }

  /*
   * @method to convert currency
   * @param inp1: inp value 1
   * @param inp2: inp value 2
   * @param dropdn1: dropdown object 1
   * @param dropdn2: dropdown object 2
   */
  $scope.convert = function(inp1, inp2, dropdn1, dropdn2){
    // To check if base value is not null or 0
    if(inp1 == null || inp1 == 0) util.showAlertDialog("Alert",AppConst.MSG_BASE_VALUE, function(){}); 
    else {
      $scope.valCurr1=inp1;
      $scope.valCurr2=inp2;
      $scope.currency1=dropdn1;
      $scope.currency2=dropdn2;

      // Callback method for convertCurrency service method
       var onResponse = function (response) {
              if(typeof response == 'undefined' || response == null) {
                  console.log("onResponse error");               
              } else {         
                 console.log("onResponse success");

                 // Impl to convert currency if conversion response is not empty
                 if($scope.isEmptyObj(response.rates) != undefined) $scope.valCurr2 = $scope.valCurr1*response.rates[$scope.currency2.curId];
                 else util.showAlertDialog("Alert",AppConst.MSG_CORRECT_CONVERSION, function(){});

                 var baseValue = $scope.valCurr1+" "+ $scope.currency1.curId+" equals"; // Basevalue for list screen2
                 var convertedValue = $scope.valCurr2+" "+ $scope.currency2.curId+ "  |"; //Convertedvalue for list screen2

                 var listValue = {"baseValue":baseValue,"convertedValue":convertedValue,"date":response.date}; // Framing object with base value and converted value

                 $localStorage.listValueArr.push(listValue); // Pushing listValue in localStorage arr
                 
                 $scope.listValueArr = $localStorage.listValueArr; // Storing in listValueArr for displaying in Screen2

   
              }
        }
        AppService.convertCurrency($scope.currency1.curId, $scope.currency2.curId, onResponse, onResponse);
    }
  }
 	
})