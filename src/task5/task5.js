/**
 * Created by Vitaly Zorin on 7/23/2017.
 */
import './index.html';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

import './style.css';


const ENTER_KEYCODE = 13;
const scrollDelay = 1000;
const reachablePartOfPage = 0.8;
const IMAGES_PER_QUERY = 10;

let $searchButton = $('#search-button');
let $inputQuery = $('#search-query');
let $results = $('#results');

let date = 0;
let imageIndex = 1; // We can recieve only less than ten images at once. We will change this value every new query


$searchButton.on('click', function () {
  eraseResults();
  search();
})

$inputQuery.on('keypress', function (event) {
  if (event.keyCode === ENTER_KEYCODE) {
    event.preventDefault();
    eraseResults();
    search();
  }
});

window.addEventListener('scroll', function () { //load new images when user reaches bottom part of the page

  if (new Date() - date < scrollDelay) return;  //delay is required to prevent excess call of search

  date = new Date();

  if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight * reachablePartOfPage) {
    search();
  }

});


function search() {
  let googleApiLink = createQuerry($inputQuery.val());
  executeQuerry(googleApiLink);

  // if (window.innerHeight >= document.body.offsetHeight * reachablePartOfPage) { //fill page with images until scroll appear
  //   setTimeout(search, 1000);
  // }
}

function createQuerry(queryString) {
  const engineID = '004486783337092485371%3Axcbayn685lg';
  const apiKey = 'AIzaSyDPCFJ7Fv3-QxxXzcAfIywKEPLWqclxE4I';

  let googleQuery = `https://www.googleapis.com/customsearch/v1?q=${queryString}&cx=${engineID}&start=${imageIndex}&safe=high&searchType=image&key=${apiKey}`;
  imageIndex += IMAGES_PER_QUERY;
  console.log(googleQuery);;
  return googleQuery;
}

function executeQuerry(query) {
  $.getJSON(query)
    .done(function (data) {

      $.each(data.items, function (i, item) {
        let $bootstrapContainer = $('<div class="col-xs-6 col-md-3"></div>');
        let $link = $('<a>').attr(
          {
            'href': item.link,
            'target': '_blank',
            'class': 'thumbnail'
          });

        let $image = $('<img>').attr("src", item.link);

        $link.append($image);
        $bootstrapContainer.append($link).appendTo($results);

      });
    });
}

function eraseResults() {
  imageIndex = 1;
  $results.html('');
}