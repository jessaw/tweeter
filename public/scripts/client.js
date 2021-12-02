/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const createTweetElement = function (tweet) {
    let $tweet =
        ` <article class=" article-header">
            < header class="firsttweet">
                <img class="${escape(tweet.user.avatars)}">
                <h2 class = "username">${escape(tweet.user.name)} </h2>
                <h3 class = "Userhandle">${escape(tweet.user.handle)}</h3>
            </header>
            <p class="content">${escape(tweet.content.text)}</p>
            <footer>
                <span>
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-retweet"></i>
                    <i class="fa-solid fa-flag"></i>
                </span>
                <p class="date">${(tweet.created_at).fromNow()}</p>
            </footer>
        </article>;`
    return $tweet;
};

console.log($tweet);


const renderTweets = function (tweets) {
    $('tweets-container').empty();
    for (const tweet of tweets) {
        const result = createTweetElement(tweet);
        $(.'tweet-container').prepend(result);
    }
}
document.body.innerHTML = markup;