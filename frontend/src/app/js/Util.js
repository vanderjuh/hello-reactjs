//import React from 'react'
import jQuery from 'jquery'
import 'jquery-ui-bundle'

const timeMenu = 100
const heightTopMenuBar = 80

jQuery.fn.isInViewport = function () {
    var elementTop = jQuery(this).offset().top;
    var elementBottom = elementTop + jQuery(this).outerHeight();
    var viewportTop = jQuery(window).scrollTop();
    //var viewportBottom = viewportTop + jQuery(window).height();
    //return elementBottom > viewportTop && elementTop < viewportBottom;
    return elementTop <= (viewportTop + (heightTopMenuBar + 1)) && elementBottom > (viewportTop + (heightTopMenuBar + 1))
};

const changeColorFocus = function () {
    jQuery(document).ready(function ($) {
        $(window).on('resize scroll', function () {
            $('section').each(function () {
                if ($(this).isInViewport()) {
                    $(`menu ul li a[href="#${$(this).attr('id')}"]`).addClass('active');
                } else {
                    $(`menu ul li a[href="#${$(this).attr('id')}"]`).removeClass('active');
                }
            });
        });
    })
}

const anchorage = function () {
    jQuery(document).ready(function ($) {
        $("menu ul li a").click(function (event) {
            event.preventDefault();
            $('html,body').animate({ scrollTop: $(this.hash).offset().top - heightTopMenuBar }, 600);
        });
        $("#titleTopMenu a").click(function (event) {
            event.preventDefault();
            $('html,body').animate({ scrollTop: $(this.hash).offset().top - heightTopMenuBar }, 600);
        });
        $("#greeting a").click(function (event) {
            event.preventDefault();
            $('html,body').animate({ scrollTop: $(this.hash).offset().top - heightTopMenuBar }, 600);
        });
    });
}

const topMenuAnimation = function () {
    jQuery(document).ready(function ($) {
        $(window).on('scroll', function () {
            if ($('header').isInViewport()) {
                $('#titleTopMenu a').stop(true).animate({ 'font-size': '27px' }, timeMenu)
                $('#topMenu').stop(true).animate({ 'height': '100px', backgroundColor: 'transparent' }, timeMenu)
                $('#topMenu').removeClass('topMenu-fixed')
            } else {
                $('#titleTopMenu a').stop(true).animate({ 'font-size': '20px' }, timeMenu)
                $('#topMenu').stop(true).animate({ height: `${heightTopMenuBar}px`, backgroundColor: '#212529' }, timeMenu)
                $('#topMenu').addClass('topMenu-fixed')
            }
        })
    })
}

const validationForm = function () {
    jQuery(document).ready(function ($) {
        const inputName = $('input[name="name"]')
        const inputEmail = $('input[name="email"]')
        const textarea = $('textarea[name="message"]')
        const buttonSub = $('#sendMessage')

        inputName.blur(function () {
            if ($(inputName).val() !== '') {
                $(inputName).css({
                    border: "0"
                })
                window.flagForm = true
            } else {
                $(inputName).css({
                    border: "solid 3px #DC143C"
                })
                window.flagForm = false
            }
        })

        inputEmail.keyup(function () {
            const valor = $(inputEmail).val()
            if ( valor !== '' && valor.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
                $(inputEmail).css({
                    border: "0"
                })
                window.flagFormEmail = true
            } else {
                $(inputEmail).css({
                    border: "solid 3px #DC143C"
                })
                window.flagFormEmail = false
            }
        })

        textarea.blur(function () {
            if ($(textarea).val() !== '') {
                $(textarea).css({
                    border: "0"
                })
                window.flagFormMessage = true
            } else {
                $(textarea).css({
                    border: "solid 3px #DC143C"
                })
                window.flagFormMessage = false
            }
        })

        buttonSub.click(function(event){
            event.preventDefault()
            if(
                $(inputName).val() !== '' &&
                $(inputEmail).val() !== '' && 
                $(inputEmail).val().match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/) &&
                $(textarea).val() !== ''
            ) {
                alert('Mensagem enviada com sucesso!')
            } else {
                alert('Os campos (*) devem ser preenchidos.')
            }
        })

    })
}

export { anchorage, changeColorFocus, topMenuAnimation, validationForm }