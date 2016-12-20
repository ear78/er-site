angular.module('myApp')
    .directive('menuScroll', function($window){
        return {
            restrict: 'EA',
            link: function(scope, element, attrs){
                $(window).on('scroll', function(){
                    var scrollPosition = $(this).scrollTop();
                    if(scrollPosition > 100){
                        element.addClass('scroll-change');
                    }
                    else if(scrollPosition <= 100){
                        element.removeClass('scroll-change');
                    }
                })
            }
        }
    })
