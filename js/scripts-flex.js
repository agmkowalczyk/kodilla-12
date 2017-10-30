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

  var allCountriesFlex = "";

  	resp.forEach(function(item) {

    allCountriesFlex += '<div>' +
        '<h3>' + item.name + '</h3>' +
        '<div class="flex-container">' +
        '<div>Capital</div><div>' + item.capital + '</div>' +
        '<div>Region</div><div>' + item.region + '</div>' +
        '<div>Currency</div><div>' + item.currencies + '</div>' +
        '</div>';
  	});

  	$(allCountriesFlex).appendTo(countriesList);
}