$(document).ready(function () {
  $("form#answer").submit(function (event) {
    event.preventDefault();
    
  }

  const answer = parseInt($("input#year")).value());
  
  if  (input % 4 === 0) {
  }
  else if (input % 400 ===0 && input % 100 === 0) {

     greeting = '#yes';
  }

  else (input % 100 ===0) {
     greeting = "#no";
  }

  $("#output").text(answer);

  });
}); 
   

   