const post = function () {
    $(".error-message").hide();
    $("form").submit(function (event) {
        event.preventDefault();
        if ($.trim($("#tweet-text").val())) {
            $(".error-message").text("Please Enter Text !");
            $(".error-message").slideDown();
        }
        else if ($("#tweet-text").val().length > 140) {
            $(".error-message").text("Exceeded Character Limit !")
            $(".error-message").slideDown();
        }
        else {
            $.ajax({
                method: "POST",
                url: "/tweets",
                data: $("form").serialize(),
                dataType: "json" // serializes form data 
                sucess: function (response) {
                    console.log("success");
                }

            })


        }

    })

}



$(document).ready(() => {
    $('#error-message').hide();
    $(".tweets-container").val("");
    loadTweets(renderTweets);

    $("#tweet-form").submit(function (event) {
        event.preventDefault();
        if ($('#tweet-text').val().length === 0) {
            $('.error-message').text("Empty tweet!");
            $('.error-message').show();
        } else if ($('#tweet-text').val().length > 140) {
            $('.error-message').text("Tweet is more than 140 characters!");
            $('.error-message').show();
        } else {
            $.post("/tweets", $("#tweet-form").serialize(), (data) => {
                $('#tweet-text').val("");
                $('.error-message').hide();
                $(".tweets-container").val("");
                loadTweets(renderTweets);
            });
        }
    });
});


$(document).ready(function () {
    $(".error-message").hide();
    $(".tweets-container").val("");
    loadTweets(renderTweets);

    $("#text-form").submit(function (event) {
        event.preventDefault();
        if ($.trim($("#tweet-text").val().length === 0)) {
            $(".error-message").text("Please Enter Text !");
            $(".error-message").show();
            $(".error-message").slideDown();
        }
        else if ($("#tweet-text").val().length > 140) {
            $(".error-message").text("Exceeded Character Limit !")
            $(".error-message").show();
            $(".error-message").slideDown();
        }
        else {
            $.post("/tweets", $("#text-form").serialize(), function () {
                $('#tweet-text').val("");
                $(".tweets-container").val("");
                $('#error-message').hide();

                loadTweets(renderTweets);

            })

        }

    })
});