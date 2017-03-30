'use strict';
eyTest.factory('util',function(AppConfig,$ionicPopup){
	 return {
	        /*
	         * @method to show confirmation dialog
	         * @param title: string
             * @param content: string
             * @param responseCallback: callback function
	         */	
	        showConfirmationDialog: function (title,content,responseCallback) {
	            var confirmPopup = $ionicPopup.confirm({
                    title: title,
                    template: content
                });

                confirmPopup.then(responseCallback);
	        },
	        /*
	         * @method to show alert dialog
	         * @param title: string
             * @param content: string
             * @param responseCallback: callback function
	         */	
	        showAlertDialog: function (title,content,responseCallback) {
	            var alertPopup = $ionicPopup.alert({
                    title: title,
                    template: content
                });

                alertPopup.then(responseCallback);
	        }	        
	    };
});