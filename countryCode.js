var request = require("request");

var CountryName=process.argv[2];
var options = {
    method: 'GET',
    url: 'https://restcountries-v1.p.rapidapi.com/name/'+ CountryName,
    headers: {
        "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
        "x-rapidapi-key": "e616404757msha2b9063c91e91fap1dd407jsne828538cfe17"
    }
  };

request(options, function (error, response, body) {
    if (error) throw new Error(error);
    var obj=JSON.parse(response.body);
    console.log(obj);
	var results=[];
    var searchField = "name";
    var searchVal = CountryName;
        for (var i=0 ; i < obj.length ; i++)
        {
            if (obj[i][searchField] == searchVal) {
                results.push([obj[i].name],[obj[i].numericCode],obj[i].currencies);
            }
        }
        console.log(results);
});
