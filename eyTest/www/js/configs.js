/**
 * @file  List of config properties of the app
 * @copyright
 * @author
 */
eyTest.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/home',
    cache: false,
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  }) 

  $urlRouterProvider.otherwise('/home');
})