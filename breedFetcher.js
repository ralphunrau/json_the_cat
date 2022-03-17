const request = require('request');
const args = process.argv.slice(2);
const file = `https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`;

request(file, (error, response, body) => {
  if (error) console.log(error);
  else if (response) {
    console.log('Response Code:', response);
  }
  let data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log('This breed does not exist.');
  } else {
    console.log(data[0].description);
  }
});