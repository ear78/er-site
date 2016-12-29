angular.module('myApp')
    .service('mainService', function(){

        this.portfolio = [
            {
                img: './img/ersite802x694.jpg',
                name: 'Elliot Richardson Site',
                tech: 'HTML, CSS, Javascript, Angular, Jquery, Gulp, Sass, Node.js',
                images: ['./img/ersite802x694.jpg', './img/ersitefooterthumb.jpg', './img/ersitemobilethumb2.jpg', './img/ersiteaboutmobilethumb.jpg']
            },
            {
                img: './img/rodesk802x694.jpg',
                name: 'Rodesk Site Clone',
                tech: 'HTML, CSS, Javascript, Angular, Jquery, Sketch',
                images: ['./img/ersite802x694.jpg', './img/rodesk802x694.jpg', './img/Beoplay802x694.jpg', './img/optimalins802x694.jpg']
            },
            {
                img: './img/Beoplay802x694.jpg',
                name: 'Beoplay Site Clone',
                tech: 'HTML, CSS, Javascript, Angular, Jquery, Gulp, Sass, Node.js',
                images: ['./img/ersite802x694.jpg', './img/rodesk802x694.jpg', './img/Beoplay802x694.jpg', './img/optimalins802x694.jpg']
            },
            {
                img: './img/optimalins802x694.jpg',
                name: 'Optimal Insurance Site',
                tech: 'HTML, CSS, SquareSpace CMS, Affinity Designer',
                images: ['./img/ersite802x694.jpg', './img/rodesk802x694.jpg', './img/Beoplay802x694.jpg', './img/optimalins802x694.jpg']
            },
            {
                img: './img/emp802x694.jpg',
                name: 'Empowered Emp Site',
                tech: 'HTML, CSS, Responsive design, Affinity Designer',
                images: ['./img/ersite802x694.jpg', './img/rodesk802x694.jpg', './img/Beoplay802x694.jpg', './img/optimalins802x694.jpg']
            },
            {
                img: './img/slice8.jpg',
                name: 'Lyft Site Clone',
                tech: 'HTML, CSS, Javascript, React, Webpack, Bootstrap',
                images: ['./img/ersite802x694.jpg', './img/rodesk802x694.jpg', './img/Beoplay802x694.jpg', './img/optimalins802x694.jpg']
            }
        ];


    })
