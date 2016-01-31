var express = require('express');
var router = express.Router();

router.get('/home', function(req,res,next){
    res.status(200).send(JSON.stringify(
        [
            {title:"test", text: "this is some text", name: "jimmy john"},
            {title:"test", text: "this is some text", name: "jimmy john"},
            {title:"test", text: "this is some text", name: "jimmy john"}
        ]
    ));
});

router.post('/home', function(req,res,next){
  res.status(200).send(req.body);
});

module.exports = router;
