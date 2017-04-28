$(document).ready(function(){

  var form = $('form')
  form.on('click', function(){
    e.preventDefault();

    var title = $('title').val();
    var author = $('author').val();
    var publisher = $('publisher').val();
    var created_at = $('created_at').val();
    var updated = $('updated').val();
    var isbn = $('isbn').val();
    var url = $('url').val();
    var genre = $('genre');

    $.ajax({
      url: 'http://localhost:3000/books',
      type: 'POST',
      data: {
        title: title,
        author: author,
        publisher: publisher,
        genre: genre,
      },
      dataType: 'json',
    }).done(function(r){
      console.log("well done");
    })

  })
})
    






  $.ajax({
    url: "http://localhost:3000/books"
  }).done(function(response){
    response.forEach(function(element, i){
      
      // tworzę li
      
      var newEl = $('<div class="list-group-item">');
      
      // tworzę klikalny tytuł

      var a = $("<a data-id='" + element.id + "'>");
      
      // dodaje tytuł książki z JSON

      a.text(element.title);

      // do li dodaję tytuł książki

      newEl.append(a);

      // tworze diva z informacjami

      var div = $('<div>')

      // dodaje diva z infnormacjami

      newEl.append(div);

      // dodaje li do htmla

      $('ul').append(newEl);

      // po kliknięciu w tytuł

      a.one('click', function(){
        console.log("Klikam");
        $.ajax({
          url: 'http://localhost:3000/books/' + $(this).data('id')
        }).done(function(r){
          console.log(r);
          var author = $('<h2>');
          author.text(r.author);
          var div = $('a[data-id="' + r.id + '"]').next();
          div.append(author);
          var isbn = $('<h3>');
          isbn.text(r.isbn);
          div.append(isbn);
          

        })


      })
      
      

    })
  });

