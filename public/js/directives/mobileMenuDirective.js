angular.module('myApp')
    .directive('mobileMenuDirective', function(){
        return {
            restrict: 'E',
            templateUrl: '../../views/directives/mobileMenuDirective.html',
            link: function(scope, elem, attrs){
                //SETTING VALUE FOR TOGGLE
                scope.toggleMobileMenu = false;
                //ON CLICK EVENT TOGGLE
                scope.openMobileMenu = function(){
                    scope.toggleMobileMenu = !scope.toggleMobileMenu;
                }

                //ON CLICK CLOSE EVENT
                scope.closeMobileMenu = function(){
                    scope.toggleMobileMenu = !scope.toggleMobileMenu;
                }
            }
        }
    })
