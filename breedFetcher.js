const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (body === '[]') error = 'That cat name does not exist';

    if (error) {
      callback(error, null);
    } else if (body) {
      const bodyObj = JSON.parse(body);
      callback(null, bodyObj[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };