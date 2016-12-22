angular.module('myApp')
    .directive('portfolioDirective', function(){
        return {
            restrict: 'E',
            templateUrl: '../../views/directives/portfolioDirective.html',
            link: function(){
                $('.box1, .box2').hover(function(){
                    $(this).find('.project-info-container').toggleClass('info-active');
                })
            }
        }
    })
