angular.module('starter')
 .controller('MapCtrl', function($scope, $state, $cordovaGeolocation) {
     $scope.getlatlng=function(){
          var options = {timeout: 5000, enableHighAccuracy: true};
    console.log("map");
    $cordovaGeolocation.getCurrentPosition(options).then(function(position){
$scope.latitude = position.coords.latitude ;
$scope.longitude = position.coords.longitude ;
      var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      var mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    }, function(error){
      console.log("Could not get location");
    });
     }
   
  });
