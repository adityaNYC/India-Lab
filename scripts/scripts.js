$(function() {

  function validateForm() {
    let x = document.forms["form-check-label"]["fname"].value;
    if (x == "") {
      alert("You must have left something blank.");
      return false;
    }
  }  

  $("form").submit(function(){
    alert("Thanks for applying! Our team will contact you if you have the requirements to join North Alabama Gaming.");
  });

    $('.cardClose1').click (function() {  
      $('.cardHide').hide();
    });
  
    $('.cardOpen1').click (function() {  
      $('.cardHide').show();
    });
  
    $('.cardClose2').click (function() {  
      $('.cardHide').hide();
    });
  
    $('.cardOpen2').click (function() {  
      $('.cardHide').show();
    });
  
    $('.cardClose3').click (function() {  
      $('.cardHide').hide();
    });
  
    $('.cardOpen3').click (function() {  
      $('.cardHide').show();
    });
      
    });
    $("textarea").each(function () {
      this.setAttribute("style", "height:" + (this.scrollHeight));
    }).on("input", function () {
      this.style.height = "auto";
      this.style.height = (this.scrollHeight) + "px";
    });

