var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

mongoose.connect( process.env.MONGOLAB_URI || 'mongodb://localhost/test' );

var poemSchema = mongoose.Schema({
    title: String,
    text: String,
    name: String,
    upvotes: Number
});

var Poem = mongoose.model('Poem', poemSchema);

router.get('/home', function(req,res,next){

    Poem.find(function(err, poems){
        res.status(200).send(poems);
    });
});

router.post('/home', function(req,res,next){

    var poem = new Poem({
        title: req.body.title,
        text: req.body.text,
        name: req.body.name,
        upvotes: req.body.upvotes
    });

    poem.save();

    res.status(200).send('done');
});

router.post('/home/upvote/:id', function(req,res,next){
    var poemId = req.params.id;
    Poem.update({_id: poemId}, {$inc: {upvotes:1}});

    Poem.find(function(err, poems){
        res.status(200).send(poems);
    });
});

module.exports = router;
