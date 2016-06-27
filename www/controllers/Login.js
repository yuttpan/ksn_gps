angular.module('starter')

  .controller('Login',function ($scope,$http,$state,$ionicPopup) {




      $scope.username = "admin" ;
      $scope.password = "" ;
    $scope.btnLogin= function (data) {
              var uname = $scope.username ;
              var pwd = $scope.password ;
              console.log(uname);

      $http.get('http://118.175.76.244:81/HouseGps/check_login.php?username='+uname+'&password='+pwd).success(function(response){
var d = response[0].status;
        var name = response[0].name;
        var username = response[0].username;
console.log(d+name+username);
if (d=="OK"){

    console.log("OO");
  var alertPopup = $ionicPopup.alert({

    template: 'ยินดีต้อนรับคุณ'+name
  });


    $state.go('main',{name:name });

}else{
  var alertPopup = $ionicPopup.alert({
    title: 'ผิดพลาด!',
    template: 'ตรวจสอบ username หรือ password'
  });


        console.log("dd");
 $state.go('login');
}



      }).error(function(error) {
        console.error('error');

      })



    }
  })


