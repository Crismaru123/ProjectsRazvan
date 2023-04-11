var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
  params: {count: '5', wordLength: '5'},
  headers: {
    'x-rapidapi-host': 'random-words5.p.rapidapi.com',
    'x-rapidapi-key': '673ea064c7mshadfb8e12a69a4edp10d295jsn57294e40a9ec'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
