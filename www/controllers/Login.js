angular.module('starter')

  .controller('Login',function ($scope,$http,$state) {
      $scope.username = "" ;
    $scope.btnLogin= function (data) {
              var uname = $scope.username ;
              console.log(uname);

      $http.get('http://118.175.76.244:81/HouseGps/check_login.php?username=adin&password=admin').success(function(response){
var d = response[0].status;
console.log(d);
if (d=="OK"){
    console.log("OO");
    $state.go('home');
}else{
        console.log("dd");
 $state.go('login');
}

        

      }).error(function(error) {
        console.error('error');

      })



    }
  })


