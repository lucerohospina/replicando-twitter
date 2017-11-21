window.addEventListener('load', function () {
    var textArea = document.getElementById('text-area');
    var tweetBtn = document.getElementById('tweet-btn');
    var tweetsContainer = document.getElementById('tweets-container');
    var counter = document.getElementById("counter");
    var max = 140;
    
  tweetBtn.addEventListener("click", function() {
    

    // if(newTweet.textContent == " ") {
    //   tweetBtn.disabled = true;
    // } else if(newTweet.textContent = textArea.value) {
    //   tweetBtn.disabled = false;
    //   tweetsContainer.insertBefore(newTweet, tweetsContainer.childNodes[0]);
    //   // tweetBtn.classList.add("able");
    // }

    if(textArea.value) {
      var newTweet = document.createElement("div");
      newTweet.classList.add("container");
      tweetsContainer.insertBefore(newTweet, tweetsContainer.childNodes[0]);
      newTweet.textContent = textArea.value;
    
      textArea.value = "";
      textArea.focus();
      
    } else {
      tweetBtn.disabled = true;
      
    }
  })

  textArea.addEventListener("keyup", function() {
    var characters = textArea.value.length;
    counter.textContent = max - characters;

    if(characters>0 && characters<120) {
      tweetBtn.disabled = false;
      tweetBtn.classList.add("able");
      counter.style.color = "rgb(80,182,245)";
    } else if(characters>=120 && characters<130) {
      tweetBtn.disabled = false;
      tweetBtn.classList.add("able");
      counter.style.color = "yellow";
    } else if(characters>=130 && characters<=140) {
      tweetBtn.disabled = false;
      tweetBtn.classList.add("able");
      counter.style.color = "orange";
    } else if(characters>140) {
      tweetBtn.disabled = true;
      tweetBtn.classList.remove("able");
      counter.style.color = "red";
    } else {
      tweetBtn.disabled = true;
      tweetBtn.classList.remove("able");
      counter.style.color = "rgb(80,182,245)";
    }
  })
  
})

