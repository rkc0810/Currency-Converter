eyTest.factory('AppService', function($http,AppConst,AppConfig){
	
	var service = {};
    
    /*
    * @method to convertCurrency
    * @param base:
    * @param symbols:
    * @param successCallback:
    * @param errorCallback:
    */ 
    service.convertCurrency = function(base,symbols,successCallback, errorCallback) {
         var URI = AppConfig.demoModeEnabled?AppConst.MOCK_URI_CONVERSION_URL:AppConst.URI_CONVERSION_URL.replace(':base',base).replace(':symbols',symbols);
         var method = 'GET';
         var req = {'method': method,'url': URI};
         $http(req).then(
        /*SUCCESS*/
        function(response) {
            //console.log(response,"getuploaded")
            console.log('convertCurrency:SUCCESS')
            if (successCallback && typeof (successCallback) === "function") {
                successCallback(response.data);

            } else {
                 console.log('convertCurrency: successCallback not defined.');
            }
            
        },
        /*ERROR*/
        function(response) {
            console.log("convertCurrency:ERROR");
            if (errorCallback && typeof (errorCallback) === "function") {
                errorCallback(response.data);
            } else {
                console.log('convertCurrency: errorCallback not defined.');                        
            }
            
        });
    }; 
    /*
    * @method to getLocation
    * @param lat:
    * @param long:
    * @param successCallback:
    * @param errorCallback:
    */ 
    service.getLocation = function(lat,long,successCallback, errorCallback) {
         var URI = AppConfig.demoModeEnabled?AppConst.MOCK_URI_GET_LOCATION_DETAILS:AppConst.URI_GET_LOCATION_DETAILS.replace(':lat',lat).replace(':long',long);
         var method = 'GET';
         var req = {'method': method,'url': URI};
         $http(req).then(
        /*SUCCESS*/
        function(response) {
            //console.log(response,"getuploaded")
            console.log('getLocation:SUCCESS')
            if (successCallback && typeof (successCallback) === "function") {
                successCallback(response.data);

            } else {
                 console.log('getLocation: successCallback not defined.');
            }
            
        },
        /*ERROR*/
        function(response) {
            console.log("getLocation:ERROR");
            if (errorCallback && typeof (errorCallback) === "function") {
                errorCallback(response.data);
            } else {
                console.log('getLocation: errorCallback not defined.');                        
            }
            
        });
    };

	return service;
});
