//if document is ready
$(document).ready(function() {

  
  //function to get JSON
  function getQuote() {
    $.ajax({
      url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
      success: function(a) {
        var newQuote = a[0]; //grabs first array
        if ((newQuote.content + " - " + newQuote.title).length > 140) {
          getQuote();
        } else {
          $(".message").html(newQuote.content);
          $(".author").html(" - " + newQuote.title);
          console.log($(".message")[0].textContent); //check to see what you grabbed
        };
      },
      cache: false
    });
  };

  //click event to get new quote
  $(".quote").on("click", function(e) {
    e.preventDefault();
    $(".msg").animate({
      opacity: "0"
    }, 500).delay(300);
    getQuote();
    $(".msg").animate({
      opacity: "1"
    }, 1000);

  });
  
  //click event to tweet quote
  $(".tweet").on("click", function () {
    window.open("https://twitter.com/intent/tweet?text=" + $(".message")[0].textContent.trim() + $(".author").text());
  });
  

});
