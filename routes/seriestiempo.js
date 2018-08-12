const express = require('express');


module.exports=function(app){
    app.get('/seriestiempo', (req, res, next)=>{
        res.render('pages/seriestiempo');
    });

    app.get('/general/john', (req, res, next)=>{
        res.render('pages/general', {title: 'John Mendoza '});
    });
};

