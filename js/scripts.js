var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
  	var countryName = $('#country-name').val();
  	if(!countryName.length) countryName = 'Poland';

	$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}

function showCountriesList(resp) {
	countriesList.empty();
	var allCountries = "";

  	resp.forEach(function(item) {
  		allCountries += '<div class="newcountry">' +
  		 	'<div class="row">' +
  		 	'<div class="col-md-12 bg-primary"><h3>' + item.name + '</h3></div></div>' +
  		 	'<div class="row">' +
  		 	'<div class="col-md-4">Capital</div><div class="col-md-8">' + item.capital + '</div></div>' +
  		 	'<div class="row">' +
  	  	'<div class="col-md-4">Region</div><div class="col-md-8">' + item.region + '</div></div>' +
  		 	'<div class="row">' +
  		 	'<div class="col-md-4">Currency</div><div class="col-md-8">' + item.currencies + '</div></div>' +
  		 	'</div>';



        /*  ======== marna próba użycia jQuery =============
  		var $allCountries = $('<div>').addClass('all');
      var $newcountry = $('<div>').addClass('newcountry');
      var $row = $('<div>').addClass('row');
      var $divName = $('<div>').addClass('col-md-12');
      var $h3Name = $('<h3>').text(item.name);

      $allCountries.append($newcountry).append($row).append($divName).append($h3Name);
      return $allCountries;*/
        //$('<li>').text(item.name + item.capital + item.region + item.demonym + item.currencies).appendTo(countriesList);
  	});

  	$(allCountries).appendTo(countriesList);
}