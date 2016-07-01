/**
 * Created by yuttp on 1/7/2559.
 */
angular.module('starter')
  .run(function($ionicPlatform, $cordovaSQLite) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      console.log('ready');

      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }

      // Important!!
      //
      // Instantiate database file/connection after ionic platform is ready.
      //
      try {
        db = $cordovaSQLite.openDB({name:"user.db",location:'default'});
      } catch (error) {
        alert(error);
      }

      $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS Messages (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT)');


    });
  })

  .controller('userCtrl', ['$scope', '$cordovaSQLite', function($scope, $cordovaSQLite) {

    $scope.save = function(addUser) {

      // execute INSERT statement with parameter
      $cordovaSQLite.execute(db, 'INSERT INTO user (username) VALUES (?)', [newUser])
        .then(function(result) {
          $scope.statusMessage = "Message saved successful, cheers!";
        }, function(error) {
          $scope.statusMessage = "Error on saving: " + error.message;
        })

    }

    $scope.load = function() {

      // Execute SELECT statement to load message from database.
      $cordovaSQLite.execute(db, 'SELECT * FROM user ORDER BY id DESC')
        .then(
          function(res) {

            if (res.rows.length > 0) {

              $scope.newMessage = res.rows.item(0).message;
              $scope.statusMessage = "Message loaded successful, cheers!";
            }
          },
          function(error) {
            $scope.statusMessage = "Error on loading: " + error.message;
          }
        );
    }

  }])
