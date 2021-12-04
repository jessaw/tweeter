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
        ` <article id="article-header">
            <header class="firsttweet">
                <img src="${escape(tweet.user.avatars)}">
                <span> class ="username">${escape(tweet.user.name)} </span>
                <h3 class ="userhandle">${escape(tweet.user.handle)}</h3>
            </header>
            <section>
            <p class="content">${escape(tweet.content.text)}</p>
            
            <footer>
                <span>
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-retweet"></i>
                    <i class="fa-solid fa-flag"></i>
                </span>
                <p class="date">${(tweet.created_at)}</p>
            </footer>
        </article>`
    // console.log($tweet);
    return $tweet;
};

$(document).ready(function () {
    renderTweets(data);
});

//renderTweets(data);


// var post = function () {
//     $(".tweet-form").submit(function (event) {
//         event.preventDefault();
//         if ('#tweet-text').val().length > 140 {
//             $(".errors").slideDown("slow");
//         } else if $('#tweet-text').val().length === 0) {
//             $(".errors").slideDown("slow");
//         } else {
//             $.ajax({
//                 url: "/tweets",
//                 method: "POST",
//                 data: $(this).seralize()
//             })
//         }

//     }