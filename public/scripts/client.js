/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Returning tweet element in HTML strucutre 


const data = [
    {
        "user": {
            "name": "Newton",
            "avatars": "https://i.imgur.com/73hZDYK.png"
            ,
            "handle": "@SirIsaac"
        },
        "content": {
            "text": "If I have seen further it is by standing on the shoulders of giants"
        },
        "created_at": 1461116232227
    },
    {
        "user": {
            "name": "Descartes",
            "avatars": "https://i.imgur.com/nlhLi3I.png",
            "handle": "@rd"
        },
        "content": {
            "text": "Je pense , donc je suis"
        },
        "created_at": 1461113959088
    }
]

const renderTweets = function (tweets) {
    $('.tweet-container').empty();

    for (let tweet of tweets) {
        const result = createTweetElement(tweet);
        $('.tweet-container').prepend(result);
    }
};


const createTweetElement = function (tweet) {
    let $tweet =
        ` <div id="article-header">
            <div class="firsttweet">
                <img src="${tweet.user.avatars}"/>
                <span>${tweet.user.name} </span>
                <span>${tweet.user.handle}</span>
            </div>
            <article id= tweet-content>
            <p>${tweet.content.text}</p>
            </article>
            <footer class ="tweet-footer">
            <span>${tweet.created_at}</span>
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-retweet"></i>
                    <i class="fa-solid fa-flag"></i>
            </footer>
        </div>`
    // console.log($tweet);
    return $tweet;
};

$(document).ready(function () {
    renderTweets(data);

});




var post = function () {
    $(".tweet-container").submit(function (event) {
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: "/tweets",
            data: $(this).serialize(), // serializes form data =
            sucess: function (data) {
                alert(data);
            }
        })
    })
}
console.log(data);