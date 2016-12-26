angular.module('myApp')
    .service('mainService', function(){

        this.portfolio = [
            {
            img: './img/ersite802x694.jpg',
            name: 'Elliot Richardson Site Build'
            },
            {
            img: './img/rodesk802x694.jpg',
            name: 'Rodesk Site Clone'
            },
            {
            img: './img/Beoplay802x694.jpg',
            name: 'Beoplay Site Clone'
            },
            {
            img: './img/optimalins802x694.jpg',
            name: 'Optimal Insurance Site'
            },
            {
            img: './img/emp802x694.jpg',
            name: 'Empowered Employment Site'
            },
            {
                img: './img/lyftpic1.jpg',
                name: 'Lyft Site Clone'
            }
        ]
    })
