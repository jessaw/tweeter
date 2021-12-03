// The code is for the character counter
$(document).ready(function () {
    $('#tweet-text').keyup(function () {
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