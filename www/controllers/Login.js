angular.module('starter')

  .controller('Login',function ($scope,$stateParams,$http,$state) {
    $scope.btnLogin= function (data) {
      $http.get('http://118.175.76.244:81/HouseGps/check_login.php?username=admin&password=admin').success(function(data){
var status = data[0].status ;
if(status = "OK"){
  $state.go('home');
}
        console.log(status);

      }).error(function(error) {
        console.error('error');

      })



    }
  })


