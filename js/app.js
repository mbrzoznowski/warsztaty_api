$(document).ready(function(){
  $.ajax({
    url: "http://localhost:3000/books"
  }).done(function(response){
    response.forEach(function(el, i){
      var newEl = $('<div class="list-group-item">');
      newEl.text(el.title);
      var newDiv = $('<div>')
      $('ul').append(newEl);

      newEl.append(newDiv);

    })
  });
});