/**
 * Created by Vitaly Zorin on 7/23/2017.
 */
import './index.html';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

import './style.css';


let $searchButton = $('#search-button');
let $inputQuery = $('#search-query');
let $results = $('#results');


$searchButton.on('click', function() {
  search();
});

$inputQuery.on('keypress', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    search();
  }
});

window.addEventListener('scroll', function() {
  if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight*0.8) {
    search();
  }
});


function search() {
  let googleApiLink = createQuerry($inputQuery.val());
  executeQuerry(googleApiLink);
}

function createQuerry (queryString) {
  const engineID = '004486783337092485371%3Axcbayn685lg';
  const apiKey = 'AIzaSyDNAa8dTm1yy8TRKepf7TjwyrOceTfbnxk';

  return `https://www.googleapis.com/customsearch/v1?q=${queryString}&cx=${engineID}&safe=high&searchType=image&key=${apiKey}`;
}

function executeQuerry(query) {
  $.getJSON(query)
    .done(function( data ) {
      console.dir(data);

      $.each( data.items, function( i, item ) {
        let $bootstrapContainer = $('<div class="col-xs-6 col-md-3"></div>');
        let $link = $('<a>').attr(
          {
            'href': item.link,
            'target': '_blank',
            'class': 'thumbnail'
          });

        let $image = $( '<img>' ).attr("src", item.link);

        $link.append($image);
        $bootstrapContainer.append($link).appendTo($results);

      });
    });
}