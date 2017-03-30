eyTest.value('AppConfig',{     
    demoModeEnabled: false,// for local testing purpose
});
eyTest.value('AppConst', {
	PAGE_HOME:'/home',

    URI_CONVERSION_URL: 'http://api.fixer.io/latest?base=:base&symbols=:symbols',
    MOCK_URI_CONVERSION_URL: 'mockData/getValues.json', // mockData to be retrived when there is no internet connection

    URI_GET_LOCATION_DETAILS: 'http://maps.googleapis.com/maps/api/geocode/json?latlng=:lat,:long&sensor=true',
    MOCK_URI_GET_LOCATION_DETAILS: 'mockData/getLocation.json',

    MSG_BASE_VALUE: 'Please enter the base value',
    MSG_CORRECT_CONVERSION: 'Please choose the correct conversion factors'
});