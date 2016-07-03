/**
 * Created by yuttp on 1/7/2559.
 */
angular.module('starter')




  .controller('userCtrl', function($scope, $cordovaSQLite) {

    $scope.save = function(newUser) {

      $cordovaSQLite.execute(db, 'INSERT INTO user (username) VALUES (?)', [newUser])
        .then(function(result) {
          $scope.statusMessage = "Message saved successful, cheers!";
        }, function(error) {
          $scope.statusMessage = "Error on saving: " + error.message;
        })

    }
  });
