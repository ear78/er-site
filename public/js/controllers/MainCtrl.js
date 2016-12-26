angular.module('myApp')
    .controller('MainCtrl', function($scope, $state){
        // USED FOR CONTACT DIRECTIVE NG-SHOW/HIDE IF ON CONTACT
        $scope.$state = $state;

    });
