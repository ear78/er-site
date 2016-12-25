angular.module('myApp')
    .directive('portfolioDropDirective', function(){
        return {
            restrict: 'A',
            link: function(scope,element,attrs){
                var $projectBox = $('.project-box');
                var $projectDrop = $('.project-drop');

                $projectBox.on('click', function(){
                    $(this).next('.project-drop').slideToggle(400);
                })
            }
        }
    })
