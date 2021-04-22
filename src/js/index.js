
$(document).ready(function () {
    $('.form__field').focus(function () {
        $(this).addClass('form__field_active')
    }).blur(function () {
        if ($(this).val() == "") {
            $(this).removeClass('form__field_active')
        }
    })

    var header = $('.header'),
	    scrollPrev = 0;

    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();
    
        if ( scrolled > 100 && scrolled > scrollPrev ) {
            header.addClass('mobile');
        } else {
            header.removeClass('mobile');
        }
        scrollPrev = scrolled;
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