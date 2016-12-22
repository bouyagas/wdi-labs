console.log('connnected!')

function getAllTweets() {
  fetch(`/tweets`)
    .then(r => r.json());
}

function renderTweets(tweets){

}
