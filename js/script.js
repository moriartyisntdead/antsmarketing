$(function () {
    if (typeof ($.fn.parallax) !== 'undefined') {
        $('.section-3').parallax({imageSrc: '../img/forest.jpg'});
    }

    //1st canvas
    let canvasDots_1 = function() {
        let canvas = document.querySelector('.section-2 canvas'),
            ctx = canvas.getContext('2d'),
            colorDot = '#fc0',
            color = '#fc0',
            $canvas = $('.section-2 canvas');
        canvas.width = $canvas.parent().innerWidth();
        canvas.height = $canvas.parent().innerHeight();
        canvas.style.display = 'block';
        ctx.fillStyle = colorDot;
        ctx.lineWidth = .3;
        ctx.strokeStyle = color;

        let mousePosition = {
            x: 15 * canvas.width / 100,
            y: 15 * canvas.height / 100
        };

        let dots = {
            nb: 350,
            distance: 70,
            d_radius: 150,
            array: []
        };

        function Dot(){
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;

            this.vx = -.5 + Math.random();
            this.vy = -.5 + Math.random();

            this.radius = Math.random();
        }

        Dot.prototype = {
            create: function(){
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                ctx.fill();
            },

            animate: function(){
                for(i = 0; i < dots.nb; i++){

                    let dot = dots.array[i];

                    if(dot.y < 0 || dot.y > canvas.height){
                        dot.vx = dot.vx;
                        dot.vy = - dot.vy;
                    }
                    else if(dot.x < 0 || dot.x > canvas.width){
                        dot.vx = - dot.vx;
                        dot.vy = dot.vy;
                    }
                    dot.x += dot.vx;
                    dot.y += dot.vy;
                }
            },

            line: function(){
                for(i = 0; i < dots.nb; i++){
                    for(j = 0; j < dots.nb; j++){
                        i_dot = dots.array[i];
                        j_dot = dots.array[j];

                        if((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance){
                            if((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius){
                                ctx.beginPath();
                                ctx.moveTo(i_dot.x, i_dot.y);
                                ctx.lineTo(j_dot.x, j_dot.y);
                                ctx.stroke();
                                ctx.closePath();
                            }
                        }
                    }
                }
            }
        };

        function createDots(){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for(i = 0; i < dots.nb; i++){
                dots.array.push(new Dot());
                dot = dots.array[i];

                dot.create();
            }

            dot.line();
            dot.animate();
        }

        $('.section-2 .container').on('mousemove', function (e) {
            let parentOffset = $canvas.offset();
            mousePosition.x = e.pageX - parentOffset.left;
            mousePosition.y = e.pageY - parentOffset.top;
        });

        mousePosition.x = $canvas.innerWidth() / 2;
        mousePosition.y = $canvas.innerHeight() / 2;

        setInterval(createDots, 1000/30);
    };
    //2nd canvas
    let canvasDots_2 = function() {
        let canvas = document.querySelector('.section-4 canvas'),
            ctx = canvas.getContext('2d'),
            colorDot = '#fc0',
            color = '#fc0',
            $canvas = $('.section-4 canvas');
        canvas.width = $canvas.parent().innerWidth();
        canvas.height = $canvas.parent().innerHeight();
        canvas.style.display = 'block';
        ctx.fillStyle = colorDot;
        ctx.lineWidth = .3;
        ctx.strokeStyle = color;

        let mousePosition = {
            x: 15 * canvas.width / 100,
            y: 15 * canvas.height / 100
        };

        let dots = {
            nb: 350,
            distance: 70,
            d_radius: 150,
            array: []
        };

        function Dot(){
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;

            this.vx = -.5 + Math.random();
            this.vy = -.5 + Math.random();

            this.radius = Math.random();
        }

        Dot.prototype = {
            create: function(){
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                ctx.fill();
            },

            animate: function(){
                for(i = 0; i < dots.nb; i++){

                    let dot = dots.array[i];

                    if(dot.y < 0 || dot.y > canvas.height){
                        dot.vx = dot.vx;
                        dot.vy = - dot.vy;
                    }
                    else if(dot.x < 0 || dot.x > canvas.width){
                        dot.vx = - dot.vx;
                        dot.vy = dot.vy;
                    }
                    dot.x += dot.vx;
                    dot.y += dot.vy;
                }
            },

            line: function(){
                for(i = 0; i < dots.nb; i++){
                    for(j = 0; j < dots.nb; j++){
                        i_dot = dots.array[i];
                        j_dot = dots.array[j];

                        if((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance){
                            if((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius){
                                ctx.beginPath();
                                ctx.moveTo(i_dot.x, i_dot.y);
                                ctx.lineTo(j_dot.x, j_dot.y);
                                ctx.stroke();
                                ctx.closePath();
                            }
                        }
                    }
                }
            }
        };

        function createDots(){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for(i = 0; i < dots.nb; i++){
                dots.array.push(new Dot());
                dot = dots.array[i];

                dot.create();
            }

            dot.line();
            dot.animate();
        }

        $('.section-4 .container').on('mousemove', function (e) {
            let parentOffset = $canvas.offset();
            mousePosition.x = e.pageX - parentOffset.left;
            mousePosition.y = e.pageY - parentOffset.top;
        });

        mousePosition.x = $canvas.innerWidth() / 2;
        mousePosition.y = $canvas.innerHeight() / 2;

        setInterval(createDots, 1000/30);
    };
    
    window.onload = function() {
        canvasDots_1();
        canvasDots_2();
    };
});