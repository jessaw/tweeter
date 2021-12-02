$(document).ready(function () {
    console.log('jess')
    $('.textarea').keyup(function () {
        var txtlength = $(this).val().length;

        $('.counter').text(140 - txtlength);
        if (txtlength > 140) {
            $('.counter').css("color", "red");
        } else {
            $('.counter').css("color", "black");
        }
        console.log(this);
    });
});