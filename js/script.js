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

function showCountriesList(resp) 
{
	countriesList.empty();
}

function showCountriesList(resp) 
{
  	countriesList.empty();
	resp.forEach(function(item) 
	{
   		resp.forEach(function(item)
		{
			var countryCode = item.alpha2Code;
			$('#myImage').attr('src', "http://cristiroma.github.io/countries/data/flags/" + countryCode + "-128.png");
			$('#myImage').css("display", "block");
			
			$('<li>').text(item.name).appendTo(countriesList);
			$('<li>').text(item.capital).appendTo(countriesList);
			$('<li>').text(item.region).appendTo(countriesList);
			$('<li>').text(item.population).appendTo(countriesList);
		});
	});
}
