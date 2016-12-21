angular.module('myApp')
    .directive('portfolioDirective', function(){
        return {
            restrict: 'E',
            templateUrl: '../../views/directives/portfolioDirective.html'
        }
    })
