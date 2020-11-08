// menu
$(function() {
	var link = $('.header__menu-block-link');
    var menu = $('.header__menu-block');
    var btn = $('.header__menu-btn');
	link.on('click', function(event) {
		event.preventDefault();
        menu.toggleClass('header__menu-block_activ');
        btn.toggleClass('header__menu-btn_active');
    });
});

// scroll
$("#arrow-bottom").click(function() {
    $('html, body').animate({
        scrollTop: $(".gold-cas").offset().top}, 1000);
});