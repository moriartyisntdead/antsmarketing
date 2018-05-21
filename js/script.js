$(function () {


    const backgroundVideo = new BackgroundVideo('.bv-video', {
        src: [
            '../video/bg_first.mp4',
            '../video/bg_first.webm'
        ],
        onReady: function () {
            // Use onReady() to prevent flickers or force loading state
            const vidParent = document.querySelector(`.${this.bvVideoWrapClass}`);
            vidParent.classList.add('bv-video-wrap--ready');
        }
    });


    //document.body.style.zoom="90%"
    $("video[autoplay]").each(function(){ this.play(); });
    //1st canvas
    var canvasDots_1 = function () {
        var canvas = document.querySelector('.section-2 canvas'),
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

        var mousePosition = {
            x: 15 * canvas.width / 100,
            y: 15 * canvas.height / 100
        };

        var dots = canvasSettings();

        function Dot() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;

            this.vx = -.5 + Math.random();
            this.vy = -.5 + Math.random();

            this.radius = Math.random();
        }

        Dot.prototype = {
            create: function () {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                ctx.fill();
            },

            animate: function () {
                for (i = 0; i < dots.nb; i++) {

                    var dot = dots.array[i];

                    if (dot.y < 0 || dot.y > canvas.height) {
                        dot.vx = dot.vx;
                        dot.vy = -dot.vy;
                    }
                    else if (dot.x < 0 || dot.x > canvas.width) {
                        dot.vx = -dot.vx;
                        dot.vy = dot.vy;
                    }
                    dot.x += dot.vx;
                    dot.y += dot.vy;
                }
            },

            line: function () {
                for (i = 0; i < dots.nb; i++) {
                    for (j = 0; j < dots.nb; j++) {
                        i_dot = dots.array[i];
                        j_dot = dots.array[j];

                        if ((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > -dots.distance && (i_dot.y - j_dot.y) > -dots.distance) {
                            if ((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > -dots.d_radius && (i_dot.y - mousePosition.y) > -dots.d_radius) {
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

        function createDots() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (i = 0; i < dots.nb; i++) {
                dots.array.push(new Dot());
                dot = dots.array[i];

                dot.create();
            }

            dot.line();
            dot.animate();
        }

        $('.section-2').on('mousemove', function (e) {
            var parentOffset = $canvas.offset();
            mousePosition.x = e.pageX - parentOffset.left;
            mousePosition.y = e.pageY - parentOffset.top;
        });

        mousePosition.x = $canvas.innerWidth() / 2;
        mousePosition.y = $canvas.innerHeight() / 2;

        setInterval(createDots, 1000 / 30);
    };
    //2nd canvas
    var canvasDots_2 = function () {
        var canvas = document.querySelector('.section-4 canvas'),
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

        var mousePosition = {
            x: 15 * canvas.width / 100,
            y: 15 * canvas.height / 100
        };

        var dots = canvasSettings();

        function Dot() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;

            this.vx = -.5 + Math.random();
            this.vy = -.5 + Math.random();

            this.radius = Math.random();
        }

        Dot.prototype = {
            create: function () {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                ctx.fill();
            },

            animate: function () {
                for (i = 0; i < dots.nb; i++) {

                    var dot = dots.array[i];

                    if (dot.y < 0 || dot.y > canvas.height) {
                        dot.vx = dot.vx;
                        dot.vy = -dot.vy;
                    }
                    else if (dot.x < 0 || dot.x > canvas.width) {
                        dot.vx = -dot.vx;
                        dot.vy = dot.vy;
                    }
                    dot.x += dot.vx;
                    dot.y += dot.vy;
                }
            },

            line: function () {
                for (i = 0; i < dots.nb; i++) {
                    for (j = 0; j < dots.nb; j++) {
                        i_dot = dots.array[i];
                        j_dot = dots.array[j];

                        if ((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > -dots.distance && (i_dot.y - j_dot.y) > -dots.distance) {
                            if ((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > -dots.d_radius && (i_dot.y - mousePosition.y) > -dots.d_radius) {
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

        function createDots() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (i = 0; i < dots.nb; i++) {
                dots.array.push(new Dot());
                dot = dots.array[i];

                dot.create();
            }

            dot.line();
            dot.animate();
        }

        $('.section-4').on('mousemove', function (e) {
            var parentOffset = $canvas.offset();
            mousePosition.x = e.pageX - parentOffset.left;
            mousePosition.y = e.pageY - parentOffset.top;
        });

        mousePosition.x = $canvas.innerWidth() / 2;
        mousePosition.y = $canvas.innerHeight() / 2;

        setInterval(createDots, 1000 / 30);
    };

    canvasDots_1();
    canvasDots_2();

    $('#mouse-link').on('click', function () {
        var href = $(this).attr('href');
        href = href.substring(href.indexOf('#'));
        var top = $(href).offset().top - $('.mouse-wrap').height() / 1.8;
        // var top = $(href).offset().top - $('.section-2').height() / 4;
        $('body,html').animate({scrollTop: top}, 800);
    });

    $('.scroll-down').on('click', function () {
        var href = $(this).attr('href');
        href = href.substring(href.indexOf('#'));
        var top = $(href).offset().top;
        if ($('.scroll-down').parent('.pull-right')) {
            $('body,html').animate({scrollTop: top}, 2000);
        } else {
            $('body,html').animate({scrollTop: top}, 1000);
        }
    });

    function canvasSettings() {
        var screenWidth = screen.width, dots = {};
        if (screenWidth <= 991 && screenWidth > 575) {
            dots = {
                nb: 200, distance: 40, d_radius: 80, array: []
            };
        } else if (screenWidth <= 575) {
            dots = {
                nb: 200, distance: 5/*40*/, d_radius: 10/*80*/, array: []
            };
        } else {
            dots = {
                nb: 350, distance: 70, d_radius: 150, array: []
            };
        }
        return dots;
    }


    jQuery('#tel').mask('380000000000');
    $.validator.addMethod("letters", function (value, element) {
        return this.optional(element) || value == value.match(/^[\-a-zA-ZА-ЯЁа-яё\s]*$/);
    });

    $('#contact-form').validate({
        rules: {
            fName: {
                required: true,
                minlength: 2,
                letters: true
            },
            tel: {
                required: true,
                minlength: 12,
                maxlength: 12,
                digits: true
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            fName: {
                required: "Введите имя",
                letters: "Введите только буквы",
                minlength: "Введите минимум 2 буквы"
            },
            tel: "Введите номер телефона",
            email: "Введите правильный email адрес"

        },
        errorElement: 'div',
        errorLabelContainer: '.errorTxt',
        errorPlacement: function (error, element) {
            var placement = $(element).data('error');
            if (placement) {
                $(placement).append(error)
            } else {
                error.insertAfter(element);
            }
        },
        submitHandler: function (form) {
            $.ajax({
                url: "/test.php",
                type: "POST",
                data: {
                    fName: $('#fName').val(),
                    email: $('#email').val(),
                    tel: $('#tel').val(),
                    submit: 1
                },
                success: function (data) {
                    //google tag manager
                    if (typeof window['gtag'] === 'function') window['gtag']('event', 'send', {"event_category": 'form'});
                    else if (typeof window['ga'] === 'function') window['ga']('send', 'event', 'form', 'send');

                    swal({
                        text: 'Спасибо! Мы уже обрабатываем Вашу заявку и в ближайшее время свяжемся с Вами.',
                        type: 'success',
                        confirmButtonText: 'Отлично'
                    });
                    $('#fName').val('');
                    $('#email').val('');
                    $('#tel').val('');
                },
                error: function (data) {
                    swal({
                        text: 'Произошла ошибка!',
                        type: 'error',
                        confirmButtonText: 'Повторить'
                    })
                }
            });
        }
    });
});