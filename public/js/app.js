
angular.module('myApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '../views/home.html',
            })
            .state('resume', {
                url: '/resume',
                templateUrl: '../views/resume.html',
            })
            .state('contact', {
                url: '/contact',
                templateUrl: '../views/contact.html',
            })

            $urlRouterProvider.otherwise('/');
    });
