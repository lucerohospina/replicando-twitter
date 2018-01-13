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
   if($inputTweets.val()) {
     $btn.removeAttr('disabled');
     $btn.addClass('able');
   } else {
     $btn.attr('disabled', true);
   }
 }

 function tweet() {
   console.log('click');
   if($inputTweets.val()){
    $tweets.prepend('<div class="jumbotron"><p class="new-tweet"></p></div>');
    $('.new-tweet').first().append($inputTweets.val());
     $inputTweets.val('');
     $inputTweets.focus();
     $btn.attr('disabled', true);
   }
 }

//  $postsContainer.prepend('<div class="card del-post mt-3"><div class="card-header btn-yellowLab"><small>Publicado por</small> Usuario</div><div class="card-body" id="appendLike"><p class="card-text new-post"></p></div></div>');
//  $('.new-post').first().append($textArea.val());
//  $('#appendLike').append('<button class="btn btn-secondary like-btn"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>Me gusta</button>');
//  $('.card-header').first().prepend('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
//  $textArea.val('');
//  $textArea.focus();
//  $postBtn.attr('disabled', true);


});