angular.module('starter')
.controller('MyCtrl', function($scope, $cordovaBackgroundGeolocation) {

  var options = {
    // https://github.com/christocracy/cordova-plugin-background-geolocation#config
  };

  document.addEventListener("deviceready", function () {

    // `configure` calls `start` internally
    $cordovaBackgroundGeolocation.configure(options)
      .then(
        null, // Background never resolves
        function (err) { // error callback
          console.error(err);
        },
        function (location) { // notify callback
          console.log(location);
        });


    $scope.stopBackgroundGeolocation = function () {
      $cordovaBackgroundGeolocation.stop();
    };

  }, false);
});
