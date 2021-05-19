var express = require('express');
var router = express.Router();
var rickAndMorty = require('rickmortyapi');

/* GET rickAndMorty listing. 
GET http://localhost:3000/characters
*/
router.get('/:page', function(req, res, next) {
  getCharacterById(req.params.page)
  .then(r => {
    console.log(r);
    res.send(JSON.stringify(r));
  })
  .catch(error => {
    console.error(error);
    res.send("error", error);
  });
});

async function getCharacterById(page) {
  return await rickAndMorty.getCharacter(parseInt(page));
}

module.exports = router;
