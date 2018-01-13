$(document).ready(function() {
  // declarando variables
  var $inputTweets = $('#input-tweets');
  var $btn = $('#tweet-btn');
  var $tweets = $('#tweets-container');
  var $counter = $('#counter');
  var max = 140;

  //damos evento al boton y al textarea
  $inputTweets.on('input', writtingTweets);
  $btn.on('click', tweet);

 function writtingTweets() {
   console.log('input');
   var $characters = $inputTweets.val().length;
   console.log($characters);
   $counter.text(max-$characters);
   if($inputTweets.val()) {
     $btn.removeAttr('disabled');
     $btn.addClass('able');
     changeColor();
   } else {
     $btn.attr('disabled', true);
   }
 }

 function tweet() {
   console.log('click');
   if($inputTweets.val()){
    $tweets.prepend('<div class="jumbotron bg-container"><p class="new-tweet"></p></div>');
    $('.new-tweet').first().append($inputTweets.val());
     $inputTweets.val('');
     $inputTweets.focus();
     $btn.attr('disabled', true);
   }
 }

 function changeColor() {
  var $characters = $inputTweets.val().length;
  console.log($characters);
  if($characters>120 && $characters<=130) {
    $counter.css({'color': 'green'});
  } else if($characters>130 && $characters<=140) {
    $counter.css({'color': 'orange'});
  } else if($characters>140) {
    $counter.css({'color': 'red'});
    $btn.attr('disabled', true);
  } else {
    $counter.css({'color': 'rgb(80,182,245)'});
  }
 }
});