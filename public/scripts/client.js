/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Returning tweet element in HTML strucutre 



//Prevent Cross scripting
const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
};


const createTweetElement = function (tweet) {
    let $tweet =
        ` <div id="article-header">
            <div class="firsttweet">
                <img src="${tweet.user.avatars}"/>
                <span class="username">${escape(tweet.user.name)}</span>
                <span class="handle">${tweet.user.handle}</span>
                <hr class="solidline">
            </div>
            <article id= "tweet-content">
            <p class= "content">${escape(tweet.content.text)}</p>
            </article>
            <footer class ="tweet-footer">
            <span id="time">${timeago.format(tweet.created_at)}</span>
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-retweet"></i>
                    <i class="fa-solid fa-flag"></i>
            </footer>
        </div>`
    // console.log($tweet);
    return $tweet;
};

const renderTweets = function (tweets) {
    $('.tweet-container').empty();
    for (let tweet of tweets) {
        const result = createTweetElement(tweet);
        $('.tweet-container').prepend(result);
    }
};


//use ajax for get request
const loadTweets = function () {
    $.ajax({
        method: "GET",
        url: "/tweets",
    })
        .then((tweets) => {
            console.log(tweets);
            renderTweets(tweets);
        });
}
// use ajax to send a POST request
$(document).ready(() => {
    $('#error-message').hide();
    $(".tweets-container").val("");
    loadTweets(renderTweets);

    $("#tweet-form").submit(function (event) {
        event.preventDefault();
        if ($('#tweet-text').val().length === 0) {
            $('.error-message').text("Please Enter Text !");
            $('.error-message').show();
            $(".error-message").slideDown();
        } else if ($('#tweet-text').val().length > 140) {
            $('.error-message').text("Tweet is more than 140 characters!");
            $('.error-message').show();
            $(".error-message").slideDown();
        } else {
            $.post("/tweets", $("#tweet-form").serialize(), () => {
                $('#tweet-text').val("");
                $('.error-message').hide();
                $(".tweets-container").val("");
                loadTweets(renderTweets);
            });
        }
    });
});
