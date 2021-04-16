
$(document).ready(function () {
    $('.form__field').focus(function () {
        $(this).addClass('form__field_active')
    }).blur(function () {
        if ($(this).val() == "") {
            $(this).removeClass('form__field_active')
        }
    })

    var lastScrollTop = 0;
    $(window).scroll(function () {
        var $header = $('.header').outerHeight();
        var st = $(this).scrollTop();
        if (st < lastScrollTop && st >= 0) {
            $('body').css('padding-top', $header);
            $('.header').addClass('mobile');
        } else {
            $('body').css('padding-top', '0');
            $('.header').removeClass('mobile');
        }
        lastScrollTop = st;
    });

    $(document).mouseup(function (e) {
		var div = $('.nav__burger'),
		    div2 = $('.nav__list_header');
		if (!div.is(e.target) && div.has(e.target).length === 0 && !div2.is(e.target) && div2.has(e.target).length === 0) {
			$('.header__nav').removeClass('visible');
		}
	});

    $('.nav__burger').click(function() {
        $('.header__nav').toggleClass('visible');
    })

    $('.js-commits__box').owlCarousel({
        loop: true,
        autoHeight: true,
        margin: 40,
        responsive : {
            320 : {
                items: 1
            },

            768 : {
                items: 2
            },

            1280 : {
                items: 3
            }
        }
    });
});