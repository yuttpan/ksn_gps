/**
 * Created by yuttp on 27/6/2559.
 */
angular.module('starter')

  .controller('main',function ($scope,$http,$state,$stateParams) {

    console.log("Main");
    var index = $stateParams.name;
    console.log(index);

  })
