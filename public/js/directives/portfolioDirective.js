angular.module('myApp')
    .directive('portfolioDirective', function(){
        return {
            restrict: 'EA',
            link: function(scope,element,attrs){
                $(window).on('scroll', function(){
                    var scrollPosition = $(this).scrollTop();
                    if(scrollPosition > 1400){
                        element.addClass('portfolio-slide');
                    }
                })
            }
        }
    })
