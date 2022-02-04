let button = $('.open');
let overlay = $('.overlay');
let close = $('.popup__close');
let leave = $('.leave');
let form = $('.popup__form');
let thanks=$('.popup__thanks');
let phone=$('.tel');
phone.inputmask("+996(999)00-00-00");

button.on('click', function () {
    overlay.fadeOut('slow');
    thanks.fadeOut('slow');
    overlay.fadeIn('slow');
    form.fadeIn('slow');


});
close.on('click', function () {
    overlay.fadeOut('slow');
    form.fadeOut('slow');

});

leave.on('click', function (e) {
    e.preventDefault();
    overlay.fadeOut('slow');
    form.fadeOut('slow');
    overlay.fadeIn('slow');
    thanks.fadeIn('slow');

});








