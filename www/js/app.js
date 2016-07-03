// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var db ;
angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform,$cordovaSQLite) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }

    if(window.StatusBar) {
      StatusBar.styleDefault();
    } try {
      db = $cordovaSQLite.openDB({name:"user.db",location:'default'});
    } catch (error) {
      alert(error);
    }

    $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT)');


  });
})

.config(function($stateProvider,$urlRouterProvider){
  $stateProvider
    .state('home',{
      url:'/home',
      templateUrl:'templates/home.html'
    })

    .state('login',{
      url:'/login',
      controller: 'Login',
      templateUrl:'templates/login.html'
    })
    .state('map',{
      url:'/map',
    controller: 'MapCtrl',
      templateUrl:'templates/map.html'
    })
    .state('servey',{
      url:'/servey',
      controller: 'serveyCtrl',
      templateUrl:'templates/servey.html'
    })
    .state('user',{
      url:'/user',
      controller: 'userCtrl',
      templateUrl:'templates/user.html'
    })
    .state('main',{
      url:'/main',
      controller: 'main',
  params:{'name': null, 'username': null},
      templateUrl:'templates/main.html'
    })

  $urlRouterProvider.otherwise('/home')
})


