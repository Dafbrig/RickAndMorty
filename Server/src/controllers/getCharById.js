const axios = require('axios');

const getCharById = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
      const {
        id,
        name,
        gender,
        species,
        origin: { name: origin },
        image,
        status,
      } = data;

      let character = {
        id,
        name,
        gender,
        species,
        origin,
        image,
        status,
      };

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(character));
    })
    .catch((error) => {
      res.writeHead(500, { 'Content-Type': 'text/plain' });

      res.end(error.message);
    });
};

module.exports = getCharById;

/* 
promesa()
.then(sucessHandler, errorHandler);
.catch(errorHandler);
*/

/* 
promesa(API)
.then(response => response.data)
.then(data => ...)
.catch(error)


*/
